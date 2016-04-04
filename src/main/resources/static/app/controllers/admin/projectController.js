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
 * @param {service} LoadingService  A service used to handle the display of the loading bar
 * @description This controller contains all the information and functions to access and delete project data held in the database.
 */
angular.module('appController')

	.controller('AdminProjectController', function ($scope, ProjectService, $location,
	                                                ToastService, DialogService, GridService,
	                                                LoadingService) {

		/**
		 * @property {Object}   data                        This is a collection of data that is available to the controller
		 * @property {string}   data.message                The message displayed as the page title
		 * @property {string}   $parent.isLoading           The current status of the loading bar
		 */
		$scope.data = {};
		$scope.data.message = "Admin Project Overview Page";
		$scope.$parent.isLoading = LoadingService.toggle();

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

		$scope.$parent.isLoading = LoadingService.toggle();

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

			$scope.$parent.isLoading = LoadingService.toggle();

			ProjectService.remove(GridService.getSelectedRows()[0].id)
				.then(function (resp) {
					ToastService.success('Project Deleted');
				})
				.catch(function (error) {
					ToastService.error('Error Deleting Project');
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
		 * @memberof AdminProjectController
		 */
		$scope.closeDialog = function () {
			DialogService.close();
		};

		/**
		 * Deselects the rows currently selected using the GridService
		 * @function deselectRows
		 * @memberof AdminProjectController
		 */
        $scope.deselectRows = function() {
            GridService.deselectAll();
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