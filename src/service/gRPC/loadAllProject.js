 import React, { Component } from 'react';
 import { Redirect } from 'react-router-dom';
import { addProject, setProject } from '../../actions'
import {store} from '../../App'

 import {
    getFromStorage,
    setInStorage
  } from '../storage'
  
import { setTeam } from '../../actions'
import loadAllSprint from './loadAllSprint';
import loadAllTeam from './loadAllTeam';
const proto = {};
proto.myproject = require('../../gRPC/myproject/myproject_grpc_web_pb');

const getAllProject= ()=>{
    const myprojectService = new proto.myproject.MyprojectClient('https://www.overlead.co');
    var metadata = {};
    var GetAllProjectReq = new proto.myproject.GetAllProjectReq();
    GetAllProjectReq.setRequesterid(getFromStorage("userId"));
    GetAllProjectReq.setCookie(getFromStorage("accessToken"));
    let that = this
    var response = myprojectService.getAllProject(GetAllProjectReq, metadata)
    let projects=[]
    response.on('data', function (response) {
        if (response.getStatus() == "SUCCESS") {
            projects.push({
                id:response.getProjectid(),
                topic:response.getTopic(),
                projectName:response.getProjectname(),
                start:response.getStart(),
                end:response.getEnd(),
                private:response.getPrivate(),
                progress:response.getProgress()
            })
            store.dispatch(addProject(response.getProjectid(), response.getTopic(), response.getProjectname(), response.getStart(), response.getEnd(), response.getPrivate(), response.getProgress()))
            
        }
        
    });
    response.on('status', function (status) {
        let flag = false
        let cp = getFromStorage("currentProject")
        let lastCreated = ''
        let lastName = ''
        projects.map(p => {
            if (p.id == cp ) {
                flag = true
                store.dispatch(setProject(cp, p.projectName))
            }
            lastCreated = p.id
            lastName = p.projectName
            return p
        })

        if (flag == false){

            cp=lastCreated          
            store.dispatch(setProject(lastCreated, lastName))
        }
        loadAllTeam(cp)
        loadAllSprint(cp)

    });
    response.on('end', function (end) {

    });
}
export default (getAllProject)