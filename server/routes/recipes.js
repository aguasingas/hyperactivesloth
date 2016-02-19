var express = require('express');
var router = express.Router();
var _ = require('lodash');

var recipeModel = require('../models/recipes.js');

/* POST a new user. */
router.post('/', function(req, res, next) {
  if (req.body !== undefined) {
    var body = req.body;
      console.log(body);

      var validation = validateRecipeCreation(body);
    if (validation.valid) {
      console.log('recipe is valid');
      var recipe = {
        'title': body.title,
      };

      var newRecipe = new recipeModel(recipe);
      newRecipe.save(function(err) {
        if (err) {
          res.json({info: 'error during recipe creation', error: err});
        };
        res.json({info: 'recipe created successfully'});
      });
    }
  }
});

/* GET all recipes. */
router.get('/', function(req, res, next) {
  recipeModel.find(function(err, recipes) {
    if (err) {
      res.json({info: 'error during find recipes', error: err});
    };
    res.json({info: 'recipes found successfully', data: recipes});
  });
});

module.exports = router;

function validateRecipeCreation(user) {
  var errors = [];
  if (!_.isString(user.title)) {
    errors.push('Value for recipe title is not correct.');
  }
  var output = {
    'valid': errors.length <= 0,
    'errors': errors
    };
  return output;
}