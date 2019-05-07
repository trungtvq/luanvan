package main;

import gRPC.auth.AuthAccount;
import gRPC.project.MyProject;
import gRPC.userstory.UserStory;
import io.grpc.Server;
import io.grpc.ServerBuilder;

import java.io.IOException;

public class gRPCMain {
    private Server server;

    private void start() throws IOException {
        /* The port on which the server should run */
        int port = 9090;
        server = ServerBuilder.forPort(port)
                .addService(new MyProject.MyProjectImpl())
                .addService(new UserStory.UserStoryImpl())
                .addService(new AuthAccount.AuthImpl())
                .build()
                .start();

        Runtime.getRuntime().addShutdownHook(new Thread() {
            @Override
            public void run() {
                // Use stderr here since the logger may have been reset by its JVM shutdown hook.
                System.err.println("*** shutting down gRPC server since JVM is shutting down");
                gRPCMain.this.stop();
                System.err.println("*** server shut down");
            }
        });
    }

    private void stop() {
        if (server != null) {
            server.shutdown();
        }
    }

    /**
     * Await termination on the main thread since the grpc library uses daemon threads.
     */
    private void blockUntilShutdown() throws InterruptedException {
        if (server != null) {
            server.awaitTermination();
        }
    }

    /**
     * Main launches the server from the command line.
     */
    public static void main(String[] args) throws IOException, InterruptedException {
        final gRPCMain server = new gRPCMain();
        server.start();
        server.blockUntilShutdown();
    }
}
