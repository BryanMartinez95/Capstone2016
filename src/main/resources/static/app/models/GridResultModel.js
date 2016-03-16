'use strict';

/**
 * The model representing the data being passed from the backend to the frontend
 */
angular.module('appModel').factory('GridResultModel', function(){

    function GridResultModel() {

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

        /**
         * If the current page is the last page
         * @type {boolean}
         */
        this.lastPage = true;

        /**
         * The data to be displayed in the grid
         * @type {[]}
         */
        this.list = [];

        /**
         * Any names of columns to be hidden
         * @type {[]}
         */
        this.ignoredColumns = [];
    }

    function GridResultModelWithData(data) {
        this.pageSize = data.pageSize;
        this.currentPage = data.currentPage;
        this.filters = data.filters;
        this.sorts = data.sorts;
        this.lastPage = data.lastPage;
        this.list = data.list;
	    this.ignoredColumns = data.ignoredColumns;
    }

    GridResultModel.newGridResultModel = function() {
        return new GridResultModel();
    };

    GridResultModel.newGridResultModelFromJson = function(data) {
        return new GridResultModelWithData(data);
    };

    return GridResultModel;
});

