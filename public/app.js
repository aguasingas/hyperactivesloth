(function(){
    'use strict';

    var app = angular.module('mealApp',['ngRoute']).config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl  : 'home/home.html',
                controller   : 'homeController',
                controllerAs : 'home'
            });

    });

})();
