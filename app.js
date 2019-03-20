var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

const { ApolloServer, gql } = require('apollo-server');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var users1Router = require('./routes/users1');
var accountRouter = require('./routes/account');
//login external
var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy
//crossplatfom
var cors = require('cors')


//config
var keys= require('./config/config')
// Set up Mongoose
var mongoDB = 'mongodb://overlead:overlead!@overlead.co:27017/overlead';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

//set up app
var app = express();
app.use(cors())







passport.use(new  GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/api/auth/google/callback'
}, (accessToken)=>{
  console.log(accessToken)
}))


//graphql
const graphqHTTP=require('express-graphql')
const schema=require('./schema/schema')
app.use('/api/graphql',graphqHTTP({
  schema,
  graphiql:true
}))

//new server
// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world'
  }
};
// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});

//serve static file vs api link
app.use('/api/t1/assets',express.static('public/assets'));
app.use('/api/t2/assets',express.static('public/assets'));
app.use('/api/assets',express.static('public/assets'));

app.use('/api/public',express.static('public/assets'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/api/auth/login',passport.authenticate('google',{
  scope:['profile','email']
}))


app.use('/api/', indexRouter);
app.use('/api/users/1', usersRouter);
app.use('/api/users1', users1Router);
app.use('/api/account',accountRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
