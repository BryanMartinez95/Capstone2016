'use strict';

/**
 * @ngdoc config
 * @memberof app
 * @params {service} $mdThemingProvider     Used to configure themes for the app
 * @description
 *  This is where all the colors for the app are defeined.
 *  For further instruction on how this theming works see: {@link https://material.angularjs.org/latest/Theming/03_configuring_a_theme|Angular Material - Configuring Themes}
 */
angular.module('app').config(
    ['$mdThemingProvider',
        function ($mdThemingProvider) {

            var customPrimary = {
                '50': '#9acffa',
                '100': '#82c4f8',
                '200': '#6ab8f7',
                '300': '#51adf6',
                '400': '#00A1DD',
                '500': '#2196F3',
                '600': '#0d8aee',
                '700': '#0c7cd5',
                '800': '#0a6ebd',
                '900': '#0960a5',
                'A100': '#b2dbfb',
                'A200': '#cae6fc',
                'A400': '#e3f2fd',
                'A700': '#ffffff'
            };
            $mdThemingProvider.definePalette('customPrimary', customPrimary);

            var customAccent = {
                '50': '#ff5e5e',
                '100': '#ff4545',
                '200': '#ff2b2b',
                '300': '#ff1212',
                '400': '#f70000',
                '500': '#0063a7',
                '600': '#c40000',
                '700': '#ab0000',
                '800': '#910000',
                '900': '#780000',
                'A100': '#ff7878',
                'A200': '#ff9191',
                'A400': '#ffabab',
                'A700': '#5e0000'
            };
            $mdThemingProvider.definePalette('customAccent', customAccent);

            // ngMaterial 'red' palette base = #F44336
            var customWarn = {
                '50': '#fbb4af',
                '100': '#f99d97',
                '200': '#f8877f',
                '300': '#f77066',
                '400': '#f55a4e',
                '500': '#F44336',
                '600': '#f32c1e',
                '700': '#ea1c0d',
                '800': '#d2190b',
                '900': '#ba160a',
                'A100': '#fccbc7',
                'A200': '#fde1df',
                'A400': '#fff8f7',
                'A700': '#a21309'
            };
            $mdThemingProvider.definePalette('customWarn', customWarn);

            // ngMaterial 'grey' palette base = #9E9E9E
            var customBackground = {
                '50': '#dedede',
                '100': '#d1d1d1',
                '200': '#c4c4c4',
                '300': '#b7b7b7',
                '400': '#ababab',
                '500': '#9E9E9E',
                '600': '#919191',
                '700': '#848484',
                '800': '#787878',
                '900': '#6b6b6b',
                'A100': '#eaeaea',
                'A200': '#f7f7f7',
                'A400': '#f1f1f1',
                'A700': '#ffffff'
            };
            $mdThemingProvider.definePalette('customBackground', customBackground);

            $mdThemingProvider.theme('default')
                .primaryPalette('customPrimary', {
                    'default': '400',
                    'hue-1': '200',
                    'hue-2': 'A700', // Top nav
                    'hue-3': '700'
                })
                .accentPalette('customAccent', {
                    'hue-1': '500',
                    'hue-2': '500',
                    'hue-3': '500',
                    'default': '500'
                })
                .warnPalette('customWarn')
                .backgroundPalette('customBackground', {
                    'default': 'A400', // Background
                    'hue-1': 'A700' // Sidenav
                });

            $mdThemingProvider.theme('success')
                .primaryPalette('green')
                .backgroundPalette('green');

            $mdThemingProvider.theme('success-toast');
            $mdThemingProvider.theme('error-toast');
        }]);
    
