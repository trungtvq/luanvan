var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//graphql
const { typeDefs, resolvers } =require('./schema')
var models =require('./models');


var indexRouter = require('./routes/index');
var accountRouter = require('./routes/account');
//login external
var passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy
//crossplatfom
var cors = require('cors')


//config
var keys= require('./config/config')
// Set up Mongoose
var mongoDB = 'mongodb+srv://trung:trung123@overlead0-ykr4q.gcp.mongodb.net/overlead?retryWrites=true';
const { ApolloServer } = require('apollo-server-express');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  tracing: false,
  playground: {
    settings: {
      'editor.cursorShape': 'line'
    }
  },
  context: async ({ req, connection }) => {
    // Authentication + Authorize here
    if (connection) {
      return connection.context
    } else {
      // let token = req.headers.authorization || null
      return { models }
    }
  }

});

mongoose.connect(mongoDB,{ useNewUrlParser: true },
  () => console.log('Database connected!')
);
mongoose.Promise = global.Promise;

//set up app
var app = express();
app.use(cors())
server.applyMiddleware({ app, path: '/api/graphql', }); // app is from an existing express app


passport.use(new  GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/api/auth/google/callback'
}, (accessToken,refreshToken,profile,done)=>{
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
  console.log(done);
}))


app.get('/api/auth/google/callback',passport.authenticate('google'))


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
