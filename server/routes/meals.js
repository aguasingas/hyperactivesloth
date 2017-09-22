var express = require('express');
var router = express.Router();
var _ = require('lodash');

var mealModel = require('../models/meals.js');

/* POST a new meal. */
router.post('/', function(req, res, next) {
  if (req.body !== undefined) {
    var body = req.body;
      console.log(body);

      var validation = validateMealCreation(body);
    if (validation.valid) {
      console.log('meal is valid');
      var meal = {
        user: body.user,
        date: body.date,
        time: body.time,
        recipe: body.recipe
      };

      var newMeal = new mealModel(meal);
      newMeal.save(function(err) {
        if (err) {
          res.json({info: 'error during meal creation', error: err});
        };
        res.json({info: 'meal created successfully'});
      });
    }
  }
});

/* GET all meals. */
router.get('/', function(req, res, next) {
  mealModel.find(function(err, meals) {
    if (err) {
      res.json({info: 'error during find meals', error: err});
    }
    res.json({info: 'meals found successfully', data: meals});
  })
      .populate('user', '-password')
      .populate('recipe')
    .sort({'date': 1});
});

module.exports = router;

function validateMealCreation(meal) {
  var errors = [];
  if (!_.isString(meal.user)) {
    errors.push('Value for meal user is not correct.');
  }
  if (!_.isString(meal.time)) {
    errors.push('Value for meal time is not correct.');
  }
  if (!_.isString(meal.recipe)) {
    errors.push('Value for meal recipe is not correct.');
  }
  if (!_.isString(meal.date)) {
    errors.push('Value for meal date is not correct.');
  }
  var output = {
    'valid': errors.length <= 0,
    'errors': errors
    };
  return output;
}