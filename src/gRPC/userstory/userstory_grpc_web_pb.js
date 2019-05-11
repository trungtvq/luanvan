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
proto.userstory.UserstoryClient =
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
proto.userstory.UserstoryPromiseClient =
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
 *   !proto.userstory.AddNewUserStoryRes>}
 */
const methodInfo_Userstory_addNewUserStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userstory.AddNewUserStoryRes,
  /** @param {!proto.userstory.AddNewUserStoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userstory.AddNewUserStoryRes.deserializeBinary
);


/**
 * @param {!proto.userstory.AddNewUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userstory.AddNewUserStoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.AddNewUserStoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserstoryClient.prototype.addNewUserStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userstory.Userstory/addNewUserStory',
      request,
      metadata || {},
      methodInfo_Userstory_addNewUserStory,
      callback);
};


/**
 * @param {!proto.userstory.AddNewUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userstory.AddNewUserStoryRes>}
 *     A native promise that resolves to the response
 */
proto.userstory.UserstoryPromiseClient.prototype.addNewUserStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userstory.Userstory/addNewUserStory',
      request,
      metadata || {},
      methodInfo_Userstory_addNewUserStory);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userstory.UpdateUserStoryReq,
 *   !proto.userstory.UpdateUserStoryRes>}
 */
const methodInfo_Userstory_updateUserStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userstory.UpdateUserStoryRes,
  /** @param {!proto.userstory.UpdateUserStoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userstory.UpdateUserStoryRes.deserializeBinary
);


/**
 * @param {!proto.userstory.UpdateUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userstory.UpdateUserStoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.UpdateUserStoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserstoryClient.prototype.updateUserStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userstory.Userstory/updateUserStory',
      request,
      metadata || {},
      methodInfo_Userstory_updateUserStory,
      callback);
};


/**
 * @param {!proto.userstory.UpdateUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userstory.UpdateUserStoryRes>}
 *     A native promise that resolves to the response
 */
proto.userstory.UserstoryPromiseClient.prototype.updateUserStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userstory.Userstory/updateUserStory',
      request,
      metadata || {},
      methodInfo_Userstory_updateUserStory);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userstory.DeleteUserStoryReq,
 *   !proto.userstory.DeleteUserStoryRes>}
 */
const methodInfo_Userstory_deleteUserStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.userstory.DeleteUserStoryRes,
  /** @param {!proto.userstory.DeleteUserStoryReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.userstory.DeleteUserStoryRes.deserializeBinary
);


/**
 * @param {!proto.userstory.DeleteUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.userstory.DeleteUserStoryRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.DeleteUserStoryRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserstoryClient.prototype.deleteUserStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userstory.Userstory/deleteUserStory',
      request,
      metadata || {},
      methodInfo_Userstory_deleteUserStory,
      callback);
};


/**
 * @param {!proto.userstory.DeleteUserStoryReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.userstory.DeleteUserStoryRes>}
 *     A native promise that resolves to the response
 */
proto.userstory.UserstoryPromiseClient.prototype.deleteUserStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userstory.Userstory/deleteUserStory',
      request,
      metadata || {},
      methodInfo_Userstory_deleteUserStory);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.userstory.GetAllUserStoryReq,
 *   !proto.userstory.GetAllUserStoryRes>}
 */
const methodInfo_Userstory_getAllUserStory = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.userstory.UserstoryClient.prototype.getAllUserStory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/userstory.Userstory/getAllUserStory',
      request,
      metadata || {},
      methodInfo_Userstory_getAllUserStory);
};


/**
 * @param {!proto.userstory.GetAllUserStoryReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.userstory.GetAllUserStoryRes>}
 *     The XHR Node Readable Stream
 */
proto.userstory.UserstoryPromiseClient.prototype.getAllUserStory =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/userstory.Userstory/getAllUserStory',
      request,
      metadata || {},
      methodInfo_Userstory_getAllUserStory);
};


module.exports = proto.userstory;

