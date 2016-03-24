'use strict';

/**
 * @ngdoc filter
 * @memberof appFilter
 * @description
 *  Convert camel cased text to space delimited capitalized lowercase text
 */
angular.module('appFilter').filter('convertCamel', function(){
   return function(text){
       var output = '';
       text.split(/(?=[A-Z])/).forEach(function(val){
           output += val.charAt(0).toUpperCase() + val.substring(1).toLowerCase()  + ' ';
       });
       return output.trim();
   }
});
