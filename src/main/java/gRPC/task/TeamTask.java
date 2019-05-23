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

            res.onNext(TeamTaskRes.newBuilder().setStatus("SUCCESS").setTeamTaskId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error) {
            res.onNext(TeamTaskRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }

        @Override
        public void addNewTeamTask(AddNewTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            //check if team is Exist
            //add new TASK
            //add task id to TEAM
            System.out.println("addNewTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> teams = Mongod.collTeam.find(new Document("_id", request.getTeamId())).into(new ArrayList<>());
                if (teams.size() > 0) {
                    Document document = new Document()
                            .append("ownerId", request.getRequesterId())
                            .append("title", request.getTitle())
                            .append("start", request.getStart())
                            .append("description", request.getDescription())
                            .append("priority", request.getPriority())
                            .append("deadline", request.getDeadline())
                            .append("assigneeArray", new BsonArray(Arrays.asList()))
                            .append("comment", request.getComment())
                            .append("status", request.getComment())
                            .append("review", request.getReview())
                            .append("teamId", request.getTeamId())
                            .append("sprintId",request.getSprintId())
                            .append("comments", new BsonArray(Arrays.asList()));

                    Mongod.collTask.insertOne(document);
                    Document getBack = Mongod.collTask.find(document).into(new ArrayList<>()).get(0);

                    Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())),
                            new Document("$push",
                                    new Document("tasks", getBack.get("_id"))));
                    makeResponseForUpdateSuccess(responseObserver, getBack.get("_id").toString());
                } else {
                    makeResponseForFailed(responseObserver, "TEAM_NOT_FOUND", "FALSE");

                }

            }
        }

        @Override
        public void updateTeamTask(UpdateTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            //check if task is exist
            //update task
            System.out.println("updateTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> teams = Mongod.collTeam.find(new Document("_id", request.getTeamId())).into(new ArrayList<>());
                if (teams.size() > 0) {
                    Document document = new Document()
                            .append("title", request.getTitle())
                            .append("start", request.getStart())
                            .append("projectId", request.getProjectId())
                            .append("description", request.getDescription())
                            .append("priority", request.getPriority())
                            .append("deadline", request.getDeadline())
                            .append("assigneeArray", new BsonArray(Arrays.asList()))
                            .append("comment", request.getComment())
                            .append("status", request.getComment())
                            .append("review", request.getReview());
                    Mongod.collTask.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())),
                            new Document("$set",document));
                    makeResponseForUpdateSuccess(responseObserver, request.getTeamId());
                }
            }
        }

        @Override
        public void registerTeamTask(RegisterTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            System.out.println("registerTeamTask");
            //check if team exist: TODO note importance
            //check if user in team: TODO note importance
            //check if task is exist: TODO note importance
            //check if task is exist in team: TODO note importance
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                Mongod.collTask.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamTaskId())),
                        new Document("$push",
                                new Document("assigneeArray", request.getRequesterId())));
                makeResponseForUpdateSuccess(responseObserver, request.getTeamTaskId());
            }
        }

        @Override
        public void cancelTeamTask(CancelTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            //check if team exist: TODO note importance
            //check if user in team: TODO note importance
            //check if task is exist: TODO note importance
            //check if task is exist in team: TODO note importance
            //check if task was registed by USER: TODO note importance
            System.out.println("cancelTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                Mongod.collTask.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamTaskId())),
                        new Document("$pull", new Document("assigneeArray", request.getRequesterId())));
                makeResponseForUpdateSuccess(responseObserver, request.getProjectId());
            }
        }

        @Override
        public void sendTeamTaskToMyTask(SendTeamTaskToMyTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            System.out.println("registerTeamTask");
            //check if team exist: TODO note importance
            //check if user in team: TODO note importance
            //check if task is exist: TODO note importance
            //check if task is exist in team: TODO note importance
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                Mongod.collTask.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamTaskId())),
                        new Document("$push",
                                new Document("assigneeArray", request.getRequesterId())));
                makeResponseForUpdateSuccess(responseObserver, request.getTeamTaskId());
            }
        }

        @Override
        public void getAllTeamTask(GetAllTeamTaskReq request, StreamObserver<GetAllTeamTaskRes> responseObserver) {
            //check if team is exist
            //send task

            System.out.println("addNewTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getTokenAccess())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {

                List<String> listId = (List<String>) Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>()).get(0);
                if (listId.size() > 0) {
                    listId.forEach(i -> {
                        Document re = Mongod.collTask.find(new Document("_id", new ObjectId(i))).into(new ArrayList<>()).get(0);
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

                } else {
                    responseObserver.onNext(GetAllTeamTaskRes.newBuilder().setError("FALSE").setStatus("EMPTY").build());
                }
                responseObserver.onCompleted();
            }
        }
    }
}
