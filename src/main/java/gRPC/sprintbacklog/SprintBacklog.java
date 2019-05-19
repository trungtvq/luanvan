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

        public void makeResponseForFailed(StreamObserver res, String status, String error) {
            res.onNext(SprintBacklogRes.newBuilder().setStatus(status).build());
            res.onCompleted();
        }

        @Override
        public void deleteSprintBacklog(DeleteSprintBacklogReq request, StreamObserver<SprintBacklogRes> responseObserver) {
            System.out.println("deleteSprintBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> project= Mongod.collProject.find(new Document("_id", new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (project.size() == 0) {
                    makeResponseForFailed(responseObserver, "NOT_EXIST_PROJECT", "FALSE");
                } else {
                    Mongod.collBacklog.findOneAndUpdate(new Document("_id", new ObjectId(request.getBacklogId())),
                            new Document("$set",
                                    new Document("isSprintBacklog", "false")));
                    makeResponseForUpdateSuccess(responseObserver, request.getBacklogId());
                }
            }
        }

        @Override
        public void getAllSprintBacklog(GetAllSprintBacklogReq request, StreamObserver<GetAllSprintBacklogRes> responseObserver) {
            System.out.println("getAllSprintBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> listId = Mongod.collProject.find(new Document("_id", new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (listId.size() == 0) {
                    makeResponseForFailed(responseObserver, "NOT_FOUND_PROJECT", "FALSE");
                } else {
                    List<String> re = (List<String>) listId.get(0).get("backlogs");
                    if (re.size() == 0) {
                        makeResponseForFailed(responseObserver, "EMPTY", "FALSE");
                    } else {
                        re.forEach(i -> {
                           List<Document>  result = Mongod.collBacklog.find(new Document("_id", new ObjectId(i)).append("isSprintBacklog", "true")).into(new ArrayList<>());
                           System.out.println(result.size());
                            if (result.size()>0){
                                Document r=result.get(0);
                                responseObserver.onNext(GetAllSprintBacklogRes.newBuilder()
                                        .setBacklogId(i)
                                        .setRole(r.get("role").toString())
                                        .setWant(r.get("want").toString())
                                        .setSo(r.get("so").toString())
                                        .setStatusBacklog(r.get("statusBacklog").toString())
                                        .setPriority(r.get("priority").toString())
                                        .setEstimation(r.get("estimation").toString())
                                        .setSprintId(r.get("sprintId").toString())
                                        .setStatus("SUCCESS")
                                        .setTitle(r.get("title").toString())
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