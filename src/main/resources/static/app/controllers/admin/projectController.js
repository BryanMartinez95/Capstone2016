'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name AdminProjectController
 *
 * @param {service} $scope          The scope of this controller
 * @param {service} ProjectService  A service to handle the API calls involving users
 * @param {service} $location       A service to access and manipulate properties of the browser's location
 * @param {service} ToastService    A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} DialogService   A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService     A service to handle the initialization of the grid
 * @description This controller contains all the information and functions to access and delete project data held in the database.
 */
angular.module('appController')

	.controller('AdminProjectController', function ($scope, ProjectService, $location,
	                                                ToastService, DialogService, GridService) {

		/**
		 * @property {Object}   data                        This is a collection of data that is available to the controller
		 * @property {string}   data.message                The message displayed as the page title
		 */
		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";

		/**
		 * Initializes the grid with data retrieved from the ProjectService
		 * @param {object} the current options for the grid
		 * @function init
		 * @memberof GridService
		 */
        GridService.init(
            function(options) {
                return ProjectService.getGrid(options);
            },
            ['id', 'clients', 'samples', 'users', 'investigatorId', 'comment']
        );

		/**
		 * Brings up a dialog with a confirmation to delete a project
		 * @param {object} $event the event that launched the dialog
		 * @function goToDeleteProject
		 * @memberof AdminProjectController
		 */
		$scope.goToDeleteProject = function ($event) {
			$scope.dialogTitle = 'Confirm Project Deletion: ' + GridService.getSelectedRows()[0].name;
			DialogService.showDialog($scope, $event, '/views/admin/project/delete.html');
		};

		/**
		 * Deletes a project confirmed in the delete dialog, and removes it from the database
		 * @function deleteProject
		 * @memberof AdminProjectController
		 */
		$scope.deleteProject = function () {

			ProjectService.remove(GridService.getSelectedRows()[0].id)
				.then(function (resp) {
					ToastService.success('Project Deleted');
				})
				.catch(function (error) {
					ToastService.error('Error Deleting Project');
				})
				.finally( function() {
					$scope.closeDialog();
					$scope.options.updateGrid();
				});
		};

		/**
		 * Closes the currently open dialog(s) using the DialogService
		 * @function closeDialog
		 * @memberof AdminProjectController
		 */
		$scope.closeDialog = function () {
			DialogService.close();
		};

		/**
		 * Gets the number of rows currently selected using the GridService
		 * @function getNumberOfSelectedRows
		 * @memberof AdminProjectController
		 */
        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };
	});