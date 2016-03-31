'use strict';

angular.module('app').run(function ($rootScope, $location, AuthService, $http, $timeout) {

    AuthService.setUser();

    $timeout(function () {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            console.log(AuthService.isAuthenticated());
            if (!AuthService.isAuthenticated() && next.auth) {
                console.log("Should go to login @ 3");
                $location.path('/Login');
            }
            if (next.originalPath === '/Login' && AuthService.isAuthenticated()) {
                $location.path(current.originalPath);
            }
        });
    }, 2000);
});