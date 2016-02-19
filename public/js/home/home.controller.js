(function(){
    'use strict';

    angular
        .module('mealApp')
        .controller('homeController', ['dataService', homeController]);

    function homeController(dataService){
        var vm = this;

        vm.data = dataService.getData();
    }

})();
