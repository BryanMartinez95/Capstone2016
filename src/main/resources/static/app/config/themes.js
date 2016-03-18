'use strict';

angular.module('app')
    .config(function($mdThemingProvider){
    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey')
        .accentPalette('blue');
    })
    .config(function($mdIconProvider){
        $mdIconProvider.defaultFontSet('fontawesome');
    })
;
