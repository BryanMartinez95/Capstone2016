angular.module('appController').controller('ProjectController', function($scope, UserService) {
    $scope.data.headers = [
        { headerName: "ID", field: "id"},
        { headerName: "First Name", field: "firstName"},
        { headerName: "Last Name", field: "lastName"},
        { headerName: "Email", field: "email"},
        { headerName: "Role", field: "roleType"},
        { headerName: "Status", field: "status"}
    ];

    UserService.findAll().then(function(users) {
        $scope.data.rows = {
            data: users
        };
    });
});