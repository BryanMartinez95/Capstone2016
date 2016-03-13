'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SampleService, $location, SingleSelect, Enum) {

    $scope.data = {};
    $scope.data.message = "Sample Overview Page";

	$scope.getGrid = function (options) {
		return SampleService.getGrid(options);
	};

	$scope.goToAddSample = function () {
		$location.path("/Sample/" + '0000000-000-000-0000000');
	};

	$scope.goToViewSample = function () {
		$location.path("/Sample/" + $scope.options.selected[0].id);
	};

	$scope.returnToGrid = function () {
		$location.path("/Sample");
	};

    $scope.sampleId = '0000000-000-000-0000000';
    $scope.projectOptions = SingleSelect.Status;
    $scope.deviceOptions = SingleSelect.RoleType;
    /** Value coming from other controllers
        If coming from device then $scope.device will be true
        If coming from project then $scope.project will be true
        If coming from project or device then store object in the projectSelected/deviceSelected
     */
    $scope.fromProject = true;
    $scope.fromDevice = false;

    $scope.tabs = ['general', 'measurements'];
    $scope.activeTab = $scope.tabs[0];
    $scope.toggleTab = function(activeTab) {
        $scope.activeTab = activeTab;
    };

    $scope.addMeasurement = function() {
        var model = {
            value: null,
            unit: {},
            temperature: null,
            testMethod: {},
            isActive: true
        };
        $scope.sample.measurements.push(model);
    };

    $scope.removeMeasurement = function(index) {
        $scope.sample.measurements.splice(index,1);
    };

    $scope.isActive = true;
    $scope.unitOptions = SingleSelect.GridSize;
    $scope.testMethodOptions = SingleSelect.FilterType;
    $scope.sample = {};
    $scope.sample.labId = null;
    $scope.sample.reportingId = null;
    $scope.sample.status = Enum.Status.Active;
    $scope.sample.date = null;
    $scope.sample.project = SingleSelect.Status[0];
    $scope.sample.device = {};
    $scope.sample.comments = null;
    $scope.sample.measurements = [];
});