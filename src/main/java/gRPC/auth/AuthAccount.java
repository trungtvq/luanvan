package gRPC.auth;

import co.overlead.gRPC.*;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import database.Redis;
import io.grpc.stub.StreamObserver;
import org.apache.commons.codec.binary.Base64;
import org.bson.Document;
import service.email.EmailService;
import sun.misc.IOUtils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class AuthAccount {

    public  static class AuthImpl extends AuthGrpc.AuthImplBase{
        public static final MongoCollection<Document> coll=Mongod.getOverleadConnection().getCollection("auth");

        private String issuer = "auth0";
        private String passphrase = "secret";
        private String passwordHash="xxx";
        private static int expireTime = 10 * 60 * 1000; //10 minute

        public String generateToken(String username) {

            Date exp = new Date(System.currentTimeMillis() + expireTime);
            String token = null;
            try {
                Algorithm algorithmHS = Algorithm.HMAC256(passphrase);
                token = JWT.create()
                        .withIssuer(issuer)
                        .withExpiresAt(exp)
                        .withClaim("username", username)
                        .withClaim("password", passwordHash)
                        .sign(algorithmHS);
            } catch (IllegalArgumentException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

            return token;
        }

        public DecodedJWT decodeToken(String token) {
            DecodedJWT jwt = null;
            try {
                Algorithm algorithm = Algorithm.HMAC256(passphrase);
                JWTVerifier verifier = JWT.require(algorithm)
                        .withIssuer(issuer)
                        .build();
                jwt = verifier.verify(token);
            } catch (TokenExpiredException e) {
                System.out.println("The Token has expired");
            } catch (SignatureVerificationException e) {
                System.out.println("The Token's Signature resulted invalid when verified using the Algorithm: HmacSHA256");
            } catch (JWTVerificationException e){
                //Invalid signature/claims
                e.printStackTrace();
            }

            return jwt;
        }

        public Document getUserFromDB(String username){
            List<Document> foundDocument = coll.find(new Document("username",username)).into(new ArrayList<>());
            if (foundDocument.size()!=0)
            {
                return foundDocument.get(0);
            }
            else return null;
        }
        public void makeResponseForSignInSuccess(StreamObserver res,String id,String username,String name,String avatar){


            res.onNext(SignInRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setAvatar(avatar).setName(name).setSession(setSession(id)).setId(id).setType("normal").build());
            res.onCompleted();
        }
        public String setSession(String id){
            String session=generateToken(id);
            Redis.LIST_SESSION_SYNC_COMMAND.lpush(id,session);
            return session;
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
        public String getBase64EncodedImage(String imageURL) {

            try {
                java.net.URL url = new java.net.URL(imageURL);
                InputStream is = null;
                is = url.openStream();
                byte[] bytes = org.apache.commons.io.IOUtils.toByteArray(is);
                return Base64.encodeBase64String(bytes);


            } catch (IOException e) {
                e.printStackTrace();
                return "avatarError";
            }
        }
        @Override
        public void signInGoogle(SignInGoogleReq request, StreamObserver<SignInRes> responseObserver) {
            Document user = getUserFromDB(request.getUsername()); //check username is exist

            if (user!=null){ //EXIST USERNAME => LOGIN
                makeResponseForSignInSuccess(responseObserver,user.get("_id").toString(),request.getUsername(),request.getName(),user.get("avatar").toString());
            } else{ //CREATE NEW ACCOUNT
                Document document = new Document("username", request.getUsername())
                        .append("name", request.getName())
                        .append("avatar",request.getAvatar());
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
                System.out.println("resetPassword");
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
