'use strict';

angular.module('app').run(function ($rootScope, $location, AuthService, $http, $timeout) {

    AuthService.setUser();

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!AuthService.isAuthenticated() && next.auth) {
            $location.path('/Login');
        }
        else if (next.originalPath === '/Login' && AuthService.isAuthenticated()) {
            $location.path(current.originalPath);
        }
    });
});