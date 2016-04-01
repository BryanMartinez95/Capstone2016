'use strict';

angular.module('appController')

	.controller('AdminProjectOverviewController', function ($scope, ProjectService, $location, ToastService, DialogService, GridService) {

		$scope.setActiveService(ProjectService);

		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";

        GridService.init(
            function(options) {
                return ProjectService.getGrid(options);
            },
            ['id', 'clients', 'samples', 'users', 'investigatorId', 'comment']
        );

		$scope.goToDeleteProject = function ($event) {
			$scope.dialogTitle = 'Confirm Project Deletion: ' + GridService.getSelectedRows()[0].name;
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
					$scope.closeDialog();
                    GridService.updateGrid();
				});
		};

		$scope.closeDialog = function () {
			DialogService.close();
		};
	});