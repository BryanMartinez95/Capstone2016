'use strict';

/**
 * All the config functions for the angular application.
 */
angular.module('app').config(function(uiSelectConfig){
    /**
     * Theme options are: 'bootstrap', 'select2', 'selectize'
     * @type {string} - Theme for all single and multi select directives
     */
    uiSelectConfig.theme = 'bootstrap';
});
