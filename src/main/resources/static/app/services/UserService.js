'use strict';

angular.module('appService').service('UserService', ['$http', 'User', '$q', function($http, User, $q) {

    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        //update: update,
        remove: remove
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
            url: '/Api/User/' + id,
            data: {
                id: id
            }
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

    }

    function remove(id) {
        console.log(id);
        var request = $http({
            method: 'DELETE',
            url: '/Api/User/' + id,
            data: {
                id: id
            }
        });
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
