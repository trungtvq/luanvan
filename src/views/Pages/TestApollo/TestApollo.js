
// import React, { Component } from 'react';
// import 'whatwg-fetch';

import {
  getFromStorage,
  setInStorage,
} from '../../../service/storage';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
//import apollo
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'

const getBooksQuery= gql`
  {
    books{
      name
      id
    }
  }
`

class TestApollo extends Component {
  displayData(){
    var data= this.props.data;
    if (data.loading){
      return(<div>Loadding data</div>)
    }else{
      return data.books.map(book=>{
        return (
          <li key={book.id}>{book.name}</li>
        )
      })
    }
  }
  render(){
    console.log(this.props)
    return(
      <div className="animated fadeIn">
        <ul id="book-list">
        {this.displayData()}
        </ul>
      </div>
    )
  }
}
export default graphql(getBooksQuery)(TestApollo);
