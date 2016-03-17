'use strict';

angular.module('appController')

    .controller('AdminTestMethodOverviewController', function ($scope, TestMethodService, ToastrService, $mdDialog, GridRequestModel) {

        $scope.setActiveService(TestMethodService);

        $scope.data = {};
        $scope.data.message = "Admin Test Method Overview Page";

	    $scope.selectedDevice =  {};
	    $scope.testMethod = {};
	    $scope.deviceOptions = {
		    apiUrl: "/Api/Device/SingleSelect"
	    };

        $scope.getGrid = function (options) {
	        options.ignoredColumns = ['id'];
            return TestMethodService.getGrid(options);
        };

	    $scope.goToAddTestMethod = function ($event) {
		    $scope.dialogTitle = "Add Test Method";

		    $scope.testMethod = {};

		    $mdDialog.show({
			    scope: $scope,
			    templateUrl: '/views/admin/testMethod/add.html',
			    parent: angular.element(document.body),
			    targetEvent: $event,
			    fullscreen: false
		    });
	    };

	    $scope.goToEditTestMethod = function ($event) {

		    $scope.findOne($scope.options.selected[0].id)
			    .then(function(resp){
				    $scope.testMethod.id = resp.data.id;
				    $scope.testMethod.name = resp.data.name;
				    $scope.testMethod.deviceId = resp.data.deviceId;
				    $scope.testMethod.deviceName = resp.data.deviceName;
				    $scope.selectedDevice = {
					    value: resp.data.deviceId,
					    display: resp.data.deviceName
				    };
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
		    testMethod.deviceId = $scope.selectedDevice.value;
		    testMethod.deviceName = $scope.selectedDevice.display;

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
            testMethod.deviceId = $scope.selectedDevice.value;
	        testMethod.deviceName = $scope.selectedDevice.display;

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
    });