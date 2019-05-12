package gRPC.project;

import co.overlead.gRPC.*;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.result.DeleteResult;
import database.Mongod;
import gRPC.auth.AuthAccount;
import io.grpc.stub.StreamObserver;
import org.bson.*;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static helper.auth.RequestAuth.isValidAuth;

public class MyProject {

    public static class MyProjectImpl extends MyprojectGrpc.MyprojectImplBase{

        public void makeResponseForUpdateSuccess(StreamObserver res,String id){

            res.onNext(ProjectRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setProjectId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error){
            res.onNext(ProjectRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }



        @Override
        public void addNewProject(AddNewProjectReq request, StreamObserver<ProjectRes> responseObserver) {

            System.out.println("addNewProject");
            if (!isValidAuth(request.getRequesterId(),request.getCookie())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("projectName",request.getProjectName()).append("ownerId",request.getRequesterId())).into(new ArrayList<>());
                if (foundDocument.size()!=0){
                    makeResponseForFailed(responseObserver,"EXIST_PROJECT_NAME","TRUE");
                } else{
                    Document document = new Document("ownerId", request.getRequesterId())
                            .append("projectName", request.getProjectName())
                            .append("start", request.getStart())
                            .append("end", request.getEnd())
                            .append("private", request.getPrivate());
                    coll.insertOne(document);

                    foundDocument = coll.find(document).into(new ArrayList<>());
                    if (foundDocument.size()!=1){
                        makeResponseForFailed(responseObserver,"WRONG_SIZE","TRUE");
                    } else {
                        String id= foundDocument.get(0).get("_id").toString();
                        makeResponseForUpdateSuccess(responseObserver,id);
                    }
                }
            }
        }

        @Override
        public void updateProject(UpdateProjectReq request, StreamObserver<ProjectRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(),request.getCookie())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (foundDocument.size()==1){
                    Document needUpdate=new Document(new Document("_id",new ObjectId(request.getProjectId()) ));
                    Document listUpdate=new Document();
                    if (request.getStart()!=""){
                        listUpdate.append("start",request.getStart());
                    }
                    if (request.getEnd()!=""){
                        listUpdate.append("end",request.getEnd());
                    }
                    if (request.getPrivate()!=""){
                        listUpdate.append("private",request.getPrivate());
                    }
                    if (request.getUserName()!=""){
                        foundDocument = coll.find(new Document("projectName",request.getProjectName()).append("ownerId",request.getRequesterId())).into(new ArrayList<>());
                        if (foundDocument.size()==0){
                            listUpdate.append("projectName",request.getProjectName());

                        }else {
                            makeResponseForFailed(responseObserver,"EXIST_PROJECT_NAME","FALSE");
                            return;
                        }
                    }
                    coll.findOneAndUpdate(needUpdate,listUpdate);
                    makeResponseForUpdateSuccess(responseObserver,request.getProjectId());
                    } else{
                        System.out.println("NOT_EXIST_PROJECT_NAME");
                        makeResponseForFailed(responseObserver,"NOT_EXIST_PROJECT_NAME","TRUE");
                    }
            }
        }

        @Override
        public void deleteProject(DeleteProjectReq request, StreamObserver<ProjectRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(),request.getCookie())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                DeleteResult result = coll.deleteOne(new Document("_id",new ObjectId(request.getProjectId()) ).append("ownerId", request.getRequesterId()));

                if (result.getDeletedCount() != 1) {
                    makeResponseForFailed(responseObserver,"WRONG_SIZE","FALSE");
                }else{
                    makeResponseForUpdateSuccess(responseObserver,request.getProjectId());
                }
            }
        }
        @Override
        public void getAllProject(GetAllProjectReq request, StreamObserver<ProjectRes> responseObserver) {
            System.out.println("getAll");
            if (!isValidAuth(request.getRequesterId(),request.getCookie())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");
            } else{
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                //TODO: GET NOT OWN PROJECT
                List<Document> foundDocument = coll.find(new Document("ownerId",request.getRequesterId())).into(new ArrayList<Document>());
                System.out.println(foundDocument.size());

                if (foundDocument.size()==0){
                    makeResponseForFailed(responseObserver,"EMPTY","FALSE");
                }  else {
                    foundDocument.forEach(i->{
                        if (i!=null){
                            ProjectRes reply=ProjectRes.newBuilder()
                                    .setProjectId(i.get("_id").toString())
                                    .setProjectName(i.get("projectName").toString())
                                    .setStart(i.get("start").toString())
                                    .setEnd(i.get("end").toString())
                                    .setPrivate(i.get("private").toString())
                                    .setStatus("SUCCESS").setError("FALSE").build();
                            responseObserver.onNext(reply);
                        }
                    });
                    responseObserver.onCompleted();
                }
            }
        }
    }

}