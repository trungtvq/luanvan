/**
 * @fileoverview gRPC-Web generated client stub for userstory
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.userstory = require('./userstory_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.userstory.UserStoryClient =
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
proto.userstory.UserStoryPromiseClient =
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
 *   !proto.userstory.AddNewUserStoryReq,
 *   !proto.userstory.UserStoryRes>}
 */
const methodInfo_UserStory_addNewUserStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userstory.UserStoryRes,
  /** @param {!proto.userstory.AddNewUserStoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userstory.UserStoryRes.deserializeBinary
);


/**
 * @param {!proto.userstory.AddNewUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userstory.UserStoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.UserStoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserStoryClient.prototype.addNewUserStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userstory.UserStory/addNewUserStory',
      request,
      metadata || {},
      methodInfo_UserStory_addNewUserStory,
      callback);
};


/**
 * @param {!proto.userstory.AddNewUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userstory.UserStoryRes>}
 *     A native promise that resolves to the response
 */
proto.userstory.UserStoryPromiseClient.prototype.addNewUserStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userstory.UserStory/addNewUserStory',
      request,
      metadata || {},
      methodInfo_UserStory_addNewUserStory);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userstory.UpdateUserStoryReq,
 *   !proto.userstory.UserStoryRes>}
 */
const methodInfo_UserStory_updateUserStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userstory.UserStoryRes,
  /** @param {!proto.userstory.UpdateUserStoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userstory.UserStoryRes.deserializeBinary
);


/**
 * @param {!proto.userstory.UpdateUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userstory.UserStoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.UserStoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserStoryClient.prototype.updateUserStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userstory.UserStory/updateUserStory',
      request,
      metadata || {},
      methodInfo_UserStory_updateUserStory,
      callback);
};


/**
 * @param {!proto.userstory.UpdateUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userstory.UserStoryRes>}
 *     A native promise that resolves to the response
 */
proto.userstory.UserStoryPromiseClient.prototype.updateUserStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userstory.UserStory/updateUserStory',
      request,
      metadata || {},
      methodInfo_UserStory_updateUserStory);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userstory.DeleteUserStoryReq,
 *   !proto.userstory.UserStoryRes>}
 */
const methodInfo_UserStory_deleteUserStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userstory.UserStoryRes,
  /** @param {!proto.userstory.DeleteUserStoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userstory.UserStoryRes.deserializeBinary
);


/**
 * @param {!proto.userstory.DeleteUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userstory.UserStoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.UserStoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserStoryClient.prototype.deleteUserStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userstory.UserStory/deleteUserStory',
      request,
      metadata || {},
      methodInfo_UserStory_deleteUserStory,
      callback);
};


/**
 * @param {!proto.userstory.DeleteUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userstory.UserStoryRes>}
 *     A native promise that resolves to the response
 */
proto.userstory.UserStoryPromiseClient.prototype.deleteUserStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userstory.UserStory/deleteUserStory',
      request,
      metadata || {},
      methodInfo_UserStory_deleteUserStory);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userstory.GetAllUserStoryReq,
 *   !proto.userstory.GetAllUserStoryRes>}
 */
const methodInfo_UserStory_getAllUserStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userstory.GetAllUserStoryRes,
  /** @param {!proto.userstory.GetAllUserStoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userstory.GetAllUserStoryRes.deserializeBinary
);


/**
 * @param {!proto.userstory.GetAllUserStoryReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.GetAllUserStoryRes>}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserStoryClient.prototype.getAllUserStory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/userstory.UserStory/getAllUserStory',
      request,
      metadata || {},
      methodInfo_UserStory_getAllUserStory);
};


/**
 * @param {!proto.userstory.GetAllUserStoryReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.GetAllUserStoryRes>}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserStoryPromiseClient.prototype.getAllUserStory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/userstory.UserStory/getAllUserStory',
      request,
      metadata || {},
      methodInfo_UserStory_getAllUserStory);
};


module.exports = proto.userstory;

