'use strict';

myApp.controller('SampleController', function SampleController($scope, selectOptions){
    var model = {};
    model.sampleNumber = 0;
    model.sampleText = "Cameron";
    model.sampleBoolean = true;
    model.sampleSelectOptions = selectOptions.TeamMembers;
    model.selectedItem = {};
    model.selectedItemList = [];


    $scope.model = model;
    $scope.buttonClick = function(){
        alert("Button clicked");
    };
    $scope.$watch('model', function(change){
        //console.log(change);
    });
    // To access the parent scope
    //$scope.test = $scope.$parent.test;
});
