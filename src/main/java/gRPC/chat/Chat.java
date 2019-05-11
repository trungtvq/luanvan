package gRPC.chat;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.DeleteResult;
import database.Mongod;
import gRPC.auth.AuthAccount;
import io.grpc.stub.StreamObserver;
import org.bson.BsonArray;
import org.bson.BsonString;
import org.bson.Document;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Chat {
    public static class ChatImpl extends ChatGrpc.ChatImplBase{
        public static boolean isValidAuth(String id,String session){
            if (true) return true;
            return AuthAccount.AuthImpl.getSession(id,session);
        }
        public void makeResponseForUpdateSuccess(StreamObserver res,String id){
            res.onNext(SimpleChatRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setOption(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error){
            res.onNext(SimpleChatRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }

        @Override
        public void createChannelChat(CreateChannelChatReq request, StreamObserver<SimpleChatRes> responseObserver) {
            if (isValidAuth(request.getRequesterId(),request.getCookie())){
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("chat");
                Document document = new Document("ownerId", request.getRequesterId())
                        .append("title", request.getTitle())
                        //Todo: later link create, now just gen
                       .append("link", request.getLink());
                coll.insertOne(document);
                Document re=coll.find(new Document("link",request.getLink())).into(new ArrayList<>()).get(0);
                makeResponseForUpdateSuccess(responseObserver,re.get("_id").toString());
                //Todo: add new channel to subrice
            }else {
                makeResponseForFailed(responseObserver,"INVALID_AUTH","TRUE");
            }
        }

        @Override
        public void inviteChat(InviteChatReq request, StreamObserver<SimpleChatRes> responseObserver) {
            if (isValidAuth(request.getRequesterId(),request.getCookie())){
                MongoCollection<Document> collChat = Mongod.getOverleadConnection().getCollection("chat");
                MongoCollection<Document> collUser = Mongod.getOverleadConnection().getCollection("auth");

                List<Document> user=collUser.find(new Document("username",request.getUsername())).into(new ArrayList<>());

                if (collChat.find(new Document("_id",request.getChannelId())).into(new ArrayList<>()).get(0).get("members").toString().equals("")){
                    System.out.println("EMPTY");


                    if (user.size()==1){
                        Document bson= new Document("members", new BsonArray(Arrays.asList(new BsonString(user.get(0).get("_id").toString()))));
                        collChat.findOneAndUpdate(new Document("channelId",request.getChannelId()),bson);
                    }else{
                        makeResponseForFailed(responseObserver,"NOT_EXIST_USERNAME","FALSE");
                        return;
                    }

                } else{
                    System.out.println("NOT EMPTY=>INSERT");
                    Document updateQuery = new Document("$push", new Document("members",user.get(0).get("_id").toString()));
                    collChat.findOneAndUpdate(new Document("channelId",request.getChannelId()),updateQuery);
                }

            }else {
                makeResponseForFailed(responseObserver,"INVALID_AUTH","TRUE");
            }
        }

        @Override
        public void joinChat(JoinChatReq request, StreamObserver<SimpleChatRes> responseObserver) {
            if (isValidAuth(request.getRequesterId(),request.getCookie())){
                System.out.println("NOT IMPLEMENT YET");
                makeResponseForFailed(responseObserver,"NOT_IMPLEMENT","FALSE");
            }else {
                makeResponseForFailed(responseObserver,"INVALID_AUTH","TRUE");
            }
        }

        @Override
        public void leaveChat(LeaveChatReq request, StreamObserver<SimpleChatRes> responseObserver) {
            if (isValidAuth(request.getRequesterId(),request.getCookie())){
                System.out.println("NOT IMPLEMENT YET");
                makeResponseForFailed(responseObserver,"NOT_IMPLEMENT","FALSE");
            }else {
                makeResponseForFailed(responseObserver,"INVALID_AUTH","TRUE");
            }
        }

        @Override
        public void sendMsg(SendMsgReq request, StreamObserver<SimpleChatRes> responseObserver) {
            if (isValidAuth(request.getRequesterId(),request.getCookie())){
                MongoCollection<Document> collChat = Mongod.getOverleadConnection().getCollection("chat");
                MongoCollection<Document> collUser = Mongod.getOverleadConnection().getCollection("auth");
                List<Document> authChat=collChat.find(new Document("_id",request.getChannelId())).into(new ArrayList<>());
                if (authChat.size()==1){
                    List<String> members= (List<String>) authChat.get(0).get("members");
                    if (members.indexOf(request.getRequesterId())!=-1){
                        //Add
                    }
                }else{
                    makeResponseForFailed(responseObserver,"WRONG_SIZE","FALSE");
                }            }else {
                makeResponseForFailed(responseObserver,"INVALID_AUTH","TRUE");
            }
        }

        @Override
        public void connectChat(ConnectChatReq request, StreamObserver<ConnectChatRes> responseObserver) {
            if (isValidAuth(request.getRequesterId(),request.getCookie())){

            }else {
                makeResponseForFailed(responseObserver,"INVALID_AUTH","TRUE");
            }
        }
    }
}
