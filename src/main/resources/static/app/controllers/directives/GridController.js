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
 * @param {service} ExportService   A service used to handle exporting data from the grid
 * @description This controller contains all the information and functions to obtain information that is held within the Grid directive.
 */
angular.module('appController').controller('GridController',
    function GridController($scope, $window, $filter, $mdDialog, SingleSelect, GridRequestModel, Enum, ExportService) {

        /**
         * Initialize $scope variables
         * @function initOptions
         * @memberof GridController
         */
        function initOptions() {
            /**
             * @property {Object}   options                     This is a collection of all the objects that are available to the Grid
             * @property {Number}   options.page                The current page the grid is on. Used in pagination
             * @property {Number}   options.total               The total number of items matching grid options
             * @property {Array}    options.ignoredColumn       A collection of column names that will not display in the grid
             * @property {Array}    options.rows                The collection of data that will populate the grid
             * @property {Array}    options.filters             A collection of filter objects that are currently implemented in the grid
             * @property {Object}   options.sort                An object holding the information regarding which column is sorted and how
             * @property {Array}    options.SizeOptions         A collection of possible number of rows showing in grid. Used for pagination
             * @property {Number}   options.limit               The currently selected number of rows showing in the grid
             * @property {Array}    options.selected            A collection of all the currently selected rows in the grid
             * @property {Array}    option.convertFields        A collection of fields that require data to be formatted
             * @property {Boolean}  options.multiple            Determines if the grid allows multiple rows to be selected at once
             * @property {Array}    options.gridStatusOptions   A collection of possible statuses that can show in the grid
             * @property {string}   options.gridStatus          The status type that shows in the grid. See {@link Enum.SortType 'SortType'}
             * @property {string}   options.aValue              The value of {@link Enum.SortType.Ascending 'SortType.Ascending'}
             * @property {string}   options.dValue              The value of {@link Enum.SortType.Descending 'SortType.Descending'}
             * @property {boolean}  options.export              If the grid has the option to export its data
             * @property {Function} options.paginate            {@link onPaginate} for more information
             * @property {Function} options.deselect            {@link deselect} for more information
             * @property {Function} options.selectRow           {@link selectRow} for more information
             * @property {Function{ options.deselectRow         {@link deselectRow} for more information
             * @property {Function} options.updateGrid          {@link updateGrid} for more information
             * @property {Function} options.addFilter           {@link addFilter} for more information
             * @property {Function} options.closeDialog         {@link closeDialog} for more information
             * @property {Function} options.appendFilter        {@link appendFilter} for more information
             * @property {Function} options.removeFilter        {@link removeFilter} for more information
             * @property {Function} options.editFilter          {@link editFilter} for more information
             * @property {Function} options.sortColumn          {@link sortColumn} for more information
             * @property {Function} options.exportData          {@link exportData} for more information
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
                    type: ''
                },
                sizeOptions: [5, 10],
                limit: 10,
                selected: [],
                convertFields: [],
                multiple: false,
                gridStatusOptions: [],
                gridStatus: Enum.Status.Active.value,
                aValue: Enum.SortType.Ascending.value,
                dValue: Enum.SortType.Descending.value,
                export: false,
                paginate: onPaginate,
                deselect: deselect,
                selectRow: selectRow,
                deselectRow: deselectRow,
                updateGrid: updateGrid,
                addFilter: addFilter,
                closeDialog: closeDialog,
                appendFilter: appendFilter,
                removeFilter: removeFilter,
                editFilter: editFilter,
                sortColumn: sortColumn,
                exportData: exportData
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
            $scope.$parent.isLoading = true;
            var model = query || GridRequestModel.newGridRequestModel();
            $scope.getGrid(fillFields(model)).then(function (resp) {
                var data = resp.data;
                $scope.options.rows = convertFields(data.data);
                $scope.options.page = data.currentPage;
                $scope.options.size = data.pageSize;
                $scope.options.filters = data.filters;
                $scope.options.sort.column = data.sortColumn;
                $scope.options.sort.type = data.sortType;
                $scope.options.ignoredColumns = data.ignoredColumns;
                $scope.options.total = data.totalItems;
                $scope.options.gridStatus = data.gridStatus || Enum.Status.All.value;
                setHeaders();
            })
            .finally(function () {
                $scope.$parent.isLoading = false;
            });
            $scope.options.selected = [];
        }

        /**
         * Set the grid headers. Also used in filter when filter by column
         * @function setHeaders
         * @memberof GridController
         */
        function setHeaders() {
            $scope.options.header = [];
            var row = $scope.options.rows[0];
            var ignore = $scope.options.ignoredColumns;
            for (var key in row) {
                if (ignore.indexOf(key) === -1) {
                    $scope.options.header.push(key)
                }
            }
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
                        if (typeof dirtyRows[row][key] === 'function' || Array.isArray(dirtyRows[row][key])) {
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
         * @function onPaginate
         * @memberof GridController
         * @param {Number} page The new page number to show in the grid
         * @param {Number} limit The maximum number of rows to display in the grid
         */
        function onPaginate(page, limit) {
            var model = GridRequestModel.newGridRequestModelFromJson({
                pageSize: limit,
                currentPage: page
            });
            $scope.options.selected = [];
            updateGrid(model);
        }

        /**
         * Empty the {@link options.selected} array of all objects
         * @function deselect
         * @memberof GridController
         */
        function deselect() {
            $scope.options.selected = [];
        }

        /**
         * Select a row in the grid. If {@link options.multiple} is 'true' then just push to the end of the array.
         * If {@link options.multiple} is 'false' then limit the array to only hold 1 object at a time
         * @function selectRow
         * @memberof GridController
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
         * Callback function to be called when a row is deselected
         * @function deselectRow
         * @memberof GridController
         * @param {Object} obj The row object being deselected
         */
        function deselectRow(obj) {
            $scope.options.selected.splice($scope.options.selected.indexOf(obj),1);
        }

        /**
         * Initial function called to populate the grid
         * @function init
         * @memberof GridController
         */
        function init() {
            initOptions();
            setOptions();
            var model = GridRequestModel.newGridRequestModel();
            var winH = $window.innerHeight;
            if (!$scope.options.sizeOptions)
                $scope.options.sizeOptions = [5, 10];
            if (winH < 735) {
                model.pageSize = 5;
                $scope.options.limit = 5;
                $scope.options.sizeOptions.pop();
            } else if (winH < 920) {
                model.pageSize = 10;
                $scope.options.limit = 10;
            }
            updateGrid(model);
        }

        /**
         * Handle any styling changes to the grid in case the browser window is resized
         * @function pageResize
         * @memberof GridController
         */
        function pageResize() {
            var w = angular.element($window);

            w.bind('resize', function () {
                var height = w[0].innerHeight;
                var width = w[0].innerWidth;


            });
        }

        /**
         * Open a dialog box to allow the user to enter information for a new filter
         * @function addFilter
         * @memberof GridController
         * @param {Object} event The event that triggered the call
         */
        function addFilter(event) {
            var title = "Add Filter";
            var filter = {
                type: 'CONTAINS',
                value: '',
                column: '',
                name: ''
            };

            showFilterDialog(filter, title, event, true);
        }

        /**
         * Edit the selected filter
         * @function editFilter
         * @memberof GridController
         * @param {object} event The button click event
         * @param {object} filter The filter to edit
         */
        function editFilter(event, filter) {
            var title = 'Edit Filter - ' + filter.name || '';
            showFilterDialog(filter, title, event, false);
        }

        /**
         * Open the filter dialog box
         * @function showFilterDialog
         * @memberof GridController
         * @param {object}  filter   The filter object
         * @param {string}  title    The title of the dialog
         * @param {Object}  event    The button click event
         * @param {boolean} isAdd    If the dialog should display 'Add' or 'Edit'
         */
        function showFilterDialog(filter, title, event, isAdd) {
            $scope.dialogTitle = title;
            $scope.filter = filter;
            $scope.adding = isAdd;
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
         * @function closeDialog
         * @memberof GridController
         */
        function closeDialog() {
            $scope.options.filter = {};
            $mdDialog.destroy();
        }

        /**
         * Add the filter to the array of filter used on the grid. See {@link options.filters}
         * @function appendFilter
         * @memberof GridController
         */
        function appendFilter() {
            updateGrid(GridRequestModel.newGridRequestModelFromJson({
                filters: $scope.options.filters ? $scope.options.filters.push($scope.filter) : [$scope.filter]
            }));
            $scope.options.selected = [];
            closeDialog();
        }

        /**
         * Remove a currently applied filter from the grid
         * @param {object} filter The filter to be removed
         * @function removeFilter
         * @memberof GridController
         */
        function removeFilter(filter) {
            var filters = $scope.options.filters;
            for (var idx in filters) {
                if (filters[idx].column === filter.column && filters[idx].value === filter.value && filters[idx].type === filter.type) {
                    $scope.options.filters.splice(filters.indexOf(filters[idx]), 1);
                    break;
                }
            }
            updateGrid();
        }

        /**
         * Sort columns in either ascending or descending order
         * @function sortColumn
         * @memberof GridController
         * @param {String} column The column that was clicked on
         */
        function sortColumn(column) {
            if (column === 'status')
                return;
            var currSort = $scope.options.sort;

            if (!currSort || currSort.column === '' || currSort.type === Enum.SortType.None.value) {
                currSort = {};
                currSort.column = column;
                currSort.type = Enum.SortType.Ascending.value;
            } else if (currSort.column === column) {
                currSort.type = currSort.type === Enum.SortType.Ascending.value ? Enum.SortType.Descending.value : Enum.SortType.Ascending.value;
            } else if (currSort.column !== column) {
                currSort.column = column;
                currSort.type = Enum.SortType.Ascending.value;
            }

            var model = GridRequestModel.newGridRequestModelFromJson({
                sortColumn: currSort.column,
                sortType: currSort.type
            });
            $scope.options.selected = [];
            updateGrid(model);
        }

        /**
         * Fill in missing fields from $scope in a {@link GridRequestModel}
         * @param {GridRequestModel} model The partially filled model
         */
        function fillFields(model) {
            return GridRequestModel.newGridRequestModelFromJson({
                pageSize: model.pageSize || $scope.options.limit,
                currentPage: model.currentPage || $scope.options.page,
                filters: model.filters || ($scope.options.filters || []),
                ignoredColumns: model.ignoredColumns || $scope.options.ignoredColumns,
                sortColumn: model.sortColumn || ($scope.options.sort ? $scope.options.sort.column : ''),
                sortType: model.sortType || ($scope.options.sort.type || Enum.SortType.Ascending.value),
                gridStatus: model.gridStatus || $scope.options.gridStatus
            });

        }

        /**
         * Function to export the grid data to a CSV file
         */
        function exportData() {
            var model = fillFields(GridRequestModel.newGridRequestModel());
            /*****  Uncomment this next section to work with the server ***************************/
            // $scope.exportGrid(model).then(function (resp) {
            //     var data = resp.data;
            //     var json = data.contents;
            //
            //     ExportService.exportData(json);
            // });
            /**************************************************************/
             /***************** Test data for export ********************************************/
            var json = [
                {
                    "date":"1/29/2015",
                    "sample id":"AOP1406B001A",
                    "temperature":0,
                    "test method":"organic acids acetic acid concentration",
                    "value":12.5,
                    "unit":"",
                    "device":"icp"
                },
                {
                    "date":"1/29/2015",
                    "sample id":"AOP1406B001A",
                    "temperature":0,
                    "test method":"ag3280",
                    "value":22,
                    "unit":"",
                    "device":"icp"
                },
                {
                    "date":"1/29/2015",
                    "sample id":"AOP1406B001A",
                    "temperature":0,
                    "test method":"as1890",
                    "value":-25,
                    "unit":"",
                    "device":"icp"
                },
                {
                    "date":"1/29/2015",
                    "sample id":"AOP1406B001A",
                    "temperature":0,
                    "test method":"cr2677",
                    "value":12,
                    "unit":"",
                    "device":"icp"
                },
                {
                    "date":"1/29/2015",
                    "sample id":"AOP1406B333A",
                    "temperature":0,
                    "test method":"ca3158",
                    "value":12,
                    "unit":"mg/l",
                    "device":"TN"
                },
                {
                    "date":"1/29/2015",
                    "sample id":"AOP1406B333A",
                    "temperature":26,
                    "test method":"ce2286",
                    "value":55,
                    "unit":"mg/l",
                    "device":"TN"
                },
                {
                    "date":"1/29/2015",
                    "sample id":"AOP1406B333A",
                    "temperature":26,
                    "test method":"co2388",
                    "value":22,
                    "unit":"mg/l",
                    "device":"TN"
                }
            ];

            ExportService.exportData(json);

            /********************** *******************************/
        }

        pageResize();
        init();

    });
