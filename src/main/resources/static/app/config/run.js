'use strict';

angular.module('app').run(function ($http, $route, $rootScope, $location) {

    $rootScope.$on('$locationChangeStart', function (event) {

        var nextPath = $location.path();
        var nextRoute = $route.routes[nextPath];

        console.log(nextPath);
        console.log(nextRoute);

        if (nextRoute && nextRoute.auth && !$rootScope.authenticated) {
            $location.path('/Login');
        }

        if ($rootScope.authenticated && next === 'http://localhost:8080/#/Login') {
            $location.path(current);
        }

        // if (!$rootScope.authenticated)
        // {
        //     event.preventDefault();
        //     $location.path('/Login');
        // }
    })
});