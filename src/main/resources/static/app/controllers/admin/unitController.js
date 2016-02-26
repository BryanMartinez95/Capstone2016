'use strict';

angular.module('appController')

	.controller('AdminUnitOverviewController', function ($scope, UnitService, $location) {

		$scope.setActiveService(UnitService);

		$scope.data = {};
		$scope.data.message = "Admin Unit Overview Page";

		$scope.GetGridData = function (options) {
			return UnitService.getGrid(options);
		};

		$scope.goToAddUnit = function () {
			$location.path("/Admin/Unit/Add");
		};

		$scope.goToEditUnit = function () {
			$location.path("/Admin/Unit/" + $scope.selectedRowId);
		};
	})

	.controller('AdminUnitAddController', function ($scope, UnitService, ToastrService, $location) {

		$scope.setActiveService(UnitService);

		$scope.data = {};
		$scope.data.message = "Admin Unit Add Page";
		
		$scope.unit = {};
		
		$scope.findOne($scope.data.param).then(function (resp) {
			$scope.unit.id = resp.id;
			$scope.unit.name = resp.name;
		});
		
		$scope.save = function() {
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
			
			$location.path("/Admin/Unit/Overview");
		};
		
		$scope.cancel = function () {
			$location.path("/Admin/Unit/Overview");
		};
	})

	.controller('AdminUnitEditController', function ($scope, $route, $routeParams, UnitService, ToastrService, $location) {

		$scope.setActiveService(UnitService);

		$scope.data = {};
		$scope.data.message = "Admin Unit Edit Page";
		$scope.data.param = $routeParams.Id;
		
		$scope.unit = {};
		
		$scope.findOne($scope.data.param).then(function (resp) {
			$scope.unit.id = resp.id;
			$scope.unit.name = resp.name;
		});
		
		$scope.save = function () {
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
			
			$location.path("/Admin/Unit/Overview");
		};
		
		$scope.cancel = function () {
			$location.path("/Admin/Unit/Overview");
		};
	});