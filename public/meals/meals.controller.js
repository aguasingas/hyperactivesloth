(function(){
    'use strict';

    angular
        .module('mealApp')
        .controller('mealsController', ['dataService', 'meals', mealsController]);

        function mealsController(dataService, meals){
            var vm = this;
            vm.Meals = meals;
        }
})();
