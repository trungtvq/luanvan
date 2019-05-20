package service.pubsub;

abstract class Post {
    String message;

    Post(String message) {
        this.message = message;
    }
}
