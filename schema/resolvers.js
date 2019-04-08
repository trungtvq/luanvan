var uuid =require('uuid/v4')
const resolvers = {
  Query: {
    Todo: (root, args, { models }) => {
      const { _id } = args
      return models.todo.find({ _id })
    },
    Todos: (root, args, { models }) => models.todo.find({}),

    User: (root,args,{models})=>{
      const { email }=args
      return models.User.findOne({email})
    },
    Users: (root,args,{models})=>models.User.find({}),
    UserSession: (root,args,{models})=>{
      const {_id}=args
      return models.UserSession.findOne({_id})
    },
    UsersSessions: (root,args,{models})=>models.UserSession.find({}),
  },
  Mutation: {
    createTodo: async (root, args, { models }) => {
      const newTodo = new models.todo(args)
      newTodo._id = uuid()
      return await newTodo.save()
    },

    updateTodo: async (root, args, { models }) => {
      const { _id, title, content } = args
      await models.todo.updateOne({ _id }, { title, content })
      return await models.todo.findOne({ _id }, { title, content })
    },
    deleteTodo: async (root, args, { models }) => {
      const { _id } = args
      await models.todo.findOneAndRemove({ _id })
      return _id
    },
    createUser: async (root,args,{models})=>{
      const newUser=new models.User(args)
      newUser.password=newUser.generateHash(args.password)
      newUser._id=uuid()      
      return await newUser.save()
    },
    createUserSession: async (root,args,{models})=>{
      const newUserSession=new models.UserSession(args)
      newUserSession._id=uuid()      
      return await newUserSession.save()
    },
    deleteUserSession: async (root, args, { models }) => {
      const { _id } = args
      await models.UserSession.findOneAndRemove({ _id })
      return _id
    },
  }
}

module.exports= resolvers
