/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.SendMsgReq,
 *   !proto.chat.SendMsgRes>}
 */
const methodInfo_Chat_ConnectRenew = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.SendMsgRes,
  /** @param {!proto.chat.SendMsgReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.SendMsgRes.deserializeBinary
);


/**
 * @param {!proto.chat.SendMsgReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.SendMsgRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.SendMsgRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.connectRenew =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/ConnectRenew',
      request,
      metadata || {},
      methodInfo_Chat_ConnectRenew,
      callback);
};


/**
 * @param {!proto.chat.SendMsgReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.SendMsgRes>}
 *     A native promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.connectRenew =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/ConnectRenew',
      request,
      metadata || {},
      methodInfo_Chat_ConnectRenew);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.SendMsgReq,
 *   !proto.chat.SendMsgRes>}
 */
const methodInfo_Chat_ConnectChat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.SendMsgRes,
  /** @param {!proto.chat.SendMsgReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.SendMsgRes.deserializeBinary
);


/**
 * @param {!proto.chat.SendMsgReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.SendMsgRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.SendMsgRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.connectChat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/ConnectChat',
      request,
      metadata || {},
      methodInfo_Chat_ConnectChat,
      callback);
};


/**
 * @param {!proto.chat.SendMsgReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.SendMsgRes>}
 *     A native promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.connectChat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/ConnectChat',
      request,
      metadata || {},
      methodInfo_Chat_ConnectChat);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.SendMsgReq,
 *   !proto.chat.SendMsgRes>}
 */
const methodInfo_Chat_SendMsg = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.SendMsgRes,
  /** @param {!proto.chat.SendMsgReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.SendMsgRes.deserializeBinary
);


/**
 * @param {!proto.chat.SendMsgReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.SendMsgRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.SendMsgRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.sendMsg =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/SendMsg',
      request,
      metadata || {},
      methodInfo_Chat_SendMsg,
      callback);
};


/**
 * @param {!proto.chat.SendMsgReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.SendMsgRes>}
 *     A native promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.sendMsg =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/SendMsg',
      request,
      metadata || {},
      methodInfo_Chat_SendMsg);
};


module.exports = proto.chat;

