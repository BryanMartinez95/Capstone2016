'use strict';

angular.module('appController')
	
	.controller('AdminUserController',function ($scope, UserService, SingleSelect,
	                                            Enum, ToastService, DialogService,
	                                            GridService, LoadingService) {
		
		// $scope.setActiveService(UserService);
		
		$scope.data = {};
		$scope.data.message = "User Overview Page";

		$scope.roleTypeOptions = SingleSelect.RoleType;
		
		$scope.$parent.isLoading = LoadingService.toggle();

		GridService.init(
			function(options) {
				return UserService.getGrid(options);
			},
			['id', 'password']
		);
		
		$scope.$parent.isLoading = LoadingService.toggle();

		$scope.goToAddUser = function ($event) {
			$scope.dialogTitle = 'Add User';
			
			$scope.user = {};
			$scope.user.status = Enum.Status.Active.value;

			DialogService.showDialog($scope, $event, '/views/admin/user/add.html');
		};
		
		$scope.goToEditUser = function ($event) {
			UserService.findOne(GridService.getSelectedRows()[0].id)
				.then(function (resp) {
					$scope.user = {};
					$scope.user.id = resp.data.id;
					$scope.user.firstName = resp.data.firstName;
					$scope.user.lastName = resp.data.lastName;
					$scope.user.email = resp.data.email;
					$scope.user.status = resp.data.status;
					$scope.user.password = resp.data.password;
					setRoleTypeObject(resp.data.roleType);
					$scope.dialogTitle = 'Edit User';
				});

			DialogService.showDialog($scope, $event, '/views/admin/user/edit.html');
		};
		
		$scope.createUser = function () {

			$scope.$parent.isLoading = LoadingService.toggle();

			var user = new User();
			
			user.firstName = $scope.user.firstName;
			user.lastName = $scope.user.lastName;
			user.password = $scope.user.password;
			user.email = $scope.user.email;
			user.status = $scope.user.status;
			user.roleType = $scope.user.roleType.value;
			
			$scope.create(user)
				.then(function (resp) {
					ToastService.success('User Saved');
				})
				.catch(function (error) {
					DialogService.error('Error Saving User');
				})
				.finally( function() {
					$scope.closeDialog();
                    GridService.updateGrid();
					$scope.$parent.isLoading = LoadingService.toggle();
				});
		};
		
		$scope.updateUser = function () {

			$scope.$parent.isLoading = LoadingService.toggle();

			var user = new User();
			
			user.id = $scope.user.id;
			user.firstName = $scope.user.firstName;
			user.lastName = $scope.user.lastName;
			user.password = $scope.user.password;
			user.email = $scope.user.email;
			user.status = $scope.user.status;
			user.roleType = $scope.user.roleType.value;
			
			UserService.update(user)
				.then(function (resp) {
					ToastService.success('User Updated');
				})
				.catch(function (error) {
					DialogService.error('Error Updated User');
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
        
		function setRoleTypeObject(value) {
			SingleSelect.RoleType.forEach(function (type) {
				if (type.value.toLowerCase() === value.toLowerCase()) {
					$scope.user.roleType = type;
				}
			});
		}
	});