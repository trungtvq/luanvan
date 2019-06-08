import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';

import avatardefault from '../../assets/img/avatar/avatardefault.png'; // Tell Webpack this JS file uses this image

import {  AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

import { setTeam, removeLogin, setProject } from '../../actions'
import { connect } from 'react-redux'
import {
  getFromStorage,
  setInStorage
} from '../../service/storage'
import loadAllBacklog from '../../service/gRPC/loadAllBacklog'
import loadAllMember from '../../service/gRPC/loadAllMember'
import loadAllTeam from '../../service/gRPC/loadAllTeam'


const proto = {};
proto.team = require('../../gRPC/team/team_grpc_web_pb');
proto.sprintbacklog = require('../../gRPC/sprintbacklog/sprintbacklog_grpc_web_pb');

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };
  
  onLogout = (e) => {
    this.props.dispatch(removeLogin())
    setInStorage("userId", "")
    setInStorage("accessToken", "")
    setInStorage("avatar", "")
    setInStorage("name", "")
    setInStorage("username", "")
    setInStorage("teamId", "")
    setInStorage("teamName", "")
    setInStorage("teams", [])
    setInStorage("currentProjectName", "")
    setInStorage("members", [])
    setInStorage("currentSprintId", "")
    setInStorage("currentSprintName", "")
    setInStorage("sprints", "")
    setInStorage("sprintbacklog", "")
  }




  //use redux
  //
  changeProject = (event) => {
    let id = event.target.value
    let that=this
    this.props.project.map(p => {
      if (id == p.id) {
        that.props.dispatch(setProject(id,  p.projectName))
        loadAllTeam(id)
      }
      return p
    })       
  }

  //use storage
  changeTeam = (event) => {
    let id = event.target.value
    let that=this
    getFromStorage("teams").map(p => {
      if (id == p.id){
        that.props.dispatch(setTeam(id, p.name))
        loadAllMember(id)
        loadAllBacklog()
      }
      return p
    })    
  }

render() {

 
  let teamId = getFromStorage("teamId")
  let teamName = getFromStorage("teamName")
  
  let teams = getFromStorage("teams")
  if (teams != null)
    teams = teams.filter(p => {
      if (p.id == teamId) return false
      return true
    })

  //this.props.project.
  // eslint-disable-next-line
  const { children, ...attributes } = this.props;
  let that = this;
  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <a href="https://overlead.co/home/" className="nav-link" >
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Overlead Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Overlead Logo' }}
        />
        {/* <Img src={logo} height={35} width={100}/> */}
      </a>

      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="d-md-down-none" navbar>


        <NavItem>Current Project:</NavItem>
        <NavItem className="px-3">
          <Input type="select" name="select" id="select" onChange={that.changeProject}>
            <option value={getFromStorage("currentProject")} >{getFromStorage("currentProjectName")}</option>
            {that.props.project.map(function (item, key) {
              if (item.id != getFromStorage("currentProject"))
                return (
                  <option value={item.id}>{item.projectName} </option>
                )
            })}
          </Input>
        </NavItem>
        <NavItem>Current Team: </NavItem>
        <NavItem className="px-3">
          {

            (teams != null && teams != undefined) ?
              <Input type="select" name="select" id="select" onChange={that.changeTeam}>
                <option value={teamId} >{teamName}</option>
                {

                  teams.map(function (item, key) {
                    if (item.id != teamId)
                      return (
                        <option value={item.id}>{item.name} </option>
                      )
                  })

                }


              </Input> :
              <Input type="select" name="select" id="select" onChange={that.changeTeam}>
                <option value={teamId} >{teamName}</option>
              </Input>

          }

        </NavItem>
        <NavItem className="px-3">
          <Link to="/myproject">All Projects</Link>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <AppHeaderDropdown direction="down">
          <DropdownToggle nav>
            {
              (getFromStorage('avatar') == "" || getFromStorage('avatar') == null) ?
                <img src={avatardefault} className="img-avatar" alt="" /> :
                <img src={getFromStorage('avatar')} className="img-avatar" alt="" />

            }
          </DropdownToggle>
          <DropdownMenu right style={{ right: 'auto' }}>


            <DropdownItem header tag="div" className="text-center"><strong>
              {"Hi " + this.props.email + "!"}
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
            <Link to="/donate">
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

// DefaultHeader.propTypes = propTypes;
// DefaultHeader.defaultProps = defaultProps;


function mapStateToProps(state) {
  const { changeStatusLogin, updateProjectLoaded, changeStatusProject } = state
  const { isLogin, id, token, email, avatar } = changeStatusLogin
  const { project } = updateProjectLoaded
  const { projectId, teamId, teamName } = changeStatusProject
  return {
    isLogin, id, token, email, avatar, project, projectId, teamId, teamName
  }
}
export default connect(mapStateToProps)(DefaultHeader);