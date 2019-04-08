
var { Schema, model } =require('mongoose');

const bcrypt = require('bcrypt');
const User = new Schema({
  _id: String,
  email: String,
  name: String,
  password: String,
  signUpDate:{
    type:Date,
    default:Date.now()
  }
})
User.methods.generateHash=function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

User.methods.validPassword=function(password){
  return bcrypt.compareSync(password,this.password);
}
module.exports= model('User', User)