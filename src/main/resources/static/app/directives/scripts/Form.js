'use strict';

angular.module('appDirective')
    .controller('SaitFormController', function($scope, $timeout, $attrs, $sce){

        $scope.form = {
            title: '',
            subtext: '',
            listCollection: false,
            body: $sce.trustAsHtml('')
        };

        this.setTitle = function(title) {
            $scope.form.title = title;
        };

        this.setBody = function(body) {
            $scope.form.body = body;
        };

        this.setSubtext = function(subtext) {
            $scope.form.subtext = subtext;
        };

        this.hasListCollection = function(lc) {
            $scope.form.listCollection = lc;
        };

        var parentCtrl, onChildRenderedCallback, childCount = 0;

        this.onChildRendered = function(callback) {
            onChildRenderedCallback = function() {
                callback();

                if (parentCtrl) {
                    $timeout(parentCtrl.notify, 0);
                }
            };

            if (!childCount) {
                $timeout(onChildRenderedCallback, 0);
            }
        };

        this.notify = function() {
            childCount--;

            if (childCount === 0 && onChildRenderedCallback) {
                onChildRenderedCallback();
            }
        };

        this.addChild = function() {
            childCount++;
        };

        this.setParent = function(value) {
            parentCtrl = value;
            parentCtrl.addChild(this);
        };
    })

    .directive('saitForm', function($compile, $sce){
    return {
        restrict: 'E',
        //templateUrl: 'app/directives/templates/form.html',
        scope: {},
        replace: true,
        controller: 'SaitFormController',
        transclude: 'element',
        compile: function(element, attrs) {
            return {
                pre: function(scope, element, attrs, thisCtrl, transclude) {

                },
                post: function(scope, element, attrs, controller, transclude) {
                    var formCtrl = controller;
                    //if (parentCtrl) {
                    //    formCtrl.setParent(parentCtrl);
                    //}

                    //var template = '<div><div id="page-title"><h2>{{title}}<span ng-if="subtext"> <small>{{subtext}}</small></span></h2></div>' +
                    //                '<div ng-if="!listCollection" class="well"><div class="row">' +
                    //                '<div class="col-md-4" style="margin-bottom: 10px" ng-repeat="field in listOfTags track by $index" ng-bind-html="field"></div>' +
                    //                '</div></div></div>';

                    var template = '<div><div id="page-title"><h2>{{form.title}}<span ng-if="subtext"> <small>{{form.subtext}}</small></span></h2></div>' +
                                    '<div ng-bind-html="form.body"></div></div>';

                    var templateContents = angular.element(template);
                    var compileTemplateContents = $compile(templateContents);

                    element.replaceWith(templateContents);
                    formCtrl.setTitle(attrs.title);

                    var clone = transclude(scope, function(clone, scope){

                    });

                    formCtrl.onChildRendered(function(){
                        formCtrl.setBody($sce.trustAsHtml(clone.html()));
                        compileTemplateContents(scope);
                    });
                }
            }
        }
    }

});
