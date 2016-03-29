'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SampleService, $route,
                                                                                 $routeParams, $location, $mdDialog,
                                                                                 DeviceService, ProjectService, AsynchronousService,
                                                                                 ToastService, GridRequestModel) {

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

	$scope.loadProjects = function() {
		ProjectService.singleSelect().then(function (resp) {
				$scope.projectOptions = resp.data;
			})
			.catch(function () {
				ToastService.error('Failed To Retrieve Projects');
			})
	};
	
	$scope.loadDevices = function() {
		DeviceService.singleSelect()
			.then(function (resp) {
				$scope.deviceOptions = resp.data;
			})
			.catch(function () {
				ToastService.error('Failed To Retrieve Devices');
			})
	};
	
	$scope.goToAssignToProject = function ($event) {
		$scope.selectedProject = {};
		$scope.dialogTitle = 'Assign Selected Samples To Project';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/sample/assign-to-project-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};
	
	$scope.goToAssignToDevice = function ($event) {
		$scope.selectedDevice = {};
		$scope.dialogTitle = 'Assign Selected Samples To Device';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/sample/assign-to-device-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};

	$scope.assignToProject = function () {

		var apiCalls = [];
		$scope.options.selected.forEach(function (selected) {
			apiCalls.push(SampleService.findOne(selected.id));
		});

		AsynchronousService.resolveApiCalls(apiCalls)
			.then(function (resp) {
				apiCalls = [];

				resp.forEach(function (response) {

					var sample = new Sample();

					sample.id = response.data.id;
					sample.labId = response.data.labId;
					sample.sampleIdentifierId = response.data.sampleIdentifierId;
					sample.companyName = response.data.companyName;
					sample.creationDate = response.data.creationDate;
					sample.sampleIdentity = response.data.sampleIdentity;
					sample.date = response.data.date;
					sample.status = response.data.status;
					sample.comment = response.data.comment;
					sample.deviceId = response.data.deviceId;
					sample.deviceName = response.data.deviceName;
					sample.projectId = $scope.selectedProject.value;
					sample.projectName = $scope.selectedProject.display;

					apiCalls.push(SampleService.update(sample));
				});

				AsynchronousService.resolveApiCalls(apiCalls)
					.then(function (resp) {
						ToastService.success('Samples Assigned To Project');
					})
					.catch(function (error) {
						ToastService.error('Failed To Assign To Project');
					})
					.finally(function () {
						var model = GridRequestModel.newGridRequestModel();
						$scope.options.updateGrid(model);
						$scope.closeDialog();
					})
			})
			.catch(function (error) {
				ToastService.error('Failed To Retrieve Samples');
			});
	};

	$scope.assignToDevice = function () {

		var apiCalls = [];
		$scope.options.selected.forEach(function (selected) {
			apiCalls.push(SampleService.findOne(selected.id));
		});

		AsynchronousService.resolveApiCalls(apiCalls)
			.then(function (resp) {
				apiCalls = [];

				resp.forEach(function (response) {

					var sample = new Sample();

					sample.id = response.data.id;
					sample.labId = response.data.labId;
					sample.sampleIdentifierId = response.data.sampleIdentifierId;
					sample.companyName = response.data.companyName;
					sample.creationDate = response.data.creationDate;
					sample.sampleIdentity = response.data.sampleIdentity;
					sample.date = response.data.date;
					sample.status = response.data.status;
					sample.comment = response.data.comment;
					sample.deviceId = $scope.selectedDevice.value;
					sample.deviceName = $scope.selectedDevice.display;
					sample.projectId = response.data.projectId;
					sample.projectName = response.data.projectName;

					apiCalls.push(SampleService.update(sample));
				});

				AsynchronousService.resolveApiCalls(apiCalls)
					.then(function (resp) {
						ToastService.success('Samples Assigned To Device');
					})
					.catch(function (error) {
						ToastService.error('Failed To Assign To Device');
					})
					.finally(function () {
						var model = GridRequestModel.newGridRequestModel();
						$scope.options.updateGrid(model);
						$scope.closeDialog();
					})
			})
			.catch(function (error) {
				ToastService.error('Failed To Retrieve Samples');
			});
	};

	$scope.closeDialog = function () {
		$mdDialog.destroy();
	};
});

angular.module('appController').controller('SampleAddController', function ($scope, SampleService, $mdDialog,
                                                                            DeviceService, ProjectService, ToastService,
                                                                            AsynchronousService, $location, Enum) {

	var init = function () {
		$scope.$parent.isLoading = true;

		var apiCalls = [];

		apiCalls.push(DeviceService.singleSelect());
		apiCalls.push(ProjectService.singleSelect());

		AsynchronousService.resolveApiCalls(apiCalls)
			.then(function (resp) {
				$scope.deviceOptions = resp[0].data;
				$scope.projectOptions = resp[1].data;
			})
			.catch(function (error) {
				ToastService.error('Error Loading Data');
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

		$scope.$parent.isLoading = false;
	};

	init();

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
				ToastService.success('Saved');
				$location.path('/Sample/' + resp.data);
			})
			.catch(function (error) {
				ToastService.error('Cannot Save Sample');
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

	$scope.refresh = function () {
		init();
	}
});

angular.module('appController').controller('SampleEditController', function ($scope, SampleService, MeasurementService,
                                                                             DeviceService, TestMethodService, UnitService,
                                                                             ProjectService, ToastService, $route,
                                                                             $routeParams, $location, $mdDialog, AsynchronousService) {

	var init = function () {
		$scope.$parent.isLoading = true;

		$scope.data.param = $routeParams.Id;

		var apiCalls = [];

		apiCalls.push(DeviceService.singleSelect());
		apiCalls.push(ProjectService.singleSelect());
		apiCalls.push(SampleService.findOne($scope.data.param));
		apiCalls.push(MeasurementService.findBySampleId($scope.data.param));
		apiCalls.push(TestMethodService.singleSelect());
		apiCalls.push(UnitService.singleSelect());

		AsynchronousService.resolveApiCalls(apiCalls)
			.then(function (resp) {
				$scope.deviceOptions = resp[0].data;
				$scope.projectOptions = resp[1].data;
				$scope.testMethodOptions = resp[4].data;
				$scope.unitOptions = resp[5].data;

				var populateSamplePromise = AsynchronousService.resolveAsynchOperation(function () {
					$scope.sample = {};
					$scope.sample.id = resp[2].data.id;
					$scope.sample.labId = resp[2].data.labId;
					$scope.sample.date = new Date(resp[2].data.date);

					if(resp[2].data.sampleIdentifierId != null)
					{
						$scope.sample.sampleIdentifierId = resp[2].data.sampleIdentifierId;
						$scope.sample.companyName = resp[2].data.companyName;
						$scope.sample.creationDate = resp[2].data.creationDate;
						$scope.sample.sampleIdentity = resp[2].data.sampleIdentity;
					}

					$scope.sample.status = resp[2].data.status;
					$scope.sample.comment = resp[2].data.comment;

					if(resp[2].data.deviceId != null)
					{
						$scope.deviceOptions.forEach(function (option) {
							if (option.value === resp[2].data.deviceId) {
								$scope.sample.device = option;
							}
						});
						$scope.deviceId = resp[2].data.deviceId;
					}
					if(resp[2].data.projectId != null)
					{
						$scope.projectOptions.forEach(function (option) {
							if (option.value === resp[2].data.projectId) {
								$scope.sample.project = option;
							}
						});
						$scope.projectId = resp[2].data.projectId;
					}
				}, resp[2]);

				var populateMeasurementsPromise = AsynchronousService.resolveAsynchOperation(function () {

					$scope.measurements = [];

					for (var i = 0; i < resp[3].data.length; i++) {
						$scope.measurements.push(
							{
								id: resp[3].data[i].id,
								sampleId:resp[3].data[i].sampleId,
								temperature: resp[3].data[i].temperature,
								testMethod: {},
								value: resp[3].data[i].value,
								unit: {},
								date: new Date(resp[3].data[i].date),
								status: resp[3].data[i].status,
								edit: false
							}
						);

						$scope.testMethodOptions.forEach(function (option) {
							if (option.value === resp[3].data[i].testMethodId) {
								$scope.measurements[i].testMethod = option;
							}
						});

						$scope.unitOptions.forEach(function (option) {
							if (option.value === resp[3].data[i].unitId) {
								$scope.measurements[i].unit = option;
							}
						});
					}
				}, resp[3]);

				populateSamplePromise.then(function () {});
				populateMeasurementsPromise.then(function () {});
			})
			.catch(function (error) {
				ToastService.error('Error Retrieving data!');
			})
			.finally(function () {
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
				ToastService.success('Saved');
			})
			.catch(function (error) {
				ToastService.error('Cannot Save Sample');
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
				ToastService.success('Measurement Created');
			})
			.catch(function (error) {
				ToastService.error('Cannot Create Measurement');
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
				ToastService.success('Measurement Updated');
			})
			.catch(function (error) {
				ToastService.error('Error Updating');
			})
	};

	$scope.removeMeasurement = function(index, id) {
		MeasurementService.remove(id)
			.then(function (resp) {
				ToastService.success('Measurement Deleted');
				$scope.measurements.splice(index,1);
			})
			.catch(function (error) {
				ToastService.error('Cannot Delete Measurement');
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
		ToastService.success('Sample Reloaded');
	}
});