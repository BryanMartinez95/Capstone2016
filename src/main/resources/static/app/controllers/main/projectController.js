'use strict';

angular.module('appController').controller('ProjectOverviewController', function ($scope, ProjectService, $location, DialogService, GridService) {

    $scope.data = {};
    $scope.data.message = 'Project Overview Page';

    GridService.init(
        function (options) {
            return ProjectService.getGrid(options)
        },
        ['id', 'clients', 'samples', 'users', 'investigatorId', 'comment']
    );

    $scope.goToAddProject = function () {
        $location.path('/Project/' + '0000000-000-000-0000000');
    };

    $scope.goToEditProject = function () {
        $location.path('/Project/' + GridService.getSelectedRows()[0].id);
    };

    $scope.viewReport = function () {
        ProjectService.viewReport(GridService.getSelectedRows()[0].id)
            .then(function (resp) {
                var pdf = new Blob([resp.data], {type: 'application/pdf'});
                var pdfURL = URL.createObjectURL(pdf);
                window.open(pdfURL);
            })
            .catch(function (error) {
                DialogService.error('Error Generating Report');
            });
    };

    $scope.getNumberOfSelectedRows = function() {
        return GridService.getSelectedRows().length;
    };
});

angular.module('appController').controller('ProjectAddController', function ($scope, ProjectService, ClientService,
                                                                             UserService, InvestigatorService, $location,
                                                                             Enum, ToastService, AsynchronousService,
                                                                             DialogService, LoadingService) {

    var init = function () {
        $scope.$parent.isLoading = LoadingService.activate();

        var apiCalls = [];

        apiCalls.push(ClientService.singleSelect());
        apiCalls.push(UserService.singleSelect());
        apiCalls.push(InvestigatorService.singleSelect());

        AsynchronousService.resolveApiCalls(apiCalls)
            .then(function (resp) {
                $scope.clientOptions = resp[0].data;
                $scope.userOptions = resp[1].data;
                $scope.investigatorOptions = resp[2].data;
            })
            .catch(function (error) {
                DialogService.error('Error Loading Data');
            });

        $scope.project = {};
        $scope.project.projectId = null;
        $scope.project.name = null;
        $scope.project.startDate = new Date();
        $scope.project.endDate = new Date();
        $scope.project.clients = [];
        $scope.project.users = [];
        $scope.project.investigator = {};
        $scope.project.status = Enum.Status.Active.value;

        $scope.$parent.isLoading = LoadingService.deactivate();
    };

    init();

    $scope.createProject = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        var project = new Project();

        project.projectId = $scope.project.projectId;
        project.name = $scope.project.name;
        project.startDate = $scope.project.startDate;
        project.endDate = $scope.project.endDate;

        project.clients = [];
        $scope.project.clients.forEach(function (selection) {
            project.clients.push(selection.value);
        });

        project.users = [];
        $scope.project.users.forEach(function (selection) {
            project.users.push(selection.value);
        });

        project.investigatorId = $scope.project.investigator.value;
        project.comment = $scope.project.comment;
        project.status = $scope.project.status;

        ProjectService.create(project)
            .then(function (resp) {
                ToastService.success('Project Saved');
                $location.path('/Project/' + resp.data);
            })
            .catch(function (error) {
                DialogService.error('Error Saving Project');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            });
    };

    $scope.goToEditStartDate = function ($event) {
        $scope.dialogTitle = 'Project Start Date';
        DialogService.showDialog($scope, $event, '/views/project/start-date-dialog.html');
    };

    $scope.goToEditEndDate = function ($event) {
        $scope.dialogTitle = 'Project End Date';
        DialogService.showDialog($scope, $event, '/views/project/end-date-dialog.html');
    };

    $scope.closeDialog = function () {
        DialogService.close();
    };

    $scope.cancel = function () {
        $location.path('/Project');
    };

    $scope.refresh = function () {
        init();
        ToastService.success('Options Reloaded');
    }
});

angular.module('appController').controller('ProjectEditController', function ($scope, ProjectService, SampleService,
                                                                              ClientService, UserService, InvestigatorService,
                                                                              Enum, $location, $route, $routeParams,
                                                                              ToastService, GridRequestModel, AsynchronousService,
                                                                              DialogService, GridService, LoadingService) {

    var init = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        $scope.data.param = $routeParams.Id;

        var apiCalls = [];

        apiCalls.push(ClientService.singleSelect());
        apiCalls.push(UserService.singleSelect());
        apiCalls.push(InvestigatorService.singleSelect());
        apiCalls.push(ProjectService.findOne($scope.data.param));

        AsynchronousService.resolveApiCalls(apiCalls)
            .then(function (resp) {
                $scope.clientOptions = resp[0].data;
                $scope.userOptions = resp[1].data;
                $scope.investigatorOptions = resp[2].data;

                var populateProjectPromise = ProjectService.findOne($scope.data.param);

                populateProjectPromise.then(function (resp) {
                    $scope.project = {};
                    $scope.project.id = resp.data.id;
                    $scope.project.projectId = resp.data.projectId;
                    $scope.project.name = resp.data.name;
                    $scope.project.startDate = new Date(resp.data.startDate);
                    $scope.project.endDate = new Date(resp.data.endDate);

                    $scope.project.clients = [];
                    $scope.clientOptions.forEach(function (option) {
                        resp.data.clients.forEach(function (value) {
                            if (option.value === value) {
                                $scope.project.clients.push(option)
                            }
                        });
                    });

                    $scope.project.users = [];
                    $scope.userOptions.forEach(function (option) {

                        resp.data.users.forEach(function (value) {
                            if (option.value === value) {
                                $scope.project.users.push(option)
                            }
                        });
                    });

                    $scope.investigatorOptions.forEach(function (option) {
                        if (option.value === resp.data.investigatorId)
                            $scope.project.investigator = option;
                    });

                    $scope.project.status = resp.data.status;
                    $scope.project.comment = resp.data.comment;
                })
            })
            .catch(function (error) {
                DialogService.error('Error Retrieving Project');
                $location.path('/Project');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            });
    };

    init();

    GridService.init(
        function (options) {
            return SampleService.getGridByProjectId(options, $scope.data.param);
        },
        ['id', 'sampleIdentifierId', 'measurements', 'comment', 'projectId', 'projectName', 'deviceId']
    );

    $scope.updateProject = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        var project = new Project();

        project.id = $scope.project.id;
        project.projectId = $scope.project.projectId;
        project.name = $scope.project.name;
        project.startDate = $scope.project.startDate;
        project.endDate = $scope.project.endDate;

        project.clients = [];
        $scope.project.clients.forEach(function (selection) {
            project.clients.push(selection.value);
        });

        project.users = [];
        $scope.project.users.forEach(function (selection) {
            project.users.push(selection.value);
        });

        project.investigatorId = $scope.project.investigator.value;
        project.comment = $scope.project.comment;
        project.status = $scope.project.status;

        ProjectService.update(project)
            .then(function (resp) {
                init();
                ToastService.success('Project Updated');
            })
            .catch(function (error) {
                DialogService.error('Error Updating Project');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            });
    };

    $scope.goToEditEndDate = function ($event) {
        $scope.dialogTitle = 'Project End Date';
        DialogService.showDialog($scope, $event, '/views/project/end-date-dialog.html');
    };

    $scope.closeDialog = function () {
        DialogService.close();
    };

    $scope.viewReport = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        ProjectService.viewReport($scope.project.id)
            .then(function (resp) {
                var pdf = new Blob([resp.data], {type: 'application/pdf'});
                var pdfURL = URL.createObjectURL(pdf);
                window.open(pdfURL);
            })
            .catch(function (error) {
                DialogService.error('Error Generating Report');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            });
    };

    $scope.removeFromProject = function () {

        var apiCalls = [];

        GridService.getSelectedRows().forEach(function (selected) {
            apiCalls.push(SampleService.findOne(selected.id));
        });

        AsynchronousService.resolveApiCalls(apiCalls).then(function (responses) {

                apiCalls = [];

                responses.forEach(function (resp) {
                    var sample = new Sample();

                    sample.id = resp.data.id;
                    sample.labId = resp.data.labId;
                    sample.sampleIdentifierId = resp.data.sampleIdentifierId;
                    sample.companyName = resp.data.companyName;
                    sample.creationDate = resp.data.creationDate;
                    sample.sampleIdentity = resp.data.sampleIdentity;
                    sample.date = resp.data.date;
                    sample.status = resp.data.status;
                    sample.comment = resp.data.comment;
                    sample.deviceId = resp.data.deviceId;
                    sample.deviceName = resp.data.deviceName;
                    sample.projectId = null;
                    sample.projectName = null;

                    apiCalls.push(SampleService.update(sample));
                });

                AsynchronousService.resolveApiCalls(apiCalls).then(function (resp) {
                    ToastService.success('Samples Removed');
                })
            })
            .catch(function (error) {
                DialogService.error('Error Removing Samples');
            })
            .finally(function () {
                $scope.options.updateGrid();
            });
    };

    $scope.goToAddSample = function () {
        $location.path('/Project/' + $scope.data.param + '/Sample/0000000-000-000-0000000');
    };

    $scope.goToEditSample = function () {
        $location.path('/Project/' + $scope.data.param + '/Sample/' + GridService.getSelectedRows()[0].id);
    };

    $scope.refresh = function () {
        init();
        $scope.options.updateGrid();
        ToastService.success('Project Reloaded');
    };

    /**
     * Gets the number of rows currently selected using the GridService
     * @function getNumberOfSelectedRows
     * @memberof ProjectEditController
     */
    $scope.getNumberOfSelectedRows = function() {
        return GridService.getSelectedRows().length;
    };
});

angular.module('appController').controller('ProjectSampleAddController', function ($scope, SampleService, DeviceService,
                                                                                   ProjectService, ToastService, $route,
                                                                                   $routeParams, AsynchronousService, $location,
                                                                                   Enum, DialogService, LoadingService) {

    $scope.data.projectId = $routeParams.ProjectId;

    var init = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        var apiCalls = [];

        apiCalls.push(DeviceService.singleSelect());
        apiCalls.push(ProjectService.findOne($scope.data.projectId));

        AsynchronousService.resolveApiCalls(apiCalls)
            .then(function (resp) {
                $scope.deviceOptions = resp[0].data;
                $scope.projectId = resp[1].data.id;
                $scope.projectName = resp[1].data.name;
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
        $scope.sample.status = Enum.Status.Active.value;
        $scope.sample.comment = null;

        $scope.$parent.isLoading = LoadingService.deactivate();
    };

    init();

    $scope.createSample = function () {

        $scope.$parent.isLoading = LoadingService.activate();

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
        sample.projectId = $scope.projectId;
        sample.projectName = $scope.projectName;

        SampleService.create(sample)
            .then(function (resp) {
                ToastService.success('Sample Saved');
                $location.path('Project/' + $scope.projectId + '/Sample/' + resp.data);
            })
            .catch(function (error) {
                DialogService.error('Error Saving Sample');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            })
    };

    $scope.goToEditDate = function ($event) {
        $scope.dialogTitle = 'Sample Date';
        DialogService.showDialog($scope, $event, '/views/sample/sample-date-dialog.html');
    };

    $scope.closeDialog = function () {
        DialogService.close();
    };

    $scope.cancel = function () {
        $location.path('Project/' + $scope.projectId);
    };

    $scope.refresh = function () {
        init();
        ToastService.success('Options Reloaded');
    }
});

angular.module('appController').controller('ProjectSampleEditController', function ($scope, SampleService, MeasurementService,
                                                                             DeviceService, TestMethodService, UnitService,
                                                                             ProjectService, ToastService, $route,
                                                                             $routeParams, $location, AsynchronousService,
                                                                             DialogService, LoadingService) {

    var init = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        $scope.data.projectId = $routeParams.ProjectId;
        $scope.data.sampleId = $routeParams.SampleId;

        var apiCalls = [];

        apiCalls.push(DeviceService.singleSelect());
        apiCalls.push(SampleService.findOne($scope.data.sampleId));
        apiCalls.push(MeasurementService.findBySampleId($scope.data.sampleId));
        apiCalls.push(TestMethodService.singleSelect());
        apiCalls.push(UnitService.singleSelect());

        AsynchronousService.resolveApiCalls(apiCalls)
            .then(function (resp) {
                $scope.deviceOptions = resp[0].data;
                $scope.testMethodOptions = resp[3].data;
                $scope.unitOptions = resp[4].data;

                var populateSamplePromise = AsynchronousService.resolveAsynchOperation(function () {
                    $scope.sample = {};
                    $scope.sample.id = resp[1].data.id;
                    $scope.sample.labId = resp[1].data.labId;
                    $scope.sample.date = new Date(resp[1].data.date);

                    if (resp[1].data.sampleIdentifierId != null) {
                        $scope.sample.sampleIdentifierId = resp[1].data.sampleIdentifierId;
                        $scope.sample.companyName = resp[1].data.companyName;
                        $scope.sample.creationDate = resp[1].data.creationDate;
                        $scope.sample.sampleIdentity = resp[1].data.sampleIdentity;
                    }

                    $scope.sample.status = resp[1].data.status;
                    $scope.sample.comment = resp[1].data.comment;

                    if (resp[1].data.deviceId != null) {
                        $scope.deviceOptions.forEach(function (option) {
                            if (option.value === resp[1].data.deviceId) {
                                $scope.sample.device = option;
                            }
                        });
                        $scope.data.deviceId = resp[1].data.deviceId;
                    }

                    $scope.data.projectName = resp[1].data.projectName;

                }, resp[1]);

                var populateMeasurementsPromise = AsynchronousService.resolveAsynchOperation(function () {

                    $scope.measurements = [];

                    for (var i = 0; i < resp[2].data.length; i++) {
                        $scope.measurements.push(
                            {
                                id: resp[2].data[i].id,
                                sampleId: resp[2].data[i].sampleId,
                                temperature: resp[2].data[i].temperature,
                                testMethod: {},
                                value: resp[2].data[i].value,
                                unit: {},
                                date: new Date(resp[2].data[i].date),
                                status: resp[2].data[i].status,
                                edit: false
                            }
                        );

                        $scope.testMethodOptions.forEach(function (option) {
                            if (option.value === resp[2].data[i].testMethodId) {
                                $scope.measurements[i].testMethod = option;
                            }
                        });

                        $scope.unitOptions.forEach(function (option) {
                            if (option.value === resp[2].data[i].unitId) {
                                $scope.measurements[i].unit = option;
                            }
                        });
                    }
                }, resp[2]);

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
                $scope.$parent.isLoading = LoadingService.deactivate();
            });
    };

    init();

    $scope.updateSample = function () {

        $scope.$parent.isLoading = LoadingService.activate();

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
        sample.projectId = $scope.data.projectId;
        sample.projectName = $scope.data.projectName;

        SampleService.update(sample)
            .then(function (resp) {
                ToastService.success('Sample Updated');
            })
            .catch(function (error) {
                DialogService.error('Error Updating Sample');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            })
    };

    $scope.createMeasurement = function ($event) {

        $scope.$parent.isLoading = LoadingService.activate();

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
                $scope.$parent.isLoading = LoadingService.deactivate();
            });
    };

    $scope.updateMeasurement = function (rowData, $event) {

        $scope.$parent.isLoading = LoadingService.activate();

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
                $scope.$parent.isLoading = LoadingService.deactivate();
            })
    };

    $scope.removeMeasurement = function (index, id, $event) {

        $scope.$parent.isLoading = LoadingService.activate();

        MeasurementService.remove(id)
            .then(function (resp) {
                ToastService.success('Measurement Deleted');
                $scope.measurements.splice(index, 1);
            })
            .catch(function (error) {
                DialogService.error('Error Deleting Measurement', $event)
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
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

    $scope.viewProject = function () {
        $location.path('/Project/' + $scope.data.projectId);
    };

    $scope.viewDevice = function () {
        $location.path('/Device/' + $scope.data.deviceId);
    };

    $scope.refresh = function () {
        init();
        ToastService.success('Sample Reloaded');
    }
});