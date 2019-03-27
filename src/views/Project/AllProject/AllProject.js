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
PaginationLink, 
Card, 
CardBody, 
CardHeader, 
Jumbotron,
} from 'reactstrap';

class AllProject extends Component {
  render() {
    return (
      <Row>
          <Col>             
        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Jumbotron</strong>
                <small> fluid</small>
              </CardHeader>
              <CardBody>
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                  </Container>
                </Jumbotron>
              </CardBody>
            </Card>      
          </Col>
        </Row>
    );
  }
}

export default AllProject;
