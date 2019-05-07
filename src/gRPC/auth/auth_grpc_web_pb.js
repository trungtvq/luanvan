/**
 * @fileoverview gRPC-Web generated client stub for Auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.Auth = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Auth.AuthClient =
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
proto.Auth.AuthPromiseClient =
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
 *   !proto.Auth.SignInReq,
 *   !proto.Auth.SignInRes>}
 */
const methodInfo_Auth_SignIn = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Auth.SignInRes,
  /** @param {!proto.Auth.SignInReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Auth.SignInRes.deserializeBinary
);


/**
 * @param {!proto.Auth.SignInReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Auth.SignInRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Auth.SignInRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Auth.AuthClient.prototype.signIn =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Auth.Auth/SignIn',
      request,
      metadata || {},
      methodInfo_Auth_SignIn,
      callback);
};


/**
 * @param {!proto.Auth.SignInReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Auth.SignInRes>}
 *     A native promise that resolves to the response
 */
proto.Auth.AuthPromiseClient.prototype.signIn =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Auth.Auth/SignIn',
      request,
      metadata || {},
      methodInfo_Auth_SignIn);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Auth.SignUpReq,
 *   !proto.Auth.SignInRes>}
 */
const methodInfo_Auth_SignUp = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Auth.SignInRes,
  /** @param {!proto.Auth.SignUpReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Auth.SignInRes.deserializeBinary
);


/**
 * @param {!proto.Auth.SignUpReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Auth.SignInRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Auth.SignInRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Auth.AuthClient.prototype.signUp =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Auth.Auth/SignUp',
      request,
      metadata || {},
      methodInfo_Auth_SignUp,
      callback);
};


/**
 * @param {!proto.Auth.SignUpReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Auth.SignInRes>}
 *     A native promise that resolves to the response
 */
proto.Auth.AuthPromiseClient.prototype.signUp =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Auth.Auth/SignUp',
      request,
      metadata || {},
      methodInfo_Auth_SignUp);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Auth.ResetReq,
 *   !proto.Auth.ResetRes>}
 */
const methodInfo_Auth_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Auth.ResetRes,
  /** @param {!proto.Auth.ResetReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Auth.ResetRes.deserializeBinary
);


/**
 * @param {!proto.Auth.ResetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Auth.ResetRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Auth.ResetRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Auth.AuthClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Auth.Auth/ResetPassword',
      request,
      metadata || {},
      methodInfo_Auth_ResetPassword,
      callback);
};


/**
 * @param {!proto.Auth.ResetReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Auth.ResetRes>}
 *     A native promise that resolves to the response
 */
proto.Auth.AuthPromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Auth.Auth/ResetPassword',
      request,
      metadata || {},
      methodInfo_Auth_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Auth.ResetPasswordFinalStepReq,
 *   !proto.Auth.SignInRes>}
 */
const methodInfo_Auth_ResetPasswordFinalStep = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Auth.SignInRes,
  /** @param {!proto.Auth.ResetPasswordFinalStepReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Auth.SignInRes.deserializeBinary
);


/**
 * @param {!proto.Auth.ResetPasswordFinalStepReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Auth.SignInRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Auth.SignInRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Auth.AuthClient.prototype.resetPasswordFinalStep =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Auth.Auth/ResetPasswordFinalStep',
      request,
      metadata || {},
      methodInfo_Auth_ResetPasswordFinalStep,
      callback);
};


/**
 * @param {!proto.Auth.ResetPasswordFinalStepReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Auth.SignInRes>}
 *     A native promise that resolves to the response
 */
proto.Auth.AuthPromiseClient.prototype.resetPasswordFinalStep =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Auth.Auth/ResetPasswordFinalStep',
      request,
      metadata || {},
      methodInfo_Auth_ResetPasswordFinalStep);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Auth.SignInGoogleReq,
 *   !proto.Auth.SignInRes>}
 */
const methodInfo_Auth_SignInGoogle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Auth.SignInRes,
  /** @param {!proto.Auth.SignInGoogleReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Auth.SignInRes.deserializeBinary
);


/**
 * @param {!proto.Auth.SignInGoogleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Auth.SignInRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Auth.SignInRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Auth.AuthClient.prototype.signInGoogle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Auth.Auth/SignInGoogle',
      request,
      metadata || {},
      methodInfo_Auth_SignInGoogle,
      callback);
};


/**
 * @param {!proto.Auth.SignInGoogleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Auth.SignInRes>}
 *     A native promise that resolves to the response
 */
proto.Auth.AuthPromiseClient.prototype.signInGoogle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Auth.Auth/SignInGoogle',
      request,
      metadata || {},
      methodInfo_Auth_SignInGoogle);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Auth.AuthSessionReq,
 *   !proto.Auth.SignInRes>}
 */
const methodInfo_Auth_AuthSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Auth.SignInRes,
  /** @param {!proto.Auth.AuthSessionReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Auth.SignInRes.deserializeBinary
);


/**
 * @param {!proto.Auth.AuthSessionReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Auth.SignInRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Auth.SignInRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Auth.AuthClient.prototype.authSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Auth.Auth/AuthSession',
      request,
      metadata || {},
      methodInfo_Auth_AuthSession,
      callback);
};


/**
 * @param {!proto.Auth.AuthSessionReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Auth.SignInRes>}
 *     A native promise that resolves to the response
 */
proto.Auth.AuthPromiseClient.prototype.authSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Auth.Auth/AuthSession',
      request,
      metadata || {},
      methodInfo_Auth_AuthSession);
};


module.exports = proto.Auth;

