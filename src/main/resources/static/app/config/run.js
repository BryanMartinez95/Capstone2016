'use strict';

angular.module('app').run(function ($rootScope, $location) {

    $rootScope.$on('$routeChangeStart', function () {
        if (!$rootScope.authenticated)
        {
            $location.path('/Login');
        }
    })
});