package gRPC.userstory;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.DeleteResult;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class UserStory {
    //string adderId = 1;
    //	string projectId = 2;
    //	string str = 3;
    //	string want = 4;
    //	string so = 5;
    //	string cookie = 6;
    public static class UserStoryImpl extends UserstoryGrpc.UserstoryImplBase{
        public static boolean isValidAuth(){
            return false;

        }

        @Override
        public void addNewUserStory(AddNewUserStoryReq request, StreamObserver<AddNewUserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                AddNewUserStoryRes reply=AddNewUserStoryRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {


                //Todos: check projectname is exist
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("userstory");
                List<Document> foundDocument = coll.find(new Document("name",request.getName()).append("projectId",request.getProjectId())).into(new ArrayList<Document>());
                if (foundDocument.size()!=0){
                    System.out.println("EXIST_USERSTORY_NAME");
                    AddNewUserStoryRes reply=AddNewUserStoryRes.newBuilder().setStatus("EXIST_USERSTORY_NAME").setError("TRUE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                } else{
                    Document document = new Document()
                            .append("name",request.getName())
                            .append("adderId", request.getAdderId())
                            .append("projectId", request.getProjectId())
                            .append("role", request.getRole())
                            .append("want", request.getWant())
                            .append("so", request.getSo());
                    coll.insertOne(document);

                    foundDocument = coll.find(new Document("name",request.getName()).append("adderId",request.getAdderId())).into(new ArrayList<Document>());
                    //check size
                    if (foundDocument.size()!=1){
                        System.out.println("After add size >1 or ==0");
                        AddNewUserStoryRes reply=AddNewUserStoryRes.newBuilder().setStatus("WRONG_SIZE").setError("TRUE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    } else {
                        String id= foundDocument.get(0).get("_id").toString();
                        AddNewUserStoryRes reply=AddNewUserStoryRes.newBuilder().setStatus("SUCCESS").setId(id).setError("FALSE").build();
                        responseObserver.onNext(reply);
                        responseObserver.onCompleted();
                    }
                }
            }
        }

        @Override
        public void updateUserStory(UpdateUserStoryReq request, StreamObserver<UpdateUserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                UpdateUserStoryRes reply=UpdateUserStoryRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                //Todos: check projectname is exist
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("userstory");
                List<Document> foundDocument = coll.find(new Document("projectId",request.getProjectId()).append("userstoryId",request.getUserstoryId())).into(new ArrayList<Document>());
                if (foundDocument.size()==1){
                    Document needUpdate=new Document(new Document("projectId",request.getProjectId()).append("userstoryId",request.getUserstoryId()));

                    Document listUpdate=new Document();

                    if (request.getRole()!=""){
                        listUpdate.append("role",request.getRole());
                    }
                    if (request.getWant()!=""){
                        listUpdate.append("want",request.getWant());
                    }
                    if (request.getSo()!=""){
                        listUpdate.append("so",request.getSo());
                    }

                    coll.findOneAndUpdate(needUpdate,listUpdate);
                    UpdateUserStoryRes reply=UpdateUserStoryRes.newBuilder().setStatus("SUCCESS").setError("FALSE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                } else{
                    System.out.println("NOT_EXIST_PROJECT_NAME");
                    UpdateUserStoryRes reply=UpdateUserStoryRes.newBuilder().setStatus("NOT_EXIST_USERSTORY_NAME").setError("TRUE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }
            }
        }

        @Override
        public void deleteUserStory(DeleteUserStoryReq request, StreamObserver<DeleteUserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                DeleteUserStoryRes reply=DeleteUserStoryRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                // string deleterId = 1;
                //    string projectId = 2;
                //	string userstoryId = 3;
                //	string cookie = 7;
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("userstory");
                DeleteResult result = coll.deleteOne(new Document("projectId", request.getProjectId()).append("userstoryId", request.getUserstoryId()));

                if (result.getDeletedCount() != 1) {
                    System.out.println("Size delete differ 1");
                    DeleteUserStoryRes reply = DeleteUserStoryRes.newBuilder().setStatus("WRONG_SIZE").setError("TRUE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }else{
                    DeleteUserStoryRes reply = DeleteUserStoryRes.newBuilder().setStatus("SUCCESS").setError("FALSE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }
            }
        }

        @Override
        public void getAllUserStory(GetAllUserStoryReq request, StreamObserver<GetAllUserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                GetAllUserStoryRes reply=GetAllUserStoryRes.newBuilder().setStatus("AUTH_INVALID").setError("TRUE").build();
                responseObserver.onNext(reply);
                responseObserver.onCompleted();
            } else {
                //string role = 1;
                //	string want = 2;
                //	string so = 3;
                //	string status = 4;
                //	string error=5;
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("projectId",request.getProjectId())).into(new ArrayList<Document>());

                if (foundDocument.size()==0){
                    GetAllUserStoryRes reply=GetAllUserStoryRes.newBuilder().setStatus("EMPTY").setError("FALSE").build();
                    responseObserver.onNext(reply);
                    responseObserver.onCompleted();
                }  else {
                    foundDocument.forEach(i->{
                        GetAllUserStoryRes reply=GetAllUserStoryRes.newBuilder()
                                .setRole(i.get("role").toString())
                                .setWant(i.get("want").toString())
                                .setSo(i.get("so").toString())
                                .setStatus("SUCCESS").setError("FALSE").build();
                        responseObserver.onNext(reply);
                    });
                    responseObserver.onCompleted();
                }
                //TODOS: add userstory not own
            }
        }
    }
}
