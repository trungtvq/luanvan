const User = require('../models/User');
const UserSession = require('../models/UserSession');
const fetch = require('node-fetch')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
    //console.log(req);

    const { body } = req;
    var {
      name,
      password,
      email
    } = body;
    
    if (!email) {
      console.log("err email format")
      return res.json({        
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    } else
    if (!password) {
      console.log("err pass format")
      return res.json({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }else{

      email = email.toString().toLowerCase();
      email = email.toString().trim();
    
        var query= `query User($email: String!) {
          User(email: $email){
            _id
            name
            password
          }}`
        //query,
      // variables: { dice, sides },
        fetch('https://overlead.co/api/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query,
            variables:{email}
          })
        })
          .then(r => r.json())
          .then(data => {
            
            if (data.data.User==null) 
                return res.json({
                    success:false,
                    statusCode: "NOT_EXIST_EMAIL" //not exist email
                }); 
            else{ //exist email
              let userLog=new User(data.data.User);
                if (!userLog.validPassword(password))
                    return res.json({
                      success:false,
                      statusCode:"WRONG_PASSWORD"
                    })
                  return res.json({
                    success:true,
                    statusCode:"Hi "+userLog.name
                  })
            }
          });
  
    }

      // Otherwise correct user
      // const userSession = new UserSession();
      // userSession.userId = user._id;
      // userSession.save((err, doc) => {
      //   if (err) {
      //     console.log(err);
      //     return res.json({
      //       success: false,
      //       message: 'Error: server error'
      //     });
      //   }

      //   return res.json({
      //     success: true,
      //     message: 'Valid sign in',
      //     token: doc._id
      //   });
      // });

 
  })

//////
router.post('/register', (req, res, next) => {
  console.log("vao dang ki ne")
    
    const { body } = req;
    console.log(body)
    var {
      email,
      password,
      name
    } = body;

    if (!email) {
      return res.json({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      return res.json({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    email = email.toLowerCase();
    email = email.trim();

    console.log(email, password,name)
    var query= `query User($email: String!) {
      User(email: $email){
        _id
        name
      }}`
    //query,
  // variables: { dice, sides },
    fetch('https://overlead.co/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables:{email}
      })
    })
      .then(r => r.json())
      .then(data => {
        userLog=data.data.User;
        if (userLog!=null) 
            return res.json({
                success:false,
                statusCode: "EXIST_EMAIL" //not exist email
            }); 
        else{ //not exist email
          console.log("adding...")
        }
      });

      console.log("tai khoan co the duoc dang ki")
      query= `mutation createUser($name:String!, $email: String!,$password: String!) {
        createUser(name:$name,email: $email,password:$password){
          _id
          name
        }}`
      //query,
    // variables: { dice, sides },
      fetch('https://overlead.co/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables:{email,name,password}
        })
      })
        .then(r => r.json())
        .then(data => {
          result=data.data.createUser;
          console.log(result)
              return res.json({
                  success:true,
                  statusCode: result.name+" is signup" //not exist email
              }); 
         
        });
    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    // User.find({
    //   email: email
    // }, (err, previousUsers) => {
    //   if (err) {
    //     return res.json({
    //       success: false,
    //       message: 'Error: Server error'
    //     });
    //   } else if (previousUsers.length > 0) {
    //     return res.json({
    //       success: false,
    //       message: 'Error: Account already exist.'
    //     });
    //   }

    //   // Save the new user
    //   const newUser = new User();
    //   newUser.firstName = firstName;
    //   newUser.lastName = lastName;
    //   newUser.email = email;
    //   newUser.password = newUser.generateHash(password);
    //   newUser.save((err, user) => {
    //     if (err) {
    //       return res.json({
    //         success: false,
    //         message: 'Error: Server error'
    //       });
    //     }
    //     return res.json({
    //       success: true,
    //       message: 'Signed up'
    //     });
    //   });
    // });
  }),
//////

router.get('/verify', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify the token is one of a kind and it's not deleted.

    UserSession.find({
      _id: token,
      isDeleted: false
    }, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message: 'Error: Server error'
        });
      }

      if (sessions.length != 1) {
        return res.json({
          success: false,
          message: 'Error: Invalid'
        });
      } else {
        return res.json({
          success: true,
          message: 'Good'
        });
      }
    });
  }),

  router.get('/logout', (req, res, next) => {
    // Get the token
    const { query } = req;
    const { token } = query;
    // ?token=test

    // Verify the token is one of a kind and it's not deleted.

    UserSession.findOneAndUpdate({
      _id: token,
      isDeleted: false
    }, {
      $set: {
        isDeleted:true
      }
    }, null, (err, sessions) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          message: 'Error: Server error'
        });
      }

      return res.json({
        success: true,
        message: 'Good'
      });
    });
  })




module.exports = router;