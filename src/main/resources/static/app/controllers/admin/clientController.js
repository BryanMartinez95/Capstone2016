'use strict';

angular.module('appController')

    .controller('AdminClientOverviewController', function ($scope, ClientService, ToastrService, Enum, $mdDialog, GridRequestModel) {

        $scope.setActiveService(ClientService);

        $scope.data = {};
        $scope.data.message = 'Admin Client Overview Page';
	    
        $scope.getGrid = function (options) {
            options.ignoredColumns = ['id', 'comment'];
            return ClientService.getGrid(options);
        };
	    
        $scope.goToAddClient = function ($event) {
		    $scope.dialogTitle = 'Add Client';

		    $scope.client = {};
		    $scope.client.status = Enum.Status.Active.value;

		    $mdDialog.show({
			    scope: $scope,
			    templateUrl: '/views/admin/client/add.html',
			    parent: angular.element(document.body),
			    targetEvent: $event,
			    fullscreen: false
		    });
	    };

        $scope.goToEditClient = function ($event) {

		    ClientService.findOne($scope.options.selected[0].id)
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
			    });

		    $mdDialog.show({
			    scope: $scope,
			    templateUrl: '/views/admin/client/edit.html',
			    parent: angular.element(document.body),
			    targetEvent: $event,
			    fullscreen: false
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
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save Client', 'Error');
                })
	            .finally( function() {
		            var model = GridRequestModel.newGridRequestModel();
		            $scope.options.updateGrid(model);
	            });

	        $scope.closeDialog();
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
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save Client', 'Error');
                })
	            .finally( function() {
		            var model = GridRequestModel.newGridRequestModel();
		            $scope.options.updateGrid(model);
	            });

	        $scope.closeDialog();
        };

	    $scope.closeDialog = function () {
		    $mdDialog.destroy();
	    };
    });
