/**
 * @fileoverview gRPC-Web generated client stub for velocity
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.velocity = require('./velocity_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.velocity.VelocityClient =
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
proto.velocity.VelocityPromiseClient =
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
 *   !proto.velocity.GetVelocityReq,
 *   !proto.velocity.GetVelocityRes>}
 */
const methodInfo_Velocity_getVelocity = new grpc.web.AbstractClientBase.MethodInfo(
  proto.velocity.GetVelocityRes,
  /** @param {!proto.velocity.GetVelocityReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.velocity.GetVelocityRes.deserializeBinary
);


/**
 * @param {!proto.velocity.GetVelocityReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.velocity.GetVelocityRes>}
 *     The XHR Node Readable Stream
 */
proto.velocity.VelocityClient.prototype.getVelocity =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/velocity.Velocity/getVelocity',
      request,
      metadata || {},
      methodInfo_Velocity_getVelocity);
};


/**
 * @param {!proto.velocity.GetVelocityReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.velocity.GetVelocityRes>}
 *     The XHR Node Readable Stream
 */
proto.velocity.VelocityPromiseClient.prototype.getVelocity =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/velocity.Velocity/getVelocity',
      request,
      metadata || {},
      methodInfo_Velocity_getVelocity);
};


module.exports = proto.velocity;

