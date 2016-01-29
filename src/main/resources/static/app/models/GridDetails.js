'use strict';

angular.module('appModel').factory('GridDetails', function(){
    /**
     * Define parameters that will be used to communicate with the backend.
     * @constructor
     */
    function GridDetails() {

        /**
         * Default number of items per page
         * @type {number}
         */
        this.pageSize = 20;

        /**
         * Current page number to be viewed
         * @type {number}
         */
        this.currentPage = 1;

        /**
         * Total number of items for selection; not what is being
         * returned to the view.
         * @type {number}
         */
        this.totalNumberOfItems = 0;

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
    }

    /**
     * Return a new GridOptions model
     * @returns {GridOptions}
     */
    GridDetails.newGridDetails = function() {
        return new GridDetails();
    };

    return GridDetails;
});
