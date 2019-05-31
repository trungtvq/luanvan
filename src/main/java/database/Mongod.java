package database;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.BsonArray;
import org.bson.BsonInt32;
import org.bson.BsonString;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Mongod {
   // private static MongoClient mongoClient = MongoClients.create("mongodb+srv://tien:tien@overlead0-ykr4q.gcp.mongodb.net/test?retryWrites=true");
    private static MongoClient mongoClient = MongoClients.create("mongodb://localhost/overlead");

    private static MongoDatabase overleadDB=mongoClient.getDatabase("overlead");
    public static MongoDatabase getOverleadConnection(){
        return overleadDB;
    }

    public static final MongoCollection<Document> collProject = Mongod.getOverleadConnection().getCollection("project");
    public static final MongoCollection<Document> collTeam = Mongod.getOverleadConnection().getCollection("team");
    public static final MongoCollection<Document> collAuth = Mongod.getOverleadConnection().getCollection("auth");
    public static final MongoCollection<Document> collTask = Mongod.getOverleadConnection().getCollection("task");

    public static final MongoCollection<Document> collSprint = Mongod.getOverleadConnection().getCollection("sprint");
    public static final MongoCollection<Document> collSchedule = Mongod.getOverleadConnection().getCollection("schedule");
    public static final MongoCollection<Document> collBacklog = Mongod.getOverleadConnection().getCollection("productbacklog");

    public static void main(String[] args) {

//        MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
//        Document bson= new Document().append("aaaa", new BsonString("MongoDB"))
//          //      .append("b", new BsonArray(Arrays.asList(new BsonInt32(1), new BsonInt32(2))))
//                .append("aaad","2")
//                .append("cfdf","3");
//        coll.insertOne(bson);
//
//        Document a=new Document().append("b", new BsonArray(Arrays.asList(new BsonInt32(1), new BsonInt32(2))));
//        coll.findOneAndUpdate(bson,a);
//        String id=coll.find(bson).into(new ArrayList<>()).get(0).get("_id").toString();
//
//
//        List< Document> project=coll.find(new Document("_id",new ObjectId(id) )).into(new ArrayList<>());
//        System.out.println(project);
//        MongoCollection<Document> collChat = Mongod.getOverleadConnection().getCollection("testmothaiba");
//         bson= new Document().append("mothaiba", new BsonString("123"))
//                .append("b", new BsonArray(Arrays.asList(new BsonInt32(1), new BsonInt32(2))))
//                .append("a","2")
//                .append("c","3");
//        //collChat.insertOne(bson);
//        List<Document> authChat=collChat.find(new Document("mothaiba","123")).into(new ArrayList<>());
//        System.out.println(authChat.size());
//
//        Document listItem=new Document("b",6);
//        Document updateQuery = new Document("$push", listItem);
//
//       // collChat.findOneAndUpdate(new Document("mothaiba","123"),updateQuery);
//        List<Document> foundDocument = collChat.find(new Document("mothaiba","123")).into(new ArrayList<Document>());
//        List<Integer> re= (List<Integer>) foundDocument.get(0).get("b");
//
//        re.forEach(i->{
//            System.out.println(i);
//        });
        MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");

//        Document document = new Document("ownerId", 123)
//                .append("projectName", 1234)
//                .append("start", 12345)
//                .append("end", 123456)
//                .append("private", 1234567)
//                .append("tasks",new BsonArray(Arrays.asList()));
//        coll.insertOne(document);
        coll.findOneAndUpdate(new Document("_id",new ObjectId("5cd8d4776e1d974712d479c0")),new Document("tasks","1623"));
    }
}
