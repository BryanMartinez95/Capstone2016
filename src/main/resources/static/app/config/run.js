'use strict';

angular.module('app').run(function ($rootScope, $location, AuthService, $http, $timeout) {

    // AuthService.setUser();

    $http.get('/Api/User/CurrentUser').success(function (data) {
        console.log(data);
        if (!!data.email) {
            $rootScope.isAuthenticated = true;
        }
        else {
            $rootScope.isAuthenticated = false;
        }
        callback && callback();
    });
    
    AuthService.setUser();

    // $timeout(function () {
    $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if (!$rootScope.isAuthenticated && next.auth) {
                $location.path('/Login');
            }
            if (next.originalPath === '/Login' && $rootScope.isAuthenticated) {
                $location.path(current.originalPath);
            }
        });
    // }, 2000);
});