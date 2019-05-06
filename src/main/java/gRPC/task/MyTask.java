package gRPC.task;

import co.overlead.gRPC.GetAllMyTaskReq;
import co.overlead.gRPC.GetAllMyTaskRes;
import co.overlead.gRPC.MytaskGrpc;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class MyTask {
    public static class TaskImpl extends MytaskGrpc.MytaskImplBase{
        public static boolean isValidAuth(){
            return false;

        }
        @Override
        public void getAllMyTask(GetAllMyTaskReq request, StreamObserver<GetAllMyTaskRes> responseObserver) {
            if (!isValidAuth()) {
                GetAllMyTaskRes reply=GetAllMyTaskRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("projectId",request.getProjectId()).append("requesterId",request.getRequesterId())).into(new ArrayList<Document>());

                if (foundDocument.size()==0){

                    GetAllMyTaskRes reply=GetAllMyTaskRes.newBuilder().setStatus("EMPTY").setError("FALSE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }  else {
                    foundDocument.forEach(i->{
                        GetAllMyTaskRes reply=GetAllMyTaskRes.newBuilder()
                                .setTitle(i.get("title").toString())
                                .setPriority(i.get("priority").toString())
                                .setStart(i.get("start").toString())
                                .setDeadline(i.get("deadline").toString())
                                .setComment(i.get("comment").toString())
                                .setStatus("SUCCESS").setError("FALSE").build();
                        responseObserver.onNext(reply);
                    });
                    responseObserver.onCompleted();
                }
                //TODOS: add userstory not own
            }
        }
    }
}
