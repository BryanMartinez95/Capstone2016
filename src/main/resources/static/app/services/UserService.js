'use strict';

angular.module('appService').factory('UserService', function($http) {

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
        return $http.post('/Api/User', data);
    }

    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/User/' + id
        });
    }

    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/User/All'
        });
    }

    function update(data) {
        return $http.put('/Api/User', data);
    }

    function remove(id) {
        return $http.delete('/Api/User/' + id ).success(function (response) {});
    }

    function getGrid(data) {
        return $http.put('/Api/User/GetGrid', data);
    }

	function singleSelect() {
		return $http({
			method: 'GET',
			url: '/Api/User/SingleSelect'
		});
	}
});
