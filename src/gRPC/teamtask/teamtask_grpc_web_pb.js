/**
 * @fileoverview gRPC-Web generated client stub for teamtask
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.teamtask = require('./teamtask_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.teamtask.TeamTaskClient =
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
proto.teamtask.TeamTaskPromiseClient =
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
 *   !proto.teamtask.AddNewTeamTaskReq,
 *   !proto.teamtask.TeamTaskRes>}
 */
const methodInfo_TeamTask_addNewTeamTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamTaskRes,
  /** @param {!proto.teamtask.AddNewTeamTaskReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamTaskRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.AddNewTeamTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamTaskRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamTaskRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamTaskClient.prototype.addNewTeamTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.TeamTask/addNewTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_addNewTeamTask,
      callback);
};


/**
 * @param {!proto.teamtask.AddNewTeamTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamTaskRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamTaskPromiseClient.prototype.addNewTeamTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.TeamTask/addNewTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_addNewTeamTask);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.UpdateTeamTaskReq,
 *   !proto.teamtask.TeamTaskRes>}
 */
const methodInfo_TeamTask_updateTeamTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamTaskRes,
  /** @param {!proto.teamtask.UpdateTeamTaskReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamTaskRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.UpdateTeamTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamTaskRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamTaskRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamTaskClient.prototype.updateTeamTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.TeamTask/updateTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_updateTeamTask,
      callback);
};


/**
 * @param {!proto.teamtask.UpdateTeamTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamTaskRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamTaskPromiseClient.prototype.updateTeamTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.TeamTask/updateTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_updateTeamTask);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.RegisterTeamTaskReq,
 *   !proto.teamtask.TeamTaskRes>}
 */
const methodInfo_TeamTask_registerTeamTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamTaskRes,
  /** @param {!proto.teamtask.RegisterTeamTaskReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamTaskRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.RegisterTeamTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamTaskRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamTaskRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamTaskClient.prototype.registerTeamTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.TeamTask/registerTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_registerTeamTask,
      callback);
};


/**
 * @param {!proto.teamtask.RegisterTeamTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamTaskRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamTaskPromiseClient.prototype.registerTeamTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.TeamTask/registerTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_registerTeamTask);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.CancelTeamTaskReq,
 *   !proto.teamtask.TeamTaskRes>}
 */
const methodInfo_TeamTask_cancelTeamTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamTaskRes,
  /** @param {!proto.teamtask.CancelTeamTaskReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamTaskRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.CancelTeamTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamTaskRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamTaskRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamTaskClient.prototype.cancelTeamTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.TeamTask/cancelTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_cancelTeamTask,
      callback);
};


/**
 * @param {!proto.teamtask.CancelTeamTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamTaskRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamTaskPromiseClient.prototype.cancelTeamTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.TeamTask/cancelTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_cancelTeamTask);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.SendTeamTaskToMyTaskReq,
 *   !proto.teamtask.TeamTaskRes>}
 */
const methodInfo_TeamTask_sendTeamTaskToMyTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamTaskRes,
  /** @param {!proto.teamtask.SendTeamTaskToMyTaskReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamTaskRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.SendTeamTaskToMyTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamTaskRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamTaskRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamTaskClient.prototype.sendTeamTaskToMyTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.TeamTask/sendTeamTaskToMyTask',
      request,
      metadata || {},
      methodInfo_TeamTask_sendTeamTaskToMyTask,
      callback);
};


/**
 * @param {!proto.teamtask.SendTeamTaskToMyTaskReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamTaskRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamTaskPromiseClient.prototype.sendTeamTaskToMyTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.TeamTask/sendTeamTaskToMyTask',
      request,
      metadata || {},
      methodInfo_TeamTask_sendTeamTaskToMyTask);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.GetAllTeamTaskReq,
 *   !proto.teamtask.GetAllTeamTaskRes>}
 */
const methodInfo_TeamTask_getAllTeamTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.GetAllTeamTaskRes,
  /** @param {!proto.teamtask.GetAllTeamTaskReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.GetAllTeamTaskRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.GetAllTeamTaskReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.GetAllTeamTaskRes>}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamTaskClient.prototype.getAllTeamTask =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/teamtask.TeamTask/getAllTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_getAllTeamTask);
};


/**
 * @param {!proto.teamtask.GetAllTeamTaskReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.GetAllTeamTaskRes>}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamTaskPromiseClient.prototype.getAllTeamTask =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/teamtask.TeamTask/getAllTeamTask',
      request,
      metadata || {},
      methodInfo_TeamTask_getAllTeamTask);
};


module.exports = proto.teamtask;

