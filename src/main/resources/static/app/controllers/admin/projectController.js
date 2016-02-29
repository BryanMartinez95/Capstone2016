'use strict';

angular.module('appController')

	.controller('AdminProjectOverviewController', function ($scope, ProjectService, $location) {

		$scope.setActiveService(ProjectService);

		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";
		
		$scope.GetGridData = function (options) {
			return ProjectService.getGrid(options);
		};
		
		$scope.goToDeleteProject = function () {
			$location.path("/Admin/Project/" + $scope.selectedRowId);
		};
	})

	.controller('AdminProjectDeleteController', function ($scope, $route, $routeParams, ProjectService, $location, ToastrService, SingleSelect, Enum) {

		$scope.setActiveService(ProjectService);

		$scope.data = {};
		$scope.data.message = "Admin Project Delete Page";
		$scope.data.param = $routeParams.Id;
		
		$scope.project = {};
		
		$scope.findOne($scope.data.param).then(function (resp) {
			$scope.project.id = resp.id;
			$scope.project.projectId = resp.projectId;
			$scope.project.name = resp.name;
			$scope.project.startDate = resp.startDate;
			$scope.project.endDate = resp.endDate;
			$scope.project.clients = resp.clients;
			$scope.project.status = resp.status;
			$scope.project.samples = resp.samples;
			$scope.project.investigator = resp.investigator;
			$scope.project.users = resp.users;
			$scope.project.comment = resp.comment;
		});
		
		$scope.save = function () {
			var project = new Project();
			
			project.id = $scope.project.id;
			project.projectId = $scope.project.projectId;
			project.name = $scope.project.name;
			project.startDate = $scope.project.startDate;
			project.endDate = $scope.project.endDate;
			project.clients = $scope.project.clients;
			project.status = $scope.project.status;
			project.samples = $scope.project.samples;
			project.investigator = $scope.project.investigator;
			project.users = $scope.project.users;
			project.comment = $scope.project.comment;
			
			$scope.remove(project)
				.then(function (resp) {
					ToastrService.success('Deleted');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Delete Project', 'Error');
				});
			
			$location.path("/Admin/Project/Overview");
		};
		
		$scope.cancel = function () {
			$location.path("/Admin/Project/Overview");
		};
	});