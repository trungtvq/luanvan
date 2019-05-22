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

import java.util.*;

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
                List<Document> foundDocument = Mongod.collProject.find(new Document("projectName",request.getProjectName()).append("ownerId",request.getRequesterId())).into(new ArrayList<>());
                if (foundDocument.size()!=0){
                    makeResponseForFailed(responseObserver,"EXIST_PROJECT_NAME","TRUE");
                } else{
                    Document document = new Document("ownerId", request.getRequesterId())
                            .append("topic",request.getTopic())
                            .append("projectName", request.getProjectName())
                            .append("start", request.getStart())
                            .append("end", request.getEnd())
                            .append("private", request.getPrivate())
                            .append("progress","10")
                            .append("tasks",new BsonArray(Arrays.asList())) //TODO: MOVE TO TEAM
                            .append("teams",new BsonArray(Arrays.asList()))
                            .append("backlogs",new BsonArray(Arrays.asList()))
                            .append("stories",new BsonArray(Arrays.asList()));


                    Mongod.collProject.insertOne(document);

                    foundDocument = Mongod.collProject.find(document).into(new ArrayList<>());
                    if (foundDocument.size()!=1){
                        makeResponseForFailed(responseObserver,"WRONG_SIZE","TRUE");
                    } else {
                        String id= foundDocument.get(0).get("_id").toString();
                        makeResponseForUpdateSuccess(responseObserver,id);

                        //add default team

                        Document team = new Document()
                                .append("name", "default")
                                .append("projectId",id)
                                .append("ownerId", request.getRequesterId())
                                .append("description", "default")
                                .append("department", "default")
                                .append("tasks", new BsonArray(Arrays.asList()))
                                .append("conversations", new BsonArray(Arrays.asList()))
                                .append("members", new BsonArray(Arrays.asList(new BsonString(request.getRequesterId()))));
                        Mongod.collTeam.insertOne(team);

                        foundDocument = Mongod.collTeam.find(team).into(new ArrayList<>());
                        //check size
                        if (foundDocument.size() != 1) {
                            makeResponseForFailed(responseObserver, "WRONG_SIZE", "FALSE");
                        } else {
                            Mongod.collAuth.findOneAndUpdate(
                                    new Document("_id", new ObjectId(request.getRequesterId())),
                                    new Document("$push", new Document("teamlist", new BsonString(foundDocument.get(0).get("_id").toString()))));

                            Mongod.collProject.findOneAndUpdate(new Document("_id",
                                            new ObjectId(id)),
                                    new Document("$push", new Document("teams",new BsonString(foundDocument.get(0).get("_id").toString()))));
                        }
                    }
                }
            }
        }

        @Override
        public void updateProject(UpdateProjectReq request, StreamObserver<ProjectRes> responseObserver) {
            System.out.println("updateProject");
            System.out.println(request.getProjectId());
            System.out.println(request.getStart());
            System.out.println(request.getEnd());
            System.out.println(request.getPrivate());
            System.out.println(request.getProjectName());
            if (!isValidAuth(request.getRequesterId(),request.getCookie())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (foundDocument.size()==1){
                    Document needUpdate=new Document(new Document("_id",new ObjectId(request.getProjectId()) ));
                    Document listUpdate=new Document();
                    if (request.getStart()!=""){
                        System.out.println("notnull"+"getStart");
                        listUpdate.append("start",request.getStart());
                    }
                    if (request.getEnd()!=""){
                        System.out.println("notnull"+"getEnd");

                        listUpdate.append("end",request.getEnd());
                    }
                    if (request.getPrivate()!=""){
                        System.out.println("notnull"+"getPrivate");

                        listUpdate.append("private",request.getPrivate());
                    }
                    if (request.getRequesterId()!=""){
                        foundDocument = coll.find(new Document("projectName",request.getProjectName()).append("ownerId",request.getRequesterId())).into(new ArrayList<>());
                        if (foundDocument.size()==0){
                            listUpdate.append("projectName",request.getProjectName());

                        }else {
                            makeResponseForFailed(responseObserver,"EXIST_PROJECT_NAME","FALSE");
                            return;
                        }
                    }
                    coll.findOneAndUpdate(needUpdate,new Document("$set",listUpdate));
                    makeResponseForUpdateSuccess(responseObserver,request.getProjectId());
                    } else{
                        System.out.println("NOT_EXIST_PROJECT_NAME");
                        makeResponseForFailed(responseObserver,"NOT_EXIST_PROJECT_NAME","TRUE");
                    }
            }
        }

        @Override
        public void deleteProject(DeleteProjectReq request, StreamObserver<ProjectRes> responseObserver) {
            System.out.println("deleteProject");
            System.out.println(request.getProjectId());
            if (!isValidAuth(request.getRequesterId(),request.getCookie())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                DeleteResult result = coll.deleteOne(new Document("_id",new ObjectId(request.getProjectId())).append("ownerId", request.getRequesterId()));

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
            //
            if (!isValidAuth(request.getRequesterId(),request.getCookie())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");
            } else{
                //TODO: GET NOT OWN PROJECT
                Set<String> setProject = new HashSet<String>();
                List<String> team= (List<String>) Mongod.collAuth.find(new Document("_id",new ObjectId(request.getRequesterId()))).into(new ArrayList<>()).get(0).get("teamlist");

                if (team.size()>0){
                    team.forEach(i->{

                        setProject.add(Mongod.collTeam.find(new Document("_id",new ObjectId(i))).into(new ArrayList<>()).get(0).get("projectId").toString());
                    });
                    setProject.forEach(item->{
                        if (item!=null){
                            Document i = Mongod.collProject.find(new Document("_id",new ObjectId(item))).into(new ArrayList<Document>()).get(0);

                            ProjectRes reply=ProjectRes.newBuilder()
                                    .setProjectId(i.get("_id").toString())
                                    .setProjectName(i.get("projectName").toString())
                                    .setStart(i.get("start").toString())
                                    .setEnd(i.get("end").toString())
                                    .setPrivate(i.get("private").toString())
                                    .setProgress(i.get("progress").toString())
                                    .setStatus("SUCCESS").setError("FALSE").build();
                            responseObserver.onNext(reply);

                        }
                    });
                }
                    responseObserver.onCompleted();
                }
            }
        }


}