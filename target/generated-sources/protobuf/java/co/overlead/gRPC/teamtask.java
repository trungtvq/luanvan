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
    internal_static_teamtask_SendTeamTaskToMyTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_teamtask_SendTeamTaskToMyTaskReq_fieldAccessorTable;
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
      "\n\016teamtask.proto\022\010teamtask\"\357\001\n\021AddNewTea" +
      "mTaskReq\022\023\n\013requesterId\030\001 \001(\t\022\021\n\tproject" +
      "Id\030\002 \001(\t\022\r\n\005title\030\003 \001(\t\022\023\n\013description\030\004" +
      " \001(\t\022\020\n\010priority\030\005 \001(\t\022\r\n\005start\030\006 \001(\t\022\020\n" +
      "\010deadline\030\007 \001(\t\022\025\n\rassigneeArray\030\010 \001(\t\022\017" +
      "\n\007comment\030\t \001(\t\022\016\n\006status\030\n \001(\t\022\016\n\006revie" +
      "w\030\013 \001(\t\022\023\n\013tokenAccess\030\014 \001(\t\"@\n\013TeamTask" +
      "Res\022\016\n\006status\030\001 \001(\t\022\022\n\nteamTaskId\030\002 \001(\t\022" +
      "\r\n\005error\030\003 \001(\t\"\203\002\n\021UpdateTeamTaskReq\022\023\n\013" +
      "requesterId\030\001 \001(\t\022\021\n\tprojectId\030\002 \001(\t\022\022\n\n" +
      "teamTaskId\030\003 \001(\t\022\r\n\005title\030\004 \001(\t\022\023\n\013descr" +
      "iption\030\005 \001(\t\022\020\n\010priority\030\006 \001(\t\022\r\n\005start\030" +
      "\007 \001(\t\022\020\n\010deadline\030\010 \001(\t\022\025\n\rassigneeArray" +
      "\030\t \001(\t\022\017\n\007comment\030\n \001(\t\022\016\n\006status\030\013 \001(\t\022" +
      "\016\n\006review\030\014 \001(\t\022\023\n\013tokenAccess\030\r \001(\t\"f\n\023" +
      "RegisterTeamTaskReq\022\023\n\013requesterId\030\001 \001(\t" +
      "\022\021\n\tprojectId\030\002 \001(\t\022\022\n\nteamTaskId\030\003 \001(\t\022" +
      "\023\n\013tokenAccess\030\004 \001(\t\"d\n\021CancelTeamTaskRe" +
      "q\022\023\n\013requesterId\030\001 \001(\t\022\021\n\tprojectId\030\002 \001(" +
      "\t\022\022\n\nteamTaskId\030\003 \001(\t\022\023\n\013tokenAccess\030\004 \001" +
      "(\t\"\342\001\n\027SendTeamTaskToMyTaskReq\022\023\n\013reques" +
      "terId\030\001 \001(\t\022\021\n\tprojectId\030\002 \001(\t\022\r\n\005title\030" +
      "\003 \001(\t\022\023\n\013description\030\004 \001(\t\022\020\n\010priority\030\005" +
      " \001(\t\022\r\n\005start\030\006 \001(\t\022\020\n\010deadline\030\007 \001(\t\022\017\n" +
      "\007comment\030\010 \001(\t\022\016\n\006status\030\t \001(\t\022\022\n\nteamTa" +
      "skId\030\013 \001(\t\022\023\n\013tokenAccess\030\n \001(\t\"P\n\021GetAl" +
      "lTeamTaskReq\022\023\n\013requesterId\030\001 \001(\t\022\021\n\tpro" +
      "jectId\030\002 \001(\t\022\023\n\013tokenAccess\030\003 \001(\t\"\355\001\n\021Ge" +
      "tAllTeamTaskRes\022\022\n\nteamTaskId\030\001 \001(\t\022\r\n\005t" +
      "itle\030\002 \001(\t\022\023\n\013description\030\003 \001(\t\022\020\n\010prior" +
      "ity\030\004 \001(\t\022\r\n\005start\030\005 \001(\t\022\020\n\010deadline\030\006 \001" +
      "(\t\022\025\n\rassigneeArray\030\007 \001(\t\022\017\n\007comment\030\010 \001" +
      "(\t\022\026\n\016statusTeamTask\030\014 \001(\t\022\016\n\006status\030\t \001" +
      "(\t\022\016\n\006review\030\n \001(\t\022\r\n\005error\030\013 \001(\t2\322\003\n\010Te" +
      "amTask\022F\n\016addNewTeamTask\022\033.teamtask.AddN" +
      "ewTeamTaskReq\032\025.teamtask.TeamTaskRes\"\000\022F" +
      "\n\016updateTeamTask\022\033.teamtask.UpdateTeamTa" +
      "skReq\032\025.teamtask.TeamTaskRes\"\000\022J\n\020regist" +
      "erTeamTask\022\035.teamtask.RegisterTeamTaskRe" +
      "q\032\025.teamtask.TeamTaskRes\"\000\022F\n\016cancelTeam" +
      "Task\022\033.teamtask.CancelTeamTaskReq\032\025.team" +
      "task.TeamTaskRes\"\000\022R\n\024sendTeamTaskToMyTa" +
      "sk\022!.teamtask.SendTeamTaskToMyTaskReq\032\025." +
      "teamtask.TeamTaskRes\"\000\022N\n\016getAllTeamTask" +
      "\022\033.teamtask.GetAllTeamTaskReq\032\033.teamtask" +
      ".GetAllTeamTaskRes\"\0000\001B#\n\020co.overlead.gR" +
      "PCB\010teamtaskP\001\242\002\002ttb\006proto3"
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
        new java.lang.String[] { "RequesterId", "ProjectId", "Title", "Description", "Priority", "Start", "Deadline", "AssigneeArray", "Comment", "Status", "Review", "TokenAccess", });
    internal_static_teamtask_TeamTaskRes_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_teamtask_TeamTaskRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_TeamTaskRes_descriptor,
        new java.lang.String[] { "Status", "TeamTaskId", "Error", });
    internal_static_teamtask_UpdateTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_teamtask_UpdateTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_UpdateTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamTaskId", "Title", "Description", "Priority", "Start", "Deadline", "AssigneeArray", "Comment", "Status", "Review", "TokenAccess", });
    internal_static_teamtask_RegisterTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_teamtask_RegisterTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_RegisterTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamTaskId", "TokenAccess", });
    internal_static_teamtask_CancelTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_teamtask_CancelTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_CancelTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamTaskId", "TokenAccess", });
    internal_static_teamtask_SendTeamTaskToMyTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_teamtask_SendTeamTaskToMyTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_SendTeamTaskToMyTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "Title", "Description", "Priority", "Start", "Deadline", "Comment", "Status", "TeamTaskId", "TokenAccess", });
    internal_static_teamtask_GetAllTeamTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_teamtask_GetAllTeamTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_GetAllTeamTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TokenAccess", });
    internal_static_teamtask_GetAllTeamTaskRes_descriptor =
      getDescriptor().getMessageTypes().get(7);
    internal_static_teamtask_GetAllTeamTaskRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_teamtask_GetAllTeamTaskRes_descriptor,
        new java.lang.String[] { "TeamTaskId", "Title", "Description", "Priority", "Start", "Deadline", "AssigneeArray", "Comment", "StatusTeamTask", "Status", "Review", "Error", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}
