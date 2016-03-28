'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SampleService, $route,
                                                                                 $routeParams, $location) {

    $scope.data = {};
    $scope.data.message = 'Sample Overview Page';

	$scope.getGrid = function (options) {
		options.ignoredColumns = ['id', 'sampleIdentifierId', 'measurements','comment', 'projectId', 'deviceId'];
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
	$scope.sample.sampleIdentifierId = null;
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
		sample.sampleIdentifierId = $scope.sample.sampleIdentifierId;
		sample.companyName = $scope.sample.companyName;
		sample.creationDate = $scope.sample.creationDate;
		sample.sampleIdentity = $scope.sample.sampleIdentity;
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
				$location.path('/Sample/' + resp.data);
			})
			.catch(function (error) {
				ToastrService.error('Cannot Save Sample', 'Error');
			})
	};

	$scope.cancel = function () {
		$location.path('/Sample');
	};

	$scope.goToEditDate = function ($event) {
		$scope.dialogTitle = 'Sample Date';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/sample/sample-date-dialog.html',
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
                                                                             ProjectService, ToastService, $route,
                                                                             $routeParams, $location, $mdDialog, $q) {

	var init = function () {

		var defer = $q.defer();

		$scope.$parent.isLoading = true;

		DeviceService.singleSelect().then(function (resp) {
			$scope.deviceOptions = resp.data;
		});

		ProjectService.singleSelect().then(function (resp) {
			$scope.projectOptions = resp.data;
		});

		$scope.data.param = $routeParams.Id;

		SampleService.findOne($scope.data.param).then(function (resp) {

			$scope.sample = {};
			$scope.sample.id = resp.data.id;
			$scope.sample.labId = resp.data.labId;
			$scope.sample.date = new Date(resp.data.date);

			if(resp.data.sampleIdentifierId != null)
			{
				$scope.sample.sampleIdentifierId = resp.data.sampleIdentifierId;
				$scope.sample.companyName = resp.data.companyName;
				$scope.sample.creationDate = resp.data.creationDate;
				$scope.sample.sampleIdentity = resp.data.sampleIdentity;
			}

			$scope.sample.status = resp.data.status;
			$scope.sample.comment = resp.data.comment;
			if(resp.data.deviceId != null)
			{
				DeviceService.singleSelect().then(function (resp) {
					$scope.deviceOptions = resp.data;
					$scope.deviceOptions.forEach(function (option) {
						if (option.value === deviceId) {
							$scope.sample.device = option;
						}
					});
				});
				$scope.deviceId = resp.data.deviceId;
			}
			if(resp.data.projectId != null)
			{
				ProjectService.singleSelect().then(function (resp) {
					$scope.projectOptions = resp.data;
					$scope.projectOptions.forEach(function (option) {
						if (option.value === resp.data.projectId) {
							$scope.sample.project = option;
						}
					});
				});
				$scope.projectId = resp.data.projectId;
			}
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
				TestMethodService.singleSelect().then(function (resp) {
					$scope.testMethodOptions = resp.data;
					for (var k = 0; k < $scope.testMethodOptions.length; k++) {
						if ($scope.testMethodOptions[k].value === value) {
							$scope.measurements[i].testMethod = $scope.testMethodOptions[k];
						}
					}
				});
				UnitService.singleSelect().then(function (resp) {
					$scope.unitOptions = resp.data;
					for (var k = 0; k < $scope.unitOptions.length; k++) {
						if ($scope.unitOptions[k].value === value) {
							$scope.measurements[k].unit = $scope.unitOptions[k];
						}
					}
				});
			}

			$scope.$parent.isLoading = false;
		});
	};

	init();

	$scope.updateSample = function () {

		var sample = new Sample();

		sample.id = $scope.sample.id;
		sample.labId = $scope.sample.labId;
		sample.sampleIdentifierId = $scope.sample.sampleIdentifierId;
		sample.companyName = $scope.sample.companyName;
		sample.creationDate = $scope.sample.creationDate;
		sample.sampleIdentity = $scope.sample.sampleIdentity;
		sample.date = $scope.sample.date;
		sample.status = $scope.sample.status;
		sample.comment = $scope.sample.comment;
		sample.deviceId = $scope.sample.device.value;
		sample.deviceName = $scope.sample.device.display;
		sample.projectId = $scope.sample.project.value;
		sample.projectName = $scope.sample.project.display;

		SampleService.update(sample)
			.then(function (resp) {
				ToastService.success('Saved', $scope.$new());
			})
			.catch(function (error) {
				ToastService.error('Cannot Save Sample', $scope.$new());
			})
	};

	$scope.createMeasurement = function() {

		var measurement = new Measurement();

		measurement.sampleId = $scope.sample.id;
		measurement.value = 0;
		measurement.temperature = 0;
		measurement.date = $scope.newDate;
		measurement.status = 'ACTIVE';

		MeasurementService.create(measurement)
			.then(function (resp) {
				$scope.measurements.push(
					{
						id: resp.data,
						sampleId: $scope.sample.id,
						date: $scope.newDate,
						temperature: 0,
						testMethod: {},
						value: 0,
						unit: {},
						status: 'ACTIVE'
					}
				);
				ToastService.success('Measurement Created', $scope.$new());
			})
			.catch(function (error) {
				ToastService.error('Cannot Create Measurement', $scope.$new());
			});
	};

	$scope.updateMeasurement = function(rowData) {

		var measurement = new Measurement();

		measurement.id = rowData.id;
		measurement.sampleId = rowData.sampleId;
		measurement.date = rowData.date;
		measurement.temperature = rowData.temperature;
		measurement.testMethodId = rowData.testMethod.value;
		measurement.value = rowData.value;
		measurement.unitId = rowData.unit.value;
		measurement.status = rowData.status;

		MeasurementService.update(measurement)
			.then(function (resp) {
				ToastService.success('Measurement Updated', $scope.$new());
			})
			.catch(function (error) {
				ToastService.error('Cannot Update Measurement', $scope.$new());
			})
	};

	$scope.removeMeasurement = function(index, id) {
		MeasurementService.remove(id)
			.then(function (resp) {
				ToastService.success('Measurement Deleted');
				$scope.measurements.splice(index,1);
			})
			.catch(function (error) {
				ToastService.error('Cannot Delete Measurement', 'Error');
			});
	};

	$scope.goToEditDate = function ($event) {
		$scope.dialogTitle = 'Measurement Date';
		$scope.newDate = new Date();
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/sample/measurement-date-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};

	$scope.closeDialog = function () {
		$mdDialog.destroy();
	};

	$scope.gotToGrid = function () {
		$location.path('/Sample');
	};
	
	$scope.goToProject = function () {
		$location.path('/Project/' + $scope.projectId);
	};

	$scope.goToDevice = function () {
		$location.path('/Device/' + $scope.deviceId);
	};

	$scope.refresh = function () {
		init();
	}
});