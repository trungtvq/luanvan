package database;

import io.lettuce.core.RedisClient;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisKeyCommands;
import io.lettuce.core.api.sync.RedisListCommands;
import io.lettuce.core.api.sync.RedisStringCommands;

import java.util.List;

public class Redis {
    public static final String Link="redis://localhost";

    public static final RedisClient USERCLIENT = RedisClient.create(Link+"/1");

    public static final RedisClient SESSIONCLIENT = RedisClient.create(Link+"/2");
    public static final RedisClient TOKENCLIENT = RedisClient.create(Link+"/3");
    public static final RedisClient client4 = RedisClient.create(Link+"/4");
    public static final RedisClient client5 = RedisClient.create(Link+"/5");
    public static final RedisClient client6 = RedisClient.create(Link+"/6");
    //...

    public static final StatefulRedisConnection<String, String> USERCONNECTION = USERCLIENT.connect();

    public static final StatefulRedisConnection<String, String> SESSIONCONNECTION = SESSIONCLIENT.connect();

    public static final StatefulRedisConnection<String, String> TOKENCONNECTION = TOKENCLIENT.connect();


    public static final RedisStringCommands USER_SYNC_COMMAND = USERCONNECTION.sync();
    public static final RedisListCommands LIST_SESSION_SYNC_COMMAND =SESSIONCONNECTION.sync();

    public static final RedisStringCommands TOKEN_SYNC_COMMAND = TOKENCONNECTION.sync();
    public static final RedisKeyCommands TOKEN_SYNC_KEY_COMMAND = TOKENCONNECTION.sync();

    public static void main(String[] args){

        Long length=Redis.LIST_SESSION_SYNC_COMMAND.llen("5cd8bea063eecb5d8e18d129");
        System.out.println("validate session"+length);
        List<String> list=Redis.LIST_SESSION_SYNC_COMMAND.lrange("5cd8bea063eecb5d8e18d129",0,length);

        for (int i=0;i<list.size();i++){
            System.out.println(list.get(i));
            if (list.get(i)=="newSession")        System.out.println("TRUE");

        }
    }

}
