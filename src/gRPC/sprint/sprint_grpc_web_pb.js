/**
 * @fileoverview gRPC-Web generated client stub for sprint
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.sprint = require('./sprint_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.sprint.SprintClient =
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
proto.sprint.SprintPromiseClient =
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
 *   !proto.sprint.DeleteSprintReq,
 *   !proto.sprint.SprintRes>}
 */
const methodInfo_Sprint_deleteSprint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sprint.SprintRes,
  /** @param {!proto.sprint.DeleteSprintReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sprint.SprintRes.deserializeBinary
);


/**
 * @param {!proto.sprint.DeleteSprintReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sprint.SprintRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sprint.SprintRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sprint.SprintClient.prototype.deleteSprint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sprint.Sprint/deleteSprint',
      request,
      metadata || {},
      methodInfo_Sprint_deleteSprint,
      callback);
};


/**
 * @param {!proto.sprint.DeleteSprintReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sprint.SprintRes>}
 *     A native promise that resolves to the response
 */
proto.sprint.SprintPromiseClient.prototype.deleteSprint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sprint.Sprint/deleteSprint',
      request,
      metadata || {},
      methodInfo_Sprint_deleteSprint);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sprint.AddNewSprintReq,
 *   !proto.sprint.SprintRes>}
 */
const methodInfo_Sprint_addNewSprint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sprint.SprintRes,
  /** @param {!proto.sprint.AddNewSprintReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sprint.SprintRes.deserializeBinary
);


/**
 * @param {!proto.sprint.AddNewSprintReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sprint.SprintRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sprint.SprintRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sprint.SprintClient.prototype.addNewSprint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sprint.Sprint/addNewSprint',
      request,
      metadata || {},
      methodInfo_Sprint_addNewSprint,
      callback);
};


/**
 * @param {!proto.sprint.AddNewSprintReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sprint.SprintRes>}
 *     A native promise that resolves to the response
 */
proto.sprint.SprintPromiseClient.prototype.addNewSprint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sprint.Sprint/addNewSprint',
      request,
      metadata || {},
      methodInfo_Sprint_addNewSprint);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sprint.GetAllSprintReq,
 *   !proto.sprint.GetAllSprintRes>}
 */
const methodInfo_Sprint_getAllSprint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sprint.GetAllSprintRes,
  /** @param {!proto.sprint.GetAllSprintReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sprint.GetAllSprintRes.deserializeBinary
);


/**
 * @param {!proto.sprint.GetAllSprintReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sprint.GetAllSprintRes>}
 *     The XHR Node Readable Stream
 */
proto.sprint.SprintClient.prototype.getAllSprint =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sprint.Sprint/getAllSprint',
      request,
      metadata || {},
      methodInfo_Sprint_getAllSprint);
};


/**
 * @param {!proto.sprint.GetAllSprintReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.sprint.GetAllSprintRes>}
 *     The XHR Node Readable Stream
 */
proto.sprint.SprintPromiseClient.prototype.getAllSprint =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/sprint.Sprint/getAllSprint',
      request,
      metadata || {},
      methodInfo_Sprint_getAllSprint);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sprint.DeleteSprintReq,
 *   !proto.sprint.SprintRes>}
 */
const methodInfo_Sprint_setCurrentSprint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sprint.SprintRes,
  /** @param {!proto.sprint.DeleteSprintReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sprint.SprintRes.deserializeBinary
);


/**
 * @param {!proto.sprint.DeleteSprintReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sprint.SprintRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sprint.SprintRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sprint.SprintClient.prototype.setCurrentSprint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sprint.Sprint/setCurrentSprint',
      request,
      metadata || {},
      methodInfo_Sprint_setCurrentSprint,
      callback);
};


/**
 * @param {!proto.sprint.DeleteSprintReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sprint.SprintRes>}
 *     A native promise that resolves to the response
 */
proto.sprint.SprintPromiseClient.prototype.setCurrentSprint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sprint.Sprint/setCurrentSprint',
      request,
      metadata || {},
      methodInfo_Sprint_setCurrentSprint);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.sprint.DeleteSprintReq,
 *   !proto.sprint.GetAllSprintRes>}
 */
const methodInfo_Sprint_getSprint = new grpc.web.AbstractClientBase.MethodInfo(
  proto.sprint.GetAllSprintRes,
  /** @param {!proto.sprint.DeleteSprintReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.sprint.GetAllSprintRes.deserializeBinary
);


/**
 * @param {!proto.sprint.DeleteSprintReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.sprint.GetAllSprintRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.sprint.GetAllSprintRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.sprint.SprintClient.prototype.getSprint =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/sprint.Sprint/getSprint',
      request,
      metadata || {},
      methodInfo_Sprint_getSprint,
      callback);
};


/**
 * @param {!proto.sprint.DeleteSprintReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.sprint.GetAllSprintRes>}
 *     A native promise that resolves to the response
 */
proto.sprint.SprintPromiseClient.prototype.getSprint =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/sprint.Sprint/getSprint',
      request,
      metadata || {},
      methodInfo_Sprint_getSprint);
};


module.exports = proto.sprint;

