import React, { Component } from 'react';
import { Card,CardHeader,Badge, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
class Detail extends Component {
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
                "status":"done",
              },
              {
                "id":2,
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
                 "priority":2,
                "estimation":1,
                "sprint":1,
                "status":"done",
              },
              {
                "id":3,
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
                 "priority":3,
                "estimation":4,
                "sprint":1,
                "status":"done",
              },
              {
                "id":4,
                "as":"admin",
                "want":"Delete comment",
                "so":"Offensive content is removed",
                 "priority":4,
                "estimation":6,
                "sprint":1,
                "status":"done",
              },
              {
                "id":5,
                "as":"admin",
                "want":"Add new key words",
                "so":"Content is easy to groups and search for",
                "priority":5,
                "estimation":1,
                "sprint":1,
                "status":"done",
              },
              {
                "id":6,
                "as":"member",
                "want":"Update my account detail",
                "so":"I can be contacted by admin",
                "priority":5,
                "estimation":3,
                "sprint":2,
                "status":"done",
              }
            ],
      }
    };

  render() {
    return (
      <Row>
          <Col>         
                 <Card>
                
                  <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
                       <Col xs="8" md="8">
                       <Link to="/ProductBacklog/Add">
                        <Button color="primary" size="sm" className="mt-3" active tabIndex={-1}><i class="fa fa-plus-circle"></i></Button>
                       </Link> 
                     </Col>
                </Row>     
                <Table responsive size="sm">
                  <thead>
                  <tr>
                    <th>ID <i class="fa fa-sort"></i></th>
                    <th>As a... <i class="fa fa-sort"></i></th>
                    <th>I want to be able to... <i class="fa fa-sort"></i></th>
                    <th>So that...  <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Estimation <i class="fa fa-sort"></i></th>
                    <th>Sprint <i class="fa fa-sort"></i> </th>
                    <th>Status < i class="fa fa-sort"></i></th>
                    <th>
                     
                    </th>
                  </tr>
                  </thead>
                  <tbody>{this.state.data.map(function(item, key) {
             
               return (
                  <tr key = {key}>
                      <td>{item.id}</td>
                      <td>{item.as}</td>
                      <td>{item.want}</td>
                      <td>{item.so}</td>
                      <td>{item.priority}</td>
                      <td>{item.estimation}</td>
                      <td>{item.sprint}</td>
                      <td>
                       <Input type="select" name="status" id="status">
                        <option value="0">{item.status}</option>
                        <option value="1">to do</option>
                        <option value="2">inprogress</option>
                         <option value="2">done</option>
                      </Input>
                      </td> 
                        <td>
                        <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      </td>
                  </tr>
                )
             
             })}</tbody>
                </Table>
                
              </Card>
              
          </Col>
        </Row>
    );
  }
}

export default Detail;
