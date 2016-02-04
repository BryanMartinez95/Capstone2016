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
    function updateGrid(model) {
        $scope.$parent.$parent.GetGridData(model).then(function(resp) {
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

    function adjustPageSize() {
        console.log($scope);
    }

    $scope.$watch('perPage', function(newVal, oldVal) {
        console.log('Watch old',oldVal);
        console.log('Watch new',newVal);
        adjustPageSize();
    });

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
        var defaultOptions = GridRequestModel.newGridRequestModel();
        $scope.$parent.$parent.GetGridData(defaultOptions).then(function(resp){
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
