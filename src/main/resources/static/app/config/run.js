'use strict';

angular.module('app').run(function ($http, $route, $rootScope, $location) {

    $rootScope.$on('$locationChangeStart', function (event, next, current) {

        var nextPath = $location.path();
        var nextRoute = $route.routes[nextPath];

        if (nextRoute && nextRoute.auth && !$rootScope.authenticated) {
            $location.path('/Login');
        }

        if ($rootScope.authenticated && next === 'http://localhost:8080/#/Login') {
            $location.path(current);
        }
    })
});