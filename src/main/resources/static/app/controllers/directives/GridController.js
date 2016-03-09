'use strict';

angular.module('appController').controller('GridController',
    function GridController($scope, $window, $filter, SingleSelect, GridRequestModel){
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
            convertFields: ['status', 'roleType'],
            paginate: onPaginate,
            deselect: deselect,
            selectRow: selectRow,
            updateGrid: updateGrid
        };

        function updateGrid(query) {
            var model = query || GridRequestModel.newGridRequestModel();
            $scope.$parent.getGrid(model).then(function(resp){
                var data = resp.data;
                $scope.options.rows = convertFields(data.list);
                $scope.options.page = data.currentPage;
                $scope.options.size = data.pageSize;
                $scope.options.filters = data.filters;
                $scope.options.sort = data.sorts;
                $scope.options.ignoredColumns = data.ignoredColumns;
                $scope.options.total = data.totalItems;
            });
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
                        if(typeof dirtyRows[row][key] === 'function' || Array.isArray(dirtyRows[row][key])) {
                            var type = typeof dirtyRows[row][key] === 'function' ? 'function' : 'Array';
                            console.log(key + ' is not a supported data type for this grid. Type: '
                                + type);
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
            if ($scope.options.selected.length !== 0)
                $scope.options.selected = [];
            $scope.options.selected.push(obj);
        }

        function init() {
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

        init();
});
