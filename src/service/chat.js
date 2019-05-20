import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import logo from '../assets/img/brand/logo.png';
import cookie from 'react-cookies';

const proto = {};

proto.chat = require('./../gRPC/chat/chat_grpc_web_pb');
class Chat extends Component {
    componentDidMount() {
      addResponseMessage("Welcome to this awesome chat!");
      const chatService =new proto.chat.ChatClient('https://www.overlead.co');
      var metadata = {};

     var SendMsgReq=new proto.chat.SendMsgReq();
     SendMsgReq.setRequesterid(cookie.load("userId"));
     SendMsgReq.setAccesstoken(cookie.load("accessToken"));
     SendMsgReq.setChannelid(cookie.load("currentProject"));
     SendMsgReq.setName(cookie.load("name"))
    //  var responseChat = chatService.connectChat(SendMsgReq,metadata)
  
    //  responseChat.on('data',function(responseChat){
    //       addResponseMessage(responseChat.getName()+" said: "+ responseChat.getMsg());
    //   })
  
    //   responseChat.on('status',function(status){
    //     console.log("client connect")
    //   })
  
    //   responseChat.on('end',function(end){
    //     console.log("client end")
    //   })
    }
    addResponseMessage=(res)=>{
      
    }
    handleNewUserMessage = (newMessage) => {
      console.log(`New message incoming! ${newMessage}`);
            // Now send the message throught the backend API    
    }
  
    render() {
      return (
        <div className="App">
          <Widget
            handleNewUserMessage={this.handleNewUserMessage}
            handleNewUserMessage={this.handleNewUserMessage}
            profileAvatar={logo}
            title="My new awesome title"
            subtitle="And my cool subtitle"
          />
        </div>
      );
    } 
  }
  export default Chat;