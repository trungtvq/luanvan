package gRPC.sprintbacklog;

import co.overlead.gRPC.*;
import io.grpc.stub.StreamObserver;

public class SprintBacklog extends SprintBacklogGrpc.SprintBacklogImplBase {
    @Override
    public void deleteSprintBacklog(DeleteSprintBacklogReq request, StreamObserver<SprintBacklogRes> responseObserver) {
        super.deleteSprintBacklog(request, responseObserver);
    }

    @Override
    public void getAllSprintBacklog(GetAllSprintBacklogReq request, StreamObserver<GetAllSprintBacklogRes> responseObserver) {
        super.getAllSprintBacklog(request, responseObserver);
    }
}
