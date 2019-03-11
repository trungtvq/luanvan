import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={log:[]}

  componentDidMount(){
    fetch("users")
      .then(res=>res.json())
      .then(log=>this.setState({log})) 
  }
  render() {

    return (

      <div>
        {this.state.log}
      </div>
    );
  }
}

export default App;
