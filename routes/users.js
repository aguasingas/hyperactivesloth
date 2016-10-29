var express = require('express');
var router = express.Router();
var _ = require('lodash');

var userModel = require('../models/users.js');
var mealModel = require('../models/meals.js');

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


/* GET all users. */
router.get('/', function(req, res, next) {
  userModel.find({},'-password',function(err, users) {
    if (err) {
      res.json({info: 'error during find users', error: err});
    };
    res.json({info: 'users found successfully', data: users});
  });
});

/* GET a user . */
router.get('/:uid', function(req, res, next) {
  if (_.isString(req.params.uid)) {
    var uid = req.params.uid;
    userModel.findById(uid,'-password',function(err, user) {
      if (err) {
        res.json({info: 'error during find users', error: err});
      };
      mealModel.find({'user': uid}, '-user' ,function(err, meals) {
        res.json({
            'info': 'Meals for used retrieved successfully',
            'user': user,
            'meals': meals
        });
      }).populate('recipe');
    });
  }
});

/* Update a user. */
router.put('/:uid', function(req, res, next) {
  var uid = req.params.uid;
  if (req.body !== undefined) {
    var body = req.body;
  }
  userModel.update({_id: uid},
    body,
    function (err, numberAffected, response) {
    if (err) {
      return next(err);
    }
    res.send(200);
  });
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