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
Modal,
ModalBody,
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
                "priority":'',
                "estimation":'',
                "sprint":'',
              },
              {
                "title":"See list 2",
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
                "priority":'',
                "estimation":'',
                "sprint":'',
              },
              {
                "title":"See list 3",
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
                "priority":'',
                "estimation":'',
                "sprint":'',
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
      actionStatus: '',    //success or fail when action handleSave
      modalActionStatus: false,

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
    onTextboxChangePriorityUserstory=(event,title)=> {
      const tmpdata = this.state.dataUserStory.map(p =>
        p.title == title
          ? {
            ...p, priority:event.target.value
          }
          : p
      );
      this.setState(prevState => ({
        dataUserStory: tmpdata,
      }));
    }
    onTextboxChangeEstimationUserstory=(event,title)=> {
      const tmpdata = this.state.dataUserStory.map(p =>
        p.title == title
          ? {
            ...p, estimation:event.target.value
          }
          : p
      );
      this.setState(prevState => ({
        dataUserStory: tmpdata,
      }));
    }
    onTextboxChangeSprintUserstory=(event,title)=> {
      const tmpdata = this.state.dataUserStory.map(p =>
        p.title == title
          ? {
            ...p, sprint:event.target.value
          }
          : p
      );
      this.setState(prevState => ({
        dataUserStory: tmpdata,
      }));
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
    componentDidMount() {
      //viet hàm lấy toàn bộ dữ liệu trong collection userstory đổ vào array dataUserStory
    }

    handleStoryToBacklog=(titleStory)=>{
      var result = this.state.dataUserStory.find(x => x.title === titleStory)
      this.setState(prevState => ({ dataUserStory: [...prevState.dataUserStory.filter(function (e) { return e.title !== titleStory; })] }));
      this.setState(prevState => ({ dataProductBacklog: [...prevState.dataProductBacklog, { title: titleStory, as: result.as, want: result.want, so: result.so, priority: result.priority, estimation: result.estimation, sprint: result.sprint }] }));
    }
    handleBacklogToStory=(titleProductbacklog)=>{
      var result = this.state.dataProductBacklog.find(x => x.title === titleProductbacklog)
      this.setState(prevState => ({ dataProductBacklog: [...prevState.dataProductBacklog.filter(function (e) { return e.title !== titleProductbacklog; })] }));
      this.setState(prevState => ({ dataUserStory: [...prevState.dataUserStory, { title: titleProductbacklog, as: result.as, want: result.want, so: result.so, priority: '', estimation: '', sprint: '' }] }));
    }

    

  render() {
    let that=this;
    return (
      <Row>
          <Modal size="sm" isOpen={that.state.modalActionStatus} toggle={that.toggleActionStatus} className={that.props.className}>
          <ModalBody>
            <center><h4>{that.state.actionStatus}</h4></center>
          </ModalBody>
          </Modal>
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
                                                  <Input type="text" name="text-input" id="text-input" rows="9" value={item.priority} onChange={e =>{that.onTextboxChangePriorityUserstory(e,item.title)}}/>
                                                </div>
                                               
                                              

                                                 <div class="col col-lg-2 col-md-2 col-sm-2">
                                                  <Label htmlFor="text-input">Estimation</Label>
                                                </div>
                                                <div class="col col-lg-2 col-md-2 col-sm-2">
                                                  <Input type="text" name="text-input" id="text-input" rows="9" value={item.estimation} onChange={e =>{that.onTextboxChangeEstimationUserstory(e,item.title)}}/>                            
                                                </div>

                                                 

                                                <div class="col col-lg-1 col-md-1 col-sm-1">
                                                  <Label htmlFor="text-input">Sprint</Label>
                                                </div>
                                                <div class="col col-lg-2 col-md-2 col-sm-2">
                                                  <Input type="text" name="text-input" id="text-input" rows="9" value={item.sprint} onChange={e =>{that.onTextboxChangeSprintUserstory(e,item.title)}}/>                            
                                                </div>
                                            </div>
                                            <Button  size="sm" color="success" align="center" onClick={() =>{that.handleStoryToBacklog(item.title)}}><i class="fa fa-arrow-right"></i></Button>
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
                    PRODUCT BACKLOG
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
                                            <Button  size="sm" color="success" align="center" onClick={() =>{that.handleBacklogToStory(item.title)}}><i class="fa fa-arrow-left"></i></Button>
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
