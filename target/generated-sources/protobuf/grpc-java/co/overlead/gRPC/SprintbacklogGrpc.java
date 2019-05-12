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
public final class SprintBacklogGrpc {

  private SprintBacklogGrpc() {}

  public static final String SERVICE_NAME = "sprintbacklog.SprintBacklog";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintBacklogReq,
      co.overlead.gRPC.SprintBacklogRes> getDeleteSprintBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteSprintBacklog",
      requestType = co.overlead.gRPC.DeleteSprintBacklogReq.class,
      responseType = co.overlead.gRPC.SprintBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintBacklogReq,
      co.overlead.gRPC.SprintBacklogRes> getDeleteSprintBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintBacklogReq, co.overlead.gRPC.SprintBacklogRes> getDeleteSprintBacklogMethod;
    if ((getDeleteSprintBacklogMethod = SprintBacklogGrpc.getDeleteSprintBacklogMethod) == null) {
      synchronized (SprintBacklogGrpc.class) {
        if ((getDeleteSprintBacklogMethod = SprintBacklogGrpc.getDeleteSprintBacklogMethod) == null) {
          SprintBacklogGrpc.getDeleteSprintBacklogMethod = getDeleteSprintBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteSprintBacklogReq, co.overlead.gRPC.SprintBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "sprintbacklog.SprintBacklog", "deleteSprintBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteSprintBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SprintBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintBacklogMethodDescriptorSupplier("deleteSprintBacklog"))
                  .build();
          }
        }
     }
     return getDeleteSprintBacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintBacklogReq,
      co.overlead.gRPC.GetAllSprintBacklogRes> getGetAllSprintBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllSprintBacklog",
      requestType = co.overlead.gRPC.GetAllSprintBacklogReq.class,
      responseType = co.overlead.gRPC.GetAllSprintBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintBacklogReq,
      co.overlead.gRPC.GetAllSprintBacklogRes> getGetAllSprintBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintBacklogReq, co.overlead.gRPC.GetAllSprintBacklogRes> getGetAllSprintBacklogMethod;
    if ((getGetAllSprintBacklogMethod = SprintBacklogGrpc.getGetAllSprintBacklogMethod) == null) {
      synchronized (SprintBacklogGrpc.class) {
        if ((getGetAllSprintBacklogMethod = SprintBacklogGrpc.getGetAllSprintBacklogMethod) == null) {
          SprintBacklogGrpc.getGetAllSprintBacklogMethod = getGetAllSprintBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllSprintBacklogReq, co.overlead.gRPC.GetAllSprintBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "sprintbacklog.SprintBacklog", "getAllSprintBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllSprintBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllSprintBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintBacklogMethodDescriptorSupplier("getAllSprintBacklog"))
                  .build();
          }
        }
     }
     return getGetAllSprintBacklogMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static SprintBacklogStub newStub(io.grpc.Channel channel) {
    return new SprintBacklogStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static SprintBacklogBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new SprintBacklogBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static SprintBacklogFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new SprintBacklogFutureStub(channel);
  }

  /**
   */
  public static abstract class SprintBacklogImplBase implements io.grpc.BindableService {

    /**
     */
    public void deleteSprintBacklog(co.overlead.gRPC.DeleteSprintBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteSprintBacklogMethod(), responseObserver);
    }

    /**
     */
    public void getAllSprintBacklog(co.overlead.gRPC.GetAllSprintBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllSprintBacklogMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getDeleteSprintBacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteSprintBacklogReq,
                co.overlead.gRPC.SprintBacklogRes>(
                  this, METHODID_DELETE_SPRINT_BACKLOG)))
          .addMethod(
            getGetAllSprintBacklogMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllSprintBacklogReq,
                co.overlead.gRPC.GetAllSprintBacklogRes>(
                  this, METHODID_GET_ALL_SPRINT_BACKLOG)))
          .build();
    }
  }

  /**
   */
  public static final class SprintBacklogStub extends io.grpc.stub.AbstractStub<SprintBacklogStub> {
    private SprintBacklogStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintBacklogStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintBacklogStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintBacklogStub(channel, callOptions);
    }

    /**
     */
    public void deleteSprintBacklog(co.overlead.gRPC.DeleteSprintBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintBacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteSprintBacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllSprintBacklog(co.overlead.gRPC.GetAllSprintBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintBacklogRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllSprintBacklogMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class SprintBacklogBlockingStub extends io.grpc.stub.AbstractStub<SprintBacklogBlockingStub> {
    private SprintBacklogBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintBacklogBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintBacklogBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintBacklogBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.SprintBacklogRes deleteSprintBacklog(co.overlead.gRPC.DeleteSprintBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteSprintBacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetAllSprintBacklogRes> getAllSprintBacklog(
        co.overlead.gRPC.GetAllSprintBacklogReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllSprintBacklogMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class SprintBacklogFutureStub extends io.grpc.stub.AbstractStub<SprintBacklogFutureStub> {
    private SprintBacklogFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintBacklogFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintBacklogFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintBacklogFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SprintBacklogRes> deleteSprintBacklog(
        co.overlead.gRPC.DeleteSprintBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteSprintBacklogMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_DELETE_SPRINT_BACKLOG = 0;
  private static final int METHODID_GET_ALL_SPRINT_BACKLOG = 1;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final SprintBacklogImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(SprintBacklogImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_DELETE_SPRINT_BACKLOG:
          serviceImpl.deleteSprintBacklog((co.overlead.gRPC.DeleteSprintBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintBacklogRes>) responseObserver);
          break;
        case METHODID_GET_ALL_SPRINT_BACKLOG:
          serviceImpl.getAllSprintBacklog((co.overlead.gRPC.GetAllSprintBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintBacklogRes>) responseObserver);
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

  private static abstract class SprintBacklogBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    SprintBacklogBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.sprintbacklog.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("SprintBacklog");
    }
  }

  private static final class SprintBacklogFileDescriptorSupplier
      extends SprintBacklogBaseDescriptorSupplier {
    SprintBacklogFileDescriptorSupplier() {}
  }

  private static final class SprintBacklogMethodDescriptorSupplier
      extends SprintBacklogBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    SprintBacklogMethodDescriptorSupplier(String methodName) {
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
      synchronized (SprintBacklogGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new SprintBacklogFileDescriptorSupplier())
              .addMethod(getDeleteSprintBacklogMethod())
              .addMethod(getGetAllSprintBacklogMethod())
              .build();
        }
      }
    }
    return result;
  }
}
