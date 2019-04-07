var express = require('express');
var router = express.Router();
//import gql from "graphql-tag";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Provide api for app overlead.co' });
});
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Provide api for app overlead.co' });
});

module.exports = router;
