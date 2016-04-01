'use strict';

angular.module('appController')
	
	.controller('AdminUserController',function ($scope, UserService, SingleSelect,
	                                            Enum, ToastService, DialogService,
	                                            GridRequestModel, GridService) {
		
		$scope.setActiveService(UserService);
		
		$scope.data = {};
		$scope.data.message = "User Overview Page";
		
		$scope.roleTypeOptions = SingleSelect.RoleType;

        GridService.init(
            function(options) {
                return UserService.getGrid(options);
            },
            ['id', 'password']
        );

		$scope.goToAddUser = function ($event) {
			$scope.dialogTitle = 'Add User';
			
			$scope.user = {};
			$scope.user.status = Enum.Status.Active.value;

			DialogService.showDialog($scope, $event, '/views/admin/user/add.html');
		};
		
		$scope.goToEditUser = function ($event) {
			
			UserService.findOne($scope.options.selected[0].id)
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
					var model = GridRequestModel.newGridRequestModel();
					$scope.options.updateGrid(model);
				});
		};
		
		$scope.updateUser = function () {
			var user = new User();
			
			user.id = $scope.user.id;
			user.firstName = $scope.user.firstName;
			user.lastName = $scope.user.lastName;
			user.password = $scope.user.password;
			user.email = $scope.user.email;
			user.status = $scope.user.status;
			user.roleType =$scope.user.roleType.value;
			
			UserService.update(user)
				.then(function (resp) {
					ToastService.success('User Updated');
				})
				.catch(function (error) {
					DialogService.error('Error Updated User');
				})
				.finally( function() {
					$scope.closeDialog();
					var model = GridRequestModel.newGridRequestModel();
					$scope.options.updateGrid(model);
				});
		};
		
		$scope.closeDialog = function () {
			DialogService.close();
		};
		
		function setRoleTypeObject(value) {
			SingleSelect.RoleType.forEach(function (type) {
				if (type.value.toLowerCase() === value.toLowerCase()) {
					$scope.user.roleType = type;
				}
			});
		}
	});