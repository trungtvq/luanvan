import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,Badge, UncontrolledDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

import authContext from "../../contexts/authContext";
import cookie from 'react-cookies';
import {saveLogin,removeLogin} from '../../actions'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {
  getFromStorage
} from '../../service/storage'
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {


  onLogout=(e)=>{

    console.log("logout")
    this.props.dispatch(removeLogin())
    cookie.remove('userId')
    cookie.remove('accessToken')
  }
  render() {
    console.log("avatar")
    console.log(getFromStorage('avatar'))
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <Link to="/Home/Final" className="nav-link" >
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Overlead Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Overlead Logo' }}
        />
        </Link>

        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to="/users">Users</Link>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">Settings</NavLink>
          </NavItem>
           <NavItem className="px-3">
           <Button type="button" color="light" href="/myproject">All project</Button>

          </NavItem>
          <NavItem className="px-3">
              <UncontrolledDropdown color="light">
                <DropdownToggle caret>
                    Team
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/CreateTeam">Create team</DropdownItem>
                  <DropdownItem href="/AllTeam">All team</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={getFromStorage('avatar')} className="img-avatar" alt="" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              
               
                      <DropdownItem header tag="div" className="text-center"><strong>
                          {this.props.email}
                      </strong></DropdownItem>
                   




              <DropdownItem><i className="fa fa-envelope-o"></i> Messages</DropdownItem>
              <Link to="/Member/Task/MyTask">
              <DropdownItem><i className="fa fa-tasks"></i> Tasks</DropdownItem> 
              </Link>            
              <Link to="/Profile/Detail">
              <DropdownItem><i className="fa fa-user"></i> 
                Profile
              </DropdownItem>
              </Link>  

              {/* <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem> */}
              <DropdownItem><i className="fa fa-usd"></i> Payments</DropdownItem>
              <Link to="/myproject">
              <DropdownItem><i className="fa fa-file"></i> Projects</DropdownItem>
              </Link>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.onLogout()}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;


function mapStateToProps(state) {
  const { changeStatusLogin } = state
  const { isLogin, id, token,email,avatar } = changeStatusLogin
  return {
      isLogin, id, token,email,avatar
  }
}
export default connect(mapStateToProps)(DefaultHeader);
