(function(){
    'use strict';

    angular
        .module('mealApp')
        .factory('dataService', ['$http', dataService]);

    function dataService($http){
        var baseUrl = 'http://localhost:3000';

        var service = {
            addUser : addUser
        };

        return service;

        function addUser(user){
            $http.post( baseUrl + '/user', user).then(success, error);

            function success(res){
                var error = res.data.error;

                if(error.code === 11000){
                    console.log(error.errmsg);
                } else {
                    console.log('User Added');
                }

            }

            function error(res){
                console.log('Error adding new user');
                console.log(res);
            }
        }
    }

})();
