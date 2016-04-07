'use strict';

angular.module('appService').factory('SectionDisplay', function($location, $document){
    var current = {
        title: '',
        color: ''
    };
    var colorKey = [
        {
            title: 'Device',
            color: 'red'
        },
        {
            title: 'Project',
            color: 'blue'
        },
        {
            title: 'Sample',
            color: 'smokewhite'
        },
        {
            title: 'Admin Client',
            color: 'grey'
        },
        {
            title: 'Admin Device',
            color: 'red'
        },
        {
            title: 'Admin Investigator',
            color: 'lightgrey'
        },
        {
            title: 'Admin Project',
            color: 'blue'
        },
        {
            title: 'Admin Test Method',
            color: 'green'
        },
{
            title: 'Admin Unit',
            color: 'cyan'
        },
{
            title: 'Admin User',
            color: 'purple'
        }
    ];
    update();

    return  {
        getCurrent: getCurrent,
        update: update
    };
    
    function update(clickedTitle) {
        if (current.title === '' || !clickedTitle) {
            var loc = $location.path().split('/');
            var title = '';
            loc.forEach(function(item){
                if (/\d/.test(item)) {
                    // title += '- ' + item;
                } else if (item !== 'Overview'){
                    title += item + ' ';
                }
            });
            current.title = title.trim();
        } else {
            current.title = clickedTitle;
        }
        setColor();
    }
    
    function setColor() {
        colorKey.forEach(function(item){
            if (item.title === current.title) {
                current.color = item.color;
            }
        });
    }
    
    function getCurrent() {
        return current;
    }
});
