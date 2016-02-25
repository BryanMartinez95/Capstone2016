'use strict';

angular.module('appController')

    .controller('AdminDeviceOverviewController', function ($scope, DeviceService, $location) {

	    $scope.setActiveService(DeviceService);

        $scope.data = {};
        $scope.data.message = "Admin Device Overview Page";

	    $scope.GetGridData = function (options) {
		    return DeviceService.getGrid(options);
	    };

	    $scope.goToEditDevice = function () {
		    $location.path("/Admin/Device/" + $scope.selectedRowId);
	    };
    })

    .controller('AdminDeviceEditController', function ($scope,  $route, $routeParams, DeviceService, $location, ToastrService, Enum) {

	    $scope.setActiveService(DeviceService);

        $scope.data = {};
        $scope.data.message = "Admin Device Edit Page";
        $scope.data.param = $routeParams.Id;

	    $scope.isActive = false;
	    $scope.device = {};

	    $scope.findOne($scope.data.param).then(function (resp) {
		    $scope.device.id = resp.id;
		    $scope.device.name = resp.name;
		    console.log(resp.name);
		    $scope.getBooleanStatus(resp.status);
		    console.log(resp.status);
		    $scope.device.comment = resp.comment;
	    });

	    $scope.save = function () {
		    var device = new Device();

		    device.id = $scope.device.id;
		    device.name = $scope.device.name;
		    device.status = $scope.getStatusValue();
		    device.comment = $scope.device.comment;

		    $scope.update(device)
			    .then(function (resp) {
				    ToastrService.success('Saved');
			    })
			    .catch(function (error) {
				    ToastrService.error('Cannot Save Device', 'Error');
			    });

		    $location.path("/Admin/Device/Overview");
	    };

	    $scope.cancel = function () {
		    $location.path("/Admin/Device/Overview");
	    };

	    $scope.getBooleanStatus = function (status) {
		    $scope.isActive = status === Enum.Status.Active.value;
	    };

	    $scope.getStatusValue = function () {
		    return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
	    };
    });