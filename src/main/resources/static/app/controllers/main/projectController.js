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

angular.module('appController').controller('ProjectAddController', function ($scope, ProjectService, SampleService, $location) {

	$scope.investigatorOptions = {
		apiUrl: "/Api/Investigator/SingleSelect"
	};

	$scope.selectedInvestigator = null;

	$scope.project = {};
	$scope.project.investigator = {};
	$scope.project.startDate = new Date();
	$scope.project.endDate = new Date();
	$scope.isActive = true;

	$scope.tabs = ['general', 'projects'];
	$scope.activeTab = $scope.tabs[0];
	$scope.toggleTab = function(activeTab) {
		$scope.activeTab = activeTab;
	};

	$scope.getGrid = function (options) {
		options.ignoredColumns = ['id', 'measurements','comment', 'projectId', 'deviceId'];
		return SampleService.getGrid(options);
	};

	$scope.cancel = function() {
		$location.path("/Project");
	};

	$scope.save = function() {
		console.log($scope.selectedInvestigator);
		//var project = new Project();

		//project.projectId = $scope.project.projectId;
		//project.name = $scope.project.name;
		//project.startDate = $scope.project.startDate;
		//project.endDate = $scope.project.endDate;
		//project.clients = $scope.project.clients;
		//project.status = $scope.project.status;
		//project.samples = $scope.project.samples;
		//project.investigator = $scope.project.investigator;
		//project.users = $scope.project.users;
		//project.comment = $scope.project.comment;
	};
});

angular.module('appController').controller('ProjectEditController', function ($scope, ProjectService, SampleService, Enum, $location, $route, $routeParams) {

	$scope.investigatorOptions = {
		apiUrl: "/Api/Investigator/SingleSelect"
	};
	$scope.selectedInvestigator = null;

	$scope.project = {};
	$scope.project.investigator = null;
	$scope.project.startDate = null;
	$scope.project.endDate = null;
	$scope.isActive = false;

	$scope.tabs = ['general', 'projects'];
	$scope.activeTab = $scope.tabs[0];
	$scope.toggleTab = function(activeTab) {
		$scope.activeTab = activeTab;
	};
	
	$scope.data.param = $routeParams.Id;
	
	ProjectService.findOne($scope.data.param).then(function (resp) {
		$scope.project.id = resp.data.id;
		$scope.project.projectId = resp.data.projectId;
		$scope.project.name = resp.data.name;
		$scope.project.startDate = new Date(resp.data.startDate);
		$scope.project.endDate = new Date(resp.data.endDate);
		$scope.project.clients = resp.data.clients;
		getBooleanStatus(resp.data.status);
		$scope.project.samples = resp.data.samples;
		$scope.project.investigator = resp.data.investigator;
		$scope.project.users = resp.data.users;
		$scope.project.comment = resp.data.comment;
	});

	$scope.getGrid = function (options) {
		options.ignoredColumns = ['id', 'measurements','comment', 'projectId', 'projectName', 'deviceId'];
		return SampleService.getGrid(options);
	};

	$scope.cancel = function() {
		$location.path("/Project");
	};

	$scope.save = function() {
		console.log($scope.selectedInvestigator);
		//var project = new Project();

		//project.id = $scope.project.id;
		//project.projectId = $scope.project.projectId;
		//project.name = $scope.project.name;
		//project.startDate = $scope.project.startDate;
		//project.endDate = $scope.project.endDate;
		//project.clients = $scope.project.clients;
		//project.status = getStatusValue();
		//project.samples = $scope.project.samples;
		//project.investigator = $scope.project.investigator;
		//project.users = $scope.project.users;
		//project.comment = $scope.project.comment;
	};
	
	function getBooleanStatus(status) {
		$scope.isActive = status === Enum.Status.Active.value;
	}
	
	function getStatusValue() {
		return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
	}
});