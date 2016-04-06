'use strict';

/**
 * @ngdoc controller
 * @memberof appController
 * @name GridController
 *
 * @param {service} $scope          The scope of this controller
 * @param {service} $mdDialog       A service to utilize ngMaterial's dialog directive
 * @param {model} SingleSelect      A collection of lists used to populate the SingleSelect directive
 * @param {model} Enum              A collection of Enums
 * @param {service} DialogService   A service to display dialogs on the screen
 * @param {service} GridService     A service to handle all grid functionality
 * @param {service} LoadingService  A service to handle the app loading bar
 * @description This controller contains all the information and functions to obtain information that is held within the Grid directive.
 */
angular.module('appController').controller('GridController',
    function GridController($scope, $mdDialog, SingleSelect, Enum, DialogService, GridService, LoadingService) {

        /**
         * @property {Object}   options                     This is a collection of all the objects that are available to the Grid
         * @property {Number}   options.page                The current page the grid is on. Used in pagination
         * @property {Number}   options.total               The total number of items matching grid options
         * @property {Array}    options.ignoredColumn       A collection of column names that will not display in the grid
         * @property {Array}    options.rows                The collection of data that will populate the grid
         * @property {Array}    options.filters             A collection of filter objects that are currently implemented in the grid
         * @property {Object}   options.sort                An object holding the information regarding which column is sorted and how
         * @property {Array}    options.sizeOptions         A collection of possible number of rows showing in grid. Used for pagination
         * @property {Number}   options.limit               The currently selected number of rows showing in the grid
         * @property {Array}    options.selected            A collection of all the currently selected rows in the grid
         * @property {Boolean}  options.multiple            Determines if the grid allows multiple rows to be selected at once
         * @property {Array}    options.gridStatusOptions   A collection of possible statuses that can show in the grid
         * @property {string}   options.aValue              The value of {@link Enum.SortType.Ascending 'SortType.Ascending'}
         * @property {string}   options.dValue              The value of {@link Enum.SortType.Descending 'SortType.Descending'}
         * @property {boolean}  options.export              If the grid has the option to export its data
         * @property {Array}    options.headers             The headers that appear in the grid
         * @property {Function} options.paginate            {@link onPaginate} for more information
         * @property {Function} options.deselect            {@link deselect} for more information
         * @property {Function} options.selectRow           {@link selectRow} for more information
         * @property {Function{ options.deselectRow         {@link deselectRow} for more information
         * @property {Function} options.updateGrid          {@link updateGrid} for more information
         * @property {Function} options.addFilter           {@link addFilter} for more information
         * @property {Function} options.editFilter          {@link editFilter} for more information
         * @property {Function} options.modifyFilter        {@link modifyFilter} for more information
         * @property {Function} options.appendFilter        {@link appendFilter} for more information
         * @property {Function} options.removeFilter        {@link removeFilter} for more information
         * @property {Function} options.closeDialog         {@link closeDialog} for more information
         * @property {Function} options.sortColumn          {@link sortColumn} for more information
         */
        $scope.options = {
            page: GridService.getCurrentPage(),
            total: GridService.getTotalItems(),
            ignoredColumns: GridService.getIgnoredColumns(),
            rows: GridService.getGridRows(),
            filters: GridService.getCurrentFilters(),
            sort: GridService.getCurrentSort(),
            sizeOptions: [5, 10, 25, 50, 100],
            limit: GridService.getGridLimit(),
            selected: GridService.getSelectedRows(),
            multiple: GridService.allowMultiple(),
            gridStatusOptions: SingleSelect.GridStatus,
            aValue: Enum.SortType.Ascending.value,
            dValue: Enum.SortType.Descending.value,
            export: GridService.canExport(),
            headers: GridService.getHeaders(),
            paginate: onPaginate,
            deselect: deselect,
            selectRow: selectRow,
            deselectRow: deselectRow,
            updateGrid: updateGrid,
            addFilter: addFilter,
            editFilter: editFilter,
            modifyFilter: modifyFilter,
            appendFilter: appendFilter,
            removeFilter: removeFilter,
            closeDialog: closeDialog,
            sortColumn: sortColumn
        };

        /**
         * A callback function to run when any action is taken using the pagination directive
         * @function onPaginate
         * @memberof GridController
         * @param {Number} page The new page number to show in the grid
         * @param {Number} limit The maximum number of rows to display in the grid
         */
        function onPaginate(page, limit) {
            var model = GridService.paginate(page, limit);
            updateGrid(model);
            updateOptions();
        }

        /**
         * Empty the {@link options.selected} array of all objects
         * @function deselect
         * @memberof GridController
         */
        function deselect() {
            GridService.deselectAll();
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
            GridService.selectRow(obj);
            $scope.options.selected = GridService.getSelectedRows();
        }

        /**
         * Callback function to be called when a row is deselected
         * @function deselectRow
         * @memberof GridController
         * @param {Object} obj The row object being deselected
         */
        function deselectRow(obj) {
            GridService.deselectRow(obj);
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
                type: Enum.FilterType.Contains.value,
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
            $scope.filter = {};
            $mdDialog.destroy();
        }

        /**
         * Add the filter to the array of filter used on the grid. See {@link options.filters}
         * @function appendFilter
         * @memberof GridController
         */
        function appendFilter(filter) {
            GridService.appendFilter(filter);
            updateGrid();
            closeDialog();
        }

        /**
         * Modify an existing filter currently applied to the grid
         * @function modifyFilter
         * @memberof GridController
         * @param {Object} filter The filter being modified
         */
        function modifyFilter(filter) {
            GridService.modifyFilter(filter);
            updateGrid();
            closeDialog();
        }

        /**
         * Remove a currently applied filter from the grid
         * @param {object} filter The filter to be removed
         * @function removeFilter
         * @memberof GridController
         */
        function removeFilter(filter) {
            GridService.removeFilter(filter);
            updateGrid();
            updateOptions();
        }

        /**
         * Sort columns in either ascending or descending order
         * @function sortColumn
         * @memberof GridController
         * @param {String} column The column that was clicked on
         */
        function sortColumn(column) {
            var model = GridService.sortColumn(column);
            updateGrid(model);
            updateOptions();
        }

        /**
         * Function to run when the controller is initialized
         * @function init
         * @memberof GridController
         */
        function init() {
            // Clear screen From last grid
            $scope.options.rows = [];
            $scope.options.headers = [];
            updateGrid();
        }

        /**
         * Used to update the <code>$scope</code> variables on the grid
         * @function updateGrid
         * @memberof GridController
         * @param {GridRequestModel} [model] A GridRequestModel with any specific values set
         */
        function updateGrid(model) {
            $scope.isLoading = LoadingService.toggle();
            GridService.updateGrid(model).then(function (resp) {
                GridService.updateOptions(resp.data);
                updateOptions();
                $scope.isLoading = LoadingService.toggle();
            });
        }

        /**
         * Update all the <code>$scope.options</code> variables with current values from <code>GridService</code>
         * @function updateOptions
         * @memberof GridController
         */
        function updateOptions() {
            $scope.options.page = GridService.getCurrentPage();
            $scope.options.total = GridService.getTotalItems();
            $scope.options.ignoredColumns = GridService.getIgnoredColumns();
            $scope.options.rows = GridService.getGridRows();
            $scope.options.filters = GridService.getCurrentFilters();
            $scope.options.sort = GridService.getCurrentSort();
            $scope.options.limit = GridService.getGridLimit();
            $scope.options.selected = GridService.getSelectedRows();
            $scope.options.multiple = GridService.allowMultiple();
            $scope.options.export = GridService.canExport();
            $scope.options.headers = GridService.getHeaders();

            if ($scope.options.sort.column === '') {
                $scope.options.sort.column = $scope.options.headers[0] || '';
            }
        }

        init();
    });
