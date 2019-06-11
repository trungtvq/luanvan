// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: teamtask.proto

package co.overlead.gRPC;

public final class teamtask {
  private teamtask() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_teamtask_AddNewTeamTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_teamtask_AddNewTeamTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_teamtask_TeamTaskRes_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_teamtask_TeamTaskRes_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_teamtask_UpdateTeamTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_teamtask_UpdateTeamTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_teamtask_RegisterTeamTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_teamtask_RegisterTeamTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_teamtask_CancelTeamTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_teamtask_CancelTeamTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_teamtask_GetAllTeamTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_teamtask_GetAllTeamTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_teamtask_GetAllTeamTaskRes_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_teamtask_GetAllTeamTaskRes_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\016teamtask.proto\022\010teamtask\"\252\002\n\021AddNewTea" +
      "mTaskReq\022\023\n\013requesterId\030\001 \001(\t\022\021\n\tproject" +
      "Id\030\002 \001(\t\022\r\n\005title\030\003 \001(\t\022\023\n\013description\030\004" +
      " \001(\t\022\020\n\010priority\030\005 \001(\t\022\r\n\005start\030\006 \001(\t\022\020\n" +
      "\010deadline\030\007 \001(\t\022\025\n\rassigneeArray\030\010 \001(\t\022\017" +
      "\n\007comment\030\t \001(\t\022\016\n\006status\030\n \001(\t\022\016\n\006revie" +
      "w\030\013 \001(\t\022\023\n\013accessToken\030\014 \001(\t\022\020\n\010sprintId" +
      "\030\016 \001(\t\022\016\n\006teamId\030\r \001(\t\022\027\n\017sprintBacklogI" +
      "d\030\017 \001(\t\"1\n\013TeamTaskRes\022\016\n\006status\030\001 \001(\t\022\022" +
      "\n\nteamTaskId\030\002 \001(\t\"\276\002\n\021UpdateTeamTaskReq" +
      "\022\023\n\013requesterId\030\001 \001(\t\022\021\n\tprojectId\030\002 \001(\t" +
      "\022\022\n\nteamTaskId\030\003 \001(\t\022\r\n\005title\030\004 \001(\t\022\023\n\013d" +
      "escription\030\005 \001(\t\022\020\n\010priority\030\006 \001(\t\022\r\n\005st" +
      "art\030\007 \001(\t\022\020\n\010deadline\030\010 \001(\t\022\025\n\rassigneeA" +
      "rray\030\t \001(\t\022\017\n\007comment\030\n \001(\t\022\016\n\006status\030\013 " +
      "\001(\t\022\016\n\006review\030\014 \001(\t\022\023\n\013accessToken\030\r \001(\t" +
      "\022\016\n\006teamId\030\016 \001(\t\022\020\n\010sprintId\030\017 \001(\t\022\027\n\017sp" +
      "rintBacklogId\030\020 \001(\t\"\210\001\n\023RegisterTeamTask" +
      "Req\022\023\n\013requesterId\030\001 \001(\t\022\021\n\tprojectId\030\002 " +
      "\001(\t\022\022\n\nteamTaskId\030\003 \001(\t\022\023\n\013accessToken\030\004" +
      " \001(\t\022\016\n\006teamId\030\r \001(\t\022\020\n\010assigner\030\005 \001(\t\"t" +
      "\n\021CancelTeamTaskReq\022\023\n\013requesterId\030\001 \001(\t" +
      "\022\021\n\tprojectId\030\002 \001(\t\022\022\n\nteamTaskId\030\003 \001(\t\022" +
      "\023\n\013accessToken\030\004 \001(\t\022\016\n\006teamId\030\r \001(\t\"r\n\021" +
      "GetAllTeamTaskReq\022\023\n\013requesterId\030\001 \001(\t\022\021" +
      "\n\tprojectId\030\002 \001(\t\022\023\n\013accessToken\030\003 \001(\t\022\016" +
      "\n\006teamId\030\r \001(\t\022\020\n\010sprintId\030\004 \001(\t\"\231\002\n\021Get" +
      "AllTeamTaskRes\022\022\n\nteamTaskId\030\001 \001(\t\022\r\n\005ti" +
      "tle\030\002 \001(\t\022\023\n\013description\030\003 \001(\t\022\020\n\010priori" +
      "ty\030\004 \001(\t\022\r\n\005start\030\005 \001(\t\022\020\n\010deadline\030\006 \001(" +
      "\t\022\025\n\rassigneeArray\030\007 \001(\t\022\017\n\007comment\030\010 \001(" +
      "\t\022\026\n\016statusTeamTask\030\014 \001(\t\022\016\n\006status\030\t \001(" +
      "\t\022\016\n\006review\030\n \001(\t\022\016\n\006teamId\030\r \001(\t\022\027\n\017spr" +
      "intBacklogId\030\016 \001(\t\022\020\n\010sprintId\030\017 \001(\t2\376\002\n" +
      "\010TeamTask\022F\n\016addNewTeamTask\022\033.teamtask.A" +
      "ddNewTeamTaskReq\032\025.teamtask.TeamTaskRes\"" +
      "\000\022F\n\016updateTeamTask\022\033.teamtask.UpdateTea" +
      "mTaskReq\032\025.teamtask.TeamTaskRes\"\000\022J\n\020reg" +
      "isterTeamTask\022\035.teamtask.RegisterTeamTas" +
      "kReq\032\025.teamtask.TeamTaskRes\"\000\022F\n\016cancelT" +
      "eamTask\022\033.teamtask.CancelTeamTaskReq\032\025.t" +
      "eamtask.TeamTaskRes\"\000\022N\n\016getAllTeamTask\022" +
      "\033.teamtask.GetAllTeamTaskReq\032\033.teamtask." +
      "GetAllTeamTaskRes\"\0000\001B#\n\020co.overlead.gRP" +
      "CB\010teamtaskP\001\242\002\002ttb\006proto3"
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
    internal_static_teamtask_AddNewTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_teamtask_AddNewTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_AddNewTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "Title", "Description", "Priority", "Start", "Deadline", "AssigneeArray", "Comment", "Status", "Review", "AccessToken", "SprintId", "TeamId", "SprintBacklogId", });
    internal_static_teamtask_TeamTaskRes_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_teamtask_TeamTaskRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_TeamTaskRes_descriptor,
        new java.lang.String[] { "Status", "TeamTaskId", });
    internal_static_teamtask_UpdateTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_teamtask_UpdateTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_UpdateTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamTaskId", "Title", "Description", "Priority", "Start", "Deadline", "AssigneeArray", "Comment", "Status", "Review", "AccessToken", "TeamId", "SprintId", "SprintBacklogId", });
    internal_static_teamtask_RegisterTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_teamtask_RegisterTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_RegisterTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamTaskId", "AccessToken", "TeamId", "Assigner", });
    internal_static_teamtask_CancelTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_teamtask_CancelTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_CancelTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamTaskId", "AccessToken", "TeamId", });
    internal_static_teamtask_GetAllTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_teamtask_GetAllTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_GetAllTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "AccessToken", "TeamId", "SprintId", });
    internal_static_teamtask_GetAllTeamTaskRes_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_teamtask_GetAllTeamTaskRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_GetAllTeamTaskRes_descriptor,
        new java.lang.String[] { "TeamTaskId", "Title", "Description", "Priority", "Start", "Deadline", "AssigneeArray", "Comment", "StatusTeamTask", "Status", "Review", "TeamId", "SprintBacklogId", "SprintId", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
