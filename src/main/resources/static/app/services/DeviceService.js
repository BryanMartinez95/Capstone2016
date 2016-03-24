'use strict';

angular.module('appService').factory('DeviceService', function($http) {

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
        return $http.post('/Api/Device', data);
    }

    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Device/' + id
        });
    }

    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Device/All'
        });
    }

    function update(data) {
        return $http.put('/Api/Device', data);
    }

    function remove(id) {
        return $http.delete('/Api/Device/' + id );
    }

    function getGrid(data) {
        return $http.put('/Api/Device/GetGrid', data);
    }

    function singleSelect() {
        return $http({
            method: 'GET',
            url: '/Api/Device/SingleSelect'
        });
    }
});
