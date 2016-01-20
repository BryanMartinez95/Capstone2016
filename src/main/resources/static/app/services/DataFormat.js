'use strict';

/**
 * Any data formatting that will need to be done in the Angular App will
 * be done using functions from here. Some example include:
 *  Date Formatting
 *  Object formatting
 *  Number formatting
 */
angular.module('appService').factory('format', function(validate){
    /**
     * All the months with their full name's
     * @type {string[]}
     */
    const FullMonthName = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    /**
     * All the months with their abbreviated name's
     * @type {string[]}
     */
    const AbbrMonthName = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    return {
        /**
         * Get the abbreviated copy of the date in the format 'mmm dd, yyyy'
         * @param {string} d - Date String
         * @return {string} Formatted fate
         */
        AbbrDate: function(d) {
            validate.isDateString(d);
            var date = new Date(d);
            return AbbrMonthName[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
        },
        /**
         * Get the full date in the format 'mmmm dd, yyy'
         * @param d - Date String
         * @returns {string} Formatted date
         */
        FullDate: function(d) {
            validate.isDateString(d);
            var date = new Date(d);
            return FullMonthName[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
        },
        /**
         * Get the date in the format 'mm/dd/yyyy'
         * @param d - Date String
         * @return {string} Formatted Date
         */
        NumericalDate: function(d) {
            validate.isDateString(d);
            var date = new Date(d);
            return (date.getMonth() + 1) + ' ' + date.getDate() + ', ' + date.getFullYear();
        }
   }
});