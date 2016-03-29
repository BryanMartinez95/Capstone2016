'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SampleService, $route,
                                                                                 $routeParams, $location, $mdDialog,
                                                                                 DeviceService, ProjectService, AsynchronousService,
                                                                                 ToastService) {

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
		ProjectService.singleSelect()
			.then(function (resp) {
				$scope.projectOptions = resp.data;
			})
			.error(function () {
				ToastService.error('Failed To Retrieve Projects', $scope.$new());
			})
	};
	
	$scope.loadDevices = function() {
		DeviceService.singleSelect()
			.then(function (resp) {
				$scope.deviceOptions = resp.data;
			})
			.error(function () {
				ToastService.error('Failed To Retrieve Devices', $scope.$new());
			})
	};
	
	$scope.goToAddToProject = function ($event) {
		$scope.dialogTitle = 'Add Selected Samples To Project';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/sample/add-to-project-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};
	
	$scope.goToAddToDevice = function ($event) {
		$scope.dialogTitle = 'Add Selected Samples To Device';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/sample/add-to-device-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};

	$scope.AddToProject = function () {
		var apiCalls = [];
		$scope.options.selected.forEach(function (selected) {
			apiCalls.push(SampleService.findOne($scope.options.selected[0].id))
		});
		AsynchronousService.resolveApiCalls(apiCalls)
			.then(function (resp) {
				var results = [];
				apiCalls = [];

				resp.data.forEach(function (sampleData) {
					console.log(sampleData);
				})

			})
			.error(function (error) {
				ToastService.error('Failed To Retrieve Samples', $scope.$new());
			})
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
				ToastService.error('Error Loading Data', $scope.$new());
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
				ToastService.success('Saved', $scope.$new());
				$location.path('/Sample/' + resp.data);
			})
			.catch(function (error) {
				ToastService.error('Cannot Save Sample', $scope.$new());
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
				ToastService.error('Error Retrieving data!', $scope.$new());
			})
			.finally(function () {
				$scope.$parent.isLoading = false;
			});

		// DeviceService.singleSelect().then(function (resp) {
		// 	$scope.deviceOptions = resp.data;
		// });
		//
		// ProjectService.singleSelect().then(function (resp) {
		// 	$scope.projectOptions = resp.data;
		// });
		//
		// $scope.data.param = $routeParams.Id;
		//
		// SampleService.findOne($scope.data.param).then(function (resp) {
		//
		// 	$scope.sample = {};
		// 	$scope.sample.id = resp.data.id;
		// 	$scope.sample.labId = resp.data.labId;
		// 	$scope.sample.date = new Date(resp.data.date);
		//
		// 	if(resp.data.sampleIdentifierId != null)
		// 	{
		// 		$scope.sample.sampleIdentifierId = resp.data.sampleIdentifierId;
		// 		$scope.sample.companyName = resp.data.companyName;
		// 		$scope.sample.creationDate = resp.data.creationDate;
		// 		$scope.sample.sampleIdentity = resp.data.sampleIdentity;
		// 	}
		//
		// 	$scope.sample.status = resp.data.status;
		// 	$scope.sample.comment = resp.data.comment;
		// 	if(resp.data.deviceId != null)
		// 	{
		// 		DeviceService.singleSelect().then(function (resp) {
		// 			$scope.deviceOptions = resp.data;
		// 			$scope.deviceOptions.forEach(function (option) {
		// 				if (option.value === resp.data.deviceId) {
		// 					$scope.sample.device = option;
		// 				}
		// 			});
		// 		});
		// 		$scope.deviceId = resp.data.deviceId;
		// 	}
		// 	if(resp.data.projectId != null)
		// 	{
		// 		ProjectService.singleSelect().then(function (resp) {
		// 			$scope.projectOptions = resp.data;
		// 			$scope.projectOptions.forEach(function (option) {
		// 				if (option.value === resp.data.projectId) {
		// 					$scope.sample.project = option;
		// 				}
		// 			});
		// 		});
		// 		$scope.projectId = resp.data.projectId;
		// 	}
		// });

		// MeasurementService.findBySampleId($scope.data.param).then(function (resp) {
		//
		// 	$scope.measurements = [];
		//
		// 	for (var i = 0; i < resp.data.length; i++) {
		// 		$scope.measurements.push(
		// 			{
		// 				id: resp.data[i].id,
		// 				sampleId:resp.data[i].sampleId,
		// 				temperature: resp.data[i].temperature,
		// 				testMethod: {},
		// 				value: resp.data[i].value,
		// 				unit: {},
		// 				date: new Date(resp.data[i].date),
		// 				status: resp.data[i].status,
		// 				edit: false
		// 			}
		// 		);
		// 		TestMethodService.singleSelect().then(function (resp) {
		// 			$scope.testMethodOptions = resp.data;
		// 			for (var k = 0; k < $scope.testMethodOptions.length; k++) {
		// 				if ($scope.testMethodOptions[k].value === value) {
		// 					$scope.measurements[i].testMethod = $scope.testMethodOptions[k];
		// 				}
		// 			}
		// 		});
		// 		UnitService.singleSelect().then(function (resp) {
		// 			$scope.unitOptions = resp.data;
		// 			for (var k = 0; k < $scope.unitOptions.length; k++) {
		// 				if ($scope.unitOptions[k].value === value) {
		// 					$scope.measurements[k].unit = $scope.unitOptions[k];
		// 				}
		// 			}
		// 		});
		// 	}
		// });
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
				ToastService.error('Error Updating', $scope.$new());
			})
	};

	$scope.removeMeasurement = function(index, id) {
		MeasurementService.remove(id)
			.then(function (resp) {
				ToastService.success('Measurement Deleted', $scope.$new());
				$scope.measurements.splice(index,1);
			})
			.catch(function (error) {
				ToastService.error('Cannot Delete Measurement', $scope.$new());
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
		ToastService.success('Sample Reloaded', $scope.$new());
	}
});