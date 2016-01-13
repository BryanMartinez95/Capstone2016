'use strict';

/**
 * This factory is used to help validate that the data you are
 * expecting in the app is the right data type or in the correct format.
 *
 * Due to javascript between a loosely-typed language their
 * is the possibility to expect a specific data type as a parameter,
 * return object or local variable and in coding it come out to be
 * something different.
 *
 * Adding proper documentation to a function or variable will help
 * ensure that the data expected is what is actually relieved or assigned.
 * While this helps, it only works if the documentation is in place.
 * Using these functions while ensure that the data you are working
 * with in the function is exactly what is expected.
 */
angular.module('app').factory('validate', function(){
    /**
     * Variable to hold all the functions.
     * @type {{}}
     */
    var validate = {};
    /**
     * Is the object a Date.
     * @param obj Object to check.
     * @returns {boolean} If the object is a date object.
     */
    validate.isDate = function(obj) {
        return (typeof obj === Date);
    };
    /**
     * Is the object a Number.
     * @param obj Object to check.
     * @returns {boolean} If the object is a Number object.
     */
    validate.isNumber = function(obj) {
        return !isNaN(obj);
    };
    /**
     * Is the object a Float/Decimal number.
     * @param obj Object to check.
     * @returns {boolean} If the object is a Float/Decimal number.
     */
    validate.isFloat = function(obj) {
        return !isNaN(parseFloat(obj));
    };
    /**
     * Is the object an Integer.
     * @param obj Object to check.
     * @returns {boolean} If the object is an Integer Object.
     */
    validate.isInteger = function(obj) {
        return isNaN(parseInt(obj)) && !isNaN(parseFloat(obj));
    };
    /**
     * Is the object a String object.
     * @param obj Object to check.
     * @returns {boolean} If the object is a String object.
     */
    validate.isString = function(obj) {
       return typeof obj === 'string';
    };
    /**
     * Is the object an empty string. This includes just whitespace inside the string.
     * @param obj Object to check.
     * @returns {boolean} If the object is an empty string or contains only whitespace.
     */
    validate.isEmptyString = function(obj) {
        return (typeof obj === 'string') && (obj === '' && obj.match(/\s/g));
    };
    /**
     * Is the object Null.
     * @param obj Object to check.
     * @returns {boolean} If the object is null.
     */
    validate.isNull = function(obj) {
        return obj === null;
    };
    /**
     * Is the object undefined.
     * @param obj Object to check.
     * @returns {boolean} If the object is undefined.
     */
    validate.isUndefined = function(obj) {
        return obj === undefined;
    };
    /**
     * If the object is a date in string format.
     * @param obj Object to check.
     * @returns {boolean} If the string is in a valid date string format.
     */
    validate.isDateString = function(obj) {
        if (!validate.isString(obj)) {
            throw new TypeError('A string is required.');
        }
        var date = null;
        try {
            date = new Date(obj);
        } catch (e) {
            throw new SyntaxError('Invalid date string.', e);
        }
        return true;
    };

    /**
     * Return the object containing all the functions
     */
    return validate;
});
