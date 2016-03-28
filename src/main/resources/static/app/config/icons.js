'use strict';

/**
 * @ngdoc config
 * @memberof app
 * @params {servce} $mdIconProvider
 * @description
 *  Used to define the default icon set used in the app
 */
angular.module('app').config(function($mdIconProvider){
    $mdIconProvider.defaultFontSet('fa','fontawesome');
});
