'use strict';

/**
 * @ngdoc factory
 * @memberof appModel
 * @description
 *  A global record of all icons used in the app
 */
angular.module('appModel').factory('Icons', function(){
    
    /**
     * @property {Object} icons The icons used throughout the app
     */
    var icons = {
        save: 'fa fa-floppy-o',
        cancel: 'fa fa-ban',
        add: 'fa fa-plus',
        view: 'fa fa-eye',
        report: 'fa fa-file-pdf-o',
        deselect: 'fa fa-times',
        exportData: 'fa fa-share',
        sample: 'fa fa-flask',
        delete: 'fa fa-trash',
        back: 'fa fa-arrow-left',
        assign: 'fa fa-paperclip',
        project: 'fa fa-clipboard'
    };
    
    return {
        getIcons: getIcons
    };

    /**
     * Get all the icons
     * 
     * @public
     * @function getIcons
     * @mmeberof Icons
     * @returns {Object}
     */
    function getIcons() {
        return icons;
    }
});
