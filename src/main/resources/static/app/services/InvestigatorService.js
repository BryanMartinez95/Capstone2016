'use strict';

angular.module('appService').factory('InvestigatorService', function($http) {

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
        return $http.post('/Api/Investigator', data);
    }

    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Investigator/' + id
        });
    }

    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Investigator/All'
        });
    }

    function update(data) {
        return $http.put('/Api/Investigator', data);
    }

    function remove(id) {
        return $http.delete('/Api/Investigator/' + id );
    }

    function getGrid(data) {
        return $http.put('/Api/Investigator/GetGrid', data);
    }
});
