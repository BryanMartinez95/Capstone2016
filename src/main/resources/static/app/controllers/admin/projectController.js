'use strict';

angular.module('appController')

	.controller('AdminProjectController', function ($scope, ProjectService, $location,
	                                                ToastService, DialogService, GridService,
	                                                LoadingService) {

		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";

		$scope.$parent.isLoading = LoadingService.toggle();

        GridService.init(
            function(options) {
                return ProjectService.getGrid(options);
            },
            ['id', 'clients', 'samples', 'users', 'investigatorId', 'comment']
        );

		$scope.$parent.isLoading = LoadingService.toggle();

		$scope.goToDeleteProject = function ($event) {
			$scope.dialogTitle = 'Confirm Project Deletion: ' + GridService.getSelectedRows()[0].name;
			DialogService.showDialog($scope, $event, '/views/admin/project/delete.html');
		};

		$scope.deleteProject = function () {

			$scope.$parent.isLoading = LoadingService.toggle();

			ProjectService.remove(GridService.getSelectedRows()[0].id)
				.then(function (resp) {
					ToastService.success('Project Deleted');
				})
				.catch(function (error) {
					ToastService.error('Error Deleting Project');
				})
				.finally( function() {
					$scope.closeDialog();
                    GridService.updateGrid();
					$scope.$parent.isLoading = LoadingService.toggle();
				});
		};

		$scope.closeDialog = function () {
			DialogService.close();
		};

        $scope.deselectRows = function() {
            GridService.deselectAll();
        };

        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };
	});