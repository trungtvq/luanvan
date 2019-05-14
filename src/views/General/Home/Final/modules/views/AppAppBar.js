import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import cookie from 'react-cookies';
import { Route, Redirect } from 'react-router';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router";
const proto = {};
proto.auth = require('./../../../../../../gRPC/auth/auth_grpc_web_pb');

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing.unit * 3,
  },
  linkSecondary: {
    color: "theme.palette.secondary.main",
  },
});



function AppAppBar(props) {
  const onCheck=(id,session,time)=> {
    //some data of request (get that from frontend)
    console.log("vao đây");
    console.log(id);
    console.log(props);
    // if (typeof(id) == "undefined")  {props.history.push('/register')}
    // else  {history.push('/dashboard')};
     //create service to request
     const authService = new proto.auth.AuthClient('overlead.co:8085');
     //metadab will be config later
     var metadata = {};
     
     //create var for react
     var AuthSessionReq = new proto.auth.AuthSessionReq();
     //set data from frontend to this var
     AuthSessionReq.setSession(session);
     AuthSessionReq.setId(id);
     AuthSessionReq.setId(time);
      //make a request to server
      var getTodo = authService.authSession(AuthSessionReq, metadata, (err, response) => {
        if (err) { //if error
          console.log(err);
        } else { //if success
          //get response
          const AuthSessionRes = response.getResponse();
          if (AuthSessionRes == null) {// if response null => not found
            console.log(`Something was wrong ${id} wasn't found`);
          } else {
            console.log(`Fetched TODO with ID ${id}: ${AuthSessionRes}`);
          }
        }
      });
  }

  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  const { classes } = props;
  let userId=cookie.load('userId');
  let userSession=cookie.load('userSession');
  let time=date;
  console.log("kt "+userId);
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/Home/Final"
          >
            {'Overlead'}
          </Link>
          <div className={classes.right}>
          <Button 
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.linkSecondary)}
              href="/login"
            >
              {'Sign In'}
            </Button>
            <Button 
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.linkSecondary)}
              href="/register"
            >
              {'Sign Up'}
            </Button>

          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
