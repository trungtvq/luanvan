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
public final class ProductBacklogGrpc {

  private ProductBacklogGrpc() {}

  public static final String SERVICE_NAME = "productbacklog.ProductBacklog";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProductBacklogReq,
      co.overlead.gRPC.ProductBacklogRes> getAddNewProductBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "addNewProductBacklog",
      requestType = co.overlead.gRPC.AddNewProductBacklogReq.class,
      responseType = co.overlead.gRPC.ProductBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProductBacklogReq,
      co.overlead.gRPC.ProductBacklogRes> getAddNewProductBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.AddNewProductBacklogReq, co.overlead.gRPC.ProductBacklogRes> getAddNewProductBacklogMethod;
    if ((getAddNewProductBacklogMethod = ProductBacklogGrpc.getAddNewProductBacklogMethod) == null) {
      synchronized (ProductBacklogGrpc.class) {
        if ((getAddNewProductBacklogMethod = ProductBacklogGrpc.getAddNewProductBacklogMethod) == null) {
          ProductBacklogGrpc.getAddNewProductBacklogMethod = getAddNewProductBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.AddNewProductBacklogReq, co.overlead.gRPC.ProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.ProductBacklog", "addNewProductBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.AddNewProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductBacklogMethodDescriptorSupplier("addNewProductBacklog"))
                  .build();
          }
        }
     }
     return getAddNewProductBacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProductBacklogReq,
      co.overlead.gRPC.ProductBacklogRes> getUpdateProductBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "updateProductBacklog",
      requestType = co.overlead.gRPC.UpdateProductBacklogReq.class,
      responseType = co.overlead.gRPC.ProductBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProductBacklogReq,
      co.overlead.gRPC.ProductBacklogRes> getUpdateProductBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.UpdateProductBacklogReq, co.overlead.gRPC.ProductBacklogRes> getUpdateProductBacklogMethod;
    if ((getUpdateProductBacklogMethod = ProductBacklogGrpc.getUpdateProductBacklogMethod) == null) {
      synchronized (ProductBacklogGrpc.class) {
        if ((getUpdateProductBacklogMethod = ProductBacklogGrpc.getUpdateProductBacklogMethod) == null) {
          ProductBacklogGrpc.getUpdateProductBacklogMethod = getUpdateProductBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.UpdateProductBacklogReq, co.overlead.gRPC.ProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.ProductBacklog", "updateProductBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.UpdateProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductBacklogMethodDescriptorSupplier("updateProductBacklog"))
                  .build();
          }
        }
     }
     return getUpdateProductBacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProductBacklogReq,
      co.overlead.gRPC.ProductBacklogRes> getDeleteProductBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "deleteProductBacklog",
      requestType = co.overlead.gRPC.DeleteProductBacklogReq.class,
      responseType = co.overlead.gRPC.ProductBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProductBacklogReq,
      co.overlead.gRPC.ProductBacklogRes> getDeleteProductBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.DeleteProductBacklogReq, co.overlead.gRPC.ProductBacklogRes> getDeleteProductBacklogMethod;
    if ((getDeleteProductBacklogMethod = ProductBacklogGrpc.getDeleteProductBacklogMethod) == null) {
      synchronized (ProductBacklogGrpc.class) {
        if ((getDeleteProductBacklogMethod = ProductBacklogGrpc.getDeleteProductBacklogMethod) == null) {
          ProductBacklogGrpc.getDeleteProductBacklogMethod = getDeleteProductBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.DeleteProductBacklogReq, co.overlead.gRPC.ProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.ProductBacklog", "deleteProductBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.DeleteProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductBacklogMethodDescriptorSupplier("deleteProductBacklog"))
                  .build();
          }
        }
     }
     return getDeleteProductBacklogMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendToSprintBacklogReq,
      co.overlead.gRPC.ProductBacklogRes> getSendToSprintBacklogMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "sendToSprintBacklog",
      requestType = co.overlead.gRPC.SendToSprintBacklogReq.class,
      responseType = co.overlead.gRPC.ProductBacklogRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendToSprintBacklogReq,
      co.overlead.gRPC.ProductBacklogRes> getSendToSprintBacklogMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendToSprintBacklogReq, co.overlead.gRPC.ProductBacklogRes> getSendToSprintBacklogMethod;
    if ((getSendToSprintBacklogMethod = ProductBacklogGrpc.getSendToSprintBacklogMethod) == null) {
      synchronized (ProductBacklogGrpc.class) {
        if ((getSendToSprintBacklogMethod = ProductBacklogGrpc.getSendToSprintBacklogMethod) == null) {
          ProductBacklogGrpc.getSendToSprintBacklogMethod = getSendToSprintBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendToSprintBacklogReq, co.overlead.gRPC.ProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.ProductBacklog", "sendToSprintBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendToSprintBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductBacklogMethodDescriptorSupplier("sendToSprintBacklog"))
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
    if ((getGetAllProductBacklogMethod = ProductBacklogGrpc.getGetAllProductBacklogMethod) == null) {
      synchronized (ProductBacklogGrpc.class) {
        if ((getGetAllProductBacklogMethod = ProductBacklogGrpc.getGetAllProductBacklogMethod) == null) {
          ProductBacklogGrpc.getGetAllProductBacklogMethod = getGetAllProductBacklogMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetAllProductBacklogReq, co.overlead.gRPC.GetAllProductBacklogRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "productbacklog.ProductBacklog", "getAllProductBacklog"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllProductBacklogReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetAllProductBacklogRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ProductBacklogMethodDescriptorSupplier("getAllProductBacklog"))
                  .build();
          }
        }
     }
     return getGetAllProductBacklogMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ProductBacklogStub newStub(io.grpc.Channel channel) {
    return new ProductBacklogStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ProductBacklogBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new ProductBacklogBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ProductBacklogFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new ProductBacklogFutureStub(channel);
  }

  /**
   */
  public static abstract class ProductBacklogImplBase implements io.grpc.BindableService {

    /**
     */
    public void addNewProductBacklog(co.overlead.gRPC.AddNewProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getAddNewProductBacklogMethod(), responseObserver);
    }

    /**
     */
    public void updateProductBacklog(co.overlead.gRPC.UpdateProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getUpdateProductBacklogMethod(), responseObserver);
    }

    /**
     */
    public void deleteProductBacklog(co.overlead.gRPC.DeleteProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes> responseObserver) {
      asyncUnimplementedUnaryCall(getDeleteProductBacklogMethod(), responseObserver);
    }

    /**
     */
    public void sendToSprintBacklog(co.overlead.gRPC.SendToSprintBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes> responseObserver) {
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
                co.overlead.gRPC.ProductBacklogRes>(
                  this, METHODID_ADD_NEW_PRODUCT_BACKLOG)))
          .addMethod(
            getUpdateProductBacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.UpdateProductBacklogReq,
                co.overlead.gRPC.ProductBacklogRes>(
                  this, METHODID_UPDATE_PRODUCT_BACKLOG)))
          .addMethod(
            getDeleteProductBacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.DeleteProductBacklogReq,
                co.overlead.gRPC.ProductBacklogRes>(
                  this, METHODID_DELETE_PRODUCT_BACKLOG)))
          .addMethod(
            getSendToSprintBacklogMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendToSprintBacklogReq,
                co.overlead.gRPC.ProductBacklogRes>(
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
  public static final class ProductBacklogStub extends io.grpc.stub.AbstractStub<ProductBacklogStub> {
    private ProductBacklogStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductBacklogStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductBacklogStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductBacklogStub(channel, callOptions);
    }

    /**
     */
    public void addNewProductBacklog(co.overlead.gRPC.AddNewProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getAddNewProductBacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void updateProductBacklog(co.overlead.gRPC.UpdateProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getUpdateProductBacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void deleteProductBacklog(co.overlead.gRPC.DeleteProductBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getDeleteProductBacklogMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void sendToSprintBacklog(co.overlead.gRPC.SendToSprintBacklogReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes> responseObserver) {
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
  public static final class ProductBacklogBlockingStub extends io.grpc.stub.AbstractStub<ProductBacklogBlockingStub> {
    private ProductBacklogBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductBacklogBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductBacklogBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductBacklogBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.ProductBacklogRes addNewProductBacklog(co.overlead.gRPC.AddNewProductBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getAddNewProductBacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ProductBacklogRes updateProductBacklog(co.overlead.gRPC.UpdateProductBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getUpdateProductBacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ProductBacklogRes deleteProductBacklog(co.overlead.gRPC.DeleteProductBacklogReq request) {
      return blockingUnaryCall(
          getChannel(), getDeleteProductBacklogMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.ProductBacklogRes sendToSprintBacklog(co.overlead.gRPC.SendToSprintBacklogReq request) {
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
  public static final class ProductBacklogFutureStub extends io.grpc.stub.AbstractStub<ProductBacklogFutureStub> {
    private ProductBacklogFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ProductBacklogFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ProductBacklogFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ProductBacklogFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProductBacklogRes> addNewProductBacklog(
        co.overlead.gRPC.AddNewProductBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getAddNewProductBacklogMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProductBacklogRes> updateProductBacklog(
        co.overlead.gRPC.UpdateProductBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getUpdateProductBacklogMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProductBacklogRes> deleteProductBacklog(
        co.overlead.gRPC.DeleteProductBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getDeleteProductBacklogMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.ProductBacklogRes> sendToSprintBacklog(
        co.overlead.gRPC.SendToSprintBacklogReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSendToSprintBacklogMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_ADD_NEW_PRODUCT_BACKLOG = 0;
  private static final int METHODID_UPDATE_PRODUCT_BACKLOG = 1;
  private static final int METHODID_DELETE_PRODUCT_BACKLOG = 2;
  private static final int METHODID_SEND_TO_SPRINT_BACKLOG = 3;
  private static final int METHODID_GET_ALL_PRODUCT_BACKLOG = 4;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ProductBacklogImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ProductBacklogImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_ADD_NEW_PRODUCT_BACKLOG:
          serviceImpl.addNewProductBacklog((co.overlead.gRPC.AddNewProductBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes>) responseObserver);
          break;
        case METHODID_UPDATE_PRODUCT_BACKLOG:
          serviceImpl.updateProductBacklog((co.overlead.gRPC.UpdateProductBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes>) responseObserver);
          break;
        case METHODID_DELETE_PRODUCT_BACKLOG:
          serviceImpl.deleteProductBacklog((co.overlead.gRPC.DeleteProductBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes>) responseObserver);
          break;
        case METHODID_SEND_TO_SPRINT_BACKLOG:
          serviceImpl.sendToSprintBacklog((co.overlead.gRPC.SendToSprintBacklogReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ProductBacklogRes>) responseObserver);
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

  private static abstract class ProductBacklogBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ProductBacklogBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.productbacklog.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("ProductBacklog");
    }
  }

  private static final class ProductBacklogFileDescriptorSupplier
      extends ProductBacklogBaseDescriptorSupplier {
    ProductBacklogFileDescriptorSupplier() {}
  }

  private static final class ProductBacklogMethodDescriptorSupplier
      extends ProductBacklogBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ProductBacklogMethodDescriptorSupplier(String methodName) {
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
      synchronized (ProductBacklogGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ProductBacklogFileDescriptorSupplier())
              .addMethod(getAddNewProductBacklogMethod())
              .addMethod(getUpdateProductBacklogMethod())
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
