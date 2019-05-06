package gRPC.project;

import co.overlead.gRPC.*;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import com.mongodb.client.result.DeleteResult;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.*;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.conversions.Bson;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyProject {
    public boolean isExistProject(String projectName,String userName){
        MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
        List<Document> foundDocument = coll.find(new Document("projectName",projectName).append("userName",userName)).into(new ArrayList<Document>());
        if (foundDocument.size()==0){
            System.out.println("Wrong size at addNewProject");
            return false;
        }
        return true;
    }

    public static class MyProjectImpl extends MyprojectGrpc.MyprojectImplBase{
        public static boolean isValidAuth(){
            return false;

        }

        @Override
        public void addNewProject(AddNewProjectReq request, StreamObserver<AddNewProjectRes> responseObserver) {
            //Todos: auth cookie...
            System.out.println("addNewProject");
            if (!isValidAuth()) {
                AddNewProjectRes reply=AddNewProjectRes.newBuilder().setStatus("AUTH_INVALID").setError("true").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                //Todos: check projectname is exist
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("projectName",request.getProjectName()).append("idOwner",request.getIdOwner())).into(new ArrayList<Document>());
                if (foundDocument.size()!=0){
                    System.out.println("EXIST_PROJECT_NAME");
                    AddNewProjectRes reply=AddNewProjectRes.newBuilder().setStatus("EXIST_PROJECT_NAME").setError("TRUE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                } else{
                    Document document = new Document("idOwner", request.getIdOwner())
                            .append("projectName", request.getProjectName())
                            .append("start", request.getStart())
                            .append("end", request.getEnd())
                            .append("private", request.getPrivate());
                    coll.insertOne(document);

                    foundDocument = coll.find(new Document("projectName",request.getProjectName()).append("idOwner",request.getIdOwner())).into(new ArrayList<Document>());
                    //check size
                    if (foundDocument.size()!=1){
                        System.out.println("After add size >1 or ==0");
                        AddNewProjectRes reply=AddNewProjectRes.newBuilder().setStatus("WRONG_SIZE").setError("TRUE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    } else {
                        String id= foundDocument.get(0).get("_id").toString();
                        AddNewProjectRes reply=AddNewProjectRes.newBuilder().setStatus("SUCCESS").setIdProject(id).setError("FALSE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    }
                }
            }
        }

        @Override
        public void updateProject(UpdateProjectReq request, StreamObserver<UpdateProjectRes> responseObserver) {
            //Todos auth cookie
            if (!isValidAuth()) {
                UpdateProjectRes reply=UpdateProjectRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                //Todos: check projectname is exist
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("idProject",request.getIdProject())).into(new ArrayList<Document>());
                if (foundDocument.size()==1){
                    Document needUpdate=new Document(new Document("idProject",request.getIdProject()));

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
                        foundDocument = coll.find(new Document("projectName",request.getProjectName()).append("idOwner",request.getIdOwner())).into(new ArrayList<Document>());
                        if (foundDocument.size()==0){
                            listUpdate.append("projectName",request.getProjectName());

                        }else {
                            UpdateProjectRes reply=UpdateProjectRes.newBuilder().setStatus("EXIST_PROJECT_NAME").setError("TRUE").build();
                            responseObserver.onNext(reply);
                            responseObserver.onCompleted();
                            return;
                        }
                    }
                    coll.findOneAndUpdate(needUpdate,listUpdate);
                    UpdateProjectRes reply=UpdateProjectRes.newBuilder().setStatus("SUCCESS").setError("false").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                    } else{
                        System.out.println("NOT_EXIST_PROJECT_NAME");
                        UpdateProjectRes reply=UpdateProjectRes.newBuilder().setStatus("NOT_EXIST_PROJECT_NAME").setError("TRUE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    }
            }
        }

        @Override
        public void deleteProject(DeleteProjectReq request, StreamObserver<DeleteProjectRes> responseObserver) {
            //Todos auth cookie
            if (!isValidAuth()) {
                DeleteProjectRes reply = DeleteProjectRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                DeleteResult result = coll.deleteOne(new Document("idProject", request.getIdProject()).append("idOwner", request.getIdOwner()));

                if (result.getDeletedCount() != 1) {
                    System.out.println("Size delete differ 1");
                    DeleteProjectRes reply = DeleteProjectRes.newBuilder().setStatus("WRONG_SIZE").setError("TRUE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }else{
                    DeleteProjectRes reply = DeleteProjectRes.newBuilder().setStatus("SUCCESS").setError("FALSE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }
            }
        }
        @Override
        public void getAllProject(GetAllProjectReq request, StreamObserver<GetAllProjectRes> responseObserver) {
            if (!isValidAuth()) {
                GetAllProjectRes reply = GetAllProjectRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else{
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("idOwner",request.getId())).into(new ArrayList<Document>());

                if (foundDocument.size()==0){
                    GetAllProjectRes reply=GetAllProjectRes.newBuilder().setStatus("EMPTY").setError("FALSE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }  else {
                    foundDocument.forEach(i->{
                        GetAllProjectRes reply=GetAllProjectRes.newBuilder()
                                .setIdProject(i.get("projectId").toString())
                                .setProjectName(i.get("projectName").toString())
                                .setStart(i.get("start").toString())
                                .setEnd(i.get("end").toString())
                                .setPrivate(i.get("private").toString())
                                .setStatus("SUCCESS").setError("FALSE").build();
                        responseObserver.onNext(reply);
                    });
                    responseObserver.onCompleted();
                }
                //TODOS: add project not own
            }
        }
    }

}