(function(){
    'use strict';

    var app = angular.module('mealApp',['ngRoute','ui.bootstrap']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
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

            .when('/users',{
                templateUrl  : 'users/users.html',
                controller   : 'usersController',
                controllerAs : 'users',
                resolve: {
                    users: function(dataService){
                        return dataService.getUsers();
                    }
                }
            })

            .when('/users/:id',{
                templateUrl  : 'users/userDetail.html',
                controller   : 'userDetailController',
                controllerAs : 'user',
                resolve: {
                    details: function($route, dataService){
                        var id = $route.current.params.id;
                        return dataService.getUser(id);
                    }
                }

            })

            .when('/meals',{
                templateUrl  : 'meals/meals.html',
                controller   : 'mealsController',
                controllerAs : 'meals',
                resolve: {
                    meals: function(dataService){
                        return dataService.getMeals();
                    }
                }
            })

            .when('/meals/:id',{
                templateUrl  : 'meals/mealDetail.html',
                controller   : 'mealDetailController',
                controllerAs : 'meal'
            })

            .when('/recipes',{
                templateUrl  : 'recipes/recipes.html',
                controller   : 'recipesController',
                controllerAs : 'recipes',
                resolve: {
                    recipes: function(dataService){
                        return dataService.getRecipes();
                    }
                }
            })

            .when('/recipes/:id',{
                templateUrl  : 'recipes/recipeDetail.html',
                controller   : 'recipeDetailController',
                controllerAs : 'recipe'
            })

            .otherwise({
                redirectTo: '/'
            });

    });

})();
