import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button, Badge, UncontrolledDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import sygnet from '../../assets/img/brand/sygnet.svg'

import authContext from "../../contexts/authContext";
import cookie from 'react-cookies';
import { setTeam, removeLogin, setProject } from '../../actions'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {
  getFromStorage,
  setInStorage
} from '../../service/storage'
const propTypes = {
  children: PropTypes.node,
};
const proto = {};
proto.team = require('../../gRPC/team/team_grpc_web_pb');

const defaultProps = {};

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  onLogout = (e) => {
    console.log("logout")
    this.props.dispatch(removeLogin())
    setInStorage("userId", "")
    setInStorage("accessToken", "")
    setInStorage("avatar", "")
    setInStorage("name", "")
    setInStorage("username", "")

  }




  loadAllMember = (id) => {
    console.log("loadAllMember")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    var GetAllMemberReq = new proto.team.GetAllMemberReq();
    GetAllMemberReq.setRequesterid(getFromStorage("userId"));
    GetAllMemberReq.setTeamid(id);
    GetAllMemberReq.setAccesstoken(getFromStorage("accessToken"));

    let that = this
    setInStorage('members', [])
    let response = teamService.getAllMember(GetAllMemberReq, metadata)

    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        let mem = getFromStorage('members')
        mem.push({ id: response.getId(), name: response.getName(), username: response.getUsername() })
        setInStorage('members', mem)
      }
    })
    response.on('status', function (status) {
      console.log("status")
      console.log(status.code);
      console.log(status.details);
      console.log(status.metadata);
      console.log(getFromStorage('members'))
    });
    response.on('end', function (end) {
      console.log("end")
      console.log(end)
    });
  }
  loadAllTeam = () => {
    console.log("getAllTeam")
    const teamService = new proto.team.TeamClient('https://www.overlead.co');
    var metadata = {};

    let teams = []

    var GetAllTeamReq = new proto.team.GetAllTeamReq();
    GetAllTeamReq.setRequesterid(getFromStorage("userId"));
    GetAllTeamReq.setProjectid(getFromStorage("currentProject"));
    GetAllTeamReq.setAccesstoken(getFromStorage("accessToken"));
    let response = teamService.getAllTeam(GetAllTeamReq, metadata)
    console.log("currenProject" + getFromStorage("currentProject"))
    let that = this
    let lastTeam = ''
    let lastName = ''
    let validTeam = false
    response.on('data', function (response) {
      if (response.getStatus() == "SUCCESS") {
        teams.push({
          id: response.getTeamid(),
          name: response.getName()
        })
        if (getFromStorage('teamId') == response.getTeamid())
          validTeam = true
        else {
          lastTeam = response.getTeamid()
          lastName = response.getName()
        }

      }
    })
    response.on('status', function (status) {
      setInStorage('teams', teams)
      if (validTeam == false) {
        if (lastTeam != '') {
          setInStorage('teamId', lastTeam)
          that.props.dispatch(setTeam(lastTeam, lastName))
          that.loadAllMember(lastTeam)
        }
      }
      else {
        that.props.dispatch(setTeam(getFromStorage('teamId'), getFromStorage('teamName')))
        that.loadAllMember(getFromStorage('teamId'))

      }
    });
    response.on('end', function (end) {

    });

  }

  changeProject = (event) => {
    let id = event.target.value
    let name=''
    let pj = this.props.project
    pj.map(p=>{
        if (id==p.id) name=p.projectName
       return p
    })
    setInStorage('currentProject', id)
    setInStorage('currentProjectName', name)
    this.props.dispatch(setProject(id, name))
    this.loadAllTeam()
  }
  changeTeam = (event) => {
    let id = event.target.value
    let name=''
    let t = getFromStorage("teams")
    t.map(p=>{
        if (id==p.id) name=p.name
       return p
    })
    this.props.dispatch(setTeam(id, name))
    this.loadAllMember(id)
  }
  render() {
    let currentProjectId = getFromStorage("currentProject")
    let currentProjectName = getFromStorage("currentProjectName")
    let allProject = []
    let pj = this.props.project
    pj.map(p => {
      allProject.push({ id: p.id, name: p.projectName })
      return p
    })
    let teams = getFromStorage("teams")
    if (teams!=null)
      teams=teams.filter(p=>{
        if (p.id==teamId) return false
        return true
      })
    console.log(teams)
    console.log("allproject")
    let teamId = getFromStorage("teamId")
    let teamName = getFromStorage("teamName")
    //this.props.project.
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    let that = this;
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
            <Input type="select" name="select" id="select" onChange={that.changeProject}>
              <option value={currentProjectId} >{currentProjectName}</option>
              {allProject.map(function (item, key) {
                if (item.id!=currentProjectId)
                return (
                  <option value={item.id}>{item.name} </option>
                )
              })}
            </Input>
          </NavItem>
          <NavItem className="px-3">
            {
             
              (teams != null && teams != undefined) ?
                 <Input type="select" name="select" id="select" onChange={that.changeTeam}>
                <option value={teamId} >{teamName}</option>
                {
                  teams.map(function (item, key) {
                    return (
                      <option value={item.id}>{item.name} </option>
                    )
                  }) 
  
                }
  
  
              </Input>:
                 <Input type="select" name="select" id="select" onChange={that.changeTeam}>
                 <option value={teamId} >{teamName}</option>  
               </Input>

            }
            
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
  const { changeStatusLogin, updateProjectLoaded, changeStatusProject } = state
  const { isLogin, id, token, email, avatar } = changeStatusLogin
  const { project } = updateProjectLoaded
  const { projectId, teamId, teamName } = changeStatusProject
  return {
    isLogin, id, token, email, avatar, project, projectId, teamId, teamName
  }
}
export default connect(mapStateToProps)(DefaultHeader);