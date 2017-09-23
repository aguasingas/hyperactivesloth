(function(){
  'use strict';

  var app = angular.module('mealApp',['ui.router','ui.bootstrap']);

  app.config(['$stateProvider', function ($stateProvider) {
    console.log('config');
    $stateProvider
      .state('home', {
        url  : '/',
        templateUrl  : 'home/home.html',
        controller   : 'homeController',
        controllerAs : 'home',
        resolve: {
          users: function(dataService){
            return dataService.getUsers();
          },
          recipes: function(dataService){
            return dataService.getRecipes();
          }
        }
      })
      .state('users', {
        url  : '/users',
        templateUrl  : 'modules/users/users.html',
        controller   : 'usersController',
        controllerAs : 'users',
        resolve: {
          users: function(dataService){
            return dataService.getUsers();
          }
        }
      })
      .state('users_detail',{
        url: '/users/:id',
        templateUrl  : 'modules/users/userDetail.html',
        controller   : 'userDetailController',
        controllerAs : 'user',
        resolve: {
          details: function($stateParams, dataService){
            console.log($stateParams);
            var id = $stateParams.id;
            return dataService.getUser(id);
          }
        }
      })
      .state('meals',{
        url          : '/meals',
        templateUrl  : 'meals/meals.html',
        controller   : 'mealsController',
        controllerAs : 'meals',
        resolve: {
          meals: function(dataService){
            return dataService.getMeals();
          }
        }
      })
      .state('recipes',{
        url          : '/recipes',
        templateUrl  : 'recipes/recipes.html',
        controller   : 'recipesController',
        controllerAs : 'recipes',
        resolve: {
          recipes: function(dataService){
            return dataService.getRecipes();
          }
        }
      })

      .state('ingredients',{
        url          : '/ingredients',
        templateUrl  : 'ingredients/ingredients.html',
        controller   : 'ingredientsController',
        controllerAs : 'ingredients',
        resolve: {
          ingredients: function(dataService){
            return dataService.getIngredients();
          }
        }
      });
  }]);

  //         .when('/meals/:id',{
  //             templateUrl  : 'meals/mealDetail.html',
  //             controller   : 'mealDetailController',
  //             controllerAs : 'meal'
  //         })
  ////
  //         .when('/recipes/:id',{
  //             templateUrl  : 'recipes/recipeDetail.html',
  //             controller   : 'recipeDetailController',
  //             controllerAs : 'recipe'
  //         })
  //
  //
  //
  //       .otherwise({
  //             redirectTo: '/'
  //         });
  //
  // });

})();
