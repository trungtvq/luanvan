
var { Schema, model } =require('mongoose');

const UserSession = new Schema({
  _id:{
    type:String
  },
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: String,
    default: false
  }
});

module.exports = model('UserSession', UserSession);