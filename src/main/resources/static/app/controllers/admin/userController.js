'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name AdminUserController
 *
 * @param {service} $scope          The scope of this controller
 * @param {service} UserService     A service to handle the API calls involving users
 * @param {model} SingleSelect      A collection of lists used to populate the SingleSelect directive
 * @param {model} Enum              A collection of Enums
 * @param {service} ToastService    A service to handle the display of toast notifications using ngMaterial's toast directive
 * @param {service} DialogService   A service to handle the display of dialog notifications using ngMaterial's dialog directive
 * @param {service} GridService     A service to handle the initialization of the grid
 * @param {service} LoadingService  A service used to handle the display of the loading bar
 * @description This controller contains all the information and functions to access user data held in the database.
 */
angular.module('appController')
	
	.controller('AdminUserController',function ($scope, UserService, SingleSelect,
	                                            Enum, ToastService, DialogService,
	                                            GridService, LoadingService) {

		/**
		 * @property {Object}   data                        This is a collection of data that is available to the controller
		 * @property {string}   data.message                The message displayed as the page title
		 * @property {Array}    roleTypeOptions             A collection of possible role types for a user
		 * @property {string}   $parent.isLoading           The current status of the loading bar
		 */
		$scope.data = {};
		$scope.data.message = "User Overview Page";
		$scope.roleTypeOptions = SingleSelect.RoleType;
		$scope.$parent.isLoading = LoadingService.toggle();
		
		/**
		 * Initializes the grid with data retrieved from the UserService
		 * @param {object} the current options for the grid
		 * @function init
		 * @memberof GridService
		 */
		GridService.init(
			function(options) {
				return UserService.getGrid(options);
			},
			['id', 'password']
		);
		
		$scope.$parent.isLoading = LoadingService.toggle();
		
		/**
		 * Brings up a dialog with fields to add a user
		 * @param {object} $event the event that launched the dialog
		 * @function goToAddUser
		 * @memberof AdminUserController
		 */
		$scope.goToAddUser = function ($event) {
			$scope.dialogTitle = 'Add User';
			
			$scope.user = {};
			$scope.user.status = Enum.Status.Active.value;

			DialogService.showDialog($scope, $event, '/views/admin/user/add.html');
		};

		/**
		 * Brings up a dialog with fields to edit a user
		 * @param {object} $event the event that launched the dialog
		 * @function goToEditUser
		 * @memberof AdminUserController
		 */
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

		/**
		 * Creates a user using the fields in the add dialog, and saves it to the database
		 * @function createUser
		 * @memberof AdminUserController
		 */
		$scope.createUser = function () {

			$scope.$parent.isLoading = LoadingService.toggle();

			var user = new User();
			
			user.firstName = $scope.user.firstName;
			user.lastName = $scope.user.lastName;
			user.password = $scope.user.password;
			user.email = $scope.user.email;
			user.status = $scope.user.status;
			user.roleType = $scope.user.roleType.value;
			
			UserService.create(user)
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

		/**
		 * Updates user using the fields in the edit dialog, and saves it to the database
		 * @function updateUser
		 * @memberof AdminUserController
		 */
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

		/**
		 * Closes the currently open dialog(s) using the DialogService
		 * @function closeDialog
		 * @memberof AdminUserController
		 */
		$scope.closeDialog = function () {
			DialogService.close();
		};

		/**
		 * Deselects the rows currently selected using the GridService
		 * @function deselectRows
		 * @memberof AdminUserController
		 */
        $scope.deselectRows = function() {
            GridService.deselectAll();
        };

		/**
		 * Gets the number of rows currently selected using the GridService
		 * @function getNumberOfSelectedRows
		 * @memberof AdminUserController
		 */
        $scope.getNumberOfSelectedRows = function() {
            return GridService.getSelectedRows().length;
        };

		/**
		 * Populates the user's role type single select using the role type passed in
		 * @param {string} value of the user's role type in all capitals
		 * @function setRoleTypeObject
		 * @memberof AdminUserController
		 */
		function setRoleTypeObject(value) {
			SingleSelect.RoleType.forEach(function (type) {
				if (type.value.toLowerCase() === value.toLowerCase()) {
					$scope.user.roleType = type;
				}
			});
		}
	});