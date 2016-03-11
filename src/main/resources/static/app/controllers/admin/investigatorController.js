'use strict';

angular.module('appController')

	.controller('AdminInvestigatorOverviewController', function ($scope, InvestigatorService, $location) {

		$scope.setActiveService(InvestigatorService);

		$scope.data = {};
		$scope.data.message = "Admin Investigator Overview Page";
		$scope.getGrid = function (options) {
			return InvestigatorService.getGrid(options);
		};

		$scope.goToAddInvestigator = function () {
			$location.path("/Admin/Investigator/Add");
		};

		$scope.goToEditInvestigator = function () {
			$location.path("/Admin/Investigator/" + $scope.options.selected[0].id);
		};
	})
	
	.controller('AdminInvestigatorAddController', function ($scope, InvestigatorService, ToastrService, Enum, $location) {
		
		$scope.setActiveService(InvestigatorService);
		
		$scope.data = {};
		$scope.data.message = "Admin Investigator Add Page";
		
		$scope.investigator = {};
		$scope.isActive = false;
		
		$scope.createInvestigator = function() {
			
			var investigator = new Investigator();
			
			investigator.name = $scope.investigator.name;
			investigator.phoneNumber = $scope.investigator.phoneNumber;
			investigator.email = $scope.investigator.email;
			investigator.status = $scope.getStatusValue();
			investigator.comment = $scope.investigator.comment;
			
			$scope.create(investigator)
				.then(function (resp) {
					ToastrService.success('Saved');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Save Investigator', 'Error');
				});
			$location.path("/Admin/Investigator/Overview");
		};
		
		$scope.cancel = function () {
			$location.path("/Admin/Investigator/Overview");
		};
		
		$scope.getBooleanStatus = function (status) {
			$scope.isActive = status === Enum.Status.Active.value;
		};
		
		$scope.getStatusValue = function () {
			return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
		};
	})
	
	.controller('AdminInvestigatorEditController', function ($scope, $route, $routeParams, InvestigatorService, ToastrService, Enum, $location) {
		
		$scope.setActiveService(InvestigatorService);
		
		$scope.data = {};
		$scope.data.message = "Admin Investigator Edit Page";
		$scope.data.param = $routeParams.Id;
		
		$scope.isActive = false;
		$scope.investigator = {};
		
		$scope.findOne($scope.data.param).then(function (resp) {
			$scope.investigator.id = resp.id;
			$scope.investigator.name = resp.name;
			$scope.investigator.phoneNumber = resp.phoneNumber;
			$scope.investigator.email =  resp.email;
			$scope.getBooleanStatus(resp.status);
			$scope.investigator.comment = resp.comment;
		});
		
		$scope.save = function() {
			var investigator = new Investigator();
			
			investigator.id = $scope.investigator.id;
			investigator.name = $scope.investigator.name;
			investigator.contact = $scope.investigator.contact;
			investigator.phoneNumber = $scope.investigator.phoneNumber;
			investigator.email = $scope.investigator.email;
			investigator.status = $scope.getStatusValue();
			investigator.comment = $scope.investigator.comment;

			$scope.update(investigator)
				.then(function (resp) {
					ToastrService.success('Saved');
				})
				.catch(function (error) {
					ToastrService.error('Cannot Save Investigator', 'Error');
				});
			
			$location.path("/Admin/Investigator/Overview");
		};
		
		$scope.cancel = function () {
			$location.path("/Admin/Investigator/Overview");
		};
		
		$scope.getBooleanStatus = function (status) {
			$scope.isActive = status === Enum.Status.Active.value;
		};
		
		$scope.getStatusValue = function () {
			return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
		};
	});