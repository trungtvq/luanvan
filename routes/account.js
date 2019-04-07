const User = require('../models/User');
const UserSession = require('../models/UserSession');
const fetch = require('node-fetch')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
    //console.log(req);
    console.log("aaa")
    var email = "trungtvq@gmail.com";
    var sides = 6;
    var query = `{User(email:$email){name
    _id}}`;
    var query= `query User($email: String!) {
      User(email: $dice){
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
      .then(data => {console.log(data)

      });

    const { body } = req;
    const {
      password
    } = body;
    // let {
    //   email
    // } = body;
    console.log(body)

    if (!email) {
      console.log("err email format")
      return res.json({        
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if (!password) {
      console.log("err pass format")
      return res.json({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    console.log("lowerCase")
    email = email.toString().toLowerCase();
    console.log("trim")
    email = email.toString().trim();
    console.log("go find")
    User.find({
      email: email
    }, (err, users) => {
      console.log("find",err,users);
      if (err) {
        console.log('err 2:', err);
        return res.json({
          success: false,
          message: 'Error: server error'
        });
      }
      if (users.length != 1) {
        return res.json({
          success: false,
          message: 'Error: Invalid'
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.json({
          success: false,
          message: 'Error: Invalid'
        });
      }

      // Otherwise correct user
      const userSession = new UserSession();
      userSession.userId = user._id;
      userSession.save((err, doc) => {
        if (err) {
          console.log(err);
          return res.json({
            success: false,
            message: 'Error: server error'
          });
        }

        return res.json({
          success: true,
          message: 'Valid sign in',
          token: doc._id
        });
      });
    });

 
  },

//////
router.post('/register', (req, res, next) => {
    const { body } = req;
    const {
      firstName,
      lastName,
      password
    } = body;
    let {
      email
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

    // Steps:
    // 1. Verify email doesn't exist
    // 2. Save
    User.find({
      email: email
    }, (err, previousUsers) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.json({
          success: false,
          message: 'Error: Account already exist.'
        });
      }

      // Save the new user
      const newUser = new User();
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save((err, user) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Error: Server error'
          });
        }
        return res.json({
          success: true,
          message: 'Signed up'
        });
      });
    });
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


);

module.exports = router;