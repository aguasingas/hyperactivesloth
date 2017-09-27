(function () {
    'use strict';
    angular
        .module('mealApp')
        .controller('usersController', ['dataService', 'users', usersController]);
    function usersController(dataService, users) {
        var vm = this;
        vm.Users = users;
    }
})();
