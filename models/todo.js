var { Schema, model } =require('mongoose');

const todoSchema = new Schema({
  _id: String,
  title: String,
  content: String
})

module.exports= model('Todo', todoSchema)
