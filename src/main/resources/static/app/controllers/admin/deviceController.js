'use strict';

angular.module('appController')

    .controller('AdminDeviceOverviewController', function ($scope, DeviceService, ToastrService, Enum, $mdDialog, GridRequestModel) {

	    $scope.setActiveService(DeviceService);

        $scope.data = {};
        $scope.data.message = "Admin Device Overview Page";

	    $scope.getGrid = function (options) {
		    options.ignoredColumns = ['id', 'comment'];
		    return DeviceService.getGrid(options);
	    };

	    $scope.goToEditDevice = function ($event) {

		    DeviceService.findOne($scope.options.selected[0].id)
			    .then(function (resp) {
				    $scope.device = {};
				    $scope.device.id = resp.data.id;
				    $scope.device.name = resp.data.name;
				    $scope.device.status = resp.data.status;
				    $scope.device.comment = resp.data.comment;
				    $scope.dialogTitle = "Edit Device";
			    });

		    $mdDialog.show({
			    scope: $scope,
			    templateUrl: '/views/admin/device/edit.html',
			    parent: angular.element(document.body),
			    targetEvent: $event,
			    fullscreen: false
		    });
	    };

	    $scope.updateDevice = function () {

		    var device = new Device();

		    device.id = $scope.device.id;
		    device.name = $scope.device.name;
		    device.status = $scope.device.status;
		    device.comment = $scope.device.comment;

		    $scope.update(device)
			    .then(function (resp) {
				    ToastrService.success('Saved');
			    })
			    .catch(function (error) {
				    ToastrService.error('Cannot Save Device', 'Error');
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