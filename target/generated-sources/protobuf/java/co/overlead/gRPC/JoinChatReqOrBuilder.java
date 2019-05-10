// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: chat.proto

package co.overlead.gRPC;

public interface JoinChatReqOrBuilder extends
    // @@protoc_insertion_point(interface_extends:chat.JoinChatReq)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string cookie = 1;</code>
   */
  java.lang.String getCookie();
  /**
   * <code>string cookie = 1;</code>
   */
  com.google.protobuf.ByteString
      getCookieBytes();

  /**
   * <code>string requesterId = 2;</code>
   */
  java.lang.String getRequesterId();
  /**
   * <code>string requesterId = 2;</code>
   */
  com.google.protobuf.ByteString
      getRequesterIdBytes();

  /**
   * <pre>
   *because this is unique
   * </pre>
   *
   * <code>string link = 3;</code>
   */
  java.lang.String getLink();
  /**
   * <pre>
   *because this is unique
   * </pre>
   *
   * <code>string link = 3;</code>
   */
  com.google.protobuf.ByteString
      getLinkBytes();

  /**
   * <pre>
   *can be use 3 or 4 to request join chat. Only send one (3 or 4, NOT BOTH)
   * </pre>
   *
   * <code>string channelId = 4;</code>
   */
  java.lang.String getChannelId();
  /**
   * <pre>
   *can be use 3 or 4 to request join chat. Only send one (3 or 4, NOT BOTH)
   * </pre>
   *
   * <code>string channelId = 4;</code>
   */
  com.google.protobuf.ByteString
      getChannelIdBytes();
}
