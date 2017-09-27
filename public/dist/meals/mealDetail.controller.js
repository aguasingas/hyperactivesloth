(function () {
    'use strict';
    angular
        .module('mealApp')
        .controller('mealDetailController', ['$routeParams', mealDetailController]);
    function mealDetailController($routeParams) {
        var vm = this;
    }
})();
