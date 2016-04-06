'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name ProjectOverviewController
 *
 * @param {service} $scope          The scope of this controller
 * @param {service} ProjectService  A service to handle the API calls involving projects
 * @param {service} $location       A service to handle the API calls involving projects
 * @param {service} DialogService   A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService     A service to handle the initialization of the grid
 * @description This controller contains all the information and functions to access user data held in the database.
 */
angular.module('appController').controller('ProjectOverviewController', function ($scope, ProjectService, $location, DialogService, GridService) {

    /**
     * @property {Object}   data                        This is a collection of data that is available to the controller
     * @property {string}   data.message                The message displayed as the page title
     */
    $scope.data = {};
    $scope.data.message = 'Project Overview Page';

    /**
     * Initializes the grid with data retrieved from the ProjectService
     * @param {object} the current options for the grid
     * @function init
     * @memberof GridService
     */
    GridService.init(
        function (options) {
            return ProjectService.getGrid(options)
        },
        ['id', 'clients', 'samples', 'users', 'investigatorId', 'comment']
    );

    /**
     * Navigates to the Add Project page
     * @function goToAddProject
     * @memberof ProjectOverviewController
     */
    $scope.goToAddProject = function () {
        $location.path('/Project/' + '0000000-000-000-0000000');
    };

    /**
     * Navigates to the Edit Project page for the selected project
     * @function goToEditProject
     * @memberof ProjectOverviewController
     */
    $scope.goToEditProject = function () {
        $location.path('/Project/' + GridService.getSelectedRows()[0].id);
    };

    /**
     * Generates a PDF report for the selected project
     * @function viewReport
     * @memberof ProjectOverviewController
     */
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

    /**
     * Gets the number of rows currently selected using the GridService
     * @function getNumberOfSelectedRows
     * @memberof ProjectOverviewController
     */
    $scope.getNumberOfSelectedRows = function() {
        return GridService.getSelectedRows().length;
    };
});

/**
 * @ngdoc controller
 * @memberof appController
 * @name ProjectAddController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} ProjectService      A service to handle the API calls involving projects
 * @param {service} ClientService       A service to handle the API calls involving clients
 * @param {service} UserService         A service to handle the API calls involving users
 * @param {service} InvestigatorService A service to handle the API calls involving investigators
 * @param {service} $location           A service to navigate and modify the URL
 * @param {model}   Enum                  A collection of Enums
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} AsynchronousService A service to handle multiple asynchronous API calls or functions
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} LoadingService      A service to handle the status and toggling of the loading bar
 * @description This controller contains all the information and functions to add projects to the database.
 */
angular.module('appController').controller('ProjectAddController', function ($scope, ProjectService, ClientService,
                                                                             UserService, InvestigatorService, $location,
                                                                             Enum, ToastService, AsynchronousService,
                                                                             DialogService, LoadingService) {
    
    /**
     * Initializes the page with simultaneous API calls using the Client, User, Investigator and Asynchronous Services
     * @function init
     * @memberof ProjectAddController
     */
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
    
    /**
     * Creates a project using the fields in the add page, and saves it to the database
     * @function createProject
     * @memberof ProjectAddController
     */
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
    
    /**
     * Brings up a dialog with options to modify the project's start date
     * @param {object} $event the event that launched the dialog
     * @function goToEditStartDate
     * @memberof ProjectAddController
     */
    $scope.goToEditStartDate = function ($event) {
        $scope.dialogTitle = 'Project Start Date';
        DialogService.showDialog($scope, $event, '/views/project/start-date-dialog.html');
    };
    
    /**
     * Brings up a dialog with options to modify the project's end date
     * @param {object} $event the event that launched the dialog
     * @function goToEditEndDate
     * @memberof ProjectAddController
     */
    $scope.goToEditEndDate = function ($event) {
        $scope.dialogTitle = 'Project End Date';
        DialogService.showDialog($scope, $event, '/views/project/end-date-dialog.html');
    };

    /**
     * Closes the currently open dialog(s) using the DialogService
     * @function closeDialog
     * @memberof ProjectAddController
     */
    $scope.closeDialog = function () {
        DialogService.close();
    };

    /**
     * Navigates to the Project Overview page
     * @function cancel
     * @memberof ProjectAddController
     */
    $scope.cancel = function () {
        $location.path('/Project');
    };

    /**
     * Refreshes the data on the page using the init function
     * @function refresh
     * @memberof ProjectAddController
     */
    $scope.refresh = function () {
        init();
        ToastService.success('Options Reloaded');
    }
});

/**
 * @ngdoc controller
 * @memberof appController
 * @name ProjectEditController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} ProjectService      A service to handle the API calls involving projects
 * @param {service} SampleService       A service to handle the API calls involving samples
 * @param {service} ClientService       A service to handle the API calls involving clients
 * @param {service} UserService         A service to handle the API calls involving users
 * @param {service} InvestigatorService A service to handle the API calls involving investigators
 * @param {model}   Enum                  A collection of Enums
 * @param {service} $location           A service to navigate and modify the URL
 * @param {service} $route              A service to view and modify the current route in the app. See {@link ngRoute} for more information
 * @param {service} $routeParams        A service to retrieve parameters from the current route in the app. See {@link ngRoute} for more information
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} AsynchronousService A service to handle multiple asynchronous API calls or functions
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService         A service to handle the requests and modifications of the grid
 * @param {service} LoadingService      A service to handle the status and toggling of the loading bar
 * @description This controller contains all the information and functions to view and edit projects from the database.
 */
angular.module('appController').controller('ProjectEditController', function ($scope, ProjectService, SampleService,
                                                                              ClientService, UserService, InvestigatorService,
                                                                              Enum, $location, $route, $routeParams,
                                                                              ToastService, AsynchronousService,
                                                                              DialogService, GridService, LoadingService) {

    /**
     * Initializes the page with simultaneous API calls using the Project, Sample, Client, User, Investigator and Asynchronous Services
     * @function init
     * @memberof ProjectEditController
     */
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

    /**
     * Initializes the grid with data retrieved from the SampleService
     * @param {object} the current options for the grid
     * @function init
     * @memberof GridService
     */
    GridService.init(
        function (options) {
            return SampleService.getGridByProjectId(options, $scope.data.param);
        },
        ['id', 'sampleIdentifierId', 'measurements', 'comment', 'projectId', 'projectName', 'deviceId']
    );

    /**
     * Modifies a project using the fields in the edit page, and updates it in the database
     * @function updateProject
     * @memberof ProjectEditController
     */
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

    /**
     * Brings up a dialog with options to modify the project's end date
     * @param {object} $event the event that launched the dialog
     * @function goToEditEndDate
     * @memberof ProjectEditController
     */
    $scope.goToEditEndDate = function ($event) {
        $scope.dialogTitle = 'Project End Date';
        DialogService.showDialog($scope, $event, '/views/project/end-date-dialog.html');
    };

    /**
     * Closes the currently open dialog(s) using the DialogService
     * @function closeDialog
     * @memberof ProjectEditController
     */
    $scope.closeDialog = function () {
        DialogService.close();
    };

    /**
     * Generates a PDF report for the currently viewed project
     * @function viewReport
     * @memberof ProjectEditController
     */
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

    /**
     * Removes currently selected samples from the project
     * @function removeFromProject
     * @memberof ProjectEditController
     */
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

    /**
     * Navigates to the Add Sample page for the current project to allow the addition of a sample
     * @function goToAddSample
     * @memberof ProjectEditController
     */
    $scope.goToAddSample = function () {
        $location.path('/Project/' + $scope.data.param + '/Sample/0000000-000-000-0000000');
    };

    /**
     * Navigates to the Edit Sample page for the current project to allow the modification of the sample
     * @function goToEditSample
     * @memberof ProjectEditController
     */
    $scope.goToEditSample = function () {
        $location.path('/Project/' + $scope.data.param + '/Sample/' + GridService.getSelectedRows()[0].id);
    };

    /**
     * Refreshes the data on the page and grid using the init and updateGrid functions
     * @function refresh
     * @memberof ProjectEditController
     */
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

/**
 * @ngdoc controller
 * @memberof appController
 * @name ProjectSampleAddController
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
 * @description This controller contains all the information and functions to add a sample to the current project from the database.
 */
angular.module('appController').controller('ProjectSampleAddController', function ($scope, SampleService, DeviceService,
                                                                                   ProjectService, ToastService, $route,
                                                                                   $routeParams, AsynchronousService, $location,
                                                                                   Enum, DialogService, LoadingService) {

    /**
     * @property {string}   data.projectId          The project id as taken from the current route using $routeParams
     */
    $scope.data.projectId = $routeParams.ProjectId;

    /**
     * Initializes the page with simultaneous API calls using the Sample, Device, Project and Asynchronous Services
     * @function init
     * @memberof ProjectSampleAddController
     */
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

    /**
     * Creates a sample using the fields in the add page, assigns it to the project, and saves it to the database
     * @function createSample
     * @memberof ProjectSampleAddController
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

    /**
     * Brings up a dialog with options to modify the samples's date
     * @param {object} $event the event that launched the dialog
     * @function goToEditDate
     * @memberof ProjectSampleAddController
     */
    $scope.goToEditDate = function ($event) {
        $scope.dialogTitle = 'Sample Date';
        DialogService.showDialog($scope, $event, '/views/sample/sample-date-dialog.html');
    };

    /**
     * Closes the currently open dialog(s) using the DialogService
     * @function closeDialog
     * @memberof ProjectSampleAddController
     */
    $scope.closeDialog = function () {
        DialogService.close();
    };

    /**
     * Navigates to the project page
     * @function closeDialog
     * @memberof ProjectSampleAddController
     */
    $scope.cancel = function () {
        $location.path('Project/' + $scope.projectId);
    };

    /**
     * Refreshes the data on the page using the init function
     * @function refresh
     * @memberof ProjectSampleAddController
     */
    $scope.refresh = function () {
        init();
        ToastService.success('Options Reloaded');
    }
});

/**
 * @ngdoc controller
 * @memberof appController
 * @name ProjectSampleEditController
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
 * @description This controller contains all the information and functions to view and edit a sample assigned to current project from the database.
 */
angular.module('appController').controller('ProjectSampleEditController', function ($scope, SampleService, MeasurementService,
                                                                             DeviceService, TestMethodService, UnitService,
                                                                             ProjectService, ToastService, $route,
                                                                             $routeParams, $location, AsynchronousService,
                                                                             DialogService, LoadingService) {

    /**
     * Initializes the page with simultaneous API calls using the Sample, Measurement, Device, Test Method, Unit, Project and Asynchronous Services
     * @function init
     * @memberof ProjectSampleEditController
     */
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

    /**
     * Updates the sample using the fields in the edit page, and saves it to the database
     * @function updateSample
     * @memberof ProjectSampleEditController
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

    /**
     * Creates a measurement using the fields in the edit page, and saves it to the database
     * @function createMeasurement
     * @memberof ProjectSampleEditController
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
     * @memberof ProjectSampleEditController
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
     * @memberof ProjectSampleEditController
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
     * @memberof ProjectSampleEditController
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
     * @memberof ProjectSampleEditController
     */
    $scope.saveDate = function () {
        $scope.measurements[$scope.editedIndex].date = $scope.newDate;
    };

    /**
     * Closes the currently open dialog(s) using the DialogService
     * @function closeDialog
     * @memberof ProjectSampleEditController
     */
    $scope.closeDialog = function () {
        DialogService.close();
    };

    /**
     * Navigates to the project's page which the sample is assigned to
     * @function viewProject
     * @memberof ProjectSampleEditController
     */
    $scope.viewProject = function () {
        $location.path('/Project/' + $scope.data.projectId);
    };

    /**
     * Navigates to the device's page which the sample is assigned to
     * @function viewDevice
     * @memberof ProjectSampleEditController
     */
    $scope.viewDevice = function () {
        $location.path('/Device/' + $scope.data.deviceId);
    };

    /**
     * Refreshes the data on the page using the init function
     * @function refresh
     * @memberof ProjectSampleEditController
     */
    $scope.refresh = function () {
        init();
        ToastService.success('Sample Reloaded');
    }
});