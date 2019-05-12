package gRPC.userstory;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.DeleteResult;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class UserStory {
    //string adderId = 1;
    //	string projectId = 2;
    //	string str = 3;
    //	string want = 4;
    //	string so = 5;
    //	string cookie = 6;
    public static class UserStoryImpl extends UserStoryGrpc.UserStoryImplBase{
        public static boolean isValidAuth(){
            return true;

        }
        public void makeResponseForUpdateSuccess(StreamObserver res,String id){

            res.onNext(UserStoryRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error){
            res.onNext(UserStoryRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }
        @Override
        public void addNewUserStory(AddNewUserStoryReq request, StreamObserver<UserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");
            } else {

                //Todos: check projectname is exist
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("userstory");
                List<Document> foundDocument = coll.find(new Document("name",request.getName()).append("projectId",request.getProjectId())).into(new ArrayList<Document>());
                if (foundDocument.size()!=0){
                    makeResponseForFailed(responseObserver,"EXIST_USERSTORY_NAME","FALSE");

                } else{
                    Document document = new Document()
                            .append("name",request.getName())
                            .append("adderId", request.getAdderId())
                            .append("projectId", request.getProjectId())
                            .append("role", request.getRole())
                            .append("want", request.getWant())
                            .append("so", request.getSo());
                    coll.insertOne(document);

                    foundDocument = coll.find(document).into(new ArrayList<>());
                    //check size
                    if (foundDocument.size()!=1){
                        makeResponseForFailed(responseObserver,"WRONG_SIZE","FALSE");
                    } else {
                        makeResponseForUpdateSuccess(responseObserver,foundDocument.get(0).get("_id").toString());
                    }
                }
            }
        }

        @Override
        public void updateUserStory(UpdateUserStoryReq request, StreamObserver<UserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");

            } else {
                //Todos: check projectname is exist
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("userstory");
                List<Document> foundDocument = coll.find(new Document("_id",new ObjectId( request.getUserStoryId()))).into(new ArrayList<>());
                if (foundDocument.size()==1){
                    Document needUpdate=new Document("_id",new ObjectId(request.getUserStoryId()));
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
                    makeResponseForUpdateSuccess(responseObserver,request.getProjectId());
                } else{
                    makeResponseForFailed(responseObserver,"NOT_EXIST_USERSTORY_NAME","FALSE");
                }
            }
        }

        @Override
        public void deleteUserStory(DeleteUserStoryReq request, StreamObserver<UserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");

            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("userstory");
                DeleteResult result = coll.deleteOne(new Document("_id",new ObjectId(request.getUserStoryId()) ));

                if (result.getDeletedCount() != 1) {
                    makeResponseForFailed(responseObserver,"WRONG_SIZE","FALSE");
                }else{
                    makeResponseForUpdateSuccess(responseObserver,request.getUserStoryId());
                }
            }
        }

        @Override
        public void getAllUserStory(GetAllUserStoryReq request, StreamObserver<GetAllUserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID","TRUE");

            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
                List<Document> foundDocument = coll.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>());

                if (foundDocument.size()==0){
                    makeResponseForFailed(responseObserver,"EMPTY","FALSE");

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
                //TODO: add userstory not own
            }
        }
    }
}
