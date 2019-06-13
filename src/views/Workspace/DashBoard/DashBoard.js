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

//chart1 tỷ lệ task done inprogress  todo của sprint đang active
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

class Chart1 extends PureComponent {

  state = {
    activeIndex: 0,
  };

  onPieEnter = (dataChart1, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    let allTask=getFromStorage("tasks")
    let taskDone=0;
    let taskInprogress =0;
    let tong = allTask.length;
    let that = this;
  
    allTask.forEach(i => {
      if (i.status=="done") taskDone++
      if (i.status=="inprogress") taskInprogress++;
    })
    const dataChart1 = [
      { name: 'Done', value: taskDone/tong },
      { name: 'Inprogress', value: taskInprogress/tong },
      { name: 'To do', value: (tong-taskDone-taskInprogress)/tong },
    ];
    return (
      <ResponsiveContainer width="100%" height={400}>
      <PieChart width={400} height={400}>
        <Pie
          activeIndex={this.state.activeIndex}
          activeShape={renderActiveShape}
          data={dataChart1}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={this.onPieEnter}
        />
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
//
//chart2: trình bày tất cả các sprint mỗi sprint chứa số lượng task đúng hẹn và số lượng task trễ

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio, 2);
};

const toPercent = (decimal, fixed = 0) => `${(decimal * 100).toFixed(fixed)}%`;
const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);
  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {
        	payload.map((entry, index) => (
          	<li key={`item-${index}`} style={{ color: entry.color }}>
            	{`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
           </li>
        	))
        }
      </ul>
    </div>
  );
};

class Chart2 extends PureComponent {
  render() {
    let allTask=getFromStorage("allTask")
    allTask.forEach(i=>{console.log("a+++"+i.late)})
    const data = [
      {
        nameSprint: 'sprint1', onTime: 4000, Late: 2400, Early: 2400,
      },
      {
        nameSprint: 'sprint2', onTime: 3000, Late: 1398, Early: 2210,
      },
      {
        nameSprint: 'sprint3', onTime: 2000, Late: 9800, Early: 2290,
      },
      {
        nameSprint: 'sprint4', onTime: 2780, Late: 3908, Early: 2000,
      },
      {
        nameSprint: 'sprint5', onTime: 1890, Late: 4800, Early: 2181,
      },
      {
        nameSprint: 'sprint6', onTime: 2390, Late: 3800, Early: 2500,
      },
      {
        nameSprint: 'sprint7', onTime: 3490, Late: 4300, Early: 2100,
      },
    ];
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
