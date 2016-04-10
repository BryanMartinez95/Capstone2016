'use strict';

angular.module('appService').factory('SectionDisplay', function ($location, $filter) {
    var current = '';

    update();

    return {
        getCurrent: getCurrent,
        update: update,
        clear: clear
    };

    function update(clickedTitle) {
        if (current === '' || !clickedTitle) {
            var loc = ($filter('convertCamel')($location.path())).split('/');
            var title = '';
            loc.forEach(function (item) {
                if (/\d/.test(item)) {
                    // title += '- ' + item;
                } else if (item.trim() !== 'Overview') {
                    title += item + ' ';
                }
            });
            current = title.trim() || 'Project';
        } else {
            current = clickedTitle;
        }
    }

    function getCurrent() {
        return current;
    }

    function clear() {
        current = '';
    }
});
