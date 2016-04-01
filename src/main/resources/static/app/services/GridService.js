'use strict';

angular.module('appService').factory('GridService', function (Enum, GridRequestModel, $timeout, $filter, ExportService, SingleSelect) {

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
    var options = {
        page: 1,
        total: 1,
        ignoredColumns: [],
        rows: [],
        filters: [],
        sort: {
            column: 'dateadded',
            type: ''
        },
        sizeOptions: [5, 10, 25, 50, 100],
        limit: 10,
        selected: [],
        multiple: false,
        gridStatus: Enum.Status.Active.value,
        export: false,
        callback: null,
        convertFields: ['status', 'roleType'],
        filterInput: SingleSelect.FilterType,
        selectFields: ['status'],
        gridStatusOptions: SingleSelect.GridStatus
    };

    return {
        paginate: onPaginate,
        deselectAll: deselectAll,
        selectRow: selectRow,
        deselectRow: deselectRow,
        updateGrid: updateGrid,
        appendFilter: appendFilter,
        removeFilter: removeFilter,
        sortColumn: sortColumn,
        exportData: exportData,

        getCurrentPage: getCurrentPage,
        getTotalItems: getTotalItems,
        getIgnoredColumns: getIgnoredColumns,
        getGridRows: getGridRows,
        getCurrentFilters: getCurrentFilters,
        getCurrentSort: getCurrentSort,
        getGridLimit: getGridLimit,
        getSelectedRows: getSelectedRows,
        allowMultiple: allowMultiple,
        getGridStatus: getGridStatus,
        canExport: canExport,
        getHeaders: getHeader,
        setIgnoredColumns: setIgnoredColumns,
        setCallback: setCallback,
        clearRows: clearRows,
        init: init
    };

    // ---- Public 

    function updateGrid() {
        options.callback(fillFields())
            .then(function (resp) {
                var data = resp.data;
                options.rows = convertFields(data.data);
                options.page = data.currentPage;
                options.size = data.pageSize;
                options.filters = data.filters;
                options.sort.column = data.sortColumn;
                options.sort.type = data.sortType;
                options.ignoredColumns = data.ignoredColumns;
                options.total = data.totalItems;
                options.gridStatus = data.gridStatus || Enum.Status.Active.value;
                setHeaders();
            });
    }

    /**
     * A callback function to run when any action is taken using the pagination directive
     * @function onPaginate
     * @memberof GridService
     * @param {Number} page The new page number to show in the grid
     * @param {Number} limit The maximum number of rows to display in the grid
     */
    function onPaginate(page, limit) {
        var model = GridRequestModel.newGridRequestModelFromJson({
            pageSize: limit,
            currentPage: page
        });
        options.selected = [];
        $timeout(function () {
            updateGrid(model);
        }, 500);
    }

    /**
     * Empty the {@link options.selected} array of all objects
     * @function deselect
     * @memberof GridService
     */
    function deselectAll() {
        options.selected = [];
    }

    /**
     * Select a row in the grid. If {@link options.multiple} is 'true' then just push to the end of the array.
     * If {@link options.multiple} is 'false' then limit the array to only hold 1 object at a time
     * @function selectRow
     * @memberof GridService
     * @param {Object} obj The object selected/clicked on in the grid
     */
    function selectRow(obj) {
        if (!options.multiple && options.selected.length !== 0) {
            options.selected = [];
        }
        if (options.selected.indexOf(obj.id) === -1) {
            options.selected.push(obj);
        }
    }

    /**
     * Callback function to be called when a row is deselected
     * @function deselectRow
     * @memberof GridService
     * @param {Object} obj The row object being deselected
     */
    function deselectRow(obj) {
        options.selected.splice(options.selected.indexOf(obj), 1);
    }

    /**
     * Add the filter to the array of filter used on the grid. See {@link options.filters}
     * @function appendFilter
     * @memberof GridService
     */
    function appendFilter(filter) {
        $timeout(function () {
            updateGrid(GridRequestModel.newGridRequestModelFromJson({
                filters: options.filters ? options.filters.push(filter) : [filter]
            }));
        }, 500);
    }

    /**
     * Remove a currently applied filter from the grid
     * @param {object} filter The filter to be removed
     * @function removeFilter
     * @memberof GridService
     */
    function removeFilter(filter) {
        var filters = options.filters;
        for (var idx in filters) {
            if (filters[idx].column === filter.column && filters[idx].value === filter.value && filters[idx].type === filter.type) {
                $scope.options.filters.splice(filters.indexOf(filters[idx]), 1);
                break;
            }
        }
        $timeout(function () {
            updateGrid();
        }, 500);
    }

    /**
     * Sort columns in either ascending or descending order
     * @function sortColumn
     * @memberof GridService
     * @param {String} column The column that was clicked on
     */
    function sortColumn(column) {
        if (column === 'status')
            return;
        var currSort = options.sort;

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
        $timeout(function () {
            updateGrid(model);
        }, 500);
    }

    /**
     * Function to export the grid data to a CSV file
     * @function exportData
     * @memberof GridService
     */
    function exportData(callback) {
        var model = fillFields(GridRequestModel.newGridRequestModel());
        callback(model).then(function (resp) {
            var json = resp.contents;

            ExportService.exportData(json);
        });
    }

    function init(callback, ignoredColumns) {
        setCallback(callback);
        setIgnoredColumns(ignoredColumns);
        updateGrid();
    }
    // ---- Getters
    function getCurrentPage() {
        return options.page;
    }

    function getTotalItems() {
        return options.total;
    }

    function getIgnoredColumns() {
        return options.ignoredColumns;
    }

    function getGridRows() {
        return options.rows;
    }

    function getCurrentFilters() {
        return options.filters;
    }

    function getCurrentSort() {
        return options.sort;
    }

    function getGridLimit() {
        return options.limit;
    }

    function getSelectedRows() {
        return options.selected;
    }

    function allowMultiple() {
        return options.multiple;
    }

    function setMultiple(multiple) {
        options.multiple = multiple;
    }

    function getGridStatus() {
        return options.gridStatus;
    }

    function canExport() {
        return options.export;
    }

    function getHeader() {
        return options.header;
    }

    function setCallback(callback) {
        options.callback = callback;
    }

    function setIgnoredColumns(cols) {
        options.ignoredColumns = cols;
    }

    function clearRows() {
        options.rows = [];
    }

    // ---- Private



    /**
     * Fill in missing fields from $scope in a {@link GridRequestModel}
     * @param {GridRequestModel} [model] The partially filled model
     */
    function fillFields(model) {
        if (model) {
            return GridRequestModel.newGridRequestModelFromJson({
                pageSize: model.pageSize || options.limit,
                currentPage: model.currentPage || options.page,
                filters: model.filters || (options.filters || []),
                ignoredColumns: model.ignoredColumns || options.ignoredColumns,
                sortColumn: model.sortColumn || (options.sort ? options.sort.column : ''),
                sortType: model.sortType || (options.sort.type || Enum.SortType.Ascending.value),
                gridStatus: model.gridStatus || options.gridStatus
            });
        }
        return GridRequestModel.newGridRequestModelFromJson({
            pageSize: options.limit,
            currentPage: options.page,
            filters: options.filters || [],
            ignoredColumns: options.ignoredColumns || [],
            sortColumn: options.sort ? options.sort.column : '',
            sortType: options.sort.type || Enum.SortType.Ascending.value,
            gridStatus: options.gridStatus
        })
    }

    /**
     * Set the grid headers. Also used in filter when filter by column
     * @function setHeaders
     * @memberof GridService
     */
    function setHeaders() {
        options.header = [];
        var row = options.rows[0];
        var ignore = options.ignoredColumns;
        for (var key in row) {
            if (ignore.indexOf(key) === -1) {
                options.header.push(key)
            }
        }
    }

    /**
     * Iterates over every display value in {@link options.rows} and converts all data to readable code.
     * This is mostly to convert Enum values from uppercase to properly spaced out words.
     * @function convertFields
     * @memberof GridService
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
                    if (options.convertFields.indexOf(key) !== -1) {
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
});
