import React, { Component } from 'react';
import { Badge, 
  Button,
 Col, 
 Container, 
 Input, 
 InputGroup, 
 InputGroupAddon, 
 InputGroupText, 
 Row, 
 Table, 
 Pagination, 
 PaginationItem,
 Card,
CardHeader,
CardBody,
Progress,
Label,
 PaginationLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUserStory: [ 
              {
                "title":"See list 1",
                "as":"admin",
                "want":"See a list of all members and visitors",
                "so":"I can monitor site visits",
              },
              {
                "title":"See list 2",
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
              },
              {
                "title":"See list 3",
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
              },
              
            ],
      dataProductBacklog: [ 
              {
                "title":"See list 4",
                "as":"admin",
                "want":"See a list of all members and visitors",
                "so":"I can monitor site visits",
                "priority":1,
                "estimation":3,
                "sprint":1,
              },
              {
                "title":"See list 5",
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
                 "priority":2,
                "estimation":1,
                "sprint":1,
               
              },
              {
                "title":"See list 6",
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
                 "priority":3,
                "estimation":4,
                "sprint":1,
               
              },
            
            ],
     
      priorityUserstory:'',
      estimationUserstory:'',
      sprintUserstory:'',
      
      priorityProductBacklog:'',
      estimationProductBacklog:'',
      sprintProductBacklog:'',

      title:'',
          }
    };
    //userstory
    onTextboxChangePriorityUserstory=(event)=> {
      this.setState({
        priorityUserstory: event.target.value,
      });
    }
    onTextboxChangeEstimationUserstory=(event)=> {
      this.setState({
        estimationUserstory: event.target.value,
      });
    }
    onTextboxChangeSprintUserstory=(event)=> {
      this.setState({
        sprintUserstory: event.target.value,
      });
    }
    //ProductBacklog
    onTextboxChangePriorityProductBacklog=(event,title)=> {
      const tmpdata = this.state.dataProductBacklog.map(p =>
        p.title == title
          ? {
            ...p, priority:event.target.value
          }
          : p
      );
      this.setState(prevState => ({
        dataProductBacklog: tmpdata,

      }));
    }
    onTextboxChangeEstimationProductBacklog=(event,title)=> {
      const tmpdata = this.state.dataProductBacklog.map(p =>
        p.title == title
          ? {
            ...p, estimation:event.target.value
          }
          : p
      );
      this.setState(prevState => ({
        dataProductBacklog: tmpdata,

      }));
    }
    onTextboxChangeSprintProductBacklog=(event,title)=> {
      const tmpdata = this.state.dataProductBacklog.map(p =>
        p.title == title
          ? {
            ...p, sprint:event.target.value
          }
          : p
      );
      this.setState(prevState => ({
        dataProductBacklog: tmpdata,

      }));
    }

    handleStoryToBacklog=(titleStory,priority,estimation,sprint)=>{
      var result = this.state.dataUserStory.find(x => x.title === titleStory)
      console.log("kt____"+result.title);
      console.log("kt____"+titleStory);
      this.setState(prevState => ({ dataUserStory: [...prevState.dataUserStory.filter(function (e) { return e.title !== titleStory; })] }));
      this.setState(prevState => ({ dataProductBacklog: [...prevState.dataProductBacklog, { title: titleStory, as: result.as, want: result.want, so: result.so, priority: priority, estimation: estimation, sprint: sprint }] }));

    }
    handleBacklogToStory=()=>{}

    handleSave = () => {
      //viet hàm lấy toàn bộ dữ liệu trong mảng dataProductBacklog thêm vào collection productbacklog
    }

  render() {
    let that=this;
    return (
      <Row>
          <Col>         
            <Row>
              <Col>    
                <div class="card border-primary mb-3">
                  <div class="card-header bg-primary">USER STORY</div>
                    <div class="card-body">
                                {this.state.dataUserStory.map(function(item, key) {
                               return (
                                    <Card>
                                          <CardHeader>
                                            <i className=""></i><strong>As: {item.as}</strong>
                                          </CardHeader>
                                          <CardBody>        
                                            <h6>I want: {item.want}</h6>
                                            <h6>So that:  {item.so}</h6>
                                            <div class="row">
                                                <div class="col col-lg-2 col-md-2 col-sm-2">
                                                  <Label htmlFor="text-input">Priority</Label>
                                                </div>
                                                <div class="col col-lg-2 col-md-2 col-sm-2">
                                                  <Input type="text" name="text-input" id="text-input" rows="9" onChange={that.onTextboxChangePriorityUserstory}/>
                                                </div>
                                               
                                              

                                                 <div class="col col-lg-2 col-md-2 col-sm-2">
                                                  <Label htmlFor="text-input">Estimation</Label>
                                                </div>
                                                <div class="col col-lg-2 col-md-2 col-sm-2">
                                                  <Input type="text" name="text-input" id="text-input" rows="9" onChange={that.onTextboxChangeEstimationUserstory}/>                            
                                                </div>

                                                 

                                                <div class="col col-lg-1 col-md-1 col-sm-1">
                                                  <Label htmlFor="text-input">Sprint</Label>
                                                </div>
                                                <div class="col col-lg-2 col-md-2 col-sm-2">
                                                  <Input type="text" name="text-input" id="text-input" rows="9" onChange={that.onTextboxChangeSprintUserstory}/>                            
                                                </div>
                                            </div>
                                            <Button  size="sm" color="success" align="center" onClick={() =>{that.handleStoryToBacklog(item.title, item.priority, item.estimation, item.sprint)}}><i class="fa fa-arrow-right"></i></Button>
                                          </CardBody>
                                    </Card> 
                                 )
                              })}

                      </div>
                </div> 
              </Col>
               
               <Col>    
                 <div class="card border-primary mb-3">
                  <div class="card-header bg-primary">
                    PRODUCT BACKLOG_

                    <Button type="submit" size="sm" color="primary" onClick={that.handleSave}> save</Button>
                  </div>
                    <div class="card-body">
                        {this.state.dataProductBacklog.map(function(item, key) {
                          return (
                                    <Card>
                                          <CardHeader>
                                            <i className=""></i><strong>As {item.as}</strong>
                                          </CardHeader>
                                          <CardBody>        
                                            <h6>I want :  {item.want}</h6>
                                            <h6> So that:   {item.so}</h6>
                                             
                                            <div class="row">

                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Label htmlFor="text-input">Priority</Label>
                                              </div>
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.priority} onChange={e =>{that.onTextboxChangePriorityProductBacklog(e,item.title)}}/>
                                              </div>
                                                
                                               
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Label htmlFor="text-input">Estimation</Label>
                                              </div>
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.estimation} onChange={e =>{that.onTextboxChangeEstimationProductBacklog(e,item.title)}}/>                            
                                              </div>
                                               

                                              <div class="col col-lg-1 col-md-1 col-sm-1">
                                                <Label htmlFor="text-input">Sprint</Label>
                                              </div>
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.sprint} onChange={e =>{that.onTextboxChangeSprintProductBacklog(e,item.title)}}/>                            
                                              </div>
                                               
                                            </div>
                                            <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-left"></i></Button>
                                          </CardBody>
                                    </Card> 
                                  )
                        })} 
                              

                      </div>
                </div> 
              </Col>
            
            </Row> 
          </Col>
        </Row>
    );
  }
}

export default Cover;
