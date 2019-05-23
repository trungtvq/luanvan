package gRPC.task;

import co.overlead.gRPC.GetVelocityReq;
import co.overlead.gRPC.GetVelocityRes;
import co.overlead.gRPC.VelocityGrpc;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import gRPC.auth.AuthAccount;
import io.grpc.stub.StreamObserver;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.List;

public class Velocity {

    public static class VelocityImpl extends VelocityGrpc.VelocityImplBase{
        @Override
        public void getVelocity(GetVelocityReq request, StreamObserver<GetVelocityRes> responseObserver) {
            //get team
            //get list task
            //get task in sprint
            //get task of user
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getCookie())){//VALID AUTH
                List<Document> team= Mongod.collTeam.find(new Document("_id",new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                if (team.size()>0){
                    List<String> task= (List<String>) team.get(0).get("tasks");
                    if (task.size()>0){
                        task.forEach(t->{
                            List<Document> curTask=Mongod.collTask.find(new Document("_id",new ObjectId(t))).into(new ArrayList<>());
                            if (curTask.size()>0){
                                if (curTask.get(0).get("sprintId").equals(request.getSprintId())){
                                    List<String> assignList= (List<String>) curTask.get(0).get("assignedList");
                                    if (assignList.indexOf(request.getRequesterId())!=-1){

                                        responseObserver.onNext(GetVelocityRes.newBuilder()
                                                .setType(curTask.get(0).get("type").toString())
                                                .setTitle(curTask.get(0).get("task").toString())
                                                .setNote(curTask.get(0).get("note").toString())
                                                .setStatusTask(curTask.get(0).get("status").toString())
                                                .setStatus("SUCCESS")
                                                .build());
                                    }
                                }
                            }
                        });
                    }
                }

            }
            else{
                responseObserver.onNext(GetVelocityRes.newBuilder().setStatus("INVALID_SESSION").build());
                responseObserver.onCompleted();
            }
        }
    }
}
