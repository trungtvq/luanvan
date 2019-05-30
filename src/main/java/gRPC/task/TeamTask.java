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

        public void makeResponseForFailed(StreamObserver res, String status) {
            res.onNext(TeamTaskRes.newBuilder().setStatus(status).build());
            res.onCompleted();
        }

        @Override
        public void addNewTeamTask(AddNewTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            //check if team is Exist
            //add new TASK
            //add task id to TEAM
            System.out.println("addNewTeamTask");
            System.out.println(request.getSprintBacklogId());
            System.out.println("sprintbacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                List<Document> teams = Mongod.collTeam.find(new Document("_id",new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                if (teams.size() > 0) {
                    Document document = new Document()
                            .append("ownerId", request.getRequesterId())
                            .append("title", request.getTitle())
                            .append("start", request.getStart())
                            .append("description", request.getDescription())
                            .append("priority", request.getPriority())
                            .append("deadline", request.getDeadline())
                            .append("assigneeArray", request.getAssigneeArray()!=""?(new BsonArray(Arrays.asList((new BsonString(request.getAssigneeArray()))))):(new BsonArray(Arrays.asList())))
                            .append("comment", request.getComment())
                            .append("status", request.getStatus())
                            .append("review", request.getReview())
                            .append("teamId", request.getTeamId())
                            .append("sprintId",request.getSprintId())
                            .append("comments", new BsonArray(Arrays.asList()))
                            .append("sprintbacklogid",request.getSprintBacklogId())
                            ;

                    Mongod.collTask.insertOne(document);
                    Document getBack = Mongod.collTask.find(document).into(new ArrayList<>()).get(0);

                    Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())),
                            new Document("$push",
                                    new Document("tasks", getBack.get("_id").toString())));
                    makeResponseForUpdateSuccess(responseObserver, getBack.get("_id").toString());
                } else {
                    makeResponseForFailed(responseObserver, "TEAM_NOT_FOUND");

                }

            }
        }

        @Override
        public void updateTeamTask(UpdateTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            //check if task is exist
            //update task
            System.out.println("updateTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                List<Document> teams = Mongod.collTeam.find(new Document("_id",new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                if (teams.size() > 0) {
                    Document document = new Document()
                            .append("title", request.getTitle())
                            .append("start", request.getStart())
                            .append("projectId", request.getProjectId())
                            .append("description", request.getDescription())
                            .append("priority", request.getPriority())
                            .append("deadline", request.getDeadline())
                            .append("assigneeArray", new BsonArray(Arrays.asList(new BsonString(request.getAssigneeArray()))))
                            .append("comment", request.getComment())
                            .append("status", request.getStatus())
                            .append("review", request.getReview())
                            .append("sprintbacklogid",request.getSprintBacklogId());
                    Mongod.collTask.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamTaskId())),
                            new Document("$set",document));
                    makeResponseForUpdateSuccess(responseObserver, request.getTeamTaskId());
                }else{
                    makeResponseForFailed(responseObserver,"EMPTY");
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
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                List<Document> list=Mongod.collTask.find(new Document("_id", new ObjectId(request.getTeamTaskId()))).into(new ArrayList<>());
                if (list.size()>0){
                    List<String> mems= (List<String>) list.get(0).get("assigneeArray");
                    if (mems.indexOf(request.getAssigner())==-1){
                        Mongod.collTask.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamTaskId())),
                                new Document("$push",
                                        new Document("assigneeArray", request.getAssigner())));
                        makeResponseForUpdateSuccess(responseObserver, request.getTeamTaskId());
                    } else makeResponseForFailed(responseObserver,"You already assigned this task");

                }else{
                    makeResponseForFailed(responseObserver,"Not exist team");
                }

            }
        }

        //HOW TO REMOVE USER OUT OF TASK
        //check if team exist: TODO note importance
        //check if user in team: TODO note importance
        //check if task is exist: TODO note importance
        //check if task is exist in team: TODO note importance
        //check if task was registed by USER: TODO note importance


        @Override
        public void cancelTeamTask(CancelTeamTaskReq request, StreamObserver<TeamTaskRes> responseObserver) {
            //delete teamTask
            //delete instance task
            //remove task from TEAM
            System.out.println("delete teamtask");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())),
                        new Document("$pull", new Document("tasks", request.getTeamTaskId())));

                Mongod.collTask.deleteOne(new Document("_id",new ObjectId(request.getTeamTaskId())));
                makeResponseForUpdateSuccess(responseObserver, request.getTeamTaskId());
            }
        }

        @Override
        public void getAllTeamTask(GetAllTeamTaskReq request, StreamObserver<GetAllTeamTaskRes> responseObserver) {
            //check if team is exist
            //send task

            System.out.println("addNewTeamTask");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {

                List<Document> listDoc =  Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                if (listDoc.size() > 0) {
                    List<String > listId=(List<String>) listDoc.get(0).get("tasks");
                    listId.forEach(i -> {
                        Document re = Mongod.collTask.find(new Document("_id", new ObjectId(i))).into(new ArrayList<>()).get(0);
                        System.out.println(re);
                        responseObserver.onNext(GetAllTeamTaskRes.newBuilder()
                                .setTitle(re.get("title").toString())
                                .setDescription(re.get("description").toString())
                                .setPriority(re.get("priority").toString())
                                .setStart(re.get("start").toString())
                                .setDeadline(re.get("deadline").toString())
                                .setAssigneeArray(re.get("assigneeArray").toString())
                                .setComment(re.get("comment").toString())
                                .setStatusTeamTask(re.get("status").toString())
                                .setReview(re.get("review").toString())
                                .setStatus("SUCCESS")
                                .setTeamTaskId(re.get("_id").toString())
                                .setSprintBacklogId(re.get("sprintbacklogid").toString())
                                .build());
                    });

                } else {
                    responseObserver.onNext(GetAllTeamTaskRes.newBuilder().setStatus("EMPTY").build());
                }
                responseObserver.onCompleted();
            }
        }
    }
}
