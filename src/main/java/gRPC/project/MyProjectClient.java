package gRPC.project;

import co.overlead.gRPC.AddNewProjectReq;
import co.overlead.gRPC.AddNewProjectRes;
import co.overlead.gRPC.MyprojectGrpc;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.StatusRuntimeException;

import java.util.concurrent.TimeUnit;

public class MyProjectClient {

    private final ManagedChannel channel;
    private final MyprojectGrpc.MyprojectBlockingStub blockingStub;

    /** Construct client connecting to HelloWorld server at {@code host:port}. */
    public MyProjectClient(String host, int port) {
        this(ManagedChannelBuilder.forAddress(host, port)
                // Channels are secure by default (via SSL/TLS). For the example we disable TLS to avoid
                // needing certificates.
                .usePlaintext()
                .build());
    }

    /** Construct client for accessing HelloWorld server using the existing channel. */
    MyProjectClient(ManagedChannel channel) {
        this.channel = channel;
        blockingStub = MyprojectGrpc.newBlockingStub(channel);
    }

    public void shutdown() throws InterruptedException {
        channel.shutdown().awaitTermination(5, TimeUnit.SECONDS);
    }
    public void setBalance(String userId,Long setBalance) {
        AddNewProjectReq req=AddNewProjectReq.newBuilder().setCookie("cookiesss").setEnd("222").setProjectName("pjname").setPrivate("false").setStart("111").build();
        AddNewProjectRes response;
        try {
            response = blockingStub.addNewProject(req);
        } catch (StatusRuntimeException e) {
            return;
        }
    }
    public static void main(String[] args) throws Exception {
        MyProjectClient client = new MyProjectClient("overlead.co", 8085);
        try {
            /* Access a service running on the local machine on port 50051 */
            String user = "firstuser";
            if (args.length > 0) {
                user = args[0]; /* Use the arg as the name to greet if provided */
            }

            //client.getBalance(user);
            // client.setBalance(user,100L);
            client.setBalance(user,1L);

        } finally {
            client.shutdown();
        }
    }

}
