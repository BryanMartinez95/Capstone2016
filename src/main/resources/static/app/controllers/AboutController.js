'use strict';

angular.module('app').controller('AboutController', function SampleController($scope, $location, SingleSelect){
    $scope.directives =  [
            {
                "id": "button",
                "title": "Button",
                "description": "A standard button.",
                "code": {
                    "script": "app/directives/scripts/Button.js",
                    "html": "app/directives/templates/button.html",
                    "sample": "app/directives/samples/button-sample.html"
                },
                "restrictions": ["Element"],
                "information": [
                    {
                        "name": "text",
                        "type": "string",
                        "default": "\"\"",
                        "description": "The text that appears on the button."
                    },
                    {
                        "name": "size",
                        "type": "integer",
                        "default": "200",
                        "description": "The size of the button"
                    },
                    {
                        "name": "disabled",
                        "type": "boolean",
                        "default": false,
                        "description": "If the button is disabled"
                    },
                    {
                        "name": "action",
                        "type": "function",
                        "default": "This is required.",
                        "description": "The action that should take place when the button is clicked."
                    },
                    {
                        "name": "parentForm",
                        "type": "string",
                        "default": "This is required.",
                        "description": "This id of the form."
                    },
                    {
                        "name": "formAction",
                        "type": "string",
                        "default": "This is required.",
                        "description": "The url the form will be sent to."
                    },
                    {
                        "name": "formMethod",
                        "type": "string",
                        "default": "POST",
                        "description": "How the data should be sent to to server. Possibilities are: <ul><li>GET</li><li>POST</li></ul>"
                    }
                ]
            },
            {
                "id": "date-picker",
                "title": "Date Picker",
                "description": "An input box that will be used to pick a date.<br>Has a pop-up calendar to help pick date and time; it the time is required.",
                "code": {
                    "script": "",
                    "html": "",
                    "sample": ""
                },
                "restrictions": ["Element"],
                "information": [
                    {
                        "name": ".title",
                        "type": "string",
                        "default": "\"\"",
                        "description": "Text that appears above the input box"
                    },
                    {
                        "name": ".value",
                        "type": "object",
                        "default": "This field is required",
                        "description": "The model value that will hold the data in this input"
                    },
                    {
                        "name": ".size",
                        "type": "integer",
                        "default": "200",
                        "description": "The size of the input box, including any add-ons"
                    }, {
                        "name": ".readOnly",
                        "type": "boolean",
                        "default": false,
                        "description": "If the input box is disabled"
                    },
                    {
                        "name": ".textAlign",
                        "type": "string",
                        "default": "center",
                        "description": "The text alignment inside the input box"
                    },
                    {
                        "name": ".includeTime",
                        "type": "boolean",
                        "default": false,
                        "description": "If the date requires a time to be stored as well."
                    },
                    {
                        "name": ".required",
                        "type": "boolean",
                        "default": false,
                        "description": "If the field is required."
                    }
                ]
            },
            {
                "id": "grid",
                "title": "Grid",
                "description": "A component to display a set of data in a table format.",
                "code": {
                    "script": "app/directives/scripts/grid.js",
                    "html": "app/directives/templates/grid.html",
                    "sample": "app/directives/samples/grid-sample.html"
                },
                "restrictions": ["Element"],
                "information": [
                    {
                        "name": "options",
                        "type": "object",
                        "default": "Required",
                        "description": "Takes in an object that has 2 attributes, rowData and columnDefs. rowData contains the data in the table and columnDefs contains the column headers."
                    }
                ]
            },
            {
                "id": "modal",
                "title": "Modal",
                "description": "A pop-up window that will appear blocking out the contents behind it.",
                "code": {
                    "script": "",
                    "html": "",
                    "sample": ""
                },

                "restrictions": ["Element"],
                "information": [
                    {
                        "name": ".priority",
                        "type": "boolean",
                        "default": true,
                        "description": "If the user can click on the grey area behind the pop-up to close the modal."
                    }]
            },
            {
                "id": "multi-select",
                "title": "Multi Select",
                "description": "A drop down box used to select multiple items.",
                "code": {
                    "script": "app/directives/scripts/MultiSelect.js",
                    "html": "app/directives/templates/multi-select.html",
                    "sample": "app/directives/samples/multi-select-sample.html"
                },

                "restrictions": ["Element"],
                "information": [
                    {
                        "name": "options",
                        "type": "array",
                        "default": "This field is required.",
                        "description": "The objects used to populate the drop down menu. Objects are expected to look like:<br><code>{options:[{id:\"UUID\",<br>display:\"text to display\"}]}"
                    },
                    {
                        "name": "value",
                        "type": "object",
                        "default": "This field is required.",
                        "description": "The model object that will hold the selected value/id in the directive."
                    },
                    {
                        "name": "title",
                        "type": "string",
                        "default": "\"\"",
                        "description": "The text that appears above the directive."
                    },
                    {
                        "name": "required",
                        "type": "boolean",
                        "default": false,
                        "description": "If the directive is required."
                    },
                    {
                        "name": "size",
                        "type": "integer",
                        "default": 200,
                        "description": "The width of the directive measured in pixels."
                    }
                ]
            },
            {
                "id": "numberpicker",
                "title": "Number Picker",
                "description": "An input box used to communicate a numeric value from the client to the server",
                "code": {
                    "script": "app/directives/scripts/NumberPicker.js",
                    "html": "app/directives/templates/number-picker.html",
                    "sample": "app/directives/samples/number-picker-sample.html"
                },
                "restrictions": ["Element"],
                "information": [
                    {
                        "name": ".title",
                        "type": "string",
                        "default": "\"\"",
                        "description": "Text that appears above the input box"
                    },
                    {
                        "name": ".value",
                        "type": "object",
                        "default": "This field is required",
                        "description": "The model value that will hold the data in this input"
                    },
                    {
                        "name": ".size",
                        "type": "integer",
                        "default": "200",
                        "description": "The size of the input box, including any add-ons"
                    },
                    {
                        "name": ".symbol",
                        "type": "string",
                        "default": "\"\"",
                        "description": "The symbol that should be displayed, if needed"
                    },
                    {
                        "name": ".symbolLeft",
                        "type": "boolean",
                        "default": false,
                        "description": "If the symbol should appear on the left side of the input box"
                    },
                    {
                        "name": ".placeholder",
                        "type": "string",
                        "default": ".title",
                        "description": "Temporary text to appear inside the input box. Default is the value provided to .title"
                    },
                    {
                        "name": ".readOnly",
                        "type": "boolean",
                        "default": false,
                        "description": "If the input box is disabled"
                    },
                    {
                        "name": ".textAlign",
                        "type": "string",
                        "default": "center",
                        "description": "The text alignment inside the input box"
                    },
                    {
                        "name": ".required",
                        "type": "boolean",
                        "default": false,
                        "description": "If the field is required."
                    }
                ]
            },
            {
                "id": "text-box",
                "title": "Text Box",
                "description": "A general text box used to enter simple text.",
                "code": {
                    "script": "app/directives/scripts/Textbox.js",
                    "html": "app/directives/templates/textbox.html",
                    "sample": "app/directives/samples/textbox-sample.html"
                },
                "restrictions": ["Element"],
                "information": [
                    {
                        "name": "title",
                        "type": "string",
                        "default": "\"\"",
                        "description": "Text that appears above the input box"
                    },
                    {
                        "name": "value",
                        "type": "object",
                        "default": "This field is required",
                        "description": "The model value that will hold the data in this input"
                    },
                    {
                        "name": "size",
                        "type": "integer",
                        "default": "200",
                        "description": "The size of the input box, including any add-ons"
                    },
                    {
                        "name": "type",
                        "type": "string",
                        "default": "text",
                        "description": "Specify the type of the input box. Possible uses are:<ul><li>text</li><li>email</li><li>password</li></ul>"
                    },
                    {
                        "name": "required",
                        "type": "boolean",
                        "default": false,
                        "description": "If the field is required."
                    },
                    {
                        "name": "enabled",
                        "type": "boolean",
                        "default": false,
                        "description": "If the field is disabled."
                    },
                    {
                        "name": "pattern",
                        "type": "string",
                        "default": "\"\"",
                        "description": "Regex pattern the data should follow."
                    }
                ]
            },
            {
                "id": "text-area",
                "title": "Text Area",
                "description": "A text input box used to display large amounts of text. Has the option to be rich text as well.",
                "code": {
                    "script": "app/directives/scripts/Textarea.js",
                    "html": "app/directives/templates/textarea.html",
                    "sample": "app/directives/samples/textarea-sample.html"
                },
                "restrictions": ["Element"],
                "information": [
                    {
                        "name": "title",
                        "type": "string",
                        "default": "\"\"",
                        "description": "Text that appears above the input box"
                    },
                    {
                        "name": "value",
                        "type": "object",
                        "default": "This field is required",
                        "description": "The model value that will hold the data in this input"
                    },
                    {
                        "name": "size",
                        "type": "integer",
                        "default": "200",
                        "description": "The size of the input box, including any add-ons"
                    },
                    {
                        "name": "required",
                        "type": "boolean",
                        "default": false,
                        "description": "If the field is required."
                    },
                    {
                        "name": "enabled",
                        "type": "boolean",
                        "default": false,
                        "description": "If the field is disabled."
                    },
                    {
                        "name": "rows",
                        "type": "integer",
                        "default": 3,
                        "description": "The default number of rows that should be displayed. This affects the height of the component."
                    },
                    {
                        "name": "cols",
                        "type": "integer",
                        "default": 40,
                        "description": "The default number of columns that should be displayed. This affects the width of the component."
                    },
                    {
                        "name": "richText",
                        "type": "boolean",
                        "default": true,
                        "description": "Specify if the component should have a rich text editor on it."
                    }
                ]
            },
            {
                "id": "toggle",
                "title": "Toggle",
                "description": "asd",
                "code": {
                    "script": "",
                    "html": "",
                    "sample": ""
                },
                "restrictions": ["Element"],
                "information": [
                    {
                        "name": ".title",
                        "type": "string",
                        "default": "\"\"",
                        "description": "Text that appears above the input box"
                    },
                    {
                        "name": ".value",
                        "type": "object",
                        "default": "This field is required",
                        "description": "The model value that will hold the data in this input"
                    },
                    {
                        "name": ".size",
                        "type": "integer",
                        "default": "200",
                        "description": "The size of the input box, including any add-ons"
                    },
                    {
                        "name": ".required",
                        "type": "boolean",
                        "default": false,
                        "description": "If the field is required."
                    },
                    {
                        "name": ".readOnly",
                        "type": "boolean",
                        "default": false,
                        "description": "If the field is disabled."
                    },
                    {
                        "name": ".true",
                        "type": "string",
                        "default": "True",
                        "description": "The text that should appear for value the 'true' value."
                    },
                    {
                        "name": ".false",
                        "type": "string",
                        "default": "False",
                        "description": "The text that should appear for value the 'false' value."
                    }
                ]
            },
            {
                "id": "single-select",
                "title": "Single Select",
                "description": "A drop down box used to select a single item.",
                "code": {
                    "script": "app/directives/scripts/SingleSelect.js",
                    "html": "app/directives/templates/single-select.html",
                    "sample": "app/directives/samples/single-select-sample.html"
                },
                "restrictions": ["Element"],
                "information": [
                    {
                        "name": "options",
                        "type": "array",
                        "default": "This field is required.",
                        "description": "The objects used to populate the drop down menu. Objects are expected to look like:<br><code>{options:[{id:\"UUID\",<br>display:\"text to display\"}]}"
                    },
                    {
                        "name": "value",
                        "type": "object",
                        "default": "This field is required.",
                        "description": "The model object that will hold the selected value/id in the directive."
                    },
                    {
                        "name": "title",
                        "type": "string",
                        "default": "\"\"",
                        "description": "The text that appears above the directive."
                    },
                    {
                        "name": "required",
                        "type": "boolean",
                        "default": false,
                        "description": "If the directive is required."
                    },
                    {
                        "name": "size",
                        "type": "integer",
                        "default": 200,
                        "description": "The width of the directive measured in pixels."
                    }
                ]
            }
        ];
    $scope.linkTo = function(id) {
        $location.url('/#' + id);
    };

    var model = {};
    model.sampleNumber = 0;
    model.sampleText = "Cameron";
    model.sampleBoolean = true;
    model.options = SingleSelect.Status;
    model.selectedItem = {};
    model.selectedItemList = [];

    var status = [];
    for (var s in SingleSelect.Status) {
        status.push(s)
    }
    model.ptions = status;

    $scope.model = model;
    $scope.buttonClick = function(){
        alert("Button clicked");
    };
    $scope.$watch('model', function(change){
        //console.log(change);
    });
    // To access the parent scope
    $scope.test = $scope.$parent.test;
});
