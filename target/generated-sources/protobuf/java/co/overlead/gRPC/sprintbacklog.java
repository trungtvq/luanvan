// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: sprintbacklog.proto

package co.overlead.gRPC;

public final class sprintbacklog {
  private sprintbacklog() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_sprintbacklog_DeleteSprintBacklogReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_sprintbacklog_DeleteSprintBacklogReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_sprintbacklog_SprintBacklogRes_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_sprintbacklog_SprintBacklogRes_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_sprintbacklog_GetAllSprintBacklogReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_sprintbacklog_GetAllSprintBacklogReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_sprintbacklog_GetAllSprintBacklogRes_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_sprintbacklog_GetAllSprintBacklogRes_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\023sprintbacklog.proto\022\rsprintbacklog\"x\n\026" +
      "DeleteSprintBacklogReq\022\023\n\013requesterId\030\001 " +
      "\001(\t\022\021\n\tprojectId\030\002 \001(\t\022\021\n\tbacklogId\030\003 \001(" +
      "\t\022\023\n\013accessToken\030\004 \001(\t\022\016\n\006teamId\030\005 \001(\t\"5" +
      "\n\020SprintBacklogRes\022\016\n\006status\030\001 \001(\t\022\021\n\tba" +
      "cklogId\030\003 \001(\t\"e\n\026GetAllSprintBacklogReq\022" +
      "\023\n\013requesterId\030\001 \001(\t\022\021\n\tprojectId\030\002 \001(\t\022" +
      "\023\n\013accessToken\030\003 \001(\t\022\016\n\006teamId\030\004 \001(\t\"\342\001\n" +
      "\026GetAllSprintBacklogRes\022\r\n\005title\030\001 \001(\t\022\021" +
      "\n\tbacklogId\030\002 \001(\t\022\014\n\004role\030\003 \001(\t\022\014\n\004want\030" +
      "\004 \001(\t\022\n\n\002so\030\005 \001(\t\022\025\n\rstatusBacklog\030\013 \001(\t" +
      "\022\020\n\010priority\030\006 \001(\t\022\022\n\nestimation\030\007 \001(\t\022\020" +
      "\n\010sprintId\030\010 \001(\t\022\r\n\005start\030\014 \001(\t\022\020\n\010deadl" +
      "ine\030\n \001(\t\022\016\n\006status\030\t \001(\t2\331\001\n\rSprintBack" +
      "log\022_\n\023deleteSprintBacklog\022%.sprintbackl" +
      "og.DeleteSprintBacklogReq\032\037.sprintbacklo" +
      "g.SprintBacklogRes\"\000\022g\n\023getAllSprintBack" +
      "log\022%.sprintbacklog.GetAllSprintBacklogR" +
      "eq\032%.sprintbacklog.GetAllSprintBacklogRe" +
      "s\"\0000\001B(\n\020co.overlead.gRPCB\rsprintbacklog" +
      "P\001\242\002\002sbb\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_sprintbacklog_DeleteSprintBacklogReq_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_sprintbacklog_DeleteSprintBacklogReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_sprintbacklog_DeleteSprintBacklogReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "BacklogId", "AccessToken", "TeamId", });
    internal_static_sprintbacklog_SprintBacklogRes_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_sprintbacklog_SprintBacklogRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_sprintbacklog_SprintBacklogRes_descriptor,
        new java.lang.String[] { "Status", "BacklogId", });
    internal_static_sprintbacklog_GetAllSprintBacklogReq_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_sprintbacklog_GetAllSprintBacklogReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_sprintbacklog_GetAllSprintBacklogReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "AccessToken", "TeamId", });
    internal_static_sprintbacklog_GetAllSprintBacklogRes_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_sprintbacklog_GetAllSprintBacklogRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_sprintbacklog_GetAllSprintBacklogRes_descriptor,
        new java.lang.String[] { "Title", "BacklogId", "Role", "Want", "So", "StatusBacklog", "Priority", "Estimation", "SprintId", "Start", "Deadline", "Status", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
