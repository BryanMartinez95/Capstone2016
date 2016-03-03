'use strict';

angular.module('appController')

    .controller('AdminUserOverviewController', function ($scope, UserService, GridRequestModel, GridResultModel, $location) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "Admin User Overview Page";

        $scope.GetGridData = function (options) {
            return UserService.getGrid(options);
        };

        $scope.goToAddUser = function () {
            $location.path("/Admin/User/Add");
        };

        $scope.goToEditUser = function () {
            $location.path("/Admin/User/" + $scope.selectedRowId);
        };

        //////////////////////////////
        $scope.options = {
            page: 1,
            total: 1,
            ignoredColumns: [],
            rows: [],
            size: 10,
            filters: [],
            sort: [],
            sizeOptions: [10,20,50,100],
            limit: 10,
            selected: [],
            paginate: onPaginate,
        };

        function updateGrid(query) {
            UserService.getGridNew(query).then(function(resp){
                var data = resp.data;
                $scope.options.rows = data.list;
                $scope.options.page = data.currentPage;
                $scope.options.size = data.pageSize;
                $scope.options.filters = data.filters;
                $scope.options.sort = data.sorts;
                $scope.options.ignoredColumns = data.ignoredColumns;
                $scope.options.total = data.totalItems;
                console.log($scope.options);
            });

        }
        function onPaginate(page, limit) {
            var model = GridRequestModel.newGridRequestModelFromJson({
                pageSize: limit,
                currentPage: page,
                filters: $scope.options.filters,
                sorts: $scope.options.sorts
            });
            updateGrid(model);
        }
        function init() {
            updateGrid(GridRequestModel.newGridRequestModel());
        }

        init();
    })

    .controller('AdminUserAddController', function ($scope, UserService, ToastrService, SingleSelect, Enum, $location, usSpinnerService, $timeout) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "Admin User Add Page";

        $scope.user = {};
        $scope.roleTypeOptions = SingleSelect.RoleType;
        $scope.selectedRoleType = $scope.roleTypeOptions[0];
        $scope.isActive = false;

        $scope.createUser = function () {
            usSpinnerService.spin('spinner-1');

            $timeout(function () {

            }, 3000);

            var user = new User();

	        user.firstName = $scope.user.firstName;
	        user.lastName = $scope.user.lastName;
	        user.password = $scope.user.password;
	        user.email = $scope.user.email;
	        user.status = $scope.getStatusValue();
	        user.roleType = $scope.selectedRoleType.value;

            usSpinnerService.stop('spinner-1');

            $scope.create(user)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save User', 'Error');
                });
            $location.path("/Admin/User/Overview");
        };

        $scope.cancel = function () {
            $location.path("/Admin/User/Overview");
        };

        $scope.setRoleTypeObject = function (value) {
            SingleSelect.RoleType.forEach(function (type) {
                if (type.value === value) {
                    $scope.selectedRoleType = type;
                }
            });
        };

        $scope.getBooleanStatus = function (status) {
            $scope.isActive = status === Enum.Status.Active.value;
        };

        $scope.getStatusValue = function () {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        };
    })

    .controller('AdminUserEditController', function ($scope, $route, $routeParams, UserService, $location, ToastrService, SingleSelect, Enum) {

        $scope.setActiveService(UserService);

        $scope.data = {};
        $scope.data.message = "Admin User Edit Page";
        $scope.data.param = $routeParams.Id;

        $scope.roleTypeOptions = SingleSelect.RoleType;
        $scope.selectedRoleType = $scope.roleTypeOptions[0];
        $scope.isActive = false;
        $scope.user = {};

        $scope.findOne($scope.data.param).then(function (resp) {
            $scope.user.id = resp.id;
            $scope.user.firstName = resp.firstName;
            $scope.user.lastName = resp.lastName;
            $scope.user.email = resp.email;
	        $scope.getBooleanStatus(resp.status);
            $scope.user.password = resp.password;
            $scope.selectedRoleType = $scope.getObjectFromArray(resp.roleType, SingleSelect.RoleType);
        });

        $scope.save = function () {
            var user = new User();

            user.id = $scope.user.id;
            user.firstName = $scope.user.firstName;
            user.lastName = $scope.user.lastName;
            user.password = $scope.user.password;
            user.email = $scope.user.email;
            user.status = $scope.getStatusValue();
            user.roleType = $scope.selectedRoleType.value;

            $scope.update(user)
                .then(function (resp) {
                    ToastrService.success('Saved');
                })
                .catch(function (error) {
                    ToastrService.error('Cannot Save User', 'Error');
                });

            $location.path("/Admin/User/Overview");
        };

        $scope.cancel = function () {
            $location.path("/Admin/User/Overview");
        };

        $scope.getBooleanStatus = function (status) {
            $scope.isActive = status === Enum.Status.Active.value;
        };

        $scope.getStatusValue = function () {
            return $scope.isActive ? Enum.Status.Active.value : Enum.Status.Inactive.value;
        };
    });