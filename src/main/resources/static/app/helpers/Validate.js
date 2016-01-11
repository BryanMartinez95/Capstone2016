'use strict';

myApp.factory('validate', function(){
    var validate = {};
    validate.isDate = function(d) {
        return (typeof d === Date);
    };
    validate.isNumber = function(d) {
        return !isNaN(d);
    };
    validate.isFloat = function(d) {
        return !isNaN(parseFloat(d));
    };
    validate.isInteger = function(d) {
        return isNaN(parseInt(d)) && !isNaN(parseFloat(d));
    };
    validate.isString = function(d) {
       return typeof d === 'string';
    };
    validate.isEmptyString = function(d) {
        return typeof d === 'string' && d === '' && d.match(/\s/g);
    };
    validate.isNull = function(d) {
        return d === null;
    };
    validate.isUndefined = function(d) {
        return d === undefined;
    };
    validate.isDateString = function(d) {
        if (!validate.isString(d)) {
            throw new TypeError('A string is required.');
        }
        var date = null;
        try {
            date = new Date(d);
        } catch (e) {
            throw new SyntaxError('Invalid date string.', e);
        }
        return true;
    };

    return validate;
});
