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
class Chat extends Component {
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
      }
    };


  render() {
    return (
    <div class="container">
      <Row>
          <Col >         
            <Row>
            <div class="col-sm-4">   
                <div class="card border-primary mb-3" >
                  <div class="card-header bg-primary">All message</div>
                    <div class="card-body">
                                {this.state.dataUserStory.map(function(item, key) {
                                  return (
                                    <div class="list-group">
                                      <button type="button" class="list-group-item list-group-item-action active">
                                        Cras justo odio
                                      </button>
                                      <button type="button" class="list-group-item list-group-item-action">Dapibus ac facilisis in</button>
                                      <button type="button" class="list-group-item list-group-item-action">Morbi leo risus</button>
                                      <button type="button" class="list-group-item list-group-item-action">Porta ac consectetur ac</button>
                                      <button type="button" class="list-group-item list-group-item-action" disabled>Vestibulum at eros</button>
                                    </div>
                                   
                                )})
                                }
                      </div>
                </div> 
              </div>
               
              <div class="col-sm-8">   
                 <div class="card border-primary mb-3">
                  <div class="card-header bg-primary">
                    Message
                    <Button type="submit" size="sm" color="primary"> save</Button>
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
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.priority}/>
                                              </div>
                                                
                                               
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Label htmlFor="text-input">Estimation</Label>
                                              </div>
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.estimation}/>                            
                                              </div>
                                               

                                              <div class="col col-lg-1 col-md-1 col-sm-1">
                                                <Label htmlFor="text-input">Sprint</Label>
                                              </div>
                                              <div class="col col-lg-2 col-md-2 col-sm-2">
                                                <Input type="text" name="text-input" id="text-input" rows="9" value={item.sprint}/>                            
                                              </div>
                                               
                                            </div>
                                            <Button type="submit" size="sm" color="success" align="center"><i class="fa fa-arrow-left"></i></Button>
                                          </CardBody>
                                    </Card> 
                                  )
                        })} 
                  </div>
                </div> 
              </div>
            
            </Row> 
          </Col>
        </Row>
      </div>
    );
  }
}

export default Chat;
