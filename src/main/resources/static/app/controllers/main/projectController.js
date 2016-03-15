'use strict';

angular.module('appController').controller('ProjectOverviewController', function ($scope, ProjectService, $location) {

    $scope.data = {};
    $scope.data.message = "Project Overview Page";

	$scope.project = {};

	$scope.getGrid = function (options) {
		return ProjectService.getGrid(options);
	};

	$scope.goToViewProject = function() {
		$location.path("/Project/" + $scope.options.selected[0].id);
	};
});

angular.module('appController').controller('ProjectAddController', function ($scope, ProjectService, SampleService, $location) {

	$scope.project = {};

	$scope.getGrid = function (options) {
		return SampleService.getGrid(options);
	};

	$scope.cancel = function() {
		$location.path("/Project");
	};


});