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
        public List<Document> getUserFromDB(String username){
            MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("auth");
            List<Document> foundDocument = coll.find(new Document("username",username)).into(new ArrayList<Document>());
            return foundDocument;
        }
        public void makeResponseForSignInSuccess(StreamObserver res,String id){
            String newSession="newSession";
            setSession(id,newSession);
            res.onNext(SignInRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setSession(newSession).setId(id).build());
            res.onCompleted();
        }
        public  void setSession(String id,String session){
            Redis.LIST_SESSION_SYNC_COMMAND.lpush(id,session);
        }
        public static boolean getSession(String id,String session){
            Long length=Redis.LIST_SESSION_SYNC_COMMAND.llen(id);
            List<Long> list=Redis.LIST_SESSION_SYNC_COMMAND.lrange(id,0,length);

            for (int i=0;i<list.size();i++){
                if (list.get(i).toString()==session) return true;
            }
            return false;
        }



        public void makeResponseForSignInFailed(StreamObserver res, String status, String error){
            res.onNext(SignInRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }

        public void makeResponseAfterUpdate(StreamObserver res,String username){
            List<Document> user = getUserFromDB(username);
            //check size after insert
            if (user.size()!=1){
                System.out.println("After add size >1 or ==0");
                makeResponseForSignInFailed(res,"WRONG_SIZE","TRUE");
            } else {
                makeResponseForSignInSuccess(res,user.get(0).get("_id").toString());
            }
        }







        @Override
        public void signUp(SignUpReq request, StreamObserver<SignInRes> responseObserver) {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("auth"); //get connect
                List<Document> user = getUserFromDB(request.getUsername()); //check username is exist
                if (user.size()==1){ //EXIST USERNAME
                    makeResponseForSignInFailed(responseObserver,"EXISTED_USERNAME","TRUE");
                } else{
                    Document document = new Document("username", request.getUsername())
                            .append("name", request.getName())
                            .append("password", request.getPassword());
                    coll.insertOne(document);
                    makeResponseAfterUpdate(responseObserver,request.getUsername());
                }
        }

        @Override
        public void signInGoogle(SignInGoogleReq request, StreamObserver<SignInRes> responseObserver) {
            MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("auth"); //get connect
            List<Document> user = getUserFromDB(request.getUsername()); //check username is exist
            if (user.size()==1){ //EXIST USERNAME => LOGIN
                makeResponseForSignInSuccess(responseObserver,user.get(0).get("_id").toString());
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
            if (getSession(request.getId(),request.getSession())){
                makeResponseForSignInSuccess(responseObserver,request.getId());
            } else{
                makeResponseForSignInFailed(responseObserver,"NOT_EXIST_SESION","TRUE");
            }
        }

        @Override
        public void signIn(SignInReq request, StreamObserver<SignInRes> responseObserver) {
            List<Document> user=getUserFromDB(request.getUsername());
            if (user.size()==1){
                String pa=user.get(0).get("password").toString();
                String pass=request.getPassword();
                if (pa.equals(pass)){
                    makeResponseForSignInSuccess(responseObserver,user.get(0).get("_id").toString());
                }else{
                    System.out.println("WRONG");
                    makeResponseForSignInFailed(responseObserver,"WRONG_PASSWORD","TRUE");
                }
            } else {
                makeResponseForSignInFailed(responseObserver,"NOT_EXIST_USERNAME","TRUE");
            }
        }
        @Override
        public void resetPassword(ResetReq request, StreamObserver<ResetRes> responseObserver) {
                long random=Math.round(Math.random()*99999);
                try {
                    EmailService.sendText("no-reply@overlead.co",request.getUsername(),"RESET PASSWORD","Your code is: "+random+". Expire in 5 minutes");
                    if (Redis.TOKEN_SYNC_COMMAND.get(request.getUsername()).toString()==""){
                        Redis.TOKEN_SYNC_COMMAND.set(request.getUsername(),random);
                        Redis.TOKEN_SYNC_KEY_COMMAND.expire(request.getUsername(),300);
                    };
                    ResetRes reply=ResetRes.newBuilder().setStatus("SUCCESS").setError("FALSE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
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
            MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("auth"); //get connect
            List<Document> user = getUserFromDB(request.getUsername()); //check username is exist
            if (user.size()!=1){ //NOT EXIST USERNAME
                makeResponseForSignInFailed(responseObserver,"NOT_EXIST_USERNAME","TRUE");
            } else{
                String token=Redis.TOKEN_SYNC_COMMAND.get(request.getUsername()).toString();
                if (token!=request.getToken()){
                    makeResponseForSignInFailed(responseObserver,"WRONG_TOKEN","TRUE");
                }else{
                    coll.findOneAndUpdate(new Document("username",request.getUsername()),new Document("password",request.getPassword()));
                    makeResponseForSignInSuccess(responseObserver,user.get(0).get("_id").toString());
                    Redis.TOKEN_SYNC_KEY_COMMAND.del(request.getUsername());
                }
            }
        }
    }

}
