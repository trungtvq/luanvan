package helper.caching.chat;

import com.mongodb.internal.connection.Time;
import helper.caching.IAddNew;
import helper.caching.IPopToDB;
import helper.caching.IPushToCache;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

class Conversation implements IAddNew, IPopToDB, IPushToCache {
    String idConversation;
    String requesterId;
    List<String> members;
    String title;
    String link;
    Date lastMessage;
    List<Message> messages;
//
    public static List<Conversation> list=new ArrayList<>();
    public Conversation(String idConversation, String requesterId, String title, String link, Date lastMessage) {
        this.idConversation = idConversation;
        this.requesterId = requesterId;
        this.title = title;
        this.link = link;
        this.lastMessage = lastMessage;
    }

    public String getIdConversation() {
        return idConversation;
    }

    public void setIdConversation(String idConversation) {
        this.idConversation = idConversation;
    }

    public String getRequesterId() {
        return requesterId;
    }

    public void setRequesterId(String requesterId) {
        this.requesterId = requesterId;
    }

    public List<String> getMembers() {
        return members;
    }

    public boolean addMember(String members) {
        if (this.members.indexOf(members)!=1)
        {
            this.members.add(members);
            return true;
        } else{
            return false;
        }
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Date getLastMessage() {
        return lastMessage;
    }

    public void setLastMessage(Date lastMessage) {
        this.lastMessage = lastMessage;
    }

    @Override
    public boolean addNew(String idConversation, String requesterId, String title, String link, Date lastMessage) {
        //TODO: Modify for condition
        list.add(new Conversation(idConversation, requesterId, title, link, lastMessage));
        return true;
    }

    @Override
    public void popToDB() {
        list.removeIf(i->{
            if(System.currentTimeMillis()- lastMessage.getTime()>600000){
                //TODO: Impl in database
                return true;
            }
            return false;
        });
    }

    @Override
    public void pushToCache(String requesterId, String channelId, String msg, String type) {
        list.forEach(i->{
            if (i.idConversation==channelId){
                i.messages.add(new Message(requesterId,msg,type,new Date()));
                i.lastMessage=new Date();
            }
        });
    }
    //

}