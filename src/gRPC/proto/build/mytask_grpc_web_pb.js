/**
 * @fileoverview gRPC-Web generated client stub for mytask
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.mytask = require('./mytask_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.mytask.MytaskClient =
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
proto.mytask.MytaskPromiseClient =
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
 *   !proto.mytask.GetAllMyTaskReq,
 *   !proto.mytask.GetAllMyTaskRes>}
 */
const methodInfo_Mytask_getAllMyTask = new grpc.web.AbstractClientBase.MethodInfo(
  proto.mytask.GetAllMyTaskRes,
  /** @param {!proto.mytask.GetAllMyTaskReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.mytask.GetAllMyTaskRes.deserializeBinary
);


/**
 * @param {!proto.mytask.GetAllMyTaskReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mytask.GetAllMyTaskRes>}
 *     The XHR Node Readable Stream
 */
proto.mytask.MytaskClient.prototype.getAllMyTask =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mytask.Mytask/getAllMyTask',
      request,
      metadata || {},
      methodInfo_Mytask_getAllMyTask);
};


/**
 * @param {!proto.mytask.GetAllMyTaskReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.mytask.GetAllMyTaskRes>}
 *     The XHR Node Readable Stream
 */
proto.mytask.MytaskPromiseClient.prototype.getAllMyTask =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/mytask.Mytask/getAllMyTask',
      request,
      metadata || {},
      methodInfo_Mytask_getAllMyTask);
};


module.exports = proto.mytask;

