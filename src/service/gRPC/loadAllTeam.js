
import {
    getFromStorage,
    setInStorage
  } from '../storage'
import {store} from '../../App'
import { setTeam } from '../../actions'
import loadAllMember from'./loadAllMember'
import loadAllBacklog from './loadAllBacklog';
import loadAllTask from './loadAllTask';
const proto = {};
proto.team = require('../../gRPC/team/team_grpc_web_pb');

  
 function loadAllTeam (id) {
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    let teams = []
    setInStorage("allTask",[])

    var GetAllTeamReq = new proto.team.GetAllTeamReq();
    GetAllTeamReq.setRequesterid(getFromStorage("userId"));
    GetAllTeamReq.setProjectid(id);
    GetAllTeamReq.setAccesstoken(getFromStorage("accessToken"));
    let response = teamService.getAllTeam(GetAllTeamReq, metadata)
    let that = this
    let lastTeam = ''
    let lastName = ''
    let validTeam = false
    let teamName=''
    let teamId=getFromStorage("teamId")

    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {

        teams.push({
          id: response.getTeamid(),
          name: response.getName()
        })
        if (teamId == response.getTeamid())
         { validTeam = true
            teamName=response.getName()
        }
        else {
          lastTeam = response.getTeamid()
          lastName = response.getName()
        }
        loadAllTask(response.getTeamid(),response.getName())
      }
    })
    response.on('status', function (status) {
      if (status.code != 0) console.log(status)
        else{
            
            setInStorage('teams', teams)

            if (validTeam == false) {
              if (lastTeam != '') {
                store.dispatch(setTeam(lastTeam, lastName))
                that.loadAllMember(lastTeam)
              }
            }
            else {
              store.dispatch(setTeam(teamId, teamName))
              loadAllMember(teamId)
              loadAllBacklog()
            }
        }
     
    });
    response.on('end', function (end) {

    });

  }

  export default (loadAllTeam);