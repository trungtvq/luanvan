(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{393:function(t,e,o){var r={};r.web=o(19);var c={};c.productbacklog=o(803),c.productbacklog.ProductBacklogClient=function(t,e,o){o||(o={}),o.format="text",this.client_=new r.web.GrpcWebClientBase(o),this.hostname_=t,this.credentials_=e,this.options_=o},c.productbacklog.ProductBacklogPromiseClient=function(t,e,o){o||(o={}),o.format="text",this.client_=new r.web.GrpcWebClientBase(o),this.hostname_=t,this.credentials_=e,this.options_=o};var i=new r.web.AbstractClientBase.MethodInfo(c.productbacklog.ProductBacklogRes,function(t){return t.serializeBinary()},c.productbacklog.ProductBacklogRes.deserializeBinary);c.productbacklog.ProductBacklogClient.prototype.addNewProductBacklog=function(t,e,o){return this.client_.rpcCall(this.hostname_+"/productbacklog.ProductBacklog/addNewProductBacklog",t,e||{},i,o)},c.productbacklog.ProductBacklogPromiseClient.prototype.addNewProductBacklog=function(t,e){return this.client_.unaryCall(this.hostname_+"/productbacklog.ProductBacklog/addNewProductBacklog",t,e||{},i)};var a=new r.web.AbstractClientBase.MethodInfo(c.productbacklog.ProductBacklogRes,function(t){return t.serializeBinary()},c.productbacklog.ProductBacklogRes.deserializeBinary);c.productbacklog.ProductBacklogClient.prototype.updateProductBacklog=function(t,e,o){return this.client_.rpcCall(this.hostname_+"/productbacklog.ProductBacklog/updateProductBacklog",t,e||{},a,o)},c.productbacklog.ProductBacklogPromiseClient.prototype.updateProductBacklog=function(t,e){return this.client_.unaryCall(this.hostname_+"/productbacklog.ProductBacklog/updateProductBacklog",t,e||{},a)};var l=new r.web.AbstractClientBase.MethodInfo(c.productbacklog.ProductBacklogRes,function(t){return t.serializeBinary()},c.productbacklog.ProductBacklogRes.deserializeBinary);c.productbacklog.ProductBacklogClient.prototype.deleteProductBacklog=function(t,e,o){return this.client_.rpcCall(this.hostname_+"/productbacklog.ProductBacklog/deleteProductBacklog",t,e||{},l,o)},c.productbacklog.ProductBacklogPromiseClient.prototype.deleteProductBacklog=function(t,e){return this.client_.unaryCall(this.hostname_+"/productbacklog.ProductBacklog/deleteProductBacklog",t,e||{},l)};var s=new r.web.AbstractClientBase.MethodInfo(c.productbacklog.ProductBacklogRes,function(t){return t.serializeBinary()},c.productbacklog.ProductBacklogRes.deserializeBinary);c.productbacklog.ProductBacklogClient.prototype.sendToSprintBacklog=function(t,e,o){return this.client_.rpcCall(this.hostname_+"/productbacklog.ProductBacklog/sendToSprintBacklog",t,e||{},s,o)},c.productbacklog.ProductBacklogPromiseClient.prototype.sendToSprintBacklog=function(t,e){return this.client_.unaryCall(this.hostname_+"/productbacklog.ProductBacklog/sendToSprintBacklog",t,e||{},s)};var g=new r.web.AbstractClientBase.MethodInfo(c.productbacklog.ProductBacklogRes,function(t){return t.serializeBinary()},c.productbacklog.ProductBacklogRes.deserializeBinary);c.productbacklog.ProductBacklogClient.prototype.sendToUserStory=function(t,e,o){return this.client_.rpcCall(this.hostname_+"/productbacklog.ProductBacklog/sendToUserStory",t,e||{},g,o)},c.productbacklog.ProductBacklogPromiseClient.prototype.sendToUserStory=function(t,e){return this.client_.unaryCall(this.hostname_+"/productbacklog.ProductBacklog/sendToUserStory",t,e||{},g)};var d=new r.web.AbstractClientBase.MethodInfo(c.productbacklog.GetAllProductBacklogRes,function(t){return t.serializeBinary()},c.productbacklog.GetAllProductBacklogRes.deserializeBinary);c.productbacklog.ProductBacklogClient.prototype.getAllProductBacklog=function(t,e){return this.client_.serverStreaming(this.hostname_+"/productbacklog.ProductBacklog/getAllProductBacklog",t,e||{},d)},c.productbacklog.ProductBacklogPromiseClient.prototype.getAllProductBacklog=function(t,e){return this.client_.serverStreaming(this.hostname_+"/productbacklog.ProductBacklog/getAllProductBacklog",t,e||{},d)},t.exports=c.productbacklog},803:function(t,e,o){var r=o(20),c=r,i=Function("return this")();c.exportSymbol("proto.productbacklog.AddNewProductBacklogReq",null,i),c.exportSymbol("proto.productbacklog.DeleteProductBacklogReq",null,i),c.exportSymbol("proto.productbacklog.GetAllProductBacklogReq",null,i),c.exportSymbol("proto.productbacklog.GetAllProductBacklogRes",null,i),c.exportSymbol("proto.productbacklog.ProductBacklogRes",null,i),c.exportSymbol("proto.productbacklog.SendToSprintBacklogReq",null,i),c.exportSymbol("proto.productbacklog.UpdateProductBacklogReq",null,i),proto.productbacklog.AddNewProductBacklogReq=function(t){r.Message.initialize(this,t,0,-1,null,null)},c.inherits(proto.productbacklog.AddNewProductBacklogReq,r.Message),c.DEBUG&&!COMPILED&&(proto.productbacklog.AddNewProductBacklogReq.displayName="proto.productbacklog.AddNewProductBacklogReq"),r.Message.GENERATE_TO_OBJECT&&(proto.productbacklog.AddNewProductBacklogReq.prototype.toObject=function(t){return proto.productbacklog.AddNewProductBacklogReq.toObject(t,this)},proto.productbacklog.AddNewProductBacklogReq.toObject=function(t,e){var o={requesterid:e.getRequesterid(),projectid:e.getProjectid(),role:e.getRole(),want:e.getWant(),so:e.getSo(),statusbacklog:e.getStatusbacklog(),priority:e.getPriority(),estimation:e.getEstimation(),sprintid:e.getSprintid(),accesstoken:e.getAccesstoken(),title:e.getTitle()};return t&&(o.$jspbMessageInstance=e),o}),proto.productbacklog.AddNewProductBacklogReq.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.productbacklog.AddNewProductBacklogReq;return proto.productbacklog.AddNewProductBacklogReq.deserializeBinaryFromReader(o,e)},proto.productbacklog.AddNewProductBacklogReq.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var o=e.readString();t.setRequesterid(o);break;case 2:o=e.readString();t.setProjectid(o);break;case 3:o=e.readString();t.setRole(o);break;case 4:o=e.readString();t.setWant(o);break;case 5:o=e.readString();t.setSo(o);break;case 6:o=e.readString();t.setStatusbacklog(o);break;case 7:o=e.readString();t.setPriority(o);break;case 8:o=e.readString();t.setEstimation(o);break;case 9:o=e.readString();t.setSprintid(o);break;case 10:o=e.readString();t.setAccesstoken(o);break;case 11:o=e.readString();t.setTitle(o);break;default:e.skipField()}}return t},proto.productbacklog.AddNewProductBacklogReq.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.productbacklog.AddNewProductBacklogReq.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.productbacklog.AddNewProductBacklogReq.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getRequesterid()).length>0&&t.writeString(1,e),(e=this.getProjectid()).length>0&&t.writeString(2,e),(e=this.getRole()).length>0&&t.writeString(3,e),(e=this.getWant()).length>0&&t.writeString(4,e),(e=this.getSo()).length>0&&t.writeString(5,e),(e=this.getStatusbacklog()).length>0&&t.writeString(6,e),(e=this.getPriority()).length>0&&t.writeString(7,e),(e=this.getEstimation()).length>0&&t.writeString(8,e),(e=this.getSprintid()).length>0&&t.writeString(9,e),(e=this.getAccesstoken()).length>0&&t.writeString(10,e),(e=this.getTitle()).length>0&&t.writeString(11,e)},proto.productbacklog.AddNewProductBacklogReq.prototype.cloneMessage=function(){return r.Message.cloneMessage(this)},proto.productbacklog.AddNewProductBacklogReq.prototype.getRequesterid=function(){return r.Message.getFieldProto3(this,1,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setRequesterid=function(t){r.Message.setField(this,1,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getProjectid=function(){return r.Message.getFieldProto3(this,2,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setProjectid=function(t){r.Message.setField(this,2,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getRole=function(){return r.Message.getFieldProto3(this,3,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setRole=function(t){r.Message.setField(this,3,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getWant=function(){return r.Message.getFieldProto3(this,4,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setWant=function(t){r.Message.setField(this,4,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getSo=function(){return r.Message.getFieldProto3(this,5,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setSo=function(t){r.Message.setField(this,5,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getStatusbacklog=function(){return r.Message.getFieldProto3(this,6,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setStatusbacklog=function(t){r.Message.setField(this,6,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getPriority=function(){return r.Message.getFieldProto3(this,7,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setPriority=function(t){r.Message.setField(this,7,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getEstimation=function(){return r.Message.getFieldProto3(this,8,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setEstimation=function(t){r.Message.setField(this,8,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getSprintid=function(){return r.Message.getFieldProto3(this,9,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setSprintid=function(t){r.Message.setField(this,9,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getAccesstoken=function(){return r.Message.getFieldProto3(this,10,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setAccesstoken=function(t){r.Message.setField(this,10,t)},proto.productbacklog.AddNewProductBacklogReq.prototype.getTitle=function(){return r.Message.getFieldProto3(this,11,"")},proto.productbacklog.AddNewProductBacklogReq.prototype.setTitle=function(t){r.Message.setField(this,11,t)},proto.productbacklog.ProductBacklogRes=function(t){r.Message.initialize(this,t,0,-1,null,null)},c.inherits(proto.productbacklog.ProductBacklogRes,r.Message),c.DEBUG&&!COMPILED&&(proto.productbacklog.ProductBacklogRes.displayName="proto.productbacklog.ProductBacklogRes"),r.Message.GENERATE_TO_OBJECT&&(proto.productbacklog.ProductBacklogRes.prototype.toObject=function(t){return proto.productbacklog.ProductBacklogRes.toObject(t,this)},proto.productbacklog.ProductBacklogRes.toObject=function(t,e){var o={error:e.getError(),status:e.getStatus(),productbacklogid:e.getProductbacklogid()};return t&&(o.$jspbMessageInstance=e),o}),proto.productbacklog.ProductBacklogRes.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.productbacklog.ProductBacklogRes;return proto.productbacklog.ProductBacklogRes.deserializeBinaryFromReader(o,e)},proto.productbacklog.ProductBacklogRes.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var o=e.readString();t.setError(o);break;case 2:o=e.readString();t.setStatus(o);break;case 3:o=e.readString();t.setProductbacklogid(o);break;default:e.skipField()}}return t},proto.productbacklog.ProductBacklogRes.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.productbacklog.ProductBacklogRes.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.productbacklog.ProductBacklogRes.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getError()).length>0&&t.writeString(1,e),(e=this.getStatus()).length>0&&t.writeString(2,e),(e=this.getProductbacklogid()).length>0&&t.writeString(3,e)},proto.productbacklog.ProductBacklogRes.prototype.cloneMessage=function(){return r.Message.cloneMessage(this)},proto.productbacklog.ProductBacklogRes.prototype.getError=function(){return r.Message.getFieldProto3(this,1,"")},proto.productbacklog.ProductBacklogRes.prototype.setError=function(t){r.Message.setField(this,1,t)},proto.productbacklog.ProductBacklogRes.prototype.getStatus=function(){return r.Message.getFieldProto3(this,2,"")},proto.productbacklog.ProductBacklogRes.prototype.setStatus=function(t){r.Message.setField(this,2,t)},proto.productbacklog.ProductBacklogRes.prototype.getProductbacklogid=function(){return r.Message.getFieldProto3(this,3,"")},proto.productbacklog.ProductBacklogRes.prototype.setProductbacklogid=function(t){r.Message.setField(this,3,t)},proto.productbacklog.UpdateProductBacklogReq=function(t){r.Message.initialize(this,t,0,-1,null,null)},c.inherits(proto.productbacklog.UpdateProductBacklogReq,r.Message),c.DEBUG&&!COMPILED&&(proto.productbacklog.UpdateProductBacklogReq.displayName="proto.productbacklog.UpdateProductBacklogReq"),r.Message.GENERATE_TO_OBJECT&&(proto.productbacklog.UpdateProductBacklogReq.prototype.toObject=function(t){return proto.productbacklog.UpdateProductBacklogReq.toObject(t,this)},proto.productbacklog.UpdateProductBacklogReq.toObject=function(t,e){var o={requesterid:e.getRequesterid(),projectid:e.getProjectid(),productbacklogid:e.getProductbacklogid(),role:e.getRole(),want:e.getWant(),so:e.getSo(),statusbacklog:e.getStatusbacklog(),priority:e.getPriority(),estimation:e.getEstimation(),sprint:e.getSprint(),accesstoken:e.getAccesstoken(),title:e.getTitle(),sprintid:e.getSprintid()};return t&&(o.$jspbMessageInstance=e),o}),proto.productbacklog.UpdateProductBacklogReq.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.productbacklog.UpdateProductBacklogReq;return proto.productbacklog.UpdateProductBacklogReq.deserializeBinaryFromReader(o,e)},proto.productbacklog.UpdateProductBacklogReq.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var o=e.readString();t.setRequesterid(o);break;case 2:o=e.readString();t.setProjectid(o);break;case 3:o=e.readString();t.setProductbacklogid(o);break;case 4:o=e.readString();t.setRole(o);break;case 5:o=e.readString();t.setWant(o);break;case 6:o=e.readString();t.setSo(o);break;case 7:o=e.readString();t.setStatusbacklog(o);break;case 8:o=e.readString();t.setPriority(o);break;case 9:o=e.readString();t.setEstimation(o);break;case 10:o=e.readString();t.setSprint(o);break;case 11:o=e.readString();t.setAccesstoken(o);break;case 12:o=e.readString();t.setTitle(o);break;case 13:o=e.readString();t.setSprintid(o);break;default:e.skipField()}}return t},proto.productbacklog.UpdateProductBacklogReq.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.productbacklog.UpdateProductBacklogReq.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.productbacklog.UpdateProductBacklogReq.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getRequesterid()).length>0&&t.writeString(1,e),(e=this.getProjectid()).length>0&&t.writeString(2,e),(e=this.getProductbacklogid()).length>0&&t.writeString(3,e),(e=this.getRole()).length>0&&t.writeString(4,e),(e=this.getWant()).length>0&&t.writeString(5,e),(e=this.getSo()).length>0&&t.writeString(6,e),(e=this.getStatusbacklog()).length>0&&t.writeString(7,e),(e=this.getPriority()).length>0&&t.writeString(8,e),(e=this.getEstimation()).length>0&&t.writeString(9,e),(e=this.getSprint()).length>0&&t.writeString(10,e),(e=this.getAccesstoken()).length>0&&t.writeString(11,e),(e=this.getTitle()).length>0&&t.writeString(12,e),(e=this.getSprintid()).length>0&&t.writeString(13,e)},proto.productbacklog.UpdateProductBacklogReq.prototype.cloneMessage=function(){return r.Message.cloneMessage(this)},proto.productbacklog.UpdateProductBacklogReq.prototype.getRequesterid=function(){return r.Message.getFieldProto3(this,1,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setRequesterid=function(t){r.Message.setField(this,1,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getProjectid=function(){return r.Message.getFieldProto3(this,2,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setProjectid=function(t){r.Message.setField(this,2,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getProductbacklogid=function(){return r.Message.getFieldProto3(this,3,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setProductbacklogid=function(t){r.Message.setField(this,3,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getRole=function(){return r.Message.getFieldProto3(this,4,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setRole=function(t){r.Message.setField(this,4,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getWant=function(){return r.Message.getFieldProto3(this,5,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setWant=function(t){r.Message.setField(this,5,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getSo=function(){return r.Message.getFieldProto3(this,6,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setSo=function(t){r.Message.setField(this,6,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getStatusbacklog=function(){return r.Message.getFieldProto3(this,7,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setStatusbacklog=function(t){r.Message.setField(this,7,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getPriority=function(){return r.Message.getFieldProto3(this,8,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setPriority=function(t){r.Message.setField(this,8,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getEstimation=function(){return r.Message.getFieldProto3(this,9,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setEstimation=function(t){r.Message.setField(this,9,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getSprint=function(){return r.Message.getFieldProto3(this,10,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setSprint=function(t){r.Message.setField(this,10,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getAccesstoken=function(){return r.Message.getFieldProto3(this,11,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setAccesstoken=function(t){r.Message.setField(this,11,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getTitle=function(){return r.Message.getFieldProto3(this,12,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setTitle=function(t){r.Message.setField(this,12,t)},proto.productbacklog.UpdateProductBacklogReq.prototype.getSprintid=function(){return r.Message.getFieldProto3(this,13,"")},proto.productbacklog.UpdateProductBacklogReq.prototype.setSprintid=function(t){r.Message.setField(this,13,t)},proto.productbacklog.DeleteProductBacklogReq=function(t){r.Message.initialize(this,t,0,-1,null,null)},c.inherits(proto.productbacklog.DeleteProductBacklogReq,r.Message),c.DEBUG&&!COMPILED&&(proto.productbacklog.DeleteProductBacklogReq.displayName="proto.productbacklog.DeleteProductBacklogReq"),r.Message.GENERATE_TO_OBJECT&&(proto.productbacklog.DeleteProductBacklogReq.prototype.toObject=function(t){return proto.productbacklog.DeleteProductBacklogReq.toObject(t,this)},proto.productbacklog.DeleteProductBacklogReq.toObject=function(t,e){var o={requesterid:e.getRequesterid(),projectid:e.getProjectid(),productbacklogid:e.getProductbacklogid(),accesstoken:e.getAccesstoken()};return t&&(o.$jspbMessageInstance=e),o}),proto.productbacklog.DeleteProductBacklogReq.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.productbacklog.DeleteProductBacklogReq;return proto.productbacklog.DeleteProductBacklogReq.deserializeBinaryFromReader(o,e)},proto.productbacklog.DeleteProductBacklogReq.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var o=e.readString();t.setRequesterid(o);break;case 2:o=e.readString();t.setProjectid(o);break;case 3:o=e.readString();t.setProductbacklogid(o);break;case 4:o=e.readString();t.setAccesstoken(o);break;default:e.skipField()}}return t},proto.productbacklog.DeleteProductBacklogReq.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.productbacklog.DeleteProductBacklogReq.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.productbacklog.DeleteProductBacklogReq.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getRequesterid()).length>0&&t.writeString(1,e),(e=this.getProjectid()).length>0&&t.writeString(2,e),(e=this.getProductbacklogid()).length>0&&t.writeString(3,e),(e=this.getAccesstoken()).length>0&&t.writeString(4,e)},proto.productbacklog.DeleteProductBacklogReq.prototype.cloneMessage=function(){return r.Message.cloneMessage(this)},proto.productbacklog.DeleteProductBacklogReq.prototype.getRequesterid=function(){return r.Message.getFieldProto3(this,1,"")},proto.productbacklog.DeleteProductBacklogReq.prototype.setRequesterid=function(t){r.Message.setField(this,1,t)},proto.productbacklog.DeleteProductBacklogReq.prototype.getProjectid=function(){return r.Message.getFieldProto3(this,2,"")},proto.productbacklog.DeleteProductBacklogReq.prototype.setProjectid=function(t){r.Message.setField(this,2,t)},proto.productbacklog.DeleteProductBacklogReq.prototype.getProductbacklogid=function(){return r.Message.getFieldProto3(this,3,"")},proto.productbacklog.DeleteProductBacklogReq.prototype.setProductbacklogid=function(t){r.Message.setField(this,3,t)},proto.productbacklog.DeleteProductBacklogReq.prototype.getAccesstoken=function(){return r.Message.getFieldProto3(this,4,"")},proto.productbacklog.DeleteProductBacklogReq.prototype.setAccesstoken=function(t){r.Message.setField(this,4,t)},proto.productbacklog.SendToSprintBacklogReq=function(t){r.Message.initialize(this,t,0,-1,null,null)},c.inherits(proto.productbacklog.SendToSprintBacklogReq,r.Message),c.DEBUG&&!COMPILED&&(proto.productbacklog.SendToSprintBacklogReq.displayName="proto.productbacklog.SendToSprintBacklogReq"),r.Message.GENERATE_TO_OBJECT&&(proto.productbacklog.SendToSprintBacklogReq.prototype.toObject=function(t){return proto.productbacklog.SendToSprintBacklogReq.toObject(t,this)},proto.productbacklog.SendToSprintBacklogReq.toObject=function(t,e){var o={requesterid:e.getRequesterid(),projectid:e.getProjectid(),productbacklogid:e.getProductbacklogid(),start:e.getStart(),deadline:e.getDeadline(),accesstoken:e.getAccesstoken(),teamid:e.getTeamid()};return t&&(o.$jspbMessageInstance=e),o}),proto.productbacklog.SendToSprintBacklogReq.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.productbacklog.SendToSprintBacklogReq;return proto.productbacklog.SendToSprintBacklogReq.deserializeBinaryFromReader(o,e)},proto.productbacklog.SendToSprintBacklogReq.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var o=e.readString();t.setRequesterid(o);break;case 2:o=e.readString();t.setProjectid(o);break;case 3:o=e.readString();t.setProductbacklogid(o);break;case 4:o=e.readString();t.setStart(o);break;case 5:o=e.readString();t.setDeadline(o);break;case 6:o=e.readString();t.setAccesstoken(o);break;case 7:o=e.readString();t.setTeamid(o);break;default:e.skipField()}}return t},proto.productbacklog.SendToSprintBacklogReq.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.productbacklog.SendToSprintBacklogReq.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.productbacklog.SendToSprintBacklogReq.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getRequesterid()).length>0&&t.writeString(1,e),(e=this.getProjectid()).length>0&&t.writeString(2,e),(e=this.getProductbacklogid()).length>0&&t.writeString(3,e),(e=this.getStart()).length>0&&t.writeString(4,e),(e=this.getDeadline()).length>0&&t.writeString(5,e),(e=this.getAccesstoken()).length>0&&t.writeString(6,e),(e=this.getTeamid()).length>0&&t.writeString(7,e)},proto.productbacklog.SendToSprintBacklogReq.prototype.cloneMessage=function(){return r.Message.cloneMessage(this)},proto.productbacklog.SendToSprintBacklogReq.prototype.getRequesterid=function(){return r.Message.getFieldProto3(this,1,"")},proto.productbacklog.SendToSprintBacklogReq.prototype.setRequesterid=function(t){r.Message.setField(this,1,t)},proto.productbacklog.SendToSprintBacklogReq.prototype.getProjectid=function(){return r.Message.getFieldProto3(this,2,"")},proto.productbacklog.SendToSprintBacklogReq.prototype.setProjectid=function(t){r.Message.setField(this,2,t)},proto.productbacklog.SendToSprintBacklogReq.prototype.getProductbacklogid=function(){return r.Message.getFieldProto3(this,3,"")},proto.productbacklog.SendToSprintBacklogReq.prototype.setProductbacklogid=function(t){r.Message.setField(this,3,t)},proto.productbacklog.SendToSprintBacklogReq.prototype.getStart=function(){return r.Message.getFieldProto3(this,4,"")},proto.productbacklog.SendToSprintBacklogReq.prototype.setStart=function(t){r.Message.setField(this,4,t)},proto.productbacklog.SendToSprintBacklogReq.prototype.getDeadline=function(){return r.Message.getFieldProto3(this,5,"")},proto.productbacklog.SendToSprintBacklogReq.prototype.setDeadline=function(t){r.Message.setField(this,5,t)},proto.productbacklog.SendToSprintBacklogReq.prototype.getAccesstoken=function(){return r.Message.getFieldProto3(this,6,"")},proto.productbacklog.SendToSprintBacklogReq.prototype.setAccesstoken=function(t){r.Message.setField(this,6,t)},proto.productbacklog.SendToSprintBacklogReq.prototype.getTeamid=function(){return r.Message.getFieldProto3(this,7,"")},proto.productbacklog.SendToSprintBacklogReq.prototype.setTeamid=function(t){r.Message.setField(this,7,t)},proto.productbacklog.GetAllProductBacklogReq=function(t){r.Message.initialize(this,t,0,-1,null,null)},c.inherits(proto.productbacklog.GetAllProductBacklogReq,r.Message),c.DEBUG&&!COMPILED&&(proto.productbacklog.GetAllProductBacklogReq.displayName="proto.productbacklog.GetAllProductBacklogReq"),r.Message.GENERATE_TO_OBJECT&&(proto.productbacklog.GetAllProductBacklogReq.prototype.toObject=function(t){return proto.productbacklog.GetAllProductBacklogReq.toObject(t,this)},proto.productbacklog.GetAllProductBacklogReq.toObject=function(t,e){var o={requesterid:e.getRequesterid(),projectid:e.getProjectid(),accesstoken:e.getAccesstoken()};return t&&(o.$jspbMessageInstance=e),o}),proto.productbacklog.GetAllProductBacklogReq.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.productbacklog.GetAllProductBacklogReq;return proto.productbacklog.GetAllProductBacklogReq.deserializeBinaryFromReader(o,e)},proto.productbacklog.GetAllProductBacklogReq.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 1:var o=e.readString();t.setRequesterid(o);break;case 2:o=e.readString();t.setProjectid(o);break;case 3:o=e.readString();t.setAccesstoken(o);break;default:e.skipField()}}return t},proto.productbacklog.GetAllProductBacklogReq.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.productbacklog.GetAllProductBacklogReq.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.productbacklog.GetAllProductBacklogReq.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getRequesterid()).length>0&&t.writeString(1,e),(e=this.getProjectid()).length>0&&t.writeString(2,e),(e=this.getAccesstoken()).length>0&&t.writeString(3,e)},proto.productbacklog.GetAllProductBacklogReq.prototype.cloneMessage=function(){return r.Message.cloneMessage(this)},proto.productbacklog.GetAllProductBacklogReq.prototype.getRequesterid=function(){return r.Message.getFieldProto3(this,1,"")},proto.productbacklog.GetAllProductBacklogReq.prototype.setRequesterid=function(t){r.Message.setField(this,1,t)},proto.productbacklog.GetAllProductBacklogReq.prototype.getProjectid=function(){return r.Message.getFieldProto3(this,2,"")},proto.productbacklog.GetAllProductBacklogReq.prototype.setProjectid=function(t){r.Message.setField(this,2,t)},proto.productbacklog.GetAllProductBacklogReq.prototype.getAccesstoken=function(){return r.Message.getFieldProto3(this,3,"")},proto.productbacklog.GetAllProductBacklogReq.prototype.setAccesstoken=function(t){r.Message.setField(this,3,t)},proto.productbacklog.GetAllProductBacklogRes=function(t){r.Message.initialize(this,t,0,-1,null,null)},c.inherits(proto.productbacklog.GetAllProductBacklogRes,r.Message),c.DEBUG&&!COMPILED&&(proto.productbacklog.GetAllProductBacklogRes.displayName="proto.productbacklog.GetAllProductBacklogRes"),r.Message.GENERATE_TO_OBJECT&&(proto.productbacklog.GetAllProductBacklogRes.prototype.toObject=function(t){return proto.productbacklog.GetAllProductBacklogRes.toObject(t,this)},proto.productbacklog.GetAllProductBacklogRes.toObject=function(t,e){var o={productbacklogid:e.getProductbacklogid(),role:e.getRole(),want:e.getWant(),so:e.getSo(),statusbacklog:e.getStatusbacklog(),status:e.getStatus(),error:e.getError(),priority:e.getPriority(),estimation:e.getEstimation(),sprintid:e.getSprintid(),title:e.getTitle()};return t&&(o.$jspbMessageInstance=e),o}),proto.productbacklog.GetAllProductBacklogRes.deserializeBinary=function(t){var e=new r.BinaryReader(t),o=new proto.productbacklog.GetAllProductBacklogRes;return proto.productbacklog.GetAllProductBacklogRes.deserializeBinaryFromReader(o,e)},proto.productbacklog.GetAllProductBacklogRes.deserializeBinaryFromReader=function(t,e){for(;e.nextField()&&!e.isEndGroup();){switch(e.getFieldNumber()){case 2:var o=e.readString();t.setProductbacklogid(o);break;case 3:o=e.readString();t.setRole(o);break;case 4:o=e.readString();t.setWant(o);break;case 5:o=e.readString();t.setSo(o);break;case 11:o=e.readString();t.setStatusbacklog(o);break;case 9:o=e.readString();t.setStatus(o);break;case 1:o=e.readString();t.setError(o);break;case 6:o=e.readString();t.setPriority(o);break;case 7:o=e.readString();t.setEstimation(o);break;case 8:o=e.readString();t.setSprintid(o);break;case 10:o=e.readString();t.setTitle(o);break;default:e.skipField()}}return t},proto.productbacklog.GetAllProductBacklogRes.serializeBinaryToWriter=function(t,e){t.serializeBinaryToWriter(e)},proto.productbacklog.GetAllProductBacklogRes.prototype.serializeBinary=function(){var t=new r.BinaryWriter;return this.serializeBinaryToWriter(t),t.getResultBuffer()},proto.productbacklog.GetAllProductBacklogRes.prototype.serializeBinaryToWriter=function(t){var e=void 0;(e=this.getProductbacklogid()).length>0&&t.writeString(2,e),(e=this.getRole()).length>0&&t.writeString(3,e),(e=this.getWant()).length>0&&t.writeString(4,e),(e=this.getSo()).length>0&&t.writeString(5,e),(e=this.getStatusbacklog()).length>0&&t.writeString(11,e),(e=this.getStatus()).length>0&&t.writeString(9,e),(e=this.getError()).length>0&&t.writeString(1,e),(e=this.getPriority()).length>0&&t.writeString(6,e),(e=this.getEstimation()).length>0&&t.writeString(7,e),(e=this.getSprintid()).length>0&&t.writeString(8,e),(e=this.getTitle()).length>0&&t.writeString(10,e)},proto.productbacklog.GetAllProductBacklogRes.prototype.cloneMessage=function(){return r.Message.cloneMessage(this)},proto.productbacklog.GetAllProductBacklogRes.prototype.getProductbacklogid=function(){return r.Message.getFieldProto3(this,2,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setProductbacklogid=function(t){r.Message.setField(this,2,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getRole=function(){return r.Message.getFieldProto3(this,3,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setRole=function(t){r.Message.setField(this,3,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getWant=function(){return r.Message.getFieldProto3(this,4,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setWant=function(t){r.Message.setField(this,4,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getSo=function(){return r.Message.getFieldProto3(this,5,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setSo=function(t){r.Message.setField(this,5,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getStatusbacklog=function(){return r.Message.getFieldProto3(this,11,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setStatusbacklog=function(t){r.Message.setField(this,11,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getStatus=function(){return r.Message.getFieldProto3(this,9,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setStatus=function(t){r.Message.setField(this,9,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getError=function(){return r.Message.getFieldProto3(this,1,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setError=function(t){r.Message.setField(this,1,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getPriority=function(){return r.Message.getFieldProto3(this,6,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setPriority=function(t){r.Message.setField(this,6,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getEstimation=function(){return r.Message.getFieldProto3(this,7,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setEstimation=function(t){r.Message.setField(this,7,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getSprintid=function(){return r.Message.getFieldProto3(this,8,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setSprintid=function(t){r.Message.setField(this,8,t)},proto.productbacklog.GetAllProductBacklogRes.prototype.getTitle=function(){return r.Message.getFieldProto3(this,10,"")},proto.productbacklog.GetAllProductBacklogRes.prototype.setTitle=function(t){r.Message.setField(this,10,t)},c.object.extend(e,proto.productbacklog)}}]);
//# sourceMappingURL=8.e6db3caa.chunk.js.map