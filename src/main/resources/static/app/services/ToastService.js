'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name ToastService
 *
 * @param {service} $mdToast       A service that facilitates the displaying of ngMaterial's toast notifications
 * @description A service to handle the displaying of toast notifications.
 */
angular.module('appService').factory('ToastService', ['$mdToast', function ($mdToast) {

    /**
     * @property {Function} success       {@link success} for more information
     * @property {Function} error         {@link error} for more information
     */
    return ({
        success: success,
        error: error
    });

    /**
     * Displays a success message with a green background
     * @param {string} message - the message to be displayed.
     */
    function success(message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .theme('success-toast')
                .position('top right')
        )
    }

    /**
     * Displays an error message with a red background
     * @param {string} message - the message to be displayed.
     */
    function error(message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .theme('error-toast')
                .position('top right')
        )
    }
}]);