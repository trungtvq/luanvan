//package gRPC.chat;
//
//import co.overlead.gRPC.*;
//import gRPC.project.MyProjectClient;
//import io.grpc.ManagedChannel;
//import io.grpc.ManagedChannelBuilder;
//import io.grpc.StatusRuntimeException;
//import io.grpc.stub.StreamObserver;
//
//import java.util.concurrent.CountDownLatch;
//import java.util.concurrent.TimeUnit;
//import java.util.concurrent.atomic.AtomicReference;
//
//public class ClientChat {
//
//    private final ManagedChannel channel;
//    private final ChatGrpc.ChatBlockingStub blockingStub;
//    private final ChatGrpc.ChatStub stub;
//    /** Construct client connecting to HelloWorld server at {@code host:port}. */
//    public ClientChat(String host, int port) {
//        this(ManagedChannelBuilder.forAddress(host, port)
//                // Channels are secure by default (via SSL/TLS). For the example we disable TLS to avoid
//                // needing certificates.
//                .usePlaintext()
//                .build());
//    }
//
//    /** Construct client for accessing HelloWorld server using the existing channel. */
//    ClientChat(ManagedChannel channel) {
//        this.channel = channel;
//        blockingStub = ChatGrpc.newBlockingStub(channel).withDeadlineAfter(1000,TimeUnit.DAYS);
//        stub=ChatGrpc.newStub(channel).withDeadlineAfter(1000,TimeUnit.DAYS);
//    }
//
//    public void shutdown() throws InterruptedException {
//        channel.shutdown().awaitTermination(5, TimeUnit.SECONDS);
//    }
//
//    public void chat(){
//        GetAllProjectReq req= GetAllProjectReq.newBuilder().setRequesterId("trungtvq").build();
//        SendMsgRes response;
//        CountDownLatch finishedLatch = new CountDownLatch(1);
//
//        try {
//            System.out.println("start catch package");
//            AtomicReference<StreamObserver<SendMsgReq>> streamObserverAtomicReference=new AtomicReference<>();
//
//            StreamObserver<SendMsgReq> observer =stub.connectChat(new StreamObserver<SendMsgRes>() {
//                @Override
//                public void onNext(SendMsgRes sendMsgRes) {
//                    System.out.println("onNext from client");
//                    streamObserverAtomicReference.get().onNext(SendMsgReq.getDefaultInstance());
//                }
//
//                @Override
//                public void onError(Throwable throwable) {
//                    System.out.println("onError from client");
//
//                }
//
//                @Override
//                public void onCompleted() {
//                    System.out.println("onCompleted from client");
//                }
//            });
//
//
//            streamObserverAtomicReference.set(observer);
//            observer.onNext(SendMsgReq.getDefaultInstance());
//            finishedLatch.await();
//
//            observer.onCompleted();
//
//
//        } catch (StatusRuntimeException e) {
//            System.out.println(e);
//            return;
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }
//    }
//
//        public static void main(String[] args) throws Exception {
//            ClientChat client = new ClientChat("localhost",9090);
//            client.chat();
//        }
//
//}
