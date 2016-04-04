'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name ClientService
 * 
 * @param {service} $http   A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving clients.
 */
angular.module('appService').factory('ClientService', function($http) {
    
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
     * Send a client to the database to be saved.
     * @param {object} data - the client.
     * @return {object} The promise that the client will be created.
     */
    function create(data) {
        return $http.post("/Api/Client", data);
    }
    
    /**
     * Retrieve a client using its id.
     * @param {string} id - string containing the client's id.
     * @return {object} The promise that the client will be retrieved.
     */
    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Client/' + id
        });
    }
    
    /**
     * Retrieve all clients.
     * @return {object} The promise that all clients will be retrieved.
     */
    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Client/All'
        });
    }
    
    /**
     * Send a client to the database to be updated.
     * @param {object} data - the client.
     * @return {object} The promise that the client will be updated.
     */
    function update(data) {
        return $http.put("/Api/Client", data);
    }
    
    /**
     * Remove a client using its id.
     * @param {string} id - string containing the client's id.
     * @return {object} The promise that the client will be removed.
     */
    function remove(id) {
        return $http.delete('/Api/Client/' + id );
    }
    
    /**
     * Get all clients from the database in a format that complies with the grid directive
     * @param {object} data - The specific parameters to filter out the proper data
     * @return {object} The promise that the grid will be retrieved.
     */
    function getGrid(data) {
        return $http.put("/Api/Client/GetGrid", data);
    }
    
    /**
     * Retrieves a SingleSelect options of clients.
     * @return {object} The promise that the SingleSelect will be retrieved.
     */
    function singleSelect() {
        return $http({
            method: 'GET',
            url: '/Api/Client/SingleSelect'
        });
    }
});
