'use strict';

myApp.controller('DirectiveController', function DirectiveController($scope, utils, $log, $location){
    utils.getData('data/directiveData.json')
        .$promise
        .then(function(data) {
            $scope.directives = data.directive;
        })
        .catch(function(response){
            $log.warn(response);
        });
    $scope.linkTo = function(id) {
        $location.url('/#' + id);
    };
});
