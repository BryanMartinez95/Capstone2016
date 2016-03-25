'use strict';

angular.module('app').run(function ($rootScope, $location) {

    if ($rootScope.authenticated)
    {
        $location.path('/Dashboard');
    }

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if (!$rootScope.authenticated)
        {
            $location.path('/Login');
        }
        console.log(next);
    })
});