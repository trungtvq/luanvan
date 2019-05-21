package gRPC.productbacklog;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.DeleteResult;
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
                            .append("isSprintBacklog","false")
                            .append("isUS","false")
                            .append("date",new Date());

                    Mongod.collBacklog.insertOne(newDoc);
                    Document newBacklog = Mongod.collBacklog.find(newDoc).into(new ArrayList<>()).get(0);
                    //create query
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
        public void sendToUserStory(SendToSprintBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            System.out.println("updateProductBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> found=Mongod.collBacklog.find(new Document()
                        .append("_id",new ObjectId(request.getProductBacklogId()))
                        .append("projectId",request.getProjectId())
                        .append("isUS","false")
                        .append("isSprintBacklog","false")).into(new ArrayList<>());
                //create query
                if (found.size()==0) {
                    makeResponseForFailed(responseObserver, "NOT_FOUND_DATA", "FALSE");
                } else {


                    Mongod.collBacklog.findOneAndUpdate(new Document()
                                    .append("_id",new ObjectId(request.getProductBacklogId())),
                            new Document("$set",new Document("isUS","true"))


                    );
                    //TODO: Add list log update
                    makeResponseForUpdateSuccess(responseObserver,request.getProductBacklogId());
                }
            }
        }

        @Override
        public void updateProductBacklog(UpdateProductBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            System.out.println("updateProductBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> found=Mongod.collBacklog.find(new Document()
                        .append("_id",new ObjectId(request.getProductBacklogId()))
                        .append("projectId",request.getProjectId())
                        .append("isUS","false")
                        .append("isSprintBacklog","false")).into(new ArrayList<>());
                //create query
                if (found.size()==0) {
                    makeResponseForFailed(responseObserver, "NOT_FOUND_DATA", "FALSE");
                } else {
                    System.out.println("SUCCESS");
                    System.out.println(request.getRole());
                    Document u=new Document();
                    if (!request.getRole().equals(""))u.append("role", request.getRole());
                    if (!request.getWant().equals(""))u.append("want", request.getWant());
                    if (!request.getStatusBacklog().equals(""))u.append("statusBacklog", request.getStatusBacklog());
                    if (!request.getPriority().equals(""))u.append("priority", request.getPriority());
                    if (!request.getEstimation().equals(""))u.append("estimation", request.getEstimation());
                    if (!request.getSprintId().equals(""))u.append("sprintId", request.getSprintId());
                    if (!request.getSo().equals(""))u.append("so", request.getSo());

                    Mongod.collBacklog.findOneAndUpdate(new Document()
                                    .append("_id",new ObjectId(request.getProductBacklogId()))
                                    .append("projectId",request.getProjectId())
                                    .append("isUS","false")
                                    .append("isSprintBacklog","false"),
                                   new Document("$set",u)
                                  //  .append("title", request.getTitle())
                                   // .append("projectId", request.getProjectId())


                    );
                    //TODO: Add list log update
                    makeResponseForUpdateSuccess(responseObserver,request.getProductBacklogId());
                }
            }
        }


        @Override
        public void deleteProductBacklog(DeleteProductBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            System.out.println("deleteProductBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {

                DeleteResult result= Mongod.collBacklog.deleteOne(new Document("_id",new ObjectId(request.getProductBacklogId())).append("isUS","false").append("isSprintBacklog","false"));
                if (result.getDeletedCount()>0){
                    System.out.println("SUCCESS");
                    Mongod.collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId())),
                            new Document("$pull",
                                    new Document("backlogs",request.getProductBacklogId())));
                    makeResponseForUpdateSuccess(responseObserver,request.getProductBacklogId());

                }else{
                    makeResponseForFailed(responseObserver, "NOT_FOUND_DELETE", "FALSE");
                    System.out.println("NOT_FOUND_DELETE");

                }


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
                        System.out.println(re);
                        re.forEach(i->{
                            System.out.println(i);
                            List<Document> res= Mongod.collBacklog.find(new Document("_id",new ObjectId(i)).append("isSprintBacklog","false").append("isUS","false")).into(new ArrayList<>());
                            if (res.size()>0) {
                                Document r = res.get(0);
                                responseObserver.onNext(GetAllProductBacklogRes.newBuilder()
                                        .setProductBacklogId(i)
                                        .setRole(r.get("role")==null?"":r.get("role").toString())
                                        .setWant(r.get("want")==null?"":r.get("want").toString())
                                        .setSo(r.get("so")==null?"":r.get("so").toString())
                                        .setStatusBacklog(r.get("statusBacklog")==null?"":r.get("statusBacklog").toString())
                                        .setPriority(r.get("priority")==null?"":r.get("priority").toString())
                                        .setEstimation(r.get("estimation")==null?"":r.get("estimation").toString())
                                        .setSprintId(r.get("sprintId")==null?"":r.get("sprintId").toString())
                                        .setStatus("SUCCESS")
                                        .setError("FALSE")
                                        .setTitle(r.get("title").toString())
                                        .build());
                            }});


                        responseObserver.onCompleted();
                    }
                }
            }
        }
    }
}
