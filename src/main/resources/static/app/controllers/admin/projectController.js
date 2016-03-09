'use strict';

angular.module('appController')

	.controller('AdminProjectOverviewController', function ($scope, ProjectService, $location, ToastrService, $mdDialog, $mdMedia) {

		$scope.setActiveService(ProjectService);

		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";
		
		$scope.getGrid = function (options) {
			return ProjectService.getAdminGrid(options);
		};

		function deleteProject() {

			$scope.remove($scope.options.selected[0].id)
				.then(function (resp) {
					ToastrService.success('Deleted');
                    $scope.options.updateGrid();
				})
				.catch(function (error) {
					ToastrService.error('Cannot Delete Project', 'Error');
				});
		}

        $scope.showDialog = function(event) {
            var confirm = $mdDialog.confirm()
                .title('Confirm Project Deletion')
                .textContent('Are you absolutely sure you want to delete ' + $scope.options.selected[0].name + '? NOTE: This process cannot be undone.')
                .ariaLabel('Project Deletion')
                .targetEvent(event)
                .ok('Confirm Deletion')
                .cancel('Cancel');
            $mdDialog.show(confirm).then(function() {
                deleteProject();
            });
        }
	});