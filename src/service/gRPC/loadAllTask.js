
import {
    getFromStorage,
    setInStorage
  } from '../storage'
  import { setSprint } from '../../actions'

import { store } from '../../App';
const proto = {};
proto.sprint = require('../../gRPC/sprint/sprint_grpc_web_pb');
proto.teamtask = require('../../gRPC/teamtask/teamtask_grpc_web_pb');

export default function loadAllTask(id,name){


    const teamtaskService = new proto.teamtask.TeamTaskClient('https://www.overlead.co');
    var metadata = {};

    var GetAllTeamTaskReq = new proto.teamtask.GetAllTeamTaskReq();
    GetAllTeamTaskReq.setRequesterid(getFromStorage("userId"));
    GetAllTeamTaskReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllTeamTaskReq.setProjectid(getFromStorage("currentProject"));
    GetAllTeamTaskReq.setTeamid(id);
    GetAllTeamTaskReq.setSprintid(getFromStorage("sprintId"));
    
    var response = teamtaskService.getAllTeamTask(GetAllTeamTaskReq, metadata)
    let that = this
    let data=[]
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let arr = response.getStart().split('-');
        let start=''
        let end=''
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }

        arr = response.getDeadline().split('-')
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }
        arr = response.getTimedone().split('-')

        let td=''

        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          td = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        } else {
          td = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + (parseInt(arr[3], 10)+1) + "/" + arr[4]
        }
        arr=response.getTimedone().split('-')
        //processing assign array
          let str=response.getAssigneearray()
          str=str.slice(1,-1)
          arr=str.split(',   ')
          if (response.getStatusteamtask()=="done"){
            let en= response.getDeadline().split('-')

            let timeDone = response.getTimedone().split('-')
         
            let endT=en[0]+60*(en[1]+24*(en[2]+30*(en[3]+12*en[4])));
            timeDone=timeDone[0]+60*(timeDone[1]+24*(timeDone[2]+30*(timeDone[3]+12*timeDone[4])));
            console.log(endT)
            console.log(timeDone)

            timeDone=endT-timeDone
            console.log("loadAllTask")
            console.log(timeDone)
            data.push(
              {
                id: response.getTeamtaskid(),
                title: response.getTitle(),
                description: response.getDescription(),
                assignee: arr,
                priority: response.getPriority(),
                review: response.getReview(),
                comment: response.getComment(),
                status: response.getStatusteamtask(),
                start: start,
                deadline: end,
                sprintBacklog: response.getSprintbacklogid(),
                sprint: response.getSprintid(),
                teamId:id,
                teamName:name,
                late:timeDone,
                timeDone:td
              }
              
            );
          }else{
            data.push(
              {
                id: response.getTeamtaskid(),
                title: response.getTitle(),
                description: response.getDescription(),
                assignee: arr,
                priority: response.getPriority(),
                review: response.getReview(),
                comment: response.getComment(),
                status: response.getStatusteamtask(),
                start: start,
                deadline: end,
                sprintBacklog: response.getSprintbacklogid(),
                sprint: response.getSprintid(),
                teamId:id,
                teamName:name,
              }
              
            );
          }
          

      }
    })
    response.on('status', function (status) {
        console.log("-=--------------")
      if (status.code!=0) console.log(status)
      let task=data.filter(i=>{
        if (i.sprint==getFromStorage("currentSprintId")) return true
        return false
      })
      setInStorage("tasks",getFromStorage("tasks").concat(task))
      setInStorage("allTask",getFromStorage("allTask").concat(data))

    });
    response.on('end', function (end) {
      console.log(end)
    });
}