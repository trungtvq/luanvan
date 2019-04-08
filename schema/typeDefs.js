const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Todo {
    _id: ID
    title: String
    content: String
  }
  type User{
    _id: ID
    name: String
    email: String
    password: String
    signUpDate: String
  }
  type UserSession{
    _id: ID
    userId: ID
    timestamp: String
    isDeleted: Boolean
  }
  type Query {
    Todo(_id: ID!): Todo
    Todos: [Todo]
    User(email: String!): User
    Users: [User]
    UserSession(_id:ID!):UserSession
    UsersSessions:[UserSession]
  }
  type Mutation {
    createTodo(title: String!, content: String!): Todo
    updateTodo(_id: ID!, title: String!, content: String!): Todo
    deleteTodo(_id: ID!): String
    createUser(name:String!, email: String!, password:String!): User
    createUserSession(userId:ID!): UserSession
    deleteUserSession(_id:ID!): String
  }
`

module.exports= typeDefs
