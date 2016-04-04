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
 * @param {service} LoadingService  A service used to handle the display of the loading bar
 * @description This controller contains all the information and functions to access unit data held in the database.
 */
angular.module('appController')

	.controller('AdminUnitController', function ($scope, UnitService, ToastService,
	                                             DialogService, GridService, LoadingService) {

		/**
		 * @property {Object}   data                        This is a collection of data that is available to the controller
		 * @property {string}   data.message                The message displayed as the page title
		 * @property {string}   $parent.isLoading           The current status of the loading bar
		 */
		$scope.data = {};
		$scope.data.message = "Admin Unit Overview Page";
		$scope.$parent.isLoading = LoadingService.toggle();

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

		$scope.$parent.isLoading = LoadingService.toggle();

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

			$scope.$parent.isLoading = LoadingService.toggle();

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
                    GridService.updateGrid();
					$scope.$parent.isLoading = LoadingService.toggle();
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
		 * Deselects the rows currently selected using the GridService
		 * @function deselectRows
		 * @memberof AdminUnitController
		 */
        $scope.deselectRows = function() {
            GridService.deselectAll();
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