'use strict';

angular.module('app').run(function ($rootScope, $location, $routeParams) {

    console.log($routeParams);


    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (!$rootScope.authenticated)
        {
            $location.path('/Login');
        }
    })
});