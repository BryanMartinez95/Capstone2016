'use strict';
app.run(function ($rootScope, $http) {
    $http.get('/User/CurrentUser').success(function (response) {

        var isAdmin = false;
        angular.forEach(response.roleType, function (item) {
            if (item === "ADMIN") {
                isAdmin = true;
            }
        });

        $rootScope.currentUser = response;
        console.log($rootScope.currentUser);
    });
});

