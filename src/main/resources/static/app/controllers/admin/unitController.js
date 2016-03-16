'use strict';

angular.module('appController')

	.controller('AdminUnitOverviewController', function ($scope, UnitService, ToastrService, $mdDialog) {

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

			$mdDialog.show({
				scope: $scope,
				templateUrl: '/views/admin/unit/add.html',
				parent: angular.element(document.body),
				targetEvent: $event,
				fullscreen: false
			});
		};

		$scope.goToEditUnit = function ($event) {
			$scope.unit = $scope.options.selected[0];
			$scope.dialogTitle = "Edit Unit - " + $scope.unit.id;

			$mdDialog.show({
				scope: $scope,
				templateUrl: '/views/admin/unit/edit.html',
				parent: angular.element(document.body),
				targetEvent: $event,
				fullscreen: false
			});
		};

		$scope.createUnit = function() {
			var unit = new Unit();

			unit.name = $scope.unit.name;

			$scope.create(unit)
				.then(function (resp) {
					ToastrService.success('Saved');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Save Unit', 'Error');
				});

			$mdDialog.hide();
			$scope.options.updateGrid();
		};

		$scope.updateUnit = function () {
			var unit = new Unit();

			unit.id = $scope.unit.id;
			unit.name = $scope.unit.name;

			$scope.update(unit)
				.then(function (resp) {
					ToastrService.success('Saved');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Save Unit', 'Error');
				});

			$scope.options.updateGrid();
			$mdDialog.hide();
		};

		$scope.closeDialog = function () {
			$mdDialog.destroy();
		};
	});