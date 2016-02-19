var express = require('express');
var router = express.Router();
var _ = require('lodash');

var userModel = require('../models/users.js');

/* POST a new user. */
router.post('/', function(req, res, next) {
  if (req.body !== undefined) {
    var body = req.body;
    var validation = validateUserCreation(body);
    if (validation.valid) {
      console.log('user is valid');
      var user = {
        'name': body.name,
        'password': body.password
      };

      var newUser = new userModel(user);
      newUser.save(function(err) {
        if (err) {
          res.json({info: 'error during user creation', error: err});
        };
        res.json({info: 'user created successfully'});
      });
    }
  }
});

module.exports = router;

function validateUserCreation(user) {
  var errors = [];
  if (!_.isString(user.name)) {
    errors.push('Value for username is not correct.');
  }
  if (!_.isString(user.password)) {
    errors.push('Value for password is not correct.');
  }
  var output = {
    'valid': errors.length <= 0,
    'errors': errors
    };
  return output;
}