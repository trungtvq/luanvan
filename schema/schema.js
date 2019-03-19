const graphql = require("graphql");
const _=require("lodash");
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
}=graphql;
var books=[
    {name:"Name of the wind",genre:"Fantasy",id:"1",authorId:"1"},
    {name:"The Final Empire",genre:"Fantasy",id:"2",authorId:"1"},
    {name:"The Long Earth",genre:"Sci-Fi",id:"3",authorId:"3"},
    {name:"Name of the wind",genre:"Fantasy",id:"4",authorId:"4"},
    {name:"The Final Empire",genre:"Fantasy",id:"5",authorId:"5"},
    {name:"The Long Earth",genre:"Sci-Fi",id:"6",authorId:"6"},
]
var authors=[
    {name:"Patrick Rothfuss",age:44,id:"1"},
    {name:"Brandon Sanderson",age:42,id:"2"},
    {name:"Terry Pratchett",age:66,id:"3"},
    {name:"Patrick Rothfuss",age:44,id:"4"},
    {name:"Brandon Sanderson",age:42,id:"5"},
    {name:"Terry Pratchett",age:66,id:"6"}
]

//define collection (may be contain infomation by query)
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
                return _.find(authors,{id:parent.authorId})
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
                return _.filter(books,{authorId:parent.id})
            }
        }
    })
})
//query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:()=>({
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(books,{id:args.id})
                //code to get data from db /other source
            }
        },
        author:{
            type:AuthorType,
            args:{id:{type:GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id})
                //code to get data from db /other source
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parrent,args){
                return books
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(parrent,args){
                return authors
            }
        }
    })
})
module.exports = new GraphQLSchema({
    query:RootQuery
})