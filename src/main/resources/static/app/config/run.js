'use strict';

angular.module('app').run(function ($http, $rootScope, $location) {

    $rootScope.$on('$locationChangeStart', function (event, next, current) {

        //console.log("Run");
        //console.log("event", event);
        //console.log("next", next);
        //console.log("current", current);

        if ($rootScope.authenticated === false)
        {
            $location.path('/Login');
        }
        if ($rootScope.authenticated && next === 'http://localhost:8080/#/Login')
        {
            $location.path(current);
        }
    })
});