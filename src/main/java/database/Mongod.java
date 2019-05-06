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
        MongoDatabase aa= mongoClient.getDatabase("overlead");

        MongoCollection<Document> coll = Mongod.getOverleadConnection().getCollection("project");
        Document bson= new Document().append("a", new BsonString("MongoDB"))
                .append("b", new BsonArray(Arrays.asList(new BsonInt32(1), new BsonInt32(2))))
                .append("a","2")
                .append("c","3");
        coll.insertOne(bson);

        Document listItem=new Document("b",6);
        Document updateQuery = new Document("$push", listItem);

        coll.findOneAndUpdate(new Document("a","2"),updateQuery);

        List<Document> foundDocument = coll.find(new Document("a","22").append("c","3")).into(new ArrayList<Document>());
        System.out.print(foundDocument.size());
        String id= foundDocument.get(0).get("_id").toString();
        System.out.println(id);
    }
}
