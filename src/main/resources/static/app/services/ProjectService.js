'use strict';

angular.module('appService').factory('ProjectService', function($http, $q) {

    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        remove: remove,
	    getAdminGrid: getAdminGrid,
        getGrid: getGrid
    });

    // ---
    // PUBLIC METHODS.
    // ---
    function create(data) {
        var request = $http.post("/Api/Project", data).success(function (response) {
            console.log("success");
        });
        return (request.then(handleSuccess, handleError));
    }

    function findOne(id) {
        var request = $http({
            method: 'GET',
            url: '/Api/Project/' + id
        });
        return (request.then(handleSuccess, handleError));
    }

    function findAll() {
        var request = $http({
            method: 'GET',
            url: '/Api/Project/All'
        });
        return (request.then(handleSuccess, handleError));
    }

    function update(data) {
        var request = $http.put("/Api/Project", data).success(function (response) {
            console.log("success");
        });
        return (request.then(handleSuccess, handleError));
    }

    function remove(id) {
        var request = $http.delete('/Api/Project/' + id ).success(function (response) {
            console.log("success");
        });
        return (request.then(handleSuccess, handleError));
    }

    function getGrid(data) {
        var request = $http.put("/Api/Project/GetGrid", data).success(function (response) {});
        return (request.then(handleSuccess, handleError));
    }

    function getAdminGrid(data) {
        var request = $http.put("/Api/Project/GetAdminGrid", data).success(function (response) {});
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
