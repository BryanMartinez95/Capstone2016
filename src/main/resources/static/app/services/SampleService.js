'use strict';

angular.module('appService').factory('SampleService', function($http) {
	
	return({
		create: create,
		findAll: findAll,
		findOne: findOne,
		update: update,
		remove: remove,
		getGrid: getGrid,
		getGridByProjectId: getGridByProjectId,
		getGridByDeviceId: getGridByDeviceId
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
		return $http.delete('/Api/Sample/' + id );
	}
	
	function getGrid(data) {
		return $http.put('/Api/Sample/GetGrid', data);
	}

	function getGridByProjectId(data, id) {
		return $http.put('/Api/Sample/GetGridByProjectId/' + id, data);
	}

	function getGridByDeviceId(data, id) {
		return $http.put('/Api/Sample/GetGridByDeviceId/' + id, data);
	}
});
