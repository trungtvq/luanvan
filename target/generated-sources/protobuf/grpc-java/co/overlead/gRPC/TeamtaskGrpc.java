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
    comments = "Source: teamtask.proto")
public final class TeamTaskGrpc {

  private TeamTaskGrpc() {}

  public static final String SERVICE_NAME = "teamtask.TeamTask";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamTaskReq,
      co.overlead.gRPC.TeamTaskRes> getAddNewTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewTeamTask",
      requestType = co.overlead.gRPC.AddNewTeamTaskReq.class,
      responseType = co.overlead.gRPC.TeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamTaskReq,
      co.overlead.gRPC.TeamTaskRes> getAddNewTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamTaskReq, co.overlead.gRPC.TeamTaskRes> getAddNewTeamTaskMethod;
    if ((getAddNewTeamTaskMethod = TeamTaskGrpc.getAddNewTeamTaskMethod) == null) {
      synchronized (TeamTaskGrpc.class) {
        if ((getAddNewTeamTaskMethod = TeamTaskGrpc.getAddNewTeamTaskMethod) == null) {
          TeamTaskGrpc.getAddNewTeamTaskMethod = getAddNewTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewTeamTaskReq, co.overlead.gRPC.TeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.TeamTask", "addNewTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamTaskMethodDescriptorSupplier("addNewTeamTask"))
                  .build();
          }
        }
     }
     return getAddNewTeamTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamTaskReq,
      co.overlead.gRPC.TeamTaskRes> getUpdateTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateTeamTask",
      requestType = co.overlead.gRPC.UpdateTeamTaskReq.class,
      responseType = co.overlead.gRPC.TeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamTaskReq,
      co.overlead.gRPC.TeamTaskRes> getUpdateTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamTaskReq, co.overlead.gRPC.TeamTaskRes> getUpdateTeamTaskMethod;
    if ((getUpdateTeamTaskMethod = TeamTaskGrpc.getUpdateTeamTaskMethod) == null) {
      synchronized (TeamTaskGrpc.class) {
        if ((getUpdateTeamTaskMethod = TeamTaskGrpc.getUpdateTeamTaskMethod) == null) {
          TeamTaskGrpc.getUpdateTeamTaskMethod = getUpdateTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateTeamTaskReq, co.overlead.gRPC.TeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.TeamTask", "updateTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamTaskMethodDescriptorSupplier("updateTeamTask"))
                  .build();
          }
        }
     }
     return getUpdateTeamTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.RegisterTeamTaskReq,
      co.overlead.gRPC.TeamTaskRes> getRegisterTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "registerTeamTask",
      requestType = co.overlead.gRPC.RegisterTeamTaskReq.class,
      responseType = co.overlead.gRPC.TeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.RegisterTeamTaskReq,
      co.overlead.gRPC.TeamTaskRes> getRegisterTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.RegisterTeamTaskReq, co.overlead.gRPC.TeamTaskRes> getRegisterTeamTaskMethod;
    if ((getRegisterTeamTaskMethod = TeamTaskGrpc.getRegisterTeamTaskMethod) == null) {
      synchronized (TeamTaskGrpc.class) {
        if ((getRegisterTeamTaskMethod = TeamTaskGrpc.getRegisterTeamTaskMethod) == null) {
          TeamTaskGrpc.getRegisterTeamTaskMethod = getRegisterTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.RegisterTeamTaskReq, co.overlead.gRPC.TeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.TeamTask", "registerTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.RegisterTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamTaskMethodDescriptorSupplier("registerTeamTask"))
                  .build();
          }
        }
     }
     return getRegisterTeamTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.CancelTeamTaskReq,
      co.overlead.gRPC.TeamTaskRes> getCancelTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "cancelTeamTask",
      requestType = co.overlead.gRPC.CancelTeamTaskReq.class,
      responseType = co.overlead.gRPC.TeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.CancelTeamTaskReq,
      co.overlead.gRPC.TeamTaskRes> getCancelTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.CancelTeamTaskReq, co.overlead.gRPC.TeamTaskRes> getCancelTeamTaskMethod;
    if ((getCancelTeamTaskMethod = TeamTaskGrpc.getCancelTeamTaskMethod) == null) {
      synchronized (TeamTaskGrpc.class) {
        if ((getCancelTeamTaskMethod = TeamTaskGrpc.getCancelTeamTaskMethod) == null) {
          TeamTaskGrpc.getCancelTeamTaskMethod = getCancelTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.CancelTeamTaskReq, co.overlead.gRPC.TeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.TeamTask", "cancelTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.CancelTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamTaskMethodDescriptorSupplier("cancelTeamTask"))
                  .build();
          }
        }
     }
     return getCancelTeamTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendTeamTaskToMyTaskReq,
      co.overlead.gRPC.TeamTaskRes> getSendTeamTaskToMyTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "sendTeamTaskToMyTask",
      requestType = co.overlead.gRPC.SendTeamTaskToMyTaskReq.class,
      responseType = co.overlead.gRPC.TeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendTeamTaskToMyTaskReq,
      co.overlead.gRPC.TeamTaskRes> getSendTeamTaskToMyTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendTeamTaskToMyTaskReq, co.overlead.gRPC.TeamTaskRes> getSendTeamTaskToMyTaskMethod;
    if ((getSendTeamTaskToMyTaskMethod = TeamTaskGrpc.getSendTeamTaskToMyTaskMethod) == null) {
      synchronized (TeamTaskGrpc.class) {
        if ((getSendTeamTaskToMyTaskMethod = TeamTaskGrpc.getSendTeamTaskToMyTaskMethod) == null) {
          TeamTaskGrpc.getSendTeamTaskToMyTaskMethod = getSendTeamTaskToMyTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendTeamTaskToMyTaskReq, co.overlead.gRPC.TeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.TeamTask", "sendTeamTaskToMyTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendTeamTaskToMyTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamTaskMethodDescriptorSupplier("sendTeamTaskToMyTask"))
                  .build();
          }
        }
     }
     return getSendTeamTaskToMyTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllTeamTaskReq,
      co.overlead.gRPC.GetAllTeamTaskRes> getGetAllTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllTeamTask",
      requestType = co.overlead.gRPC.GetAllTeamTaskReq.class,
      responseType = co.overlead.gRPC.GetAllTeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllTeamTaskReq,
      co.overlead.gRPC.GetAllTeamTaskRes> getGetAllTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllTeamTaskReq, co.overlead.gRPC.GetAllTeamTaskRes> getGetAllTeamTaskMethod;
    if ((getGetAllTeamTaskMethod = TeamTaskGrpc.getGetAllTeamTaskMethod) == null) {
      synchronized (TeamTaskGrpc.class) {
        if ((getGetAllTeamTaskMethod = TeamTaskGrpc.getGetAllTeamTaskMethod) == null) {
          TeamTaskGrpc.getGetAllTeamTaskMethod = getGetAllTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllTeamTaskReq, co.overlead.gRPC.GetAllTeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.TeamTask", "getAllTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllTeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamTaskMethodDescriptorSupplier("getAllTeamTask"))
                  .build();
          }
        }
     }
     return getGetAllTeamTaskMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TeamTaskStub newStub(io.grpc.Channel channel) {
    return new TeamTaskStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TeamTaskBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new TeamTaskBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TeamTaskFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new TeamTaskFutureStub(channel);
  }

  /**
   */
  public static abstract class TeamTaskImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewTeamTask(co.overlead.gRPC.AddNewTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewTeamTaskMethod(), responseObserver);
    }

    /**
     */
    public void updateTeamTask(co.overlead.gRPC.UpdateTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateTeamTaskMethod(), responseObserver);
    }

    /**
     */
    public void registerTeamTask(co.overlead.gRPC.RegisterTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getRegisterTeamTaskMethod(), responseObserver);
    }

    /**
     */
    public void cancelTeamTask(co.overlead.gRPC.CancelTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getCancelTeamTaskMethod(), responseObserver);
    }

    /**
     */
    public void sendTeamTaskToMyTask(co.overlead.gRPC.SendTeamTaskToMyTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getSendTeamTaskToMyTaskMethod(), responseObserver);
    }

    /**
     */
    public void getAllTeamTask(co.overlead.gRPC.GetAllTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllTeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllTeamTaskMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAddNewTeamTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.AddNewTeamTaskReq,
                co.overlead.gRPC.TeamTaskRes>(
                  this, METHODID_ADD_NEW_TEAM_TASK)))
          .addMethod(
            getUpdateTeamTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateTeamTaskReq,
                co.overlead.gRPC.TeamTaskRes>(
                  this, METHODID_UPDATE_TEAM_TASK)))
          .addMethod(
            getRegisterTeamTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.RegisterTeamTaskReq,
                co.overlead.gRPC.TeamTaskRes>(
                  this, METHODID_REGISTER_TEAM_TASK)))
          .addMethod(
            getCancelTeamTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.CancelTeamTaskReq,
                co.overlead.gRPC.TeamTaskRes>(
                  this, METHODID_CANCEL_TEAM_TASK)))
          .addMethod(
            getSendTeamTaskToMyTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendTeamTaskToMyTaskReq,
                co.overlead.gRPC.TeamTaskRes>(
                  this, METHODID_SEND_TEAM_TASK_TO_MY_TASK)))
          .addMethod(
            getGetAllTeamTaskMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllTeamTaskReq,
                co.overlead.gRPC.GetAllTeamTaskRes>(
                  this, METHODID_GET_ALL_TEAM_TASK)))
          .build();
    }
  }

  /**
   */
  public static final class TeamTaskStub extends io.grpc.stub.AbstractStub<TeamTaskStub> {
    private TeamTaskStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamTaskStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamTaskStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamTaskStub(channel, callOptions);
    }

    /**
     */
    public void addNewTeamTask(co.overlead.gRPC.AddNewTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateTeamTask(co.overlead.gRPC.UpdateTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void registerTeamTask(co.overlead.gRPC.RegisterTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRegisterTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void cancelTeamTask(co.overlead.gRPC.CancelTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCancelTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void sendTeamTaskToMyTask(co.overlead.gRPC.SendTeamTaskToMyTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSendTeamTaskToMyTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllTeamTask(co.overlead.gRPC.GetAllTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllTeamTaskRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class TeamTaskBlockingStub extends io.grpc.stub.AbstractStub<TeamTaskBlockingStub> {
    private TeamTaskBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamTaskBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamTaskBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamTaskBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.TeamTaskRes addNewTeamTask(co.overlead.gRPC.AddNewTeamTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewTeamTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamTaskRes updateTeamTask(co.overlead.gRPC.UpdateTeamTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateTeamTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamTaskRes registerTeamTask(co.overlead.gRPC.RegisterTeamTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getRegisterTeamTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamTaskRes cancelTeamTask(co.overlead.gRPC.CancelTeamTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getCancelTeamTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamTaskRes sendTeamTaskToMyTask(co.overlead.gRPC.SendTeamTaskToMyTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getSendTeamTaskToMyTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetAllTeamTaskRes> getAllTeamTask(
        co.overlead.gRPC.GetAllTeamTaskReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllTeamTaskMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class TeamTaskFutureStub extends io.grpc.stub.AbstractStub<TeamTaskFutureStub> {
    private TeamTaskFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamTaskFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamTaskFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamTaskFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamTaskRes> addNewTeamTask(
        co.overlead.gRPC.AddNewTeamTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewTeamTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamTaskRes> updateTeamTask(
        co.overlead.gRPC.UpdateTeamTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateTeamTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamTaskRes> registerTeamTask(
        co.overlead.gRPC.RegisterTeamTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getRegisterTeamTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamTaskRes> cancelTeamTask(
        co.overlead.gRPC.CancelTeamTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getCancelTeamTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamTaskRes> sendTeamTaskToMyTask(
        co.overlead.gRPC.SendTeamTaskToMyTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSendTeamTaskToMyTaskMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_TEAM_TASK = 0;
  private static final int METHODID_UPDATE_TEAM_TASK = 1;
  private static final int METHODID_REGISTER_TEAM_TASK = 2;
  private static final int METHODID_CANCEL_TEAM_TASK = 3;
  private static final int METHODID_SEND_TEAM_TASK_TO_MY_TASK = 4;
  private static final int METHODID_GET_ALL_TEAM_TASK = 5;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TeamTaskImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TeamTaskImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_TEAM_TASK:
          serviceImpl.addNewTeamTask((co.overlead.gRPC.AddNewTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes>) responseObserver);
          break;
        case METHODID_UPDATE_TEAM_TASK:
          serviceImpl.updateTeamTask((co.overlead.gRPC.UpdateTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes>) responseObserver);
          break;
        case METHODID_REGISTER_TEAM_TASK:
          serviceImpl.registerTeamTask((co.overlead.gRPC.RegisterTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes>) responseObserver);
          break;
        case METHODID_CANCEL_TEAM_TASK:
          serviceImpl.cancelTeamTask((co.overlead.gRPC.CancelTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes>) responseObserver);
          break;
        case METHODID_SEND_TEAM_TASK_TO_MY_TASK:
          serviceImpl.sendTeamTaskToMyTask((co.overlead.gRPC.SendTeamTaskToMyTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamTaskRes>) responseObserver);
          break;
        case METHODID_GET_ALL_TEAM_TASK:
          serviceImpl.getAllTeamTask((co.overlead.gRPC.GetAllTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllTeamTaskRes>) responseObserver);
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

  private static abstract class TeamTaskBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TeamTaskBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.teamtask.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("TeamTask");
    }
  }

  private static final class TeamTaskFileDescriptorSupplier
      extends TeamTaskBaseDescriptorSupplier {
    TeamTaskFileDescriptorSupplier() {}
  }

  private static final class TeamTaskMethodDescriptorSupplier
      extends TeamTaskBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TeamTaskMethodDescriptorSupplier(String methodName) {
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
      synchronized (TeamTaskGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TeamTaskFileDescriptorSupplier())
              .addMethod(getAddNewTeamTaskMethod())
              .addMethod(getUpdateTeamTaskMethod())
              .addMethod(getRegisterTeamTaskMethod())
              .addMethod(getCancelTeamTaskMethod())
              .addMethod(getSendTeamTaskToMyTaskMethod())
              .addMethod(getGetAllTeamTaskMethod())
              .build();
        }
      }
    }
    return result;
  }
}
