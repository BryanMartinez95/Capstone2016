'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name InvestigatorService
 *
 * @param {service} $http       A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving investigators.
 */
angular.module('appService').factory('InvestigatorService', function($http) {
    
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
     * Send a investigator to the database to be saved.
     * @param {object} data - the investigator.
     * @return {object} The promise that the investigator will be created.
     */
    function create(data) {
        return $http.post('/Api/Investigator', data);
    }
    
    /**
     * Retrieve a investigator using its id.
     * @param {string} id - string containing the investigator's id.
     * @return {object} The promise that the investigator will be retrieved.
     */
    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Investigator/' + id
        });
    }
    
    /**
     * Retrieve all investigators.
     * @return {object} The promise that all investigators will be retrieved.
     */
    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Investigator/All'
        });
    }
    
    /**
     * Send a investigator to the database to be updated.
     * @param {object} data - the investigator.
     * @return {object} The promise that the investigator will be updated.
     */
    function update(data) {
        return $http.put('/Api/Investigator', data);
    }
    
    /**
     * Remove a investigator using its id.
     * @param {string} id - string containing the investigator's id.
     * @return {object} The promise that the investigator will be removed.
     */
    function remove(id) {
        return $http.delete('/Api/Investigator/' + id );
    }
    
    /**
     * Get all investigators from the database in a format that complies with the grid directive
     * @param {object} data - The specific parameters to filter out the proper data
     * @return {object} The promise that the grid will be retrieved.
     */
    function getGrid(data) {
        return $http.put('/Api/Investigator/GetGrid', data);
    }
    
    /**
     * Retrieves a SingleSelect options of investigators.
     * @return {object} The promise that the SingleSelect will be retrieved.
     */
    function singleSelect() {
        return $http({
            method: 'GET',
            url: '/Api/Investigator/SingleSelect'
        });
    }
});
