package service.pubsub;

import java.lang.annotation.Annotation;
import java.lang.ref.WeakReference;
import java.lang.reflect.Method;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class Operation extends Event {
    public synchronized void subscribe(String channelName, Subscriber subscriber) {
        if (channelName==""){
            System.out.println("chanel invalid");
            return;
        }
        if (!channels.containsKey(channelName)) {
            channels.put(channelName, new ConcurrentHashMap<>());
            System.out.println("put new channel:"+channelName);
            System.out.println("error?"+channels.get(channelName)==null);
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

    synchronized public void publish(String channelName, Post message) {
        System.out.println("publish channnel");
        System.out.println(channels.get(channelName));
        if (channels.get(channelName)==null) return;
        System.out.println("publish and have channnel");
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

    synchronized <T, P extends Post> boolean deliverMessage(T subscriber, Method method, Post message) {
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