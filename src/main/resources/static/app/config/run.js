'use strict';

angular.module('app').run(function ($rootScope, $location, AuthService, $http, $timeout) {

    // AuthService.setUser();

    $timeout(function () {
        $http.get('/Api/User/CurrentUser').success(function (data) {
            $rootScope.isAuthenticated = !!data.email;
        });
    }, 200);

    AuthService.setUser();

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!$rootScope.isAuthenticated && next.auth) {
            $location.path('/Login');
        }
        if (next.originalPath === '/Login' && $rootScope.isAuthenticated) {
            $location.path(current.originalPath);
        }
    });
});