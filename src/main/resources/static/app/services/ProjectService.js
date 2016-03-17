'use strict';

angular.module('appService').factory('ProjectService', function($http) {

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
        return $http.post('/Api/Project', data);
    }

    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Project/' + id
        });
    }

    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Project/All'
        });
    }

    function update(data) {
        return $http.put('/Api/Project', data);
    }

    function remove(id) {
        return $http.delete('/Api/Project/' + id );
    }

    function getGrid(data) {
       return $http.put('/Api/Project/GetGrid', data);
    }
});
