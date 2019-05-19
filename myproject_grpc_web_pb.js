/**
 * @fileoverview gRPC-Web generated client stub for myproject
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.myproject = require('./myproject_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.myproject.MyprojectClient =
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
proto.myproject.MyprojectPromiseClient =
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
 *   !proto.myproject.AddNewProjectReq,
 *   !proto.myproject.ProjectRes>}
 */
const methodInfo_Myproject_addNewProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.myproject.ProjectRes,
  /** @param {!proto.myproject.AddNewProjectReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.myproject.ProjectRes.deserializeBinary
);


/**
 * @param {!proto.myproject.AddNewProjectReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.myproject.ProjectRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.myproject.ProjectRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.myproject.MyprojectClient.prototype.addNewProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/myproject.Myproject/addNewProject',
      request,
      metadata || {},
      methodInfo_Myproject_addNewProject,
      callback);
};


/**
 * @param {!proto.myproject.AddNewProjectReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.myproject.ProjectRes>}
 *     A native promise that resolves to the response
 */
proto.myproject.MyprojectPromiseClient.prototype.addNewProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/myproject.Myproject/addNewProject',
      request,
      metadata || {},
      methodInfo_Myproject_addNewProject);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.myproject.UpdateProjectReq,
 *   !proto.myproject.ProjectRes>}
 */
const methodInfo_Myproject_updateProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.myproject.ProjectRes,
  /** @param {!proto.myproject.UpdateProjectReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.myproject.ProjectRes.deserializeBinary
);


/**
 * @param {!proto.myproject.UpdateProjectReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.myproject.ProjectRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.myproject.ProjectRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.myproject.MyprojectClient.prototype.updateProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/myproject.Myproject/updateProject',
      request,
      metadata || {},
      methodInfo_Myproject_updateProject,
      callback);
};


/**
 * @param {!proto.myproject.UpdateProjectReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.myproject.ProjectRes>}
 *     A native promise that resolves to the response
 */
proto.myproject.MyprojectPromiseClient.prototype.updateProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/myproject.Myproject/updateProject',
      request,
      metadata || {},
      methodInfo_Myproject_updateProject);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.myproject.DeleteProjectReq,
 *   !proto.myproject.ProjectRes>}
 */
const methodInfo_Myproject_deleteProject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.myproject.ProjectRes,
  /** @param {!proto.myproject.DeleteProjectReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.myproject.ProjectRes.deserializeBinary
);


/**
 * @param {!proto.myproject.DeleteProjectReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.myproject.ProjectRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.myproject.ProjectRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.myproject.MyprojectClient.prototype.deleteProject =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/myproject.Myproject/deleteProject',
      request,
      metadata || {},
      methodInfo_Myproject_deleteProject,
      callback);
};


/**
 * @param {!proto.myproject.DeleteProjectReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.myproject.ProjectRes>}
 *     A native promise that resolves to the response
 */
proto.myproject.MyprojectPromiseClient.prototype.deleteProject =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/myproject.Myproject/deleteProject',
      request,
      metadata || {},
      methodInfo_Myproject_deleteProject);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.myproject.GetmyprojectReq,
 *   !proto.myproject.ProjectRes>}
 */
const methodInfo_Myproject_getmyproject = new grpc.web.AbstractClientBase.MethodInfo(
  proto.myproject.ProjectRes,
  /** @param {!proto.myproject.GetmyprojectReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.myproject.ProjectRes.deserializeBinary
);


/**
 * @param {!proto.myproject.GetmyprojectReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.myproject.ProjectRes>}
 *     The XHR Node Readable Stream
 */
proto.myproject.MyprojectClient.prototype.getmyproject =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/myproject.Myproject/getmyproject',
      request,
      metadata || {},
      methodInfo_Myproject_getmyproject);
};


/**
 * @param {!proto.myproject.GetmyprojectReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.myproject.ProjectRes>}
 *     The XHR Node Readable Stream
 */
proto.myproject.MyprojectPromiseClient.prototype.getmyproject =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/myproject.Myproject/getmyproject',
      request,
      metadata || {},
      methodInfo_Myproject_getmyproject);
};


module.exports = proto.myproject;

