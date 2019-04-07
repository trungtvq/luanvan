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
    Users: (root,args,{models})=>models.User.find({})
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
      //args.password=bcrypt.hashSync(p,bcrypt.genSaltSync(8),null);
      // args.password=bcrypt.compareSync(args.password,p);
      const newUser=new models.User(args)
      newUser.password=newUser.generateHash(args.password)
      newUser._id=uuid()
      //newUser.password=bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
      
      return await newUser.save()
    }
  }
}

module.exports= resolvers
