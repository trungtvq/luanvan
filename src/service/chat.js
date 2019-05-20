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

    this.fetchChat()
  }
  fetchChat = () => {

    const chatService = new proto.chat.ChatClient('https://www.overlead.co');
    var metadata = {};

    var SendMsgReq = new proto.chat.SendMsgReq();
    SendMsgReq.setRequesterid(cookie.load("userId"));
    SendMsgReq.setAccesstoken(cookie.load("accessToken"));
    SendMsgReq.setChannelid("5ce16a8aef2aa3092c1ccecf");
    //SendMsgReq.setChannelid(cookie.load("currentProject"));
    SendMsgReq.setName(cookie.load("name"))
    var response = chatService.connectChat(SendMsgReq, metadata)
    let that = this
    response.on('data', function (response) {
      console.log(response.getStatus())
      addResponseMessage(response.getSendername() + " said: " + response.getMsg());
      console.log("response" + response.getMsg())
      if (response.getStatus=="SUCCESS") that.fetchChat()
    })

    response.on('status', function (status) {
      console.log(status.code)
    })

    response.on('end', function (end) {
      console.log("end")
    })
  }
  componentWillUnmount(){
  }
  handleNewUserMessage = (newMessage) => {
    const chatService = new proto.chat.ChatClient('https://www.overlead.co');
    var metadata = {};

    var SendMsgReq = new proto.chat.SendMsgReq();
    SendMsgReq.setRequesterid(cookie.load("userId"));
    SendMsgReq.setAccesstoken(cookie.load("accessToken"));
    SendMsgReq.setChannelid("5ce16a8aef2aa3092c1ccecf");
    SendMsgReq.setName(cookie.load("name"))
    SendMsgReq.setMsg(newMessage)
    addResponseMessage("tests");

    chatService.sendMsg(SendMsgReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
      } else {
        console.log(response.getStatus())
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Widget
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