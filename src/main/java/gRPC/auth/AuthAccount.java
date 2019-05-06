package gRPC.auth;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.Document;
import service.email.EmailService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class AuthAccount {

    public  static class AuthImpl extends AuthGrpc.AuthImplBase{
        public boolean isSignIn(){
            return false;
        }
        @Override
        public void signIn(SignInReq request, StreamObserver<SignInRes> responseObserver) {

        }



        @Override
        public void signUp(SignUpReq request, StreamObserver<SignInRes> responseObserver) {
            if (isSignIn()){
                SignInRes reply=SignInRes.newBuilder().setError("TRUE").setStatus("SIGNINED").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else{
                //TODO: CACHE
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("auth");
                List<Document> foundDocument = coll.find(new Document("username",request.getUsername())).into(new ArrayList<Document>());
                if (foundDocument.size()!=0){
                    System.out.println("EXIST_USERNAME_NAME");
                    SignInRes reply=SignInRes.newBuilder().setStatus("EXIST_USERNAME_NAME").setError("TRUE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                } else{
                    Document document = new Document("username", request.getUsername())
                            .append("name", request.getName())
                            .append("password", request.getPassword());
                    coll.insertOne(document);

                    foundDocument = coll.find(new Document("username",request.getUsername())).into(new ArrayList<Document>());
                    //check size
                    if (foundDocument.size()!=1){
                        System.out.println("After add size >1 or ==0");
                        SignInRes reply=SignInRes.newBuilder().setStatus("WRONG_SIZE").setError("TRUE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    } else {
                        String id= foundDocument.get(0).get("_id").toString();
                        SignInRes reply=SignInRes.newBuilder().setStatus("SUCCESS").setId(id).setError("FALSE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    }
                }
            }
        }

        @Override
        public void resetPassword(ResetReq request, StreamObserver<ResetRes> responseObserver) {
            if (isSignIn()){
                ResetRes reply=ResetRes.newBuilder().setError("TRUE").setStatus("SIGNINED").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else{
                //TODO: CACHE
                long random=Math.round(Math.random()*9999);
                try {
                    EmailService.sendText("no-reply@overlead.co",request.getUsername(),"RESET PASSWORD","Your code is: "+random);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }


        @Override
        public void resetPasswordFinalStep(ResetPasswordFinalStepReq request, StreamObserver<SignInRes> responseObserver) {
            if (isSignIn()){
                SignInRes reply=SignInRes.newBuilder().setError("TRUE").setStatus("SIGNINED").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else{
                //TODO: CACHE

            }
        }


    }

}
