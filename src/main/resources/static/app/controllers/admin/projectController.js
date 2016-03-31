'use strict';

angular.module('appController')

	.controller('AdminProjectOverviewController', function ($scope, ProjectService, $location, ToastService, DialogService, GridRequestModel) {

		$scope.setActiveService(ProjectService);

		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";
		
		$scope.getGrid = function (options) {
			options.ignoredColumns = ['id', 'clients', 'samples', 'users', 'investigatorId', 'comment'];
			return ProjectService.getGrid(options);
		};

		$scope.goToDeleteProject = function ($event) {
			$scope.dialogTitle = 'Confirm Project Deletion: ' + $scope.options.selected[0].name;
			DialogService.showDialog($scope, $event, '/views/admin/project/delete.html');
		};

		$scope.deleteProject = function () {

			ProjectService.remove($scope.options.selected[0].id)
				.then(function (resp) {
					ToastService.success('Project Deleted');
				})
				.catch(function (error) {
					ToastService.error('Error Deleting Project');
				})
				.finally( function() {
					var model = GridRequestModel.newGridRequestModelFromJson({
						pageSize: $scope.options.limit,
						currentPage: $scope.options.page,
						filters: $scope.options.filters,
						sorts: $scope.options.sorts
					});
					$scope.closeDialog();
					$scope.options.selected = [];
					$scope.options.updateGrid(model);
				});
		};

		$scope.closeDialog = function () {
			DialogService.close();
		};
	});