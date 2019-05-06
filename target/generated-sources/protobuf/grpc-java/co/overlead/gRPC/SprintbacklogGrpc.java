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
    comments = "Source: sprintbacklog.proto")
public final class SprintbacklogGrpc {

  private SprintbacklogGrpc() {}

  public static final String SERVICE_NAME = "sprintbacklog.Sprintbacklog";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintbacklogReq,
      co.overlead.gRPC.DeleteSprintbacklogRes> getDeleteSprintbacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteSprintbacklog",
      requestType = co.overlead.gRPC.DeleteSprintbacklogReq.class,
      responseType = co.overlead.gRPC.DeleteSprintbacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintbacklogReq,
      co.overlead.gRPC.DeleteSprintbacklogRes> getDeleteSprintbacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintbacklogReq, co.overlead.gRPC.DeleteSprintbacklogRes> getDeleteSprintbacklogMethod;
    if ((getDeleteSprintbacklogMethod = SprintbacklogGrpc.getDeleteSprintbacklogMethod) == null) {
      synchronized (SprintbacklogGrpc.class) {
        if ((getDeleteSprintbacklogMethod = SprintbacklogGrpc.getDeleteSprintbacklogMethod) == null) {
          SprintbacklogGrpc.getDeleteSprintbacklogMethod = getDeleteSprintbacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteSprintbacklogReq, co.overlead.gRPC.DeleteSprintbacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "sprintbacklog.Sprintbacklog", "deleteSprintbacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteSprintbacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteSprintbacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintbacklogMethodDescriptorSupplier("deleteSprintbacklog"))
                  .build();
          }
        }
     }
     return getDeleteSprintbacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintbacklogReq,
      co.overlead.gRPC.GetAllSprintbacklogRes> getGetAllSprintbacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllSprintbacklog",
      requestType = co.overlead.gRPC.GetAllSprintbacklogReq.class,
      responseType = co.overlead.gRPC.GetAllSprintbacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintbacklogReq,
      co.overlead.gRPC.GetAllSprintbacklogRes> getGetAllSprintbacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintbacklogReq, co.overlead.gRPC.GetAllSprintbacklogRes> getGetAllSprintbacklogMethod;
    if ((getGetAllSprintbacklogMethod = SprintbacklogGrpc.getGetAllSprintbacklogMethod) == null) {
      synchronized (SprintbacklogGrpc.class) {
        if ((getGetAllSprintbacklogMethod = SprintbacklogGrpc.getGetAllSprintbacklogMethod) == null) {
          SprintbacklogGrpc.getGetAllSprintbacklogMethod = getGetAllSprintbacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllSprintbacklogReq, co.overlead.gRPC.GetAllSprintbacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "sprintbacklog.Sprintbacklog", "getAllSprintbacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllSprintbacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllSprintbacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintbacklogMethodDescriptorSupplier("getAllSprintbacklog"))
                  .build();
          }
        }
     }
     return getGetAllSprintbacklogMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static SprintbacklogStub newStub(io.grpc.Channel channel) {
    return new SprintbacklogStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static SprintbacklogBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new SprintbacklogBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static SprintbacklogFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new SprintbacklogFutureStub(channel);
  }

  /**
   */
  public static abstract class SprintbacklogImplBase implements io.grpc.BindableService {

    /**
     */
    public void deleteSprintbacklog(co.overlead.gRPC.DeleteSprintbacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteSprintbacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteSprintbacklogMethod(), responseObserver);
    }

    /**
     */
    public void getAllSprintbacklog(co.overlead.gRPC.GetAllSprintbacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintbacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllSprintbacklogMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getDeleteSprintbacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteSprintbacklogReq,
                co.overlead.gRPC.DeleteSprintbacklogRes>(
                  this, METHODID_DELETE_SPRINTBACKLOG)))
          .addMethod(
            getGetAllSprintbacklogMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllSprintbacklogReq,
                co.overlead.gRPC.GetAllSprintbacklogRes>(
                  this, METHODID_GET_ALL_SPRINTBACKLOG)))
          .build();
    }
  }

  /**
   */
  public static final class SprintbacklogStub extends io.grpc.stub.AbstractStub<SprintbacklogStub> {
    private SprintbacklogStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintbacklogStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintbacklogStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintbacklogStub(channel, callOptions);
    }

    /**
     */
    public void deleteSprintbacklog(co.overlead.gRPC.DeleteSprintbacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteSprintbacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteSprintbacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllSprintbacklog(co.overlead.gRPC.GetAllSprintbacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintbacklogRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllSprintbacklogMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class SprintbacklogBlockingStub extends io.grpc.stub.AbstractStub<SprintbacklogBlockingStub> {
    private SprintbacklogBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintbacklogBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintbacklogBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintbacklogBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.DeleteSprintbacklogRes deleteSprintbacklog(co.overlead.gRPC.DeleteSprintbacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteSprintbacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetAllSprintbacklogRes> getAllSprintbacklog(
        co.overlead.gRPC.GetAllSprintbacklogReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllSprintbacklogMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class SprintbacklogFutureStub extends io.grpc.stub.AbstractStub<SprintbacklogFutureStub> {
    private SprintbacklogFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintbacklogFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintbacklogFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintbacklogFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.DeleteSprintbacklogRes> deleteSprintbacklog(
        co.overlead.gRPC.DeleteSprintbacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteSprintbacklogMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_DELETE_SPRINTBACKLOG = 0;
  private static final int METHODID_GET_ALL_SPRINTBACKLOG = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final SprintbacklogImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(SprintbacklogImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_DELETE_SPRINTBACKLOG:
          serviceImpl.deleteSprintbacklog((co.overlead.gRPC.DeleteSprintbacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteSprintbacklogRes>) responseObserver);
          break;
        case METHODID_GET_ALL_SPRINTBACKLOG:
          serviceImpl.getAllSprintbacklog((co.overlead.gRPC.GetAllSprintbacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintbacklogRes>) responseObserver);
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

  private static abstract class SprintbacklogBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    SprintbacklogBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.sprintbacklog.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Sprintbacklog");
    }
  }

  private static final class SprintbacklogFileDescriptorSupplier
      extends SprintbacklogBaseDescriptorSupplier {
    SprintbacklogFileDescriptorSupplier() {}
  }

  private static final class SprintbacklogMethodDescriptorSupplier
      extends SprintbacklogBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    SprintbacklogMethodDescriptorSupplier(String methodName) {
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
      synchronized (SprintbacklogGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new SprintbacklogFileDescriptorSupplier())
              .addMethod(getDeleteSprintbacklogMethod())
              .addMethod(getGetAllSprintbacklogMethod())
              .build();
        }
      }
    }
    return result;
  }
}
