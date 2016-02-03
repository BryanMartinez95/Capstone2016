'use strict';

angular.module('appService').service('UserService', ['$http', 'User', '$q', function($http, User, $q) {

    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        //remove: remove,
        getGrid: getGrid
    });

    // ---
    // PUBLIC METHODS.
    // ---
    function create(data) {
        $http.post("/Api/User", data).success(function (response) {
            console.log("success");
        });
    }

    function findOne(id) {
        var request = $http({
            method: 'GET',
            url: '/Api/User/' + id
        });
        return (request.then(handleSuccess, handleError));
    }

    function findAll() {
        var request = $http({
            method: 'GET',
            url: '/Api/User/All'
        });
        return (request.then(handleSuccess, handleError));
    }

    function update(User) {

        var request = $http.put("/Api/User", data).success(function (response) {

            console.log(response);
        });
    }

    function getGrid(data) {
        console.log("asdf");
        var request = $http.put("/Api/User/GetGrid", data).success(function (response) {});
        console.log(request);
        return (request.then(handleSuccess, handleError));
    }

    function handleError( response ) {
        if (!angular.isObject( response.data ) || !response.data.message) {
            return( $q.reject( "An unknown error occurred." ) );
        }
        return( $q.reject( response.data.message ) );
    }

    function handleSuccess( response ) {
        return( response.data );
    }
}]);
