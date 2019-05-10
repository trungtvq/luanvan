package gRPC.task;

import co.overlead.gRPC.GetVelocityReq;
import co.overlead.gRPC.GetVelocityRes;
import co.overlead.gRPC.VelocityGrpc;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import gRPC.auth.AuthAccount;
import io.grpc.stub.StreamObserver;
import org.bson.Document;

import java.util.ArrayList;
import java.util.List;

public class Velocity {

    public static class VelocityImpl extends VelocityGrpc.VelocityImplBase{
        @Override
        public void getVelocity(GetVelocityReq request, StreamObserver<GetVelocityRes> responseObserver) {
            if (AuthAccount.AuthImpl.getSession(request.getRequesterId(),request.getCookie())){//VALID AUTH
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("task"); //get connect
                List<Document> listAllTask= coll.find(new Document("projectId",request.getProjectId())
                        .append("teamId",request.getTeamId())
                        .append("springId",request.getSprintId())).into(new ArrayList<>());
                if (listAllTask.size()==0){
                    responseObserver.onNext(GetVelocityRes.newBuilder().setError("FALSE").setStatus("EMPTY").build());
                }else{
                    listAllTask.forEach(i->{
                        responseObserver.onNext(GetVelocityRes.newBuilder()
                                .setType(i.get("type").toString())
                                .setType(i.get("task").toString())
                                .setNote(i.get("note").toString())
                                .setStatus(i.get("status").toString())
                                .setError(i.get("error").toString())
                                .build());
                    });
                }
                responseObserver.onCompleted();
            }
            else{
                responseObserver.onNext(GetVelocityRes.newBuilder().setStatus("INVALID_SESSION").setError("TRUE").build());
                responseObserver.onCompleted();
            }
        }
    }
}
