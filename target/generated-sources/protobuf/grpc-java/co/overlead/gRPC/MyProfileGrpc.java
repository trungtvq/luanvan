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
public final class MyProfileGrpc {

  private MyProfileGrpc() {}

  public static final String SERVICE_NAME = "profile.MyProfile";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.ProfileReq,
      co.overlead.gRPC.ProfileRes> getGetProfileMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getProfile",
      requestType = co.overlead.gRPC.ProfileReq.class,
      responseType = co.overlead.gRPC.ProfileRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.ProfileReq,
      co.overlead.gRPC.ProfileRes> getGetProfileMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.ProfileReq, co.overlead.gRPC.ProfileRes> getGetProfileMethod;
    if ((getGetProfileMethod = MyProfileGrpc.getGetProfileMethod) == null) {
      synchronized (MyProfileGrpc.class) {
        if ((getGetProfileMethod = MyProfileGrpc.getGetProfileMethod) == null) {
          MyProfileGrpc.getGetProfileMethod = getGetProfileMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.ProfileReq, co.overlead.gRPC.ProfileRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "profile.MyProfile", "getProfile"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProfileReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProfileRes.getDefaultInstance()))
                  .setSchemaDescriptor(new MyProfileMethodDescriptorSupplier("getProfile"))
                  .build();
          }
        }
     }
     return getGetProfileMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.ProfileReq,
      co.overlead.gRPC.ProfileRes> getGetProfileSimpleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getProfileSimple",
      requestType = co.overlead.gRPC.ProfileReq.class,
      responseType = co.overlead.gRPC.ProfileRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.ProfileReq,
      co.overlead.gRPC.ProfileRes> getGetProfileSimpleMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.ProfileReq, co.overlead.gRPC.ProfileRes> getGetProfileSimpleMethod;
    if ((getGetProfileSimpleMethod = MyProfileGrpc.getGetProfileSimpleMethod) == null) {
      synchronized (MyProfileGrpc.class) {
        if ((getGetProfileSimpleMethod = MyProfileGrpc.getGetProfileSimpleMethod) == null) {
          MyProfileGrpc.getGetProfileSimpleMethod = getGetProfileSimpleMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.ProfileReq, co.overlead.gRPC.ProfileRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "profile.MyProfile", "getProfileSimple"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProfileReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProfileRes.getDefaultInstance()))
                  .setSchemaDescriptor(new MyProfileMethodDescriptorSupplier("getProfileSimple"))
                  .build();
          }
        }
     }
     return getGetProfileSimpleMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MyProfileStub newStub(io.grpc.Channel channel) {
    return new MyProfileStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MyProfileBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new MyProfileBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static MyProfileFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new MyProfileFutureStub(channel);
  }

  /**
   */
  public static abstract class MyProfileImplBase implements io.grpc.BindableService {

    /**
     */
    public void getProfile(co.overlead.gRPC.ProfileReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetProfileMethod(), responseObserver);
    }

    /**
     */
    public void getProfileSimple(co.overlead.gRPC.ProfileReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetProfileSimpleMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetProfileMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.ProfileReq,
                co.overlead.gRPC.ProfileRes>(
                  this, METHODID_GET_PROFILE)))
          .addMethod(
            getGetProfileSimpleMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.ProfileReq,
                co.overlead.gRPC.ProfileRes>(
                  this, METHODID_GET_PROFILE_SIMPLE)))
          .build();
    }
  }

  /**
   */
  public static final class MyProfileStub extends io.grpc.stub.AbstractStub<MyProfileStub> {
    private MyProfileStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MyProfileStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MyProfileStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MyProfileStub(channel, callOptions);
    }

    /**
     */
    public void getProfile(co.overlead.gRPC.ProfileReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetProfileMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getProfileSimple(co.overlead.gRPC.ProfileReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetProfileSimpleMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class MyProfileBlockingStub extends io.grpc.stub.AbstractStub<MyProfileBlockingStub> {
    private MyProfileBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MyProfileBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MyProfileBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MyProfileBlockingStub(channel, callOptions);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.ProfileRes> getProfile(
        co.overlead.gRPC.ProfileReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetProfileMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ProfileRes getProfileSimple(co.overlead.gRPC.ProfileReq request) {
      return blockingUnaryCall(
          getChannel(), getGetProfileSimpleMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class MyProfileFutureStub extends io.grpc.stub.AbstractStub<MyProfileFutureStub> {
    private MyProfileFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MyProfileFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MyProfileFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MyProfileFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProfileRes> getProfileSimple(
        co.overlead.gRPC.ProfileReq request) {
      return futureUnaryCall(
          getChannel().newCall(getGetProfileSimpleMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_GET_PROFILE = 0;
  private static final int METHODID_GET_PROFILE_SIMPLE = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final MyProfileImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(MyProfileImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_PROFILE:
          serviceImpl.getProfile((co.overlead.gRPC.ProfileReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProfileRes>) responseObserver);
          break;
        case METHODID_GET_PROFILE_SIMPLE:
          serviceImpl.getProfileSimple((co.overlead.gRPC.ProfileReq) request,
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

  private static abstract class MyProfileBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    MyProfileBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.myprofile.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("MyProfile");
    }
  }

  private static final class MyProfileFileDescriptorSupplier
      extends MyProfileBaseDescriptorSupplier {
    MyProfileFileDescriptorSupplier() {}
  }

  private static final class MyProfileMethodDescriptorSupplier
      extends MyProfileBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    MyProfileMethodDescriptorSupplier(String methodName) {
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
      synchronized (MyProfileGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MyProfileFileDescriptorSupplier())
              .addMethod(getGetProfileMethod())
              .addMethod(getGetProfileSimpleMethod())
              .build();
        }
      }
    }
    return result;
  }
}
