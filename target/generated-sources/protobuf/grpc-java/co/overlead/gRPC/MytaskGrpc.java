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
    comments = "Source: mytask.proto")
public final class MytaskGrpc {

  private MytaskGrpc() {}

  public static final String SERVICE_NAME = "mytask.Mytask";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllMyTaskReq,
      co.overlead.gRPC.GetAllMyTaskRes> getGetAllMyTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllMyTask",
      requestType = co.overlead.gRPC.GetAllMyTaskReq.class,
      responseType = co.overlead.gRPC.GetAllMyTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllMyTaskReq,
      co.overlead.gRPC.GetAllMyTaskRes> getGetAllMyTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllMyTaskReq, co.overlead.gRPC.GetAllMyTaskRes> getGetAllMyTaskMethod;
    if ((getGetAllMyTaskMethod = MytaskGrpc.getGetAllMyTaskMethod) == null) {
      synchronized (MytaskGrpc.class) {
        if ((getGetAllMyTaskMethod = MytaskGrpc.getGetAllMyTaskMethod) == null) {
          MytaskGrpc.getGetAllMyTaskMethod = getGetAllMyTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllMyTaskReq, co.overlead.gRPC.GetAllMyTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "mytask.Mytask", "getAllMyTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllMyTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllMyTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new MytaskMethodDescriptorSupplier("getAllMyTask"))
                  .build();
          }
        }
     }
     return getGetAllMyTaskMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MytaskStub newStub(io.grpc.Channel channel) {
    return new MytaskStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MytaskBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new MytaskBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static MytaskFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new MytaskFutureStub(channel);
  }

  /**
   */
  public static abstract class MytaskImplBase implements io.grpc.BindableService {

    /**
     */
    public void getAllMyTask(co.overlead.gRPC.GetAllMyTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllMyTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllMyTaskMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetAllMyTaskMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllMyTaskReq,
                co.overlead.gRPC.GetAllMyTaskRes>(
                  this, METHODID_GET_ALL_MY_TASK)))
          .build();
    }
  }

  /**
   */
  public static final class MytaskStub extends io.grpc.stub.AbstractStub<MytaskStub> {
    private MytaskStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MytaskStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MytaskStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MytaskStub(channel, callOptions);
    }

    /**
     */
    public void getAllMyTask(co.overlead.gRPC.GetAllMyTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllMyTaskRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllMyTaskMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class MytaskBlockingStub extends io.grpc.stub.AbstractStub<MytaskBlockingStub> {
    private MytaskBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MytaskBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MytaskBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MytaskBlockingStub(channel, callOptions);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetAllMyTaskRes> getAllMyTask(
        co.overlead.gRPC.GetAllMyTaskReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllMyTaskMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class MytaskFutureStub extends io.grpc.stub.AbstractStub<MytaskFutureStub> {
    private MytaskFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MytaskFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MytaskFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MytaskFutureStub(channel, callOptions);
    }
  }

  private static final int METHODID_GET_ALL_MY_TASK = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final MytaskImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(MytaskImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_ALL_MY_TASK:
          serviceImpl.getAllMyTask((co.overlead.gRPC.GetAllMyTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllMyTaskRes>) responseObserver);
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

  private static abstract class MytaskBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    MytaskBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.mytask.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Mytask");
    }
  }

  private static final class MytaskFileDescriptorSupplier
      extends MytaskBaseDescriptorSupplier {
    MytaskFileDescriptorSupplier() {}
  }

  private static final class MytaskMethodDescriptorSupplier
      extends MytaskBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    MytaskMethodDescriptorSupplier(String methodName) {
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
      synchronized (MytaskGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MytaskFileDescriptorSupplier())
              .addMethod(getGetAllMyTaskMethod())
              .build();
        }
      }
    }
    return result;
  }
}
