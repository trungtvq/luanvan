(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{121:function(e,t,r){"use strict";var o=r(11),s=r(12),i=r(0),n=r.n(i),a=r(1),l=r.n(a),u=r(21),c=r.n(u),y=r(89),d={tag:y.n,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,r=e.cssModule,i=e.innerRef,a=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),u=Object(y.j)(c()(t,"card-body"),r);return n.a.createElement(a,Object(o.a)({},l,{className:u,ref:i}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},209:function(e,t,r){"use strict";var o=r(11),s=r(12),i=r(0),n=r.n(i),a=r(1),l=r.n(a),u=r(21),c=r.n(u),y=r(89),d={tag:y.n,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,r=e.cssModule,i=e.tag,a=Object(s.a)(e,["className","cssModule","tag"]),l=Object(y.j)(c()(t,"card-header"),r);return n.a.createElement(i,Object(o.a)({},a,{className:l}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},288:function(e,t,r){var o={};o.web=r(19);var s={};s.userstory=r(289),s.userstory.UserStoryClient=function(e,t,r){r||(r={}),r.format="text",this.client_=new o.web.GrpcWebClientBase(r),this.hostname_=e,this.credentials_=t,this.options_=r},s.userstory.UserStoryPromiseClient=function(e,t,r){r||(r={}),r.format="text",this.client_=new o.web.GrpcWebClientBase(r),this.hostname_=e,this.credentials_=t,this.options_=r};var i=new o.web.AbstractClientBase.MethodInfo(s.userstory.UserStoryRes,function(e){return e.serializeBinary()},s.userstory.UserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.addNewUserStory=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/userstory.UserStory/addNewUserStory",e,t||{},i,r)},s.userstory.UserStoryPromiseClient.prototype.addNewUserStory=function(e,t){return this.client_.unaryCall(this.hostname_+"/userstory.UserStory/addNewUserStory",e,t||{},i)};var n=new o.web.AbstractClientBase.MethodInfo(s.userstory.UserStoryRes,function(e){return e.serializeBinary()},s.userstory.UserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.updateUserStory=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/userstory.UserStory/updateUserStory",e,t||{},n,r)},s.userstory.UserStoryPromiseClient.prototype.updateUserStory=function(e,t){return this.client_.unaryCall(this.hostname_+"/userstory.UserStory/updateUserStory",e,t||{},n)};var a=new o.web.AbstractClientBase.MethodInfo(s.userstory.UserStoryRes,function(e){return e.serializeBinary()},s.userstory.UserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.deleteUserStory=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/userstory.UserStory/deleteUserStory",e,t||{},a,r)},s.userstory.UserStoryPromiseClient.prototype.deleteUserStory=function(e,t){return this.client_.unaryCall(this.hostname_+"/userstory.UserStory/deleteUserStory",e,t||{},a)};var l=new o.web.AbstractClientBase.MethodInfo(s.userstory.UserStoryRes,function(e){return e.serializeBinary()},s.userstory.UserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.sendToProductBacklog=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/userstory.UserStory/sendToProductBacklog",e,t||{},l,r)},s.userstory.UserStoryPromiseClient.prototype.sendToProductBacklog=function(e,t){return this.client_.unaryCall(this.hostname_+"/userstory.UserStory/sendToProductBacklog",e,t||{},l)};var u=new o.web.AbstractClientBase.MethodInfo(s.userstory.GetAllUserStoryRes,function(e){return e.serializeBinary()},s.userstory.GetAllUserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.getAllUserStory=function(e,t){return this.client_.serverStreaming(this.hostname_+"/userstory.UserStory/getAllUserStory",e,t||{},u)},s.userstory.UserStoryPromiseClient.prototype.getAllUserStory=function(e,t){return this.client_.serverStreaming(this.hostname_+"/userstory.UserStory/getAllUserStory",e,t||{},u)},e.exports=s.userstory},289:function(e,t,r){var o=r(20),s=o,i=Function("return this")();s.exportSymbol("proto.userstory.AddNewUserStoryReq",null,i),s.exportSymbol("proto.userstory.DeleteUserStoryReq",null,i),s.exportSymbol("proto.userstory.GetAllUserStoryReq",null,i),s.exportSymbol("proto.userstory.GetAllUserStoryRes",null,i),s.exportSymbol("proto.userstory.SendToProductBacklogReq",null,i),s.exportSymbol("proto.userstory.UpdateUserStoryReq",null,i),s.exportSymbol("proto.userstory.UserStoryRes",null,i),proto.userstory.SendToProductBacklogReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.SendToProductBacklogReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.SendToProductBacklogReq.displayName="proto.userstory.SendToProductBacklogReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.SendToProductBacklogReq.prototype.toObject=function(e){return proto.userstory.SendToProductBacklogReq.toObject(e,this)},proto.userstory.SendToProductBacklogReq.toObject=function(e,t){var r={requesterid:t.getRequesterid(),projectid:t.getProjectid(),id:t.getId(),priority:t.getPriority(),estimation:t.getEstimation(),statusbacklog:t.getStatusbacklog(),accesstoken:t.getAccesstoken(),sprint:t.getSprint()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.SendToProductBacklogReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.SendToProductBacklogReq;return proto.userstory.SendToProductBacklogReq.deserializeBinaryFromReader(r,t)},proto.userstory.SendToProductBacklogReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setRequesterid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setId(r);break;case 4:r=t.readString();e.setPriority(r);break;case 5:r=t.readString();e.setEstimation(r);break;case 6:r=t.readString();e.setStatusbacklog(r);break;case 7:r=t.readString();e.setAccesstoken(r);break;case 8:r=t.readString();e.setSprint(r);break;default:t.skipField()}}return e},proto.userstory.SendToProductBacklogReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.SendToProductBacklogReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.SendToProductBacklogReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getId()).length>0&&e.writeString(3,t),(t=this.getPriority()).length>0&&e.writeString(4,t),(t=this.getEstimation()).length>0&&e.writeString(5,t),(t=this.getStatusbacklog()).length>0&&e.writeString(6,t),(t=this.getAccesstoken()).length>0&&e.writeString(7,t),(t=this.getSprint()).length>0&&e.writeString(8,t)},proto.userstory.SendToProductBacklogReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.SendToProductBacklogReq.prototype.getRequesterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.SendToProductBacklogReq.prototype.setRequesterid=function(e){o.Message.setField(this,1,e)},proto.userstory.SendToProductBacklogReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.SendToProductBacklogReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.SendToProductBacklogReq.prototype.getId=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.SendToProductBacklogReq.prototype.setId=function(e){o.Message.setField(this,3,e)},proto.userstory.SendToProductBacklogReq.prototype.getPriority=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.SendToProductBacklogReq.prototype.setPriority=function(e){o.Message.setField(this,4,e)},proto.userstory.SendToProductBacklogReq.prototype.getEstimation=function(){return o.Message.getFieldProto3(this,5,"")},proto.userstory.SendToProductBacklogReq.prototype.setEstimation=function(e){o.Message.setField(this,5,e)},proto.userstory.SendToProductBacklogReq.prototype.getStatusbacklog=function(){return o.Message.getFieldProto3(this,6,"")},proto.userstory.SendToProductBacklogReq.prototype.setStatusbacklog=function(e){o.Message.setField(this,6,e)},proto.userstory.SendToProductBacklogReq.prototype.getAccesstoken=function(){return o.Message.getFieldProto3(this,7,"")},proto.userstory.SendToProductBacklogReq.prototype.setAccesstoken=function(e){o.Message.setField(this,7,e)},proto.userstory.SendToProductBacklogReq.prototype.getSprint=function(){return o.Message.getFieldProto3(this,8,"")},proto.userstory.SendToProductBacklogReq.prototype.setSprint=function(e){o.Message.setField(this,8,e)},proto.userstory.AddNewUserStoryReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.AddNewUserStoryReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.AddNewUserStoryReq.displayName="proto.userstory.AddNewUserStoryReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.AddNewUserStoryReq.prototype.toObject=function(e){return proto.userstory.AddNewUserStoryReq.toObject(e,this)},proto.userstory.AddNewUserStoryReq.toObject=function(e,t){var r={requesterid:t.getRequesterid(),projectid:t.getProjectid(),role:t.getRole(),want:t.getWant(),so:t.getSo(),accesstoken:t.getAccesstoken(),name:t.getName()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.AddNewUserStoryReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.AddNewUserStoryReq;return proto.userstory.AddNewUserStoryReq.deserializeBinaryFromReader(r,t)},proto.userstory.AddNewUserStoryReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setRequesterid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setRole(r);break;case 4:r=t.readString();e.setWant(r);break;case 5:r=t.readString();e.setSo(r);break;case 6:r=t.readString();e.setAccesstoken(r);break;case 7:r=t.readString();e.setName(r);break;default:t.skipField()}}return e},proto.userstory.AddNewUserStoryReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.AddNewUserStoryReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.AddNewUserStoryReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getRole()).length>0&&e.writeString(3,t),(t=this.getWant()).length>0&&e.writeString(4,t),(t=this.getSo()).length>0&&e.writeString(5,t),(t=this.getAccesstoken()).length>0&&e.writeString(6,t),(t=this.getName()).length>0&&e.writeString(7,t)},proto.userstory.AddNewUserStoryReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.AddNewUserStoryReq.prototype.getRequesterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.AddNewUserStoryReq.prototype.setRequesterid=function(e){o.Message.setField(this,1,e)},proto.userstory.AddNewUserStoryReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.AddNewUserStoryReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.AddNewUserStoryReq.prototype.getRole=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.AddNewUserStoryReq.prototype.setRole=function(e){o.Message.setField(this,3,e)},proto.userstory.AddNewUserStoryReq.prototype.getWant=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.AddNewUserStoryReq.prototype.setWant=function(e){o.Message.setField(this,4,e)},proto.userstory.AddNewUserStoryReq.prototype.getSo=function(){return o.Message.getFieldProto3(this,5,"")},proto.userstory.AddNewUserStoryReq.prototype.setSo=function(e){o.Message.setField(this,5,e)},proto.userstory.AddNewUserStoryReq.prototype.getAccesstoken=function(){return o.Message.getFieldProto3(this,6,"")},proto.userstory.AddNewUserStoryReq.prototype.setAccesstoken=function(e){o.Message.setField(this,6,e)},proto.userstory.AddNewUserStoryReq.prototype.getName=function(){return o.Message.getFieldProto3(this,7,"")},proto.userstory.AddNewUserStoryReq.prototype.setName=function(e){o.Message.setField(this,7,e)},proto.userstory.UserStoryRes=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.UserStoryRes,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.UserStoryRes.displayName="proto.userstory.UserStoryRes"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.UserStoryRes.prototype.toObject=function(e){return proto.userstory.UserStoryRes.toObject(e,this)},proto.userstory.UserStoryRes.toObject=function(e,t){var r={status:t.getStatus(),id:t.getId()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.UserStoryRes.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.UserStoryRes;return proto.userstory.UserStoryRes.deserializeBinaryFromReader(r,t)},proto.userstory.UserStoryRes.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setStatus(r);break;case 2:r=t.readString();e.setId(r);break;default:t.skipField()}}return e},proto.userstory.UserStoryRes.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.UserStoryRes.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.UserStoryRes.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getStatus()).length>0&&e.writeString(1,t),(t=this.getId()).length>0&&e.writeString(2,t)},proto.userstory.UserStoryRes.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.UserStoryRes.prototype.getStatus=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.UserStoryRes.prototype.setStatus=function(e){o.Message.setField(this,1,e)},proto.userstory.UserStoryRes.prototype.getId=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.UserStoryRes.prototype.setId=function(e){o.Message.setField(this,2,e)},proto.userstory.UpdateUserStoryReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.UpdateUserStoryReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.UpdateUserStoryReq.displayName="proto.userstory.UpdateUserStoryReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.UpdateUserStoryReq.prototype.toObject=function(e){return proto.userstory.UpdateUserStoryReq.toObject(e,this)},proto.userstory.UpdateUserStoryReq.toObject=function(e,t){var r={requesterid:t.getRequesterid(),projectid:t.getProjectid(),userstoryid:t.getUserstoryid(),role:t.getRole(),want:t.getWant(),so:t.getSo(),accesstoken:t.getAccesstoken()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.UpdateUserStoryReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.UpdateUserStoryReq;return proto.userstory.UpdateUserStoryReq.deserializeBinaryFromReader(r,t)},proto.userstory.UpdateUserStoryReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setRequesterid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setUserstoryid(r);break;case 4:r=t.readString();e.setRole(r);break;case 5:r=t.readString();e.setWant(r);break;case 6:r=t.readString();e.setSo(r);break;case 7:r=t.readString();e.setAccesstoken(r);break;default:t.skipField()}}return e},proto.userstory.UpdateUserStoryReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.UpdateUserStoryReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.UpdateUserStoryReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getUserstoryid()).length>0&&e.writeString(3,t),(t=this.getRole()).length>0&&e.writeString(4,t),(t=this.getWant()).length>0&&e.writeString(5,t),(t=this.getSo()).length>0&&e.writeString(6,t),(t=this.getAccesstoken()).length>0&&e.writeString(7,t)},proto.userstory.UpdateUserStoryReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.UpdateUserStoryReq.prototype.getRequesterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.UpdateUserStoryReq.prototype.setRequesterid=function(e){o.Message.setField(this,1,e)},proto.userstory.UpdateUserStoryReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.UpdateUserStoryReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.UpdateUserStoryReq.prototype.getUserstoryid=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.UpdateUserStoryReq.prototype.setUserstoryid=function(e){o.Message.setField(this,3,e)},proto.userstory.UpdateUserStoryReq.prototype.getRole=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.UpdateUserStoryReq.prototype.setRole=function(e){o.Message.setField(this,4,e)},proto.userstory.UpdateUserStoryReq.prototype.getWant=function(){return o.Message.getFieldProto3(this,5,"")},proto.userstory.UpdateUserStoryReq.prototype.setWant=function(e){o.Message.setField(this,5,e)},proto.userstory.UpdateUserStoryReq.prototype.getSo=function(){return o.Message.getFieldProto3(this,6,"")},proto.userstory.UpdateUserStoryReq.prototype.setSo=function(e){o.Message.setField(this,6,e)},proto.userstory.UpdateUserStoryReq.prototype.getAccesstoken=function(){return o.Message.getFieldProto3(this,7,"")},proto.userstory.UpdateUserStoryReq.prototype.setAccesstoken=function(e){o.Message.setField(this,7,e)},proto.userstory.DeleteUserStoryReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.DeleteUserStoryReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.DeleteUserStoryReq.displayName="proto.userstory.DeleteUserStoryReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.DeleteUserStoryReq.prototype.toObject=function(e){return proto.userstory.DeleteUserStoryReq.toObject(e,this)},proto.userstory.DeleteUserStoryReq.toObject=function(e,t){var r={requesterid:t.getRequesterid(),projectid:t.getProjectid(),userstoryid:t.getUserstoryid(),accesstoken:t.getAccesstoken()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.DeleteUserStoryReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.DeleteUserStoryReq;return proto.userstory.DeleteUserStoryReq.deserializeBinaryFromReader(r,t)},proto.userstory.DeleteUserStoryReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setRequesterid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setUserstoryid(r);break;case 4:r=t.readString();e.setAccesstoken(r);break;default:t.skipField()}}return e},proto.userstory.DeleteUserStoryReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.DeleteUserStoryReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.DeleteUserStoryReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getUserstoryid()).length>0&&e.writeString(3,t),(t=this.getAccesstoken()).length>0&&e.writeString(4,t)},proto.userstory.DeleteUserStoryReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.DeleteUserStoryReq.prototype.getRequesterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.DeleteUserStoryReq.prototype.setRequesterid=function(e){o.Message.setField(this,1,e)},proto.userstory.DeleteUserStoryReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.DeleteUserStoryReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.DeleteUserStoryReq.prototype.getUserstoryid=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.DeleteUserStoryReq.prototype.setUserstoryid=function(e){o.Message.setField(this,3,e)},proto.userstory.DeleteUserStoryReq.prototype.getAccesstoken=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.DeleteUserStoryReq.prototype.setAccesstoken=function(e){o.Message.setField(this,4,e)},proto.userstory.GetAllUserStoryReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.GetAllUserStoryReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.GetAllUserStoryReq.displayName="proto.userstory.GetAllUserStoryReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.GetAllUserStoryReq.prototype.toObject=function(e){return proto.userstory.GetAllUserStoryReq.toObject(e,this)},proto.userstory.GetAllUserStoryReq.toObject=function(e,t){var r={requesterid:t.getRequesterid(),projectid:t.getProjectid(),accesstoken:t.getAccesstoken()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.GetAllUserStoryReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.GetAllUserStoryReq;return proto.userstory.GetAllUserStoryReq.deserializeBinaryFromReader(r,t)},proto.userstory.GetAllUserStoryReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setRequesterid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setAccesstoken(r);break;default:t.skipField()}}return e},proto.userstory.GetAllUserStoryReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.GetAllUserStoryReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.GetAllUserStoryReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRequesterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getAccesstoken()).length>0&&e.writeString(3,t)},proto.userstory.GetAllUserStoryReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.GetAllUserStoryReq.prototype.getRequesterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.GetAllUserStoryReq.prototype.setRequesterid=function(e){o.Message.setField(this,1,e)},proto.userstory.GetAllUserStoryReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.GetAllUserStoryReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.GetAllUserStoryReq.prototype.getAccesstoken=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.GetAllUserStoryReq.prototype.setAccesstoken=function(e){o.Message.setField(this,3,e)},proto.userstory.GetAllUserStoryRes=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.GetAllUserStoryRes,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.GetAllUserStoryRes.displayName="proto.userstory.GetAllUserStoryRes"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.GetAllUserStoryRes.prototype.toObject=function(e){return proto.userstory.GetAllUserStoryRes.toObject(e,this)},proto.userstory.GetAllUserStoryRes.toObject=function(e,t){var r={role:t.getRole(),want:t.getWant(),so:t.getSo(),status:t.getStatus(),id:t.getId(),name:t.getName()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.GetAllUserStoryRes.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.GetAllUserStoryRes;return proto.userstory.GetAllUserStoryRes.deserializeBinaryFromReader(r,t)},proto.userstory.GetAllUserStoryRes.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setRole(r);break;case 2:r=t.readString();e.setWant(r);break;case 3:r=t.readString();e.setSo(r);break;case 4:r=t.readString();e.setStatus(r);break;case 5:r=t.readString();e.setId(r);break;case 6:r=t.readString();e.setName(r);break;default:t.skipField()}}return e},proto.userstory.GetAllUserStoryRes.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.GetAllUserStoryRes.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.GetAllUserStoryRes.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRole()).length>0&&e.writeString(1,t),(t=this.getWant()).length>0&&e.writeString(2,t),(t=this.getSo()).length>0&&e.writeString(3,t),(t=this.getStatus()).length>0&&e.writeString(4,t),(t=this.getId()).length>0&&e.writeString(5,t),(t=this.getName()).length>0&&e.writeString(6,t)},proto.userstory.GetAllUserStoryRes.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.GetAllUserStoryRes.prototype.getRole=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.GetAllUserStoryRes.prototype.setRole=function(e){o.Message.setField(this,1,e)},proto.userstory.GetAllUserStoryRes.prototype.getWant=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.GetAllUserStoryRes.prototype.setWant=function(e){o.Message.setField(this,2,e)},proto.userstory.GetAllUserStoryRes.prototype.getSo=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.GetAllUserStoryRes.prototype.setSo=function(e){o.Message.setField(this,3,e)},proto.userstory.GetAllUserStoryRes.prototype.getStatus=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.GetAllUserStoryRes.prototype.setStatus=function(e){o.Message.setField(this,4,e)},proto.userstory.GetAllUserStoryRes.prototype.getId=function(){return o.Message.getFieldProto3(this,5,"")},proto.userstory.GetAllUserStoryRes.prototype.setId=function(e){o.Message.setField(this,5,e)},proto.userstory.GetAllUserStoryRes.prototype.getName=function(){return o.Message.getFieldProto3(this,6,"")},proto.userstory.GetAllUserStoryRes.prototype.setName=function(e){o.Message.setField(this,6,e)},s.object.extend(t,proto.userstory)},869:function(e,t,r){"use strict";r.r(t);var o=r(143),s=r(104),i=r(14),n=r(15),a=r(18),l=r(16),u=r(17),c=r(8),y=r(2),d=r(0),p=r.n(d),g=r(108),S=r(232),R=r(217),U=r(117),h=r(111),f=r(209),m=r(121),b=r(241),B=r(127),q=r(118),k=(r(129),r(40)),P=(r(198),r(37),{});P.userstory=r(288),P.productbacklog=r(393);var w=function(e){function t(e){var r;return Object(i.a)(this,t),(r=Object(a.a)(this,Object(l.a)(t).call(this,e))).onTextboxChangePriorityUserstory=function(e,t){var o=r.state.dataUserStory.map(function(r){return r.title==t?Object(s.a)({},r,{priority:e.target.value}):r});r.setState(function(e){return{dataUserStory:o}})},r.onTextboxChangeEstimationUserstory=function(e,t){var o=r.state.dataUserStory.map(function(r){return r.title==t?Object(s.a)({},r,{estimation:e.target.value}):r});r.setState(function(e){return{dataUserStory:o}})},r.onTextboxChangeSprintUserstory=function(e,t){var o=r.state.dataUserStory.map(function(r){return r.title==t?Object(s.a)({},r,{sprint:e.target.value}):r});r.setState(function(e){return{dataUserStory:o}})},r.onTextboxChangePriorityProductBacklog=function(e,t){var o=r.state.dataProductBacklog.map(function(r){return r.title==t?Object(s.a)({},r,{priority:e.target.value}):r});r.setState(function(e){return{dataProductBacklog:o}})},r.onTextboxChangeEstimationProductBacklog=function(e,t){var o=r.state.dataProductBacklog.map(function(r){return r.title==t?Object(s.a)({},r,{estimation:e.target.value}):r});r.setState(function(e){return{dataProductBacklog:o}})},r.onTextboxChangeSprintProductBacklog=function(e,t){var o=r.state.dataProductBacklog.map(function(r){return r.title==t?Object(s.a)({},r,{sprint:e.target.value}):r});r.setState(function(e){return{dataProductBacklog:o}})},r.loadUserstory=function(){var e=new P.userstory.UserStoryClient("https://www.overlead.co"),t=new P.userstory.GetAllUserStoryReq;t.setRequesterid(Object(y.a)("userId")),t.setAccesstoken(Object(y.a)("accessToken")),t.setProjectid(Object(y.a)("currentProject"));var s=e.getAllUserStory(t,{}),i=Object(c.a)(Object(c.a)(r));s.on("data",function(e){"SUCCESS"==e.getStatus()&&i.setState(function(t){return{dataUserStory:[].concat(Object(o.a)(t.dataUserStory),[{id:e.getId(),title:e.getName(),as:e.getRole(),want:e.getWant(),so:e.getSo()}])}})}),s.on("status",function(e){0!=e.code&&console.log(e)}),s.on("end",function(e){console.log("end"),console.log(e)})},r.loadProductbacklog=function(){var e=new P.productbacklog.ProductBacklogClient("https://www.overlead.co"),t=new P.productbacklog.GetAllProductBacklogReq;t.setRequesterid(Object(y.a)("userId")),t.setAccesstoken(Object(y.a)("accessToken")),t.setProjectid(Object(y.a)("currentProject"));var s=e.getAllProductBacklog(t,{}),i=Object(c.a)(Object(c.a)(r));s.on("data",function(e){"SUCCESS"==e.getStatus()&&i.setState(function(t){return{dataProductBacklog:[].concat(Object(o.a)(t.dataProductBacklog),[{id:e.getProductbacklogid(),title:e.getTitle(),as:e.getRole(),want:e.getWant(),so:e.getSo(),priority:e.getPriority(),estimation:e.getEstimation(),sprint:e.getSprintid(),status:e.getStatusbacklog()}])}})}),s.on("status",function(e){0!=e.code&&console.log(e)}),s.on("end",function(e){console.log("end"),console.log(e)})},r.toggleActionStatus=function(){r.setState(function(e){return{modalActionStatus:!e.modalActionStatus}})},r.handleStoryToBacklog=function(e){console.log("toBacklog");var t=new P.userstory.UserStoryClient("https://www.overlead.co");r.notify();var s=Object(c.a)(Object(c.a)(r)),i=new P.userstory.SendToProductBacklogReq;i.setRequesterid(Object(y.a)("userId")),i.setProjectid(Object(y.a)("currentProject")),i.setId(e.id),i.setPriority(e.priority),i.setEstimation(e.estimation),i.setStatusbacklog(e.status),i.setAccesstoken(Object(y.a)("accessToken")),i.setSprint(e.sprint),t.sendToProductBacklog(i,{},function(t,i){t?console.log(t):"SUCCESS"==i.getStatus()?(s.success(),r.setState(function(t){return{dataUserStory:Object(o.a)(t.dataUserStory.filter(function(t){return t.id!=e.id})),dataProductBacklog:[].concat(Object(o.a)(t.dataProductBacklog),[{id:e.id,title:e.title,as:e.as,want:e.want,so:e.so,priority:e.priority,estimation:e.estimation,sprint:e.sprint}])}}),r.setState({priorityUserstory:"",estimationUserstory:"",sprintUserstory:""})):s.failed()})},r.handleBacklogToStory=function(e){console.log("to US"),r.notify();var t=Object(c.a)(Object(c.a)(r)),s=new P.productbacklog.ProductBacklogClient("https://www.overlead.co"),i=new P.productbacklog.SendToSprintBacklogReq;i.setRequesterid(Object(y.a)("userId")),i.setAccesstoken(Object(y.a)("accessToken")),i.setProjectid(Object(y.a)("currentProject")),i.setProductbacklogid(e.id),s.sendToUserStory(i,{},function(s,i){s?console.log(s):"SUCCESS"==i.getStatus()?(r.success(),r.setState(function(t){return{dataProductBacklog:Object(o.a)(t.dataProductBacklog.filter(function(t){return t.id!=e.id})),dataUserStory:[].concat(Object(o.a)(t.dataUserStory),[{id:e.id,title:e.title,as:e.as,want:e.want,so:e.so,priority:"",estimation:"",sprint:""}])}})):t.failed()})},r.toastId=null,r.notify=function(){return r.toastId=Object(k.a)("Processing... please wait...",{autoClose:!1})},r.success=function(){return k.a.update(r.toastId,{render:"Success",type:k.a.TYPE.SUCCESS,autoClose:3e3})},r.failed=function(){return k.a.update(r.toastId,{render:"Failed",type:k.a.TYPE.ERROR,autoClose:3e3})},r.state={dataUserStory:[],dataProductBacklog:[],actionStatus:"",modalActionStatus:!1,priorityUserstory:"",estimationUserstory:"",sprintUserstory:"",priorityProductBacklog:"",estimationProductBacklog:"",sprintProductBacklog:"",title:""},r}return Object(u.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){this.loadUserstory(),this.loadProductbacklog()}},{key:"render",value:function(){var e=this;return p.a.createElement(g.a,null,p.a.createElement(S.a,{size:"sm",isOpen:e.state.modalActionStatus,toggle:e.toggleActionStatus,className:e.props.className},p.a.createElement(R.a,null,p.a.createElement("center",null,p.a.createElement("h4",null,e.state.actionStatus)))),p.a.createElement(U.a,null,p.a.createElement(g.a,null,p.a.createElement(U.a,null,p.a.createElement("div",{class:"card border-primary mb-3"},p.a.createElement("div",{class:"card-header bg-primary"},"USER STORY"),p.a.createElement("div",{class:"card-body"},this.state.dataUserStory.map(function(t,r){return p.a.createElement(h.a,null,p.a.createElement(f.a,null,p.a.createElement("i",{className:""}),p.a.createElement("strong",null,"As: ",t.as)),p.a.createElement(m.a,null,p.a.createElement("h6",null,"I want: ",t.want),p.a.createElement("h6",null,"So that:  ",t.so),p.a.createElement("div",{class:"row"},p.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},p.a.createElement(b.a,{htmlFor:"text-input"},"Priority")),p.a.createElement("div",{class:"col col-lg-4 col-md-4 col-sm-4"},p.a.createElement(B.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:t.priority,onChange:function(r){e.onTextboxChangePriorityUserstory(r,t.title)}})),p.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},p.a.createElement(b.a,{htmlFor:"text-input"},"Estimation")),p.a.createElement("div",{class:"col col-lg-4 col-md-4 col-sm-4"},p.a.createElement(B.a,{type:"text",name:"text-input",id:"text-input",placeholder:"hour",rows:"9",value:t.estimation,onChange:function(r){e.onTextboxChangeEstimationUserstory(r,t.title)}}))),p.a.createElement(q.a,{size:"sm",color:"success",align:"center",onClick:function(){e.handleStoryToBacklog(t)}},p.a.createElement("i",{class:"fa fa-arrow-right"}))))})))),p.a.createElement(U.a,null,p.a.createElement("div",{class:"card border-primary mb-3"},p.a.createElement("div",{class:"card-header bg-primary"},"PRODUCT BACKLOG"),p.a.createElement("div",{class:"card-body"},this.state.dataProductBacklog.map(function(t,r){return p.a.createElement(h.a,null,p.a.createElement(f.a,null,p.a.createElement("i",{className:""}),p.a.createElement("strong",null,"As ",t.as)),p.a.createElement(m.a,null,p.a.createElement("h6",null,"I want :  ",t.want),p.a.createElement("h6",null," So that:   ",t.so),p.a.createElement("div",{class:"row"},p.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},p.a.createElement(b.a,{htmlFor:"text-input"},"Priority")),p.a.createElement("div",{class:"col col-lg-4 col-md-4 col-sm-4"},p.a.createElement(B.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:t.priority,onChange:function(r){e.onTextboxChangePriorityProductBacklog(r,t.title)}})),p.a.createElement("div",{class:"col col-lg-2 col-md-2 col-sm-2"},p.a.createElement(b.a,{htmlFor:"text-input"},"Estimation")),p.a.createElement("div",{class:"col col-lg-4 col-md-4 col-sm-4"},p.a.createElement(B.a,{type:"text",name:"text-input",id:"text-input",rows:"9",value:t.estimation,onChange:function(r){e.onTextboxChangeEstimationProductBacklog(r,t.title)}}))),p.a.createElement(q.a,{size:"sm",color:"success",align:"center",onClick:function(){e.handleBacklogToStory(t)}},p.a.createElement("i",{class:"fa fa-arrow-left"}))))})))))))}}]),t}(d.Component);t.default=w}}]);
//# sourceMappingURL=34.017aa535.chunk.js.map