'use strict';

/**
 * Base controller for the entire application.
 */
angular.module('app').controller('BaseController', function ($scope) {

    $scope.data = {};

    /**
     * Information for the logo.
     */
    $scope.data.logo = {
        url: "assets/img/SAIT_Logo.png",
        alt: "Logo",
        target: "/Dashboard"
    };
});
