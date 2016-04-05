'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name AdminUserController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} InvestigatorService A service to handle the API calls involving investigators
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {model} Enum                  A collection of Enums
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService         A service to handle the initialization of the grid
 * @description This controller contains all the information and functions to access investigator data held in the database.
 */
angular.module('appController')

	.controller('AdminInvestigatorController', function ($scope, InvestigatorService, ToastService,
	                                                     Enum, DialogService, GridService) {

		/**
		 * @property {Object}   data                        This is a collection of data that is available to the controller
		 * @property {string}   data.message                The message displayed as the page title
		 */
		$scope.data = {};
		$scope.data.message = 'Admin Investigator Overview Page';

		/**
		 * Initializes the grid with data retrieved from the InvestigatorService
		 * @param {object} the current options for the grid
		 * @function init
		 * @memberof GridService
		 */
        GridService.init(
            function(options){
                return InvestigatorService.getGrid(options);
            },
            ['id', 'comment']
        );

		/**
		 * Brings up a dialog with fields to add an investigator
		 * @param {object} $event the event that launched the dialog
		 * @function goToAddInvestigator
		 * @memberof AdminInvestigatorController
		 */
		$scope.goToAddInvestigator = function ($event) {
			$scope.dialogTitle = 'Add Investigator';

			$scope.investigator = {};
			$scope.investigator.status = Enum.Status.Active.value;

			DialogService.showDialog($scope, $event, '/views/admin/investigator/add.html');
		};

		/**
		 * Brings up a dialog with fields to edit an investigator
		 * @param {object} $event the event that launched the dialog
		 * @function goToEditInvestigator
		 * @memberof AdminInvestigatorController
		 */
		$scope.goToEditInvestigator = function ($event) {

			InvestigatorService.findOne(GridService.getSelectedRows()[0].id)
				.then(function (resp) {
					$scope.investigator = {};
					$scope.investigator.id = resp.data.id;
					$scope.investigator.name = resp.data.name;
					$scope.investigator.phoneNumber = resp.data.phoneNumber;
					$scope.investigator.email = resp.data.email;
					$scope.investigator.comment = resp.data.comment;
					$scope.investigator.status = resp.data.status;
					$scope.dialogTitle = 'Edit Investigator';
				});
			DialogService.showDialog($scope, $event, '/views/admin/investigator/edit.html');
		};

		/**
		 * Creates an investigator using the fields in the add dialog, and saves it to the database
		 * @function createInvestigator
		 * @memberof AdminInvestigatorController
		 */
		$scope.createInvestigator = function() {

			var investigator = new Investigator();
			
			investigator.name = $scope.investigator.name;
			investigator.phoneNumber = $scope.investigator.phoneNumber;
			investigator.email = $scope.investigator.email;
			investigator.status = $scope.investigator.status;
			investigator.comment = $scope.investigator.comment;
			
			InvestigatorService.create(investigator)
				.then(function (resp) {
					ToastService.success('Investigator Saved');
				})
				.catch(function (error) {
					ToastService.error('Error Saving Investigator');
				})
				.finally( function() {
					$scope.closeDialog();
					$scope.options.updateGrid();
				});
		};

		/**
		 * Updates investigator using the fields in the edit dialog, and saves it to the database
		 * @function updateInvestigator
		 * @memberof AdminInvestigatorController
		 */
		$scope.updateInvestigator = function() {

			var investigator = new Investigator();
			
			investigator.id = $scope.investigator.id;
			investigator.name = $scope.investigator.name;
			investigator.contact = $scope.investigator.contact;
			investigator.phoneNumber = $scope.investigator.phoneNumber;
			investigator.email = $scope.investigator.email;
			investigator.status = $scope.investigator.status;
			investigator.comment = $scope.investigator.comment;

			InvestigatorService.update(investigator)
				.then(function (resp) {
					ToastService.success('Investigator Updated');
				})
				.catch(function (error) {
					ToastService.error('Error Updating Investigator');
				})
				.finally( function() {
					$scope.closeDialog();
					$scope.options.updateGrid();
				});
		};

		/**
		 * Closes the currently open dialog(s) using the DialogService
		 * @function closeDialog
		 * @memberof AdminInvestigatorController
		 */
		$scope.closeDialog = function () {
			DialogService.close();
		};

		/**
		 * Gets the number of rows currently selected using the GridService
		 * @function getNumberOfSelectedRows
		 * @memberof AdminInvestigatorController
		 */
        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };
	});