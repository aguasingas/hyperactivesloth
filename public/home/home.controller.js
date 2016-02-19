(function(){
    'use strict';

    angular
        .module('mealApp')
        .controller('homeController', ['dataService', homeController]);

        function homeController(dataService){
            var vm = this;

            vm.newUser = {};
            vm.addUser = addUser;

            function addUser(){
                console.log(vm.newUser);
                vm.newUser = {};
            }

            dataService.getData().then(function(data){
                vm.data = data.data;
            })
        }

})();
