package gRPC.productbacklog;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.*;
import org.bson.conversions.Bson;
import org.bson.types.ObjectId;

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

        public Document findProductBacklogInPB(String projectId, String title, Date createTime) {
            MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");
            List<Document> newBacklog = coll.find(new Document()
                    .append("title", title)
                    .append("projectId", projectId)
                    .append("createTime", createTime)
            ).into(new ArrayList<>());
            if (newBacklog.size() == 1) {
                return newBacklog.get(0);
            } else return null;
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
            if (!isValidAuth(request.getRequesterId(), request.getCookie())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");


                List<Document> project = collProject.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<Document>());

                if (project.size() == 0) {
                    makeResponseForFailed(responseObserver, "NOT_EXIST_PROJECT", "FALSE");
                } else {
                    //exist Project
                    Date createTime = new Date();
                    coll.insertOne(new Document()
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
                    );
                    Document newBacklog = findProductBacklogInPB(request.getProjectId(), request.getTitle(), createTime);

                    //create query
                    if (newBacklog != null) {
                        makeResponseForFailed(responseObserver, "DB_ERROR", "FALSE");
                    } else {
                        List<String> backlogList = (List<String>) project.get(0).get("backlogs");
                        String id = newBacklog.get("_id").toString();
                        if (backlogList.size() == 0) {

                            //create query
                            Document bson = new Document("backlogs", new BsonArray(Arrays.asList(new BsonString(id))));
                            collProject.findOneAndUpdate(new Document("_id",new ObjectId( request.getProjectId())),new Document("$set",bson));
                        } else {
                            //add query
                            Document listItem = new Document("backlogs", id);
                            Document updateQuery = new Document("$push", listItem);
                            collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId()) ), updateQuery);
                        }
                        makeResponseForUpdateSuccess(responseObserver, id);
                    }
                }
            }
        }

        @Override
        public void updateProductBacklog(UpdateProductBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            System.out.println("updateProductBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getCookie())) {
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
            System.out.println("addNewProductBacklog");
            if (!isValidAuth(request.getRequesterId(), request.getCookie())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");
                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("productbacklog");

                Document found = findProductBacklogWithId(request.getProjectId(), request.getProductBacklogId());
                //create query
                if (found == null) {
                    makeResponseForFailed(responseObserver, "NOT_FOUND_DATA", "FALSE");
                } else {
                    Document deleteQuery = new Document("$pull", new Document("backlogs",request.getProductBacklogId()));
                    collProject.findOneAndUpdate(new Document("_id",new ObjectId(request.getProjectId()) ),deleteQuery);
                    coll.findOneAndDelete(new Document("_id",new ObjectId(request.getProductBacklogId())));
                    //TODO: Add list log delete
                    makeResponseForUpdateSuccess(responseObserver,request.getProductBacklogId());
                }
            }
        }

        @Override
        public void sendToSprintBacklog(SendToSprintBacklogReq request, StreamObserver<ProductBacklogRes> responseObserver) {
            super.sendToSprintBacklog(request, responseObserver);
        }

        @Override
        public void getAllProductBacklog(GetAllProductBacklogReq request, StreamObserver<GetAllProductBacklogRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getCookie())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("productbacklog");
                MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");

                List<Document> listId=collProject.find(new Document("_id",new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (listId.size()==0){
                    makeResponseForFailed(responseObserver,"NOT_FOUND_PROJECT","FALSE");
                }else{
                    List<String> re=(List<String>)listId.get(0).get("backlogs");
                    if (re.size()==0){
                        makeResponseForFailed(responseObserver,"EMPTY","FALSE");
                    }else{
                        re.forEach(i->{
                            Document r= coll.find(new Document("_id",new ObjectId(i))).into(new ArrayList<>()).get(0);
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
                                    .build());
                        });
                        responseObserver.onCompleted();
                    }
                }
            }
        }
    }
}
