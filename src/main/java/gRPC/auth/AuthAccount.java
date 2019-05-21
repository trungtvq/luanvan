package gRPC.auth;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import database.Redis;
import io.grpc.stub.StreamObserver;
import org.bson.Document;
import service.email.EmailService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AuthAccount {

    public  static class AuthImpl extends AuthGrpc.AuthImplBase{
        public static final MongoCollection<Document> coll=Mongod.getOverleadConnection().getCollection("auth");
        public Document getUserFromDB(String username){
            List<Document> foundDocument = coll.find(new Document("username",username)).into(new ArrayList<>());
            if (foundDocument.size()!=0)
            {
                return foundDocument.get(0);
            }
            else return null;
        }
        public void makeResponseForSignInSuccess(StreamObserver res,String id,String username,String name,String avatar){
            String newSession="newSession";
            setSession(id,newSession);
            res.onNext(SignInRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setAvatar(avatar).setName(name).setSession(newSession).setId(id).setType("normal").build());
            res.onCompleted();
        }
        public  void setSession(String id,String session){
            Redis.LIST_SESSION_SYNC_COMMAND.lpush(id,session);
        }
        public static boolean getSession(String id,String session){

            Long length=Redis.LIST_SESSION_SYNC_COMMAND.llen(id);
            List<String> list=Redis.LIST_SESSION_SYNC_COMMAND.lrange(id,0,length);

            for (int i=0;i<list.size();i++){
                if (list.get(i).equals(session)) return true;
            }
            return false;
        }



        public void makeResponseForSignInFailed(StreamObserver res, String status, String error){
            res.onNext(SignInRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }

        public void makeResponseAfterUpdate(StreamObserver res,String username){
            Document user = getUserFromDB(username);
            if (user==null){
                makeResponseForSignInFailed(res,"FAIL_DB","TRUE");
            } else {
                makeResponseForSignInSuccess(res,user.get("_id").toString(),user.get("username").toString(),user.get("name").toString(),user.get("avatar").toString());
            }
        }

        @Override
        public void signUp(SignUpReq request, StreamObserver<SignInRes> responseObserver) {
                Document user = getUserFromDB(request.getUsername()); //check username is exist
                if (user!=null){ //EXIST USERNAME
                    makeResponseForSignInFailed(responseObserver,"EXISTED_USERNAME","TRUE");
                } else{
                    Document document = new Document("username", request.getUsername())
                            .append("name", request.getName())
                            .append("password", request.getPassword())
                            .append("avatar","");

                    coll.insertOne(document);
                    makeResponseAfterUpdate(responseObserver,request.getUsername());
                }
        }

        @Override
        public void signInGoogle(SignInGoogleReq request, StreamObserver<SignInRes> responseObserver) {
            Document user = getUserFromDB(request.getUsername()); //check username is exist
            if (user!=null){ //EXIST USERNAME => LOGIN
                makeResponseForSignInSuccess(responseObserver,user.get("_id").toString(),request.getUsername(),request.getName(),request.getAvatar());
            } else{ //CREATE NEW ACCOUNT
                Document document = new Document("username", request.getUsername())
                        .append("name", request.getName())
                        .append("avatar", request.getAvatar());
                coll.insertOne(document);
                makeResponseAfterUpdate(responseObserver,request.getUsername());
            }
        }
        @Override
        public void authSession(AuthSessionReq request, StreamObserver<SignInRes> responseObserver) {
            System.out.println("authSession");

            if (getSession(request.getId(),request.getSession())){
                makeResponseForSignInSuccess(responseObserver,request.getId(),"","","");
            } else{
                makeResponseForSignInFailed(responseObserver,"INVALID_SESSION","TRUE");
            }
        }

        @Override
        public void signIn(SignInReq request, StreamObserver<SignInRes> responseObserver) {
            System.out.println("signIn");
            Document user=getUserFromDB(request.getUsername());
            if (user!=null){
                String pa=user.get("password").toString();
                String pass=request.getPassword();
                if (pa.equals(pass)){
                    System.out.println("signIn success");
                    makeResponseForSignInSuccess(responseObserver,
                            user.get("_id").toString(),
                            user.get("username").toString(),
                            user.get("name").toString(),
                            user.get("avatar").toString());
                }else{
                    makeResponseForSignInFailed(responseObserver,"WRONG_PASSWORD","TRUE");
                }
            } else {
                makeResponseForSignInFailed(responseObserver,"NOT_EXIST_USERNAME","TRUE");
            }
        }
        @Override
        public void resetPassword(ResetReq request, StreamObserver<ResetRes> responseObserver) {

                long random = Math.round (Math.random() * ( 99999 - 10000 )) + 10000;

                try {
                    if (Redis.TOKEN_SYNC_COMMAND.get(request.getUsername())==null){
                        EmailService.sendText("no-reply@overlead.co",request.getUsername(),"RESET PASSWORD","Your code is: "+random+". Expire in 5 minutes");
                        Redis.TOKEN_SYNC_COMMAND.set(request.getUsername(),String.valueOf(random));
                        Redis.TOKEN_SYNC_KEY_COMMAND.expire(request.getUsername(),300);
                        ResetRes reply=ResetRes.newBuilder().setStatus("SUCCESS").setError("FALSE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    }else {
                        ResetRes reply=ResetRes.newBuilder().setStatus("ALREADY_SENDED").setError("FALSE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    }

                } catch (IOException e) {
                    e.printStackTrace();
                    ResetRes reply=ResetRes.newBuilder().setStatus("FAILED_TO_SEND_MAIL").setError("TRUE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }
        }


        //OK
        @Override
        public void resetPasswordFinalStep(ResetPasswordFinalStepReq request, StreamObserver<SignInRes> responseObserver) {
            System.out.println("resetPasswordFinalStep");
            Document user = getUserFromDB(request.getUsername()); //check username is exist
            if (user==null){ //NOT EXIST USERNAME
                makeResponseForSignInFailed(responseObserver,"NOT_EXIST_USERNAME","TRUE");
            } else{
                Object token=Redis.TOKEN_SYNC_COMMAND.get(request.getUsername());
                if(token!=null){

                    if (!token.equals(request.getToken())){
                        makeResponseForSignInFailed(responseObserver,"WRONG_TOKEN","TRUE");
                    }else{
                        coll.findOneAndUpdate(new Document("username",request.getUsername()),new Document("$set", new Document("password",request.getPassword())));
                        makeResponseForSignInSuccess(responseObserver,
                                user.get("_id").toString(),
                                user.get("username").toString(),
                                user.get("name").toString(),
                                user.get("avatar").toString());
                        Redis.TOKEN_SYNC_KEY_COMMAND.del(request.getUsername());
                    }
                } else{
                    makeResponseForSignInFailed(responseObserver,"NOT_EXIST_TOKEN","TRUE");
                }
            }
        }
   }

}
