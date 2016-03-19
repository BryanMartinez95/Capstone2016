'use strict';

angular.module('appController')

	.controller('AdminInvestigatorOverviewController', function ($scope, InvestigatorService, ToastrService, Enum, $mdDialog, GridRequestModel) {

		$scope.setActiveService(InvestigatorService);

		$scope.data = {};
		$scope.data.message = "Admin Investigator Overview Page";

		$scope.investigator = {};
		$scope.isActive = false;
		$scope.dialogTitle = '';
		$scope.statusMessage = '';

		$scope.getGrid = function (options) {
			options.ignoredColumns = ['id', 'comment'];
			return InvestigatorService.getGrid(options);
		};

		$scope.goToAddInvestigator = function ($event) {
			$scope.dialogTitle = "Add Investigator";

			$scope.investigator = {};
			$scope.isActive = true;
			$scope.onSwitchChange();

			$mdDialog.show({
				scope: $scope,
				templateUrl: '/views/admin/investigator/add.html',
				parent: angular.element(document.body),
				targetEvent: $event,
				fullscreen: false
			});
		};

		$scope.goToEditInvestigator = function ($event) {

			InvestigatorService.findOne($scope.options.selected[0].id)
				.then(function (resp) {
					$scope.investigator.id = resp.data.id;
					$scope.investigator.name = resp.data.name;
					$scope.investigator.phoneNumber = resp.data.phoneNumber;
					$scope.investigator.email = resp.data.email;
					$scope.investigator.comment = resp.data.comment;
					$scope.investigator.status = resp.data.status;
					$scope.dialogTitle = "Edit Investigator - " + $scope.investigator.name;
					getBooleanStatus($scope.investigator.status);
					$scope.onSwitchChange();
				});

			$mdDialog.show({
				scope: $scope,
				templateUrl: '/views/admin/investigator/edit.html',
				parent: angular.element(document.body),
				targetEvent: $event,
				fullscreen: false
			});
		};
		
		$scope.createInvestigator = function() {

			var investigator = new Investigator();
			
			investigator.name = $scope.investigator.name;
			investigator.phoneNumber = $scope.investigator.phoneNumber;
			investigator.email = $scope.investigator.email;
			investigator.status = getStatusValue();
			investigator.comment = $scope.investigator.comment;
			
			$scope.create(investigator)
				.then(function (resp) {
					ToastrService.success('Saved');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Save Investigator', 'Error');
				})
				.finally( function() {
					var model = GridRequestModel.newGridRequestModel();
					$scope.options.updateGrid(model);
				});

			$scope.closeDialog();
		};
		
		$scope.updateInvestigator = function() {
			var investigator = new Investigator();
			
			investigator.id = $scope.investigator.id;
			investigator.name = $scope.investigator.name;
			investigator.contact = $scope.investigator.contact;
			investigator.phoneNumber = $scope.investigator.phoneNumber;
			investigator.email = $scope.investigator.email;
			investigator.status = getStatusValue();
			investigator.comment = $scope.investigator.comment;

			$scope.update(investigator)
				.then(function (resp) {
					ToastrService.success('Saved');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Save Investigator', 'Error');
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