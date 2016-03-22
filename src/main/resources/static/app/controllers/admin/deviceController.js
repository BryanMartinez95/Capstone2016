'use strict';

angular.module('appController')

    .controller('AdminDeviceOverviewController', function ($scope, DeviceService, ToastrService, Enum, $mdDialog, GridRequestModel) {

	    $scope.setActiveService(DeviceService);

        $scope.data = {};
        $scope.data.message = "Admin Device Overview Page";

	    $scope.isActive = false;
	    $scope.device = {};
	    $scope.dialogTitle = '';
	    $scope.statusMessage = '';

	    $scope.getGrid = function (options) {
		    options.ignoredColumns = ['id', 'comment'];
		    return DeviceService.getGrid(options);
	    };

	    $scope.goToEditDevice = function ($event) {

		    DeviceService.findOne($scope.options.selected[0].id)
			    .then(function (resp) {
				    $scope.device.id = resp.data.id;
				    $scope.device.name = resp.data.name;
				    $scope.device.status = resp.data.status;
				    getBooleanStatus($scope.device.status);
				    $scope.onSwitchChange();
				    $scope.device.comment = resp.data.comment;
				    $scope.dialogTitle = "Edit Device - " + $scope.device.name;
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
		    device.status = getStatusValue();
		    device.comment = $scope.device.comment;

		    $scope.update(device)
			    .then(function (resp) {
				    ToastrService.success('Saved');
			    })
			    .catch(function (error) {
				    ToastrService.error('Cannot Save Device', 'Error');
			    })
			    .finally( function() {
				    var model = GridRequestModel.newGridRequestModelFromJson({
					    pageSize: $scope.options.limit,
					    currentPage: $scope.options.page,
					    filters: $scope.options.filters,
					    sorts: $scope.options.sorts
				    });
				    $scope.options.selected = [];
				    $scope.options.updateGrid(model);
			    });

		    $scope.closeDialog();
	    };

	    $scope.closeDialog = function () {
		    $mdDialog.destroy();
	    };

	    function getBooleanStatus(status) {
		    $scope.isActive = status.toLowerCase() === Enum.Status.Active.value.toLowerCase();
	    }

	    function getStatusValue() {
		    return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
	    }

	    $scope.onSwitchChange = function () {
		    $scope.statusMessage = $scope.isActive ? Enum.Status.Active.display : Enum.Status.Inactive.display;
	    };
    });