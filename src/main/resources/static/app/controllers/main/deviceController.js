'use strict';

angular.module('appController').controller('DeviceOverviewController', function ($scope, DeviceService) {

    $scope.data = {};
    $scope.data.message = "Device Overview Page";
	
	$scope.device = {};

	$scope.getGrid = function(options) {
		return DeviceService.getGrid(options);
	};
	
	$scope.goToViewDevice = function () {
		$scope.device = $scope.options.selected[0];
		console.log($scope.device.name);
	};
});
