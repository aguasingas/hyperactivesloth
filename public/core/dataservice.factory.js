(function(){
    'use strict';

    angular
        .module('mealApp')
        .factory('dataService', ['$http', dataService]);

    function dataService($http){
        var service = {
            getData : getData
        };

        return service;

        function getData(){

            return $http({
                method: 'GET',
                url: 'http://localhost:3000/ping',
                })
                .then(getDataComplete)
                .catch(function(message) {
                   console.log(message);
                });

            function getDataComplete(data) {
                return data;
            }

        }
    }

})();
