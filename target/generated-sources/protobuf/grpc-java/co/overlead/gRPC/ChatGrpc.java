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
  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.CreateChannelChatReq,
      co.overlead.gRPC.SimpleChatRes> getCreateChannelChatMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "createChannelChat",
      requestType = co.overlead.gRPC.CreateChannelChatReq.class,
      responseType = co.overlead.gRPC.SimpleChatRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.CreateChannelChatReq,
      co.overlead.gRPC.SimpleChatRes> getCreateChannelChatMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.CreateChannelChatReq, co.overlead.gRPC.SimpleChatRes> getCreateChannelChatMethod;
    if ((getCreateChannelChatMethod = ChatGrpc.getCreateChannelChatMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getCreateChannelChatMethod = ChatGrpc.getCreateChannelChatMethod) == null) {
          ChatGrpc.getCreateChannelChatMethod = getCreateChannelChatMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.CreateChannelChatReq, co.overlead.gRPC.SimpleChatRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "createChannelChat"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.CreateChannelChatReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SimpleChatRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("createChannelChat"))
                  .build();
          }
        }
     }
     return getCreateChannelChatMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.InviteChatReq,
      co.overlead.gRPC.SimpleChatRes> getInviteChatMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "inviteChat",
      requestType = co.overlead.gRPC.InviteChatReq.class,
      responseType = co.overlead.gRPC.SimpleChatRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.InviteChatReq,
      co.overlead.gRPC.SimpleChatRes> getInviteChatMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.InviteChatReq, co.overlead.gRPC.SimpleChatRes> getInviteChatMethod;
    if ((getInviteChatMethod = ChatGrpc.getInviteChatMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getInviteChatMethod = ChatGrpc.getInviteChatMethod) == null) {
          ChatGrpc.getInviteChatMethod = getInviteChatMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.InviteChatReq, co.overlead.gRPC.SimpleChatRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "inviteChat"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.InviteChatReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SimpleChatRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("inviteChat"))
                  .build();
          }
        }
     }
     return getInviteChatMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.JoinChatReq,
      co.overlead.gRPC.SimpleChatRes> getJoinChatMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "joinChat",
      requestType = co.overlead.gRPC.JoinChatReq.class,
      responseType = co.overlead.gRPC.SimpleChatRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.JoinChatReq,
      co.overlead.gRPC.SimpleChatRes> getJoinChatMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.JoinChatReq, co.overlead.gRPC.SimpleChatRes> getJoinChatMethod;
    if ((getJoinChatMethod = ChatGrpc.getJoinChatMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getJoinChatMethod = ChatGrpc.getJoinChatMethod) == null) {
          ChatGrpc.getJoinChatMethod = getJoinChatMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.JoinChatReq, co.overlead.gRPC.SimpleChatRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "joinChat"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.JoinChatReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SimpleChatRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("joinChat"))
                  .build();
          }
        }
     }
     return getJoinChatMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.LeaveChatReq,
      co.overlead.gRPC.SimpleChatRes> getLeaveChatMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "leaveChat",
      requestType = co.overlead.gRPC.LeaveChatReq.class,
      responseType = co.overlead.gRPC.SimpleChatRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.LeaveChatReq,
      co.overlead.gRPC.SimpleChatRes> getLeaveChatMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.LeaveChatReq, co.overlead.gRPC.SimpleChatRes> getLeaveChatMethod;
    if ((getLeaveChatMethod = ChatGrpc.getLeaveChatMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getLeaveChatMethod = ChatGrpc.getLeaveChatMethod) == null) {
          ChatGrpc.getLeaveChatMethod = getLeaveChatMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.LeaveChatReq, co.overlead.gRPC.SimpleChatRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "leaveChat"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.LeaveChatReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SimpleChatRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("leaveChat"))
                  .build();
          }
        }
     }
     return getLeaveChatMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq,
      co.overlead.gRPC.SimpleChatRes> getSendMsgMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "sendMsg",
      requestType = co.overlead.gRPC.SendMsgReq.class,
      responseType = co.overlead.gRPC.SimpleChatRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.UNARY)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq,
      co.overlead.gRPC.SimpleChatRes> getSendMsgMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.SendMsgReq, co.overlead.gRPC.SimpleChatRes> getSendMsgMethod;
    if ((getSendMsgMethod = ChatGrpc.getSendMsgMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getSendMsgMethod = ChatGrpc.getSendMsgMethod) == null) {
          ChatGrpc.getSendMsgMethod = getSendMsgMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.SendMsgReq, co.overlead.gRPC.SimpleChatRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.UNARY)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "sendMsg"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SendMsgReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.SimpleChatRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("sendMsg"))
                  .build();
          }
        }
     }
     return getSendMsgMethod;
  }

  private static volatile io.grpc.MethodDescriptor<co.overlead.gRPC.ConnectChatReq,
      co.overlead.gRPC.ConnectChatRes> getConnectChatMethod;

  @io.grpc.stub.annotations.RpcMethod(
      fullMethodName = SERVICE_NAME + '/' + "connectChat",
      requestType = co.overlead.gRPC.ConnectChatReq.class,
      responseType = co.overlead.gRPC.ConnectChatRes.class,
      methodType = io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
  public static io.grpc.MethodDescriptor<co.overlead.gRPC.ConnectChatReq,
      co.overlead.gRPC.ConnectChatRes> getConnectChatMethod() {
    io.grpc.MethodDescriptor<co.overlead.gRPC.ConnectChatReq, co.overlead.gRPC.ConnectChatRes> getConnectChatMethod;
    if ((getConnectChatMethod = ChatGrpc.getConnectChatMethod) == null) {
      synchronized (ChatGrpc.class) {
        if ((getConnectChatMethod = ChatGrpc.getConnectChatMethod) == null) {
          ChatGrpc.getConnectChatMethod = getConnectChatMethod = 
              io.grpc.MethodDescriptor.<co.overlead.gRPC.ConnectChatReq, co.overlead.gRPC.ConnectChatRes>newBuilder()
              .setType(io.grpc.MethodDescriptor.MethodType.SERVER_STREAMING)
              .setFullMethodName(generateFullMethodName(
                  "chat.Chat", "connectChat"))
              .setSampledToLocalTracing(true)
              .setRequestMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ConnectChatReq.getDefaultInstance()))
              .setResponseMarshaller(io.grpc.protobuf.ProtoUtils.marshaller(
                  co.overlead.gRPC.ConnectChatRes.getDefaultInstance()))
                  .setSchemaDescriptor(new ChatMethodDescriptorSupplier("connectChat"))
                  .build();
          }
        }
     }
     return getConnectChatMethod;
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
    public void createChannelChat(co.overlead.gRPC.CreateChannelChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnimplementedUnaryCall(getCreateChannelChatMethod(), responseObserver);
    }

    /**
     */
    public void inviteChat(co.overlead.gRPC.InviteChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnimplementedUnaryCall(getInviteChatMethod(), responseObserver);
    }

    /**
     */
    public void joinChat(co.overlead.gRPC.JoinChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnimplementedUnaryCall(getJoinChatMethod(), responseObserver);
    }

    /**
     */
    public void leaveChat(co.overlead.gRPC.LeaveChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnimplementedUnaryCall(getLeaveChatMethod(), responseObserver);
    }

    /**
     */
    public void sendMsg(co.overlead.gRPC.SendMsgReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnimplementedUnaryCall(getSendMsgMethod(), responseObserver);
    }

    /**
     */
    public void connectChat(co.overlead.gRPC.ConnectChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ConnectChatRes> responseObserver) {
      asyncUnimplementedUnaryCall(getConnectChatMethod(), responseObserver);
    }

    @java.lang.Override public final io.grpc.ServerServiceDefinition bindService() {
      return io.grpc.ServerServiceDefinition.builder(getServiceDescriptor())
          .addMethod(
            getCreateChannelChatMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.CreateChannelChatReq,
                co.overlead.gRPC.SimpleChatRes>(
                  this, METHODID_CREATE_CHANNEL_CHAT)))
          .addMethod(
            getInviteChatMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.InviteChatReq,
                co.overlead.gRPC.SimpleChatRes>(
                  this, METHODID_INVITE_CHAT)))
          .addMethod(
            getJoinChatMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.JoinChatReq,
                co.overlead.gRPC.SimpleChatRes>(
                  this, METHODID_JOIN_CHAT)))
          .addMethod(
            getLeaveChatMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.LeaveChatReq,
                co.overlead.gRPC.SimpleChatRes>(
                  this, METHODID_LEAVE_CHAT)))
          .addMethod(
            getSendMsgMethod(),
            asyncUnaryCall(
              new MethodHandlers<
                co.overlead.gRPC.SendMsgReq,
                co.overlead.gRPC.SimpleChatRes>(
                  this, METHODID_SEND_MSG)))
          .addMethod(
            getConnectChatMethod(),
            asyncServerStreamingCall(
              new MethodHandlers<
                co.overlead.gRPC.ConnectChatReq,
                co.overlead.gRPC.ConnectChatRes>(
                  this, METHODID_CONNECT_CHAT)))
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
    public void createChannelChat(co.overlead.gRPC.CreateChannelChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getCreateChannelChatMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void inviteChat(co.overlead.gRPC.InviteChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getInviteChatMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void joinChat(co.overlead.gRPC.JoinChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getJoinChatMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void leaveChat(co.overlead.gRPC.LeaveChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getLeaveChatMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void sendMsg(co.overlead.gRPC.SendMsgReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes> responseObserver) {
      asyncUnaryCall(
          getChannel().newCall(getSendMsgMethod(), getCallOptions()), request, responseObserver);
    }

    /**
     */
    public void connectChat(co.overlead.gRPC.ConnectChatReq request,
        io.grpc.stub.StreamObserver<co.overlead.gRPC.ConnectChatRes> responseObserver) {
      asyncServerStreamingCall(
          getChannel().newCall(getConnectChatMethod(), getCallOptions()), request, responseObserver);
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
    public co.overlead.gRPC.SimpleChatRes createChannelChat(co.overlead.gRPC.CreateChannelChatReq request) {
      return blockingUnaryCall(
          getChannel(), getCreateChannelChatMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SimpleChatRes inviteChat(co.overlead.gRPC.InviteChatReq request) {
      return blockingUnaryCall(
          getChannel(), getInviteChatMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SimpleChatRes joinChat(co.overlead.gRPC.JoinChatReq request) {
      return blockingUnaryCall(
          getChannel(), getJoinChatMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SimpleChatRes leaveChat(co.overlead.gRPC.LeaveChatReq request) {
      return blockingUnaryCall(
          getChannel(), getLeaveChatMethod(), getCallOptions(), request);
    }

    /**
     */
    public co.overlead.gRPC.SimpleChatRes sendMsg(co.overlead.gRPC.SendMsgReq request) {
      return blockingUnaryCall(
          getChannel(), getSendMsgMethod(), getCallOptions(), request);
    }

    /**
     */
    public java.util.Iterator<co.overlead.gRPC.ConnectChatRes> connectChat(
        co.overlead.gRPC.ConnectChatReq request) {
      return blockingServerStreamingCall(
          getChannel(), getConnectChatMethod(), getCallOptions(), request);
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
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SimpleChatRes> createChannelChat(
        co.overlead.gRPC.CreateChannelChatReq request) {
      return futureUnaryCall(
          getChannel().newCall(getCreateChannelChatMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SimpleChatRes> inviteChat(
        co.overlead.gRPC.InviteChatReq request) {
      return futureUnaryCall(
          getChannel().newCall(getInviteChatMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SimpleChatRes> joinChat(
        co.overlead.gRPC.JoinChatReq request) {
      return futureUnaryCall(
          getChannel().newCall(getJoinChatMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SimpleChatRes> leaveChat(
        co.overlead.gRPC.LeaveChatReq request) {
      return futureUnaryCall(
          getChannel().newCall(getLeaveChatMethod(), getCallOptions()), request);
    }

    /**
     */
    public com.google.common.util.concurrent.ListenableFuture<co.overlead.gRPC.SimpleChatRes> sendMsg(
        co.overlead.gRPC.SendMsgReq request) {
      return futureUnaryCall(
          getChannel().newCall(getSendMsgMethod(), getCallOptions()), request);
    }
  }

  private static final int METHODID_CREATE_CHANNEL_CHAT = 0;
  private static final int METHODID_INVITE_CHAT = 1;
  private static final int METHODID_JOIN_CHAT = 2;
  private static final int METHODID_LEAVE_CHAT = 3;
  private static final int METHODID_SEND_MSG = 4;
  private static final int METHODID_CONNECT_CHAT = 5;

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
        case METHODID_CREATE_CHANNEL_CHAT:
          serviceImpl.createChannelChat((co.overlead.gRPC.CreateChannelChatReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes>) responseObserver);
          break;
        case METHODID_INVITE_CHAT:
          serviceImpl.inviteChat((co.overlead.gRPC.InviteChatReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes>) responseObserver);
          break;
        case METHODID_JOIN_CHAT:
          serviceImpl.joinChat((co.overlead.gRPC.JoinChatReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes>) responseObserver);
          break;
        case METHODID_LEAVE_CHAT:
          serviceImpl.leaveChat((co.overlead.gRPC.LeaveChatReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes>) responseObserver);
          break;
        case METHODID_SEND_MSG:
          serviceImpl.sendMsg((co.overlead.gRPC.SendMsgReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.SimpleChatRes>) responseObserver);
          break;
        case METHODID_CONNECT_CHAT:
          serviceImpl.connectChat((co.overlead.gRPC.ConnectChatReq) request,
              (io.grpc.stub.StreamObserver<co.overlead.gRPC.ConnectChatRes>) responseObserver);
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
              .addMethod(getCreateChannelChatMethod())
              .addMethod(getInviteChatMethod())
              .addMethod(getJoinChatMethod())
              .addMethod(getLeaveChatMethod())
              .addMethod(getSendMsgMethod())
              .addMethod(getConnectChatMethod())
              .build();
        }
      }
    }
    return result;
  }
}
