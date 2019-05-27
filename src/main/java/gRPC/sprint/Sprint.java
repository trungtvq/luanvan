package gRPC.sprint;

import co.overlead.gRPC.*;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.Document;
import org.bson.types.ObjectId;


import javax.print.Doc;
import java.util.ArrayList;
import java.util.List;

import static helper.auth.RequestAuth.isValidAuth;

public class Sprint {
    public static class SprintImpl extends SprintGrpc.SprintImplBase {

        public void makeResponseForUpdateSuccess(StreamObserver res, String id) {

            res.onNext(SprintRes.newBuilder().setStatus("SUCCESS").setId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status) {
            res.onNext(SprintRes.newBuilder().setStatus(status).build());
            res.onCompleted();
        }


        @Override
        public void deleteSprint(DeleteSprintReq request, StreamObserver<SprintRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                Mongod.collSprint.deleteOne(new Document("_id",new ObjectId(request.getSprintId())));
                Mongod.collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),
                        new Document("$pull",
                                new Document("sprints",request.getSprintId())));
                makeResponseForUpdateSuccess(responseObserver,request.getSprintId());
            }
        }

        private String addNewSprint(AddNewSprintReq request) {
            Document newSprint = new Document()
                    .append("num", request.getNum())
                    .append("title", request.getTitle())
                    .append("start", request.getStart())
                    .append("end", request.getEnd())
                    .append("goal", request.getGoal());
            Mongod.collSprint.insertOne(newSprint);
            String id= Mongod.collSprint.find(newSprint).into(new ArrayList<>()).get(0).get("_id").toString();
            Mongod.collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),
                    new Document("$push",
                            new Document("sprints",id)));
            return id;
        }

        private List<String> getSprintIdInProject(String projectId){
            List<Document> project = Mongod.collProject
                    .find(new Document("_id", new ObjectId(projectId))).into(new ArrayList<>());
            if (project.size()>0){
                return (List<String>) project.get(0).get("sprints");
            }else return null;
        }
        @Override
        public void addNewSprint(AddNewSprintReq request, StreamObserver<SprintRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {

                    List<String> sprintIds = getSprintIdInProject(request.getProjectId());
                    if (sprintIds != null) {
                        for (int i = 0; i < sprintIds.size(); i++) {
                            if (Mongod.collSprint.find(new Document("_id", new ObjectId(sprintIds.get(0))).append("num", request.getNum())).into(new ArrayList<>()).size() > 0) {
                                makeResponseForFailed(responseObserver, "Sprint ID is existed");
                                return;
                            }
                        }
                    }

                    makeResponseForUpdateSuccess(responseObserver,addNewSprint(request));
            }
        }

        public Document getSprintById(String id){
            List<Document> sprints=Mongod.collSprint.find(new Document("_id",new ObjectId(id))).into(new ArrayList<>());
            if (sprints.size()>0){
                return sprints.get(0);
            }else{
                return null;
            }
        }
        @Override
        public void getAllSprint(GetAllSprintReq request, StreamObserver<GetAllSprintRes> responseObserver) {
            System.out.println("getAllSprint");

            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                List<String> sprintIds=getSprintIdInProject(request.getProjectId());
                System.out.println(sprintIds);
                if (sprintIds!=null){
                    sprintIds.forEach(i->{
                        Document s=getSprintById(i);
                        System.out.println(s);

                        if (s!=null)
                        responseObserver.onNext(GetAllSprintRes.newBuilder()
                                .setId(s.get("_id").toString())
                                .setNum(s.get("num").toString())
                                .setTitle(s.get("title").toString())
                                .setStart(s.get("start").toString())
                                .setEnd(s.get("end").toString())
                                .setGoal(s.get("goal").toString())
                                .setStatus("SUCCESS")
                                .build());
                    });
                    responseObserver.onCompleted();
                }else
                    makeResponseForFailed(responseObserver,"You not have any sprint");
            }
        }

        @Override
        public void setCurrentSprint(DeleteSprintReq request, StreamObserver<SprintRes> responseObserver) {
            System.out.println("setCurrentSprint");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                List<String> sprintIds=getSprintIdInProject(request.getProjectId());
                if (sprintIds.size()>0){
                    System.out.println("SUCCESS");
                    System.out.println(request.getSprintId());
                    System.out.println(sprintIds);
                    if (sprintIds.indexOf(request.getSprintId())!=-1){
                        Mongod.collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),
                                new Document("$set",
                                        new Document("currentSprintId",request.getSprintId())));
                        makeResponseForUpdateSuccess(responseObserver,request.getSprintId());
                    }
                }else makeResponseForFailed(responseObserver,"Not exist sprint");
            }
        }

        @Override
        public void getSprint(DeleteSprintReq request, StreamObserver<GetAllSprintRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID");
            } else {
                Document s =getSprintById(request.getSprintId());
                if (s!=null)
                responseObserver.onNext(GetAllSprintRes.newBuilder()
                        .setId(s.get("_id").toString())
                        .setNum(s.get("num").toString())
                        .setTitle(s.get("title").toString())
                        .setStart(s.get("start").toString())
                        .setEnd(s.get("end").toString())
                        .setGoal(s.get("goal").toString())
                        .build());
            }
        }
    }
}
