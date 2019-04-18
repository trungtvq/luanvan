/**
 * @fileoverview gRPC-Web generated client stub for counter
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.counter = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.counter.AuthClient =
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
proto.counter.AuthPromiseClient =
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
 *   !proto.counter.SignInReq,
 *   !proto.counter.SignInRes>}
 */
const methodInfo_Auth_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.counter.SignInRes,
  /** @param {!proto.counter.SignInReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.counter.SignInRes.deserializeBinary
);


/**
 * @param {!proto.counter.SignInReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.counter.SignInRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.counter.SignInRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.counter.AuthClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/counter.Auth/SignIn',
      request,
      metadata || {},
      methodInfo_Auth_SignIn,
      callback);
};


/**
 * @param {!proto.counter.SignInReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.counter.SignInRes>}
 *     A native promise that resolves to the response
 */
proto.counter.AuthPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/counter.Auth/SignIn',
      request,
      metadata || {},
      methodInfo_Auth_SignIn);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.counter.SignUpReq,
 *   !proto.counter.SignInRes>}
 */
const methodInfo_Auth_SignUp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.counter.SignInRes,
  /** @param {!proto.counter.SignUpReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.counter.SignInRes.deserializeBinary
);


/**
 * @param {!proto.counter.SignUpReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.counter.SignInRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.counter.SignInRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.counter.AuthClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/counter.Auth/SignUp',
      request,
      metadata || {},
      methodInfo_Auth_SignUp,
      callback);
};


/**
 * @param {!proto.counter.SignUpReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.counter.SignInRes>}
 *     A native promise that resolves to the response
 */
proto.counter.AuthPromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/counter.Auth/SignUp',
      request,
      metadata || {},
      methodInfo_Auth_SignUp);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.counter.ResetReq,
 *   !proto.counter.ResetRes>}
 */
const methodInfo_Auth_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.counter.ResetRes,
  /** @param {!proto.counter.ResetReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.counter.ResetRes.deserializeBinary
);


/**
 * @param {!proto.counter.ResetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.counter.ResetRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.counter.ResetRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.counter.AuthClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/counter.Auth/ResetPassword',
      request,
      metadata || {},
      methodInfo_Auth_ResetPassword,
      callback);
};


/**
 * @param {!proto.counter.ResetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.counter.ResetRes>}
 *     A native promise that resolves to the response
 */
proto.counter.AuthPromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/counter.Auth/ResetPassword',
      request,
      metadata || {},
      methodInfo_Auth_ResetPassword);
};


module.exports = proto.counter;

