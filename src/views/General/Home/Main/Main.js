import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../../../assets/img/brand/logo.png';
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
  Navbar,
  NavbarBrand,
  Card,
  CardHeader,
  CardBody,
  Progress,

} from 'reactstrap';
import { Link } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <Container>
      <Row>
          <Col>         
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/Home/Main"><img source="logo"/></NavbarBrand>
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
           </Navbar>


            <Card> 
              <CardBody>
                <center>
                  <strong>
                 Overlead cung cấp cho bạn phương thức quản lí dự án một cách hiệu quả từ quỹ thời gian đến công việc của từng thành viên, giúp đảm bảo đúng tiến độ cũng như lượng công việc. Ngoài ra hỗ trợ người quản lí trong việc đánh giá năng lực của nhân viên mình một cách minh bạch và khách quan.
                  </strong>               
                </center>
              </CardBody>
            </Card>    

             <Card>     
              <CardBody>
                <Card> 
                  <CardBody>
                    <center>
                      <strong>
                      Bạn cần hỗ trợ giải pháp                      
                      </strong>               
                    </center>
                  </CardBody>
                </Card>  

                <center>  
                  <Link to="/Home/Contact">
                  <Button color="primary" className="mt-3" active tabIndex={-1}><i ></i>Liên hệ ngay</Button>
                  </Link>            
                </center>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                   <strong>
                    Tại sao chọn Overlead?
                   </strong>     
              </CardHeader>
              <CardBody>

                <Card> 
                  <CardBody>
                    <center>
                      <strong>
                      “Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao” là một câu nói quen thuộc của những người đi trước đã để lại. Nghĩa là khuyên con người ta phải biết đoàn kết, hợp tác với nhau để có thể làm nên những điều to lớn. Nhưng phải hợp tác, cùng nhau làm việc như thế nào là hợp lí?
                      </strong>               
                    </center>
                  </CardBody>
                </Card>    

                <Card> 
                  <CardBody>
                    <center>
                      <strong>
                      Với sự phát triển mạnh mẽ về trình độ của nhân loại, đặc biệt là lĩnh vực công nghệ thông tin đã mang đến rất nhiều sự thay đổi về cuộc sống của con người. Trong bối cảnh đó, vấn đề “Làm sao để có thể hợp tác, cùng nhau làm việc để mang lại hiệu quả cao nhất?” trở nên ngày càng cấp thiết hơn.
                      </strong>               
                    </center>
                  </CardBody>
                </Card>  

                <Card> 
                  <CardBody>
                    <center>
                      <strong>
                      Với nhu cầu trên, sự xuất hiện của các phần mềm quản lý dự án là điều hiển nhiên. Nhưng với mỗi sự xuất hiện, đều tồn đọng các vấn đề khác nhau, các vấn đề đặc trưng như: phần mềm quá nhiều chức năng nên khó sử dụng, phần mềm tốt nhưng tính phí cao, phức tạp khi phải sử dụng nhiều phần mềm cho từng chức năng riêng biệt, …
                      </strong>               
                    </center>
                  </CardBody>
                </Card>      

                <Card> 
                  <CardBody>
                    <center>
                      <strong>
                      Nhận biết những vấn đề đó, Overlead ra đời. Với việc sử dụng triết lí của Scrum dựa trên những nguyên tắc của Agile hứa hẹn sẽ mang đến hiệu quả cao nhất trong công việc trong đòi hỏi sự cộng tác. Bằng cách sử dụng nhiều dạng biểu đồ, đồ thị để thể hiện quá trình phát triển của dự án, cũng như là quá trình, kết quả làm việc của nhân viên giúp tạo ra cái nhìn tổng thể nhất, từ đó có thể kiểm soát dự án và đánh giá năng lực của nhân viên một cách chính xác hơn.
                      </strong>               
                    </center>
                  </CardBody>
                </Card>    

              </CardBody>
            </Card>    

          </Col>
        </Row>
        </Container>
    );
  }
}

export default Main;
