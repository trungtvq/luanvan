
import {
    getFromStorage,
    setInStorage
  } from '../storage'
  import { setSprint } from '../../actions'

import { store } from '../../App';
const proto = {};
proto.sprint = require('../../gRPC/sprint/sprint_grpc_web_pb');


export default function loadAllSprint(id){
    console.log("loadAllSprint")
    console.log(id)
    const sprintService = new proto.sprint.SprintClient('https://www.overlead.co');
    var metadata = {};
    var GetAllSprintReq = new proto.sprint.GetAllSprintReq();
    GetAllSprintReq.setRequesterid(getFromStorage("userId"));
    GetAllSprintReq.setAccesstoken(getFromStorage("accessToken"));
    GetAllSprintReq.setProjectid(id);
    let data=[]
    var response = sprintService.getAllSprint(GetAllSprintReq, metadata)
    let that = this
  
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let arr = response.getStart().split('-');
        let start = ""
        let end = ""
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
        } else {
          start = (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
        }
        arr = response.getEnd().split('-')
        if (arr[1] > 12) {
          arr[1] = arr[1] - 12
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "PM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
        } else {
          end = "\xa0" + (arr[1].length == 1 ? "0" + arr[1] : arr[1]) + ":" + (arr[0].length == 1 ? "0" + arr[0] : arr[0]) + "AM" + `\xa0\xa0` + arr[2] + "/" + arr[3] + "/" + arr[4]
        }


        
          data.push(
          {
            id: response.getId(),
            title: response.getTitle(),
            num: response.getNum(),
            goal: response.getGoal(),
            status: response.getStatussprint(),
            start,
            end,
          })
         
      }})
      
    
    response.on('status', function (status) {
      if (status.code!=0) console.log(status)
      else{
        setInStorage('sprints',data)
        store.dispatch(setSprint(data))
      }
    });

    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });
  }