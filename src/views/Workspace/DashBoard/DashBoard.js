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
  Legend,ResponsiveContainer
} from 'recharts';
import { getFromStorage } from '../../../service/storage';

const dataChart = [
 
  {
    name: 'Date 1', expect: 590, real: 800
  },
  {
    name: 'Date 2', expect: 868, real: 967
  },
  {
    name: 'Date 3', expect: 1397, real: 1098 
  },
  {
    name: 'Date 4', expect: 1480, real: 1200
  },
  {
    name: 'Date 5', expect: 1520, real: 1108
  },
  {
    name: 'Date 6', expect: 1590, real: 800
  },
];

class TCol extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>

      <ComposedChart
      width={700}
      height={500}
        data={dataChart}
        margin={{
          top: 20, right: 80, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" label={{ value: 'Date in spint', position: 'insideBottomRight', offset: 0 }} />
        <YAxis label={{ value: 'Task', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="expect" fill="#fbf313" stroke="#fbf313" />
        <Bar dataKey="real" barSize={20} fill="#413ea0" />
      </ComposedChart>
      </ResponsiveContainer>
    );
  }
}


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
    let allTask=getFromStorage("allTask")
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
                  Sprint burndown             
                  </CardHeader>
                  <CardBody>
                  <TCol />
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
