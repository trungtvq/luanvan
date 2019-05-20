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
    comments = "Source: chat.proto")
public final class ChatGrpc {

  private ChatGrpc() {}

  public static final String SERVICE_NAME = "chat.Chat";

  // Static method descriptors that strictly reflect the proto.
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq,
      co.overlead.gRPC.SendMsgRes> getConnectRenewMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ConnectRenew",
      requestType = co.overlead.gRPC.SendMsgReq.class,
      responseType = co.overlead.gRPC.SendMsgRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq,
      co.overlead.gRPC.SendMsgRes> getConnectRenewMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq, co.overlead.gRPC.SendMsgRes> getConnectRenewMethod;
    if ((getConnectRenewMethod = ChatGrpc.getConnectRenewMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getConnectRenewMethod = ChatGrpc.getConnectRenewMethod) == null) {
          ChatGrpc.getConnectRenewMethod = getConnectRenewMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendMsgReq, co.overlead.gRPC.SendMsgRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "ConnectRenew"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendMsgReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendMsgRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("ConnectRenew"))
                  .build();
          }
        }
     }
     return getConnectRenewMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq,
      co.overlead.gRPC.SendMsgRes> getConnectChatMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "ConnectChat",
      requestType = co.overlead.gRPC.SendMsgReq.class,
      responseType = co.overlead.gRPC.SendMsgRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq,
      co.overlead.gRPC.SendMsgRes> getConnectChatMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq, co.overlead.gRPC.SendMsgRes> getConnectChatMethod;
    if ((getConnectChatMethod = ChatGrpc.getConnectChatMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getConnectChatMethod = ChatGrpc.getConnectChatMethod) == null) {
          ChatGrpc.getConnectChatMethod = getConnectChatMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendMsgReq, co.overlead.gRPC.SendMsgRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "ConnectChat"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendMsgReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendMsgRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("ConnectChat"))
                  .build();
          }
        }
     }
     return getConnectChatMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq,
      co.overlead.gRPC.SendMsgRes> getSendMsgMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "SendMsg",
      requestType = co.overlead.gRPC.SendMsgReq.class,
      responseType = co.overlead.gRPC.SendMsgRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq,
      co.overlead.gRPC.SendMsgRes> getSendMsgMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq, co.overlead.gRPC.SendMsgRes> getSendMsgMethod;
    if ((getSendMsgMethod = ChatGrpc.getSendMsgMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getSendMsgMethod = ChatGrpc.getSendMsgMethod) == null) {
          ChatGrpc.getSendMsgMethod = getSendMsgMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendMsgReq, co.overlead.gRPC.SendMsgRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "SendMsg"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendMsgReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendMsgRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("SendMsg"))
                  .build();
          }
        }
     }
     return getSendMsgMethod;
  }

  /**
   * Creates a new async stub that supports all call types for the service
   */
  public static ChatStub newStub(io.grpc.Channel channel) {
    return new ChatStub(channel);
  }

  /**
   * Creates a new blocking-style stub that supports unary and streaming output calls on the service
   */
  public static ChatBlockingStub newBlockingStub(
      io.grpc.Channel channel) {
    return new ChatBlockingStub(channel);
  }

  /**
   * Creates a new ListenableFuture-style stub that supports unary calls on the service
   */
  public static ChatFutureStub newFutureStub(
      io.grpc.Channel channel) {
    return new ChatFutureStub(channel);
  }

  /**
   */
  public static abstract class ChatImplBase implements io.grpc.BindableService {

    /**
     */
    public void connectRenew(co.overlead.gRPC.SendMsgReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes> responseObserver) {
      asyncUnimplementedUnaryCall(getConnectRenewMethod(), responseObserver);
    }

    /**
     */
    public void connectChat(co.overlead.gRPC.SendMsgReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes> responseObserver) {
      asyncUnimplementedUnaryCall(getConnectChatMethod(), responseObserver);
    }

    /**
     */
    public void sendMsg(co.overlead.gRPC.SendMsgReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes> responseObserver) {
      asyncUnimplementedUnaryCall(getSendMsgMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getConnectRenewMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendMsgReq,
                co.overlead.gRPC.SendMsgRes>(
                  this, METHODID_CONNECT_RENEW)))
          .addMethod(
            getConnectChatMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendMsgReq,
                co.overlead.gRPC.SendMsgRes>(
                  this, METHODID_CONNECT_CHAT)))
          .addMethod(
            getSendMsgMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendMsgReq,
                co.overlead.gRPC.SendMsgRes>(
                  this, METHODID_SEND_MSG)))
          .build();
    }
  }

  /**
   */
  public static final class ChatStub extends io.grpc.stub.AbstractStub<ChatStub> {
    private ChatStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ChatStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ChatStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ChatStub(channel, callOptions);
    }

    /**
     */
    public void connectRenew(co.overlead.gRPC.SendMsgReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getConnectRenewMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void connectChat(co.overlead.gRPC.SendMsgReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getConnectChatMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void sendMsg(co.overlead.gRPC.SendMsgReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSendMsgMethod(), getCallOptions()), request, responseObserver);
    }
  }

  /**
   */
  public static final class ChatBlockingStub extends io.grpc.stub.AbstractStub<ChatBlockingStub> {
    private ChatBlockingStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ChatBlockingStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ChatBlockingStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ChatBlockingStub(channel, callOptions);
    }

    /**
     */
    public co.overlead.gRPC.SendMsgRes connectRenew(co.overlead.gRPC.SendMsgReq request) {
      return blockingUnaryCall(
          getChannel(), getConnectRenewMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SendMsgRes connectChat(co.overlead.gRPC.SendMsgReq request) {
      return blockingUnaryCall(
          getChannel(), getConnectChatMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SendMsgRes sendMsg(co.overlead.gRPC.SendMsgReq request) {
      return blockingUnaryCall(
          getChannel(), getSendMsgMethod(), getCallOptions(), request);
    }
  }

  /**
   */
  public static final class ChatFutureStub extends io.grpc.stub.AbstractStub<ChatFutureStub> {
    private ChatFutureStub(io.grpc.Channel channel) {
      super(channel);
    }

    private ChatFutureStub(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      super(channel, callOptions);
    }

    @java.lang.Override
    protected ChatFutureStub build(io.grpc.Channel channel,
        io.grpc.CallOptions callOptions) {
      return new ChatFutureStub(channel, callOptions);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SendMsgRes> connectRenew(
        co.overlead.gRPC.SendMsgReq request) {
      return futureUnaryCall(
          getChannel().newCall(getConnectRenewMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SendMsgRes> connectChat(
        co.overlead.gRPC.SendMsgReq request) {
      return futureUnaryCall(
          getChannel().newCall(getConnectChatMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SendMsgRes> sendMsg(
        co.overlead.gRPC.SendMsgReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSendMsgMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CONNECT_RENEW = 0;
  private static final int METHODID_CONNECT_CHAT = 1;
  private static final int METHODID_SEND_MSG = 2;

  private static final class MethodHandlers<Req, Resp> implements
      io.grpc.stub.ServerCalls.UnaryMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ServerStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.ClientStreamingMethod<Req, Resp>,
      io.grpc.stub.ServerCalls.BidiStreamingMethod<Req, Resp> {
    private final ChatImplBase serviceImpl;
    private final int methodId;

    MethodHandlers(ChatImplBase serviceImpl, int methodId) {
      this.serviceImpl = serviceImpl;
      this.methodId = methodId;
    }

    @java.lang.Override
    @java.lang.SuppressWarnings("unchecked")
    public void invoke(Req request, io.grpc.stub.StreamObserver<Resp> responseObserver) {
      switch (methodId) {
        case METHODID_CONNECT_RENEW:
          serviceImpl.connectRenew((co.overlead.gRPC.SendMsgReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes>) responseObserver);
          break;
        case METHODID_CONNECT_CHAT:
          serviceImpl.connectChat((co.overlead.gRPC.SendMsgReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes>) responseObserver);
          break;
        case METHODID_SEND_MSG:
          serviceImpl.sendMsg((co.overlead.gRPC.SendMsgReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SendMsgRes>) responseObserver);
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

  private static abstract class ChatBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoFileDescriptorSupplier, io.grpc.protobuf.ProtoServiceDescriptorSupplier {
    ChatBaseDescriptorSupplier() {}

    @java.lang.Override
    public com.google.protobuf.Descriptors.FileDescriptor getFileDescriptor() {
      return co.overlead.gRPC.chat.getDescriptor();
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.ServiceDescriptor getServiceDescriptor() {
      return getFileDescriptor().findServiceByName("Chat");
    }
  }

  private static final class ChatFileDescriptorSupplier
      extends ChatBaseDescriptorSupplier {
    ChatFileDescriptorSupplier() {}
  }

  private static final class ChatMethodDescriptorSupplier
      extends ChatBaseDescriptorSupplier
      implements io.grpc.protobuf.ProtoMethodDescriptorSupplier {
    private final String methodName;

    ChatMethodDescriptorSupplier(String methodName) {
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
      synchronized (ChatGrpc.class) {
        result = serviceDescriptor;
        if (result == null) {
          serviceDescriptor = result = io.grpc.ServiceDescriptor.newBuilder(SERVICE_NAME)
              .setSchemaDescriptor(new ChatFileDescriptorSupplier())
              .addMethod(getConnectRenewMethod())
              .addMethod(getConnectChatMethod())
              .addMethod(getSendMsgMethod())
              .build();
        }
      }
    }
    return result;
  }
}
