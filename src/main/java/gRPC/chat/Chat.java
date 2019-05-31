package gRPC.chat;

import co.overlead.gRPC.*;
import io.grpc.stub.StreamObserver;
import service.pubsub.Event;
import service.pubsub.Message;
import service.pubsub.Subscriber;
import service.pubsub.UserMessageQueue;

import java.util.*;

import static helper.auth.RequestAuth.isValidAuth;

public class Chat {
    public static HashMap<String, Message> newMessage = new HashMap<>();

    public static class ChatImpl extends ChatGrpc.ChatImplBase {
        HashMap<String, Subscriber> projectSub = new HashMap<>();


        public void publishMsg(String userId, String projectId, String msg, String name) {
            Message message = new Message(msg, name, userId);
            Event.operation.publish(projectId, message);
        }


        @Override
        public void connectRenew(SendMsgReq request, StreamObserver<SendMsgRes> responseObserver) {
            responseObserver.onNext(SendMsgRes.newBuilder().setMsg("renew").build());
            responseObserver.onCompleted();

        }

        @Override
        public void connectChat(SendMsgReq request, StreamObserver<SendMsgRes> responseObserver) {
            System.out.println("connectChat");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                responseObserver.onNext(SendMsgRes.newBuilder().setStatus("AUTH_INVALID").build());
                responseObserver.onCompleted();
            } else {
                System.out.println(projectSub.containsKey(request.getChannelId()));
                if (projectSub.containsKey(request.getChannelId()) == false) {
                    UserMessageQueue queue = new UserMessageQueue(request.getRequesterId(), request.getChannelId(), responseObserver);
                    Subscriber subscriber = new Subscriber(request.getChannelId(), request.getRequesterId(), queue);
                    projectSub.put(request.getChannelId(), subscriber);
                    Event.operation.subscribe(request.getChannelId(), subscriber);


                } else {//contain project channel
                    if (!projectSub.get(request.getChannelId()).userQueue.containsKey(request.getRequesterId())) {
                        UserMessageQueue queue = new UserMessageQueue(request.getRequesterId(), request.getChannelId(), responseObserver);

                        projectSub.get(request.getChannelId()).addUserSubToProject(request.getRequesterId(), queue);

                    } else {//reset time
                        projectSub.get(request.getChannelId()).getUserQueue().get(request.getRequesterId()).updateResponse(responseObserver);
                    }
                }
            }
        }


        @Override
        public void sendMsg(SendMsgReq request, StreamObserver<SendMsgRes> responseObserver) {
            System.out.println("sendMsg");
            System.out.println(request.getChannelId());
            System.out.println(request.getRequesterId());
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                responseObserver.onNext(SendMsgRes.newBuilder().setStatus("AUTH_INVALID").build());
                responseObserver.onCompleted();
            } else {
                publishMsg(request.getRequesterId(), request.getChannelId(), request.getMsg(), request.getName());
                responseObserver.onNext(SendMsgRes.newBuilder().setStatus("SUCCESS").build());
                responseObserver.onCompleted();
            }
        }
    }
}
