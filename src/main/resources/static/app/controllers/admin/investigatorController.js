'use strict';

angular.module('appController')

	.controller('AdminInvestigatorOverviewController', function ($scope, InvestigatorService, ToastrService, Enum, $mdDialog, GridRequestModel) {

		$scope.setActiveService(InvestigatorService);

		$scope.data = {};
		$scope.data.message = 'Admin Investigator Overview Page';

		$scope.getGrid = function (options) {
			options.ignoredColumns = ['id', 'comment'];
			return InvestigatorService.getGrid(options);
		};

		$scope.goToAddInvestigator = function ($event) {
			$scope.dialogTitle = 'Add Investigator';

			$scope.investigator = {};
			$scope.investigator.status = Enum.Status.Active.value;

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
					$scope.investigator = {};
					$scope.investigator.id = resp.data.id;
					$scope.investigator.name = resp.data.name;
					$scope.investigator.phoneNumber = resp.data.phoneNumber;
					$scope.investigator.email = resp.data.email;
					$scope.investigator.comment = resp.data.comment;
					$scope.investigator.status = resp.data.status;
					$scope.dialogTitle = 'Edit Investigator';
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
			investigator.status = $scope.investigator.status;
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
			investigator.status = $scope.investigator.status;
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
	});