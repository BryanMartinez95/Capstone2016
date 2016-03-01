'use strict';

angular.module('appController')

	.controller('AdminProjectOverviewController', function ($scope, ProjectService, $location, ToastrService) {

		$scope.setActiveService(ProjectService);

		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";
		
		$scope.GetGridData = function (options) {
			return ProjectService.getAdminGrid(options);
		};

		$scope.delete = function () {

			$scope.remove($scope.selectedRowId)
				.then(function (resp) {
					ToastrService.success('Deleted');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Delete Project', 'Error');
				});

			angular.element(document.querySelector('div.modal-backdrop')).remove();
			$location.path("/Admin/Project/Overview");
		};
	});