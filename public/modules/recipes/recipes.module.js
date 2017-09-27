(function(){
  'use strict';

  angular.module('md_recipes', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('recipes',{
          url          : '/recipes',
          templateUrl  : 'modules/recipes/recipes.html',
          controller   : 'recipesController',
          controllerAs : 'recipes',
          resolve: {
            recipes: function(dataService){
              return dataService.getRecipes();
            }
          }
        });
    }]);
})();
