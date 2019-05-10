// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: chat.proto

package co.overlead.gRPC;

/**
 * Protobuf type {@code chat.CreateChannelChatReq}
 */
public  final class CreateChannelChatReq extends
    com.google.protobuf.GeneratedMessageV3 implements
    // @@protoc_insertion_point(message_implements:chat.CreateChannelChatReq)
    CreateChannelChatReqOrBuilder {
private static final long serialVersionUID = 0L;
  // Use CreateChannelChatReq.newBuilder() to construct.
  private CreateChannelChatReq(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
    super(builder);
  }
  private CreateChannelChatReq() {
    cookie_ = "";
    requesterId_ = "";
    title_ = "";
    link_ = "";
  }

  @java.lang.Override
  public final com.google.protobuf.UnknownFieldSet
  getUnknownFields() {
    return this.unknownFields;
  }
  private CreateChannelChatReq(
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

            title_ = s;
            break;
          }
          case 34: {
            java.lang.String s = input.readStringRequireUtf8();

            link_ = s;
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
    return co.overlead.gRPC.chat.internal_static_chat_CreateChannelChatReq_descriptor;
  }

  @java.lang.Override
  protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internalGetFieldAccessorTable() {
    return co.overlead.gRPC.chat.internal_static_chat_CreateChannelChatReq_fieldAccessorTable
        .ensureFieldAccessorsInitialized(
            co.overlead.gRPC.CreateChannelChatReq.class, co.overlead.gRPC.CreateChannelChatReq.Builder.class);
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

  public static final int TITLE_FIELD_NUMBER = 3;
  private volatile java.lang.Object title_;
  /**
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

  public static final int LINK_FIELD_NUMBER = 4;
  private volatile java.lang.Object link_;
  /**
   * <pre>
   *this is a advance feature
   * </pre>
   *
   * <code>string link = 4;</code>
   */
  public java.lang.String getLink() {
    java.lang.Object ref = link_;
    if (ref instanceof java.lang.String) {
      return (java.lang.String) ref;
    } else {
      com.google.protobuf.ByteString bs = 
          (com.google.protobuf.ByteString) ref;
      java.lang.String s = bs.toStringUtf8();
      link_ = s;
      return s;
    }
  }
  /**
   * <pre>
   *this is a advance feature
   * </pre>
   *
   * <code>string link = 4;</code>
   */
  public com.google.protobuf.ByteString
      getLinkBytes() {
    java.lang.Object ref = link_;
    if (ref instanceof java.lang.String) {
      com.google.protobuf.ByteString b = 
          com.google.protobuf.ByteString.copyFromUtf8(
              (java.lang.String) ref);
      link_ = b;
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
    if (!getTitleBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 3, title_);
    }
    if (!getLinkBytes().isEmpty()) {
      com.google.protobuf.GeneratedMessageV3.writeString(output, 4, link_);
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
    if (!getTitleBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, title_);
    }
    if (!getLinkBytes().isEmpty()) {
      size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, link_);
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
    if (!(obj instanceof co.overlead.gRPC.CreateChannelChatReq)) {
      return super.equals(obj);
    }
    co.overlead.gRPC.CreateChannelChatReq other = (co.overlead.gRPC.CreateChannelChatReq) obj;

    if (!getCookie()
        .equals(other.getCookie())) return false;
    if (!getRequesterId()
        .equals(other.getRequesterId())) return false;
    if (!getTitle()
        .equals(other.getTitle())) return false;
    if (!getLink()
        .equals(other.getLink())) return false;
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
    hash = (37 * hash) + TITLE_FIELD_NUMBER;
    hash = (53 * hash) + getTitle().hashCode();
    hash = (37 * hash) + LINK_FIELD_NUMBER;
    hash = (53 * hash) + getLink().hashCode();
    hash = (29 * hash) + unknownFields.hashCode();
    memoizedHashCode = hash;
    return hash;
  }

  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(
      java.nio.ByteBuffer data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(
      java.nio.ByteBuffer data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(
      com.google.protobuf.ByteString data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(
      com.google.protobuf.ByteString data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(byte[] data)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(
      byte[] data,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws com.google.protobuf.InvalidProtocolBufferException {
    return PARSER.parseFrom(data, extensionRegistry);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input, extensionRegistry);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseDelimitedFrom(java.io.InputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseDelimitedFrom(
      java.io.InputStream input,
      com.google.protobuf.ExtensionRegistryLite extensionRegistry)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(
      com.google.protobuf.CodedInputStream input)
      throws java.io.IOException {
    return com.google.protobuf.GeneratedMessageV3
        .parseWithIOException(PARSER, input);
  }
  public static co.overlead.gRPC.CreateChannelChatReq parseFrom(
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
  public static Builder newBuilder(co.overlead.gRPC.CreateChannelChatReq prototype) {
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
   * Protobuf type {@code chat.CreateChannelChatReq}
   */
  public static final class Builder extends
      com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
      // @@protoc_insertion_point(builder_implements:chat.CreateChannelChatReq)
      co.overlead.gRPC.CreateChannelChatReqOrBuilder {
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return co.overlead.gRPC.chat.internal_static_chat_CreateChannelChatReq_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return co.overlead.gRPC.chat.internal_static_chat_CreateChannelChatReq_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              co.overlead.gRPC.CreateChannelChatReq.class, co.overlead.gRPC.CreateChannelChatReq.Builder.class);
    }

    // Construct using co.overlead.gRPC.CreateChannelChatReq.newBuilder()
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

      title_ = "";

      link_ = "";

      return this;
    }

    @java.lang.Override
    public com.google.protobuf.Descriptors.Descriptor
        getDescriptorForType() {
      return co.overlead.gRPC.chat.internal_static_chat_CreateChannelChatReq_descriptor;
    }

    @java.lang.Override
    public co.overlead.gRPC.CreateChannelChatReq getDefaultInstanceForType() {
      return co.overlead.gRPC.CreateChannelChatReq.getDefaultInstance();
    }

    @java.lang.Override
    public co.overlead.gRPC.CreateChannelChatReq build() {
      co.overlead.gRPC.CreateChannelChatReq result = buildPartial();
      if (!result.isInitialized()) {
        throw newUninitializedMessageException(result);
      }
      return result;
    }

    @java.lang.Override
    public co.overlead.gRPC.CreateChannelChatReq buildPartial() {
      co.overlead.gRPC.CreateChannelChatReq result = new co.overlead.gRPC.CreateChannelChatReq(this);
      result.cookie_ = cookie_;
      result.requesterId_ = requesterId_;
      result.title_ = title_;
      result.link_ = link_;
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
      if (other instanceof co.overlead.gRPC.CreateChannelChatReq) {
        return mergeFrom((co.overlead.gRPC.CreateChannelChatReq)other);
      } else {
        super.mergeFrom(other);
        return this;
      }
    }

    public Builder mergeFrom(co.overlead.gRPC.CreateChannelChatReq other) {
      if (other == co.overlead.gRPC.CreateChannelChatReq.getDefaultInstance()) return this;
      if (!other.getCookie().isEmpty()) {
        cookie_ = other.cookie_;
        onChanged();
      }
      if (!other.getRequesterId().isEmpty()) {
        requesterId_ = other.requesterId_;
        onChanged();
      }
      if (!other.getTitle().isEmpty()) {
        title_ = other.title_;
        onChanged();
      }
      if (!other.getLink().isEmpty()) {
        link_ = other.link_;
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
      co.overlead.gRPC.CreateChannelChatReq parsedMessage = null;
      try {
        parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        parsedMessage = (co.overlead.gRPC.CreateChannelChatReq) e.getUnfinishedMessage();
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

    private java.lang.Object title_ = "";
    /**
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
     * <code>string title = 3;</code>
     */
    public Builder clearTitle() {
      
      title_ = getDefaultInstance().getTitle();
      onChanged();
      return this;
    }
    /**
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

    private java.lang.Object link_ = "";
    /**
     * <pre>
     *this is a advance feature
     * </pre>
     *
     * <code>string link = 4;</code>
     */
    public java.lang.String getLink() {
      java.lang.Object ref = link_;
      if (!(ref instanceof java.lang.String)) {
        com.google.protobuf.ByteString bs =
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        link_ = s;
        return s;
      } else {
        return (java.lang.String) ref;
      }
    }
    /**
     * <pre>
     *this is a advance feature
     * </pre>
     *
     * <code>string link = 4;</code>
     */
    public com.google.protobuf.ByteString
        getLinkBytes() {
      java.lang.Object ref = link_;
      if (ref instanceof String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        link_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }
    /**
     * <pre>
     *this is a advance feature
     * </pre>
     *
     * <code>string link = 4;</code>
     */
    public Builder setLink(
        java.lang.String value) {
      if (value == null) {
    throw new NullPointerException();
  }
  
      link_ = value;
      onChanged();
      return this;
    }
    /**
     * <pre>
     *this is a advance feature
     * </pre>
     *
     * <code>string link = 4;</code>
     */
    public Builder clearLink() {
      
      link_ = getDefaultInstance().getLink();
      onChanged();
      return this;
    }
    /**
     * <pre>
     *this is a advance feature
     * </pre>
     *
     * <code>string link = 4;</code>
     */
    public Builder setLinkBytes(
        com.google.protobuf.ByteString value) {
      if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
      
      link_ = value;
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


    // @@protoc_insertion_point(builder_scope:chat.CreateChannelChatReq)
  }

  // @@protoc_insertion_point(class_scope:chat.CreateChannelChatReq)
  private static final co.overlead.gRPC.CreateChannelChatReq DEFAULT_INSTANCE;
  static {
    DEFAULT_INSTANCE = new co.overlead.gRPC.CreateChannelChatReq();
  }

  public static co.overlead.gRPC.CreateChannelChatReq getDefaultInstance() {
    return DEFAULT_INSTANCE;
  }

  private static final com.google.protobuf.Parser<CreateChannelChatReq>
      PARSER = new com.google.protobuf.AbstractParser<CreateChannelChatReq>() {
    @java.lang.Override
    public CreateChannelChatReq parsePartialFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return new CreateChannelChatReq(input, extensionRegistry);
    }
  };

  public static com.google.protobuf.Parser<CreateChannelChatReq> parser() {
    return PARSER;
  }

  @java.lang.Override
  public com.google.protobuf.Parser<CreateChannelChatReq> getParserForType() {
    return PARSER;
  }

  @java.lang.Override
  public co.overlead.gRPC.CreateChannelChatReq getDefaultInstanceForType() {
    return DEFAULT_INSTANCE;
  }

}

