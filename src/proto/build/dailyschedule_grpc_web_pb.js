/**
 * @fileoverview gRPC-Web generated client stub for dailyschedule
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.dailyschedule = require('./dailyschedule_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.dailyschedule.DailyscheduleClient =
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
proto.dailyschedule.DailyschedulePromiseClient =
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
 *   !proto.dailyschedule.AddNewDailyScheduleReq,
 *   !proto.dailyschedule.DailyScheduleRes>}
 */
const methodInfo_Dailyschedule_addNewDailySchedule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dailyschedule.DailyScheduleRes,
  /** @param {!proto.dailyschedule.AddNewDailyScheduleReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dailyschedule.DailyScheduleRes.deserializeBinary
);


/**
 * @param {!proto.dailyschedule.AddNewDailyScheduleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dailyschedule.DailyScheduleRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dailyschedule.DailyScheduleRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dailyschedule.DailyscheduleClient.prototype.addNewDailySchedule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dailyschedule.Dailyschedule/addNewDailySchedule',
      request,
      metadata || {},
      methodInfo_Dailyschedule_addNewDailySchedule,
      callback);
};


/**
 * @param {!proto.dailyschedule.AddNewDailyScheduleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dailyschedule.DailyScheduleRes>}
 *     A native promise that resolves to the response
 */
proto.dailyschedule.DailyschedulePromiseClient.prototype.addNewDailySchedule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dailyschedule.Dailyschedule/addNewDailySchedule',
      request,
      metadata || {},
      methodInfo_Dailyschedule_addNewDailySchedule);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dailyschedule.UpdateDailyScheduleReq,
 *   !proto.dailyschedule.DailyScheduleRes>}
 */
const methodInfo_Dailyschedule_updateDailySchedule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dailyschedule.DailyScheduleRes,
  /** @param {!proto.dailyschedule.UpdateDailyScheduleReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dailyschedule.DailyScheduleRes.deserializeBinary
);


/**
 * @param {!proto.dailyschedule.UpdateDailyScheduleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dailyschedule.DailyScheduleRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dailyschedule.DailyScheduleRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dailyschedule.DailyscheduleClient.prototype.updateDailySchedule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dailyschedule.Dailyschedule/updateDailySchedule',
      request,
      metadata || {},
      methodInfo_Dailyschedule_updateDailySchedule,
      callback);
};


/**
 * @param {!proto.dailyschedule.UpdateDailyScheduleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dailyschedule.DailyScheduleRes>}
 *     A native promise that resolves to the response
 */
proto.dailyschedule.DailyschedulePromiseClient.prototype.updateDailySchedule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dailyschedule.Dailyschedule/updateDailySchedule',
      request,
      metadata || {},
      methodInfo_Dailyschedule_updateDailySchedule);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dailyschedule.DeleteDailyScheduleReq,
 *   !proto.dailyschedule.DailyScheduleRes>}
 */
const methodInfo_Dailyschedule_deleteDailySchedule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dailyschedule.DailyScheduleRes,
  /** @param {!proto.dailyschedule.DeleteDailyScheduleReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dailyschedule.DailyScheduleRes.deserializeBinary
);


/**
 * @param {!proto.dailyschedule.DeleteDailyScheduleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.dailyschedule.DailyScheduleRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.dailyschedule.DailyScheduleRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.dailyschedule.DailyscheduleClient.prototype.deleteDailySchedule =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/dailyschedule.Dailyschedule/deleteDailySchedule',
      request,
      metadata || {},
      methodInfo_Dailyschedule_deleteDailySchedule,
      callback);
};


/**
 * @param {!proto.dailyschedule.DeleteDailyScheduleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.dailyschedule.DailyScheduleRes>}
 *     A native promise that resolves to the response
 */
proto.dailyschedule.DailyschedulePromiseClient.prototype.deleteDailySchedule =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/dailyschedule.Dailyschedule/deleteDailySchedule',
      request,
      metadata || {},
      methodInfo_Dailyschedule_deleteDailySchedule);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.dailyschedule.GetAllDailyScheduleReq,
 *   !proto.dailyschedule.DailyScheduleRes>}
 */
const methodInfo_Dailyschedule_getAllDailySchedule = new grpc.web.AbstractClientBase.MethodInfo(
  proto.dailyschedule.DailyScheduleRes,
  /** @param {!proto.dailyschedule.GetAllDailyScheduleReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.dailyschedule.DailyScheduleRes.deserializeBinary
);


/**
 * @param {!proto.dailyschedule.GetAllDailyScheduleReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dailyschedule.DailyScheduleRes>}
 *     The XHR Node Readable Stream
 */
proto.dailyschedule.DailyscheduleClient.prototype.getAllDailySchedule =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dailyschedule.Dailyschedule/getAllDailySchedule',
      request,
      metadata || {},
      methodInfo_Dailyschedule_getAllDailySchedule);
};


/**
 * @param {!proto.dailyschedule.GetAllDailyScheduleReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.dailyschedule.DailyScheduleRes>}
 *     The XHR Node Readable Stream
 */
proto.dailyschedule.DailyschedulePromiseClient.prototype.getAllDailySchedule =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/dailyschedule.Dailyschedule/getAllDailySchedule',
      request,
      metadata || {},
      methodInfo_Dailyschedule_getAllDailySchedule);
};


module.exports = proto.dailyschedule;

