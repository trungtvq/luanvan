import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input,Button,Badge, UncontrolledDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
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
  getFromStorage,
  setInStorage
} from '../../service/storage'
const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTeamJoin: [
        {name:"team 1"},
        {name:"team 2"},
        {name:"team now"},
        {name:"team 3"},
      ],
      dataProjectJoin: [
        {name:"pj 1"},
        {name:"pj 2"},
        {name:"project now"},
        {name:"pj 3"},
      ],
      currentTeam:'team now',
      currentProject:'project now'
    }
  };

  onLogout=(e)=>{    
    console.log("logout")
    this.props.dispatch(removeLogin())
    setInStorage("userId","")
    setInStorage("accessToken","")
    setInStorage("avatar","")
    setInStorage("name","")
    setInStorage("username","")

  }
  setOutTeamCurrent=()=>{
    let currentTeam=this.state.currentTeam
    {this.setState(prevState=>({dataTeamJoin:[...prevState.dataTeamJoin.filter(function(e) { return e.name !==currentTeam ; })]}))}
  }
  setOutProjectCurrent=()=>{
    let currentProject=this.state.currentProject
    {this.setState(prevState=>({dataProjectJoin:[...prevState.dataProjectJoin.filter(function(e) { return e.name !==currentProject ; })]}))}
  }
  componentWillMount(){
    {this.setOutTeamCurrent()};
    {this.setOutProjectCurrent()};
  }
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    let that=this;
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
            <NavLink href="/myproject">Myprojects</NavLink>
          </NavItem>
         
         
          <NavItem className="px-3">
              <Input type="select" name="select" id="select">
              <option value={that.state.currentProject} >{that.state.currentProject}</option>
              {this.state.dataProjectJoin.map(function (item, key) {               
                  return (                          
                             <option value={item.name}>{item.name} </option>                           
                          )})}               
              </Input>            
          </NavItem>
          <NavItem className="px-3">
              <Input type="select" name="select" id="select">
              <option value={that.state.currentTeam} >{that.state.currentTeam}</option>
              {this.state.dataTeamJoin.map(function (item, key) {               
                  return (                          
                             <option value={item.name}>{item.name} </option>                           
                          )})}               
              </Input>            
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
              <DropdownItem><i className="fa fa-tasks"></i> Notify</DropdownItem> 
              </Link>            
              <Link to="/Profile/Detail">
              <DropdownItem><i className="fa fa-user"></i> 
                Profile
              </DropdownItem>
              </Link>  

              {/* <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem> */}
              <Link to="/Home/Payment">
              <DropdownItem><i className="fa fa-usd"></i> Upgrade</DropdownItem>
              </Link>
              {/* <Link to="/myproject">
              <DropdownItem><i className="fa fa-file"></i> Myrojects</DropdownItem>
              </Link> */}
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
      isLogin, id, token,email,avatar,
  }
}
export default connect(mapStateToProps)(DefaultHeader);