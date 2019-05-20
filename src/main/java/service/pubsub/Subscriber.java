package service.pubsub;

import co.overlead.gRPC.SendMsgRes;

import java.util.HashMap;

public class Subscriber {
    String projectId;


    public String getProjectId() {
        return projectId;
    }

    public HashMap<String, UserMessageQueue> getUserQueue() {
        return userQueue;
    }

    public HashMap<String, UserMessageQueue> userQueue;
    public Subscriber(String projectId,String userId,UserMessageQueue queue) {
        this.projectId=projectId;
        this.userQueue =new HashMap<>();
        this.userQueue.put(userId,queue);
    }
    public void addUserSubToProject(String userId,UserMessageQueue queue){
        this.userQueue.put(userId,queue);
    }

    @OnMessage
    private void onMessage(Message message) {
        userQueue.forEach((i, queue)->{
            System.out.println(i);
            System.out.println(message.getUserId());
            if (!i.equals(message.getUserId())){
                queue.getResponseObserver().onNext(SendMsgRes.newBuilder()
                        .setMsg(message.getMessage())
                        .setSenderName(message.getName())
                        .setStatus("SUCCESS")
                        .setType("text")
                        .setChannelId(projectId)
                        .build());
                queue.getResponseObserver().onCompleted();
            }
        });
    }
}
