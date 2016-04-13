'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name TestMethodService
 *
 * @param {service} $http       A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving test methods.
 */
angular.module('appService').factory('TestMethodService', ['$http', function($http) {

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
     * Send a test method to the database to be saved.
     * @param {object} data - the test method.
     * @return {object} The promise that the test method will be created.
     */
    function create(data) {
        return $http.post("/Api/TestMethod", data);
    }

    /**
     * Retrieve a test method using its id.
     * @param {string} id - string containing the test method's id.
     * @return {object} The promise that the test method will be retrieved.
     */
    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/TestMethod/' + id
        });
    }

    /**
     * Retrieve all test methods.
     * @return {object} The promise that all test methods will be retrieved.
     */
    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/TestMethod/All'
        });
    }

    /**
     * Send a test method to the database to be updated.
     * @param {object} data - the test method.
     * @return {object} The promise that the test method will be updated.
     */
    function update(data) {
        return $http.put('/Api/TestMethod', data);
    }

    /**
     * Remove a test method using its id.
     * @param {string} id - string containing the test method's id.
     * @return {object} The promise that the test method will be removed.
     */
    function remove(id) {
        return $http.delete('/Api/TestMethod/' + id );
    }

    /**
     * Get all test methods from the database in a format that complies with the grid directive
     * @param {object} data - The specific parameters to filter out the proper data
     * @return {object} The promise that the grid will be retrieved.
     */
    function getGrid(data) {
        return $http.put('/Api/TestMethod/GetGrid', data);
    }

    /**
     * Retrieves a SingleSelect options of test methods.
     * @return {object} The promise that the SingleSelect will be retrieved.
     */
    function singleSelect() {
        return $http({
            method: 'GET',
            url: '/Api/TestMethod/SingleSelect'
        });
    }
}]);
