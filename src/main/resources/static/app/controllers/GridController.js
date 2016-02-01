'use strict';

angular.module('appController').controller('GridController', function($scope, SingleSelect, GridDetails, Enum){

    /**
     * Locally holds all the data in the grid currently on the page.
     * Data will be set by the directive.
     * @type {Array}
     */
    $scope.gridData = [];

    /**
     * Selected item in the grid
     */
    $scope.selectedRowId = null;

    /**
     * Options to display in the single-select for number of items per page in the grid.
     * @type {Array}
     */
    $scope.perPageList = SingleSelect.GridSize;

    /**
     * The currently selected value in the dropdown box directly above.
     */
    $scope.perPage = SingleSelect.GridSize[0];

    /**
     * Deselect a row in the grid.
     */
    $scope.deselect = function(){
        $scope.$parent.data.selectedRow = null;
        $scope.$parent.data.rowSelected = false;
        $scope.selectedRowId = null;
        
    };

    /**
     * Total number of items in entire search size.
     * Used to calculate pagination numbers.
     * @type {number}
     */
    $scope.totalGridItems = 0;

    /**
     * Current pagination page that is active/being viewed
     * @type {number}
     */
    $scope.activeGridPage = 1;

    /**
     * All filters currently being applied.
     * @type {Array}
     */
    $scope.gridFilters = [];

    /**
     * Apply a new filter to the grid
     */
    $scope.applyFilter = function(){};

    /**
     * Remove a filter from the grid.
     */
    $scope.removeFilter = function() {};

    /**
     * Sort a field in ascending or descending order. Use {@link Enum.SortOrder}
     * @param $event
     */
    $scope.sortBy = function($event){};

    $scope.rowClick = function(obj){
        $scope.selectedRowId = obj.id;
        console.log($scope);
        $scope.$parent.data.selectedRow = obj;
        $scope.$parent.data.rowSelected = true;
    };

    /**
     * This function will call the server for a new grid based on settings defined byt the user.
     */
    $scope.updateGrid = function() {
        var options = GridDetails.newGridDetails();
        options.pageSize = $scope.perPage.value;
        options.currentPage = $scope.activeGridPage;
        options.totalNumberOfItems = $scope.totalGridItems;
        options.filters = {};
        options.sortBy = {};
        options.serviceType = {};
    };

    /**
     * Go to the page number that was clicked on.
     * @param pageNum - the page number to load in the grid
     */
    $scope.goToPage = function(pageNum){};

    /**
     * Go to the first page of the grid
     */
    $scope.goToFirstPage = function(){};

    /**
     * Go to the last page of the grid
     */
    $scope.goToLastPage = function(){};

    /**
     * Toggle sort order of the clicked on column
     * @param $event - click event
     */
    $scope.toggleSortColumn = function($event){

        /**
         * The element that was clicked on
         * @type {EventTarget|*}
         */
        var element = $event.currentTarget;
    };

    $scope.$watch('selectedRow', function(){
        console.log('Grid Controller',$scope.selectedRow);
    });
    $scope.defaultSortOrder = Enum.SortOrder.Ascending;
});
