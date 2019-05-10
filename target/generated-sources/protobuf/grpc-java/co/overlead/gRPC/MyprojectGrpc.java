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
    comments = "Source: myproject.proto")
public final class MyprojectGrpc {

  private MyprojectGrpc() {}

  public static final String SERVICE_NAME = "myproject.Myproject";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProjectReq,
      co.overlead.gRPC.ProjectRes> getAddNewProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewProject",
      requestType = co.overlead.gRPC.AddNewProjectReq.class,
      responseType = co.overlead.gRPC.ProjectRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProjectReq,
      co.overlead.gRPC.ProjectRes> getAddNewProjectMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProjectReq, co.overlead.gRPC.ProjectRes> getAddNewProjectMethod;
    if ((getAddNewProjectMethod = MyprojectGrpc.getAddNewProjectMethod) == null) {
      synchronized (MyprojectGrpc.class) {
        if ((getAddNewProjectMethod = MyprojectGrpc.getAddNewProjectMethod) == null) {
          MyprojectGrpc.getAddNewProjectMethod = getAddNewProjectMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewProjectReq, co.overlead.gRPC.ProjectRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "myproject.Myproject", "addNewProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewProjectReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProjectRes.getDefaultInstance()))
                  .setSchemaDescriptor(new MyprojectMethodDescriptorSupplier("addNewProject"))
                  .build();
          }
        }
     }
     return getAddNewProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProjectReq,
      co.overlead.gRPC.ProjectRes> getUpdateProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateProject",
      requestType = co.overlead.gRPC.UpdateProjectReq.class,
      responseType = co.overlead.gRPC.ProjectRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProjectReq,
      co.overlead.gRPC.ProjectRes> getUpdateProjectMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProjectReq, co.overlead.gRPC.ProjectRes> getUpdateProjectMethod;
    if ((getUpdateProjectMethod = MyprojectGrpc.getUpdateProjectMethod) == null) {
      synchronized (MyprojectGrpc.class) {
        if ((getUpdateProjectMethod = MyprojectGrpc.getUpdateProjectMethod) == null) {
          MyprojectGrpc.getUpdateProjectMethod = getUpdateProjectMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateProjectReq, co.overlead.gRPC.ProjectRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "myproject.Myproject", "updateProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateProjectReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProjectRes.getDefaultInstance()))
                  .setSchemaDescriptor(new MyprojectMethodDescriptorSupplier("updateProject"))
                  .build();
          }
        }
     }
     return getUpdateProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProjectReq,
      co.overlead.gRPC.ProjectRes> getDeleteProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteProject",
      requestType = co.overlead.gRPC.DeleteProjectReq.class,
      responseType = co.overlead.gRPC.ProjectRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProjectReq,
      co.overlead.gRPC.ProjectRes> getDeleteProjectMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProjectReq, co.overlead.gRPC.ProjectRes> getDeleteProjectMethod;
    if ((getDeleteProjectMethod = MyprojectGrpc.getDeleteProjectMethod) == null) {
      synchronized (MyprojectGrpc.class) {
        if ((getDeleteProjectMethod = MyprojectGrpc.getDeleteProjectMethod) == null) {
          MyprojectGrpc.getDeleteProjectMethod = getDeleteProjectMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteProjectReq, co.overlead.gRPC.ProjectRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "myproject.Myproject", "deleteProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteProjectReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProjectRes.getDefaultInstance()))
                  .setSchemaDescriptor(new MyprojectMethodDescriptorSupplier("deleteProject"))
                  .build();
          }
        }
     }
     return getDeleteProjectMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllProjectReq,
      co.overlead.gRPC.ProjectRes> getGetAllProjectMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllProject",
      requestType = co.overlead.gRPC.GetAllProjectReq.class,
      responseType = co.overlead.gRPC.ProjectRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllProjectReq,
      co.overlead.gRPC.ProjectRes> getGetAllProjectMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllProjectReq, co.overlead.gRPC.ProjectRes> getGetAllProjectMethod;
    if ((getGetAllProjectMethod = MyprojectGrpc.getGetAllProjectMethod) == null) {
      synchronized (MyprojectGrpc.class) {
        if ((getGetAllProjectMethod = MyprojectGrpc.getGetAllProjectMethod) == null) {
          MyprojectGrpc.getGetAllProjectMethod = getGetAllProjectMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllProjectReq, co.overlead.gRPC.ProjectRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "myproject.Myproject", "getAllProject"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllProjectReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProjectRes.getDefaultInstance()))
                  .setSchemaDescriptor(new MyprojectMethodDescriptorSupplier("getAllProject"))
                  .build();
          }
        }
     }
     return getGetAllProjectMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static MyprojectStub newStub(io.grpc.Channel channel) {
    return new MyprojectStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static MyprojectBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new MyprojectBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static MyprojectFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new MyprojectFutureStub(channel);
  }

  /**
   */
  public static abstract class MyprojectImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewProject(co.overlead.gRPC.AddNewProjectReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewProjectMethod(), responseObserver);
    }

    /**
     */
    public void updateProject(co.overlead.gRPC.UpdateProjectReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateProjectMethod(), responseObserver);
    }

    /**
     */
    public void deleteProject(co.overlead.gRPC.DeleteProjectReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteProjectMethod(), responseObserver);
    }

    /**
     */
    public void getAllProject(co.overlead.gRPC.GetAllProjectReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllProjectMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAddNewProjectMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.AddNewProjectReq,
                co.overlead.gRPC.ProjectRes>(
                  this, METHODID_ADD_NEW_PROJECT)))
          .addMethod(
            getUpdateProjectMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateProjectReq,
                co.overlead.gRPC.ProjectRes>(
                  this, METHODID_UPDATE_PROJECT)))
          .addMethod(
            getDeleteProjectMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteProjectReq,
                co.overlead.gRPC.ProjectRes>(
                  this, METHODID_DELETE_PROJECT)))
          .addMethod(
            getGetAllProjectMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllProjectReq,
                co.overlead.gRPC.ProjectRes>(
                  this, METHODID_GET_ALL_PROJECT)))
          .build();
    }
  }

  /**
   */
  public static final class MyprojectStub extends io.grpc.stub.AbstractStub<MyprojectStub> {
    private MyprojectStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MyprojectStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MyprojectStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MyprojectStub(channel, callOptions);
    }

    /**
     */
    public void addNewProject(co.overlead.gRPC.AddNewProjectReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateProject(co.overlead.gRPC.UpdateProjectReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteProject(co.overlead.gRPC.DeleteProjectReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteProjectMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllProject(co.overlead.gRPC.GetAllProjectReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllProjectMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class MyprojectBlockingStub extends io.grpc.stub.AbstractStub<MyprojectBlockingStub> {
    private MyprojectBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MyprojectBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MyprojectBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MyprojectBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.ProjectRes addNewProject(co.overlead.gRPC.AddNewProjectReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewProjectMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ProjectRes updateProject(co.overlead.gRPC.UpdateProjectReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateProjectMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ProjectRes deleteProject(co.overlead.gRPC.DeleteProjectReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteProjectMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.ProjectRes> getAllProject(
        co.overlead.gRPC.GetAllProjectReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllProjectMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class MyprojectFutureStub extends io.grpc.stub.AbstractStub<MyprojectFutureStub> {
    private MyprojectFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private MyprojectFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected MyprojectFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new MyprojectFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProjectRes> addNewProject(
        co.overlead.gRPC.AddNewProjectReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewProjectMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProjectRes> updateProject(
        co.overlead.gRPC.UpdateProjectReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateProjectMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProjectRes> deleteProject(
        co.overlead.gRPC.DeleteProjectReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteProjectMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_PROJECT = 0;
  private static final int METHODID_UPDATE_PROJECT = 1;
  private static final int METHODID_DELETE_PROJECT = 2;
  private static final int METHODID_GET_ALL_PROJECT = 3;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final MyprojectImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(MyprojectImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_PROJECT:
          serviceImpl.addNewProject((co.overlead.gRPC.AddNewProjectReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes>) responseObserver);
          break;
        case METHODID_UPDATE_PROJECT:
          serviceImpl.updateProject((co.overlead.gRPC.UpdateProjectReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes>) responseObserver);
          break;
        case METHODID_DELETE_PROJECT:
          serviceImpl.deleteProject((co.overlead.gRPC.DeleteProjectReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes>) responseObserver);
          break;
        case METHODID_GET_ALL_PROJECT:
          serviceImpl.getAllProject((co.overlead.gRPC.GetAllProjectReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProjectRes>) responseObserver);
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

  private static abstract class MyprojectBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    MyprojectBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.myproject.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Myproject");
    }
  }

  private static final class MyprojectFileDescriptorSupplier
      extends MyprojectBaseDescriptorSupplier {
    MyprojectFileDescriptorSupplier() {}
  }

  private static final class MyprojectMethodDescriptorSupplier
      extends MyprojectBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    MyprojectMethodDescriptorSupplier(String methodName) {
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
      synchronized (MyprojectGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new MyprojectFileDescriptorSupplier())
              .addMethod(getAddNewProjectMethod())
              .addMethod(getUpdateProjectMethod())
              .addMethod(getDeleteProjectMethod())
              .addMethod(getGetAllProjectMethod())
              .build();
        }
      }
    }
    return result;
  }
}
