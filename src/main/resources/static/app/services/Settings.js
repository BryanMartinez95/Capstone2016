'use strict';

angular.module('app').factory('Settings', function ($http, $timeout) {
    var settings = {};
    return {
        setup: function () {
                $http.get('/User/CurrentUser').success(function (response) {
                    var isAdmin = false;
                    angular.forEach(response.roleType, function (item) {
                        if (item === "ADMIN") {
                            isAdmin = true;
                        }
                    });

                    settings = response;
                    //settings.isAdmin = isAdmin;
                    console.log(settings);
                });
        },
        get: function () {
            return settings;
        }
    }
});