'use strict';

angular.module('appDirective').directive('saitListCollection', function(){
    this.data = {};
    this.data.rowRoute = '';
    this.data.rowTemplate = '<div class="row"><div class=""col-md-12 list-collection-item"><div ng-include="' + data.rowRoute + '"></div></div></div>';
    /**
     * Take the number and convert to column size class
     * @param colSize
     * @returns {string}
     */
    function convertToColumnClass(colSize) {
        return 'col-md-' + colSize;
    }
    /**
     * Append styling to the object being applied to a ngStyle attribute on a directive.
     * @param {[]} newStyle - Array of all the new styles to be appended to the current styling.
     * @param {object} [currentStyle] - Object containing all the existing styling.
     * @return {object} The new object containing all the old and new styling.
     */
    function appendStyling(newStyle, currentStyle){
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
    }
    function addRow() {

    }
    return {
        restrict: 'E',
        templateUrl: 'app/directives/templates/list-collection-rows.html',
        scope: {
            value: '='
        },
        transclude: {
            header: '?saitListCollectionHeader',
            columns: '?saitListCollectionColumns'
        },
        link: function(scope, element, attrs) {
            var params = attrs.params;
            var subsection = attrs.params.subsection || false;
            var title = attrs.params.addButtonTitle || '';
            data.rowRoute = attrs.params.pathToFields;



            scope.subsection = subsection;
            scope.addTitle = title;
            scope.addRow = addRow();
        }
    }
});

/**
 * params:
 *  columns = Array of column spans. Eg [3, 4, 2, 1, auto]
 *      - For the time being all columns added up must be <= 12.
 *      - If less than 12 then 'auto' must be the last field;
 *  subsection = If there is a collapsible body
 *  addButtonTitle = Text to display on the Add Button
 *  pathToFields = The url to the list collection fields.
 *      - eg 'app/views/list-collection-rows/sample-lc.html'
 */
