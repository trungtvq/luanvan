package gRPC.schedule;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import gRPC.auth.AuthAccount;
import io.grpc.stub.StreamObserver;
import org.bson.*;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class DailySchedule {
    public static class DailyScheduleImpl extends DailyscheduleGrpc.DailyscheduleImplBase{
        public void makeResponseForUpdateSuccess(StreamObserver res,String id){
            res.onNext(DailyScheduleRes.newBuilder().setStatus("SUCCESS").setScheduleId (id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error){
            res.onNext(DailyScheduleRes.newBuilder().setStatus(status).build());
            res.onCompleted();
        }
        @Override
        public void addNewDailySchedule(AddNewDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            System.out.println(request.getTitle());
        // if (true){
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getAccessToken())){//VALID AUTH
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("schedule"); //get connect
                Document newDoc=new Document()
                        .append("title",request.getTitle())
                        ;
                coll.insertOne(newDoc);

                List<Document> re= coll.find(newDoc).into(new ArrayList<>());
                if (re.size()==1){
                    MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");

                    Document project=collProject.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>()).get(0);
                    if (project.get("dailySchedule")==null){
                        //EMPTY dailySchedule
                        System.out.println("EMPTY");
                        System.out.println(re.get(0).get("_id").toString());

                        Document listItem=new Document("dailySchedule", new BsonArray(Arrays.asList(new BsonString(re.get(0).get("_id").toString()))));

                        Document updateQuery = new Document("$set", listItem);
                        System.out.println(collProject.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>()));
                        collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),updateQuery);
                    } else{
                        System.out.println("NOT EMPTY=>INSERT");
                        Document updateQuery = new Document("$push", new Document("dailySchedule",re.get(0).get("_id").toString()));
                        collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),updateQuery);
                    }
                    makeResponseForUpdateSuccess(responseObserver,re.get(0).get("_id").toString());
                }else {
                    makeResponseForFailed(responseObserver,"WRONG_SIZE","TRUE");
                }
            } else {
                makeResponseForFailed(responseObserver,"SESSION_INVALID","TRUE");
            }
        }

        @Override
        public void updateDailySchedule(UpdateDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getAccessToken())){
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("schedule"); //get connect

                Document needUpdate=new Document()
                        .append("projectId",request.getProjectId())
                        .append("_id",request.getScheduleId());
                Document listUpdate=new Document();
                if (request.getTitle()!="") listUpdate.append("title",request.getTitle());
                coll.findOneAndUpdate(needUpdate,listUpdate);

                makeResponseForUpdateSuccess(responseObserver,request.getScheduleId());

            } else {
                makeResponseForFailed(responseObserver,"SESSION_INVALID","TRUE");
            }
        }

        @Override
        public void deleteDailySchedule(DeleteDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
//            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.get())){
//                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("schedule"); //get connect
//                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");
//
//                coll.findOneAndDelete(new Document("_id",new ObjectId(request.getScheduleId())));
//
//                Document deleteQuery = new Document("$pull", new Document("dailySchedule",request.getScheduleId()));
//                collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId()) ),deleteQuery);
//
//                makeResponseForUpdateSuccess(responseObserver,request.getScheduleId());
//
//            } else {
//                makeResponseForFailed(responseObserver,"SESSION_INVALID","TRUE");
//            }
        }

        @Override
        public void getAllDailySchedule(GetAllDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getAccessToken())){
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("schedule"); //get connect
                MongoCollection<Document> collProject= Mongod.getOverleadConnection().getCollection("project");
                List<Document> schedule= collProject.find(new Document("_id",new ObjectId(request.getProjectId()) )).into(new ArrayList<>());
                List<String> re= (List) schedule.get(0).get("dailySchedule");
                re.forEach(i->{
                    Document ele=coll.find(new Document("_id",new ObjectId(i))).into(new ArrayList<>()).get(0);
                    responseObserver.onNext(DailyScheduleRes.newBuilder().setStatus("SUCCESS")
                            .setScheduleId(i)
                            .setTitle(ele.get("title").toString())
                            .build());
                });
                responseObserver.onCompleted();

            } else {
                makeResponseForFailed(responseObserver,"SESSION_INVALID","TRUE");
            }
        }
    }
}
