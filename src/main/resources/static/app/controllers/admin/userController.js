'use strict';

angular.module('appController')
	
	.controller('AdminUserController',function ($scope, UserService, SingleSelect,
	                                            Enum, ToastService, $mdDialog,
	                                            GridRequestModel) {
		
		$scope.setActiveService(UserService);
		
		$scope.data = {};
		$scope.data.message = "User Overview Page";
		
		$scope.dialogTitle = '';
		$scope.roleTypeOptions = SingleSelect.RoleType;

		$scope.getGrid = function(options) {
			options.ignoredColumns = ['id', 'password'];
			return UserService.getGrid(options);
		};
		
		$scope.goToAddUser = function ($event) {
			$scope.dialogTitle = 'Add User';
			
			$scope.user = {};
			$scope.user.status = Enum.Status.Active.value;

			$mdDialog.show({
				scope: $scope,
				templateUrl: '/views/admin/user/add.html',
				parent: angular.element(document.body),
				targetEvent: $event,
				fullscreen: false
			});
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
			
			$mdDialog.show({
				scope: $scope,
				templateUrl: '/views/admin/user/edit.html',
				parent: angular.element(document.body),
				targetEvent: $event,
				fullscreen: false
			});
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
					ToastService.success('Saved User');
				})
				.catch(function (error) {
					ToastService.error('Cannot Save User');
				})
				.finally( function() {
					var model = GridRequestModel.newGridRequestModel();
					$scope.options.updateGrid(model);
				});
			
			$scope.closeDialog();
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
					ToastService.success('Saved User');
				})
				.catch(function (error) {
					ToastService.error('Cannot Save User');
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
		
		function setRoleTypeObject(value) {
			SingleSelect.RoleType.forEach(function (type) {
				if (type.value.toLowerCase() === value.toLowerCase()) {
					$scope.user.roleType = type;
				}
			});
		}
	});