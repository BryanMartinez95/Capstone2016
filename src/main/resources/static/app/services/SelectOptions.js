'use strict';
/**
 * Values to appear in the single and multi select directives.
 */
angular.module('app').factory('selectOptions', function(enums){
    /**
     * An object representing each item in the select boxes.
     *
     * Format is as follows:
     *   << Reference Name >> : [
     *      {
     *          value: << Item's value >>
     *          display: << "Text to appear on screen" >>
     *      }]
     */
    return {
        TeamMembers: [
            { display:"Alec",value:1 },
            { display:"Bryan", value:2 },
            { display:"Cameron", value:3 },
            { display:"Josh", value:4 }
        ],
        Status: [
            { display: enums.Status.New.display, value: enums.Status.New.value },
            { display: enums.Status.Active.display, value: enums.Status.Active.value },
            { display: enums.Status.Inactive.display, value: enums.Status.Inactive.value }
        ]
    }
});
