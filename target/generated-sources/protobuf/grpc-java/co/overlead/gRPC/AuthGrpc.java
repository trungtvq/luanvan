package co.overlead.gRPC;

import static io.grpc.MethodDescriptor.generateFullMethodName;
import static io.grpc.stub.ClientCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ClientCalls.asyncClientStreamingCall;
import static io.grpc.stub.ClientCalls.asyncServerStreamingCall;
import static io.grpc.stub.ClientCalls.asyncUnaryCall;
import static io.grpc.stub.ClientCalls.blockingServerStreamingCall;
import static io.grpc.stub.ClientCalls.blockingUnaryCall;
import static io.grpc.stub.ClientCalls.futureUnaryCall;
import static io.grpc.stub.ServerCalls.asyncBidiStreamingCall;
import static io.grpc.stub.ServerCalls.asyncClientStreamingCall;
import static io.grpc.stub.ServerCalls.asyncServerStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnaryCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedStreamingCall;
import static io.grpc.stub.ServerCalls.asyncUnimplementedUnaryCall;

/**
 */
@javax.annotation.Generated(
    value = "by gRPC proto compiler (version 1.20.0)",
    comments = "Source: auth.proto")
public final class AuthGrpc {

  private AuthGrpc() {}

  public static final String SERVICE_NAME = "Auth.Auth";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SignInReq,
      co.overlead.gRPC.SignInRes> getSignInMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignIn",
      requestType = co.overlead.gRPC.SignInReq.class,
      responseType = co.overlead.gRPC.SignInRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SignInReq,
      co.overlead.gRPC.SignInRes> getSignInMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SignInReq, co.overlead.gRPC.SignInRes> getSignInMethod;
    if ((getSignInMethod = AuthGrpc.getSignInMethod) == null) {
      synchronized (AuthGrpc.class) {
        if ((getSignInMethod = AuthGrpc.getSignInMethod) == null) {
          AuthGrpc.getSignInMethod = getSignInMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SignInReq, co.overlead.gRPC.SignInRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "Auth.Auth", "SignIn"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SignInReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SignInRes.getDefaultInstance()))
                  .setSchemaDescriptor(new AuthMethodDescriptorSupplier("SignIn"))
                  .build();
          }
        }
     }
     return getSignInMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SignUpReq,
      co.overlead.gRPC.SignInRes> getSignUpMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SignUp",
      requestType = co.overlead.gRPC.SignUpReq.class,
      responseType = co.overlead.gRPC.SignInRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SignUpReq,
      co.overlead.gRPC.SignInRes> getSignUpMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SignUpReq, co.overlead.gRPC.SignInRes> getSignUpMethod;
    if ((getSignUpMethod = AuthGrpc.getSignUpMethod) == null) {
      synchronized (AuthGrpc.class) {
        if ((getSignUpMethod = AuthGrpc.getSignUpMethod) == null) {
          AuthGrpc.getSignUpMethod = getSignUpMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SignUpReq, co.overlead.gRPC.SignInRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "Auth.Auth", "SignUp"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SignUpReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SignInRes.getDefaultInstance()))
                  .setSchemaDescriptor(new AuthMethodDescriptorSupplier("SignUp"))
                  .build();
          }
        }
     }
     return getSignUpMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.ResetReq,
      co.overlead.gRPC.ResetRes> getResetPasswordMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ResetPassword",
      requestType = co.overlead.gRPC.ResetReq.class,
      responseType = co.overlead.gRPC.ResetRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.ResetReq,
      co.overlead.gRPC.ResetRes> getResetPasswordMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.ResetReq, co.overlead.gRPC.ResetRes> getResetPasswordMethod;
    if ((getResetPasswordMethod = AuthGrpc.getResetPasswordMethod) == null) {
      synchronized (AuthGrpc.class) {
        if ((getResetPasswordMethod = AuthGrpc.getResetPasswordMethod) == null) {
          AuthGrpc.getResetPasswordMethod = getResetPasswordMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.ResetReq, co.overlead.gRPC.ResetRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "Auth.Auth", "ResetPassword"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ResetReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ResetRes.getDefaultInstance()))
                  .setSchemaDescriptor(new AuthMethodDescriptorSupplier("ResetPassword"))
                  .build();
          }
        }
     }
     return getResetPasswordMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.ResetPasswordFinalStepReq,
      co.overlead.gRPC.ResetPasswordFinalStepRes> getResetPasswordFinalStepMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ResetPasswordFinalStep",
      requestType = co.overlead.gRPC.ResetPasswordFinalStepReq.class,
      responseType = co.overlead.gRPC.ResetPasswordFinalStepRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.ResetPasswordFinalStepReq,
      co.overlead.gRPC.ResetPasswordFinalStepRes> getResetPasswordFinalStepMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.ResetPasswordFinalStepReq, co.overlead.gRPC.ResetPasswordFinalStepRes> getResetPasswordFinalStepMethod;
    if ((getResetPasswordFinalStepMethod = AuthGrpc.getResetPasswordFinalStepMethod) == null) {
      synchronized (AuthGrpc.class) {
        if ((getResetPasswordFinalStepMethod = AuthGrpc.getResetPasswordFinalStepMethod) == null) {
          AuthGrpc.getResetPasswordFinalStepMethod = getResetPasswordFinalStepMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.ResetPasswordFinalStepReq, co.overlead.gRPC.ResetPasswordFinalStepRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "Auth.Auth", "ResetPasswordFinalStep"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ResetPasswordFinalStepReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ResetPasswordFinalStepRes.getDefaultInstance()))
                  .setSchemaDescriptor(new AuthMethodDescriptorSupplier("ResetPasswordFinalStep"))
                  .build();
          }
        }
     }
     return getResetPasswordFinalStepMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static AuthStub newStub(io.grpc.Channel channel) {
    return new AuthStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static AuthBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new AuthBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static AuthFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new AuthFutureStub(channel);
  }

  /**
   */
  public static abstract class AuthImplBase implements io.grpc.BindableService {

    /**
     */
    public void signIn(co.overlead.gRPC.SignInReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SignInRes> responseObserver) {
      asyncUnimplementedUnaryCall(getSignInMethod(), responseObserver);
    }

    /**
     */
    public void signUp(co.overlead.gRPC.SignUpReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SignInRes> responseObserver) {
      asyncUnimplementedUnaryCall(getSignUpMethod(), responseObserver);
    }

    /**
     */
    public void resetPassword(co.overlead.gRPC.ResetReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ResetRes> responseObserver) {
      asyncUnimplementedUnaryCall(getResetPasswordMethod(), responseObserver);
    }

    /**
     */
    public void resetPasswordFinalStep(co.overlead.gRPC.ResetPasswordFinalStepReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ResetPasswordFinalStepRes> responseObserver) {
      asyncUnimplementedUnaryCall(getResetPasswordFinalStepMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getSignInMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SignInReq,
                co.overlead.gRPC.SignInRes>(
                  this, METHODID_SIGN_IN)))
          .addMethod(
            getSignUpMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SignUpReq,
                co.overlead.gRPC.SignInRes>(
                  this, METHODID_SIGN_UP)))
          .addMethod(
            getResetPasswordMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.ResetReq,
                co.overlead.gRPC.ResetRes>(
                  this, METHODID_RESET_PASSWORD)))
          .addMethod(
            getResetPasswordFinalStepMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.ResetPasswordFinalStepReq,
                co.overlead.gRPC.ResetPasswordFinalStepRes>(
                  this, METHODID_RESET_PASSWORD_FINAL_STEP)))
          .build();
    }
  }

  /**
   */
  public static final class AuthStub extends io.grpc.stub.AbstractStub<AuthStub> {
    private AuthStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AuthStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AuthStub(channel, callOptions);
    }

    /**
     */
    public void signIn(co.overlead.gRPC.SignInReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SignInRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSignInMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void signUp(co.overlead.gRPC.SignUpReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SignInRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSignUpMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void resetPassword(co.overlead.gRPC.ResetReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ResetRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getResetPasswordMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void resetPasswordFinalStep(co.overlead.gRPC.ResetPasswordFinalStepReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ResetPasswordFinalStepRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getResetPasswordFinalStepMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class AuthBlockingStub extends io.grpc.stub.AbstractStub<AuthBlockingStub> {
    private AuthBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AuthBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AuthBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.SignInRes signIn(co.overlead.gRPC.SignInReq request) {
      return blockingUnaryCall(
          getChannel(), getSignInMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SignInRes signUp(co.overlead.gRPC.SignUpReq request) {
      return blockingUnaryCall(
          getChannel(), getSignUpMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ResetRes resetPassword(co.overlead.gRPC.ResetReq request) {
      return blockingUnaryCall(
          getChannel(), getResetPasswordMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ResetPasswordFinalStepRes resetPasswordFinalStep(co.overlead.gRPC.ResetPasswordFinalStepReq request) {
      return blockingUnaryCall(
          getChannel(), getResetPasswordFinalStepMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class AuthFutureStub extends io.grpc.stub.AbstractStub<AuthFutureStub> {
    private AuthFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private AuthFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected AuthFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new AuthFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SignInRes> signIn(
        co.overlead.gRPC.SignInReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSignInMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SignInRes> signUp(
        co.overlead.gRPC.SignUpReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSignUpMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ResetRes> resetPassword(
        co.overlead.gRPC.ResetReq request) {
      return futureUnaryCall(
          getChannel().newCall(getResetPasswordMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ResetPasswordFinalStepRes> resetPasswordFinalStep(
        co.overlead.gRPC.ResetPasswordFinalStepReq request) {
      return futureUnaryCall(
          getChannel().newCall(getResetPasswordFinalStepMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_SIGN_IN = 0;
  private static final int METHODID_SIGN_UP = 1;
  private static final int METHODID_RESET_PASSWORD = 2;
  private static final int METHODID_RESET_PASSWORD_FINAL_STEP = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final AuthImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(AuthImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_SIGN_IN:
          serviceImpl.signIn((co.overlead.gRPC.SignInReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SignInRes>) responseObserver);
          break;
        case METHODID_SIGN_UP:
          serviceImpl.signUp((co.overlead.gRPC.SignUpReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SignInRes>) responseObserver);
          break;
        case METHODID_RESET_PASSWORD:
          serviceImpl.resetPassword((co.overlead.gRPC.ResetReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ResetRes>) responseObserver);
          break;
        case METHODID_RESET_PASSWORD_FINAL_STEP:
          serviceImpl.resetPasswordFinalStep((co.overlead.gRPC.ResetPasswordFinalStepReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ResetPasswordFinalStepRes>) responseObserver);
          break;
        default:
          throw new AssertionError();
      }
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public io.grpc.stub.StreamObserver<Req> invoke(
        io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        default:
          throw new AssertionError();
      }
    }
  }

  private static abstract class AuthBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    AuthBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.auth.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Auth");
    }
  }

  private static final class AuthFileDescriptorSupplier
      extends AuthBaseDescriptorSupplier {
    AuthFileDescriptorSupplier() {}
  }

  private static final class AuthMethodDescriptorSupplier
      extends AuthBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    AuthMethodDescriptorSupplier(String methodName) {
      this.methodName = methodName;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.MethodDescriptor getMethodDescriptor() {
      return getServiceDescriptor().findMethodByName(methodName);
    }
  }

  private static volatile io.grpc.ServiceDescriptor serviceDescriptor;

  public static io.grpc.ServiceDescriptor getServiceDescriptor() {
    io.grpc.ServiceDescriptor result = serviceDescriptor;
    if (result == null) {
      synchronized (AuthGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new AuthFileDescriptorSupplier())
              .addMethod(getSignInMethod())
              .addMethod(getSignUpMethod())
              .addMethod(getResetPasswordMethod())
              .addMethod(getResetPasswordFinalStepMethod())
              .build();
        }
      }
    }
    return result;
  }
}
