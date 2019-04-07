import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
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
  CardFooter,
  Breadcrumb
} from 'reactstrap';
import { Link } from 'react-router-dom';


class Service extends Component {
  render() {
    return (
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
                   Dịch vụ với chúng tôi
                   </strong>     
              </CardHeader>
              <CardBody>
                

                <p>
                    Cung cấp công cụ quản lí dự án, đánh giá năng lực nhân viên:
                </p>
               <p>
                _ Giúp quản lí dự án, tìm kiếm, lọc các dự án mà mình đang tham gia hoặc đang quản lí.
               </p>
                <p>
                _ Tạo và thiết lập product backlog, sprint backlog nhanh và hiệu quả.
                </p>
                 <p>
                _ Cho phép tạo các task công việc, thiết lập trạng thái của công việc.
                 </p>
                 <p>
                _  Cho phép tìm kiểm thành viên theo chỉ mục cần thiết để thêm vào dự án, cũng như thiết lập quyền hạn cho thành viên đó.
                 </p>
                 <p>
                _ Cho phép tìm kiếm các freelancer để thêm vào dự án, khi thiếu nguồn lực nội bộ. 
                 </p>
                 <p>
                _Đánh giá đóng góp từng thành viên trong dự án thông qua giá trị đem lại của thành viên đó cuối mỗi sprint.
                </p>

              </CardBody>
              <CardFooter>
              <Link to="/Home/Payment">
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Mua ngay</Button>
              </Link>
              </CardFooter>
            </Card>    

            
          </Col>
        </Row>
    );
  }
}

export default Service;
