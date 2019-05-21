package gRPC.team;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.result.DeleteResult;
import database.Mongod;
import helper.auth.RequestAuth;
import io.grpc.stub.StreamObserver;
import org.bson.BsonArray;
import org.bson.BsonString;
import org.bson.Document;
import org.bson.types.ObjectId;

import javax.print.Doc;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import static helper.auth.RequestAuth.isValidAuth;

public class CoTeam {
    public static class CoTeamImpl extends TeamGrpc.TeamImplBase {
        public void makeResponseForUpdateSuccess(StreamObserver res, String id) {
            res.onNext(TeamRes.newBuilder().setStatus("SUCCESS").setError("FALSE").setId(id).build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status, String error) {
            res.onNext(TeamRes.newBuilder().setStatus(status).setError(error).build());
            res.onCompleted();
        }

        @Override
        public void addNewTeam(AddNewTeamReq request, StreamObserver<TeamRes> responseObserver) {
            System.out.println("addNewTeam");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {

                List<Document> foundDocument = Mongod.collTeam.find(new Document("name", request.getName()).append("projectId", request.getProjectId())).into(new ArrayList<Document>());
                if (foundDocument.size() != 0) {
                    makeResponseForFailed(responseObserver, "EXIST_TEAM_NAME", "FALSE");
                } else {
                    Document document = new Document()
                            .append("name", request.getName())
                            .append("projectId",request.getProjectId())
                            .append("ownerId", request.getRequesterId())
                            .append("description", request.getDescription())
                            .append("department", request.getDepartment())
                            .append("tasks", new BsonArray(Arrays.asList()))
                            .append("conversations", new BsonArray(Arrays.asList()))
                            .append("members", new BsonArray(Arrays.asList(new BsonString(request.getRequesterId()))));
                    Mongod.collTeam.insertOne(document);

                    foundDocument = Mongod.collTeam.find(document).into(new ArrayList<>());
                    //check size
                    if (foundDocument.size() != 1) {
                        makeResponseForFailed(responseObserver, "WRONG_SIZE", "FALSE");
                    } else {
                        Mongod.collAuth.findOneAndUpdate(
                                new Document("_id", new ObjectId(request.getRequesterId())),
                                new Document("$push", new Document("teamlist", foundDocument.get(0).get("_id"))));

                        Mongod.collProject.findOneAndUpdate(new Document("_id",
                                new ObjectId(request.getProjectId())),
                                new Document("$push", new Document("teams", foundDocument.get(0).get("_id"))));

                        makeResponseForUpdateSuccess(responseObserver, foundDocument.get(0).get("_id").toString());
                    }
                }
            }
        }

        @Override
        public void updateTeam(UpdateTeamReq request, StreamObserver<TeamRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");

            } else {
                List<Document> foundDocument = Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());

                if (foundDocument.size() == 1) {
                    Document needUpdate = new Document("_id", new ObjectId(request.getTeamId()));
                    Document listUpdate = new Document();

                    if (request.getName() != "") {
                        listUpdate.append("name", request.getName());
                    }
                    if (request.getDescription() != "") {
                        listUpdate.append("description", request.getDescription());
                    }
                    if (request.getDepartment() != "") {
                        listUpdate.append("department", request.getDepartment());
                    }

                    Mongod.collTeam.findOneAndUpdate(needUpdate, listUpdate);
                    makeResponseForUpdateSuccess(responseObserver, request.getTeamId());
                } else {
                    makeResponseForFailed(responseObserver, "NOT_EXIST_TASK_NAME", "FALSE");
                }
            }
        }

        @Override
        public void deleteTeam(DeleteTeamReq request, StreamObserver<TeamRes> responseObserver) {
            System.out.println("deleteTeam");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                //delete ref item team in collection PROJECT
                Mongod.collProject.findOneAndUpdate(new Document("_id", request.getProjectId()), new Document("$pull", new Document("teams", request.getTeamId())));

                //delete ref item team in collection USER
                List<Document> user=Mongod.collTeam.find(new Document("_id",new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                if (user.size()>0){
                    List<String> idList = (List<String>) user.get(0).get("members");
                    if (idList.size()>0){
                        idList.forEach(i->{
                            Mongod.collAuth.findOneAndUpdate(new Document("_id",new ObjectId(i)),new Document("$pull",new Document("teamlist",request.getTeamId())));
                        });
                    }
                }
                //delete instance team
                Mongod.collTeam.deleteOne(new Document("_id", new ObjectId(request.getTeamId())));
                makeResponseForUpdateSuccess(responseObserver, request.getProjectId());
            }
        }

        @Override
        public void addMember(AddMemberReq request, StreamObserver<TeamRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                //check user
                List<Document> user = Mongod.collAuth.find(new Document("username", request.getMemberEmail())).into(new ArrayList<>());
                if (user.size() != 1) {
                    makeResponseForFailed(responseObserver, "WRONG_SIZE_USER_FOUND", "FALSE");
                } else {
                    List<Document> team = Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                    if (team.size() != 1) {
                        makeResponseForFailed(responseObserver, "WRONG_SIZE_TEAM_FOUND", "FALSE");
                    } else {
                        String id = user.get(0).get("_id").toString();
                        //add member to list member of TEAM
                        Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())), new Document("$push", new Document("members", id)));
                        //add team to list of team of MEMBER
                        Mongod.collAuth.findOneAndUpdate(new Document("_id", new ObjectId(id)), new Document("$push", new Document("teamlist", request.getTeamId())));
                        //add member to project
                        //TODO: IMPLEMENT MEMBER OF PROJECT

                        makeResponseForUpdateSuccess(responseObserver, request.getTeamId());
                    }
                }
            }

        }


        @Override
        public void removeMember(RemoveMemberReq request, StreamObserver<TeamRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> user = Mongod.collAuth.find(new Document("username", request.getMemberEmail())).into(new ArrayList<>());

                if (user.size() != 1) {
                    makeResponseForFailed(responseObserver, "WRONG_SIZE_USER_FOUND", "FALSE");
                } else {
                    List<Document> foundDocument = Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                    if (foundDocument.size() != 1) {
                        makeResponseForFailed(responseObserver, "WRONG_SIZE_TEAM_FOUND", "FALSE");
                    } else {
                        String id = user.get(0).get("_id").toString();
                        //remove member to list member of TEAM
                        Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())), new Document("$pull", new Document("members", id)));
                        //remove team to list of team of MEMBER
                        Mongod.collAuth.findOneAndUpdate(new Document("_id", new ObjectId(id)), new Document("$pull", new Document("teamlist", request.getTeamId())));
                        makeResponseForUpdateSuccess(responseObserver, request.getTeamId());
                    }
                }
            }
        }

        @Override
        public void updateMember(UpdateMemberReq request, StreamObserver<TeamRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> user = Mongod.collAuth.find(new Document("username", request.getMemberEmail())).into(new ArrayList<>());
                if (user.size() != 1) {
                    makeResponseForFailed(responseObserver, "WRONG_SIZE_USER_FOUND", "FALSE");
                } else {
                    List<Document> foundDocument = Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                    if (foundDocument.size() != 1) {
                        makeResponseForFailed(responseObserver, "WRONG_SIZE_TEAM_FOUND", "FALSE");
                    } else {
                       //NOT IMPLEMENT YET, IT RELATIVE TO ROLE IN PROJECT
                        makeResponseForFailed(responseObserver, "NOT_IMPLEMENT", "FALSE");
                    }
                }
            }
        }

        @Override
        public void getAllMember(GetAllMemberReq request, StreamObserver<TeamRes> responseObserver) {
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                    List<Document> foundDocument = Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                    if (foundDocument.size() != 1) {
                        makeResponseForFailed(responseObserver, "WRONG_SIZE_TEAM_FOUND", "FALSE");
                    } else {
                        List<String> userList= (List<String>) foundDocument.get(0).get("members");
                        if (userList.size()>0) {
                            userList.forEach(i->{
                                responseObserver.onNext(TeamRes.newBuilder().setId(i.toString()).setStatus("SUCCESS").setError("FALSE").build());
                            });
                        }else {
                            responseObserver.onNext(TeamRes.newBuilder().setStatus("EMPTY").setError("FALSE").build());
                        }
                        responseObserver.onCompleted();
                    }
                }
            }
        }
    }

