/**
 * @fileoverview gRPC-Web generated client stub for teamtask
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.teamtask = require('./team_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.teamtask.TeamClient =
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
proto.teamtask.TeamPromiseClient =
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
 *   !proto.teamtask.AddNewTeamReq,
 *   !proto.teamtask.TeamRes>}
 */
const methodInfo_Team_addNewTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamRes,
  /** @param {!proto.teamtask.AddNewTeamReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.AddNewTeamReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamClient.prototype.addNewTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.Team/addNewTeam',
      request,
      metadata || {},
      methodInfo_Team_addNewTeam,
      callback);
};


/**
 * @param {!proto.teamtask.AddNewTeamReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamPromiseClient.prototype.addNewTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.Team/addNewTeam',
      request,
      metadata || {},
      methodInfo_Team_addNewTeam);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.UpdateTeamReq,
 *   !proto.teamtask.TeamRes>}
 */
const methodInfo_Team_updateTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamRes,
  /** @param {!proto.teamtask.UpdateTeamReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.UpdateTeamReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamClient.prototype.updateTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.Team/updateTeam',
      request,
      metadata || {},
      methodInfo_Team_updateTeam,
      callback);
};


/**
 * @param {!proto.teamtask.UpdateTeamReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamPromiseClient.prototype.updateTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.Team/updateTeam',
      request,
      metadata || {},
      methodInfo_Team_updateTeam);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.DeleteTeamReq,
 *   !proto.teamtask.TeamRes>}
 */
const methodInfo_Team_deleteTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamRes,
  /** @param {!proto.teamtask.DeleteTeamReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.DeleteTeamReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamClient.prototype.deleteTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.Team/deleteTeam',
      request,
      metadata || {},
      methodInfo_Team_deleteTeam,
      callback);
};


/**
 * @param {!proto.teamtask.DeleteTeamReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamPromiseClient.prototype.deleteTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.Team/deleteTeam',
      request,
      metadata || {},
      methodInfo_Team_deleteTeam);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.AddMemberReq,
 *   !proto.teamtask.TeamRes>}
 */
const methodInfo_Team_addMember = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamRes,
  /** @param {!proto.teamtask.AddMemberReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.AddMemberReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamClient.prototype.addMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.Team/addMember',
      request,
      metadata || {},
      methodInfo_Team_addMember,
      callback);
};


/**
 * @param {!proto.teamtask.AddMemberReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamPromiseClient.prototype.addMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.Team/addMember',
      request,
      metadata || {},
      methodInfo_Team_addMember);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.RemoveMemberReq,
 *   !proto.teamtask.TeamRes>}
 */
const methodInfo_Team_removeMember = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamRes,
  /** @param {!proto.teamtask.RemoveMemberReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.RemoveMemberReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamClient.prototype.removeMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.Team/removeMember',
      request,
      metadata || {},
      methodInfo_Team_removeMember,
      callback);
};


/**
 * @param {!proto.teamtask.RemoveMemberReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamPromiseClient.prototype.removeMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.Team/removeMember',
      request,
      metadata || {},
      methodInfo_Team_removeMember);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.UpdateMemberReq,
 *   !proto.teamtask.TeamRes>}
 */
const methodInfo_Team_updateMember = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamRes,
  /** @param {!proto.teamtask.UpdateMemberReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.UpdateMemberReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.teamtask.TeamRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamClient.prototype.updateMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/teamtask.Team/updateMember',
      request,
      metadata || {},
      methodInfo_Team_updateMember,
      callback);
};


/**
 * @param {!proto.teamtask.UpdateMemberReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.teamtask.TeamRes>}
 *     A native promise that resolves to the response
 */
proto.teamtask.TeamPromiseClient.prototype.updateMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/teamtask.Team/updateMember',
      request,
      metadata || {},
      methodInfo_Team_updateMember);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.GetAllMemberReq,
 *   !proto.teamtask.TeamRes>}
 */
const methodInfo_Team_getAllMember = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.TeamRes,
  /** @param {!proto.teamtask.GetAllMemberReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.TeamRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.GetAllMemberReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamRes>}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamClient.prototype.getAllMember =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/teamtask.Team/getAllMember',
      request,
      metadata || {},
      methodInfo_Team_getAllMember);
};


/**
 * @param {!proto.teamtask.GetAllMemberReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.TeamRes>}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamPromiseClient.prototype.getAllMember =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/teamtask.Team/getAllMember',
      request,
      metadata || {},
      methodInfo_Team_getAllMember);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.teamtask.GetAllTeamReq,
 *   !proto.teamtask.GetAllTeamRes>}
 */
const methodInfo_Team_getAllTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.teamtask.GetAllTeamRes,
  /** @param {!proto.teamtask.GetAllTeamReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.teamtask.GetAllTeamRes.deserializeBinary
);


/**
 * @param {!proto.teamtask.GetAllTeamReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.GetAllTeamRes>}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamClient.prototype.getAllTeam =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/teamtask.Team/getAllTeam',
      request,
      metadata || {},
      methodInfo_Team_getAllTeam);
};


/**
 * @param {!proto.teamtask.GetAllTeamReq} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.teamtask.GetAllTeamRes>}
 *     The XHR Node Readable Stream
 */
proto.teamtask.TeamPromiseClient.prototype.getAllTeam =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/teamtask.Team/getAllTeam',
      request,
      metadata || {},
      methodInfo_Team_getAllTeam);
};


module.exports = proto.teamtask;

