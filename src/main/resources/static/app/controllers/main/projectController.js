'use strict';

angular.module('appController').controller('ProjectOverviewController', function ($scope, ProjectService, $location) {

    $scope.data = {};
    $scope.data.message = "Project Overview Page";

	$scope.project = {};

	$scope.getGrid = function (options) {
		options.ignoredColumns = ['id', 'clients','samples', 'users', 'investigatorId', 'comment'];
		return ProjectService.getGrid(options);
	};

	$scope.goToAddProject = function() {
		$location.path("/Project/" + '0000000-000-000-0000000');
	};

	$scope.goToEditProject = function() {
		$location.path("/Project/" + $scope.options.selected[0].id);
	};
});

angular.module('appController').controller('ProjectAddController', function ($scope, ProjectService, ClientService,
                                                                             UserService, InvestigatorService, $location,
                                                                             Enum, ToastrService, $mdDialog) {

	ClientService.singleSelect().then(function (resp) {
		$scope.clientOptions = resp.data;
	});

	UserService.singleSelect().then(function (resp) {
		$scope.userOptions = resp.data;
	});

	InvestigatorService.singleSelect().then(function (resp) {
		$scope.investigatorOptions = resp.data;
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

	$scope.createProject = function() {

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
				ToastrService.success('Saved');
				$location.path('/Project/' + resp.data);
			})
			.catch(function (error) {
				ToastrService.error('Cannot Save Project', 'Error');
			});
	};

	$scope.goToEditStartDate = function ($event) {
		$scope.dialogTitle = 'Project Start Date';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/project/start-date-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};

	$scope.goToEditEndDate = function ($event) {
		$scope.dialogTitle = 'Project End Date';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/project/end-date-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};

	$scope.closeDialog = function () {
		$mdDialog.destroy();
	};

	$scope.cancel = function() {
		$location.path("/Project");
	};
});

angular.module('appController').controller('ProjectEditController', function ($scope, ProjectService, SampleService, 
                                                                              ClientService, UserService, InvestigatorService,
                                                                              Enum, $location, $route, $routeParams,
                                                                              $mdDialog, ToastService, GridRequestModel) {

	$scope.project = {};
	$scope.project.status = 'Loading...';

	var init = function () {
		ClientService.singleSelect().then(function (resp) {
			$scope.clientOptions = resp.data;
		});

		UserService.singleSelect().then(function (resp) {
			$scope.userOptions = resp.data;
		});

		InvestigatorService.singleSelect().then(function (resp) {
			$scope.investigatorOptions = resp.data;
		});

		$scope.data.param = $routeParams.Id;

		ProjectService.findOne($scope.data.param).then(function (resp) {
			$scope.project = {};
			$scope.project.id = resp.data.id;
			$scope.project.projectId = resp.data.projectId;
			$scope.project.name = resp.data.name;
			$scope.project.startDate = new Date(resp.data.startDate);
			$scope.project.endDate = new Date(resp.data.endDate);
			$scope.project.clients = [];
			setClientsSelection(resp.data.clients);
			$scope.project.users = [];
			setUsersSelection(resp.data.users);
			setInvestigatorSelection(resp.data.investigatorId);
			$scope.project.status = resp.data.status;
			$scope.project.comment = resp.data.comment;
		});
	};

	init();

	$scope.getGrid = function (options) {
		options.ignoredColumns = ['id', 'sampleIdentifierId', 'measurements','comment', 'projectId', 'projectName', 'deviceId'];
		return SampleService.getGridByProjectId(options, $scope.data.param);
	};

	$scope.updateGrid = function() {
		var model = GridRequestModel.newGridRequestModel();
		$scope.options.updateGrid(model);
	};

	$scope.updateProject = function() {

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
				ToastService.success('Saved', $scope.$new());
			})
			.catch(function (error) {
				ToastService.error('Cannot Save Project', $scope.$new());
			});
	};

	function setClientsSelection(values) {
		ClientService.singleSelect().then(function (resp) {
			$scope.clientOptions = resp.data;
			$scope.clientOptions.forEach(function (option) {
				for (var i = 0; i < values.length; i++) {
					if(option.value === values[i]) {
						$scope.project.clients.push(option)
					}
				}
			});
		})
	}

	function setUsersSelection(values) {
		UserService.singleSelect().then(function (resp) {
			$scope.userOptions = resp.data;
			$scope.userOptions.forEach(function (option) {
				for (var i = 0; i < values.length; i++) {
					if(option.value === values[i]) {
						$scope.project.users.push(option)
					}
				}
			});
		})
	}

	function setInvestigatorSelection(value) {
		InvestigatorService.singleSelect().then(function (resp) {
			$scope.investigatorOptions = resp.data;
			$scope.investigatorOptions.forEach(function (option) {
				if(option.value === value)
					$scope.project.investigator = option;
			});
		})
	}

	$scope.goToEditEndDate = function ($event) {
		$scope.dialogTitle = 'Project End Date';
		$mdDialog.show({
			scope: $scope,
			templateUrl: '/views/project/end-date-dialog.html',
			parent: angular.element(document.body),
			targetEvent: $event,
			fullscreen: false
		});
	};
	
	$scope.closeDialog = function () {
		$mdDialog.destroy();
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
						$scope.updateGrid();
						ToastService.success('Sample Removed', $scope.$new());
					});
				});
		});
	};

	$scope.goToOverview = function() {
		$location.path("/Project");
	};

	$scope.goToSample = function () {
		$location.path("/Sample/" + $scope.options.selected[0].id);
	}
});
