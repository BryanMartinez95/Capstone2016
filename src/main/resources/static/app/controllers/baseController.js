'use strict';

/**
 * @ngdoc           controller
 * @memberof        appController
 * @name            BaseController
 *
 * @param {service} $scope              A service to hold all the data available on the base scope
 * @param {service} $location           A service to navigate and modify the URL
 * @param {service} AuthService         A service to handle authentication
 * @param {service} LoadingService      A service to handle the loading bar
 * @param {service} SectionDisplay      A service to handle active section toolbar
 * @param {service} GridService         A service to handle all communication with grids
 * @param {factory} Icons               A factory to manage all icons used in the app
 */
angular.module('appController').controller('BaseController',
    ['$scope', '$location', 'AuthService', 'LoadingService', 'SectionDisplay', 'GridService', 'Icons',
        function ($scope, $location, AuthService, LoadingService, SectionDisplay, GridService, Icons) {

            /**
             * @property {object}   data                        Object used to hold all data accessed in html
             *
             * @property {object}   data.logo                   Object to hold all information pertaining to the app logo
             * @property {string}   data.logo.url               The path to locate the image
             * @property {string}   data.logo.alt               The alternate text to appear in case the image fails to load
             * @property {string}   data.logo.target            The destination the user will be navigated to on clicking the image
             *
             * @property {boolean}  data.expanded               A toggle to track if the left side navigation dropdown menu is expanded or not
             */

            if (!AuthService.isAuthenticated()) {
                AuthService.checkAuth(function () {
                    if (!AuthService.isAuthenticated() && $location.url() !== '/Login') {
                        $location.path('#/Login');
                    }
                });
            }

            var convertToClass = function () {
                var arr = SectionDisplay.getCurrent().toLowerCase().split(' ');
                var c = '';
                var isAdmin = false;
                arr.forEach(function (item) {
                    if (item === 'admin')
                        isAdmin = true;
                    c += item + ' ';
                });
                return isAdmin ? 'admin' : c.trim();
            };

            $scope.data = {
                logo: {
                    url: "/assets/img/sait_logo_wide.png",
                    alt: "Logo",
                    target: "#/"
                },
                expand: true,
                selectedSection: SectionDisplay.getCurrent(),
                selectedSectionClass: convertToClass()
            };

            /**
             * Close any open dropdown menus and navigate to a new section of the app
             * @param {string} path The path to navigate to
             */
            $scope.navigateTo = function (path, title) {
                SectionDisplay.update(title);
                $scope.data.selectedSection = SectionDisplay.getCurrent();
                $scope.data.selectedSectionClass = convertToClass();
                $location.path(path);
            };

            /**
             * Used for ng-show/ng-if.
             * Evaluate if an object is empty, null, or undefined or not
             *
             * @param {object} varToCheck Variable to check
             */
            $scope.objectEmpty = function (varToCheck) {
                return (varToCheck === undefined || varToCheck == null || varToCheck === {});
            };

                        $scope.toggleDropdown = function () {
                $scope.data.dropdownExpanded = !$scope.data.dropdownExpanded;
            };

            $scope.isToggleOpen = function () {
                return $scope.data.dropdownExpanded;
            };

            $scope.login = function () {
                AuthService.login($scope.credentials.username, $scope.credentials.password, $scope.credentials.rememberMe);
            };

            $scope.logout = function () {
                AuthService.logout();
            };

            $scope.isCurrentUserAdmin = function () {
                return AuthService.isAdmin();
            };

            $scope.userName = function () {
                return AuthService.getUsername();
            };

            $scope.isAuthenticated = function () {
                return AuthService.isAuthenticated();
            };

            $scope.isLoading = LoadingService.getStatus();

            $scope.icons = Icons.getIcons();

            $scope.getNumberOfSelectedRows = function () {
                return GridService.getSelectedRows().length;
            }

        }]);