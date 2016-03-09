'use strict';

/**
 * This is the model that will be sent from the frontend to the backend
 */
angular.module('appModel').factory('GridRequestModel', function(){
    function GridRequestModel() {

        /**
         * Number of items per page
         * @type {number}
         */
        this.pageSize = 15;

        /**
         * Current page number being viewed
         * @type {number}
         */
        this.currentPage = 1;

        /**
         * Any filters that will be applied to refine the search
         * @type {[]}
         */
        this.filters = [];

        /**
         * Sort data by specific fields.
         * Key is the name of the field and value is the type, see  {@link Enum.SortOrder}
         * @type {[]}
         */
        this.sorts = [];
    }

    function GridRequestModelWithData(data) {
        this.pageSize = data.pageSize;
        this.currentPage = data.currentPage;
        this.filters = data.filters;
        this.sorts = data.sorts;
    }

    GridRequestModel.newGridRequestModel = function() {
        return new GridRequestModel();
    };

    GridRequestModel.newGridRequestModelFromJson = function(data) {
        return new GridRequestModelWithData(data);
    };

    return GridRequestModel;
});