'use strict';

/**
 * All the config functions for the angular application.
 */
angular.module('app')
    .config(function(uiSelectConfig){
        /**
         * Theme options are: 'bootstrap', 'select2', 'selectize'
         * @type {string} - Theme for all single and multi select directives
         */
        uiSelectConfig.theme = 'bootstrap';
    })
    .config(function(toastrConfig){
        angular.extend(toastrConfig, {
            autoDismiss: true,
            containerId: 'toast-container',
            maxOpened: 3,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
            preventOpenDuplicates: false,
            target: 'body',
            // Toastr defaults
            allowHtml: false,
            closeButton: true,
            closeHtml: '<button>&times;</button>',
            // Timeout on hover
            extendedTimeOut: 1000,
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            timeOut: 1000,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });
    });
