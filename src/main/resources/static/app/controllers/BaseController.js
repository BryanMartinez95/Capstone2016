'use strict';

/**
 * Base controller for the entire application.
 */
angular.module('appController').controller('BaseController', function ($scope, $location) {

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

    $scope.clearRowClick = function() {
        $scope.selectedRow = null;
        $scope.rowSelected = null;
        $scope.selectedRowId = null;
    };

    $scope.isCurrentUserAdmin = function() {
        return $scope.currentUser ? $scope.currentUser.roleType === 'ADMIN' : false;
    };

    $scope.adminSection = false;

    $scope.adminClicked = function() {
        $scope.adminSection = $scope.adminSection === false;
    };

    $scope.navigateToView = function(path) {
        $location.path(path);
    }
});
