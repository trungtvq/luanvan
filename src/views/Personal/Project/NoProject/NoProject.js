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
Progress,
Navbar,

NavbarBrand,

NavbarToggler,

Collapse,

Nav,

NavItem,

NavLink,

UncontrolledDropdown,

DropdownToggle,

DropdownMenu,

DropdownItem,

Modal,

ModalHeader,

ModalBody,

Form,

FormGroup,

Label,

ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Demo from '../../../../homeNav'


class NoProject extends Component {
  constructor(props) {
    super(props);
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleEditTopic = this.toggleEditTopic.bind(this);

    

    this.state = {
      modalAdd: false,
      modalEdit: false,
      modalEditTopic: false,
      }
    };

  toggleAdd() {
    this.setState(prevState => ({
      modalAdd: !prevState.modalAdd
    }));
  }
  toggleEdit() {
    this.setState(prevState => ({
      modalEdit: !prevState.modalEdit
    }));
  }
  toggleEditTopic() {
    this.setState(prevState => ({
      modalEditTopic: !prevState.modalEditTopic
    }));
  }
  render() {
    let that=this;
    return (
  
    <div>
      <Demo/>
      <div><br/></div>
      <Container>

      <Row>
          <Col>  

              <div class="card border-primary mb-3">
                <div class="card-body text-primary">
                  <p class="card-text">You don't have any project yet</p>
                  <p class="card-text">You can create new project</p>
                  <p class="card-text">or wait to be invited to join a project</p>
                </div>
              </div>      
                   
          </Col>
      </Row>

      </Container>  
    </div>  
    
     
    );
  }
}

export default NoProject;
