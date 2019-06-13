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
import Chart2 from './Chart2'
import Chart1 from './Chart1'
//chart1 tỷ lệ task done inprogress  todo của sprint đang active

//
//chart3 là số lượng sprint backlog done của mỗi team
const dataChart3 = [
  {
    nameTeam: 'Team 1', done: 4000, inprogress: 2400, 
  },
  {
    nameTeam: 'Team 2', done: 3000, inprogress: 1398, 
  },
  {
    nameTeam: 'Team 3', done: 2000, inprogress: 9800,
  },
  {
    nameTeam: 'Team 4', done: 2780, inprogress: 3908, 
  },
  
];
class Chart3 extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={dataChart3}
        margin={{
          top: 20, right: 80, left: 20, bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="nameTeam" />
        <YAxis label={{ value: 'Sprint backlog', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="done" stackId="a" fill="#82ca9d" />
        <Bar dataKey="inprogress" stackId="a" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    );
  }
}
//


const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.toggleAccordion = this.toggleAccordion.bind(this);
   
    this.state = {
      
      dataTaskInprogress:[{
        "teamName":"",
        "title ":"",
        "description":"",
        "sprint ":"",
        "sprintBacklog":"",
        "priority":"",
        "start":"",
        "deadline":"",
        "assignee":"",
      }],
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
      modalAddProblem: false,
      modalComment: false,
    };
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }
  getSprintName=(id)=>{
    let name=""
    this.props.sprints.forEach(i=>{
      if (i.id==id) name=i.title
    })
    return name
  }
  getBacklogName=(id)=>{
    let name=""
    this.props.sprintbacklogs.forEach(i=>{
      if (i.id==id) name=i.title
    })
    return name
  }

  render() {
    console.log("render dashboard")
    let allTask=getFromStorage("tasks")
    let dataTaskDone=[]
    let dataTaskInprogress =[]
    let that = this;
   
   
    
    allTask.forEach(i => {
      if (i.status=="done") dataTaskDone.push(Object.assign({},i,{sprint:that.getSprintName(i.sprint),sprintBacklog:that.getBacklogName(i.sprintBacklog)}))
      if (i.status=="inprogress") dataTaskInprogress.push((Object.assign({},i,{sprint:that.getSprintName(i.sprint),sprintBacklog:that.getBacklogName(i.sprintBacklog)}))
    );})
    return (
      <Row>
          <Col> 
                <Card>
                <CardHeader>
                  Task in active             
                  </CardHeader>
                  <CardBody>
                  <Chart1 />
                  </CardBody>
                </Card>

                <Card>
                <CardHeader>
                  <h3>Task through sprints</h3>    
                  </CardHeader>
                  <CardBody>
                  <Chart2 />
                  </CardBody>
                </Card>  

                <Card>
                <CardHeader>
                <h3>Velocity</h3>
                  </CardHeader>
                  <CardBody>
                  <Chart3 />
                  </CardBody>
                </Card>  
              

             <div class="card border-success mb-3" >
                <div class="card-header text-white bg-success mb-3">
                <strong>Task</strong>
                  <small> done</small>
                </div>
                <div class="card-body"> 
                    <Row>       
                        <Col xs="2" md="2">
                          <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                        </Col> 
                        <Col xs="0" md="0">
                          <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                        </Col> 
                    </Row>  
                    <Table responsive size="sm">
                      <thead>
                      <tr>
                        <th>Team <i class="fa fa-sort"></i></th>
                        <th>Title <i class="fa fa-sort"></i></th>
                        <th>Description <i class="fa fa-sort"></i></th>
                        <th>SprintID <i class="fa fa-sort"></i></th>
                        <th>Sprint Backlog <i class="fa fa-sort"></i></th>
                        <th>Priority <i class="fa fa-sort"></i></th>
                        <th>Start day <i class="fa fa-sort"></i></th>
                        <th>Estimation <i class="fa fa-sort"></i></th>{/*chứa deadline ước tính */}
                        <th>Real <i class="fa fa-sort"></i></th>{/*chứa ngày set trạng thái done */}
                        <th>Assignee </th>                                     
                      </tr>
                      </thead>
                      <tbody>
                      { (dataTaskDone!=undefined)?
                          dataTaskDone.map(function (item, key) {
                            return(
                              <tr key={key}>
                              <td >{item.teamName}</td>
                              <td >{item.title}</td>
                              <td>{item.description}</td>
                              <td>{item.sprint}</td>
                              <td>{item.sprintBacklog}</td>
                              <td>{item.priority}</td>
                              <td>{item.start}</td>
                              <td>{item.deadline}</td>
                              <td>{item.real}</td>
                              <td>{item.assignee}</td>
                              </tr>
                            )
                          }):<td> </td>            
                        }                 
                      </tbody>
                    </Table>      
              </div>
            </div>    

          <div class="card border-warning  mb-3" >
                <div class="card-header text-white bg-warning  mb-3">
                  <strong>Task</strong>
                  <small> inprogress</small>
                </div>
              <div class="card-body"> 
               <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
                </Row>  
               <Table responsive size="sm">
                  <thead>
                  <tr>
                        <th>Team <i class="fa fa-sort"></i></th>
                        <th>Title <i class="fa fa-sort"></i></th>
                        <th>Description <i class="fa fa-sort"></i></th>
                        <th>SprintID <i class="fa fa-sort"></i></th>
                        <th>Sprint Backlog <i class="fa fa-sort"></i></th>
                        <th>Priority <i class="fa fa-sort"></i></th>
                        <th>Start day <i class="fa fa-sort"></i></th>
                        <th>Estimation <i class="fa fa-sort"></i></th>{/*chứa deadline ước tính */}
                        <th>Assignee </th>               
                  </tr>
                  </thead>
                  <tbody>
                      { (dataTaskInprogress!=undefined)?
                          dataTaskInprogress.map(function (item, key) {
                            return(
                              <tr key={key}>
                              <td >{item.teamName}</td>
                              <td >{item.title}</td>
                              <td>{item.description}</td>
                              <td>{item.sprint}</td>
                              <td>{item.sprintBacklog}</td>
                              <td>{item.priority}</td>
                              <td>{item.start}</td>
                              <td>{item.deadline}</td>                            
                              <td>{item.assignee}</td>
                              </tr>
                            )
                          }):<td> </td>            
                        }                 
                      </tbody>
                </Table>
              </div>
        </div>    
    </Col>
        </Row>
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
export default connect(mapStateToProps)(DashBoard);
