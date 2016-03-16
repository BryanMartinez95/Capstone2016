'use strict';

angular.module('appController').controller('ListCollectionController', function($scope){
    $scope.options = {
        localList: [],
        savedList: [],
        add: addRow,
        delete: deleteRow,
        save: saveRow
    };

    function addRow() {
        $scope.options.localList.push($scope.model);
        $scope.appendRow();
    }
    function deleteRow(row) {
        $scope.options.localList.splice(list.indexOf(row),1);
    }
    function saveRow(obj) {
        $scope.options.savedList.push(obj);
    }
});
