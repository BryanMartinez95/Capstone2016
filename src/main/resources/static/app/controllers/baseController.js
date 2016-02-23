'use strict';

angular.module('appController').controller('BaseController',

    function ($rootScope, $scope, $http, $location, $route) {

        $scope.tab = function (route) {
            return $route.current && route === $route.current.controller;
        };

        $scope.isCurrentUserAdmin = function() {
            return $scope.currentUser ? $scope.currentUser.roleType === 'ADMIN' : false;
        };

        $scope.adminSection = false;

        $scope.adminClicked = function() {
            $scope.adminSection = $scope.adminSection === false;
        };

        var authenticate = function (callback) {

            $http.get('/Api/User/Principle').success(function (data) {
                if (data.name) {
                    $rootScope.authenticated = true;
                } else {
                    $rootScope.authenticated = false;
                }
                callback && callback();
            }).error(function () {
                $rootScope.authenticated = false;
                callback && callback();
            });

        };

        authenticate();

        $scope.credentials = {};
        $scope.login = function () {
            console.log("login()");
            var data = 'username=' + $scope.credentials.username + '&password=' + $scope.credentials.password +
                '&remember-me=' + $scope.rememberMe;
            $http.post('login', data, {
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                }
            }).success(function (data) {
                authenticate(function () {
                    if ($rootScope.authenticated) {
                        console.log("Login succeeded");
                        $location.path("/");
                        $scope.error = false;
                        $rootScope.authenticated = true;
                    } else {
                        console.log("Login failed with redirect");
                        $location.path("/Login");
                        $scope.error = true;
                        $rootScope.authenticated = false;
                    }
                });
            }).error(function (data) {
                console.log("Login failed");
                $location.path("/Login");
                $scope.error = true;
                $rootScope.authenticated = false;
            })
        };

        $scope.logout = function () {
            $http.post('/logout', {}).success(function () {
                console.log("Logout succeeded");
                $rootScope.authenticated = false;
                $location.path("/Login");
            }).error(function (data) {
                console.log("Logout failed");
                $rootScope.authenticated = false;
            });
        }

        console.log($scope);
        console.log($rootScope);
    });