'use strict';

/**
 * @ngdoc           controller
 * @memberof        appController
 * @name            BaseController
 *
 * @param {service} $scope              A service to hold all the data available on the base scope
 * @param {service} $location           A service to navigate and modify the URL
 * @param {service} $route              A service to view and modify the current route in the app. See {@link ngRoute} for more information
 * @param {model}   Enum                A collection of Enums
 */
angular.module('appController').controller('BaseController',

    function ($scope, $location, AuthService) {

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

        // AuthService.setUser();

        if (!AuthService.isAuthenticated())
        {
            $location.path('/Login');
        }

        $scope.data = {
            logo: {
                url: "/assets/img/SAIT_Logo.png",
                alt: "Logo",
                target: "#/"
            },
            expanded: false,
            dropdownExpanded: false
        };

        /**
         * Close any open dropdown menus and navigate to a new section of the app
         * @param {string} path The path to navigate to
         */
        $scope.navigateTo = function (path) {
            $scope.data.expanded = false;
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

        /**
         * @property {Object} credentials           The credentials to login with. Remove for implementation
         * @property {string} credentails.username  The username to login with
         * @property {string} credentials.password  The password to login with
         */
        $scope.credentials = {
            username: 'admin@gmail.com',
            password: 'password'
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


    });