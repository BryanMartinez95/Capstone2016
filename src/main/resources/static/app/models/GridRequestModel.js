'use strict';

angular.module('appModel').factory('GridRequestModel', function(){
    /**
     * Define parameters that will be used to communicate with the backend.
     * @constructor
     */
    function GridRequestModel() {

        /**
         * Number of items per page
         * @type {number}
         */
        this.pageSize = 20;

        /**
         * Current page number being viewed
         * @type {number}
         */
        this.currentPage = 1;
        /**
         * The page numbers that will appear in the pagination
         * @type {Array}
         */
        this.pages = [];

        /**
         * Any filters that will be applied to refine the search
         * @type {{}}
         */
        this.filters = {};

        /**
         * Sort data by specific fields.
         * Key is the name of the field and value is the type, see  {@link Enum.SortOrder}
         * @type {{}}
         */
        this.sortBy = {};

        /**
         * If the current page is the last page
         * @type {boolean}
         */
        this.lastPage = false;
    }

    function GridRequestModelWithData(data) {

        this.pageSize = data.pageSize;
        this.currentPage = data.currentPage;
        this.pages = data.pages;
        this.filters = data.filters;
        this.sortBy = data.sortBy;
        this.lastPage = data.lastPage;
    }

    GridRequestModel.newGridRequestModel = function() {
        return new GridRequestModel();
    };

    GridRequestModel.newGridRequestModelFromJson = function(data) {
        return new GridRequestModelWithData(data);
    };

    return GridRequestModel;
});
