// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: mytask.proto

package co.overlead.gRPC;

public final class mytask {
  private mytask() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_mytask_MyTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_mytask_MyTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_mytask_CommentMyTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_mytask_CommentMyTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_mytask_UpdateMyTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_mytask_UpdateMyTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_mytask_MyTaskRes_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_mytask_MyTaskRes_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_mytask_GetAllMyTaskReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_mytask_GetAllMyTaskReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_mytask_GetAllMyTaskRes_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_mytask_GetAllMyTaskRes_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\014mytask.proto\022\006mytask\"h\n\tMyTaskReq\022\023\n\013r" +
      "equesterId\030\001 \001(\t\022\021\n\tprojectId\030\002 \001(\t\022\016\n\006t" +
      "eamId\030\004 \001(\t\022\023\n\013accessToken\030\003 \001(\t\022\016\n\006task" +
      "Id\030\005 \001(\t\"F\n\020CommentMyTaskReq\022!\n\006mytask\030\001" +
      " \001(\0132\021.mytask.MyTaskReq\022\017\n\007comment\030\002 \001(\t" +
      "\"r\n\017UpdateMyTaskReq\022\023\n\013requesterId\030\001 \001(\t" +
      "\022\021\n\tprojectId\030\002 \001(\t\022\016\n\006teamId\030\004 \001(\t\022\023\n\013a" +
      "ccessToken\030\003 \001(\t\022\022\n\nstatusTask\030\005 \001(\t\"\033\n\t" +
      "MyTaskRes\022\016\n\006status\030\001 \001(\t\"p\n\017GetAllMyTas" +
      "kReq\022\023\n\013requesterId\030\001 \001(\t\022\021\n\tprojectId\030\002" +
      " \001(\t\022\016\n\006teamId\030\004 \001(\t\022\023\n\013accessToken\030\003 \001(" +
      "\t\022\020\n\010username\030\005 \001(\t\"\320\001\n\017GetAllMyTaskRes\022" +
      "\022\n\nteamTaskId\030\t \001(\t\022\r\n\005title\030\001 \001(\t\022\023\n\013de" +
      "scription\030\002 \001(\t\022\020\n\010priority\030\003 \001(\t\022\r\n\005sta" +
      "rt\030\004 \001(\t\022\020\n\010deadline\030\005 \001(\t\022\017\n\007comment\030\006 " +
      "\001(\t\022\016\n\006status\030\007 \001(\t\022\016\n\006review\030\n \001(\t\022\r\n\005p" +
      "oint\030\013 \001(\t\022\022\n\nstatusTask\030\010 \001(\t2\314\001\n\006Mytas" +
      "k\022D\n\014getAllMyTask\022\027.mytask.GetAllMyTaskR" +
      "eq\032\027.mytask.GetAllMyTaskRes\"\0000\001\022>\n\rcomme" +
      "ntMyTask\022\030.mytask.CommentMyTaskReq\032\021.myt" +
      "ask.MyTaskRes\"\000\022<\n\014updateMyTask\022\027.mytask" +
      ".UpdateMyTaskReq\032\021.mytask.MyTaskRes\"\000B!\n" +
      "\020co.overlead.gRPCB\006mytaskP\001\242\002\002mtb\006proto3"
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
    internal_static_mytask_MyTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_mytask_MyTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_mytask_MyTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamId", "AccessToken", "TaskId", });
    internal_static_mytask_CommentMyTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_mytask_CommentMyTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_mytask_CommentMyTaskReq_descriptor,
        new java.lang.String[] { "Mytask", "Comment", });
    internal_static_mytask_UpdateMyTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_mytask_UpdateMyTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_mytask_UpdateMyTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamId", "AccessToken", "StatusTask", });
    internal_static_mytask_MyTaskRes_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_mytask_MyTaskRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_mytask_MyTaskRes_descriptor,
        new java.lang.String[] { "Status", });
    internal_static_mytask_GetAllMyTaskReq_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_mytask_GetAllMyTaskReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_mytask_GetAllMyTaskReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "TeamId", "AccessToken", "Username", });
    internal_static_mytask_GetAllMyTaskRes_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_mytask_GetAllMyTaskRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_mytask_GetAllMyTaskRes_descriptor,
        new java.lang.String[] { "TeamTaskId", "Title", "Description", "Priority", "Start", "Deadline", "Comment", "Status", "Review", "Point", "StatusTask", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}