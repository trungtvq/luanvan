// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: dailyschedule.proto

package co.overlead.gRPC;

/**
 * Protobuf type {@code dailyschedule.AddNewDailyScheduleReq}
 */
public  final class AddNewDailyScheduleReq extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:dailyschedule.AddNewDailyScheduleReq)
    AddNewDailyScheduleReqOrBuilder {
private static final long serialVersionUID = 0L;
  // Use AddNewDailyScheduleReq.newBuilder() to construct.
  private AddNewDailyScheduleReq(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private AddNewDailyScheduleReq() {
    requesterId_ = "";
    projectId_ = "";
    title_ = "";
    task_ = "";
    time_ = "";
    scheduleStatus_ = "";
    cookie_ = "";
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private AddNewDailyScheduleReq(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    this();
    if (extensionRegistry == null) {
      throw new java.lang.NullPointerException();
    }
    int mutable_bitField0_ = 0;
    com.google.protobuf.UnknownFieldSet.Builder unknownFields =
        com.google.protobuf.UnknownFieldSet.newBuilder();
    try {
      boolean done = false;
      while (!done) {
        int tag = input.readTag();
        switch (tag) {
          case 0:
            done = true;
            break;
          case 10: {
            java.lang.String s = input.readStringRequireUtf8();

            requesterId_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            projectId_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            title_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            task_ = s;
            break;
          }
          case 42: {
            java.lang.String s = input.readStringRequireUtf8();

            time_ = s;
            break;
          }
          case 50: {
            java.lang.String s = input.readStringRequireUtf8();

            scheduleStatus_ = s;
            break;
          }
          case 66: {
            java.lang.String s = input.readStringRequireUtf8();

            cookie_ = s;
            break;
          }
          default: {
            if (!parseUnknownField(
                input, unknownFields, extensionRegistry, tag)) {
              done = true;
            }
            break;
          }
        }
      }
    } catch (com.google.protobuf.InvalidProtocolBufferException e) {
      throw e.setUnfinishedMessage(this);
    } catch (java.io.IOException e) {
      throw new com.google.protobuf.InvalidProtocolBufferException(
          e).setUnfinishedMessage(this);
    } finally {
      this.unknownFields = unknownFields.build();
      makeExtensionsImmutable();
    }
  }
  public static final com.google.protobuf.Descriptors.Descriptor
      getDescriptor() {
    return co.overlead.gRPC.dailyschedule.internal_static_dailyschedule_AddNewDailyScheduleReq_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return co.overlead.gRPC.dailyschedule.internal_static_dailyschedule_AddNewDailyScheduleReq_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            co.overlead.gRPC.AddNewDailyScheduleReq.class, co.overlead.gRPC.AddNewDailyScheduleReq.Builder.class);
  }

  public static final int REQUESTERID_FIELD_NUMBER = 1;
  private volatile java.lang.Object requesterId_;
  /**
   * <code>string requesterId = 1;</code>
   */
  public java.lang.String getRequesterId() {
    java.lang.Object ref = requesterId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      requesterId_ = s;
      return s;
    }
  }
  /**
   * <code>string requesterId = 1;</code>
   */
  public com.google.protobuf.ByteString
      getRequesterIdBytes() {
    java.lang.Object ref = requesterId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      requesterId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int PROJECTID_FIELD_NUMBER = 2;
  private volatile java.lang.Object projectId_;
  /**
   * <code>string projectId = 2;</code>
   */
  public java.lang.String getProjectId() {
    java.lang.Object ref = projectId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      projectId_ = s;
      return s;
    }
  }
  /**
   * <code>string projectId = 2;</code>
   */
  public com.google.protobuf.ByteString
      getProjectIdBytes() {
    java.lang.Object ref = projectId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      projectId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int TITLE_FIELD_NUMBER = 3;
  private volatile java.lang.Object title_;
  /**
   * <pre>
   *uni
   * </pre>
   *
   * <code>string title = 3;</code>
   */
  public java.lang.String getTitle() {
    java.lang.Object ref = title_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      title_ = s;
      return s;
    }
  }
  /**
   * <pre>
   *uni
   * </pre>
   *
   * <code>string title = 3;</code>
   */
  public com.google.protobuf.ByteString
      getTitleBytes() {
    java.lang.Object ref = title_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      title_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int TASK_FIELD_NUMBER = 4;
  private volatile java.lang.Object task_;
  /**
   * <code>string task = 4;</code>
   */
  public java.lang.String getTask() {
    java.lang.Object ref = task_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      task_ = s;
      return s;
    }
  }
  /**
   * <code>string task = 4;</code>
   */
  public com.google.protobuf.ByteString
      getTaskBytes() {
    java.lang.Object ref = task_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      task_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int TIME_FIELD_NUMBER = 5;
  private volatile java.lang.Object time_;
  /**
   * <code>string time = 5;</code>
   */
  public java.lang.String getTime() {
    java.lang.Object ref = time_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      time_ = s;
      return s;
    }
  }
  /**
   * <code>string time = 5;</code>
   */
  public com.google.protobuf.ByteString
      getTimeBytes() {
    java.lang.Object ref = time_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      time_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int SCHEDULESTATUS_FIELD_NUMBER = 6;
  private volatile java.lang.Object scheduleStatus_;
  /**
   * <code>string scheduleStatus = 6;</code>
   */
  public java.lang.String getScheduleStatus() {
    java.lang.Object ref = scheduleStatus_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      scheduleStatus_ = s;
      return s;
    }
  }
  /**
   * <code>string scheduleStatus = 6;</code>
   */
  public com.google.protobuf.ByteString
      getScheduleStatusBytes() {
    java.lang.Object ref = scheduleStatus_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      scheduleStatus_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int COOKIE_FIELD_NUMBER = 8;
  private volatile java.lang.Object cookie_;
  /**
   * <code>string cookie = 8;</code>
   */
  public java.lang.String getCookie() {
    java.lang.Object ref = cookie_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      cookie_ = s;
      return s;
    }
  }
  /**
   * <code>string cookie = 8;</code>
   */
  public com.google.protobuf.ByteString
      getCookieBytes() {
    java.lang.Object ref = cookie_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      cookie_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  private byte memoizedIsInitialized = -1;
  @java.lang.Override
  public final boolean isInitialized() {
    byte isInitialized = memoizedIsInitialized;
    if (isInitialized == 1) return true;
    if (isInitialized == 0) return false;

    memoizedIsInitialized = 1;
    return true;
  }

  @java.lang.Override
  public void writeTo(com.google.protobuf.CodedOutputStream output)
                      throws java.io.IOException {
    if (!getRequesterIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, requesterId_);
    }
    if (!getProjectIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, projectId_);
    }
    if (!getTitleBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, title_);
    }
    if (!getTaskBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, task_);
    }
    if (!getTimeBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 5, time_);
    }
    if (!getScheduleStatusBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 6, scheduleStatus_);
    }
    if (!getCookieBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 8, cookie_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getRequesterIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, requesterId_);
    }
    if (!getProjectIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, projectId_);
    }
    if (!getTitleBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, title_);
    }
    if (!getTaskBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, task_);
    }
    if (!getTimeBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(5, time_);
    }
    if (!getScheduleStatusBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(6, scheduleStatus_);
    }
    if (!getCookieBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(8, cookie_);
    }
    size += unknownFields.getSerializedSize();
    memoizedSize = size;
    return size;
  }

  @java.lang.Override
  public boolean equals(final java.lang.Object obj) {
    if (obj == this) {
     return true;
    }
    if (!(obj instanceof co.overlead.gRPC.AddNewDailyScheduleReq)) {
      return super.equals(obj);
    }
    co.overlead.gRPC.AddNewDailyScheduleReq other = (co.overlead.gRPC.AddNewDailyScheduleReq) obj;

    if (!getRequesterId()
        .equals(other.getRequesterId())) return false;
    if (!getProjectId()
        .equals(other.getProjectId())) return false;
    if (!getTitle()
        .equals(other.getTitle())) return false;
    if (!getTask()
        .equals(other.getTask())) return false;
    if (!getTime()
        .equals(other.getTime())) return false;
    if (!getScheduleStatus()
        .equals(other.getScheduleStatus())) return false;
    if (!getCookie()
        .equals(other.getCookie())) return false;
    if (!unknownFields.equals(other.unknownFields)) return false;
    return true;
  }

  @java.lang.Override
  public int hashCode() {
    if (memoizedHashCode != 0) {
      return memoizedHashCode;
    }
    int hash = 41;
    hash = (19 * hash) + getDescriptor().hashCode();
    hash = (37 * hash) + REQUESTERID_FIELD_NUMBER;
    hash = (53 * hash) + getRequesterId().hashCode();
    hash = (37 * hash) + PROJECTID_FIELD_NUMBER;
    hash = (53 * hash) + getProjectId().hashCode();
    hash = (37 * hash) + TITLE_FIELD_NUMBER;
    hash = (53 * hash) + getTitle().hashCode();
    hash = (37 * hash) + TASK_FIELD_NUMBER;
    hash = (53 * hash) + getTask().hashCode();
    hash = (37 * hash) + TIME_FIELD_NUMBER;
    hash = (53 * hash) + getTime().hashCode();
    hash = (37 * hash) + SCHEDULESTATUS_FIELD_NUMBER;
    hash = (53 * hash) + getScheduleStatus().hashCode();
    hash = (37 * hash) + COOKIE_FIELD_NUMBER;
    hash = (53 * hash) + getCookie().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.AddNewDailyScheduleReq parseFrom(
      com.google.protobuf.CodedInputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }

  @java.lang.Override
  public Builder newBuilderForType() { return newBuilder(); }
  public static Builder newBuilder() {
    return DEFAULT_INSTANCE.toBuilder();
  }
  public static Builder newBuilder(co.overlead.gRPC.AddNewDailyScheduleReq prototype) {
    return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
  }
  @java.lang.Override
  public Builder toBuilder() {
    return this == DEFAULT_INSTANCE
        ? new Builder() : new Builder().mergeFrom(this);
  }

  @java.lang.Override
  protected Builder newBuilderForType(
      com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
    Builder builder = new Builder(parent);
    return builder;
  }
  /**
   * Protobuf type {@code dailyschedule.AddNewDailyScheduleReq}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:dailyschedule.AddNewDailyScheduleReq)
      co.overlead.gRPC.AddNewDailyScheduleReqOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return co.overlead.gRPC.dailyschedule.internal_static_dailyschedule_AddNewDailyScheduleReq_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return co.overlead.gRPC.dailyschedule.internal_static_dailyschedule_AddNewDailyScheduleReq_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              co.overlead.gRPC.AddNewDailyScheduleReq.class, co.overlead.gRPC.AddNewDailyScheduleReq.Builder.class);
    }

    // Construct using co.overlead.gRPC.AddNewDailyScheduleReq.newBuilder()
    private Builder() {
      maybeForceBuilderInitialization();
    }

    private Builder(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      super(parent);
      maybeForceBuilderInitialization();
    }
    private void maybeForceBuilderInitialization() {
      if (com.google.protobuf.GeneratedMessageV3
              .alwaysUseFieldBuilders) {
      }
    }
    @java.lang.Override
    public Builder clear() {
      super.clear();
      requesterId_ = "";

      projectId_ = "";

      title_ = "";

      task_ = "";

      time_ = "";

      scheduleStatus_ = "";

      cookie_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return co.overlead.gRPC.dailyschedule.internal_static_dailyschedule_AddNewDailyScheduleReq_descriptor;
    }

    @java.lang.Override
    public co.overlead.gRPC.AddNewDailyScheduleReq getDefaultInstanceForType() {
      return co.overlead.gRPC.AddNewDailyScheduleReq.getDefaultInstance();
    }

    @java.lang.Override
    public co.overlead.gRPC.AddNewDailyScheduleReq build() {
      co.overlead.gRPC.AddNewDailyScheduleReq result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public co.overlead.gRPC.AddNewDailyScheduleReq buildPartial() {
      co.overlead.gRPC.AddNewDailyScheduleReq result = new co.overlead.gRPC.AddNewDailyScheduleReq(this);
      result.requesterId_ = requesterId_;
      result.projectId_ = projectId_;
      result.title_ = title_;
      result.task_ = task_;
      result.time_ = time_;
      result.scheduleStatus_ = scheduleStatus_;
      result.cookie_ = cookie_;
      onBuilt();
      return result;
    }

    @java.lang.Override
    public Builder clone() {
      return super.clone();
    }
    @java.lang.Override
    public Builder setField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.setField(field, value);
    }
    @java.lang.Override
    public Builder clearField(
        com.google.protobuf.Descriptors.FieldDescriptor field) {
      return super.clearField(field);
    }
    @java.lang.Override
    public Builder clearOneof(
        com.google.protobuf.Descriptors.OneofDescriptor oneof) {
      return super.clearOneof(oneof);
    }
    @java.lang.Override
    public Builder setRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        int index, java.lang.Object value) {
      return super.setRepeatedField(field, index, value);
    }
    @java.lang.Override
    public Builder addRepeatedField(
        com.google.protobuf.Descriptors.FieldDescriptor field,
        java.lang.Object value) {
      return super.addRepeatedField(field, value);
    }
    @java.lang.Override
    public Builder mergeFrom(com.google.protobuf.Message other) {
      if (other instanceof co.overlead.gRPC.AddNewDailyScheduleReq) {
        return mergeFrom((co.overlead.gRPC.AddNewDailyScheduleReq)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(co.overlead.gRPC.AddNewDailyScheduleReq other) {
      if (other == co.overlead.gRPC.AddNewDailyScheduleReq.getDefaultInstance()) return this;
      if (!other.getRequesterId().isEmpty()) {
        requesterId_ = other.requesterId_;
        onChanged();
      }
      if (!other.getProjectId().isEmpty()) {
        projectId_ = other.projectId_;
        onChanged();
      }
      if (!other.getTitle().isEmpty()) {
        title_ = other.title_;
        onChanged();
      }
      if (!other.getTask().isEmpty()) {
        task_ = other.task_;
        onChanged();
      }
      if (!other.getTime().isEmpty()) {
        time_ = other.time_;
        onChanged();
      }
      if (!other.getScheduleStatus().isEmpty()) {
        scheduleStatus_ = other.scheduleStatus_;
        onChanged();
      }
      if (!other.getCookie().isEmpty()) {
        cookie_ = other.cookie_;
        onChanged();
      }
      this.mergeUnknownFields(other.unknownFields);
      onChanged();
      return this;
    }

    @java.lang.Override
    public final boolean isInitialized() {
      return true;
    }

    @java.lang.Override
    public Builder mergeFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      co.overlead.gRPC.AddNewDailyScheduleReq parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (co.overlead.gRPC.AddNewDailyScheduleReq) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object requesterId_ = "";
    /**
     * <code>string requesterId = 1;</code>
     */
    public java.lang.String getRequesterId() {
      java.lang.Object ref = requesterId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        requesterId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string requesterId = 1;</code>
     */
    public com.google.protobuf.ByteString
        getRequesterIdBytes() {
      java.lang.Object ref = requesterId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        requesterId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string requesterId = 1;</code>
     */
    public Builder setRequesterId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      requesterId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string requesterId = 1;</code>
     */
    public Builder clearRequesterId() {
      
      requesterId_ = getDefaultInstance().getRequesterId();
      onChanged();
      return this;
    }
    /**
     * <code>string requesterId = 1;</code>
     */
    public Builder setRequesterIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      requesterId_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object projectId_ = "";
    /**
     * <code>string projectId = 2;</code>
     */
    public java.lang.String getProjectId() {
      java.lang.Object ref = projectId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        projectId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string projectId = 2;</code>
     */
    public com.google.protobuf.ByteString
        getProjectIdBytes() {
      java.lang.Object ref = projectId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        projectId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string projectId = 2;</code>
     */
    public Builder setProjectId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      projectId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string projectId = 2;</code>
     */
    public Builder clearProjectId() {
      
      projectId_ = getDefaultInstance().getProjectId();
      onChanged();
      return this;
    }
    /**
     * <code>string projectId = 2;</code>
     */
    public Builder setProjectIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      projectId_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object title_ = "";
    /**
     * <pre>
     *uni
     * </pre>
     *
     * <code>string title = 3;</code>
     */
    public java.lang.String getTitle() {
      java.lang.Object ref = title_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        title_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     *uni
     * </pre>
     *
     * <code>string title = 3;</code>
     */
    public com.google.protobuf.ByteString
        getTitleBytes() {
      java.lang.Object ref = title_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        title_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     *uni
     * </pre>
     *
     * <code>string title = 3;</code>
     */
    public Builder setTitle(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      title_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     *uni
     * </pre>
     *
     * <code>string title = 3;</code>
     */
    public Builder clearTitle() {
      
      title_ = getDefaultInstance().getTitle();
      onChanged();
      return this;
    }
    /**
     * <pre>
     *uni
     * </pre>
     *
     * <code>string title = 3;</code>
     */
    public Builder setTitleBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      title_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object task_ = "";
    /**
     * <code>string task = 4;</code>
     */
    public java.lang.String getTask() {
      java.lang.Object ref = task_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        task_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string task = 4;</code>
     */
    public com.google.protobuf.ByteString
        getTaskBytes() {
      java.lang.Object ref = task_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        task_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string task = 4;</code>
     */
    public Builder setTask(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      task_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string task = 4;</code>
     */
    public Builder clearTask() {
      
      task_ = getDefaultInstance().getTask();
      onChanged();
      return this;
    }
    /**
     * <code>string task = 4;</code>
     */
    public Builder setTaskBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      task_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object time_ = "";
    /**
     * <code>string time = 5;</code>
     */
    public java.lang.String getTime() {
      java.lang.Object ref = time_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        time_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string time = 5;</code>
     */
    public com.google.protobuf.ByteString
        getTimeBytes() {
      java.lang.Object ref = time_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        time_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string time = 5;</code>
     */
    public Builder setTime(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      time_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string time = 5;</code>
     */
    public Builder clearTime() {
      
      time_ = getDefaultInstance().getTime();
      onChanged();
      return this;
    }
    /**
     * <code>string time = 5;</code>
     */
    public Builder setTimeBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      time_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object scheduleStatus_ = "";
    /**
     * <code>string scheduleStatus = 6;</code>
     */
    public java.lang.String getScheduleStatus() {
      java.lang.Object ref = scheduleStatus_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        scheduleStatus_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string scheduleStatus = 6;</code>
     */
    public com.google.protobuf.ByteString
        getScheduleStatusBytes() {
      java.lang.Object ref = scheduleStatus_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        scheduleStatus_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string scheduleStatus = 6;</code>
     */
    public Builder setScheduleStatus(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      scheduleStatus_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string scheduleStatus = 6;</code>
     */
    public Builder clearScheduleStatus() {
      
      scheduleStatus_ = getDefaultInstance().getScheduleStatus();
      onChanged();
      return this;
    }
    /**
     * <code>string scheduleStatus = 6;</code>
     */
    public Builder setScheduleStatusBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      scheduleStatus_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object cookie_ = "";
    /**
     * <code>string cookie = 8;</code>
     */
    public java.lang.String getCookie() {
      java.lang.Object ref = cookie_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        cookie_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string cookie = 8;</code>
     */
    public com.google.protobuf.ByteString
        getCookieBytes() {
      java.lang.Object ref = cookie_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        cookie_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string cookie = 8;</code>
     */
    public Builder setCookie(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      cookie_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string cookie = 8;</code>
     */
    public Builder clearCookie() {
      
      cookie_ = getDefaultInstance().getCookie();
      onChanged();
      return this;
    }
    /**
     * <code>string cookie = 8;</code>
     */
    public Builder setCookieBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      cookie_ = value;
      onChanged();
      return this;
    }
    @java.lang.Override
    public final Builder setUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.setUnknownFields(unknownFields);
    }

    @java.lang.Override
    public final Builder mergeUnknownFields(
        final com.google.protobuf.UnknownFieldSet unknownFields) {
      return super.mergeUnknownFields(unknownFields);
    }


    // @@protoc_insertion_point(builder_scope:dailyschedule.AddNewDailyScheduleReq)
  }

  // @@protoc_insertion_point(class_scope:dailyschedule.AddNewDailyScheduleReq)
  private static final co.overlead.gRPC.AddNewDailyScheduleReq DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new co.overlead.gRPC.AddNewDailyScheduleReq();
  }

  public static co.overlead.gRPC.AddNewDailyScheduleReq getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<AddNewDailyScheduleReq>
      PARSER = new com.google.protobuf.AbstractParser<AddNewDailyScheduleReq>() {
    @java.lang.Override
    public AddNewDailyScheduleReq parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new AddNewDailyScheduleReq(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<AddNewDailyScheduleReq> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<AddNewDailyScheduleReq> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public co.overlead.gRPC.AddNewDailyScheduleReq getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}
