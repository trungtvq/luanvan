package gRPC.auth;

import co.overlead.gRPC.*;
import io.grpc.stub.StreamObserver;

public class AuthAccount {

    public  static class AuthImpl extends AuthGrpc.AuthImplBase{
        public boolean isSignIn(){
            return false;
        }
        @Override
        public void signIn(SignInReq request, StreamObserver<SignInRes> responseObserver) {
            if (isSignIn()){
                SignInRes reply=SignInRes.newBuilder().setError("TRUE").setStatus("SIGNINED").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else{
                //TODO: CACHE

            }
        }

        @Override
        public void signUp(SignUpReq request, StreamObserver<SignInRes> responseObserver) {
            if (isSignIn()){
                SignInRes reply=SignInRes.newBuilder().setError("TRUE").setStatus("SIGNINED").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else{
                //TODO: CACHE

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

            }
        }

        @Override
        public void resetPasswordFinalStep(ResetPasswordFinalStepReq request, StreamObserver<ResetPasswordFinalStepRes> responseObserver) {
            if (isSignIn()){
                ResetPasswordFinalStepRes reply=ResetPasswordFinalStepRes.newBuilder().setError("TRUE").setStatus("SIGNINED").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else{
                //TODO: CACHE

            }
        }
    }

}
