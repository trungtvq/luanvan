import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import cookie from 'react-cookies'
import { Redirect } from 'react-router'

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
  
     //create service to request
     const authService = new proto.auth.AuthClient('54.255.233.193:8085');
     //metadab will be config later
     var metadata = {};
     
     //create var for react
     var AuthSessionReq = new proto.auth.AuthSessionReq();
     //set data from frontend to this var
     AuthSessionReq.setSession(session);
     AuthSessionReq.setId(id);
     AuthSessionReq.setId(time);
      //make a request to server
      var getTodo = authService.AuthSession(AuthSessionReq, metadata, (err, response) => {
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
            { typeof userId == 'undefined'?
                <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
                href="/login"
              >
                {'Sign In'}
              </Link>
              :
               
                // onCheck(userId,userSession,time)
                <Link
                color="inherit"
                variant="h6"
                underline="none"
                className={classes.rightLink}
                href="/AllProject"
              >
                {'Sign In'}
              </Link>
              
                
            }
            
            <Link
              variant="h6"
              underline="none"
              className={classNames(classes.rightLink, classes.linkSecondary)}
              href="/register"
            >
              {'Sign Up'}
            </Link>
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
