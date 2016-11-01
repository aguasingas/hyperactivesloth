(function(){
    'use strict';

    angular
        .module('mealApp')
        .controller('ingredientsController', ['dataService', 'ingredients', ingredientsController]);

        function ingredientsController(dataService, ingredients){
            var vm = this;
            vm.Ingredients = ingredients;
        }
})();
