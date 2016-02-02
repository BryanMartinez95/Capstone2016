'use strict';

/**
 * Base controller for the entire application.
 */
angular.module('appController').controller('BaseController', function ($scope) {

    $scope.data = {};
    $scope.selectedRow = null;
    $scope.selectedRowId = null;



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
     * Track the current state
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
        $scope.selectedRowId = obj.id;
    };
});
