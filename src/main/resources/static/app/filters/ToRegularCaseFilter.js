'use strict';

angular.module('appFilter').filter('toRegularCase', function(){
    return function(str) {

        if( str == null )
            return null;
        else if( typeof str === "string" || str instanceof String)
        {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
                return index == 0 ? letter.toUpperCase() : letter.toLowerCase();
            }).replace(/\s+/g, '');
        }
        else if( str.name != null )
            return str.name;
        else return str;
    }
});
