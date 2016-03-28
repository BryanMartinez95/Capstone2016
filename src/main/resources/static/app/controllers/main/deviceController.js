'use strict';

angular.module('appController').controller('DeviceOverviewController', function ($scope, DeviceService, $location) {

    $scope.data = {};
    $scope.data.message = "Device Overview Page";
	
	$scope.getGrid = function(options) {
		options.ignoredColumns = ['id','comment'];
		return DeviceService.getGrid(options);
	};
	
	$scope.goToEditDevice = function () {
		$location.path("/Device/" + $scope.options.selected[0].id);
	};
});

angular.module('appController').controller('DeviceEditController', function ($scope, DeviceService, SampleService,
                                                                              $location, $route, $routeParams,
                                                                              ToastService, GridRequestModel) {

	$scope.device = {};
	$scope.device.status = 'Loading...';
	$scope.data.param = $routeParams.Id;

	var init = function () {
		DeviceService.findOne($scope.data.param).then(function (resp) {
			$scope.device = {};
			$scope.device.id = resp.data.id;
			$scope.device.name = resp.data.name;
			$scope.device.status = resp.data.status;
			$scope.device.comment = resp.data.comment;
		});
	};

	init();

	$scope.getGrid = function (options) {
		options.ignoredColumns = ['id', 'sampleIdentifierId', 'measurements','comment', 'projectId', 'projectName', 'deviceId'];
		return SampleService.getGridByDeviceId(options, $scope.data.param);
	};

	$scope.updateGrid = function() {
		var model = GridRequestModel.newGridRequestModel();
		$scope.options.updateGrid(model);
	};

	$scope.updateDevice = function() {

		var device = new Device();

		device.id = $scope.device.id;
		device.name = $scope.device.name;
		device.comment = $scope.device.comment;
		device.status = $scope.device.status;

		DeviceService.update(device)
			.then(function (resp) {
				ToastService.success('Saved', $scope.$new());
			})
			.catch(function (error) {
				ToastService.error('Cannot Save Device', $scope.$new());
			});
	};

	$scope.goToAddSamples = function () {
		$location.path("/Sample");
	};

	$scope.goToOverview = function() {
		$location.path("/Device");
	};

	$scope.goToSample = function () {
		$location.path("/Sample/" + $scope.options.selected[0].id);
	};

	$scope.refresh = function () {
		init();
	}
});
