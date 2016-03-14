'use strict';

angular.module('appController').controller('ProjectOverviewController', function ($scope, ProjectService) {

    $scope.data = {};
    $scope.data.message = "Project Overview Page";

	$scope.project = {};

	$scope.getGrid = function (options) {
		return ProjectService.getGrid(options);
	};

	$scope.goToViewProject = function() {
		$scope.project = $scope.options.selected[0];
		console.log("Selected project:", $scope.project);
	};
});