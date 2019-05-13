// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: teamtask.proto

package co.overlead.gRPC;

/**
 * Protobuf type {@code teamtask.RegisterTeamTaskReq}
 */
public  final class RegisterTeamTaskReq extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:teamtask.RegisterTeamTaskReq)
    RegisterTeamTaskReqOrBuilder {
private static final long serialVersionUID = 0L;
  // Use RegisterTeamTaskReq.newBuilder() to construct.
  private RegisterTeamTaskReq(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private RegisterTeamTaskReq() {
    requesterId_ = "";
    projectId_ = "";
    teamTaskId_ = "";
    tokenAccess_ = "";
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private RegisterTeamTaskReq(
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

            teamTaskId_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            tokenAccess_ = s;
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
    return co.overlead.gRPC.teamtask.internal_static_teamtask_RegisterTeamTaskReq_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return co.overlead.gRPC.teamtask.internal_static_teamtask_RegisterTeamTaskReq_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            co.overlead.gRPC.RegisterTeamTaskReq.class, co.overlead.gRPC.RegisterTeamTaskReq.Builder.class);
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

  public static final int TEAMTASKID_FIELD_NUMBER = 3;
  private volatile java.lang.Object teamTaskId_;
  /**
   * <pre>
   * them username vao assignee cua teamtaskId dc chon
   * </pre>
   *
   * <code>string teamTaskId = 3;</code>
   */
  public java.lang.String getTeamTaskId() {
    java.lang.Object ref = teamTaskId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      teamTaskId_ = s;
      return s;
    }
  }
  /**
   * <pre>
   * them username vao assignee cua teamtaskId dc chon
   * </pre>
   *
   * <code>string teamTaskId = 3;</code>
   */
  public com.google.protobuf.ByteString
      getTeamTaskIdBytes() {
    java.lang.Object ref = teamTaskId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      teamTaskId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int TOKENACCESS_FIELD_NUMBER = 4;
  private volatile java.lang.Object tokenAccess_;
  /**
   * <code>string tokenAccess = 4;</code>
   */
  public java.lang.String getTokenAccess() {
    java.lang.Object ref = tokenAccess_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      tokenAccess_ = s;
      return s;
    }
  }
  /**
   * <code>string tokenAccess = 4;</code>
   */
  public com.google.protobuf.ByteString
      getTokenAccessBytes() {
    java.lang.Object ref = tokenAccess_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      tokenAccess_ = b;
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
    if (!getTeamTaskIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, teamTaskId_);
    }
    if (!getTokenAccessBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, tokenAccess_);
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
    if (!getTeamTaskIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, teamTaskId_);
    }
    if (!getTokenAccessBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, tokenAccess_);
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
    if (!(obj instanceof co.overlead.gRPC.RegisterTeamTaskReq)) {
      return super.equals(obj);
    }
    co.overlead.gRPC.RegisterTeamTaskReq other = (co.overlead.gRPC.RegisterTeamTaskReq) obj;

    if (!getRequesterId()
        .equals(other.getRequesterId())) return false;
    if (!getProjectId()
        .equals(other.getProjectId())) return false;
    if (!getTeamTaskId()
        .equals(other.getTeamTaskId())) return false;
    if (!getTokenAccess()
        .equals(other.getTokenAccess())) return false;
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
    hash = (37 * hash) + TEAMTASKID_FIELD_NUMBER;
    hash = (53 * hash) + getTeamTaskId().hashCode();
    hash = (37 * hash) + TOKENACCESS_FIELD_NUMBER;
    hash = (53 * hash) + getTokenAccess().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.RegisterTeamTaskReq parseFrom(
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
  public static Builder newBuilder(co.overlead.gRPC.RegisterTeamTaskReq prototype) {
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
   * Protobuf type {@code teamtask.RegisterTeamTaskReq}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:teamtask.RegisterTeamTaskReq)
      co.overlead.gRPC.RegisterTeamTaskReqOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return co.overlead.gRPC.teamtask.internal_static_teamtask_RegisterTeamTaskReq_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return co.overlead.gRPC.teamtask.internal_static_teamtask_RegisterTeamTaskReq_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              co.overlead.gRPC.RegisterTeamTaskReq.class, co.overlead.gRPC.RegisterTeamTaskReq.Builder.class);
    }

    // Construct using co.overlead.gRPC.RegisterTeamTaskReq.newBuilder()
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

      teamTaskId_ = "";

      tokenAccess_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return co.overlead.gRPC.teamtask.internal_static_teamtask_RegisterTeamTaskReq_descriptor;
    }

    @java.lang.Override
    public co.overlead.gRPC.RegisterTeamTaskReq getDefaultInstanceForType() {
      return co.overlead.gRPC.RegisterTeamTaskReq.getDefaultInstance();
    }

    @java.lang.Override
    public co.overlead.gRPC.RegisterTeamTaskReq build() {
      co.overlead.gRPC.RegisterTeamTaskReq result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public co.overlead.gRPC.RegisterTeamTaskReq buildPartial() {
      co.overlead.gRPC.RegisterTeamTaskReq result = new co.overlead.gRPC.RegisterTeamTaskReq(this);
      result.requesterId_ = requesterId_;
      result.projectId_ = projectId_;
      result.teamTaskId_ = teamTaskId_;
      result.tokenAccess_ = tokenAccess_;
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
      if (other instanceof co.overlead.gRPC.RegisterTeamTaskReq) {
        return mergeFrom((co.overlead.gRPC.RegisterTeamTaskReq)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(co.overlead.gRPC.RegisterTeamTaskReq other) {
      if (other == co.overlead.gRPC.RegisterTeamTaskReq.getDefaultInstance()) return this;
      if (!other.getRequesterId().isEmpty()) {
        requesterId_ = other.requesterId_;
        onChanged();
      }
      if (!other.getProjectId().isEmpty()) {
        projectId_ = other.projectId_;
        onChanged();
      }
      if (!other.getTeamTaskId().isEmpty()) {
        teamTaskId_ = other.teamTaskId_;
        onChanged();
      }
      if (!other.getTokenAccess().isEmpty()) {
        tokenAccess_ = other.tokenAccess_;
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
      co.overlead.gRPC.RegisterTeamTaskReq parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (co.overlead.gRPC.RegisterTeamTaskReq) e.getUnfinishedMessage();
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

    private java.lang.Object teamTaskId_ = "";
    /**
     * <pre>
     * them username vao assignee cua teamtaskId dc chon
     * </pre>
     *
     * <code>string teamTaskId = 3;</code>
     */
    public java.lang.String getTeamTaskId() {
      java.lang.Object ref = teamTaskId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        teamTaskId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     * them username vao assignee cua teamtaskId dc chon
     * </pre>
     *
     * <code>string teamTaskId = 3;</code>
     */
    public com.google.protobuf.ByteString
        getTeamTaskIdBytes() {
      java.lang.Object ref = teamTaskId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        teamTaskId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     * them username vao assignee cua teamtaskId dc chon
     * </pre>
     *
     * <code>string teamTaskId = 3;</code>
     */
    public Builder setTeamTaskId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      teamTaskId_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     * them username vao assignee cua teamtaskId dc chon
     * </pre>
     *
     * <code>string teamTaskId = 3;</code>
     */
    public Builder clearTeamTaskId() {
      
      teamTaskId_ = getDefaultInstance().getTeamTaskId();
      onChanged();
      return this;
    }
    /**
     * <pre>
     * them username vao assignee cua teamtaskId dc chon
     * </pre>
     *
     * <code>string teamTaskId = 3;</code>
     */
    public Builder setTeamTaskIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      teamTaskId_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object tokenAccess_ = "";
    /**
     * <code>string tokenAccess = 4;</code>
     */
    public java.lang.String getTokenAccess() {
      java.lang.Object ref = tokenAccess_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        tokenAccess_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string tokenAccess = 4;</code>
     */
    public com.google.protobuf.ByteString
        getTokenAccessBytes() {
      java.lang.Object ref = tokenAccess_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        tokenAccess_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string tokenAccess = 4;</code>
     */
    public Builder setTokenAccess(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      tokenAccess_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string tokenAccess = 4;</code>
     */
    public Builder clearTokenAccess() {
      
      tokenAccess_ = getDefaultInstance().getTokenAccess();
      onChanged();
      return this;
    }
    /**
     * <code>string tokenAccess = 4;</code>
     */
    public Builder setTokenAccessBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      tokenAccess_ = value;
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


    // @@protoc_insertion_point(builder_scope:teamtask.RegisterTeamTaskReq)
  }

  // @@protoc_insertion_point(class_scope:teamtask.RegisterTeamTaskReq)
  private static final co.overlead.gRPC.RegisterTeamTaskReq DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new co.overlead.gRPC.RegisterTeamTaskReq();
  }

  public static co.overlead.gRPC.RegisterTeamTaskReq getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<RegisterTeamTaskReq>
      PARSER = new com.google.protobuf.AbstractParser<RegisterTeamTaskReq>() {
    @java.lang.Override
    public RegisterTeamTaskReq parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new RegisterTeamTaskReq(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<RegisterTeamTaskReq> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<RegisterTeamTaskReq> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public co.overlead.gRPC.RegisterTeamTaskReq getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

