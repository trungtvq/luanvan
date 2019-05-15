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

import static helper.auth.RequestAuth.isValidAuth;

public class Chat {
    public static class ChatImpl extends ChatGrpc.ChatImplBase{

        @Override
        public StreamObserver<SendMsgReq> connectChat(StreamObserver<SendMsgRes> responseObserver) {
            System.out.println("chating");
            StreamObserver<SendMsgReq> so =new StreamObserver<SendMsgReq>() {
                @Override
                public void onNext(SendMsgReq sendMsgReq) {
                    System.out.println("onNext fron server");
                    responseObserver.onNext(SendMsgRes.getDefaultInstance());
                }

                @Override
                public void onError(Throwable throwable) {
                    System.out.println("onError");
                }

                @Override
                public void onCompleted() {
                    System.out.println("onCompleted");
                }
            };
        return so;
        }

    }
}
