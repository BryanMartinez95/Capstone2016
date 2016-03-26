'use strict';

angular.module('appService').factory('SampleService', function($http) {
	
	return({
		create: create,
		findAll: findAll,
		findOne: findOne,
		update: update,
		remove: remove,
		getGrid: getGrid,
		findUUIDByLabId: findUUIDByLabId
	});
	
	// ---
	// PUBLIC METHODS.
	// ---
	function create(data) {
		return $http.post("/Api/Sample", data);
	}
	
	function findOne(id) {
		return $http({
			method: 'GET',
			url: '/Api/Sample/' + id
		});
	}
	
	function findAll() {
		return $http({
			method: 'GET',
			url: '/Api/Sample/All'
		});
	}
	
	function update(data) {
		return $http.put("/Api/Sample", data);
	}
	
	function remove(id) {
		return $http.delete('/Api/Sample/' + id ).success(function (response) {});
	}
	
	function getGrid(data) {
		return $http.put('/Api/Sample/GetGrid', data);
	}

	function findUUIDByLabId(labId) {
		return $http.get('/Api/Sample/findUUIDByLabId/' + labId);
	}
});
