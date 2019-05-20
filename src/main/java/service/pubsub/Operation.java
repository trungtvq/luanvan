package service.pubsub;

import java.lang.annotation.Annotation;
import java.lang.ref.WeakReference;
import java.lang.reflect.Method;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class Operation extends Event {
    public void subscribe(String channelName, Subscriber subscriber) {
        if (!channels.containsKey(channelName)) {
            channels.put(channelName, new ConcurrentHashMap<>());
        }
        channels.get(channelName).put(subscriber.getProjectId(), new WeakReference<>(subscriber));
    }
    public void unsubscribe(String channelName, String id) {
        if (channels.containsKey(channelName)) {
            channels.get(channelName).remove(id);

            channels.get(channelName).remove(id);
            if (channels.get(channelName).size()==0){
                channels.remove(channelName);
            }
        }
    }

    public void publish(String channelName, Post message) {
        if (channels.get(channelName).size()==0) return;
        for(Map.Entry<String, WeakReference<Object>> subs : channels.get(channelName).entrySet()) {
            WeakReference<Object> subscriberRef = subs.getValue();

            Object subscriberObj = subscriberRef.get();

            for (final Method method : subscriberObj.getClass().getDeclaredMethods()) {
                Annotation annotation = method.getAnnotation(OnMessage.class);
                if (annotation != null) {
                    deliverMessage(subscriberObj, method, message);
                }
            }
        }

    }

    <T, P extends Post> boolean deliverMessage(T subscriber, Method method, Post message) {
        try {
            boolean methodFound = false;
            for (final Class paramClass : method.getParameterTypes()) {
                if (paramClass.equals(message.getClass())) {
                    methodFound = true;
                    break;
                }
            }
            if (methodFound) {
                method.setAccessible(true);
                method.invoke(subscriber, message);
            }

            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }
}