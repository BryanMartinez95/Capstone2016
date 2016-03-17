'use strict';

angular.module('appDirective').directive('saitNavbar', function(){
    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/navbar.html',
        replace: true,
        link: function($scope, elem, attrs) {
            $scope.items = JSON.parse(attrs.list);
            $scope.expanded = false;
            $scope.isOpen = function() {
                return $scope.expanded;
            };
            $scope.toggle = function() {
                $scope.expanded = !$scope.expanded;
            };
        }
    }
});
