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
    comments = "Source: sprint.proto")
public final class SprintGrpc {

  private SprintGrpc() {}

  public static final String SERVICE_NAME = "sprint.Sprint";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq,
      co.overlead.gRPC.SprintRes> getDeleteSprintMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteSprint",
      requestType = co.overlead.gRPC.DeleteSprintReq.class,
      responseType = co.overlead.gRPC.SprintRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq,
      co.overlead.gRPC.SprintRes> getDeleteSprintMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq, co.overlead.gRPC.SprintRes> getDeleteSprintMethod;
    if ((getDeleteSprintMethod = SprintGrpc.getDeleteSprintMethod) == null) {
      synchronized (SprintGrpc.class) {
        if ((getDeleteSprintMethod = SprintGrpc.getDeleteSprintMethod) == null) {
          SprintGrpc.getDeleteSprintMethod = getDeleteSprintMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteSprintReq, co.overlead.gRPC.SprintRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "sprint.Sprint", "deleteSprint"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteSprintReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SprintRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintMethodDescriptorSupplier("deleteSprint"))
                  .build();
          }
        }
     }
     return getDeleteSprintMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewSprintReq,
      co.overlead.gRPC.SprintRes> getAddNewSprintMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewSprint",
      requestType = co.overlead.gRPC.AddNewSprintReq.class,
      responseType = co.overlead.gRPC.SprintRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewSprintReq,
      co.overlead.gRPC.SprintRes> getAddNewSprintMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewSprintReq, co.overlead.gRPC.SprintRes> getAddNewSprintMethod;
    if ((getAddNewSprintMethod = SprintGrpc.getAddNewSprintMethod) == null) {
      synchronized (SprintGrpc.class) {
        if ((getAddNewSprintMethod = SprintGrpc.getAddNewSprintMethod) == null) {
          SprintGrpc.getAddNewSprintMethod = getAddNewSprintMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewSprintReq, co.overlead.gRPC.SprintRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "sprint.Sprint", "addNewSprint"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewSprintReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SprintRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintMethodDescriptorSupplier("addNewSprint"))
                  .build();
          }
        }
     }
     return getAddNewSprintMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintReq,
      co.overlead.gRPC.GetAllSprintRes> getGetAllSprintMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllSprint",
      requestType = co.overlead.gRPC.GetAllSprintReq.class,
      responseType = co.overlead.gRPC.GetAllSprintRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintReq,
      co.overlead.gRPC.GetAllSprintRes> getGetAllSprintMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllSprintReq, co.overlead.gRPC.GetAllSprintRes> getGetAllSprintMethod;
    if ((getGetAllSprintMethod = SprintGrpc.getGetAllSprintMethod) == null) {
      synchronized (SprintGrpc.class) {
        if ((getGetAllSprintMethod = SprintGrpc.getGetAllSprintMethod) == null) {
          SprintGrpc.getGetAllSprintMethod = getGetAllSprintMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllSprintReq, co.overlead.gRPC.GetAllSprintRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "sprint.Sprint", "getAllSprint"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllSprintReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllSprintRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintMethodDescriptorSupplier("getAllSprint"))
                  .build();
          }
        }
     }
     return getGetAllSprintMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq,
      co.overlead.gRPC.SprintRes> getSetCurrentSprintMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "setCurrentSprint",
      requestType = co.overlead.gRPC.DeleteSprintReq.class,
      responseType = co.overlead.gRPC.SprintRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq,
      co.overlead.gRPC.SprintRes> getSetCurrentSprintMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq, co.overlead.gRPC.SprintRes> getSetCurrentSprintMethod;
    if ((getSetCurrentSprintMethod = SprintGrpc.getSetCurrentSprintMethod) == null) {
      synchronized (SprintGrpc.class) {
        if ((getSetCurrentSprintMethod = SprintGrpc.getSetCurrentSprintMethod) == null) {
          SprintGrpc.getSetCurrentSprintMethod = getSetCurrentSprintMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteSprintReq, co.overlead.gRPC.SprintRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "sprint.Sprint", "setCurrentSprint"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteSprintReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SprintRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintMethodDescriptorSupplier("setCurrentSprint"))
                  .build();
          }
        }
     }
     return getSetCurrentSprintMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq,
      co.overlead.gRPC.GetAllSprintRes> getGetSprintMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getSprint",
      requestType = co.overlead.gRPC.DeleteSprintReq.class,
      responseType = co.overlead.gRPC.GetAllSprintRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq,
      co.overlead.gRPC.GetAllSprintRes> getGetSprintMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteSprintReq, co.overlead.gRPC.GetAllSprintRes> getGetSprintMethod;
    if ((getGetSprintMethod = SprintGrpc.getGetSprintMethod) == null) {
      synchronized (SprintGrpc.class) {
        if ((getGetSprintMethod = SprintGrpc.getGetSprintMethod) == null) {
          SprintGrpc.getGetSprintMethod = getGetSprintMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteSprintReq, co.overlead.gRPC.GetAllSprintRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "sprint.Sprint", "getSprint"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteSprintReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllSprintRes.getDefaultInstance()))
                  .setSchemaDescriptor(new SprintMethodDescriptorSupplier("getSprint"))
                  .build();
          }
        }
     }
     return getGetSprintMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static SprintStub newStub(io.grpc.Channel channel) {
    return new SprintStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static SprintBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new SprintBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static SprintFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new SprintFutureStub(channel);
  }

  /**
   */
  public static abstract class SprintImplBase implements io.grpc.BindableService {

    /**
     */
    public void deleteSprint(co.overlead.gRPC.DeleteSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteSprintMethod(), responseObserver);
    }

    /**
     */
    public void addNewSprint(co.overlead.gRPC.AddNewSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewSprintMethod(), responseObserver);
    }

    /**
     */
    public void getAllSprint(co.overlead.gRPC.GetAllSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllSprintMethod(), responseObserver);
    }

    /**
     */
    public void setCurrentSprint(co.overlead.gRPC.DeleteSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes> responseObserver) {
      asyncUnimplementedUnaryCall(getSetCurrentSprintMethod(), responseObserver);
    }

    /**
     */
    public void getSprint(co.overlead.gRPC.DeleteSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetSprintMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getDeleteSprintMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteSprintReq,
                co.overlead.gRPC.SprintRes>(
                  this, METHODID_DELETE_SPRINT)))
          .addMethod(
            getAddNewSprintMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.AddNewSprintReq,
                co.overlead.gRPC.SprintRes>(
                  this, METHODID_ADD_NEW_SPRINT)))
          .addMethod(
            getGetAllSprintMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllSprintReq,
                co.overlead.gRPC.GetAllSprintRes>(
                  this, METHODID_GET_ALL_SPRINT)))
          .addMethod(
            getSetCurrentSprintMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteSprintReq,
                co.overlead.gRPC.SprintRes>(
                  this, METHODID_SET_CURRENT_SPRINT)))
          .addMethod(
            getGetSprintMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteSprintReq,
                co.overlead.gRPC.GetAllSprintRes>(
                  this, METHODID_GET_SPRINT)))
          .build();
    }
  }

  /**
   */
  public static final class SprintStub extends io.grpc.stub.AbstractStub<SprintStub> {
    private SprintStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintStub(channel, callOptions);
    }

    /**
     */
    public void deleteSprint(co.overlead.gRPC.DeleteSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteSprintMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addNewSprint(co.overlead.gRPC.AddNewSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewSprintMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllSprint(co.overlead.gRPC.GetAllSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllSprintMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void setCurrentSprint(co.overlead.gRPC.DeleteSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSetCurrentSprintMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getSprint(co.overlead.gRPC.DeleteSprintReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getGetSprintMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class SprintBlockingStub extends io.grpc.stub.AbstractStub<SprintBlockingStub> {
    private SprintBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.SprintRes deleteSprint(co.overlead.gRPC.DeleteSprintReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteSprintMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SprintRes addNewSprint(co.overlead.gRPC.AddNewSprintReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewSprintMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetAllSprintRes> getAllSprint(
        co.overlead.gRPC.GetAllSprintReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllSprintMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SprintRes setCurrentSprint(co.overlead.gRPC.DeleteSprintReq request) {
      return blockingUnaryCall(
          getChannel(), getSetCurrentSprintMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.GetAllSprintRes getSprint(co.overlead.gRPC.DeleteSprintReq request) {
      return blockingUnaryCall(
          getChannel(), getGetSprintMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class SprintFutureStub extends io.grpc.stub.AbstractStub<SprintFutureStub> {
    private SprintFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private SprintFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected SprintFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new SprintFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SprintRes> deleteSprint(
        co.overlead.gRPC.DeleteSprintReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteSprintMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SprintRes> addNewSprint(
        co.overlead.gRPC.AddNewSprintReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewSprintMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SprintRes> setCurrentSprint(
        co.overlead.gRPC.DeleteSprintReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSetCurrentSprintMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.GetAllSprintRes> getSprint(
        co.overlead.gRPC.DeleteSprintReq request) {
      return futureUnaryCall(
          getChannel().newCall(getGetSprintMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_DELETE_SPRINT = 0;
  private static final int METHODID_ADD_NEW_SPRINT = 1;
  private static final int METHODID_GET_ALL_SPRINT = 2;
  private static final int METHODID_SET_CURRENT_SPRINT = 3;
  private static final int METHODID_GET_SPRINT = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final SprintImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(SprintImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_DELETE_SPRINT:
          serviceImpl.deleteSprint((co.overlead.gRPC.DeleteSprintReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes>) responseObserver);
          break;
        case METHODID_ADD_NEW_SPRINT:
          serviceImpl.addNewSprint((co.overlead.gRPC.AddNewSprintReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes>) responseObserver);
          break;
        case METHODID_GET_ALL_SPRINT:
          serviceImpl.getAllSprint((co.overlead.gRPC.GetAllSprintReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintRes>) responseObserver);
          break;
        case METHODID_SET_CURRENT_SPRINT:
          serviceImpl.setCurrentSprint((co.overlead.gRPC.DeleteSprintReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SprintRes>) responseObserver);
          break;
        case METHODID_GET_SPRINT:
          serviceImpl.getSprint((co.overlead.gRPC.DeleteSprintReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllSprintRes>) responseObserver);
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

  private static abstract class SprintBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    SprintBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.sprint.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Sprint");
    }
  }

  private static final class SprintFileDescriptorSupplier
      extends SprintBaseDescriptorSupplier {
    SprintFileDescriptorSupplier() {}
  }

  private static final class SprintMethodDescriptorSupplier
      extends SprintBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    SprintMethodDescriptorSupplier(String methodName) {
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
      synchronized (SprintGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new SprintFileDescriptorSupplier())
              .addMethod(getDeleteSprintMethod())
              .addMethod(getAddNewSprintMethod())
              .addMethod(getGetAllSprintMethod())
              .addMethod(getSetCurrentSprintMethod())
              .addMethod(getGetSprintMethod())
              .build();
        }
      }
    }
    return result;
  }
}
