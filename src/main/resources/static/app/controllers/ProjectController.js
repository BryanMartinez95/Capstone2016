'use strict';

angular.module('app').controller('ProjectController', function($scope, UsersService) {
    $scope.data = {};
    var rows = UsersService.query();
    $scope.data.rows = rows;
    var column = [
        { headerName: "ID", field: "id"},
        { headerName: "First Name", field: "firstName"},
        { headerName: "Last Name", field: "lastName"},
        { headerName: "Email", field: "email"},
        { headerName: "Role", field: "roleType"},
        { headerName: "Password", field: "password"},
        { headerName: "Status", field: "status"}
    ];

    $scope.data.headers = column;

    $scope.gridOptions = {
        columnDefs: column,
        rowData: rows
    };

    UsersService.query().$promise.then(function(resp){
        $scope.data.test = resp;
    }).catch(function(res){ $scope.data.test = 'Error.'});
});