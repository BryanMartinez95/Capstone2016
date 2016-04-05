'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name AdminTestMethodController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} TestMethodService   A service to handle the API calls involving test methods
 * @param {service} TestMethodService   A service to handle the API calls involving devices
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService         A service to handle the initialization of the grid
 * @description This controller contains all the information and functions to access test method data held in the database.
 */
angular.module('appController')

    .controller('AdminTestMethodController', function ($scope, TestMethodService, DeviceService,
                                                       ToastService, DialogService, GridService) {

	    /**
	     * @property {Object}   data                        This is a collection of data that is available to the controller
	     * @property {string}   data.message                The message displayed as the page title
	     */
        $scope.data = {};
        $scope.data.message = 'Admin Test Method Overview Page';

	    /**
	     * Initializes the grid with data retrieved from the TestMethodService
	     * @param {object} the current options for the grid
	     * @function init
	     * @memberof GridService
	     */
        GridService.init(
            function(options) {
                return TestMethodService.getGrid(options);
            },
            ['id', 'deviceId']
        );

	    /**
	     * Brings up a dialog with fields to add a test method
	     * @param {object} $event the event that launched the dialog
	     * @function goToAddTestMethod
	     * @memberof AdminTestMethodController
	     */
	    $scope.goToAddTestMethod = function ($event) {
		    $scope.testMethod = {};
		    $scope.dialogTitle = 'Add Test Method';
		    getDeviceOptions();
		    DialogService.showDialog($scope, $event, '/views/admin/testMethod/add.html');
	    };

	    /**
	     * Brings up a dialog with fields to edit a test method
	     * @param {object} $event the event that launched the dialog
	     * @function goToEditTestMethod
	     * @memberof AdminTestMethodController
	     */
	    $scope.goToEditTestMethod = function ($event) {

		    $scope.testMethod = {};
		    $scope.dialogTitle = 'Edit Test Method';

		    TestMethodService.findOne(GridService.getSelectedRows()[0].id)
			    .then(function(resp){
				    $scope.testMethod.id = resp.data.id;
				    $scope.testMethod.name = resp.data.name;
				    setDeviceSelection(resp.data.deviceId);
				    DialogService.showDialog($scope, $event, '/views/admin/testMethod/edit.html');
			    })
			    .catch(function (error) {
				    ToastService.error('Error Retrieving Test Method');
			    });
	    };

	    /**
	     * Creates a test method using the fields in the add dialog, and saves it to the database
	     * @function createTestMethod
	     * @memberof AdminTestMethodController
	     */
	    $scope.createTestMethod = function() {

		    var testMethod = new TestMethod();

		    testMethod.name = $scope.testMethod.name;
		    testMethod.deviceId = $scope.testMethod.device.value;
		    testMethod.deviceName = $scope.testMethod.device.display;

		    TestMethodService.create(testMethod)
			    .then(function (resp) {
				    ToastService.success('Test Method Saved');
			    })
			    .catch(function (error) {
				    ToastService.error('Error Saving Test Method');
			    })
			    .finally( function() {
				    $scope.closeDialog();
				    $scope.options.updateGrid();
			    });
	    };

	    /**
	     * Updates test method using the fields in the edit dialog, and saves it to the database
	     * @function updateTestMethod
	     * @memberof AdminTestMethodController
	     */
        $scope.updateTestMethod = function () {

            var testMethod = new TestMethod();

            testMethod.id = $scope.testMethod.id;
            testMethod.name = $scope.testMethod.name;
	        testMethod.deviceId = $scope.testMethod.device.value;
	        testMethod.deviceName = $scope.testMethod.device.display;

            TestMethodService.update(testMethod)
                .then(function(resp){
                    ToastService.success('Test Method Updated');
                })
                .catch(function(error){
                    ToastService.error('Error Updating Test Method');
                })
	            .finally( function() {
		            $scope.closeDialog();
		            $scope.options.updateGrid();
	            });
        };

	    /**
	     * Closes the currently open dialog(s) using the DialogService
	     * @function closeDialog
	     * @memberof AdminTestMethodController
	     */
	    $scope.closeDialog = function () {
		    DialogService.close();
	    };

	    /**
	     * Gets the number of rows currently selected using the GridService
	     * @function getNumberOfSelectedRows
	     * @memberof AdminTestMethodController
	     */
        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };

	    /**
	     * Gets the devices currently in the database using the DeviceService
	     * @function getDeviceOptions
	     * @memberof AdminTestMethodController
	     */
        function getDeviceOptions() {
		    DeviceService.singleSelect().then(function (resp) {
			    $scope.deviceOptions = resp.data;
		    });
	    }

	    /**
	     * Populates the test method's device single select using the device passed in
	     * @param {string} value of the test method's device in all capitals
	     * @function setDeviceSelection
	     * @memberof AdminTestMethodController
	     */
	    function setDeviceSelection(value) {
		    DeviceService.singleSelect().then(function (resp) {
			    $scope.deviceOptions = resp.data;
			    for (var i = 0; i < $scope.deviceOptions.length; i++) {
				    if ($scope.deviceOptions[i].value === value) {
					    $scope.testMethod.device = $scope.deviceOptions[i];
				    }
			    }
		    });
	    }
    });