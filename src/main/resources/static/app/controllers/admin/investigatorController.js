'use strict';

angular.module('appController')

	.controller('AdminInvestigatorController', function ($scope, InvestigatorService, ToastService,
	                                                     Enum, DialogService, GridService,
	                                                     LoadingService) {
        
		$scope.data = {};
		$scope.data.message = 'Admin Investigator Overview Page';

		$scope.$parent.isLoading = LoadingService.toggle();

        GridService.init(
            function(options){
                return InvestigatorService.getGrid(options);
            },
            ['id', 'comment']
        );

		$scope.$parent.isLoading = LoadingService.toggle();

		$scope.goToAddInvestigator = function ($event) {
			$scope.dialogTitle = 'Add Investigator';

			$scope.investigator = {};
			$scope.investigator.status = Enum.Status.Active.value;

			DialogService.showDialog($scope, $event, '/views/admin/investigator/add.html');
		};

		$scope.goToEditInvestigator = function ($event) {

			InvestigatorService.findOne(GridService.getSelectedRows()[0].id)
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
			DialogService.showDialog($scope, $event, '/views/admin/investigator/edit.html');
		};
		
		$scope.createInvestigator = function() {

			$scope.$parent.isLoading = LoadingService.toggle();

			var investigator = new Investigator();
			
			investigator.name = $scope.investigator.name;
			investigator.phoneNumber = $scope.investigator.phoneNumber;
			investigator.email = $scope.investigator.email;
			investigator.status = $scope.investigator.status;
			investigator.comment = $scope.investigator.comment;
			
			InvestigatorService.create(investigator)
				.then(function (resp) {
					ToastService.success('Investigator Saved');
				})
				.catch(function (error) {
					ToastService.error('Error Saving Investigator');
				})
				.finally( function() {
					$scope.closeDialog();
                    GridService.updateGrid();
					$scope.$parent.isLoading = LoadingService.toggle();
				});
		};
		
		$scope.updateInvestigator = function() {

			$scope.$parent.isLoading = LoadingService.toggle();

			var investigator = new Investigator();
			
			investigator.id = $scope.investigator.id;
			investigator.name = $scope.investigator.name;
			investigator.contact = $scope.investigator.contact;
			investigator.phoneNumber = $scope.investigator.phoneNumber;
			investigator.email = $scope.investigator.email;
			investigator.status = $scope.investigator.status;
			investigator.comment = $scope.investigator.comment;

			InvestigatorService.update(investigator)
				.then(function (resp) {
					ToastService.success('Investigator Updated');
				})
				.catch(function (error) {
					ToastService.error('Error Updating Investigator');
				})
				.finally( function() {
					$scope.closeDialog();
                    GridService.updateGrid();
					$scope.$parent.isLoading = LoadingService.toggle();
				});
		};

		$scope.closeDialog = function () {
			DialogService.close();
		};

        $scope.deselectRows = function() {
            GridService.deselectAll();
        };

        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };
	});