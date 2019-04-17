import React, { Component } from 'react';
// import { 
// Form,
// FormGroup,
// Label,
// Card,
// CardBody, 
// CardFooter,
// CardHeader,
// Collapse,
// Progress, 
// Badge, 
// Button, 
// Col, 
// Container, 
// Input, 
// InputGroup, 
// InputGroupAddon, 
// InputGroupText, 
// Row, 
// Table, 
// Pagination, 
// PaginationItem,
// ListGroup,
// ListGroupItem,
// PaginationLink, } from 'reactstrap';
import { Link } from 'react-router-dom';

class Velocity extends Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
   
    this.state = {
      collapse: true,
      fadeIn: true,
      
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

        
                     
                     

  render() {
    return (
      <div>
        <div class="row">
            <div class="col col-lg-4 col-md-4 col-sm-4">
                <div class="card " >
                  <div class="card-header text-white bg-primary mb-3">
                     <b>To do </b>     
                  </div>
                  <div class="card-body">
                      <div class="card border-primary mb-3" >
                        <div class="card-body">
                          Người dùng đổi mật khẩu của tài khoản mà mình tạo
                        </div>
                      </div>
                      <div class="card border-primary mb-3" >
                        <div class="card-body">
                          Người dùng thay đổi avatar hiển thị ở giao diện chính
                        </div>
                      </div>
                      <div class="card border-primary mb-3" >
                        <div class="card-body">
                          Người dùng sử dụng paypal để trả phí
                        </div>
                      </div>
                  </div>
                </div>
            </div>

            <div class="col col-lg-4 col-md-4 col-sm-4">
                <div class="card " >
                  <div class="card-header text-white bg-warning mb-3">
                     <b>Inprogress </b>     
                  </div>
                  <div class="card-body">
                      <div class="card border-warning mb-3" >
                        <div class="card-body">
                         Người dùng không cần tạo tài khoản mà sử dụng tài khoản email để đăng nhập
                        </div>
                      </div>
                      <div class="card border-warning mb-3" >
                        <div class="card-body">
                          Người dùng tạo tài khoản và sử dụng tài khoản này để đăng nhập
                        </div>
                      </div>
                  </div>
                </div>
            </div>

            <div class="col col-lg-4 col-md-4 col-sm-4">
                <div class="card " >
                  <div class="card-header text-white bg-success mb-3">
                     <b>Done </b>     
                  </div>
                  <div class="card-body">
                      <div class="card border-success mb-3" >
                        <div class="card-body">
                         Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    
    );
  }
}

export default Velocity;
