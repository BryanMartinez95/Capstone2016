'use strict';

angular.module('appService').factory('MeasurementService', function($http) {

	return({
		create: create,
		findAll: findAll,
		findBySampleId: findBySampleId,
		update: update,
		remove: remove
	});

	// ---
	// PUBLIC METHODS.
	// ---
	function create(data) {
		return $http.post("/Api/Measurement", data);
	}

	function findBySampleId(id) {
		return $http({
			method: 'GET',
			url: '/Api/Measurement/' + id
		});
	}

	function findAll() {
		return $http({
			method: 'GET',
			url: '/Api/Measurement/All'
		});
	}

	function update(data) {
		return $http.put("/Api/Measurement", data);
	}

	function remove(id) {
		return $http.delete('/Api/Measurement/' + id ).success(function (response) {});
	}
});
