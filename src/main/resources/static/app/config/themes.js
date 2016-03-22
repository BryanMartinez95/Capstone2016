'use strict';

angular.module('app')
    .config(function($mdThemingProvider){
        $mdThemingProvider.definePalette('primary', {
            '50': 'ffebee',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': 'e57373',
            '400': 'ef5350',
            '500': 'f44336',
            '600': 'e53935',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });
        /**
         * This can be used to specify which shades are accoiated with which hues
         */
        //$mdThemingProvider.theme('default')
        //    .primaryPalette('primary', {
        //        'default': '100',
        //        'hue-1': '300',
        //        'hue-2': '500',
        //        'hue-3': 'A100'
        //    });

        $mdThemingProvider.theme('default')
            .primaryPalette('grey')
            .accentPalette('blue-grey');

    })
    .config(function($mdIconProvider){
        $mdIconProvider.defaultFontSet('fa','fontawesome');
    })
;