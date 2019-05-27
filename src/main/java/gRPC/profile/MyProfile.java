package gRPC.profile;

import co.overlead.gRPC.GetProfileReq;
import co.overlead.gRPC.ProfileGrpc;
import co.overlead.gRPC.ProfileRes;
import co.overlead.gRPC.UpdateProfileReq;
import com.mongodb.client.MongoCollection;
import database.Mongod;
import helper.ImageResizer;
import io.grpc.stub.StreamObserver;
import org.bson.Document;
import org.bson.internal.Base64;
import org.bson.types.ObjectId;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static helper.auth.RequestAuth.isValidAuth;

public class MyProfile {
    public static class MyProfileImpl extends ProfileGrpc.ProfileImplBase {



        public void makeResponseForUpdateSuccess(StreamObserver res){
            res.onNext(ProfileRes.newBuilder().setStatus("SUCCESS").build());
            res.onCompleted();
        }

        public void makeResponseForFailed(StreamObserver res, String status){
            res.onNext(ProfileRes.newBuilder().setStatus(status).build());
            res.onCompleted();
        }
        @Override
        public void updateProfile(UpdateProfileReq request, StreamObserver<ProfileRes> responseObserver) {
            System.out.println("updateProfile");





            if (!isValidAuth(request.getRequesterId(),request.getAccessToken())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");
            } else {


                Document updateList=new Document();
                if (!request.getAddress().equals("")){
                    updateList.append("address",request.getAddress());
                }
                if (!request.getAvatar().equals("")){


                        updateList.append("avatar",request.getAvatar());

                }
                if (!request.getBirthday().equals("")){
                    updateList.append("birthday",request.getBirthday());
                }
                if (!request.getFb().equals("")){
                    updateList.append("fb",request.getFb());
                }
                if (!request.getWorkplace().equals("")){
                    updateList.append("workplace",request.getWorkplace());
                }
                if (!request.getSkill().equals("")){
                    updateList.append("skill",request.getSkill());
                }
                if (!request.getEmail().equals("")){
                    updateList.append("email",request.getEmail());
                }
                System.out.println(updateList);
                Mongod.collAuth.findOneAndUpdate(new Document("_id",
                        new ObjectId(request.getRequesterId())),
                        new Document("$set", updateList));
                makeResponseForUpdateSuccess(responseObserver);
            }
        }

        @Override
        public void getProfile(GetProfileReq request, StreamObserver<ProfileRes> responseObserver) {
            System.out.println("getProfile");
            if (!isValidAuth(request.getRequesterId(),request.getAccessToken())) {
                makeResponseForFailed(responseObserver,"AUTH_INVALID");
            } else {
                List<Document> user= Mongod.collAuth.find(new Document("_id",new ObjectId(request.getRequesterId()))).into(new ArrayList<>());
                if (user.size()>0){
                    Document u=user.get(0);
                    responseObserver.onNext(ProfileRes.newBuilder()
                            .setAddress(u.get("address")==null?"":u.get("address").toString())
                            .setAvatar(u.get("avatar")==null?"":u.get("avatar").toString())
                            .setBirthday(u.get("birthday")==null?"":u.get("birthday").toString())
                            .setEmail(u.get("email")==null?"":u.get("email").toString())
                            .setFb(u.get("fb")==null?"":u.get("fb").toString())
                            .setWorkplace(u.get("workplace")==null?"":u.get("workplace").toString())
                            .setName(u.get("name")==null?"":u.get("name").toString())
                            .setPoint(u.get("point")==null?"":u.get("point").toString())
                            .setSkill(u.get("skill")==null?"":u.get("skill").toString())
                            .setStatus("SUCCESS").build());

                    responseObserver.onCompleted();
                }else{
                    makeResponseForFailed(responseObserver,"NOT_EXIST_USER");
                }

            }
        }
    }
}
