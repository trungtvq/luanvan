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
    this.toggleCreatePj = this.toggleCreatePj.bind(this);
      
      this.state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
        modalCreatePj: false,
      };
    };

  toggleCreatePj() {
    this.handleMobileMenuClose();
    this.setState(prevState => ({
      modalCreatePj: !prevState.modalCreatePj
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

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    let that=this;
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My project</MenuItem>
        <MenuItem onClick={that.toggleCreatePj}>Create project</MenuItem>
          <Modal size="lg" isOpen={that.state.modalCreatePj} toggle={that.toggleCreatePj} className={that.props.className}>
                                    <ModalHeader toggle={that.toggleCreatePj}>Project</ModalHeader>
                                    <ModalBody>
                                      <div class="card  bg-primary mb-3">
                                        <div class="card-body">
                                          <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                            <FormGroup row>
                                              <Col md="3">
                                                <Label htmlFor="text-input">Topic project</Label>
                                              </Col>
                                              <Col xs="4" md="4">
                                                <Input type="text" id="TopicProject" name="TopicP roject" placeholder="New Topic" value="web"/>
                                              </Col>
                                              
                                            </FormGroup>

                                            <FormGroup row>
                                              <Col md="3">
                                                <Label htmlFor="text-input">Project Name</Label>
                                              </Col>
                                              <Col xs="5" md="5">
                                                <Input type="text" id="ProjectName" name="ProjectName" placeholder="Project Name" />
                                                
                                              </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                              <Col md="3">
                                                <Label htmlFor="date-input">Start </Label>
                                              </Col>
                                              <Col xs="5" md="5">
                                                <Input type="date" id="Start" name="date-input" placeholder="Start" />
                                              </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                              <Col md="3">
                                                <Label htmlFor="date-input">End </Label>
                                              </Col>
                                              <Col xs="5" md="5">
                                                <Input type="date" id="End" name="date-input" placeholder="End" />
                                              </Col>
                                            </FormGroup>
                                            
                                            
                                              <div class="card  mb-3">
                                                <div class="card-body text-primary">
                                                        <h6><b>Member</b></h6>
                                                        <Table  responsive size="lg">
                                                          <thead>
                                                          <tr>
                                                            <th>Name</th>
                                                            <th>Role</th>
                                                            <th>Skill</th>
                                                            <th>Point</th>
                                                           
                                              
                                                           
                                                          </tr>
                                                          </thead>
                                                          <tbody>
                                                          <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                          
                                                          </tr>
                                                         
                                                         
                                                          <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            
                                                          </tr>
                                                         
                                                         
                                                          <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            
                                                          </tr>

                                                          <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            
                                                          </tr>
                                                          
                                                          </tbody>
                                                        </Table>
                                                      </div>
                                              </div>
                                           

                                            
                                               <div class="card  mb-3">      
                                                  <div class="card-body text-dark">
                                                        <strong>Find and add member</strong>
                                                        <Row>       
                                                                <Col xs="2" md="2">
                                                                  <Input type="text" id="text-input" name="text-input" placeholder="Search" /> 
                                                                </Col> 
                                                                <Col xs="0" md="0">
                                                                  <Button type="submit" size="sm" color="success"><i class="fa fa-search"></i></Button>
                                                                </Col> 
                                                        </Row>     

                                                        <Form  action="" method="post" encType="multipart/form-data" className="form-horizontal">               
                                                              <FormGroup row>
                                                                <Col md="3">
                                                                  <Label htmlFor="text-input">Skill</Label>
                                                                </Col>
                                                                <Col xs="5" md="5">
                                                                  <Input type="text" id="text-input" name="text-input" placeholder="skill" />
                                                                </Col>
                                                              </FormGroup>
                                                              <FormGroup row>
                                                                <Col md="3">
                                                                  <Label htmlFor="text-input">Point</Label>
                                                                </Col>
                                                                <Col xs="2" md="2">
                                                                  <Input type="text" id="text-input" name="text-input" placeholder="Point min" />
                                                                  <Input type="text" id="text-input" name="text-input" placeholder="Point max" />  
                                                                </Col>
                                                              </FormGroup>   
                                                              <FormGroup row>
                                                                <Col md="3">
                                                                  <Label htmlFor="text-input">Freelancer</Label>
                                                                </Col>
                                                                <Col xs="2" md="2">
                                                                  <Input type="checkbox" id="text-input" name="text-input"  />  
                                                                </Col>
                                                              </FormGroup>                                        
                                                        </Form>

                                                        <Table  responsive size="sm">
                                                          <thead>
                                                          <tr>
                                                            <th>Name</th>
                                                            <th>Role</th>
                                                            <th>Skill</th>
                                                            <th>Point</th>
                                                            <th>Number Project</th>
                                                            <th></th>
                                              
                                                           
                                                          </tr>
                                                          </thead>
                                                          <tbody>
                                                          <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                              <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                                                            </td>
                                                          </tr>
                                                         
                                                         
                                                          <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                              <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                                                            </td>
                                                          </tr>
                                                         
                                                         
                                                          <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                              <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                                                            </td>
                                                          </tr>

                                                          <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                              <Button type="submit" size="sm" color="primary"><i class="fa fa-user-plus"></i></Button>
                                                            </td>
                                                          </tr>
                                                          
                                                          </tbody>
                                                        </Table>
                                                  </div>
                                               </div>                                               
                                          </Form>
                                        </div>
                                      </div>                         
                                    </ModalBody>
                                    <ModalFooter>
                                    <Button color="primary" onClick={that.toggleCreatePj}>Submit</Button>{' '}
                                    <Button color="secondary" onClick={that.toggleCreatePj}>Cancel</Button>
                                    </ModalFooter>
          </Modal>
        <MenuItem onClick={this.handleMenuClose}>Log out</MenuItem>
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
