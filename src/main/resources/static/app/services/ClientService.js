'use strict';

angular.module('appService').factory('ClientService', function($http) {

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
        return $http.post("/Api/Client", data);
    }

    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Client/' + id
        });
    }

    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Client/All'
        });
    }

    function update(data) {
        return $http.put("/Api/Client", data);
    }

    function remove(id) {
        return $http.delete('/Api/Client/' + id );
    }

    function getGrid(data) {
        return $http.put("/Api/Client/GetGrid", data);
    }
});
