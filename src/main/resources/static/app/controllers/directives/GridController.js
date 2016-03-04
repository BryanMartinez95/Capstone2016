'use strict';

angular.module('appController').controller('GridController',
    function GridController($scope, $timeout, $window, SingleSelect, GridRequestModel){
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
            paginate: onPaginate,
            deselect: deselect,
            selectRow: selectRow
        };

        function updateGrid(query) {
            $scope.$parent.getGrid(query).then(function(resp){
                $scope.options.rows = resp.list;
                $scope.options.page = resp.currentPage;
                $scope.options.size = resp.pageSize;
                $scope.options.filters = resp.filters;
                $scope.options.sort = resp.sorts;
                $scope.options.ignoredColumns = resp.ignoredColumns;
                $scope.options.total = resp.totalItems;
            });
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
