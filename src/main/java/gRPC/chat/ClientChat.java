package gRPC.chat;

import co.overlead.gRPC.*;
import io.grpc.Deadline;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.StatusRuntimeException;
import io.grpc.stub.StreamObserver;

import java.util.concurrent.TimeUnit;

public class ClientChat {

    private final ManagedChannel channel;
    private final ChatGrpc.ChatBlockingStub blockingStub;
    /** Construct client connecting to HelloWorld server at {@code host:port}. */
    public ClientChat(String host, int port) {
        this(ManagedChannelBuilder.forAddress(host, port)
                // Channels are secure by default (via SSL/TLS). For the example we disable TLS to avoid
                // needing certificates.
                .usePlaintext()
                .build());
    }

    /** Construct client for accessing HelloWorld server using the existing channel. */
    ClientChat(ManagedChannel channel) {
        this.channel = channel;
        blockingStub = ChatGrpc.newBlockingStub(channel).withDeadlineAfter(1000,TimeUnit.DAYS);
    }

    public void shutdown() throws InterruptedException {
        channel.shutdown().awaitTermination(5, TimeUnit.SECONDS);
    }

    public void connectChat(String userId,String accessToken,String projectId){
//        SendMsgReq req= SendMsgReq.newBuilder().setRequesterId(userId).setAccessToken("newSession").setChannelId(projectId).build();
//        SendMsgRes response;
//
//        try {
//            System.out.println("start catch package");
//            blockingStub.connectChat(req).forEachRemaining(i->{
//                System.out.println(i.getSenderName()+" said: "+ i.getMsg());
//            });
//            connectChat("5cda7f108f39c41dfb476935","newSession","5ce16a8aef2aa3092c1ccecf");
//        } catch (StatusRuntimeException e) {
//            System.out.println(e);
//            return;
//        }
    }
    public static void main(String[] args) throws Exception {
        //  MyProjectClient client = new MyProjectClient("54.255.233.193", 8085);
        ClientChat client = new ClientChat("localhost",9090);

        // MyProjectClient client = new MyProjectClient("0.0.0.0", 8085);
        try {

            client.connectChat("5cda7f108f39c41dfb476935","newSession","5ce16a8aef2aa3092c1ccecf");

        } finally {
            client.shutdown();
        }
    }

}
