package gRPC.productbacklog;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.*;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static helper.auth.RequestAuth.isValidAuth;

public class ProductBacklog {

    public static class ProductBacklogImpl extends ProductBacklogGrpc.ProductBacklogImplBase {
        public void makeResponseForUpdateSuccess(StreamObserver res, String id) {
            res.onNext(ProductBacklogRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setProductBacklogId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error) {
            res.onNext(ProductBacklogRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }



        public Document findProductBacklogWithId(String projectId, String id) {
            MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");
            List<Document> newBacklog = coll.find(new Document()
                    .append("_id", new ObjectId(id))
                    .append("projectId", projectId)
            ).into(new ArrayList<>());
            if (newBacklog.size() == 1) {
                return newBacklog.get(0);
            } else return null;
        }

        @Override
        public void addNewProductBacklog(AddNewProductBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            System.out.println("addNewProductBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {

                List<Document> project = Mongod.collProject.find(
                        new Document("_id",new ObjectId(request.getProjectId())))
                                .into(new ArrayList<>());

                if (project.size() == 0) {
                    makeResponseForFailed(responseObserver, "NOT_EXIST_PROJECT", "FALSE");
                } else {
                    //exist Project
                    Date createTime = new Date();
                    Document newDoc=new  Document()
                            .append("title", request.getTitle())
                            .append("projectId", request.getProjectId())
                            .append("role", request.getRole())
                            .append("want", request.getWant())
                            .append("so", request.getSo())
                            .append("statusBacklog", request.getStatusBacklog())
                            .append("priority", request.getPriority())
                            .append("estimation", request.getEstimation())
                            .append("sprintId", request.getSprintId())
                            .append("createTime", createTime)
                            .append("isSprintBacklog","false");

                    Mongod.collBacklog.insertOne(newDoc);
                    Document newBacklog = Mongod.collBacklog.find(newDoc).into(new ArrayList<>()).get(0);
                    //create query
                    System.out.println(newBacklog.get("_id").toString());
                    if (newBacklog == null) {
                        makeResponseForFailed(responseObserver, "DB_ERROR", "FALSE");
                    } else {
                            Mongod.collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),
                                    new Document("$push",
                                    new Document("backlogs", newBacklog.get("_id").toString())));

                        makeResponseForUpdateSuccess(responseObserver, newBacklog.get("_id").toString());
                    }
                }
            }
        }

        @Override
        public void updateProductBacklog(UpdateProductBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            System.out.println("updateProductBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");
                Document found = findProductBacklogWithId(request.getProjectId(), request.getProductBacklogId());
                //create query
                if (found != null) {
                    makeResponseForFailed(responseObserver, "NOT_FOUND_DATA", "FALSE");
                } else {
                    coll.findOneAndUpdate(new Document().append("_id",new ObjectId( request.getProductBacklogId())).append("projectId",request.getProjectId()),
                            new Document().append("title", request.getTitle())
                                    .append("projectId", request.getProjectId())
                                    .append("role", request.getRole())
                                    .append("want", request.getWant())
                                    .append("so", request.getSo())
                                    .append("statusBacklog", request.getStatusBacklog())
                                    .append("priority", request.getPriority())
                                    .append("estimation", request.getEstimation())
                                    .append("sprintId", request.getSprintId())

                    );
                    //TODO: Add list log update
                    makeResponseForUpdateSuccess(responseObserver,request.getProductBacklogId());
                }
            }
        }


        @Override
        public void deleteProductBacklog(DeleteProductBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            System.out.println("deleteProductBacklog");


            System.out.println(request.getProductBacklogId());
            System.out.println(request.getProjectId());
            System.out.println("deleteProductBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                Mongod.collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),
                        new Document("$pull",
                                new Document("backlogs",request.getProductBacklogId())));
                Mongod.collBacklog.findOneAndDelete(new Document("_id",new ObjectId(request.getProjectId())));
                makeResponseForUpdateSuccess(responseObserver,request.getProductBacklogId());

            }
        }

        @Override
        public void sendToSprintBacklog(SendToSprintBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            System.out.println("sendToSprintBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");
                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");
                List<Document> get=collProject.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (get.size()==0){
                    makeResponseForFailed(responseObserver,"NOT_EXIST_PROJECT","FALSE");
                }else{
                    collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),
                            new Document("$set",
                                    new Document("isSprintBacklog","true")
                                            .append("start",request.getStart())
                                            .append("deadline",request.getDeadline())));
                    makeResponseForUpdateSuccess(responseObserver,request.getProductBacklogId());
                }
            }
        }

        @Override
        public void getAllProductBacklog(GetAllProductBacklogReq request, StreamObserver<GetAllProductBacklogRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {

                List<Document> listId= Mongod.collProject.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (listId.size()==0){
                    makeResponseForFailed(responseObserver,"NOT_FOUND_PROJECT","FALSE");
                }else{
                    List<String> re=(List<String>)listId.get(0).get("backlogs");
                    if (re.size()==0){
                        makeResponseForFailed(responseObserver,"EMPTY","FALSE");
                    }else{
                        re.forEach(i->{
                            Document r= Mongod.collBacklog.find(new Document("_id",new ObjectId(i)).append("isSprintBacklog","false")).into(new ArrayList<>()).get(0);
                            responseObserver.onNext(GetAllProductBacklogRes.newBuilder()
                                    .setProductBacklogId(i)
                                    .setRole(r.get("role").toString())
                                    .setWant(r.get("want").toString())
                                    .setSo(r.get("so").toString())
                                    .setStatusBacklog(r.get("statusBacklog").toString())
                                    .setPriority(r.get("priority").toString())
                                    .setEstimation(r.get("estimation").toString())
                                    .setSprintId(r.get("sprintId").toString())
                                    .setStatus("SUCCESS")
                                    .setError("FALSE")
                                    .setTitle(r.get("title").toString())
                                    .build());
                        });
                        responseObserver.onCompleted();
                    }
                }
            }
        }
    }
}
