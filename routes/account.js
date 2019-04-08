const User = require('../models/User');
const UserSession = require('../models/UserSession');
const fetch = require('node-fetch')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/login', function (req, res, next) {
  //console.log(req);
  var curUser;
  var query;
  var isSusscess;
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
    } else {

      email = email.toString().toLowerCase();
      email = email.toString().trim();

      query = `query User($email: String!) {
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
          variables: { email }
        })
      })
        .then(r => r.json())
        .then(data => {

          if (data.data.User == null)
            return res.json({
              success: false,
              statusCode: "NOT_EXIST_EMAIL" //not exist email
            });
          else { //exist email
            curUser = new User(data.data.User);
            if (!curUser.validPassword(password))
              return res.json({
                success: false,
                statusCode: "WRONG_PASSWORD"
              });
            console.log(true);
            isSusscess = true;
            //session
            var userSession = new UserSession();

            let _id = curUser._id;
            userSession.userId = _id;
            query = `mutation createUserSession($_id:ID!) {
             createUserSession(userId:$_id){
               _id              
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
                variables: { _id }
              })
            })
              .then(r => r.json())
              .then(data => {
                console.log(data)
                return res.json({
                  success: true,
                  message: 'Valid sign in',
                  token: data.data.createUserSession._id
                });
              })

          }
        });


    }




})

//////
router.post('/register', (req, res, next) => {

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

  console.log(email, password, name)
  query = `query User($email: String!) {
      User(email: $email){
        _id
        name
      }}`

  fetch('https://overlead.co/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { email }
    })
  })
    .then(r => r.json())
    .then(data => {
      curUser = data.data.User;
      if (curUser != null)
        return res.json({
          success: false,
          statusCode: "EXIST_EMAIL" //not exist email
        });
      else { //not exist email
        console.log("adding...")
      }
    });

  query = `mutation createUser($name:String!, $email: String!,$password: String!) {
        createUser(name:$name,email: $email,password:$password){
          _id
          name
        }}`

  fetch('https://overlead.co/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { email, name, password }
    })
  })
    .then(r => r.json())
    .then(data => {
      result = data.data.createUser;
      console.log(result)
      return res.json({
        success: true,
        statusCode: result.name + " is signup" //not exist email
      });

    });
}),

  router.post('/verify', (req, res, next) => {
    // Get the token
    var _id  = req.body.token;
    console.log(_id)
    // ?token=test
    query = `query UserSession($_id: ID!) {
      UserSession(_id: $_id){
        userId
      }}`

  fetch('https://overlead.co/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { _id }
    })
  })
    .then(r => r.json())
    .then(data => {
      console.log("session")
      curUser = data.data.UserSession;
      console.log(curUser)
      if (curUser == null)
        return res.json({
          success: false,
          statusCode: "INVALID_TOKEN" //not exist email
        });
      else { //not exist email
        return res.json({
                success: true,
                message: 'Good'
              });
      }
    });
  
  }),

  router.post('/logout', (req, res, next) => {

    const { token } = req.body;
    // ?token=test
    query = `mutation deleteUserSession($token:ID!) {
      deleteUserSession(_id:$token)}`

  fetch('https://overlead.co/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { token }
    })
  })
    .then(r => r.json())
    .then(data => {
      console.log("deleteUserSession");
      curUser = data;
      console.log(curUser)
      if (curUser != null)
        return res.json({
          success: false,
          statusCode: "NOT_EXIST_TOKEN" //not exist email
        });
      else { //not exist email
        return res.json({
                success: true,
                message: 'Good'
              });
      }
    });
  })




module.exports = router;