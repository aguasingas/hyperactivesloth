(function(){
    'use strict';

    angular
        .module('mealApp')
        .controller('homeController', ['dataService', homeController]);

    function homeController(dataService){
        var vm = this;

        dataService.getData().then(function(data){
            vm.data = data.data;
        })
    }

})();
