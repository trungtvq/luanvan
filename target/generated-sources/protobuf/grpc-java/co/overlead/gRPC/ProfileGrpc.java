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
    comments = "Source: myprofile.proto")
public final class ProfileGrpc {

  private ProfileGrpc() {}

  public static final String SERVICE_NAME = "profile.Profile";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProfileReq,
      co.overlead.gRPC.ProfileRes> getUpdateProfileMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateProfile",
      requestType = co.overlead.gRPC.UpdateProfileReq.class,
      responseType = co.overlead.gRPC.ProfileRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProfileReq,
      co.overlead.gRPC.ProfileRes> getUpdateProfileMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProfileReq, co.overlead.gRPC.ProfileRes> getUpdateProfileMethod;
    if ((getUpdateProfileMethod = ProfileGrpc.getUpdateProfileMethod) == null) {
      synchronized (ProfileGrpc.class) {
        if ((getUpdateProfileMethod = ProfileGrpc.getUpdateProfileMethod) == null) {
          ProfileGrpc.getUpdateProfileMethod = getUpdateProfileMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateProfileReq, co.overlead.gRPC.ProfileRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "profile.Profile", "updateProfile"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateProfileReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProfileRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProfileMethodDescriptorSupplier("updateProfile"))
                  .build();
          }
        }
     }
     return getUpdateProfileMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetProfileReq,
      co.overlead.gRPC.ProfileRes> getGetProfileMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getProfile",
      requestType = co.overlead.gRPC.GetProfileReq.class,
      responseType = co.overlead.gRPC.ProfileRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetProfileReq,
      co.overlead.gRPC.ProfileRes> getGetProfileMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetProfileReq, co.overlead.gRPC.ProfileRes> getGetProfileMethod;
    if ((getGetProfileMethod = ProfileGrpc.getGetProfileMethod) == null) {
      synchronized (ProfileGrpc.class) {
        if ((getGetProfileMethod = ProfileGrpc.getGetProfileMethod) == null) {
          ProfileGrpc.getGetProfileMethod = getGetProfileMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetProfileReq, co.overlead.gRPC.ProfileRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "profile.Profile", "getProfile"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetProfileReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProfileRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProfileMethodDescriptorSupplier("getProfile"))
                  .build();
          }
        }
     }
     return getGetProfileMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ProfileStub newStub(io.grpc.Channel channel) {
    return new ProfileStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ProfileBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new ProfileBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ProfileFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new ProfileFutureStub(channel);
  }

  /**
   */
  public static abstract class ProfileImplBase implements io.grpc.BindableService {

    /**
     */
    public void updateProfile(co.overlead.gRPC.UpdateProfileReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateProfileMethod(), responseObserver);
    }

    /**
     */
    public void getProfile(co.overlead.gRPC.GetProfileReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetProfileMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getUpdateProfileMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateProfileReq,
                co.overlead.gRPC.ProfileRes>(
                  this, METHODID_UPDATE_PROFILE)))
          .addMethod(
            getGetProfileMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.GetProfileReq,
                co.overlead.gRPC.ProfileRes>(
                  this, METHODID_GET_PROFILE)))
          .build();
    }
  }

  /**
   */
  public static final class ProfileStub extends io.grpc.stub.AbstractStub<ProfileStub> {
    private ProfileStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProfileStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProfileStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProfileStub(channel, callOptions);
    }

    /**
     */
    public void updateProfile(co.overlead.gRPC.UpdateProfileReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateProfileMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getProfile(co.overlead.gRPC.GetProfileReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetProfileMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class ProfileBlockingStub extends io.grpc.stub.AbstractStub<ProfileBlockingStub> {
    private ProfileBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProfileBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProfileBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProfileBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.ProfileRes updateProfile(co.overlead.gRPC.UpdateProfileReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateProfileMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ProfileRes getProfile(co.overlead.gRPC.GetProfileReq request) {
      return blockingUnaryCall(
          getChannel(), getGetProfileMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class ProfileFutureStub extends io.grpc.stub.AbstractStub<ProfileFutureStub> {
    private ProfileFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProfileFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProfileFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProfileFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProfileRes> updateProfile(
        co.overlead.gRPC.UpdateProfileReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateProfileMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProfileRes> getProfile(
        co.overlead.gRPC.GetProfileReq request) {
      return futureUnaryCall(
          getChannel().newCall(getGetProfileMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_UPDATE_PROFILE = 0;
  private static final int METHODID_GET_PROFILE = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ProfileImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ProfileImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_UPDATE_PROFILE:
          serviceImpl.updateProfile((co.overlead.gRPC.UpdateProfileReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes>) responseObserver);
          break;
        case METHODID_GET_PROFILE:
          serviceImpl.getProfile((co.overlead.gRPC.GetProfileReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes>) responseObserver);
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

  private static abstract class ProfileBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ProfileBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.profile.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Profile");
    }
  }

  private static final class ProfileFileDescriptorSupplier
      extends ProfileBaseDescriptorSupplier {
    ProfileFileDescriptorSupplier() {}
  }

  private static final class ProfileMethodDescriptorSupplier
      extends ProfileBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ProfileMethodDescriptorSupplier(String methodName) {
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
      synchronized (ProfileGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ProfileFileDescriptorSupplier())
              .addMethod(getUpdateProfileMethod())
              .addMethod(getGetProfileMethod())
              .build();
        }
      }
    }
    return result;
  }
}
