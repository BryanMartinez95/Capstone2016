'use strict';

angular.module('appFilter').filter('dateFilter', function(){
	return function(date) {
		if(date instanceof Date && date!= null)
			return date.toDateString() + ' ' + date.toLocaleTimeString();
		else
			return date;
	}
});
