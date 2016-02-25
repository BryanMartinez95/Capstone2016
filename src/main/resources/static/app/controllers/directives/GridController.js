'use strict';

angular.module('appController').controller('GridController', function GridController($scope, SingleSelect, GridRequestModel, GridResultModel, Enum){

    $scope.gridData = [];

    /**
     * Options to display in the single-select for number of items per page in the grid.
     * @type {Array}
     */
    $scope.perPageList = SingleSelect.GridSize;

    /**
     * The currently selected value in the dropdown box directly above.
     */
    $scope.perPage = SingleSelect.GridSize[1];

    /**
     * All filters currently being applied.
     * @type {Array}
     */
    $scope.gridFilters = [];

    /**
     * Apply a new filter to the grid
     */
    $scope.applyFilter = function(){
        var filter = {};
        filter.column = $scope.filterColumn.value;
        filter.type = $scope.filterType.value;
        filter.query = $scope.filterSearch;
        console.log(filter);
    };

    $scope.filterType = null;

    $scope.filterSearch = null;

    /**
     * Remove a filter from the grid.
     */
    $scope.removeFilter = function(filter) {

    };

    $scope.filterTypeOptions = SingleSelect.FilterType;

    /**
     * Show the add filter box on page.
     */
    $scope.addFilter = function($event){
        console.log(angular.element($event.target));
        var filterBox = angular.element(document.querySelector('.add-filter-box'));
        console.log(filterBox);
        filterBox.show();
    };

    /**
     * Sort a column either in ascending or descending order
     * @param column - The column to sort by
     */
    $scope.sortBy = function(column) {
        var order = (column.sort === null || column.sort === undefined || column.sort === Enum.SortOrder.Descending)
                        ? Enum.SortOrder.Ascending.value : Enum.SortOrder.Descending.value;

        $scope.sorts = {
            column: column,
            order: order
        }
    };

    /**
     * Used to calculate the 5 page numbers to show in the pagination
     * @param current - The current page
     * @param last - The last page
     */
    function createPaginationNumbers(current, last) {
        var response = {
            rightEllipses: false,
            leftEllipses: false,
            pages: []
        };

        if (last <= 5) {
            response.pages = [1,2,3,4,5];
        } else {
            if (current in [1,2,3]){
                response.rightEllipses = true;
                response.pages = [1,2,3,4,5];
            } else if (current in [last, last - 1, last - 2]) {
                response.leftEllipses = true;
                for (var num = last - 5; num <= last; num++) {
                    response.pages.push(num);
                }
            } else {
                //TODO
            }
        }

        return response;
    }

    /**
     * This function will call the server for a new grid based on settings defined by the user.
     */
    function updateGrid(model) {
        $scope.GetGridData(model).then(function(resp) {
            var data = GridResultModel.newGridResultModelFromJson(resp);
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
    }

    /**
     * Go to the next page in the pagination.
     */
    $scope.goToNextPage = function(){
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = $scope.currentGridPage + 1;
        model.pageSize = $scope.perPage.value;
        updateGrid(model);
    };

    /**
     * Got to the previous page in the pagination
     */
    $scope.goToPreviousPage = function(){
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = $scope.currentGridPage - 1;
        model.pageSize = $scope.perPage.value;
        updateGrid(model);
    };

    /**
     * Got the a specific page in the pagination
     * @param pageNum - the page number to navigate to
     */
    $scope.changePage = function(pageNum) {
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = pageNum || $scope.lastGridPage;
        model.pageSize = $scope.perPage.value;
        updateGrid(model);
    };

    /**
     * Got to the first page in the pagination
     */
    $scope.goToFirstPage = function(){
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = 1;
        model.pageSize = $scope.perPage.value;
        updateGrid(model);
    };

    /**
     * Go to the last page in the pagination
     */
    $scope.goToLastPage = function(){
        var model = GridRequestModel.newGridRequestModel();
        model.currentPage = $scope.lastGridPage;
        model.pageSize = $scope.perPage.value;
        updateGrid(model);
    };

    /**
     * Change the number of records showing in the grid
     * @param selectedItem - The value selected in the dropdown box
     */
    $scope.adjustPageSize = function(selectedItem) {
        var model = GridRequestModel.newGridRequestModel();
        model.pageSize = selectedItem.value;
        for (var page in SingleSelect.GridSize ) {
            if (SingleSelect.GridSize[page].value === selectedItem.value ){
                $scope.perPage = SingleSelect.GridSize[page];
            }
        }
        updateGrid(model);
    };

    /**
     * Current pagination page that is active/being viewed
     * @type {number}
     */
    $scope.currentGridPage = 1;

    /**
     * Used for direct page navigation in pagination
     * @type {*|number}
     */
    $scope.$watch('currentGridPage', function(){
        $scope.directToPage = $scope.currentGridPage;
    });

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

    /**
     * If there are any styling it can be handled here to avoid
     * showing inline styling directly on html and to clean up
     * the html page
     * @type {{}}}
     */
    $scope.gridOptions = {
        style: {
            width: '100%'
        }
    };

    /**
     * Function that runs on controller initialization
     */
   var init = function() {
        var defaultOptions = GridRequestModel.newGridRequestModel();
        $scope.GetGridData(defaultOptions).then(function(resp){
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
            $scope.clearRowClick();
        });
    };

    init();
});
