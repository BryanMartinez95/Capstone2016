'use strict';

angular.module('appDirective').directive('saitNavbar', function(){
    return {
        restrict: 'E',
        templateUrl: '/app/directives/templates/navbar.html',
        replace: true,
        link: function($scope, elem, attrs) {
            $scope.items = JSON.parse(attrs.list);
            $scope.divider = attrs.divider ? true : false;
            $scope.isOpen = function() {
                return $scope.data.expanded;
            };
            $scope.toggle = function() {
                $scope.data.expanded = !$scope.data.expanded;
            };
        }
    }
});
