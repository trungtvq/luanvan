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


class Solve extends Component {
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
                   Quản lí dự án theo mô hình scrum
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
              
            </Card>    

            <Card> 
              <CardHeader>
                   <strong>
                   Đánh giá năng lực theo phương pháp quản trị theo mục tiêu (Management by Objectives-BMO):
                   </strong>     
              </CardHeader>
              <CardBody>
                

                <p>
                   <b>Theo phương pháp quản trị theo mục tiêu, trọng tâm của việc đánh giá:</b>
                </p>
               <p>
                  – Các đặc tính cá nhân qua sự hoàn thành công việc.              
                   </p>
                <p>
                – Vai trò của nhà quản trị chuyển từ vai trò của người trọng tài phân xử qua vai trò của người tư vấn, cố vấn.
                </p>
                 <p>
               – Nhân viên từ thụ động chuyển sang tham dự mang tính tích cực
                 </p>
                 <p>
                – Sự phối hợp của lãnh đạo và nhân viên trong việc xếp đặt các mục tiêu cho nhân viên trong một khoảng thời gian nhất định. Trên cơ sở đã thảo luận bản mô tả công việc, nội dung công việc, trách nhiệm báo cáo về các việc đó.                 </p>
                 <p>
               – Ðịnh kỳ xem xét các kết quả đã đạt được.                
                </p>
                 <p>
              – Cấp trên và cấp dưới gặp nhau cuối giai đoạn đánh giá để thảo luận kết quả của cấp dưới có đạt được mục tiêu đã đề ra trước đây hay không.                  </p>

              


              </CardBody>
            </Card>    



             <Card> 
              <CardHeader>
                   <strong>
                  <b>Phương pháp quản trị theo mục tiêu đem lại:</b>
                   </strong>     
              </CardHeader>
              <CardBody>
                

               <p>
                - Năng suất lao động cao.                 
                  </p>
                <p>
                - Phát huy được trí tuệ và năng lực làm việc của nhân viên.
                </p>
                <p>
                - Tạo môi trường làm việc mang tính cạnh tranh.              
               </p>
                <p>
            - Thúc đẩy làm việc vì mục tiêu của nhân viên và của doanh nghiệp.
               </p>
                     <p>
            - Tối đa hoá nguồn lực daonh nghiệp và hạn chế lãng phí về thời gian.
               </p>
              </CardBody>
              
            </Card>    
          </Col>
        </Row>
        </Container>
    );
  }
}

export default Solve;
            