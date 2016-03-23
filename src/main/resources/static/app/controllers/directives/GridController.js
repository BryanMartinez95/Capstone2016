'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name GridController
 *
 * @param {service} $scope          The scope of this controller
 * @param {service} $window         A service to access properties of the browser window
 * @param {service} $filter         A service to use and inject filters to manipulate data
 * @param {service} $mdDialog       A service to utilize ngMaterial's dialog directive
 * @param {model} SingleSelect      A collection of lists used to populate the SingleSelect directive
 * @param {model} GridRequestModel  The model that is sent from Angular to the backend app to retrieve the contents of the grid
 * @param {model} Enum              A collection of Enums
 *
 * @description This controller contains all the information and functions to obtain information that is held within the Grid directive.
 */
angular.module('appController').controller('GridController',
    function GridController($scope, $window, $filter, $mdDialog, SingleSelect, GridRequestModel, Enum){

        /**
         * Initialize $scope variables
         * @function initOptions
         * @memberof GridController
         */
        function initOptions() {
            /**
             * @property {Object} options                   This is a collection of all the objects that are available to the Grid
             * @property {Number} options.page              The current page the grid is on. Used in pagination
             * @property {Number} options.total             The total number of items matching grid options
             * @property {Array} options.ignoredColumn      A collection of column names that will not display in the grid
             * @property {Array} options.rows               The collection of data that will populate the grid
             * @property {Array} options.filters            A collection of filter objects that are currently implemented in the grid
             * @property {Object} options.sort              An object holding the information regarding which column is sorted and how
             * @property {Array} options.SizeOptions        A collection of possible number of rows showing in grid. Used for pagination
             * @property {Number} options.limit             The currently selected number of rows showing in the grid
             * @property {Array} options.selected           A collection of all the currently selected rows in the grid
             * @property {Array} option.convertFields       A collection of fields that require data to be formatted
             * @property {Boolean} options.multiple         Determines if the grid allows multiple rows to be selected at once
             * @property {Function} options.paginate        {@link onPaginate} for more information
             * @property {Function} options.deselect        {@link deselect} for more information
             * @property {Function} options.selectRow       {@link selectRow} for more information
             * @property {Function} options.updateGrid      {@link updateGrid} for more information
             * @property {Function} options.addFilter       {@link addFilter} for more information
             * @property {Function} options.closeDialog     {@link closeDialog} for more information
             * @property {Function} options.appendFilter    {@link appendFilter} for more information
             * @property {Function} options.sortColumn      {@link sortColumn} for more information
             */
            $scope.options = {
                page: 1,
                total: 1,
                ignoredColumns: [],
                rows: [],
                filters: [],
                filterTypeOptions: SingleSelect.FilterType,
                sort: {
                    column: 'dateadded',
                    isAscending: true
                },
                sizeOptions: [5, 10, 15],
                limit: 15,
                selected: [],
                convertFields: [],
                multiple: false,
                selectFields: [],
                gridStatusOptions: [],
                gridStatus: Enum.Status.All.value,
                paginate: onPaginate,
                deselect: deselect,
                selectRow: selectRow,
                updateGrid: updateGrid,
                addFilter: addFilter,
                closeDialog: closeDialog,
                appendFilter: appendFilter,
                sortColumn: sortColumn
            };
        }
        /**
         * Set all the locally populated arrays with their default values
         * @memberof GridController
         * @function setOptions
         */
        function setOptions() {
            var options = $scope.options;

            options.convertFields = ['status', 'roleType'];
            options.filterInput = SingleSelect.FilterType;
            options.selectFields = ['status'];
            options.gridStatusOptions = SingleSelect.GridStatus;
        }

        /**
         * Populate the grid with data and update any options (filter, sorts, page, etc.) that may have changed
         * @memberof GridController
         * @fucntion updateGrid
         * @param {Object} [query] The GridRequestModel with the new information to populate grid
         */
        function updateGrid(query) {
            var model = query || GridRequestModel.newGridRequestModel();
            $scope.getGrid(model).then(function(resp){
                var data = resp.data;
                $scope.options.rows = convertFields(data.list);
                $scope.options.page = data.currentPage;
                $scope.options.size = data.pageSize;
                $scope.options.filters = data.filters;
                $scope.options.sort = data.sorts;
                $scope.options.ignoredColumns = data.ignoredColumns;
                $scope.options.total = data.totalItems;
                setHeaders();
            });
            $scope.options.selected = [];

        }

        function setHeaders() {
            $scope.options.header = [];
            var row = $scope.options.rows[0];
            var ignore = $scope.options.ignoredColumns;
            for (var key in row) {
                if (ignore.indexOf(key) === -1) {
                    $scope.options.header.push(key)
                }
            }
            console.log($scope.options.header);
        }

        /**
         * Iterates over every display value in {@link options.rows} and converts all data to readable code.
         * This is mostly to convert Enum values from uppercase to properly spaced out words. 
         * @param {Array} dirtyRows The rows to be inserted into the grid
         * @returns {Array}
         */
        function convertFields(dirtyRows) {
            var cleanRows = [];
            for (var row in dirtyRows) {
                var obj = {};
                for (var key in dirtyRows[row]) {
                    if (dirtyRows[row].hasOwnProperty(key)) {
                        var value = dirtyRows[row][key];
                        if (key.toLowerCase().indexOf('date') !== -1) {
                            value = $filter('date')(dirtyRows[row][key]);
                        }
                        if ($scope.options.convertFields.indexOf(key) !== -1) {
                            value = $filter('toRegularCase')(dirtyRows[row][key]);
                        }
                        // If column is an array, object or function then display '' in the cell
                        if(typeof dirtyRows[row][key] === 'function' || Array.isArray(dirtyRows[row][key])) {
                            value = '';
                        }
                        obj[key] = value;
                    }
                }
                cleanRows.push(obj);
            }

            return cleanRows;
        }

        /**
         * A callback function to run when any action is taken using the pagination directive
         * @param {Number} page The new page number to show in the grid
         * @param {Number} limit The maximum number of rows to display in the grid
         */
        function onPaginate(page, limit) {
            var model = GridRequestModel.newGridRequestModelFromJson({
                pageSize: limit,
                currentPage: page,
                filters: $scope.options.filters,
                sortColumn: $scope.options.sorts
            });
            $scope.options.selected = [];
            updateGrid(model);
        }

        /**
         * Empty the {@link options.selected} array of all objects
         */
        function deselect() {
            $scope.options.selected = [];
        }

        /**
         * Select a row in the grid. If {@link options.multiple} is 'true' then just push to the end of the array.
         * If {@link options.multiple} is 'false' then limit the array to only hold 1 object at a time
         * @param {Object} obj The object selected/clicked on in the grid
         */
        function selectRow(obj) {
            if (!$scope.options.multiple && $scope.options.selected.length !== 0) {
                $scope.options.selected = [];
            }
            if ($scope.options.selected.indexOf(obj.id) === -1) {
                $scope.options.selected.push(obj);
            }
        }

        /**
         * Initial function called to populate the grid
         */
        function init() {
            initOptions();
            setOptions();
            var model = GridRequestModel.newGridRequestModel();
            var winH = $window.innerHeight;
            $scope.options.sizeOptions = [5,10,15];
            if (winH < 735) {
                model.pageSize = 5;
                $scope.options.limit = 5;
                $scope.options.sizeOptions.pop();
                $scope.options.sizeOptions.pop();
            } else if (winH < 920) {
                model.pageSize = 10;
                $scope.options.limit = 10;
                $scope.options.sizeOptions.pop();
            }
            updateGrid(model);
        }

        /**
         * Handle any styling changes to the grid in case the browser window is resized
         */
        function pageResize() {
            var w = angular.element($window);

            w.bind('resize', function(){
                var height = w[0].innerHeight;
                var width = w[0].innerWidth;


            });
        }

        /**
         * Open a dialog box to allow the user to enter filter information
         * @param {Object} event The event that triggered the call
         */
        function addFilter(event) {
            $scope.dialogTitle = "Add Filter";

            $scope.filter = {
                type: 'CONTAINS',
                value: '',
                column: ''
            };

            $mdDialog.show({
                scope: $scope,
                templateUrl: '/app/directives/templates/grid-filter-template.html',
                parent: angular.element(document.body),
                targetEvent: event,
                fullscreen: false
            });
        }

        /**
         * Close the dialog box
         */
        function closeDialog() {
            $mdDialog.destroy();
        }

        /**
         * Add the filter to the array of filter used on the grid. See {@link options.filters}
         */
        function appendFilter() {
            console.log($scope.filter);

            var model = GridRequestModel.newGridRequestModelFromJson({
                pageSize: $scope.options.limit,
                currentPage: $scope.options.page,
                filters: $scope.options.filters ? $scope.options.filters.push($scope.filter) : [$scope.filter],
                sortColumn: $scope.options.sorts
            });
            console.log(model);
            $scope.options.selected = [];
            updateGrid(model);
            closeDialog();
        }

        /**
         * Sort columns in either ascending or descending order
         * @param {String} column The column that was clicked on
         */
        function sortColumn(column) {
            var currSort = $scope.options.sort;

            if (!currSort || currSort.column === '') {
                currSort = {};
                currSort.column = column;
                currSort.isAscending = true;
            } else if (currSort.column === column) {
                currSort.isAscending = !currSort.isAscending;
            } else if (currSort.column !== column) {
                currSort.column = column;
                currSort.isAscending = true;
            }

            var model = GridRequestModel.newGridRequestModelFromJson({
                pageSize: $scope.options.limit,
                currentPage: $scope.options.page,
                filters: $scope.options.filters,
                // sorts: currSort
            });
            $scope.options.selected = [];
            updateGrid(model);
        }

        pageResize();
        init();

});
