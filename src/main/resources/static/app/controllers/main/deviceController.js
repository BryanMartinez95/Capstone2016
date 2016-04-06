'use strict';

angular.module('appController').controller('DeviceOverviewController', function ($scope, DeviceService, $location, GridService) {

    $scope.data = {};
    $scope.data.message = "Device Overview Page";

    GridService.init(
        function (options) {
            return DeviceService.getGrid(options);
        },
        ['id', 'comment']
    );

    $scope.goToEditDevice = function () {
        $location.path("/Device/" + $scope.options.selected[0].id);
    };
});

angular.module('appController').controller('DeviceEditController', function ($scope, DeviceService, SampleService,
                                                                             $location, $route, $routeParams,
                                                                             ToastService, DialogService, GridService, LoadingService) {

    $scope.data.param = $routeParams.Id;

    var init = function () {

        DeviceService.findOne($scope.data.param)
            .then(function (resp) {
                $scope.device = {};
                $scope.device.id = resp.data.id;
                $scope.device.name = resp.data.name;
                $scope.device.status = resp.data.status;
                $scope.device.comment = resp.data.comment;
            })
            .catch(function (error) {
                DialogService.error('Error Retrieving Device');
                $location.path('/Device');
            })
    };

    init();

    GridService.init(
        function(options) {
            return SampleService.getGridByDeviceId(options, $scope.data.param);
        },
        ['id', 'sampleIdentifierId', 'measurements', 'comment', 'projectId', 'projectName', 'deviceId']
    );

    $scope.updateDevice = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        var device = new Device();

        device.id = $scope.device.id;
        device.name = $scope.device.name;
        device.comment = $scope.device.comment;
        device.status = $scope.device.status;

        DeviceService.update(device)
            .then(function (resp) {
                ToastService.success('Device Updated');
            })
            .catch(function (error) {
                DialogService.error('Error Updating Device');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            });
    };

    /**
     * Navigates to the Add Sample page for the current device to allow the addition of a sample
     * @function goToAddSample
     * @memberof DeviceEditController
     */
    $scope.goToAddSample = function () {
        $location.path('/Device/' + $scope.data.param + '/Sample/0000000-000-000-0000000');
    };

    /**
     * Navigates to the Edit Sample page for the current device to allow the modification of the sample
     * @function goToEditSample
     * @memberof DeviceEditController
     */
    $scope.goToEditSample = function () {
        $location.path('/Device/' + $scope.data.param + '/Sample/' + GridService.getSelectedRows()[0].id);
    };

    /**
     * Gets the number of rows currently selected using the GridService
     * @function getNumberOfSelectedRows
     * @memberof DeviceEditController
     */
    $scope.getNumberOfSelectedRows = function() {
        return GridService.getSelectedRows().length;
    };

    $scope.refresh = function () {
        init();
        $scope.options.updateGrid();
        ToastService.success('Device Reloaded');
    }
});

/**
 * @ngdoc controller
 * @memberof appController
 * @name DeviceSampleAddController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} SampleService       A service to handle the API calls involving samples
 * @param {service} DeviceService       A service to handle the API calls involving devices
 * @param {service} ProjectService      A service to handle the API calls involving projects
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} $route              A service to view and modify the current route in the app. See {@link ngRoute} for more information
 * @param {service} $routeParams        A service to retrieve parameters from the current route in the app. See {@link ngRoute} for more information
 * @param {service} AsynchronousService A service to handle multiple asynchronous API calls or functions
 * @param {service} $location           A service to navigate and modify the URL
 * @param {model}   Enum                A collection of Enums
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} LoadingService      A service to handle the status and toggling of the loading bar
 * @description This controller contains all the information and functions to add a sample to the current device from the database.
 */
angular.module('appController').controller('DeviceSampleAddController', function ($scope, SampleService, DeviceService,
                                                                                   ProjectService, ToastService, $route,
                                                                                   $routeParams, AsynchronousService, $location,
                                                                                   Enum, DialogService, LoadingService) {

    /**
     * @property {string}   data.deviceId          The device id as taken from the current route using $routeParams
     */
    $scope.data.deviceId = $routeParams.DeviceId;

    /**
     * Initializes the page with simultaneous API calls using the Sample, Device, Project and Asynchronous Services
     * @function init
     * @memberof DeviceSampleAddController
     */
    var init = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        var apiCalls = [];

        apiCalls.push(ProjectService.singleSelect());
        apiCalls.push(DeviceService.findOne($scope.data.deviceId));

        AsynchronousService.resolveApiCalls(apiCalls)
            .then(function (resp) {
                $scope.projectOptions = resp[0].data;
                $scope.deviceId = resp[1].data.id;
                $scope.deviceName = resp[1].data.name;
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
        $scope.sample.project = {};
        $scope.sample.status = Enum.Status.Active.value;
        $scope.sample.comment = null;

        $scope.$parent.isLoading = LoadingService.deactivate();
    };

    init();

    /**
     * Creates a sample using the fields in the add page, assigns it to the device, and saves it to the database
     * @function createSample
     * @memberof DeviceSampleAddController
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
        sample.deviceId = $scope.deviceId;
        sample.deviceName = $scope.deviceName;
        sample.projectId = $scope.sample.project.value;
        sample.projectName = $scope.sample.project.display;

        SampleService.create(sample)
            .then(function (resp) {
                ToastService.success('Sample Saved');
                $location.path('Device/' + $scope.deviceId + '/Sample/' + resp.data);
            })
            .catch(function (error) {
                DialogService.error('Error Saving Sample');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            })
    };

    /**
     * Brings up a dialog with options to modify the samples's date
     * @param {object} $event the event that launched the dialog
     * @function goToEditDate
     * @memberof DeviceSampleAddController
     */
    $scope.goToEditDate = function ($event) {
        $scope.dialogTitle = 'Sample Date';
        DialogService.showDialog($scope, $event, '/views/sample/sample-date-dialog.html');
    };

    /**
     * Closes the currently open dialog(s) using the DialogService
     * @function closeDialog
     * @memberof DeviceSampleAddController
     */
    $scope.closeDialog = function () {
        DialogService.close();
    };

    /**
     * Navigates to the project page
     * @function closeDialog
     * @memberof DeviceSampleAddController
     */
    $scope.cancel = function () {
        $location.path('Device/' + $scope.data.deviceId);
    };

    /**
     * Refreshes the data on the page using the init function
     * @function refresh
     * @memberof DeviceSampleAddController
     */
    $scope.refresh = function () {
        init();
        ToastService.success('Options Reloaded');
    }
});

/**
 * @ngdoc controller
 * @memberof appController
 * @name DeviceSampleEditController
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
 * @description This controller contains all the information and functions to view and edit a sample assigned to current device from the database.
 */
angular.module('appController').controller('DeviceSampleEditController', function ($scope, SampleService, MeasurementService,
                                                                                    DeviceService, TestMethodService, UnitService,
                                                                                    ProjectService, ToastService, $route,
                                                                                    $routeParams, $location, AsynchronousService,
                                                                                    DialogService, LoadingService) {

    /**
     * Initializes the page with simultaneous API calls using the Sample, Measurement, Device, Test Method, Unit, Project and Asynchronous Services
     * @function init
     * @memberof DeviceSampleEditController
     */
    var init = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        $scope.data.deviceId = $routeParams.DeviceId;
        $scope.data.sampleId = $routeParams.SampleId;

        var apiCalls = [];

        apiCalls.push(ProjectService.singleSelect());
        apiCalls.push(SampleService.findOne($scope.data.sampleId));
        apiCalls.push(MeasurementService.findBySampleId($scope.data.sampleId));
        apiCalls.push(TestMethodService.singleSelect());
        apiCalls.push(UnitService.singleSelect());

        AsynchronousService.resolveApiCalls(apiCalls)
            .then(function (resp) {
                $scope.projectOptions = resp[0].data;
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

                    if (resp[1].data.projectId != null) {
                        $scope.projectOptions.forEach(function (option) {
                            if (option.value === resp[1].data.projectId) {
                                $scope.sample.project = option;
                            }
                        });
                        $scope.data.projectId = resp[1].data.projectId;
                    }

                    $scope.data.deviceName = resp[1].data.deviceName;

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

    /**
     * Updates sample using the fields in the edit page, and saves it to the database
     * @function updateSample
     * @memberof DeviceSampleEditController
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
        sample.deviceId = $scope.data.deviceId;
        sample.deviceName = $scope.data.deviceName;
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
                $scope.$parent.isLoading = LoadingService.deactivate();
            })
    };

    /**
     * Creates a measurement using the fields in the edit page, and saves it to the database
     * @function createMeasurement
     * @memberof DeviceSampleEditController
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

    /**
     * Modifies the measurement using the fields in the edit page, and updates it in the database
     * @function updateMeasurement
     * @memberof DeviceSampleEditController
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
     * @memberof DeviceSampleEditController
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
     * @memberof DeviceSampleEditController
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
     * @memberof DeviceSampleEditController
     */
    $scope.saveDate = function () {
        $scope.measurements[$scope.editedIndex].date = $scope.newDate;
    };

    /**
     * Closes the currently open dialog(s) using the DialogService
     * @function closeDialog
     * @memberof DeviceSampleEditController
     */
    $scope.closeDialog = function () {
        DialogService.close();
    };

    /**
     * Navigates to the project's page which the sample is assigned to
     * @function viewProject
     * @memberof DeviceSampleEditController
     */
    $scope.viewProject = function () {
        $location.path('/Project/' + $scope.data.projectId);
    };

    /**
     * Navigates to the device's page which the sample is assigned to
     * @function viewDevice
     * @memberof DeviceSampleEditController
     */
    $scope.viewDevice = function () {
        $location.path('/Device/' + $scope.data.deviceId);
    };

    /**
     * Refreshes the data on the page using the init function
     * @function refresh
     * @memberof DeviceSampleEditController
     */
    $scope.refresh = function () {
        init();
        ToastService.success('Sample Reloaded');
    }
});