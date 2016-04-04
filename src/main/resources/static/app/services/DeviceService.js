'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name DeviceService
 *
 * @param {service} $http       A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving devices.
 */
angular.module('appService').factory('DeviceService', function($http) {
    
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
     * Send a device to the database to be saved.
     * @param {object} data - the device.
     * @return {object} The promise that the device will be created.
     */
    function create(data) {
        return $http.post('/Api/Device', data);
    }
    
    /**
     * Retrieve a device using its id.
     * @param {string} id - string containing the device's id.
     * @return {object} The promise that the device will be retrieved.
     */
    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Device/' + id
        });
    }
    
    /**
     * Retrieve all devices.
     * @return {object} The promise that all devices will be retrieved.
     */
    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Device/All'
        });
    }
    
    /**
     * Send a device to the database to be updated.
     * @param {object} data - the device.
     * @return {object} The promise that the device will be updated.
     */
    function update(data) {
        return $http.put('/Api/Device', data);
    }
    
    /**
     * Remove a device using its id.
     * @param {string} id - string containing the device's id.
     * @return {object} The promise that the device will be removed.
     */
    function remove(id) {
        return $http.delete('/Api/Device/' + id );
    }
    
    /**
     * Get all devices from the database in a format that complies with the grid directive
     * @param {object} data - The specific parameters to filter out the proper data
     * @return {object} The promise that the grid will be retrieved.
     */
    function getGrid(data) {
        return $http.put('/Api/Device/GetGrid', data);
    }
    
    /**
     * Retrieves a SingleSelect options of devices.
     * @return {object} The promise that the SingleSelect will be retrieved.
     */
    function singleSelect() {
        return $http({
            method: 'GET',
            url: '/Api/Device/SingleSelect'
        });
    }
});
