'use strict';

angular.module('appController').controller('GridController',
    function GridController($scope, $window, $filter, $mdDialog, SingleSelect, GridRequestModel){
        $scope.options = {
            page: 1,
            total: 1,
            ignoredColumns: [],
            rows: [],
            filters: [],
            sort: [],
            sizeOptions: [5,10,15],
            limit: 15,
            selected: [],
            convertFields: [],
            multiple: false,
            selectFields: [],
            paginate: onPaginate,
            deselect: deselect,
            selectRow: selectRow,
            updateGrid: updateGrid,
            addFilter: addFilter,
            closeDialog: closeDialog,
            appendFilter: appendFilter
        };

        function setOptions() {
            var options = $scope.options;

            options.convertFields = ['status', 'roleType'];
            options.filterInput = SingleSelect.FilterType;
        }

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
            });
            $scope.options.selected = [];
        }

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

        function onPaginate(page, limit) {
            var model = GridRequestModel.newGridRequestModelFromJson({
                pageSize: limit,
                currentPage: page,
                filters: $scope.options.filters,
                sorts: $scope.options.sorts
            });
            $scope.options.selected = [];
            updateGrid(model);
        }

        function deselect() {
            $scope.options.selected = [];
        }

        function selectRow(obj) {
            if (!$scope.options.multiple && $scope.options.selected.length !== 0) {
                $scope.options.selected = [];
            }
            if ($scope.options.selected.indexOf(obj.id) === -1) {
                $scope.options.selected.push(obj);
            }
        }

        function init() {
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

        function pageResize() {
            var w = angular.element($window);

            w.bind('resize', function(){
                var height = w[0].innerHeight;
                var width = w[0].innerWidth;


            });
        }

        function addFilter(event, column) {
            $scope.dialogTitle = "Add Filter";

            $scope.filter = {
                text: '',
                search: '',
                field: column
            };

            $scope.filterType = $scope.options.selectFields.indexOf(column) === -1 ? 'input' : 'select';
            $scope.filter.by = $scope.filterType === 'input' ? '' : 'Matches';

            $mdDialog.show({
                scope: $scope,
                templateUrl: '/app/directives/templates/grid-filter-template.html',
                parent: angular.element(document.body),
                targetEvent: event,
                fullscreen: false
            });
        }

        function closeDialog() {
            $mdDialog.destroy();
        }

        function appendFilter() {
            console.log($scope.filter);
            closeDialog();
        }

        pageResize();
        init();

});
