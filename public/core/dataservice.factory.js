(function(){
    'use strict';

    angular
        .module('mealApp')
        .factory('dataService', ['$http', dataService]);

    function dataService($http){

        var baseUrl = '';

        var service = {
            addUser     : addUser,
            addRecipe   : addRecipe,
            addMeal     : addMeal,
            getUsers    : getUsers,
            getMeals    : getMeals,
            getRecipes  : getRecipes,
            getUser     : getUser,
        };

        return service;

        /**
         * Stores new user in Users Collection
         * @param {object} user User object
         */
        function addUser(user){
            $http.post( baseUrl + '/users', user).then(success, error);

            function success(res){
                var error = res.data.error;

                if(error && error.code === 11000){
                    console.log(error.errmsg);
                } else {
                    console.log('User Added');
                }

            }

            function error(res){
                console.log('Error adding new user');
                console.log(res);
            }
        }

        /**
         * Stores new recipe in Recipes Collection
         * @param {object} recipe Recipe Object
         */
        function addRecipe(recipe){
            $http.post( baseUrl + '/recipes', recipe).then(success, error);

            function success(res){

                var error = res.data.error;

                if(error && error.code === 11000){
                    console.log(error.errmsg);
                } else {
                    console.log('Recipe Added');
                }

            }

            function error(res){
                console.log('Error adding new recipe');
                console.log(res);
            }
        }

        function addMeal(meal){
            $http.post( baseUrl + '/meals', meal).then(success, error);

            function success(res){

                var error = res.data.error;

                if(error && error.code === 11000){
                    console.log(error.errmsg);
                } else {
                    console.log('Recipe Added');
                }

            }

            function error(res){
                console.log('Error adding new recipe');
                console.log(res);
            }
        }

        /**
         * Retrieves a list of Users from Users Collection
         * @return {array} Array of User Objects
         */
        function getUsers(){
            return $http.get( baseUrl + '/users').then(success, error);

            function success(res){
                return res.data.data;
            }

            function error(res){
                console.log('Error adding new recipe');
                console.log(res);
            }
        }

        /**
         * Retrieves Meals/Meal from Meals Collection
         * @param  {integer} mealId Meal.Id property for retrieving single Meal
         * @return {array} Array of Meal Objects
         */
        function getMeals(){
            return $http.get( baseUrl + '/meals').then(success, error);

            function success(res){
                return res.data.data;
            }

            function error(res){
                console.log('Error adding new recipe');
                console.log(res);
            }
        }

        /**
         * Retrieves Recipes/Recipe from Recipes Collection
         * @param  {integer} recipeId Recipe.Id property for retrieving single Recipe
         * @return {array} Array of Recipe Objects
         */
        function getRecipes(){
            return $http.get( baseUrl + '/recipes').then(success, error);

            function success(res){
                return res.data.data;
            }

            function error(res){
                console.log('Error adding new recipe');
                console.log(res);
            }
        }

        function getUser(id){
            return $http.get( baseUrl + '/users/' + id).then(success, error);

            function success(res){
                return res.data.user;
            }

            function error(res){
                console.log('Error adding new recipe');
                console.log(res);
            }
        }
    }

})();
