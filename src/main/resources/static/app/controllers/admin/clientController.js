'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name AdminClientController
 *
 * @param {service} $scope              The scope of this controller
 * @param {service} ClientService       A service to handle the API calls involving clients
 * @param {service} ToastService        A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {model} Enum                  A collection of Enums
 * @param {service} DialogService       A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService         A service to handle the initialization of the grid
 * @param {service} LoadingService      A service used to handle the display of the loading bar
 * @description This controller contains all the information and functions to access client data held in the database.
 */
angular.module('appController')

    .controller('AdminClientController', function ($scope, ClientService, ToastService,
                                                   Enum, DialogService, GridService,
                                                   LoadingService) {
	
	    /**
	     * @property {Object}   data                        This is a collection of data that is available to the controller
	     * @property {string}   data.message                The message displayed as the page title
	     * @property {string}   $parent.isLoading           The current status of the loading bar
	     */
        $scope.data = {};
        $scope.data.message = 'Admin Client Overview Page';
	    $scope.$parent.isLoading = LoadingService.toggle();
	
	    /**
	     * Initializes the grid with data retrieved from the ClientService
	     * @param {object} the current options for the grid
	     * @function init
	     * @memberof GridService
	     */
        GridService.init(
            function(options) {
                return ClientService.getGrid(options);
            },
            ['id', 'comment']
        );

	    $scope.$parent.isLoading = LoadingService.toggle();

	    /**
	     * Brings up a dialog with fields to add a client
	     * @param {object} $event the event that launched the dialog
	     * @function goToAddClient
	     * @memberof AdminClientController
	     */
        $scope.goToAddClient = function ($event) {
		    $scope.dialogTitle = 'Add Client';

		    $scope.client = {};
		    $scope.client.status = Enum.Status.Active.value;

	        DialogService.showDialog($scope, $event, '/views/admin/client/add.html');
	    };

	    /**
	     * Brings up a dialog with fields to edit a client
	     * @param {object} $event the event that launched the dialog
	     * @function goToEditClient
	     * @memberof AdminClientController
	     */
        $scope.goToEditClient = function ($event) {

		    ClientService.findOne(GridService.getSelectedRows()[0].id)
			    .then(function (resp) {
				    $scope.client = {};
				    $scope.client.id = resp.data.id;
				    $scope.client.name = resp.data.name;
				    $scope.client.phoneNumber = resp.data.phoneNumber;
				    $scope.client.email = resp.data.email;
				    $scope.client.comment = resp.data.comment;
				    $scope.client.status = resp.data.status;
				    $scope.dialogTitle = 'Edit Client';
				    DialogService.showDialog($scope, $event, '/views/admin/client/edit.html');
			    });
	    };
	
	    /**
	     * Creates a client using the fields in the add dialog, and saves it to the database
	     * @function createClient
	     * @memberof AdminClientController
	     */
        $scope.createClient = function () {

	        $scope.$parent.isLoading = LoadingService.toggle();

            var client = new Client();

            client.name = $scope.client.name;
            client.phoneNumber = $scope.client.phoneNumber;
            client.email = $scope.client.email;
            client.status = $scope.client.status;
            client.comment = $scope.client.comment;

            ClientService.create(client)
                .then(function (resp) {
                    ToastService.success('Client Saved');
                })
                .catch(function (error) {
                    ToastService.error('Error Saving Client');
                })
	            .finally( function() {
		            $scope.closeDialog();
                    GridService.updateGrid();
		            $scope.$parent.isLoading = LoadingService.toggle();
	            });
        };
	
	    /**
	     * Updates client using the fields in the edit dialog, and saves it to the database
	     * @function updateClient
	     * @memberof AdminClientController
	     */
        $scope.updateClient = function () {

	        $scope.$parent.isLoading = LoadingService.toggle();

            var client = new Client();

            client.id = $scope.client.id;
            client.name = $scope.client.name;
            client.phoneNumber = $scope.client.phoneNumber;
            client.email = $scope.client.email;
	        client.status = $scope.client.status;
            client.comment = $scope.client.comment;

            ClientService.update(client)
                .then(function (resp) {
                    ToastService.success('Client Updated');
                })
                .catch(function (error) {
                    ToastService.error('Error Updating Client');
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
	     * @memberof AdminClientController
	     */
	    $scope.closeDialog = function () {
		    DialogService.close();
	    };
	
	    /**
	     * Deselects the rows currently selected using the GridService
	     * @function deselectRows
	     * @memberof AdminClientController
	     */
        $scope.deselectRows = function() {
            GridService.deselectAll();
        };
	
	    /**
	     * Gets the number of rows currently selected using the GridService
	     * @function getNumberOfSelectedRows
	     * @memberof AdminClientController
	     */
        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };
    });
