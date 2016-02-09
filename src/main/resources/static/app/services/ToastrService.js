'use strict';

angular.module('appService').factory('ToastrService', function(toastr){

    var success = function(message, title){
        toastr.success(message, title);
    };

    var info = function(message, title){
        toastr.info(message, title);
    };

    var warning = function(message, title){
        toastr.warning(message, title);
    };

    var error = function(){
        toastr.error(message, title);
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
