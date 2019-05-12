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

            res.onNext(DailyScheduleRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setScheduleId (id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error){
            res.onNext(DailyScheduleRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }
        @Override
        public void addNewDailySchedule(AddNewDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            System.out.println(request.getTitle());
         if (true){
          //  if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getCookie())){//VALID AUTH
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("schedule"); //get connect
                Document newDoc=new Document()
                        .append("title",request.getTitle())
                        .append("task",request.getTask())
                        .append("time",request.getTime())
                        .append("scheduleStatus",request.getScheduleStatus());
                coll.insertOne(newDoc);

                List<Document> re= coll.find(newDoc).into(new ArrayList<Document>());
                if (re.size()==1){
                    MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");
                    System.out.println(request.getProjectId());
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
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getCookie())){
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("schedule"); //get connect

                Document needUpdate=new Document()
                        .append("projectId",request.getProjectId())
                        .append("_id",request.getScheduleId());
                Document listUpdate=new Document();
                if (request.getTitle()!="") listUpdate.append("title",request.getTitle());
                if (request.getTask()!="") listUpdate.append("task",request.getTask());
                if (request.getTime()!="") listUpdate.append("time",request.getTime());
                if (request.getScheduleStatus()!="") listUpdate.append("scheduleStatus",request.getScheduleStatus());
                coll.findOneAndUpdate(needUpdate,listUpdate);

                makeResponseForUpdateSuccess(responseObserver,request.getScheduleId());

            } else {
                makeResponseForFailed(responseObserver,"SESSION_INVALID","TRUE");
            }
        }

        @Override
        public void deleteDailySchedule(DeleteDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getCookie())){
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("schedule"); //get connect

                Document needDelete=new Document()
                        .append("projectId",request.getProjectId())
                        .append("_id",request.getScheduleId());
                coll.findOneAndDelete(needDelete);

                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");
                Document deleteQuery = new Document("$pull", new Document("dailySchedule",request.getScheduleId()));
                collProject.findOneAndUpdate(new Document("projectId",request.getProjectId()),deleteQuery);

                makeResponseForUpdateSuccess(responseObserver,request.getScheduleId());

            } else {
                makeResponseForFailed(responseObserver,"SESSION_INVALID","TRUE");
            }
        }

        @Override
        public void getAllDailySchedule(GetAllDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getCookie())){
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("schedule"); //get connect
                MongoCollection<Document> collProject= Mongod.getOverleadConnection().getCollection("project");
                List<Document> schedule= collProject.find(new Document("_id",request.getProjectId())).into(new ArrayList<>());
                List<String> re= (List) schedule.get(0).get("dailySchedule");
                re.forEach(i->{
                    Document ele=coll.find(new Document("_id",i)).into(new ArrayList<>()).get(0);
                    responseObserver.onNext(DailyScheduleRes.newBuilder().setStatus("SUCCESS").setError("FALSE")
                            .setScheduleId(i)
                            .setTask(ele.get("task").toString())
                            .setTime(ele.get("time").toString())
                            .setTitle(ele.get("title").toString())
                            .setScheduleStatus(ele.get("scheduleStatus").toString())
                            .build());
                });
                responseObserver.onCompleted();

            } else {
                makeResponseForFailed(responseObserver,"SESSION_INVALID","TRUE");
            }
        }
    }
}
