'use strict';

angular.module('appController').controller('ProjectOverviewController', function ($scope, ProjectService, $location, DialogService, GridService) {

    $scope.data = {};
    $scope.data.message = "Project Overview Page";

    GridService.init(
        function (options) {
            return ProjectService.getGrid(options)
        },
        ['id', 'clients', 'samples', 'users', 'investigatorId', 'comment']
    );

    $scope.goToAddProject = function () {
        $location.path("/Project/" + '0000000-000-000-0000000');
    };

    $scope.goToEditProject = function () {
        $location.path("/Project/" + $scope.options.selected[0].id);
    };

    $scope.viewReport = function () {
        ProjectService.viewReport($scope.options.selected[0].id)
            .then(function (resp) {
                var pdf = new Blob([resp.data], {type: 'application/pdf'});
                var pdfURL = URL.createObjectURL(pdf);
                window.open(pdfURL);
            })
            .catch(function (error) {
                DialogService.error('Error Generating Report');
            });
    };
});

angular.module('appController').controller('ProjectAddController', function ($scope, ProjectService, ClientService,
                                                                             UserService, InvestigatorService, $location,
                                                                             Enum, ToastService, $mdDialog,
                                                                             AsynchronousService, DialogService) {

    var init = function () {
        $scope.$parent.isLoading = true;

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

        $scope.$parent.isLoading = false;
    };

    init();

    $scope.createProject = function () {

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
                ToastService.success('Saved');
                $location.path('/Project/' + resp.data);
            })
            .catch(function (error) {
                DialogService.error('Error Saving Project');
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
        $location.path("/Project");
    };

    $scope.refresh = function () {
        init();
    }
});

angular.module('appController').controller('ProjectEditController', function ($scope, ProjectService, SampleService,
                                                                              ClientService, UserService, InvestigatorService,
                                                                              Enum, $location, $route, $routeParams,
                                                                              $mdDialog, ToastService, GridRequestModel,
                                                                              AsynchronousService, DialogService, GridService) {

    var init = function () {

        $scope.$parent.isLoading = true;

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
                $scope.$parent.isLoading = false;
            });
    };

    init();

    GridService.init(
        function (options) {
            SampleService.getGrid(options);
        },
        ['id', 'sampleIdentifierId', 'measurements', 'comment', 'projectId', 'projectName', 'deviceId']
    );

    $scope.updateProject = function () {

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
                ToastService.success('Project Updated');
            })
            .catch(function (error) {
                DialogService.error('Error Updating Project');
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
        ProjectService.viewReport($scope.project.id)
            .then(function (resp) {
                var pdf = new Blob([resp.data], {type: 'application/pdf'});
                var pdfURL = URL.createObjectURL(pdf);
                window.open(pdfURL);
            })
            .catch(function (error) {
                DialogService.error('Error Generating Report');
            });
    };

    $scope.goToAddSamples = function () {
        $location.path("/Sample");
    };

    $scope.removeFromProject = function () {

        $scope.options.selected.forEach(function (selected) {
            SampleService.findOne(selected.id)
                .then(function (resp) {

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

                    SampleService.update(sample).then(function (resp) {
                        var model = GridRequestModel.newGridRequestModel();
                        $scope.options.updateGrid(model);
                        ToastService.success('Sample Removed');
                    });
                })
                .catch(function (error) {
                    DialogService.error('Error Removing Samples');
                });
        });
    };

    $scope.goToOverview = function () {
        $location.path("/Project");
    };

    $scope.goToSample = function () {
        $location.path("/Sample/" + $scope.options.selected[0].id);
    };

    $scope.refresh = function () {
        init();
        ToastService.success('Project Reloaded');
    };
});
