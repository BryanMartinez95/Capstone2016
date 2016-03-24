'use strict';

/**
 * @ngdoc           controller
 * @memberof        appController
 * @name            BaseController
 *
 * @param {service} $rootScope          A service to access the root scope of the app.
 * @param {service} $scope              A service to hold all the data available on the base scope
 * @param {service} $http               A service to perform AJAX requests
 * @param {service} $location           A service to navigate and modify the URL
 * @param {service} $route              A service to view and modify the current route in the app. See {@link ngRoute} for more information
 * @param {model}   Enum                A collection of Enums
 */
angular.module('appController').controller('BaseController',

    function ($rootScope, $scope, $http, $location, $route, Enum) {

        /**
         * If the user is not signed in an attempts to access the app, redirect back to Login page
         */
        function init() {
            if ($rootScope.authenticated === false) {
                $location.path("#/Login");
            }
        }
        init();

        /**
         * Determine if the current user is an admin
         * @returns {boolean}
         */
        $scope.isCurrentUserAdmin = function() {
            return $scope.currentUser ? $scope.currentUser.roleType === 'ADMIN' : false;
        };

        /**
         * @property {object}   data                        Object used to hold all data accessed in html
         *
         * @property {object}   data.logo                   Object to hold all information pertaining to the app logo
         * @property {string}   data.logo.url               The path to locate the image
         * @property {string}   data.logo.alt               The alternate text to appear in case the image fails to load
         * @property {string}   data.logo.target            The destination the user will be navigated to on clicking the image
         *
         * @property {Object[]} data.sections               The fields that will populate the left side navigation bar
         * @property {string}   data.sections.display       The text to display on the screen
         * @property {Enum[]}   data.sections.accessLevel   Which types of users can view the section
         * @property {string}   data.sections.destination   The route that will be navigated to on click
         * @property {string}   data.sections.icon          The Font Awesome icon associated with the section
         * @property {Object[]} data.sections.subMenu       A collection of sections that are accessed from a dropdown menu
         *
         * @property {Object[]} data.nav                    The fields that will populate the top navigation bar
         * @property {string}   data.nav.display            The text to display on the screen
         * @property {Enum[]}   data.nav.accessLevel        Which types of users can view the section
         * @property {string}   data.nav.destination        The route that will be navigated to on click
         * @property {string}   data.nav.icon               The Font Awesome icon associated with the section
         * @property {Object[]} data.nav.subMenu            A collection of sections that are accessed from a dropdown menu
         *
         * @property {boolean}  data.expanded               A toggle to track if the left side navigation dropdown menu is expanded or not
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
                    accessLevel: [
                        Enum.RoleType.User.value,
                        Enum.RoleType.Admin.value
                    ],
                    destination: '/Dashboard',
                    icon: 'fa-home'
                },
                {
                    display: 'Device',
                    accessLevel: [
                        Enum.RoleType.User.value,
                        Enum.RoleType.Admin.value
                    ],
                    destination: '/Device',
                    icon: 'fa-desktop'
                },
                {
                    display: 'Project',
                    accessLevel: [
                        Enum.RoleType.User.value,
                        Enum.RoleType.Admin.value
                    ],
                    destination: '/Project',
                    icon: 'fa-clipboard'
                },
                {
                    display: 'Sample',
                    accessLevel: [
                        Enum.RoleType.User.value,
                        Enum.RoleType.Admin.value
                    ],
                    destination: '/Sample',
                    icon: 'fa-flask'
                },
                {
                    display: 'Admin',
                    accessLevel: [
                        Enum.RoleType.Admin.value
                    ],
                    destination: '',
                    icon: 'fa-user',
                    subMenu: [
                        {
                            display: 'Client',
                            accessLevel: [
                                Enum.RoleType.Admin.value
                            ],
                            destination: '/Admin/Client/Overview',
                            icon: 'fa-truck'
                        },
                        {
                            display: 'Device',
                            accessLevel: [
                                Enum.RoleType.Admin.value
                            ],
                            destination: '/Admin/Device/Overview',
                            icon: 'fa-desktop'
                        },
                        {
                            display: 'Investigator',
                            accessLevel: [
                                Enum.RoleType.Admin.value
                            ],
                            destination: '/Admin/Investigator/Overview',
                            icon: 'fa-users'
                        },
                        {
                            display: 'Project',
                            accessLevel: [
                                Enum.RoleType.Admin.value
                            ],
                            destination: '/Admin/Project/Overview',
                            icon: 'fa-clipboard'
                        },
                        {
                            display: 'Test Method',
                            accessLevel: [
                                Enum.RoleType.Admin.value
                            ],
                            destination: '/Admin/TestMethod/Overview',
                            icon: 'fa-folder-open'
                        },
                        {
                            display: 'Unit',
                            accessLevel: [
                                Enum.RoleType.Admin.value
                            ],
                            destination: '/Admin/Unit/Overview',
                            icon: 'fa-recycle'
                        },
                        {
                            display: 'User',
                            accessLevel: [
                                Enum.RoleType.Admin.value
                            ],
                            destination: '/Admin/User/Overview',
                            icon: 'fa-users'
                        }
                    ]
                }
            ],
            nav: [
                {
                    display: 'Account',
                    accessLevel: 0,
                    destination: '',
                    icon: 'fa-wrench',
                    subMenu: [
                        {
                            display: 'Logout',
                            accessLevel: 0,
                            destination: '/Logout',
                            icon: ''
                        }
                    ]
                }
            ],
            expanded: false
        };

        /**
         * Close any open dropdown menus and navigate to a new section of the app
         * @param {string} path The path to navigate to
         */
        $scope.navigateTo = function(path) {
            $scope.data.expanded = false;
            $location.path(path);
        };

        /**
         * Used for ng-show/ng-if.
         * Evaluate if an object is empty, null, or undefined or not
         *
         * @param {object} varToCheck Variable to check
         */
        $scope.objectEmpty = function(varToCheck){
            return (varToCheck === undefined || varToCheck == null || varToCheck === {});
        };

        /**
         * Authenticate the user attempting to access this page is a valid user
         * @param callback
         */
        function authenticate(callback) {

            $http.get('/Api/User/Principle').success(function (data) {
                $rootScope.authenticated = !!data.name;
                callback && callback();
                $http.get('/Api/User/CurrentUser').success(function(user) {
                    $scope.currentUser = user;
                })
            }).error(function () {
                $rootScope.authenticated = false;
                callback && callback();
            });

        }

        /**
         * @property {Object} credentials           The credentials to login with. Remove for implementation
         * @property {string} credentails.username  The username to login with
         * @property {string} credentials.password  The password to login with
         */
        $scope.credentials = {
            username: 'admin@gmail.com',
            password: 'password'
        };

        /**
         * Log user into the application
         */
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

        /**
         * Log user out of the application
         */
        $scope.logout = function () {
            $http.post('/logout', {}).success(function () {
                $rootScope.authenticated = false;
                $location.path("/Login");
            }).error(function (data) {
                $rootScope.authenticated = false;
            });
        };


        authenticate();
    });