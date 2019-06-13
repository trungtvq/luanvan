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
import { renderActiveShape} from "./tool"
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
        if (i.status=="done") {
          taskDone++
        }
        if (i.status=="inprogress") taskInprogress++;
      })
      const dataChart1 = [
        { name: 'Done', value: taskDone/tong },
        { name: 'Inprogress', value: taskInprogress/tong },
        { name: 'To do', value: (tong-taskDone-taskInprogress)/tong },
      ];
      console.log("test")
      console.log(taskDone,taskInprogress,tong)
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
  
export default Chart1  