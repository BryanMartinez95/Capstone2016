'use strict';

angular.module('appFilter').filter('convertCamel', function(){
   return function(text){
       var output = '';
       text.split(/(?=[A-Z])/).forEach(function(val){
           output += val.charAt(0).toUpperCase() + val.substring(1)  + ' ';
       });
       return output.trim();
   }
});
