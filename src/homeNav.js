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
import {  
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

class PrimarySearchAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.onTextboxChangeOwnerName = this.onTextboxChangeOwnerName.bind(this);
    this.onTextboxChangeProjectName = this.onTextboxChangeProjectName.bind(this);
    this.onTextboxChangetimeStart = this.onTextboxChangetimeStart.bind(this);
    this.onTextboxChangedateStart = this.onTextboxChangedateStart.bind(this);
    this.onTextboxChangetimeEnd = this.onTextboxChangetimeEnd.bind(this);
    this.onTextboxChangedateEnd = this.onTextboxChangedateEnd.bind(this);
    this.toggleCreatePj = this.toggleCreatePj.bind(this);

      
      this.state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        modalCreatePj: false,
        
        OwnerName:'',
        ProjectName:'',
        timeStart:'',
        dateStart:'',
        timeEnd:'',
        dateEnd:'',
        status:false,
      };
    };

  toggleCreatePj(){
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

  handleCreatePj=(event)=> {
    console.log("vào");
    console.log("OwnerName: " + this.state.OwnerName);
    console.log("ProjectName: " + this.state.ProjectName);
    console.log("timeStart: " + this.state.timeStart);
    console.log("dateStart: " + this.state.dateStart);
    console.log("timeEnd: " + this.state.timeEnd);
    console.log("dateEnd: " + this.state.dateEnd);
    console.log("Private: " + this.state.Private);

  }

  onTextboxChangeOwnerName(event) {
    this.setState({
      OwnerName: event.target.value,
    });
  }
  onTextboxChangeProjectName(event) {
    this.setState({
      ProjectName: event.target.value,
    });
  }
  onTextboxChangetimeStart(event) {
    this.setState({
      timeStart: event.target.value,
    });
  }
  onTextboxChangedateStart(event) {
    this.setState({
      dateStart: event.target.value,
    });
  }
  onTextboxChangetimeEnd(event) {
    this.setState({
      timeEnd: event.target.value,
    });
  }
  onTextboxChangedateEnd(event) {
    this.setState({
      dateEnd: event.target.value,
    });
  }
  onTextboxChangeStatus(event) {
    this.setState(prevState => ({
      status: !prevState.status,
    }));
  }

  
  render() {
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    let that=this;
    const {
      OwnerName,
      ProjectName,
      timeStart,
      dateStart,
      timeEnd,
      dateEnd,
      status,   
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
        <MenuItem onClick={this.handleMenuClose}><a href="/AllProject">My project</a></MenuItem>
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
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

              <Button variant="outlined" color="primary" size="sm" onClick={that.toggleCreatePj}><b>Create Project</b></Button>
              <Modal size="lg" isOpen={that.state.modalCreatePj} toggle={that.toggleCreatePj} className={that.props.className}>
                                    <ModalHeader toggle={that.toggleCreatePj}>Project</ModalHeader>
                                    <ModalBody>
                                      <div class="card  bg-primary mb-3">
                                        <div class="card-body">
                                        <Form  className="form-horizontal">               
                                            
                                            <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="text-input">Owner Name</Label>
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="text" id="OwnerName" name="OwnerName" placeholder="Name" value={OwnerName} onChange={that.onTextboxChangeOwnerName} />
                                                </Col>
                                              </FormGroup>
  
  
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="text-input">Project Name</Label>
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="text" id="ProjectName" name="ProjectName" placeholder="Project Name" value={ProjectName} onChange={that.onTextboxChangeProjectName} />
                                                  
                                                </Col>
                                              </FormGroup>
  
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="date-input">Start </Label>
                                                </Col>
                                                <Col xs="3" md="3">
                                                <Input type="time" id="timeStart" name="timeStart" value={timeStart} onChange={that.onTextboxChangetimeStart} />
                                                </Col>
                                                <Col xs="3" md="3">
                                                  <Input type="date" id="dateStart" name="dateStart" value={dateStart} onChange={that.onTextboxChangedateStart}/>
                                                </Col>
                                              </FormGroup>
  
                                              <FormGroup row>
                                                <Col md="3">
                                                  <Label htmlFor="date-input">End </Label>
                                                </Col>
                                                <Col xs="3" md="3">
                                                <Input type="time" id="timeEnd" name="timeEnd" value={timeEnd} onChange={that.onTextboxChangetimeEnd}/>
                                                </Col>
                                                <Col xs="3" md="3">
                                                  <Input type="date" id="dateEnd" name="dateEnd"  value={dateEnd} onChange={that.onTextboxChangedateEnd}/>
                                                </Col>
                                              </FormGroup>
                                              
                                              <FormGroup row>
                                                <Col md="5">
                                                  <Label htmlFor="date-input">Private </Label>onTextboxChangeStatus
                                                </Col>
                                                <Col xs="5" md="5">
                                                  <Input type="checkbox" id="Private" name="Private" value={status} onChange={that.onTextboxChangeStatus}/>
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
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
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


PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
