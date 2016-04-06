'use strict';

/**
 * @ngdoc factory
 * @memberof appService
 * @name ExportService
 * @param {service} $window     A service to access the properties of the browser window
 * @description
 *  A service used to generate all the required information or convert JSON data into a CSV format for exporting
 */
angular.module('appService').factory('ExportService', function ($window) {

    return {
        exportData: exportData
    };

    /**
     * Convert a list of objects in JSON to CSV format
     * @param {Object[]}    json        The list of objects to convert
     * @returns {Array}    The CSV formatted version of the JSON list
     */
    function listOfObjectsToCsv(json) {
        var header = Object.keys(json[0]);
        var csv = json.map(function (row) {
                return objectToCsv(row);
            });
        csv.unshift(header);
        return csv;
    }

    /**
     * Convert a single JSON object to CSV format
     * @param {Object}      json        The JSON object to be converted
     * @param {boolean}     newLine     If the object should print on a new line
     * @returns {Array}    The CSV formmatted version of the JSON object
     */
    function objectToCsv(json) {
        var lists = [];
        var objects = [];
        var csv = [];
        var index = 0;
        for (var key in json) {
            var rtn = '';

            if (typeof json[key] === 'object') {
                objects.push(json[key]);
            } else {
                rtn = JSON.stringify(json[key] || '');
            }
            if (json.length === index + 1) {
                csv.push(rtn);
                var lo = listOfObjectsToCsv(objects, false);
                var ll = listOfObjectsToCsv(lists, false);
                for (var idx in lo) {
                    csv.push(lo[idx])
                }
                for (var idx in ll){
                    csv.push(ll[idx])
                }
            } else {
                csv.push(rtn);
            }
        }

        return csv;
    }

    /**
     * Create the unique url to launch the file download
     * @param {string}      contents     The contents of the file
     * @returns {string}                 The unique url for the export
     */
    function generateUrl(json) {
        var contents = listOfObjectsToCsv(json);
        var blob = new Blob([contents], {type: 'text/csv'});
        var url = $window.URL || $window.webkitURL;

        return url.createObjectURL(blob);
    }

    /**
     * Create a generic default file name using today's date
     * @returns {string}
     */
    function createDefaultFileName() {
        var d = new Date();
        return 'Export Data ' + d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + '.csv';
    }

    /**
     * Creates a CSV formatted file from the supplied JSON data.
     * After the file is created, this function will also launch
     * a download window in the browser.
     * @param {Object|string} json The data in JSON format
     */
    function exportData(json) {
        if (typeof json === 'string') {
            json = JSON.parse(json);
        }
        var csv = listOfObjectsToCsv(json);
        var name = createDefaultFileName();

        var csvContent = 'data:text/csv;charset=utf-8,';
        csv.forEach(function(innerArray, index){
            var dataString = innerArray.join(',');
            csvContent += index < csv.length ? dataString + '\n' : dataString;
        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", name);

        link.click();
    }
});
