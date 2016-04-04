'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name UserService
 *
 * @param {service} $http       A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving users.
 */
angular.module('appService').factory('UserService', function($http) {

	/**
     * @property {Function} create          {@link create} for more information
     * @property {Function} findAll         {@link findAll} for more information
     * @property {Function} findOne         {@link findOne} for more information
     * @property {Function{ update          {@link update} for more information
     * @property {Function} remove          {@link remove} for more information
     * @property {Function} getGrid         {@link getGrid} for more information
     * @property {Function} singleSelect    {@link singleSelect} for more information
     */
    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        remove: remove,
        getGrid: getGrid,
        singleSelect: singleSelect
    });

    /**
     * Send a user to the database to be saved.
     * @param {object} data - the user.
     * @return {object} The promise that the user will be created.
     */
    function create(data) {
        return $http.post('/Api/User', data);
    }

    /**
     * Retrieve a user using its id.
     * @param {string} id - string containing the user's id.
     * @return {object} The promise that the user will be retrieved.
     */
    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/User/' + id
        });
    }

    /**
     * Retrieve all users.
     * @return {object} The promise that all users will be retrieved.
     */
    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/User/All'
        });
    }

    /**
     * Send a user to the database to be updated.
     * @param {object} data - the user.
     * @return {object} The promise that the user will be updated.
     */
    function update(data) {
        return $http.put('/Api/User', data);
    }

    /**
     * Remove a user using its id.
     * @param {string} id - string containing the user's id.
     * @return {object} The promise that the user will be removed.
     */
    function remove(id) {
        return $http.delete('/Api/User/' + id ).success(function (response) {});
    }

    /**
     * Get all users from the database in a format that complies with the grid directive
     * @param {object} data - The specific parameters to filter out the proper data
     * @return {object} The promise that the grid will be retrieved.
     */
    function getGrid(data) {
        return $http.put('/Api/User/GetGrid', data);
    }

    /**
     * Retrieves a SingleSelect options of users.
     * @return {object} The promise that the SingleSelect will be retrieved.
     */
	function singleSelect() {
		return $http({
			method: 'GET',
			url: '/Api/User/SingleSelect'
		});
	}
});
