package gRPC.task;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.BsonArray;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import static helper.auth.RequestAuth.isValidAuth;

public class MyTask {
    public static class TaskImpl extends MytaskGrpc.MytaskImplBase{

        @Override
        public void commentMyTask(CommentMyTaskReq request, StreamObserver<MyTaskRes> responseObserver) {
            System.out.println("updateTeamTask");
            if (!isValidAuth(request.getMytask().getRequesterId(), request.getMytask().getAccessToken())) {
                MyTaskRes reply=MyTaskRes.newBuilder().setStatus("AUTH_INVALID").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                List<Document> teams = Mongod.collTeam.find(new Document("_id", request.getMytask().getTeamId())).into(new ArrayList<>());
                if (teams.size() > 0) {
                    Document document = new Document()
                            .append(request.getMytask().getRequesterId(), request.getComment());
                    Mongod.collTask.findOneAndUpdate(new Document("_id", new ObjectId(request.getMytask().getTaskId())),
                            new Document("$push",new Document("comments",document)));
                }
            }
        }

        @Override
        public void updateMyTask(UpdateMyTaskReq request, StreamObserver<MyTaskRes> responseObserver) {
            //check if task is exist
            //update task
            System.out.println("updateTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                MyTaskRes reply=MyTaskRes.newBuilder().setStatus("AUTH_INVALID").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                List<Document> teams = Mongod.collTeam.find(new Document("_id", request.getTeamId())).into(new ArrayList<>());
                if (teams.size() > 0) {
                    Document document = new Document()
                            .append("status", request.getStatusTask());
                    Mongod.collTask.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())),
                            new Document("$set",document));
                }
            }
        }

        @Override
        public void getAllMyTask(GetAllMyTaskReq request, StreamObserver<GetAllMyTaskRes> responseObserver) {
            //check if team is exist
            //get all task have assign== userid in TEAM
            //
            if (!isValidAuth(request.getRequesterId(),request.getAccessToken())) {
                GetAllMyTaskRes reply=GetAllMyTaskRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                List<Document> foundDocument = Mongod.collTeam.find(new Document("_id",new ObjectId( request.getTeamId()))).into(new ArrayList<>());

                if (foundDocument.size()==0){
                    GetAllMyTaskRes reply=GetAllMyTaskRes.newBuilder().setStatus("EMPTY").setError("FALSE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }  else {
                    List<String> taskList= (List<String>) foundDocument.get(0).get("tasks");
                    if (taskList.size()>0){
                        taskList.forEach(task->{
                            List<Document> t=Mongod.collTask.find(new Document("_id",new ObjectId(task))).into(new ArrayList<>());
                            if (t.size()>0){
                                if (t.indexOf(request.getRequesterId())!=-1){
                                    Document i=t.get(0);
                                    GetAllMyTaskRes reply=GetAllMyTaskRes.newBuilder()
                                            .setTitle(i.get("title").toString())
                                            .setPriority(i.get("priority").toString())
                                            .setStart(i.get("start").toString())
                                            .setDeadline(i.get("deadline").toString())
                                            .setComment(i.get("comment").toString())
                                            .setStatus("SUCCESS").setError("FALSE").build();
                                    responseObserver.onNext(reply);
                                }
                            }
                        });
                    }
                }
                //TODOS: add userstory not own
            }
        }
    }
}
