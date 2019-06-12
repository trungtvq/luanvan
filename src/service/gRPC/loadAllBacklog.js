import {
  getFromStorage,
  setInStorage
} from '../storage'
import {store} from '../../App'
import { setSprintBacklogs } from '../../actions'

const proto = {};
proto.team = require('../../gRPC/team/team_grpc_web_pb');
proto.sprintbacklog = require('../../gRPC/sprintbacklog/sprintbacklog_grpc_web_pb');

export default function loadAllBacklog(id) {
  console.log("loadAllSprintBacklog")
    const sprintbacklogService = new proto.sprintbacklog.SprintBacklogClient('https://www.overlead.co');
    var metadata = {};
    var GetAllSprintBacklogReq = new proto.sprintbacklog.GetAllSprintBacklogReq();
    GetAllSprintBacklogReq.setRequesterid(getFromStorage("userId"));
    GetAllSprintBacklogReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllSprintBacklogReq.setProjectid(getFromStorage("currentProject"));
    GetAllSprintBacklogReq.setTeamid(id);

    var response = sprintbacklogService.getAllSprintBacklog(GetAllSprintBacklogReq, metadata)
    let that = this
    let count = 1;
    let data=[]
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        count++
        let arr = response.getStart().split('-');
        let start = ""
        let end = ""
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10) + 1) + "/" + arr[4]
        } else {
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10) + 1) + "/" + arr[4]
        }


        arr = response.getDeadline().split('-')
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10) + 1) + "/" + arr[4]
        } else {
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10) + 1) + "/" + arr[4]
        }


        data.push(
          {
            id: response.getBacklogid(),
            title: response.getTitle(),
            role: response.getRole(),
            want: response.getWant(),
            so: response.getSo(),
            sprintName: response.getSprintname(),
            priority: response.getPriority(),
            estimation: response.getEstimation(),
            sprint: response.getSprintid(),
            status: response.getStatusbacklog(),
            start: start,
            deadline: end
          })
      }
    })
  
  
  response.on('status', function(status) {
    console.log(count)
    if (status.code != 0) console.log(status)
    else {
      setInStorage("sprintbacklog", data)
      store.dispatch(setSprintBacklogs(data))
      
    }
  });
  response.on('end', function(end) {
    console.log("end")
    console.log(end)
  });


}