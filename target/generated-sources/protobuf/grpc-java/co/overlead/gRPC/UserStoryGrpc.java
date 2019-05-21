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
    comments = "Source: userstory.proto")
public final class UserStoryGrpc {

  private UserStoryGrpc() {}

  public static final String SERVICE_NAME = "userstory.UserStory";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewUserStoryReq,
      co.overlead.gRPC.UserStoryRes> getAddNewUserStoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewUserStory",
      requestType = co.overlead.gRPC.AddNewUserStoryReq.class,
      responseType = co.overlead.gRPC.UserStoryRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewUserStoryReq,
      co.overlead.gRPC.UserStoryRes> getAddNewUserStoryMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewUserStoryReq, co.overlead.gRPC.UserStoryRes> getAddNewUserStoryMethod;
    if ((getAddNewUserStoryMethod = UserStoryGrpc.getAddNewUserStoryMethod) == null) {
      synchronized (UserStoryGrpc.class) {
        if ((getAddNewUserStoryMethod = UserStoryGrpc.getAddNewUserStoryMethod) == null) {
          UserStoryGrpc.getAddNewUserStoryMethod = getAddNewUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewUserStoryReq, co.overlead.gRPC.UserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "userstory.UserStory", "addNewUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewUserStoryReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserStoryMethodDescriptorSupplier("addNewUserStory"))
                  .build();
          }
        }
     }
     return getAddNewUserStoryMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateUserStoryReq,
      co.overlead.gRPC.UserStoryRes> getUpdateUserStoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateUserStory",
      requestType = co.overlead.gRPC.UpdateUserStoryReq.class,
      responseType = co.overlead.gRPC.UserStoryRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateUserStoryReq,
      co.overlead.gRPC.UserStoryRes> getUpdateUserStoryMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateUserStoryReq, co.overlead.gRPC.UserStoryRes> getUpdateUserStoryMethod;
    if ((getUpdateUserStoryMethod = UserStoryGrpc.getUpdateUserStoryMethod) == null) {
      synchronized (UserStoryGrpc.class) {
        if ((getUpdateUserStoryMethod = UserStoryGrpc.getUpdateUserStoryMethod) == null) {
          UserStoryGrpc.getUpdateUserStoryMethod = getUpdateUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateUserStoryReq, co.overlead.gRPC.UserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "userstory.UserStory", "updateUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateUserStoryReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserStoryMethodDescriptorSupplier("updateUserStory"))
                  .build();
          }
        }
     }
     return getUpdateUserStoryMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteUserStoryReq,
      co.overlead.gRPC.UserStoryRes> getDeleteUserStoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteUserStory",
      requestType = co.overlead.gRPC.DeleteUserStoryReq.class,
      responseType = co.overlead.gRPC.UserStoryRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteUserStoryReq,
      co.overlead.gRPC.UserStoryRes> getDeleteUserStoryMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteUserStoryReq, co.overlead.gRPC.UserStoryRes> getDeleteUserStoryMethod;
    if ((getDeleteUserStoryMethod = UserStoryGrpc.getDeleteUserStoryMethod) == null) {
      synchronized (UserStoryGrpc.class) {
        if ((getDeleteUserStoryMethod = UserStoryGrpc.getDeleteUserStoryMethod) == null) {
          UserStoryGrpc.getDeleteUserStoryMethod = getDeleteUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteUserStoryReq, co.overlead.gRPC.UserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "userstory.UserStory", "deleteUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteUserStoryReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserStoryMethodDescriptorSupplier("deleteUserStory"))
                  .build();
          }
        }
     }
     return getDeleteUserStoryMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendToProductBacklogReq,
      co.overlead.gRPC.UserStoryRes> getSendToProductBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "sendToProductBacklog",
      requestType = co.overlead.gRPC.SendToProductBacklogReq.class,
      responseType = co.overlead.gRPC.UserStoryRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendToProductBacklogReq,
      co.overlead.gRPC.UserStoryRes> getSendToProductBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendToProductBacklogReq, co.overlead.gRPC.UserStoryRes> getSendToProductBacklogMethod;
    if ((getSendToProductBacklogMethod = UserStoryGrpc.getSendToProductBacklogMethod) == null) {
      synchronized (UserStoryGrpc.class) {
        if ((getSendToProductBacklogMethod = UserStoryGrpc.getSendToProductBacklogMethod) == null) {
          UserStoryGrpc.getSendToProductBacklogMethod = getSendToProductBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendToProductBacklogReq, co.overlead.gRPC.UserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "userstory.UserStory", "sendToProductBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendToProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserStoryMethodDescriptorSupplier("sendToProductBacklog"))
                  .build();
          }
        }
     }
     return getSendToProductBacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllUserStoryReq,
      co.overlead.gRPC.GetAllUserStoryRes> getGetAllUserStoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllUserStory",
      requestType = co.overlead.gRPC.GetAllUserStoryReq.class,
      responseType = co.overlead.gRPC.GetAllUserStoryRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllUserStoryReq,
      co.overlead.gRPC.GetAllUserStoryRes> getGetAllUserStoryMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllUserStoryReq, co.overlead.gRPC.GetAllUserStoryRes> getGetAllUserStoryMethod;
    if ((getGetAllUserStoryMethod = UserStoryGrpc.getGetAllUserStoryMethod) == null) {
      synchronized (UserStoryGrpc.class) {
        if ((getGetAllUserStoryMethod = UserStoryGrpc.getGetAllUserStoryMethod) == null) {
          UserStoryGrpc.getGetAllUserStoryMethod = getGetAllUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllUserStoryReq, co.overlead.gRPC.GetAllUserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "userstory.UserStory", "getAllUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllUserStoryReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllUserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserStoryMethodDescriptorSupplier("getAllUserStory"))
                  .build();
          }
        }
     }
     return getGetAllUserStoryMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static UserStoryStub newStub(io.grpc.Channel channel) {
    return new UserStoryStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static UserStoryBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new UserStoryBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static UserStoryFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new UserStoryFutureStub(channel);
  }

  /**
   */
  public static abstract class UserStoryImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewUserStory(co.overlead.gRPC.AddNewUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewUserStoryMethod(), responseObserver);
    }

    /**
     */
    public void updateUserStory(co.overlead.gRPC.UpdateUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateUserStoryMethod(), responseObserver);
    }

    /**
     */
    public void deleteUserStory(co.overlead.gRPC.DeleteUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteUserStoryMethod(), responseObserver);
    }

    /**
     */
    public void sendToProductBacklog(co.overlead.gRPC.SendToProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes> responseObserver) {
      asyncUnimplementedUnaryCall(getSendToProductBacklogMethod(), responseObserver);
    }

    /**
     */
    public void getAllUserStory(co.overlead.gRPC.GetAllUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllUserStoryRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllUserStoryMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAddNewUserStoryMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.AddNewUserStoryReq,
                co.overlead.gRPC.UserStoryRes>(
                  this, METHODID_ADD_NEW_USER_STORY)))
          .addMethod(
            getUpdateUserStoryMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateUserStoryReq,
                co.overlead.gRPC.UserStoryRes>(
                  this, METHODID_UPDATE_USER_STORY)))
          .addMethod(
            getDeleteUserStoryMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteUserStoryReq,
                co.overlead.gRPC.UserStoryRes>(
                  this, METHODID_DELETE_USER_STORY)))
          .addMethod(
            getSendToProductBacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendToProductBacklogReq,
                co.overlead.gRPC.UserStoryRes>(
                  this, METHODID_SEND_TO_PRODUCT_BACKLOG)))
          .addMethod(
            getGetAllUserStoryMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllUserStoryReq,
                co.overlead.gRPC.GetAllUserStoryRes>(
                  this, METHODID_GET_ALL_USER_STORY)))
          .build();
    }
  }

  /**
   */
  public static final class UserStoryStub extends io.grpc.stub.AbstractStub<UserStoryStub> {
    private UserStoryStub(io.grpc.Channel channel) {
      super(channel);
    }

    private UserStoryStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserStoryStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new UserStoryStub(channel, callOptions);
    }

    /**
     */
    public void addNewUserStory(co.overlead.gRPC.AddNewUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewUserStoryMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateUserStory(co.overlead.gRPC.UpdateUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateUserStoryMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteUserStory(co.overlead.gRPC.DeleteUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteUserStoryMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void sendToProductBacklog(co.overlead.gRPC.SendToProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSendToProductBacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllUserStory(co.overlead.gRPC.GetAllUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllUserStoryRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllUserStoryMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class UserStoryBlockingStub extends io.grpc.stub.AbstractStub<UserStoryBlockingStub> {
    private UserStoryBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private UserStoryBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserStoryBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new UserStoryBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.UserStoryRes addNewUserStory(co.overlead.gRPC.AddNewUserStoryReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewUserStoryMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.UserStoryRes updateUserStory(co.overlead.gRPC.UpdateUserStoryReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateUserStoryMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.UserStoryRes deleteUserStory(co.overlead.gRPC.DeleteUserStoryReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteUserStoryMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.UserStoryRes sendToProductBacklog(co.overlead.gRPC.SendToProductBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getSendToProductBacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetAllUserStoryRes> getAllUserStory(
        co.overlead.gRPC.GetAllUserStoryReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllUserStoryMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class UserStoryFutureStub extends io.grpc.stub.AbstractStub<UserStoryFutureStub> {
    private UserStoryFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private UserStoryFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserStoryFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new UserStoryFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.UserStoryRes> addNewUserStory(
        co.overlead.gRPC.AddNewUserStoryReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewUserStoryMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.UserStoryRes> updateUserStory(
        co.overlead.gRPC.UpdateUserStoryReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateUserStoryMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.UserStoryRes> deleteUserStory(
        co.overlead.gRPC.DeleteUserStoryReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteUserStoryMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.UserStoryRes> sendToProductBacklog(
        co.overlead.gRPC.SendToProductBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSendToProductBacklogMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_USER_STORY = 0;
  private static final int METHODID_UPDATE_USER_STORY = 1;
  private static final int METHODID_DELETE_USER_STORY = 2;
  private static final int METHODID_SEND_TO_PRODUCT_BACKLOG = 3;
  private static final int METHODID_GET_ALL_USER_STORY = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final UserStoryImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(UserStoryImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_USER_STORY:
          serviceImpl.addNewUserStory((co.overlead.gRPC.AddNewUserStoryReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes>) responseObserver);
          break;
        case METHODID_UPDATE_USER_STORY:
          serviceImpl.updateUserStory((co.overlead.gRPC.UpdateUserStoryReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes>) responseObserver);
          break;
        case METHODID_DELETE_USER_STORY:
          serviceImpl.deleteUserStory((co.overlead.gRPC.DeleteUserStoryReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes>) responseObserver);
          break;
        case METHODID_SEND_TO_PRODUCT_BACKLOG:
          serviceImpl.sendToProductBacklog((co.overlead.gRPC.SendToProductBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.UserStoryRes>) responseObserver);
          break;
        case METHODID_GET_ALL_USER_STORY:
          serviceImpl.getAllUserStory((co.overlead.gRPC.GetAllUserStoryReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllUserStoryRes>) responseObserver);
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

  private static abstract class UserStoryBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    UserStoryBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.userstory.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("UserStory");
    }
  }

  private static final class UserStoryFileDescriptorSupplier
      extends UserStoryBaseDescriptorSupplier {
    UserStoryFileDescriptorSupplier() {}
  }

  private static final class UserStoryMethodDescriptorSupplier
      extends UserStoryBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    UserStoryMethodDescriptorSupplier(String methodName) {
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
      synchronized (UserStoryGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new UserStoryFileDescriptorSupplier())
              .addMethod(getAddNewUserStoryMethod())
              .addMethod(getUpdateUserStoryMethod())
              .addMethod(getDeleteUserStoryMethod())
              .addMethod(getSendToProductBacklogMethod())
              .addMethod(getGetAllUserStoryMethod())
              .build();
        }
      }
    }
    return result;
  }
}
