package helper.caching.chat;

import helper.caching.IPushToCache;

import java.util.Date;

class Message  {
    String senderId;
    String msg;
    String typeMsg;
    Date sendTime;

    public Message(String senderId, String msg, String typeMsg, Date sendTime) {
        this.senderId = senderId;
        this.msg = msg;
        this.typeMsg = typeMsg;
        this.sendTime = sendTime;
    }
}