'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SampleService, $route,
                                                                                 $routeParams, $location) {

    $scope.data = {};
    $scope.data.message = 'Sample Overview Page';

	$scope.getGrid = function (options) {
		options.ignoredColumns = ['id', 'measurements','comment', 'projectId', 'deviceId'];
		return SampleService.getGrid(options);
	};

	$scope.goToAddSample = function () {
		$location.path('/Sample/' + '0000000-000-000-0000000');
	};

	$scope.goToEditSample = function () {
		$location.path('/Sample/' + $scope.options.selected[0].id);
	};
});

angular.module('appController').controller('SampleAddController', function ($scope, SampleService, $mdDialog,
                                                                            DeviceService, ProjectService, ToastrService,
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
	$scope.sample.date = new Date();
	$scope.sample.device = {};
	$scope.sample.project = {};
	$scope.sample.status = Enum.Status.Active.value;
	$scope.sample.comment = null;

	$scope.createSample = function () {

		var sample = new Sample();

		sample.labId = $scope.sample.labId;
		sample.sampleIdentifier = {
			companyName: $scope.sample.companyName,
			creationDate: $scope.sample.creationDate,
			sampleIdentity: $scope.sample.sampleIdentity
		};
		sample.date = $scope.sample.date;
		sample.status = $scope.sample.status;
		sample.comment = $scope.sample.comment;
		sample.deviceId = $scope.sample.device.value;
		sample.deviceName = $scope.sample.device.display;
		sample.projectId = $scope.sample.project.value;
		sample.projectName = $scope.sample.project.display;

		SampleService.create(sample)
			.then(function (resp) {
				ToastrService.success('Saved');
			})
			.catch(function (error) {
				ToastrService.error('Cannot Save Sample', 'Error');
			})
			.finally( function() {
				var model = GridRequestModel.newGridRequestModel();
				$scope.options.updateGrid(model);
				$location.path('/Sample/Overview');
			});
	};

	$scope.cancel = function () {
		$location.path('/Sample');
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
                                                                             DeviceService, TestMethodService, UnitService,
                                                                             ProjectService, ToastrService, $route,
                                                                             $routeParams, $location) {

	DeviceService.singleSelect().then(function (resp) {
		$scope.deviceOptions = resp.data;
	});
	
	ProjectService.singleSelect().then(function (resp) {
		$scope.projectOptions = resp.data;
	});

	$scope.test = function () {
		console.log($scope.sample);
		console.log($scope.measurements);
	};

	$scope.tabs = ['general', 'measurements'];
	$scope.activeTab = $scope.tabs[0];
	$scope.toggleTab = function(activeTab) {
		$scope.activeTab = activeTab;
	};

	$scope.data.param = $routeParams.Id;

	SampleService.findOne($scope.data.param).then(function (resp) {

		$scope.sample = {};
		$scope.sample.id = resp.data.id;
		$scope.sample.labId = resp.data.labId;
		$scope.sample.date = new Date(resp.data.date);

		if(resp.data.sampleIdentifier != null)
		{
			$scope.sample.companyName = resp.data.sampleIdentifier.companyName;
			$scope.sample.creationDate = resp.data.sampleIdentifier.creationDate;
			$scope.sample.sampleIdentity = resp.data.sampleIdentifier.sampleIdentity;
		}

		$scope.sample.status = resp.data.status;
		$scope.sample.comment = resp.data.comment;
		setDeviceSelection(resp.data.deviceId);
		setProjectSelection(resp.data.projectId);
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

	$scope.updateSample = function () {

		var sample = new Sample();

		sample.id = $scope.sample.id;
		sample.labId = $scope.sample.labId;
		sample.sampleIdentifier = {
			companyName: $scope.sample.companyName,
			creationDate: $scope.sample.creationDate,
			sampleIdentity: $scope.sample.sampleIdentity
		};
		sample.date = $scope.sample.date;
		sample.status = $scope.sample.status;
		sample.comment = $scope.sample.comment;
		sample.deviceId = $scope.sample.device.value;
		sample.deviceName = $scope.sample.device.display;
		sample.projectId = $scope.sample.project.value;
		sample.projectName = $scope.sample.project.display;
		sample.measurements = [];
		
		SampleService.update(sample)
			.then(function (resp) {
				ToastrService.success('Saved');
			})
			.catch(function (error) {
				ToastrService.error('Cannot Save Sample', 'Error');
			})
			.finally( function() {
				var model = GridRequestModel.newGridRequestModel();
				$scope.options.updateGrid(model);
				$location.path('/Sample/Overview');
			});
	};

	$scope.cancel = function () {
		$location.path('/Sample');
	};
	
	function setDeviceSelection(value) {
		DeviceService.singleSelect().then(function (resp) {
			$scope.deviceOptions = resp.data;
			for (var i = 0; i < $scope.deviceOptions.length; i++) {
				if ($scope.deviceOptions[i].value === value) {
					$scope.sample.device = $scope.deviceOptions[i];
				}
			}
		});
	}
	
	function setProjectSelection(value) {
		ProjectService.singleSelect().then(function (resp) {
			$scope.projectOptions = resp.data;
			for (var i = 0; i < $scope.projectOptions.length; i++) {
				if ($scope.projectOptions[i].value === value) {
					$scope.sample.project = $scope.projectOptions[i];
				}
			}
		});
	}

	function setTestMethodSelection(index, value) {
		TestMethodService.singleSelect().then(function (resp) {
			$scope.testMethodOptions = resp.data;
			for (var i = 0; i < $scope.testMethodOptions.length; i++) {
				if ($scope.testMethodOptions[i].value === value) {
					$scope.measurements[index].testMethod = $scope.testMethodOptions[i];
				}
			}
		});
	}

	function setUnitSelection(index, value) {
		UnitService.singleSelect().then(function (resp) {
			$scope.unitOptions = resp.data;
			for (var i = 0; i < $scope.unitOptions.length; i++) {
				if ($scope.unitOptions[i].value === value) {
					$scope.measurements[index].unit = $scope.unitOptions[i];
				}
			}
		});
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