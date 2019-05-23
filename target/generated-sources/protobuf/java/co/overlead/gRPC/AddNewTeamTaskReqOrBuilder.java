// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: teamtask.proto

package co.overlead.gRPC;

public interface AddNewTeamTaskReqOrBuilder extends
    // @@protoc_insertion_point(interface_extends:teamtask.AddNewTeamTaskReq)
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
   * <code>string projectId = 2;</code>
   */
  java.lang.String getProjectId();
  /**
   * <code>string projectId = 2;</code>
   */
  com.google.protobuf.ByteString
      getProjectIdBytes();

  /**
   * <code>string title = 3;</code>
   */
  java.lang.String getTitle();
  /**
   * <code>string title = 3;</code>
   */
  com.google.protobuf.ByteString
      getTitleBytes();

  /**
   * <code>string description = 4;</code>
   */
  java.lang.String getDescription();
  /**
   * <code>string description = 4;</code>
   */
  com.google.protobuf.ByteString
      getDescriptionBytes();

  /**
   * <code>string priority = 5;</code>
   */
  java.lang.String getPriority();
  /**
   * <code>string priority = 5;</code>
   */
  com.google.protobuf.ByteString
      getPriorityBytes();

  /**
   * <pre>
   * form mm/hh/dd/mm/yyyy       phut/gio/ngay/thang/nam
   * </pre>
   *
   * <code>string start = 6;</code>
   */
  java.lang.String getStart();
  /**
   * <pre>
   * form mm/hh/dd/mm/yyyy       phut/gio/ngay/thang/nam
   * </pre>
   *
   * <code>string start = 6;</code>
   */
  com.google.protobuf.ByteString
      getStartBytes();

  /**
   * <pre>
   * form mm/hh/dd/mm/yyyy
   * </pre>
   *
   * <code>string deadline = 7;</code>
   */
  java.lang.String getDeadline();
  /**
   * <pre>
   * form mm/hh/dd/mm/yyyy
   * </pre>
   *
   * <code>string deadline = 7;</code>
   */
  com.google.protobuf.ByteString
      getDeadlineBytes();

  /**
   * <code>string assigneeArray = 8;</code>
   */
  java.lang.String getAssigneeArray();
  /**
   * <code>string assigneeArray = 8;</code>
   */
  com.google.protobuf.ByteString
      getAssigneeArrayBytes();

  /**
   * <code>string comment = 9;</code>
   */
  java.lang.String getComment();
  /**
   * <code>string comment = 9;</code>
   */
  com.google.protobuf.ByteString
      getCommentBytes();

  /**
   * <pre>
   * khi add mac dinh status = "todo"
   * </pre>
   *
   * <code>string status = 10;</code>
   */
  java.lang.String getStatus();
  /**
   * <pre>
   * khi add mac dinh status = "todo"
   * </pre>
   *
   * <code>string status = 10;</code>
   */
  com.google.protobuf.ByteString
      getStatusBytes();

  /**
   * <code>string review = 11;</code>
   */
  java.lang.String getReview();
  /**
   * <code>string review = 11;</code>
   */
  com.google.protobuf.ByteString
      getReviewBytes();

  /**
   * <code>string tokenAccess = 12;</code>
   */
  java.lang.String getTokenAccess();
  /**
   * <code>string tokenAccess = 12;</code>
   */
  com.google.protobuf.ByteString
      getTokenAccessBytes();

  /**
   * <code>string sprintId = 14;</code>
   */
  java.lang.String getSprintId();
  /**
   * <code>string sprintId = 14;</code>
   */
  com.google.protobuf.ByteString
      getSprintIdBytes();

  /**
   * <code>string teamId = 13;</code>
   */
  java.lang.String getTeamId();
  /**
   * <code>string teamId = 13;</code>
   */
  com.google.protobuf.ByteString
      getTeamIdBytes();
}
