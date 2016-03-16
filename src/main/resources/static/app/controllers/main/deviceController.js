'use strict';

angular.module('appController').controller('DeviceOverviewController', function ($scope, DeviceService) {

    $scope.data = {};
    $scope.data.message = "Device Overview Page";
	
	$scope.device = {};

	$scope.getGrid = function(options) {
		options.ignoredColumns = ['id','comment'];
		return DeviceService.getGrid(options);
	};
	
	$scope.goToEditDevice = function () {
		$scope.device = $scope.options.selected[0];
		console.log("Selected device:", $scope.device);
	};
});
