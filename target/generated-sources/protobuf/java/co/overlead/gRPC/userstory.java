// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: userstory.proto

package co.overlead.gRPC;

public final class userstory {
  private userstory() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_userstory_SendToProductBacklogReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_userstory_SendToProductBacklogReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_userstory_AddNewUserStoryReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_userstory_AddNewUserStoryReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_userstory_UserStoryRes_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_userstory_UserStoryRes_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_userstory_UpdateUserStoryReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_userstory_UpdateUserStoryReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_userstory_DeleteUserStoryReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_userstory_DeleteUserStoryReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_userstory_GetAllUserStoryReq_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_userstory_GetAllUserStoryReq_fieldAccessorTable;
  static final com.google.protobuf.Descriptors.Descriptor
    internal_static_userstory_GetAllUserStoryRes_descriptor;
  static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_userstory_GetAllUserStoryRes_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\017userstory.proto\022\tuserstory\"\257\001\n\027SendToP" +
      "roductBacklogReq\022\023\n\013requesterId\030\001 \001(\t\022\021\n" +
      "\tprojectId\030\002 \001(\t\022\n\n\002id\030\003 \001(\t\022\020\n\010priority" +
      "\030\004 \001(\t\022\022\n\nestimation\030\005 \001(\t\022\025\n\rstatusBack" +
      "log\030\006 \001(\t\022\023\n\013accessToken\030\007 \001(\t\022\016\n\006sprint" +
      "\030\010 \001(\t\"\207\001\n\022AddNewUserStoryReq\022\023\n\013request" +
      "erId\030\001 \001(\t\022\021\n\tprojectId\030\002 \001(\t\022\014\n\004role\030\003 " +
      "\001(\t\022\014\n\004want\030\004 \001(\t\022\n\n\002so\030\005 \001(\t\022\023\n\013accessT" +
      "oken\030\006 \001(\t\022\014\n\004name\030\007 \001(\t\"*\n\014UserStoryRes" +
      "\022\016\n\006status\030\001 \001(\t\022\n\n\002id\030\002 \001(\t\"\216\001\n\022UpdateU" +
      "serStoryReq\022\023\n\013requesterId\030\001 \001(\t\022\021\n\tproj" +
      "ectId\030\002 \001(\t\022\023\n\013userStoryId\030\003 \001(\t\022\014\n\004role" +
      "\030\004 \001(\t\022\014\n\004want\030\005 \001(\t\022\n\n\002so\030\006 \001(\t\022\023\n\013acce" +
      "ssToken\030\007 \001(\t\"f\n\022DeleteUserStoryReq\022\023\n\013r" +
      "equesterId\030\001 \001(\t\022\021\n\tprojectId\030\002 \001(\t\022\023\n\013u" +
      "serStoryId\030\003 \001(\t\022\023\n\013accessToken\030\004 \001(\t\"Q\n" +
      "\022GetAllUserStoryReq\022\023\n\013requesterId\030\001 \001(\t" +
      "\022\021\n\tprojectId\030\002 \001(\t\022\023\n\013accessToken\030\003 \001(\t" +
      "\"f\n\022GetAllUserStoryRes\022\014\n\004role\030\001 \001(\t\022\014\n\004" +
      "want\030\002 \001(\t\022\n\n\002so\030\003 \001(\t\022\016\n\006status\030\004 \001(\t\022\n" +
      "\n\002id\030\005 \001(\t\022\014\n\004name\030\006 \001(\t2\236\003\n\tUserStory\022K" +
      "\n\017addNewUserStory\022\035.userstory.AddNewUser" +
      "StoryReq\032\027.userstory.UserStoryRes\"\000\022K\n\017u" +
      "pdateUserStory\022\035.userstory.UpdateUserSto" +
      "ryReq\032\027.userstory.UserStoryRes\"\000\022K\n\017dele" +
      "teUserStory\022\035.userstory.DeleteUserStoryR" +
      "eq\032\027.userstory.UserStoryRes\"\000\022U\n\024sendToP" +
      "roductBacklog\022\".userstory.SendToProductB" +
      "acklogReq\032\027.userstory.UserStoryRes\"\000\022S\n\017" +
      "getAllUserStory\022\035.userstory.GetAllUserSt" +
      "oryReq\032\035.userstory.GetAllUserStoryRes\"\0000" +
      "\001B$\n\020co.overlead.gRPCB\tuserstoryP\001\242\002\002usb" +
      "\006proto3"
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
    internal_static_userstory_SendToProductBacklogReq_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_userstory_SendToProductBacklogReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_userstory_SendToProductBacklogReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "Id", "Priority", "Estimation", "StatusBacklog", "AccessToken", "Sprint", });
    internal_static_userstory_AddNewUserStoryReq_descriptor =
      getDescriptor().getMessageTypes().get(1);
    internal_static_userstory_AddNewUserStoryReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_userstory_AddNewUserStoryReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "Role", "Want", "So", "AccessToken", "Name", });
    internal_static_userstory_UserStoryRes_descriptor =
      getDescriptor().getMessageTypes().get(2);
    internal_static_userstory_UserStoryRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_userstory_UserStoryRes_descriptor,
        new java.lang.String[] { "Status", "Id", });
    internal_static_userstory_UpdateUserStoryReq_descriptor =
      getDescriptor().getMessageTypes().get(3);
    internal_static_userstory_UpdateUserStoryReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_userstory_UpdateUserStoryReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "UserStoryId", "Role", "Want", "So", "AccessToken", });
    internal_static_userstory_DeleteUserStoryReq_descriptor =
      getDescriptor().getMessageTypes().get(4);
    internal_static_userstory_DeleteUserStoryReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_userstory_DeleteUserStoryReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "UserStoryId", "AccessToken", });
    internal_static_userstory_GetAllUserStoryReq_descriptor =
      getDescriptor().getMessageTypes().get(5);
    internal_static_userstory_GetAllUserStoryReq_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_userstory_GetAllUserStoryReq_descriptor,
        new java.lang.String[] { "RequesterId", "ProjectId", "AccessToken", });
    internal_static_userstory_GetAllUserStoryRes_descriptor =
      getDescriptor().getMessageTypes().get(6);
    internal_static_userstory_GetAllUserStoryRes_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_userstory_GetAllUserStoryRes_descriptor,
        new java.lang.String[] { "Role", "Want", "So", "Status", "Id", "Name", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}