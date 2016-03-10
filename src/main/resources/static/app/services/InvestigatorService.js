'use strict';

angular.module('appService').factory('InvestigatorService', function($http, $q) {

    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        remove: remove,
        getGrid: getGrid
    });

    // ---
    // PUBLIC METHODS.
    // ---
    function create(data) {
        var request = $http.post("/Api/Investigator", data).success(function (response) {
            console.log("success");
        });
        return (request.then(handleSuccess, handleError));
    }

    function findOne(id) {
        var request = $http({
            method: 'GET',
            url: '/Api/Investigator/' + id
        });
        return (request.then(handleSuccess, handleError));
    }

    function findAll() {
        var request = $http({
            method: 'GET',
            url: '/Api/Investigator/All'
        });
        return (request.then(handleSuccess, handleError));
    }

    function update(data) {
        var request = $http.put("/Api/Investigator", data).success(function (response) {
            console.log("success");
        });
        return (request.then(handleSuccess, handleError));
    }

    function remove(id) {
        var request = $http.delete('/Api/Investigator/' + id ).success(function (response) {
            console.log("success");
        });
        return (request.then(handleSuccess, handleError));
    }

    function getGrid(data) {
        return $http.put("/Api/Investigator/GetGrid", data);
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
