package helper.caching;

public interface IPushToCache {
    void pushToCache(String requesterId,String channelId,String msg,String type);
}
