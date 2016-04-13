'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name MeasurementService
 *
 * @param {service} $http       A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving measurements.
 */
angular.module('appService').factory('MeasurementService', ['$http', function($http) {
	
	/**
	 * @property {Function} create          {@link create} for more information
	 * @property {Function} findAll         {@link findAll} for more information
	 * @property {Function} findOne         {@link findOne} for more information
	 * @property {Function{ update          {@link update} for more information
	 * @property {Function} remove          {@link remove} for more information
	 */
	return({
		create: create,
		findAll: findAll,
		findBySampleId: findBySampleId,
		update: update,
		remove: remove
	});
	
	/**
	 * Send a measurement to the database to be saved.
	 * @param {object} data - the measurement.
	 * @return {object} The promise that the measurement will be created.
	 */
	function create(data) {
		return $http.post("/Api/Measurement", data);
	}
	
	/**
	 * Retrieve measurements using a sample id.
	 * @param {string} id - string containing the sample's id.
	 * @return {object} The promise that the measurements will be retrieved.
	 */
	function findBySampleId(id) {
		return $http({
			method: 'GET',
			url: '/Api/Measurement/' + id
		});
	}
	
	/**
	 * Retrieve all measurements.
	 * @return {object} The promise that all measurements will be retrieved.
	 */
	function findAll() {
		return $http({
			method: 'GET',
			url: '/Api/Measurement/All'
		});
	}
	
	/**
	 * Send a measurement to the database to be updated.
	 * @param {object} data - the measurement.
	 * @return {object} The promise that the measurement will be updated.
	 */
	function update(data) {
		return $http.put("/Api/Measurement", data);
	}

	/**
	 * Remove a measurement using its id.
	 * @param {string} id - string containing the measurement's id.
	 * @return {object} The promise that the measurement will be removed.
	 */
	function remove(id) {
		return $http.delete('/Api/Measurement/' + id );
	}
}]);
