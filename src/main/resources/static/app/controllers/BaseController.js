'use strict';

/**
 * Base controller for the entire application.
 */
angular.module('appController').controller('BaseController', function ($scope) {

    $scope.data = {};

    /**
     * Information for the logo.
     */
    $scope.data.logo = {
        url: "assets/img/SAIT_Logo.png",
        alt: "Logo",
        target: "/Dashboard"
    };

    /**
     * Views that can be displayed in the section
     * @type {string[]}
     */
    var states = ['grid','add','edit','detail'];
    /**
     * Tracj the current state
     * @type {string}
     */
    $scope.activeView = states[0];
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
});
