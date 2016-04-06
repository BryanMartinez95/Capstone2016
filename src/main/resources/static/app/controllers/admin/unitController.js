'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name AdminUnitController
 *
 * @param {service} $scope          The scope of this controller
 * @param {service} UnitService     A service to handle the API calls involving units
 * @param {service} ToastService    A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} DialogService   A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService     A service to handle the initialization of the grid
 * @description This controller contains all the information and functions to access unit data held in the database.
 */
angular.module('appController')

	.controller('AdminUnitController', function ($scope, UnitService, ToastService,
	                                             DialogService, GridService) {

		/**
		 * @property {Object}   data                        This is a collection of data that is available to the controller
		 * @property {string}   data.message                The message displayed as the page title
		 */
		$scope.data = {};
		$scope.data.message = "Admin Unit Overview Page";

		/**
		 * Initializes the grid with data retrieved from the UnitService
		 * @param {object} the current options for the grid
		 * @function init
		 * @memberof GridService
		 */
        GridService.init(
            function(options) {
                return UnitService.getGrid(options);
            },
            ['id']
        );

		/**
		 * Brings up a dialog with fields to add a unit
		 * @param {object} $event the event that launched the dialog
		 * @function goToAddUnit
		 * @memberof AdminUnitController
		 */
		$scope.goToAddUnit = function ($event) {
			$scope.dialogTitle = "Add Unit";
			$scope.unit = {};
			DialogService.showDialog($scope, $event, '/views/admin/unit/add.html');
		};

		/**
		 * Creates a unit using the fields in the add dialog, and saves it to the database
		 * @function createUnit
		 * @memberof AdminUnitController
		 */
		$scope.createUnit = function() {

			var unit = new Unit();

			unit.name = $scope.unit.name;

			UnitService.create(unit)
				.then(function (resp) {
					ToastService.success('Unit Saved');
				})
				.catch(function (error) {
					ToastService.error('Error Saving Unit');
				})
				.finally( function() {
					$scope.closeDialog();
					$scope.options.updateGrid();
				});
		};

		/**
		 * Closes the currently open dialog(s) using the DialogService
		 * @function closeDialog
		 * @memberof AdminUnitController
		 */
		$scope.closeDialog = function () {
			DialogService.close();
		};

		/**
		 * Gets the number of rows currently selected using the GridService
		 * @function getNumberOfSelectedRows
		 * @memberof AdminUnitController
		 */
        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };
	});