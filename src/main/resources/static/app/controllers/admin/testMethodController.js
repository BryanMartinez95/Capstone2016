'use strict';

angular.module('appController')

    .controller('AdminTestMethodOverviewController', function ($scope, TestMethodService, $location) {

        $scope.setActiveService(TestMethodService);

        $scope.data = {};
        $scope.data.message = "Admin Test Method Overview Page";

        $scope.GetGridData = function (options) {
            return TestMethodService.getGrid(options);
        };

        $scope.goToAddTestMethod = function () {
            $location.path("/Admin/TestMethod/Add");
        };

        $scope.goToEditTestMethod = function () {
            $location.path("/Admin/TestMethod/" + $scope.selectedRowId);
        };
    })

    .controller('AdminTestMethodAddController', function ($scope, TestMethodService, DeviceService, ToastrService, SingleSelect, $location) {

        $scope.setActiveService(TestMethodService);

        $scope.data = {};
        $scope.data.message = "Admin Test Method Add Page";

        $scope.testMethod = {};
	    $scope.params = {
		    apiUrl: "/Api/Device/SingleSelect"
	    };

	    $scope.deviceOptions = [];

	    //$scope.selectedDevice = $scope.deviceOptions[0];

        $scope.createTestMethod = function() {

	        var testMethod = new TestMethod();

	        testMethod.name = $scope.testMethod.name;
	        testMethod.deviceId = $scope.selectedDevice.id;

            $scope.create(testMethod)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save Test Method', 'Error');
                });
            $location.path("/Admin/TestMethod/Overview");
        };

        $scope.cancel = function () {
            $location.path("/Admin/TestMethod/Overview");
        };
    })

    .controller('AdminTestMethodEditController', function ($scope, TestMethodService, DeviceService, ToastrService, SingleSelect, $location, $route, $routeParams) {

        $scope.setActiveService(TestMethodService);

        $scope.data = {};
        $scope.data.message = "Admin Test Method Edit Page";
        $scope.data.param = $routeParams.Id;

        $scope.deviceOptions = DeviceService.findAll();
        $scope.selectedDevice = $scope.deviceOptions[0];
        $scope.testMethod = {};

        $scope.findOne($scope.data.param).then(function(resp){
            $scope.testMethod.id = resp.id;
            $scope.testMethod.name = resp.name;
            $scope.selectedDevice = $scope.getObjectFromArray(resp.device, Device);
        });

        $scope.save = function () {
            var testMethod = new TestMethod();

            testMethod.id = $scope.testMethod.id;
            testMethod.name = $scope.testMethod.name;
            testMethod.device = $scope.selectedDevice;

            $scope.update(testMethod)
                .then(function(resp){
                    ToastrService.success('Saved');
                })
                .catch(function(error){
                    ToastrService.error('Cannot Save Test Method', 'Error');
                });

            $location.path("/Admin/TestMethod/Overview");
        };

        $scope.cancel = function () {
            $location.path("/Admin/TestMethod/Overview");
        };
    });