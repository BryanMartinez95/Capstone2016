'use strict';

angular.module('appService').factory('ClientService', function($http, Client, $q) {

    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        getGrid: getGrid
    });

    // ---
    // PUBLIC METHODS.
    // ---
    function create(data) {
        var request = $http.post("/Api/Client", data).success(function (response) {
            console.log("success");
        });
        return (request.then(handleSuccess, handleError));
    }

    function findOne(id) {
        var request = $http({
            method: 'GET',
            url: '/Api/Client/' + id
        });
        return (request.then(handleSuccess, handleError));
    }

    function findAll() {
        var request = $http({
            method: 'GET',
            url: '/Api/Client/All'
        });
        return (request.then(handleSuccess, handleError));
    }

    function update(data) {
        var request = $http.put("/Api/Client", data).success(function (response) {
            console.log("success");
        });
        return (request.then(handleSuccess, handleError));
    }

    function getGrid(data) {
        console.log("getGrid in ClientService reached.");
        var request = $http.put("/Api/Client/GetGrid", data).success(function (response) {});
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
});