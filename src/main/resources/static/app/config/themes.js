'use strict';

/**
 * @ngdoc config
 * @memberof app
 * @params {service} $mdThemingProvider     Used to configure themes for the app
 * @description
 *  This is where all the colors for the app are defeined.
 *  For further instruction on how this theming works see: {@link https://material.angularjs.org/latest/Theming/03_configuring_a_theme|Angular Material - Configuring Themes}
 */
angular.module('app')
    .config(function($mdThemingProvider){
        var theme = 'blue-grey';
        var green = 'green';
        $mdThemingProvider.theme('default')
            .primaryPalette(theme)
            .accentPalette(green);
        $mdThemingProvider.theme('success')
            .primaryPalette('green')
            .accentPalette('green')
            .backgroundPalette('green')
            .warnPalette('green');
    });
    
