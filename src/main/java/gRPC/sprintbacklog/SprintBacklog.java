package gRPC.sprintbacklog;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

import static helper.auth.RequestAuth.isValidAuth;

public class SprintBacklog {


    public static class SprintBacklogImpl extends SprintBacklogGrpc.SprintBacklogImplBase {
        public void makeResponseForUpdateSuccess(StreamObserver res, String id) {
            res.onNext(SprintBacklogRes.newBuilder().setStatus("SUCCESS").setBacklogId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status) {
            res.onNext(SprintBacklogRes.newBuilder().setStatus(status).build());
            res.onCompleted();
        }

        @Override
        public void deleteSprintBacklog(DeleteSprintBacklogReq request, StreamObserver<SprintBacklogRes> responseObserver) {
            //check of backlog is Exist
            //update sprintbacklog to productbacklog
            //remove from team
            System.out.println("deleteSprintBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                List<Document> backlog= Mongod.collBacklog.find(new Document("_id", new ObjectId(request.getBacklogId()))).into(new ArrayList<>());
                if (backlog.size() == 0) {
                    makeResponseForFailed(responseObserver, "NOT_EXIST_BACKLOG");
                } else {
                    Mongod.collBacklog.findOneAndUpdate(new Document("_id", new ObjectId(request.getBacklogId())),
                            new Document("$set",
                                    new Document("isSprintBacklog", "false")));

                    Mongod.collTeam.findOneAndUpdate(new Document("_id",new ObjectId(request.getTeamId())),
                            new Document("$pull",
                                    new Document("sprintbacklogs",request.getBacklogId())));

                    makeResponseForUpdateSuccess(responseObserver, request.getBacklogId());
                }
            }
        }

        @Override
        public void updateSprint(UpdateSprintReq request, StreamObserver<SprintBacklogRes> responseObserver) {
            System.out.println("updateSprint");
            if (!isValidAuth(request.getRequesterId(),request.getAccessToken()))
                makeResponseForFailed(responseObserver,"AUTH_INVALID");
            else{
                List<Document> backlog= Mongod.collBacklog.find(new Document("_id", new ObjectId(request.getBacklogId()))).into(new ArrayList<>());
                if (backlog.size() == 0) {
                    makeResponseForFailed(responseObserver, "NOT_EXIST_BACKLOG");
                } else {
                    Mongod.collBacklog.findOneAndUpdate(new Document("_id", new ObjectId(request.getBacklogId())),
                            new Document("$set",
                                    new Document("sprintId", request.getSprintId()).append("sprintName",request.getSprintName())));

                    makeResponseForUpdateSuccess(responseObserver, request.getBacklogId());
                }
            }
        }

        @Override
        public void getAllSprintBacklog(GetAllSprintBacklogReq request, StreamObserver<GetAllSprintBacklogRes> responseObserver) {
            //check if team is exist
            //get list of sprintbacklogs in TEAM
            //get BACKLOG from id of list in previous step
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                List<Document> team = Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                if (team.size()==0) {
                    makeResponseForFailed(responseObserver, "TEAM_NOT_FOUND");
                } else {
                    List<String> backlogList = (List<String>) team.get(0).get("sprintbacklogs");
                    if (backlogList== null) {
                        makeResponseForFailed(responseObserver, "EMPTY");
                    } else {
                        backlogList.forEach(i -> {
                           List<Document>  result = Mongod.collBacklog.find(
                                   new Document("_id", new ObjectId(i)).append("isSprintBacklog", "true"))
                                            .into(new ArrayList<>());

                            if (result.size()>0){
                                Document r=result.get(0);
                                responseObserver.onNext(GetAllSprintBacklogRes.newBuilder()
                                        .setBacklogId(i)
                                        .setRole(r.get("role")==null?"":r.get("role").toString())
                                        .setWant(r.get("want")==null?"":r.get("want").toString())
                                        .setSo(r.get("so")==null?"":r.get("so").toString())
                                        .setStatusBacklog(r.get("statusBacklog")==null?"":r.get("statusBacklog").toString())
                                        .setPriority(r.get("priority")==null?"":r.get("priority").toString())
                                        .setEstimation(r.get("estimation")==null?"":r.get("estimation").toString())
                                        .setSprintId(r.get("sprintId")==null?"":r.get("sprintId").toString())
                                        .setStatus("SUCCESS")
                                        .setSprintName(r.get("sprintName")==null?"":r.get("sprintName").toString())
                                        .setTitle(r.get("title")==null?"":r.get("title").toString())
                                        .setStart(r.get("start")==null?"":r.get("start").toString())
                                        .setDeadline(r.get("deadline")==null?"":r.get("deadline").toString())

                                        .build());
                            }

                        });
                        responseObserver.onCompleted();
                    }
                }
            }
        }
    }
}