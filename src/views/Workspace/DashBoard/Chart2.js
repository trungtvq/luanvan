import React, { Component } from 'react';
import { connect } from 'react-redux'

import { 
Button, 
Col, 
Input,
Row,
Table, 
Card,
CardBody,
CardHeader,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import  { PureComponent } from 'react';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend,ResponsiveContainer,BarChart,Cell,PieChart,Pie,Sector,AreaChart,
} from 'recharts';
import { getFromStorage } from '../../../service/storage';
import {renderTooltipContent,toPercent} from './tool'
//
//chart2: trình bày tất cả các sprint mỗi sprint chứa số lượng task đúng hẹn và số lượng task trễ


  
class Chart2 extends PureComponent {
    getSprintName=(id)=>{
      let name=""
      this.props.sprints.forEach(i=>{
        if (i.id==id) name=i.title
      })
      return name
    }
    render() {
      let that=this
  
      console.log("render chart2")
      let allTask=getFromStorage("allTask")
      let data=[]
      console.log("gogogo")
      allTask.forEach(i=>{
        if (i.status=="done"){
            console.log("i")
            console.log(i)
          if (i.late>0){
            let flag=false
            if (data!=[])
            data=data.map(p=>{
                console.log(p)
                if (p.sprintId!="")

              if (p.sprintId==i.sprint){
                flag=true
                let Late=p.Late+1
                return Object.assign(p,{Late})
              }
              return p
            })
            if (flag==false) data.push(
              {
                sprintId:i.sprint,
                nameSprint:that.getSprintName(i.sprint),
                onTime:0,
                Late:1,
                Early:0            
              }
            )
      
          }else{
            let flag=false
            if (data!=[])
  
            data=data.map(p=>{
                console.log(p)

                if (p.sprintId!="")
              if (p.sprintId==i.sprint){
                flag=true
                let Early=p.Early+1
                console.log(Early)
                return Object.assign(p,{Early})
              }
              return p
            })
            if (flag==false) data.push(
              {
                sprintId:i.sprint,
                nameSprint:that.getSprintName(i.sprint),
                onTime:0,
                Late:0,
                Early:1        
              }
            )
          }
        }
        console.log(data)
  
      })
  console.log(data)
      return (
        <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          stackOffset="expand"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nameSprint" />
          <YAxis tickFormatter={toPercent} />
          <Tooltip content={renderTooltipContent} />
          <Area type="monotone" dataKey="onTime" stackId="1" stroke="green" fill="green" />
          <Area type="monotone" dataKey="Late" stackId="1" stroke="red" fill="red" />
          <Area type="monotone" dataKey="Early" stackId="1" stroke="blue" fill="blue" />
        </AreaChart>
        </ResponsiveContainer>
      );
    }
  }
  function mapStateToProps(state) {
    console.log("mapStateToProps")
    const { changeStatusProject } = state
    const currentProject  = changeStatusProject.projectId
    const {sprintbacklogs,sprints}= changeStatusProject
    return {
      currentProject,sprintbacklogs,sprints
    }
  }
  export default connect(mapStateToProps)(Chart2);
  