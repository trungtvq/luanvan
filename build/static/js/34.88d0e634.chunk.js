(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{441:function(e,t,r){var n={};n.web=r(442);var o={};o.counter=r(443),o.counter.AuthClient=function(e,t,r){r||(r={}),r.format="text",this.client_=new n.web.GrpcWebClientBase(r),this.hostname_=e,this.credentials_=t,this.options_=r},o.counter.AuthPromiseClient=function(e,t,r){r||(r={}),r.format="text",this.client_=new n.web.GrpcWebClientBase(r),this.hostname_=e,this.credentials_=t,this.options_=r};var i=new n.web.AbstractClientBase.MethodInfo(o.counter.SignInRes,function(e){return e.serializeBinary()},o.counter.SignInRes.deserializeBinary);o.counter.AuthClient.prototype.signIn=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/counter.Auth/SignIn",e,t||{},i,r)},o.counter.AuthPromiseClient.prototype.signIn=function(e,t){return this.client_.unaryCall(this.hostname_+"/counter.Auth/SignIn",e,t||{},i)};var s=new n.web.AbstractClientBase.MethodInfo(o.counter.SignInRes,function(e){return e.serializeBinary()},o.counter.SignInRes.deserializeBinary);o.counter.AuthClient.prototype.signUp=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/counter.Auth/SignUp",e,t||{},s,r)},o.counter.AuthPromiseClient.prototype.signUp=function(e,t){return this.client_.unaryCall(this.hostname_+"/counter.Auth/SignUp",e,t||{},s)};var a=new n.web.AbstractClientBase.MethodInfo(o.counter.ResetRes,function(e){return e.serializeBinary()},o.counter.ResetRes.deserializeBinary);o.counter.AuthClient.prototype.resetPassword=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/counter.Auth/ResetPassword",e,t||{},a,r)},o.counter.AuthPromiseClient.prototype.resetPassword=function(e,t){return this.client_.unaryCall(this.hostname_+"/counter.Auth/ResetPassword",e,t||{},a)},e.exports=o.counter},443:function(e,t,r){var n=r(444),o=n,i=Function("return this")();o.exportSymbol("proto.counter.ResetReq",null,i),o.exportSymbol("proto.counter.ResetRes",null,i),o.exportSymbol("proto.counter.SignInReq",null,i),o.exportSymbol("proto.counter.SignInRes",null,i),o.exportSymbol("proto.counter.SignUpReq",null,i),proto.counter.SignInReq=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.counter.SignInReq,n.Message),o.DEBUG&&!COMPILED&&(proto.counter.SignInReq.displayName="proto.counter.SignInReq"),n.Message.GENERATE_TO_OBJECT&&(proto.counter.SignInReq.prototype.toObject=function(e){return proto.counter.SignInReq.toObject(e,this)},proto.counter.SignInReq.toObject=function(e,t){var r={username:t.getUsername(),password:t.getPassword()};return e&&(r.$jspbMessageInstance=t),r}),proto.counter.SignInReq.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.counter.SignInReq;return proto.counter.SignInReq.deserializeBinaryFromReader(r,t)},proto.counter.SignInReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setUsername(r);break;case 2:r=t.readString();e.setPassword(r);break;default:t.skipField()}}return e},proto.counter.SignInReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.counter.SignInReq.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.counter.SignInReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getUsername()).length>0&&e.writeString(1,t),(t=this.getPassword()).length>0&&e.writeString(2,t)},proto.counter.SignInReq.prototype.cloneMessage=function(){return n.Message.cloneMessage(this)},proto.counter.SignInReq.prototype.getUsername=function(){return n.Message.getFieldProto3(this,1,"")},proto.counter.SignInReq.prototype.setUsername=function(e){n.Message.setField(this,1,e)},proto.counter.SignInReq.prototype.getPassword=function(){return n.Message.getFieldProto3(this,2,"")},proto.counter.SignInReq.prototype.setPassword=function(e){n.Message.setField(this,2,e)},proto.counter.SignInRes=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.counter.SignInRes,n.Message),o.DEBUG&&!COMPILED&&(proto.counter.SignInRes.displayName="proto.counter.SignInRes"),n.Message.GENERATE_TO_OBJECT&&(proto.counter.SignInRes.prototype.toObject=function(e){return proto.counter.SignInRes.toObject(e,this)},proto.counter.SignInRes.toObject=function(e,t){var r={status:t.getStatus(),response:t.getResponse(),type:t.getType()};return e&&(r.$jspbMessageInstance=t),r}),proto.counter.SignInRes.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.counter.SignInRes;return proto.counter.SignInRes.deserializeBinaryFromReader(r,t)},proto.counter.SignInRes.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setStatus(r);break;case 2:r=t.readString();e.setResponse(r);break;case 3:r=t.readString();e.setType(r);break;default:t.skipField()}}return e},proto.counter.SignInRes.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.counter.SignInRes.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.counter.SignInRes.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getStatus()).length>0&&e.writeString(1,t),(t=this.getResponse()).length>0&&e.writeString(2,t),(t=this.getType()).length>0&&e.writeString(3,t)},proto.counter.SignInRes.prototype.cloneMessage=function(){return n.Message.cloneMessage(this)},proto.counter.SignInRes.prototype.getStatus=function(){return n.Message.getFieldProto3(this,1,"")},proto.counter.SignInRes.prototype.setStatus=function(e){n.Message.setField(this,1,e)},proto.counter.SignInRes.prototype.getResponse=function(){return n.Message.getFieldProto3(this,2,"")},proto.counter.SignInRes.prototype.setResponse=function(e){n.Message.setField(this,2,e)},proto.counter.SignInRes.prototype.getType=function(){return n.Message.getFieldProto3(this,3,"")},proto.counter.SignInRes.prototype.setType=function(e){n.Message.setField(this,3,e)},proto.counter.SignUpReq=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.counter.SignUpReq,n.Message),o.DEBUG&&!COMPILED&&(proto.counter.SignUpReq.displayName="proto.counter.SignUpReq"),n.Message.GENERATE_TO_OBJECT&&(proto.counter.SignUpReq.prototype.toObject=function(e){return proto.counter.SignUpReq.toObject(e,this)},proto.counter.SignUpReq.toObject=function(e,t){var r={username:t.getUsername(),password:t.getPassword(),name:t.getName()};return e&&(r.$jspbMessageInstance=t),r}),proto.counter.SignUpReq.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.counter.SignUpReq;return proto.counter.SignUpReq.deserializeBinaryFromReader(r,t)},proto.counter.SignUpReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setUsername(r);break;case 2:r=t.readString();e.setPassword(r);break;case 3:r=t.readString();e.setName(r);break;default:t.skipField()}}return e},proto.counter.SignUpReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.counter.SignUpReq.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.counter.SignUpReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getUsername()).length>0&&e.writeString(1,t),(t=this.getPassword()).length>0&&e.writeString(2,t),(t=this.getName()).length>0&&e.writeString(3,t)},proto.counter.SignUpReq.prototype.cloneMessage=function(){return n.Message.cloneMessage(this)},proto.counter.SignUpReq.prototype.getUsername=function(){return n.Message.getFieldProto3(this,1,"")},proto.counter.SignUpReq.prototype.setUsername=function(e){n.Message.setField(this,1,e)},proto.counter.SignUpReq.prototype.getPassword=function(){return n.Message.getFieldProto3(this,2,"")},proto.counter.SignUpReq.prototype.setPassword=function(e){n.Message.setField(this,2,e)},proto.counter.SignUpReq.prototype.getName=function(){return n.Message.getFieldProto3(this,3,"")},proto.counter.SignUpReq.prototype.setName=function(e){n.Message.setField(this,3,e)},proto.counter.ResetReq=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.counter.ResetReq,n.Message),o.DEBUG&&!COMPILED&&(proto.counter.ResetReq.displayName="proto.counter.ResetReq"),n.Message.GENERATE_TO_OBJECT&&(proto.counter.ResetReq.prototype.toObject=function(e){return proto.counter.ResetReq.toObject(e,this)},proto.counter.ResetReq.toObject=function(e,t){var r={type:t.getType(),content:t.getContent()};return e&&(r.$jspbMessageInstance=t),r}),proto.counter.ResetReq.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.counter.ResetReq;return proto.counter.ResetReq.deserializeBinaryFromReader(r,t)},proto.counter.ResetReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setType(r);break;case 2:r=t.readString();e.setContent(r);break;default:t.skipField()}}return e},proto.counter.ResetReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.counter.ResetReq.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.counter.ResetReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getType()).length>0&&e.writeString(1,t),(t=this.getContent()).length>0&&e.writeString(2,t)},proto.counter.ResetReq.prototype.cloneMessage=function(){return n.Message.cloneMessage(this)},proto.counter.ResetReq.prototype.getType=function(){return n.Message.getFieldProto3(this,1,"")},proto.counter.ResetReq.prototype.setType=function(e){n.Message.setField(this,1,e)},proto.counter.ResetReq.prototype.getContent=function(){return n.Message.getFieldProto3(this,2,"")},proto.counter.ResetReq.prototype.setContent=function(e){n.Message.setField(this,2,e)},proto.counter.ResetRes=function(e){n.Message.initialize(this,e,0,-1,null,null)},o.inherits(proto.counter.ResetRes,n.Message),o.DEBUG&&!COMPILED&&(proto.counter.ResetRes.displayName="proto.counter.ResetRes"),n.Message.GENERATE_TO_OBJECT&&(proto.counter.ResetRes.prototype.toObject=function(e){return proto.counter.ResetRes.toObject(e,this)},proto.counter.ResetRes.toObject=function(e,t){var r={status:t.getStatus(),token:t.getToken()};return e&&(r.$jspbMessageInstance=t),r}),proto.counter.ResetRes.deserializeBinary=function(e){var t=new n.BinaryReader(e),r=new proto.counter.ResetRes;return proto.counter.ResetRes.deserializeBinaryFromReader(r,t)},proto.counter.ResetRes.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setStatus(r);break;case 2:r=t.readString();e.setToken(r);break;default:t.skipField()}}return e},proto.counter.ResetRes.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.counter.ResetRes.prototype.serializeBinary=function(){var e=new n.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.counter.ResetRes.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getStatus()).length>0&&e.writeString(1,t),(t=this.getToken()).length>0&&e.writeString(2,t)},proto.counter.ResetRes.prototype.cloneMessage=function(){return n.Message.cloneMessage(this)},proto.counter.ResetRes.prototype.getStatus=function(){return n.Message.getFieldProto3(this,1,"")},proto.counter.ResetRes.prototype.setStatus=function(e){n.Message.setField(this,1,e)},proto.counter.ResetRes.prototype.getToken=function(){return n.Message.getFieldProto3(this,2,"")},proto.counter.ResetRes.prototype.setToken=function(e){n.Message.setField(this,2,e)},o.object.extend(t,proto.counter)},657:function(e,t,r){"use strict";r.r(t);var n=r(30),o=r(31),i=r(33),s=r(32),a=r(34),u=r(3),c=r.n(u),p=r(149),l=r(88),g=r(86),R=r(243),d=r(244),h=r(153),y=r(100),f=r(91),S={};S.auth=r(441);var m=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(a.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=new S.auth.AuthClient("http://trungtvq.ddns.net:8080"),t=new S.auth.SignInReq;t.setUsername("useridoremail"),t.setPassword("mypass");e.signIn(t,{},function(e,t){if(e)console.log(e);else{var r=t.getSignInRes();null==r?console.log("Something was wrong ".concat("useridoremail"," wasn't found")):console.log("Fetched TODO with ID ".concat("useridoremail",": ").concat(r))}});return c.a.createElement("div",{className:"app flex-row align-items-center"},c.a.createElement(p.a,null,c.a.createElement(l.a,{className:"justify-content-center"},c.a.createElement(g.a,{md:"6"},c.a.createElement("div",{className:"clearfix"},c.a.createElement("h1",{className:"float-left display-3 mr-4"},"404"),c.a.createElement("h4",{className:"pt-3"},"Oops! You're lost."),c.a.createElement("p",{className:"text-muted float-left"},"The page you are looking for was not found.")),c.a.createElement(R.a,{className:"input-prepend"},c.a.createElement(d.a,{addonType:"prepend"},c.a.createElement(h.a,null,c.a.createElement("i",{className:"fa fa-search"}))),c.a.createElement(y.a,{size:"16",type:"text",placeholder:"What are you looking for?"}),c.a.createElement(d.a,{addonType:"append"},c.a.createElement(f.a,{color:"info"},"Search")))))))}}]),t}(u.Component);t.default=m}}]);
//# sourceMappingURL=34.88d0e634.chunk.js.map