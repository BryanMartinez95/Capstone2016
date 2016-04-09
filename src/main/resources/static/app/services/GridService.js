'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @param {model} Enum              A collection of constant values used in the app
 * @param {model} GridRequestModel  A set of grid parameters
 * @param {service} $filter         A service to inject filters
 * @param {service} ExportService   A service to export JSON data to CSV
 * @param {model} SingleSelect      A model representing all SingleSelect values
 * @description
 *  A service to handle all the functionality of the Grid directive
 */
angular.module('appService').factory('GridService', function (Enum, GridRequestModel, $filter, ExportService, SingleSelect) {

    /**
     * @property {Object} options This is a collection of all the objects that are available to the Grid Serivce
     */
    var options;

    /**
     * Return all the public functions
     */
    return {
        paginate: onPaginate,
        deselectAll: deselectAll,
        selectRow: selectRow,
        deselectRow: deselectRow,
        updateGrid: updateGrid,
        updateOptions: updateOptions,
        appendFilter: appendFilter,
        removeFilter: removeFilter,
        modifyFilter: modifyFilter,
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
        canExport: canExport,
        canFilter: canFilter,
        getHeaders: getHeaders,
        setIgnoredColumns: setIgnoredColumns,
        setCallback: setCallback,
        clearRows: clearRows,
        init: init
    };

    // ---- Public 

    /**
     * Update te current grid
     *
     * @public
     * @function updateGrid
     * @memberof GridService
     * @param {GridRequestModel} [model] A GridRequestModel that has any specific settings to apply to the grid
     * @returns {*} The http promise based on settings provided and the current settings
     */
    function updateGrid(model) {
        return options.callback(fillFields(model));
    }

    /**
     * Update the local variables with the new data returned from the updateGrid method
     *
     * @public
     * @function updateOptions
     * @memberof GridService
     * @param {!Object} data The new settings
     */
    function updateOptions(data) {
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
    }

    /**
     * A callback function to run when any action is taken using the pagination directive
     *
     * @public
     * @function onPaginate
     * @memberof GridService
     * @param {Number} page The new page number to show in the grid
     * @param {Number} limit The maximum number of rows to display in the grid
     */
    function onPaginate(page, limit) {
        options.selected = [];
        options.page = page;
        options.limit = limit;
        return GridRequestModel.newGridRequestModelFromJson({
            pageSize: limit,
            currentPage: page
        });
    }

    /**
     * Empty the {@link options.selected} array of all objects
     *
     * @public
     * @function deselect
     * @memberof GridService
     */
    function deselectAll() {
        options.selected = [];
    }

    /**
     * Select a row in the grid. If {@link options.multiple} is 'true' then just push to the end of the array.
     * If {@link options.multiple} is <code>false</code> then limit the array to only hold one object at a time
     *
     * @public
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
     * Deselect a single row in the grid
     *
     * @public
     * @function deselectRow
     * @memberof GridService
     * @param {Object} obj The row object being deselected
     */
    function deselectRow(obj) {
        options.selected.splice(options.selected.indexOf(obj), 1);
    }

    /**
     * Add the filter to the array of filter used on the grid. See {@link options.filters}
     *
     * @public
     * @function appendFilter
     * @memberof GridService
     * @param {Object} filter The new filter to append to the list of filters
     */
    function appendFilter(filter) {
        options.filters ? options.filters.push(filter) : [filter];
    }

    /**
     * Remove the selected filter from the grid
     *
     * @public
     * @function removeFilter
     * @memberof GridService
     * @param {Object} filter The filter to be removed
     */
    function removeFilter(filter) {
        var filters = options.filters;
        for (var idx in filters) {
            if (filters[idx].column === filter.column && filters[idx].value === filter.value && filters[idx].type === filter.type) {
                options.filters.splice(filters.indexOf(filters[idx]), 1);
                break;
            }
        }
    }

    /**
     * Update the selected filter's search parameters and update grid
     *
     * @public
     * @function modifyFilter
     * @memberof GridService
     * @param {Object} filter The filter to update
     */
    function modifyFilter(filter) {
        var idx = null;
        options.filters.forEach(function(f){
            if (f.name === filter.name) {
                idx = options.filters.indexOf(f);
            }
        });
        if (idx) {
            options.filters[idx] = filter;
        }
    }

    /**
     * Sort columns in either ascending or descending order
     *
     * @public
     * @function sortColumn
     * @memberof GridService
     * @param {!String} column The column that was clicked on
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

        return GridRequestModel.newGridRequestModelFromJson({
            sortColumn: currSort.column,
            sortType: currSort.type
        });
    }

    /**
     * Function to export the grid data to a CSV file
     *
     * @public
     * @function exportData
     * @memberof GridService
     * @param {!Function} callback The http promise used to retrieve the data to export
     */
    function exportData(callback) {
        var model = fillFields(GridRequestModel.newGridRequestModel());
        callback(model).then(function (resp) {
            var json = resp.contents;

            ExportService.exportData(json);
        });
    }

    /**
     * Function to call in the injecting controller to set required values and load the grid
     *
     * @public
     * @function init
     * @memberof GridService
     * @param {!Function} callback The http promise used to retrieve grid data
     * @param {Array} ignoredColumns The columns that shouldn't be shown in the grid
     */
    function init(callback, ignoredColumns) {
        setDefaults();
        setCallback(callback);
        setIgnoredColumns(ignoredColumns);
        deselectAll();
    }

    // ---- Getters and Setters

    /**
     * Get the current page in the grid pagination
     *
     * @public
     * @function getCurrentPage
     * @memberof GridService
     * @returns {number}
     */
    function getCurrentPage() {
        return options.page;
    }

    /**
     * Get the total number of items based on search parameters
     *
     * @public
     * @function getTotalItems
     * @memberof GridService
     * @returns {number}
     */
    function getTotalItems() {
        return options.total;
    }

    /**
     * Get the currently ignored columns
     *
     * @public
     * @function getIgnoredColumns
     * @memberof GridService
     * @returns {Array}
     */
    function getIgnoredColumns() {
        return options.ignoredColumns;
    }

    /**
     * Get the current rows to be displayed in the grid
     *
     * @public
     * @function getGridRows
     * @memberof GridService
     * @returns {Array}
     */
    function getGridRows() {
        return options.rows;
    }

    /**
     * Get currently applied filters
     *
     * @public
     * @function getCurrentFilters
     * @memberof GridService
     * @returns {options.filters}
     */
    function getCurrentFilters() {
        return options.filters;
    }

    /**
     * Get the currently sorted column and order it's sorted
     * @returns {options.sort|{column, type}}
     */
    function getCurrentSort() {
        return options.sort;
    }

    /**
     * Get the current grid limit
     * @returns {options.limit}
     */
    function getGridLimit() {
        return options.limit;
    }

    /**
     * Return all the rows that are currently selected in the grid
     *
     * @public
     * @function getSelectedRows
     * @memberof GridService
     * @returns {Array}
     */
    function getSelectedRows() {
        return options.selected;
    }

    /**
     * Set if the grid should allow multiple rows to be selected. Default is false.
     * If no parameter is provided then return the current multiple setting.
     *
     * @public
     * @function allowMultiple
     * @memberof GridService
     * @param {Boolean} [multiple] New setting
     * @returns {boolean} If the grid supports multiple rows selected
     */
    function allowMultiple(multiple) {
        if (multiple === null || multiple === undefined) {
            return options.multiple;
        }
        options.multiple = multiple;
    }

    /**
     * Set if the grid can export it's contents.
     * If no parameter is provided then it will return the current export settings.
     *
     * @public
     * @function canExport
     * @memberof GridService
     * @param [exportSetting] The new setting to set the export as
     * @returns {boolean}
     */
    function canExport(exportSetting) {
        if (exportSetting === null || exportSetting === undefined) {
            return options.export;
        }
        options.export = exportSetting;
    }

    /**
     * Set if the the grid allows filtering.
     * If no parameter is provided the return the current setting
     * 
     * @public
     * @function canFilter
     * @memberof GridService
     * @param {Boolean} [canFilter] The new setting
     * @returns {boolean} If the grid allows filtering
     */
    function canFilter(canFilter) {
        if (canFilter === null || canFilter === undefined) {
            return options.canFilter;
        }
        options.canFilter = canFilter;
    }
    
    /**
     * Get the grid headers
     * @public
     * @function getHeaders
     * @memberof GridService
     * @returns {Array}
     */
    function getHeaders() {
        return options.header;
    }

    /**
     * Set the callback function used in the {@link updateGrid 'updateGrid'} function
     * @public
     * @function setCallback
     * @memberof GridService
     * @param {!Function} callback The http promise to call on grid update
     */
    function setCallback(callback) {
        options.callback = callback;
    }

    /**
     * Set the contents of <code>options.ignore</code>
     * @public
     * @function setIgnoredColumns
     * @memberof GridService
     * @param {!Array} cols Columns to ignore
     */
    function setIgnoredColumns(cols) {
        options.ignoredColumns = cols;
    }

    /**
     * Reset the variable options.rows
     * @public
     * @function clearRows
     * @memberof GridService
     */
    function clearRows() {
        options.rows = [];
    }

    // --- Local Functions

    /**
     * Fill in missing fields from $scope in a {@link GridRequestModel}
     * @private
     * @function fillFields
     * @memberof GridService
     * @param {!GridRequestModel} [model] The partially filled model
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
     * @private
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
     * @private
     * @function convertFields
     * @memberof GridService
     * @param {!Array} dirtyRows The rows to be inserted into the grid
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

    /**
     * Initialize all local variables to their default values
     * @private
     * @function setDefaults
     * @memberof GridService
     */
    function setDefaults() {
        options = {
            page: 1,
            total: 1,
            ignoredColumns: [],
            rows: [],
            filters: [],
            sort: {
                column: '',
                type: ''
            },
            sizeOptions: [5, 10, 25, 50, 100],
            limit: 10,
            selected: [],
            multiple: false,
            export: false,
            canFilter: true,
            callback: null,
            convertFields: ['status', 'roleType'],
            filterInput: SingleSelect.FilterType,
            selectFields: ['status'],
            gridStatusOptions: SingleSelect.GridStatus
        };
    }
});
