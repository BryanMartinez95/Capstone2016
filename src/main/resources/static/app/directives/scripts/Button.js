'use strict';

/**
 * To be tested.
 */
myApp.directive('saitButton', function Button(utils){
    return {
        restrict:'E',
        templateUrl: 'directives/templates/button.html',
        scope: {
            disabled: '='
        },
        link: function(scope, element, attrs) {
            scope.title = attrs.title || '';
            scope.action = attrs.action;

            var size = attrs.size || 200;
            var form = attrs.parentForm;
            var formAction = attrs.formaction;
            var formMethod = attrs.formmethod;

            element.attr('form', form);
            element.attr('formaction', formAction);
            element.attr('formmethod', formMethod);
            /**
             * Contains all the styles being applied dynamically to the directive.
             * All new entries must conform to a [key,value] format.
             * @type {*[]}
             */
            var styles = ['width',size+'px'];
            scope.width = utils.appendStyling(styles,scope.width);
        }
    }
});
