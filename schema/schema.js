const graphql = require("graphql");
const _=require("lodash");

const Book=require('../models/book');
const Author=require('../models/author');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
}=graphql;


//dump data
// var books=[
//     {name:"Name of the wind",genre:"Fantasy",id:"1",authorId:"1"},
//     {name:"The Final Empire",genre:"Fantasy",id:"2",authorId:"1"},
//     {name:"The Long Earth",genre:"Sci-Fi",id:"3",authorId:"3"},
//     {name:"Name of the wind",genre:"Fantasy",id:"4",authorId:"4"},
//     {name:"The Final Empire",genre:"Fantasy",id:"5",authorId:"5"},
//     {name:"The Long Earth",genre:"Sci-Fi",id:"6",authorId:"6"},
// ]
// var authors=[
//     {name:"Patrick Rothfuss",age:44,id:"1"},
//     {name:"Brandon Sanderson",age:42,id:"2"},
//     {name:"Terry Pratchett",age:66,id:"3"},
//     {name:"Patrick Rothfuss",age:44,id:"4"},
//     {name:"Brandon Sanderson",age:42,id:"5"},
//     {name:"Terry Pratchett",age:66,id:"6"}
// ]

//define collection of mongo for GraphQL
const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        author:{
            type:AuthorType,
            //args:{id:{type:GraphQLID}}, //not include it
            resolve(parent,args){ //parent is entity of the book we request
                //return _.find(authors,{id:args.id})
                
                // go with dump data
                //return _.find(authors,{id:parent.authorId})

                //go with mongodb
                return Author.findById(parent.authorId)
                //code to get data from db /other source
            }
        },
        genre:{type:GraphQLString},

    })
})
const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLInt},
        books:{
            type:new GraphQLList(BookType),
            resolve(parent,args){
                //go with dump data
                //return _.filter(books,{authorId:parent.id})

                //go with mongo
                return Book.find({authorId:parent.id})
            }
        }
    })
})
//query with model
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:()=>({
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                //go with dump data
                //return _.find(books,{id:args.id})
                //code to get data from db /other source
                return Book.findById(agrs.id)
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                // go with dump
                //return _.find(authors,{id:args.id})
                //code to get data from db /other source
                return Author.findById(args.id)
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parrent,args){
                //dump
                //return books
                return Book.find({})
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parrent,args){
                //return authors //dump
                return Author.find({})
            }
        }
    })
})


const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields:{
        addAuthor:{
            type:AuthorType,
            args:{
                name: {type:new GraphQLNonNull(GraphQLString)},
                age:{type: new GraphQLNonNull(GraphQLInt)},

            },
            resolve(parent,args){
                let author=new Author({
                    name:args.name,
                    age:args.age
                });
                return author.save();
            }
        },
        addBook:{
            type:BookType,
            args:{
                name: {type: new GraphQLNonNull(GraphQLString)},
                genre: {type:new GraphQLNonNull(GraphQLString)},
                authorId: {type: new GraphQLNonNull(GraphQLID)}, 
            },
            resolve(parent,args){
                let book=new Book({
                    name:args.name,
                    genre:args.genre,
                    authorId:args.authorId,
                });
                return book.save();
            }
        },




    },
    
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})