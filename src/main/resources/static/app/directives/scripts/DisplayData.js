'use strict';

angular.module('appDirective').directive('displayData', function(){
    function isArray(obj) {
        return Array.isArray(obj);
    }
    function isObject(obj) {
        return typeof obj === 'object';
    }
    function printArray(arr, output, tabLevel) {
        for (var val in arr) {
            if (isObject(val)) {
                loopThroughObj(val, output, ++tabLevel)
            } else if (isArray(val)) {
                printArray(val, output, tabLevel);
            } else if (typeof obj[key] !== 'function') {
                output += val + ', ';
            }
        }
        return output.trim().substr(0,output.length()-1);
    }
    function printTab(tabLevel) {
        var output = '';
        for (var idx = 0; idx < tabLevel; idx++) {
            output += '&nbsp;&nbsp;&nbsp;&nbsp;';
        }
        return output;
    }
    function loopThroughObj(obj, output, tabLevel) {
        output += '{<br/>';
        for (var key in obj) {
            output += printTab(tabLevel) + key + ': ';
            if (!obj[key]) {
                output += typeof key;
            } else {
                if (isObject(obj[key])) {
                    output = loopThroughObj(obj[key], output, ++tabLevel);
                } else if (isArray(obj[key])){
                    output = printArray(obj[key], output, tabLevel);
                } else if (typeof obj[key] !== 'function'){
                    output +=  key + ',<br/>';
                }
            }
        }
        output += '<br/>}';
        return output;
    }
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element) {
            var data = scope.$parent.data;
            var output = '';
            output = loopThroughObj(data,output,1);
            element.html(output);
        }
    }
});

//data: {
//    key: val
//    Key: val
//    Key:
//        key: {
//            Key: val
//            Key: val
//        }
//    key: [
//        val,
//        val,
//        val
//    ]
//}
