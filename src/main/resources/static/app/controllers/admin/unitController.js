'use strict';

angular.module('appController')

	.controller('AdminUnitController', function ($scope, UnitService, ToastService, DialogService, GridService, LoadingService) {

		$scope.data = {};
		$scope.data.message = "Admin Unit Overview Page";

		$scope.$parent.isLoading = LoadingService.toggle();

        GridService.init(
            function(options) {
                return UnitService.getGrid(options);
            },
            ['id']
        );

		$scope.$parent.isLoading = LoadingService.toggle();

		$scope.goToAddUnit = function ($event) {
			$scope.dialogTitle = "Add Unit";
			$scope.unit = {};
			DialogService.showDialog($scope, $event, '/views/admin/unit/add.html');
		};

		$scope.createUnit = function() {

			$scope.$parent.isLoading = LoadingService.toggle();

			var unit = new Unit();

			unit.name = $scope.unit.name;

			UnitService.create(unit)
				.then(function (resp) {
					ToastService.success('Unit Saved');
				})
				.catch(function (error) {
					ToastService.error('Error Saving Unit');
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