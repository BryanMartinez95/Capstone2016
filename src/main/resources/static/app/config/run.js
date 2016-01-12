'use strict';
app.run(function ($rootScope, $http) {
    $http.get('/CurrentUser').success(function (response) {

        var isAdmin = false;
        angular.forEach(response.roles, function (item) {
            if (item === "ADMIN") {
                isAdmin = true;
            }
        });
        $rootScope.currentUser = new User(response.id, response.username, response.firstName, response.lastName, response.email, response.roles, isAdmin);
        $rootScope.isAdmin = isAdmin;
    });
});

