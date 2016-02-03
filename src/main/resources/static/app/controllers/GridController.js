'use strict';

angular.module('appController').controller('GridController', function($scope, SingleSelect, GridRequestModel, GridResultModel, Enum){
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
    $scope.sortBy = {};

    /**
     * This function will call the server for a new grid based on settings defined by the user.
     */
    function updateGrid(options) {
        console.log('model',options);
        //options.pageSize = model.pageSize || $scope.perPage.value;
        //options.currentPage = model.currentPage || $scope.currentGridPage;
        //options.pages = model.pages || $scope.paginationPages;
        //options.filters = model.filters || $scope.gridFilters;
        //options.sortBy = model.sortBy || $scope.sortBy;
        //options.lastPage = model.lastPage || $scope.lastGridPage;
        //console.log(options);
        $scope.$parent.$parent.$parent.gridOptions = options;
        $scope.$parent.$parent.$parent.GetGridData.then(function(resp) {
            var data = GridResultModel.newGridResultModelFromJson(resp);
            console.log(resp);
            for (var item in SingleSelect.GridSize) {
                if (item.value == data.pageSize) {
                    $scope.perPage = item;
                }
            }
            $scope.currentGridPage = data.currentPage;
            $scope.paginationPages = [];
            $scope.filters = data.filters;
            $scope.sorts = data.sorts;
            $scope.lastGridPage = data.lastPage;
            $scope.gridData = data.list;
            var counter = 1;
            while(counter <= resp.lastPage) {
                $scope.paginationPages.push(counter++);
            }
        });
    };

    $scope.gridData = [];

    $scope.goToNextPage = function(){
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = $scope.currentGridPage + 1;
        updateGrid(model);
    };

    $scope.goToPreviousPage = function(){
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = $scope.currentGridPage - 1;
        updateGrid(model);
    };

    $scope.goToPage = function(pageNum) {
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = pageNum;
        updateGrid(model);
    };

    $scope.goToFirstPage = function(){
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = 1;
        updateGrid(model);
    };

    $scope.goToLastPage = function(){
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = $scope.lastGridPage;
        updateGrid(model);
    };

    /**
     * Pages to display in the pagination
     * @type {Array}
     */

    $scope.paginationPages = [1,2,3];

    /**
     * Current pagination page that is active/being viewed
     * @type {number}
     */
    $scope.currentGridPage = 1;

    /**
     * Is the current page the last page in the data set
     * @type {boolean}
     */
    $scope.lastGridPage = true;

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

    $scope.defaultSortOrder = Enum.SortOrder.Ascending;

    $scope.init = function() {
        $scope.$parent.$parent.GetGridData.then(function(resp){
            for (var item in SingleSelect.GridSize) {
                if (item.value == resp.pageSize) {
                    $scope.perPage = item;
                }
            }
            $scope.currentGridPage = resp.currentPage;
            $scope.paginationPages = [];
            $scope.filters = resp.filters;
            $scope.sorts = resp.sorts;
            $scope.lastGridPage = resp.lastPage;
            $scope.gridData = resp.list;
            var counter = 1;
            while(counter <= resp.lastPage) {
                $scope.paginationPages.push(counter++);
            }
        });
    };
});
