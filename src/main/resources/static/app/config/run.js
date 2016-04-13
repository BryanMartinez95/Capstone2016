'use strict';

angular.module('app').run(
    ['$rootScope', '$location', 'AuthService', '$http', '$timeout',
        function ($rootScope, $location, AuthService, $http, $timeout) {

            AuthService.checkAuth();

            $timeout(function () {
                $rootScope.$on("$routeChangeStart", function (event, next, current) {
                    if (!AuthService.isAuthenticated() && next.auth) {
                        $location.path('/Login');
                    }
                    if (next.originalPath === '/Login' && AuthService.isAuthenticated) {
                        $location.path(current.originalPath);
                    }
                }, 2000);
            });
        }]);