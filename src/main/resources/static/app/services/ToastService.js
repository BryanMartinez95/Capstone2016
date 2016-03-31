'use strict';

angular.module('appService').factory('ToastService', function ($mdToast) {
    return ({
        success: success,
        error: error
    });

    function success(message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .theme('success')
                .position('top right')
        )
    }

    function error(message) {
        $mdToast.show(
            $mdToast.simple()
                .textContent(message)
                .theme('red')
                .position('top right')
        )
    }
});