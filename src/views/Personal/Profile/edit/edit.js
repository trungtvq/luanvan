import React, { Component } from 'react';

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
  Table,
  Pagination,
PaginationItem,
PaginationLink,
Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Demo from '../../../../containers/HomeNav'
class edit extends Component {
  render() {
    return (
      <div>
      <div>
       <Demo />
      </div>
      <Container>
        <Row>
          <Col>      
            <Card>             
              <CardBody>
                <img src={'../../assets/img/avatar/myavatar.png'} className="img-avatar" />
                <Form  className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Point</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="8/10"/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Full name</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="" value="Nguyễn Văn A"/>    
                      </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Address</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="13 Lí Thường Kiệt, p9, Q10"/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Date of Birth </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="26/5/1993"/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="NguyenA@gmail.com"/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Fb</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="https://www.facebook.com/NguyenA.9615"/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Workplace</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="freelancer"/>    
                    </Col>
                  </FormGroup>

                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Skill</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" id="text-input" name="text-input" placeholder="" value="•  Databases etc: Oracle 8 to 10g, PL/SQL, MS SQL Server, My SQL
                        • Programming Languages: C#, SharePoint, VB, ASP,  Java, Progress, XML,  X/HTML, JavaScript/VBScript, T-SQL, PL/SQL, C, C++ , Pascal
                        • Programming Tools: Visual Studio 98, 2003, 2005, 2008, Eclipse, Microsoft Visio, Keil uVison
                        • App server / Middleware: Microsoft IIS.
                        • Framework: .NET, MDK-ARM
                        • Configuration Management tools: VSS, Visual SVN
                        • Browsers: IE 3-8, Firefox 1-3
                        • OOAD/OOP: Object Oriented Analysis (OOA), Object Oriented Design (OOD), Object Oriented Programming (OOP), Unified Modeling Language (UML)
                      "/>    
                    </Col>
                  </FormGroup>
                 
                </Form>
              </CardBody>
              <CardFooter>
              <Link to="/Profile/Edit">
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Edit</Button>
              </Link> 
              </CardFooter>
            </Card>
          </Col>
        </Row>
       </Container>
        </div>
    );
  }
}

export default edit;
