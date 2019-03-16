var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var users1Router = require('./routes/users1');
var accountRouter = require('./routes/account');

// Set up Mongoose
var mongoDB = 'mongodb+srv://tien:111111111@overlead0-ykr4q.gcp.mongodb.net/login_demo';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var app = express();
//serve static file
app.use('/t1/assets',express.static('public/assets'));
app.use('/t2/assets',express.static('public/assets'));
app.use('/assets',express.static('public/assets'));

app.use('/public',express.static('public/assets'));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users/1', usersRouter);
app.use('/users1', users1Router);
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
