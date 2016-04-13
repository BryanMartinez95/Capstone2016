'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @param {service} $http
 * @param {service} $location
 * @param {service} $rootScope
 * @description
 *  A service to authenticate and hold information on the currently logged in user
 */
angular.module('appService').factory('AuthService',
    ['$http', '$location', '$rootScope',
        function AuthServiceProvider($http, $location, $rootScope) {

            /**
             * @private
             * @property {Object} user Information on the current user
             */
            var user = {
                isAuthenticated: false,
                name: '',
                isAdmin: false
            };

            /**
             * Authenticate the current user
             * @public
             * @function authenticate
             * @memberof AuthService
             * @param {function} callback
             */
            function authenticate(callback) {
                $http.get('/Api/User/CurrentUser').success(function (data) {
                    if (!!data.email) {
                        user.isAuthenticated = true;
                        user.name = data.firstName + ' ' + data.lastName;
                        user.isAdmin = data.roleType === 'ADMIN';
                        // $rootScope.isAuthenticated = true;
                    }
                    callback && callback();
                }).error(function () {
                    user.isAuthenticated = false;
                    user.name = '';
                    user.isAdmin = false;
                    // $rootScope.isAuthenticated = false;
                    $location.path('#/Login');
                    callback && callback();
                });
            }

            /**
             * @public
             * @property {Object} authService A collection of public functions
             */
            var authService = {
                checkAuth: authenticate
            };

            /**
             * Function to initialize the AuthService
             * @public
             * @function init
             * @memberof AuthService
             * @param {Boolean} isAuthenticated If the user if authenticated
             * @param {String} userName The current user's username
             * @param {Boolean} isAdmin If the current user has administrator permissions
             */
            authService.init = function (isAuthenticated, userName, isAdmin) {
                user.isAuthenticated = isAuthenticated;
                user.name = userName;
                user.isAdmin = isAdmin;

            };

            /**
             * Get the current user's username
             * @public
             * @function getUsername
             * @memberof AuthService
             * @returns {string}
             */
            authService.getUsername = function () {
                return user.name;
            };

            /**
             * Get if the current user is has Administrator permission
             * @public
             * @function isAdmin
             * @memberof AuthService
             * @returns {boolean}
             */
            authService.isAdmin = function () {
                return user.isAdmin;
            };

            /**
             * If the current user is authenticated
             * @public
             * @function isAuthenticated
             * @memberof AuthService
             * @returns {boolean}
             */
            authService.isAuthenticated = function () {
                return user.isAuthenticated;
            };

            /**
             * Login to the application
             * @public
             * @function login
             * @memberof AuthService
             * @param {String} username The user's username
             * @param {String} password The user's password
             * @param {Boolean} rememberMe If the application should remember the user
             */
            authService.login = function (username, password, rememberMe) {
                var data = 'username=' + username + '&password=' + password + '&remember-me=' + rememberMe;
                $http.post('login', data, {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                }).success(function (data) {
                    authenticate(function () {
                        if (user.isAuthenticated) {
                            $location.path("#/");
                            user.isAuthenticated = true;
                            // $rootScope.isAuthenticated = true;
                        } else {
                            $location.path("#/Login");
                            user.isAuthenticated = false;
                            user.name = '';
                            user.isAdmin = false;
                            // $rootScope.isAuthenticated = false;
                        }
                    });
                }).error(function (data) {
                    $location.path("#/Login");
                    user.isAuthenticated = false;
                    user.name = '';
                    user.isAdmin = false;
                    // $rootScope.isAuthenticated = false;
                })
            };

            /**
             * Logout of the application
             * @public
             * @function logout
             * @memberof AuthService
             */
            authService.logout = function () {
                $http.post('/logout', {}).success(function () {
                    user.isAuthenticated = false;
                    user.name = '';
                    user.isAdmin = false;
                    $rootScope.isAuthenticated = false;
                    $location.path('#/Login');
                }).error(function (data) {
                    user.isAuthenticated = false;
                    user.name = '';
                    user.isAdmin = false;
                    $rootScope.isAuthenticated = false;
                    $location.path('#/Login');
                });
            };

            return authService;
        }]);