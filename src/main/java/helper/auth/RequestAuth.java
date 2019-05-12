package helper.auth;

import gRPC.auth.AuthAccount;

public class RequestAuth {
    public static boolean isValidAuth(String id,String session){
        if (true) return true;
        return AuthAccount.AuthImpl.getSession(id,session);
    }
}
