'use strict';

angular.module('appController')

	.controller('AdminUnitOverviewController', function ($scope, UnitService, ToastrService, $mdDialog, GridRequestModel) {

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
			UnitService.findOne($scope.options.selected[0].id)
				.then(function (resp) {
					$scope.unit = {};
					$scope.unit.id = resp.data.id;
					$scope.unit.name = resp.data.name;
					$scope.dialogTitle = "Edit Unit - " + $scope.unit.name;
				});

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
				})
				.finally( function() {
					var model = GridRequestModel.newGridRequestModel();
					$scope.options.updateGrid(model);
				});

			$scope.closeDialog();
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
				})
				.finally( function() {
					var model = GridRequestModel.newGridRequestModel();
					$scope.options.updateGrid(model);
				});

			$scope.closeDialog();
		};

		$scope.closeDialog = function () {
			$mdDialog.destroy();
		};
	});