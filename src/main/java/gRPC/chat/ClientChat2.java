package gRPC.chat;

import co.overlead.gRPC.*;
import io.grpc.Deadline;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.StatusRuntimeException;
import io.grpc.stub.StreamObserver;

import java.util.concurrent.TimeUnit;

public class ClientChat2 {

    private final ManagedChannel channel;
    private final ChatGrpc.ChatBlockingStub blockingStub;
    /** Construct client connecting to HelloWorld server at {@code host:port}. */
    public ClientChat2(String host, int port) {
        this(ManagedChannelBuilder.forAddress(host, port)
                // Channels are secure by default (via SSL/TLS). For the example we disable TLS to avoid
                // needing certificates.
                .usePlaintext()
                .build());
    }

    /** Construct client for accessing HelloWorld server using the existing channel. */
    ClientChat2(ManagedChannel channel) {
        this.channel = channel;
        blockingStub = ChatGrpc.newBlockingStub(channel).withDeadlineAfter(1000,TimeUnit.DAYS);
    }

    public void shutdown() throws InterruptedException {
        channel.shutdown().awaitTermination(5, TimeUnit.SECONDS);
    }

    public void sendMsg(String userId,String accessToken,String projectId,String userName,String msg){
        SendMsgReq req= SendMsgReq.newBuilder().setRequesterId(userId).setChannelId(projectId).setAccessToken(accessToken).setName(userName).setMsg(msg).build();
        SendMsgRes response;

        try {
            System.out.println("start catch package");
            SendMsgRes res= blockingStub.sendMsg(req);
            System.out.println(res.getStatus());
        } catch (StatusRuntimeException e) {
            System.out.println(e);
            return;
        }
    }
    public static void main(String[] args) throws Exception {
        //  MyProjectClient client = new MyProjectClient("54.255.233.193", 8085);
        ClientChat2 client = new ClientChat2("localhost",9090);

        // MyProjectClient client = new MyProjectClient("0.0.0.0", 8085);
        try {

            client.sendMsg("5cda58cb5e97e15823118101","newSession","5ce16a8aef2aa3092c1ccecf","trung","hihi do n21goc");
//            client.sendMsg("5cda58cb5e97e15823118101","newSession","123","2b");
//            client.sendMsg("5cda58cb5e97e15823118101","newSession","123","3c");
//            client.sendMsg("5cda58cb5e97e15823118101","newSession","123","4d");

        } finally {
            client.shutdown();
        }
    }

}
