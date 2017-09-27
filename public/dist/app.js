(function () {
    'use strict';
    import "//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
    import "https://ajax.googleapis.com/ajax/libs/angularjs/1.6.6/angular.min.js";
    angular.module('mealApp', ['ui.router', 'ui.bootstrap', 'md_users', 'md_meals',
        'md_ingredients', 'md_recipes'])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('home', {
                url: '/',
                templateUrl: 'src/home/home.html',
                controller: 'homeController',
                controllerAs: 'home',
                resolve: {
                    users: function (dataService) {
                        return dataService.getUsers();
                    },
                    recipes: function (dataService) {
                        return dataService.getRecipes();
                    }
                }
            });
        }]);
    angular.module('md_ingredients', ['ui.router'])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('ingredients', {
                url: '/ingredients',
                templateUrl: 'src/ingredients/ingredients.html',
                controller: 'ingredientsController',
                controllerAs: 'ingredients',
                resolve: {
                    ingredients: function (dataService) {
                        return dataService.getIngredients();
                    }
                }
            });
        }]);
    angular.module('md_meals', ['ui.router'])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('meals', {
                url: '/meals',
                templateUrl: 'src/meals/meals.html',
                controller: 'mealsController',
                controllerAs: 'meals',
                resolve: {
                    meals: function (dataService) {
                        return dataService.getMeals();
                    }
                }
            });
        }]);
    angular.module('md_users', ['ui.router'])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('users', {
                url: '/users',
                templateUrl: 'src/users/users.html',
                controller: 'usersController',
                controllerAs: 'users',
                resolve: {
                    users: function (dataService) {
                        return dataService.getUsers();
                    }
                }
            })
                .state('users_detail', {
                url: '/users/:id',
                templateUrl: 'src/users/userDetail.html',
                controller: 'userDetailController',
                controllerAs: 'user',
                resolve: {
                    details: function ($stateParams, dataService) {
                        console.log($stateParams);
                        var id = $stateParams.id;
                        return dataService.getUser(id);
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
