/**
 * @fileoverview gRPC-Web generated client stub for profile
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.profile = require('./myprofile_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.profile.MyProfileClient =
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
proto.profile.MyProfilePromiseClient =
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
 *   !proto.profile.ProfileReq,
 *   !proto.profile.ProfileRes>}
 */
const methodInfo_MyProfile_getProfile = new grpc.web.AbstractClientBase.MethodInfo(
  proto.profile.ProfileRes,
  /** @param {!proto.profile.ProfileReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.profile.ProfileRes.deserializeBinary
);


/**
 * @param {!proto.profile.ProfileReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.profile.ProfileRes>}
 *     The XHR Node Readable Stream
 */
proto.profile.MyProfileClient.prototype.getProfile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/profile.MyProfile/getProfile',
      request,
      metadata || {},
      methodInfo_MyProfile_getProfile);
};


/**
 * @param {!proto.profile.ProfileReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.profile.ProfileRes>}
 *     The XHR Node Readable Stream
 */
proto.profile.MyProfilePromiseClient.prototype.getProfile =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/profile.MyProfile/getProfile',
      request,
      metadata || {},
      methodInfo_MyProfile_getProfile);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.profile.ProfileReq,
 *   !proto.profile.ProfileRes>}
 */
const methodInfo_MyProfile_getProfileSimple = new grpc.web.AbstractClientBase.MethodInfo(
  proto.profile.ProfileRes,
  /** @param {!proto.profile.ProfileReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.profile.ProfileRes.deserializeBinary
);


/**
 * @param {!proto.profile.ProfileReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.profile.ProfileRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.profile.ProfileRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.profile.MyProfileClient.prototype.getProfileSimple =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/profile.MyProfile/getProfileSimple',
      request,
      metadata || {},
      methodInfo_MyProfile_getProfileSimple,
      callback);
};


/**
 * @param {!proto.profile.ProfileReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.profile.ProfileRes>}
 *     A native promise that resolves to the response
 */
proto.profile.MyProfilePromiseClient.prototype.getProfileSimple =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/profile.MyProfile/getProfileSimple',
      request,
      metadata || {},
      methodInfo_MyProfile_getProfileSimple);
};


module.exports = proto.profile;

