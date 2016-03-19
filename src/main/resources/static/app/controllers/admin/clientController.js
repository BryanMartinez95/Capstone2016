'use strict';

angular.module('appController')

    .controller('AdminClientOverviewController', function ($scope, ClientService, ToastrService, Enum, $mdDialog, GridRequestModel) {

        $scope.setActiveService(ClientService);

        $scope.data = {};
        $scope.data.message = "Admin Client Overview Page";

        $scope.client = {};
        $scope.isActive = false;
	    $scope.dialogTitle = '';
	    $scope.statusMessage = '';

        $scope.getGrid = function (options) {
            options.ignoredColumns = ['id', 'comment'];
            return ClientService.getGrid(options);
        };

        //$scope.ExportData = function (model) {
        //    ExportService.go(model);
        //};

        $scope.goToAddClient = function ($event) {
		    $scope.dialogTitle = "Add Client";

		    $scope.client = {};
		    $scope.isActive = true;
	        $scope.onSwitchChange();

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
				    $scope.client.id = resp.data.id;
				    $scope.client.name = resp.data.name;
				    $scope.client.contact = resp.data.contact;
				    $scope.client.phoneNumber = resp.data.phoneNumber;
				    $scope.client.email = resp.data.email;
				    $scope.client.comment = resp.data.comment;
				    $scope.client.status = resp.data.status;
				    getBooleanStatus($scope.client.status);
				    $scope.onSwitchChange();
				    $scope.dialogTitle = "Edit Client - " + $scope.client.name;
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
            client.status = getStatusValue();
            client.comment = $scope.client.comment;

            $scope.create(client)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save Client', 'Error');
                })
	            .finally( function() {
		            var model = GridRequestModel.newGridRequestModelFromJson({
			            pageSize: $scope.options.limit,
			            currentPage: $scope.options.page,
			            filters: $scope.options.filters,
			            sorts: $scope.options.sorts
		            });
		            $scope.options.selected = [];
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
            client.status = getStatusValue();
            client.comment = $scope.client.comment;

            $scope.update(client)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save Client', 'Error');
                })
	            .finally( function() {
		            var model = GridRequestModel.newGridRequestModelFromJson({
			            pageSize: $scope.options.limit,
			            currentPage: $scope.options.page,
			            filters: $scope.options.filters,
			            sorts: $scope.options.sorts
		            });
		            $scope.options.selected = [];
		            $scope.options.updateGrid(model);
	            });

	        $scope.closeDialog();
        };

	    $scope.closeDialog = function () {
		    $mdDialog.destroy();
	    };

	    function getBooleanStatus(status) {
		    $scope.isActive = status.toLowerCase() === Enum.Status.Active.value.toLowerCase();
	    }

	    function getStatusValue() {
		    return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
	    }

	    $scope.onSwitchChange = function () {
		    $scope.statusMessage = $scope.isActive ? Enum.Status.Active.display : Enum.Status.Inactive.display;
	    };
    });
