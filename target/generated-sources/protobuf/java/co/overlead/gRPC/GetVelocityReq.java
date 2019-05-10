// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: velocity.proto

package co.overlead.gRPC;

/**
 * Protobuf type {@code velocity.GetVelocityReq}
 */
public  final class GetVelocityReq extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:velocity.GetVelocityReq)
    GetVelocityReqOrBuilder {
private static final long serialVersionUID = 0L;
  // Use GetVelocityReq.newBuilder() to construct.
  private GetVelocityReq(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private GetVelocityReq() {
    cookie_ = "";
    requesterId_ = "";
    projectId_ = "";
    teamId_ = "";
    sprintId_ = "";
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private GetVelocityReq(
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

            cookie_ = s;
            break;
          }
          case 18: {
            java.lang.String s = input.readStringRequireUtf8();

            requesterId_ = s;
            break;
          }
          case 26: {
            java.lang.String s = input.readStringRequireUtf8();

            projectId_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            teamId_ = s;
            break;
          }
          case 42: {
            java.lang.String s = input.readStringRequireUtf8();

            sprintId_ = s;
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
    return co.overlead.gRPC.velocity.internal_static_velocity_GetVelocityReq_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return co.overlead.gRPC.velocity.internal_static_velocity_GetVelocityReq_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            co.overlead.gRPC.GetVelocityReq.class, co.overlead.gRPC.GetVelocityReq.Builder.class);
  }

  public static final int COOKIE_FIELD_NUMBER = 1;
  private volatile java.lang.Object cookie_;
  /**
   * <code>string cookie = 1;</code>
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
   * <code>string cookie = 1;</code>
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

  public static final int REQUESTERID_FIELD_NUMBER = 2;
  private volatile java.lang.Object requesterId_;
  /**
   * <code>string requesterId = 2;</code>
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
   * <code>string requesterId = 2;</code>
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

  public static final int PROJECTID_FIELD_NUMBER = 3;
  private volatile java.lang.Object projectId_;
  /**
   * <code>string projectId = 3;</code>
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
   * <code>string projectId = 3;</code>
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

  public static final int TEAMID_FIELD_NUMBER = 4;
  private volatile java.lang.Object teamId_;
  /**
   * <code>string teamId = 4;</code>
   */
  public java.lang.String getTeamId() {
    java.lang.Object ref = teamId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      teamId_ = s;
      return s;
    }
  }
  /**
   * <code>string teamId = 4;</code>
   */
  public com.google.protobuf.ByteString
      getTeamIdBytes() {
    java.lang.Object ref = teamId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      teamId_ = b;
      return b;
    } else {
      return (com.google.protobuf.ByteString) ref;
    }
  }

  public static final int SPRINTID_FIELD_NUMBER = 5;
  private volatile java.lang.Object sprintId_;
  /**
   * <code>string sprintId = 5;</code>
   */
  public java.lang.String getSprintId() {
    java.lang.Object ref = sprintId_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      sprintId_ = s;
      return s;
    }
  }
  /**
   * <code>string sprintId = 5;</code>
   */
  public com.google.protobuf.ByteString
      getSprintIdBytes() {
    java.lang.Object ref = sprintId_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      sprintId_ = b;
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
    if (!getCookieBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 1, cookie_);
    }
    if (!getRequesterIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 2, requesterId_);
    }
    if (!getProjectIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, projectId_);
    }
    if (!getTeamIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, teamId_);
    }
    if (!getSprintIdBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 5, sprintId_);
    }
    unknownFields.writeTo(output);
  }

  @java.lang.Override
  public int getSerializedSize() {
    int size = memoizedSize;
    if (size != -1) return size;

    size = 0;
    if (!getCookieBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, cookie_);
    }
    if (!getRequesterIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(2, requesterId_);
    }
    if (!getProjectIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, projectId_);
    }
    if (!getTeamIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, teamId_);
    }
    if (!getSprintIdBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(5, sprintId_);
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
    if (!(obj instanceof co.overlead.gRPC.GetVelocityReq)) {
      return super.equals(obj);
    }
    co.overlead.gRPC.GetVelocityReq other = (co.overlead.gRPC.GetVelocityReq) obj;

    if (!getCookie()
        .equals(other.getCookie())) return false;
    if (!getRequesterId()
        .equals(other.getRequesterId())) return false;
    if (!getProjectId()
        .equals(other.getProjectId())) return false;
    if (!getTeamId()
        .equals(other.getTeamId())) return false;
    if (!getSprintId()
        .equals(other.getSprintId())) return false;
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
    hash = (37 * hash) + COOKIE_FIELD_NUMBER;
    hash = (53 * hash) + getCookie().hashCode();
    hash = (37 * hash) + REQUESTERID_FIELD_NUMBER;
    hash = (53 * hash) + getRequesterId().hashCode();
    hash = (37 * hash) + PROJECTID_FIELD_NUMBER;
    hash = (53 * hash) + getProjectId().hashCode();
    hash = (37 * hash) + TEAMID_FIELD_NUMBER;
    hash = (53 * hash) + getTeamId().hashCode();
    hash = (37 * hash) + SPRINTID_FIELD_NUMBER;
    hash = (53 * hash) + getSprintId().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static co.overlead.gRPC.GetVelocityReq parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static co.overlead.gRPC.GetVelocityReq parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.GetVelocityReq parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.GetVelocityReq parseFrom(
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
  public static Builder newBuilder(co.overlead.gRPC.GetVelocityReq prototype) {
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
   * Protobuf type {@code velocity.GetVelocityReq}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:velocity.GetVelocityReq)
      co.overlead.gRPC.GetVelocityReqOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return co.overlead.gRPC.velocity.internal_static_velocity_GetVelocityReq_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return co.overlead.gRPC.velocity.internal_static_velocity_GetVelocityReq_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              co.overlead.gRPC.GetVelocityReq.class, co.overlead.gRPC.GetVelocityReq.Builder.class);
    }

    // Construct using co.overlead.gRPC.GetVelocityReq.newBuilder()
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
      cookie_ = "";

      requesterId_ = "";

      projectId_ = "";

      teamId_ = "";

      sprintId_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return co.overlead.gRPC.velocity.internal_static_velocity_GetVelocityReq_descriptor;
    }

    @java.lang.Override
    public co.overlead.gRPC.GetVelocityReq getDefaultInstanceForType() {
      return co.overlead.gRPC.GetVelocityReq.getDefaultInstance();
    }

    @java.lang.Override
    public co.overlead.gRPC.GetVelocityReq build() {
      co.overlead.gRPC.GetVelocityReq result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public co.overlead.gRPC.GetVelocityReq buildPartial() {
      co.overlead.gRPC.GetVelocityReq result = new co.overlead.gRPC.GetVelocityReq(this);
      result.cookie_ = cookie_;
      result.requesterId_ = requesterId_;
      result.projectId_ = projectId_;
      result.teamId_ = teamId_;
      result.sprintId_ = sprintId_;
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
      if (other instanceof co.overlead.gRPC.GetVelocityReq) {
        return mergeFrom((co.overlead.gRPC.GetVelocityReq)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(co.overlead.gRPC.GetVelocityReq other) {
      if (other == co.overlead.gRPC.GetVelocityReq.getDefaultInstance()) return this;
      if (!other.getCookie().isEmpty()) {
        cookie_ = other.cookie_;
        onChanged();
      }
      if (!other.getRequesterId().isEmpty()) {
        requesterId_ = other.requesterId_;
        onChanged();
      }
      if (!other.getProjectId().isEmpty()) {
        projectId_ = other.projectId_;
        onChanged();
      }
      if (!other.getTeamId().isEmpty()) {
        teamId_ = other.teamId_;
        onChanged();
      }
      if (!other.getSprintId().isEmpty()) {
        sprintId_ = other.sprintId_;
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
      co.overlead.gRPC.GetVelocityReq parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (co.overlead.gRPC.GetVelocityReq) e.getUnfinishedMessage();
        throw e.unwrapIOException();
      } finally {
        if (parsedMessage != null) {
          mergeFrom(parsedMessage);
        }
      }
      return this;
    }

    private java.lang.Object cookie_ = "";
    /**
     * <code>string cookie = 1;</code>
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
     * <code>string cookie = 1;</code>
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
     * <code>string cookie = 1;</code>
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
     * <code>string cookie = 1;</code>
     */
    public Builder clearCookie() {
      
      cookie_ = getDefaultInstance().getCookie();
      onChanged();
      return this;
    }
    /**
     * <code>string cookie = 1;</code>
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

    private java.lang.Object requesterId_ = "";
    /**
     * <code>string requesterId = 2;</code>
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
     * <code>string requesterId = 2;</code>
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
     * <code>string requesterId = 2;</code>
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
     * <code>string requesterId = 2;</code>
     */
    public Builder clearRequesterId() {
      
      requesterId_ = getDefaultInstance().getRequesterId();
      onChanged();
      return this;
    }
    /**
     * <code>string requesterId = 2;</code>
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
     * <code>string projectId = 3;</code>
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
     * <code>string projectId = 3;</code>
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
     * <code>string projectId = 3;</code>
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
     * <code>string projectId = 3;</code>
     */
    public Builder clearProjectId() {
      
      projectId_ = getDefaultInstance().getProjectId();
      onChanged();
      return this;
    }
    /**
     * <code>string projectId = 3;</code>
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

    private java.lang.Object teamId_ = "";
    /**
     * <code>string teamId = 4;</code>
     */
    public java.lang.String getTeamId() {
      java.lang.Object ref = teamId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        teamId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string teamId = 4;</code>
     */
    public com.google.protobuf.ByteString
        getTeamIdBytes() {
      java.lang.Object ref = teamId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        teamId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string teamId = 4;</code>
     */
    public Builder setTeamId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      teamId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string teamId = 4;</code>
     */
    public Builder clearTeamId() {
      
      teamId_ = getDefaultInstance().getTeamId();
      onChanged();
      return this;
    }
    /**
     * <code>string teamId = 4;</code>
     */
    public Builder setTeamIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      teamId_ = value;
      onChanged();
      return this;
    }

    private java.lang.Object sprintId_ = "";
    /**
     * <code>string sprintId = 5;</code>
     */
    public java.lang.String getSprintId() {
      java.lang.Object ref = sprintId_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        sprintId_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <code>string sprintId = 5;</code>
     */
    public com.google.protobuf.ByteString
        getSprintIdBytes() {
      java.lang.Object ref = sprintId_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        sprintId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <code>string sprintId = 5;</code>
     */
    public Builder setSprintId(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      sprintId_ = value;
      onChanged();
      return this;
    }
    /**
     * <code>string sprintId = 5;</code>
     */
    public Builder clearSprintId() {
      
      sprintId_ = getDefaultInstance().getSprintId();
      onChanged();
      return this;
    }
    /**
     * <code>string sprintId = 5;</code>
     */
    public Builder setSprintIdBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      sprintId_ = value;
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


    // @@protoc_insertion_point(builder_scope:velocity.GetVelocityReq)
  }

  // @@protoc_insertion_point(class_scope:velocity.GetVelocityReq)
  private static final co.overlead.gRPC.GetVelocityReq DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new co.overlead.gRPC.GetVelocityReq();
  }

  public static co.overlead.gRPC.GetVelocityReq getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<GetVelocityReq>
      PARSER = new com.google.protobuf.AbstractParser<GetVelocityReq>() {
    @java.lang.Override
    public GetVelocityReq parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new GetVelocityReq(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<GetVelocityReq> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<GetVelocityReq> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public co.overlead.gRPC.GetVelocityReq getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

