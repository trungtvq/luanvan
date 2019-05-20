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
    comments = "Source: team.proto")
public final class TeamGrpc {

  private TeamGrpc() {}

  public static final String SERVICE_NAME = "teamtask.Team";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamReq,
      co.overlead.gRPC.TeamRes> getAddNewTeamMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewTeam",
      requestType = co.overlead.gRPC.AddNewTeamReq.class,
      responseType = co.overlead.gRPC.TeamRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamReq,
      co.overlead.gRPC.TeamRes> getAddNewTeamMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewTeamReq, co.overlead.gRPC.TeamRes> getAddNewTeamMethod;
    if ((getAddNewTeamMethod = TeamGrpc.getAddNewTeamMethod) == null) {
      synchronized (TeamGrpc.class) {
        if ((getAddNewTeamMethod = TeamGrpc.getAddNewTeamMethod) == null) {
          TeamGrpc.getAddNewTeamMethod = getAddNewTeamMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewTeamReq, co.overlead.gRPC.TeamRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Team", "addNewTeam"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewTeamReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamMethodDescriptorSupplier("addNewTeam"))
                  .build();
          }
        }
     }
     return getAddNewTeamMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamReq,
      co.overlead.gRPC.TeamRes> getUpdateTeamMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateTeam",
      requestType = co.overlead.gRPC.UpdateTeamReq.class,
      responseType = co.overlead.gRPC.TeamRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamReq,
      co.overlead.gRPC.TeamRes> getUpdateTeamMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateTeamReq, co.overlead.gRPC.TeamRes> getUpdateTeamMethod;
    if ((getUpdateTeamMethod = TeamGrpc.getUpdateTeamMethod) == null) {
      synchronized (TeamGrpc.class) {
        if ((getUpdateTeamMethod = TeamGrpc.getUpdateTeamMethod) == null) {
          TeamGrpc.getUpdateTeamMethod = getUpdateTeamMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateTeamReq, co.overlead.gRPC.TeamRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Team", "updateTeam"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateTeamReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamMethodDescriptorSupplier("updateTeam"))
                  .build();
          }
        }
     }
     return getUpdateTeamMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteTeamReq,
      co.overlead.gRPC.TeamRes> getDeleteTeamMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteTeam",
      requestType = co.overlead.gRPC.DeleteTeamReq.class,
      responseType = co.overlead.gRPC.TeamRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteTeamReq,
      co.overlead.gRPC.TeamRes> getDeleteTeamMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteTeamReq, co.overlead.gRPC.TeamRes> getDeleteTeamMethod;
    if ((getDeleteTeamMethod = TeamGrpc.getDeleteTeamMethod) == null) {
      synchronized (TeamGrpc.class) {
        if ((getDeleteTeamMethod = TeamGrpc.getDeleteTeamMethod) == null) {
          TeamGrpc.getDeleteTeamMethod = getDeleteTeamMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteTeamReq, co.overlead.gRPC.TeamRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Team", "deleteTeam"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteTeamReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamMethodDescriptorSupplier("deleteTeam"))
                  .build();
          }
        }
     }
     return getDeleteTeamMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddMemberReq,
      co.overlead.gRPC.TeamRes> getAddMemberMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addMember",
      requestType = co.overlead.gRPC.AddMemberReq.class,
      responseType = co.overlead.gRPC.TeamRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddMemberReq,
      co.overlead.gRPC.TeamRes> getAddMemberMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddMemberReq, co.overlead.gRPC.TeamRes> getAddMemberMethod;
    if ((getAddMemberMethod = TeamGrpc.getAddMemberMethod) == null) {
      synchronized (TeamGrpc.class) {
        if ((getAddMemberMethod = TeamGrpc.getAddMemberMethod) == null) {
          TeamGrpc.getAddMemberMethod = getAddMemberMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddMemberReq, co.overlead.gRPC.TeamRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Team", "addMember"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddMemberReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamMethodDescriptorSupplier("addMember"))
                  .build();
          }
        }
     }
     return getAddMemberMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.RemoveMemberReq,
      co.overlead.gRPC.TeamRes> getRemoveMemberMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "removeMember",
      requestType = co.overlead.gRPC.RemoveMemberReq.class,
      responseType = co.overlead.gRPC.TeamRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.RemoveMemberReq,
      co.overlead.gRPC.TeamRes> getRemoveMemberMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.RemoveMemberReq, co.overlead.gRPC.TeamRes> getRemoveMemberMethod;
    if ((getRemoveMemberMethod = TeamGrpc.getRemoveMemberMethod) == null) {
      synchronized (TeamGrpc.class) {
        if ((getRemoveMemberMethod = TeamGrpc.getRemoveMemberMethod) == null) {
          TeamGrpc.getRemoveMemberMethod = getRemoveMemberMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.RemoveMemberReq, co.overlead.gRPC.TeamRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Team", "removeMember"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.RemoveMemberReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamMethodDescriptorSupplier("removeMember"))
                  .build();
          }
        }
     }
     return getRemoveMemberMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateMemberReq,
      co.overlead.gRPC.TeamRes> getUpdateMemberMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateMember",
      requestType = co.overlead.gRPC.UpdateMemberReq.class,
      responseType = co.overlead.gRPC.TeamRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateMemberReq,
      co.overlead.gRPC.TeamRes> getUpdateMemberMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateMemberReq, co.overlead.gRPC.TeamRes> getUpdateMemberMethod;
    if ((getUpdateMemberMethod = TeamGrpc.getUpdateMemberMethod) == null) {
      synchronized (TeamGrpc.class) {
        if ((getUpdateMemberMethod = TeamGrpc.getUpdateMemberMethod) == null) {
          TeamGrpc.getUpdateMemberMethod = getUpdateMemberMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateMemberReq, co.overlead.gRPC.TeamRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Team", "updateMember"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateMemberReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamMethodDescriptorSupplier("updateMember"))
                  .build();
          }
        }
     }
     return getUpdateMemberMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllMemberReq,
      co.overlead.gRPC.TeamRes> getGetAllMemberMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllMember",
      requestType = co.overlead.gRPC.GetAllMemberReq.class,
      responseType = co.overlead.gRPC.TeamRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllMemberReq,
      co.overlead.gRPC.TeamRes> getGetAllMemberMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllMemberReq, co.overlead.gRPC.TeamRes> getGetAllMemberMethod;
    if ((getGetAllMemberMethod = TeamGrpc.getGetAllMemberMethod) == null) {
      synchronized (TeamGrpc.class) {
        if ((getGetAllMemberMethod = TeamGrpc.getGetAllMemberMethod) == null) {
          TeamGrpc.getGetAllMemberMethod = getGetAllMemberMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllMemberReq, co.overlead.gRPC.TeamRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Team", "getAllMember"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllMemberReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.TeamRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamMethodDescriptorSupplier("getAllMember"))
                  .build();
          }
        }
     }
     return getGetAllMemberMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllTeamReq,
      co.overlead.gRPC.GetAllTeamRes> getGetAllTeamMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllTeam",
      requestType = co.overlead.gRPC.GetAllTeamReq.class,
      responseType = co.overlead.gRPC.GetAllTeamRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllTeamReq,
      co.overlead.gRPC.GetAllTeamRes> getGetAllTeamMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllTeamReq, co.overlead.gRPC.GetAllTeamRes> getGetAllTeamMethod;
    if ((getGetAllTeamMethod = TeamGrpc.getGetAllTeamMethod) == null) {
      synchronized (TeamGrpc.class) {
        if ((getGetAllTeamMethod = TeamGrpc.getGetAllTeamMethod) == null) {
          TeamGrpc.getGetAllTeamMethod = getGetAllTeamMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllTeamReq, co.overlead.gRPC.GetAllTeamRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "teamtask.Team", "getAllTeam"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllTeamReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllTeamRes.getDefaultInstance()))
                  .setSchemaDescriptor(new TeamMethodDescriptorSupplier("getAllTeam"))
                  .build();
          }
        }
     }
     return getGetAllTeamMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static TeamStub newStub(io.grpc.Channel channel) {
    return new TeamStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static TeamBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new TeamBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static TeamFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new TeamFutureStub(channel);
  }

  /**
   */
  public static abstract class TeamImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewTeam(co.overlead.gRPC.AddNewTeamReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewTeamMethod(), responseObserver);
    }

    /**
     */
    public void updateTeam(co.overlead.gRPC.UpdateTeamReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateTeamMethod(), responseObserver);
    }

    /**
     */
    public void deleteTeam(co.overlead.gRPC.DeleteTeamReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteTeamMethod(), responseObserver);
    }

    /**
     */
    public void addMember(co.overlead.gRPC.AddMemberReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddMemberMethod(), responseObserver);
    }

    /**
     */
    public void removeMember(co.overlead.gRPC.RemoveMemberReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnimplementedUnaryCall(getRemoveMemberMethod(), responseObserver);
    }

    /**
     */
    public void updateMember(co.overlead.gRPC.UpdateMemberReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateMemberMethod(), responseObserver);
    }

    /**
     */
    public void getAllMember(co.overlead.gRPC.GetAllMemberReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllMemberMethod(), responseObserver);
    }

    /**
     */
    public void getAllTeam(co.overlead.gRPC.GetAllTeamReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllTeamRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllTeamMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAddNewTeamMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.AddNewTeamReq,
                co.overlead.gRPC.TeamRes>(
                  this, METHODID_ADD_NEW_TEAM)))
          .addMethod(
            getUpdateTeamMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateTeamReq,
                co.overlead.gRPC.TeamRes>(
                  this, METHODID_UPDATE_TEAM)))
          .addMethod(
            getDeleteTeamMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteTeamReq,
                co.overlead.gRPC.TeamRes>(
                  this, METHODID_DELETE_TEAM)))
          .addMethod(
            getAddMemberMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.AddMemberReq,
                co.overlead.gRPC.TeamRes>(
                  this, METHODID_ADD_MEMBER)))
          .addMethod(
            getRemoveMemberMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.RemoveMemberReq,
                co.overlead.gRPC.TeamRes>(
                  this, METHODID_REMOVE_MEMBER)))
          .addMethod(
            getUpdateMemberMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateMemberReq,
                co.overlead.gRPC.TeamRes>(
                  this, METHODID_UPDATE_MEMBER)))
          .addMethod(
            getGetAllMemberMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllMemberReq,
                co.overlead.gRPC.TeamRes>(
                  this, METHODID_GET_ALL_MEMBER)))
          .addMethod(
            getGetAllTeamMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllTeamReq,
                co.overlead.gRPC.GetAllTeamRes>(
                  this, METHODID_GET_ALL_TEAM)))
          .build();
    }
  }

  /**
   */
  public static final class TeamStub extends io.grpc.stub.AbstractStub<TeamStub> {
    private TeamStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamStub(channel, callOptions);
    }

    /**
     */
    public void addNewTeam(co.overlead.gRPC.AddNewTeamReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewTeamMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateTeam(co.overlead.gRPC.UpdateTeamReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateTeamMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteTeam(co.overlead.gRPC.DeleteTeamReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteTeamMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void addMember(co.overlead.gRPC.AddMemberReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddMemberMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void removeMember(co.overlead.gRPC.RemoveMemberReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getRemoveMemberMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateMember(co.overlead.gRPC.UpdateMemberReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateMemberMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllMember(co.overlead.gRPC.GetAllMemberReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllMemberMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllTeam(co.overlead.gRPC.GetAllTeamReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllTeamRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllTeamMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class TeamBlockingStub extends io.grpc.stub.AbstractStub<TeamBlockingStub> {
    private TeamBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.TeamRes addNewTeam(co.overlead.gRPC.AddNewTeamReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewTeamMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamRes updateTeam(co.overlead.gRPC.UpdateTeamReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateTeamMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamRes deleteTeam(co.overlead.gRPC.DeleteTeamReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteTeamMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamRes addMember(co.overlead.gRPC.AddMemberReq request) {
      return blockingUnaryCall(
          getChannel(), getAddMemberMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamRes removeMember(co.overlead.gRPC.RemoveMemberReq request) {
      return blockingUnaryCall(
          getChannel(), getRemoveMemberMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.TeamRes updateMember(co.overlead.gRPC.UpdateMemberReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateMemberMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.TeamRes> getAllMember(
        co.overlead.gRPC.GetAllMemberReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllMemberMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetAllTeamRes> getAllTeam(
        co.overlead.gRPC.GetAllTeamReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllTeamMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class TeamFutureStub extends io.grpc.stub.AbstractStub<TeamFutureStub> {
    private TeamFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private TeamFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected TeamFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new TeamFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamRes> addNewTeam(
        co.overlead.gRPC.AddNewTeamReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewTeamMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamRes> updateTeam(
        co.overlead.gRPC.UpdateTeamReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateTeamMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamRes> deleteTeam(
        co.overlead.gRPC.DeleteTeamReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteTeamMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamRes> addMember(
        co.overlead.gRPC.AddMemberReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddMemberMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamRes> removeMember(
        co.overlead.gRPC.RemoveMemberReq request) {
      return futureUnaryCall(
          getChannel().newCall(getRemoveMemberMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.TeamRes> updateMember(
        co.overlead.gRPC.UpdateMemberReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateMemberMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_TEAM = 0;
  private static final int METHODID_UPDATE_TEAM = 1;
  private static final int METHODID_DELETE_TEAM = 2;
  private static final int METHODID_ADD_MEMBER = 3;
  private static final int METHODID_REMOVE_MEMBER = 4;
  private static final int METHODID_UPDATE_MEMBER = 5;
  private static final int METHODID_GET_ALL_MEMBER = 6;
  private static final int METHODID_GET_ALL_TEAM = 7;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final TeamImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(TeamImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_TEAM:
          serviceImpl.addNewTeam((co.overlead.gRPC.AddNewTeamReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes>) responseObserver);
          break;
        case METHODID_UPDATE_TEAM:
          serviceImpl.updateTeam((co.overlead.gRPC.UpdateTeamReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes>) responseObserver);
          break;
        case METHODID_DELETE_TEAM:
          serviceImpl.deleteTeam((co.overlead.gRPC.DeleteTeamReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes>) responseObserver);
          break;
        case METHODID_ADD_MEMBER:
          serviceImpl.addMember((co.overlead.gRPC.AddMemberReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes>) responseObserver);
          break;
        case METHODID_REMOVE_MEMBER:
          serviceImpl.removeMember((co.overlead.gRPC.RemoveMemberReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes>) responseObserver);
          break;
        case METHODID_UPDATE_MEMBER:
          serviceImpl.updateMember((co.overlead.gRPC.UpdateMemberReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes>) responseObserver);
          break;
        case METHODID_GET_ALL_MEMBER:
          serviceImpl.getAllMember((co.overlead.gRPC.GetAllMemberReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.TeamRes>) responseObserver);
          break;
        case METHODID_GET_ALL_TEAM:
          serviceImpl.getAllTeam((co.overlead.gRPC.GetAllTeamReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllTeamRes>) responseObserver);
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

  private static abstract class TeamBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    TeamBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.team.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Team");
    }
  }

  private static final class TeamFileDescriptorSupplier
      extends TeamBaseDescriptorSupplier {
    TeamFileDescriptorSupplier() {}
  }

  private static final class TeamMethodDescriptorSupplier
      extends TeamBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    TeamMethodDescriptorSupplier(String methodName) {
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
      synchronized (TeamGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new TeamFileDescriptorSupplier())
              .addMethod(getAddNewTeamMethod())
              .addMethod(getUpdateTeamMethod())
              .addMethod(getDeleteTeamMethod())
              .addMethod(getAddMemberMethod())
              .addMethod(getRemoveMemberMethod())
              .addMethod(getUpdateMemberMethod())
              .addMethod(getGetAllMemberMethod())
              .addMethod(getGetAllTeamMethod())
              .build();
        }
      }
    }
    return result;
  }
}
