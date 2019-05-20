package service.pubsub;

public class Message extends Post {
    String message;
    String name;
    String userId;
    public String getUserId(){
        return userId;
    }
    public String getName(){
        return name;
    }

    public String getMessage() {
        return message;
    }

    public Message(String message, String name, String userId) {
        super(message);
        this.message=message;
        this.name=name;
        this.userId=userId;
    }
}