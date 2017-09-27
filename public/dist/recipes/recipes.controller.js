(function () {
    'use strict';
    angular
        .module('mealApp')
        .controller('recipesController', ['dataService', 'recipes', recipesController]);
    function recipesController(dataService, recipes) {
        var vm = this;
        vm.Recipes = recipes;
    }
})();
