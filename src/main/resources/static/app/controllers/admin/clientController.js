'use strict';

angular.module('appController')

    .controller('AdminClientOverviewController', function ($scope, ClientService, $location) {

        $scope.setActiveService(ClientService);

        $scope.data = {};
        $scope.data.message = "Admin Client Overview Page";

        $scope.GetGridData = function (options) {
            return ClientService.getGrid(options);
        };

        var data = {};

        $scope.ExportData = function (model) {
            ExportService.go(model);
        };


        $scope.goToAddClient = function () {
            $location.path("/Admin/Client/Add");
        };

        $scope.goToEditClient = function () {
            $location.path("/Admin/Client/" + $scope.selectedRowId);
        };
    })

    .controller('AdminClientAddController', function ($scope, ClientService, ToastrService, Enum, $location) {

        $scope.setActiveService(ClientService);

        $scope.data = {};
        $scope.data.message = "Admin Client Add Page";

        $scope.client = {};
        $scope.isActive = false;

        $scope.createClient = function () {

            var client = new Client();

            client.name = $scope.client.name;
            client.contact = $scope.client.contact;
            client.phoneNumber = $scope.client.phoneNumber;
            client.email = $scope.client.email;
            client.status = $scope.getStatusValue();
            client.comment = $scope.client.comment;

            $scope.create(client)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save Client', 'Error');
                });
            $location.path("/Admin/Client/Overview");
        };

        $scope.cancel = function () {
            $location.path("/Admin/Client/Overview");
        };

        $scope.getBooleanStatus = function (status) {
            $scope.isActive = status === Enum.Status.Active.value;
        };

        $scope.getStatusValue = function () {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        };
    })

    .controller('AdminClientEditController', function ($scope, $route, $routeParams, ClientService, ToastrService, Enum, $location) {

        $scope.setActiveService(ClientService);

        $scope.data = {};
        $scope.data.message = "Admin Client Edit Page";
        $scope.data.param = $routeParams.Id;

        $scope.isActive = false;
        $scope.client = {};

        $scope.findOne($scope.data.param).then(function (resp) {
            $scope.client.id = resp.id;
            $scope.client.name = resp.name;
            $scope.client.contact = resp.contact;
            $scope.client.phoneNumber = resp.phoneNumber;
            $scope.client.email = resp.email;
            $scope.getBooleanStatus(resp.status);
            $scope.client.comment = resp.comment;
        });

        $scope.save = function () {
            var client = new Client();

            client.id = $scope.client.id;
            client.name = $scope.client.name;
            client.contact = $scope.client.contact;
            client.phoneNumber = $scope.client.phoneNumber;
            client.email = $scope.client.email;
            client.status = $scope.getStatusValue();
            client.comment = $scope.comment;

            console.log(client);

            $scope.update(client)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save Client', 'Error');
                });

            $location.path("/Admin/Client/Overview");
        };

        $scope.cancel = function () {
            $location.path("/Admin/Client/Overview");
        };

        $scope.getBooleanStatus = function (status) {
            $scope.isActive = status === Enum.Status.Active.value;
        };

        $scope.getStatusValue = function () {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        };
    });
