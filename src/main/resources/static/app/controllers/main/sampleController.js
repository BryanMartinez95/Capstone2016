'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SingleSelect, Enum) {

    $scope.data = {};
    $scope.data.message = "This is the Sample Overview Page";

    $scope.projectOptions = SingleSelect.Status;
    $scope.deviceOptions = SingleSelect.RoleType;
    /** Value coming from other controllers
        If coming from device then $scope.device will be true
        If coming from project then $scope.project will be true
        If coming from project or device then store object in the projectSelected/deviceSelected
     */
    $scope.fromProject = true;
    $scope.fromDevice = false;

    $scope.tabs = ['overview', 'measurements'];
    $scope.activeTab = $scope.tabs[0];
    $scope.toggleTab = function($event, activeTab) {
        $scope.activeTab = activeTab;
    };

    $scope.isActive = true;

    $scope.sample = {};
    $scope.sample.labId = null;
    $scope.sample.reportingId = null;
    $scope.sample.status = Enum.Status.Active;
    $scope.sample.date = null;
    $scope.sample.project = SingleSelect.Status[0];
    $scope.sample.device = {};
    $scope.sample.comments = null;
});