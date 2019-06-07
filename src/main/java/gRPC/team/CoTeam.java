package gRPC.team;

import co.overlead.gRPC.*;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
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
            res.onNext(TeamRes.newBuilder().setStatus("SUCCESS").setId(id).build());
            res.onCompleted();
        }



        public void makeResponseForFailed(StreamObserver res, String status, String error) {
            res.onNext(TeamRes.newBuilder().setStatus(status).build());
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
                            .append("members", new BsonArray(Arrays.asList(new BsonString(request.getRequesterId()))))
                            .append("dailySchedule",new BsonArray(Arrays.asList()))
                            .append("sprintbacklogs", new BsonArray(Arrays.asList()));
                    Mongod.collTeam.insertOne(document);

                    foundDocument = Mongod.collTeam.find(document).into(new ArrayList<>());
                    //check size
                    if (foundDocument.size() != 1) {
                        makeResponseForFailed(responseObserver, "WRONG_SIZE", "FALSE");
                    } else {
                        Mongod.collAuth.findOneAndUpdate(
                                new Document("_id", new ObjectId(request.getRequesterId())),
                                new Document("$push", new Document("teamlist", new BsonString(foundDocument.get(0).get("_id").toString()))));

                        Mongod.collProject.findOneAndUpdate(new Document("_id",
                                new ObjectId(request.getProjectId())),
                                new Document("$push", new Document("teams",new BsonString(foundDocument.get(0).get("_id").toString()))));

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

                    Mongod.collTeam.findOneAndUpdate(needUpdate,new Document("$set", listUpdate));
                    makeResponseForUpdateSuccess(responseObserver, request.getTeamId());
                } else {
                    makeResponseForFailed(responseObserver, "NOT_EXIST_TASK_NAME", "FALSE");
                }
            }
        }

        @Override
        public void deleteTeam(DeleteTeamReq request, StreamObserver<TeamRes> responseObserver) {
            System.out.println("deleteTeam");
            //1 Check if requester IS owner
            //2 delete team id in PROJECT
            //3 delete team id in USER (team can have multi user)
            //4 delete instance team... ok
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                if (request.getRequesterId()!=Mongod.collTeam.find(new Document("_id",new ObjectId(request.getTeamId()))).into(new ArrayList<>()).get(0).get("ownerId").toString()){
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
                }else{
                    makeResponseForFailed(responseObserver,"NO_PERMISION","FALSE");
                }

            }
        }

        @Override
        public void addMember(AddMemberReq request, StreamObserver<TeamRes> responseObserver) {
            //check if username is exist
            //check if team is exist
            //check member is exist in team
            //add member id to TEAM
            //add team id to USER
            //
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {
                List<Document> user = Mongod.collAuth.find(new Document("username", request.getMemberEmail())).into(new ArrayList<>());
                if (user.size() != 1) {
                    makeResponseForFailed(responseObserver, "WRONG_SIZE_USER_FOUND", "FALSE");
                } else {
                    List<Document> team = Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                    if (team.size() != 1) {
                        makeResponseForFailed(responseObserver, "WRONG_SIZE_TEAM_FOUND", "FALSE");
                    } else {

                        String id = user.get(0).get("_id").toString();

                        List<String> mems= (List<String>) team.get(0).get("members");

                        if (mems.indexOf(id)==-1){
                            //add member to list member of TEAM
                            Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())), new Document("$push", new Document("members", id)));
                            //add team to list of team of MEMBER
                            Mongod.collAuth.findOneAndUpdate(new Document("_id", new ObjectId(id)), new Document("$push", new Document("teamlist", request.getTeamId())));

                            String name=Mongod.collAuth.find(new Document("username",request.getMemberEmail())).into(new ArrayList<>()).get(0).get("name").toString();
                            responseObserver.onNext(TeamRes.newBuilder().setId(request.getTeamId()).setStatus("SUCCESS")
                                    .setName(name).build());
                            makeResponseForUpdateSuccess(responseObserver, request.getTeamId());
                        } else makeResponseForFailed(responseObserver,"EXIST_MEM","FALSE");

                    }
                }
            }

        }


        @Override
        public void removeMember(RemoveMemberReq request, StreamObserver<TeamRes> responseObserver) {
            //1. remove member if team exist...OK
            //   only owner can remove owner team
            //2. remove member id from TEAM...OK
            //3. remove team id from MEMBER... OK

            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                makeResponseForFailed(responseObserver, "AUTH_INVALID", "TRUE");
            } else {

                    List<Document> foundDocument = Mongod.collTeam.find(new Document("_id", new ObjectId(request.getTeamId()))).into(new ArrayList<>());
                    if (foundDocument.size() != 1) {
                        makeResponseForFailed(responseObserver, "NOT_FOUND_TEAM", "FALSE");
                    } else {
                        String projectId=Mongod.collTeam.find(new Document("_id",new ObjectId(request.getTeamId()))).into(new ArrayList<>()).get(0).get("projectId").toString();
                        //1
                        String ownerId=Mongod.collProject.find(new Document("_id",new ObjectId(projectId))).into(new ArrayList<>()).get(0).get("ownerId").toString();
                        if (ownerId==request.getRequesterId() || request.getMemberEmail()!=ownerId)
                            {
                                Mongod.collTeam.findOneAndUpdate(new Document("_id", new ObjectId(request.getTeamId())),
                                        new Document("$pull", new Document("members", request.getMemberEmail())));
                                //remove team from list of team of MEMBER
                                Mongod.collAuth.findOneAndUpdate(new Document("_id", new ObjectId(request.getMemberEmail())), new Document("$pull", new Document("teamlist", request.getTeamId())));
                                makeResponseForUpdateSuccess(responseObserver, request.getTeamId());
                            }else{
                                makeResponseForFailed(responseObserver,"NO_PERMISION","FALSE");
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
        public void getAllTeam(GetAllTeamReq request, StreamObserver<GetAllTeamRes> responseObserver) {
            //find project
            //get all team of this project
            System.out.println("getAllTeam");
            if (!isValidAuth(request.getRequesterId(), request.getAccessToken())) {
                responseObserver.onNext(GetAllTeamRes.newBuilder().setStatus("AUTH_INVALID").build());
            } else {
                List<Document> foundDocument = Mongod.collProject.find(new Document("_id", new ObjectId(request.getProjectId()))).into(new ArrayList<>());
                if (foundDocument.size() != 1) {
                    makeResponseForFailed(responseObserver, "PROJECT_NOT_FOUND", "FALSE");
                    return;
                } else {
                    List<String> teamList= (List<String>) foundDocument.get(0).get("teams");

                    if (teamList!=null) {
                        teamList.forEach(i->{
                            List<Document> team=Mongod.collTeam.find(new Document("_id",new ObjectId(i.toString()))).into(new ArrayList<>());
                            if (team.size()>0){
                                List<String> mems= (List<String>) team.get(0).get("members");
                                if (mems!=null){
                                    if (mems.indexOf(request.getRequesterId())!=-1){
                                        Document t= team.get(0);
                                        responseObserver.onNext(GetAllTeamRes.newBuilder()
                                                .setTeamId(t.get("_id").toString())
                                                .setName(t.get("name").toString())
                                                .setDepartment(t.get("department").toString())
                                                .setDescription(t.get("description").toString())
                                                .setStatus("SUCCESS").build());
                                    }

                                }


                        }});
                    }else {
                        responseObserver.onNext(GetAllTeamRes.newBuilder().setStatus("EMPTY").build());
                    }
                }
            }
            responseObserver.onCompleted();

        }
        @Override
        public void getAllMember(GetAllMemberReq request, StreamObserver<TeamRes> responseObserver) {
            System.out.println("getAllMember");
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

                                Document user=Mongod.collAuth.find(new Document("_id",new ObjectId(i))).into(new ArrayList<>()).get(0);

                                responseObserver.onNext(TeamRes.newBuilder()
                                        .setId(i)
                                        .setName(user.get("name").toString())
                                        .setUsername(user.get("username").toString())
                                        .setStatus("SUCCESS").build());
                            });
                        }else {
                            responseObserver.onNext(TeamRes.newBuilder().setStatus("EMPTY").build());
                        }
                        responseObserver.onCompleted();
                    }
                }
            }
        }
    }
