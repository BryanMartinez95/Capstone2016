'use strict';

angular.module('app').run(function ($http, $rootScope) {

    $http.get("/Api/User/CurrentUser").success(function (response) {

        var isAdmin = false;
        if (response.RoleType === "ADMIN")
        {
            isAdmin = true;
        }
        $rootScope.currentUser = response;
    });

});