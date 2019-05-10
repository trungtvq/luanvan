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
    comments = "Source: velocity.proto")
public final class VelocityGrpc {

  private VelocityGrpc() {}

  public static final String SERVICE_NAME = "velocity.Velocity";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.GetVelocityReq,
      co.overlead.gRPC.GetVelocityRes> getGetVelocityMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "getVelocity",
      requestType = co.overlead.gRPC.GetVelocityReq.class,
      responseType = co.overlead.gRPC.GetVelocityRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.GetVelocityReq,
      co.overlead.gRPC.GetVelocityRes> getGetVelocityMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.GetVelocityReq, co.overlead.gRPC.GetVelocityRes> getGetVelocityMethod;
    if ((getGetVelocityMethod = VelocityGrpc.getGetVelocityMethod) == null) {
      synchronized (VelocityGrpc.class) {
        if ((getGetVelocityMethod = VelocityGrpc.getGetVelocityMethod) == null) {
          VelocityGrpc.getGetVelocityMethod = getGetVelocityMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.GetVelocityReq, co.overlead.gRPC.GetVelocityRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "velocity.Velocity", "getVelocity"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetVelocityReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.GetVelocityRes.getDefaultInstance()))
                  .setSchemaDescriptor(new VelocityMethodDescriptorSupplier("getVelocity"))
                  .build();
          }
        }
     }
     return getGetVelocityMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static VelocityStub newStub(io.grpc.Channel channel) {
    return new VelocityStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static VelocityBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new VelocityBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static VelocityFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new VelocityFutureStub(channel);
  }

  /**
   */
  public static abstract class VelocityImplBase implements io.grpc.BindableService {

    /**
     */
    public void getVelocity(co.overlead.gRPC.GetVelocityReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetVelocityRes> responseObserver) {
      asyncUnimplementedUnaryCall(getGetVelocityMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getGetVelocityMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.GetVelocityReq,
                co.overlead.gRPC.GetVelocityRes>(
                  this, METHODID_GET_VELOCITY)))
          .build();
    }
  }

  /**
   */
  public static final class VelocityStub extends io.grpc.stub.AbstractStub<VelocityStub> {
    private VelocityStub(io.grpc.Channel channel) {
      super(channel);
    }

    private VelocityStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VelocityStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new VelocityStub(channel, callOptions);
    }

    /**
     */
    public void getVelocity(co.overlead.gRPC.GetVelocityReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.GetVelocityRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getGetVelocityMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class VelocityBlockingStub extends io.grpc.stub.AbstractStub<VelocityBlockingStub> {
    private VelocityBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private VelocityBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VelocityBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new VelocityBlockingStub(channel, callOptions);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.GetVelocityRes> getVelocity(
        co.overlead.gRPC.GetVelocityReq request) {
      return blockingServerStreamingCall(
          getChannel(), getGetVelocityMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class VelocityFutureStub extends io.grpc.stub.AbstractStub<VelocityFutureStub> {
    private VelocityFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private VelocityFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected VelocityFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new VelocityFutureStub(channel, callOptions);
    }
  }

  private static final int METHODID_GET_VELOCITY = 0;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final VelocityImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(VelocityImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_GET_VELOCITY:
          serviceImpl.getVelocity((co.overlead.gRPC.GetVelocityReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.GetVelocityRes>) responseObserver);
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

  private static abstract class VelocityBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    VelocityBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.velocity.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Velocity");
    }
  }

  private static final class VelocityFileDescriptorSupplier
      extends VelocityBaseDescriptorSupplier {
    VelocityFileDescriptorSupplier() {}
  }

  private static final class VelocityMethodDescriptorSupplier
      extends VelocityBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    VelocityMethodDescriptorSupplier(String methodName) {
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
      synchronized (VelocityGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new VelocityFileDescriptorSupplier())
              .addMethod(getGetVelocityMethod())
              .build();
        }
      }
    }
    return result;
  }
}
