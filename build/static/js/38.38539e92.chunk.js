(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{105:function(e,t,r){"use strict";var o=r(15),s=r(18),a=r(3),n=r.n(a),i=r(2),l=r.n(i),u=r(89),d=r.n(u),y=r(91),c={tag:y.m,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},p=function(e){var t=e.className,r=e.cssModule,a=e.noGutters,i=e.tag,l=e.form,u=Object(s.a)(e,["className","cssModule","noGutters","tag","form"]),c=Object(y.i)(d()(t,a?"no-gutters":null,l?"form-row":"row"),r);return n.a.createElement(i,Object(o.a)({},u,{className:c}))};p.propTypes=c,p.defaultProps={tag:"div"},t.a=p},118:function(e,t,r){"use strict";var o=r(15),s=r(18),a=r(3),n=r.n(a),i=r(2),l=r.n(i),u=r(89),d=r.n(u),y=r(91),c={tag:y.m,inverse:l.a.bool,color:l.a.string,block:Object(y.e)(l.a.bool,'Please use the props "body"'),body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},p=function(e){var t=e.className,r=e.cssModule,a=e.color,i=e.block,l=e.body,u=e.inverse,c=e.outline,p=e.tag,g=e.innerRef,S=Object(s.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),m=Object(y.i)(d()(t,"card",!!u&&"text-white",!(!i&&!l)&&"card-body",!!a&&(c?"border":"bg")+"-"+a),r);return n.a.createElement(p,Object(o.a)({},S,{className:m,ref:g}))};p.propTypes=c,p.defaultProps={tag:"div"},t.a=p},289:function(e,t,r){"use strict";function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(t,"a",function(){return o})},371:function(e,t,r){"use strict";r.r(t);var o=r(289),s=r(133),a=r(24),n=r(25),i=r(27),l=r(26),u=r(28),d=r(29),y=r(3),c=r.n(y),p=r(105),g=r(845),S=r(822),m=r(139),U=r(159),h=r(140),f=r(118),R=r(821),b=r(245),w=r(246),E=r(173),A=r(823),C=r(16),M=r.n(C),q=(r(7),r(31)),v={};v.userstory=r(809);var F=function(e){function t(e){var r;return Object(a.a)(this,t),(r=Object(i.a)(this,Object(l.a)(t).call(this,e))).resetAddForm=function(){r.setState(Object(s.a)({},r.state,{name:"",as:"",want:"",so:""}))},r.toggleActionStatus=function(){r.setState(function(e){return{modalActionStatus:!e.modalActionStatus}})},r.onTextboxChangenameUpdate=function(e){r.setState({nameUpdate:e.target.value})},r.onTextboxChangeasUpdate=function(e){r.setState({asUpdate:e.target.value})},r.onTextboxChangewantUpdate=function(e){r.setState({wantUpdate:e.target.value})},r.onTextboxChangesoUpdate=function(e){r.setState({soUpdate:e.target.value})},r.onTextboxChangeUserStoryIdUpdate=function(e){r.setState({userstoryIdUpdate:e.target.value})},r.onTextboxChangeUserStoryIdDelete=function(e){r.setState({userstoryIdDelete:e.target.value})},r.onGetUpdate=function(e,t,o,s,a){r.setState({rouserstoryIdUpdate:e,asUpdate:o,wantUpdate:s,soUpdate:a,nameUpdate:t})},r.handleAdd=function(){console.log("handleAdd");var e=new v.userstory.UserStoryClient("https://www.overlead.co");console.log(e);var t=new v.userstory.AddNewUserStoryReq;t.setName(r.state.name),t.setAdderid(M.a.load("userId")),t.setProjectid(r.props.projectId),t.setRole(r.state.as),t.setWant(r.state.want),t.setSo(r.state.so),t.setCookie(r.state.cookie);e.addNewUserStory(t,{},function(e,t){console.log("connect"),e?(console.log(e),console.log("error")):(console.log("response"),console.log(t),"SUCCESS"==t.getStatus()?(r.setState(function(e){return{modalAdd:!e.modalAdd}}),r.setState(function(e){return{data:[].concat(Object(o.a)(e.data),[{id:t.getId(),name:r.state.name,as:r.state.as,want:r.state.want,so:r.state.so}])}}),r.setState({name:"",as:"",want:"",so:"",modalActionStatus:!0,actionStatus:"SUCCESS"})):r.setState({modalActionStatus:!0,actionStatus:"FALSE"}))})},r.handleDelete=function(e){console.log("handleDelete");var t=new v.userstory.UserStoryClient("https://www.overlead.co");console.log(t);var s=new v.userstory.DeleteUserStoryReq;s.setDeleterid(r.state.requesterId),s.setProjectid(r.props.projectId),s.setUserstoryid(r.state.userstoryIdDelete),s.setCookie(r.state.cookie);t.deleteUserStory(s,{},function(t,s){console.log("connect"),t?(console.log(t),console.log("error"),console.log(s)):(console.log("response"),console.log(s),"SUCCESS"==s.getStatus()?(r.setState({actionStatus:"SUCCESS",modalActionStatus:!0}),r.setState(function(t){return{data:Object(o.a)(t.data.filter(function(t){return t.id!==e}))}})):(r.setState({actionStatus:"FALSE"}),r.setState(function(e){return{modalActionStatus:!e.modalActionStatus}})))})},r.handleUpdate=function(){console.log("handleUpdate");var e=new v.userstory.UserStoryClient("https://www.overlead.co");console.log(e);var t=new v.userstory.UpdateUserStoryReq;t.setUpdaterid(r.state.requesterId),t.setProjectid(r.props.projectId),t.setUserstoryid(r.state.userstoryIdUpdate),t.setRole(r.state.asUpdate),t.setWant(r.state.wantUpdate),t.setSo(r.state.soUpdate),t.setCookie(r.state.cookie);var o=e.updateUserStory(t,{},function(e,t){if(console.log("connect"),e)console.log(e),console.log("error");else if(console.log("response"),console.log(t),console.log(t.getStatus()),"SUCCESS"==t.getStatus()){r.setState({actionStatus:"SUCCESS"}),r.setState(function(e){return{modalEdit:!e.modalEdit,modalActionStatus:!e.modalActionStatus}});var o=r.state.data.map(function(e){return e.id===r.state.userstoryIdUpdate?Object(s.a)({},e,{name:r.state.nameUpdate,as:r.state.asUpdate,want:r.state.wantUpdate,so:r.state.so}):e});r.setState({data:o})}else r.setState({actionStatus:"FALSE"}),r.setState(function(e){return{modalEdit:!e.modalEdit,modalActionStatus:!e.modalActionStatus}})});console.log(o)},r.toggleAdd=r.toggleAdd.bind(Object(d.a)(Object(d.a)(r))),r.toggleEdit=r.toggleEdit.bind(Object(d.a)(Object(d.a)(r))),r.onTextboxChangename=r.onTextboxChangename.bind(Object(d.a)(Object(d.a)(r))),r.onTextboxChangeas=r.onTextboxChangeas.bind(Object(d.a)(Object(d.a)(r))),r.onTextboxChangewant=r.onTextboxChangewant.bind(Object(d.a)(Object(d.a)(r))),r.onTextboxChangeso=r.onTextboxChangeso.bind(Object(d.a)(Object(d.a)(r))),r.state={data:[{id:"1",name:"a",as:"admin",want:"See a list of all members and visitors",so:"I can monitor site visits"},{id:"2",name:"a",as:"admin",want:"Add new categories",so:"I can allow members to create engaging content"},{id:"3",name:"a",as:"admin",want:"Add new security groups",so:"Security levels are approriate"},{id:"4",name:"a",as:"admin",want:"Delete comment",so:"Offensive content is removed"},{id:5,name:"a",as:"admin",want:"Add new key words",so:"Content is easy to groups and search for"},{id:"6",name:"a",as:"member",want:"Update my account detail",so:"I can be contacted by admin"}],requesterId:"",projectId:"",cookie:"",actionStatus:"",modalAdd:!1,modalEdit:!1,modalActionStatus:!1,name:"",as:"",want:"",so:"",userstoryIdUpdate:"",nameUpdate:"",asUpdate:"",wantUpdate:"",soUpdate:"",userstoryIdDelete:""},r}return Object(u.a)(t,e),Object(n.a)(t,[{key:"toggleAdd",value:function(){this.resetAddForm(),this.setState(function(e){return{modalAdd:!e.modalAdd}})}},{key:"toggleEdit",value:function(){this.setState(function(e){return{modalEdit:!e.modalEdit}})}},{key:"onTextboxChangename",value:function(e){this.setState({name:e.target.value})}},{key:"onTextboxChangeas",value:function(e){this.setState({as:e.target.value})}},{key:"onTextboxChangewant",value:function(e){this.setState({want:e.target.value})}},{key:"onTextboxChangeso",value:function(e){this.setState({so:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.data,r=e.name,o=e.as,s=e.want,a=e.so,n=this;return c.a.createElement(p.a,null,c.a.createElement(g.a,{size:"sm",isOpen:n.state.modalActionStatus,toggle:n.toggleActionStatus,className:n.props.className},c.a.createElement(S.a,null,c.a.createElement("center",null,c.a.createElement("h4",null,n.state.actionStatus)))),c.a.createElement(m.a,null,c.a.createElement(p.a,null,c.a.createElement(m.a,{xs:"2",md:"2"},c.a.createElement(U.a,{type:"text",id:"text-input",name:"text-input",placeholder:"Search"})),c.a.createElement(m.a,{xs:"0",md:"0"},c.a.createElement(h.a,{type:"submit",size:"sm",color:"success"},c.a.createElement("i",{class:"fa fa-search"})))),c.a.createElement(f.a,null,c.a.createElement("div",{class:"table-responsive"},c.a.createElement("table",{class:"table table-lg"},c.a.createElement("thead",{class:"thead"},c.a.createElement("tr",{class:"bg-primary"},c.a.createElement("th",null,"Name",c.a.createElement("i",{class:"fa fa-sort"})),c.a.createElement("th",null,"As a...",c.a.createElement("i",{class:"fa fa-sort"})),c.a.createElement("th",null,"I want to be able to... ",c.a.createElement("i",{class:"fa fa-sort"})),c.a.createElement("th",null,"So that... ",c.a.createElement("i",{class:"fa fa-sort"})),c.a.createElement("th",null,c.a.createElement("div",null,c.a.createElement(h.a,{color:"primary",size:"sm",className:"mt-3",onClick:n.toggleAdd},c.a.createElement("i",{class:"fa fa-plus-square"}),this.props.buttonLabel),c.a.createElement(g.a,{size:"lg",isOpen:n.state.modalAdd,toggle:n.toggleAdd},c.a.createElement(R.a,{toggle:n.toggleAdd},"UserStory"),c.a.createElement(S.a,null,c.a.createElement(b.a,{className:"form-horizontal"},c.a.createElement(w.a,{row:!0},c.a.createElement(m.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"text-input"},"Name")),c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(U.a,{type:"text",id:"name",name:"name",placeholder:"name",value:r,onChange:n.onTextboxChangename}))),c.a.createElement(w.a,{row:!0},c.a.createElement(m.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"text-input"},"As a...")),c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(U.a,{type:"text",id:"as",name:"as",placeholder:"As a...",value:o,onChange:n.onTextboxChangeas}))),c.a.createElement(w.a,{row:!0},c.a.createElement(m.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"text-input"},"I want to be able to...")),c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(U.a,{type:"text",id:"want",name:"want",placeholder:"I want to be able to...",value:s,onChange:n.onTextboxChangewant}))),c.a.createElement(w.a,{row:!0},c.a.createElement(m.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"textarea-input"},"So that...")),c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(U.a,{type:"textarea",name:"so",id:"so",rows:"9",placeholder:"Content...",value:a,onChange:n.onTextboxChangeso}))))),c.a.createElement(A.a,null,c.a.createElement(h.a,{color:"primary",onClick:n.handleAdd},"Submit"),c.a.createElement(h.a,{color:"secondary",onClick:n.toggleAdd},"Cancel"))))))),c.a.createElement("tbody",null,t.map(function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.as),c.a.createElement("td",null,e.want),c.a.createElement("td",null,e.so),c.a.createElement("td",null,c.a.createElement(h.a,{color:"warning",size:"sm",onClick:function(t){n.toggleEdit(),n.onGetUpdate(e.id,e.name,e.as,e.want,e.so)}},c.a.createElement("i",{class:"fa fa-edit"})),c.a.createElement(g.a,{size:"lg",isOpen:n.state.modalEdit,toggle:n.toggleEdit},c.a.createElement(R.a,{toggle:n.toggleEdit},"UserStory"),c.a.createElement(S.a,null,c.a.createElement(b.a,{className:"form-horizontal"},c.a.createElement(w.a,{row:!0},c.a.createElement(m.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"text-input"},"Name")),c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(U.a,{type:"text",id:"name",name:"name",placeholder:"name",value:e.name,onChange:n.onTextboxChangename}))),c.a.createElement(w.a,{row:!0},c.a.createElement(m.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"text-input"},"As a...")),c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(U.a,{type:"text",id:"as",name:"as",placeholder:"As a...",value:e.role,onChange:n.onTextboxChangeas}))),c.a.createElement(w.a,{row:!0},c.a.createElement(m.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"text-input"},"I want to be able to...")),c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(U.a,{type:"text",id:"want",name:"want",placeholder:"I want to be able to...",value:e.want,onChange:n.onTextboxChangewant}))),c.a.createElement(w.a,{row:!0},c.a.createElement(m.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"textarea-input"},"So that...")),c.a.createElement(m.a,{xs:"12",md:"9"},c.a.createElement(U.a,{type:"textarea",name:"so",id:"so",rows:"9",placeholder:"Content...",value:e.so,onChange:n.onTextboxChangeso}))))),c.a.createElement(A.a,null,c.a.createElement(h.a,{color:"primary",onClick:n.handleUpdate},"Submit")," ",c.a.createElement(h.a,{color:"secondary",onClick:n.toggleEdit},"Cancel"))),c.a.createElement(h.a,{type:"submit",size:"sm",color:"danger",onClick:function(t){n.handleDelete(e.id)}},c.a.createElement("i",{class:"fa fa-trash"}))))})))))))}}]),t}(y.Component);t.default=Object(q.b)(function(e){var t=e.changeStatusProject;return{projectId:t.projectId,projectName:t.projectName}})(F)},809:function(e,t,r){var o={};o.web=r(42);var s={};s.userstory=r(810),s.userstory.UserStoryClient=function(e,t,r){r||(r={}),r.format="text",this.client_=new o.web.GrpcWebClientBase(r),this.hostname_=e,this.credentials_=t,this.options_=r},s.userstory.UserStoryPromiseClient=function(e,t,r){r||(r={}),r.format="text",this.client_=new o.web.GrpcWebClientBase(r),this.hostname_=e,this.credentials_=t,this.options_=r};var a=new o.web.AbstractClientBase.MethodInfo(s.userstory.UserStoryRes,function(e){return e.serializeBinary()},s.userstory.UserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.addNewUserStory=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/userstory.UserStory/addNewUserStory",e,t||{},a,r)},s.userstory.UserStoryPromiseClient.prototype.addNewUserStory=function(e,t){return this.client_.unaryCall(this.hostname_+"/userstory.UserStory/addNewUserStory",e,t||{},a)};var n=new o.web.AbstractClientBase.MethodInfo(s.userstory.UserStoryRes,function(e){return e.serializeBinary()},s.userstory.UserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.updateUserStory=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/userstory.UserStory/updateUserStory",e,t||{},n,r)},s.userstory.UserStoryPromiseClient.prototype.updateUserStory=function(e,t){return this.client_.unaryCall(this.hostname_+"/userstory.UserStory/updateUserStory",e,t||{},n)};var i=new o.web.AbstractClientBase.MethodInfo(s.userstory.UserStoryRes,function(e){return e.serializeBinary()},s.userstory.UserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.deleteUserStory=function(e,t,r){return this.client_.rpcCall(this.hostname_+"/userstory.UserStory/deleteUserStory",e,t||{},i,r)},s.userstory.UserStoryPromiseClient.prototype.deleteUserStory=function(e,t){return this.client_.unaryCall(this.hostname_+"/userstory.UserStory/deleteUserStory",e,t||{},i)};var l=new o.web.AbstractClientBase.MethodInfo(s.userstory.GetAllUserStoryRes,function(e){return e.serializeBinary()},s.userstory.GetAllUserStoryRes.deserializeBinary);s.userstory.UserStoryClient.prototype.getAllUserStory=function(e,t){return this.client_.serverStreaming(this.hostname_+"/userstory.UserStory/getAllUserStory",e,t||{},l)},s.userstory.UserStoryPromiseClient.prototype.getAllUserStory=function(e,t){return this.client_.serverStreaming(this.hostname_+"/userstory.UserStory/getAllUserStory",e,t||{},l)},e.exports=s.userstory},810:function(e,t,r){var o=r(43),s=o,a=Function("return this")();s.exportSymbol("proto.userstory.AddNewUserStoryReq",null,a),s.exportSymbol("proto.userstory.DeleteUserStoryReq",null,a),s.exportSymbol("proto.userstory.GetAllUserStoryReq",null,a),s.exportSymbol("proto.userstory.GetAllUserStoryRes",null,a),s.exportSymbol("proto.userstory.UpdateUserStoryReq",null,a),s.exportSymbol("proto.userstory.UserStoryRes",null,a),proto.userstory.AddNewUserStoryReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.AddNewUserStoryReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.AddNewUserStoryReq.displayName="proto.userstory.AddNewUserStoryReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.AddNewUserStoryReq.prototype.toObject=function(e){return proto.userstory.AddNewUserStoryReq.toObject(e,this)},proto.userstory.AddNewUserStoryReq.toObject=function(e,t){var r={name:t.getName(),adderid:t.getAdderid(),projectid:t.getProjectid(),role:t.getRole(),want:t.getWant(),so:t.getSo(),cookie:t.getCookie()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.AddNewUserStoryReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.AddNewUserStoryReq;return proto.userstory.AddNewUserStoryReq.deserializeBinaryFromReader(r,t)},proto.userstory.AddNewUserStoryReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 7:var r=t.readString();e.setName(r);break;case 1:r=t.readString();e.setAdderid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setRole(r);break;case 4:r=t.readString();e.setWant(r);break;case 5:r=t.readString();e.setSo(r);break;case 6:r=t.readString();e.setCookie(r);break;default:t.skipField()}}return e},proto.userstory.AddNewUserStoryReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.AddNewUserStoryReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.AddNewUserStoryReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getName()).length>0&&e.writeString(7,t),(t=this.getAdderid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getRole()).length>0&&e.writeString(3,t),(t=this.getWant()).length>0&&e.writeString(4,t),(t=this.getSo()).length>0&&e.writeString(5,t),(t=this.getCookie()).length>0&&e.writeString(6,t)},proto.userstory.AddNewUserStoryReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.AddNewUserStoryReq.prototype.getName=function(){return o.Message.getFieldProto3(this,7,"")},proto.userstory.AddNewUserStoryReq.prototype.setName=function(e){o.Message.setField(this,7,e)},proto.userstory.AddNewUserStoryReq.prototype.getAdderid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.AddNewUserStoryReq.prototype.setAdderid=function(e){o.Message.setField(this,1,e)},proto.userstory.AddNewUserStoryReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.AddNewUserStoryReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.AddNewUserStoryReq.prototype.getRole=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.AddNewUserStoryReq.prototype.setRole=function(e){o.Message.setField(this,3,e)},proto.userstory.AddNewUserStoryReq.prototype.getWant=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.AddNewUserStoryReq.prototype.setWant=function(e){o.Message.setField(this,4,e)},proto.userstory.AddNewUserStoryReq.prototype.getSo=function(){return o.Message.getFieldProto3(this,5,"")},proto.userstory.AddNewUserStoryReq.prototype.setSo=function(e){o.Message.setField(this,5,e)},proto.userstory.AddNewUserStoryReq.prototype.getCookie=function(){return o.Message.getFieldProto3(this,6,"")},proto.userstory.AddNewUserStoryReq.prototype.setCookie=function(e){o.Message.setField(this,6,e)},proto.userstory.UserStoryRes=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.UserStoryRes,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.UserStoryRes.displayName="proto.userstory.UserStoryRes"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.UserStoryRes.prototype.toObject=function(e){return proto.userstory.UserStoryRes.toObject(e,this)},proto.userstory.UserStoryRes.toObject=function(e,t){var r={status:t.getStatus(),id:t.getId(),error:t.getError()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.UserStoryRes.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.UserStoryRes;return proto.userstory.UserStoryRes.deserializeBinaryFromReader(r,t)},proto.userstory.UserStoryRes.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setStatus(r);break;case 2:r=t.readString();e.setId(r);break;case 3:r=t.readString();e.setError(r);break;default:t.skipField()}}return e},proto.userstory.UserStoryRes.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.UserStoryRes.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.UserStoryRes.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getStatus()).length>0&&e.writeString(1,t),(t=this.getId()).length>0&&e.writeString(2,t),(t=this.getError()).length>0&&e.writeString(3,t)},proto.userstory.UserStoryRes.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.UserStoryRes.prototype.getStatus=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.UserStoryRes.prototype.setStatus=function(e){o.Message.setField(this,1,e)},proto.userstory.UserStoryRes.prototype.getId=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.UserStoryRes.prototype.setId=function(e){o.Message.setField(this,2,e)},proto.userstory.UserStoryRes.prototype.getError=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.UserStoryRes.prototype.setError=function(e){o.Message.setField(this,3,e)},proto.userstory.UpdateUserStoryReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.UpdateUserStoryReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.UpdateUserStoryReq.displayName="proto.userstory.UpdateUserStoryReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.UpdateUserStoryReq.prototype.toObject=function(e){return proto.userstory.UpdateUserStoryReq.toObject(e,this)},proto.userstory.UpdateUserStoryReq.toObject=function(e,t){var r={updaterid:t.getUpdaterid(),projectid:t.getProjectid(),userstoryid:t.getUserstoryid(),role:t.getRole(),want:t.getWant(),so:t.getSo(),cookie:t.getCookie()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.UpdateUserStoryReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.UpdateUserStoryReq;return proto.userstory.UpdateUserStoryReq.deserializeBinaryFromReader(r,t)},proto.userstory.UpdateUserStoryReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setUpdaterid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setUserstoryid(r);break;case 4:r=t.readString();e.setRole(r);break;case 5:r=t.readString();e.setWant(r);break;case 6:r=t.readString();e.setSo(r);break;case 7:r=t.readString();e.setCookie(r);break;default:t.skipField()}}return e},proto.userstory.UpdateUserStoryReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.UpdateUserStoryReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.UpdateUserStoryReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getUpdaterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getUserstoryid()).length>0&&e.writeString(3,t),(t=this.getRole()).length>0&&e.writeString(4,t),(t=this.getWant()).length>0&&e.writeString(5,t),(t=this.getSo()).length>0&&e.writeString(6,t),(t=this.getCookie()).length>0&&e.writeString(7,t)},proto.userstory.UpdateUserStoryReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.UpdateUserStoryReq.prototype.getUpdaterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.UpdateUserStoryReq.prototype.setUpdaterid=function(e){o.Message.setField(this,1,e)},proto.userstory.UpdateUserStoryReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.UpdateUserStoryReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.UpdateUserStoryReq.prototype.getUserstoryid=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.UpdateUserStoryReq.prototype.setUserstoryid=function(e){o.Message.setField(this,3,e)},proto.userstory.UpdateUserStoryReq.prototype.getRole=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.UpdateUserStoryReq.prototype.setRole=function(e){o.Message.setField(this,4,e)},proto.userstory.UpdateUserStoryReq.prototype.getWant=function(){return o.Message.getFieldProto3(this,5,"")},proto.userstory.UpdateUserStoryReq.prototype.setWant=function(e){o.Message.setField(this,5,e)},proto.userstory.UpdateUserStoryReq.prototype.getSo=function(){return o.Message.getFieldProto3(this,6,"")},proto.userstory.UpdateUserStoryReq.prototype.setSo=function(e){o.Message.setField(this,6,e)},proto.userstory.UpdateUserStoryReq.prototype.getCookie=function(){return o.Message.getFieldProto3(this,7,"")},proto.userstory.UpdateUserStoryReq.prototype.setCookie=function(e){o.Message.setField(this,7,e)},proto.userstory.DeleteUserStoryReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.DeleteUserStoryReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.DeleteUserStoryReq.displayName="proto.userstory.DeleteUserStoryReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.DeleteUserStoryReq.prototype.toObject=function(e){return proto.userstory.DeleteUserStoryReq.toObject(e,this)},proto.userstory.DeleteUserStoryReq.toObject=function(e,t){var r={deleterid:t.getDeleterid(),projectid:t.getProjectid(),userstoryid:t.getUserstoryid(),cookie:t.getCookie()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.DeleteUserStoryReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.DeleteUserStoryReq;return proto.userstory.DeleteUserStoryReq.deserializeBinaryFromReader(r,t)},proto.userstory.DeleteUserStoryReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setDeleterid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setUserstoryid(r);break;case 4:r=t.readString();e.setCookie(r);break;default:t.skipField()}}return e},proto.userstory.DeleteUserStoryReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.DeleteUserStoryReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.DeleteUserStoryReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getDeleterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getUserstoryid()).length>0&&e.writeString(3,t),(t=this.getCookie()).length>0&&e.writeString(4,t)},proto.userstory.DeleteUserStoryReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.DeleteUserStoryReq.prototype.getDeleterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.DeleteUserStoryReq.prototype.setDeleterid=function(e){o.Message.setField(this,1,e)},proto.userstory.DeleteUserStoryReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.DeleteUserStoryReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.DeleteUserStoryReq.prototype.getUserstoryid=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.DeleteUserStoryReq.prototype.setUserstoryid=function(e){o.Message.setField(this,3,e)},proto.userstory.DeleteUserStoryReq.prototype.getCookie=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.DeleteUserStoryReq.prototype.setCookie=function(e){o.Message.setField(this,4,e)},proto.userstory.GetAllUserStoryReq=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.GetAllUserStoryReq,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.GetAllUserStoryReq.displayName="proto.userstory.GetAllUserStoryReq"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.GetAllUserStoryReq.prototype.toObject=function(e){return proto.userstory.GetAllUserStoryReq.toObject(e,this)},proto.userstory.GetAllUserStoryReq.toObject=function(e,t){var r={getterid:t.getGetterid(),projectid:t.getProjectid(),cookie:t.getCookie()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.GetAllUserStoryReq.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.GetAllUserStoryReq;return proto.userstory.GetAllUserStoryReq.deserializeBinaryFromReader(r,t)},proto.userstory.GetAllUserStoryReq.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setGetterid(r);break;case 2:r=t.readString();e.setProjectid(r);break;case 3:r=t.readString();e.setCookie(r);break;default:t.skipField()}}return e},proto.userstory.GetAllUserStoryReq.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.GetAllUserStoryReq.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.GetAllUserStoryReq.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getGetterid()).length>0&&e.writeString(1,t),(t=this.getProjectid()).length>0&&e.writeString(2,t),(t=this.getCookie()).length>0&&e.writeString(3,t)},proto.userstory.GetAllUserStoryReq.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.GetAllUserStoryReq.prototype.getGetterid=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.GetAllUserStoryReq.prototype.setGetterid=function(e){o.Message.setField(this,1,e)},proto.userstory.GetAllUserStoryReq.prototype.getProjectid=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.GetAllUserStoryReq.prototype.setProjectid=function(e){o.Message.setField(this,2,e)},proto.userstory.GetAllUserStoryReq.prototype.getCookie=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.GetAllUserStoryReq.prototype.setCookie=function(e){o.Message.setField(this,3,e)},proto.userstory.GetAllUserStoryRes=function(e){o.Message.initialize(this,e,0,-1,null,null)},s.inherits(proto.userstory.GetAllUserStoryRes,o.Message),s.DEBUG&&!COMPILED&&(proto.userstory.GetAllUserStoryRes.displayName="proto.userstory.GetAllUserStoryRes"),o.Message.GENERATE_TO_OBJECT&&(proto.userstory.GetAllUserStoryRes.prototype.toObject=function(e){return proto.userstory.GetAllUserStoryRes.toObject(e,this)},proto.userstory.GetAllUserStoryRes.toObject=function(e,t){var r={role:t.getRole(),want:t.getWant(),so:t.getSo(),status:t.getStatus(),error:t.getError()};return e&&(r.$jspbMessageInstance=t),r}),proto.userstory.GetAllUserStoryRes.deserializeBinary=function(e){var t=new o.BinaryReader(e),r=new proto.userstory.GetAllUserStoryRes;return proto.userstory.GetAllUserStoryRes.deserializeBinaryFromReader(r,t)},proto.userstory.GetAllUserStoryRes.deserializeBinaryFromReader=function(e,t){for(;t.nextField()&&!t.isEndGroup();){switch(t.getFieldNumber()){case 1:var r=t.readString();e.setRole(r);break;case 2:r=t.readString();e.setWant(r);break;case 3:r=t.readString();e.setSo(r);break;case 4:r=t.readString();e.setStatus(r);break;case 5:r=t.readString();e.setError(r);break;default:t.skipField()}}return e},proto.userstory.GetAllUserStoryRes.serializeBinaryToWriter=function(e,t){e.serializeBinaryToWriter(t)},proto.userstory.GetAllUserStoryRes.prototype.serializeBinary=function(){var e=new o.BinaryWriter;return this.serializeBinaryToWriter(e),e.getResultBuffer()},proto.userstory.GetAllUserStoryRes.prototype.serializeBinaryToWriter=function(e){var t=void 0;(t=this.getRole()).length>0&&e.writeString(1,t),(t=this.getWant()).length>0&&e.writeString(2,t),(t=this.getSo()).length>0&&e.writeString(3,t),(t=this.getStatus()).length>0&&e.writeString(4,t),(t=this.getError()).length>0&&e.writeString(5,t)},proto.userstory.GetAllUserStoryRes.prototype.cloneMessage=function(){return o.Message.cloneMessage(this)},proto.userstory.GetAllUserStoryRes.prototype.getRole=function(){return o.Message.getFieldProto3(this,1,"")},proto.userstory.GetAllUserStoryRes.prototype.setRole=function(e){o.Message.setField(this,1,e)},proto.userstory.GetAllUserStoryRes.prototype.getWant=function(){return o.Message.getFieldProto3(this,2,"")},proto.userstory.GetAllUserStoryRes.prototype.setWant=function(e){o.Message.setField(this,2,e)},proto.userstory.GetAllUserStoryRes.prototype.getSo=function(){return o.Message.getFieldProto3(this,3,"")},proto.userstory.GetAllUserStoryRes.prototype.setSo=function(e){o.Message.setField(this,3,e)},proto.userstory.GetAllUserStoryRes.prototype.getStatus=function(){return o.Message.getFieldProto3(this,4,"")},proto.userstory.GetAllUserStoryRes.prototype.setStatus=function(e){o.Message.setField(this,4,e)},proto.userstory.GetAllUserStoryRes.prototype.getError=function(){return o.Message.getFieldProto3(this,5,"")},proto.userstory.GetAllUserStoryRes.prototype.setError=function(e){o.Message.setField(this,5,e)},s.object.extend(t,proto.userstory)}}]);
//# sourceMappingURL=38.38539e92.chunk.js.map