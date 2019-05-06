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
public final class UserstoryGrpc {

  private UserstoryGrpc() {}

  public static final String SERVICE_NAME = "userstory.Userstory";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewUserStoryReq,
      co.overlead.gRPC.AddNewUserStoryRes> getAddNewUserStoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewUserStory",
      requestType = co.overlead.gRPC.AddNewUserStoryReq.class,
      responseType = co.overlead.gRPC.AddNewUserStoryRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewUserStoryReq,
      co.overlead.gRPC.AddNewUserStoryRes> getAddNewUserStoryMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewUserStoryReq, co.overlead.gRPC.AddNewUserStoryRes> getAddNewUserStoryMethod;
    if ((getAddNewUserStoryMethod = UserstoryGrpc.getAddNewUserStoryMethod) == null) {
      synchronized (UserstoryGrpc.class) {
        if ((getAddNewUserStoryMethod = UserstoryGrpc.getAddNewUserStoryMethod) == null) {
          UserstoryGrpc.getAddNewUserStoryMethod = getAddNewUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewUserStoryReq, co.overlead.gRPC.AddNewUserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "userstory.Userstory", "addNewUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewUserStoryReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewUserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserstoryMethodDescriptorSupplier("addNewUserStory"))
                  .build();
          }
        }
     }
     return getAddNewUserStoryMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateUserStoryReq,
      co.overlead.gRPC.UpdateUserStoryRes> getUpdateUserStoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateUserStory",
      requestType = co.overlead.gRPC.UpdateUserStoryReq.class,
      responseType = co.overlead.gRPC.UpdateUserStoryRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateUserStoryReq,
      co.overlead.gRPC.UpdateUserStoryRes> getUpdateUserStoryMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateUserStoryReq, co.overlead.gRPC.UpdateUserStoryRes> getUpdateUserStoryMethod;
    if ((getUpdateUserStoryMethod = UserstoryGrpc.getUpdateUserStoryMethod) == null) {
      synchronized (UserstoryGrpc.class) {
        if ((getUpdateUserStoryMethod = UserstoryGrpc.getUpdateUserStoryMethod) == null) {
          UserstoryGrpc.getUpdateUserStoryMethod = getUpdateUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateUserStoryReq, co.overlead.gRPC.UpdateUserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "userstory.Userstory", "updateUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateUserStoryReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateUserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserstoryMethodDescriptorSupplier("updateUserStory"))
                  .build();
          }
        }
     }
     return getUpdateUserStoryMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteUserStoryReq,
      co.overlead.gRPC.DeleteUserStoryRes> getDeleteUserStoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteUserStory",
      requestType = co.overlead.gRPC.DeleteUserStoryReq.class,
      responseType = co.overlead.gRPC.DeleteUserStoryRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteUserStoryReq,
      co.overlead.gRPC.DeleteUserStoryRes> getDeleteUserStoryMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteUserStoryReq, co.overlead.gRPC.DeleteUserStoryRes> getDeleteUserStoryMethod;
    if ((getDeleteUserStoryMethod = UserstoryGrpc.getDeleteUserStoryMethod) == null) {
      synchronized (UserstoryGrpc.class) {
        if ((getDeleteUserStoryMethod = UserstoryGrpc.getDeleteUserStoryMethod) == null) {
          UserstoryGrpc.getDeleteUserStoryMethod = getDeleteUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteUserStoryReq, co.overlead.gRPC.DeleteUserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "userstory.Userstory", "deleteUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteUserStoryReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteUserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserstoryMethodDescriptorSupplier("deleteUserStory"))
                  .build();
          }
        }
     }
     return getDeleteUserStoryMethod;
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
    if ((getGetAllUserStoryMethod = UserstoryGrpc.getGetAllUserStoryMethod) == null) {
      synchronized (UserstoryGrpc.class) {
        if ((getGetAllUserStoryMethod = UserstoryGrpc.getGetAllUserStoryMethod) == null) {
          UserstoryGrpc.getGetAllUserStoryMethod = getGetAllUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllUserStoryReq, co.overlead.gRPC.GetAllUserStoryRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "userstory.Userstory", "getAllUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllUserStoryReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllUserStoryRes.getDefaultInstance()))
                  .setSchemaDescriptor(new UserstoryMethodDescriptorSupplier("getAllUserStory"))
                  .build();
          }
        }
     }
     return getGetAllUserStoryMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static UserstoryStub newStub(io.grpc.Channel channel) {
    return new UserstoryStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static UserstoryBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new UserstoryBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static UserstoryFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new UserstoryFutureStub(channel);
  }

  /**
   */
  public static abstract class UserstoryImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewUserStory(co.overlead.gRPC.AddNewUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewUserStoryRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewUserStoryMethod(), responseObserver);
    }

    /**
     */
    public void updateUserStory(co.overlead.gRPC.UpdateUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateUserStoryRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateUserStoryMethod(), responseObserver);
    }

    /**
     */
    public void deleteUserStory(co.overlead.gRPC.DeleteUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteUserStoryRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteUserStoryMethod(), responseObserver);
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
                co.overlead.gRPC.AddNewUserStoryRes>(
                  this, METHODID_ADD_NEW_USER_STORY)))
          .addMethod(
            getUpdateUserStoryMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateUserStoryReq,
                co.overlead.gRPC.UpdateUserStoryRes>(
                  this, METHODID_UPDATE_USER_STORY)))
          .addMethod(
            getDeleteUserStoryMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteUserStoryReq,
                co.overlead.gRPC.DeleteUserStoryRes>(
                  this, METHODID_DELETE_USER_STORY)))
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
  public static final class UserstoryStub extends io.grpc.stub.AbstractStub<UserstoryStub> {
    private UserstoryStub(io.grpc.Channel channel) {
      super(channel);
    }

    private UserstoryStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserstoryStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new UserstoryStub(channel, callOptions);
    }

    /**
     */
    public void addNewUserStory(co.overlead.gRPC.AddNewUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewUserStoryRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewUserStoryMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateUserStory(co.overlead.gRPC.UpdateUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateUserStoryRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateUserStoryMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteUserStory(co.overlead.gRPC.DeleteUserStoryReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteUserStoryRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteUserStoryMethod(), getCallOptions()), request, responseObserver);
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
  public static final class UserstoryBlockingStub extends io.grpc.stub.AbstractStub<UserstoryBlockingStub> {
    private UserstoryBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private UserstoryBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserstoryBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new UserstoryBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.AddNewUserStoryRes addNewUserStory(co.overlead.gRPC.AddNewUserStoryReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewUserStoryMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.UpdateUserStoryRes updateUserStory(co.overlead.gRPC.UpdateUserStoryReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateUserStoryMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.DeleteUserStoryRes deleteUserStory(co.overlead.gRPC.DeleteUserStoryReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteUserStoryMethod(), getCallOptions(), request);
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
  public static final class UserstoryFutureStub extends io.grpc.stub.AbstractStub<UserstoryFutureStub> {
    private UserstoryFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private UserstoryFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected UserstoryFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new UserstoryFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.AddNewUserStoryRes> addNewUserStory(
        co.overlead.gRPC.AddNewUserStoryReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewUserStoryMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.UpdateUserStoryRes> updateUserStory(
        co.overlead.gRPC.UpdateUserStoryReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateUserStoryMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.DeleteUserStoryRes> deleteUserStory(
        co.overlead.gRPC.DeleteUserStoryReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteUserStoryMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_USER_STORY = 0;
  private static final int METHODID_UPDATE_USER_STORY = 1;
  private static final int METHODID_DELETE_USER_STORY = 2;
  private static final int METHODID_GET_ALL_USER_STORY = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final UserstoryImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(UserstoryImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_USER_STORY:
          serviceImpl.addNewUserStory((co.overlead.gRPC.AddNewUserStoryReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewUserStoryRes>) responseObserver);
          break;
        case METHODID_UPDATE_USER_STORY:
          serviceImpl.updateUserStory((co.overlead.gRPC.UpdateUserStoryReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateUserStoryRes>) responseObserver);
          break;
        case METHODID_DELETE_USER_STORY:
          serviceImpl.deleteUserStory((co.overlead.gRPC.DeleteUserStoryReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteUserStoryRes>) responseObserver);
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

  private static abstract class UserstoryBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    UserstoryBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.userstory.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Userstory");
    }
  }

  private static final class UserstoryFileDescriptorSupplier
      extends UserstoryBaseDescriptorSupplier {
    UserstoryFileDescriptorSupplier() {}
  }

  private static final class UserstoryMethodDescriptorSupplier
      extends UserstoryBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    UserstoryMethodDescriptorSupplier(String methodName) {
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
      synchronized (UserstoryGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new UserstoryFileDescriptorSupplier())
              .addMethod(getAddNewUserStoryMethod())
              .addMethod(getUpdateUserStoryMethod())
              .addMethod(getDeleteUserStoryMethod())
              .addMethod(getGetAllUserStoryMethod())
              .build();
        }
      }
    }
    return result;
  }
}
