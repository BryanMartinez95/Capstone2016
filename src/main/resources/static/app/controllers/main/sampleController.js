'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SampleService, $route, $routeParams, $location) {

    $scope.data = {};
    $scope.data.message = "Sample Overview Page";

	$scope.getGrid = function (options) {
		options.ignoredColumns = ['id', 'measurements','comment', 'projectId', 'deviceId'];
		return SampleService.getGrid(options);
	};

	$scope.goToAddSample = function () {
		$location.path("/Sample/" + '0000000-000-000-0000000');
	};

	$scope.goToEditSample = function () {
		$location.path("/Sample/" + $scope.options.selected[0].id);
	};
});

angular.module('appController').controller('SampleAddController', function ($scope, SampleService, $route, $routeParams, $location, SingleSelect, Enum, $filter, $http) {

	$scope.deviceOptions = {
		apiUrl: "/Api/Device/SingleSelect"
	};
	$scope.selectedDevice = $scope.deviceOptions[0];

	$scope.projectOptions = {
		apiUrl: "/Api/Project/SingleSelect"
	};
	$scope.selectedProject = $scope.projectOptions[0];

	$scope.testMethodOptions = {
		apiUrl: "/Api/TestMethod/SingleSelect"
	};
	$scope.selectedTestMethod = $scope.testMethodOptions[0];

	$scope.unitOptions = {
		apiUrl: "/Api/Unit/SingleSelect"
	};
	$scope.selectedUnit = $scope.unitOptions[0];

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
			testMethod: {}
		};
		$scope.sample.measurements.push(model);
	};

	$scope.removeMeasurement = function(index) {
		$scope.sample.measurements.splice(index,1);
	};

	$scope.onSwitchChange = function () {
		$scope.statusMessage = $scope.isActive ? Enum.Status.Active.display : Enum.Status.Inactive.display;
	};

	$scope.isActive = true;
	$scope.statusMessage = '';
	$scope.onSwitchChange();
	$scope.unitOptions = SingleSelect.GridSize;
	$scope.testMethodOptions = SingleSelect.FilterType;
	$scope.sample = {};
	$scope.sample.labId = null;
	$scope.sample.reportingId = null;
	$scope.measurements = [];
	$scope.sample.date = new Date();
	$scope.sample.status = Enum.Status.Active;
	$scope.sample.comment = null;

	$scope.save = function () {
		console.log($scope.sample);
		//var sample = new Sample();
		//
		//sample.measurements = $scope.sample.measurements;
		//sample.labId = $scope.sample.labId;
		//sample.date = $scope.sample.date;
		//sample.status = getBooleanStatus($scope.sample.status);
		//sample.comment = $scope.sample.comment;
		//sample.deviceId = $scope.selectedDevice.value;
		//sample.deviceName = $scope.selectedDevice.display;
		//sample.projectId = $scope.selectedProject.display.value;
		//sample.projectName = $scope.selectedProject.display;
	};

	function getBooleanStatus(status) {
		$scope.isActive = status === Enum.Status.Active.value;
	}

	$scope.cancel = function () {
		$location.path("/Sample");
	};

	//*********************************************************************************************
	//*********************************************************************************************
	//*********************************************************************************************
	//*********************************************************************************************

	$scope.users = [
		{id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin', edit: false},
		{id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip', edit: false},
		{id: 3, name: 'awesome user3', status: 2, group: null, edit: false}
	];

	$scope.checkName = function(data, id) {
		if (id === 2 && data !== 'awesome') {
			return "Username 2 should be `awesome`";
		}
	};

	$scope.saveUser = function(data, id) {
		//$scope.user not updated yet
		angular.extend(data, {id: id});
		console.log(data);
	};

	// remove user
	$scope.removeUser = function(index) {
		$scope.users.splice(index, 1);
	};

	// add user
	$scope.addUser = function() {
		$scope.inserted = {
			id: $scope.users.length+1,
			name: '',
			status: null,
			group: null
		};
		$scope.users.push($scope.inserted);
	};
});

angular.module('appController').controller('SampleEditController', function ($scope, SampleService, MeasurementService, $route, $routeParams, $location, SingleSelect, Enum) {

	$scope.deviceOptions = {
		apiUrl: "/Api/Device/SingleSelect"
	};
	$scope.selectedDevice = {};

	$scope.projectOptions = {
		apiUrl: "/Api/Project/SingleSelect"
	};
	$scope.selectedProject = {};

	$scope.unitOptions = {
		apiUrl: "/Api/Unit/SingleSelect"
	};
	$scope.selectedUnit = {};
	
	$scope.testMethodOptions = {
		apiUrl: "/Api/TestMethod/SingleSelect"
	};
	$scope.selectedTestMethod = {};

	$scope.tabs = ['general', 'measurements'];
	$scope.activeTab = $scope.tabs[0];
	$scope.toggleTab = function(activeTab) {
		$scope.activeTab = activeTab;
	};

	$scope.addMeasurement = function() {
		var model = {
			sampleId: $routeParams.Id,
			testMethod: {},
			temperature: null,
			value: 0,
			unit: {},
			date: new Date()
		};
		$scope.measurements.push(model);
	};

	$scope.removeMeasurement = function(index) {
		$scope.measurements.splice(index,1);
	};

	$scope.isActive = false;
	$scope.sample = {};
	$scope.sample.id = null;
	$scope.sample.labId = null;
	$scope.sample.reportingId = null;
	$scope.sample.date = null;
	$scope.sample.status = Enum.Status.Active;
	$scope.sample.comment = null;
	$scope.statusMessage = '';

	$scope.data.param = $routeParams.Id;

	SampleService.findOne($scope.data.param).then(function (resp) {
		$scope.sample.id = resp.data.id;
		$scope.sample.labId = resp.data.labId;
		$scope.sample.date = new Date(resp.data.date);
		getBooleanStatus(resp.data.status);
		$scope.onSwitchChange();
		$scope.sample.comment = resp.data.comment;
		$scope.sample.deviceId = resp.data.deviceId;
		$scope.sample.deviceName = resp.data.deviceName;
		$scope.sample.projectId = resp.data.projectId;
		$scope.sample.projectName = resp.data.projectName;
	});

	MeasurementService.findBySampleId($scope.data.param).then(function (resp) {
		$scope.measurements = [];

		for (var i = 0; i < resp.data.length; i++) {
			$scope.measurements.push(
				{id: resp.data[i].id, sampleId:resp.data[i].sampleId, temperature: resp.data[i].temperature,
					testMethod: resp.data[i].testMethod, value: resp.data[i].value, unit: resp.data[i].unit,
					date: new Date(resp.data[i].date), edit: false}
			)
		}
	});

	$scope.saveSample = function () {
		console.log($scope.sample);
		console.log($scope.measurements);
		//var sample = new Sample();
		//
		//sample.id = $scope.sample.id;
		//sample.labId = $scope.sample.labId;
		//sample.date = $scope.sample.date;
		//sample.status = getStatusValue();
		//sample.comment = $scope.sample.comment;
		//sample.deviceId = $scope.sample.deviceId;
		//sample.deviceName = $scope.sample.deviceName;
		//sample.projectId = $scope.sample.projectId;
		//sample.projectName = $scope.sample.projectName;
	};

	function getBooleanStatus(status) {
		$scope.isActive = status === Enum.Status.Active.value;
	}

	function getStatusValue() {
		return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
	}

	$scope.cancel = function () {
		$location.path("/Sample");
	};

	$scope.onSwitchChange = function () {
		$scope.statusMessage = $scope.isActive ? Enum.Status.Active.display : Enum.Status.Inactive.display;
	};

	//*********************************************************************************************
	//*********************************************************************************************
	//*********************************************************************************************
	//*********************************************************************************************
	
	$scope.users = [
		{id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin', edit: false},
		{id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip', edit: false},
		{id: 3, name: 'awesome user3', status: 2, group: null, edit: false}
	];
	
	// $scope.checkName = function(data, id) {
	// 	if (id === 2 && data !== 'awesome') {
	// 		return "Username 2 should be `awesome`";
	// 	}
	// };
	
	$scope.saveMeasurement = function(data, id) {
		//$scope.user not updated yet
		angular.extend(data, {id: id});
		console.log(data);
	};
	
	// remove user
	$scope.removeMeasurement = function(index) {
		$scope.measurements.splice(index, 1);
	};
	
	// add user
	$scope.addMeasurement = function() {
		$scope.inserted = {
			id: $scope.measurements.length+1,
			name: '',
			status: null,
			group: null
		};
		$scope.measurements.push($scope.inserted);
	};
});