
import {
    getFromStorage,
    setInStorage
  } from '../storage'

const proto = {};
proto.team = require('../../gRPC/team/team_grpc_web_pb');

export default function loadAllMember(id){
    console.log("loadAllMember")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var GetAllMemberReq = new proto.team.GetAllMemberReq();
    GetAllMemberReq.setRequesterid(getFromStorage("userId"));
    GetAllMemberReq.setTeamid(id);
    GetAllMemberReq.setAccesstoken(getFromStorage("accessToken"));

    let mem = []
    let response =  teamService.getAllMember(GetAllMemberReq, metadata)

     response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        mem.push({ id: response.getId(), name: response.getName(), username: response.getUsername() })
      }
    })
    response.on('status', function (status) {
      if (status.code != 0) console.log(status)
        else setInStorage('members', mem)
        
    });
    response.on('end', function (end) {
      console.log(end)
    });
}
