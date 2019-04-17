import React, { Component } from 'react';
import { Card, Badge, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';
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
              },
              {
                "id":2,
                "as":"admin",
                "want":"Add new categories",
                "so":"I can allow members to create engaging content",
              },
              {
                "id":3,
                "as":"admin",
                "want":"Add new security groups",
                "so":"Security levels are approriate",
              },
              {
                "id":4,
                "as":"admin",
                "want":"Delete comment",
                "so":"Offensive content is removed",
              },
              {
                "id":5,
                "as":"admin",
                "want":"Add new key words",
                "so":"Content is easy to groups and search for",
              },
              {
                "id":6,
                "as":"member",
                "want":"Update my account detail",
                "so":"I can be contacted by admin",
              }
            ],
      }
    };


  render() {
     const {
      data
    } = this.state;
    return (
      <Row>
          <Col>       
              <Row>       
                          <Col xs="2" md="2">
                            <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                          </Col> 
                          
                          <Col xs="0" md="0">
                            <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                          </Col> 
              </Row>
              <Card>   
                <table class="table table-lg">
                  <thead class="thead">
                  <tr class="bg-primary">
                    <th>ID <i class="fa fa-sort"></i></th>
                    <th>As a...<i class="fa fa-sort"></i></th>
                    <th>I want to be able to... <i class="fa fa-sort"></i></th>
                    <th>So that... <i class="fa fa-sort"></i></th>
                    <th>
                      <Link to="/UserStory/Add">
                          <Button color="primary" size="sm" className="mt-3" active tabIndex={-1}><i class="fa fa-plus-circle"></i></Button>
                      </Link> 
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
                      <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                      <Button type="submit" size="sm" color="danger"><i class="fa fa-trash"></i></Button>
                    </td>
                  </tr>
                )
             
             })}</tbody>
                </table>
            </  Card>  
          </Col>
        </Row>
    );
  }
}

export default Detail;
