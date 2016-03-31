'use strict';

angular.module('app').run(function ($rootScope, $location, AuthService) {

    if (AuthService.isAuthenticated) {
        AuthService.setUser();
    }

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        console.log("I'm here");
        if (!AuthService.isAuthenticated)
        {
            $location.path('/Sample');
        }
    });


});