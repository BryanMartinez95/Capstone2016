'use strict';

angular.module('appController')

	.controller('AdminProjectOverviewController', function ($scope, ProjectService, $location, ToastrService, $mdDialog, GridRequestModel) {

		$scope.setActiveService(ProjectService);

		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";
		$scope.dialogTitle = '';
		
		$scope.getGrid = function (options) {
			options.ignoredColumns = ['id', 'clients', 'samples', 'users', 'investigatorId', 'comment'];
			return ProjectService.getGrid(options);
		};

		$scope.goToDeleteProject = function ($event) {

			$scope.dialogTitle = 'Confirm Project Deletion: ' + $scope.options.selected[0].name;

			$mdDialog.show({
				scope: $scope,
				templateUrl: '/views/admin/project/delete.html',
				parent: angular.element(document.body),
				targetEvent: $event,
				fullscreen: false
			});
		};

		$scope.deleteProject = function () {

			ProjectService.remove($scope.options.selected[0].id)
				.then(function (resp) {
					ToastrService.success('Deleted');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Delete Project', 'Error');
				})
				.finally( function() {
					var model = GridRequestModel.newGridRequestModelFromJson({
						pageSize: $scope.options.limit,
						currentPage: $scope.options.page,
						filters: $scope.options.filters,
						sorts: $scope.options.sorts
					});
					$scope.options.selected = [];
					$scope.options.updateGrid(model);
				});

			$scope.closeDialog();
		};

		$scope.closeDialog = function () {
			$mdDialog.destroy();
		};
	});