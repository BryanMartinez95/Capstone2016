'use strict';

angular.module('appController').controller('SampleOverviewController', function ($scope, SampleService, $route,
                                                                                 $routeParams, $location, DeviceService,
                                                                                 ProjectService, AsynchronousService, ToastService,
                                                                                 DialogService, GridService) {

    $scope.data = {};
    $scope.data.message = 'Sample Overview Page';

    GridService.init(function (options) {
            return SampleService.getGrid(options);
        },
        ['id', 'sampleIdentifierId', 'measurements', 'comment', 'projectId', 'deviceId']
    );

    $scope.goToAddSample = function () {
        $location.path('/Sample/' + '0000000-000-000-0000000');
    };

    $scope.goToEditSample = function () {
        $location.path('/Sample/' + $scope.options.selected[0].id);
    };

    $scope.loadProjects = function () {
        ProjectService.singleSelect().then(function (resp) {
                $scope.projectOptions = resp.data;
            })
            .catch(function () {
                ToastService.error('Error Retrieving Projects');
            })
    };

    $scope.loadDevices = function () {
        DeviceService.singleSelect()
            .then(function (resp) {
                $scope.deviceOptions = resp.data;
            })
            .catch(function () {
                ToastService.error('Error Retrieving Devices');
            })
    };

    $scope.assignSamples = function ($event) {
        $scope.assignOptions = ['Project', 'Device'];
        $scope.assignType = '';
        $scope.selectedOption = {};
        $scope.dialogTitle = 'Assign Selected Samples';
        DialogService.showDialog($scope, $event, '/views/sample/assign-samples.html');
    };

    $scope.assignToProject = function (project) {

        var apiCalls = [];
        GridService.getSelectedRows().forEach(function (selected) {
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
                    sample.projectId = project.value;
                    sample.projectName = project.display;

                    apiCalls.push(SampleService.update(sample));
                });

                AsynchronousService.resolveApiCalls(apiCalls)
                    .then(function (resp) {
                        ToastService.success('Samples Assigned To Project');
                    })
                    .catch(function (error) {
                        ToastService.error('Error Assigning Samples To Project');
                    })
                    .finally(function () {
                        GridService.updateGrid();
                        DialogService.close();
                    })
            })
            .catch(function (error) {
                ToastService.error('Error Retrieving Samples');
            })
            .finally(function () {
                GridService.updateGrid();
            });
    };

    $scope.assignToDevice = function (device) {

        var apiCalls = [];
        GridService.getSelectedRows().forEach(function (selected) {
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
                    sample.deviceId = device.value;
                    sample.deviceName = device.display;
                    sample.projectId = response.data.projectId;
                    sample.projectName = response.data.projectName;

                    apiCalls.push(SampleService.update(sample));
                });

                AsynchronousService.resolveApiCalls(apiCalls)
                    .then(function (resp) {
                        ToastService.success('Samples Assigned To Device');
                    })
                    .catch(function (error) {
                        ToastService.error('Error Assigning Samples To Device');
                    })
                    .finally(function () {
                        GridService.updateGrid();
                        DialogService.close();
                    })
            })
            .catch(function (error) {
                ToastService.error('Error Retrieving Samples')
            });
    };

    $scope.closeDialog = function () {
        DialogService.close();
    };

    $scope.deselectRows = function () {
        GridService.deselectAll();
    };

    $scope.getNumberOfSelectedRows = function () {
        return GridService.getSelectedRows().length;
    };
});

angular.module('appController').controller('SampleAddController', function ($scope, SampleService, DeviceService,
                                                                            ProjectService, ToastService, AsynchronousService,
                                                                            $location, Enum, DialogService,
                                                                            LoadingService) {

    var init = function () {
        
        $scope.$parent.isLoading = LoadingService.toggle();

        var apiCalls = [];

        apiCalls.push(DeviceService.singleSelect());
        apiCalls.push(ProjectService.singleSelect());

        AsynchronousService.resolveApiCalls(apiCalls)
            .then(function (resp) {
                $scope.deviceOptions = resp[0].data;
                $scope.projectOptions = resp[1].data;
            })
            .catch(function (error) {
                DialogService.error('Error Loading Data');
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

        $scope.$parent.isLoading = LoadingService.toggle();
    };

    init();

    $scope.createSample = function () {

        $scope.$parent.isLoading = LoadingService.toggle();

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
				ToastService.success('Sample Saved');
				$location.path('/Sample/' + resp.data);
			})
			.catch(function (error) {
				DialogService.error('Error Saving Sample');
			})
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.toggle();
            })
	};

    $scope.cancel = function () {
        $location.path('/Sample');
    };

    $scope.goToEditDate = function ($event) {
        $scope.dialogTitle = 'Sample Date';
        DialogService.showDialog($scope, $event, '/views/sample/sample-date-dialog.html');
    };

    $scope.closeDialog = function () {
        DialogService.close();
    };

    $scope.refresh = function () {
        init();
    }
});

angular.module('appController').controller('SampleEditController', function ($scope, SampleService, MeasurementService,
                                                                             DeviceService, TestMethodService, UnitService,
                                                                             ProjectService, ToastService, $route,
                                                                             $routeParams, $location, AsynchronousService,
                                                                             DialogService, LoadingService) {

    var init = function () {
        
        $scope.$parent.isLoading = LoadingService.toggle();

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

                    if (resp[2].data.sampleIdentifierId != null) {
                        $scope.sample.sampleIdentifierId = resp[2].data.sampleIdentifierId;
                        $scope.sample.companyName = resp[2].data.companyName;
                        $scope.sample.creationDate = resp[2].data.creationDate;
                        $scope.sample.sampleIdentity = resp[2].data.sampleIdentity;
                    }

                    $scope.sample.status = resp[2].data.status;
                    $scope.sample.comment = resp[2].data.comment;

                    if (resp[2].data.deviceId != null) {
                        $scope.deviceOptions.forEach(function (option) {
                            if (option.value === resp[2].data.deviceId) {
                                $scope.sample.device = option;
                            }
                        });
                        $scope.deviceId = resp[2].data.deviceId;
                    }
                    if (resp[2].data.projectId != null) {
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
                                sampleId: resp[3].data[i].sampleId,
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

                populateSamplePromise.then(function () {
                });
                populateMeasurementsPromise.then(function () {
                });
            })
            .catch(function (error) {
                DialogService.error('Error Retrieving Sample');
                $location.path('/Sample');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.toggle();
            });
    };

    init();

    $scope.updateSample = function () {

        $scope.$parent.isLoading = LoadingService.toggle();

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
                ToastService.success('Sample Updated');
            })
            .catch(function (error) {
                DialogService.error('Error Updating Sample');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.toggle();
            })
    };

    $scope.createMeasurement = function ($event) {

        $scope.$parent.isLoading = LoadingService.toggle();

        var measurement = new Measurement();

        measurement.sampleId = $scope.sample.id;
        measurement.value = 0;
        measurement.temperature = 0;
        measurement.date = new Date();
        measurement.status = 'ACTIVE';

        MeasurementService.create(measurement)
            .then(function (resp) {
                $scope.measurements.push(
                    {
                        id: resp.data,
                        sampleId: $scope.sample.id,
                        date: measurement.date,
                        temperature: measurement.temperature,
                        testMethod: {},
                        value: measurement.value,
                        unit: {},
                        status: measurement.status
                    }
                );
                ToastService.success('Measurement Added');
            })
            .catch(function (error) {
                DialogService.error('Error Adding Measurement', $event)
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.toggle();
            });
    };

    $scope.updateMeasurement = function (rowData, $event) {

        $scope.$parent.isLoading = LoadingService.toggle();

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
                DialogService.error('Error Updating Measurement', $event)
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.toggle();
            })
    };

    $scope.removeMeasurement = function (index, id, $event) {

        $scope.$parent.isLoading = LoadingService.toggle();

        MeasurementService.remove(id)
            .then(function (resp) {
                ToastService.success('Measurement Deleted');
                $scope.measurements.splice(index, 1);
            })
            .catch(function (error) {
                DialogService.error('Error Deleting Measurement', $event)
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.toggle();
            });
    };

    $scope.goToEditDate = function ($event, index, currentValue) {
        $scope.dialogTitle = 'Measurement Date';
        $scope.newDate = currentValue;
        $scope.editedIndex = index;
        DialogService.showDialog($scope, $event, '/views/sample/measurement-date-dialog.html');
    };

    $scope.saveDate = function () {
        $scope.measurements[$scope.editedIndex].date = $scope.newDate;
    };

    $scope.closeDialog = function () {
        DialogService.close();
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