'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name ProjectService
 *
 * @param {service} $http       A service that facilitates communication with the remote HTTP servers
 * @description A service to handle the API calls involving projects.
 */
angular.module('appService').factory('ProjectService', function($http) {

    /**
     * @property {Function} create          {@link create} for more information
     * @property {Function} findAll         {@link findAll} for more information
     * @property {Function} findOne         {@link findOne} for more information
     * @property {Function{ update          {@link update} for more information
     * @property {Function} remove          {@link remove} for more information
     * @property {Function} getGrid         {@link getGrid} for more information
     * @property {Function} singleSelect    {@link singleSelect} for more information
     * @property {Function} viewReport      {@link viewReport} for more information
     * @property {Function} csv             {@link csv} for more information
     */
    return({
        create: create,
        findAll: findAll,
        findOne: findOne,
        update: update,
        remove: remove,
        getGrid: getGrid,
	    singleSelect: singleSelect,
        viewReport: viewReport,
        csv: csv
    });

    /**
     * Send a project to the database to be saved.
     * @param {object} data - the project.
     * @return {object} The promise that the project will be created.
     */
    function create(data) {
        return $http.post('/Api/Project', data);
    }

    /**
     * Retrieve a project using its id.
     * @param {string} id - string containing the project's id.
     * @return {object} The promise that the project will be retrieved.
     */
    function findOne(id) {
        return $http.get('/Api/Project/' + id);
    }

    /**
     * Retrieve all projects.
     * @return {object} The promise that all projects will be retrieved.
     */
    function findAll() {
        return $http.get('/Api/Project/All');
    }

    /**
     * Send a project to the database to be updated.
     * @param {object} data - the project.
     * @return {object} The promise that the project will be updated.
     */
    function update(data) {
        return $http.put('/Api/Project', data);
    }

    /**
     * Remove a project using its id.
     * @param {string} id - string containing the project's id.
     * @return {object} The promise that the project will be removed.
     */
    function remove(id) {
        return $http.delete('/Api/Project/' + id );
    }
    
    /**
     * Get all projects from the database in a format that complies with the grid directive
     * @param {object} data - The specific parameters to filter out the proper data
     * @return {object} The promise that the grid will be retrieved.
     */
    function getGrid(data) {
       return $http.put('/Api/Project/GetGrid', data);
    }

    /**
     * Retrieves a SingleSelect options of projects.
     * @return {object} The promise that the SingleSelect will be retrieved.
     */
    function singleSelect() {
        return $http.get('/Api/Project/SingleSelect');
    }

    /**
     * Retrieves a pdf report of a project using a specified id.
     * @param {string} id - the id of the project.
     * @return {object} The promise that the report will be retrieved.
     */
    function viewReport(id) {
        return $http.get('/Api/Project/' + id + '/Report', {responseType: 'arraybuffer'});
    }

    /**
     * Retrieves a csv of a project using a specified id.
     * @param {string} id - the id of the project.
     * @return {object} The promise that the csv will be retrieved.
     */
    function csv(id) {
        return $http.get('/Api/Project/Export/' + id);
    }
});
