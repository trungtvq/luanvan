import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';
import logo from '../assets/img/brand/logo.png';
import cookie from 'react-cookies';
import {
  getFromStorage,
  setInStorage
} from '../service/storage'
const proto = {};

proto.chat = require('./../gRPC/chat/chat_grpc_web_pb');
class Chat extends Component {
  componentDidMount() {

    this.fetchChat()
  }
  fetchChat = () => {
    console.log("fetchChat")
    const chatService = new proto.chat.ChatClient('https://www.overlead.co');
    var metadata = {};

    var SendMsgReq = new proto.chat.SendMsgReq();
    SendMsgReq.setRequesterid(getFromStorage("userId"));
    SendMsgReq.setAccesstoken(getFromStorage("accessToken"));
    SendMsgReq.setChannelid(getFromStorage("teamId"));
    //SendMsgReq.setChannelid(getFromStorage("currentProject"));
    SendMsgReq.setName(getFromStorage("name"))
    let that = this
    

    chatService.connectChat(SendMsgReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error")
        that.fetchChat()
      } else { //if success
        //get response
        if (response.getStatus() == "SUCCESS") {
          addResponseMessage(response.getSendername() + " said: " + response.getMsg());
          that.fetchChat()
          
        } else {
          that.fetchChat()

        }
      }
    });
  }
  componentWillUnmount(){
  }
  handleNewUserMessage = (newMessage) => {
    const chatService = new proto.chat.ChatClient('https://www.overlead.co');
    var metadata = {};

    var SendMsgReq = new proto.chat.SendMsgReq();
    SendMsgReq.setRequesterid(getFromStorage("userId"));
    SendMsgReq.setAccesstoken(getFromStorage("accessToken"));
    SendMsgReq.setChannelid(getFromStorage("currentProject"));
    SendMsgReq.setName(getFromStorage("name"))
    SendMsgReq.setMsg(newMessage)

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
          profileAvatar={getFromStorage("avatar")}
          title={'Conversation team "'+ getFromStorage("teamName")+'"'}
          subtitle="Let's help your team"
        />
      </div>
    );
  }
}
export default Chat;