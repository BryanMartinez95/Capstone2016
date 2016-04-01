'use strict';

angular.module('appController')

	.controller('AdminUnitOverviewController', function ($scope, UnitService, ToastService, DialogService, GridService) {

		$scope.setActiveService(UnitService);

		$scope.data = {};
		$scope.data.message = "Admin Unit Overview Page";

        GridService.init(
            function(options) {
                return UnitService.getGrid(options);
            },
            ['id']
        );

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
                    GridService.updateGrid();
				});
		};

		$scope.closeDialog = function () {
			DialogService.close();
		};
	});