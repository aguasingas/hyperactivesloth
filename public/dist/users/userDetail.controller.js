(function () {
    'use strict';
    angular
        .module('mealApp')
        .controller('userDetailController', ['details', userDetailController]);
    function userDetailController(details) {
        var vm = this;
        vm.details = details;
    }
})();
