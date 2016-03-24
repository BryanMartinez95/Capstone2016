'use strict';

angular.module('appService').factory('TestMethodService', function($http) {

    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        remove: remove,
        getGrid: getGrid,
        singleSelect: singleSelect
    });

    // ---
    // PUBLIC METHODS.
    // ---
    function create(data) {
        return $http.post("/Api/TestMethod", data);
    }

    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/TestMethod/' + id
        });
    }

    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/TestMethod/All'
        });
    }

    function update(data) {
        return $http.put('/Api/TestMethod', data);
    }

    function remove(id) {
        return $http.delete('/Api/TestMethod/' + id );
    }

    function getGrid(data) {
        return $http.put('/Api/TestMethod/GetGrid', data);
    }

    function singleSelect() {
        return $http({
            method: 'GET',
            url: '/Api/TestMethod/SingleSelect'
        });
    }
});
