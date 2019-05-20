package service.pubsub;

import co.overlead.gRPC.SendMsgRes;
import com.sun.jmx.remote.internal.ArrayQueue;
import io.grpc.stub.StreamObserver;

import java.util.*;

public class UserMessageQueue{
    Queue<Message> list;
    Long time;
    int position;
    String projectId;
    String userId;
    public StreamObserver<SendMsgRes> getResponseObserver() {
        return responseObserver;
    }

    StreamObserver<SendMsgRes> responseObserver;
    public int getPosition() {
        return position;
    }
    public void increasePosition(){
        position++;
    }

    public Queue<Message> getList() {
        return list;
    }
    public void updateResponse(StreamObserver<SendMsgRes> responseObserver){
        this.responseObserver.onCompleted();
        this.responseObserver=responseObserver;
    }

    public String getProjectId() {
        return projectId;
    }

    public String getUserId() {
        return userId;
    }

    public UserMessageQueue(String userId, String projectId, StreamObserver<SendMsgRes> responseObserver){
        time=new Date().getTime();
        list= new LinkedList<>();
        this.responseObserver=responseObserver;
        this.projectId=projectId;
        this.userId=userId;
    }
    public int getSize(){
        return list.size();
    }
    public boolean isValid(){
        return new Date().getTime()-time>60000000;
    }
    public void resetTime(){
        this.time=new Date().getTime();
    }
    public void pushMessage(Message newMessage){
        list.add(newMessage);
    }
}