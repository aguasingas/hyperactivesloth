(function(){
    'use strict';

    angular
        .module('mealApp')
        .controller('homeController', ['dataService', 'users', 'recipes', homeController]);

        function homeController(dataService, users, recipes){
            var vm = this;

            vm.Users = users;
            vm.Recipes = recipes;
            vm.newUser = {};
            vm.addUser = addUser;
            vm.newMeal = {};
            vm.addMeal = addMeal;
            vm.newRecipe = {};
            vm.addRecipe = addRecipe;
            vm.datePicker = {
                popup : false,
                toggle : function(){
                    vm.datePicker.popup = true;
                }
            };

            /**
             * Calls dataService.addUser and clears form.
             */
            function addUser(){
                dataService.addUser(vm.newUser);
                vm.newUser = {};
            }

            /**
             * Calls dataService.addMeal and clears form.
             */
            function addMeal(){
                dataService.addMeal(vm.newMeal);
                vm.newMeal = {};
            }

            /**
             * Calls dataService.addRecipe and clears form.
             */
            function addRecipe(){
                dataService.addRecipe(vm.newRecipe);
                vm.newRecipe = {};
            }


        }

})();
