import React, { Component } from 'react';
import { Badge, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
class Detail extends Component {
  render() {
    return (
      <Row>
          <Col>         
                
                  <Row>       
                    <Col xs="2" md="2">
                      <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                    </Col> 
                    <Col xs="2" md="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Sort by ID</option>
                        <option value="1">Sort by Sprint</option>
                        <option value="2">Sort by Status</option>    
                      </Input>
                    </Col>   
                    <Col xs="0" md="0">
                      <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                    </Col> 
                </Row>     
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>As a...</th>
                    <th>I want to be able to...</th>
                    <th>So that...</th>
                    <th>
                      <Link to="/UserStory/Add">
                      <Button color="primary" size="sm" className="mt-3" active tabIndex={-1}><i class="fa fa-plus-circle"></i></Button>
                      </Link> 
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Admin</td>
                    <td>See a list of all members and visitors</td>
                    <td>I can monitor site visits</td>
                    
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Admin</td>
                    <td>Add new categories</td>
                    <td>I can allow members to create engaging content</td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Admin</td>
                    <td>Add new security groups</td>
                    <td>Security levels are approriate</td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Admin</td>
                    <td>Add new key words</td>
                    <td>Content is easy to groups and search for</td>
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Admin</td>
                    <td>Delete comment</td>
                    <td>Offensive content is removed</td>
                  
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Member</td>
                    <td>Update my account detail</td>
                    <td>I can be contacted by admin</td>
                   
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Member</td>
                    <td>Change my password </td>
                    <td>I can keep secure</td>
                   
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                   <tr>
                    <td>8</td>
                    <td>Member</td>
                    <td>Update my email preferences </td>
                    <td>I am not bombarded junk mail</td>
                    
                  
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                   <tr>
                    <td>9</td>
                    <td>Visitor</td>
                    <td>Create an account </td>
                    <td>I can benifit from member discounts</td>
                  
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Visitor</td>
                    <td>Suggest improvements</td>
                    <td>I can contribute to the site usability </td>
                  
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Visitor</td>
                    <td>View member profile </td>
                    <td>I can know more about member </td>
                   
                    <td>
                      <Button type="submit" size="sm" color="primary"><i class="fa fa-edit"></i></Button>
                    </td>
                  </tr>
                  </tbody>
                </Table>
               
          </Col>
        </Row>
    );
  }
}

export default Detail;
