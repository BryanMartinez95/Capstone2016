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
    .config(function ($mdThemingProvider) {
        var theme = 'blue-grey';
        var accent = 'red';
        $mdThemingProvider.theme('default')
            .primaryPalette(theme)
            .accentPalette(accent);

        /**************************************
        // ngMaterial 'blue-grey' palette base = #37474F
        var customPrimary = {
            '50': '#6c8a99',
            // '100': '#617d8b',
            '100': '#f1f1f1',
            '200': '#56707c',
            '300': '#4c626d',
            '400': '#41545e',
            '500': '#37474F',
            '600': '#2d3940',
            '700': '#222c31',
            '800': '#181e22',
            '900': '#0d1113',
            'A100': '#7c96a3',
            'A200': '#8ba2ae',
            'A400': '#9aaeb8',
            'A700': '#ffffff'
        };
        $mdThemingProvider.definePalette('customPrimary', customPrimary);

        // palette base = #775555
        var customAccent = {
            '50': '#b59797',
            '100': '#aa8888',
            '200': '#9f7979',
            '300': '#956a6a',
            '400': '#866060',
            '500': '#775555',
            '600': '#684a4a',
            '700': '#594040',
            '800': '#4a3535',
            '900': '#3b2b2b',
            'A100': '#bfa6a6',
            'A200': '#cab5b5',
            'A400': '#d4c4c4',
            'A700': '#2d2020'
        };
        $mdThemingProvider.definePalette('customAccent', customAccent);

        // Do not use
        var customWarn = {
            '50': '#ffb280',
            '100': '#ffa266',
            '200': '#ff934d',
            '300': '#ff8333',
            '400': '#ff741a',
            '500': '#ff6400',
            '600': '#e65a00',
            '700': '#cc5000',
            '800': '#b34600',
            '900': '#993c00',
            'A100': '#ffc199',
            'A200': '#ffd1b3',
            'A400': '#ffe0cc',
            'A700': '#803200'
        };
        $mdThemingProvider.definePalette('customWarn', customWarn);

        // Do not use
        var customBackground = {
            '50': '#737373',
            '100': '#666666',
            '200': '#595959',
            '300': '#4d4d4d',
            '400': '#404040',
            '500': '#333',
            '600': '#262626',
            '700': '#1a1a1a',
            '800': '#0d0d0d',
            '900': '#000000',
            'A100': '#808080',
            'A200': '#8c8c8c',
            'A400': '#eeeeee',
            'A700': '#ffffff'
        };
        $mdThemingProvider.definePalette('customBackground', customBackground);

        $mdThemingProvider.theme('default')
            .primaryPalette('customPrimary', {
                'default': '400',
                'hue-1': '200',
                'hue-2': '50', // Top nav
                'hue-3': '700'
            })
            .accentPalette('customAccent')
        // .warnPalette('customWarn')
        .backgroundPalette('customPrimary', {
            'default': 'A700', // Background
            'hue-1': '100' // Sidenav
        })
        ******************************************/

        $mdThemingProvider.theme('success')
            .primaryPalette('green')
            .backgroundPalette('green')

    });
    
