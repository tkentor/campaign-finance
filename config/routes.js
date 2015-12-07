var express = require('express');
var router = express.Router();
var staticsController = require('../controllers/statics');
// var usersController = require('../controllers/users');


router.route('/')
  .get(staticsController.home);
