import React, { Component } from 'react';
import { Card,CardHeader,Badge, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';

class SprintBacklog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [ 
              {
                "id":1,
                "as":"admin",
                "want":"See a list of all members and visitors",
                "so":"I can monitor site visits",
                "priority":1,
                "estimation":3,
                "sprint":1,
                "start":"9:00 20/5/2019",
                "deadline":"9:00 25/5/2019",
                
              },
              {
                "id":2,
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
                 "priority":2,
                "estimation":1,
                "sprint":1,
                "start":"9:00 20/5/2019",
                "deadline":"9:00 25/5/2019",
               
              },
              {
                "id":3,
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
                 "priority":3,
                "estimation":4,
                "sprint":1,
                "start":"9:00 20/5/2019",
                "deadline":"9:00 25/5/2019",
                
              },
              {
                "id":4,
                "as":"admin",
                "want":"Delete comment",
                "so":"Offensive content is removed",
                 "priority":4,
                "estimation":6,
                "sprint":1,
                "start":"9:00 20/5/2019",
                "deadline":"9:00 25/5/2019",
               
              },
              {
                "id":5,
                "as":"admin",
                "want":"Add new key words",
                "so":"Content is easy to groups and search for",
                "priority":5,
                "estimation":1,
                "sprint":1,
                "start":"9:00 20/5/2019",
                "deadline":"9:00 25/5/2019",
              
              },
              {
                "id":6,
                "as":"member",
                "want":"Update my account detail",
                "so":"I can be contacted by admin",
                "priority":5,
                "estimation":3,
                "sprint":2,
                "start":"9:00 20/5/2019",
                "deadline":"9:00 25/5/2019",
              }
            ],
      }
    };
    handleDelete = () => {
      
    };
  render() {
    let that=this;
    return (
      <Row>
          <Col>    
              <Card>
              <div class="table-responsive"> 
                <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>ID <i class="fa fa-sort"></i></th>
                    <th>As a... <i class="fa fa-sort"></i></th>
                    <th>I want to be able to... <i class="fa fa-sort"></i></th>
                    <th>So that... <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Estimation <i class="fa fa-sort"></i></th>
                    <th>Sprint <i class="fa fa-sort"></i></th>
                    <th>Start <i class="fa fa-sort"></i></th>
                    <th>Deadline <i class="fa fa-sort"></i></th>
                    <th></th>
                  </tr>
                  </thead>
                    <tbody>{this.state.data.map(function(item, key) {    
               return (
                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.as}</td>
                      <td>{item.want}</td>
                      <td>{item.so}</td>
                      <td><center>{item.priority}</center></td>
                      <td><center>{item.estimation}</center></td>
                      <td><center>{item.sprint}</center></td>
                      <td><center>{item.start}</center></td>
                      <td><center>{item.deadline}</center></td>
                      <td>                        
                      <Button type="submit" size="sm" color="danger" onClick={that.handleDelete}><i class="fa fa-trash"></i></Button>
                      </td>
                  </tr>
                )
             
             })}</tbody>
                </table>
            </div>
               </Card>
          </Col>
        </Row>
    );
  }
}

export default SprintBacklog;
