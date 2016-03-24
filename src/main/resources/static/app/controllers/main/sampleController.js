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

angular.module('appController').controller('SampleAddController', function ($scope, SampleService, $mdDialog,
                                                                            DeviceService, ProjectService,
                                                                            $location, Enum) {

	DeviceService.singleSelect().then(function (resp) {
		$scope.deviceOptions = resp.data;
	});
	
	ProjectService.singleSelect().then(function (resp) {
		$scope.projectOptions = resp.data;
	});

	$scope.sample = {};
	$scope.sample.labId = null;
	$scope.sample.companyName = null;
	$scope.sample.creationDate = null;
	$scope.sample.sampleIdentity = null;
	$scope.measurements = [];
	$scope.sample.date = new Date();
	$scope.sample.device = {};
	$scope.sample.project = {};
	$scope.sample.status = Enum.Status.Active.value;
	$scope.sample.comment = null;

	$scope.save = function () {
		var sample = new Sample();

		sample.measurements = $scope.sample.measurements;
		sample.labId = $scope.sample.labId;
		sample.sampleIdentifier = $scope.sample.companyName + $scope.sample.creationDate + $scope.sample.sampleIdentity;
		sample.date = $scope.sample.date.getUTCMilliseconds();
		sample.status = $scope.sample.status;
		sample.comment = $scope.sample.comment;
		sample.deviceId = $scope.sample.device.value;
		sample.projectId = $scope.sample.project.value;
		console.log(sample);

		SampleService.create(sample)
			.then(function (resp) {

			})
			.catch(function (error) {

			})
			.finally(function () {
				var model = GridRequestModel.newGridRequestModelFromJson({
					pageSize: $scope.options.limit,
					currentPage: $scope.options.page,
					filters: $scope.options.filters,
					sorts: $scope.options.sorts
				});
				$scope.options.selected = [];
				$scope.options.updateGrid(model);
			});
	};

	$scope.cancel = function () {
		$location.path("/Sample");
	};

	$scope.goToEditDate = function ($event) {
		$scope.dialogTitle = 'Sample Date';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/sample/date-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};

	$scope.closeDialog = function () {
		$mdDialog.destroy();
	};
});

angular.module('appController').controller('SampleEditController', function ($scope, SampleService, MeasurementService,
                                                                             TestMethodService, UnitService,
                                                                             $route, $routeParams,
                                                                             $location, Enum) {

	$scope.deviceOptions = {
		apiUrl: "/Api/Device/SingleSelect"
	};
	$scope.selectedDevice = null;

	$scope.projectOptions = {
		apiUrl: "/Api/Project/SingleSelect"
	};
	$scope.selectedProject = null;

	$scope.testMethodOptions = null;

	$scope.test = function () {
		console.log($scope.sample);
		console.log($scope.measurements);
	};

	$scope.tabs = ['general', 'measurements'];
	$scope.activeTab = $scope.tabs[0];
	$scope.toggleTab = function(activeTab) {
		$scope.activeTab = activeTab;
	};

	$scope.isActive = false;
	$scope.sample = {};
	$scope.sample.id = null;
	$scope.sample.labId = null;
	$scope.sample.reportingId = null;
	$scope.sample.date = null;
	$scope.sample.status = Enum.Status.Active.value;
	$scope.sample.comment = null;
	$scope.statusMessage = '';

	$scope.data.param = $routeParams.Id;

	SampleService.findOne($scope.data.param).then(function (resp) {
		$scope.sample.id = resp.data.id;
		$scope.sample.labId = resp.data.labId;
		$scope.sample.date = new Date(resp.data.date);
		$scope.sample.status = resp.data.status;
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
				{
					id: resp.data[i].id,
					sampleId:resp.data[i].sampleId,
					temperature: resp.data[i].temperature,
					testMethod: {},
					value: resp.data[i].value,
					unit: {},
					date: new Date(resp.data[i].date),
					status: resp.data[i].status,
					edit: false
				}
			);
			setTestMethodSelection(i, resp.data[i].testMethodId);
			setUnitSelection(i, resp.data[i].unitId);
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

	$scope.cancel = function () {
		$location.path("/Sample");
	};

	function setTestMethodSelection(index, value) {
		TestMethodService.singleSelect().then(function (resp) {
			$scope.testMethodOptions = resp.data;
			for (var i = 0; i < $scope.testMethodOptions.length; i++) {
				if ($scope.testMethodOptions[i].value === value) {
					$scope.measurements[index].testMethod = $scope.testMethodOptions[i];
				}
			}
		})
	}

	function setUnitSelection(index, value) {
		UnitService.singleSelect().then(function (resp) {
			$scope.unitOptions = resp.data;
			for (var i = 0; i < $scope.unitOptions.length; i++) {
				if ($scope.unitOptions[i].value === value) {
					$scope.measurements[index].unit = $scope.unitOptions[i];
				}
			}
		})
	}
	
	$scope.addMeasurement = function() {
		$scope.measurements.push(
			{
				sampleId: $routeParams.Id,
				temperature: 0,
				testMethod: {},
				value: 0,
				unit: {},
				date: new Date(),
				status: true
			}
		);
	};

	$scope.saveMeasurement = function(data, id) {
		//$scope.user not updated yet
		angular.extend(data, {id: id});
		console.log(data);
	};

	$scope.removeMeasurement = function(index) {
		$scope.measurements.splice(index,1);
	};
});