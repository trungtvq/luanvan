package gRPC.project;

import co.overlead.gRPC.*;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.Filters;
import database.Mongod;
import io.grpc.stub.StreamObserver;
import org.bson.*;
import org.bson.codecs.configuration.CodecRegistry;
import org.bson.conversions.Bson;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyProject extends MyprojectGrpc.MyprojectImplBase{

    @Override
    public void addNewProject(AddNewProjectReq request, StreamObserver<AddNewProjectRes> responseObserver) {
        //Todos: auth cookie...
        //Todos: check projectname


        MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
        List<Document> foundDocument = coll.find(new Document("projectName",request.getProjectName()).append("userName",request.getUserName())).into(new ArrayList<Document>());
        if (foundDocument.size()==0){
            System.out.println("Wrong size at addNewProject");
            AddNewProjectRes reply=AddNewProjectRes.newBuilder().setStatus("EXIST_PROJECT_NAME").setError("true").build();
            responseObserver.onNext(reply);
            responseObserver.onCompleted();
        }


        Document document = new Document("userName", request.getUserName())
                .append("projectName", request.getProjectName())
                .append("start", request.getStart())
                .append("end", request.getEnd())
                .append("private", request.getPrivate());
        coll.insertOne(document);

        foundDocument = coll.find(new Document("projectName",request.getProjectName()).append("userName",request.getUserName())).into(new ArrayList<Document>());
        //check size
        if (foundDocument.size()>1){
            System.out.println("Wrong size at addNewProject");
        }
        String id= foundDocument.get(0).get("_id").toString();

        AddNewProjectRes reply=AddNewProjectRes.newBuilder().setStatus("OK").setProjectId(id).build();
        responseObserver.onNext(reply);
        responseObserver.onCompleted();
    }

    @Override
    public void updateProject(UpdateProjectReq request, StreamObserver<UpdateProjectRes> responseObserver) {
        super.updateProject(request, responseObserver);
    }

    @Override
    public void deleteProject(DeleteProjectReq request, StreamObserver<DeleteProjectRes> responseObserver) {
        super.deleteProject(request, responseObserver);
    }

    @Override
    public void getAllProject(GetAllProjectReq request, StreamObserver<GetAllProjectRes> responseObserver) {
        super.getAllProject(request, responseObserver);
    }
}