import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux'
import { addProject } from '../../actions'
import DatePicker from "react-datepicker";
import {  AppHeaderDropdown,  AppSidebarToggler } from '@coreui/react';
import { Link } from 'react-router-dom';
import avatardefault from '../../assets/img/avatar/avatardefault.png'; // Tell Webpack this JS file uses this image


import "react-datepicker/dist/react-datepicker.css";
import {
  Button,
  Col,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  ModalFooter, UncontrolledDropdown, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink
} from 'reactstrap';
import {
  getFromStorage,
  setInStorage
} from '../../service/storage'
let Img = require('react-image')

const proto = {};
proto.myproject = require('../../gRPC/myproject/myproject_grpc_web_pb');
const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class HomeTopNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
      modalCreatePj: false,
      Topic: '',
      ProjectName: '',
      startDate: new Date(),
      endDate: new Date(),
      isPrivate: "false",
      actionStatus: '',
      modalActionStatus: false,        //success or show error when action add delete update    
    };
  };
  componentDidMount() {
    let end = this.state.endDate
    end.setDate(end.getDate() + 15)
    this.setState({
      endDate: end
    })
  }
  toggleActionStatus = () => {
    this.setState(prevState => ({
      modalActionStatus: !prevState.modalActionStatus
    }));
  }

  toggleCreatePj = () => {
    this.setState(prevState => ({
      modalCreatePj: !prevState.modalCreatePj,
      mobileMoreAnchorEl: null,
    }));

  }
  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleCreatePj = () => {
    const myprojectService = new proto.myproject.MyprojectClient('https://www.overlead.co');
    var metadata = {};
    let d = this.state.startDate;
    let start = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    d = this.state.endDate;
    let end = d.getMinutes() + "-" + d.getHours() + "-" + d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

    var AddNewProjectReq = new proto.myproject.AddNewProjectReq();
    AddNewProjectReq.setTopic(this.state.Topic);
    AddNewProjectReq.setRequesterid(getFromStorage("userId"));
    AddNewProjectReq.setProjectname(this.state.ProjectName);

    AddNewProjectReq.setStart(start);
    AddNewProjectReq.setEnd(end);
    AddNewProjectReq.setPrivate(this.state.isPrivate);
    AddNewProjectReq.setCookie(getFromStorage("accessToken"));
    myprojectService.addNewProject(AddNewProjectReq, metadata, (err, response) => {
      if (err) { //if error
        console.log(err);
        console.log("error AddNewProjectReq")
      } else {
        console.log(response.getStatus())
        if (response.getStatus() == "SUCCESS") {
          this.props.dispatch(addProject(response.getProjectid(), this.state.Topic, this.state.ProjectName, start, end, this.state.isPrivate, "0"))
          this.toggleCreatePj();
          this.setState({
            Topic: '',
            ProjectName: '',
            modalActionStatus: true,
            actionStatus: 'SUCCESS'
          });
        } else {
          this.setState({
            modalActionStatus: true,
            actionStatus: 'FAIL',
          });
        }



      }
    });
  }

  onTextboxChangeTopic = (event) => {
    this.setState({
      Topic: event.target.value,
    });
  }
  onTextboxChangeProjectName = (event) => {
    this.setState({
      ProjectName: event.target.value,
    });
  }
  onChangeStartDate = (date) => {
    this.setState({
      startDate: date
    });
  }
  onChangeEndDate = (date) => {
    this.setState({
      endDate: date
    });
  }


  onTextboxChangePrivate = event => {
    this.setState({
      isPrivate: this.state.isPrivate == "false" ? "true" : "false",
    });
  }


  render() {
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    let that = this;
    const {
      anchorEl,
      mobileMoreAnchorEl,
    } = this.state;
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}><a href="/Profile/Detail">Profile</a></MenuItem>
        <MenuItem onClick={this.handleMenuClose}><a href="/myproject">My project</a></MenuItem>
        <MenuItem onClick={this.handleMenuClose}><a href="/login">Log out</a></MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>

        <Modal size="sm" isOpen={that.state.modalActionStatus} toggle={that.toggleActionStatus} className={that.props.className}>
          <ModalBody>
            <center><h4>{that.state.actionStatus}</h4></center>
          </ModalBody>
        </Modal>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Overlead
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <Button type="button" color="primary" href="/myproject">All project</Button>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

              <Button variant="outlined" color="primary" size="sm" onClick={that.toggleCreatePj}><b>Create Project</b></Button>
              <Modal size="lg" isOpen={that.state.modalCreatePj} toggle={that.toggleCreatePj} className={that.props.className}>
                <ModalHeader toggle={that.toggleCreatePj}>Project</ModalHeader>
                <ModalBody>
                  <div class="card  bg-primary mb-3">
                    <div class="card-body">
                      <Form className="form-horizontal">

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Topic Name</Label>
                          </Col>
                          <Col xs="5" md="5">
                            <Input type="text" id="Topic" name="Topic" placeholder="Topic" value={this.state.Topic} onChange={that.onTextboxChangeTopic} />
                          </Col>
                        </FormGroup>


                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Project Name</Label>
                          </Col>
                          <Col xs="5" md="5">
                            <Input type="text" id="ProjectName" name="ProjectName" placeholder="Project Name" value={this.state.ProjectName} onChange={that.onTextboxChangeProjectName} />

                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="date-input">Start </Label>
                          </Col>
                          <Col xs="3" md="3">

                            <DatePicker

                              selected={that.state.startDate}
                              timeInputLabel="Time:"
                              onChange={that.onChangeStartDate}
                              dateFormat="dd/MM/yyyy h:mm aa"
                              showTimeInput
                            />
                          </Col>

                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="date-input">End </Label>
                          </Col>
                          <Col xs="3" md="3">
                            <DatePicker


                              selected={that.state.endDate}
                              timeInputLabel="Time:"
                              onChange={that.onChangeEndDate}
                              dateFormat="dd/MM/yyyy h:mm aa"
                              showTimeInput
                            />
                          </Col>

                        </FormGroup>

                        <FormGroup row>
                          <Col md="5">
                            <Label htmlFor="date-input">Private </Label>
                          </Col>
                          <Col xs="5" md="5">
                            <Input type="checkbox" id="Private" name="Private" value={this.state.isPrivate} onChange={that.onTextboxChangePrivate} />
                          </Col>
                        </FormGroup>
                      </Form>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button type="submit" color="primary" onClick={that.handleCreatePj}>Submit</Button>
                  <Button color="secondary" onClick={that.toggleCreatePj}>Cancel</Button>
                </ModalFooter>
              </Modal>



              <AppHeaderDropdown direction="down" >
                <DropdownToggle nav >
                  {
                    (getFromStorage('avatar') == "" || getFromStorage('avatar') == null) ?
                      <img src={avatardefault} className="img-avatar" alt="" width="25px" height="25px" /> :
                      <img src={getFromStorage('avatar')} className="img-avatar" alt="" />

                  }
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

                  <Link to="/donate">
                    <DropdownItem><i className="fa fa-usd"></i> Upgrade</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem onClick={e => this.onLogout()}><i className="fa fa-lock"></i> Logout</DropdownItem>
                </DropdownMenu>
              </AppHeaderDropdown>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}


HomeTopNav.propTypes = {
  classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
  console.log("mapStateToProps homeNav")
  const { updateProjectLoaded } = state
  const { project, needUpdate } = updateProjectLoaded
  return {
    project, needUpdate
  }
}
export default connect(mapStateToProps)(withStyles(styles)(HomeTopNav));