import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../../assets/img/brand/logo.png';
import sygnet from '../../../assets/img/brand/sygnet.svg';
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
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  Nav, 
  NavItem,
  NavLink,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Form,
  FormGroup,
  Label,
  CardFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <Container>
      <Row>
          <Col>         
                 <Nav tabs>
              <NavItem>
                <NavLink href="/Home/Main" active>Về chúng tôi</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Home/Service" active>Dịch vụ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Home/Solve" active>Giải pháp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Home/Contact" active>Liên hệ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login" active>Sign in</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register" active>Sign up</NavLink>
              </NavItem>
            </Nav>


            <Card> 
              <CardHeader>
                   <strong>
                    Mọi thắc mắc về Overlead, vui lòng để lại lời nhắn theo mẫu bên dưới hoặc gọi trực tiếp tới tổng đài 082.580.6606
                   </strong>     
              </CardHeader>
              <CardBody>
                <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Tin nhắn của bạn</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" id="text-input" name="text-input" placeholder="Nhập tin nhắn" />           
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Họ tên</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Nhập họ tên" />           
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Email</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Nhập email" />           
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Điện thoại</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Nhập số điện thoại" />           
                    </Col>
                  </FormGroup>                     
                </Form>
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Gửi</Button>
                
              </CardFooter>
              </CardBody>
            </Card>    

            
          </Col>
        </Row>
        </Container>
    );
  }
}

export default Main;
