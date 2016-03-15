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

	$scope.goToEditSample = function () {
		$location.path("/Sample/" + $scope.options.selected[0].id);
	};
});

angular.module('appController').controller('SampleAddController', function ($scope, SampleService, $route, $routeParams, $location, SingleSelect, Enum) {

	$scope.deviceOptions = {
		apiUrl: "/Api/Device/SingleSelect"
	};
	$scope.selectedDevice = $scope.deviceOptions[0];

	$scope.projectOptions = {
		apiUrl: "/Api/Project/SingleSelect"
	};
	$scope.selectedProject = $scope.projectOptions[0];

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
	$scope.sample.measurements = [];
	$scope.sample.date = null;
	$scope.sample.status = Enum.Status.Active;
	$scope.sample.comments = null;

	$scope.save = function () {
		var sample = new Sample();

		sample.measurements = $scope.sample.measurements;
		sample.labId = $scope.sample.labId;
		sample.date = $scope.sample.date;
		sample.status = getBooleanStatus($scope.sample.status);
		sample.comment = $scope.sample.comment;
		sample.deviceId = $scope.selectedDevice.value;
		sample.deviceName = $scope.selectedDevice.display;
		sample.projectId = $scope.selectedProject.display.value;
		sample.projectName = $scope.selectedProject.display;
	};

	function getBooleanStatus(status) {
		$scope.isActive = status === Enum.Status.Active.value;
	}

	$scope.cancel = function () {
		$location.path("/Sample");
	};
});

angular.module('appController').controller('SampleEditController', function ($scope, SampleService, $route, $routeParams, $location, SingleSelect, Enum) {

	$scope.deviceOptions = {
		apiUrl: "/Api/Device/SingleSelect"
	};
	$scope.selectedDevice = $scope.deviceOptions[0];

	$scope.projectOptions = {
		apiUrl: "/Api/Project/SingleSelect"
	};
	$scope.selectedProject = $scope.projectOptions[0];

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

	$scope.isActive = false;
	$scope.unitOptions = SingleSelect.GridSize;
	$scope.testMethodOptions = SingleSelect.FilterType;
	$scope.sample = {};
	$scope.sample.id = null;
	$scope.sample.labId = null;
	$scope.sample.reportingId = null;
	$scope.sample.measurements = [];
	$scope.sample.date = null;
	$scope.sample.status = Enum.Status.Active;
	$scope.sample.comments = null;

	$scope.data.param = $routeParams.Id;

	SampleService.findOne($scope.data.param).then(function (resp) {
			$scope.sample.id = resp.data.id;
			$scope.sample.measurements = resp.data.measurements;
			$scope.sample.labId = resp.data.labId;
			//$scope.sample.date = resp.data.date;
			getBooleanStatus(resp.data.status);
			$scope.sample.comment = resp.data.comment;
			$scope.sample.deviceId = resp.data.deviceId;
			$scope.sample.deviceName = resp.data.deviceName;
			$scope.sample.projectId = resp.data.projectId;
			$scope.sample.projectName = resp.data.projectName;
	});

	$scope.save = function () {
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

	$scope.cancel = function () {
		$location.path("/Sample");
	};
});