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

        public void makeResponseForUpdateSuccess(StreamObserver res,String id){
            res.onNext(SimpleChatRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setOption(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error){
            res.onNext(SimpleChatRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }


    }
}
