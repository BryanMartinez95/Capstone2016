'use strict';

angular.module('appController')

	.controller('AdminUnitOverviewController', function ($scope, UnitService, ToastService, DialogService, GridRequestModel) {

		$scope.setActiveService(UnitService);

		$scope.data = {};
		$scope.data.message = "Admin Unit Overview Page";

		$scope.getGrid = function (options) {
			options.ignoredColumns = ['id'];
			return UnitService.getGrid(options);
		};

		$scope.goToAddUnit = function ($event) {
			$scope.dialogTitle = "Add Unit";
			$scope.unit = {};
			DialogService.showDialog($scope, $event, '/views/admin/unit/add.html');
		};

		$scope.createUnit = function() {
			var unit = new Unit();

			unit.name = $scope.unit.name;

			$scope.create(unit)
				.then(function (resp) {
					ToastService.success('Unit Saved');
				})
				.catch(function (error) {
					ToastService.error('Error Saving Unit');
				})
				.finally( function() {
					$scope.closeDialog();
					var model = GridRequestModel.newGridRequestModel();
					$scope.options.updateGrid(model);
				});
		};

		$scope.closeDialog = function () {
			DialogService.close();
		};
	});