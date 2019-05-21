/**
 * @fileoverview gRPC-Web generated client stub for productbacklog
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.productbacklog = require('./productbacklog_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.productbacklog.ProductBacklogClient =
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
proto.productbacklog.ProductBacklogPromiseClient =
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
 *   !proto.productbacklog.AddNewProductBacklogReq,
 *   !proto.productbacklog.ProductBacklogRes>}
 */
const methodInfo_ProductBacklog_addNewProductBacklog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.productbacklog.ProductBacklogRes,
  /** @param {!proto.productbacklog.AddNewProductBacklogReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.productbacklog.ProductBacklogRes.deserializeBinary
);


/**
 * @param {!proto.productbacklog.AddNewProductBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.productbacklog.ProductBacklogRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.productbacklog.ProductBacklogRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.productbacklog.ProductBacklogClient.prototype.addNewProductBacklog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/productbacklog.ProductBacklog/addNewProductBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_addNewProductBacklog,
      callback);
};


/**
 * @param {!proto.productbacklog.AddNewProductBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.productbacklog.ProductBacklogRes>}
 *     A native promise that resolves to the response
 */
proto.productbacklog.ProductBacklogPromiseClient.prototype.addNewProductBacklog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/productbacklog.ProductBacklog/addNewProductBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_addNewProductBacklog);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.productbacklog.UpdateProductBacklogReq,
 *   !proto.productbacklog.ProductBacklogRes>}
 */
const methodInfo_ProductBacklog_updateProductBacklog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.productbacklog.ProductBacklogRes,
  /** @param {!proto.productbacklog.UpdateProductBacklogReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.productbacklog.ProductBacklogRes.deserializeBinary
);


/**
 * @param {!proto.productbacklog.UpdateProductBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.productbacklog.ProductBacklogRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.productbacklog.ProductBacklogRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.productbacklog.ProductBacklogClient.prototype.updateProductBacklog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/productbacklog.ProductBacklog/updateProductBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_updateProductBacklog,
      callback);
};


/**
 * @param {!proto.productbacklog.UpdateProductBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.productbacklog.ProductBacklogRes>}
 *     A native promise that resolves to the response
 */
proto.productbacklog.ProductBacklogPromiseClient.prototype.updateProductBacklog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/productbacklog.ProductBacklog/updateProductBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_updateProductBacklog);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.productbacklog.DeleteProductBacklogReq,
 *   !proto.productbacklog.ProductBacklogRes>}
 */
const methodInfo_ProductBacklog_deleteProductBacklog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.productbacklog.ProductBacklogRes,
  /** @param {!proto.productbacklog.DeleteProductBacklogReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.productbacklog.ProductBacklogRes.deserializeBinary
);


/**
 * @param {!proto.productbacklog.DeleteProductBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.productbacklog.ProductBacklogRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.productbacklog.ProductBacklogRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.productbacklog.ProductBacklogClient.prototype.deleteProductBacklog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/productbacklog.ProductBacklog/deleteProductBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_deleteProductBacklog,
      callback);
};


/**
 * @param {!proto.productbacklog.DeleteProductBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.productbacklog.ProductBacklogRes>}
 *     A native promise that resolves to the response
 */
proto.productbacklog.ProductBacklogPromiseClient.prototype.deleteProductBacklog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/productbacklog.ProductBacklog/deleteProductBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_deleteProductBacklog);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.productbacklog.SendToSprintBacklogReq,
 *   !proto.productbacklog.ProductBacklogRes>}
 */
const methodInfo_ProductBacklog_sendToSprintBacklog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.productbacklog.ProductBacklogRes,
  /** @param {!proto.productbacklog.SendToSprintBacklogReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.productbacklog.ProductBacklogRes.deserializeBinary
);


/**
 * @param {!proto.productbacklog.SendToSprintBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.productbacklog.ProductBacklogRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.productbacklog.ProductBacklogRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.productbacklog.ProductBacklogClient.prototype.sendToSprintBacklog =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/productbacklog.ProductBacklog/sendToSprintBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_sendToSprintBacklog,
      callback);
};


/**
 * @param {!proto.productbacklog.SendToSprintBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.productbacklog.ProductBacklogRes>}
 *     A native promise that resolves to the response
 */
proto.productbacklog.ProductBacklogPromiseClient.prototype.sendToSprintBacklog =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/productbacklog.ProductBacklog/sendToSprintBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_sendToSprintBacklog);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.productbacklog.SendToSprintBacklogReq,
 *   !proto.productbacklog.ProductBacklogRes>}
 */
const methodInfo_ProductBacklog_sendToUserStory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.productbacklog.ProductBacklogRes,
  /** @param {!proto.productbacklog.SendToSprintBacklogReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.productbacklog.ProductBacklogRes.deserializeBinary
);


/**
 * @param {!proto.productbacklog.SendToSprintBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.productbacklog.ProductBacklogRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.productbacklog.ProductBacklogRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.productbacklog.ProductBacklogClient.prototype.sendToUserStory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/productbacklog.ProductBacklog/sendToUserStory',
      request,
      metadata || {},
      methodInfo_ProductBacklog_sendToUserStory,
      callback);
};


/**
 * @param {!proto.productbacklog.SendToSprintBacklogReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.productbacklog.ProductBacklogRes>}
 *     A native promise that resolves to the response
 */
proto.productbacklog.ProductBacklogPromiseClient.prototype.sendToUserStory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/productbacklog.ProductBacklog/sendToUserStory',
      request,
      metadata || {},
      methodInfo_ProductBacklog_sendToUserStory);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.productbacklog.GetAllProductBacklogReq,
 *   !proto.productbacklog.GetAllProductBacklogRes>}
 */
const methodInfo_ProductBacklog_getAllProductBacklog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.productbacklog.GetAllProductBacklogRes,
  /** @param {!proto.productbacklog.GetAllProductBacklogReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.productbacklog.GetAllProductBacklogRes.deserializeBinary
);


/**
 * @param {!proto.productbacklog.GetAllProductBacklogReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.productbacklog.GetAllProductBacklogRes>}
 *     The XHR Node Readable Stream
 */
proto.productbacklog.ProductBacklogClient.prototype.getAllProductBacklog =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/productbacklog.ProductBacklog/getAllProductBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_getAllProductBacklog);
};


/**
 * @param {!proto.productbacklog.GetAllProductBacklogReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.productbacklog.GetAllProductBacklogRes>}
 *     The XHR Node Readable Stream
 */
proto.productbacklog.ProductBacklogPromiseClient.prototype.getAllProductBacklog =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/productbacklog.ProductBacklog/getAllProductBacklog',
      request,
      metadata || {},
      methodInfo_ProductBacklog_getAllProductBacklog);
};


module.exports = proto.productbacklog;

