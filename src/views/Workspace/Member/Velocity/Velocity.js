import React, { Component } from 'react';
// import { 
// Form,
// FormGroup,
// Label,
// Card,
// CardBody, 
// CardFooter,
// CardHeader,
// Collapse,
// Progress, 
// Badge, 
// Button, 
// Col, 
// Container, 
// Input, 
// InputGroup, 
// InputGroupAddon, 
// InputGroupText, 
// Row, 
// Table, 
// Pagination, 
// PaginationItem,
// ListGroup,
// ListGroupItem,
// PaginationLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
import Board from 'react-trello';
const data = require('./data.json')

class Velocity extends Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
   
    this.state = {
      collapse: true,
      fadeIn: true,
      boardData: {lanes:[
        {
          "id": "PLANNED",
          "title": "Planned Tasks",
          "label": "20/70",
          "style": {"width": 280,"color":"blue"},
          "cards": [
            {
              "id": "Milk",
              "title": "Buy milk",
              "label": "15 mins",
              "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5, },
              "cardColor": 'BD3B36',
              "description": "2 Gallons of milk at the Deli store"
            },
            {
              "id": "Plan2",
              "title": "Dispose Garbage",
              "label": "10 mins",
              "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
              "description": "Sort out recyclable and waste as needed"
            },
            {
              "id": "Plan3",
              "title": "Write Blog",
              "label": "30 mins",
              "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
              "description": "Can AI make memes?"
            },
            {
              "id": "Plan4",
              "title": "Pay Rent",
              "label": "5 mins",
              "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
              "description": "Transfer to bank account"
            }
          ]
        },
        {
          "id": "WIP",
          "title": "Work In Progress",
          "label": "10/20",
          "style": {"width": 280,"color":"orange  "},
          "cards": [
            {
              "id": "Wip1",
              "title": "Clean House",
              "label": "30 mins",
              "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
              "description": "Soap wash and polish floor. Polish windows and doors. Scrap all broken glasses"
            }
          ]
        },
        
        {
          "id": "DONE",
          "title": "DONE",
          "style": {"width": 280,"color":"green"},
          "label": "2/5",
          "cards": [
            {
              "id": "Completed1",
              "title": "Practice Meditation",
              "label": "15 mins",
              "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
              "description": "Use Headspace app"
            },
            {
              "id": "Completed2",
              "title": "Maintain Daily Journal",
              "label": "15 mins",
              "cardStyle": { "width": 270, "maxWidth": 270, "margin": "auto", "marginBottom": 5 },
              "description": "Use Spreadsheet for now"
            }
          ]
        },
     
       
        
        
    
      ]}
    
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  handleDragStart = (cardId, laneId) => {
    console.log('drag started')
    console.log(`cardId: ${cardId}`)
    console.log(`laneId: ${laneId}`)
}

 handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended')
    console.log(`cardId: ${cardId}`)
    console.log(`sourceLaneId: ${sourceLaneId}`)
    console.log(`targetLaneId: ${targetLaneId}`)
}
handleLaneDragStart = (cardId, laneId) => {
  console.log('drag started')
  console.log(`cardId: ${cardId}`)
  console.log(`laneId: ${laneId}`)
}

handleLaneDragEnd = (cardId, sourceLaneId, targetLaneId) => {
  console.log('drag ended')
  console.log(`cardId: ${cardId}`)
  console.log(`sourceLaneId: ${sourceLaneId}`)
  console.log(`targetLaneId: ${targetLaneId}`)
}
        
setEventBus = eventBus => {
  this.setState({eventBus})
}

async componentWillMount() {
  const response = await this.getBoard()
  this.setState({boardData: response})
}

// getBoard() {
//   return new Promise(resolve => {
//       resolve(data)
//   })
// }

completeCard = () => {
  this.state.eventBus.publish({
      type: 'ADD_CARD',
      laneId: 'COMPLETED',
      card: {id: 'Milk', title: 'Buy Milk', label: '15 mins', description: 'Use Headspace app'}
  })
  this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: 'PLANNED', cardId: 'Milk'})
}

addCard = () => {
  this.state.eventBus.publish({
      type: 'ADD_CARD',
      laneId: 'BLOCKED',
      card: {id: 'Ec2Error', title: 'EC2 Instance Down', label: '30 mins', description: 'Main EC2 instance down'}
  })
}

shouldReceiveNewData = nextData => {
  console.log('New card has been added')
  console.log(nextData)
}

handleCardAdd = (card, laneId) => {
console.log(`New card added to lane ${laneId}`)
console.dir(card)
}

                     

  render() {
    return (
      <div>
        <div class="row">
            {/* <div class="col col-lg-4 col-md-4 col-sm-4">
                <div class="card " >
                  <div class="card-header text-white bg-primary mb-3">
                     <b>To do </b>     
                  </div>
                  <div class="card-body">
                      <div class="card border-primary mb-3" >
                        <div class="card-body">
                          Người dùng đổi mật khẩu của tài khoản mà mình tạo
                        </div>
                      </div>
                      <div class="card border-primary mb-3" >
                        <div class="card-body">
                          Người dùng thay đổi avatar hiển thị ở giao diện chính
                        </div>
                      </div>
                      <div class="card border-primary mb-3" >
                        <div class="card-body">
                          Người dùng sử dụng paypal để trả phí
                        </div>
                      </div>
                  </div>
                </div>
            </div>

            <div class="col col-lg-4 col-md-4 col-sm-4">
                <div class="card " >
                  <div class="card-header text-white bg-warning mb-3">
                     <b>Inprogress </b>     
                  </div>
                  <div class="card-body">
                      <div class="card border-warning mb-3" >
                        <div class="card-body">
                         Người dùng không cần tạo tài khoản mà sử dụng tài khoản email để đăng nhập
                        </div>
                      </div>
                      <div class="card border-warning mb-3" >
                        <div class="card-body">
                          Người dùng tạo tài khoản và sử dụng tài khoản này để đăng nhập
                        </div>
                      </div>
                  </div>
                </div>
            </div>

            <div class="col col-lg-4 col-md-4 col-sm-4">
                <div class="card " >
                  <div class="card-header text-white bg-success mb-3">
                     <b>Done </b>     
                  </div>
                  <div class="card-body">
                      <div class="card border-success mb-3" >
                        <div class="card-body">
                         Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập
                        </div>
                      </div>
                  </div>
                </div>
            </div> */}
        </div>
        <Board
          editable
					onCardAdd={this.handleCardAdd}
          data={this.state.boardData}
          draggable
          onDataChange={this.shouldReceiveNewData}
          eventBusHandle={this.setEventBus}
          handleDragStart={this.handleDragStart}
          handleDragEnd={this.handleDragEnd}
                    />
      </div>
    
    );
  }
}

export default Velocity;
