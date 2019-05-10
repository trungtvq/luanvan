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
    comments = "Source: dailyschedule.proto")
public final class DailyscheduleGrpc {

  private DailyscheduleGrpc() {}

  public static final String SERVICE_NAME = "dailyschedule.Dailyschedule";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewDailyScheduleReq,
      co.overlead.gRPC.DailyScheduleRes> getAddNewDailyScheduleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewDailySchedule",
      requestType = co.overlead.gRPC.AddNewDailyScheduleReq.class,
      responseType = co.overlead.gRPC.DailyScheduleRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewDailyScheduleReq,
      co.overlead.gRPC.DailyScheduleRes> getAddNewDailyScheduleMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewDailyScheduleReq, co.overlead.gRPC.DailyScheduleRes> getAddNewDailyScheduleMethod;
    if ((getAddNewDailyScheduleMethod = DailyscheduleGrpc.getAddNewDailyScheduleMethod) == null) {
      synchronized (DailyscheduleGrpc.class) {
        if ((getAddNewDailyScheduleMethod = DailyscheduleGrpc.getAddNewDailyScheduleMethod) == null) {
          DailyscheduleGrpc.getAddNewDailyScheduleMethod = getAddNewDailyScheduleMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewDailyScheduleReq, co.overlead.gRPC.DailyScheduleRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "dailyschedule.Dailyschedule", "addNewDailySchedule"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewDailyScheduleReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DailyScheduleRes.getDefaultInstance()))
                  .setSchemaDescriptor(new DailyscheduleMethodDescriptorSupplier("addNewDailySchedule"))
                  .build();
          }
        }
     }
     return getAddNewDailyScheduleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateDailyScheduleReq,
      co.overlead.gRPC.DailyScheduleRes> getUpdateDailyScheduleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateDailySchedule",
      requestType = co.overlead.gRPC.UpdateDailyScheduleReq.class,
      responseType = co.overlead.gRPC.DailyScheduleRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateDailyScheduleReq,
      co.overlead.gRPC.DailyScheduleRes> getUpdateDailyScheduleMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateDailyScheduleReq, co.overlead.gRPC.DailyScheduleRes> getUpdateDailyScheduleMethod;
    if ((getUpdateDailyScheduleMethod = DailyscheduleGrpc.getUpdateDailyScheduleMethod) == null) {
      synchronized (DailyscheduleGrpc.class) {
        if ((getUpdateDailyScheduleMethod = DailyscheduleGrpc.getUpdateDailyScheduleMethod) == null) {
          DailyscheduleGrpc.getUpdateDailyScheduleMethod = getUpdateDailyScheduleMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateDailyScheduleReq, co.overlead.gRPC.DailyScheduleRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "dailyschedule.Dailyschedule", "updateDailySchedule"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateDailyScheduleReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DailyScheduleRes.getDefaultInstance()))
                  .setSchemaDescriptor(new DailyscheduleMethodDescriptorSupplier("updateDailySchedule"))
                  .build();
          }
        }
     }
     return getUpdateDailyScheduleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteDailyScheduleReq,
      co.overlead.gRPC.DailyScheduleRes> getDeleteDailyScheduleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteDailySchedule",
      requestType = co.overlead.gRPC.DeleteDailyScheduleReq.class,
      responseType = co.overlead.gRPC.DailyScheduleRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteDailyScheduleReq,
      co.overlead.gRPC.DailyScheduleRes> getDeleteDailyScheduleMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteDailyScheduleReq, co.overlead.gRPC.DailyScheduleRes> getDeleteDailyScheduleMethod;
    if ((getDeleteDailyScheduleMethod = DailyscheduleGrpc.getDeleteDailyScheduleMethod) == null) {
      synchronized (DailyscheduleGrpc.class) {
        if ((getDeleteDailyScheduleMethod = DailyscheduleGrpc.getDeleteDailyScheduleMethod) == null) {
          DailyscheduleGrpc.getDeleteDailyScheduleMethod = getDeleteDailyScheduleMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteDailyScheduleReq, co.overlead.gRPC.DailyScheduleRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "dailyschedule.Dailyschedule", "deleteDailySchedule"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteDailyScheduleReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DailyScheduleRes.getDefaultInstance()))
                  .setSchemaDescriptor(new DailyscheduleMethodDescriptorSupplier("deleteDailySchedule"))
                  .build();
          }
        }
     }
     return getDeleteDailyScheduleMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllDailyScheduleReq,
      co.overlead.gRPC.DailyScheduleRes> getGetAllDailyScheduleMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllDailySchedule",
      requestType = co.overlead.gRPC.GetAllDailyScheduleReq.class,
      responseType = co.overlead.gRPC.DailyScheduleRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllDailyScheduleReq,
      co.overlead.gRPC.DailyScheduleRes> getGetAllDailyScheduleMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllDailyScheduleReq, co.overlead.gRPC.DailyScheduleRes> getGetAllDailyScheduleMethod;
    if ((getGetAllDailyScheduleMethod = DailyscheduleGrpc.getGetAllDailyScheduleMethod) == null) {
      synchronized (DailyscheduleGrpc.class) {
        if ((getGetAllDailyScheduleMethod = DailyscheduleGrpc.getGetAllDailyScheduleMethod) == null) {
          DailyscheduleGrpc.getGetAllDailyScheduleMethod = getGetAllDailyScheduleMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllDailyScheduleReq, co.overlead.gRPC.DailyScheduleRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "dailyschedule.Dailyschedule", "getAllDailySchedule"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllDailyScheduleReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DailyScheduleRes.getDefaultInstance()))
                  .setSchemaDescriptor(new DailyscheduleMethodDescriptorSupplier("getAllDailySchedule"))
                  .build();
          }
        }
     }
     return getGetAllDailyScheduleMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static DailyscheduleStub newStub(io.grpc.Channel channel) {
    return new DailyscheduleStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static DailyscheduleBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new DailyscheduleBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static DailyscheduleFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new DailyscheduleFutureStub(channel);
  }

  /**
   */
  public static abstract class DailyscheduleImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewDailySchedule(co.overlead.gRPC.AddNewDailyScheduleReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewDailyScheduleMethod(), responseObserver);
    }

    /**
     */
    public void updateDailySchedule(co.overlead.gRPC.UpdateDailyScheduleReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateDailyScheduleMethod(), responseObserver);
    }

    /**
     */
    public void deleteDailySchedule(co.overlead.gRPC.DeleteDailyScheduleReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteDailyScheduleMethod(), responseObserver);
    }

    /**
     */
    public void getAllDailySchedule(co.overlead.gRPC.GetAllDailyScheduleReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllDailyScheduleMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAddNewDailyScheduleMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.AddNewDailyScheduleReq,
                co.overlead.gRPC.DailyScheduleRes>(
                  this, METHODID_ADD_NEW_DAILY_SCHEDULE)))
          .addMethod(
            getUpdateDailyScheduleMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateDailyScheduleReq,
                co.overlead.gRPC.DailyScheduleRes>(
                  this, METHODID_UPDATE_DAILY_SCHEDULE)))
          .addMethod(
            getDeleteDailyScheduleMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteDailyScheduleReq,
                co.overlead.gRPC.DailyScheduleRes>(
                  this, METHODID_DELETE_DAILY_SCHEDULE)))
          .addMethod(
            getGetAllDailyScheduleMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllDailyScheduleReq,
                co.overlead.gRPC.DailyScheduleRes>(
                  this, METHODID_GET_ALL_DAILY_SCHEDULE)))
          .build();
    }
  }

  /**
   */
  public static final class DailyscheduleStub extends io.grpc.stub.AbstractStub<DailyscheduleStub> {
    private DailyscheduleStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DailyscheduleStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DailyscheduleStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DailyscheduleStub(channel, callOptions);
    }

    /**
     */
    public void addNewDailySchedule(co.overlead.gRPC.AddNewDailyScheduleReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewDailyScheduleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateDailySchedule(co.overlead.gRPC.UpdateDailyScheduleReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateDailyScheduleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteDailySchedule(co.overlead.gRPC.DeleteDailyScheduleReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteDailyScheduleMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllDailySchedule(co.overlead.gRPC.GetAllDailyScheduleReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllDailyScheduleMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class DailyscheduleBlockingStub extends io.grpc.stub.AbstractStub<DailyscheduleBlockingStub> {
    private DailyscheduleBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DailyscheduleBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DailyscheduleBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DailyscheduleBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.DailyScheduleRes addNewDailySchedule(co.overlead.gRPC.AddNewDailyScheduleReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewDailyScheduleMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.DailyScheduleRes updateDailySchedule(co.overlead.gRPC.UpdateDailyScheduleReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateDailyScheduleMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.DailyScheduleRes deleteDailySchedule(co.overlead.gRPC.DeleteDailyScheduleReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteDailyScheduleMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.DailyScheduleRes> getAllDailySchedule(
        co.overlead.gRPC.GetAllDailyScheduleReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllDailyScheduleMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class DailyscheduleFutureStub extends io.grpc.stub.AbstractStub<DailyscheduleFutureStub> {
    private DailyscheduleFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private DailyscheduleFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected DailyscheduleFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new DailyscheduleFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.DailyScheduleRes> addNewDailySchedule(
        co.overlead.gRPC.AddNewDailyScheduleReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewDailyScheduleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.DailyScheduleRes> updateDailySchedule(
        co.overlead.gRPC.UpdateDailyScheduleReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateDailyScheduleMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.DailyScheduleRes> deleteDailySchedule(
        co.overlead.gRPC.DeleteDailyScheduleReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteDailyScheduleMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_DAILY_SCHEDULE = 0;
  private static final int METHODID_UPDATE_DAILY_SCHEDULE = 1;
  private static final int METHODID_DELETE_DAILY_SCHEDULE = 2;
  private static final int METHODID_GET_ALL_DAILY_SCHEDULE = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final DailyscheduleImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(DailyscheduleImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_DAILY_SCHEDULE:
          serviceImpl.addNewDailySchedule((co.overlead.gRPC.AddNewDailyScheduleReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes>) responseObserver);
          break;
        case METHODID_UPDATE_DAILY_SCHEDULE:
          serviceImpl.updateDailySchedule((co.overlead.gRPC.UpdateDailyScheduleReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes>) responseObserver);
          break;
        case METHODID_DELETE_DAILY_SCHEDULE:
          serviceImpl.deleteDailySchedule((co.overlead.gRPC.DeleteDailyScheduleReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes>) responseObserver);
          break;
        case METHODID_GET_ALL_DAILY_SCHEDULE:
          serviceImpl.getAllDailySchedule((co.overlead.gRPC.GetAllDailyScheduleReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.DailyScheduleRes>) responseObserver);
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

  private static abstract class DailyscheduleBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    DailyscheduleBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.dailyschedule.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Dailyschedule");
    }
  }

  private static final class DailyscheduleFileDescriptorSupplier
      extends DailyscheduleBaseDescriptorSupplier {
    DailyscheduleFileDescriptorSupplier() {}
  }

  private static final class DailyscheduleMethodDescriptorSupplier
      extends DailyscheduleBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    DailyscheduleMethodDescriptorSupplier(String methodName) {
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
      synchronized (DailyscheduleGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new DailyscheduleFileDescriptorSupplier())
              .addMethod(getAddNewDailyScheduleMethod())
              .addMethod(getUpdateDailyScheduleMethod())
              .addMethod(getDeleteDailyScheduleMethod())
              .addMethod(getGetAllDailyScheduleMethod())
              .build();
        }
      }
    }
    return result;
  }
}
