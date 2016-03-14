'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SampleService, $route, $routeParams, $location, SingleSelect, Enum) {

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
});

angular.module('appController').controller('SampleDetailController', function ($scope, SampleService, $route, $routeParams, $location, SingleSelect, Enum) {

	$scope.projectOptions = SingleSelect.Status;
	$scope.deviceOptions = SingleSelect.RoleType;
	/** Value coming from other controllers
	 If coming from device then $scope.device will be true
	 If coming from project then $scope.project will be true
	 If coming from project or device then store object in the projectSelected/deviceSelected
	 */
	$scope.fromProject = false;
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

	$scope.data.param = $routeParams.Id;

	$scope.findOne = function() {
		SampleService.findOne($scope.data.param).then(function (resp) {
			$scope.sample.id = resp.id;
			$scope.sample.measurements = resp.measurements;
			$scope.sample.labId = resp.labId;
			$scope.sample.date = resp.date;
			getBooleanStatus(resp.status);
			$scope.sample.comment = resp.comment;
			$scope.sample.deviceId = resp.deviceId;
			$scope.sample.deviceName = resp.deviceName;
			$scope.sample.projectId = resp.projectId;
			$scope.sample.projectName = resp.projectName;
		});
	};

	$scope.createSample = function () {
		var sample = new Sample();

		sample.measurements = $scope.sample.measurements;
		sample.labId = $scope.sample.labId;
		sample.date = $scope.sample.date;
		sample.status = getBooleanStatus($scope.sample.status);
		sample.comment = $scope.sample.comment;
		sample.deviceId = $scope.sample.deviceId;
		sample.deviceName = $scope.sample.deviceName;
		sample.projectId = $scope.sample.projectId;
		sample.projectName = $scope.sample.projectName;
	};

	$scope.saveSample = function () {
		var sample = new Sample();

		sample.id = $scope.sample.id;
		sample.measurements = $scope.sample.measurements;
		sample.labId = $scope.sample.labId;
		sample.date = $scope.sample.date;
		sample.status = getBooleanStatus($scope.sample.status);
		sample.comment = $scope.sample.comment;
		sample.deviceId = $scope.sample.deviceId;
		sample.deviceName = $scope.sample.deviceName;
		sample.projectId = $scope.sample.projectId;
		sample.projectName = $scope.sample.projectName;
	};

	function getBooleanStatus(status) {
		$scope.isActive = status === Enum.Status.Active.value;
	}

	$scope.returnToGrid = function () {
		$location.path("/Sample");
	};
});