package gRPC.task;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.BsonArray;
import org.bson.BsonString;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static helper.auth.RequestAuth.isValidAuth;

public class TeamTask {
    public static class TeamTaskImpl extends TeamTaskGrpc.TeamTaskImplBase {
        public void makeResponseForUpdateSuccess(StreamObserver res, String id) {

            res.onNext(ProjectRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setProjectId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error) {
            res.onNext(ProjectRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }
//string requesterId = 1;
//	string projectId = 2;
//	string title = 3;
//	string description = 4;
//	string priority = 5;
//	string start = 6;		 		 // form mm/hh/dd/mm/yyyy       phut/gio/ngay/thang/nam
//	string deadline = 7;			// form mm/hh/dd/mm/yyyy
//	string assigneeArray = 8;
//	string comment = 9;
//	string status = 10;				// khi add mac dinh status = "todo"
//	string status = 11;
//	string tokenAccess = 12;
        @Override
        public void addNewTeamTask(AddNewTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            System.out.println("addNewTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("task");
                MongoCollection<Document> collTeam = Mongod.getOverleadConnection().getCollection("team");

                Document document = new Document()
                        .append("ownerId",request.getRequesterId())
                        .append("title", request.getTitle())
                        .append("start", request.getStart())
                        .append("description", request.getDescription())
                        .append("priority", request.getPriority())
                        .append("deadline", request.getDeadline())
                        .append("assigneeArray", new BsonArray(Arrays.asList(new BsonString(request.getAssigneeArray()))))
                        .append("comment", request.getComment())
                        .append("status", request.getComment())
                        .append("review", request.getReview());
                coll.insertOne(document);
                Document getBack=coll.find(document).into(new ArrayList<>()).get(0);
                collTeam.findOneAndUpdate(new Document("_id",new ObjectId(request.getTeamId())),new Document("$push",new Document("tasks",getBack.get("_id"))));
                makeResponseForUpdateSuccess(responseObserver,getBack.get("_id").toString());
            }
        }

        @Override
        public void updateTeamTask(UpdateTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            System.out.println("updateTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("task");

                Document document = new Document()
                        .append("title", request.getTitle())
                        .append("start", request.getStart())
                        .append("projectId", request.getProjectId())
                        .append("description", request.getDescription())
                        .append("priority", request.getPriority())
                        .append("deadline", request.getDeadline())
                        .append("assigneeArray", new BsonArray(Arrays.asList(new BsonString(request.getAssigneeArray()))))
                        .append("comment", request.getComment())
                        .append("status", request.getComment())
                        .append("review", request.getReview());
                coll.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),document);
                makeResponseForUpdateSuccess(responseObserver,request.getProjectId());
            }
        }

        @Override
        public void registerTeamTask(RegisterTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            System.out.println("updateTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("task");
                coll.findOneAndUpdate(new Document("_id",new ObjectId(request.getTeamTaskId())),new Document("$push",new Document("assigneeArray",request.getRequesterId())));
                makeResponseForUpdateSuccess(responseObserver,request.getProjectId());
            }
        }

        @Override
        public void cancelTeamTask(CancelTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            System.out.println("cancelTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("task");
                coll.findOneAndUpdate(new Document("_id",new ObjectId(request.getTeamTaskId())),new Document("$pull",new Document("assigneeArray",request.getRequesterId())));
                makeResponseForUpdateSuccess(responseObserver,request.getProjectId());
            }
        }

        @Override
        public void sendTeamTaskToMyTask(SendTeamTaskToMyTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            System.out.println("sendTeamTaskToMyTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("task");
                coll.findOneAndUpdate(new Document("_id",new ObjectId(request.getTeamTaskId())),new Document("$push",new Document("assigneeArray",request.getRequesterId())));
                makeResponseForUpdateSuccess(responseObserver,request.getProjectId());
            }
        }

        @Override
        public void getAllTeamTask(GetAllTeamTaskReq request, StreamObserver<GetAllTeamTaskRes> responseObserver) {
            System.out.println("addNewTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("task");
                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");

                List<String>listId= (List<String>) collProject.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>()).get(0);
                if (listId.size()>0){
                    listId.forEach(i->{
                        Document re=coll.find(new Document("_id",new ObjectId(i))).into(new ArrayList<>()).get(0);
                        responseObserver.onNext(GetAllTeamTaskRes.newBuilder()
                                .setTitle(re.get("title").toString())
                                .setTitle(re.get("description").toString())
                                .setTitle(re.get("priority").toString())
                                .setTitle(re.get("start").toString())
                                .setTitle(re.get("deadline").toString())
                                .setTitle(re.get("assigneeArray").toString())
                                .setTitle(re.get("comment").toString())
                                .setTitle(re.get("statusTeamTask").toString())
                                .setTitle(re.get("review").toString())
                                .setStatus("SUCCESS")
                                .setError("FALSE")
                                .build());
                    });
                } else{
                    responseObserver.onNext(GetAllTeamTaskRes.newBuilder().setError("FALSE").setStatus("EMPTY").build());
                }
                responseObserver.onCompleted();
            }
        }
    }
}
