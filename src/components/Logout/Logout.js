import React, { Component } from 'react';

import {
  getFromStorage,
  setInStorage,
} from '../../service/storage';
import Login from '../../views/Pages/Login/Login';


class Logout extends Component {
  constructor(props){
    super(props);
    console.log(this.props.isLoading)
    this.state={
      isLoading:this.props.isLoading
    }
    this.logout = this.logout.bind(this);
    this.onSetState = this.onSetState.bind(this);
  }
  onSetState(){
    // this.setState({
    //   isLoading: true,
    // });
  }
  logout() {
    this.onSetState();
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token
        }),
      })
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
    return <Login />
  }

  render() {
    return (
      <div>
      <p>Account</p>
      <button onClick={this.logout}>Logout</button>
    </div>
    )
  }
}

export default Logout;
