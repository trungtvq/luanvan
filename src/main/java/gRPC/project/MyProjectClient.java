package gRPC.project;

import co.overlead.gRPC.*;
import io.grpc.Deadline;
import io.grpc.ManagedChannel;
import io.grpc.ManagedChannelBuilder;
import io.grpc.StatusRuntimeException;
import io.grpc.stub.StreamObserver;

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
        blockingStub = MyprojectGrpc.newBlockingStub(channel).withDeadlineAfter(1000,TimeUnit.DAYS);
    }

    public void shutdown() throws InterruptedException {
        channel.shutdown().awaitTermination(5, TimeUnit.SECONDS);
    }
    public void addProject(String userId, String cookie,String name) {
        AddNewProjectReq req=AddNewProjectReq.newBuilder().setStart("123").setEnd("1234").setProjectName(name).setPrivate("false").setRequesterId("trungtvq").build();
        ProjectRes response;
        try {
            response = blockingStub.addNewProject(req);
        } catch (StatusRuntimeException e) {
            return;
        }
    }
    public void getAllProject(String id){
        GetAllProjectReq req= GetAllProjectReq.newBuilder().setRequesterId("trungtvq").build();
        ProjectRes response;

        try {
            System.out.println("start catch package");
            blockingStub.getAllProject(req).forEachRemaining(i->{
                System.out.println(i.getProjectName());
            });
        } catch (StatusRuntimeException e) {
            System.out.println(e);
            return;
        }
    }
    public static void main(String[] args) throws Exception {
      //  MyProjectClient client = new MyProjectClient("54.255.233.193", 8085);
       MyProjectClient client = new MyProjectClient("overlead.co",8085);

        // MyProjectClient client = new MyProjectClient("0.0.0.0", 8085);
        try {
            /* Access a service running on the local machine on port 50051 */
            String user = "firstuser";
            if (args.length > 0) {
                user = args[0]; /* Use the arg as the name to greet if provided */
            }
            //client.getBalance(user);
            // client.addProject(user,100L);
//            client.addProject(user,"newSession","name");
//            client.addProject(user,"newSession","name2");
//            client.addProject(user,"newSession","name3");
//            client.addProject(user,"newSession","name4");
//            client.addProject(user,"newSession","name5");
//            client.addProject(user,"newSession","name6");
//            client.addProject(user,"newSession","name7");
//            client.addProject(user,"newSession","name8");
//            client.addProject(user,"newSession","name9");
//            client.addProject(user,"newSession","name11");
//            client.addProject(user,"newSession","name23");
//            client.addProject(user,"newSession","name323");
//            client.addProject(user,"newSession","name323");
client.getAllProject("trungtvq");

        } finally {
            client.shutdown();
        }
    }

}
