package gRPC.team;

import co.overlead.gRPC.*;
import io.grpc.stub.StreamObserver;

public class CoTeam {
    public static class CoTeamImpl extends TeamGrpc.TeamImplBase {
        public void makeResponseForUpdateSuccess(StreamObserver res, String id) {
            res.onNext(TeamReq.newBuilder().setStatus("SUCCESS").setError("FALSE").setId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error) {
            res.onNext(TeamReq.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }

        @Override
        public void addNewTeam(AddNewTeamReq request, StreamObserver<TeamReq> responseObserver) {
            super.addNewTeam(request, responseObserver);
        }

        @Override
        public void updateTeamTask(UpdateTeamReq request, StreamObserver<TeamReq> responseObserver) {
            super.updateTeamTask(request, responseObserver);
        }

        @Override
        public void deleteTeam(DeleteTeamReq request, StreamObserver<TeamReq> responseObserver) {
            super.deleteTeam(request, responseObserver);
        }

        @Override
        public void addMember(AddMemberReq request, StreamObserver<TeamReq> responseObserver) {
            super.addMember(request, responseObserver);
        }

        @Override
        public void removeMember(RemoveMemberReq request, StreamObserver<TeamReq> responseObserver) {
            super.removeMember(request, responseObserver);
        }

        @Override
        public void updateMember(UpdateMemberReq request, StreamObserver<TeamReq> responseObserver) {
            super.updateMember(request, responseObserver);
        }

        @Override
        public void getAllMember(GetAllMemberReq request, StreamObserver<TeamReq> responseObserver) {
            super.getAllMember(request, responseObserver);
        }
    }
}
