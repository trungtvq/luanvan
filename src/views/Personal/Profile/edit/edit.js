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
PaginationLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
class edit extends Component {
  render() {
    return (
      <Row>
          <Col>         
                  <Card>             
              <CardBody>
                <img src={'../../assets/img/avatar/myavatar.png'} className="img-avatar" />
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Điểm năng lực</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="8/10"/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Họ và tên</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="text-input" placeholder="" value="Nguyễn Văn A"/>    
                      </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Địa chỉ</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="13 Lí Thường Kiệt, p9, Q10"/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Ngày sinh</Label>
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
                      <Label htmlFor="text-input">Nơi làm việc</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="" value="freelancer"/>    
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Project đã tham gia</Label>
                    </Col>
                    <Col xs="12" md="9">
                        <Table hover bordered striped responsive size="sm">
                          <thead>
                          <tr>
                            <th>Tên project</th>
                            <th>Mô tả </th>
                            <th>Vai trò</th>
                            <th>Điểm</th>
                            <th>Nhận xét của master</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>App sell product online </td>
                            <td>Build an application on android to help users buy products online or sell their products</td>
                            <td>Write the front end code and back end of sales, build firebase connection functions for other members to use.</td>
                            <td>8/10</td>
                            <td>positive, responsible, working ontime</td>
                          </tr>
                          <tr>
                            <td>Web news </td>
                            <td>Building news website using laravel framework</td>
                            <td>Write code to build news website</td>
                            <td>8/10</td>
                            <td>positive, responsible, working ontime</td>
                          </tr>
                          <tr>
                            <td>Library book </td>
                            <td>Build book management software on the console</td>
                            <td>Write code to edit and delete books to the library, create an account, divide account permissions, store data with text files</td>
                            <td>9/10</td>
                            <td>positive, responsible, working ontime</td>
                          </tr>
                          <tr>
                            <td>Game plant and zombie </td>
                            <td>Build data input processing software for plants and zombies to return results for each zombie attack</td>
                            <td>Using link list structure, AVL tree, Queue, Stack, DFS, BFS algorithms to process and return results for each zombie attack in each turn.</td>
                            <td>9/10</td>
                            <td>positive, responsible, working ontime</td>
                          </tr>
                          
                          
                          </tbody>
                        </Table>
                        <nav>
                          <Pagination>
                            <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                            <PaginationItem active>
                              <PaginationLink tag="button">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                          </Pagination>
                        </nav>           
                    </Col>
                  </FormGroup>
                   
                   <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Thế mạnh</Label>
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
    );
  }
}

export default edit;
