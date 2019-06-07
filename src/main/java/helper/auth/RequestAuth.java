package helper.auth;

import gRPC.auth.AuthAccount;

public class RequestAuth {
    public static boolean isValidAuth(String id,String session){
        return AuthAccount.AuthImpl.getSession(id,session);
    }
}
