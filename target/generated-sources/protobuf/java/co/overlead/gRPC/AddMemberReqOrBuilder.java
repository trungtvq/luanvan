// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: team.proto

package co.overlead.gRPC;

public interface AddMemberReqOrBuilder extends
    // @@protoc_insertion_point(interface_extends:teamtask.AddMemberReq)
    com.google.protobuf.MessageOrBuilder {

  /**
   * <code>string requesterId = 1;</code>
   */
  java.lang.String getRequesterId();
  /**
   * <code>string requesterId = 1;</code>
   */
  com.google.protobuf.ByteString
      getRequesterIdBytes();

  /**
   * <code>string teamId = 3;</code>
   */
  java.lang.String getTeamId();
  /**
   * <code>string teamId = 3;</code>
   */
  com.google.protobuf.ByteString
      getTeamIdBytes();

  /**
   * <code>string role = 2;</code>
   */
  java.lang.String getRole();
  /**
   * <code>string role = 2;</code>
   */
  com.google.protobuf.ByteString
      getRoleBytes();

  /**
   * <pre>
   * them username vao assignee cua teamtaskId dc chon
   * </pre>
   *
   * <code>string memberEmail = 5;</code>
   */
  java.lang.String getMemberEmail();
  /**
   * <pre>
   * them username vao assignee cua teamtaskId dc chon
   * </pre>
   *
   * <code>string memberEmail = 5;</code>
   */
  com.google.protobuf.ByteString
      getMemberEmailBytes();

  /**
   * <code>string accessToken = 4;</code>
   */
  java.lang.String getAccessToken();
  /**
   * <code>string accessToken = 4;</code>
   */
  com.google.protobuf.ByteString
      getAccessTokenBytes();
}