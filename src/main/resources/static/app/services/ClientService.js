'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name ClientService
 * @param {service} $http   Used for AJAX calls
 * @description
 *  Used to communicate with the server to retrieve and modify Client data
 */
angular.module('appService').factory('ClientService', function($http) {

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
     * Create a new Client
     * @param {object} data The Client model to be added
     * @returns {HttpPromise}
     */
    function create(data) {
        return $http.post("/Api/Client", data);
    }

    /**
     * Retrieve a Client's information in the database
     * @param {string} id The UUID representing the Client
     * @returns {HttpPromise}
     */
    function findOne(id) {
        return $http({
            method: 'GET',
            url: '/Api/Client/' + id
        });
    }

    /**
     * Retrieve all Clients from the database
     * @returns {HtppPromise}
     */
    function findAll() {
        return $http({
            method: 'GET',
            url: '/Api/Client/All'
        });
    }

    /**
     * Update a Client in the database
     * @param {object} data The new data for the client to be saved
     * @returns {HttpPromise}
     */
    function update(data) {
        return $http.put("/Api/Client", data);
    }

    /**
     * Remove a client from the database
     * @param {string} id The UUID of the client to be removed
     * @returns {HttpPromise}
     */
    function remove(id) {
        return $http.delete('/Api/Client/' + id );
    }

    /**
     * Get all Client's from the database in a format that complies with the grid directive
     * @param {object} data The specific parameters to filter out the proper data
     * @returns {HttpPromise}
     */
    function getGrid(data) {
        return $http.put("/Api/Client/GetGrid", data);
    }

    /**
     * Retrieve all the available Client's in a format that complies with the single-select directive
     * @returns {HtppPromise}
     */
    function singleSelect() {
        return $http({
            method: 'GET',
            url: '/Api/Client/SingleSelect'
        });
    }
});
