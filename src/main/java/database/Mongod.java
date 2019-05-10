package database;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.BsonArray;
import org.bson.BsonInt32;
import org.bson.BsonString;
import org.bson.Document;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Mongod {
    private static MongoClient mongoClient = MongoClients.create("mongodb+srv://tien:tien@overlead0-ykr4q.gcp.mongodb.net/test?retryWrites=true");
    private static MongoDatabase overleadDB=mongoClient.getDatabase("overlead");
    public static MongoDatabase getOverleadConnection(){
        return overleadDB;
    }

    public static void main(String[] args) {

//        MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
////        Document bson= new Document().append("a", new BsonString("MongoDB"))
////                .append("b", new BsonArray(Arrays.asList(new BsonInt32(1), new BsonInt32(2))))
////                .append("a","2")
////                .append("c","3");
////        coll.insertOne(bson);
//


        MongoCollection<Document> collChat = Mongod.getOverleadConnection().getCollection("testmothaiba");
        Document bson= new Document().append("mothaiba", new BsonString("123"))
                .append("b", new BsonArray(Arrays.asList(new BsonInt32(1), new BsonInt32(2))))
                .append("a","2")
                .append("c","3");
        //collChat.insertOne(bson);
        List<Document> authChat=collChat.find(new Document("mothaiba","123")).into(new ArrayList<>());
        System.out.println(authChat.size());

        Document listItem=new Document("b",6);
        Document updateQuery = new Document("$push", listItem);

       // collChat.findOneAndUpdate(new Document("mothaiba","123"),updateQuery);
        List<Document> foundDocument = collChat.find(new Document("mothaiba","123")).into(new ArrayList<Document>());
        List<Integer> re= (List<Integer>) foundDocument.get(0).get("b");

        re.forEach(i->{
            System.out.println(i);
        });
    }
}
