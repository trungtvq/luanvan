import React, { Component } from 'react';
import { 
Form,
FormGroup,
Label,
Card,
CardBody, 
CardFooter,
CardHeader,
Collapse,
Progress, 
Badge, 
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
ListGroup,
ListGroupItem,
PaginationLink, } from 'reactstrap';
import { Link } from 'react-router-dom';
import Board from 'react-trello';
import Chat from '../../../../service/chat'


class Velocity extends Component {
   constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
   
    this.state = {
      collapse: true,
      fadeIn: true,
      boardData: {lanes:[
        {
          id: "To do",             //chứa các task to do
          title: "Planned Tasks",
          label: "1",             //số task todo 
          style: {"width": 350,"color":"blue",},
          cards: [
            {
              id: "1",              //id của task
              title: "Login bằng Fb", //title của task
              label: "High",          //priority của task
              cardStyle: { "width": 340, "maxWidth": 340, "margin": "auto", "marginBottom": 5, },           
              description: "Người dùng không cần tạo tài khoản mà sử dụng tài khoản fb để đăng nhập	"   //description của task
            },
          ]
        },
        {
          id: "InProgress",             //chứa các task InProgress
          title: "Work In Progress",
          label: "1",                    //số task InProgress 
          style: {"width": 350,"color":"orange  "},
          cards: [
            {
              id: "2",
              title: "Đổi mật khẩu",
              label: "Low",
              cardStyle: { "width": 340, "maxWidth": 340, "margin": "auto", "marginBottom": 5 , },
              description: "Người dùng đổi mật khẩu của tài khoản mà mình tạo"
            }
          ]
        },
        
        {
          id: "Done",                    //chứa các task done
          title: "DONE",
          style: {"width": 350,"color":"green" },
          label: "1",                         //số task done 
          cards: [
            {
              id: "3",
              title: "Thay đổi avatar",
              label: "Medium",
              cardStyle: { "width": 340, "maxWidth": 340, "margin": "auto", "marginBottom": 5, },
              description: "Người dùng thay đổi avatar hiển thị ở giao diện chính"
            },         
          ]
        },
      ]}
    
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
//   handleDragStart = (cardId, laneId) => {
//     console.log('drag started')
//     console.log(`cardId: ${cardId}`)
//     console.log(`laneId: ${laneId}`)
// }

 handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended')
    console.log(`cardId: ${cardId}`)
    console.log(`sourceLaneId: ${sourceLaneId}`)      //targetLaneId: là todo, inprogress, done
    console.log(`targetLaneId: ${targetLaneId}`)      //targetLaneId: là todo, inprogress, done
    //to do
    //viết hàm update lại task vừa dc  chuyển trạng thái tức là cập nhật lại trạng thái của task từ sourceLaneId
    //thành targetLaneId
}
// handleLaneDragStart = (cardId, laneId) => {
//   console.log('drag started')
//   console.log(`cardId: ${cardId}`)
//   console.log(`laneId: ${laneId}`)
// }

// handleLaneDragEnd = (cardId, sourceLaneId, targetLaneId) => {
//   console.log('drag ended')
//   console.log(`cardId: ${cardId}`)
//   console.log(`sourceLaneId: ${sourceLaneId}`)
//   console.log(`targetLaneId: ${targetLaneId}`)
// }
        
  // setEventBus = eventBus => {
  //   this.setState({eventBus})
  // }

// async componentWillMount() {
//   const response = await this.getBoard()
//   this.setState({boardData: response})
// }

// getBoard() {
//   return new Promise(resolve => {
//       resolve(data)
//   })
// }

// completeCard = () => {
//   this.state.eventBus.publish({
//       type: 'ADD_CARD',
//       laneId: 'COMPLETED',
//       card: {id: 'Milk', title: 'Buy Milk', label: '15 mins', description: 'Use Headspace app'}
//   })
//   this.state.eventBus.publish({type: 'REMOVE_CARD', laneId: 'PLANNED', cardId: 'Milk'})
// }

// addCard = () => {
//   this.state.eventBus.publish({
//       type: 'ADD_CARD',
//       laneId: 'BLOCKED',
//       card: {id: 'Ec2Error', title: 'EC2 Instance Down', label: '30 mins', description: 'Main EC2 instance down'}
//   })
// }

// shouldReceiveNewData = nextData => {
//   console.log('New card has been added')
//   console.log(nextData)
// }

// handleCardAdd = (card, laneId) => {
// console.log(`New card added to lane' ${laneId}`)
// console.dir(card)
// }

                     

  render() {
    return (
      <div>
         <Row>
         <Col>
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
       
        <Board
         collapsibleLanes
					onCardAdd={this.handleCardAdd}
          data={this.state.boardData}
          draggable
          onDataChange={this.shouldReceiveNewData}
          eventBusHandle={this.setEventBus}
          handleDragStart={this.handleDragStart}
          handleDragEnd={this.handleDragEnd}
                    />
        </Col>
       </Row>
      </div>
    
    );
  }
}

export default Velocity;
