'use strict';

angular.module('appService').factory('SectionDisplay', function($location){
    var current = {
        title: '',
        color: ''
    };
    var colorKey = [
        {
            title: 'Device',
            color: ''
        },
        {
            title: 'Project',
            color: ''
        },
        {
            title: 'Sample',
            color: ''
        },
        {
            title: 'Admin Client',
            color: ''
        },
        {
            title: 'Admin Device',
            color: ''
        },
        {
            title: 'Admin Investigator',
            color: ''
        },
        {
            title: 'Admin Project',
            color: ''
        },
        {
            title: 'Admin Test Method',
            color: ''
        },
{
            title: 'Admin Unit',
            color: ''
        },
{
            title: 'Admin User',
            color: ''
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
                if (!/\d/.test(item) && item !== 'Overview') {
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
