package gRPC.schedule;

import co.overlead.gRPC.*;
import database.Mongod;
import gRPC.auth.AuthAccount;
import io.grpc.stub.StreamObserver;
import org.bson.*;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

import static helper.auth.RequestAuth.isValidAuth;

public class DailySchedule {
    public static class DailyScheduleImpl extends DailyscheduleGrpc.DailyscheduleImplBase{
        public void makeResponseForUpdateSuccess(StreamObserver res,String id){
            res.onNext(DailyScheduleRes.newBuilder().setStatus("SUCCESS").setScheduleId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status){
            res.onNext(DailyScheduleRes.newBuilder().setStatus(status).build());
            res.onCompleted();
        }
        @Override
        public void addNewDailySchedule(AddNewDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            System.out.println("addNewDailySchedule");
            System.out.println(request);
            if (isValidAuth(request.getRequesterId(),request.getAccessToken())){//VALID AUTH
                Document newDoc=new Document()
                        .append("title",request.getTitle())
                        .append("description",request.getDescription())
                        .append("start",request.getDateAdd())
                        .append("status","Todos")
                        ;
                Mongod.collSchedule.insertOne(newDoc);

                List<Document> re= Mongod.collSchedule.find(newDoc).into(new ArrayList<>());
                if (re.size()>0){

                    Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())),
                                new Document("$push",
                                        new Document("dailySchedule",re.get(0).get("_id").toString())));

                    makeResponseForUpdateSuccess(responseObserver,re.get(0).get("_id").toString());
                }else {
                    makeResponseForFailed(responseObserver,"WRONG_SIZE");
                }
            } else {
                System.out.println("AUTH INVALID");
                makeResponseForFailed(responseObserver,"AUTH_INVALID");
            }
        }

        @Override
        public void updateDailySchedule(UpdateDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            System.out.println("updateDailySchedule");
            System.out.println(request.getScheduleId());
            if (isValidAuth(request.getRequesterId(),request.getAccessToken())){//VALID AUTH

                System.out.println(Mongod.collSchedule.find(new Document("_id",new ObjectId(request.getScheduleId()))));
                    Mongod.collSchedule.findOneAndUpdate(new Document("_id", new ObjectId(request.getScheduleId())),
                            new Document("$set",
                                    new Document("status",request.getStatus())));
                    makeResponseForUpdateSuccess(responseObserver,request.getScheduleId());

            } else {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");
            }
            System.out.println("end update");

        }

        @Override
        public void deleteDailySchedule(DeleteDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            System.out.println("addNewDailySchedule");
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getAccessToken())){//VALID AUTH

                List<Document> re= Mongod.collSchedule.find(new Document("_id",new ObjectId(request.getScheduleId()))).into(new ArrayList<>());
                if (re.size()==1){

                    Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())),
                            new Document("$pull",
                                    new Document("dailySchedule",re.get(0).get("_id").toString())));
                    Mongod.collSchedule.deleteOne(new Document("_id",new ObjectId(request.getScheduleId())));
                    makeResponseForUpdateSuccess(responseObserver,request.getScheduleId());
                }else {
                    makeResponseForFailed(responseObserver,"WRONG_SIZE");
                }
            } else {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");
            }
        }

        @Override
        public void getAllDailySchedule(GetAllDailyScheduleReq request, StreamObserver<DailyScheduleRes> responseObserver) {
            if (isValidAuth(request.getRequesterId(),request.getAccessToken())){
                List<Document> teams= Mongod.collTeam.find(new Document("_id",new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                List<String> schedules= (List) teams.get(0).get("dailySchedule");
                System.out.println(schedules);
                if (schedules!=null){
                    schedules.forEach(i->{
                        Document ele=Mongod.collSchedule.find(new Document("_id",new ObjectId(i))).into(new ArrayList<>()).get(0);
                        System.out.println(ele);
                        responseObserver.onNext(DailyScheduleRes.newBuilder().setStatus("SUCCESS")
                                .setScheduleId(i)
                                .setTitle(ele.get("title").toString())
                                .setStatusSchedule(ele.get("status").toString())
                                .setDescription(ele.get("description").toString())
                                .setDataAdd(ele.get("status").toString())
                                .build());
                    });
                    responseObserver.onCompleted();
                }else
                {
                    makeResponseForFailed(responseObserver,"EMPTY");
                }


            } else {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");
            }
            System.out.println("end");
        }
    }
}
