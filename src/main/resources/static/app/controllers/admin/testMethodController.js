'use strict';

angular.module('appController')

    .controller('AdminTestMethodOverviewController', function ($scope, TestMethodService, DeviceService,
                                                               ToastrService, $mdDialog, GridRequestModel) {

        $scope.setActiveService(TestMethodService);

        $scope.data = {};
        $scope.data.message = 'Admin Test Method Overview Page';

        $scope.getGrid = function (options) {
	        options.ignoredColumns = ['id', 'deviceId'];
            return TestMethodService.getGrid(options);
        };

	    $scope.goToAddTestMethod = function ($event) {
		    $scope.testMethod = {};
		    $scope.dialogTitle = 'Add Test Method';

		    getDeviceOptions();

		    $mdDialog.show({
			    scope: $scope,
			    templateUrl: '/views/admin/testMethod/add.html',
			    parent: angular.element(document.body),
			    targetEvent: $event,
			    fullscreen: false
		    });
	    };

	    $scope.goToEditTestMethod = function ($event) {

		    $scope.testMethod = {};
		    $scope.dialogTitle = 'Edit Test Method';

		    $scope.findOne($scope.options.selected[0].id)
			    .then(function(resp){
				    $scope.testMethod.id = resp.data.id;
				    $scope.testMethod.name = resp.data.name;
				    setDeviceSelection(resp.data.deviceId);
			    });

		    $mdDialog.show({
			    scope: $scope,
			    templateUrl: '/views/admin/testMethod/edit.html',
			    parent: angular.element(document.body),
			    targetEvent: $event,
			    fullscreen: false
		    });
	    };

	    $scope.createTestMethod = function() {
		    var testMethod = new TestMethod();

		    testMethod.name = $scope.testMethod.name;
		    testMethod.deviceId = $scope.testMethod.device.value;
		    testMethod.deviceName = $scope.testMethod.device.display;

		    $scope.create(testMethod)
			    .then(function (resp) {
				    ToastrService.success('Saved');
			    })
			    .catch(function (error) {
				    ToastrService.error('Cannot Save Test Method', 'Error');
			    })
			    .finally( function() {
				    var model = GridRequestModel.newGridRequestModel();
				    $scope.options.updateGrid(model);
			    });

		    $scope.closeDialog();
	    };

        $scope.updateTestMethod = function () {
            var testMethod = new TestMethod();

            testMethod.id = $scope.testMethod.id;
            testMethod.name = $scope.testMethod.name;
	        testMethod.deviceId = $scope.testMethod.device.value;
	        testMethod.deviceName = $scope.testMethod.device.display;

            $scope.update(testMethod)
                .then(function(resp){
                    ToastrService.success('Saved');
                })
                .catch(function(error){
                    ToastrService.error('Cannot Save Test Method', 'Error');
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

	    function getDeviceOptions() {
		    DeviceService.singleSelect().then(function (resp) {
			    $scope.deviceOptions = resp.data;
		    });
	    }

	    function setDeviceSelection(value) {
		    DeviceService.singleSelect().then(function (resp) {
			    $scope.deviceOptions = resp.data;
			    for (var i = 0; i < $scope.deviceOptions.length; i++) {
				    if ($scope.deviceOptions[i].value === value) {
					    $scope.testMethod.device = $scope.deviceOptions[i];
				    }
			    }
		    });
	    }
    });