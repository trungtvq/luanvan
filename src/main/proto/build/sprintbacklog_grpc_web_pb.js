/**
 * @fileoverview gRPC-Web generated client stub for sprintbacklog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.sprintbacklog = require('./sprintbacklog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sprintbacklog.SprintBacklogClient =
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
proto.sprintbacklog.SprintBacklogPromiseClient =
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
 *   !proto.sprintbacklog.DeleteSprintBacklogReq,
 *   !proto.sprintbacklog.SprintBacklogRes>}
 */
const methodInfo_SprintBacklog_deleteSprintBacklog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sprintbacklog.SprintBacklogRes,
  /** @param {!proto.sprintbacklog.DeleteSprintBacklogReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sprintbacklog.SprintBacklogRes.deserializeBinary
);


/**
 * @param {!proto.sprintbacklog.DeleteSprintBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sprintbacklog.SprintBacklogRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sprintbacklog.SprintBacklogRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sprintbacklog.SprintBacklogClient.prototype.deleteSprintBacklog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sprintbacklog.SprintBacklog/deleteSprintBacklog',
      request,
      metadata || {},
      methodInfo_SprintBacklog_deleteSprintBacklog,
      callback);
};


/**
 * @param {!proto.sprintbacklog.DeleteSprintBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sprintbacklog.SprintBacklogRes>}
 *     A native promise that resolves to the response
 */
proto.sprintbacklog.SprintBacklogPromiseClient.prototype.deleteSprintBacklog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sprintbacklog.SprintBacklog/deleteSprintBacklog',
      request,
      metadata || {},
      methodInfo_SprintBacklog_deleteSprintBacklog);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sprintbacklog.GetAllSprintBacklogReq,
 *   !proto.sprintbacklog.GetAllSprintBacklogRes>}
 */
const methodInfo_SprintBacklog_getAllSprintBacklog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sprintbacklog.GetAllSprintBacklogRes,
  /** @param {!proto.sprintbacklog.GetAllSprintBacklogReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sprintbacklog.GetAllSprintBacklogRes.deserializeBinary
);


/**
 * @param {!proto.sprintbacklog.GetAllSprintBacklogReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sprintbacklog.GetAllSprintBacklogRes>}
 *     The XHR Node Readable Stream
 */
proto.sprintbacklog.SprintBacklogClient.prototype.getAllSprintBacklog =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sprintbacklog.SprintBacklog/getAllSprintBacklog',
      request,
      metadata || {},
      methodInfo_SprintBacklog_getAllSprintBacklog);
};


/**
 * @param {!proto.sprintbacklog.GetAllSprintBacklogReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sprintbacklog.GetAllSprintBacklogRes>}
 *     The XHR Node Readable Stream
 */
proto.sprintbacklog.SprintBacklogPromiseClient.prototype.getAllSprintBacklog =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sprintbacklog.SprintBacklog/getAllSprintBacklog',
      request,
      metadata || {},
      methodInfo_SprintBacklog_getAllSprintBacklog);
};


module.exports = proto.sprintbacklog;

