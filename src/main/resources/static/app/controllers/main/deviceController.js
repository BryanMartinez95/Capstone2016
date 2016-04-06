'use strict';

angular.module('appController').controller('DeviceOverviewController', function ($scope, DeviceService, $location, GridService) {

    $scope.data = {};
    $scope.data.message = "Device Overview Page";

    GridService.init(
        function (options) {
            return DeviceService.getGrid(options);
        },
        ['id', 'comment']
    );

    $scope.goToEditDevice = function () {
        $location.path("/Device/" + $scope.options.selected[0].id);
    };
});

angular.module('appController').controller('DeviceEditController', function ($scope, DeviceService, SampleService,
                                                                             $location, $route, $routeParams,
                                                                             ToastService, DialogService, GridService, LoadingService) {

    $scope.data.param = $routeParams.Id;

    var init = function () {

        DeviceService.findOne($scope.data.param)
            .then(function (resp) {
                $scope.device = {};
                $scope.device.id = resp.data.id;
                $scope.device.name = resp.data.name;
                $scope.device.status = resp.data.status;
                $scope.device.comment = resp.data.comment;
            })
            .catch(function (error) {
                DialogService.error('Error Retrieving Device');
                $location.path('/Device');
            })
    };

    init();

    GridService.init(
        function(options) {
            return SampleService.getGridByDeviceId(options, $scope.data.param);
        },
        ['id', 'sampleIdentifierId', 'measurements', 'comment', 'projectId', 'projectName', 'deviceId']
    );

    $scope.updateDevice = function () {

        $scope.$parent.isLoading = LoadingService.activate();

        var device = new Device();

        device.id = $scope.device.id;
        device.name = $scope.device.name;
        device.comment = $scope.device.comment;
        device.status = $scope.device.status;

        DeviceService.update(device)
            .then(function (resp) {
                ToastService.success('Device Updated');
            })
            .catch(function (error) {
                DialogService.error('Error Updating Device');
            })
            .finally(function () {
                $scope.$parent.isLoading = LoadingService.deactivate();
            });
    };

    $scope.goToAddSamples = function () {
        $location.path("/Sample");
    };

    $scope.goToSample = function () {
        $location.path("/Sample/" + GridService.getSelectedRows()[0].id);
    };

    /**
     * Gets the number of rows currently selected using the GridService
     * @function getNumberOfSelectedRows
     * @memberof DeviceEditController
     */
    $scope.getNumberOfSelectedRows = function() {
        return GridService.getSelectedRows().length;
    };

    $scope.refresh = function () {
        init();
        $scope.options.updateGrid();
        ToastService.success('Device Reloaded');
    }
});
