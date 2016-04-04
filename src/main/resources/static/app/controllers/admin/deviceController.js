'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name AdminDeviceController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} DeviceService       A service to handle the API calls involving devices
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {model} Enum                  A collection of Enums
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService         A service to handle the initialization of the grid
 * @param {service} LoadingService      A service used to handle the display of the loading bar
 * @description This controller contains all the information and functions to access device data held in the database.
 */
angular.module('appController')

    .controller('AdminDeviceController', function ($scope, DeviceService, ToastService, Enum,
                                                   DialogService, GridService, LoadingService) {

	    /**
	     * @property {Object}   data                        This is a collection of data that is available to the controller
	     * @property {string}   data.message                The message displayed as the page title
	     * @property {string}   $parent.isLoading           The current status of the loading bar
	     */
        $scope.data = {};
        $scope.data.message = "Admin Device Overview Page";
	    $scope.$parent.isLoading = LoadingService.toggle();

	    /**
	     * Initializes the grid with data retrieved from the DeviceService
	     * @param {object} the current options for the grid
	     * @function init
	     * @memberof GridService
	     */
        GridService.init(
            function(options) {
                return DeviceService.getGrid(options);
            },
            ['id', 'comment']
        );

	    $scope.$parent.isLoading = LoadingService.toggle();

	    /**
	     * Brings up a dialog with fields to edit a device
	     * @param {object} $event the event that launched the dialog
	     * @function goToEditDevice
	     * @memberof AdminDeviceController
	     */
	    $scope.goToEditDevice = function ($event) {

		    DeviceService.findOne(GridService.getSelectedRows()[0].id)
			    .then(function (resp) {
				    $scope.device = {};
				    $scope.device.id = resp.data.id;
				    $scope.device.name = resp.data.name;
				    $scope.device.status = resp.data.status;
				    $scope.device.comment = resp.data.comment;
				    $scope.dialogTitle = "Edit Device";
			    });

		    DialogService.showDialog($scope, $event, '/views/admin/device/edit.html');
	    };

	    /**
	     * Updates device using the fields in the edit dialog, and saves it to the database
	     * @function updateDevice
	     * @memberof AdminDeviceController
	     */
	    $scope.updateDevice = function () {

		    $scope.$parent.isLoading = LoadingService.toggle();

		    var device = new Device();

		    device.id = $scope.device.id;
		    device.name = $scope.device.name;
		    device.status = $scope.device.status;
		    device.comment = $scope.device.comment;

		    DeviceService.update(device)
			    .then(function (resp) {
				    ToastService.success('Device Updated');
			    })
			    .catch(function (error) {
				    ToastService.error('Error Updating Device');
			    })
			    .finally( function() {
				    $scope.closeDialog();
				    GridService.updateGrid();
				    $scope.$parent.isLoading = LoadingService.toggle();
			    });
	    };

	    /**
	     * Closes the currently open dialog(s) using the DialogService
	     * @function closeDialog
	     * @memberof AdminDeviceController
	     */
	    $scope.closeDialog = function () {
		    DialogService.close();
	    };

	    /**
	     * Deselects the rows currently selected using the GridService
	     * @function deselectRows
	     * @memberof AdminDeviceController
	     */
        $scope.deselectRows = function() {
            GridService.deselectAll();
        };

	    /**
	     * Gets the number of rows currently selected using the GridService
	     * @function getNumberOfSelectedRows
	     * @memberof AdminDeviceController
	     */
        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };
    });