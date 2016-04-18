'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name SampleService
 *
 * @param {service} $http       A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving samples.
 */
angular.module('appService').factory('SampleService', ['$http', function($http) {

	/**
	 * @property {Function} create              {@link create} for more information
	 * @property {Function} findAll             {@link findAll} for more information
	 * @property {Function} findOne             {@link findOne} for more information
	 * @property {Function{ update              {@link update} for more information
	 * @property {Function} remove              {@link remove} for more information
	 * @property {Function} getGrid             {@link getGrid} for more information
	 * @property {Function} singleSelect        {@link singleSelect} for more information
	 * @property {Function} getGridByProjectId  {@link getGridByProjectId} for more information
	 * @property {Function} getGridByDeviceId   {@link getGridByDeviceId} for more information
	 * @property {Function} exportSamples       {@link exportSamples} for more information
	 */
	return({
		create: create,
		findAll: findAll,
		findOne: findOne,
		update: update,
		remove: remove,
		getGrid: getGrid,
		getGridByProjectId: getGridByProjectId,
		getGridByDeviceId: getGridByDeviceId,
		exportSamples: exportSamples,
		assignToProject: assignToProject
	});
	
	/**
	 * Send a sample to the database to be saved.
	 * @param {object} data - the sample.
	 * @return {object} The promise that the sample will be created.
	 */
	function create(data) {
		return $http.post("/Api/Sample", data);
	}

	/**
	 * Retrieve a sample using its id.
	 * @param {string} id - string containing the sample's id.
	 * @return {object} The promise that the sample will be retrieved.
	 */
	function findOne(id) {
		return $http({
			method: 'GET',
			url: '/Api/Sample/' + id
		});
	}

	/**
	 * Retrieve all samples.
	 * @return {object} The promise that all samples will be retrieved.
	 */
	function findAll() {
		return $http({
			method: 'GET',
			url: '/Api/Sample/All'
		});
	}

	/**
	 * Send a sample to the database to be updated.
	 * @param {object} data - the sample.
	 * @return {object} The promise that the sample will be updated.
	 */
	function update(data) {
		return $http.put("/Api/Sample", data);
	}

	/**
	 * Remove a sample using its id.
	 * @param {string} id - string containing the sample's id.
	 * @return {object} The promise that the sample will be removed.
	 */
	function remove(id) {
		return $http.delete('/Api/Sample/' + id );
	}

	/**
	 * Get all samples from the database in a format that complies with the grid directive
	 * @param {object} data - The specific parameters to filter out the proper data
	 * @return {object} The promise that the grid will be retrieved.
	 */
	function getGrid(data) {
		return $http.put('/Api/Sample/GetGrid', data);
	}

	/**
	 * Get all samples assigned to a project from the database in a format that complies with the grid directive
	 * @param {object} data - The specific parameters to filter out the proper data
	 * @param {string} id - the id of the project to filter results by for the grid.
	 * @return {object} The promise that the grid will be retrieved.
	 */
	function getGridByProjectId(data, id) {
		return $http.put('/Api/Sample/GetGridByProjectId/' + id, data);
	}

	/**
	 * Get all samples assigned to a device from the database in a format that complies with the grid directive
	 * @param {object} data - The specific parameters to filter out the proper data
	 * @param {string} id - the id of the device to filter results by for the grid.
	 * @return {object} The promise that the grid will be retrieved.
	 */
	function getGridByDeviceId(data, id) {
		return $http.put('/Api/Sample/GetGridByDeviceId/' + id, data);
	}

	/**
	 * Requests an export-ready model of samples using filters from the grid
	 * @param {object} data - The filters currently on the grid to fetch the desired samples
	 * @return {object} The export-ready model of filtered samples.
	 */
	function exportSamples(data) {
		return $http.put('/Api/Sample/Export', data);
	}

	/**
	 * Assigns samples to a specified project
	 * @param {object} ids - The samples to assign
	 * @param {string} projectId - the id of the project to assign to.
	 * @return {object} The promise that the samples will be assigned.
	 */
	function assignToProject(ids, projectId) {
		return $http.put('/Api/Sample/AssignToProject/' + projectId, ids);
	}
}]);
