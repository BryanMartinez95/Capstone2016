'use strict';

angular.module('appService').service('UserService', ['$http', 'User', '$q', function($http, User, $q) {

    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        remove: remove
    });

    // ---
    // PUBLIC METHODS.
    // ---
    function create(data) {

    }

    function findOne(id) {
        var request = $http({
            method: 'GET',
            url: '/User/' + id,
            data: {
                id: id
            }
        });
        return (request.then(handleSuccess, handleError));
    }

    function findAll() {
        var request = $http({
            method: 'GET',
            url: '/User/All'
        });
        return (request.then(handleSuccess, handleError));
    }

    function update(User) {

    }

    function remove(id) {
        var request = $http({
            method: 'DELETE',
            url: '/User/' + id,
            params: {
                action: 'DELETE'
            },
            data: {
                id: id
            }
        });
        return (request.then(handleSuccess, handleError));
    }

    // ---
    // PRIVATE METHODS.
    // ---
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

//    create: function(User) {
//        console.log("Create user function in User Service reached.");
//        return $resource('/User/', {}, {method: 'POST', params: {id: '@id'}});
//    },
//    update: function() {
//        console.log("Update user function in User Service reached.");
//        return $resource('/User/:id', {}, {method: 'PUT', params: {id: '@id'}});
//    },
//    delete: function() {
//        console.log("Delete user function in User Service reached.");
//        return $resource('/User/:id', {}, {method: 'DELETE', params: {id: '@id'}});
//    }