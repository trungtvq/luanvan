package gRPC.userstory;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.DeleteResult;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.BsonString;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class UserStory {
    public static class UserStoryImpl extends UserStoryGrpc.UserStoryImplBase{
        public static boolean isValidAuth(){
            return true;

        }
        public void makeResponseForUpdateSuccess(StreamObserver res,String id){

            res.onNext(UserStoryRes.newBuilder().setStatus("SUCCESS").setId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status){
            res.onNext(UserStoryRes.newBuilder().setStatus(status).build());
            res.onCompleted();
        }
        @Override
        public void addNewUserStory(AddNewUserStoryReq request, StreamObserver<UserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");
            } else {


                List<Document> foundDocument = Mongod.collUserstory.find(new Document("name",request.getName()).append("projectId",request.getProjectId())).into(new ArrayList<>());
                if (foundDocument.size()!=0){
                    makeResponseForFailed(responseObserver,"EXIST_USERSTORY_NAME");

                } else{
                    Document document = new Document()
                            .append("name",request.getName())
                            .append("ownerId", request.getRequesterId())
                            .append("projectId", request.getProjectId())
                            .append("role", new BsonString(request.getRole()))
                            .append("want", request.getWant())
                            .append("so", request.getSo());
                    Mongod.collUserstory.insertOne(document);


                    foundDocument = Mongod.collUserstory.find(document).into(new ArrayList<>());
                    //check size
                    if (foundDocument.size()!=1){
                        makeResponseForFailed(responseObserver,"WRONG_SIZE");
                    } else {
                        Mongod.collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),
                                new Document("$push",
                                        new Document("stories",foundDocument.get(0).get("_id").toString())));
                        makeResponseForUpdateSuccess(responseObserver,foundDocument.get(0).get("_id").toString());
                    }
                }
            }
        }

        @Override
        public void updateUserStory(UpdateUserStoryReq request, StreamObserver<UserStoryRes> responseObserver) {
            System.out.println("updateUserStory");
            System.out.println(request.getRole());
            System.out.println(request.getWant());
            System.out.println(request.getSo());
            if (!isValidAuth()) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");

            } else {
                //Todos: check projectname is exist
                List<Document> foundDocument = Mongod.collUserstory.find(new Document("_id",new ObjectId( request.getUserStoryId()))).into(new ArrayList<>());
                if (foundDocument.size()==1){
                    Document needUpdate=new Document("_id",new ObjectId(request.getUserStoryId()));
                    Document listUpdate=new Document();

                    if (request.getRole()!=""){
                        listUpdate.append("role",new BsonString(request.getRole()));
                    }
                    if (request.getWant()!=""){
                        listUpdate.append("want",request.getWant());
                    }
                    if (request.getSo()!=""){
                        listUpdate.append("so",request.getSo());
                    }

                    Mongod.collUserstory.findOneAndUpdate(needUpdate,new Document("$set",listUpdate));
                    makeResponseForUpdateSuccess(responseObserver,request.getUserStoryId());
                } else{
                    makeResponseForFailed(responseObserver,"NOT_EXIST_USERSTORY_NAME");
                }
            }
        }

        @Override
        public void deleteUserStory(DeleteUserStoryReq request, StreamObserver<UserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");

            } else {
                DeleteResult result = Mongod.collUserstory.deleteOne(new Document("_id",new ObjectId(request.getUserStoryId()) ));

                if (result.getDeletedCount() != 1) {
                    makeResponseForFailed(responseObserver,"WRONG_SIZE");
                }else{
                    Mongod.collProject.findOneAndUpdate(
                            new Document("_id",new ObjectId(request.getProjectId())),
                                    new Document("$pull",new Document("stories",request.getUserStoryId())));
                    makeResponseForUpdateSuccess(responseObserver,request.getUserStoryId());
                }
            }
        }

        @Override
        public void getAllUserStory(GetAllUserStoryReq request, StreamObserver<GetAllUserStoryRes> responseObserver) {
            if (!isValidAuth()) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");

            } else {
                List<Document> foundDocument = Mongod.collProject.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>());

                if (foundDocument.size()==0){
                    makeResponseForFailed(responseObserver,"EMPTY");

                }  else {
                    List<String> idList= (List<String>) foundDocument.get(0).get("stories");
                    idList.forEach(i->{
                        List<Document> story=Mongod.collUserstory.find(new Document("_id",new ObjectId(i.toString()))).into(new ArrayList<>());
                        if (story.size()==1) {
                            GetAllUserStoryRes reply=GetAllUserStoryRes.newBuilder()
                                    .setId(story.get(0).get("_id").toString())
                                    .setRole(story.get(0).get("role").toString())
                                    .setWant(story.get(0).get("want").toString())
                                    .setSo(story.get(0).get("so").toString())
                                    .setName(story.get(0).get("name").toString())
                                    .setStatus("SUCCESS").build();
                            responseObserver.onNext(reply);
                        }
                    });
                    responseObserver.onCompleted();
                }
            }
        }
    }
}
