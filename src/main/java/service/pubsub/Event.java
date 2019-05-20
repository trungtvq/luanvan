package service.pubsub;


import service.pubsub.Operation;

import java.lang.ref.WeakReference;
import java.util.concurrent.ConcurrentHashMap;

public class Event {
    static {
        init();
    }

    public static Operation operation;

    static ConcurrentHashMap<String, ConcurrentHashMap<String, WeakReference<Object>>> channels;

    static void init() {
        channels = new ConcurrentHashMap<>();
        operation = new Operation();
    }
}
