var express = require('express');
var router = express.Router();
var _ = require('lodash');

var ingredientModel = require('../models/ingredients.js');

/* POST a new ingredient. */
router.post('/', function(req, res, next) {
  if (req.body !== undefined) {
    var body = req.body;
      console.log(body);

    var validation = validateIngredientCreation(body);
    if (validation.valid) {
      console.log('ingredient is valid');
      var ingredient = {
        'title': body.title,
      };

      var newIngredient = new ingredientModel(ingredient);
      console.log('newingredient');
      newIngredient.save(function(err) {
        if (err) {
          res.json({info: 'error during ingredient creation', error: err});
        };
        res.json({info: 'ingredient created successfully'});
      });
    }
  }
});

/* GET all recipes. */
router.get('/', function(req, res, next) {
  ingredientModel.find(function(err, ingredients) {
    if (err) {
      res.json({info: 'error during find ingredients', error: err});
    };
    res.json({info: 'ingredients found successfully', data: ingredients});
  });
});

module.exports = router;

function validateIngredientCreation(ingredient) {
  var errors = [];
  if (!_.isString(ingredient.title)) {
    errors.push('Value for ingredient title is not correct.');
  }
  var output = {
    'valid': errors.length <= 0,
    'errors': errors
    };
  return output;
}