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
            res.onNext(SprintBacklogRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setSprintBacklogId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error) {
            res.onNext(SprintBacklogRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }

        @Override
        public void deleteSprintBacklog(DeleteSprintBacklogReq request, StreamObserver<SprintBacklogRes> responseObserver) {
            System.out.println("sendToSprintBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getCookie())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");
                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");
                List<Document> project = collProject.find(new Document("_id", new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (project.size() == 0) {
                    makeResponseForFailed(responseObserver, "NOT_EXIST_PROJECT", "FALSE");
                } else {
                    coll.findOneAndUpdate(new Document("_id", new ObjectId(request.getSprintBacklogId())),
                            new Document("$set",
                                    new Document("isSprintBacklog", "false")));
                    makeResponseForUpdateSuccess(responseObserver, request.getSprintBacklogId());
                }
            }
        }

        @Override
        public void getAllSprintBacklog(GetAllSprintBacklogReq request, StreamObserver<GetAllSprintBacklogRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getCookie())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");
                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");

                List<Document> listId = collProject.find(new Document("_id", new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (listId.size() == 0) {
                    makeResponseForFailed(responseObserver, "NOT_FOUND_PROJECT", "FALSE");
                } else {
                    List<String> re = (List<String>) listId.get(0).get("backlogs");
                    if (re.size() == 0) {
                        makeResponseForFailed(responseObserver, "EMPTY", "FALSE");
                    } else {
                        re.forEach(i -> {
                            Document r = coll.find(new Document("_id", new ObjectId(i)).append("isSprintBacklog", "true")).into(new ArrayList<>()).get(0);
                            responseObserver.onNext(GetAllSprintBacklogRes.newBuilder()
                                    .setSprintBacklogId(i)
                                    .setRole(r.get("role").toString())
                                    .setWant(r.get("want").toString())
                                    .setSo(r.get("so").toString())
                                    .setStatusBacklog(r.get("statusBacklog").toString())
                                    .setPriority(r.get("priority").toString())
                                    .setEstimation(r.get("estimation").toString())
                                    .setSprintId(r.get("sprintId").toString())
                                    .setStatus("SUCCESS")
                                    .setError("FALSE")
                                    .build());
                        });
                        responseObserver.onCompleted();
                    }
                }
            }
        }
    }
}