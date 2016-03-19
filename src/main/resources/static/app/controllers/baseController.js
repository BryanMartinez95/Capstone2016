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

        //console.log("Auth Check: ", $rootScope.authenticated);
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

        /**
         * sections.accessLevel - 0 = All, 1 = Admin
         */
        $scope.data = {
            logo: {
                url: "/assets/img/SAIT_Logo.png",
                alt: "Logo",
                target: "#/"
            },
            sections: [
                {
                    display: 'Dashboard',
                    accessLevel: 0,
                    destination: '/',
                    icon: 'home'
                },
                {
                    display: 'Device',
                    accessLevel: 0,
                    destination: '/Device',
                    icon: ''
                },
                {
                    display: 'Project',
                    accessLevel: 0,
                    destination: '/Project',
                    icon: ''
                },
                {
                    display: 'Sample',
                    accessLevel: 0,
                    destination: '/Sample',
                    icon: ''
                },
                {
                    display: 'Admin',
                    accessLevel: 1,
                    destination: '',
                    icon: '',
                    subMenu: [
                        {
                            display: 'Client',
                            accessLevel: 1,
                            destination: '#/Admin/Client/Overview',
                            icon: ''
                        },
                        {
                            display: 'Device',
                            accessLevel: 1,
                            destination: '#/Admin/Device/Overview',
                            icon: ''
                        },
                        {
                            display: 'Investigator',
                            accessLevel: 1,
                            destination: '#/Admin/Investigator/Overview',
                            icon: ''
                        },
                        {
                            display: 'Project',
                            accessLevel: 1,
                            destination: '#/Admin/Project/Overview',
                            icon: ''
                        },
                        {
                            display: 'Test Method',
                            accessLevel: 1,
                            destination: '#/Admin/TestMethod/Overview',
                            icon: ''
                        },
                        {
                            display: 'Unit',
                            accessLevel: 1,
                            destination: '#/Admin/Unit/Overview',
                            icon: ''
                        },
                        {
                            display: 'User',
                            accessLevel: 1,
                            destination: '#/Admin/User/Overview',
                            icon: ''
                        }
                    ]
                }
            ]
        };

        $scope.navigateTo = function(path) {
            $location.path(path);
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