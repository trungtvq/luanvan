import React, { Component } from 'react';
import { Badge, Button, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Table, Pagination, PaginationItem, PaginationLink, } from 'reactstrap';

class SprintBacklog extends Component {
  render() {
    return (
      <Row>
          <Col>             
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>ID <i class="fa fa-sort"></i></th>
                    <th>As a... <i class="fa fa-sort"></i></th>
                    <th>I want to be able to... <i class="fa fa-sort"></i></th>
                    <th>So that... <i class="fa fa-sort"></i></th>
                    <th>Priority <i class="fa fa-sort"></i></th>
                    <th>Estimation <i class="fa fa-sort"></i></th>
                    <th>Sprint <i class="fa fa-sort"></i></th>
                   
                  </tr>
                  </thead>
                  <tbody>               
                  <tr>
                    <td>6</td>
                    <td>Member</td>
                    <td>Update my account detail</td>
                    <td>I can be contacted by admin</td>
                    <td>5</td>
                    <td>3</td>
                    <td>2</td>
                    
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Member</td>
                    <td>Change my password </td>
                    <td>I can keep secure</td>
                    <td>5</td>
                    <td>1</td>
                    <td>2</td>
                   
                  </tr>
                   <tr>
                    <td>8</td>
                    <td>Member</td>
                    <td>Update my email preferences </td>
                    <td>I am not bombarded junk mail</td>
                    <td>6</td>
                    <td>2</td>
                    <td>2</td>
                   
                  </tr>
                  
                  </tbody>
                </Table>
               
          </Col>
        </Row>
    );
  }
}

export default SprintBacklog;
