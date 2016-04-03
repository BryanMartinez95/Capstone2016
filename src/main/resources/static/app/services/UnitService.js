'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name UnitService
 *
 * @param {service} $http       A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving units.
 */
angular.module('appService').factory('UnitService', function($http) {
    
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
     * Send a unit to the database to be saved.
     * @param {object} data - the unit.
     * @return {object} The promise that the unit will be created.
     */
    function create(data) {
        return $http.post('/Api/Unit', data);
    }
    
    /**
     * Retrieve a unit using its id.
     * @param {string} id - string containing the unit's id.
     * @return {object} The promise that the unit will be retrieved.
     */
    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Unit/' + id
        });
    }

    /**
     * Retrieve all units.
     * @return {object} The promise that all units will be retrieved.
     */
    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Unit/All'
        });
    }

    /**
     * Send a unit to the database to be updated.
     * @param {object} data - the unit.
     * @return {object} The promise that the unit will be updated.
     */
    function update(data) {
        return $http.put('/Api/Unit', data);
    }

    /**
     * Remove a unit using its id.
     * @param {string} id - string containing the unit's id.
     * @return {object} The promise that the unit will be removed.
     */
    function remove(id) {
        return $http.delete('/Api/Unit/' + id );
    }

    /**
     * Get all units from the database in a format that complies with the grid directive
     * @param {object} data - The specific parameters to filter out the proper data
     * @return {object} The promise that the grid will be retrieved.
     */
    function getGrid(data) {
        return $http.put('/Api/Unit/GetGrid', data);
    }

    /**
     * Retrieves a SingleSelect options of units.
     * @return {object} The promise that the SingleSelect will be retrieved.
     */
    function singleSelect() {
        return $http({
            method: 'GET',
            url: '/Api/Unit/SingleSelect'
        });
    }
});
