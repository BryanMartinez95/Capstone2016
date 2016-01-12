'use strict';

/**
 * Utility functions
 *
 * Any functions that are used to complete misc tasks for the application can be found here.
 */
myApp.factory('utils', function($resource){
    return {
        /**
         * Append styling to the object being applied to a ngStyle attribute on a directive.
         * @param {[]} newStyle - Array of all the new styles to be appended to the current styling.
         * @param {object} [currentStyle] - Object containing all the existing styling.
         * @return {object} The new object containing all the old and new styling.
         */
        appendStyling: function(newStyle, currentStyle){
            if (!currentStyle) {
                currentStyle = {};
            }
            var key = null;
            var val = null;
            for (var idx = 0; idx < newStyle.length; idx++) {
                if (idx % 2 === 0) {
                    key = newStyle[idx];
                } else {
                    val = newStyle[idx];
                }
                if (key && val) {
                    currentStyle[key] = val;
                    key = null;
                    val = null;
                }
            }
            return currentStyle;
        },
        /**
         * Clear the current styling object.
         * @param {object} style - TH object to be cleared.
         * @returns style object with no contents.
         */
        clearStyling: function(style){
            style = {};
            return style;
        },
        /**
         * Get all the data from a json file.
         * @param {url} The path to the json file.
         */
        getData: function(res) {
            return $resource(res).get();
        },
        /**
         * Convert a string of JSON to an object.
         * @param {string} json - The JSON to be converted to an object.
         * @return {object} and object representing the json data.
         */
        jsonToObj: function(json) {
            return JSON.parse(json);
        }
    }
});