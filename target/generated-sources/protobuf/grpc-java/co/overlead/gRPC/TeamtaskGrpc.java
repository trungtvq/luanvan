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
public final class TeamtaskGrpc {

  private TeamtaskGrpc() {}

  public static final String SERVICE_NAME = "teamtask.Teamtask";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamTaskReq,
      co.overlead.gRPC.AddNewTeamTaskRes> getAddNewTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewTeamTask",
      requestType = co.overlead.gRPC.AddNewTeamTaskReq.class,
      responseType = co.overlead.gRPC.AddNewTeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamTaskReq,
      co.overlead.gRPC.AddNewTeamTaskRes> getAddNewTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamTaskReq, co.overlead.gRPC.AddNewTeamTaskRes> getAddNewTeamTaskMethod;
    if ((getAddNewTeamTaskMethod = TeamtaskGrpc.getAddNewTeamTaskMethod) == null) {
      synchronized (TeamtaskGrpc.class) {
        if ((getAddNewTeamTaskMethod = TeamtaskGrpc.getAddNewTeamTaskMethod) == null) {
          TeamtaskGrpc.getAddNewTeamTaskMethod = getAddNewTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewTeamTaskReq, co.overlead.gRPC.AddNewTeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Teamtask", "addNewTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewTeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamtaskMethodDescriptorSupplier("addNewTeamTask"))
                  .build();
          }
        }
     }
     return getAddNewTeamTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamTaskReq,
      co.overlead.gRPC.UpdateTeamTaskRes> getUpdateTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateTeamTask",
      requestType = co.overlead.gRPC.UpdateTeamTaskReq.class,
      responseType = co.overlead.gRPC.UpdateTeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamTaskReq,
      co.overlead.gRPC.UpdateTeamTaskRes> getUpdateTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamTaskReq, co.overlead.gRPC.UpdateTeamTaskRes> getUpdateTeamTaskMethod;
    if ((getUpdateTeamTaskMethod = TeamtaskGrpc.getUpdateTeamTaskMethod) == null) {
      synchronized (TeamtaskGrpc.class) {
        if ((getUpdateTeamTaskMethod = TeamtaskGrpc.getUpdateTeamTaskMethod) == null) {
          TeamtaskGrpc.getUpdateTeamTaskMethod = getUpdateTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateTeamTaskReq, co.overlead.gRPC.UpdateTeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Teamtask", "updateTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateTeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamtaskMethodDescriptorSupplier("updateTeamTask"))
                  .build();
          }
        }
     }
     return getUpdateTeamTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.RegisterTeamTaskReq,
      co.overlead.gRPC.RegisterTeamTaskRes> getRegisterTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "registerTeamTask",
      requestType = co.overlead.gRPC.RegisterTeamTaskReq.class,
      responseType = co.overlead.gRPC.RegisterTeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.RegisterTeamTaskReq,
      co.overlead.gRPC.RegisterTeamTaskRes> getRegisterTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.RegisterTeamTaskReq, co.overlead.gRPC.RegisterTeamTaskRes> getRegisterTeamTaskMethod;
    if ((getRegisterTeamTaskMethod = TeamtaskGrpc.getRegisterTeamTaskMethod) == null) {
      synchronized (TeamtaskGrpc.class) {
        if ((getRegisterTeamTaskMethod = TeamtaskGrpc.getRegisterTeamTaskMethod) == null) {
          TeamtaskGrpc.getRegisterTeamTaskMethod = getRegisterTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.RegisterTeamTaskReq, co.overlead.gRPC.RegisterTeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Teamtask", "registerTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.RegisterTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.RegisterTeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamtaskMethodDescriptorSupplier("registerTeamTask"))
                  .build();
          }
        }
     }
     return getRegisterTeamTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.CancleTeamTaskReq,
      co.overlead.gRPC.CancleTeamTaskRes> getCancleTeamTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "cancleTeamTask",
      requestType = co.overlead.gRPC.CancleTeamTaskReq.class,
      responseType = co.overlead.gRPC.CancleTeamTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.CancleTeamTaskReq,
      co.overlead.gRPC.CancleTeamTaskRes> getCancleTeamTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.CancleTeamTaskReq, co.overlead.gRPC.CancleTeamTaskRes> getCancleTeamTaskMethod;
    if ((getCancleTeamTaskMethod = TeamtaskGrpc.getCancleTeamTaskMethod) == null) {
      synchronized (TeamtaskGrpc.class) {
        if ((getCancleTeamTaskMethod = TeamtaskGrpc.getCancleTeamTaskMethod) == null) {
          TeamtaskGrpc.getCancleTeamTaskMethod = getCancleTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.CancleTeamTaskReq, co.overlead.gRPC.CancleTeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Teamtask", "cancleTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.CancleTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.CancleTeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamtaskMethodDescriptorSupplier("cancleTeamTask"))
                  .build();
          }
        }
     }
     return getCancleTeamTaskMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendTeamTaskToMyTaskReq,
      co.overlead.gRPC.SendTeamTaskToMyTaskRes> getSendTeamTaskToMyTaskMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "sendTeamTaskToMyTask",
      requestType = co.overlead.gRPC.SendTeamTaskToMyTaskReq.class,
      responseType = co.overlead.gRPC.SendTeamTaskToMyTaskRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendTeamTaskToMyTaskReq,
      co.overlead.gRPC.SendTeamTaskToMyTaskRes> getSendTeamTaskToMyTaskMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendTeamTaskToMyTaskReq, co.overlead.gRPC.SendTeamTaskToMyTaskRes> getSendTeamTaskToMyTaskMethod;
    if ((getSendTeamTaskToMyTaskMethod = TeamtaskGrpc.getSendTeamTaskToMyTaskMethod) == null) {
      synchronized (TeamtaskGrpc.class) {
        if ((getSendTeamTaskToMyTaskMethod = TeamtaskGrpc.getSendTeamTaskToMyTaskMethod) == null) {
          TeamtaskGrpc.getSendTeamTaskToMyTaskMethod = getSendTeamTaskToMyTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendTeamTaskToMyTaskReq, co.overlead.gRPC.SendTeamTaskToMyTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Teamtask", "sendTeamTaskToMyTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendTeamTaskToMyTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendTeamTaskToMyTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamtaskMethodDescriptorSupplier("sendTeamTaskToMyTask"))
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
    if ((getGetAllTeamTaskMethod = TeamtaskGrpc.getGetAllTeamTaskMethod) == null) {
      synchronized (TeamtaskGrpc.class) {
        if ((getGetAllTeamTaskMethod = TeamtaskGrpc.getGetAllTeamTaskMethod) == null) {
          TeamtaskGrpc.getGetAllTeamTaskMethod = getGetAllTeamTaskMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllTeamTaskReq, co.overlead.gRPC.GetAllTeamTaskRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Teamtask", "getAllTeamTask"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllTeamTaskReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllTeamTaskRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamtaskMethodDescriptorSupplier("getAllTeamTask"))
                  .build();
          }
        }
     }
     return getGetAllTeamTaskMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TeamtaskStub newStub(io.grpc.Channel channel) {
    return new TeamtaskStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TeamtaskBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new TeamtaskBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TeamtaskFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new TeamtaskFutureStub(channel);
  }

  /**
   */
  public static abstract class TeamtaskImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewTeamTask(co.overlead.gRPC.AddNewTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewTeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewTeamTaskMethod(), responseObserver);
    }

    /**
     */
    public void updateTeamTask(co.overlead.gRPC.UpdateTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateTeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateTeamTaskMethod(), responseObserver);
    }

    /**
     */
    public void registerTeamTask(co.overlead.gRPC.RegisterTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.RegisterTeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getRegisterTeamTaskMethod(), responseObserver);
    }

    /**
     */
    public void cancleTeamTask(co.overlead.gRPC.CancleTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.CancleTeamTaskRes> responseObserver) {
      asyncUnimplementedUnaryCall(getCancleTeamTaskMethod(), responseObserver);
    }

    /**
     */
    public void sendTeamTaskToMyTask(co.overlead.gRPC.SendTeamTaskToMyTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendTeamTaskToMyTaskRes> responseObserver) {
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
                co.overlead.gRPC.AddNewTeamTaskRes>(
                  this, METHODID_ADD_NEW_TEAM_TASK)))
          .addMethod(
            getUpdateTeamTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateTeamTaskReq,
                co.overlead.gRPC.UpdateTeamTaskRes>(
                  this, METHODID_UPDATE_TEAM_TASK)))
          .addMethod(
            getRegisterTeamTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.RegisterTeamTaskReq,
                co.overlead.gRPC.RegisterTeamTaskRes>(
                  this, METHODID_REGISTER_TEAM_TASK)))
          .addMethod(
            getCancleTeamTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.CancleTeamTaskReq,
                co.overlead.gRPC.CancleTeamTaskRes>(
                  this, METHODID_CANCLE_TEAM_TASK)))
          .addMethod(
            getSendTeamTaskToMyTaskMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendTeamTaskToMyTaskReq,
                co.overlead.gRPC.SendTeamTaskToMyTaskRes>(
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
  public static final class TeamtaskStub extends io.grpc.stub.AbstractStub<TeamtaskStub> {
    private TeamtaskStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamtaskStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamtaskStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamtaskStub(channel, callOptions);
    }

    /**
     */
    public void addNewTeamTask(co.overlead.gRPC.AddNewTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewTeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateTeamTask(co.overlead.gRPC.UpdateTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateTeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void registerTeamTask(co.overlead.gRPC.RegisterTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.RegisterTeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRegisterTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void cancleTeamTask(co.overlead.gRPC.CancleTeamTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.CancleTeamTaskRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCancleTeamTaskMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void sendTeamTaskToMyTask(co.overlead.gRPC.SendTeamTaskToMyTaskReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendTeamTaskToMyTaskRes> responseObserver) {
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
  public static final class TeamtaskBlockingStub extends io.grpc.stub.AbstractStub<TeamtaskBlockingStub> {
    private TeamtaskBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamtaskBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamtaskBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamtaskBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.AddNewTeamTaskRes addNewTeamTask(co.overlead.gRPC.AddNewTeamTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewTeamTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.UpdateTeamTaskRes updateTeamTask(co.overlead.gRPC.UpdateTeamTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateTeamTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.RegisterTeamTaskRes registerTeamTask(co.overlead.gRPC.RegisterTeamTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getRegisterTeamTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.CancleTeamTaskRes cancleTeamTask(co.overlead.gRPC.CancleTeamTaskReq request) {
      return blockingUnaryCall(
          getChannel(), getCancleTeamTaskMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SendTeamTaskToMyTaskRes sendTeamTaskToMyTask(co.overlead.gRPC.SendTeamTaskToMyTaskReq request) {
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
  public static final class TeamtaskFutureStub extends io.grpc.stub.AbstractStub<TeamtaskFutureStub> {
    private TeamtaskFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamtaskFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamtaskFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamtaskFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.AddNewTeamTaskRes> addNewTeamTask(
        co.overlead.gRPC.AddNewTeamTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewTeamTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.UpdateTeamTaskRes> updateTeamTask(
        co.overlead.gRPC.UpdateTeamTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateTeamTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.RegisterTeamTaskRes> registerTeamTask(
        co.overlead.gRPC.RegisterTeamTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getRegisterTeamTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.CancleTeamTaskRes> cancleTeamTask(
        co.overlead.gRPC.CancleTeamTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getCancleTeamTaskMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SendTeamTaskToMyTaskRes> sendTeamTaskToMyTask(
        co.overlead.gRPC.SendTeamTaskToMyTaskReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSendTeamTaskToMyTaskMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_TEAM_TASK = 0;
  private static final int METHODID_UPDATE_TEAM_TASK = 1;
  private static final int METHODID_REGISTER_TEAM_TASK = 2;
  private static final int METHODID_CANCLE_TEAM_TASK = 3;
  private static final int METHODID_SEND_TEAM_TASK_TO_MY_TASK = 4;
  private static final int METHODID_GET_ALL_TEAM_TASK = 5;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TeamtaskImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TeamtaskImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_TEAM_TASK:
          serviceImpl.addNewTeamTask((co.overlead.gRPC.AddNewTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewTeamTaskRes>) responseObserver);
          break;
        case METHODID_UPDATE_TEAM_TASK:
          serviceImpl.updateTeamTask((co.overlead.gRPC.UpdateTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateTeamTaskRes>) responseObserver);
          break;
        case METHODID_REGISTER_TEAM_TASK:
          serviceImpl.registerTeamTask((co.overlead.gRPC.RegisterTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.RegisterTeamTaskRes>) responseObserver);
          break;
        case METHODID_CANCLE_TEAM_TASK:
          serviceImpl.cancleTeamTask((co.overlead.gRPC.CancleTeamTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.CancleTeamTaskRes>) responseObserver);
          break;
        case METHODID_SEND_TEAM_TASK_TO_MY_TASK:
          serviceImpl.sendTeamTaskToMyTask((co.overlead.gRPC.SendTeamTaskToMyTaskReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SendTeamTaskToMyTaskRes>) responseObserver);
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

  private static abstract class TeamtaskBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TeamtaskBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.teamtask.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Teamtask");
    }
  }

  private static final class TeamtaskFileDescriptorSupplier
      extends TeamtaskBaseDescriptorSupplier {
    TeamtaskFileDescriptorSupplier() {}
  }

  private static final class TeamtaskMethodDescriptorSupplier
      extends TeamtaskBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TeamtaskMethodDescriptorSupplier(String methodName) {
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
      synchronized (TeamtaskGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TeamtaskFileDescriptorSupplier())
              .addMethod(getAddNewTeamTaskMethod())
              .addMethod(getUpdateTeamTaskMethod())
              .addMethod(getRegisterTeamTaskMethod())
              .addMethod(getCancleTeamTaskMethod())
              .addMethod(getSendTeamTaskToMyTaskMethod())
              .addMethod(getGetAllTeamTaskMethod())
              .build();
        }
      }
    }
    return result;
  }
}
