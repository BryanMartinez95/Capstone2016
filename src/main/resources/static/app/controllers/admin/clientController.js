'use strict';

angular.module('appController')

    .controller('AdminClientOverviewController', function ($scope, ClientService, ToastService, Enum, DialogService, GridService) {

        $scope.setActiveService(ClientService);

        $scope.data = {};
        $scope.data.message = 'Admin Client Overview Page';
	    
        GridService.init(
            function(options) {
                return ClientService.getGrid(options);
            },
            ['id', 'comment']
        );
        
        $scope.goToAddClient = function ($event) {
		    $scope.dialogTitle = 'Add Client';

		    $scope.client = {};
		    $scope.client.status = Enum.Status.Active.value;

	        DialogService.showDialog($scope, $event, '/views/admin/client/add.html');
	    };

        $scope.goToEditClient = function ($event) {

		    ClientService.findOne(GridService.getSelectedRows()[0].id)
			    .then(function (resp) {
				    $scope.client = {};
				    $scope.client.id = resp.data.id;
				    $scope.client.name = resp.data.name;
				    $scope.client.contact = resp.data.contact;
				    $scope.client.phoneNumber = resp.data.phoneNumber;
				    $scope.client.email = resp.data.email;
				    $scope.client.comment = resp.data.comment;
				    $scope.client.status = resp.data.status;
				    $scope.dialogTitle = 'Edit Client';
				    DialogService.showDialog($scope, $event, '/views/admin/client/edit.html');
			    });
	    };

        $scope.createClient = function () {

            var client = new Client();

            client.name = $scope.client.name;
            client.contact = $scope.client.contact;
            client.phoneNumber = $scope.client.phoneNumber;
            client.email = $scope.client.email;
            client.status = $scope.client.status;
            client.comment = $scope.client.comment;

            $scope.create(client)
                .then(function (resp) {
                    ToastService.success('Client Saved');
                })
                .catch(function (error) {
                    ToastService.error('Error Saving Client');
                })
	            .finally( function() {
		            $scope.closeDialog();
                    GridService.updateGrid();
	            });
        };

        $scope.updateClient = function () {

            var client = new Client();

            client.id = $scope.client.id;
            client.name = $scope.client.name;
            client.contact = $scope.client.contact;
            client.phoneNumber = $scope.client.phoneNumber;
            client.email = $scope.client.email;
	        client.status = $scope.client.status;
            client.comment = $scope.client.comment;

            $scope.update(client)
                .then(function (resp) {
                    ToastService.success('Client Updated');
                })
                .catch(function (error) {
                    ToastService.error('Error Updating Client');
                })
	            .finally( function() {
		            $scope.closeDialog();
                    GridService.updateGrid();
	            });
        };

	    $scope.closeDialog = function () {
		    DialogService.close();
	    };

        $scope.deselectRows = function() {
            GridService.deselectAll();
        };

        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };
    });
