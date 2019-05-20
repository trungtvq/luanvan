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
               
                "as":"admin",
                "want":"See a list of all members and visitors",
                "so":"I can monitor site visits",
              },
              {
                
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
              },
              {
                
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
              },
              
            ],
      dataProductBacklog: [ 
              {
                "as":"admin",
                "want":"See a list of all members and visitors",
                "so":"I can monitor site visits",
                "priority":1,
                "estimation":3,
                "sprint":1,
              },
              {
                
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
                 "priority":2,
                "estimation":1,
                "sprint":1,
               
              },
              {
               
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
    onTextboxChangePriorityProductBacklog=(event)=> {
      this.setState({
        priorityProductBacklog: event.target.value,
      });
    }
    onTextboxChangeEstimationProductBacklog=(event)=> {
      this.setState({
        estimationProductBacklog: event.target.value,
      });
    }
    onTextboxChangeSprintProductBacklog=(event)=> {
      this.setState({
        sprintProductBacklog: event.target.value,
      });
    }

    handleSave = () => {}
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
                                            <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-right"></i></Button>
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
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.priority} onChange={that.onTextboxChangePriorityProductBacklog}/>
                                              </div>
                                                
                                               
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Label htmlFor="text-input">Estimation</Label>
                                              </div>
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.estimation} onChange={that.onTextboxChangeEstimationProductBacklog}/>                            
                                              </div>
                                               

                                              <div class="col col-lg-1 col-md-1 col-sm-1">
                                                <Label htmlFor="text-input">Sprint</Label>
                                              </div>
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.sprint} onChange={that.onTextboxChangeSprintProductBacklog}/>                            
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
