'use strict';

angular.module('appController')

	.controller('AdminProjectOverviewController', function ($scope, ProjectService, $location) {

		$scope.setActiveService(ProjectService);

		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";
		
		$scope.GetGridData = function (options) {
			return ProjectService.getAdminGrid(options);
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
		$scope.tabs = ['general', 'measurements'];
		$scope.activeTab = $scope.tabs[0];
		$scope.toggleTab = function(activeTab) {
			$scope.activeTab = activeTab;
		};
		
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
		
		$scope.delete = function () {

			$scope.remove($scope.project.id)
				.then(function (resp) {
					ToastrService.success('Deleted');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Delete Project', 'Error');
				});

			angular.element(document.querySelector('div.modal-backdrop')).remove();
			$location.path("/Admin/Project/Overview");
		};
		
		$scope.cancel = function () {
			$location.path("/Admin/Project/Overview");
		};
	});