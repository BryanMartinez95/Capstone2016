'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name SampleOverviewController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} $location           A service to navigate and modify the URL
 * @param {service} $route              A service to view and modify the current route in the app. See {@link ngRoute} for more information
 * @param {service} $routeParams        A service to retrieve parameters from the current route in the app. See {@link ngRoute} for more information
 * @param {service} ProjectService      A service to handle the API calls involving projects
 * @param {service} AsynchronousService A service to handle multiple asynchronous API calls or functions
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService         A service to handle the requests and modifications of the grid
 * @param {service} ExportService       A service used to generate all the required information or convert JSON data into a CSV format for exporting
 * @description This controller contains all the information and functions to view samples from the database.
 */
angular.module('appController').controller('SampleOverviewController',
    ['$scope', 'SampleService', '$route', '$routeParams', '$location', 'ProjectService',
        'AsynchronousService', 'ToastService', 'DialogService', 'GridService', 'ExportService',
        function ($scope, SampleService, $route, $routeParams, $location, ProjectService,
                  AsynchronousService, ToastService, DialogService, GridService, ExportService) {

            /**
             * @property {Object}   data                        This is a collection of data that is available to the controller
             * @property {string}   data.message                The message displayed as the page title
             */
            $scope.data = {};
            $scope.data.message = 'Sample Overview Page';

            /**
             * Initializes the grid with data retrieved from the SampleService
             * @param {object} the current options for the grid
             * @function init
             * @memberof GridService
             */
            GridService.init(function (options) {
                    return SampleService.getGrid(options);
                },
                ['id', 'sampleIdentifierId', 'creationDate', 'measurements', 'comment', 'projectId', 'deviceId']
            );

            /**
             * Navigates to the Add Sample page to allow the addition of a sample
             * @function goToAddSample
             * @memberof SampleOverviewController
             */
            $scope.goToAddSample = function () {
                $location.path('/Sample/' + '0000000-000-000-0000000');
            };

            /**
             * Navigates to the Edit Sample page to allow the modification of the sample
             * @function goToEditSample
             * @memberof SampleOverviewController
             */
            $scope.goToEditSample = function () {
                $location.path('/Sample/' + $scope.options.selected[0].id);
            };

            /**
             * Loads in project options using the ProjectService
             * @function loadProjects
             * @memberof SampleOverviewController
             */
            $scope.loadProjects = function () {
                ProjectService.singleSelect()
                    .then(function (resp) {
                        $scope.projectOptions = resp.data;
                    })
                    .catch(function () {
                        ToastService.error('Error Retrieving Projects');
                    })
            };

            /**
             * Brings up a dialog to assign the selected samples to a project or device
             * @param {object} $event the event that brought up the dialog
             * @function assignSamples
             * @memberof SampleOverviewController
             */
            $scope.assignSamples = function ($event) {
                $scope.selectedProject = {};
                $scope.dialogTitle = 'Assign Selected Samples To Project';
                DialogService.showDialog($scope, $event, '/views/sample/assign-samples.html');
            };

            /**
             * Assigns the selected samples to a specified project
             * @function assignToProject
             * @memberof SampleOverviewController
             */
            $scope.assignToProject = function () {

                $scope.$parent.isLoading = LoadingService.activate();

                var sampleIds = [];

                angular.forEach(GridService.getSelectedRows(), function (value, key) {
                    if(sampleIds.indexOf(value === -1))
                    {
                        sampleIds.push(value.id)
                    }
                });

                SampleService.assignToProject(sampleIds, $scope.selectedProject.value)
                    .then(function () {
                        ToastService.success('Samples Assigned To Project');
                    })
                    .catch(function () {
                        ToastService.error('Error Assigning Samples To Project');
                    })
                    .finally(function () {
                        DialogService.close();
                        $scope.options.updateGrid();
                    });
            };

            /**
             * Retrieves all the samples that match the filters currently on the grid, then exports them to CSV
             * @function export
             * @memberof SampleOverviewController
             */
            $scope.export = function () {

                var exportRequestModel = {
                    filters: GridService.getCurrentFilters()
                };

                SampleService.exportSamples(exportRequestModel)
                    .then(function (resp) {
                        ExportService.exportData(resp.data);
                    })
                    .catch(function (error) {
                        DialogService.error('Error Exporting Samples');
                    })
            };

            /**
             * Closes the currently open dialog(s) using the DialogService
             * @function closeDialog
             * @memberof SampleOverviewController
             */
            $scope.closeDialog = function () {
                DialogService.close();
            };

            /**
             * Gets the number of rows currently selected using the GridService
             * @function getNumberOfSelectedRows
             * @memberof SampleOverviewController
             */
            $scope.getNumberOfSelectedRows = function () {
                return GridService.getSelectedRows().length;
            };
        }]);

/**
 * @ngdoc controller
 * @memberof appController
 * @name SampleAddController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} SampleService       A service to handle the API calls involving samples
 * @param {service} DeviceService       A service to handle the API calls involving devices
 * @param {service} ProjectService      A service to handle the API calls involving projects
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} AsynchronousService A service to handle multiple asynchronous API calls or functions
 * @param {service} $location           A service to navigate and modify the URL
 * @param {model}   Enum                A collection of Enums
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} LoadingService      A service to handle the status and toggling of the loading bar
 * @description This controller contains all the information and functions to add a sample to the database.
 */
angular.module('appController').controller('SampleAddController',
    ['$scope', 'SampleService', 'DeviceService', 'ProjectService', 'ToastService',
        'AsynchronousService', '$location', 'Enum', 'DialogService', 'LoadingService',
        function ($scope, SampleService, DeviceService, ProjectService, ToastService,
                  AsynchronousService, $location, Enum, DialogService, LoadingService) {

            /**
             * Initializes the page with simultaneous API calls using the Device, Project and Asynchronous Services
             * @function init
             * @memberof SampleAddController
             */
            var init = function () {

                $scope.$parent.isLoading = LoadingService.activate();

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

                $scope.$parent.isLoading = LoadingService.deactivate();
            };

            init();

            /**
             * Creates a sample using the fields in the add page, and saves it to the database
             * @function createSample
             * @memberof SampleAddController
             */
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
                        $scope.$parent.isLoading = LoadingService.deactivate();
                    })
            };

            /**
             * Navigates to the Sample Overview page
             * @function cancel
             * @memberof SampleAddController
             */
            $scope.cancel = function () {
                $location.path('/Sample');
            };

            /**
             * Brings up a dialog with options to modify the samples's date
             * @param {object} $event the event that launched the dialog
             * @function goToEditDate
             * @memberof SampleAddController
             */
            $scope.goToEditDate = function ($event) {
                $scope.dialogTitle = 'Sample Date';
                DialogService.showDialog($scope, $event, '/views/sample/sample-date-dialog.html');
            };

            /**
             * Closes the currently open dialog(s) using the DialogService
             * @function closeDialog
             * @memberof SampleAddController
             */
            $scope.closeDialog = function () {
                DialogService.close();
            };

            /**
             * Refreshes the data on the page using the init function
             * @function refresh
             * @memberof SampleAddController
             */
            $scope.refresh = function () {
                init();
                ToastService.success('Options Reloaded');
            }
        }]);

/**
 * @ngdoc controller
 * @memberof appController
 * @name SampleEditController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} SampleService       A service to handle the API calls involving samples
 * @param {service} MeasurementService  A service to handle the API calls involving measurements
 * @param {service} DeviceService       A service to handle the API calls involving devices
 * @param {service} TestMethodService   A service to handle the API calls involving test methods
 * @param {service} UnitService         A service to handle the API calls involving units
 * @param {service} ProjectService      A service to handle the API calls involving projects
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} $route              A service to view and modify the current route in the app. See {@link ngRoute} for more information
 * @param {service} $routeParams        A service to retrieve parameters from the current route in the app. See {@link ngRoute} for more information
 * @param {service} $location           A service to navigate and modify the URL
 * @param {service} AsynchronousService A service to handle multiple asynchronous API calls or functions
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} LoadingService      A service to handle the status and toggling of the loading bar
 * @description This controller contains all the information and functions to view and edit a sample from the database.
 */
angular.module('appController').controller('SampleEditController',
    ['$scope', 'SampleService', 'MeasurementService', 'DeviceService', 'TestMethodService', 'UnitService',
        'ProjectService', 'ToastService', '$route', '$routeParams', 'AsynchronousService', '$location',
        'DialogService', 'LoadingService',
        function ($scope, SampleService, MeasurementService, DeviceService, TestMethodService, UnitService,
                  ProjectService, ToastService, $route, $routeParams, AsynchronousService, $location,
                  DialogService, LoadingService) {

            /**
             * Initializes the page with simultaneous API calls using the Sample, Measurement, Device, Test Method, Unit, Project and Asynchronous Services
             * @function init
             * @memberof SampleEditController
             */
            var init = function () {

                $scope.$parent.isLoading = LoadingService.activate();

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
                        $scope.$parent.isLoading = LoadingService.deactivate();
                    });
            };

            init();

            /**
             * Updates the sample using the fields in the edit page, and saves it to the database
             * @function updateSample
             * @memberof SampleEditController
             */
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

                if($scope.sample.project != null)
                {
                    sample.projectId = $scope.sample.project.value;
                    sample.projectName = $scope.sample.project.display;
                }

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

            /**
             * Creates a measurement using the fields in the edit page, and saves it to the database
             * @function createMeasurement
             * @memberof SampleEditController
             */
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
                                status: measurement.status,
                                edit: true
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

            /**
             * Modifies the measurement using the fields in the edit page, and updates it in the database
             * @function updateMeasurement
             * @memberof SampleEditController
             */
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

            /**
             * Removes the specified measurement from the database
             * @function removeMeasurement
             * @memberof SampleEditController
             */
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

            /**
             * Brings up a dialog with options to modify the measurements's date
             * @param {object} $event the event that launched the dialog
             * @param {int} index the specific measurement that launched the dialog
             * @param {date} currentValue the current date that is stored for the measurement
             * @function goToEditDate
             * @memberof SampleEditController
             */
            $scope.goToEditDate = function ($event, index, currentValue) {
                $scope.dialogTitle = 'Measurement Date';
                $scope.newDate = currentValue;
                $scope.editedIndex = index;
                DialogService.showDialog($scope, $event, '/views/sample/measurement-date-dialog.html');
            };

            /**
             * Saves the selected date as the measurement's date
             * @function saveDate
             * @memberof SampleEditController
             */
            $scope.saveDate = function () {
                $scope.measurements[$scope.editedIndex].date = $scope.newDate;
            };

            /**
             * Closes the currently open dialog(s) using the DialogService
             * @function closeDialog
             * @memberof SampleEditController
             */
            $scope.closeDialog = function () {
                DialogService.close();
            };

            /**
             * Navigates to the sample overview page
             * @function back
             * @memberof SampleEditController
             */
            $scope.back = function () {
                $location.path('/Sample');
            };

            /**
             * Navigates to the project's page which the sample is assigned to
             * @function viewProject
             * @memberof SampleEditController
             */
            $scope.viewProject = function () {
                $location.path('/Project/' + $scope.projectId);
            };

            /**
             * Refreshes the data on the page using the init function
             * @function refresh
             * @memberof SampleEditController
             */
            $scope.refresh = function () {
                init();
                ToastService.success('Sample Reloaded');
            }
        }]);