'use strict';

angular.module('appService').factory('UnitService', function($http, $q) {
    
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
        return $http.post("/Api/Unit", data);
    }
    
    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Unit/' + id
        });
    }
    
    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Unit/All'
        });
    }
    
    function update(data) {
        return $http.put("/Api/Unit", data);
    }
    
    function remove(id) {
        return $http.delete('/Api/Unit/' + id );
    }
    
    function getGrid(data) {
        return $http.put("/Api/Unit/GetGrid", data);
    }
});
