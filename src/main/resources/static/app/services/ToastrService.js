'use strict';

angular.module('appService').factory('ToastrService', function(toastr){

    var success = function(message, title){
        toastr.success(message, title, { timeOut: 1000 });
    };

    var info = function(message, title){
        toastr.info(message, title, { timeOut: 1000 });
    };

    var warning = function(message, title){
        toastr.warning(message, title, { timeOut: 1000 });
    };

    var error = function(message, title){
        toastr.error(message, title, { timeOut: 1000 });
    };

    var active = function() {
        toastr.active();
    };

    var clear = function() {
        toastr.clear();
    };
    return {
        success: success,
        info: info,
        warning: warning,
        error: error,
        numberOpen: active,
        clear: clear
    };
});
