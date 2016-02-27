'use strict';

angular.module('appController').controller('BaseController',

    function ($rootScope, $scope, $http, $location, $route) {

        //$rootScope.$watch(
        //    function () {
        //        return $location.path();
        //    }, function (newValue, oldValue) {
        //        if ($rootScope.authenticated === false && newValue !== '/Login') {
        //            $location.path('/Login');
        //        }
        //    });

        console.log("Auth Check: ", $rootScope.authenticated);
        if ($rootScope.authenticated === false)
        {
            $location.path("/Login");
        }

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

        $scope.data = {};
        $scope.selectedRow = null;
        $scope.selectedRowId = null;

        /**
         * Information for the logo.
         */
        $scope.data.logo = {
            url: "/assets/img/SAIT_Logo.png",
            alt: "Logo",
            target: "/Dashboard"
        };

        /**
         * Used for ng-show/ng-if.
         * Evaluate if an object is empty, null, or undefined or not
         *
         * @param varToCheck - variable to check
         */
        $scope.objectEmpty = function(varToCheck){
            return (varToCheck === undefined || varToCheck == null || varToCheck === {});
        };

        $scope.reevaluateSidebar = function(){};

        /**
         * Deselect a row in the grid.
         */
        $scope.deselect = function(){
            $scope.selectedRow = null;
            $scope.rowSelected = false;
            $scope.selectedRowId = null;
        };

        $scope.rowClick = function(obj){
            $scope.selectedRow = obj;
            $scope.rowSelected = true;
            $scope.selectedRowId = obj.id.value;
        };

        $scope.clearRowClick = function() {
            $scope.selectedRow = null;
            $scope.rowSelected = null;
            $scope.selectedRowId = null;
        };

        var authenticate = function (callback) {

            $http.get('/Api/User/Principle').success(function (data) {
                $rootScope.authenticated = !!data.name;
                callback && callback();
            }).error(function () {
                $rootScope.authenticated = false;
                callback && callback();
            });

        };

        authenticate();

        $scope.credentials = {};
        $scope.credentials.username = "admin@gmail.com";
        $scope.credentials.password = "password";
        $scope.login = function () {
            var data = 'username=' + $scope.credentials.username + '&password=' + $scope.credentials.password +
                '&remember-me=' + $scope.rememberMe;
            $http.post('login', data, {
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                }
            }).success(function (data) {
                authenticate(function () {
                    if ($rootScope.authenticated) {
                        $location.path("/");
                        $scope.error = false;
                        $rootScope.authenticated = true;
                    } else {
                        $location.path("/Login");
                        $scope.error = true;
                        $rootScope.authenticated = false;
                    }
                });
            }).error(function (data) {
                $location.path("/Login");
                $scope.error = true;
                $rootScope.authenticated = false;
            })
        };

        $scope.logout = function () {
            $http.post('/logout', {}).success(function () {
                $rootScope.authenticated = false;
                $location.path("/Login");
            }).error(function (data) {
                $rootScope.authenticated = false;
            });
        };

    });