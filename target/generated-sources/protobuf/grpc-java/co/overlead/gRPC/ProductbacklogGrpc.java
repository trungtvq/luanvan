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
    comments = "Source: productbacklog.proto")
public final class ProductbacklogGrpc {

  private ProductbacklogGrpc() {}

  public static final String SERVICE_NAME = "productbacklog.Productbacklog";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProductBacklogReq,
      co.overlead.gRPC.AddNewProductBacklogRes> getAddNewProductBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewProductBacklog",
      requestType = co.overlead.gRPC.AddNewProductBacklogReq.class,
      responseType = co.overlead.gRPC.AddNewProductBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProductBacklogReq,
      co.overlead.gRPC.AddNewProductBacklogRes> getAddNewProductBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProductBacklogReq, co.overlead.gRPC.AddNewProductBacklogRes> getAddNewProductBacklogMethod;
    if ((getAddNewProductBacklogMethod = ProductbacklogGrpc.getAddNewProductBacklogMethod) == null) {
      synchronized (ProductbacklogGrpc.class) {
        if ((getAddNewProductBacklogMethod = ProductbacklogGrpc.getAddNewProductBacklogMethod) == null) {
          ProductbacklogGrpc.getAddNewProductBacklogMethod = getAddNewProductBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewProductBacklogReq, co.overlead.gRPC.AddNewProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.Productbacklog", "addNewProductBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductbacklogMethodDescriptorSupplier("addNewProductBacklog"))
                  .build();
          }
        }
     }
     return getAddNewProductBacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProductBacklogReq,
      co.overlead.gRPC.UpdateProductBacklogRes> getUpdateUserStoryMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateUserStory",
      requestType = co.overlead.gRPC.UpdateProductBacklogReq.class,
      responseType = co.overlead.gRPC.UpdateProductBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProductBacklogReq,
      co.overlead.gRPC.UpdateProductBacklogRes> getUpdateUserStoryMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProductBacklogReq, co.overlead.gRPC.UpdateProductBacklogRes> getUpdateUserStoryMethod;
    if ((getUpdateUserStoryMethod = ProductbacklogGrpc.getUpdateUserStoryMethod) == null) {
      synchronized (ProductbacklogGrpc.class) {
        if ((getUpdateUserStoryMethod = ProductbacklogGrpc.getUpdateUserStoryMethod) == null) {
          ProductbacklogGrpc.getUpdateUserStoryMethod = getUpdateUserStoryMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateProductBacklogReq, co.overlead.gRPC.UpdateProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.Productbacklog", "updateUserStory"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductbacklogMethodDescriptorSupplier("updateUserStory"))
                  .build();
          }
        }
     }
     return getUpdateUserStoryMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProductBacklogReq,
      co.overlead.gRPC.DeleteProductBacklogRes> getDeleteProductBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteProductBacklog",
      requestType = co.overlead.gRPC.DeleteProductBacklogReq.class,
      responseType = co.overlead.gRPC.DeleteProductBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProductBacklogReq,
      co.overlead.gRPC.DeleteProductBacklogRes> getDeleteProductBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProductBacklogReq, co.overlead.gRPC.DeleteProductBacklogRes> getDeleteProductBacklogMethod;
    if ((getDeleteProductBacklogMethod = ProductbacklogGrpc.getDeleteProductBacklogMethod) == null) {
      synchronized (ProductbacklogGrpc.class) {
        if ((getDeleteProductBacklogMethod = ProductbacklogGrpc.getDeleteProductBacklogMethod) == null) {
          ProductbacklogGrpc.getDeleteProductBacklogMethod = getDeleteProductBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteProductBacklogReq, co.overlead.gRPC.DeleteProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.Productbacklog", "deleteProductBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductbacklogMethodDescriptorSupplier("deleteProductBacklog"))
                  .build();
          }
        }
     }
     return getDeleteProductBacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendToSprintBacklogReq,
      co.overlead.gRPC.SendToSprintBacklogRes> getSendToSprintBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "sendToSprintBacklog",
      requestType = co.overlead.gRPC.SendToSprintBacklogReq.class,
      responseType = co.overlead.gRPC.SendToSprintBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendToSprintBacklogReq,
      co.overlead.gRPC.SendToSprintBacklogRes> getSendToSprintBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendToSprintBacklogReq, co.overlead.gRPC.SendToSprintBacklogRes> getSendToSprintBacklogMethod;
    if ((getSendToSprintBacklogMethod = ProductbacklogGrpc.getSendToSprintBacklogMethod) == null) {
      synchronized (ProductbacklogGrpc.class) {
        if ((getSendToSprintBacklogMethod = ProductbacklogGrpc.getSendToSprintBacklogMethod) == null) {
          ProductbacklogGrpc.getSendToSprintBacklogMethod = getSendToSprintBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendToSprintBacklogReq, co.overlead.gRPC.SendToSprintBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.Productbacklog", "sendToSprintBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendToSprintBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendToSprintBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductbacklogMethodDescriptorSupplier("sendToSprintBacklog"))
                  .build();
          }
        }
     }
     return getSendToSprintBacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllProductBacklogReq,
      co.overlead.gRPC.GetAllProductBacklogRes> getGetAllProductBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getAllProductBacklog",
      requestType = co.overlead.gRPC.GetAllProductBacklogReq.class,
      responseType = co.overlead.gRPC.GetAllProductBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllProductBacklogReq,
      co.overlead.gRPC.GetAllProductBacklogRes> getGetAllProductBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetAllProductBacklogReq, co.overlead.gRPC.GetAllProductBacklogRes> getGetAllProductBacklogMethod;
    if ((getGetAllProductBacklogMethod = ProductbacklogGrpc.getGetAllProductBacklogMethod) == null) {
      synchronized (ProductbacklogGrpc.class) {
        if ((getGetAllProductBacklogMethod = ProductbacklogGrpc.getGetAllProductBacklogMethod) == null) {
          ProductbacklogGrpc.getGetAllProductBacklogMethod = getGetAllProductBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllProductBacklogReq, co.overlead.gRPC.GetAllProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.Productbacklog", "getAllProductBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductbacklogMethodDescriptorSupplier("getAllProductBacklog"))
                  .build();
          }
        }
     }
     return getGetAllProductBacklogMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ProductbacklogStub newStub(io.grpc.Channel channel) {
    return new ProductbacklogStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ProductbacklogBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new ProductbacklogBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ProductbacklogFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new ProductbacklogFutureStub(channel);
  }

  /**
   */
  public static abstract class ProductbacklogImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewProductBacklog(co.overlead.gRPC.AddNewProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewProductBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewProductBacklogMethod(), responseObserver);
    }

    /**
     */
    public void updateUserStory(co.overlead.gRPC.UpdateProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateProductBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateUserStoryMethod(), responseObserver);
    }

    /**
     */
    public void deleteProductBacklog(co.overlead.gRPC.DeleteProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteProductBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteProductBacklogMethod(), responseObserver);
    }

    /**
     */
    public void sendToSprintBacklog(co.overlead.gRPC.SendToSprintBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendToSprintBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getSendToSprintBacklogMethod(), responseObserver);
    }

    /**
     */
    public void getAllProductBacklog(co.overlead.gRPC.GetAllProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllProductBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetAllProductBacklogMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getAddNewProductBacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.AddNewProductBacklogReq,
                co.overlead.gRPC.AddNewProductBacklogRes>(
                  this, METHODID_ADD_NEW_PRODUCT_BACKLOG)))
          .addMethod(
            getUpdateUserStoryMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateProductBacklogReq,
                co.overlead.gRPC.UpdateProductBacklogRes>(
                  this, METHODID_UPDATE_USER_STORY)))
          .addMethod(
            getDeleteProductBacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteProductBacklogReq,
                co.overlead.gRPC.DeleteProductBacklogRes>(
                  this, METHODID_DELETE_PRODUCT_BACKLOG)))
          .addMethod(
            getSendToSprintBacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendToSprintBacklogReq,
                co.overlead.gRPC.SendToSprintBacklogRes>(
                  this, METHODID_SEND_TO_SPRINT_BACKLOG)))
          .addMethod(
            getGetAllProductBacklogMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetAllProductBacklogReq,
                co.overlead.gRPC.GetAllProductBacklogRes>(
                  this, METHODID_GET_ALL_PRODUCT_BACKLOG)))
          .build();
    }
  }

  /**
   */
  public static final class ProductbacklogStub extends io.grpc.stub.AbstractStub<ProductbacklogStub> {
    private ProductbacklogStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductbacklogStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductbacklogStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductbacklogStub(channel, callOptions);
    }

    /**
     */
    public void addNewProductBacklog(co.overlead.gRPC.AddNewProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewProductBacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewProductBacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateUserStory(co.overlead.gRPC.UpdateProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateProductBacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateUserStoryMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteProductBacklog(co.overlead.gRPC.DeleteProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteProductBacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteProductBacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void sendToSprintBacklog(co.overlead.gRPC.SendToSprintBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendToSprintBacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSendToSprintBacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void getAllProductBacklog(co.overlead.gRPC.GetAllProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllProductBacklogRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetAllProductBacklogMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class ProductbacklogBlockingStub extends io.grpc.stub.AbstractStub<ProductbacklogBlockingStub> {
    private ProductbacklogBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductbacklogBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductbacklogBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductbacklogBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.AddNewProductBacklogRes addNewProductBacklog(co.overlead.gRPC.AddNewProductBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewProductBacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.UpdateProductBacklogRes updateUserStory(co.overlead.gRPC.UpdateProductBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateUserStoryMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.DeleteProductBacklogRes deleteProductBacklog(co.overlead.gRPC.DeleteProductBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteProductBacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SendToSprintBacklogRes sendToSprintBacklog(co.overlead.gRPC.SendToSprintBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getSendToSprintBacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetAllProductBacklogRes> getAllProductBacklog(
        co.overlead.gRPC.GetAllProductBacklogReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetAllProductBacklogMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class ProductbacklogFutureStub extends io.grpc.stub.AbstractStub<ProductbacklogFutureStub> {
    private ProductbacklogFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductbacklogFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductbacklogFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductbacklogFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.AddNewProductBacklogRes> addNewProductBacklog(
        co.overlead.gRPC.AddNewProductBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewProductBacklogMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.UpdateProductBacklogRes> updateUserStory(
        co.overlead.gRPC.UpdateProductBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateUserStoryMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.DeleteProductBacklogRes> deleteProductBacklog(
        co.overlead.gRPC.DeleteProductBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteProductBacklogMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SendToSprintBacklogRes> sendToSprintBacklog(
        co.overlead.gRPC.SendToSprintBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSendToSprintBacklogMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_PRODUCT_BACKLOG = 0;
  private static final int METHODID_UPDATE_USER_STORY = 1;
  private static final int METHODID_DELETE_PRODUCT_BACKLOG = 2;
  private static final int METHODID_SEND_TO_SPRINT_BACKLOG = 3;
  private static final int METHODID_GET_ALL_PRODUCT_BACKLOG = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ProductbacklogImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ProductbacklogImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_PRODUCT_BACKLOG:
          serviceImpl.addNewProductBacklog((co.overlead.gRPC.AddNewProductBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.AddNewProductBacklogRes>) responseObserver);
          break;
        case METHODID_UPDATE_USER_STORY:
          serviceImpl.updateUserStory((co.overlead.gRPC.UpdateProductBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.UpdateProductBacklogRes>) responseObserver);
          break;
        case METHODID_DELETE_PRODUCT_BACKLOG:
          serviceImpl.deleteProductBacklog((co.overlead.gRPC.DeleteProductBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.DeleteProductBacklogRes>) responseObserver);
          break;
        case METHODID_SEND_TO_SPRINT_BACKLOG:
          serviceImpl.sendToSprintBacklog((co.overlead.gRPC.SendToSprintBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SendToSprintBacklogRes>) responseObserver);
          break;
        case METHODID_GET_ALL_PRODUCT_BACKLOG:
          serviceImpl.getAllProductBacklog((co.overlead.gRPC.GetAllProductBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetAllProductBacklogRes>) responseObserver);
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

  private static abstract class ProductbacklogBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ProductbacklogBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.productbacklog.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Productbacklog");
    }
  }

  private static final class ProductbacklogFileDescriptorSupplier
      extends ProductbacklogBaseDescriptorSupplier {
    ProductbacklogFileDescriptorSupplier() {}
  }

  private static final class ProductbacklogMethodDescriptorSupplier
      extends ProductbacklogBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ProductbacklogMethodDescriptorSupplier(String methodName) {
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
      synchronized (ProductbacklogGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ProductbacklogFileDescriptorSupplier())
              .addMethod(getAddNewProductBacklogMethod())
              .addMethod(getUpdateUserStoryMethod())
              .addMethod(getDeleteProductBacklogMethod())
              .addMethod(getSendToSprintBacklogMethod())
              .addMethod(getGetAllProductBacklogMethod())
              .build();
        }
      }
    }
    return result;
  }
}
