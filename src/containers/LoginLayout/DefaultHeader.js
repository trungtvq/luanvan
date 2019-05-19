import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,Badge, UncontrolledDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

import authContext from "../../contexts/authContext";


const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

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
              <UncontrolledDropdown color="light">
                <DropdownToggle caret>
                    Project
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="/CreateProject">Create project</DropdownItem>
                  <DropdownItem href="/myproject">My projects</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={''} className="img-avatar" alt="" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <authContext.Consumer> 
                {(context) => {
                    return(
                      <DropdownItem header tag="div" className="text-center"><strong>
                          {context.signInEmail}
                      </strong></DropdownItem>
                    )
                }}
              </authContext.Consumer> 




              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
             
              <Link to="/Profile/Detail">
              <DropdownItem><i className="fa fa-user"></i> 
                Profile
              </DropdownItem>
              </Link>  

              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
