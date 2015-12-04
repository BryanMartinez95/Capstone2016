!function () {
    "use strict";
    function e(e) {
        e.state("app.ui_theme_colors", {
            url: "/ui/theme-colors",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/theme-colors/theme-colors.html",
                    controller: "ThemeColorsController as vm"
                }
            }
        })
    }

    angular.module("app.ui.theme-colors", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e, t, a, i, n) {
        function o() {
            i.putObject("customTheme", l.theme), i.put("selectedTheme", "custom"), n.location.reload()
        }

        function s() {
            t.hide()
        }

        var l = this;
        l.palettes = e.getRegisteredPalettes(), l.themes = e.getRegisteredThemes(), delete l.palettes.grey[1e3], l.rgba = a.rgba, l.setTheme = o, l.closeDialog = s, l.theme = l.themes.custom ? l.themes.custom.colors : angular.copy(l.themes["default"].colors)
    }

    angular.module("app.ui.theme-colors").controller("CustomThemeDialogController", e), e.$inject = ["fuseTheming", "$mdDialog", "fuseGenerator", "$cookies", "$window"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_simple_tabbed", {
            url: "/ui/layouts/simple/tabbed",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/simple/tabbed/tabbed.html",
                    controller: "SimpleTabbedController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.simple.tabbed", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.ui.layouts.simple.tabbed").controller("SimpleTabbedController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_simple_right-sidenav-ii", {
            url: "/ui/layouts/simple/right-sidenav-ii",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/simple/right-sidenav-ii/right-sidenav-ii.html",
                    controller: "SimpleRightSidenavIIController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.simple.right-sidenav-ii", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e(t).toggle()
        }

        var a = this;
        a.toggleSidenav = t
    }

    angular.module("app.ui.layouts.simple.right-sidenav-ii").controller("SimpleRightSidenavIIController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_simple_right-sidenav", {
            url: "/ui/layouts/simple/right-sidenav",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/simple/right-sidenav/right-sidenav.html",
                    controller: "SimpleRightSidenavController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.simple.right-sidenav", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e(t).toggle()
        }

        var a = this;
        a.toggleSidenav = t
    }

    angular.module("app.ui.layouts.simple.right-sidenav").controller("SimpleRightSidenavController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_simple_left-sidenav-ii", {
            url: "/ui/layouts/simple/left-sidenav-ii",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/simple/left-sidenav-ii/left-sidenav-ii.html",
                    controller: "SimpleLeftSidenavIIController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.simple.left-sidenav-ii", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e(t).toggle()
        }

        var a = this;
        a.toggleSidenav = t
    }

    angular.module("app.ui.layouts.simple.left-sidenav-ii").controller("SimpleLeftSidenavIIController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_simple_left-sidenav", {
            url: "/ui/layouts/simple/left-sidenav",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/simple/left-sidenav/left-sidenav.html",
                    controller: "SimpleLeftSidenavController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.simple.left-sidenav", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e(t).toggle()
        }

        var a = this;
        a.toggleSidenav = t
    }

    angular.module("app.ui.layouts.simple.left-sidenav").controller("SimpleLeftSidenavController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_simple_fullwidth", {
            url: "/ui/layouts/simple/fullwidth",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/simple/fullwidth/fullwidth.html",
                    controller: "SimpleFullwidthController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.simple.fullwidth", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.ui.layouts.simple.fullwidth").controller("SimpleFullwidthController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_carded_right-sidenav-ii", {
            url: "/ui/layouts/carded/right-sidenav-ii",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/carded/right-sidenav-ii/right-sidenav-ii.html",
                    controller: "CardedRightSidenavIIController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.carded.right-sidenav-ii", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e(t).toggle()
        }

        var a = this;
        a.toggleSidenav = t
    }

    angular.module("app.ui.layouts.carded.right-sidenav-ii").controller("CardedRightSidenavIIController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_carded_right-sidenav", {
            url: "/ui/layouts/carded/right-sidenav",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/carded/right-sidenav/right-sidenav.html",
                    controller: "CardedRightSidenavController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.carded.right-sidenav", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e(t).toggle()
        }

        var a = this;
        a.toggleSidenav = t
    }

    angular.module("app.ui.layouts.carded.right-sidenav").controller("CardedRightSidenavController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_carded_left-sidenav-ii", {
            url: "/ui/layouts/carded/left-sidenav-ii",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/carded/left-sidenav-ii/left-sidenav-ii.html",
                    controller: "CardedLeftSidenavIIController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.carded.left-sidenav-ii", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e(t).toggle()
        }

        var a = this;
        a.toggleSidenav = t
    }

    angular.module("app.ui.layouts.carded.left-sidenav-ii").controller("CardedLeftSidenavIIController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_carded_left-sidenav", {
            url: "/ui/layouts/carded/left-sidenav",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/carded/left-sidenav/left-sidenav.html",
                    controller: "CardedLeftSidenavController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.carded.left-sidenav", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e(t).toggle()
        }

        var a = this;
        a.toggleSidenav = t
    }

    angular.module("app.ui.layouts.carded.left-sidenav").controller("CardedLeftSidenavController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_carded_fullwidth-ii", {
            url: "/ui/layouts/carded/fullwidth-ii",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/carded/fullwidth-ii/fullwidth-ii.html",
                    controller: "CardedFullwidthIIController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.carded.fullwidth-ii", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.ui.layouts.carded.fullwidth-ii").controller("CardedFullwidthIIController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_carded_fullwidth", {
            url: "/ui/layouts/carded/fullwidth",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/carded/fullwidth/fullwidth.html",
                    controller: "CardedFullwidthController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.carded.fullwidth", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.ui.layouts.carded.fullwidth").controller("CardedFullwidthController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_inputs_switch", {
            url: "/components/elements/inputs/switch",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/inputs/switch/switch.html",
                    controller: "SwitchController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.inputs.switch", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e["switch"] = !0
    }

    angular.module("app.components.elements.inputs.switch").controller("SwitchController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_inputs_slider", {
            url: "/components/elements/inputs/slider",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/inputs/slider/slider.html",
                    controller: "SliderController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.inputs.slider", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.sliderValue = 125
    }

    angular.module("app.components.elements.inputs.slider").controller("SliderController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_inputs_select", {
            url: "/components/elements/inputs/select",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/inputs/select/select.html",
                    controller: "SelectController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.inputs.select", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.userState = "", e.states = "AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY".split(" ").map(function (e) {
            return {abbrev: e}
        })
    }

    angular.module("app.components.elements.inputs.select").controller("SelectController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_inputs_radio", {
            url: "/components/elements/inputs/radio",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/inputs/radio/radio.html",
                    controller: "RadioController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.inputs.radio", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.groupValue = "Apple"
    }

    angular.module("app.components.elements.inputs.radio").controller("RadioController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_inputs_fields", {
            url: "/components/elements/inputs/fields",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/inputs/fields/fields.html",
                    controller: "FieldsController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.inputs.fields", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.user = {
            title: "Developer",
            email: "ipsum@lorem.com",
            company: "Google",
            biography: "Loves kittens, snowboarding, and can type at 130 WPM.",
            rate: 20
        }
    }

    angular.module("app.components.elements.inputs.fields").controller("FieldsController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_inputs_checkbox", {
            url: "/components/elements/inputs/checkbox",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/inputs/checkbox/checkbox.html",
                    controller: "CheckboxController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.inputs.checkbox", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.checkboxValue = !0
    }

    angular.module("app.components.elements.inputs.checkbox").controller("CheckboxController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_inputs_chips", {
            url: "/components/elements/inputs/chips",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/inputs/chips/chips.html",
                    controller: "ChipsController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.inputs.chips", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.tags = []
    }

    angular.module("app.components.elements.inputs.chips").controller("ChipsController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_inputs_autocomplete", {
            url: "/components/elements/inputs/autocomplete",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/inputs/autocomplete/autocomplete.html",
                    controller: "AutocompleteController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.inputs.autocomplete", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            var e = "Alabama,Alaska,Arizona,Arkansas,California,Colorado,Connecticut,Delaware,Florida,Georgia,Hawaii,Idaho,Illinois,Indiana,Iowa,Kansas,Kentucky,Louisiana,Maine,Maryland,Massachusetts,Michigan,Minnesota,Mississippi,Missouri,Montana,Nebraska,Nevada,New Hampshire,New Jersey,New Mexico,New York,North Carolina,North Dakota,Ohio,Oklahoma,Oregon,Pennsylvania,Rhode Island,South Carolina,South Dakota,Tennessee,Texas,Utah,Vermont,Virginia,Washington,West Virginia,Wisconsin,Wyoming";
            return e.split(",").map(function (e) {
                return {value: e.toLowerCase(), display: e}
            })
        }

        function a(e) {
            var t = e ? s.states.filter(o(e)) : s.states;
            return t
        }

        function i(t) {
            e.info("Text changed to " + t)
        }

        function n(t) {
            e.info("Item changed to " + JSON.stringify(t))
        }

        function o(e) {
            var t = angular.lowercase(e);
            return function (e) {
                return 0 === e.value.indexOf(t)
            }
        }

        var s = this;
        s.states = t(), s.querySearch = a, s.selectedItemChange = n, s.searchTextChange = i
    }

    angular.module("app.components.elements.inputs.autocomplete").controller("AutocompleteController", e), e.$inject = ["$log"]
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.to-do", {
            url: "/to-do",
            views: {"content@app": {templateUrl: "app/main/apps/todo/todo.html", controller: "TodoController as vm"}},
            resolve: {
                Tasks: ["apiResolver", function (e) {
                    return e.resolve("todo.tasks@get")
                }], Tags: ["apiResolver", function (e) {
                    return e.resolve("todo.tags@get")
                }]
            }
        }), t.addPart("app/main/apps/todo")
    }

    angular.module("app.todo", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e(e, t, a, i) {
        function n() {
            c.tasks.unshift(c.task), d()
        }

        function o() {
            for (var e = 0; e < c.tasks.length; e++)if (c.tasks[e].id === c.task.id) {
                c.tasks[e] = angular.copy(c.task);
                break
            }
            d()
        }

        function s() {
            var t = e.confirm().title("Are you sure?").content("The Task will be deleted.").ariaLabel("Delete Task").ok("Delete").cancel("Cancel").targetEvent(i);
            e.show(t).then(function () {
                for (var e = 0; e < c.tasks.length; e++)if (c.tasks[e].id === c.task.id) {
                    c.tasks[e].deleted = !0;
                    break
                }
            }, function () {
            })
        }

        function l(e) {
            var t = ["#388E3C", "#F44336", "#FF9800", "#0091EA", "#9C27B0"];
            return {name: e, label: e, color: t[Math.floor(Math.random() * t.length)]}
        }

        function d() {
            e.hide()
        }

        var c = this;
        c.title = "Edit Task", c.task = angular.copy(t), c.tasks = a, c.newTask = !1, c.task || (c.task = {
            id: "",
            title: "",
            notes: "",
            startDate: new Date,
            startDateTimeStamp: (new Date).getTime(),
            dueDate: "",
            dueDateTimeStamp: "",
            completed: !1,
            starred: !1,
            important: !1,
            deleted: !1,
            tags: []
        }, c.title = "New Task", c.newTask = !0, c.task.tags = []), c.addNewTask = n, c.saveTask = o, c.deleteTask = s, c.newTag = l, c.closeDialog = d
    }

    angular.module("app.todo").controller("TaskDialogController", e), e.$inject = ["$mdDialog", "Task", "Tasks", "event"]
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.mail", {
            url: "/mail",
            views: {"content@app": {templateUrl: "app/main/apps/mail/mail.html", controller: "MailController as vm"}},
            resolve: {
                Inbox: ["apiResolver", function (e) {
                    return e.resolve("mail.inbox@get")
                }]
            }
        }), t.addPart("app/main/apps/mail")
    }

    angular.module("app.mail", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e(e, t) {
        function a() {
            e.hide()
        }

        var i = this;
        i.form = {from: "johndoe@creapond.com"}, i.hiddenCC = !0, i.hiddenBCC = !0, angular.isDefined(t) && (i.form.to = t.from.email, i.form.subject = "RE: " + t.subject, i.form.message = "<blockquote>" + t.message + "</blockquote>"), i.closeDialog = a
    }

    angular.module("app.mail").controller("ComposeDialogController", e), e.$inject = ["$mdDialog", "selectedMail"]
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.calendar", {
            url: "/calendar",
            views: {
                "content@app": {
                    templateUrl: "app/main/apps/calendar/calendar.html",
                    controller: "CalendarController as vm"
                }
            }
        }), t.addPart("app/main/apps/calendar")
    }

    angular.module("app.calendar", ["ui.calendar"]).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e(e, t, a, i) {
        function n() {
            e.hide()
        }

        function o(e) {
            a("edit", e, !1, !1, i)
        }

        var s = this;
        s.calendarEvent = t, s.editEvent = o, s.closeDialog = n
    }

    angular.module("app.calendar").controller("EventDetailDialogController", e), e.$inject = ["$mdDialog", "calendarEvent", "showEventFormDialog", "event"]
}(), function () {
    "use strict";
    function e(e, t) {
        function a() {
            o.dialogTitle = "add" === o.dialogData.type ? "Add Event" : "Edit Event", o.dialogData.calendarEvent ? (o.calendarEvent = angular.copy(o.dialogData.calendarEvent), moment.isMoment(o.calendarEvent.start) && (o.calendarEvent.start = o.calendarEvent.start.toDate()), moment.isMoment(o.calendarEvent.end) && (o.calendarEvent.end = o.calendarEvent.end.toDate())) : (moment.isMoment(o.dialogData.start) && (o.dialogData.start = o.dialogData.start.toDate()), moment.isMoment(o.dialogData.end) && (o.dialogData.end = o.dialogData.end.toDate()), o.calendarEvent = {
                start: o.dialogData.start,
                end: o.dialogData.end,
                notifications: []
            })
        }

        function i() {
            var t = {type: o.dialogData.type, calendarEvent: o.calendarEvent};
            e.hide(t)
        }

        function n() {
            e.cancel()
        }

        var o = this;
        o.dialogData = t, o.notifications = ["15 minutes before", "30 minutes before", "1 hour before"], o.saveEvent = i, o.closeDialog = n, a()
    }

    angular.module("app.calendar").controller("EventFormDialogController", e), e.$inject = ["$mdDialog", "dialogData"]
}(), function () {
    "use strict";
    function e(e) {
        e.addPart("app/sidenav/quick-panel")
    }

    angular.module("app.quick-panel", []).config(e), e.$inject = ["$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e(e, t) {
        function a(e) {
            o.chatActive = !o.chatActive, o.chatActive && (o.replyMessage = "", o.chat.contact = e, n(0))
        }

        function i() {
            "" !== o.replyMessage && (o.chat.contact.dialog || (o.chat.contact.dialog = []), o.chat.contact.dialog.push({
                who: "user",
                message: o.replyMessage,
                time: "Just now"
            }), o.replyMessage = "", n(400))
        }

        function n(e) {
            var a = document.getElementById("chat-dialog");
            t(function () {
                $(a).animate({scrollTop: a.scrollHeight}, e)
            }, 0)
        }

        var o = this;
        o.chat = {}, o.toggleChat = a, o.chatActive = !1, o.replyMessage = "", o.reply = i, e.contacts.get({}, function (e) {
            o.contacts = e.data
        })
    }

    angular.module("app.quick-panel").controller("ChatTabController", e), e.$inject = ["api", "$timeout"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.ui_layouts_blank", {
            url: "/ui/layouts/blank",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/layouts/blank/blank.html",
                    controller: "BlankController as vm"
                }
            }
        })
    }

    angular.module("app.ui.layouts.blank", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.ui.layouts.blank").controller("BlankController", e)
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_errors_error-500", {
            url: "/pages/errors/error-500",
            views: {
                "main@": {templateUrl: "app/core/layouts/basic.html"},
                "content@app.pages_errors_error-500": {
                    templateUrl: "app/main/pages/errors/500/error-500.html",
                    controller: "Error500Controller as vm"
                }
            }
        }), t.addPart("app/main/pages/errors/500")
    }

    angular.module("app.pages.error-500", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.pages.error-500").controller("Error500Controller", e)
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_errors_error-404", {
            url: "/pages/errors/error-404",
            views: {
                "main@": {templateUrl: "app/core/layouts/basic.html"},
                "content@app.pages_errors_error-404": {
                    templateUrl: "app/main/pages/errors/404/error-404.html",
                    controller: "Error404Controller as vm"
                }
            }
        }), t.addPart("app/main/pages/errors/404")
    }

    angular.module("app.pages.error-404", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.pages.error-404").controller("Error404Controller", e)
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_auth_register", {
            url: "/pages/auth/register",
            views: {
                "main@": {templateUrl: "app/core/layouts/basic.html"},
                "content@app.pages_auth_register": {
                    templateUrl: "app/main/pages/auth/register/register.html",
                    controller: "RegisterController as vm"
                }
            }
        }), t.addPart("app/main/pages/auth/register")
    }

    angular.module("app.pages.auth.register", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.pages.auth.register").controller("RegisterController", e)
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_auth_login", {
            url: "/pages/auth/login",
            views: {
                "main@": {templateUrl: "app/core/layouts/basic.html"},
                "content@app.pages_auth_login": {
                    templateUrl: "app/main/pages/auth/login/login.html",
                    controller: "LoginController as vm"
                }
            }
        }), t.addPart("app/main/pages/auth/login")
    }

    angular.module("app.pages.auth.login", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.pages.auth.login").controller("LoginController", e)
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_auth_lock", {
            url: "/pages/auth/lock",
            views: {
                "main@": {templateUrl: "app/core/layouts/basic.html"},
                "content@app.pages_auth_lock": {
                    templateUrl: "app/main/pages/auth/lock/lock.html",
                    controller: "LockController as vm"
                }
            }
        }), t.addPart("app/main/pages/auth/lock")
    }

    angular.module("app.pages.auth.lock", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.form = {userName: "Jane Doe"}
    }

    angular.module("app.pages.auth.lock").controller("LockController", e)
}(), function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_auth_forgot-password", {
            url: "/pages/auth/forgot-password",
            views: {
                "main@": {templateUrl: "app/core/layouts/basic.html"},
                "content@app.pages_auth_forgot-password": {
                    templateUrl: "app/main/pages/auth/forgot-password/forgot-password.html",
                    controller: "ForgotPasswordController as vm"
                }
            }
        }), t.addPart("app/main/pages/auth/forgot-password")
    }

    angular.module("app.pages.auth.forgot-password", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.pages.auth.forgot-password").controller("ForgotPasswordController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_tables_simple-table", {
            url: "/components/table/simple-table",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/tables/simple-table/simple-table.html",
                    controller: "SimpleTableController as vm"
                }
            },
            resolve: {
                Employees: ["apiResolver", function (e) {
                    return e.resolve("tables.employees@get")
                }]
            }
        })
    }

    angular.module("app.components.tables.simple-table", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        var t = this;
        t.employees = e.data
    }

    angular.module("app.components.tables.simple-table").controller("SimpleTableController", e), e.$inject = ["Employees"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_tables_datatable", {
            url: "/components/table/datatable",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/tables/datatable/datatable.html",
                    controller: "DatatableController as vm"
                }
            },
            resolve: {
                Employees: ["apiResolver", function (e) {
                    return e.resolve("tables.employees100@get")
                }]
            }
        })
    }

    angular.module("app.components.tables.datatable", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        var t = this;
        t.employees = e.data, t.dtOptions = {
            dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: "simple",
            autoWidth: !1,
            responsive: !0
        }
    }

    angular.module("app.components.tables.datatable").controller("DatatableController", e), e.$inject = ["Employees"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_toast", {
            url: "/components/elements/toast",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/toast/toast.html",
                    controller: "ToastController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.toast", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            e.show(e.simple().content("Simple Toast!").position("top right").hideDelay(3e3))
        }

        function a() {
            var t = e.simple().content("Action Toast!").action("OK").highlightAction(!1).position("top left");
            e.show(t).then(function () {
                alert("You clicked 'OK'.")
            })
        }

        function i() {
            e.show({controller: n, templateUrl: "toast-template.html", hideDelay: 6e3, position: "bottom right"})
        }

        function n(e, t) {
            e.closeToast = function () {
                t.hide()
            }
        }

        var o = this;
        o.showSimpleToast = t, o.showActionToast = a, o.showCustomToast = i, n.$inject = ["$scope", "$mdToast"]
    }

    angular.module("app.components.elements.toast").controller("ToastController", e), e.$inject = ["$mdToast"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_tabs", {
            url: "/components/elements/tabs",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/tabs/tabs.html",
                    controller: "TabsController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.tabs", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.components.elements.tabs").controller("TabsController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_swipe", {
            url: "/components/elements/swipe",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/swipe/swipe.html",
                    controller: "SwipeController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.swipe", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t, a) {
            console.log("asdasd"), e.show(e.alert().content("You swiped " + t + " !!").ok("Great").targetEvent(a))
        }

        var a = this;
        a.swipeAction = t
    }

    angular.module("app.components.elements.swipe").controller("SwipeController", e), e.$inject = ["$mdDialog"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_sidenav", {
            url: "/components/elements/sidenav",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/sidenav/sidenav.html",
                    controller: "SidenavController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.sidenav", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            e("left-sidenav").toggle()
        }

        function a() {
            e("left-sidenav-locked").toggle()
        }

        function i() {
            e("right-sidenav").toggle()
        }

        var n = this;
        n.toggleLeftSidenav = t, n.toggleLeftSidenavLocked = a, n.toggleRightSidenav = i
    }

    angular.module("app.components.elements.sidenav").controller("SidenavController", e), e.$inject = ["$mdSidenav"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_progress-linear", {
            url: "/components/elements/progress-linear",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/progress-linear/progress-linear.html",
                    controller: "ProgressLinearController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.progress-linear", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        var t = this;
        t.determinateValue = 33, t.determinateValue2 = 33, e(function () {
            t.determinateValue += 1, t.determinateValue2 += 1.5, t.determinateValue > 100 && (t.determinateValue = 33, t.determinateValue2 = 33)
        }, 100, 0, !0)
    }

    angular.module("app.components.elements.progress-linear").controller("ProgressLinearController", e), e.$inject = ["$interval"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_progress-circular", {
            url: "/components/elements/progress-circular",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/progress-circular/progress-circular.html",
                    controller: "ProgressCircularController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.progress-circular", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        var t = this;
        t.determinateValue = 33, e(function () {
            t.determinateValue += 1, t.determinateValue > 100 && (t.determinateValue = 33)
        }, 100, 0, !0)
    }

    angular.module("app.components.elements.progress-circular").controller("ProgressCircularController", e), e.$inject = ["$interval"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_menu_bar", {
            url: "/components/elements/menu-bar",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/menu-bar/menu-bar.html",
                    controller: "ElementMenuBarController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.menu-bar", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        return function (t) {
            if (t) {
                var a = t.split("-"), i = /Mac OS X/.test(e.navigator.userAgent), n = !i || a.length > 2 ? "+" : "", o = {
                    M: i ? "⌘" : "Ctrl",
                    A: i ? "Option" : "Alt",
                    S: "Shift"
                };
                return a.map(function (e, t) {
                    var i = t === a.length - 1;
                    return i ? e : o[e]
                }).join(n)
            }
        }
    }

    function t(e) {
        function t(t, a) {
            e.show(e.alert().title(t).content('You triggered the "' + t + '" action').ok("Great").targetEvent(a))
        }

        var a = this;
        a.sampleAction = t, a.settings = {
            printLayout: !0,
            showRuler: !0,
            showSpellingSuggestions: !0,
            presentationMode: "edit"
        }
    }

    angular.module("app.components.elements.menu-bar").filter("keyboardShortcut", e).controller("ElementMenuBarController", t), e.$inject = ["$window"], t.$inject = ["$mdDialog"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_menu", {
            url: "/components/elements/menu",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/menu/menu.html",
                    controller: "MenuController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.menu", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            n.notificationsEnabled = !n.notificationsEnabled
        }

        function a(t) {
            e.show(e.alert().title("Suddenly, a redial").content("You just called someone back. They told you the most amazing story that has ever been told. Have a cookie.").ok("That was easy"))
        }

        function i() {
        }

        var n = this;
        n.notificationsEnabled = !0, n.toggleNotifications = t, n.redial = a, n.checkVoicemail = i
    }

    angular.module("app.components.elements.menu").controller("MenuController", e), e.$inject = ["$mdDialog"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_fab-toolbar", {
            url: "/components/elements/fab-toolbar",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/fab-toolbar/fab-toolbar.html",
                    controller: "FabToolbarController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.fab-toolbar", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        var t = this;
        t.isOpen = !1, t.demo = {isOpen: !1, count: 0, selectedAlignment: "md-left"}
    }

    angular.module("app.components.elements.fab-toolbar").controller("FabToolbarController", e), e.$inject = ["$mdDialog"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_fab-speed-dial", {
            url: "/components/elements/fab-speed-dial",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/fab-speed-dial/fab-speed-dial.html",
                    controller: "FabSpeedDialController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.fab-speed-dial", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.demo = {
            topDirections: ["left", "up"],
            bottomDirections: ["down", "right"],
            isOpen: !1,
            availableModes: ["md-fling", "md-scale"],
            selectedMode: "md-fling",
            availableDirections: ["up", "down", "left", "right"],
            selectedDirection: "up"
        }
    }

    angular.module("app.components.elements.fab-speed-dial").controller("FabSpeedDialController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_dialog", {
            url: "/components/elements/dialog",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/dialog/dialog.html",
                    controller: "DialogController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.dialog", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            e.show(e.alert().parent(angular.element(document.body)).title("This is an alert title").content("You can specify some description text in here.").ariaLabel("Alert Dialog Demo").ok("Got it!").targetEvent(t))
        }

        function a(t) {
            var a = e.confirm().parent(angular.element(document.body)).title("Would you like to delete your debt?").content("All of the banks have agreed to forgive you your debts.").ariaLabel("Lucky day").ok("Please do it!").cancel("Sounds like a scam").targetEvent(t);
            e.show(a).then(function () {
                n.alert = "You decided to get rid of your debt."
            }, function () {
                n.alert = "You decided to keep your debt."
            })
        }

        function i(t) {
            e.show({
                controller: ["$scope", "$mdDialog", function (e, t) {
                    e.hide = function () {
                        t.hide()
                    }, e.cancel = function () {
                        t.cancel()
                    }, e.answer = function (e) {
                        t.hide(e)
                    }
                }],
                templateUrl: "dialog1.tmpl.html",
                parent: angular.element(document.body),
                targetEvent: t,
                clickOutsideToClose: !0
            }).then(function (e) {
                n.alert = 'You said the information was "' + e + '".'
            }, function () {
                n.alert = "You cancelled the dialog."
            })
        }

        var n = this;
        n.alert = "", n.showAdvanced = i, n.showAlert = t, n.showConfirm = a;

    }

    angular.module("app.components.elements.dialog").controller("DialogController", e), e.$inject = ["$mdDialog"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_datepicker", {
            url: "/components/elements/datepicker",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/datepicker/datepicker.html",
                    controller: "DatepickerController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.datepicker", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
        var e = this;
        e.myDate = new Date, e.minDate = new Date(e.myDate.getFullYear(), e.myDate.getMonth() - 2, e.myDate.getDate()), e.maxDate = new Date(e.myDate.getFullYear(), e.myDate.getMonth() + 2, e.myDate.getDate())
    }

    angular.module("app.components.elements.datepicker").controller("DatepickerController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_card", {
            url: "/components/elements/card",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/card/card.html",
                    controller: "CardController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.card", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.components.elements.card").controller("CardController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_buttons", {
            url: "/components/elements/buttons",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/buttons/buttons.html",
                    controller: "ButtonsController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.buttons", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e() {
    }

    angular.module("app.components.elements.buttons").controller("ButtonsController", e)
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_bottom-sheet", {
            url: "/components/elements/bottom-sheet",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/elements/bottom-sheet/bottom-sheet.html",
                    controller: "BottomSheetController as vm"
                }
            }
        })
    }

    angular.module("app.components.elements.bottom-sheet", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t(t) {
            o.alert = "", e.show({
                templateUrl: "bottom-sheet-list-template.html",
                controller: i,
                targetEvent: t,
                parent: angular.element("#app-wrapper > main > .main-content")
            }).then(function (e) {
                o.alert = e.name + " clicked!"
            })
        }

        function a(t) {
            o.alert2 = "", e.show({
                templateUrl: "bottom-sheet-grid-template.html",
                controller: n,
                targetEvent: t,
                parent: angular.element("#app-wrapper > main > .main-content")
            }).then(function (e) {
                o.alert2 = e.name + " clicked!"
            })
        }

        function i(e, t) {
            e.items = [{name: "Share", icon: "icon-share"}, {name: "Upload", icon: "icon-upload"}, {
                name: "Copy",
                icon: "icon-content-copy"
            }, {name: "Print this page", icon: "icon-printer"}], e.listItemClick = function (a) {
                var i = e.items[a];
                t.hide(i)
            }
        }

        function n(e, t) {
            e.items = [{name: "Share", icon: "icon-share"}, {name: "Upload", icon: "icon-upload"}, {
                name: "Copy",
                icon: "icon-content-copy"
            }, {name: "Print this page", icon: "icon-printer"}], e.listItemClick = function (a) {
                var i = e.items[a];
                t.hide(i)
            }
        }

        var o = this;
        o.alert = "", o.alert2 = "", o.showGridBottomSheet = a, o.showListBottomSheet = t, i.$inject = ["$scope", "$mdBottomSheet"], n.$inject = ["$scope", "$mdBottomSheet"]
    }

    angular.module("app.components.elements.bottom-sheet").controller("BottomSheetController", e), e.$inject = ["$mdBottomSheet"]
}(), function () {
    "use strict";
    function e(e) {
        e.state("app.components_charts_nvd3", {
            url: "/components/charts/nvd3",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/charts/nvd3/nvd3.html",
                    controller: "Nvd3Controller as vm"
                }
            }
        })
    }

    angular.module("app.components.charts.nvd3", []).config(e), e.$inject = ["$stateProvider"]
}(), function () {
    "use strict";
    function e(e) {
        function t() {
            for (var e = [], t = [], a = [], i = 0; 100 > i; i++)e.push({x: i, y: Math.sin(i / 10)}), t.push({
                x: i,
                y: i % 10 === 5 ? null : .25 * Math.sin(i / 10) + .5
            }), a.push({x: i, y: .5 * Math.cos(i / 10 + 2) + Math.random() / 10});
            return [{values: e, key: "Sine Wave", color: "#ff7f0e"}, {
                values: a,
                key: "Cosine Wave",
                color: "#2ca02c"
            }, {values: t, key: "Another sine wave", color: "#7777ff", area: !0}]
        }

        function a(e, t, a) {
            var i = [], n = +new Date;
            a = a || 100;
            for (var o = 1; a > o; o++) {
                i.push({x: n + 1e3 * o * 60 * 60 * 24, y: e});
                var s = Math.random(), l = 2 * t * s;
                l > t && (l -= 2 * t), e += e * l
            }
            return i
        }

        function i(e, t) {
            for (var a = [], i = ["circle", "cross", "triangle-up", "triangle-down", "diamond", "square"], n = d3.random.normal(), o = 0; e > o; o++) {
                a.push({key: "Group " + o, values: []});
                for (var s = 0; t > s; s++)a[o].values.push({x: n(), y: n(), size: Math.random(), shape: i[s % 6]})
            }
            return a
        }

        var n = this;
        n.themes = e.themes, n.lineChart = {
            options: {
                chart: {
                    type: "lineChart",
                    height: 450,
                    margin: {top: 20, right: 20, bottom: 40, left: 55},
                    x: function (e) {
                        return e.x
                    },
                    y: function (e) {
                        return e.y
                    },
                    useInteractiveGuideline: !0,
                    dispatch: {
                        stateChange: function (e) {
                        }, changeState: function (e) {
                        }, tooltipShow: function (e) {
                        }, tooltipHide: function (e) {
                        }
                    },
                    xAxis: {axisLabel: "Time (ms)"},
                    yAxis: {
                        axisLabel: "Voltage (v)", tickFormat: function (e) {
                            return d3.format(".02f")(e)
                        }, axisLabelDistance: 30
                    },
                    callback: function (e) {
                    }
                },
                title: {enable: !0, text: "Title for Line Chart"},
                subtitle: {
                    enable: !0,
                    text: "Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.",
                    css: {"text-align": "center", margin: "10px 13px 0px 7px"}
                },
                caption: {
                    enable: !0,
                    html: '<b>Figure 1.</b> Lorem ipsum dolor sit amet, at eam blandit sadipscing, <span style="text-decoration: underline;">vim adhuc sanctus disputando ex</span>, cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans.</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style="color: darkred;">Exerci graeci ad vix, elit tacimates ea duo</span>. Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, id unum oportere intellegam nec<sup>[1, <a href="https://github.com/krispo/angular-nvd3" target="_blank">2</a>, 3]</sup>.',
                    css: {"text-align": "justify", margin: "10px 13px 0px 7px"}
                }
            }, data: t()
        }, n.stackedAreaChart = {
            options: {
                chart: {
                    type: "stackedAreaChart",
                    height: 450,
                    margin: {top: 20, right: 20, bottom: 60, left: 40},
                    x: function (e) {
                        return e[0]
                    },
                    y: function (e) {
                        return e[1]
                    },
                    useVoronoi: !1,
                    clipEdge: !0,
                    transitionDuration: 500,
                    useInteractiveGuideline: !0,
                    xAxis: {
                        showMaxMin: !1, tickFormat: function (e) {
                            return d3.time.format("%x")(new Date(e))
                        }
                    },
                    yAxis: {
                        tickFormat: function (e) {
                            return d3.format(",.2f")(e)
                        }
                    }
                }
            },
            data: [{
                key: "North America",
                values: [[10254096e5, 23.041422681023], [1028088e6, 19.854291255832], [10307664e5, 21.02286281168], [10333584e5, 22.093608385173], [10360404e5, 25.108079299458], [10386324e5, 26.982389242348], [10413108e5, 19.828984957662], [10439892e5, 19.914055036294], [10464084e5, 19.436150539916], [10490868e5, 21.558650338602], [10516752e5, 24.395594061773], [10543536e5, 24.747089309384], [10569456e5, 23.491755498807], [1059624e6, 23.376634878164], [10623024e5, 24.581223154533], [10648944e5, 24.922476843538], [10675764e5, 27.357712939042], [10701684e5, 26.503020572593], [10728468e5, 26.658901244878], [10755252e5, 27.065704156445], [10780308e5, 28.735320452588], [10807092e5, 31.572277846319], [10832976e5, 30.932161503638], [1085976e6, 31.627029785554], [1088568e6, 28.728743674232], [10912464e5, 26.858365172675], [10939248e5, 27.279922830032], [10965168e5, 34.408301211324], [10991952e5, 34.794362930439], [11017908e5, 35.609978198951], [11044692e5, 33.574394968037], [11071476e5, 31.979405070598], [11095668e5, 31.19009040297], [11122452e5, 31.083933968994], [11148336e5, 29.668971113185], [1117512e6, 31.490638014379], [1120104e6, 31.818617451128], [11227824e5, 32.960314008183], [11254608e5, 31.313383196209], [11280528e5, 33.125486081852], [11307348e5, 32.791805509149], [11333268e5, 33.506038030366], [11360052e5, 26.96501697216], [11386836e5, 27.38478809681], [11411028e5, 27.371377218209], [11437812e5, 26.309915460827], [11463696e5, 26.425199957518], [1149048e6, 26.823411519396], [115164e7, 23.850443591587], [11543184e5, 23.158355444054], [11569968e5, 22.998689393695], [11595888e5, 27.9771285113], [11622708e5, 29.073672469719], [11648628e5, 28.587640408904], [11675412e5, 22.788453687637], [11702196e5, 22.429199073597], [11726388e5, 22.324103271052], [11753136e5, 17.558388444187], [11779056e5, 16.769518096208], [1180584e6, 16.214738201301], [1183176e6, 18.729632971229], [11858544e5, 18.814523318847], [11885328e5, 19.789986451358], [11911248e5, 17.070049054933], [11938032e5, 16.121349575716], [11963988e5, 15.141659430091], [11990772e5, 17.175388025297], [12017556e5, 17.286592443522], [12042612e5, 16.323141626568], [1206936e6, 19.231263773952], [1209528e6, 18.446256391095], [12122064e5, 17.822632399764], [12147984e5, 15.53936647598], [12174768e5, 15.255131790217], [12201552e5, 15.660963922592], [12227472e5, 13.254482273698], [12254256e5, 11.920796202299], [12280212e5, 12.122809090924], [12306996e5, 15.691026271393], [1233378e6, 14.720881635107], [12357972e5, 15.387939360044], [1238472e6, 13.765436672228], [1241064e6, 14.631445864799], [12437424e5, 14.292446536221], [12463344e5, 16.170071367017], [12490128e5, 15.948135554337], [12516912e5, 16.612872685134], [12542832e5, 18.778338719091], [12569616e5, 16.756026065421], [12595572e5, 19.385804443146], [12622356e5, 22.950590240168], [1264914e6, 23.61159018141], [12673332e5, 25.708586989581], [1270008e6, 26.883915999885], [12726e8, 25.893486687065], [12752784e5, 24.678914263176], [12778704e5, 25.937275793024], [12805488e5, 29.461381693838], [12832272e5, 27.357322961861], [12858192e5, 29.057235285673], [12884976e5, 28.549434189386], [12910932e5, 28.506352379724], [12937716e5, 29.449241421598], [129645e7, 25.796838168807], [12988692e5, 28.740145449188], [1301544e6, 22.091744141872], [1304136e6, 25.07966254541], [13068144e5, 23.674906973064], [13094064e5, 23.418002742929], [13120848e5, 23.24364413887], [13147632e5, 31.591854066817], [13173552e5, 31.497112374114], [13200336e5, 26.67238082043], [13226292e5, 27.297080015495], [13253076e5, 20.174315530051], [1327986e6, 19.631084213898], [13304916e5, 20.366462219461], [13331664e5, 19.284784434185], [13357584e5, 19.157810257624]]
            }, {
                key: "Africa",
                values: [[10254096e5, 7.9356392949025], [1028088e6, 7.4514668527298], [10307664e5, 7.9085410566608], [10333584e5, 5.8996782364764], [10360404e5, 6.0591869346923], [10386324e5, 5.9667815800451], [10413108e5, 8.65528925664], [10439892e5, 8.7690763386254], [10464084e5, 8.6386160387453], [10490868e5, 5.9895557449743], [10516752e5, 6.3840324338159], [10543536e5, 6.5196511461441], [10569456e5, 7.0738618553114], [1059624e6, 6.5745957367133], [10623024e5, 6.4658359184444], [10648944e5, 2.7622758754954], [10675764e5, 2.9794782986241], [10701684e5, 2.8735432712019], [10728468e5, 1.6344817513645], [10755252e5, 1.5869248754883], [10780308e5, 1.7172279157246], [10807092e5, 1.9649927409867], [10832976e5, 2.0261695079196], [1085976e6, 2.0541261923929], [1088568e6, 3.9466318927569], [10912464e5, 3.7826770946089], [10939248e5, 3.9543021004028], [10965168e5, 3.8309891064711], [10991952e5, 3.6340958946166], [11017908e5, 3.5289755762525], [11044692e5, 5.702378559857], [11071476e5, 5.6539569019223], [11095668e5, 5.5449506370392], [11122452e5, 4.7579993280677], [11148336e5, 4.4816139372906], [1117512e6, 4.5965558568606], [1120104e6, 4.3747066116976], [11227824e5, 4.4588822917087], [11254608e5, 4.4460351848286], [11280528e5, 3.7989113035136], [11307348e5, 3.7743883140088], [11333268e5, 3.7727852823828], [11360052e5, 7.2968111448895], [11386836e5, 7.2800122043237], [11411028e5, 7.1187787503354], [11437812e5, 8.351887016482], [11463696e5, 8.4156698763993], [1149048e6, 8.1673298604231], [115164e7, 5.5132447126042], [11543184e5, 6.1152537710599], [11569968e5, 6.076765091942], [11595888e5, 4.6304473798646], [11622708e5, 4.6301068469402], [11648628e5, 4.3466656309389], [11675412e5, 6.830104897003], [11702196e5, 7.241633040029], [11726388e5, 7.1432372054153], [11753136e5, 10.608942063374], [11779056e5, 10.914964549494], [1180584e6, 10.933223880565], [1183176e6, 8.3457524851265], [11858544e5, 8.1078413081882], [11885328e5, 8.2697185922474], [11911248e5, 8.4742436475968], [11938032e5, 8.4994601179319], [11963988e5, 8.7387319683243], [11990772e5, 6.8829183612895], [12017556e5, 6.984133637885], [12042612e5, 7.0860136043287], [1206936e6, 4.3961787956053], [1209528e6, 3.8699674365231], [12122064e5, 3.6928925238305], [12147984e5, 6.7571718894253], [12174768e5, 6.4367313362344], [12201552e5, 6.4048441521454], [12227472e5, 5.4643833239669], [12254256e5, 5.3150786833374], [12280212e5, 5.3011272612576], [12306996e5, 4.1203601430809], [1233378e6, 4.0881783200525], [12357972e5, 4.1928665957189], [1238472e6, 7.0249415663205], [1241064e6, 7.006530880769], [12437424e5, 6.994835633224], [12463344e5, 6.1220222336254], [12490128e5, 6.1177436137653], [12516912e5, 6.1413396231981], [12542832e5, 4.8046006145874], [12569616e5, 4.6647600660544], [12595572e5, 4.544865006255], [12622356e5, 6.0488249316539], [1264914e6, 6.3188669540206], [12673332e5, 6.5873958262306], [1270008e6, 6.2281189839578], [12726e8, 5.8948915746059], [12752784e5, 5.5967320482214], [12778704e5, .99784432084837], [12805488e5, 1.0950794175359], [12832272e5, .94479734407491], [12858192e5, 1.222093988688], [12884976e5, 1.335093106856], [12910932e5, 1.3302565104985], [12937716e5, 1.340824670897], [129645e7, 0], [12988692e5, 0], [1301544e6, 0], [1304136e6, 0], [13068144e5, 0], [13094064e5, 0], [13120848e5, 0], [13147632e5, 0], [13173552e5, 4.4583692315], [13200336e5, 3.6493043348059], [13226292e5, 3.8610064091761], [13253076e5, 5.5144800685202], [1327986e6, 5.1750695220791], [13304916e5, 5.6710066952691], [13331664e5, 5.5611890039181], [13357584e5, 5.5979368839939]]
            }, {
                key: "South America",
                values: [[10254096e5, 7.9149900245423], [1028088e6, 7.0899888751059], [10307664e5, 7.5996132380614], [10333584e5, 8.2741174301034], [10360404e5, 9.3564460833513], [10386324e5, 9.7066786059904], [10413108e5, 10.213363052343], [10439892e5, 10.285809585273], [10464084e5, 10.222053149228], [10490868e5, 8.6188592137975], [10516752e5, 9.3335447543566], [10543536e5, 8.9312402186628], [10569456e5, 8.1895089343658], [1059624e6, 8.260622135079], [10623024e5, 7.7700786851364], [10648944e5, 7.9907428771318], [10675764e5, 8.7769091865606], [10701684e5, 8.4855077060661], [10728468e5, 9.6277203033655], [10755252e5, 9.9685913452624], [10780308e5, 10.615085181759], [10807092e5, 9.2902488079646], [10832976e5, 8.8610439830061], [1085976e6, 9.1075344931229], [1088568e6, 9.9156737639203], [10912464e5, 9.7826003238782], [10939248e5, 10.55403610555], [10965168e5, 10.926900264097], [10991952e5, 10.903144818736], [11017908e5, 10.862890389067], [11044692e5, 10.64604998964], [11071476e5, 10.042790814087], [11095668e5, 9.7173391591038], [11122452e5, 9.6122415755443], [11148336e5, 9.4337921146562], [1117512e6, 9.814827171183], [1120104e6, 12.059260396788], [11227824e5, 12.139649903873], [11254608e5, 12.281290663822], [11280528e5, 8.8037085409056], [11307348e5, 8.6300618239176], [11333268e5, 9.1225708491432], [11360052e5, 12.988124170836], [11386836e5, 13.356778764353], [11411028e5, 13.611196863271], [11437812e5, 6.8959030061189], [11463696e5, 6.9939633271353], [1149048e6, 6.7241510257676], [115164e7, 5.5611293669517], [11543184e5, 5.6086488714041], [11569968e5, 5.4962849907033], [11595888e5, 6.9193153169278], [11622708e5, 7.0016334389778], [11648628e5, 6.7865422443273], [11675412e5, 9.0006454225383], [11702196e5, 9.2233916171431], [11726388e5, 8.8929316009479], [11753136e5, 10.345937520404], [11779056e5, 10.075914677026], [1180584e6, 10.089006188111], [1183176e6, 10.598330295008], [11858544e5, 9.9689546533009], [11885328e5, 9.7740580198146], [11911248e5, 10.558483060626], [11938032e5, 9.9314651823603], [11963988e5, 9.3997715873769], [11990772e5, 8.4086493387262], [12017556e5, 8.9698309085926], [12042612e5, 8.2778357995396], [1206936e6, 8.8585045600123], [1209528e6, 8.7013756413322], [12122064e5, 7.7933605469443], [12147984e5, 7.0236183483064], [12174768e5, 6.9873088186829], [12201552e5, 6.8031713070097], [12227472e5, 6.6869531315723], [12254256e5, 6.138256993963], [12280212e5, 5.6434994016354], [12306996e5, 5.495220262512], [1233378e6, 4.6885326869846], [12357972e5, 4.4524349883438], [1238472e6, 5.6766520778185], [1241064e6, 5.7675774480752], [12437424e5, 5.7882863168337], [12463344e5, 7.2666010034924], [12490128e5, 7.5191821322261], [12516912e5, 7.849651451445], [12542832e5, 10.383992037985], [12569616e5, 9.0653691861818], [12595572e5, 9.6705248324159], [12622356e5, 10.856380561349], [1264914e6, 11.27452370892], [12673332e5, 11.754156529088], [1270008e6, 8.2870811422455], [12726e8, 8.0210264360699], [12752784e5, 7.5375074474865], [12778704e5, 8.3419527338039], [12805488e5, 9.4197471818443], [12832272e5, 8.7321733185797], [12858192e5, 9.6627062648126], [12884976e5, 10.187962234548], [12910932e5, 9.8144201733476], [12937716e5, 10.275723361712], [129645e7, 16.796066079353], [12988692e5, 17.543254984075], [1301544e6, 16.673660675083], [1304136e6, 17.963944353609], [13068144e5, 16.63774086721], [13094064e5, 15.84857094609], [13120848e5, 14.767303362181], [13147632e5, 24.778452182433], [13173552e5, 18.370353229999], [13200336e5, 15.253137429099], [13226292e5, 14.989600840649], [13253076e5, 16.052539160125], [1327986e6, 16.424390322793], [13304916e5, 17.884020741104], [13331664e5, 18.372698836036], [13357584e5, 18.315881576096]]
            }, {
                key: "Asia",
                values: [[10254096e5, 13.153938631352], [1028088e6, 12.456410521864], [10307664e5, 12.537048663919], [10333584e5, 13.947386398309], [10360404e5, 14.421680682568], [10386324e5, 14.143238262286], [10413108e5, 12.229635347478], [10439892e5, 12.508479916948], [10464084e5, 12.155368409526], [10490868e5, 13.335455563994], [10516752e5, 12.888210138167], [10543536e5, 12.842092790511], [10569456e5, 12.513816474199], [1059624e6, 12.21453674494], [10623024e5, 11.750848343935], [10648944e5, 10.526579636787], [10675764e5, 10.873596086087], [10701684e5, 11.019967131519], [10728468e5, 11.235789380602], [10755252e5, 11.859910850657], [10780308e5, 12.531031616536], [10807092e5, 11.360451067019], [10832976e5, 11.456244780202], [1085976e6, 11.436991407309], [1088568e6, 11.638595744327], [10912464e5, 11.190418301469], [10939248e5, 11.835608007589], [10965168e5, 11.540980244475], [10991952e5, 10.958762325687], [11017908e5, 10.885791159509], [11044692e5, 13.605810720109], [11071476e5, 13.128978067437], [11095668e5, 13.119012086882], [11122452e5, 13.003706129783], [11148336e5, 13.326996807689], [1117512e6, 13.547947991743], [1120104e6, 12.807959646616], [11227824e5, 12.931763821068], [11254608e5, 12.795359993008], [11280528e5, 9.6998935538319], [11307348e5, 9.3473740089131], [11333268e5, 9.36902067716], [11360052e5, 14.258619539875], [11386836e5, 14.21241095603], [11411028e5, 13.973193618249], [11437812e5, 15.218233920664], [11463696e5, 14.382109727451], [1149048e6, 13.894310878491], [115164e7, 15.593086090031], [11543184e5, 16.244839695189], [11569968e5, 16.017088850647], [11595888e5, 14.183951830057], [11622708e5, 14.148523245696], [11648628e5, 13.424326059971], [11675412e5, 12.974450435754], [11702196e5, 13.232470418021], [11726388e5, 13.318762655574], [11753136e5, 15.961407746104], [11779056e5, 16.287714639805], [1180584e6, 16.24659058389], [1183176e6, 17.564505594808], [11858544e5, 17.872725373164], [11885328e5, 18.018998508756], [11911248e5, 15.584518016602], [11938032e5, 15.480850647182], [11963988e5, 15.699120036985], [11990772e5, 19.184281817226], [12017556e5, 19.691226605205], [12042612e5, 18.982314051293], [1206936e6, 18.707820309008], [1209528e6, 17.459630929759], [12122064e5, 16.500616076782], [12147984e5, 18.086324003978], [12174768e5, 18.929464156259], [12201552e5, 18.233728682084], [12227472e5, 16.315776297325], [12254256e5, 14.632892190251], [12280212e5, 14.667835024479], [12306996e5, 13.946993947309], [1233378e6, 14.394304684398], [12357972e5, 13.724462792967], [1238472e6, 10.930879035807], [1241064e6, 9.8339915513708], [12437424e5, 10.053858541872], [12463344e5, 11.786998438286], [12490128e5, 11.780994901769], [12516912e5, 11.305889670277], [12542832e5, 10.918452290083], [12569616e5, 9.6811395055706], [12595572e5, 10.971529744038], [12622356e5, 13.330210480209], [1264914e6, 14.592637568961], [12673332e5, 14.605329141157], [1270008e6, 13.936853794037], [12726e8, 12.189480759072], [12752784e5, 11.676151385046], [12778704e5, 13.058852800018], [12805488e5, 13.62891543203], [12832272e5, 13.811107569918], [12858192e5, 13.786494560786], [12884976e5, 14.045162857531], [12910932e5, 13.697412447286], [12937716e5, 13.677681376221], [129645e7, 19.96151186453], [12988692e5, 21.049198298156], [1301544e6, 22.687631094009], [1304136e6, 25.469010617433], [13068144e5, 24.88379943712], [13094064e5, 24.203843814249], [13120848e5, 22.138760964036], [13147632e5, 16.034636966228], [13173552e5, 15.394958944555], [13200336e5, 12.62564246197], [13226292e5, 12.973735699739], [13253076e5, 15.78601833615], [1327986e6, 15.227368020134], [13304916e5, 15.899752650733], [13331664e5, 15.661317319168], [13357584e5, 15.359891177281]]
            }, {
                key: "Europe",
                values: [[10254096e5, 9.3433263069351], [1028088e6, 8.4583069475546], [10307664e5, 8.0342398154196], [10333584e5, 8.1538966876572], [10360404e5, 10.743604786849], [10386324e5, 12.349366155851], [10413108e5, 10.742682503899], [10439892e5, 11.360983869935], [10464084e5, 11.441336039535], [10490868e5, 10.897508791837], [10516752e5, 11.469101547709], [10543536e5, 12.086311476742], [10569456e5, 8.0697180773504], [1059624e6, 8.2004392233445], [10623024e5, 8.4566434900643], [10648944e5, 7.9565760979059], [10675764e5, 9.3764619255827], [10701684e5, 9.0747664160538], [10728468e5, 10.508939004673], [10755252e5, 10.69936754483], [10780308e5, 10.681562399145], [10807092e5, 13.184786109406], [10832976e5, 12.668213052351], [1085976e6, 13.430509403986], [1088568e6, 12.393086349213], [10912464e5, 11.942374044842], [10939248e5, 12.062227685742], [10965168e5, 11.969974363623], [10991952e5, 12.14374574055], [11017908e5, 12.69422821995], [11044692e5, 9.1235211044692], [11071476e5, 8.758211757584], [11095668e5, 8.8072309258443], [11122452e5, 11.687595946835], [11148336e5, 11.079723082664], [1117512e6, 12.049712896076], [1120104e6, 10.725319428684], [11227824e5, 10.844849996286], [11254608e5, 10.833535488461], [11280528e5, 17.180932407865], [11307348e5, 15.894764896516], [11333268e5, 16.412751299498], [11360052e5, 12.573569093402], [11386836e5, 13.242301508051], [11411028e5, 12.863536342041], [11437812e5, 21.034044171629], [11463696e5, 21.419084618802], [1149048e6, 21.142678863692], [115164e7, 26.56848967753], [11543184e5, 24.839144939906], [11569968e5, 25.456187462166], [11595888e5, 26.350164502825], [11622708e5, 26.478333205189], [11648628e5, 26.425979547846], [11675412e5, 28.191461582256], [11702196e5, 28.930307448808], [11726388e5, 29.521413891117], [11753136e5, 28.188285966466], [11779056e5, 27.704619625831], [1180584e6, 27.49086242483], [1183176e6, 28.770679721286], [11858544e5, 29.06048067145], [11885328e5, 28.240998844973], [11911248e5, 33.004893194128], [11938032e5, 34.075180359928], [11963988e5, 32.548560664834], [11990772e5, 30.629727432729], [12017556e5, 28.642858788159], [12042612e5, 27.973575227843], [1206936e6, 27.393351882726], [1209528e6, 28.476095288522], [12122064e5, 29.29667866426], [12147984e5, 29.222333802896], [12174768e5, 28.092966093842], [12201552e5, 28.107159262922], [12227472e5, 25.482974832099], [12254256e5, 21.208115993834], [12280212e5, 20.295043095268], [12306996e5, 15.925754618402], [1233378e6, 17.162864628346], [12357972e5, 17.084345773174], [1238472e6, 22.24600710228], [1241064e6, 24.530543998508], [12437424e5, 25.084184918241], [12463344e5, 16.606166527359], [12490128e5, 17.239620011628], [12516912e5, 17.336739127379], [12542832e5, 25.478492475754], [12569616e5, 23.017152085244], [12595572e5, 25.617745423684], [12622356e5, 24.061133998641], [1264914e6, 23.223933318646], [12673332e5, 24.425887263936], [1270008e6, 35.501471156693], [12726e8, 33.775013878675], [12752784e5, 30.417993630285], [12778704e5, 30.023598978467], [12805488e5, 33.327519522436], [12832272e5, 31.963388450372], [12858192e5, 30.49896723209], [12884976e5, 32.403696817913], [12910932e5, 31.47736071922], [12937716e5, 31.53259666241], [129645e7, 41.760282761548], [12988692e5, 45.605771243237], [1301544e6, 39.986557966215], [1304136e6, 43.84633051005], [13068144e5, 39.857316881858], [13094064e5, 37.675127768207], [13120848e5, 35.775077970313], [13147632e5, 48.631009702578], [13173552e5, 42.830831754505], [13200336e5, 35.611502589362], [13226292e5, 35.320136981738], [13253076e5, 31.564136901516], [1327986e6, 32.074407502433], [13304916e5, 35.053013769977], [13331664e5, 33.873085184128], [13357584e5, 32.321039427046]]
            }, {
                key: "Australia",
                values: [[10254096e5, 5.1162447683392], [1028088e6, 4.2022848306513], [10307664e5, 4.3543715758736], [10333584e5, 5.4641223667245], [10360404e5, 6.0041275884577], [10386324e5, 6.6050520064486], [10413108e5, 5.0154059912793], [10439892e5, 5.1835708554647], [10464084e5, 5.1142682006164], [10490868e5, 5.0271381717695], [10516752e5, 5.3437782653456], [10543536e5, 5.2105844515767], [10569456e5, 6.552565997799], [1059624e6, 6.9873363581831], [10623024e5, 7.010986789097], [10648944e5, 4.4254242025515], [10675764e5, 4.9613848042174], [10701684e5, 4.8854920484764], [10728468e5, 4.0441111794228], [10755252e5, 4.0219596813179], [10780308e5, 4.3065749225355], [10807092e5, 3.9148434915404], [10832976e5, 3.8659430654512], [1085976e6, 3.9572824600686], [1088568e6, 4.7372190641522], [10912464e5, 4.6871476374455], [10939248e5, 5.0398702564196], [10965168e5, 5.5221787544964], [10991952e5, 5.424646299798], [11017908e5, 5.9240223067349], [11044692e5, 5.9936860983601], [11071476e5, 5.8499523215019], [11095668e5, 6.4149040329325], [11122452e5, 6.4547895561969], [11148336e5, 5.9385382611161], [1117512e6, 6.0486751030592], [1120104e6, 5.23108613838], [11227824e5, 5.5857797121029], [11254608e5, 5.3454665096987], [11280528e5, 5.0439154120119], [11307348e5, 5.054634702913], [11333268e5, 5.3819451380848], [11360052e5, 5.2638869269803], [11386836e5, 5.5806167415681], [11411028e5, 5.4539047069985], [11437812e5, 7.6728842432362], [11463696e5, 7.719946716654], [1149048e6, 8.0144619912942], [115164e7, 7.942223133434], [11543184e5, 8.3998279827444], [11569968e5, 8.532324572605], [11595888e5, 4.7324285199763], [11622708e5, 4.7402397487697], [11648628e5, 4.9042069355168], [11675412e5, 5.9583963430882], [11702196e5, 6.3693899239171], [11726388e5, 6.261153903813], [11753136e5, 5.3443942184584], [11779056e5, 5.4932111235361], [1180584e6, 5.5747393101109], [1183176e6, 5.3833633060013], [11858544e5, 5.5125898831832], [11885328e5, 5.8116112661327], [11911248e5, 4.3962296939996], [11938032e5, 4.6967663605521], [11963988e5, 4.7963004350914], [11990772e5, 4.1817985183351], [12017556e5, 4.3797643870182], [12042612e5, 4.6966642197965], [1206936e6, 4.3609995132565], [1209528e6, 4.4736290996496], [12122064e5, 4.3749762738128], [12147984e5, 3.3274661194507], [12174768e5, 3.0316184691337], [12201552e5, 2.5718140204728], [12227472e5, 2.7034994044603], [12254256e5, 2.2033786591364], [12280212e5, 1.9850621240805], [12306996e5, 0], [1233378e6, 0], [12357972e5, 0], [1238472e6, 0], [1241064e6, 0], [12437424e5, 0], [12463344e5, 0], [12490128e5, 0], [12516912e5, 0], [12542832e5, .44495950017788], [12569616e5, .33945469262483], [12595572e5, .38348269455195], [12622356e5, 0], [1264914e6, 0], [12673332e5, 0], [1270008e6, 0], [12726e8, 0], [12752784e5, 0], [12778704e5, 0], [12805488e5, 0], [12832272e5, 0], [12858192e5, 0], [12884976e5, 0], [12910932e5, 0], [12937716e5, 0], [129645e7, .52216435716176], [12988692e5, .59275786698454], [1301544e6, 0], [1304136e6, 0], [13068144e5, 0], [13094064e5, 0], [13120848e5, 0], [13147632e5, 0], [13173552e5, 0], [13200336e5, 0], [13226292e5, 0], [13253076e5, 0], [1327986e6, 0], [13304916e5, 0], [13331664e5, 0], [13357584e5, 0]]
            }, {
                key: "Antarctica",
                values: [[10254096e5, 1.3503144674343], [1028088e6, 1.2232741112434], [10307664e5, 1.3930470790784], [10333584e5, 1.2631275030593], [10360404e5, 1.5842699103708], [10386324e5, 1.9546996043116], [10413108e5, .8504048300986], [10439892e5, .85340686311353], [10464084e5, .843061357391], [10490868e5, 2.119846992476], [10516752e5, 2.5285382124858], [10543536e5, 2.5056570712835], [10569456e5, 2.5212789901005], [1059624e6, 2.6192011642534], [10623024e5, 2.5382187823805], [10648944e5, 2.3393223047168], [10675764e5, 2.491219888698], [10701684e5, 2.497555874906], [10728468e5, 1.734018115546], [10755252e5, 1.9307268299646], [10780308e5, 2.2261679836799], [10807092e5, 1.7608893704206], [10832976e5, 1.6242690616808], [1085976e6, 1.7161663801295], [1088568e6, 1.7183554537038], [10912464e5, 1.7179780759145], [10939248e5, 1.7314274801784], [10965168e5, 1.2596883356752], [10991952e5, 1.381177053009], [11017908e5, 1.4408819615814], [11044692e5, 3.4743581836444], [11071476e5, 3.3603749903192], [11095668e5, 3.5350883257893], [11122452e5, 3.0949644237828], [11148336e5, 3.0796455899995], [1117512e6, 3.3441247640644], [1120104e6, 4.0947643978168], [11227824e5, 4.4072631274052], [11254608e5, 4.4870979780825], [11280528e5, 4.8404549457934], [11307348e5, 4.8293016233697], [11333268e5, 5.2238093263952], [11360052e5, 3.382306337815], [11386836e5, 3.7056975170243], [11411028e5, 3.7561118692318], [11437812e5, 2.861913700854], [11463696e5, 2.9933744103381], [1149048e6, 2.7127537218463], [115164e7, 3.1195497076283], [11543184e5, 3.4066964004508], [11569968e5, 3.3754571113569], [11595888e5, 2.2965579982924], [11622708e5, 2.4486818633018], [11648628e5, 2.4002308848517], [11675412e5, 1.9649579750349], [11702196e5, 1.9385263638056], [11726388e5, 1.9128975336387], [11753136e5, 2.3412869836298], [11779056e5, 2.4337870351445], [1180584e6, 2.62179703171], [1183176e6, 3.2642864957929], [11858544e5, 3.3200396223709], [11885328e5, 3.3934212707572], [11911248e5, 4.2822327088179], [11938032e5, 4.1474964228541], [11963988e5, 4.1477082879801], [11990772e5, 5.2947122916128], [12017556e5, 5.2919843508028], [12042612e5, 5.198978305031], [1206936e6, 3.5603057673513], [1209528e6, 3.3009087690692], [12122064e5, 3.1784852603792], [12147984e5, 4.5889503538868], [12174768e5, 4.401779617494], [12201552e5, 4.2208301828278], [12227472e5, 3.89396671475], [12254256e5, 3.0423832241354], [12280212e5, 3.135520611578], [12306996e5, 1.9631418164089], [1233378e6, 1.8963543874958], [12357972e5, 1.8266636017025], [1238472e6, .93136635895188], [1241064e6, .92737801918888], [12437424e5, .97591889805002], [12463344e5, 2.6841193805515], [12490128e5, 2.5664341140531], [12516912e5, 2.3887523699873], [12542832e5, 1.1737801663681], [12569616e5, 1.0953582317281], [12595572e5, 1.2495674976653], [12622356e5, .36607452464754], [1264914e6, .3548719047291], [12673332e5, .36769242398939], [1270008e6, 0], [12726e8, 0], [12752784e5, 0], [12778704e5, 0], [12805488e5, 0], [12832272e5, 0], [12858192e5, .85450741275337], [12884976e5, .91360317921637], [12910932e5, .89647678692269], [12937716e5, .87800687192639], [129645e7, 0], [12988692e5, 0], [1301544e6, .43668720882994], [1304136e6, .4756523602692], [13068144e5, .46947368328469], [13094064e5, .45138896152316], [13120848e5, .43828726648117], [13147632e5, 2.0820861395316], [13173552e5, .9364411075395], [13200336e5, .60583907839773], [13226292e5, .61096950747437], [13253076e5, 0], [1327986e6, 0], [13304916e5, 0], [13331664e5, 0], [13357584e5, 0]]
            }]
        }, n.historicalBarChart = {
            options: {
                chart: {
                    type: "historicalBarChart",
                    height: 450,
                    margin: {top: 20, right: 20, bottom: 60, left: 50},
                    x: function (e) {
                        return e[0]
                    },
                    y: function (e) {
                        return e[1] / 1e5
                    },
                    showValues: !0,
                    valueFormat: function (e) {
                        return d3.format(",.1f")(e)
                    },
                    transitionDuration: 500,
                    xAxis: {
                        axisLabel: "X Axis", tickFormat: function (e) {
                            return d3.time.format("%x")(new Date(e))
                        }, rotateLabels: 50, showMaxMin: !1
                    },
                    yAxis: {
                        axisLabel: "Y Axis", axisLabelDistance: 35, tickFormat: function (e) {
                            return d3.format(",.1f")(e)
                        }
                    }
                }
            },
            data: [{
                key: "Quantity",
                bar: !0,
                values: [[11595888e5, 3899486], [11622708e5, 3899486], [11648628e5, 3899486], [11675412e5, 3564700], [11702196e5, 3564700], [11726388e5, 3564700], [11753136e5, 2648493], [11779056e5, 2648493], [1180584e6, 2648493], [1183176e6, 2522993], [11858544e5, 2522993], [11885328e5, 2522993], [11911248e5, 2906501], [11938032e5, 2906501], [11963988e5, 2906501], [11990772e5, 2206761], [12017556e5, 2206761], [12042612e5, 2206761], [1206936e6, 2287726], [1209528e6, 2287726], [12122064e5, 2287726], [12147984e5, 2732646], [12174768e5, 2732646], [12201552e5, 2732646], [12227472e5, 2599196], [12254256e5, 2599196], [12280212e5, 2599196], [12306996e5, 1924387], [1233378e6, 1924387], [12357972e5, 1924387], [1238472e6, 1756311], [1241064e6, 1756311], [12437424e5, 1756311], [12463344e5, 1743470], [12490128e5, 1743470], [12516912e5, 1743470], [12542832e5, 1519010], [12569616e5, 1519010], [12595572e5, 1519010], [12622356e5, 1591444], [1264914e6, 1591444], [12673332e5, 1591444], [1270008e6, 1543784], [12726e8, 1543784], [12752784e5, 1543784], [12778704e5, 1309915], [12805488e5, 1309915], [12832272e5, 1309915], [12858192e5, 1331875], [12884976e5, 1331875], [12910932e5, 1331875], [12937716e5, 1331875], [129645e7, 1154695], [12988692e5, 1154695], [1301544e6, 1194025], [1304136e6, 1194025], [13068144e5, 1194025], [13094064e5, 1194025], [13120848e5, 1194025], [13147632e5, 1244525], [13173552e5, 475e3], [13200336e5, 475e3], [13226292e5, 475e3], [13253076e5, 690033], [1327986e6, 690033], [13304916e5, 690033], [13331664e5, 514733], [13357584e5, 514733]]
            }]
        }, n.multiBarHorizontalChart = {
            options: {
                chart: {
                    type: "multiBarHorizontalChart",
                    height: 450,
                    x: function (e) {
                        return e.label
                    },
                    y: function (e) {
                        return e.value
                    },
                    showControls: !0,
                    showValues: !0,
                    transitionDuration: 500,
                    xAxis: {showMaxMin: !1},
                    yAxis: {
                        axisLabel: "Values", tickFormat: function (e) {
                            return d3.format(",.2f")(e)
                        }
                    }
                }
            }, data: [{
                key: "Series1",
                color: "#d62728",
                values: [{label: "Group A", value: -1.8746444827653}, {
                    label: "Group B",
                    value: -8.0961543492239
                }, {label: "Group C", value: -.57072943117674}, {label: "Group D", value: -2.4174010336624}, {
                    label: "Group E", value: -.72009071426284
                }, {label: "Group F", value: -.77154485523777}, {
                    label: "Group G",
                    value: -.90152097798131
                }, {label: "Group H", value: -.91445417330854}, {label: "Group I", value: -.055746319141851}]
            }, {
                key: "Series2",
                color: "#1f77b4",
                values: [{label: "Group A", value: 25.307646510375}, {
                    label: "Group B",
                    value: 16.756779544553
                }, {label: "Group C", value: 18.451534877007}, {
                    label: "Group D",
                    value: 8.6142352811805
                }, {label: "Group E", value: 7.8082472075876}, {
                    label: "Group F",
                    value: 5.259101026956
                }, {label: "Group G", value: .30947953487127}, {label: "Group H", value: 0}, {
                    label: "Group I",
                    value: 0
                }]
            }]
        }, n.pieChart = {
            options: {
                chart: {
                    type: "pieChart",
                    height: 500,
                    x: function (e) {
                        return e.key
                    },
                    y: function (e) {
                        return e.y
                    },
                    showLabels: !0,
                    transitionDuration: 500,
                    labelThreshold: .01,
                    legend: {margin: {top: 5, right: 35, bottom: 5, left: 0}}
                }
            },
            data: [{key: "One", y: 5}, {key: "Two", y: 2}, {key: "Three", y: 9}, {key: "Four", y: 7}, {
                key: "Five",
                y: 4
            }, {key: "Six", y: 3}, {key: "Seven", y: .5}]
        }, n.donutChart = {
            options: {
                chart: {
                    type: "pieChart", height: 450, donut: !0, x: function (e) {
                        return e.key
                    }, y: function (e) {
                        return e.y
                    }, showLabels: !0, pie: {
                        startAngle: function (e) {
                            return e.startAngle / 2 - Math.PI / 2
                        }, endAngle: function (e) {
                            return e.endAngle / 2 - Math.PI / 2
                        }
                    }, transitionDuration: 500, legend: {margin: {top: 5, right: 70, bottom: 5, left: 0}}
                }
            },
            data: [{key: "One", y: 5}, {key: "Two", y: 2}, {key: "Three", y: 9}, {key: "Four", y: 7}, {
                key: "Five",
                y: 4
            }, {key: "Six", y: 3}, {key: "Seven", y: .5}]
        }, n.sparklineChart = {
            options: {
                chart: {
                    type: "sparklinePlus", height: 450, x: function (e, t) {
                        return t
                    }, xTickFormat: function (e) {
                        return d3.time.format("%x")(new Date(n.sparklineChart.data[e].x))
                    }, transitionDuration: 250
                }
            }, data: a(130, .02)
        }, n.bulletChart = {
            options: {chart: {type: "bulletChart", transitionDuration: 500}},
            data: {
                title: "Revenue",
                subtitle: "US$, in thousands",
                ranges: [150, 225, 300],
                measures: [220],
                markers: [250]
            }
        }, n.scatterChart = {
            options: {
                chart: {
                    type: "scatterChart",
                    height: 450,
                    color: d3.scale.category10().range(),
                    scatter: {onlyCircles: !1},
                    showDistX: !0,
                    showDistY: !0,
                    tooltipContent: function (e) {
                        return "<h3>" + e + "</h3>"
                    },
                    transitionDuration: 350,
                    xAxis: {
                        axisLabel: "X Axis", tickFormat: function (e) {
                            return d3.format(".02f")(e)
                        }
                    },
                    yAxis: {
                        axisLabel: "Y Axis", tickFormat: function (e) {
                            return d3.format(".02f")(e)
                        }, axisLabelDistance: 30
                    }
                }
            }, data: i(4, 5)
        }
    }

    angular.module("app.components.charts.nvd3").controller("Nvd3Controller", e), e.$inject = ["fuseTheming"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.components_charts_chartist", {
            url: "/components/charts/chartist",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/charts/chartist/chartist.html",
                    controller: "ChartistController as vm"
                }
            }
        })
    }

    angular.module("app.components.charts.chartist", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.themes = e.themes, t.lineChart = {
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
            }, options: {fullWidth: !0, chartPadding: {right: 40}}
        }, t.lineAreaChart = {
            data: {labels: [1, 2, 3, 4, 5, 6, 7, 8], series: [[5, 9, 7, 8, 5, 3, 5, 4]]},
            options: {low: 0, showArea: !0}
        }, t.biPolarLineChart = {
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: [[1, 2, 3, 1, -2, 0, 1, 0], [-2, -1, -2, -1, -2.5, -1, -2, -1], [0, 0, 0, 1, 2, 2.5, 2, 1], [2.5, 2, 1, .5, 1, .5, -1, -2.5]]
            },
            options: {
                high: 3,
                low: -3,
                showArea: !0,
                showLine: !1,
                showPoint: !1,
                fullWidth: !0,
                axisX: {showLabel: !1, showGrid: !1}
            }
        }, t.stackedBarChart = {
            data: {
                labels: ["Q1", "Q2", "Q3", "Q4"],
                series: [[8e5, 12e5, 14e5, 13e5], [2e5, 4e5, 5e5, 3e5], [1e5, 2e5, 4e5, 6e5]]
            }, options: {
                stackBars: !0, axisY: {
                    labelInterpolationFnc: function (e) {
                        return e / 1e3 + "k"
                    }
                }
            }, events: {
                draw: function (e) {
                    "bar" === e.type && e.element.attr({style: "stroke-width: 30px"})
                }
            }
        }, t.barChart = {
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]]
            },
            options: {seriesBarDistance: 15},
            responsiveOptions: [["screen and (min-width: 641px) and (max-width: 1024px)", {
                seriesBarDistance: 10,
                axisX: {
                    labelInterpolationFnc: function (e) {
                        return e
                    }
                }
            }], ["screen and (max-width: 640px)", {
                seriesBarDistance: 5, axisX: {
                    labelInterpolationFnc: function (e) {
                        return e[0]
                    }
                }
            }]]
        }, t.horizontalBarChart = {
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                series: [[5, 4, 3, 7, 5, 10, 3], [3, 2, 9, 5, 4, 6, 4]]
            }, options: {seriesBarDistance: 10, reverseData: !0, horizontalBars: !0, axisY: {offset: 70}}
        }, t.biPolarBarChart = {
            data: {
                labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
                series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
            }, options: {
                high: 10, low: -10, axisX: {
                    labelInterpolationFnc: function (e, t) {
                        return t % 2 === 0 ? e : null
                    }
                }
            }
        }, t.pieChart = {
            data: {labels: ["Bananas", "Apples", "Grapes"], series: [20, 15, 40]},
            options: {
                labelInterpolationFnc: function (e) {
                    return e[0]
                }
            },
            responsiveOptions: [["screen and (min-width: 640px)", {
                chartPadding: 40,
                labelOffset: 150,
                labelDirection: "explode",
                labelInterpolationFnc: function (e) {
                    return e
                }
            }], ["screen and (min-width: 1024px)", {labelOffset: 120, chartPadding: 30}]]
        }, t.donutChart = {
            data: {series: [20, 10, 30, 40]},
            options: {donut: !0}
        }, t.gaugeChart = {
            data: {series: [20, 10, 30, 40]},
            options: {donut: !0, donutWidth: 60, startAngle: 270, total: 200, showLabel: !0}
        }
    }

    angular.module("app.components.charts.chartist").controller("ChartistController", e), e.$inject = ["fuseTheming"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.components_charts_chart-js", {
            url: "/components/charts/chart-js",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/charts/chart-js/chart-js.html",
                    controller: "ChartJsController as vm"
                }
            }
        })
    }

    angular.module("app.components.charts.chart-js", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.themes = e.themes, t.lineChart = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            series: ["Series A", "Series B"],
            data: [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]
        }, t.barChart = {
            labels: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
            series: ["Series A", "Series B"],
            data: [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]
        }, t.doughnutChart = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]
        }, t.radarChart = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            data: [[65, 59, 90, 81, 56, 55, 40], [28, 48, 40, 19, 96, 27, 100]]
        }, t.pieChart = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales"],
            data: [300, 500, 100]
        }, t.polarChart = {
            labels: ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales", "Corporate Sales"],
            data: [300, 500, 100, 40, 120]
        }
    }

    angular.module("app.components.charts.chart-js").controller("ChartJsController", e), e.$inject = ["fuseTheming"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.components_charts_c3", {
            url: "/components/charts/c3",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/charts/c3/c3.html",
                    controller: "C3Controller as vm"
                }
            }
        })
    }

    angular.module("app.components.charts.c3", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.themes = e.themes
    }

    angular.module("app.components.charts.c3").controller("C3Controller", e), e.$inject = ["fuseTheming"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.dashboard-server", {
            url: "/dashboard-server",
            views: {
                "content@app": {
                    templateUrl: "app/main/apps/dashboards/server/dashboard-server.html",
                    controller: "DashboardServerController as vm"
                }
            },
            resolve: {
                DashboardData: ["apiResolver", function (e) {
                    return e.resolve("dashboard.server@get")
                }]
            }
        })
    }

    angular.module("app.dashboard-server", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e, t, a) {
        var i = this;
        i.dashboardData = a, i.widget1 = {
            title: i.dashboardData.widget1.title,
            chart: {
                options: {
                    chart: {
                        type: "lineChart",
                        color: ["#4caf50", "#3f51b5", "#ff5722"],
                        height: 320,
                        margin: {top: 32, right: 32, bottom: 32, left: 48},
                        useInteractiveGuideline: !0,
                        clipVoronoi: !1,
                        interpolate: "cardinal",
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        xAxis: {
                            tickFormat: function (e) {
                                return e + " min."
                            }, showMaxMin: !1
                        },
                        yAxis: {
                            tickFormat: function (e) {
                                return e + " MB"
                            }
                        },
                        interactiveLayer: {tooltip: {gravity: "s", classes: "gravity-s"}},
                        legend: {margin: {top: 8, right: 0, bottom: 32, left: 0}, rightAlign: !1}
                    }
                }, data: i.dashboardData.widget1.chart
            }
        }, i.widget2 = i.dashboardData.widget2, i.widget3 = i.dashboardData.widget3, i.widget4 = {
            title: i.dashboardData.widget4.title,
            value: i.dashboardData.widget4.value,
            footnote: i.dashboardData.widget4.footnote,
            detail: i.dashboardData.widget4.detail,
            chart: {
                config: {refreshDataOnly: !0, deepWatchData: !0},
                options: {
                    chart: {
                        type: "lineChart",
                        color: ["rgba(0, 0, 0, 0.27)"],
                        height: 50,
                        margin: {top: 8, right: 0, bottom: 0, left: 0},
                        duration: 1,
                        clipEdge: !0,
                        interpolate: "cardinal",
                        interactive: !1,
                        isArea: !0,
                        showLegend: !1,
                        showControls: !1,
                        showXAxis: !1,
                        showYAxis: !1,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        yDomain: [0, 4]
                    }
                },
                data: i.dashboardData.widget4.chart
            },
            init: function () {
                function a(e, t) {
                    o++;
                    var a = Math.floor(Math.random() * (t - e + 1)) + e, n = {x: o, y: a};
                    i.widget4.chart.data[0].values.shift(), i.widget4.chart.data[0].values.push(n), i.widget4.value = 20 + a + "ms"
                }

                var n = i.dashboardData.widget4.chart[0].values.length - 1, o = i.dashboardData.widget4.chart[0].values[n].x, s = t(function () {
                    a(1, 4)
                }, 1e3);
                e.$on("$destroy", function () {
                    t.cancel(s)
                })
            }
        }, i.widget5 = i.dashboardData.widget5, i.widget6 = {
            title: i.dashboardData.widget6.title,
            chart: {
                config: {refreshDataOnly: !0, deepWatchData: !0},
                options: {
                    chart: {
                        type: "lineChart",
                        color: ["#03A9F4"],
                        height: 140,
                        margin: {top: 8, right: 32, bottom: 16, left: 48},
                        duration: 1,
                        clipEdge: !0,
                        clipVoronoi: !1,
                        interpolate: "cardinal",
                        isArea: !0,
                        useInteractiveGuideline: !0,
                        showLegend: !1,
                        showControls: !1,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        yDomain: [0, 100],
                        xAxis: {
                            tickFormat: function (e) {
                                return e + " sec."
                            }, showMaxMin: !1
                        },
                        yAxis: {
                            tickFormat: function (e) {
                                return e + "%"
                            }
                        },
                        interactiveLayer: {tooltip: {gravity: "s", classes: "gravity-s"}}
                    }
                },
                data: i.dashboardData.widget6.chart
            },
            init: function () {
                function a(e, t) {
                    o += 5;
                    var a = {x: o, y: Math.floor(Math.random() * (t - e + 1)) + e};
                    i.widget6.chart.data[0].values.shift(), i.widget6.chart.data[0].values.push(a)
                }

                var n = i.dashboardData.widget6.chart[0].values.length - 1, o = i.dashboardData.widget6.chart[0].values[n].x, s = t(function () {
                    a(0, 100)
                }, 5e3);
                e.$on("$destroy", function () {
                    t.cancel(s)
                })
            }
        }, i.widget7 = {
            title: i.dashboardData.widget7.title,
            table: i.dashboardData.widget7.table,
            dtOptions: {
                dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
                pagingType: "simple",
                pageLength: 10,
                lengthMenu: [10, 20, 50, 100],
                autoWidth: !1,
                responsive: !0,
                columnDefs: [{width: "20%", targets: [0, 1, 2, 3, 4]}],
                columns: [{}, {}, {
                    render: function (e, t, a, i) {
                        return "display" === t ? e + " KB/s" : e
                    }
                }, {
                    render: function (e, t, a, i) {
                        return "display" === t ? e + "%" : e
                    }
                }, {
                    render: function (e, t, a, i) {
                        if ("display" === t) {
                            var n = angular.element(e);
                            return n.html(n.text() + " MB"), n[0].outerHTML
                        }
                        return e
                    }
                }]
            }
        }, i.widget8 = i.dashboardData.widget8, i.widget4.init(), i.widget6.init()
    }

    angular.module("app.dashboard-server").controller("DashboardServerController", e), e.$inject = ["$scope", "$interval", "DashboardData"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.dashboard-project", {
            url: "/dashboard-project",
            views: {
                "content@app": {
                    templateUrl: "app/main/apps/dashboards/project/dashboard-project.html",
                    controller: "DashboardProjectController as vm"
                }
            },
            resolve: {
                DashboardData: ["apiResolver", function (e) {
                    return e.resolve("dashboard.project@get")
                }]
            }
        })
    }

    angular.module("app.dashboard-project", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e, t, a, i) {
        function n(e) {
            a(e).toggle()
        }

        function o(e) {
            s.selectedProject = e
        }

        var s = this;
        s.dashboardData = i, s.projects = s.dashboardData.projects, s.widget1 = s.dashboardData.widget1, s.widget2 = s.dashboardData.widget2, s.widget3 = s.dashboardData.widget3, s.widget4 = s.dashboardData.widget4, s.widget5 = {
            title: s.dashboardData.widget5.title,
            mainChart: {
                config: {refreshDataOnly: !0, deepWatchData: !0},
                options: {
                    chart: {
                        type: "multiBarChart",
                        color: ["#03a9f4", "#b3e5fc"],
                        height: 420,
                        margin: {top: 8, right: 16, bottom: 32, left: 32},
                        clipEdge: !0,
                        groupSpacing: .3,
                        reduceXTicks: !1,
                        stacked: !0,
                        duration: 250,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        yAxis: {
                            tickFormat: function (e) {
                                return e
                            }
                        },
                        legend: {margin: {top: 8, bottom: 32}},
                        controls: {margin: {top: 8, bottom: 32}},
                        tooltip: {gravity: "s", classes: "gravity-s"}
                    }
                },
                data: []
            },
            supporting: {
                widgets: {
                    created: {data: s.dashboardData.widget5.supporting.created, chart: {data: []}},
                    closed: {data: s.dashboardData.widget5.supporting.closed, chart: {data: []}},
                    reOpened: {data: s.dashboardData.widget5.supporting.reOpened, chart: {data: []}},
                    wontFix: {data: s.dashboardData.widget5.supporting.wontFix, chart: {data: []}},
                    needsTest: {data: s.dashboardData.widget5.supporting.needsTest, chart: {data: []}},
                    fixed: {data: s.dashboardData.widget5.supporting.fixed, chart: {data: []}}
                },
                chart: {
                    config: {refreshDataOnly: !0, deepWatchData: !0},
                    options: {
                        chart: {
                            type: "lineChart",
                            color: ["#03A9F4"],
                            height: 50,
                            margin: {top: 8, right: 0, bottom: 0, left: 0},
                            isArea: !0,
                            interpolate: "cardinal",
                            clipEdge: !0,
                            duration: 500,
                            showXAxis: !1,
                            showYAxis: !1,
                            showLegend: !1,
                            useInteractiveGuideline: !0,
                            x: function (e) {
                                return e.x
                            },
                            y: function (e) {
                                return e.y
                            },
                            yDomain: [0, 9],
                            xAxis: {
                                tickFormat: function (e) {
                                    return s.widget5.days[e]
                                }
                            },
                            interactiveLayer: {tooltip: {gravity: "e", classes: "gravity-e"}}
                        }
                    },
                    data: []
                }
            },
            days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            ranges: s.dashboardData.widget5.ranges,
            currentRange: "",
            changeRange: function (e) {
                s.widget5.currentRange = e, angular.forEach(s.dashboardData.widget5.mainChart, function (t, a) {
                    s.widget5.mainChart.data[a] = {key: t.key, values: t.values[e]}
                }), angular.forEach(s.dashboardData.widget5.supporting, function (t, a) {
                    s.widget5.supporting.widgets[a].chart.data[0] = {key: t.chart.key, values: t.chart.values[e]}
                })
            },
            init: function () {
                s.widget5.changeRange("TW")
            }
        }, s.widget6 = {
            title: s.dashboardData.widget6.title,
            mainChart: {
                config: {refreshDataOnly: !0, deepWatchData: !0},
                options: {
                    chart: {
                        type: "pieChart",
                        color: ["#f44336", "#9c27b0", "#03a9f4", "#e91e63"],
                        height: 400,
                        margin: {top: 0, right: 0, bottom: 0, left: 0},
                        donut: !0,
                        clipEdge: !0,
                        cornerRadius: 0,
                        labelType: "percent",
                        padAngle: .02,
                        x: function (e) {
                            return e.label
                        },
                        y: function (e) {
                            return e.value
                        },
                        tooltip: {gravity: "s", classes: "gravity-s"}
                    }
                },
                data: []
            },
            footerLeft: s.dashboardData.widget6.footerLeft,
            footerRight: s.dashboardData.widget6.footerRight,
            ranges: s.dashboardData.widget6.ranges,
            currentRange: "",
            changeRange: function (e) {
                s.widget6.currentRange = e, angular.forEach(s.dashboardData.widget6.mainChart, function (t, a) {
                    s.widget6.mainChart.data[a] = {label: t.label, value: t.values[e]}
                })
            },
            init: function () {
                s.widget6.changeRange("TW")
            }
        }, s.widget7 = {
            title: s.dashboardData.widget7.title,
            ranges: s.dashboardData.widget7.ranges,
            schedule: s.dashboardData.widget7.schedule,
            currentRange: "T"
        }, s.widget8 = {
            title: s.dashboardData.widget8.title,
            mainChart: {
                options: {
                    chart: {
                        type: "pieChart",
                        color: ["#f44336", "#9c27b0", "#03a9f4", "#e91e63", "#ffc107"],
                        height: 400,
                        margin: {top: 0, right: 0, bottom: 0, left: 0},
                        labelType: "percent",
                        x: function (e) {
                            return e.label
                        },
                        y: function (e) {
                            return e.value
                        },
                        tooltip: {gravity: "s", classes: "gravity-s"}
                    }
                }, data: s.dashboardData.widget8.mainChart
            }
        }, s.widget9 = {
            title: s.dashboardData.widget9.title,
            weeklySpent: {
                title: s.dashboardData.widget9.weeklySpent.title,
                count: s.dashboardData.widget9.weeklySpent.count,
                chartData: []
            },
            totalSpent: {
                title: s.dashboardData.widget9.totalSpent.title,
                count: s.dashboardData.widget9.totalSpent.count,
                chartData: []
            },
            remaining: {
                title: s.dashboardData.widget9.remaining.title,
                count: s.dashboardData.widget9.remaining.count,
                chartData: []
            },
            totalBudget: s.dashboardData.widget9.totalBudget,
            chart: {
                config: {refreshDataOnly: !0, deepWatchData: !0},
                options: {
                    chart: {
                        type: "lineChart",
                        color: ["#00BCD4"],
                        height: 50,
                        margin: {top: 8, right: 0, bottom: 0, left: 0},
                        isArea: !0,
                        interpolate: "cardinal",
                        clipEdge: !0,
                        duration: 500,
                        showXAxis: !1,
                        showYAxis: !1,
                        showLegend: !1,
                        useInteractiveGuideline: !0,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        yDomain: [0, 9],
                        xAxis: {
                            tickFormat: function (e) {
                                return s.widget9.days[e]
                            }
                        },
                        interactiveLayer: {tooltip: {gravity: "e", classes: "gravity-e"}}
                    }
                }
            },
            days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            ranges: s.dashboardData.widget9.ranges,
            currentRange: "",
            changeRange: function (e) {
                s.widget9.currentRange = e, s.widget9.weeklySpent.chartData[0] = {
                    key: s.dashboardData.widget9.weeklySpent.chart.label,
                    values: s.dashboardData.widget9.weeklySpent.chart.values[e]
                }, s.widget9.totalSpent.chartData[0] = {
                    key: s.dashboardData.widget9.totalSpent.chart.label,
                    values: s.dashboardData.widget9.totalSpent.chart.values[e]
                }, s.widget9.remaining.chartData[0] = {
                    key: s.dashboardData.widget9.remaining.chart.label,
                    values: s.dashboardData.widget9.remaining.chart.values[e]
                }
            },
            init: function () {
                s.widget9.changeRange("TW")
            }
        }, s.widget10 = s.dashboardData.widget10, s.widget11 = {
            title: s.dashboardData.widget11.title,
            table: s.dashboardData.widget11.table,
            dtOptions: {
                dom: '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
                pagingType: "simple",
                autoWidth: !1,
                responsive: !0,
                order: [1, "asc"],
                columnDefs: [{width: "40", orderable: !1, targets: [0]}, {width: "20%", targets: [1, 2, 3, 4, 5]}]
            }
        }, s.nowWidget = {
            now: {second: "", minute: "", hour: "", day: "", month: "", year: ""}, ticker: function () {
                var e = moment();
                s.nowWidget.now = {
                    second: e.format("ss"),
                    minute: e.format("mm"),
                    hour: e.format("HH"),
                    day: e.format("D"),
                    weekDay: e.format("dddd"),
                    month: e.format("MMMM"),
                    year: e.format("YYYY")
                }
            }
        }, s.weatherWidget = s.dashboardData.weatherWidget, s.toggleSidenav = n, s.selectProject = o, s.selectedProject = s.projects[0], s.widget5.init(), s.widget6.init(), s.widget9.init(), s.nowWidget.ticker();
        var l = t(s.nowWidget.ticker, 1e3);
        e.$on("$destroy", function () {
            t.cancel(l)
        })
    }

    angular.module("app.dashboard-project").controller("DashboardProjectController", e), e.$inject = ["$scope", "$interval", "$mdSidenav", "DashboardData"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.dashboard-analytics", {
            url: "/dashboard-analytics",
            views: {
                "content@app": {
                    templateUrl: "app/main/apps/dashboards/analytics/dashboard-analytics.html",
                    controller: "DashboardAnalyticsController as vm"
                }
            },
            resolve: {
                DashboardData: ["apiResolver", function (e) {
                    return e.resolve("dashboard.analytics@get")
                }]
            }
        })
    }

    angular.module("app.dashboard-analytics", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e, t) {
        var a = this;
        a.dashboardData = e, a.colors = ["blue-bg", "blue-grey-bg", "orange-bg", "pink-bg", "purple-bg"], a.widget1 = {
            title: a.dashboardData.widget1.title,
            onlineUsers: a.dashboardData.widget1.onlineUsers,
            bigChart: {
                options: {
                    chart: {
                        type: "lineWithFocusChart",
                        color: ["#2196F3"],
                        height: 400,
                        margin: {top: 32, right: 32, bottom: 64, left: 48},
                        isArea: !0,
                        useInteractiveGuideline: !0,
                        duration: 1,
                        clipEdge: !0,
                        clipVoronoi: !1,
                        interpolate: "cardinal",
                        showLegend: !1,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        xAxis: {
                            showMaxMin: !1, tickFormat: function (e) {
                                var t = new Date((new Date).setDate((new Date).getDate() + e));
                                return d3.time.format("%b %d")(t)
                            }
                        },
                        yAxis: {showMaxMin: !1},
                        x2Axis: {
                            showMaxMin: !1, tickFormat: function (e) {
                                var t = new Date((new Date).setDate((new Date).getDate() + e));
                                return d3.time.format("%b %d")(t)
                            }
                        },
                        y2Axis: {showMaxMin: !1},
                        interactiveLayer: {tooltip: {gravity: "s", classes: "gravity-s"}},
                        legend: {margin: {top: 8, right: 0, bottom: 32, left: 0}, rightAlign: !1}
                    }
                }, data: a.dashboardData.widget1.bigChart.chart
            },
            sessions: {
                title: a.dashboardData.widget1.sessions.title,
                value: a.dashboardData.widget1.sessions.value,
                previous: a.dashboardData.widget1.sessions.previous,
                options: {
                    chart: {
                        type: "lineChart",
                        color: ["#03A9F4"],
                        height: 40,
                        margin: {top: 4, right: 4, bottom: 4, left: 4},
                        isArea: !0,
                        interpolate: "cardinal",
                        clipEdge: !0,
                        duration: 500,
                        showXAxis: !1,
                        showYAxis: !1,
                        showLegend: !1,
                        useInteractiveGuideline: !0,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        xAxis: {
                            tickFormat: function (e) {
                                var t = new Date((new Date).setDate((new Date).getDate() + e));
                                return d3.time.format("%A, %B %d, %Y")(t)
                            }
                        },
                        interactiveLayer: {tooltip: {gravity: "s", classes: "gravity-s"}}
                    }
                },
                data: a.dashboardData.widget1.sessions.chart
            },
            pageviews: {
                title: a.dashboardData.widget1.pageviews.title,
                value: a.dashboardData.widget1.pageviews.value,
                previous: a.dashboardData.widget1.pageviews.previous,
                options: {
                    chart: {
                        type: "lineChart",
                        color: ["#3F51B5"],
                        height: 40,
                        margin: {top: 4, right: 4, bottom: 4, left: 4},
                        isArea: !0,
                        interpolate: "cardinal",
                        clipEdge: !0,
                        duration: 500,
                        showXAxis: !1,
                        showYAxis: !1,
                        showLegend: !1,
                        useInteractiveGuideline: !0,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        xAxis: {
                            tickFormat: function (e) {
                                var t = new Date((new Date).setDate((new Date).getDate() + e));
                                return d3.time.format("%A, %B %d, %Y")(t)
                            }
                        },
                        interactiveLayer: {tooltip: {gravity: "s", classes: "gravity-s"}}
                    }
                },
                data: a.dashboardData.widget1.pageviews.chart
            },
            pagesSessions: {
                title: a.dashboardData.widget1.pagesSessions.title,
                value: a.dashboardData.widget1.pagesSessions.value,
                previous: a.dashboardData.widget1.pagesSessions.previous,
                options: {
                    chart: {
                        type: "lineChart",
                        color: ["#E91E63"],
                        height: 40,
                        margin: {top: 4, right: 4, bottom: 4, left: 4},
                        isArea: !0,
                        interpolate: "cardinal",
                        clipEdge: !0,
                        duration: 500,
                        showXAxis: !1,
                        showYAxis: !1,
                        showLegend: !1,
                        useInteractiveGuideline: !0,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        xAxis: {
                            tickFormat: function (e) {
                                var t = new Date((new Date).setDate((new Date).getDate() + e));
                                return d3.time.format("%A, %B %d, %Y")(t)
                            }
                        },
                        interactiveLayer: {tooltip: {gravity: "s", classes: "gravity-s"}}
                    }
                },
                data: a.dashboardData.widget1.pagesSessions.chart
            },
            avgSessionDuration: {
                title: a.dashboardData.widget1.avgSessionDuration.title,
                value: a.dashboardData.widget1.avgSessionDuration.value,
                previous: a.dashboardData.widget1.avgSessionDuration.previous,
                options: {
                    chart: {
                        type: "lineChart",
                        color: ["#009688"],
                        height: 40,
                        margin: {top: 4, right: 4, bottom: 4, left: 4},
                        isArea: !0,
                        interpolate: "cardinal",
                        clipEdge: !0,
                        duration: 500,
                        showXAxis: !1,
                        showYAxis: !1,
                        showLegend: !1,
                        useInteractiveGuideline: !0,
                        x: function (e) {
                            return e.x
                        },
                        y: function (e) {
                            return e.y
                        },
                        xAxis: {
                            tickFormat: function (e) {
                                var t = new Date((new Date).setDate((new Date).getDate() + e));
                                return d3.time.format("%A, %B %d, %Y")(t)
                            }
                        },
                        yAxis: {
                            tickFormat: function (e) {
                                var t = d3.time.format("%M:%S");
                                return t(new Date("2012", "0", "1", "0", "0", e))
                            }
                        },
                        interactiveLayer: {tooltip: {gravity: "s", classes: "gravity-s"}}
                    }
                },
                data: a.dashboardData.widget1.avgSessionDuration.chart
            }
        }, a.widget2 = {title: a.dashboardData.widget2.title}, a.widget3 = {
            title: a.dashboardData.widget3.title,
            pages: a.dashboardData.widget3.pages,
            ranges: a.dashboardData.widget3.ranges,
            currentRange: a.dashboardData.widget3.currentRange,
            changeRange: function (e) {
                a.widget3.currentRange(e)
            }
        }, a.widget4 = a.dashboardData.widget4, t.then(function (e) {
            a.widget2.map = a.dashboardData.widget2.map
        })
    }

    angular.module("app.dashboard-analytics").controller("DashboardAnalyticsController", e), e.$inject = ["DashboardData", "uiGmapGoogleMapApi"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.ui_typography", {
            url: "/ui/typography",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/typography/typography.html",
                    controller: "TypographyController as vm"
                }
            }
        })
    }

    angular.module("app.ui.typography", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e() {
    }

    angular.module("app.ui.typography").controller("TypographyController", e)
}(),function () {
    "use strict";
    function e(e, t, a) {
        function i(e) {
            t.show({
                controller: "CustomThemeDialogController",
                controllerAs: "vm",
                templateUrl: "app/main/ui/theme-colors/dialogs/custom-theme/custom-theme-dialog.html",
                parent: angular.element(a.body),
                targetEvent: e,
                clickOutsideToClose: !0
            })
        }

        var n = this;
        n.themes = e.themes, n.createTheme = i
    }

    angular.module("app.ui.theme-colors").controller("ThemeColorsController", e), e.$inject = ["fuseTheming", "$mdDialog", "$document"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.ui_material_colors", {
            url: "/ui/material-colors",
            views: {
                "content@app": {
                    templateUrl: "app/main/ui/material-colors/material-colors.html",
                    controller: "MaterialColorsController as vm"
                }
            }
        })
    }

    angular.module("app.ui.material-colors", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.palettes = e
    }

    angular.module("app.ui.material-colors").controller("MaterialColorsController", e), e.$inject = ["$mdColorPalette"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.ui_icons", {
            url: "/ui/icons",
            views: {"content@app": {templateUrl: "app/main/ui/icons/icons.html", controller: "IconsController as vm"}},
            resolve: {
                Icons: ["apiResolver", function (e) {
                    return e.resolve("icons@get")
                }]
            }
        })
    }

    angular.module("app.ui.icons", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.icons = e.icons
    }

    angular.module("app.ui.icons").controller("IconsController", e), e.$inject = ["Icons"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.pages_timeline", {
            url: "/pages/timeline",
            views: {
                "content@app": {
                    templateUrl: "app/main/pages/timeline/timeline.html",
                    controller: "TimelineController as vm"
                }
            },
            resolve: {
                Timeline: ["apiResolver", function (e) {
                    return e.resolve("timeline@get")
                }]
            }
        }).state("app.pages_timeline_left", {
            url: "/pages/timeline-left",
            views: {
                "content@app": {
                    templateUrl: "app/main/pages/timeline/timeline-left.html",
                    controller: "TimelineController as vm"
                }
            },
            resolve: {
                Timeline: ["apiResolver", function (e) {
                    return e.resolve("timeline@get")
                }]
            }
        }).state("app.pages_timeline_right", {
            url: "/pages/timeline-right",
            views: {
                "content@app": {
                    templateUrl: "app/main/pages/timeline/timeline-right.html",
                    controller: "TimelineController as vm"
                }
            },
            resolve: {
                Timeline: ["apiResolver", function (e) {
                    return e.resolve("timeline@get")
                }]
            }
        })
    }

    angular.module("app.pages.timeline", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.timeline = e.data
    }

    angular.module("app.pages.timeline").controller("TimelineController", e), e.$inject = ["Timeline"]
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_search", {
            url: "/pages/search",
            views: {
                "content@app": {
                    templateUrl: "app/main/pages/search/search.html",
                    controller: "SearchController as vm"
                }
            },
            resolve: {
                Classic: ["apiResolver", function (e) {
                    return e.resolve("search.classic@get")
                }], Mails: ["apiResolver", function (e) {
                    return e.resolve("search.mails@get")
                }], Users: ["apiResolver", function (e) {
                    return e.resolve("search.users@get")
                }], Contacts: ["apiResolver", function (e) {
                    return e.resolve("search.contacts@get")
                }]
            }
        }), t.addPart("app/main/pages/search")
    }

    angular.module("app.pages.search", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(),function () {
    "use strict";
    function e(e, t, a, i) {
        var n = this;
        n.colors = ["blue-bg", "blue-grey-bg", "orange-bg", "pink-bg", "purple-bg"], n.classic = e.data, n.mails = t.data, n.users = a.data, n.contacts = i.data
    }

    angular.module("app.pages.search").controller("SearchController", e), e.$inject = ["Classic", "Mails", "Users", "Contacts"]
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_profile", {
            url: "/pages/profile",
            views: {
                "content@app": {
                    templateUrl: "app/main/pages/profile/profile.html",
                    controller: "ProfileController as vm"
                }
            },
            resolve: {
                Timeline: ["apiResolver", function (e) {
                    return e.resolve("profile.timeline@get")
                }], About: ["apiResolver", function (e) {
                    return e.resolve("profile.about@get")
                }], PhotosVideos: ["apiResolver", function (e) {
                    return e.resolve("profile.photosVideos@get")
                }]
            }
        }), t.addPart("app/main/pages/profile")
    }

    angular.module("app.pages.profile", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(),function () {
    "use strict";
    function e(e, t, a) {
        var i = this;
        i.posts = e.posts, i.activities = e.activities, i.about = t.data, i.photosVideos = a.data
    }

    angular.module("app.pages.profile").controller("ProfileController", e), e.$inject = ["Timeline", "About", "PhotosVideos"]
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_maintenance", {
            url: "/pages/maintenance",
            views: {
                "main@": {templateUrl: "app/core/layouts/basic.html"},
                "content@app.pages_maintenance": {
                    templateUrl: "app/main/pages/maintenance/maintenance.html",
                    controller: "MaintenanceController as vm"
                }
            }
        }), t.addPart("app/main/pages/maintenance")
    }

    angular.module("app.pages.maintenance", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(),function () {
    "use strict";
    function e() {
    }

    angular.module("app.pages.maintenance").controller("MaintenanceController", e)
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_invoice", {
            url: "/pages/invoice",
            views: {
                "content@app": {
                    templateUrl: "app/main/pages/invoice/invoice.html",
                    controller: "InvoiceController as vm"
                }
            },
            resolve: {
                Invoice: ["apiResolver", function (e) {
                    return e.resolve("invoice@get")
                }]
            }
        }), t.addPart("app/main/pages/invoice")
    }

    angular.module("app.pages.invoice", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.invoice = e.data
    }

    angular.module("app.pages.invoice").controller("InvoiceController", e), e.$inject = ["Invoice"]
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("app.pages_coming-soon", {
            url: "/pages/coming-soon",
            views: {
                "main@": {templateUrl: "app/core/layouts/basic.html"},
                "content@app.pages_coming-soon": {
                    templateUrl: "app/main/pages/coming-soon/coming-soon.html",
                    controller: "ComingSoonController as vm"
                }
            }
        }), t.addPart("app/main/pages/coming-soon")
    }

    angular.module("app.pages.coming-soon", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.endTime = 147297579e4
    }

    angular.module("app.pages.coming-soon").controller("ComingSoonController", e)
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.components_widgets", {
            url: "/components/widgets",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/widgets/widgets.html",
                    controller: "WidgetsController as vm"
                }
            }
        })
    }

    angular.module("app.components.widgets", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.widget1 = {
            title: "WEEKLY TRANSACTIONS",
            value: 30342,
            lastWeekValue: 30002,
            lastWeekDiff: "+ 1,12%",
            detail: "This is the back side. You can show detailed information here."
        }, e.widget2 = {
            title: "SALES QUOTA",
            value: 40,
            lastWeekValue: 85,
            lastWeekDiff: "- 45%",
            detail: "This is the back side. You can show detailed information here."
        }, e.widget3 = {
            title: "BOUNCE RATE",
            value: 80,
            detail: "This is the back side. You can show detailed information here."
        }, e.widget4 = {
            title: "STOCK COUNT",
            value: 5583,
            lastWeekValue: 5583,
            lastWeekDiff: "- 0%",
            detail: "This is the back side. You can show detailed information here."
        }, e.widget5 = {title: "USERS ONLINE", value: 658}, e.widget6 = {
            title: "WASTELANDERS",
            value: 358
        }, e.widget7 = {title: "VAULTS SEALED", value: 24}, e.widget8 = {
            title: "VAULTS OPEN",
            value: 62
        }, e.widget9 = {title: "SONGS", value: 210}, e.widget10 = {
            title: "VIDEOS",
            value: 54
        }, e.widget11 = {title: "DOCUMENTS", value: 1252}, e.widget12 = {
            date: "June 27, Saturday",
            temperature: 28,
            event: "Sunny",
            icon: "icon-weather-cloudy",
            location: "New York, NY",
            detail: [{day: "Sun", icon: "icon-weather-rainy", temperature: 24, event: "Rainy"}, {
                day: "Mon",
                icon: "icon-weather-pouring",
                temperature: 23,
                event: "Rainy"
            }, {day: "Tue", icon: "icon-weather-cloudy", temperature: 29, event: "Overcast"}, {
                day: "Wed",
                icon: "icon-weather-partlycloudy",
                temperature: 28,
                event: "Sunny"
            }, {day: "Thu", icon: "icon-weather-partlycloudy", temperature: 31, event: "Sunny"}]
        }, e.widget13 = {
            date: "June 28, Saturday",
            temperature: 16,
            event: "Rainy",
            icon: "icon-weather-rainy",
            location: "Moscow",
            detail: [{day: "Sun", icon: "icon-weather-rainy", temperature: 24, event: "Rainy"}, {
                day: "Mon",
                icon: "icon-weather-pouring",
                temperature: 23,
                event: "Rainy"
            }, {day: "Tue", icon: "icon-weather-cloudy", temperature: 29, event: "Overcast"}, {
                day: "Wed",
                icon: "icon-weather-partlycloudy",
                temperature: 28,
                event: "Sunny"
            }, {day: "Thu", icon: "icon-weather-partlycloudy", temperature: 31, event: "Sunny"}]
        }, e.widget14 = {
            title: "Visitor Demographics",
            tabs: [{
                label: "30 days",
                groups: [{
                    title: "Genders",
                    data: [{title: "Male", value: 40}, {title: "Female", value: 41}]
                }, {title: "Age", data: [{title: "25 - 34", value: 32}, {title: "35 - 44", value: 85}]}]
            }, {
                label: "10 days",
                groups: [{
                    title: "Genders",
                    data: [{title: "Male", value: 32}, {title: "Female", value: 49}]
                }, {title: "Age", data: [{title: "25 - 34", value: 85}, {title: "35 - 44", value: 60}]}]
            }, {
                label: "1 day",
                groups: [{
                    title: "Genders",
                    data: [{title: "Male", value: 28}, {title: "Female", value: 60}]
                }, {title: "Age", data: [{title: "25 - 34", value: 17}, {title: "35 - 44", value: 64}]}]
            }]
        }, e.widget15 = {
            title: "CPU USAGE",
            value: 200,
            chart: {
                columns: [{
                    id: "CPU",
                    name: "CPU",
                    color: "white",
                    values: "30,200,100,400,150,250",
                    type: "spline"
                }]
            }
        }, e.widget16 = {
            title: "STOCK COUNT",
            value: 5583,
            lastWeekValue: 5583,
            lastWeekDiff: "- 0%",
            chart: {
                columns: [{
                    id: "STOCK",
                    name: "STOCK",
                    color: "purple",
                    values: "30,200,100,400,150,250",
                    type: "area"
                }]
            }
        }, e.widget17 = {
            title: "IO RATE",
            subtitle: "Showing last 5 hours",
            chart: {
                columns: [{
                    id: "Input",
                    name: "Input",
                    color: "green",
                    values: "30,75,290,400,150,250",
                    type: "spline"
                }, {id: "Output", name: "Output", color: "blue", values: "500,300,120,600,50,80", type: "spline"}]
            }
        }, e.widget18 = {
            title: "WEEKLY VISITORS", value: 30342, lastWeekValue: 30002, lastWeekDiff: "1.12%", chart: {
                columns: [{
                    id: "Visitors",
                    name: "Visitors",
                    color: "steelblue",
                    values: "30,75,290,400,150,250,75,210,125,92,30,75,290,400",
                    type: "bar"
                }]
            }
        }, e.widget19 = {
            title: "Google Inc.",
            subtitle: "NASDAQ: GOOG",
            value: "531.69",
            diff: "2.29%",
            chart: {
                columns: [{
                    id: "GOOG",
                    name: "GOOG",
                    color: "white",
                    values: "30,75,290,400,150,250,75,210,125,92,30,75,290,400",
                    type: "bar"
                }]
            }
        }
    }

    angular.module("app.components.widgets").controller("WidgetsController", e)
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.components_price-tables", {
            url: "/components/price-tables",
            views: {"content@app": {templateUrl: "app/main/components/price-tables/price-tables.html"}}
        })
    }

    angular.module("app.components.price-tables", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e() {
    }

    angular.module("app.components.price-tables").controller("PriceTablesController", e)
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.components_maps", {
            url: "/components/maps",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/maps/maps.html",
                    controller: "MapsController as vm"
                }, "tabContent@app.components_maps": {templateUrl: "app/main/components/maps/tabs/simple.html"}
            }
        }).state("app.components_maps.satellite", {
            url: "/satellite",
            views: {tabContent: {templateUrl: "app/main/components/maps/tabs/satellite.html"}}
        }).state("app.components_maps.terrain", {
            url: "/terrain",
            views: {tabContent: {templateUrl: "app/main/components/maps/tabs/terrain.html"}}
        }).state("app.components_maps.simple-marker", {
            url: "/simple-marker",
            views: {tabContent: {templateUrl: "app/main/components/maps/tabs/simple-marker.html"}}
        }).state("app.components_maps.custom-marker", {
            url: "/custom-marker",
            views: {tabContent: {templateUrl: "app/main/components/maps/tabs/custom-marker.html"}}
        }).state("app.components_maps.info-window", {
            url: "/info-window",
            views: {tabContent: {templateUrl: "app/main/components/maps/tabs/info-window.html"}}
        })
    }

    angular.module("app.components.maps", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e, t) {
        var a = this, i = e.current.name;
        switch (i) {
            case"app.components_maps":
                a.selectedIndex = 0;
                break;
            case"app.components_maps.satellite":
                a.selectedIndex = 1;
                break;
            case"app.components_maps.terrain":
                a.selectedIndex = 2;
                break;
            case"app.components_maps.simple-marker":
                a.selectedIndex = 3;
                break;
            case"app.components_maps.custom-marker":
                a.selectedIndex = 4;
                break;
            case"app.components_maps.info-window":
                a.selectedIndex = 5;
                break;
            default:
                a.selectedIndex = 0
        }
        t.then(function (e) {
            a.simpleMap = {
                center: {latitude: -34.397, longitude: 150.644},
                zoom: 8
            }, a.satelliteMap = {
                center: {latitude: -34.397, longitude: 150.644},
                zoom: 8,
                options: {mapTypeId: e.MapTypeId.SATELLITE}
            }, a.terrainMap = {
                center: {latitude: -34.397, longitude: 150.644},
                zoom: 8,
                options: {mapTypeId: e.MapTypeId.TERRAIN}
            }, a.simpleMarkerMap = {
                center: {latitude: -25.363882, longitude: 131.044922},
                zoom: 8,
                marker: {id: 0, coords: {latitude: -25.363882, longitude: 131.044922}}
            }, a.customMarkerMap = {
                center: {latitude: -25.363882, longitude: 131.044922},
                zoom: 8,
                marker: {
                    id: 0,
                    coords: {latitude: -25.363882, longitude: 131.044922},
                    options: {
                        icon: {
                            anchor: new e.Point(36, 36),
                            origin: new e.Point(0, 0),
                            url: "//google-developers.appspot.com/maps/documentation/javascript/examples/full/images/beachflag.png"
                        }
                    }
                }
            }
        })
    }

    angular.module("app.components.maps").controller("MapsController", e), e.$inject = ["$state", "uiGmapGoogleMapApi"]
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.components_cards", {
            url: "/components/cards",
            views: {
                "content@app": {
                    templateUrl: "app/main/components/cards/cards.html",
                    controller: "CardsController as vm"
                }
            },
            resolve: {
                Cards: ["apiResolver", function (e) {
                    return e.resolve("cards@get")
                }]
            }
        })
    }

    angular.module("app.components.cards", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.cards = e.data
    }

    angular.module("app.components.cards").controller("CardsController", e), e.$inject = ["Cards"]
}(),function () {
    "use strict";
    function e(e, t, a, i, n) {
        function o() {
            angular.forEach(f.tasks, function (e) {
                e.startDate && (e.startDate = new Date(e.startDate), e.startDateTimestamp = e.startDate.getTime()), e.dueDate && (e.dueDate = new Date(e.dueDate), e.dueDateTimestamp = e.dueDate.getTime())
            })
        }

        function s(e) {
            e.preventDefault(), e.stopPropagation()
        }

        function l(a, i) {
            t.show({
                controller: "TaskDialogController",
                controllerAs: "vm",
                templateUrl: "app/main/apps/todo/dialogs/task/task-dialog.html",
                parent: angular.element(e.body),
                targetEvent: a,
                clickOutsideToClose: !0,
                locals: {Task: i, Tasks: f.tasks, event: a}
            })
        }

        function d(e, t) {
            t.stopPropagation(), e.completed = !e.completed
        }

        function c(e) {
            a(e).toggle()
        }

        function r(e) {
            f.taskFilters[e] = !f.taskFilters[e], p()
        }

        function m(e) {
            f.taskFilters[e] = "" === f.taskFilters[e] ? !0 : "", p()
        }

        function u() {
            f.showAllTasks = !0, f.taskFilters = angular.copy(f.taskFiltersDefaults)
        }

        function p() {
            f.showAllTasks = !!angular.equals(f.taskFiltersDefaults, f.taskFilters)
        }

        function v(e) {
            return f.taskFilters.startDate === !0 ? e.startDate === new Date : !0
        }

        function h(e) {
            return f.taskFilters.dueDate === !0 ? !(null === e.dueDate || 0 === e.dueDate.length) : !0
        }

        function g(e) {
            var t = f.taskFilters.tags.indexOf(e);
            t > -1 ? f.taskFilters.tags.splice(t, 1) : f.taskFilters.tags.push(e), p()
        }

        function b(e) {
            return f.taskFilters.tags.indexOf(e) > -1
        }

        var f = this;
        f.tasks = i.data, f.tags = n.data, f.completed = [], f.colors = ["blue", "blue-grey", "orange", "pink", "purple"], f.projects = {
            creapond: "Project Creapond",
            withinpixels: "Project Withinpixels"
        }, f.selectedFilter = {
            filter: "Start Date",
            next: "Next 3 days"
        }, f.selectedProject = "creapond", f.taskFilters = {
            search: "",
            tags: [],
            completed: "",
            deleted: !1,
            important: "",
            starred: "",
            startDate: "",
            dueDate: ""
        }, f.taskFiltersDefaults = angular.copy(f.taskFilters), f.showAllTasks = !0, f.taskOrder = "", f.taskOrderReverse = !1, f.sortableOptions = {
            ghostClass: "todo-item-placeholder",
            handle: ".handle",
            forceFallback: !0,
            fallbackClass: "todo-item-ghost"
        }, f.preventDefault = s, f.openTaskDialog = l, f.toggleCompleted = d, f.toggleSidenav = c, f.toggleFilter = r, f.toggleFilterWithEmpty = m, f.filterByStartDate = v, f.filterByDueDate = h, f.resetFilters = u, f.toggleTagFilter = g, f.isTagFilterExists = b, o()
    }

    angular.module("app.todo").controller("TodoController", e), e.$inject = ["$document", "$mdDialog", "$mdSidenav", "Tasks", "Tags"]
}(),function () {
    "use strict";
    function e(e, t, a, i) {
        function n(e) {
            p.selectedMail = e, p.responsiveReadPane = !0, p.scrollPos = p.scrollEl.scrollTop(), p.scrollEl.scrollTop(96)
        }

        function o() {
            p.responsiveReadPane && (p.responsiveReadPane = !1, p.scrollEl.scrollTop(p.scrollPos))
        }

        function s(e, t) {
            t.stopPropagation(), e.starred = !e.starred
        }

        function l(e, t) {
            t && t.stopPropagation();
            var a = p.checked.indexOf(e);
            a > -1 ? p.checked.splice(a, 1) : p.checked.push(e)
        }

        function d(e) {
            return p.checked.indexOf(e) > -1
        }

        function c() {
            p.allChecked ? (p.checked = [], p.allChecked = !1) : (angular.forEach(p.inbox, function (e) {
                d(e) || l(e)
            }), p.allChecked = !0)
        }

        function r(a) {
            t.show({
                controller: "ComposeDialogController",
                controllerAs: "vm",
                locals: {selectedMail: void 0},
                templateUrl: "app/main/apps/mail/dialogs/compose/compose-dialog.html",
                parent: angular.element(e.body),
                targetEvent: a,
                clickOutsideToClose: !0
            })
        }

        function m(a) {
            t.show({
                controller: "ComposeDialogController",
                controllerAs: "vm",
                locals: {selectedMail: p.selectedMail},
                templateUrl: "app/main/apps/mail/dialogs/compose/compose-dialog.html",
                parent: angular.element(e.body),
                targetEvent: a,
                clickOutsideToClose: !0
            })
        }

        function u(e) {
            a(e).toggle()
        }

        var p = this;
        p.accounts = {
            creapond: "johndoe@creapond.com",
            withinpixels: "johndoe@withinpixels.com"
        }, p.checked = [], p.colors = ["blue-bg", "blue-grey-bg", "orange-bg", "pink-bg", "purple-bg"], p.selectedAccount = "creapond", p.selectedMail = {}, p.toggleSidenav = u, p.responsiveReadPane = !1, p.scrollPos = 0, p.scrollEl = angular.element("#content > md-content"), p.inbox = i.data, p.selectedMail = p.inbox[0], p.checkAll = c, p.closeReadPane = o, p.composeDialog = r, p.isChecked = d, p.replyDialog = m, p.selectMail = n, p.toggleStarred = s, p.toggleCheck = l
    }

    angular.module("app.mail").controller("MailController", e), e.$inject = ["$document", "$mdDialog", "$mdSidenav", "Inbox"]
}(),function () {
    "use strict";
    function e(e, t) {
        e.state("app.file-manager", {
            url: "/file-manager",
            views: {
                "content@app": {
                    templateUrl: "app/main/apps/file-manager/file-manager.html",
                    controller: "FileManagerController as vm"
                }
            },
            resolve: {
                Documents: ["apiResolver", function (e) {
                    return e.resolve("fileManager.documents@get")
                }]
            }
        }), t.addPart("app/main/apps/file-manager")
    }

    angular.module("app.file-manager", []).config(e), e.$inject = ["$stateProvider", "$translatePartialLoaderProvider"]
}(),function () {
    "use strict";
    function e(e, t) {
        function a(e) {
            s.selected = e
        }

        function i(e) {
            s.selected = e, n("details-sidenav")
        }

        function n(t) {
            e(t).toggle()
        }

        function o() {
            s.currentView = "list" === s.currentView ? "grid" : "list"
        }

        var s = this;
        s.accounts = {
            creapond: "johndoe@creapond.com",
            withinpixels: "johndoe@withinpixels.com"
        }, s.selectedAccount = "creapond", s.currentView = "list", s.showDetails = !0, s.path = t.data.path, s.folders = t.data.folders, s.files = t.data.files, s.selected = s.files[0], s.select = a, s.toggleDetails = i, s.toggleSidenav = n, s.toggleView = o
    }

    angular.module("app.file-manager").controller("FileManagerController", e), e.$inject = ["$mdSidenav", "Documents"]
}(),function () {
    "use strict";
    function e(e, t) {
        function a() {
            c.calendarView.calendar.next()
        }

        function i() {
            c.calendarView.calendar.prev()
        }

        function n(e, t) {
            l(e, t)
        }

        function o(e, t, a) {
            d("add", !1, e, t, a)
        }

        function s(e) {
            var t = new Date, a = new Date;
            d("add", !1, t, a, e)
        }

        function l(a, i) {
            e.show({
                controller: "EventDetailDialogController",
                controllerAs: "vm",
                templateUrl: "app/main/apps/calendar/dialogs/event-detail/event-detail-dialog.html",
                parent: angular.element(t.body),
                targetEvent: i,
                clickOutsideToClose: !0,
                locals: {calendarEvent: a, showEventFormDialog: d, event: i}
            })
        }

        function d(a, i, n, o, s) {
            var l = {type: a, calendarEvent: i, start: n, end: o};
            e.show({
                controller: "EventFormDialogController",
                controllerAs: "vm",
                templateUrl: "app/main/apps/calendar/dialogs/event-form/event-form-dialog.html",
                parent: angular.element(t.body),
                targetEvent: s,
                clickOutsideToClose: !0,
                locals: {dialogData: l}
            }).then(function (e) {
                if ("add" === e.type)c.events[0].push({
                    id: c.events[0].length + 20,
                    title: e.calendarEvent.title,
                    start: e.calendarEvent.start,
                    end: e.calendarEvent.end
                }); else for (var t = 0; t < c.events[0].length; t++)if (c.events[0][t].id === e.calendarEvent.id) {
                    c.events[0][t] = {
                        title: e.calendarEvent.title,
                        start: e.calendarEvent.start,
                        end: e.calendarEvent.end
                    };
                    break
                }
            })
        }

        var c = this, r = new Date, m = r.getDate(), u = r.getMonth(), p = r.getFullYear();
        c.events = [[{id: 1, title: "All Day Event", start: new Date(p, u, 1), end: null}, {
            id: 2,
            title: "Long Event",
            start: new Date(p, u, m - 5),
            end: new Date(p, u, m - 2)
        }, {id: 3, title: "Some Event", start: new Date(p, u, m - 3, 16, 0), end: null}, {
            id: 4,
            title: "Repeating Event",
            start: new Date(p, u, m + 4, 16, 0),
            end: null
        }, {
            id: 5,
            title: "Birthday Party",
            start: new Date(p, u, m + 1, 19, 0),
            end: new Date(p, u, m + 1, 22, 30)
        }, {id: 6, title: "All Day Event", start: new Date(p, u, m + 8, 16, 0), end: null}, {
            id: 7,
            title: "Long Event",
            start: new Date(p, u, m + 12, 16, 0),
            end: null
        }, {id: 8, title: "Repeating Event", start: new Date(p, u, m + 14, 2, 0), end: null}, {
            id: 9,
            title: "Repeating Event",
            start: new Date(p, u, m + 14, 4, 0),
            end: null
        }, {id: 10, title: "Repeating Event", start: new Date(p, u, m + 14, 2, 0), end: null}, {
            id: 11,
            title: "Repeating Event",
            start: new Date(p, u, m + 14, 4, 0),
            end: null
        }, {id: 12, title: "Repeating Event", start: new Date(p, u, m + 14, 2, 0), end: null}, {
            id: 13,
            title: "Repeating Event",
            start: new Date(p, u, m + 14, 4, 0),
            end: null
        }, {id: 14, title: "Conference", start: new Date(p, u, m + 17, 4, 0), end: null}, {
            id: 15,
            title: "Meeting",
            start: new Date(p, u, m + 22, 4, 0),
            end: new Date(p, u, m + 24, 4, 0)
        }]], c.calendarUiConfig = {
            calendar: {
                editable: !0,
                eventLimit: !0,
                header: "",
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                viewRender: function (e) {
                    c.calendarView = e, c.calendar = c.calendarView.calendar, c.currentMonthShort = c.calendar.getDate().format("MMM")
                },
                columnFormat: {month: "ddd", week: "ddd M", day: "ddd M"},
                eventClick: n,
                selectable: !0,
                selectHelper: !0,
                select: o
            }
        }, c.addEvent = s, c.next = a, c.prev = i
    }

    angular.module("app.calendar").controller("CalendarController", e), e.$inject = ["$mdDialog", "$document"]
}(),function () {
    "use strict";
    angular.module("app.core", ["ngAnimate", "ngAria", "ngCookies", "ngMessages", "ngResource", "ngRoute", "ngSanitize", "ngTouch", "ngMaterial", "angular-chartist", "chart.js", "datatables", "gridshore.c3js.chart", "nvd3", "pascalprecht.translate", "timer", "ui.router", "uiGmapgoogle-maps", "textAngular", "ng-sortable"])
}(),function () {
    "use strict";
    function e(e) {
        function t() {
            n.panelOpen = !n.panelOpen
        }

        function a(t) {
            e.setActiveTheme(t)
        }

        function i() {
            var e = angular.element("body");
            e.toggleClass("boxed", "boxed" === n.layoutMode)
        }

        var n = this;
        n.panelOpen = !1, n.themes = e.themes, n.layoutMode = "wide", n.toggleOptionsPanel = t, n.setActiveTheme = a, n.updateLayoutMode = i
    }

    angular.module("app.core").controller("ThemeOptionsController", e), e.$inject = ["fuseTheming"]
}(),function () {
    "use strict";
    function e() {
        function e() {
            return t.mobile()
        }

        var t = new MobileDetect(window.navigator.userAgent), a = {isMobile: e};
        return a
    }

    angular.module("app.core").factory("fuseHelper", e)
}(),function () {
    "use strict";
    function e(e) {
        var t = {};
        return t.dataUrl = "app/core/services/api/data/", t.activities = e(t.dataUrl + "notifications/activities.json", null, {get: {method: "get"}}), t.dashboard = {
            project: e(t.dataUrl + "dashboard/project/data.json", null, {get: {method: "get"}}),
            server: e(t.dataUrl + "dashboard/server/data.json", null, {get: {method: "get"}}),
            analytics: e(t.dataUrl + "dashboard/analytics/data.json", null, {get: {method: "get"}})
        }, t.cards = e(t.dataUrl + "cards/cards.json", null, {get: {method: "get"}}), t.contacts = e(t.dataUrl + "notifications/contacts.json", null, {get: {method: "get"}}), t.events = e(t.dataUrl + "notifications/events.json", null, {get: {method: "get"}}), t.fileManager = {documents: e(t.dataUrl + "file-manager/documents.json", null, {get: {method: "get"}})}, t.icons = e("assets/icons/selection.json", null, {get: {method: "get"}}), t.invoice = e(t.dataUrl + "invoice/invoice.json", null, {get: {method: "get"}}), t.mail = {inbox: e(t.dataUrl + "mail/inbox.json", null, {get: {method: "get"}})}, t.notes = e(t.dataUrl + "notifications/notes.json", null, {get: {method: "get"}}), t.profile = {
            timeline: e(t.dataUrl + "profile/timeline.json", null, {get: {method: "get"}}),
            about: e(t.dataUrl + "profile/about.json", null, {get: {method: "get"}}),
            photosVideos: e(t.dataUrl + "profile/photos-videos.json", null, {get: {method: "get"}})
        }, t.search = {
            classic: e(t.dataUrl + "search/classic.json", null, {get: {method: "get"}}),
            mails: e(t.dataUrl + "search/mails.json", null, {get: {method: "get"}}),
            users: e(t.dataUrl + "search/users.json", null, {get: {method: "get"}}),
            contacts: e(t.dataUrl + "search/contacts.json", null, {get: {method: "get"}})
        }, t.tables = {
            employees: e(t.dataUrl + "tables/employees.json", null, {get: {method: "get"}}),
            employees100: e(t.dataUrl + "tables/employees100.json", null, {get: {method: "get"}})
        }, t.timeline = e(t.dataUrl + "timeline/timeline.json", null, {get: {method: "get"}}), t.todo = {
            tasks: e(t.dataUrl + "todo/tasks.json", null, {get: {method: "get"}}),
            tags: e(t.dataUrl + "todo/tags.json", null, {get: {method: "get"}})
        }, t
    }

    function t(e, t) {
        function a(t, a) {
            var n = t.split("@"), o = n[0], s = n[1], l = a || {};
            if (!o || !s)return console.error("apiResolver.resolve requires correct action parameter (ResourceName@methodName)"), !1;
            var d = e.defer(), c = i(o);
            return c ? c[s](l, function (e) {
                d.resolve(e)
            }, function (e) {
                d.reject(e)
            }) : (console.error('Resource "' + o + '" is not defined in the api service!'), d.reject('Resource "' + o + '" is not defined in the api service!')), d.promise
        }

        function i(e) {
            for (var a = e.split("."), i = t, n = 0; n < a.length; n++) {
                if (angular.isUndefined(i[a[n]])) {
                    console.error('Resource part "' + a[n] + '" is not defined!'), i = !1;
                    break
                }
                i = i[a[n]]
            }
            return i ? i : !1
        }

        var n = {resolve: a};
        return n
    }

    angular.module("app.core").factory("api", e).factory("apiResolver", t), e.$inject = ["$resource"], t.$inject = ["$q", "api"]
}(),function () {
    "use strict";
    function e(e, t) {
        function a() {
            i() && (n.flipped = !n.flipped, t.toggleClass("flipped", n.flipped))
        }

        function i() {
            return angular.isDefined(e.flippable) && e.flippable === !0
        }

        var n = this;
        n.flipped = !1, n.flip = a
    }

    function t() {
        return {
            restrict: "E",
            scope: {flippable: "=?"},
            controller: "MsWidgetController",
            transclude: !0,
            compile: function (e) {
                return e.addClass("ms-widget"), function (e, t, a, i, n) {
                    n(function (e) {
                        t.empty(), t.append(e)
                    })
                }
            }
        }
    }

    function a() {
        return {
            restrict: "E", require: "^msWidget", transclude: !0, compile: function (e) {
                return e.addClass("ms-widget-front"), function (e, t, a, i, n) {
                    n(function (e) {
                        t.empty(), t.append(e)
                    }), e.flipWidget = i.flip
                }
            }
        }
    }

    function i() {
        return {
            restrict: "E", require: "^msWidget", transclude: !0, compile: function (e) {
                return e.addClass("ms-widget-back"), function (e, t, a, i, n) {
                    n(function (e) {
                        t.empty(), t.append(e)
                    }), e.flipWidget = i.flip
                }
            }
        }
    }

    angular.module("app.core").controller("MsWidgetController", e).directive("msWidget", t).directive("msWidgetFront", a).directive("msWidgetBack", i), e.$inject = ["$scope", "$element"]
}(),function () {
    "use strict";
    function e() {
        return {
            scope: !0, compile: function (e) {
                return e.addClass("ms-timeline"), function (e, t) {
                    function a() {
                        return t.outerHeight() <= i.height()
                    }

                    var i = angular.element("#content > md-content");
                    e.timelineItemLimit = 1, e.$on("msCard::cardTemplateLoaded", function (t, i) {
                        var n = angular.element(i[0]), o = n.find("img");
                        o.length > 0 ? (o.on("load", function () {
                            a() && e.$evalAsync(function () {
                                e.timelineItemLimit++
                            })
                        }), e.$on("$destroy", function () {
                            o.off("load")
                        })) : a() && e.$evalAsync(function () {
                            e.timelineItemLimit++
                        })
                    }), i.on("scroll", function () {
                        Math.ceil(i.scrollTop() + i.height()) >= t.outerHeight() && e.$evalAsync(function () {
                            e.timelineItemLimit++
                        })
                    }), e.$on("$destroy", function () {
                        i.off("scroll")
                    })
                }
            }
        }
    }

    angular.module("app.core").directive("msTimeline", e)
}(),function () {
    "use strict";
    function e() {
        return {
            restrict: "A", require: "^mdSidenav", link: function (e, t, a, i) {
                e.$watch(function () {
                    return i.isOpen() && !i.isLockedOpen()
                }, function (e, a) {
                    angular.isUndefined(e) || t.parents(".page-layout").toggleClass("sidenav-open", e)
                })
            }
        }
    }

    angular.module("app.core").directive("msSidenavHelper", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            t = angular.extend({}, t, e)
        }

        var t = {
            wheelSpeed: 1,
            wheelPropagation: !1,
            swipePropagation: !0,
            minScrollbarLength: null,
            maxScrollbarLength: null,
            useBothWheelAxes: !1,
            useKeyboard: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: !0
        };
        this.config = e, this.$get = function () {
            function e() {
                return t
            }

            var a = {getConfig: e};
            return a
        }
    }

    function t(e, t, a, i) {
        return {
            restrict: "AE", compile: function (n) {
                return a.getConfig("disableCustomScrollbars") ? !1 : a.getConfig("disableCustomScrollbarsOnMobile") && i.isMobile() ? !1 : (n.addClass("ms-scroll"), function (a, i, n) {
                    function o() {
                        PerfectScrollbar.update(i[0])
                    }

                    var s = {};
                    n.msScroll && (s = a.$eval(n.msScroll)), s = angular.extend({}, t.getConfig(), s), e(function () {
                        PerfectScrollbar.initialize(i[0], s)
                    }, 0), i.on("mouseenter", o), a.$watch(function () {
                        return i.prop("scrollHeight")
                    }, function (e, t) {
                        angular.isUndefined(e) || angular.equals(e, t) || o()
                    }), a.$watch(function () {
                        return i.prop("scrollWidth")
                    }, function (e, t) {
                        angular.isUndefined(e) || angular.equals(e, t) || o()
                    }), a.$on("$destroy", function () {
                        i.off("mouseenter"), PerfectScrollbar.destroy(i[0])
                    })
                })
            }
        }
    }

    angular.module("app.core").provider("msScrollConfig", e).directive("msScroll", t), t.$inject = ["$timeout", "msScrollConfig", "fuseConfig", "fuseHelper"]
}(),function () {
    "use strict";
    function e() {
        return {
            restrict: "A", link: function (e, t) {
                var a = angular.element('<div class="ms-responsive-table-wrapper"></div>');
                t.after(a), a.append(t)
            }
        }
    }

    angular.module("app.core").directive("msResponsiveTable", e)
}(),function () {
    "use strict";
    function e() {
        return {
            restrict: "A", scope: {msRandomClass: "="}, link: function (e, t) {
                var a = e.msRandomClass[Math.floor(Math.random() * e.msRandomClass.length)];
                t.addClass(a)
            }
        }
    }

    angular.module("app.core").directive("msRandomClass", e)
}(),function () {
    "use strict";
    function e() {
        function e(e, t) {
            o = {scope: e, element: t}
        }

        function t() {
            return o.scope.isNavFoldedOpen()
        }

        function a() {
            o.scope.toggleFold()
        }

        function i() {
            o.scope.openFolded()
        }

        function n() {
            o.scope.closeFolded()
        }

        var o = {}, s = {setFoldable: e, isNavFoldedOpen: t, toggleFold: a, openFolded: i, closeFolded: n};
        return s
    }

    function t(e, t, a) {
        return {
            restrict: "A", link: function (i, n, o) {
                function s() {
                    return p
                }

                function l() {
                    u = !u, u ? d() : m()
                }

                function d() {
                    n.addClass("folded"), v.addClass("navigation-folded"), t.$broadcast("msNav::forceCollapse"), n.find("ms-nav").scrollTop(0), n.append(h), h.on("mouseenter touchstart", function (e) {
                        c(e), p = !0
                    })
                }

                function c(e) {
                    angular.isDefined(e) && e.preventDefault(), n.addClass("folded-open"), t.$broadcast("msNav::expandMatchingToggles"), n.find(h).remove(), n.parent().append(g), g.on("mouseenter touchstart", function (e) {
                        r(e), p = !1
                    })
                }

                function r(e) {
                    angular.isDefined(e) && e.preventDefault(), t.$broadcast("msNav::forceCollapse"), n.find("ms-nav").scrollTop(0), n.removeClass("folded-open"), n.parent().find(g).remove(), n.append(h), h.on("mouseenter touchstart", function (e) {
                        c(e), p = !0
                    })
                }

                function m() {
                    n.removeClass("folded"), v.removeClass("navigation-folded"), t.$broadcast("msNav::expandMatchingToggles"), n.off("mouseenter mouseleave")
                }

                var u = "true" === o.msNavIsFoldedDirective, p = !1, v = angular.element(e[0].body), h = angular.element('<div id="navigation-fold-open-overlay"></div>'), g = angular.element('<div id="navigation-fold-close-overlay"></div>');
                a.setFoldable(i, n, u), u ? d() : m(), i.toggleFold = l, i.openFolded = c, i.closeFolded = r, i.isNavFoldedOpen = s, i.$on("$destroy", function () {
                    h.off("mouseenter touchstart"), g.off("mouseenter touchstart"), n.off("mouseenter mouseleave")
                })
            }
        }
    }

    function a() {
        function e() {
            return d
        }

        function t() {
            d = !0
        }

        function a() {
            d = !1
        }

        function i(e, t) {
            c.push({element: e, scope: t})
        }

        function n() {
            return r
        }

        function o(e, t) {
            r.push({element: e, scope: t})
        }

        function s() {
            r = []
        }

        var l = this, d = !1, c = [], r = [];
        l.isDisabled = e, l.enable = a, l.disable = t, l.setToggleItem = i, l.getLockedItems = n, l.setLockedItem = o, l.clearLockedItems = s
    }

    function i(e, t, a) {
        return {
            restrict: "E", scope: {}, controller: "MsNavController", compile: function (i) {
                return i.addClass("ms-nav"), function () {
                    e.$broadcast("msNav::expandMatchingToggles"), e.$on("$stateChangeSuccess", function () {
                        e.$broadcast("msNav::expandMatchingToggles"), t.when("navigation").then(function (e) {
                            e.close(), a.isNavFoldedOpen() && a.closeFolded()
                        })
                    })
                }
            }
        }
    }

    function n() {
        return {
            restrict: "A", compile: function (e) {
                return e.addClass("ms-nav-title"), function () {
                }
            }
        }
    }

    function o() {
        return {
            restrict: "AE", compile: function (e) {
                return e.addClass("ms-nav-button"), function () {
                }
            }
        }
    }

    function s(e, t, a, i) {
        return {
            restrict: "A", require: "^msNav", scope: !0, compile: function (n, o) {
                return n.addClass("ms-nav-toggle"), angular.isUndefined(o.collapsed) && (o.collapsed = !0), n.attr("collapsed", o.collapsed), function (n, o, s, l) {
                    function d() {
                        l.isDisabled() || (l.disable(), c() ? (l.clearLockedItems(), n.$emit("msNav::pushToLockedList"), e.$broadcast("msNav::collapse"), m().then(function () {
                            l.enable()
                        })) : n.$broadcast("msNav::forceCollapse"))
                    }

                    function c() {
                        return "true" === o.attr("collapsed")
                    }

                    function r() {
                        return !c()
                    }

                    function m() {
                        var e = t.defer();
                        if (r())return e.reject({error: !0}), e.promise;
                        o.attr("collapsed", !1);
                        var i = angular.element(o.find("ms-nav-toggle-items")[0]);
                        i.css({position: "absolute", visibility: "hidden", display: "block", height: "auto"});
                        var s = i[0].offsetHeight;
                        return i.css({
                            position: "",
                            visibility: "",
                            display: "",
                            height: ""
                        }), n.$evalAsync(function () {
                            a.animate(i, {
                                display: "block",
                                height: "0px"
                            }, {height: s + "px"}, p.expandAnimation).then(function () {
                                i.addClass(p.expanded), i.css({height: ""}), e.resolve({success: !0})
                            })
                        }), e.promise
                    }

                    function u() {
                        var e = t.defer();
                        if (c())return e.reject({error: !0}), e.promise;
                        o.attr("collapsed", !0);
                        var i = angular.element(o.find("ms-nav-toggle-items")[0]), s = i[0].offsetHeight;
                        return n.$evalAsync(function () {
                            a.animate(i, {height: s + "px"}, {height: "0px"}, p.collapseAnimation).then(function () {
                                i.removeClass(p.expanded), i.css({display: "", height: ""}), e.resolve({success: !0})
                            })
                        }), e.promise
                    }

                    var p = {
                        expanded: "expanded",
                        expandAnimation: "expand-animation",
                        collapseAnimation: "collapse-animation"
                    }, v = o.find("a"), h = [];
                    angular.forEach(v, function (e) {
                        var t = angular.element(e).attr("ui-sref");
                        angular.isUndefined(t) || h.push(t)
                    }), l.setToggleItem(o, n), o.children(".ms-nav-button").on("click", d), n.$on("$destroy", function () {
                        o.children(".ms-nav-button").off("click")
                    }), n.$on("msNav::collapse", function () {
                        var e = l.getLockedItems(), t = !1;
                        angular.forEach(e, function (e) {
                            angular.equals(e.scope, n) && (t = !0)
                        }), t || u().then(function () {
                            l.enable()
                        })
                    }), n.$on("msNav::forceCollapse", function () {
                        u().then(function () {
                            l.enable()
                        })
                    }), n.$on("msNav::expandMatchingToggles", function () {
                        var e = i.current.name, t = !1;
                        angular.forEach(h, function (a) {
                            e === a && (t = !0)
                        }), t ? m() : u()
                    }), n.$on("msNav::pushToLockedList", function () {
                        l.setLockedItem(o, n)
                    })
                }
            }
        }
    }

    angular.module("app.core").factory("msNavFoldService", e).directive("msNavIsFolded", t).controller("MsNavController", a).directive("msNav", i).directive("msNavTitle", n).directive("msNavButton", o).directive("msNavToggle", s), t.$inject = ["$document", "$rootScope", "msNavFoldService"], i.$inject = ["$rootScope", "$mdComponentRegistry", "msNavFoldService"], s.$inject = ["$rootScope", "$q", "$animate", "$state"]
}(),function () {
    "use strict";
    function e() {
        return {
            restrict: "E",
            scope: {templatePath: "=template", card: "=ngModel"},
            template: '<div class="ms-card-content-wrapper" ng-include="templatePath" onload="cardTemplateLoaded()"></div>',
            compile: function (e) {
                return e.addClass("ms-card"), function (e, t) {
                    function a() {
                        e.$emit("msCard::cardTemplateLoaded", t)
                    }

                    e.cardTemplateLoaded = a
                }
            }
        }
    }

    angular.module("app.core").directive("msCard", e)
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.date = new Date, t.settings = {notify: !0, cloud: !1, retro: !0}, e.events.get({}, function (e) {
            t.events = e.data
        }), e.notes.get({}, function (e) {
            t.notes = e.data
        }), e.activities.get({}, function (e) {
            t.activities = e.data
        })
    }

    angular.module("app.quick-panel").controller("QuickPanelController", e), e.$inject = ["api"]
}(),function () {
    "use strict";
    function e(e) {
        e.addPart("app/sidenav/navigation")
    }

    angular.module("app.navigation", []).config(e), e.$inject = ["$translatePartialLoaderProvider"]
}(),function () {
    "use strict";
    function e() {
        var e = this;
        e.msScrollOptions = {suppressScrollX: !0}
    }

    angular.module("app.navigation").controller("NavigationController", e)
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            i = e
        }

        function t(e) {
            n = e
        }

        var a;
        angular.injector(["ngCookies"]).invoke(["$cookies", function (e) {
            a = e
        }]);
        var i, n;
        this.setRegisteredPalettes = e, this.setRegisteredThemes = t, this.$get = function () {
            function e() {
                return i
            }

            function t() {
                return n
            }

            function o(e) {
                return angular.isUndefined(l.themes.list[e]) ? angular.isUndefined(l.themes.list["default"]) ? void console.error('You must have at least one theme named "default"') : (console.warn('The theme "' + e + '" does not exist! Falling back to the "default" theme.'), l.themes.active.name = "default", l.themes.active.theme = l.themes.list["default"], void a.put("selectedTheme", l.themes.active.name)) : (l.themes.active.name = e, l.themes.active.theme = l.themes.list[e], void a.put("selectedTheme", e))
            }

            function s(e) {
                l.themes.list = e
            }

            var l = {
                getRegisteredPalettes: e,
                getRegisteredThemes: t,
                setActiveTheme: o,
                setThemesList: s,
                themes: {list: {}, active: {name: "", theme: {}}}
            };
            return l
        }
    }

    angular.module("app.core").provider("fuseTheming", e)
}(),function () {
    "use strict";
    function e(e, t, a, i) {
        var n;
        angular.injector(["ngCookies"]).invoke(["$cookies", function (e) {
            n = e
        }]);
        var o = n.getObject("customTheme");
        o && (a.custom = o), e.alwaysWatchTheme(!0), angular.forEach(t, function (t) {
            e.definePalette(t.name, t.options)
        }), angular.forEach(a, function (t, a) {
            e.theme(a).primaryPalette(t.primary.name, t.primary.hues).accentPalette(t.accent.name, t.accent.hues).warnPalette(t.warn.name, t.warn.hues).backgroundPalette(t.background.name, t.background.hues)
        }), i.setRegisteredPalettes(e._PALETTES), i.setRegisteredThemes(e._THEMES)
    }

    angular.module("app.core").config(e), e.$inject = ["$mdThemingProvider", "fusePalettes", "fuseThemes", "fuseThemingProvider"]
}(),function () {
    "use strict";
    var e = {
        "default": {
            primary: {
                name: "fuse-pale-blue",
                hues: {"default": "700", "hue-1": "500", "hue-2": "600", "hue-3": "A100"}
            },
            accent: {name: "light-blue", hues: {"default": "600", "hue-1": "400", "hue-2": "600", "hue-3": "A700"}},
            warn: {name: "red"},
            background: {name: "grey", hues: {"default": "A100", "hue-1": "100", "hue-2": "50", "hue-3": "300"}}
        },
        pink: {
            primary: {name: "blue-grey", hues: {"default": "800", "hue-1": "600", "hue-2": "400", "hue-3": "A100"}},
            accent: {name: "pink", hues: {"default": "400", "hue-1": "300", "hue-2": "600", "hue-3": "A100"}},
            warn: {name: "blue"},
            background: {name: "grey", hues: {"default": "A100", "hue-1": "100", "hue-2": "50", "hue-3": "300"}}
        },
        teal: {
            primary: {name: "fuse-blue", hues: {"default": "900", "hue-1": "600", "hue-2": "500", "hue-3": "A100"}},
            accent: {name: "teal", hues: {"default": "500", "hue-1": "400", "hue-2": "600", "hue-3": "A100"}},
            warn: {name: "deep-orange"},
            background: {name: "grey", hues: {"default": "A100", "hue-1": "100", "hue-2": "50", "hue-3": "300"}}
        }
    };
    angular.module("app.core").constant("fuseThemes", e)
}(),function () {
    "use strict";
    var e = [{
        name: "fuse-blue",
        options: {
            50: "#ebf1fa",
            100: "#c2d4ef",
            200: "#9ab8e5",
            300: "#78a0dc",
            400: "#5688d3",
            500: "#3470ca",
            600: "#2e62b1",
            700: "#275498",
            800: "#21467e",
            900: "#1a3865",
            A100: "#c2d4ef",
            A200: "#9ab8e5",
            A400: "#5688d3",
            A700: "#275498",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 A100",
            contrastStrongLightColors: "300 400"
        }
    }, {
        name: "fuse-pale-blue",
        options: {
            50: "#ececee",
            100: "#c5c6cb",
            200: "#9ea1a9",
            300: "#7d818c",
            400: "#5c616f",
            500: "#3c4252",
            600: "#353a48",
            700: "#2d323e",
            800: "#262933",
            900: "#1e2129",
            A100: "#c5c6cb",
            A200: "#9ea1a9",
            A400: "#5c616f",
            A700: "#2d323e",
            contrastDefaultColor: "light",
            contrastDarkColors: "50 100 200 A100",
            contrastStrongLightColors: "300 400"
        }
    }];
    angular.module("app.core").constant("fusePalettes", e)
}(),function () {
    "use strict";
    function e(e, t) {
        function a() {
            var t = e.getRegisteredThemes(), a = e.getRegisteredPalettes();
            angular.forEach(t, function (e) {
                d[e.name] = {}, angular.forEach(e.colors, function (t, i) {
                    d[e.name][i] = {
                        name: t.name,
                        levels: {
                            "default": {
                                color: o(a[t.name][t.hues["default"]].value),
                                contrast1: o(a[t.name][t.hues["default"]].contrast, 1),
                                contrast2: o(a[t.name][t.hues["default"]].contrast, 2),
                                contrast3: o(a[t.name][t.hues["default"]].contrast, 3),
                                contrast4: o(a[t.name][t.hues["default"]].contrast, 4)
                            },
                            hue1: {
                                color: o(a[t.name][t.hues["hue-1"]].value),
                                contrast1: o(a[t.name][t.hues["hue-1"]].contrast, 1),
                                contrast2: o(a[t.name][t.hues["hue-1"]].contrast, 2),
                                contrast3: o(a[t.name][t.hues["hue-1"]].contrast, 3),
                                contrast4: o(a[t.name][t.hues["hue-1"]].contrast, 4)
                            },
                            hue2: {
                                color: o(a[t.name][t.hues["hue-2"]].value),
                                contrast1: o(a[t.name][t.hues["hue-2"]].contrast, 1),
                                contrast2: o(a[t.name][t.hues["hue-2"]].contrast, 2),
                                contrast3: o(a[t.name][t.hues["hue-2"]].contrast, 3),
                                contrast4: o(a[t.name][t.hues["hue-2"]].contrast, 4)
                            },
                            hue3: {
                                color: o(a[t.name][t.hues["hue-3"]].value),
                                contrast1: o(a[t.name][t.hues["hue-3"]].contrast, 1),
                                contrast2: o(a[t.name][t.hues["hue-3"]].contrast, 2),
                                contrast3: o(a[t.name][t.hues["hue-3"]].contrast, 3),
                                contrast4: o(a[t.name][t.hues["hue-3"]].contrast, 4)
                            }
                        }
                    }
                })
            }), i(d);
            var s = {};
            angular.forEach(d, function (e, t) {
                s = {}, s["@themeName"] = t, angular.forEach(e, function (e, t) {
                    angular.forEach(e.levels, function (e, a) {
                        angular.forEach(e, function (e, i) {
                            s["@" + t + l(a) + l(i)] = e
                        })
                    })
                }), n(s)
            })
        }

        function i(a) {
            var i = angular.copy(a);
            angular.forEach(i, function (e) {
                angular.forEach(e, function (t, a) {
                    e[a] = t.levels, e[a].color = t.levels["default"].color, e[a].contrast1 = t.levels["default"].contrast1, e[a].contrast2 = t.levels["default"].contrast2, e[a].contrast3 = t.levels["default"].contrast3, e[a].contrast4 = t.levels["default"].contrast4, delete e[a]["default"]
                })
            }), e.setThemesList(i);
            var n = t.get("selectedTheme");
            e.setActiveTheme(n ? n : "default")
        }

        function n(e) {
            var t = '[md-theme="@themeName"] a {\n    color: @accentDefaultColor;\n}\n\n[md-theme="@themeName"] .secondary-text,\n[md-theme="@themeName"] .icon {\n    color: @backgroundDefaultContrast2;\n}\n\n[md-theme="@themeName"] .hint-text,\n[md-theme="@themeName"] .disabled-text {\n    color: @backgroundDefaultContrast3;\n}\n\n[md-theme="@themeName"] .fade-text,\n[md-theme="@themeName"] .divider {\n    color: @backgroundDefaultContrast4;\n}\n\n/* Primary */\n[md-theme="@themeName"] .md-primary-bg {\n    background-color: @primaryDefaultColor;\n    color: @primaryDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg .secondary-text,\n[md-theme="@themeName"] .md-primary-bg .icon {\n    color: @primaryDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg .hint-text,\n[md-theme="@themeName"] .md-primary-bg .disabled-text {\n    color: @primaryDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg .fade-text,\n[md-theme="@themeName"] .md-primary-bg .divider {\n    color: @primaryDefaultContrast4;\n}\n\n/* Primary, Hue-1 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 {\n    background-color: @primaryHue1Color;\n    color: @primaryHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .icon {\n    color: @primaryHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .disabled-text {\n    color: @primaryHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-1 .divider {\n    color: @primaryHue1Contrast4;\n}\n\n/* Primary, Hue-2 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 {\n    background-color: @primaryHue2Color;\n    color: @primaryHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .icon {\n    color: @primaryHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .disabled-text {\n    color: @primaryHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-2 .divider {\n    color: @primaryHue2Contrast4;\n}\n\n/* Primary, Hue-3 */\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 {\n    background-color: @primaryHue3Color;\n    color: @primaryHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .icon {\n    color: @primaryHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .disabled-text {\n    color: @primaryHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-primary-bg.md-hue-3 .divider {\n    color: @primaryHue3Contrast4;\n}\n\n/* Primary foreground */\n[md-theme="@themeName"] .md-primary-fg {\n    color: @primaryDefaultColor !important;\n}\n\n/* Primary foreground, Hue-1 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-1 {\n    color: @primaryHue1Color !important;\n}\n\n/* Primary foreground, Hue-2 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-2 {\n    color: @primaryHue2Color !important;\n}\n\n/* Primary foreground, Hue-3 */\n[md-theme="@themeName"] .md-primary-fg.md-hue-3 {\n    color: @primaryHue3Color !important;\n}\n\n\n/* Accent */\n[md-theme="@themeName"] .md-accent-bg {\n    background-color: @accentDefaultColor;\n    color: @accentDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg .secondary-text,\n[md-theme="@themeName"] .md-accent-bg .icon {\n    color: @accentDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg .hint-text,\n[md-theme="@themeName"] .md-accent-bg .disabled-text {\n    color: @accentDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg .fade-text,\n[md-theme="@themeName"] .md-accent-bg .divider {\n    color: @accentDefaultContrast4;\n}\n\n/* Accent, Hue-1 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 {\n    background-color: @accentHue1Color;\n    color: @accentHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .icon {\n    color: @accentHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .disabled-text {\n    color: @accentHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-1 .divider {\n    color: @accentHue1Contrast4;\n}\n\n/* Accent, Hue-2 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 {\n    background-color: @accentHue2Color;\n    color: @accentHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .icon {\n    color: @accentHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .disabled-text {\n    color: @accentHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-2 .divider {\n    color: @accentHue2Contrast4;\n}\n\n/* Accent, Hue-3 */\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 {\n    background-color: @accentHue3Color;\n    color: @accentHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .icon {\n    color: @accentHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .disabled-text {\n    color: @accentHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-accent-bg.md-hue-3 .divider {\n    color: @accentHue3Contrast4;\n}\n\n/* Accent foreground */\n[md-theme="@themeName"] .md-accent-fg {\n    color: @accentDefaultColor !important;\n}\n\n/* Accent foreground, Hue-1 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-1 {\n    color: @accentHue1Color !important;\n}\n\n/* Accent foreground, Hue-2 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-2 {\n    color: @accentHue2Color !important;\n}\n\n/* Accent foreground, Hue-3 */\n[md-theme="@themeName"] .md-accent-fg.md-hue-3 {\n    color: @accentHue3Color !important;\n}\n\n\n/* Warn */\n[md-theme="@themeName"] .md-warn-bg {\n    background-color: @warnDefaultColor;\n    color: @warnDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg .secondary-text,\n[md-theme="@themeName"] .md-warn-bg .icon {\n    color: @warnDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg .hint-text,\n[md-theme="@themeName"] .md-warn-bg .disabled-text {\n    color: @warnDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg .fade-text,\n[md-theme="@themeName"] .md-warn-bg .divider {\n    color: @warnDefaultContrast4;\n}\n\n/* Warn, Hue-1 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 {\n    background-color: @warnHue1Color;\n    color: @warnHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .icon {\n    color: @warnHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .disabled-text {\n    color: @warnHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-1 .divider {\n    color: @warnHue1Contrast4;\n}\n\n/* Warn, Hue-2 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 {\n    background-color: @warnHue2Color;\n    color: @warnHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .icon {\n    color: @warnHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .disabled-text {\n    color: @warnHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-2 .divider {\n    color: @warnHue2Contrast4;\n}\n\n/* Warn, Hue-3 */\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 {\n    background-color: @warnHue3Color;\n    color: @warnHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .icon {\n    color: @warnHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .disabled-text {\n    color: @warnHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-warn-bg.md-hue-3 .divider {\n    color: @warnHue3Contrast4;\n}\n\n/* Warn foreground */\n[md-theme="@themeName"] .md-warn-fg {\n    color: @warnDefaultColor !important;\n}\n\n/* Warn foreground, Hue-1 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-1 {\n    color: @warnHue1Color !important;\n}\n\n/* Warn foreground, Hue-2 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-2 {\n    color: @warnHue2Color !important;\n}\n\n/* Warn foreground, Hue-3 */\n[md-theme="@themeName"] .md-warn-fg.md-hue-3 {\n    color: @warnHue3Color !important;\n}\n\n/* Background */\n[md-theme="@themeName"] .md-background-bg {\n    background-color: @backgroundDefaultColor;\n    color: @backgroundDefaultContrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg .secondary-text,\n[md-theme="@themeName"] .md-background-bg .icon {\n    color: @backgroundDefaultContrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg .hint-text,\n[md-theme="@themeName"] .md-background-bg .disabled-text {\n    color: @backgroundDefaultContrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg .fade-text,\n[md-theme="@themeName"] .md-background-bg .divider {\n    color: @backgroundDefaultContrast4;\n}\n\n/* Background, Hue-1 */\n[md-theme="@themeName"] .md-background-bg.md-hue-1 {\n    background-color: @backgroundHue1Color;\n    color: @backgroundHue1Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .icon {\n    color: @backgroundHue1Contrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .disabled-text {\n    color: @backgroundHue1Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-1 .divider {\n    color: @backgroundHue1Contrast4;\n}\n\n/* Background, Hue-2 */\n[md-theme="@themeName"] .md-background-bg.md-hue-2 {\n    background-color: @backgroundHue2Color;\n    color: @backgroundHue2Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .icon {\n    color: @backgroundHue2Contrast2;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .disabled-text {\n    color: @backgroundHue2Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-2 .divider {\n    color: @backgroundHue2Contrast4;\n}\n\n/* Background, Hue-3 */\n[md-theme="@themeName"] .md-background-bg.md-hue-3 {\n    background-color: @backgroundHue3Color;\n    color: @backgroundHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .secondary-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .icon {\n    color: @backgroundHue3Contrast1;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .hint-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .disabled-text {\n    color: @backgroundHue3Contrast3;\n}\n\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .fade-text,\n[md-theme="@themeName"] .md-background-bg.md-hue-3 .divider {\n    color: @backgroundHue3Contrast4;\n}\n\n/* Background foreground */\n[md-theme="@themeName"] .md-background-fg {\n    color: @backgroundDefaultColor !important;\n}\n\n/* Background foreground, Hue-1 */\n[md-theme="@themeName"] .md-background-fg.md-hue-1 {\n    color: @backgroundHue1Color !important;\n}\n\n/* Background foreground, Hue-2 */\n[md-theme="@themeName"] .md-background-fg.md-hue-2 {\n    color: @backgroundHue2Color !important;\n}\n\n/* Background foreground, Hue-3 */\n[md-theme="@themeName"] .md-background-fg.md-hue-3 {\n    color: @backgroundHue3Color !important;\n}', a = new RegExp(Object.keys(e).join("|"), "gi"), i = t.replace(a, function (t) {
                return e[t]
            }), n = document.getElementsByTagName("head")[0], o = document.createElement("style");
            o.setAttribute("type", "text/css"), o.appendChild(document.createTextNode(i)), n.appendChild(o)
        }

        function o(e, t) {
            var a = t || !1;
            return 4 === e.length && 255 === e[0] && 255 === e[1] && 255 === e[2] && e.splice(3, 4), a && (e = s(e, a)), 3 === e.length ? "rgb(" + e.join(",") + ")" : 4 === e.length ? "rgba(" + e.join(",") + ")" : void console.error("Invalid number of arguments supplied in the color array: " + e.length + "\nThe array must have 3 or 4 colors.")
        }

        function s(e, t) {
            var a = {
                white: {1: "1", 2: "0.7", 3: "0.3", 4: "0.12"},
                black: {1: "0.87", 2: "0.54", 3: "0.26", 4: "0.12"}
            };
            return 255 === e[0] && 255 === e[1] && 255 === e[2] ? e[3] = a.white[t] : (0 === e[0] && 0 === e[1], 0 === e[2] && (e[3] = a.black[t])), e
        }

        function l(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }

        var d = {}, c = {generate: a, rgba: o};
        return c
    }

    angular.module("app.core").factory("fuseGenerator", e), e.$inject = ["fuseTheming", "$cookies"]
}(),function () {
    "use strict";
    function e() {
        return function (e, t) {
            if (0 === e.length || 0 === t.length)return e;
            var a = [];
            return e.forEach(function (e) {
                var i = t.every(function (t) {
                    var a = !1;
                    return e.tags.forEach(function (e) {
                        return e.name === t.name ? void(a = !0) : void 0
                    }), a
                });
                i && a.push(e)
            }), a
        }
    }

    function t() {
        return function (e, t) {
            if (0 !== e.length && 0 !== t.length) {
                if (e.length < t.length)return [];
                var a = [], i = t.every(function (t) {
                    var a = !1;
                    return e.forEach(function (e) {
                        return e.name === t.name ? void(a = !0) : void 0
                    }), a
                });
                return i && a.push(e), a
            }
        }
    }

    angular.module("app.core").filter("filterByTags", e).filter("filterSingleByTags", t)
}(),function () {
    "use strict";
    function e(e) {
        return function (t) {
            return e.trustAsHtml(t)
        }
    }

    function t() {
        return function (e) {
            return String(e).replace(/<[^>]+>/gm, "")
        }
    }

    function a() {
        return function (e) {
            return e ? e.replace(/ /g, "") : ""
        }
    }

    function i() {
        return function (e) {
            return e ? "directive" === e.type ? e.name.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase()
            }) : e.label || e.name : void 0
        }
    }

    angular.module("app.core").filter("toTrusted", e).filter("htmlToPlaintext", t).filter("nospace", a).filter("humanizeDoc", i), e.$inject = ["$sce"]
}(),function () {
    "use strict";
    function e(e, t, a) {
        return {
            restrict: "EA", compile: function (i, n) {
                var o;
                return n.code || (o = i.html(), i.empty()), function (i, n, s) {
                    function l(e, t) {
                        var a = t.find("code"), i = e.split("\n");
                        i = i.filter(function (e) {
                            return e.trim().length
                        });
                        var n = i[0].match(/^\s*/)[0], o = new RegExp("^" + n);
                        i = i.map(function (e) {
                            return e.replace(o, "").replace(/\s+$/, "")
                        });
                        var l = hljs.highlight(s.language || s.lang, i.join("\n"), !0);
                        l.value = l.value.replace(/=<span class="hljs-value">""<\/span>/gi, "").replace("<head>", "").replace("<head/>", ""), a.append(l.value).addClass("highlight")
                    }

                    s.code && (o = i.$eval(s.code));
                    var d = i.$eval(s.shouldInterpolate);
                    t.when(o).then(function (t) {
                        if (t) {
                            d && (t = a(t)(i));
                            var o = angular.element('<pre><code class="highlight" ng-non-bindable></code></pre>');
                            n.append(o), e(function () {
                                l(t, o)
                            }, 34, !1)
                        }
                    })
                }
            }
        }
    }

    angular.module("app.core").directive("hljs", e), e.$inject = ["$timeout", "$q", "$interpolate"]
}(),function () {
    "use strict";
    function e() {
        function e(e) {
            t = angular.extend({}, t, e)
        }

        var t = {disableCustomScrollbars: !1, disableMdInkRippleOnMobile: !0, disableCustomScrollbarsOnMobile: !0};
        this.config = e, this.$get = function () {
            function e(e) {
                return angular.isUndefined(t[e]) ? !1 : t[e]
            }

            function a(e, a) {
                t[e] = a
            }

            var i = {getConfig: e, setConfig: a};
            return i
        }
    }

    angular.module("app.core").provider("fuseConfig", e)
}(),function () {
    "use strict";
    function e(e) {
        e.addPart("app/toolbar")
    }

    angular.module("app.toolbar", []).config(e), e.$inject = ["$translatePartialLoaderProvider"]
}(),function () {
    "use strict";
    function e(e, t, a, i, n) {
        function o(e) {
            t(e).toggle()
        }

        function s(e) {
            e.preventDefault(), a.toggleFold()
        }

        function l(e) {
            r.userStatus = e
        }

        function d() {
        }

        function c(e) {
            if (r.selectedLanguage = e, "en" !== e.code) {
                var t = "<p>Fuse supports translations through angular-translate module, but currently we do not have any translations other than English language. If you want to help us, send us a message through ThemeForest profile page.</p>";
                return void n.show({
                    template: '<md-toast id="language-message" layout="column" layout-align="center start">' + t + "</md-toast>",
                    hideDelay: 7e3,
                    position: "top right",
                    parent: "#content"
                })
            }
            i.use(e.code)
        }

        var r = this;
        e.global = {search: ""}, r.userStatusOptions = [{
            title: "Online",
            icon: "icon-checkbox-marked-circle",
            color: "#4CAF50"
        }, {title: "Away", icon: "icon-clock", color: "#FFC107"}, {
            title: "Do not Disturb",
            icon: "icon-minus-circle",
            color: "#F44336"
        }, {title: "Invisible", icon: "icon-checkbox-blank-circle-outline", color: "#BDBDBD"}, {
            title: "Offline",
            icon: "icon-checkbox-blank-circle-outline",
            color: "#616161"
        }], r.languages = [{
            title: "English",
            translation: "TOOLBAR.ENGLISH",
            code: "en",
            flag: "gb"
        }, {title: "Spanish", translation: "TOOLBAR.SPANISH", code: "es", flag: "es"}, {
            title: "Turkish",
            translation: "TOOLBAR.TURKISH",
            code: "tr",
            flag: "tr"
        }], r.toggleSidenav = o, r.toggleNavigationSidenavFold = s, r.logout = d, r.changeLanguage = c, r.setUserStatus = l, r.userStatus = r.userStatusOptions[0], r.selectedLanguage = r.languages[0]
    }

    angular.module("app.toolbar").controller("ToolbarController", e), e.$inject = ["$rootScope", "$mdSidenav", "msNavFoldService", "$translate", "$mdToast"]
}(),function () {
    "use strict";
    function e(e, t, a) {
        if (e.generate(), t.getConfig("disableMdInkRippleOnMobile") && a.isMobile()) {
            var i = angular.element(document.body);
            i.attr("md-no-ink", !0)
        }
    }

    angular.module("app.core").run(e), e.$inject = ["fuseGenerator", "fuseConfig", "fuseHelper"]
}(),function () {
    "use strict";
    function e(e, t, a, i, n, o, s) {
        e.config({tabindex: !1}), t.debugEnabled(!0), a.config({wheelPropagation: !0}), toastr.options.timeOut = 3e3, toastr.options.positionClass = "toast-top-right", toastr.options.preventDuplicates = !0, toastr.options.progressBar = !0, i.configure({
            v: "3.exp",
            libraries: "weather,geometry,visualization"
        }), n.useLoader("$translatePartialLoader", {urlTemplate: "{part}/i18n/{lang}.json"}), n.preferredLanguage("en"), n.useSanitizeValueStrategy("sanitize"), o.decorator("taOptions", ["$delegate", function (e) {
            return e.toolbar = [["bold", "italics", "underline", "ul", "ol", "quote"]], e.classes = {
                focussed: "focussed",
                toolbar: "ta-toolbar",
                toolbarGroup: "ta-group",
                toolbarButton: "md-button",
                toolbarButtonActive: "active",
                disabled: "",
                textEditor: "form-control",
                htmlEditor: "form-control"
            }, e
        }]), o.decorator("taTools", ["$delegate", function (e) {
            return e.bold.iconclass = "icon-format-bold", e.italics.iconclass = "icon-format-italic", e.underline.iconclass = "icon-format-underline", e.ul.iconclass = "icon-format-list-bulleted", e.ol.iconclass = "icon-format-list-numbers", e.quote.iconclass = "icon-format-quote", e
        }]), s.config({
            disableCustomScrollbars: !1,
            disableCustomScrollbarsOnMobile: !0,
            disableMdInkRippleOnMobile: !0
        })
    }

    angular.module("app.core").config(e), e.$inject = ["$ariaProvider", "$logProvider", "msScrollConfigProvider", "uiGmapGoogleMapApiProvider", "$translateProvider", "$provide", "fuseConfigProvider"]
}(),function () {
    "use strict";
    angular.module("fuse", ["app.core", "app.navigation", "app.toolbar", "app.quick-panel", "app.dashboards", "app.calendar", "app.mail", "app.file-manager", "app.todo", "app.pages.auth.login", "app.pages.auth.register", "app.pages.auth.forgot-password", "app.pages.auth.lock", "app.pages.coming-soon", "app.pages.error-404", "app.pages.error-500", "app.pages.invoice", "app.pages.maintenance", "app.pages.profile", "app.pages.search", "app.pages.timeline", "app.ui", "app.components"])
}(),function () {
    "use strict";
    function e(e, t, a, i) {
        a.$on("$stateChangeStart", function () {
            a.loadingProgress = !0
        }), a.$on("$stateChangeSuccess", function () {
            i(function () {
                a.loadingProgress = !1, e.ga && ga("send", "pageview", {page: t.path()})
            })
        })
    }

    angular.module("fuse").run(e), e.$inject = ["$window", "$location", "$rootScope", "$timeout"]
}(),function () {
    "use strict";
    function e(e, t, a) {
        a.html5Mode(!0), t.otherwise("/dashboard-project"), e.state("app", {
            "abstract": !0,
            views: {
                "main@": {templateUrl: "app/core/layouts/default.html"},
                "toolbar@app": {templateUrl: "app/toolbar/toolbar.html", controller: "ToolbarController as vm"},
                "navigation@app": {
                    templateUrl: "app/sidenav/navigation/navigation.html",
                    controller: "NavigationController as vm"
                },
                "quickPanel@app": {
                    templateUrl: "app/sidenav/quick-panel/quick-panel.html",
                    controller: "QuickPanelController as vm"
                },
                themeOptions: {
                    templateUrl: "app/core/theming/theme-options/theme-options.html",
                    controller: "ThemeOptionsController as vm"
                }
            }
        })
    }

    angular.module("fuse").config(e), e.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"]
}(),function () {
    "use strict";
    function e(e) {
        var t = this;
        t.themes = e.themes
    }

    angular.module("fuse").controller("AppController", e), e.$inject = ["fuseTheming"]
}(),function () {
    "use strict";
    angular.module("fuse")
}(),function () {
    "use strict";
    function e() {
    }

    angular.module("fuse").config(e)
}(),function () {
    "use strict";
    function e(e) {
        e.state("app.components_elements_whiteframe", {
            url: "/components/elements/whiteframe",
            views: {"content@app": {templateUrl: "app/main/components/elements/whiteframe/whiteframe.html"}}
        })
    }

    angular.module("app.components.elements.whiteframe", []).config(e), e.$inject = ["$stateProvider"]
}(),function () {
    "use strict";
    angular.module("app.dashboards", ["app.dashboard-project", "app.dashboard-server", "app.dashboard-analytics"])
}(),function () {
    "use strict";
    angular.module("app.ui", ["app.ui.theme-colors", "app.ui.material-colors", "app.ui.icons", "app.ui.layouts.blank", "app.ui.layouts.carded.fullwidth", "app.ui.layouts.carded.fullwidth-ii", "app.ui.layouts.carded.left-sidenav", "app.ui.layouts.carded.left-sidenav-ii", "app.ui.layouts.carded.right-sidenav", "app.ui.layouts.carded.right-sidenav-ii", "app.ui.layouts.simple.fullwidth", "app.ui.layouts.simple.left-sidenav", "app.ui.layouts.simple.left-sidenav-ii", "app.ui.layouts.simple.right-sidenav", "app.ui.layouts.simple.right-sidenav-ii", "app.ui.layouts.simple.tabbed", "app.ui.typography"])
}(),function () {
    "use strict";
    angular.module("app.components", ["app.components.cards", "app.components.charts.c3", "app.components.charts.chartist", "app.components.charts.chart-js", "app.components.charts.nvd3", "app.components.elements.bottom-sheet", "app.components.elements.buttons", "app.components.elements.card", "app.components.elements.datepicker", "app.components.elements.dialog", "app.components.elements.fab-speed-dial", "app.components.elements.fab-toolbar", "app.components.elements.inputs.autocomplete", "app.components.elements.inputs.checkbox", "app.components.elements.inputs.chips", "app.components.elements.inputs.fields", "app.components.elements.inputs.radio", "app.components.elements.inputs.select", "app.components.elements.inputs.slider", "app.components.elements.inputs.switch", "app.components.elements.menu", "app.components.elements.menu-bar", "app.components.elements.progress-circular", "app.components.elements.progress-linear", "app.components.elements.sidenav", "app.components.elements.swipe", "app.components.elements.tabs", "app.components.elements.toast", "app.components.elements.whiteframe", "app.components.maps", "app.components.price-tables", "app.components.tables.simple-table", "app.components.tables.datatable", "app.components.widgets"])
}(),angular.module("fuse").run(["$templateCache", function (e) {
    e.put("app/toolbar/toolbar.html", '<div layout="row" layout-align="start center"><div layout="row" layout-align="start center" flex=""><md-button id="navigation-toggle" class="md-icon-button" ng-click="vm.toggleSidenav(\'navigation\')" hide-gt-md="" aria-label="Toggle navigation" translate="" translate-attr-aria-label="TOOLBAR.TOGGLE_NAVIGATION"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button><md-button id="navigation-sidenav-mode-toggle" class="md-icon-button" ng-click="vm.toggleNavigationSidenavFold($event)" hide="" show-gt-md="" aria-label="Toggle navigation mode" translate="" translate-attr-aria-label="TOOLBAR.TOGGLE_NAVIGATION_MODE"><md-icon md-font-icon="icon-backburger" class="icon"></md-icon></md-button><div id="search" flex="" layout="row" layout-align="start center"><label for="search-input"><md-icon md-font-icon="icon-magnify" class="icon s24"></md-icon></label> <input id="search-input" type="text" ng-model="global.search" placeholder="Search" translate="" translate-attr-placeholder="TOOLBAR.SEARCH" flex=""></div><md-progress-circular id="toolbar-progress" ng-if="$root.loadingProgress" class="md-accent" md-mode="indeterminate" md-diameter="32"></md-progress-circular></div><div layout="row" layout-align="start center"><md-menu-bar id="user-menu"><md-menu md-offset="0 72" md-position-mode="target-right target"><md-button class="user-button" ng-click="$mdOpenMenu()" aria-label="User settings" translate="" md-menu-origin="" translate-attr-aria-label="TOOLBAR.USER_SETTINGS"><div layout="row" layout-align="space-between center"><div class="avatar-wrapper"><img md-menu-align-target="" class="avatar" src="assets/images/avatars/profile.jpg"><md-icon md-font-icon="" ng-class="vm.userStatus.icon" ng-style="{\'color\': vm.userStatus.color }" class="icon status s16"></md-icon></div><span class="username" hide-sm="">John Doe</span><md-icon md-font-icon="icon-chevron-down" class="icon s16" hide-sm=""></md-icon></div></md-button><md-menu-content width="3" class="md-background-bg"><md-menu-item ui-sref="app.pages_profile"><md-button><span layout="row" layout-align="start center"><md-icon md-font-icon="icon-account" class="icon"></md-icon><span>My Profile</span></span></md-button></md-menu-item><md-menu-item ui-sref="app.mail"><md-button><span layout="row" layout-align="start center"><md-icon md-font-icon="icon-email" class="icon"></md-icon><span>Inbox</span></span></md-button></md-menu-item><md-menu-item><md-menu id="user-status-menu"><md-button ng-click="$mdOpenMenu()" class="status" ng-class="vm.userStatus.class"><span layout="row" layout-align="start center"><md-icon md-font-icon="" ng-class="vm.userStatus.icon" ng-style="{\'color\': vm.userStatus.color }" class="icon"></md-icon><span>{{vm.userStatus.title}}</span></span></md-button><md-menu-content width="2"><md-menu-item class="status" ng-class="{\'selected\': status === vm.userStatus}" ng-repeat="status in vm.userStatusOptions"><md-button ng-click="vm.setUserStatus(status)"><span layout="row" layout-align="start center"><md-icon md-font-icon="{{status.icon}}" ng-style="{\'color\': status.color }" class="icon"></md-icon>{{status.title}}</span></md-button></md-menu-item></md-menu-content></md-menu></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.logout()"><span layout="row" layout-align="start center"><md-icon md-font-icon="icon-logout" class="icon"></md-icon><span>Logout</span></span></md-button></md-menu-item></md-menu-content></md-menu></md-menu-bar><md-menu id="language-menu" md-offset="0 72" md-position-mode="target-right target"><md-button class="language-button" ng-click="$mdOpenMenu()" aria-label="Language" md-menu-origin="" md-menu-align-target=""><div layout="row" layout-align="center center"><img class="flag" ng-src="assets/images/flags/{{vm.selectedLanguage.flag}}.png"> <span class="iso">{{vm.selectedLanguage.code}}</span></div></md-button><md-menu-content width="3" id="language-menu-content" class="md-background-bg"><md-menu-item ng-repeat="lang in vm.languages"><md-button ng-click="vm.changeLanguage(lang)" aria-label="{{lang.title}}" translate="" translate-attr-aria-label="{{lang.title}}"><span layout="row" layout-align="start center"><img class="flag" ng-src="assets/images/flags/{{lang.flag}}.png"> <span translate="{{lang.translation}}">{{lang.title}}</span></span></md-button></md-menu-item></md-menu-content></md-menu><md-button id="quick-panel-toggle" class="md-icon-button" ng-click="vm.toggleSidenav(\'quick-panel\')" aria-label="Toggle quick panel" translate="" translate-attr-aria-label="TOOLBAR.TOGGLE_QUICK_PANEL"><md-icon md-font-icon="icon-format-list-bulleted" class="icon"></md-icon></md-button></div></div>'), e.put("app/core/layouts/basic.html", '<div id="content" flex=""><md-content class="animate slide-up md-background md-hue-1" ui-view="content" ms-scroll=""></md-content></div>'), e.put("app/core/layouts/default.html", '<md-sidenav id="navigation" class="md-primary-bg" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="navigation" ms-nav-is-folded="false" ms-scroll="" ui-view="navigation"></md-sidenav><div id="content-container" flex="" layout="column"><md-toolbar id="toolbar" class="md-menu-toolbar md-whiteframe-1dp md-background-bg" ui-view="toolbar"></md-toolbar><div id="content" flex=""><md-content class="md-background md-hue-1 animate slide-up" ms-scroll="" ui-view="content" flex=""></md-content></div></div><md-sidenav id="quick-panel" class="md-sidenav-right md-whiteframe-4dp" md-component-id="quick-panel" ms-scroll="" ui-view="quickPanel"></md-sidenav>'), e.put("app/sidenav/navigation/navigation.html", '<md-toolbar class="navigation-header md-whiteframe-1dp" layout="row" layout-align="start center"><div class="logo" layout="row" layout-align="start center"><span class="logo-image">F</span> <span class="logo-text">FUSE</span></div></md-toolbar><ms-nav ms-scroll="vm.msScrollOptions" class="scrollable"><ms-nav-item ms-nav-title=""><span>FUSE</span></ms-nav-item><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><i class="icon-tile-four s16"></i> <span class="ms-nav-label" translate="NAVIGATION.DASHBOARDS">Dashboards</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.dashboard-project" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.PROJECT_DASHBOARD">Project</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.dashboard-server" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SERVER_DASHBOARD">Server</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.dashboard-analytics" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.ANALYTICS_DASHBOARD">Analytics</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.calendar" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-calendar-today s16"></i> <span class="ms-nav-label" translate="NAVIGATION.CALENDAR">Calendar</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.mail" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-email s16"></i> <span class="ms-nav-label" translate="NAVIGATION.MAIL">Mail</span> <span class="ms-nav-badge red-bg white-fg">25</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.file-manager" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-folder s16"></i> <span class="ms-nav-label" translate="NAVIGATION.FILE_MANAGER">File Manager</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.to-do" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-checkbox-marked s16"></i> <span class="ms-nav-label" translate="NAVIGATION.TODO">To-Do</span> <span class="ms-nav-badge green-bg white-fg">6</span></a></ms-nav-item><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><i class="icon-file-outline s16"></i> <span class="ms-nav-label" translate="NAVIGATION.PAGES">Pages</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.AUTHENTICATON">Authentication</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_auth_login" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.LOGIN">Login</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_auth_register" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.REGISTER">Register</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_auth_forgot-password" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.FORGOT_PASSWORD">Forgot Password</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_auth_lock" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.LOCK_SCREEN">Lock Screen</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_coming-soon" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.COMING_SOON">Coming Soon</span></a></ms-nav-item><ms-nav-item ms-nav-toggle=""><div ms-nav-button="" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.ERRORS">Errors</span> <i class="icon-chevron-down s16 arrow"></i></div><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_errors_error-404" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.404">404</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_errors_error-500" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.500">500</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_invoice" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.INVOICE">Invoice</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_maintenance" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.MAINTENANCE">Maintenance</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_profile" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.PROFILE">Profile</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_search" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SEARCH">Search</span></a></ms-nav-item><ms-nav-item ms-nav-toggle=""><div ms-nav-button="" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.TIMELINE">Timeline</span> <i class="icon-chevron-down s16 arrow"></i></div><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_timeline" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.TIMELINE_DEFAULT">Default</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_timeline_left" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.TIMELINE_LEFT_ALIGNED">Left Aligned</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.pages_timeline_right" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.TIMELINE_RIGHT_ALIGNED">Right Aligned</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item ms-nav-title=""><span translate="NAVIGATION.USER_INTERFACE">USER INTERFACE</span></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_typography" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-format-size s16"></i> <span class="ms-nav-label" translate="NAVIGATION.TYPOGRAPHY">Typography</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_theme_colors" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-palette-advanced s16"></i> <span class="ms-nav-label" translate="NAVIGATION.THEME_COLORS">Theme Colors</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_material_colors" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-palette s16"></i> <span class="ms-nav-label" translate="NAVIGATION.MATERIAL_COLORS">Material Colors</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_icons" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-file-image-box s16"></i> <span class="ms-nav-label" translate="NAVIGATION.ICONS">Icons</span></a></ms-nav-item><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><i class="icon-view-quilt s16"></i> <span class="ms-nav-label" translate="NAVIGATION.PAGE_LAYOUTS">Page Layouts</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.CARDED">Carded</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_carded_fullwidth" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.FULL_WIDTH_1">Full Width (I)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_carded_fullwidth-ii" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.FULL_WIDTH_2">Full Width (II)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_carded_left-sidenav" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.LEFT_SIDENAV_1">Left Sidenav (I)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_carded_left-sidenav-ii" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.LEFT_SIDENAV_2">Left Sidenav (II)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_carded_right-sidenav" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.RIGHT_SIDENAV_1">Right Sidenav (I)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_carded_right-sidenav-ii" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.RIGHT_SIDENAV_2">Right Sidenav (II)</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SIMPLE">Simple</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_simple_fullwidth" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.FULL_WIDTH">Full Width</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_simple_left-sidenav" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.LEFT_SIDENAV_1">Left Sidenav (I)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_simple_left-sidenav-ii" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.LEFT_SIDENAV_2">Left Sidenav (II)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_simple_right-sidenav" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.RIGHT_SIDENAV_1">Right Sidenav (I)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_simple_right-sidenav-ii" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.RIGHT_SIDENAV_2">Right Sidenav (II)</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_simple_tabbed" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.TABBED">Tabbed</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.ui_layouts_blank" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.BLANK">Blank</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item ms-nav-title=""><span translate="NAVIGATION.COMPONENTS">COMPONENTS</span></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_cards" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-content-copy s16"></i> <span class="ms-nav-label" translate="NAVIGATION.CARDS">Cards</span></a></ms-nav-item><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><i class="icon-poll s16"></i> <span class="ms-nav-label" translate="NAVIGATION.CHARTS">Charts</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.components_charts_c3" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label">C3</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_charts_chart-js" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label">Chart.js</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_charts_chartist" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label">Chartist</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_charts_nvd3" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label">nvD3</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><i class="icon-layers s16"></i> <span class="ms-nav-label" translate="NAVIGATION.ELEMENTS">Elements</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.INPUTS">Inputs</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_inputs_autocomplete" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.AUTOCOMPLETE">Autocomplete</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_inputs_checkbox" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.CHECKBOX">Checkbox</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_inputs_chips" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.CHIPS_TAGS">Chips / Tags</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_inputs_fields" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.FIELDS">Fields</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_inputs_radio" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.RADIO">Radio</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_inputs_select" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SELECT">Select</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_inputs_slider" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SLIDER">Slider</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_inputs_switch" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SWITCH">Switch</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_bottom-sheet" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.BOTTOM_SHEET">Bottom Sheet</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_buttons" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.BUTTONS">Buttons</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_card" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.CARD">Card</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_datepicker" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.DATEPICKER">Datepicker</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_dialog" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.DIALOG">Dialog</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_fab-speed-dial" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.FAB_SPEED_DIAL">Fab Speed Dial</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_fab-toolbar" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.FAB_TOOLBAR">Fab Toolbar</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_menu" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.MENU">Menu</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_menu_bar" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.MENU_BAR">Menu Bar</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_progress-circular" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.PROGRESS_CIRCULAR">Progress Circular</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_progress-linear" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.PROGRESS_LINEAR">Progress Linear</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_sidenav" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SIDENAV">Sidenav</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_swipe" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SWIPE">Swipe</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_tabs" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.TABS">Tabs</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_toast" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.TOAST">Toast</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_elements_whiteframe" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.WHITEFRAME">Whiteframe</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_maps" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-map-marker s16"></i> <span class="ms-nav-label" translate="NAVIGATION.MAPS">Maps</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_price-tables" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-view-carousel s16"></i> <span class="ms-nav-label" translate="NAVIGATION.PRICE_TABLES">Price Tables</span></a></ms-nav-item><ms-nav-item ms-nav-toggle=""><a ms-nav-button="" md-ink-ripple=""><i class="icon-table-large s16"></i> <span class="ms-nav-label" translate="NAVIGATION.TABLES">Tables</span> <i class="icon-chevron-down s16 arrow"></i></a><ms-nav-toggle-items><ms-nav-item><a ms-nav-button="" ui-sref="app.components_tables_simple-table" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.SIMPLE_TABLE">Simple Table</span></a></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_tables_datatable" ui-sref-active="active md-accent-bg" md-ink-ripple=""><span class="ms-nav-label" translate="NAVIGATION.DATATABLE">Datatable</span></a></ms-nav-item></ms-nav-toggle-items></ms-nav-item><ms-nav-item><a ms-nav-button="" ui-sref="app.components_widgets" ui-sref-active="active md-accent-bg" md-ink-ripple=""><i class="icon-apps s16"></i> <span class="ms-nav-label" translate="NAVIGATION.WIDGETS">Widgets</span></a></ms-nav-item></ms-nav>'),
        e.put("app/sidenav/quick-panel/quick-panel.html", '<md-content><md-tabs md-no-pagination="" md-swipe-content="" md-stretch-tabs="always"><md-tab><md-tab-label translate="QUICKPANEL.TODAY">TODAY</md-tab-label><md-content class="today-tab scrollable" ms-scroll="" ng-include="\'app/sidenav/quick-panel/tabs/today/today-tab.html\'"></md-content></md-tab><md-tab><md-tab-label translate="QUICKPANEL.CHAT">CHAT</md-tab-label><md-content class="chat-tab scrollable" ms-scroll="" ng-include="\'app/sidenav/quick-panel/tabs/chat/chat-tab.html\'" ng-controller="ChatTabController as vm"></md-content></md-tab><md-tab><md-tab-label translate="QUICKPANEL.ACTIVITY">ACTIVITY</md-tab-label><md-content class="activity-tab scrollable" ms-scroll="" ng-include="\'app/sidenav/quick-panel/tabs/activity/activity-tab.html\'"></md-content></md-tab></md-tabs></md-content>'), e.put("app/core/theming/theme-options/theme-options.html", '<div id="theme-options-panel" ng-class="{\'open\':vm.panelOpen}" layout="row" layout-align="start start"><md-button id="theme-options-panel-button" class="md-icon-button" ng-click="vm.toggleOptionsPanel()" aria-label="theme options menu button"><md-icon md-font-icon="icon-cog" class="icon"></md-icon></md-button><div id="theme-options-list" layout="column"><div class="theme-option"><div class="option-title">Layout Mode:</div><md-radio-group layout="row" layout-align="start center" ng-model="vm.layoutMode" ng-change="vm.updateLayoutMode()"><md-radio-button value="boxed">Boxed</md-radio-button><md-radio-button value="wide">Wide</md-radio-button></md-radio-group></div><md-divider></md-divider><div class="theme-option"><div class="option-title">Color Palette:</div><md-menu-item ng-repeat="(themeName, theme) in vm.themes.list" class="theme"><md-button class="md-raised theme-button" aria-label="{{themeName}}" ng-click="vm.setActiveTheme(themeName)" ng-style="{\'background-color\': theme.primary.color,\'border-color\': theme.accent.color,\'color\': theme.primary.contrast1}" ng-class="themeName"><span><md-icon ng-style="{\'color\': theme.primary.contrast1}" md-font-icon="icon-palette"></md-icon><span>{{themeName}}</span></span></md-button></md-menu-item></div></div></div>'), e.put("app/main/apps/calendar/calendar.html", '<div id="calendar" class="page-layout simple fullwidth" layout="column"><div class="header" ng-class="vm.currentMonthShort"><div class="header-content" layout="column" layout-align="space-between"><div class="header-top" layout="row" layout-align="space-between center" layout-sm="column"><div class="logo" layout="row" layout-align="start center"><span class="logo-icon"><md-icon md-font-icon="icon-calendar-today"></md-icon></span> <span class="logo-text" translate="CALENDAR.CALENDAR">Calendar</span></div><div class="toolbar" layout="row" layout-align="start center"><md-button class="md-icon-button" aria-label="Search" translate="" translate-attr-aria-label="CALENDAR.SEARCH"><md-icon md-font-icon="icon-magnify"></md-icon><md-tooltip><span translate="CALENDAR.SEARCH">Search</span></md-tooltip></md-button><md-button class="md-icon-button" ng-click="vm.calendar.today()" aria-label="Today" translate="" translate-attr-aria-label="CALENDAR.TODAY"><md-icon md-font-icon="icon-calendar-today"></md-icon><md-tooltip><span translate="CALENDAR.TODAY">Today</span></md-tooltip></md-button><md-button class="md-icon-button" ng-click="vm.calendar.changeView(\'agendaDay\')" aria-label="Day" translate="" translate-attr-aria-label="CALENDAR.DAY"><md-icon md-font-icon="icon-view-day"></md-icon><md-tooltip><span translate="CALENDAR.DAY">Day</span></md-tooltip></md-button><md-button class="md-icon-button" ng-click="vm.calendar.changeView(\'agendaWeek\')" aria-label="Week" translate="" translate-attr-aria-label="CALENDAR.WEEK"><md-icon md-font-icon="icon-view-week"></md-icon><md-tooltip><span translate="CALENDAR.WEEK">Week</span></md-tooltip></md-button><md-button class="md-icon-button" ng-click="vm.calendar.changeView(\'month\')" aria-label="Month" translate="" translate-attr-aria-label="CALENDAR.MONTH"><md-icon md-font-icon="icon-view-module"></md-icon><md-tooltip><span translate="CALENDAR.MONTH">Month</span></md-tooltip></md-button></div></div><div class="header-bottom" layout="row" layout-align="start center" layout-sm="column"><div class="title">{{vm.calendarView.title}}</div><div><md-button class="md-icon-button arrow" ng-click="vm.calendar.prev()" aria-label="Previous" translate="" translate-attr-aria-label="CALENDAR.PREVIOUS"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="md-icon-button arrow" ng-click="vm.calendar.next()" aria-label="Next" translate="" translate-attr-aria-label="CALENDAR.NEXT"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div></div></div><md-button class="add-event-button md-fab md-warn" ng-click="vm.addEvent($event)" aria-label="Add event" translate="" translate-attr-aria-label="CALENDAR.ADD_EVENT"><md-icon md-font-icon="icon-plus"></md-icon></md-button></div><div class="content"><div id="calendarView" ui-calendar="vm.calendarUiConfig.calendar" ng-model="vm.events" calendar="main"></div></div></div>'), e.put("app/main/apps/file-manager/file-manager.html", '<div id="file-manager" class="page-layout simple right-sidenav" layout="row"><md-sidenav class="main-sidenav" md-component-id="main-sidenav" ng-include="\'app/main/apps/file-manager/sidenavs/main/main-sidenav.html\'" ms-scroll="" ms-sidenav-helper=""></md-sidenav><div class="center" layout="column" flex=""><div class="header md-accent-bg"><div class="header-content" layout="column" layout-align="space-between"><div class="toolbar" layout="row" layout-align="space-between"><md-button class="md-icon-button main-sidenav-toggle" ng-click="vm.toggleSidenav(\'main-sidenav\')" aria-label="Toggle Main Sidenav" translate="" translate-attr-aria-label="FILE.TOOGLE_MAIN_SIDENAV"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button><div class="right-side" layout="row"><md-button class="md-icon-button" aria-label="Search" translate="" translate-attr-aria-label="FM.SEARCH"><md-icon md-font-icon="icon-magnify"></md-icon><md-tooltip><span translate="FM.SEARCH">Search</span></md-tooltip></md-button><md-button ng-if="vm.currentView === \'list\'" class="md-icon-button" ng-click="vm.toggleView()" aria-label="view type" translate="" translate-attr-aria-label="FM.GRID_VIEW"><md-icon md-font-icon="icon-view-module"></md-icon><md-tooltip><span translate="FM.GRID_VIEW">Grid View</span></md-tooltip></md-button><md-button ng-if="vm.currentView === \'grid\'" class="md-icon-button" aria-label="view type" ng-click="vm.toggleView()" translate="" translate-attr-aria-label="FM.LIST_VIEW"><md-icon md-font-icon="icon-view-headline"></md-icon><md-tooltip><span translate="FM.LIST_VIEW">List View</span></md-tooltip></md-button></div></div><div class="breadcrumb text-truncate" layout="row" layout-align="start center"><span data-ng-repeat="path in vm.path">{{path}}<md-icon md-font-icon="icon-chevron-right" class="icon separator"></md-icon></span></div></div><md-button class="add-file-button md-fab md-warn" ng-click="vm.addFile($event)" aria-label="Add file" translate="" translate-attr-aria-label="FM.ADD_FILE"><md-icon md-font-icon="icon-plus"></md-icon></md-button></div><md-content class="content" flex="" ms-scroll=""><div ng-if="vm.currentView === \'grid\'" ng-include="\'app/main/apps/file-manager/views/grid/grid-view.html\'"></div><div ng-if="vm.currentView === \'list\'" ng-include="\'app/main/apps/file-manager/views/list/list-view.html\'"></div></md-content></div><md-sidenav class="sidenav details-sidenav md-sidenav-right" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="details-sidenav" ng-include="\'app/main/apps/file-manager/sidenavs/details/details-sidenav.html\'" ms-scroll="" ms-sidenav-helper=""></md-sidenav></div>'), e.put("app/main/apps/mail/mail.html", '<div id="mail" class="page-layout carded left-sidenav" layout="row"><div class="top-bg md-accent-bg"></div><md-sidenav class="sidenav" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="main-sidenav" ng-include="\'app/main/apps/mail/sidenavs/main/main-sidenav.html\'" ms-scroll="" ms-sidenav-helper=""></md-sidenav><div class="center" layout="column" flex=""><div class="header" layout="row" layout-align="start center"><div class="search-wrapper md-whiteframe-4dp" layout="row" layout-align="start center" flex=""><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'main-sidenav\')" hide-gt-md="" aria-label="Toggle Sidenav" translate="" translate-attr-aria-label="MAIL.TOGGLE_SIDENAV"><md-icon class="icon" md-font-icon="icon-menu"></md-icon></md-button><div class="search" flex="" layout="row" layout-align="start center"><md-icon md-font-icon="icon-magnify" class="icon s24"></md-icon><input flex="" ng-model="vm.search" type="text" placeholder="Search for an e-mail or contact" translate="" translate-attr-placeholder="MAIL.SEARCH_PLACEHOLDER"></div></div></div><div class="content-card" layout="column" flex="" ng-class="{\'responsive-read-pane\' : vm.responsiveReadPane}"><div class="toolbar mail-read-pane-toolbar" layout="row" layout-align="space-between center"><md-button class="md-icon-button" ng-click="vm.closeReadPane()" aria-label="Back" translate="" translate-attr-aria-label="MAIL.BACK"><md-icon md-font-icon="icon-keyboard-backspace"></md-icon></md-button></div><div class="toolbar" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-checkbox aria-label="{{vm.allChecked?\'Uncheck All\':\'Check All\'}}" ng-checked="vm.allChecked" ng-click="vm.checkAll()"></md-checkbox><md-menu><md-button class="md-icon-button" ng-click="$mdOpenMenu($event)" aria-label="Filters" translate="" translate-attr-aria-label="MAIL.FILTERS"><md-icon md-font-icon="icon-menu-down"></md-icon></md-button><md-menu-content width="3"><md-menu-item><md-button aria-label="All" translate="MAIL.ALL" translate-attr-aria-label="MAIL.ALL">All</md-button></md-menu-item><md-menu-item><md-button aria-label="None" translate="MAIL.NONE" translate-attr-aria-label="MAIL.NONE">None</md-button></md-menu-item><md-menu-item><md-button aria-label="Read" translate="MAIL.READ" translate-attr-aria-label="MAIL.READ">Read</md-button></md-menu-item><md-menu-item><md-button aria-label="Unread" translate="MAIL.UNREAD" translate-attr-aria-label="MAIL.UNREAD">Unread</md-button></md-menu-item><md-menu-item><md-button aria-label="Starred" translate="MAIL.STARRED" translate-attr-aria-label="MAIL.STARRED">Starred</md-button></md-menu-item><md-menu-item><md-button aria-label="Unstarred" translate="MAIL.UNSTARRED" translate-attr-aria-label="MAIL.UNSTARRED">Unstarred</md-button></md-menu-item></md-menu-content></md-menu><div class="divider-vertical" hide-sm=""></div><md-button class="md-icon-button" aria-label="Archive" translate="" translate-attr-aria-label="MAIL.ARCHIVE" hide-sm=""><md-icon md-font-icon="icon-archive"></md-icon><md-tooltip><span translate="MAIL.ARCHIVE">Archive</span></md-tooltip></md-button><md-button class="md-icon-button" aria-label="Spam" translate="" translate-attr-aria-label="MAIL.SPAM" hide-sm=""><md-icon md-font-icon="icon-alert-octagon"></md-icon><md-tooltip><span translate="MAIL.SPAM">Spam</span></md-tooltip></md-button><md-button class="md-icon-button" aria-label="Delete" translate="" translate-attr-aria-label="MAIL.DELETE" hide-sm=""><md-icon md-font-icon="icon-delete"></md-icon><md-tooltip><span translate="MAIL.DELETE">Delete</span></md-tooltip></md-button><div class="divider-vertical"></div><md-button class="md-icon-button" aria-label="Move to" translate="" translate-attr-aria-label="MAIL.MOVE_TO" hide-sm=""><md-icon md-font-icon="icon-folder"></md-icon><md-tooltip><span translate="MAIL.MOVE_TO">Move to</span></md-tooltip></md-button><md-button class="md-icon-button" aria-label="Labels" translate="" translate-attr-aria-label="MAIL.LABELS" hide-sm=""><md-icon md-font-icon="icon-label"></md-icon><md-tooltip><span translate="MAIL.LABELS">Labels</span></md-tooltip></md-button><md-menu hide-gt-sm=""><md-button class="md-icon-button" ng-click="$mdOpenMenu($event)" aria-label="Mail Actions" translate="" translate-attr-aria-label="MAIL.ACTIONS"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="3"><md-menu-item><md-button aria-label="Archive" translate-attr-aria-label="MAIL.ARCHIVE"><md-icon md-font-icon="icon-archive"></md-icon><span translate="MAIL.ARCHIVE">Archive</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Spam" translate-attr-aria-label="MAIL.SPAM"><md-icon md-font-icon="icon-alert-octagon"></md-icon><span translate="MAIL.SPAM">Spam</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Delete" translate-aria-label="MAIL.DELETE"><md-icon md-font-icon="icon-delete"></md-icon><span translate="MAIL.DELETE">Delete</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Move To" translate-attr-aria-label="MAIL.MOVE_TO"><md-icon md-font-icon="icon-folder-move"></md-icon><span translate="MAIL.MOVE_TO">Move To</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Labels" translate-attr-aria-label="MAIL.LABELS"><md-icon md-font-icon="icon-label"></md-icon><span translate="MAIL.LABELS">Labels</span></md-button></md-menu-item></md-menu-content></md-menu></div><div layout="row" layout-align="start center" translate-attr-aria-label="MAIL.REFRESH"><span class="page-info" hide-sm="">1 - 100 of 980</span><md-button class="md-icon-button arrow" aria-label="Previous" translate="" translate-attr-aria-label="MAIL.PREVIOUS"><md-icon md-font-icon="icon-chevron-left"></md-icon><md-tooltip><span translate="MAIL.PREVIOUS">Previous</span></md-tooltip></md-button><md-button class="md-icon-button arrow" aria-label="Next" translate="" translate-attr-aria-label="MAIL.NEXT"><md-icon md-font-icon="icon-chevron-right"></md-icon><md-tooltip><span translate="MAIL.NEXT">Next</span></md-tooltip></md-button></div></div><div class="content-wrapper" layout="row" flex=""><md-content class="content mail-list-pane" flex="100" flex-gt-lg="50" ng-include="\'app/main/apps/mail/views/mail-list/mail-list.html\'" ms-scroll=""></md-content><md-content class="content mail-read-pane" flex="50" ng-include="\'app/main/apps/mail/views/mail-read/mail-read.html\'" ms-scroll=""></md-content></div></div></div></div>'), e.put("app/main/apps/todo/todo.html", '<div id="todo" class="page-layout carded left-sidenav" layout="row"><div class="top-bg md-accent-bg"></div><md-sidenav class="sidenav" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="main-sidenav" ng-include="\'app/main/apps/todo/sidenavs/main/main-sidenav.html\'" ms-scroll="" ms-sidenav-helper=""></md-sidenav><div class="center" layout="column" flex=""><div class="header" layout="row" layout-align="start center"><div class="search-wrapper md-whiteframe-4dp" flex="" layout="row" layout-align="start center"><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'main-sidenav\')" hide-gt-md="" aria-label="Toggle sidenav" translate="" translate-attr-aria-label="TODO.TOGGLE_SIDENAV"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button><div class="search" flex="" layout="row" layout-align="start center"><md-icon md-font-icon="icon-magnify" class="icon s24"></md-icon><input flex="" ng-model="vm.taskFilters.search" type="text" placeholder="Search for a task or tag" translate="" translate-attr-placeholder="TODO.SEARCH"></div></div></div><div class="content-card" layout="column" flex=""><div class="toolbar" layout="row" layout-align="space-between center"><md-select class="simplified" ng-model="vm.selectedFilter.next" placeholder="Interval" translate="" translate-attr-placeholder="TODO.INTERVAL"><md-option value="Next 3 days" translate="TODO.NEXT_3_DAYS">Next 3 days</md-option><md-option value="Next 7 days" translate="TODO.NEXT_7_DAYS">Next 7 days</md-option><md-option value="Next 2 weeks" translate="TODO.NEXT_2_WEEKS">Next 2 weeks</md-option><md-option value="Next month" translate="TODO.NEXT_MONTH">Next month</md-option></md-select><div layout="row" layout-align="start center"><md-select class="simplified" ng-model="vm.taskOrder" placeholder="Order" translate="" translate-attr-placeholder="TODO.ORDER" ng-change="vm.taskOrderReverse = vm.taskOrder === \'\' ? false : vm.taskOrderReverse"><md-option value="startDateTimestamp" translate="TODO.START_DATE">Start Date</md-option><md-option value="dueDateTimestamp" translate="TODO.DUE_DATE">Due Date</md-option><md-option value="" translate="TODO.MANUAL">Manual</md-option><md-option value="title" translate="TODO.TITLE">Title</md-option></md-select><md-menu><md-button ng-disabled="vm.taskOrder === \'\'" class="md-icon-button arrow" ng-click="$mdOpenMenu($event)" aria-label="Sort Direction" translate="" translate-attr-aria-label="TODO.SORT_DIRECTION"><md-icon md-font-icon="icon-sort"></md-icon><md-tooltip><span translate="TODO.SORT_DIRECTION">Sort direction</span></md-tooltip></md-button><md-menu-content width="3"><md-menu-item><md-button aria-label="Ascending" translate-aria-label="TODO.ASCENDING" ng-click="vm.taskOrderReverse = false"><md-icon ng-if="vm.taskOrderReverse === false" md-font-icon="icon-checkbox-marked-circle"></md-icon><md-icon ng-if="vm.taskOrderReverse === true" md-font-icon="icon-checkbox-blank-circle-outline"></md-icon><span translate="TODO.ASCENDING">Ascending</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Descending" translate-aria-label="TODO.DESCENDING" ng-click="vm.taskOrderReverse = true"><md-icon ng-if="vm.taskOrderReverse === true" md-font-icon="icon-checkbox-marked-circle"></md-icon><md-icon ng-if="vm.taskOrderReverse === false" md-font-icon="icon-checkbox-blank-circle-outline"></md-icon><span translate="TODO.DESCENDING">Descending</span></md-button></md-menu-item></md-menu-content></md-menu></div></div><div class="content" layout="row" flex=""><md-content class="todo-list-pane" flex="" ng-include="\'app/main/apps/todo/views/todo-list/todo-list.html\'" ms-scroll=""></md-content></div></div></div></div>'), e.put("app/main/components/cards/cards.html", '<div id="cards" class="page-layout simple fullwidth doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span></div><div class="title">Cards</div></div></div><div class="content" md-background-bg=""><p>Cards are useful for showing excerpts, quick information or notifications. Using <code>ms-card</code> directive you can easily create different cards compatible with Google\'s Material Design specifications.</p><p><code>ms-card</code> directive templates have pre-defined content areas. The reason for that is to force you to create cards that follows both Google\'s Material Design specifications and Fuse Theme\'s general design rules. But of course you can create your own designs and templates and use them with <code>ms-card</code> directive.</p><div><div class="md-title mt-32">Template 1</div><ms-card template="\'app/core/directives/ms-card/templates/template-1/template-1.html\'" ng-model="vm.cards[0]"></ms-card><div class="md-title mt-48">Template 2</div><ms-card template="\'app/core/directives/ms-card/templates/template-2/template-2.html\'" ng-model="vm.cards[1]"></ms-card><div class="md-title mt-48">Template 3</div><ms-card template="\'app/core/directives/ms-card/templates/template-3/template-3.html\'" ng-model="vm.cards[2]"></ms-card><div class="md-title mt-48">Template 4</div><ms-card template="\'app/core/directives/ms-card/templates/template-4/template-4.html\'" ng-model="vm.cards[3]"></ms-card><div class="md-title mt-48">Template 5</div><ms-card template="\'app/core/directives/ms-card/templates/template-5/template-5.html\'" ng-model="vm.cards[4]"></ms-card><div class="md-title mt-48">Template 6</div><ms-card template="\'app/core/directives/ms-card/templates/template-6/template-6.html\'" ng-model="vm.cards[5]"></ms-card><div class="md-title mt-48">Template 7</div><ms-card template="\'app/core/directives/ms-card/templates/template-7/template-7.html\'" ng-model="vm.cards[6]"></ms-card><div class="md-title mt-48">Template 8</div><ms-card template="\'app/core/directives/ms-card/templates/template-8/template-8.html\'" ng-model="vm.cards[7]"></ms-card><div class="md-title mt-48">Template 9</div><ms-card template="\'app/core/directives/ms-card/templates/template-9/template-9.html\'" ng-model="vm.cards[8]"></ms-card><div class="md-title mt-48">Template 10</div><ms-card template="\'app/core/directives/ms-card/templates/template-10/template-10.html\'" ng-model="vm.cards[9]"></ms-card></div></div></div>'), e.put("app/main/components/maps/maps.html", '<div id="maps" class="page-layout simple tabbed docs-page" layout="column"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span></div><div class="title">Maps</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="http://angular-ui.github.io/angular-google-maps/" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><md-tabs md-stretch-tabs="" md-selected="vm.selectedIndex"><md-tab ui-sref="app.components_maps">Simple Map</md-tab><md-tab ui-sref="app.components_maps.satellite">Satellite Map</md-tab><md-tab ui-sref="app.components_maps.terrain">Terrain Map</md-tab><md-tab ui-sref="app.components_maps.simple-marker">Simple Marker</md-tab><md-tab ui-sref="app.components_maps.custom-marker">Custom Marker</md-tab><md-tab ui-sref="app.components_maps.info-window">Info Window</md-tab></md-tabs><md-content ui-view="tabContent" flex="" class="card md-whiteframe-4dp"></md-content></div></div>'), e.put("app/main/components/price-tables/price-tables.html", '<div id="price-tables" class="page-layout simple fullwidth doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">PAGES</span></div><div class="title">Price Tables</div></div></div><div class="content"><div class="md-title">Style 1</div><div class="price-tables" flex="" layout="row" layout-wrap=""><div class="price-table style-1 md-whiteframe-1dp" layout="column"><div class="package-type md-primary-bg"><span>BASIC</span></div><div class="price" layout="row" layout-align="center start"><div class="currency">$</div><div layout="row" layout-align="center end"><div class="value">4</div><div class="period">/ month</div></div></div><md-divider></md-divider><div class="terms" layout="column"><div class="term"><span class="text-bold">10</span> Projects</div><div class="term"><span class="text-bold">10</span> Pages</div><div class="term"><span class="text-bold">100</span> Mb Disk Space</div></div><md-button class="cta-button md-raised md-accent">BUY NOW</md-button></div><div class="price-table style-1 md-whiteframe-8dp" layout="column"><div class="package-type md-primary-bg" layout="row" layout-align="space-between center"><span>STANDARD</span> <span class="sale md-accent-color md-hue-1">Save 15%</span></div><div class="price" layout="row" layout-align="center start"><div class="currency">$</div><div layout="row" layout-align="center end"><div class="value">8</div><div class="period">/ month</div></div></div><md-divider></md-divider><div class="terms" layout="column"><div class="term"><span class="text-bold">20</span> Projects</div><div class="term"><span class="text-bold">20</span> Pages</div><div class="term"><span class="text-bold">200</span> Mb Disk Space</div></div><md-button class="cta-button md-raised md-accent">BUY NOW</md-button></div><div class="price-table style-1 md-whiteframe-1dp" layout="column"><div class="package-type md-primary-bg" layout="row"><span>ADVANCED</span></div><div class="price" layout="row" layout-align="center start"><div class="currency">$</div><div layout="row" layout-align="center end"><div class="value">12</div><div class="period">/ month</div></div></div><md-divider></md-divider><div class="terms" layout="column"><div class="term"><span class="text-bold">40</span> Projects</div><div class="term"><span class="text-bold">40</span> Pages</div><div class="term"><span class="text-bold">500</span> Mb Disk Space</div></div><md-button class="cta-button md-raised md-accent">BUY NOW</md-button></div></div><div class="md-title">Style 2</div><div class="price-tables" flex="" layout="row" layout-wrap=""><div class="price-table style-2 md-whiteframe-1dp" layout="column"><div class="package-type md-accent-fg">SILVER PACKAGE</div><div class="price" layout="row" layout-align="center start"><div class="currency">$</div><div class="value">99</div></div><div class="period">PER MONTH</div><div class="terms" layout="column" layout-align="start center"><div class="term"><span class="text-bold">10</span> Projects</div><div class="term"><span class="text-bold">10</span> Pages</div><div class="term"><span class="text-bold">100</span> Mb Disk Space</div></div><md-button class="cta-button md-raised md-accent">GET STARTED</md-button></div><div class="price-table style-2 md-whiteframe-8dp" layout="column"><div class="badge md-warn-bg">BEST VALUE</div><div class="package-type md-accent-fg">GOLD PACKAGE</div><div class="price" layout="row" layout-align="center start"><div class="currency">$</div><div class="value">299</div></div><div class="period">PER MONTH</div><div class="terms" layout="column" layout-align="start center"><div class="term"><span class="text-bold">20</span> Projects</div><div class="term"><span class="text-bold">20</span> Pages</div><div class="term"><span class="text-bold">200</span> Mb Disk Space</div></div><md-button class="cta-button md-raised md-accent">GET STARTED</md-button></div><div class="price-table style-2 md-whiteframe-1dp" layout="column"><div class="package-type md-accent-fg">PLATINUM PACKAGE</div><div class="price" layout="row" layout-align="center start"><div class="currency">$</div><div class="value">499</div></div><div class="period">PER MONTH</div><div class="terms" layout="column" layout-align="start center"><div class="term"><span class="text-bold">40</span> Projects</div><div class="term"><span class="text-bold">40</span> Pages</div><div class="term"><span class="text-bold">500</span> Mb Disk Space</div></div><md-button class="cta-button md-raised md-accent">GET STARTED</md-button></div></div><div class="md-title">Style 3</div><div class="price-tables" flex="" layout="row" layout-align="start start" layout-wrap=""><div class="price-table style-3 md-whiteframe-1dp" layout="column"><div class="package-type"><div class="title">Starter</div><div class="subtitle">For small teams</div></div><div class="price md-primary-bg md-hue-3" layout="row" layout-align="center start"><div class="currency md-accent-fg">$</div><div layout="row" layout-align="center end"><div class="value md-accent-fg">29</div><div class="period">monthly per user</div></div></div><div class="terms" layout="column" layout-align="start center"><div class="term">Unlimited projects</div><div class="term">Unlimited pages</div><div class="term">Unlimited disk space</div><div class="term">24 / 7 Free support</div></div><md-button class="cta-button md-raised md-accent">GET STARTED FREE</md-button><div class="note">7 day free trial to start</div></div><div class="price-table style-3 md-whiteframe-8dp" layout="column"><div class="package-type"><div class="title">Pro</div><div class="subtitle">For larger teams</div></div><div class="price md-primary-bg" layout="row" layout-align="center start"><div class="currency md-accent-fg">$</div><div layout="row" layout-align="center end"><div class="value md-accent-fg">59</div><div class="period">monthly per user</div></div></div><div class="terms" layout="column" layout-align="start center"><div class="term">Unlimited projects</div><div class="term">Unlimited pages</div><div class="term">Unlimited disk space</div><div class="term">24 / 7 Free support</div><div class="term md-warn-fg">Advanced reporting</div><div class="term md-warn-fg">Customizable interface</div><div class="term md-warn-fg">CRM Integration</div></div><md-button class="cta-button md-raised md-accent">GET STARTED FREE</md-button><div class="note">30 day free trial to start</div></div><div class="price-table style-3 md-whiteframe-1dp" layout="column"><div class="package-type"><div class="title">Enterprise</div><div class="subtitle">For big teams</div></div><div class="price md-primary-bg md-hue-3" layout="row" layout-align="center start"><div class="currency md-accent-fg">$</div><div layout="row" layout-align="center end"><div class="value md-accent-fg">99</div><div class="period">monthly per user</div></div></div><div class="terms" layout="column" layout-align="start center"><div class="term">Unlimited projects</div><div class="term">Unlimited pages</div><div class="term">Unlimited disk space</div><div class="term">For full feature list, call us</div></div><md-button class="cta-button md-raised md-accent">CALL US</md-button><div class="note">90 day free trial to start</div></div></div></div></div>'), e.put("app/main/components/widgets/widgets.html", '<div id="widgets" class="page-layout simple fullwidth doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span></div><div class="title">Widgets</div></div></div><div class="content"><p class="h3 m-16">Here you can see some of the other widget styles. These are just tiny example of what you can do with using <code class="no-highlight">ms-widget</code> directive and helper classes. You are not limited to these styles or widgets, you can easily create wide variety of widgets.</p><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="h-170 p-16 light-blue-bg"><div class="pb-8" layout="row" layout-align="space-between center"><div class="h4 font-weight-500 secondary-text">{{vm.widget1.title}}</div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="white-fg" layout="column" layout-align="space-between" flex=""><div class="md-display-1" layout="row" layout-align="start center"><span>{{vm.widget1.value | number}}</span><md-icon md-font-icon="icon-trending-up" class="s36 ml-16"></md-icon></div><div layout="row" layout-align="start center"><span>Last week: {{vm.widget1.lastWeekValue | number}}</span> <span class="text-boxed-light">{{vm.widget1.lastWeekDiff}}</span></div></div></ms-widget-front><ms-widget-back class="p-16 light-blue-bg white-fg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget1.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="h-170 p-16 green-bg"><div class="pb-8" layout="row" layout-align="space-between center"><div class="h4 font-weight-500 secondary-text">{{vm.widget2.title}}</div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="white-fg" layout="column" layout-align="space-between" flex=""><div><div class="md-display-1 pb-16">{{vm.widget2.value}}%</div><div class="pb-16"><md-progress-linear md-mode="determinate" value="{{vm.widget2.value}}"></md-progress-linear></div></div><div layout="row" layout-align="start center"><span>Last week: {{vm.widget2.lastWeekValue}}%</span> <span class="text-boxed-light">{{vm.widget2.lastWeekDiff}}</span></div></div></ms-widget-front><ms-widget-back class="p-16 green-bg white-fg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget2.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="h-170 p-16 blue-grey-bg white-fg"><div class="pb-8" layout="row" layout-align="space-between center"><div class="h4 font-weight-500 secondary-text">{{vm.widget3.title}}</div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div layout="column" layout-align="space-between" flex=""><div><div class="md-display-1 pb-16">{{vm.widget3.value}}%</div><div class="pb-8"><md-progress-linear md-mode="determinate" value="{{vm.widget3.value}}"></md-progress-linear></div></div><div>See more details...</div></div></ms-widget-front><ms-widget-back class="p-16 blue-grey-bg white-fg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget3.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="h-170 p-16 deep-purple-bg white-fg"><div class="pb-8" layout="row" layout-align="space-between center"><div class="h4 font-weight-500 secondary-text">{{vm.widget4.title}}</div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div layout="column" layout-align="space-between" flex=""><div class="md-display-1 pb-8" layout="row" layout-align="start center"><span>{{vm.widget4.value | number}}</span><md-icon md-font-icon="icon-trending-down" class="s36 ml-16"></md-icon></div><div>See more details...</div></div></ms-widget-front><ms-widget-back class="p-16 deep-purple-bg white-fg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget4.detail}}</div></ms-widget-back></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget class="h-140" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 white-bg" layout="row" flex=""><div class="pt-8 pb-8" layout="column" layout-align="center center" flex=""><div class="md-display-1 pb-8">{{vm.widget5.value}}</div><div class="font-weight-500 secondary-text">{{vm.widget5.title}}</div></div></ms-widget-front></ms-widget><ms-widget class="h-140" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 white-bg" layout="row" flex=""><div class="pt-8 pb-8" layout="column" layout-align="center center" flex=""><div class="font-weight-500 secondary-text pb-8">{{vm.widget6.title}}</div><div class="md-display-1">{{vm.widget6.value}}</div></div></ms-widget-front></ms-widget><ms-widget class="h-140" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 white-bg" layout="row" flex=""><div class="pt-8 pb-8" layout="row" layout-align="space-between center" flex=""><div class="pl-8" layout="column" layout-align="center start"><span class="md-display-1 pb-8">{{vm.widget7.value}}</span> <span class="font-weight-500 secondary-text">{{vm.widget7.title}}</span></div><div><md-icon md-font-icon="icon-thumb-up" class="s48 hint-text"></md-icon></div></div></ms-widget-front></ms-widget><ms-widget class="h-140" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 white-bg" layout="row" flex=""><div class="pt-8 pb-8" layout="row" layout-align="space-between center" flex=""><div><md-icon md-font-icon="icon-lock-unlocked" class="s48 hint-text"></md-icon></div><div class="pr-8" layout="column" layout-align="center end"><div class="md-display-1 pb-8">{{vm.widget8.value}}</div><div class="font-weight-500 secondary-text">{{vm.widget8.title}}</div></div></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget class="h-300" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 deep-orange-bg white-fg" layout="row" flex=""><div layout="column" layout-align="center center" flex=""><div class="md-display-3 pb-8">{{vm.widget9.value}}</div><div class="h3 font-weight-500">{{vm.widget9.title}}</div></div><div class="background-image-center"><md-icon md-font-icon="icon-music-note" class="s256 faint-text"></md-icon></div></ms-widget-front></ms-widget><ms-widget class="h-300" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 cyan-bg white-fg" layout="row" flex=""><div layout="column" layout-align="center center" flex=""><div class="md-display-3 pb-8">{{vm.widget10.value}}</div><div class="h3 font-weight-500">{{vm.widget10.title}}</div></div><div class="background-image-center"><md-icon md-font-icon="icon-filmstrip" class="s256 faint-text"></md-icon></div></ms-widget-front></ms-widget><ms-widget class="h-300" layout="column" flex="100" flex-gt-sm="100" flex-gt-lg="50"><ms-widget-front class="p-16 teal-bg white-fg" layout="row" flex=""><div layout="column" layout-align="center center" flex=""><div class="md-display-3 pb-8">{{vm.widget11.value}}</div><div class="h3 font-weight-500">{{vm.widget11.title}}</div></div><div class="background-image-center"><md-icon md-font-icon="icon-file-document" class="s256 faint-text"></md-icon></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 light-blue-bg" layout="column" flex=""><div class="pb-8" layout="row" layout-align="space-between center"><div class="h4 secondary-text"><md-icon md-font-icon="icon-arrow-left" class="s16 mr-8"></md-icon><span class="font-weight-500">{{vm.widget12.date}}</span><md-icon md-font-icon="icon-arrow-right" class="s16 ml-8"></md-icon></div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="white-fg" layout="column" layout-align="center center" flex=""><div><md-icon md-font-icon="{{vm.widget12.icon}}" class="s96"></md-icon></div><div class="pt-16" layout="row" layout-align="center center"><div class="md-display-2">{{vm.widget12.temperature}}&deg;</div><div class="pl-16" layout="column"><div class="h1 text-semibold">{{vm.widget12.event}}</div><div class="h4 secondary-text">{{vm.widget12.location}}</div></div></div><div class="pt-32" layout="row" layout-align="center center"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-weather-windy" class="s16"></md-icon><span class="pl-8">22 km/h</span></div><div class="pl-16" layout="row" layout-align="start center"><md-icon md-font-icon="icon-compass" class="s16"></md-icon><span class="pl-8">NW</span></div></div></div></ms-widget-front><ms-widget-back class="p-16 light-blue-bg" layout="column" flex=""><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div class="pt-16 pb-16 white-fg"><span class="h1">Next 5 days</span></div><div class="pl-8 pr-8" layout="row" layout-align="space-between"><div layout="column" layout-align="start center" ng-repeat="detail in vm.widget12.detail"><div class="h4 pb-8 black-fg secondary-text">{{detail.day}}</div><md-icon md-font-icon="{{detail.icon}}" class="s36 white-fg"></md-icon><div class="h3 pt-8 white-fg">{{detail.temperature}}&deg;</div></div></div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 white-bg" layout="column" flex=""><div class="pb-8" layout="row" layout-align="space-between center"><div class="h4 secondary-text"><md-icon md-font-icon="icon-arrow-left" class="s16 mr-8"></md-icon><span class="font-weight-500">{{vm.widget13.date}}</span><md-icon md-font-icon="icon-arrow-right" class="s16 ml-8"></md-icon></div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div layout="column" layout-align="center center" flex=""><div><md-icon md-font-icon="{{vm.widget13.icon}}" class="s96"></md-icon></div><div class="pt-16" layout="row" layout-align="center center"><div class="md-display-2">{{vm.widget13.temperature}}&deg;</div><div class="pl-16" layout="column"><div class="h1 text-semibold">{{vm.widget13.event}}</div><div class="h4 secondary-text">{{vm.widget13.location}}</div></div></div><div class="pt-32" layout="row" layout-align="center center"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-weather-windy" class="s16"></md-icon><span class="pl-8">22 km/h</span></div><div class="pl-16" layout="row" layout-align="start center"><md-icon md-font-icon="icon-compass" class="s16"></md-icon><span class="pl-8">NW</span></div></div></div></ms-widget-front><ms-widget-back class="p-16 light-blue-bg" layout="column" flex=""><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div class="pt-16 pb-16 white-fg"><span class="h1">Next 5 days</span></div><div class="pl-8 pr-8" layout="row" layout-align="space-between"><div layout="column" layout-align="start center" ng-repeat="detail in vm.widget13.detail"><div class="h4 pb-8 black-fg secondary-text">{{detail.day}}</div><md-icon md-font-icon="{{detail.icon}}" class="s36 white-fg"></md-icon><div class="h3 pt-8 white-fg">{{detail.temperature}}&deg;</div></div></div></ms-widget-back></ms-widget><ms-widget layout="column" flex="100" flex-gt-lg="50"><ms-widget-front class="white-bg"><div class="ph-16 pt-16 pb-8 md-accent-bg"><div class="h3">{{vm.widget14.title}}</div></div><md-tabs class="md-accent no-radius" md-dynamic-height=""><md-tab label="{{tab.label}}" ng-repeat="tab in vm.widget14.tabs"><div layout="row" layout-align="start center" layout-wrap=""><div flex="100" flex-gt-md="50" ng-repeat="group in tab.groups"><div class="h2 m-16 pb-16 border-bottom">{{group.title}}</div><div class="p-16 pb-32" ng-repeat="data in group.data"><div class="pb-8" layout="row" layout-align="space-between start"><span class="h3">{{data.title}}</span> <span class="h3 secondary-text font-weight-500">{{data.value}}%</span></div><md-progress-linear class="{{data.progressColor}}" md-mode="determinate" value="{{data.value}}"></md-progress-linear></div></div></div></md-tab></md-tabs></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget class="h-250" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 red-bg white-fg" layout="column" layout-align="space-between" flex=""><div class="pb-16"><div class="h4 weight-500 pb-8">{{vm.widget15.title}}</div><div layout="row" layout-align="start center"><div class="pr-8"><md-icon md-font-icon="icon-alert" class="s24 hint-text"></md-icon></div><div class="h1 secondary-text">{{vm.widget15.value}}%</div></div></div><div><c3chart class="c3 stroke-2" bindto-id="cpu-usage"><chart-column ng-repeat="column in vm.widget15.chart.columns" column-id="{{column.id}}" column-name="{{column.name}}" column-color="{{column.color}}" column-values="{{column.values}}" column-type="{{column.type}}"><chart-axis><chart-axis-y show="false"></chart-axis-y></chart-axis><chart-legend show-legend="false"><chart-size chart-height="120"></chart-size></chart-legend></chart-column></c3chart></div></ms-widget-front></ms-widget><ms-widget class="h-250" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 white-bg" layout="column" layout-align="space-between" flex=""><div class="pb-16"><div class="h4 weight-500 pb-8">{{vm.widget16.title}}</div><div layout="row" layout-align="start center"><div class="h1 secondary-text">{{vm.widget16.value}}</div><md-icon md-font-icon="icon-trending-up" class="mh-8"></md-icon></div></div><div><c3chart class="c3 stroke-2" bindto-id="stock"><chart-column ng-repeat="column in vm.widget16.chart.columns" column-id="{{column.id}}" column-name="{{column.name}}" column-color="{{column.color}}" column-values="{{column.values}}" column-type="{{column.type}}"><chart-axis><chart-axis-x show="false"></chart-axis-x><chart-axis-y show="false"></chart-axis-y></chart-axis><chart-legend show-legend="false"><chart-size chart-height="120"></chart-size></chart-legend></chart-column></c3chart></div></ms-widget-front></ms-widget><ms-widget class="h-250" layout="column" flex="100" flex-gt-lg="50"><ms-widget-front class="p-16 white-bg" layout="column" layout-align="space-between" flex=""><div class="pb-16"><div class="h4 weight-500 pb-8">{{vm.widget17.title}}</div><div class="secondary-text">{{vm.widget17.subtitle}}</div></div><div><c3chart class="c3 stroke-2" bindto-id="io-rate"><chart-column ng-repeat="column in vm.widget17.chart.columns" column-id="{{column.id}}" column-name="{{column.name}}" column-color="{{column.color}}" column-values="{{column.values}}" column-type="{{column.type}}"><chart-axis><chart-axis-y show="false"></chart-axis-y></chart-axis><chart-size chart-height="120"></chart-size></chart-column></c3chart></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget class="h-300" layout="column" flex="100" flex-gt-lg="50"><ms-widget-front class="p-16 white-bg"><div layout="row" layout-align="space-between"><div class="mr-16"><div class="h4 weight-500 pb-8">{{vm.widget18.title}}</div><div class="h1 secondary-text">{{vm.widget18.value | number}}</div><div class="pt-8" layout="row" layout-align="start center"><div>LW: {{vm.widget18.lastWeekValue | number}}</div><div class="text-boxed">{{vm.widget18.lastWeekDiff}}</div></div></div><c3chart flex="" bindto-id="weekly-visitors"><chart-column ng-repeat="column in vm.widget18.chart.columns" column-id="{{column.id}}" column-name="{{column.name}}" column-color="{{column.color}}" column-values="{{column.values}}" column-type="{{column.type}}"><chart-legend show-legend="false"><chart-bar width="10"><chart-size chart-height="240"></chart-size></chart-bar></chart-legend></chart-column></c3chart></div></ms-widget-front></ms-widget><ms-widget class="h-300" layout="column" flex="100" flex-gt-lg="50"><ms-widget-front class="p-16 light-blue-bg white-fg"><div layout="row" layout-align="space-between"><div class="mr-16"><div class="h1 weight-500 pb-8">{{vm.widget19.title}}</div><div class="h4 secondary-text weight-500 pb-8">{{vm.widget19.subtitle}}</div><div layout="row" layout-align="start center"><div class="md-display-1 pr-8">{{vm.widget19.value}}</div><md-icon md-font-icon="icon-trending-up" class="s24"></md-icon></div></div><c3chart flex="" bindto-id="goog-nasdaq"><chart-column ng-repeat="column in vm.widget19.chart.columns" column-id="{{column.id}}" column-name="{{column.name}}" column-color="{{column.color}}" column-values="{{column.values}}" column-type="{{column.type}}"><chart-legend show-legend="false"><chart-bar width="10"><chart-size chart-height="240"></chart-size></chart-bar></chart-legend></chart-column></c3chart></div></ms-widget-front></ms-widget></div></div></div>'),
        e.put("app/main/ui/icons/icons.html", '<div id="icons" class="page-layout simple fullwidth doc-page" layout="column"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">USER INTERFACE</span></div><div class="title">Icons</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://materialdesignicons.com/" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content" layout="column"><div id="icons-list" class="card md-whiteframe-1dp" layout="row" layout-wrap=""><div class="item" ng-repeat="icon in ::vm.icons track by icon.properties.id" layout-align="start center"><i class="icon icon-{{::icon.properties.name}} s40"></i><div class="name secondary-text text-center">icon-{{::icon.properties.name}}</div></div></div></div></div>'), e.put("app/main/ui/material-colors/material-colors.html", '<div id="material-colors" class="page-layout simple tabbed doc-page" layout="column"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">USER INTERFACE</span></div><div class="title">Material Colors</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://www.google.com/design/spec/style/color.html#color-color-palette" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><md-tabs class="color-tabs" md-dynamic-height="" md-swipe-content=""><md-tab ng-repeat="(paletteName, palette) in vm.palettes" md-on-select="vm.selected = paletteName; vm.selectedPalette = palette"><md-tab-label><span class="text-capitalize">{{paletteName}}</span></md-tab-label></md-tab></md-tabs><md-content class="color-tab"><div class="h3 pb-16">Fuse has classes for every single color from <a href="https://www.google.com/design/spec/style/color.html#color-color-palette" target="_blank">Material Design Color Palette</a> for your convenient. You can use them with pretty much every element except Angular Material directives.</div><div class="color-header colored-bg" ng-class="\'md-\'+vm.selected+\'-bg\'" layout="row" layout-align="start start" layout-wrap="" layout-padding=""><div flex="100"><h3 class="text-capitalize">{{vm.selected}}</h3></div><div layout="row" layout-align="space-between center" flex="100"><div>500</div><div>rgb({{vm.selectedPalette[\'500\'].value[0]}},{{vm.selectedPalette[\'500\'].value[1]}},{{vm.selectedPalette[\'500\'].value[2]}})</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="colored-bg" ng-repeat="(hue, hueValue) in vm.selectedPalette" flex="100" layout="row" layout-sm="column" layout-padding="" ng-class="vm.selected+\'-\'+hue+\'-bg\'"><div flex="">{{hue}}</div><div ng-class="\'md-\'+vm.selected+\'-\'+hue+\'-bg\'" flex="">.{{\'md-\'+vm.selected+\'-\'+hue+\'-bg\'}}</div><div flex="">.{{vm.selected+\'-\'+hue+\'-bg\'}}</div><div class="fg-box white-bg md-whiteframe-2dp" ng-class="vm.selected+\'-\'+hue+\'-fg\'">.{{vm.selected+\'-\'+hue+\'-fg\'}}</div></div></div></md-content></div></div>'), e.put("app/main/ui/theme-colors/theme-colors.html", '<div id="theme-colors" class="page-layout simple tabbed doc-page" layout="column"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">USER INTERFACE</span></div><div class="title">Theme Colors</div></div><div layout="row" layout-align="start center"><md-button class="md-raised md-warn" ng-click="vm.createTheme($event);"><md-icon md-font-icon="icon-palette"></md-icon><span>Create Your Own Theme!</span></md-button></div></div><div class="content"><md-tabs class="color-tabs" md-dynamic-height="" md-swipe-content="" md-stretch-tabs="always"><md-tab label="Primary Color"><md-content class="color-tab" ng-include="\'app/main/ui/theme-colors/tabs/primary/primary.html\'"></md-content></md-tab><md-tab label="Accent Color"><md-content class="color-tab" ng-include="\'app/main/ui/theme-colors/tabs/accent/accent.html\'"></md-content></md-tab><md-tab label="Warn Color"><md-content class="color-tab" ng-include="\'app/main/ui/theme-colors/tabs/warn/warn.html\'"></md-content></md-tab><md-tab label="Background Color"><md-content class="color-tab" ng-include="\'app/main/ui/theme-colors/tabs/background/background.html\'"></md-content></md-tab></md-tabs></div></div>'), e.put("app/main/ui/typography/typography.html", '<div id="typography" class="page-layout simple fullwidth doc-page" layout="column"><div class="header md-accent-bg" layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">USER INTERFACE</span></div><div class="title">Typography</div></div><div class="content"><div class="md-title">Material design headings</div><div class="card md-whiteframe-4dp" layout="column"><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">112px</div><span class="md-display-4">Display 4</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><span class="md-display-4">Display 4</span></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">56px</div><span class="md-display-3">Display 3</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><span class="md-display-3">Display 3</span></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">45px</div><span class="md-display-2">Display 2</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><span class="md-display-2">Display 2</span></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">34px</div><span class="md-display-1">Display 1</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><span class="md-display-1">Display 1</span></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">24px</div><span class="md-headline">Headline</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><span class="md-headline">Headline</span></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">20px</div><span class="md-title">Title</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><span class="md-title">Title</span></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">16px</div><span class="md-subhead">Subhead</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><span class="md-subhead">Subhead</span></hljs></div></div><div class="md-title">Headings</div><div class="card md-whiteframe-4dp" layout="column"><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">24px</div><h1>Heading 1</h1></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><h1>Heading 1</h1><div class="h1">Heading 1</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">20px</div><h2>Heading 2</h2></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><h2>Heading 2</h2><div class="h2">Heading 2</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">16px</div><h3>Heading 3</h3></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><h3>Heading 3</h3><div class="h3">Heading 3</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">14px</div><h4>Heading 4</h4></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><h4>Heading 4</h4><div class="h4">Heading 4</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">13px</div><h5>Heading 5</h5></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><h5>Heading 5</h5><div class="h5">Heading 5</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption secondary-text">12px</div><h6>Heading 6</h6></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex=""><h6>Heading 6</h6><div class="h6">Heading 6</div></hljs></div></div><div class="md-title">Inline text elements</div><div class="card md-whiteframe-4dp" layout="column"><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span>This is a<mark>marked</mark>text.</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll="">This is a<mark>marked</mark>text.</hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span><del>This is a deleted text.</del></span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><del>This is a deleted text.</del></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span><s>This is a strike-through text.</s></span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><s>This is a strike-through text.</s></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span><u>This is an underlined text.</u></span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><u>This is an underlined text.</u></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span><small>This is a small text.</small></span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><small>This is a small text.</small></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span><strong>This is a strong text.</strong></span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scrollx=""><strong>This is a strong text.</strong></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span><em>This is an italic text.</em></span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><em>This is an italic text.</em></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span>This is a <span class="text-super">super</span> text.</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll="">This is a <span class="text-super">super</span> text.</hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span>This is a <span class="text-sub">sub</span> text.</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll="">This is a <span class="text-sub">sub</span> text.</hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span>This is a <span class="text-capitalize">capitalized</span> text.</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll="">This is a <span class="text-capitalized">capitalized</span> text.</hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span>This is an <span class="text-uppercase">uppercase</span> text.</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll="">This is an <span class="text-uppercase">uppercase</span> text.</hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span>This is a <span class="text-lowercase">LOWERCASE</span> text.</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll="">This is a <span class="text-lowercase">LOWERCASE</span> text.</hljs></div></div><div class="md-title">Abbrevations</div><div class="card md-whiteframe-4dp" layout="column"><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span><abbr title="Angular JS">Angular JS</abbr></span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><abbr title="Angular JS">Angular JS</abbr></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span><abbr title="Cascaded Style Sheet">CSS</abbr></span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><abbr title="Cascaded Style Sheet">CSS</abbr></hljs></div></div><div class="md-title">Blockquotes</div><div class="card md-whiteframe-4dp" layout="column"><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><blockquote><p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p></blockquote></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><blockquote><p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p></blockquote></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><blockquote><p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p><footer>John Doe</footer></blockquote></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><blockquote><p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p><footer>John Doe</footer></blockquote></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><blockquote class="reverse"><p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p><footer>John Doe</footer></blockquote></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><blockquote class="reverse"><p>The bedding was hardly able to cover it and seemed ready to slide off any moment.</p><footer>John Doe</footer></blockquote></hljs></div></div><div class="md-title">Lists</div><div class="card md-whiteframe-4dp" layout="column"><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><ul><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li></ul></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><ul><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li><li>Unordered list item</li></ul></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><ol><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li></ol></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><ol><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li><li>Ordered list item</li></ol></hljs></div></div><div class="md-title">Definition lists</div><div class="card md-whiteframe-4dp" layout="column"><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><dl><dt>Definition term</dt><dd>This is the definition description</dd><dt>Another definition term</dt><dd>This is also another definition description</dd></dl></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><dl><dt>Definition term</dt><dd>This is the definition description</dd><dt>Another definition term</dt><dd>This is also another definition description</dd></dl></hljs></div></div><div class="md-title">Other helpers</div><div class="card md-whiteframe-4dp" layout="column"><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="text-left">Left aligned text</div></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><div class="text-left">Left aligned text</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="text-center">Center aligned text</div></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><div class="text-center">Center aligned text</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="text-right">Right aligned text</div></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><div class="text-right">Right aligned text</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><p><span class="text-boxed">Boxed text</span></p></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><p><span class="text-boxed">Boxed text</span></p></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><p><span class="text-strike">Strike-through text</span></p></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><p><span class="text-strike">Strike-through text</span></p></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="text-italic">Italic text</div><div class="text-semibold">Semi-bold text</div><div class="text-bold">Bold text</div></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><div class="text-italic">Italic text</div><div class="text-semibold">Semi-bold text</div><div class="text-bold">Bold text</div></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><span class="text-truncate">This is a truncated text. It will be truncated if it\'s too long. Vivamus convallis dui porta massa fermentum dictum. Aenean mollis molestie felis, ut interdum ex vehicula a.</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><span class="text-truncate">This is a truncated text. It will be truncated if it\'s too long. Vivamus convallis dui porta massa fermentum dictum. Aenean mollis molestie felis, ut interdum ex vehicula a.</span></hljs></div><div layout="column" layout-gt-md="row"><div class="preview" layout="column" layout-align="center" flex=""><div class="md-caption mb-16">Font weight helpers from 100 to 900</div><span class="font-weight-100">font-weight: 100</span> <span>...</span> <span class="font-weight-900">font-weight: 900</span></div><hljs lang="html" class="source-code" layout="column" layout-align="center" flex="" ms-scroll=""><span class="font-weight-100">font-weight: 100</span> ... <span class="font-weight-900">font-weight: 900</span></hljs></div></div></div></div>'), e.put("app/main/pages/coming-soon/coming-soon.html", '<div id="coming-soon" class="scrollable" ms-scroll=""><div id="coming-soon-form-wrapper" layout="row" layout-align="center center"><div id="coming-soon-form" class="md-whiteframe-1dp"><div class="top"><div class="logo md-accent-bg"><span>F</span></div><div class="title" translate="COMINGSOON.TITLE">Hey! Thank you for checking out our app.</div><div class="subtitle" translate="COMINGSOON.SUBTITLE">It’s not quite ready yet, but we are working hard and it will be ready in approximately:</div><timer end-time="vm.endTime" layout="row"><div><div class="value">{{days}}</div><div class="type" translate="COMINGSOON.DAYS">days</div></div><div><div class="value">{{hours}}</div><div class="type" translate="COMINGSOON.HOURS">hours</div></div><div><div class="value">{{minutes}}</div><div class="type" translate="COMINGSOON.MINUTES">minutes</div></div><div><div class="value">{{seconds}}</div><div class="type" translate="COMINGSOON.SECONDS">seconds</div></div></timer></div><form><div class="message" translate="COMINGSOON.MESSAGE">If you would like to be notified when the app is ready, you can subscribe to our e-mail list.</div><md-input-container flex="" md-no-float=""><input type="email" placeholder="Email address" translate="" translate-attr-placeholder="COMINGSOON.EMAIL_ADRESS"></md-input-container><md-button class="md-raised md-accent" aria-label="SUBSCRIBE" translate="COMINGSOON.SUBSCRIBE" translate-attr-aria-label="COMINGSOON.SUBSCRIBE">SUBSCRIBE</md-button></form></div></div></div>'), e.put("app/main/pages/invoice/invoice.html", '<div id="invoice" class="page-layout blank" layout="row" ms-scroll=""><div class="invoice-container"><div class="card md-whiteframe-8dp"><div class="header" layout="row" layout-align="space-between start"><div class="ids" layout="column"><div layout="row" class="seller" layout-align="start center"><div class="logo md-accent-bg" layout="row" layout-align="center center"><div>F</div></div><div class="divider"></div><div class="detail"><div class="title">{{vm.invoice.from.title}}</div><div ng-if="vm.invoice.from.address" class="address">{{vm.invoice.from.address}}</div><div ng-if="vm.invoice.from.phone" class="phone"><span translate="INVOICE.PHONE">Phone</span>: {{vm.invoice.from.phone}}</div><div ng-if="vm.invoice.from.email" class="email"><span translate="INVOICE.EMAIL">Email</span>: {{vm.invoice.from.email}}</div><div ng-if="vm.invoice.from.website" class="website"><span translate="INVOICE.WEB">Web</span>: {{vm.invoice.from.website}}</div></div></div><div layout="row" class="client" layout-align="start center"><div class="label" layout="row" layout-align="end center"><div translate="INVOICE.CLIENT">CLIENT</div></div><div class="divider"></div><div class="detail"><div class="title">{{vm.invoice.client.title}}</div><div ng-if="vm.invoice.client.address" class="address">{{vm.invoice.client.address}}</div><div ng-if="vm.invoice.client.phone" class="phone"><span translate="INVOICE.PHONE">Phone</span>: {{vm.invoice.client.phone}}</div><div ng-if="vm.invoice.client.email" class="email"><span translate="INVOICE.EMAIL">Email</span>: {{vm.invoice.client.email}}</div><div ng-if="vm.invoice.client.website" class="website"><span translate="INVOICE.WEB">Web</span>: {{vm.invoice.client.website}}</div></div></div></div><table class="summary"><tr class="code"><td class="label" translate="INVOICE.INVOICE">INVOICE</td><td class="value">{{vm.invoice.number}}</td></tr><tr><td class="label" translate="INVOICE.INVOICE_DATE">INVOICE DATE</td><td class="value">{{vm.invoice.date}}</td></tr><tr><td class="label" translate="INVOICE.DUE_DATE">DUE DATE</td><td class="value">{{vm.invoice.dueDate}}</td></tr><tr><td class="label" translate="INVOICE.TOTAL_DUE">TOTAL DUE</td><td class="value">{{vm.invoice.total | currency}}</td></tr></table></div><div class="content"><table class="simple invoice-table"><thead><th translate="INVOICE.SERVICE">SERVICE</th><th translate="INVOICE.UNIT">UNIT</th><th class="text-right" translate="INVOICE.UNIT_PRICE">UNIT PRICE</th><th class="text-right" translate="INVOICE.QUANTITY">QUANTITY</th><th class="text-right" translate="INVOICE.TOTAL">TOTAL</th></thead><tbody><tr ng-repeat="service in vm.invoice.services"><td><div class="title">{{service.title}}</div><div class="detail">{{service.detail}}</div></td><td>{{service.unit}}</td><td class="text-right">{{service.unitPrice | currency}}</td><td class="text-right">{{service.quantity}}</td><td class="text-right">{{service.total | currency}}</td></tr></tbody></table><table class="simple invoice-table-footer"><tbody><tr class="subtotal"><td translate="INVOICE.SUBTOTAL">SUBTOTAL</td><td>{{vm.invoice.subtotal | currency}}</td></tr><tr class="tax"><td translate="INVOICE.TAX">TAX</td><td>{{vm.invoice.tax | currency}}</td></tr><tr class="discount"><td translate="INVOICE.DISCOUNT">DISCOUNT</td><td>-{{vm.invoice.discount | currency}}</td></tr><tr class="total"><td translate="INVOICE.TOTAL">TOTAL</td><td>{{vm.invoice.total | currency}}</td></tr></tbody></table></div><div class="footer"><div class="note" translate="INVOICE.NOTE">Please pay within 15 days. Thank you for your business.</div><div layout="row" layout-align="start start"><div class="logo md-accent-bg" layout="row" layout-align="center center"><div>F</div></div><div class="small-note" translate="INVOICE.SMALL_NOTE">In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros. Nulla laoreet ipsum quam, quis auctor velit sodales sit amet. Phasellus at felis iaculis, sodales lectus vitae, egestas mauris. Duis cursus, metus non dignissim consectetur, augue erat convallis massa, sit amet mollis lacus lorem eu purus. Praesent posuere ante quam. Curabitur ultricies magna diam, non consequat purus suscipit quis. Proin egestas nibh id massa dapibus, sed auctor velit ullamcorper. Integer id dolor nunc.</div></div></div></div></div></div>'), e.put("app/main/pages/maintenance/maintenance.html", '<div id="maintenance" class="scrollable" ms-scroll=""><div id="maintenance-form-wrapper" layout="row" layout-align="center center"><div id="maintenance-form" class="md-whiteframe-1dp"><div class="logo md-accent-bg"><span>F</span></div><div class="title" translate="MAINTENANCE.TITLE">Closed for scheduled maintenance!</div><div class="subtitle" translate="MAINTENANCE.SUBTITLE">We\'re sorry for the inconvenience.<br>Please check back later.</div></div></div></div>'), e.put("app/main/pages/profile/profile.html", '<div id="profile" class="page-layout simple tabbed"><div class="header md-accent-bg" layout="column" layout-align="center center" layout-gt-md="row" layout-align-gt-md="space-between end"><div class="user-info" layout="column" layout-align="center center" layout-gt-md="row" layout-align-gt-md="start center"><img class="profile-image avatar huge" src="assets/images/avatars/katherine.jpg"><div class="name">Katherine Wilson</div></div><div class="actions" layout="row" layout-align="end center"><md-button class="md-raised md-accent" aria-label="Follow" translate="PROFILE.FOLLOW" translate-attr-aria-label="PROFILE.FOLLOW">Follow</md-button><md-button class="md-raised md-primary" translate="PROFILE.SEND_MESSAGE" translate-attr-aria-label="PROFILE.SEND_MESSAGE">Send Message</md-button></div></div><div class="content" flex=""><md-tabs md-dynamic-height=""><md-tab><md-tab-label><span translate="PROFILE.TIMELINE">Timeline</span></md-tab-label><md-tab-body><md-content class="timeline-tab" ng-include="\'app/main/pages/profile/tabs/timeline/timeline.html\'"></md-content></md-tab-body></md-tab><md-tab><md-tab-label><span translate="PROFILE.ABOUT">About</span></md-tab-label><md-tab-body><md-content class="about-tab" ng-include="\'app/main/pages/profile/tabs/about/about.html\'"></md-content></md-tab-body></md-tab><md-tab><md-tab-label><span translate="PROFILE.PHOTOS_VIDEOS">Photos & Videos</span></md-tab-label><md-tab-body><md-content class="photos-videos-tab" ng-include="\'app/main/pages/profile/tabs/photos-videos/photos-videos.html\'"></md-content></md-tab-body></md-tab></md-tabs></div></div>'), e.put("app/main/pages/search/search.html", '<div id="search" class="page-layout simple tabbed"><div class="header md-accent-bg" layout="row" layout-align="start center"><div class="search" flex="" layout="row" layout-align="start center"><md-icon md-font-icon="icon-magnify" class="icon search-icon"></md-icon><input class="search-input" ng-model="vm.search" type="text" placeholder="Search.." translate="" translate-attr-placeholder="SEARCH.SEARCH" flex=""></div><md-menu class="search-settings" md-position-mode="target-right target"><md-button class="md-icon-button" ng-click="$mdOpenMenu()" aria-label="Search settings" translate="" translate-attr-aria-label="SEARCH.SEARCH_SETTINGS"><md-icon md-menu-origin="" md-menu-align-target="" md-font-icon="icon-cog" class="icon s16"></md-icon></md-button><md-menu-content width="3"><md-menu-item><md-button ng-click="vm.dummyFunction()"><p translate="SEARCH.SETTINGS_1">Settings 1</p></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.dummyFunction()"><p translate="SEARCH.SETTINGS_2">Settings 2</p></md-button></md-menu-item></md-menu-content></md-menu></div><div class="content" flex=""><md-tabs md-dynamic-height=""><md-tab label="Classic"><md-content class="classic-tab" ng-include="\'app/main/pages/search/tabs/classic/classic.html\'"></md-content></md-tab><md-tab label="Emails"><md-content class="emails-tab" ng-include="\'app/main/pages/search/tabs/emails/emails.html\'"></md-content></md-tab><md-tab label="Users"><md-content class="users-tab" ng-include="\'app/main/pages/search/tabs/users/users.html\'"></md-content></md-tab><md-tab label="Contacts"><md-content class="contacts-tab" ng-include="\'app/main/pages/search/tabs/contacts/contacts.html\'"></md-content></md-tab></md-tabs></div></div>'), e.put("app/main/pages/timeline/timeline-left.html", '<div id="timeline" class="timeline-left" ms-timeline=""><div class="timeline-item animate" layout="column" layout-align="center center" layout-gt-md="row" layout-align-gt-md="center start" ng-repeat="timelineItem in vm.timeline | limitTo: timelineItemLimit"><div class="timeline-card" layout="row" flex="50"><ms-card template="timelineItem.card.template" ng-model="timelineItem.card"></ms-card></div><div class="timeline-point"><md-button class="md-fab" aria-label="timeline item icon"><md-icon md-font-icon="{{timelineItem.icon}}"></md-icon></md-button></div><div class="timeline-detail" flex="50"><div class="time">{{timelineItem.time}}</div><div class="event">{{timelineItem.event}}</div></div></div></div>'),
        e.put("app/main/pages/timeline/timeline-right.html", '<div id="timeline" class="timeline-right" ms-timeline=""><div class="timeline-item animate" layout="column" layout-align="center center" layout-gt-md="row" layout-align-gt-md="center start" ng-repeat="timelineItem in vm.timeline | limitTo: timelineItemLimit"><div class="timeline-card" layout="row" flex="50"><ms-card template="timelineItem.card.template" ng-model="timelineItem.card"></ms-card></div><div class="timeline-point"><md-button class="md-fab" aria-label="timeline item icon"><md-icon md-font-icon="{{timelineItem.icon}}"></md-icon></md-button></div><div class="timeline-detail" flex="50"><div class="time">{{timelineItem.time}}</div><div class="event">{{timelineItem.event}}</div></div></div></div>'), e.put("app/main/pages/timeline/timeline.html", '<div id="timeline" ms-timeline=""><div class="timeline-item animate" layout="column" layout-align="center center" layout-gt-md="row" layout-align-gt-md="center start" ng-repeat="timelineItem in vm.timeline | limitTo: timelineItemLimit"><div class="timeline-card" layout="row" flex="50"><ms-card template="timelineItem.card.template" ng-model="timelineItem.card"></ms-card></div><div class="timeline-point"><md-button class="md-fab" aria-label="timeline item icon"><md-icon md-font-icon="{{timelineItem.icon}}"></md-icon></md-button></div><div class="timeline-detail" flex="50"><div class="time">{{timelineItem.time}}</div><div class="event">{{timelineItem.event}}</div></div></div></div>'), e.put("app/main/apps/dashboards/analytics/dashboard-analytics.html", '<div id="dashboard-analytics"><div id="widgets"><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="false" layout="row" flex="100"><ms-widget-front class="white-bg"><div class="p-24 border-bottom" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget1.title}}</div><div class="text-boxed green-600-bg white-fg">{{vm.widget1.onlineUsers}} online users</div></div><div class="pb-32 border-bottom"><nvd3 class="h-400 remove-x-lines remove-opacity" options="vm.widget1.bigChart.options" data="vm.widget1.bigChart.data"></nvd3></div><div layout="row" layout-align="start center" layout-wrap=""><div class="p-24 grey-50-bg" layout="row" layout-align="start center" flex="100" flex-gt-md="50" flex-gt-lg="25"><div layout="column" flex=""><div class="h3 secondary-text pb-8">{{vm.widget1.sessions.title}}</div><div class="font-size-32 line-height-32 pb-16">{{vm.widget1.sessions.value}}</div><div><nvd3 class="h-40" options="vm.widget1.sessions.options" data="vm.widget1.sessions.data"></nvd3></div></div></div><div class="p-24 grey-50-bg" layout="row" layout-align="start center" flex="100" flex-gt-md="50" flex-gt-lg="25"><div layout="column" flex=""><div class="h3 secondary-text pb-8">{{vm.widget1.pageviews.title}}</div><div class="font-size-32 line-height-32 pb-16">{{vm.widget1.pageviews.value}}</div><div><nvd3 class="h-40" options="vm.widget1.pageviews.options" data="vm.widget1.pageviews.data"></nvd3></div></div></div><div class="p-24 grey-50-bg" layout="row" layout-align="start center" flex="100" flex-gt-md="50" flex-gt-lg="25"><div layout="column" flex=""><div class="h3 secondary-text pb-8">{{vm.widget1.pagesSessions.title}}</div><div class="font-size-32 line-height-32 pb-16">{{vm.widget1.pagesSessions.value}}</div><div><nvd3 class="h-40" options="vm.widget1.pagesSessions.options" data="vm.widget1.pagesSessions.data"></nvd3></div></div></div><div class="p-24 grey-50-bg" layout="row" layout-align="start center" flex="100" flex-gt-md="50" flex-gt-lg="25"><div layout="column" flex=""><div class="h3 secondary-text pb-8">{{vm.widget1.avgSessionDuration.title}}</div><div class="font-size-32 line-height-32 pb-16">{{vm.widget1.avgSessionDuration.value}}</div><div><nvd3 class="h-40" options="vm.widget1.avgSessionDuration.options" data="vm.widget1.avgSessionDuration.data"></nvd3></div></div></div></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="false" layout="column" flex="100" flex-gt-lg="65"><ms-widget-front class="white-bg"><div class="p-16" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget2.title}}</div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div><ui-gmap-google-map center="vm.widget2.map.center" zoom="vm.widget2.map.zoom" options="vm.widget2.map.options"><ui-gmap-markers models="vm.widget2.map.markers" coords="\'coords\'"><ui-gmap-windows show="show"><div ng-non-bindable="">{{sessions}}</div></ui-gmap-windows></ui-gmap-markers></ui-gmap-google-map></div></ms-widget-front></ms-widget><ms-widget flippable="false" layout="column" flex="100" flex-gt-lg="35"><ms-widget-front class="white-bg"><div class="ph-16 border-bottom" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget3.title}}</div><div class="pv-16"><md-select class="simplified" ng-model="vm.widget3.currentRange" aria-label="Change range"><md-option ng-repeat="(key, range) in vm.widget3.ranges" value="{{key}}">{{range}}</md-option></md-select></div></div><div class="ph-16 pv-20 border-bottom" ng-repeat="page in vm.widget3.pages[vm.widget3.currentRange]" layout="row" layout-align="space-between center"><div layout="column" flex=""><span class="h4 pb-10">{{page.path}}</span><md-progress-linear class="md-accent" md-mode="determinate" value="{{page.value}}"></md-progress-linear></div><div class="pl-32 h3 font-weight-500 secondary-text">{{page.value}}%</div></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="false" layout="row" flex="100"><ms-widget-front class="white-bg"><div class="ph-16 pt-16 pb-8 md-accent-bg"><div class="h3">{{vm.widget4.title}}</div></div><md-tabs class="md-accent no-radius" md-dynamic-height=""><md-tab label="{{tab.label}}" ng-repeat="tab in vm.widget4.tabs"><div layout="row" layout-align="start center" layout-wrap=""><div flex="100" flex-gt-md="50" flex-gt-lg="25" ng-repeat="group in tab.groups"><div class="h2 m-16 pb-16 border-bottom">{{group.title}}</div><div class="p-16 pb-32" ng-repeat="data in group.data"><div class="pb-8" layout="row" layout-align="space-between start"><span class="h3">{{data.title}}</span> <span class="h3 secondary-text font-weight-500">{{data.value}}%</span></div><md-progress-linear class="{{data.progressColor}}" md-mode="determinate" value="{{data.value}}"></md-progress-linear></div></div></div></md-tab></md-tabs></ms-widget-front></ms-widget></div></div></div>'), e.put("app/main/apps/dashboards/project/dashboard-project.html", '<div id="dashboard-project" class="page-layout simple right-sidenav" layout="row"><div class="center" flex="" ms-scroll=""><div class="header md-accent-bg" layout="column" layout-align="space-between"><div layout="row" layout-align="space-between"><div><span class="md-display-1 font-weight-300">Welcome back, John!</span></div><div class="toolbar"><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-lg="" aria-label="Toggle sidenav"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button></div></div><div layout="row"><div class="selected-project">{{vm.selectedProject.name}}</div><md-menu id="projects-menu" md-offset="0 48"><md-button class="md-icon-button project-selector" ng-click="$mdOpenMenu()" aria-label="Select project" md-menu-origin="" md-menu-align-target=""><md-icon md-font-icon="icon-dots-horizontal"></md-icon></md-button><md-menu-content width="3" class="md-background-bg"><md-menu-item ng-repeat="project in vm.projects"><md-button ng-click="vm.selectProject(project)" aria-label="{{project.name}}">{{project.name}}<md-icon ng-if="vm.selectedProject == project" md-font-icon="icon-check"></md-icon></md-button></md-menu-item></md-menu-content></md-menu></div></div><div class="content"><md-tabs md-dynamic-height=""><md-tab label="Home"><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="white-bg"><div class="ph-8 pv-16 h-55" layout="row" layout-align="space-between center"><md-select class="simplified font-size-16" ng-model="vm.widget1.currentRange" aria-label="Change range"><md-option ng-repeat="(key, range) in vm.widget1.ranges" value="{{key}}">{{range}}</md-option></md-select><md-menu class="pr-8"><md-button class="md-icon-button" ng-click="$mdOpenMenu()" aria-label="more"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="3"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="pt-8 pb-32" layout="column" layout-align="center center"><div class="light-blue-fg font-size-72 line-height-72">{{vm.widget1.data.count[vm.widget1.currentRange]}}</div><div class="h3 secondary-text font-weight-500">{{vm.widget1.data.label}}</div></div><div class="p-16 grey-50-bg border-top" layout="row" layout-align="start center"><span class="h4 secondary-text text-truncate">{{vm.widget1.data.extra.label}}:</span> <span class="h4 ml-8">{{vm.widget1.data.extra.count[vm.widget1.currentRange]}}</span></div></ms-widget-front><ms-widget-back class="p-16 white-bg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget1.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="white-bg"><div class="p-16 h-55" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget2.title}}</div><md-menu><md-button class="md-icon-button" ng-click="$mdOpenMenu()" aria-label="more"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="pt-8 pb-32" layout="column" layout-align="center center"><div class="red-fg font-size-72 line-height-72">{{vm.widget2.data.count}}</div><div class="h3 secondary-text font-weight-500">{{vm.widget2.data.label}}</div></div><div class="p-16 grey-50-bg border-top" layout="row" layout-align="start center"><span class="h4 secondary-text text-truncate">{{vm.widget2.data.extra.label}}:</span> <span class="h4 ml-8">{{vm.widget2.data.extra.count}}</span></div></ms-widget-front><ms-widget-back class="p-16 white-bg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget2.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="white-bg"><div class="p-16 h-55" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget3.title}}</div><md-menu><md-button class="md-icon-button" ng-click="$mdOpenMenu()" aria-label="more"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="pt-8 pb-32" layout="column" layout-align="center center"><div class="orange-fg font-size-72 line-height-72">{{vm.widget3.data.count}}</div><div class="h3 secondary-text font-weight-500">{{vm.widget3.data.label}}</div></div><div class="p-16 grey-50-bg border-top" layout="row" layout-align="start center"><span class="h4 secondary-text text-truncate">{{vm.widget3.data.extra.label}}:</span> <span class="h4 ml-8">{{vm.widget3.data.extra.count}}</span></div></ms-widget-front><ms-widget-back class="p-16 white-bg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget3.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="white-bg"><div class="p-16 h-55" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget4.title}}</div><md-menu><md-button class="md-icon-button" ng-click="$mdOpenMenu()" aria-label="more"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="pt-8 pb-32" layout="column" layout-align="center center"><div class="blue-grey-fg font-size-72 line-height-72">{{vm.widget4.data.count}}</div><div class="h3 secondary-text font-weight-500">{{vm.widget4.data.label}}</div></div><div class="p-16 grey-50-bg border-top" layout="row" layout-align="start center"><span class="h4 secondary-text text-truncate">{{vm.widget4.data.extra.label}}:</span> <span class="h4 ml-8">{{vm.widget4.data.extra.count}}</span></div></ms-widget-front><ms-widget-back class="p-16 white-bg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget4.detail}}</div></ms-widget-back></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget layout="row" flex="100"><ms-widget-front class="white-bg"><div class="ph-16 pv-8 border-bottom" layout="row" layout-align="space-between center" layout-wrap=""><div class="pv-8 h3">{{vm.widget5.title}}</div><div class="pv-8" layout="row" layout-align="start center" layout-align-sm="end" flex-sm="100"><md-button class="ph-16" ng-repeat="(key, range) in vm.widget5.ranges" ng-click="vm.widget5.changeRange(key)" ng-disabled="vm.widget5.currentRange == key">{{range}}</md-button></div></div><div layout="row" layout-align="start center" layout-wrap=""><div class="p-16" layout="row" flex="100" flex-gt-md="50"><nvd3 class="h-420 remove-x-lines" config="vm.widget5.mainChart.config" options="vm.widget5.mainChart.options" data="vm.widget5.mainChart.data"></nvd3></div><div class="p-16" layout="row" layout-wrap="" flex="100" flex-gt-md="50"><div class="p-16" flex="50" ng-repeat="(name, widget) in vm.widget5.supporting.widgets"><div class="h4 secondary-text">{{widget.data.label}}</div><div class="md-display-1">{{widget.data.count[vm.widget5.currentRange]}}</div><nvd3 class="h-50" config="vm.widget5.supporting.chart.config" options="vm.widget5.supporting.chart.options" data="widget.chart.data"></nvd3></div></div></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget layout="column" flex="100" flex-gt-lg="50"><ms-widget-front class="white-bg"><div class="ph-16 border-bottom" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget6.title}}</div><div class="pv-16"><md-select class="simplified" ng-model="vm.widget6.currentRange" ng-change="vm.widget6.changeRange(vm.widget6.currentRange)" aria-label="Change range"><md-option ng-repeat="(key, range) in vm.widget6.ranges" value="{{key}}">{{range}}</md-option></md-select></div></div><div class="p-16"><nvd3 class="h-400" config="vm.widget6.mainChart.config" options="vm.widget6.mainChart.options" data="vm.widget6.mainChart.data"></nvd3></div><div class="pv-8 mh-16 border-top" layout="row" layout-align="start center" layout-wrap=""><div class="pv-8 border-right" layout="column" layout-align="center center" flex="100" flex-gt-sm="50"><span class="font-size-32">{{vm.widget6.footerLeft.count[vm.widget6.currentRange]}}</span> <span class="h4">{{vm.widget6.footerLeft.title}}</span></div><div class="pv-8" layout="column" layout-align="center center" flex="100" flex-gt-sm="50"><span class="font-size-32">{{vm.widget6.footerRight.count[vm.widget6.currentRange]}}</span> <span class="h4">{{vm.widget6.footerRight.title}}</span></div></div></ms-widget-front></ms-widget><ms-widget layout="column" flex="100" flex-gt-lg="50"><ms-widget-front class="white-bg"><div class="ph-16 border-bottom" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget7.title}}</div><div class="pv-16"><md-select class="simplified" ng-model="vm.widget7.currentRange" aria-label="Change range"><md-option ng-repeat="(key, range) in vm.widget7.ranges" value="{{key}}">{{range}}</md-option></md-select></div></div><div class="p-16" layout="row" layout-align="space-between center" ng-repeat="event in vm.widget7.schedule[vm.widget7.currentRange]"><div><div class="h3">{{event.title}}</div><div><span class="secondary-text">{{event.time}}</span> <span ng-if="event.location">, {{event.location}}</span></div></div><md-button class="md-icon-button" aria-label="More information"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button></div></ms-widget-front></ms-widget></div></md-tab><md-tab label="Budget Summary"><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget layout="column" flex="100" flex-gt-lg="50"><ms-widget-front class="white-bg"><div class="h3 p-16">{{vm.widget8.title}}</div><md-divider></md-divider><div class="p-16"><nvd3 class="h-400" options="vm.widget8.mainChart.options" data="vm.widget8.mainChart.data"></nvd3></div></ms-widget-front></ms-widget><ms-widget layout="column" flex="100" flex-gt-lg="50"><ms-widget-front class="white-bg"><div class="ph-16 border-bottom" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget9.title}}</div><div class="pv-16"><md-select class="simplified" ng-model="vm.widget9.currentRange" ng-change="vm.widget9.changeRange(vm.widget9.currentRange)" aria-label="Change range"><md-option ng-repeat="(key, range) in vm.widget6.ranges" value="{{key}}">{{range}}</md-option></md-select></div></div><div class="p-16" layout="row" layout-align="space-between center" layout-sm="column" layout-align-sm="start start"><div class="p-8"><div class="h4 secondary-text">{{vm.widget9.weeklySpent.title}}</div><div class="pt-8 md-display-1 font-weight-300"><span class="secondary-text">$</span><span>{{vm.widget9.weeklySpent.count[vm.widget9.currentRange]}}</span></div></div><div class="p-8" flex=""><nvd3 class="h-50" config="vm.widget9.chart.config" options="vm.widget9.chart.options" data="vm.widget9.weeklySpent.chartData"></nvd3></div></div><div class="p-16" layout="row" layout-align="space-between center" layout-sm="column" layout-align-sm="start start"><div class="p-8"><div class="h4 secondary-text">{{vm.widget9.totalSpent.title}}</div><div class="pt-8 md-display-1 font-weight-300"><span class="secondary-text">$</span><span>{{vm.widget9.totalSpent.count[vm.widget9.currentRange]}}</span></div></div><div class="p-8" flex=""><nvd3 class="h-50" config="vm.widget9.chart.config" options="vm.widget9.chart.options" data="vm.widget9.totalSpent.chartData"></nvd3></div></div><div class="p-16" layout="row" layout-align="space-between center" layout-sm="column" layout-align-sm="start start"><div class="p-8"><div class="h4 secondary-text">{{vm.widget9.remaining.title}}</div><div class="pt-8 md-display-1 font-weight-300"><span class="secondary-text">$</span><span>{{vm.widget9.remaining.count[vm.widget9.currentRange]}}</span></div></div><div class="p-8" flex=""><nvd3 class="h-50" config="vm.widget9.chart.config" options="vm.widget9.chart.options" data="vm.widget9.remaining.chartData"></nvd3></div></div><div class="pv-24 mh-24 border-top"><div class="h4 secondary-text">{{vm.widget9.totalBudget.title}}</div><div class="pt-8 md-display-1 font-weight-300"><span class="secondary-text">$</span><span>{{vm.widget9.totalBudget.count}}</span></div></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget layout="row" flex="100"><ms-widget-front class="white-bg"><div class="simple-table-container" ms-responsive-table=""><div class="table-title">{{vm.widget10.title}}</div><table class="simple"><thead><tr><th ng-repeat="column in vm.widget10.table.columns">{{column.title}}</th></tr></thead><tbody><tr ng-repeat="row in vm.widget10.table.rows"><td ng-repeat="cell in row"><span class="{{cell.classes}}">{{cell.value}}</span> <i ng-if="cell.icon" class="icon {{cell.icon}}"></i></td></tr></tbody></table></div></ms-widget-front></ms-widget></div></md-tab><md-tab label="Team Members"><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget layout="row" flex="100"><ms-widget-front class="white-bg"><div class="p-24 mb-8 border-bottom" layout="row" layout-align="space-between center"><div class="h2">{{vm.widget11.title}}</div><div class="text-boxed red-bg white-fg m-0">{{vm.widget11.table.rows.length}} members</div></div><table class="dataTable row-border hover" datatable="ng" dt-options="vm.widget11.dtOptions"><thead><tr><th class="secondary-text" ng-repeat="column in ::vm.widget11.table.columns"><div class="table-header"><span class="column-title">{{column.title}}</span></div></th></tr></thead><tbody><tr ng-repeat="row in ::vm.widget11.table.rows"><td ng-repeat="cell in row"><img class="avatar" ng-if="$index === 0" ng-src="assets/images/avatars/{{cell}}"> <span ng-if="$index != 0">{{cell}}</span></td></tr></tbody></table></ms-widget-front></ms-widget></div></md-tab></md-tabs></div></div><md-sidenav class="sidenav md-sidenav-right" md-is-locked-open="$mdMedia(\'gt-lg\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div class="widget-group"><ms-widget flippable="false" class="sidenav-widget"><ms-widget-front><div class="p-16" layout="row" layout-align="space-between center"><div class="h3">{{vm.nowWidget.now.weekDay}}, {{vm.nowWidget.now.hour}}:{{vm.nowWidget.now.minute}}:{{vm.nowWidget.now.second}}</div><md-menu><md-button class="md-icon-button" ng-click="$mdOpenMenu()" md-menu-origin="" md-menu-align-target="" aria-label="Options"><md-icon md-font-icon="icon-dots-vertical" class="icon"></md-icon></md-button><md-menu-content width="3"><md-menu-item><md-button ng-click="vm.nowWidget.dummyFunction()"><md-icon md-font-icon="icon-refresh" class="icon"></md-icon>Refresh</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.nowWidget.dummyFunction()"><md-icon md-font-icon="icon-cog" class="icon"></md-icon>Settings</md-button></md-menu-item></md-menu-content></md-menu></div><div class="p-16 pb-24" layout="column" layout-align="center center"><div class="h1 secondary-text"><span>{{vm.nowWidget.now.month}}</span></div><div class="font-size-72 line-height-88 secondary-text font-weight-400">{{vm.nowWidget.now.day}}</div><div class="h1 secondary-text"><span>{{vm.nowWidget.now.year}}</span></div></div><md-divider></md-divider></ms-widget-front></ms-widget><ms-widget flippable="false" class="sidenav-widget"><ms-widget-front><div class="p-16" layout="row" layout-align="space-between center"><div class="h4"><md-icon md-font-icon="icon-map-marker" class="icon mr-8"></md-icon>{{vm.weatherWidget.locations[vm.weatherWidget.currentLocation].name}}</div><md-menu><md-button class="md-icon-button" ng-click="$mdOpenMenu()" md-menu-origin="" md-menu-align-target="" aria-label="Options"><md-icon md-font-icon="icon-dots-vertical" class="icon"></md-icon></md-button><md-menu-content width="3"><md-menu-item><md-button ng-click="vm.nowWidget.dummyFunction()"><md-icon md-font-icon="icon-refresh" class="icon"></md-icon>Refresh</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.nowWidget.dummyFunction()"><md-icon md-font-icon="icon-cog" class="icon"></md-icon>Settings</md-button></md-menu-item></md-menu-content></md-menu></div><div class="p-16 pb-32" layout="column" layout-align="center center"><div layout="row" layout-align="center center"><md-icon md-font-icon="{{vm.weatherWidget.locations[vm.weatherWidget.currentLocation].icon}}" class="icon s40 mr-16"></md-icon><span class="md-display-2 font-weight-300 secondary-text">{{vm.weatherWidget.locations[vm.weatherWidget.currentLocation].temp[vm.weatherWidget.tempUnit]}}</span> <span class="font-size-48 font-weight-300 hint-text text-super ml-8">&deg;</span> <span class="md-display-2 font-weight-300 hint-text">{{vm.weatherWidget.tempUnit}}</span></div></div><div class="grey-300-bg p-16" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-weather-windy" class="icon mr-8 s20"></md-icon><span>{{vm.weatherWidget.locations[vm.weatherWidget.currentLocation].windSpeed[vm.weatherWidget.speedUnit]}}</span> <span class="secondary-text ml-5">{{vm.weatherWidget.speedUnit}}</span></div><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-compass-outline" class="icon mr-8 s20"></md-icon><span>{{vm.weatherWidget.locations[vm.weatherWidget.currentLocation].windDirection}}</span></div><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-umbrella" class="icon mr-8 s20"></md-icon><span>{{vm.weatherWidget.locations[vm.weatherWidget.currentLocation].rainProbability}}</span></div></div><div class="pv-16"><div class="pv-16 ph-24" layout="row" layout-align="space-between center" ng-repeat="day in vm.weatherWidget.locations[vm.weatherWidget.currentLocation].next3Days"><span class="h4">{{day.name}}</span><div layout="row" layout-align="start center"><md-icon class="mr-16" md-font-icon="{{day.icon}}"></md-icon><span class="h2">{{day.temp[vm.weatherWidget.tempUnit]}}</span> <span class="h2 font-weight-300 secondary-text text-super">&deg;</span> <span class="h2 font-weight-300 secondary-text">{{vm.weatherWidget.tempUnit}}</span></div></div></div><md-divider></md-divider></ms-widget-front></ms-widget></div></md-sidenav></div>'), e.put("app/main/apps/dashboards/server/dashboard-server.html", '<div id="dashboard-server"><div id="widgets"><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="false" layout="row" flex="100"><ms-widget-front class="p-16 white-bg"><div class="pb-16" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget1.title}}</div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div><nvd3 class="h-320" options="vm.widget1.chart.options" data="vm.widget1.chart.data"></nvd3></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 pink-400-bg white-fg"><div class="pb-24" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-icon class="m-0 mr-8" md-font-icon="icon-harddisk"></md-icon><div class="h3">{{vm.widget2.title}}</div></div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="pb-24" layout="row" layout-align="start center"><div class="h2">{{vm.widget2.value.used}}</div><div class="h2 secondary-text pl-8">/ {{vm.widget2.value.total}}</div></div><md-progress-linear md-mode="determinate" value="{{vm.widget2.value.percentage}}"></md-progress-linear></ms-widget-front><ms-widget-back class="p-16 pink-400-bg white-fg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget2.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 blue-bg white-fg"><div class="pb-24" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-icon class="m-0 mr-8" md-font-icon="icon-server-network"></md-icon><div class="h3">{{vm.widget3.title}}</div></div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="pb-24" layout="row" layout-align="start end"><div class="h2">{{vm.widget3.value.used}}</div><div class="h2 pl-8 secondary-text">/ {{vm.widget3.value.total}}</div></div><md-progress-linear md-mode="determinate" value="{{vm.widget3.value.percentage}}"></md-progress-linear></ms-widget-front><ms-widget-back class="p-16 blue-bg white-fg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget3.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 teal-400-bg white-fg"><div class="pb-24" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-icon class="m-0 mr-8" md-font-icon="icon-clock-fast"></md-icon><div class="h3">{{vm.widget4.title}}</div></div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="pb-8 h1">{{vm.widget4.value}}</div><div class="chart-fill-16"><nvd3 class="h-50 remove-opacity remove-line-stroke" config="vm.widget4.chart.config" options="vm.widget4.chart.options" data="vm.widget4.chart.data"></nvd3></div></ms-widget-front><ms-widget-back class="p-16 teal-400-bg white-fg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget4.detail}}</div></ms-widget-back></ms-widget><ms-widget flippable="true" layout="column" flex="100" flex-gt-sm="50" flex-gt-lg="25"><ms-widget-front class="p-16 indigo-400-bg white-fg"><div class="pb-24" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-icon class="m-0 mr-8" md-font-icon="icon-scale"></md-icon><div class="h3">{{vm.widget5.title}}</div></div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="flipWidget()" aria-label="Flip widget">Details</md-button></md-menu-item><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div layout="column" layout-align="space-between" flex=""><div class="h1 pb-8" layout="row" layout-align="start center"><span>{{vm.widget5.value}}</span><md-icon md-font-icon="icon-trending-down" class="ml-16"></md-icon></div><div class="secondary-text">{{vm.widget5.footnote}}</div></div></ms-widget-front><ms-widget-back class="p-16 indigo-400-bg white-fg"><div class="flip-to-front"><md-button class="md-icon-button" ng-click="flipWidget()" aria-label="Flip widget"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div>{{vm.widget5.detail}}</div></ms-widget-back></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="false" layout="row" flex="100"><ms-widget-front class="p-16 white-bg"><div class="pb-24" layout="row" layout-align="space-between center"><div class="h3">{{vm.widget6.title}}</div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div><nvd3 class="h-140 remove-x-lines remove-opacity" config="vm.widget6.chart.config" options="vm.widget6.chart.options" data="vm.widget6.chart.data"></nvd3></div></ms-widget-front></ms-widget></div><div class="widget-group" layout="row" flex="100" layout-wrap=""><ms-widget flippable="false" layout="row" flex="100" flex-gt-lg="60"><ms-widget-front class="white-bg"><div class="ph-16 pv-24 border-bottom" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><span class="h3">{{vm.widget7.title}}</span> <span class="ml-16 text-boxed pink-bg white-fg">{{vm.widget7.table.rows.length}} processes</span></div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><table class="dataTable row-border hover" datatable="ng" dt-options="vm.widget7.dtOptions"><thead><tr><th class="secondary-text" ng-repeat="column in ::vm.widget7.table.columns"><div class="table-header"><span class="column-title">{{column.title}}</span></div></th></tr></thead><tbody><tr ng-repeat="row in ::vm.widget7.table.rows"><td ng-repeat="cell in row"><span class="{{cell.classes}}">{{cell.value}}</span></td></tr></tbody></table></ms-widget-front></ms-widget><ms-widget flippable="false" layout="row" flex="100" flex-gt-lg="40"><ms-widget-front class="white-bg"><div class="ph-16 pv-24 border-bottom" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><span class="h3">{{vm.widget8.title}}</span> <span class="ml-16 text-boxed blue-bg white-fg">Showing last {{vm.widget8.activities.length}} activity</span></div><md-menu><md-button aria-label="more" class="md-icon-button" ng-click="$mdOpenMenu($event)"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="refreshWidget()" aria-label="Refresh widget">Refresh</md-button></md-menu-item></md-menu-content></md-menu></div><div class="ph-16 pv-15 border-bottom" layout="row" layout-align="start center" ng-repeat="activity in vm.widget8.activities"><div><i class="icon pr-16 mr-16 border-right" ng-class="{\'icon-arrow-down red-fg\':activity.type === \'Input\', \'icon-arrow-up green-fg\':activity.type === \'Output\'}"></i></div><div class="h4 text-bold" flex="">{{activity.process}}</div><div class="h4 font-weight-500 secondary-text">{{activity.value}}</div></div></ms-widget-front></ms-widget></div></div></div>'),
        e.put("app/main/components/charts/c3/c3.html", '<div id="c3" class="page-layout simple fullwidth doc-page chart-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">CHARTS</span></div><div class="title">C3.js</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="http://jettro.github.io/c3-angular-directive/" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="md-title">Line Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="line-chart"><chart-column column-id="data 1" column-name="Data 1" column-color="red" column-values="30,200,100,400,150,250" column-type="line"><chart-column column-id="data 2" column-name="Data 2" column-color="green" column-values="50,20,10,40,15,25" column-type="line"><chart-grid show-x="false" show-y="true"></chart-grid></chart-column></chart-column></c3chart></div><div class="md-title">Line Area Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="line-area-chart"><chart-column column-id="data 1" column-name="Data 1" column-color="red" column-values="30,200,100,400,150,250" column-type="area"><chart-column column-id="data 2" column-name="Data 2" column-color="green" column-values="50,20,10,40,15,25" column-type="area"><chart-grid show-x="false" show-y="true"></chart-grid></chart-column></chart-column></c3chart></div><div class="md-title">Spline Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="spline-chart"><chart-column column-id="data 1" column-name="Data 1" column-color="red" column-values="30,200,100,400,150,250" column-type="spline"><chart-column column-id="data 2" column-name="Data 2" column-color="green" column-values="50,20,10,40,15,25" column-type="spline"><chart-grid show-x="false" show-y="true"></chart-grid></chart-column></chart-column></c3chart></div><div class="md-title">Spline Area Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="spline-area-chart"><chart-column column-id="data 1" column-name="Data 1" column-color="red" column-values="30,200,100,400,150,250" column-type="area-spline"><chart-column column-id="data 2" column-name="Data 2" column-color="green" column-values="50,20,10,40,15,25" column-type="area-spline"><chart-grid show-x="false" show-y="true"></chart-grid></chart-column></chart-column></c3chart></div><div class="md-title">Step Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="step-chart"><chart-column column-id="data 1" column-name="Data 1" column-color="red" column-values="30,200,100,400,150,250" column-type="step"><chart-column column-id="data 2" column-name="Data 2" column-color="green" column-values="50,20,10,40,15,25" column-type="step"><chart-grid show-x="false" show-y="true"></chart-grid></chart-column></chart-column></c3chart></div><div class="md-title">Step Area Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="step-area-chart"><chart-column column-id="data 1" column-name="Data 1" column-color="red" column-values="30,200,100,400,150,250" column-type="area-step"><chart-column column-id="data 2" column-name="Data 2" column-color="green" column-values="50,20,10,40,15,25" column-type="area-step"><chart-grid show-x="false" show-y="true"></chart-grid></chart-column></chart-column></c3chart></div><div class="md-title">Stacked Bar Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="stacked-bar-plot1-chart"><chart-column column-id="data 1" column-name="Data 1" column-color="red" column-values="30,200,100,400,150,250" column-type="bar"><chart-column column-id="data 2" column-name="Data 2" column-color="green" column-values="50,20,10,40,15,25" column-type="bar"><chart-group group-values="data 1,data 2"></chart-group></chart-column></chart-column></c3chart></div><div class="md-title">Scatter Plot Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="scatter-plot2-chart"><chart-column column-id="Data 1 x" column-values="3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2.0, 3.0, 2.2, 2.9, 2.9, 3.1, 3.0, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3.0, 2.8, 3.0, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3.0, 3.4, 3.1, 2.3, 3.0, 2.5, 2.6, 3.0, 2.6, 2.3, 2.7, 3.0, 2.9, 2.9, 2.5, 2.8"><chart-column column-id="Data 2 x" column-values="3.3, 2.7, 3.0, 2.9, 3.0, 3.0, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3.0, 2.5, 2.8, 3.2, 3.0, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3.0, 2.8, 3.0, 2.8, 3.8, 2.8, 2.8, 2.6, 3.0, 3.4, 3.1, 3.0, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3.0, 2.5, 3.0, 3.4, 3.0"><chart-column column-id="Data 1" column-values="1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3" column-type="scatter"><chart-column column-id="Data 2" column-values="2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8" column-type="scatter"><chart-axes values-xs="Data 1:Data 1 x,Data 2:Data 2 x"></chart-axes></chart-column></chart-column></chart-column></chart-column></c3chart></div><div class="md-title">Pie Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="pie-plot1-chart"><chart-column column-id="Data 1" column-values="70" column-type="pie"><chart-column column-id="Data 2" column-values="35" column-type="pie"><chart-column column-id="Data 3" column-values="60" column-type="pie"><chart-pie expand="true"></chart-pie></chart-column></chart-column></chart-column></c3chart></div><div class="md-title">Donut Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="donut-plot1-chart"><chart-column column-id="Data 1" column-values="70" column-type="donut"><chart-column column-id="Data 2" column-values="35" column-type="donut"><chart-column column-id="Data 3" column-values="60" column-type="donut"><chart-donut title="Donut" width="60"></chart-donut></chart-column></chart-column></chart-column></c3chart></div><div class="md-title">Gauge Chart</div><div class="card md-whiteframe-4dp"><c3chart bindto-id="gauge-plot1-chart"><chart-column column-id="Data 1" column-values="70" column-type="gauge"><chart-gauge min="50" max="75" units="hours" width="39"></chart-gauge></chart-column></c3chart></div></div></div>'), e.put("app/main/components/charts/chart-js/chart-js.html", '<div id="chartJs" class="page-layout simple fullwidth doc-page chart-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">CHARTS</span></div><div class="title">Chart.js</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://github.com/jtblin/angular-chart.js" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="md-title">Line Chart</div><div class="card md-whiteframe-4dp"><canvas id="line" class="chart chart-line" chart-data="vm.lineChart.data" chart-labels="vm.lineChart.labels" chart-legend="true" chart-series="vm.lineChart.series"></canvas></div><div class="md-title">Bar Chart</div><div class="card md-whiteframe-4dp"><canvas id="bar" class="chart chart-bar" chart-data="vm.barChart.data" chart-labels="vm.barChart.labels"></canvas></div><div class="md-title">Doughnut Chart</div><div class="card md-whiteframe-4dp"><canvas id="doughnut" class="chart chart-doughnut" chart-data="vm.doughnutChart.data" chart-labels="vm.doughnutChart.labels"></canvas></div><div class="md-title">Radar Chart</div><div class="card md-whiteframe-4dp"><canvas id="radar" class="chart chart-radar" chart-data="vm.radarChart.data" chart-labels="vm.radarChart.labels"></canvas></div><div class="md-title">Pie Chart</div><div class="card md-whiteframe-4dp"><canvas id="pie" class="chart chart-pie" chart-data="vm.pieChart.data" chart-labels="vm.pieChart.labels"></canvas></div><div class="md-title">Polar Area Chart</div><div class="card md-whiteframe-4dp"><canvas id="polar-area" class="chart chart-polar-area" chart-data="vm.polarChart.data" chart-labels="vm.polarChart.labels"></canvas></div></div></div>'), e.put("app/main/components/charts/chartist/chartist.html", '<div id="chartist" class="page-layout simple fullwidth doc-page chart-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">CHARTS</span></div><div class="title">Chartist</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://github.com/paradox41/angular-chartist.js" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="md-title">Line Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.lineChart.data" chartist-chart-type="Line" chartist-chart-options="vm.lineChart.options"></chartist></div><div class="md-title">Line Area Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.lineAreaChart.data" chartist-chart-type="Line" chartist-chart-options="vm.lineAreaChart.options"></chartist></div><div class="md-title">Bi-polar Line Chart With Area Only</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.biPolarLineChart.data" chartist-chart-type="Line" chartist-chart-options="vm.biPolarLineChart.options"></chartist></div><div class="md-title">Bar Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.barChart.data" chartist-chart-type="Bar" chartist-chart-options="vm.barChart.options" chartist-responsive-options="vm.barChart.responsiveOptions"></chartist></div><div class="md-title">Horizontal Bar Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.horizontalBarChart.data" chartist-chart-type="Bar" chartist-chart-options="vm.horizontalBarChart.options"></chartist></div><div class="md-title">Bi-polar Bar Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.biPolarBarChart.data" chartist-chart-type="Bar" chartist-chart-options="vm.biPolarBarChart.options"></chartist></div><div class="md-title">Stacked Bar Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.stackedBarChart.data" chartist-chart-type="Bar" chartist-chart-options="vm.stackedBarChart.options" chartist-events="vm.stackedBarChart.events"></chartist></div><div class="md-title">Doughnut Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.donutChart.data" chartist-chart-type="Pie" chartist-chart-options="vm.donutChart.options"></chartist></div><div class="md-title">Pie Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.pieChart.data" chartist-chart-type="Pie" chartist-chart-options="vm.pieChart.options" chartist-responsive-options="vm.pieChart.responsiveOptions"></chartist></div><div class="md-title">Gauge Chart</div><div class="card md-whiteframe-4dp"><chartist class="ct-chart ct-golden-section" chartist-data="vm.gaugeChart.data" chartist-chart-type="Pie" chartist-chart-options="vm.gaugeChart.options"></chartist></div></div></div>'), e.put("app/main/components/charts/nvd3/nvd3.html", '<div id="nvd3" class="page-layout simple fullwidth doc-page chart-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">CHARTS</span></div><div class="title">nvD3</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="http://krispo.github.io/angular-nvd3/#/" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="md-title">Line Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.lineChart.options" data="vm.lineChart.data" class="with-3d-shadow with-transitions"></nvd3></div><div class="md-title">Stacked Area Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.stackedAreaChart.options" data="vm.stackedAreaChart.data"></nvd3></div><div class="md-title">Sparkline Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.sparklineChart.options" data="vm.sparklineChart.data"></nvd3></div><div class="md-title">Historical Bar Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.historicalBarChart.options" data="vm.historicalBarChart.data"></nvd3></div><div class="md-title">Multi Bar Horizontal Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.multiBarHorizontalChart.options" data="vm.multiBarHorizontalChart.data"></nvd3></div><div class="md-title">Pie Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.pieChart.options" data="vm.pieChart.data"></nvd3></div><div class="md-title">Donut Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.donutChart.options" data="vm.donutChart.data"></nvd3></div><div class="md-title">Bullet Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.bulletChart.options" data="vm.bulletChart.data"></nvd3></div><div class="md-title">Scatter Chart</div><div class="card md-whiteframe-4dp"><nvd3 options="vm.scatterChart.options" data="vm.scatterChart.data"></nvd3></div></div></div>'), e.put("app/main/components/elements/bottom-sheet/bottom-sheet.html", '<div id="bottom-sheet" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Bottom Sheet</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.bottomSheet/service/$mdBottomSheet" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p><code>$mdBottomSheet</code> opens a bottom sheet over the app and provides a simple promise API.</p><h2 id="restrictions">Restrictions</h2><ul><li>The bottom sheet\'s template must have an outer <code>&lt;md-bottom-sheet&gt;</code> element.</li><li>Add the <code>md-grid</code> class to the bottom sheet for a grid layout.</li><li>Add the <code>md-list</code> class to the bottom sheet for a list layout.</li></ul></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">List</div><div flex="" layout="column" layout-align="center center"><md-button class="md-primary md-raised" ng-click="vm.showListBottomSheet($event)">Show as List</md-button><div>{{vm.alert}}</div></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-button class="md-primary md-raised" ng-click="vm.showListBottomSheet($event)">Show as List</md-button><div>{{vm.alert}}</div></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">vm.showListBottomSheet = function ($event) { vm.alert = \'\'; $mdBottomSheet.show({ templateUrl: \'bottom-sheet-list-template.html\', controller : ListBottomSheetCtrl, targetEvent: $event, parent : angular.element(\'#app-wrapper > main > .main-content\') }).then(function (clickedItem) { vm.alert = clickedItem.name + \' clicked!\'; }); }; function ListBottomSheetCtrl($scope, $mdBottomSheet) { $scope.items = [ { name: \'Share\', icon: \'icon-share\' }, { name: \'Upload\', icon: \'icon-upload\' }, { name: \'Copy\', icon: \'icon-content-copy\' }, { name: \'Print this page\', icon: \'icon-printer\' }, ]; $scope.listItemClick = function ($index) { var clickedItem = $scope.items[$index]; $mdBottomSheet.hide(clickedItem); }; }</hljs></md-tab><md-tab label="bottom-sheet-list-template.html"><hljs lang="html" ms-scroll=""><md-bottom-sheet class="md-list md-has-header bottom-sheet-list-demo"><md-subheader>Comment Actions</md-subheader><md-list><md-list-item ng-repeat="item in items"><md-button class="md-list-item-content" ng-click="listItemClick($index)"><md-icon md-font-icon="{{item.icon}}"></md-icon><span class="md-inline-list-icon-label">{{item.name}}</span></md-button></md-list-item></md-list></md-bottom-sheet></hljs></md-tab></md-tabs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Grid</div><div flex="" layout="column" layout-align="center center"><md-button class="md-primary md-raised" ng-click="vm.showGridBottomSheet($event)">Show as Grid</md-button><div>{{vm.alert2}}</div></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-button class="md-primary md-raised" ng-click="vm.showGridBottomSheet($event)">Show as Grid</md-button><div>{{vm.alert2}}</div></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">vm.showGridBottomSheet = function ($event) { vm.alert2 = \'\'; $mdBottomSheet.show({ templateUrl: \'bottom-sheet-grid-template.html\', controller : GridBottomSheetCtrl, targetEvent: $event, parent : angular.element(\'#app-wrapper > main > .main-content\') }).then(function (clickedItem) { vm.alert2 = clickedItem.name + \' clicked!\'; }); }; function GridBottomSheetCtrl($scope, $mdBottomSheet) { $scope.items = [ { name: \'Share\', icon: \'icon-share\' }, { name: \'Upload\', icon: \'icon-upload\' }, { name: \'Copy\', icon: \'icon-content-copy\' }, { name: \'Print this page\', icon: \'icon-printer\' }, ]; $scope.listItemClick = function ($index) { var clickedItem = $scope.items[$index]; $mdBottomSheet.hide(clickedItem); }; }</hljs></md-tab><md-tab label="bottom-sheet-grid-template.html"><hljs lang="html" ms-scroll=""><md-bottom-sheet class="md-grid bottom-sheet-grid-demo"><md-list><md-list-item ng-repeat="item in items"><md-button class="md-grid-item-content" ng-click="listItemClick($index)"><md-icon md-font-icon="{{item.icon}}"></md-icon><div class="md-grid-text">{{item.name}}</div></md-button></md-list-item></md-list></md-bottom-sheet></hljs></md-tab></md-tabs></div></div></div><div class="md-title">Methods</div><ul class="methods"><li id="show"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdBottomSheet.show(options);\n                    </code></h3><div class="service-desc"><p>Show a bottom sheet with the specified options.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* options</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">object</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">object</code></td><td class="description"><p>An options object, with the following properties:</p><ul><li><code>templateUrl</code> - <code>{string=}</code>: The url of an html template file that will be used as the content of the bottom sheet. Restrictions: the template must have an outer <code>md-bottom-sheet</code> element.</li><li><code>template</code> - <code>{string=}</code>: Same as templateUrl, except this is an actual template string.</li><li><code>scope</code> - <code>{object=}</code>: the scope to link the template / controller to. If none is specified, it will create a new child scope. This scope will be destroyed when the bottom sheet is removed unless <code>preserveScope</code> is set to true.</li><li><code>preserveScope</code> - <code>{boolean=}</code>: whether to preserve the scope when the element is removed. Default is false</li><li><code>controller</code> - <code>{string=}</code>: The controller to associate with this bottom sheet.</li><li><code>locals</code> - <code>{string=}</code>: An object containing key/value pairs. The keys will be used as names of values to inject into the controller. For example, <code>locals: {three: 3}</code> would inject <code>three</code> into the controller with the value of 3.</li><li><code>targetEvent</code> - <code>{DOMClickEvent=}</code>: A click\'s event object. When passed in as an option, the location of the click will be used as the starting point for the opening animation of the the dialog.</li><li><code>resolve</code> - <code>{object=}</code>: Similar to locals, except it takes promises as values and the bottom sheet will not open until the promises resolve.</li><li><code>controllerAs</code> - <code>{string=}</code>: An alias to assign the controller to on the scope.</li><li><code>parent</code> - <code>{element=}</code>: The element to append the bottom sheet to. The <code>parent</code> may be a <code>function</code>, <code>string</code>, <code>object</code>, or null. Defaults to appending to the body of the root element (or the root element) of the application. e.g. angular.element(document.getElementById(\'content\')) or "#content"</li><li><code>disableParentScroll</code> - <code>{boolean=}</code>: Whether to disable scrolling while the bottom sheet is open. Default true.</li></ul></td></tr></tbody></table><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-promise">promise</code></td><td class="description"><p>A promise that can be resolved with <code>$mdBottomSheet.hide()</code> or rejected with <code>$mdBottomSheet.cancel()</code>.</p></td></tr></tbody></table></div></li><li id="hide"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdBottomSheet.hide([response]);\n                    </code></h3><div class="service-desc"><p>Hide the existing bottom sheet and resolve the promise returned from <code>$mdBottomSheet.show()</code>. This call will close the most recently opened/current bottomsheet (if any).</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">response <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">*</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">*</code></td><td class="description"><p>An argument for the resolved promise.</p></td></tr></tbody></table></div></li><li id="cancel"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdBottomSheet.cancel([response]);\n                    </code></h3><div class="service-desc"><p>Hide the existing bottom sheet and reject the promise returned from <code>$mdBottomSheet.show()</code>.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">response <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">*</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">*</code></td><td class="description"><p>An argument for the rejected promise.</p></td></tr></tbody></table></div></li></ul></div><script type="text/ng-template" id="bottom-sheet-grid-template.html"><md-bottom-sheet class="md-grid bottom-sheet-grid-demo"> <md-list> <md-list-item ng-repeat="item in items"> <md-button class="md-grid-item-content" ng-click="listItemClick($index)"> <md-icon md-font-icon="{{item.icon}}"></md-icon> <div class="md-grid-text"> {{item.name}}</div> </md-button> </md-list-item> </md-list> </md-bottom-sheet></script><script type="text/ng-template" id="bottom-sheet-list-template.html"><md-bottom-sheet class="md-list md-has-header bottom-sheet-list-demo"> <md-subheader>Comment Actions</md-subheader> <md-list> <md-list-item ng-repeat="item in items"> <md-button class="md-list-item-content" ng-click="listItemClick($index)"> <md-icon md-font-icon="{{item.icon}}"></md-icon> <span class="md-inline-list-icon-label">{{item.name}}</span> </md-button> </md-list-item> </md-list> </md-bottom-sheet></script></div>'), e.put("app/main/components/elements/buttons/buttons.html", '<div id="buttons" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Buttons</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.button/directive/mdButton" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><code>&lt;md-button&gt;</code> is a button directive with optional ink ripples (default enabled).<p>If you supply a href or ng-href attribute, it will become an <code>&lt;a&gt;</code> element. Otherwise, it will become a <code>&lt;button&gt;</code> element. As per the Material Design specifications the FAB button background is filled with the accent color [by default]. The primary color palette may be used with the md-primary class.</p></div><div class="md-title">FLAT</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-button class="md-accent" aria-label="Use Android">ACCENT</md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-accent" aria-label="Use Android">ACCENT</md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-button class="md-primary" aria-label="Use Android">PRIMARY</md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-primary" aria-label="Use Android">PRIMARY</md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-button class="md-warn" aria-label="Use Android">WARN</md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-warn" aria-label="Use Android">WARN</md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Disabled</div><div layout="row" layout-align="center center"><md-button class="md-primary" aria-label="Use Android" ng-disabled="true">DISABLED</md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-primary" aria-label="Use Android" ng-disabled="true">DISABLED</md-button></hljs></div></div></div><div class="md-title">RAISED</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-button class="md-raised md-accent" aria-label="Use Android">ACCENT</md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-raised md-accent" aria-label="Use Android">ACCENT</md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-button class="md-raised md-primary" aria-label="Use Android">PRIMARY</md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-raised md-primary" aria-label="Use Android">PRIMARY</md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-button class="md-raised md-warn" aria-label="Use Android">WARN</md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-raised md-warn" aria-label="Use Android">WARN</md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Disabled</div><div layout="row" layout-align="center center"><md-button class="md-raised md-primary" aria-label="Use Android" ng-disabled="true">DISABLED</md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-raised md-primary" aria-label="Use Android" ng-disabled="true">DISABLED</md-button></hljs></div></div></div><div class="md-title">FAB</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-button class="md-fab md-accent" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-fab md-accent" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-button class="md-fab md-primary" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-fab md-primary" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-button class="md-fab md-warn" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-fab md-warn" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Disabled</div><div layout="row" layout-align="center center"><md-button class="md-fab md-primary" aria-label="Use Android" ng-disabled="true"><md-icon md-font-icon="icon-android"></md-icon></md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-fab md-primary" aria-label="Use Android" ng-disabled="true"><md-icon md-font-icon="icon-android"></md-icon></md-button></hljs></div></div></div><div class="md-title">ICON BUTTON</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-button class="md-icon-button md-accent" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-icon-button md-accent" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-button class="md-icon-button md-primary" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-icon-button md-primary" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-button class="md-icon-button md-warn" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-icon-button md-warn" aria-label="Use Android"><md-icon md-font-icon="icon-android"></md-icon></md-button></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Disabled</div><div layout="row" layout-align="center center"><md-button class="md-icon-button md-primary" aria-label="Use Android" ng-disabled="true"><md-icon md-font-icon="icon-android"></md-icon></md-button></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-button class="md-icon-button md-primary" aria-label="Use Android" ng-disabled="true"><md-icon md-font-icon="icon-android"></md-icon></md-button></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">md-no-ink <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>If present, disable ripple ink effects.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-disabled <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>En/Disable based on the expression</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-ripple-size <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Overrides the default ripple size logic. Options: <code>full</code>, <code>partial</code>, <code>auto</code></p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">aria-label <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Adds alternative text to button for accessibility, useful for icon buttons. If no default text is found, a warning will be logged.</p></td></tr></tbody></table></div></div></div>'),
        e.put("app/main/components/elements/card/card.html", '<div id="card" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Card</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.card/directive/mdCard" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>The <code>&lt;md-card&gt;</code> directive is a container element used within <code>\n                &lt;md-content&gt;</code> containers.</p><p>An image included as a direct descendant will fill the card\'s width, while the <code>&lt;md-card-content&gt;</code> container will wrap text content and provide padding. An <code>&lt;md-card-footer&gt;</code> element can be optionally included to put content flush against the bottom edge of the card.</p><p>Action buttons can be included in an element with the <code>.md-actions</code> class, also used in <code>md-dialog</code>. You can then position buttons using layout attributes.</p><p>Cards have constant width and variable heights; where the maximum height is limited to what can fit within a single view on a platform, but it can temporarily expand as needed.</p></div><div class="md-title">Card With Optional Footer</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><md-card><img src="assets/images/etc/early-sunrise.jpg" class="md-card-image" alt="image caption"><md-card-content><h2>Nature</h2><p>Look deep into nature, and then you will understand everything better.</p></md-card-content><md-card-footer class="text-right">Albert Einstein</md-card-footer></md-card></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-card><img src="assets/images/etc/early-sunrise.jpg" class="md-card-image" alt="image caption"><md-card-content><h2>Nature</h2><p>Look deep into nature, and then you will understand everything better.</p></md-card-content><md-card-footer class="text-right">Albert Einstein</md-card-footer></md-card></hljs></div></div></div><div class="md-title">Card With Actions</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><md-card><img src="assets/images/etc/early-sunrise.jpg" class="md-card-image" alt="image caption"><md-card-content><h2>Nature</h2><p>Look deep into nature, and then you will understand everything better. Albert Einstein</p></md-card-content><div class="md-actions" layout="row" layout-align="end center"><md-button>Action 1</md-button><md-button>Action 2</md-button></div></md-card></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-card><img src="assets/images/etc/early-sunrise.jpg" class="md-card-image" alt="image caption"><md-card-content><h2>Nature</h2><p>Look deep into nature, and then you will understand everything better.</p></md-card-content><md-card-footer class="text-right">Albert Einstein</md-card-footer></md-card></hljs></div></div></div></div></div>'), e.put("app/main/components/elements/datepicker/datepicker.html", '<div id="datepicker" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Datepicker</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.datepicker/directive/mdDatepicker" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p><code>&lt;md-datepicker&gt;</code> is a component used to select a single date. For information on how to configure internationalization for the date picker, see <code>$mdDateLocaleProvider</code>.</p><p>This component supports <a target="_blank" href="https://docs.angularjs.org/api/ngMessages/directive/ngMessages">ngMessages</a>. Supported attributes are:</p><ul><li><code>required</code>: whether a required date is not set.</li><li><code>mindate</code>: whether the selected date is before the minimum allowed date.</li><li><code>maxdate</code>: whether the selected date is after the maximum allowed date.</li></ul></div><div class="md-title">Basic Usage</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Standard date-picker</div><div flex="" layout="column" layout-align="center center"><md-datepicker ng-model="vm.myDate" md-placeholder="Enter date"></md-datepicker></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-datepicker ng-model="vm.myDate" md-placeholder="Enter date"></md-datepicker></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Disabled date-picker</div><div flex="" layout="column" layout-align="center center"><md-datepicker ng-model="vm.myDate" md-placeholder="Enter date" disabled=""></md-datepicker></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-datepicker ng-model="vm.myDate" md-placeholder="Enter date" disabled=""></md-datepicker></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Date-picker with min date and max date</div><div flex="" layout="column" layout-align="center center"><md-datepicker ng-model="vm.myDate" md-placeholder="Enter date" md-min-date="vm.minDate" md-max-date="vm.maxDate"></md-datepicker></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-datepicker ng-model="vm.myDate" md-placeholder="Enter date" md-min-date="vm.minDate" md-max-date="vm.maxDate"></md-datepicker></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">With ngMessages</div><div flex="" layout="column" layout-align="center center"><form name="myForm"><md-datepicker name="dateField" ng-model="vm.myDate" md-placeholder="Enter date" required="" md-min-date="vm.minDate" md-max-date="vm.maxDate"></md-datepicker><div class="validation-messages" ng-messages="myForm.dateField.$error"><div ng-message="required">This date is required!</div><div ng-message="mindate">Date is too early!</div><div ng-message="maxdate">Date is too late!</div></div></form></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><form name="myForm"><md-datepicker name="dateField" ng-model="vm.myDate" md-placeholder="Enter date" required="" md-min-date="vm.minDate" md-max-date="vm.maxDate"></md-datepicker><div class="validation-messages" ng-messages="myForm.dateField.$error"><div ng-message="required">This date is required!</div><div ng-message="mindate">Date is too early!</div><div ng-message="maxdate">Date is too late!</div></div></form></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ng-model</b> <span class="hide show-sm"><code class="api-type label type-hint type-hint-date">Date</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-date">Date</code></td><td class="description"><p>The component\'s model. Expects a JavaScript Date object.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-change <span class="hide show-sm"><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>Expression evaluated when the model value changes.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-min-date <span class="hide show-sm"><code class="api-type label type-hint type-hint-date">Date</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-date">Date</code></td><td class="description"><p>Expression representing a min date (inclusive).</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-max-date <span class="hide show-sm"><code class="api-type label type-hint type-hint-date">Date</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-date">Date</code></td><td class="description"><p>Expression representing a max date (inclusive).</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">disabled <span class="hide show-sm"><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Whether the datepicker is disabled.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">required <span class="hide show-sm"><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Whether a value is required for the datepicker.</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/dialog/dialog.html", '<div id="dialog" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Dialog</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.dialog/service/$mdDialog" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p><code>$mdDialog</code> opens a dialog over the app to inform users about critical information or require them to make decisions. There are two approaches for setup: a simple promise API and regular object syntax.</p><h2 id="restrictions">Restrictions</h2><ul><li>The dialog is always given an isolate scope.</li><li>The dialog\'s template must have an outer <code>&lt;md-dialog&gt;</code> element. Inside, use an <code>&lt;md-dialog-content&gt;</code> element for the dialog\'s content, and use an element with class <code>md-actions</code> for the dialog\'s actions.</li><li>Dialogs must cover the entire application to keep interactions inside of them. Use the <code>parent</code> option to change where dialogs are appended.</li></ul><h2 id="sizing">Sizing</h2><ul><li>Complex dialogs can be sized with <code>flex="percentage"</code>, i.e. <code>flex="66"</code>.</li><li>Default max-width is 80% of the <code>rootElement</code> or <code>parent</code>.</li></ul></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Alert</div><div flex="" layout="row" layout-align="center center"><md-button class="md-warn md-raised" ng-click="vm.showAlert($event)" flex="50">Alert Dialog</md-button></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-button class="md-warn md-raised" ng-click="vm.showAlert($event)" flex="" flex-md="100">Alert Dialog</md-button></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">vm.showAlert = function (ev) { // Appending dialog to document.body to cover sidenav in docs app // Modal dialogs should fully cover application // to prevent interaction outside of dialog $mdDialog.show( $mdDialog.alert() .parent(angular.element(document.body)) .title(\'This is an alert title\') .content(\'You can specify some description text in here.\') .ariaLabel(\'Alert Dialog Demo\') .ok(\'Got it!\') .targetEvent(ev) ); };</hljs></md-tab></md-tabs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Confirm</div><div flex="" layout="row" layout-align="center center"><md-button class="md-accent md-raised" ng-click="vm.showConfirm($event)" flex="50">Confirm Dialog</md-button></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-button class="md-accent md-raised" ng-click="vm.showConfirm($event)" flex="50">Confirm Dialog</md-button></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">vm.showConfirm = function (ev) { // Appending dialog to document.body to cover sidenav in docs app var confirm = $mdDialog.confirm() .parent(angular.element(document.body)) .title(\'Would you like to delete your debt?\') .content(\'All of the banks have agreed to forgive you your debts.\') .ariaLabel(\'Lucky day\') .ok(\'Please do it!\') .cancel(\'Sounds like a scam\') .targetEvent(ev); $mdDialog.show(confirm).then(function () { vm.alert = \'You decided to get rid of your debt.\'; }, function () { vm.alert = \'You decided to keep your debt.\'; }); };</hljs></md-tab></md-tabs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Custom</div><div flex="" layout="row" layout-align="center center"><md-button class="md-primary md-raised" ng-click="vm.showAdvanced($event)" flex="50">Custom Dialog</md-button></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-button class="md-primary md-raised" ng-click="vm.showAdvanced($event)" flex="50">Custom Dialog</md-button></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">vm.showAdvanced = function (ev) { $mdDialog.show({ controller : Dialog1Controller, templateUrl : \'dialog1.tmpl.html\', parent : angular.element(document.body), targetEvent : ev, clickOutsideToClose: true }) .then(function (answer) { vm.alert = \'You said the information was "\' + answer + \'".\'; }, function () { vm.alert = \'You cancelled the dialog.\'; }); }; function Dialog1Controller($scope, $mdDialog) { $scope.hide = function () { $mdDialog.hide(); }; $scope.cancel = function () { $mdDialog.cancel(); }; $scope.answer = function (answer) { $mdDialog.hide(answer); }; }</hljs></md-tab><md-tab label="dialog1.tmpl.html"><hljs lang="html" ms-scroll=""><md-dialog aria-label="Sunrise" style="max-width:800px"><form><md-toolbar><div class="md-toolbar-tools"><h2>Sunrise</h2><span flex=""></span><md-button class="md-icon-button" ng-click="answer(\'not applicable\')"><md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon></md-button></div></md-toolbar><md-dialog-content><div><img style="max-width:100%" src="assets/images/etc/early-sunrise.jpg" alt="Sunrise"><p><b>Sunrise</b> or <b>sun up</b> is the instant at which the upper edge of the Sun appears over the eastern horizon in the morning.</p><p>The term can also refer to the entire process of the Sun crossing the horizon and its accompanying atmospheric effects.</p></div></md-dialog-content><div class="md-actions" layout="row"><md-button href="https://en.wikipedia.org/wiki/Sunrise" target="_blank">More on Wikipedia</md-button><span flex=""></span><md-button ng-click="answer(\'not useful\')" class="md-primary">Not Useful</md-button><md-button ng-click="answer(\'useful\')" class="md-primary">Useful</md-button></div></form></md-dialog></hljs></md-tab></md-tabs></div></div></div><div class="md-title">Methods</div><ul class="methods"><li id="alert"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdDialog.alert();\n                    </code></h3><div class="service-desc"><p>Builds a preconfigured dialog with the specified message.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-obj">obj</code></td><td class="description"><p>an <code>$mdDialogPreset</code> with the chainable configuration methods:</p><ul><li>$mdDialogPreset#title(string) - sets title to string</li><li>$mdDialogPreset#content(string) - sets content / message to string</li><li>$mdDialogPreset#ok(string) - sets okay button text to string</li><li>$mdDialogPreset#theme(string) - sets the theme of the dialog</li></ul></td></tr></tbody></table></div></li><li id="confirm"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdDialog.confirm();\n                    </code></h3><div class="service-desc"><p>Builds a preconfigured dialog with the specified message. You can call show and the promise returned will be resolved only if the user clicks the confirm action on the dialog.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-obj">obj</code></td><td class="description"><p>an <code>$mdDialogPreset</code> with the chainable configuration methods:</p><p>Additionally, it supports the following methods:</p><ul><li>$mdDialogPreset#title(string) - sets title to string</li><li>$mdDialogPreset#content(string) - sets content / message to string</li><li>$mdDialogPreset#ok(string) - sets okay button text to string</li><li>$mdDialogPreset#cancel(string) - sets cancel button text to string</li><li>$mdDialogPreset#theme(string) - sets the theme of the dialog</li></ul></td></tr></tbody></table></div></li><li id="show"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdDialog.show(optionsOrPreset);\n                    </code></h3><div class="service-desc"><p>Show a dialog with the specified options.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* optionsOrPreset</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">object</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">object</code></td><td class="description"><p>Either provide an <code>$mdDialogPreset</code> returned from <code>alert()</code>, and <code>confirm()</code>, or an options object with the following properties:</p><ul><li><code>templateUrl</code> - <code>{string=}</code>: The url of a template that will be used as the content of the dialog.</li><li><code>template</code> - <code>{string=}</code>: Same as templateUrl, except this is an actual template string.</li><li><code>targetEvent</code> - <code>{DOMClickEvent=}</code>: A click\'s event object. When passed in as an option, the location of the click will be used as the starting point for the opening animation of the the dialog.</li><li><code>scope</code> - <code>{object=}</code>: the scope to link the template / controller to. If none is specified, it will create a new isolate scope. This scope will be destroyed when the dialog is removed unless <code>preserveScope</code> is set to true.</li><li><code>preserveScope</code> - <code>{boolean=}</code>: whether to preserve the scope when the element is removed. Default is false</li><li><code>disableParentScroll</code> - <code>{boolean=}</code>: Whether to disable scrolling while the dialog is open. Default true.</li><li><code>hasBackdrop</code> - <code>{boolean=}</code>: Whether there should be an opaque backdrop behind the dialog. Default true.</li><li><code>clickOutsideToClose</code> - <code>{boolean=}</code>: Whether the user can click outside the dialog to close it. Default false.</li><li><code>escapeToClose</code> - <code>{boolean=}</code>: Whether the user can press escape to close the dialog. Default true.</li><li><code>focusOnOpen</code> - <code>{boolean=}</code>: An option to override focus behavior on open. Only disable if focusing some other way, as focus management is required for dialogs to be accessible. Defaults to true.</li><li><code>controller</code> - <code>{string=}</code>: The controller to associate with the dialog. The controller will be injected with the local <code>$mdDialog</code>, which passes along a scope for the dialog.</li><li><code>locals</code> - <code>{object=}</code>: An object containing key/value pairs. The keys will be used as names of values to inject into the controller. For example, <code>locals:\n                                                {three: 3}</code> would inject <code>three</code> into the controller, with the value 3. If <code>bindToController</code> is true, they will be copied to the controller instead.</li><li><code>bindToController</code> - <code>bool</code>: bind the locals to the controller, instead of passing them in. These values will not be available until after initialization.</li><li><code>resolve</code> - <code>{object=}</code>: Similar to locals, except it takes promises as values, and the dialog will not open until all of the promises resolve.</li><li><code>controllerAs</code> - <code>{string=}</code>: An alias to assign the controller to on the scope.</li><li><code>parent</code> - <code>{element=}</code>: The element to append the dialog to. Defaults to appending to the root element of the application.</li><li><code>onComplete</code> <code>{function=}</code>: Callback function used to announce when the show() action is finished.</li></ul></td></tr></tbody></table><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-promise">promise</code></td><td class="description"><p>A promise that can be resolved with <code>$mdDialog.hide()</code> or rejected with <code>$mdDialog.cancel()</code>.</p></td></tr></tbody></table></div></li><li id="hide"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdDialog.hide([response]);\n                    </code></h3><div class="service-desc"><p>Hide an existing dialog and resolve the promise returned from <code>$mdDialog.show()</code>.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">response <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">*</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">*</code></td><td class="description"><p>An argument for the resolved promise.</p></td></tr></tbody></table><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-promise">promise</code></td><td class="description"><p>A promise that is resolved when the dialog has been closed.</p></td></tr></tbody></table></div></li><li id="cancel"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdDialog.cancel([response]);\n                    </code></h3><div class="service-desc"><p>Hide an existing dialog and reject the promise returned from <code>$mdDialog.show()</code>.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">response <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">*</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">*</code></td><td class="description"><p>An argument for the rejected promise.</p></td></tr></tbody></table><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-promise">promise</code></td><td class="description"><p>A promise that is resolved when the dialog has been closed.</p></td></tr></tbody></table></div></li></ul></div><script type="text/ng-template" id="dialog1.tmpl.html"><md-dialog aria-label="Sunrise" style="max-width:800px"> <form> <md-toolbar> <div class="md-toolbar-tools"> <h2>Sunrise</h2> <span flex></span> <md-button class="md-icon-button" ng-click="answer(\'not applicable\')"> <md-icon md-svg-src="img/icons/ic_close_24px.svg" aria-label="Close dialog"></md-icon> </md-button> </div> </md-toolbar> <md-dialog-content> <div> <img style="max-width:100%" src="assets/images/etc/early-sunrise.jpg" alt="Sunrise"> <p> <b>Sunrise</b> or <b>sun up</b> is the instant at which the upper edge of the Sun appears over the eastern horizon in the morning. </p> <p> The term can also refer to the entire process of the Sun crossing the horizon and its accompanying atmospheric effects. </p> </div> </md-dialog-content> <div class="md-actions" layout="row"> <md-button href="https://en.wikipedia.org/wiki/Sunrise" target="_blank"> More on Wikipedia </md-button> <span flex></span> <md-button ng-click="answer(\'not useful\')" class="md-primary"> Not Useful </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Useful </md-button> </div> </form> </md-dialog></script></div>'), e.put("app/main/components/elements/fab-speed-dial/fab-speed-dial.html", '<div id="fab-speed-dial" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Fab Speed Dial</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/vm.demo/material.components.fabSpeedDial" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>You may supply a direction of <code>left</code>, <code>up</code>, <code>down</code>, or <code>right</code> through the <code>md-direction</code> attribute.</p></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Usage</div><div class="lock-size" layout="row" layout-align="center center"><md-fab-speed-dial md-open="vm.demo.isOpen" md-direction="{{vm.demo.selectedDirection}}" ng-class="vm.demo.selectedMode"><md-fab-trigger><md-button aria-label="menu" class="md-fab"><md-icon md-font-icon="icon-menu"></md-icon></md-button></md-fab-trigger><md-fab-actions><md-button aria-label="twitter" class="md-fab md-accent md-raised md-mini"><md-icon md-font-icon="icon-twitter"></md-icon></md-button><md-button aria-label="facebook" class="md-fab md-accent md-raised md-mini"><md-icon md-font-icon="icon-facebook"></md-icon></md-button><md-button aria-label="Google" class="md-fab md-accent md-raised md-mini"><md-icon md-font-icon="icon-google"></md-icon></md-button></md-fab-actions></md-fab-speed-dial></div><div layout="row" layout-align="space-around"><div layout="column"><b>Direction</b><md-radio-group ng-model="vm.demo.selectedDirection"><md-radio-button ng-repeat="direction in vm.demo.availableDirections" ng-value="direction" class="text-capitalize">{{direction}}</md-radio-button></md-radio-group></div><div layout="column"><b>Open/Closed</b><md-radio-group ng-model="vm.demo.isOpen"><md-radio-button ng-value="true">Open</md-radio-button><md-radio-button ng-value="false">Closed</md-radio-button></md-radio-group></div><div layout="column"><b>Animation Modes</b><md-radio-group ng-model="vm.demo.selectedMode"><md-radio-button ng-repeat="mode in vm.demo.availableModes" ng-value="mode">{{mode}}</md-radio-button></md-radio-group></div></div></div><div class="source-code" layout="column" flex=""><md-tabs flex=""><md-tab label="HTML"><hljs lang="html" ms-scroll=""><div class="lock-size" layout="row" layout-align="center center"><md-fab-speed-dial md-open="vm.demo.isOpen" md-direction="{{vm.demo.selectedDirection}}" ng-class="vm.demo.selectedMode"><md-fab-trigger><md-button aria-label="menu" class="md-fab"><md-icon md-font-icon="icon-menu"></md-icon></md-button></md-fab-trigger><md-fab-actions><md-button aria-label="twitter" class="md-fab md-accent md-raised md-mini"><md-icon md-font-icon="icon-twitter"></md-icon></md-button><md-button aria-label="facebook" class="md-fab md-accent md-raised md-mini"><md-icon md-font-icon="icon-facebook"></md-icon></md-button><md-button aria-label="Google" class="md-fab md-accent md-raised md-mini"><md-icon md-font-icon="icon-google"></md-icon></md-button></md-fab-actions></md-fab-speed-dial></div><div layout="row" layout-align="space-around"><div layout="column"><b>Direction</b><md-radio-group ng-model="vm.demo.selectedDirection"><md-radio-button ng-repeat="direction in vm.demo.availableDirections" ng-value="direction" class="text-capitalize">{{direction}}</md-radio-button></md-radio-group></div><div layout="column"><b>Open/Closed</b><md-radio-group ng-model="vm.demo.isOpen"><md-radio-button ng-value="true">Open</md-radio-button><md-radio-button ng-value="false">Closed</md-radio-button></md-radio-group></div><div layout="column"><b>Animation Modes</b><md-radio-group ng-model="vm.demo.selectedMode"><md-radio-button ng-repeat="mode in vm.demo.availableModes" ng-value="mode">{{mode}}</md-radio-button></md-radio-group></div></div></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">vm.demo = { topDirections : [\'left\', \'up\'], bottomDirections : [\'down\', \'right\'], isOpen : false, availableModes : [\'md-fling\', \'md-scale\'], selectedMode : \'md-fling\', availableDirections: [\'up\', \'down\', \'left\', \'right\'], selectedDirection : \'up\' };</hljs></md-tab></md-tabs></div></div></div></div></div>'), e.put("app/main/components/elements/fab-toolbar/fab-toolbar.html", '<div id="fab-toolbar" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Fab Toolbar</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/demo/material.components.fabToolbar" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>You can use the fabToolbar with a trigger and regular toolbar.</p><p>You may use the <code>md-open</code> attribute to programmatically control whether or not the control is open, and you may add a class of <code>md-left</code> or <code>md-right</code> to control the position of the trigger and toolbar tools.</p></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Alert</div><md-fab-toolbar md-open="vm.demo.isOpen" count="vm.demo.count" ng-class="vm.demo.selectedAlignment"><md-fab-trigger class="align-with-text"><md-button aria-label="menu" class="md-fab md-primary"><md-icon md-font-icon="icon-menu"></md-icon></md-button></md-fab-trigger><md-toolbar><md-fab-actions class="md-toolbar-tools"><md-button aria-label="comment" class="md-icon-button"><md-icon md-font-icon="icon-comment"></md-icon></md-button><md-button aria-label="label" class="md-icon-button"><md-icon md-font-icon="icon-label"></md-icon></md-button><md-button aria-label="photo" class="md-icon-button"><md-icon md-font-icon="icon-file-image-box"></md-icon></md-button></md-fab-actions></md-toolbar></md-fab-toolbar><div class="md-padding" layout="column"><div layout="row" layout-align="space-around"><div layout="column"><b>Open/Closed</b><md-radio-group ng-model="vm.demo.isOpen"><md-radio-button ng-value="true">Open</md-radio-button><md-radio-button ng-value="false">Closed</md-radio-button></md-radio-group></div><div layout="column"><b>Alignment</b><md-radio-group ng-model="vm.demo.selectedAlignment"><md-radio-button ng-value="\'md-left\'">Left</md-radio-button><md-radio-button ng-value="\'md-right\'">Right</md-radio-button></md-radio-group></div></div></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-fab-toolbar md-open="vm.demo.isOpen" count="vm.demo.count" ng-class="vm.demo.selectedAlignment"><md-fab-trigger class="align-with-text"><md-button aria-label="menu" class="md-fab md-primary"><md-icon md-font-icon="icon-menu"></md-icon></md-button></md-fab-trigger><md-toolbar><md-fab-actions class="md-toolbar-tools"><md-button aria-label="comment" class="md-icon-button"><md-icon md-font-icon="icon-comment"></md-icon></md-button><md-button aria-label="label" class="md-icon-button"><md-icon md-font-icon="icon-label"></md-icon></md-button><md-button aria-label="photo" class="md-icon-button"><md-icon md-font-icon="icon-file-image-box"></md-icon></md-button></md-fab-actions></md-toolbar></md-fab-toolbar><md-content class="md-padding" layout="column"><div layout="row" layout-align="space-around"><div layout="column"><b>Open/Closed</b><md-radio-group ng-model="vm.demo.isOpen"><md-radio-button ng-value="true">Open</md-radio-button><md-radio-button ng-value="false">Closed</md-radio-button></md-radio-group></div><div layout="column"><b>Alignment</b><md-radio-group ng-model="vm.demo.selectedAlignment"><md-radio-button ng-value="\'md-left\'">Left</md-radio-button><md-radio-button ng-value="\'md-right\'">Right</md-radio-button></md-radio-group></div></div></md-content></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">vm.isOpen = false; vm.demo = { isOpen : false, count : 0, selectedAlignment: \'md-left\' };</hljs></md-tab></md-tabs></div></div></div></div></div>'),
        e.put("app/main/components/elements/menu/menu.html", '<div id="menu" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Menu</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.menu/directive/mdMenu" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>Menus are elements that open when clicked. They are useful for displaying additional options within the context of an action.</p><p>Every <code>md-menu</code> must specify exactly two child elements. The first element is what is left in the DOM and is used to open the menu. This element is called the trigger element. The trigger element\'s scope has access to <code>$mdOpenMenu()</code> which it may call to open the menu.</p><p>The second element is the <code>md-menu-content</code> element which represents the contents of the menu when it is open. Typically this will contain <code>md-menu-item</code>s, but you can do custom content as well.</p></div><div class="md-title">Basic Usage</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Simple Dropdown Menu</div><div layout="row" layout-align="center center" flex=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></hljs></div></div></div><h2 id="aligning-menus">Aligning Menus</h2><p>When a menu opens, it is important that the content aligns with the trigger element. Failure to align menus can result in jarring experiences for users as content suddenly shifts. To help with this, <code>md-menu</code> provides serveral APIs to help with alignment.</p><div class="md-title">Target Mode</div><p>To specify the alignment element in the <code>trigger</code> you can use the <code>md-menu-origin</code> attribute on a child element. If no <code>md-menu-origin</code> is specified, the <code>md-menu</code> will be used as the origin element.</p><p>Similarly, the <code>md-menu-content</code> may specify a <code>md-menu-align-target</code> for a <code>md-menu-item</code> to specify the node that it should try and align with.</p><p>In this example code, we specify an icon to be our origin element, and an icon in our menu content to be our alignment target. This ensures that both icons are aligned when the menu opens.</p><p>Sometimes we want to specify alignment on the right side of an element, for example if we have a menu on the right side a toolbar, we want to right align our menu content.</p><p>We can specify the origin by using the <code>md-position-mode</code> attribute on both the <code>x</code> and <code>y</code> axis. Right now only the <code>x-axis</code> has more than one option. You may specify the default mode of <code>target target</code> or <code>target-right target</code> to specify a right-oriented alignment target. See the position section of the demos for more examples.</p><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Target Mode Positioning (default)</div><div layout="row" layout-align="center center" flex=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Target Mode Positioning with md-offset="10 50"</div><div layout="row" layout-align="center center" flex=""><md-menu md-offset="10 50"><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-menu md-offset="10 50"><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">md-position-mode="target-right target"</div><div layout="row" layout-align="center center" flex=""><md-menu md-position-mode="target-right target"><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-menu-align-target="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone"></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-menu-align-target="" md-font-icon="icon-voicemail"></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-menu md-position-mode="target-right target"><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-menu-align-target="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone"></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-menu-align-target="" md-font-icon="icon-voicemail"></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></hljs></div></div></div><div class="md-title">Sizing Menus</div><p>The width of the menu when it is open may be specified by specifying a <code>width</code> attribute on the <code>md-menu-content</code> element. See the <a href="http://www.google.com/design/spec/components/menus.html#menus-specs">Material Design Spec</a> for more information.</p><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Wide menu (width=6)</div><div layout="row" layout-align="center center" flex=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="6"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="6"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Medium menu (width=4)</div><div layout="row" layout-align="center center" flex=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="4"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Small menu (width=2)</div><div layout="row" layout-align="center center" flex=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-menu><md-button aria-label="Open phone interactions menu" class="md-icon-button" ng-click="$mdOpenMenu()"><md-icon md-menu-origin="" md-font-icon="icon-phone"></md-icon></md-button><md-menu-content width="2"><md-menu-item><md-button ng-click="vm.redial($event)"><md-icon md-font-icon="icon-phone" md-menu-align-target=""></md-icon>Redial</md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.checkVoicemail()"><md-icon md-font-icon="icon-voicemail" md-menu-align-target=""></md-icon>Check voicemail</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleNotifications()"><md-icon md-font-icon="icon-bell-off" md-menu-align-target="" ng-if="vm.notificationsEnabled"></md-icon><md-icon md-font-icon="icon-bell" md-menu-align-target="" ng-if="!vm.notificationsEnabled"></md-icon>{{vm.notificationsEnabled ? \'Disable\' : \'Enable\'}} notifications</md-button></md-menu-item></md-menu-content></md-menu></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* md-position-mode</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>The position mode in the form of <code>x</code>, <code>y</code>. Default value is <code>target</code>,<code>target</code>. Right now the <code>x</code> axis also suppports <code>target-right</code>.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;"><b>* md-offset</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>An offset to apply to the dropdown after positioning <code>x</code>, <code>y</code>. Default value is <code>0</code>,<code>0</code>.</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/menu-bar/menu-bar.html", '<div id="menu-bar" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Menu Bar</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/0.11.2/#/api/material.components.menu-bar/directive/mdMenuBar" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>Menu bars are containers that hold multiple menus. They change the behavior and appearence of the <code>md-menu</code> directive to behave similar to an operating system provided menu.</p></div><h2>Menu Bar Controls</h2><p>You may place <code>md-menu-items</code> that function as controls within menu bars. There are two modes that are exposed via the <code>type</code> attribute of the <code>md-menu-item</code>. <code>type="checkbox"</code> will function as a boolean control for the <code>ng-model</code> attribute of the <code>md-menu-item</code>. <code>type="radio"</code> will function like a radio button, setting the <code>ngModel</code> to the <code>string</code> value of the <code>value</code> attribute. If you need non-string values, you can use <code>ng-value</code> to provide an expression (this is similar to how angular\'s native <code>input[type=radio]</code> works.</p><h2>Nesting Menus</h2><p>Menus may be nested within menu bars. This is commonly called cascading menus. To nest a menu place the nested menu inside the content of the <code>md-menu-item</code>.</p><div class="md-title">Usage</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><md-toolbar class="md-menu-toolbar"><div layout="row"><md-toolbar-filler layout="" layout-align="center center"><md-icon md-font-icon="icon-file-document"></md-icon></md-toolbar-filler><div><h2 class="md-toolbar-tools">Untitled document</h2><md-menu-bar><md-menu><button ng-click="$mdOpenMenu()">File</button><md-menu-content><md-menu-item><md-button ng-click="vm.sampleAction(\'share\', $event)">Share...</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-menu><md-button ng-click="$mdOpenMenu()">New</md-button><md-menu-content><md-menu-item><md-button ng-click="vm.sampleAction(\'New Document\', $event)">Document</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'New Spreadsheet\', $event)">Spreadsheet</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'New Presentation\', $event)">Presentation</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'New Form\', $event)">Form</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'New Drawing\', $event)">Drawing</md-button></md-menu-item></md-menu-content></md-menu></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'Open\', $event)">Open... <span class="md-alt-text">{{ \'M-O\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.sampleAction(\'Rename\', $event)">Rename</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.sampleAction(\'Print\', $event)">Print <span class="md-alt-text">{{ \'M-P\' | keyboardShortcut }}</span></md-button></md-menu-item></md-menu-content></md-menu><md-menu><button ng-click="$mdOpenMenu()">Edit</button><md-menu-content><md-menu-item class="md-indent"><md-icon md-font-icon="icon-undo"></md-icon><md-button ng-click="vm.sampleAction(\'undo\', $event)">Undo <span class="md-alt-text">{{ \'M-Z\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item class="md-indent"><md-icon md-font-icon="icon-redo"></md-icon><md-button ng-click="vm.sampleAction(\'redo\', $event)">Redo <span class="md-alt-text">{{ \'M-Y\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item class="md-indent"><md-icon md-font-icon="icon-content-cut"></md-icon><md-button ng-click="vm.sampleAction(\'cut\', $event)">Cut <span class="md-alt-text">{{ \'M-X\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item class="md-indent"><md-icon md-font-icon="icon-content-copy"></md-icon><md-button ng-click="vm.sampleAction(\'copy\', $event)">Copy <span class="md-alt-text">{{ \'M-C\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item class="md-indent"><md-icon md-font-icon="icon-content-paste"></md-icon><md-button ng-click="vm.sampleAction(\'paste\', $event)">Paste <span class="md-alt-text">{{ \'M-P\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item class="md-indent"><md-button ng-click="vm.sampleAction(\'Find and replace\', $event)">Find and replace... <span class="md-alt-text">{{ \'M-S-H\' | keyboardShortcut }}</span></md-button></md-menu-item></md-menu-content></md-menu><md-menu><button ng-click="$mdOpenMenu()">View</button><md-menu-content><md-menu-item type="checkbox" ng-model="vm.settings.printLayout">Print layout</md-menu-item><md-menu-item class="md-indent"><md-menu><md-button ng-click="$mdOpenMenu()">Mode</md-button><md-menu-content width="3"><md-menu-item type="radio" ng-model="vm.settings.presentationMode" value="\'presentation\'">Presentation</md-menu-item><md-menu-item type="radio" ng-model="vm.settings.presentationMode" value="\'edit\'">Edit</md-menu-item><md-menu-item type="radio" ng-model="vm.settings.presentationMode" value="\'modifiable\'">Modifiable</md-menu-item></md-menu-content></md-menu></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item type="checkbox" ng-model="vm.settings.showRuler">Show ruler</md-menu-item><md-menu-item type="checkbox" ng-model="vm.settings.showEquationToolbar">Show equation toolbar</md-menu-item><md-menu-item type="checkbox" ng-model="vm.settings.showSpellingSuggestions">Show spelling suggestions</md-menu-item><md-menu-divider></md-menu-divider><md-menu-item type="checkbox" ng-model="vm.settings.compactControls">Compact controls</md-menu-item><md-menu-item type="checkbox" ng-model="vm.settings.fullScreen">Full screen</md-menu-item></md-menu-content></md-menu><md-menu><button ng-click="$mdOpenMenu()">Format</button><md-menu-content><md-menu-item><md-button ng-click="vm.sampleAction(\'bold\', $event)">Bold <span class="md-alt-text">{{ \'M-B\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'italic\', $event)">Italic <span class="md-alt-text">{{ \'M-I\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'underline\', $event)">Underline <span class="md-alt-text">{{ \'M-U\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'strikethrough\', $event)">Strikethrough <span class="md-alt-text">{{ \'A-S-5\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'superscript\', $event)">Superscript <span class="md-alt-text">{{ \'M-.\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'subscript\', $event)">Subscript <span class="md-alt-text">{{ \'M-,\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleSetting(\'clearFormatting\')">Clear Formatting</md-button></md-menu-item></md-menu-content></md-menu></md-menu-bar></div></div></md-toolbar><div class="page-container"><div class="page"><h1>Untitled document</h1><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p><p>Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p></div></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-toolbar class="md-menu-toolbar"><div layout="row"><md-toolbar-filler layout="" layout-align="center center"><md-icon md-font-icon="icon-file-document"></md-icon></md-toolbar-filler><div><h2 class="md-toolbar-tools">Untitled document</h2><md-menu-bar><md-menu><button ng-click="$mdOpenMenu()">File</button><md-menu-content><md-menu-item><md-button ng-click="vm.sampleAction(\'share\', $event)">Share...</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-menu><md-button ng-click="$mdOpenMenu()">New</md-button><md-menu-content><md-menu-item><md-button ng-click="vm.sampleAction(\'New Document\', $event)">Document</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'New Spreadsheet\', $event)">Spreadsheet</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'New Presentation\', $event)">Presentation</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'New Form\', $event)">Form</md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'New Drawing\', $event)">Drawing</md-button></md-menu-item></md-menu-content></md-menu></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'Open\', $event)">Open... <span class="md-alt-text">{{ \'M-O\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button disabled="disabled" ng-click="vm.sampleAction(\'Rename\', $event)">Rename</md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.sampleAction(\'Print\', $event)">Print <span class="md-alt-text">{{ \'M-P\' | keyboardShortcut }}</span></md-button></md-menu-item></md-menu-content></md-menu><md-menu><button ng-click="$mdOpenMenu()">Edit</button><md-menu-content><md-menu-item class="md-indent"><md-icon md-font-icon="icon-undo"></md-icon><md-button ng-click="vm.sampleAction(\'undo\', $event)">Undo <span class="md-alt-text">{{ \'M-Z\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item class="md-indent"><md-icon md-font-icon="icon-redo"></md-icon><md-button ng-click="vm.sampleAction(\'redo\', $event)">Redo <span class="md-alt-text">{{ \'M-Y\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item class="md-indent"><md-icon md-font-icon="icon-content-cut"></md-icon><md-button ng-click="vm.sampleAction(\'cut\', $event)">Cut <span class="md-alt-text">{{ \'M-X\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item class="md-indent"><md-icon md-font-icon="icon-content-copy"></md-icon><md-button ng-click="vm.sampleAction(\'copy\', $event)">Copy <span class="md-alt-text">{{ \'M-C\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item class="md-indent"><md-icon md-font-icon="icon-content-paste"></md-icon><md-button ng-click="vm.sampleAction(\'paste\', $event)">Paste <span class="md-alt-text">{{ \'M-P\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item class="md-indent"><md-button ng-click="vm.sampleAction(\'Find and replace\', $event)">Find and replace... <span class="md-alt-text">{{ \'M-S-H\' | keyboardShortcut }}</span></md-button></md-menu-item></md-menu-content></md-menu><md-menu><button ng-click="$mdOpenMenu()">View</button><md-menu-content><md-menu-item type="checkbox" ng-model="vm.settings.printLayout">Print layout</md-menu-item><md-menu-item class="md-indent"><md-menu><md-button ng-click="$mdOpenMenu()">Mode</md-button><md-menu-content width="3"><md-menu-item type="radio" ng-model="vm.settings.presentationMode" value="\'presentation\'">Presentation</md-menu-item><md-menu-item type="radio" ng-model="vm.settings.presentationMode" value="\'edit\'">Edit</md-menu-item><md-menu-item type="radio" ng-model="vm.settings.presentationMode" value="\'modifiable\'">Modifiable</md-menu-item></md-menu-content></md-menu></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item type="checkbox" ng-model="vm.settings.showRuler">Show ruler</md-menu-item><md-menu-item type="checkbox" ng-model="vm.settings.showEquationToolbar">Show equation toolbar</md-menu-item><md-menu-item type="checkbox" ng-model="vm.settings.showSpellingSuggestions">Show spelling suggestions</md-menu-item><md-menu-divider></md-menu-divider><md-menu-item type="checkbox" ng-model="vm.settings.compactControls">Compact controls</md-menu-item><md-menu-item type="checkbox" ng-model="vm.settings.fullScreen">Full screen</md-menu-item></md-menu-content></md-menu><md-menu><button ng-click="$mdOpenMenu()">Format</button><md-menu-content><md-menu-item><md-button ng-click="vm.sampleAction(\'bold\', $event)">Bold <span class="md-alt-text">{{ \'M-B\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'italic\', $event)">Italic <span class="md-alt-text">{{ \'M-I\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'underline\', $event)">Underline <span class="md-alt-text">{{ \'M-U\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'strikethrough\', $event)">Strikethrough <span class="md-alt-text">{{ \'A-S-5\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'superscript\', $event)">Superscript <span class="md-alt-text">{{ \'M-.\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-item><md-button ng-click="vm.sampleAction(\'subscript\', $event)">Subscript <span class="md-alt-text">{{ \'M-,\' | keyboardShortcut }}</span></md-button></md-menu-item><md-menu-divider></md-menu-divider><md-menu-item><md-button ng-click="vm.toggleSetting(\'clearFormatting\')">Clear Formatting</md-button></md-menu-item></md-menu-content></md-menu></md-menu-bar></div></div></md-toolbar><div class="page-container"><div class="page"><h1>Untitled document</h1><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p><p>Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p></div></div></hljs></div></div></div></div></div>'),
        e.put("app/main/components/elements/progress-circular/progress-circular.html", '<div id="progress-circular" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Progreess Circular</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/demo/material.components.progressCircular" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>The circular progress directive is used to make loading content in your app as delightful and painless as possible by minimizing the amount of visual change a user sees before they can view and interact with content.</p><p>For operations where the percentage of the operation completed can be determined, use a determinate indicator. They give users a quick sense of how long an operation will take.</p><p>For operations where the user is asked to wait a moment while something finishes up, and it’s not necessary to expose what\'s happening behind the scenes and how long it will take, use an indeterminate indicator.</p></div><div class="md-title">Determinate</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-progress-circular md-mode="determinate" value="{{vm.determinateValue}}"></md-progress-circular></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-circular md-mode="determinate" value="{{vm.determinateValue}}"></md-progress-circular></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-progress-circular md-mode="determinate" value="{{vm.determinateValue}}" class="md-primary"></md-progress-circular></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-circular md-mode="determinate" value="{{vm.determinateValue}}" class="md-primary"></md-progress-circular></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-progress-circular md-mode="determinate" value="{{vm.determinateValue}}" class="md-warn"></md-progress-circular></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-circular md-mode="determinate" value="{{vm.determinateValue}}" class="md-warn"></md-progress-circular></hljs></div></div></div><div class="md-title">Indeterminate</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-progress-circular md-mode="indeterminate"></md-progress-circular></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-circular md-mode="indeterminate"></md-progress-circular></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-progress-circular md-mode="indeterminate" class="md-primary"></md-progress-circular></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-circular md-mode="indeterminate" class="md-primary"></md-progress-circular></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-progress-circular md-mode="indeterminate" class="md-warn"></md-progress-circular></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-circular md-mode="indeterminate" class="md-warn"></md-progress-circular></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* md-mode</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Select from one of two modes: determinate and indeterminate.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-number">number</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-number">number</code></td><td class="description"><p>In determinate mode, this number represents the percentage of the circular progress. Default: 0</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-diameter <span hide="" show-sm=""><code class="api-type label type-hint type-hint-number">number</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-number">number</code></td><td class="description"><p>This specifies the diamter of the circular progress. Default: 48</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/progress-linear/progress-linear.html", '<div id="progress-linear" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Progreess Linear</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.progressLinear/directive/mdProgressLinear" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>The linear progress directive is used to make loading content in your app as delightful and painless as possible by minimizing the amount of visual change a user sees before they can view and interact with content. Each operation should only be represented by one activity indicator—for example, one refresh operation should not display both a refresh bar and an activity circle.</p><p>For operations where the percentage of the operation completed can be determined, use a determinate indicator. They give users a quick sense of how long an operation will take.</p><p>For operations where the user is asked to wait a moment while something finishes up, and it’s not necessary to expose what\'s happening behind the scenes and how long it will take, use an indeterminate indicator.</p></div><div class="md-title">Determinate</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="determinate" value="{{vm.determinateValue}}" class="md-accent"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="determinate" value="{{vm.determinateValue}}" class="md-accent"></md-progress-linear></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="determinate" value="{{vm.determinateValue}}" class="md-primary"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="determinate" value="{{vm.determinateValue}}" class="md-primary"></md-progress-linear></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="determinate" value="{{vm.determinateValue}}" class="md-warn"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="determinate" value="{{vm.determinateValue}}" class="md-warn"></md-progress-linear></hljs></div></div></div><div class="md-title">Indeterminate</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="indeterminate" class="md-accent"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="indeterminate" class="md-accent"></md-progress-linear></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="indeterminate" class="md-primary"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="indeterminate" class="md-primary"></md-progress-linear></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="indeterminate" class="md-warn"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="indeterminate" class="md-warn"></md-progress-linear></hljs></div></div></div><div class="md-title">Buffer</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="buffer" value="{{vm.determinateValue}}" md-buffer-value="{{vm.determinateValue2}}" class="md-accent"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="buffer" value="{{vm.determinateValue}}" md-buffer-value="{{vm.determinateValue2}}" class="md-accent"></md-progress-linear></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="buffer" value="{{vm.determinateValue}}" md-buffer-value="{{vm.determinateValue2}}" class="md-primary"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="buffer" value="{{vm.determinateValue}}" md-buffer-value="{{vm.determinateValue2}}" class="md-primary"></md-progress-linear></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-progress-linear md-mode="buffer" value="{{vm.determinateValue}}" md-buffer-value="{{vm.determinateValue2}}" class="md-warn"></md-progress-linear></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-progress-linear md-mode="buffer" value="{{vm.determinateValue}}" md-buffer-value="{{vm.determinateValue2}}" class="md-warn"></md-progress-linear></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* md-mode</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Select from one of four modes: determinate, indeterminate, buffer or query.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-number">number</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-number">number</code></td><td class="description"><p>In determinate and buffer modes, this number represents the percentage of the primary progress bar. Default: 0</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-buffer-value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-number">number</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-number">number</code></td><td class="description"><p>In the buffer mode, this number represents the precentage of the secondary progress bar. Default: 0</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/sidenav/sidenav.html", '<div id="sidenav" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Sidenav</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.sidenav/directive/mdSidenav" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>A Sidenav component that can be opened and closed programatically.</p><p>By default, upon opening it will slide out on top of the main content area.</p><p>For keyboard and screen reader accessibility, focus is sent to the sidenav wrapper by default. It can be overridden with the <code>md-sidenav-focus</code> directive on the child element you want focused.</p></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Left Sidenav</div><div layout="row" flex=""><md-sidenav class="md-sidenav-left md-whiteframe-4dp" layout="column" md-component-id="left-sidenav"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools">Left Sidenav</h1></md-toolbar><div flex="" layout="column" layout-align="center center"><md-button class="md-raised md-primary" ng-click="vm.toggleLeftSidenav()">Close Left Sidenav</md-button></div></md-sidenav><div flex="" layout="column" layout-align="center center"><md-button class="md-raised md-accent" ng-click="vm.toggleLeftSidenav()">Open Left Sidenav</md-button></div></div></div><div flex="" class="source-code" layout="column"><md-tabs flex=""><md-tab label="HTML"><hljs lang="html" ms-scroll=""><div layout="row" flex=""><md-sidenav class="md-sidenav-left md-whiteframe-4dp" layout="column" md-component-id="left-sidenav"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools">Left Sidenav</h1></md-toolbar><div flex="" layout="column" layout-align="center center"><md-button class="md-raised md-primary" ng-click="vm.toggleLeftSidenav()">Close Left Sidenav</md-button></div></md-sidenav><div flex="" layout="column" layout-align="center center"><md-button class="md-raised md-accent" ng-click="vm.toggleLeftSidenav()">Open Left Sidenav</md-button></div></div></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">function toggleLeftSidenav() { $mdSidenav(\'left-sidenav\').toggle(); }</hljs></md-tab></md-tabs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Right Sidenav</div><div layout="row" flex=""><md-sidenav class="md-sidenav-right md-whiteframe-4dp" layout="column" md-component-id="right-sidenav"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools">Right Sidenav</h1></md-toolbar><div flex="" layout="column" layout-align="center center"><md-button class="md-raised md-primary" ng-click="vm.toggleRightSidenav()">Close Right Sidenav</md-button></div></md-sidenav><div flex="" layout="column" layout-align="center center"><md-button class="md-raised md-accent" ng-click="vm.toggleRightSidenav()">Open Right Sidenav</md-button></div></div></div><div flex="" class="source-code" layout="column"><md-tabs flex=""><md-tab label="HTML"><hljs lang="html" ms-scroll=""><div layout="row" flex=""><md-sidenav class="md-sidenav-right md-whiteframe-4dp" layout="column" md-component-id="right-sidenav"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools">Right Sidenav</h1></md-toolbar><div flex="" layout="column" layout-align="center center"><md-button class="md-raised md-primary" ng-click="vm.toggleRightSidenav()">Close Right Sidenav</md-button></div></md-sidenav><div flex="" layout="column" layout-align="center center"><md-button class="md-raised md-accent" ng-click="vm.toggleRightSidenav()">Open Right Sidenav</md-button></div></div></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">function toggleRightSidenav() { $mdSidenav(\'right-sidenav\').toggle(); }</hljs></md-tab></md-tabs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Left Sidenav Locked</div><div layout="row" flex=""><md-sidenav md-is-locked-open="$mdMedia(\'gt-md\')" class="md-sidenav-left md-whiteframe-4dp" layout="column" md-component-id="left-sidenav-locked"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools">Left Sidenav Locked</h1></md-toolbar><div class="md-padding" flex="" layout="column" layout-align="center center"><md-button class="md-raised md-primary" ng-click="vm.toggleLeftSidenavLocked()" hide-gt-md="">Close Left Sidenav</md-button><p hide-md="" show-gt-md="">This sidenav is locked open on your device. To go back to the default behavior, narrow your display.</p></div></md-sidenav><div flex="" layout="column" layout-align="center center"><p>The left sidenav will \'lock open\' on a medium (>=960px wide) device.</p><md-button ng-click="vm.toggleLeftSidenavLocked()" class="md-primary" hide-gt-md="">Open Left Sidenav</md-button></div></div></div><div flex="" class="source-code" layout="column"><md-tabs flex=""><md-tab label="HTML"><hljs lang="html" ms-scroll=""><div layout="row" flex=""><md-sidenav md-is-locked-open="$mdMedia(\'gt-md\')" class="md-sidenav-left md-whiteframe-4dp" layout="column" md-component-id="left-sidenav-locked"><md-toolbar class="md-theme-indigo"><h1 class="md-toolbar-tools">Left Sidenav Locked</h1></md-toolbar><div class="md-padding" flex="" layout="column" layout-align="center center"><md-button class="md-raised md-primary" ng-click="vm.toggleLeftSidenavLocked()" hide-gt-md="">Close Left Sidenav</md-button><p hide-md="" show-gt-md="">This sidenav is locked open on your device. To go back to the default behavior, narrow your display.</p></div></md-sidenav><div flex="" layout="column" layout-align="center center"><p>The left sidenav will \'lock open\' on a medium (>=960px wide) device.</p><md-button ng-click="vm.toggleLeftSidenavLocked()" class="md-primary" hide-gt-md="">Open Left Sidenav</md-button></div></div></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">function toggleLeftSidenavLocked() { $mdSidenav(\'left-sidenav-locked\').toggle(); }</hljs></md-tab></md-tabs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">md-is-open <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>A model bound to whether the sidenav is opened.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-component-id <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>componentId to use with $mdSidenav service.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-is-locked-open <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>When this expression evalutes to true, the sidenav \'locks open\': it falls into the content\'s flow instead of appearing over it. This overrides the <code>is-open</code> attribute.</p><p>The $mdMedia() service is exposed to the is-locked-open attribute, which can be given a media query or one of the <code>sm</code>, <code>gt-sm</code>, <code>md</code>, <code>gt-md</code>, <code>lg</code> or <code>gt-lg</code> presets. Examples:</p><ul><li><code>&lt;md-sidenav\n                                    md-is-locked-open="shouldLockOpen"&gt;&lt;/md-sidenav&gt;</code></li><li><code>&lt;md-sidenav md-is-locked-open="$mdMedia(\'min-width: 1000px\')"&gt;&lt;/md-sidenav&gt;</code></li><li><code>&lt;md-sidenav\n                                    md-is-locked-open="$mdMedia(\'sm\')"&gt;&lt;/md-sidenav&gt;</code> (locks open on small screens)</li></ul></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/swipe/swipe.html", '<div id="swipe" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Swipe</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/0.11.2/#/demo/material.components.swipe" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>This UX pattern is intended for mobile devices only, and may not make sense to use on responsive sites. To initiate a swipe gesture on a desktop, you must click, hold and drag either right or left</p></div><div class="md-title">Usage</div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Swipe Left</div><div flex="" layout="column" layout-align="center center"><div class="md-background-bg md-padding md-whiteframe-3dp" md-swipe-left="vm.swipeAction(\'left\',$event)"><span class="no-select">Swipe me to the left</span></div></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><div class="md-background-bg md-padding md-whiteframe-3dp" md-swipe-left="vm.swipeAction(\'left\',$event)"><span class="no-select">Swipe me to the left</span></div></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Swipe Right</div><div flex="" layout="column" layout-align="center center"><div class="md-background-bg md-padding md-whiteframe-3dp" md-swipe-right="vm.swipeAction(\'right\',$event)"><span class="no-select">Swipe me to the right</span></div></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><div class="md-background-bg md-padding md-whiteframe-3dp" md-swipe-right="vm.swipeAction(\'right\',$event)"><span class="no-select">Swipe me to the right</span></div></hljs></div></div></div></div></div>'), e.put("app/main/components/elements/tabs/tabs.html", '<div id="tabs" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Tabs</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.tabs/directive/mdTabs" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>The <code>&lt;md-tabs&gt;</code> directive serves as the container for 1..n <code>&lt;md-tab&gt;</code> child directives to produces a Tabs components. In turn, the nested <code>&lt;md-tab&gt;</code> directive is used to specify a tab label for the <strong>header button</strong> and a [optional] tab view content that will be associated with each tab button.</p><p>Tabs supports three (3) usage scenarios:</p><ol><li>Tabs (buttons only)</li><li>Tabs with internal view content</li><li>Tabs with external view content</li></ol><p><strong>Tab-only</strong> support is useful when tab buttons are used for custom navigation regardless of any other components, content, or views. <strong>Tabs with internal views</strong> are the traditional usages where each tab has associated view content and the view switching is managed internally by the Tabs component. <strong>Tabs with external view content</strong> is often useful when content associated with each tab is independently managed and data-binding notifications announce tab selection changes.</p><p>Additional features also include:</p><ul><li>Content can include any markup.</li><li>If a tab is disabled while active/selected, then the next tab will be auto-selected.</li></ul><h3 id="explanation-of-tab-stretching">Explanation of tab stretching</h3><p>Initially, tabs will have an inherent size. This size will either be defined by how much space is needed to accommodate their text or set by the user through CSS. Calculations will be based on this size.</p><p>On mobile devices, tabs will be expanded to fill the available horizontal space. When this happens, all tabs will become the same size.</p><p>On desktops, by default, stretching will never occur.</p><p>This default behavior can be overridden through the <code>md-stretch-tabs</code> attribute. Here is a table showing when stretching will occur:</p><table><thead><tr><th><code>md-stretch-tabs</code></th><th>mobile</th><th>desktop</th></tr></thead><tbody><tr><td><code>auto</code></td><td>stretched</td><td>---</td></tr><tr><td><code>always</code></td><td>stretched</td><td>stretched</td></tr><tr><td><code>never</code></td><td>---</td><td>---</td></tr></tbody></table></div><div class="card md-whiteframe-4dp"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Simple Usage</div><div class="md-padding md-background-bg" layout-margin=""><md-tabs><md-tab label="One"><h1>Tab One</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab><md-tab label="Two"><h1>Tab Two</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab><md-tab label="Three"><h1>Tab Three</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab></md-tabs></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-tabs><md-tab label="One"><h1>Tab One</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab><md-tab label="Two"><h1>Tab Two</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab><md-tab label="Three"><h1>Tab Three</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab></md-tabs></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Simple Usage - Bottom aligned tabs</div><div class="md-padding md-background-bg" layout-margin=""><md-tabs md-align-tabs="bottom"><md-tab label="One"><h1>Tab One</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab><md-tab label="Two"><h1>Tab Two</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab><md-tab label="Three"><h1>Tab Three</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab></md-tabs></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-tabs md-align-tabs="bottom"><md-tab label="One"><h1>Tab One</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab><md-tab label="Two"><h1>Tab Two</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab><md-tab label="Three"><h1>Tab Three</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab></md-tabs></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Complex tab header Markup</div><div class="md-padding md-background-bg" layout-margin=""><md-tabs><md-tab><md-tab-label>One</md-tab-label><md-tab-body><h1>Tab One</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab-body></md-tab><md-tab><md-tab-label>Two</md-tab-label><md-tab-body><h1>Tab Two</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab-body></md-tab><md-tab><md-tab-label>Three</md-tab-label><md-tab-body><h1>Tab Three</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab-body></md-tab></md-tabs></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-tabs><md-tab><md-tab-label>One</md-tab-label><md-tab-body><h1>Tab One</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab-body></md-tab><md-tab><md-tab-label>Two</md-tab-label><md-tab-body><h1>Tab Two</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab-body></md-tab><md-tab><md-tab-label>Three</md-tab-label><md-tab-body><h1>Tab Three</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec, feugiat ultricies mi.</p></md-tab-body></md-tab></md-tabs></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><div class="api-param-table"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">md-selected <span hide="" show-sm=""><code class="api-type label type-hint type-hint-integer">integer</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-integer">integer</code></td><td class="description"><p>Index of the active/selected tab</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-ink <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>If present, disables ink ripple effects.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-bar <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>If present, disables the selection ink bar.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-align-tabs <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Attribute to indicate position of tab buttons: <code>bottom</code> or <code>top</code>; default is <code>top</code></p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-stretch-tabs <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Attribute to indicate whether or not to stretch tabs: <code>auto</code>, <code>always</code>, or <code>never</code>; default is <code>auto</code></p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-dynamic-height <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>When enabled, the tab wrapper will resize based on the contents of the selected tab</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-center-tabs <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>When enabled, tabs will be centered provided there is no need for pagination</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-pagination <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>When enabled, pagination will remain off</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-swipe-content <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>When enabled, swipe gestures will be enabled for the content area to jump between tabs</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-disconnect <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>If your tab content has background tasks (ie. event listeners), you will want to include this to prevent the scope from being disconnected</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-autoselect <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>When present, any tabs added after the initial load will be automatically selected</p></td></tr></tbody></table></div></div></div></div>'),
        e.put("app/main/components/elements/toast/toast.html", '<div id="toast" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Toast</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.toast/service/$mdToast" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p><code>$mdToast</code> is a service to build a toast notification on any position on the screen with an optional duration, and provides a simple promise API.</p><h2 id="restrictions-on-custom-toasts">Restrictions on custom toasts</h2><ul><li>The toast\'s template must have an outer <code>&lt;md-toast&gt;</code> element.</li><li>For a toast action, use element with class <code>md-action</code>.</li><li>Add the class <code>md-capsule</code> for curved corners.</li></ul></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Simple - Position: "top right"</div><div flex="" layout="row" layout-align="center center"><md-button class="md-accent md-raised" ng-click="vm.showSimpleToast()" flex="50">Show Simple</md-button></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-button class="md-accent md-raised" ng-click="vm.showSimpleToast()" flex="50">Show Simple</md-button></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">function showSimpleToast() { $mdToast.show( $mdToast.simple() .content(\'Simple Toast!\') .position(\'top right\') .hideDelay(3000) ); }</hljs></md-tab></md-tabs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">With Action - Position: "top left"</div><div flex="" layout="row" layout-align="center center"><md-button class="md-primary md-raised" ng-click="vm.showActionToast()" flex="50">Show With Action</md-button></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-button class="md-primary md-raised" ng-click="vm.showActionToast()" flex="50">Show With Action</md-button></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">function showActionToast() { var toast = $mdToast.simple() .content(\'Action Toast!\') .action(\'OK\') .highlightAction(false) .position(\'top left\'); $mdToast.show(toast).then(function (test) { alert(\'You clicked \\\'OK\\\'.\'); }); }</hljs></md-tab></md-tabs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Custom - Position:"bttom right"</div><div flex="" layout="row" layout-align="center center"><md-button class="md-warn md-raised" ng-click="vm.showCustomToast()" flex="50">Show Custom</md-button></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-button class="md-warn md-raised" ng-click="vm.showCustomToast()" flex="50">Show Custom</md-button></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">function showCustomToast() { $mdToast.show({ controller : ToastCtrl, templateUrl: \'toast-template.html\', hideDelay : 6000, position : \'bottom right\' }); } function ToastCtrl($scope, $mdToast) { $scope.closeToast = function () { $mdToast.hide(); }; }</hljs></md-tab><md-tab label="toast-template.html"><hljs lang="html" ms-scroll=""><md-toast><span flex="">Custom toast!</span><md-button ng-click="closeToast()">Close</md-button></md-toast></hljs></md-tab></md-tabs></div></div></div><div class="md-title">Methods</div><ul class="methods"><li id="showSimple"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdToast.showSimple();\n                    </code></h3><div class="service-desc"><p>Convenience method which builds and shows a simple toast.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-promise">promise</code></td><td class="description"><p>A promise that can be resolved with <code>$mdToast.hide()</code> or rejected with <code>$mdToast.cancel()</code>.</p></td></tr></tbody></table></div></li><li id="simple"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdToast.simple();\n                    </code></h3><div class="service-desc"><p>Builds a preconfigured toast.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-obj">obj</code></td><td class="description"><p>a <code>$mdToastPreset</code> with the chainable configuration methods:</p><ul><li>$mdToastPreset#content(string) - sets toast content to string</li><li>$mdToastPreset#action(string) - adds an action button, which resolves the promise returned from <code>show()</code> if clicked.</li><li>$mdToastPreset#highlightAction(boolean) - sets action button to be highlighted</li><li>$mdToastPreset#capsule(boolean) - adds \'md-capsule\' class to the toast (curved corners)</li><li>$mdToastPreset#theme(boolean) - sets the theme on the toast to theme (default is <code>$mdThemingProvider</code>\'s default theme)</li></ul></td></tr></tbody></table></div></li><li id="updateContent"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdToast.updateContent();\n                    </code></h3><div class="service-desc"><p>Updates the content of an existing toast. Useful for updating things like counts, etc.</p></div></li><li id="build"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdToast.build();\n                    </code></h3><div class="service-desc"><p>Creates a custom <code>$mdToastPreset</code> that you can configure.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-obj">obj</code></td><td class="description"><p>a <code>$mdToastPreset</code> with the chainable configuration methods for shows\' options (see below).</p></td></tr></tbody></table></div></li><li id="show"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdToast.show(optionsOrPreset);\n                    </code></h3><div class="service-desc"><p>Shows the toast.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* optionsOrPreset</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">object</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">object</code></td><td class="description"><p>Either provide an <code>$mdToastPreset</code> returned from <code>simple()</code> and <code>build()</code>, or an options object with the following properties:</p><ul><li><code>templateUrl</code> - <code>{string=}</code>: The url of an html template file that will be used as the content of the toast. Restrictions: the template must have an outer <code>md-toast</code> element.</li><li><code>template</code> - <code>{string=}</code>: Same as templateUrl, except this is an actual template string.</li><li><code>scope</code> - <code>{object=}</code>: the scope to link the template / controller to. If none is specified, it will create a new child scope. This scope will be destroyed when the toast is removed unless <code>preserveScope</code> is set to true.</li><li><code>preserveScope</code> - <code>{boolean=}</code>: whether to preserve the scope when the element is removed. Default is false</li><li><code>hideDelay</code> - <code>{number=}</code>: How many milliseconds the toast should stay active before automatically closing. Set to 0 or false to have the toast stay open until closed manually. Default: 3000.</li><li><code>position</code> - <code>{string=}</code>: Where to place the toast. Available: any combination of \'bottom\', \'left\', \'top\', \'right\', \'fit\'. Default: \'bottom left\'.</li><li><code>controller</code> - <code>{string=}</code>: The controller to associate with this toast. The controller will be injected the local <code>$hideToast</code>, which is a function used to hide the toast.</li><li><code>locals</code> - <code>{string=}</code>: An object containing key/value pairs. The keys will be used as names of values to inject into the controller. For example, <code>locals: {three: 3}</code> would inject <code>three</code> into the controller with the value of 3.</li><li><code>bindToController</code> - <code>bool</code>: bind the locals to the controller, instead of passing them in. These values will not be available until after initialization.</li><li><code>resolve</code> - <code>{object=}</code>: Similar to locals, except it takes promises as values and the toast will not open until the promises resolve.</li><li><code>controllerAs</code> - <code>{string=}</code>: An alias to assign the controller to on the scope.</li><li><code>parent</code> - <code>{element=}</code>: The element to append the toast to. Defaults to appending to the root element of the application.</li></ul></td></tr></tbody></table><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-promise">promise</code></td><td class="description"><p>A promise that can be resolved with <code>$mdToast.hide()</code> or rejected with <code>$mdToast.cancel()</code>.</p></td></tr></tbody></table></div></li><li id="hide"><h3 class="method-function-syntax"><code class="method-function-syntax">\n                        $mdToast.hide([response]);\n                    </code></h3><div class="service-desc"><p>Hide an existing toast and resolve the promise returned from <code>$mdToast.show()</code>.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">response <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">*</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">*</code></td><td class="description"><p>An argument for the resolved promise.</p></td></tr></tbody></table><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-promise">promise</code></td><td class="description"><p>a promise that is called when the existing element is removed from the DOM</p></td></tr></tbody></table></div></li><li id="cancel"><h3 class="method-function-syntax"><code class="method-function-syntax">$mdToast.cancel([response]);\n                    </code></h3><div class="service-desc"><p>Hide the existing toast and reject the promise returned from <code>$mdToast.show()</code>.</p></div><div class="method-param-table card md-whiteframe-4dp"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">response <span hide="" show-sm=""><code class="api-type label type-hint type-hint-object">*</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-object">*</code></td><td class="description"><p>An argument for the rejected promise.</p></td></tr></tbody></table><table class="simple" ms-responsive-table=""><thead><tr><th>Returns</th><th>Description</th></tr></thead><tbody><tr><td><code class="api-type label type-hint type-hint-promise">promise</code></td><td class="description"><p>a promise that is called when the existing element is removed from the DOM</p></td></tr></tbody></table></div></li></ul></div><script type="text/ng-template" id="toast-template.html"><md-toast> <span flex>Custom toast!</span> <md-button ng-click="closeToast()"> Close </md-button> </md-toast></script></div>'), e.put("app/main/components/elements/whiteframe/whiteframe.html", '<div id="whiteframe" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span></div><div class="title">Whiteframe</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/0.11.2/#/demo/material.components.whiteframe" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div layout="row" layout-padding="" layout-wrap="" layout-fill="" ng-cloak=""><md-whiteframe class="md-whiteframe-1dp" layout="" layout-align="center center"><span>.md-whiteframe-1dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-2dp" layout="" layout-align="center center"><span>.md-whiteframe-2dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-3dp" layout="" layout-align="center center"><span>.md-whiteframe-3dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-4dp" layout="" layout-align="center center"><span>.md-whiteframe-4dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-5dp" layout="" layout-align="center center"><span>.md-whiteframe-5dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-6dp" layout="" layout-align="center center"><span>.md-whiteframe-6dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-7dp" layout="" layout-align="center center"><span>.md-whiteframe-7dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-8dp" layout="" layout-align="center center"><span>.md-whiteframe-8dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-9dp" layout="" layout-align="center center"><span>.md-whiteframe-9dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-10dp" layout="" layout-align="center center"><span>.md-whiteframe-10dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-11dp" layout="" layout-align="center center"><span>.md-whiteframe-11dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-12dp" layout="" layout-align="center center"><span>.md-whiteframe-12dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-13dp" layout="" layout-align="center center"><span>.md-whiteframe-13dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-14dp" layout="" layout-align="center center"><span>.md-whiteframe-14dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-15dp" layout="" layout-align="center center"><span>.md-whiteframe-15dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-16dp" layout="" layout-align="center center"><span>.md-whiteframe-16dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-17dp" layout="" layout-align="center center"><span>.md-whiteframe-17dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-18dp" layout="" layout-align="center center"><span>.md-whiteframe-18dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-19dp" layout="" layout-align="center center"><span>.md-whiteframe-19dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-20dp" layout="" layout-align="center center"><span>.md-whiteframe-20dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-21dp" layout="" layout-align="center center"><span>.md-whiteframe-21dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-22dp" layout="" layout-align="center center"><span>.md-whiteframe-22dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-23dp" layout="" layout-align="center center"><span>.md-whiteframe-23dp</span></md-whiteframe><md-whiteframe class="md-whiteframe-24dp" layout="" layout-align="center center"><span>.md-whiteframe-24dp</span></md-whiteframe></div></div></div>'), e.put("app/main/components/maps/tabs/custom-marker.html", '<ui-gmap-google-map center="vm.customMarkerMap.center" zoom="vm.customMarkerMap.zoom"><ui-gmap-marker coords="vm.customMarkerMap.marker.coords" idkey="vm.customMarkerMap.marker.id" options="vm.customMarkerMap.marker.options"></ui-gmap-marker></ui-gmap-google-map>'), e.put("app/main/components/maps/tabs/info-window.html", '<ui-gmap-google-map center="vm.simpleMarkerMap.center" zoom="vm.simpleMarkerMap.zoom"><ui-gmap-marker coords="vm.simpleMarkerMap.marker.coords" idkey="vm.simpleMarkerMap.marker.id"><ui-gmap-window show="\'true\'"><div ng-non-bindable=""><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Uluru</h1><div id="bodyContent"><p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large sandstone rock formation in the southern part of the Northern Territory, central Australia.</p><p>Attribution: Uluru, <a href="//en.wikipedia.org/w/index.php?title=Uluru&amp;oldid=297882194">http://en.wikipedia.org/w/index.php?title=Uluru</a> (last visited June 22, 2009).</p></div></div></ui-gmap-window></ui-gmap-marker></ui-gmap-google-map>'), e.put("app/main/components/maps/tabs/satellite.html", '<ui-gmap-google-map center="vm.satelliteMap.center" zoom="vm.satelliteMap.zoom" options="vm.satelliteMap.options"></ui-gmap-google-map>'), e.put("app/main/components/maps/tabs/simple-marker.html", '<ui-gmap-google-map center="vm.simpleMarkerMap.center" zoom="vm.simpleMarkerMap.zoom"><ui-gmap-marker coords="vm.simpleMarkerMap.marker.coords" idkey="vm.simpleMarkerMap.marker.id"></ui-gmap-marker></ui-gmap-google-map>'), e.put("app/main/components/maps/tabs/simple.html", '<ui-gmap-google-map center="vm.simpleMap.center" zoom="vm.simpleMap.zoom"></ui-gmap-google-map>'), e.put("app/main/components/maps/tabs/terrain.html", '<ui-gmap-google-map center="vm.terrainMap.center" zoom="vm.terrainMap.zoom" options="vm.terrainMap.options"></ui-gmap-google-map>'), e.put("app/main/components/tables/datatable/datatable.html", '<div id="simple-table" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">Tables</span></div><div class="title">Datatable</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://l-lin.github.io/angular-datatables" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="md-title">Zero Configuration</div><div class="white-bg md-whiteframe-4dp"><table class="dataTable row-border hover" datatable="ng" dt-options="vm.dtOptions"><thead><tr><th class="secondary-text"><div class="table-header"><span class="column-title">Name</span></div></th><th class="secondary-text"><div class="table-header"><span class="column-title">Position</span></div></th><th class="secondary-text"><div class="table-header"><span class="column-title">Office</span></div></th><th class="secondary-text"><div class="table-header"><span class="column-title">Age</span></div></th><th class="secondary-text"><div class="table-header"><span class="column-title">Start Date</span></div></th><th class="secondary-text"><div class="table-header"><span class="column-title">Salary</span></div></th></tr></thead><tbody><tr ng-repeat="employee in ::vm.employees"><td>{{ employee.name }}</td><td>{{ employee.position }}</td><td>{{ employee.office }}</td><td>{{ employee.age }}</td><td>{{ employee.startDate }}</td><td>{{ employee.salary }}</td></tr></tbody></table></div></div></div>'), e.put("app/main/components/tables/simple-table/simple-table.html", '<div id="simple-table" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">Tables</span></div><div class="title">Simple Table</div></div></div><div class="content">Tables are used to present raw data sets, and usually appear in desktop enterprise products.<p>Data sets may include:</p><ul><li>Three or more columns of data</li><li>A corresponding visualization</li><li>The ability for users to query and manipulate data at scale</li></ul><div class="simple-table-container md-whiteframe-4dp"><div class="table-title">Employees</div><table class="simple" ms-responsive-table=""><thead><tr><th>Name</th><th>Position</th><th>Office</th><th class="text-right">Age</th><th class="text-right">Start Date</th><th class="text-right">Salary</th></tr></thead><tfoot><tr><td></td></tr></tfoot><tbody><tr ng-repeat="person in vm.employees"><td class="name">{{person.name}}</td><td class="position">{{person.position}}</td><td class="office">{{person.office}}</td><td class="age text-right">{{person.age}}</td><td class="start-date text-right">{{person.startDate}}</td><td class="salary text-right">{{person.salary | currency}}</td></tr></tbody></table></div></div></div>'), e.put("app/main/ui/layouts/blank/blank.html", '<div class="page-layout blank" layout="row"><h2>Blank page</h2></div>'), e.put("app/main/ui/layouts/demo/demo-content.html", '<div class="demo-content"><img src="assets/images/etc/early-sunrise.jpg" class="md-card-image" alt="sunrise"><h1>Early Sunrise</h1><h4 class="secondary-text">Demo Content</h4><p>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.</p><blockquote><p>The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me? " he thought. It wasn\'t a dream.</p><footer>John Doe</footer></blockquote><p>His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p><p>It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite sad.</p><p>"How about if I sleep a little bit longer and forget all this nonsense", he thought, but that was something he was unable to do because he was used to sleeping on his right, and in his present state couldn\'t get into that position. However hard he threw himself onto his right, he always rolled back to where he was.</p><p>He must have tried it a hundred times, shut his eyes so that he wouldn\'t have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before. "Oh, God", he thought, "what a strenuous career it is that I\'ve chosen!</p><p>Travelling day in and day out. Doing business like this takes much more effort than doing your own business at home, and on top of that there\'s the curse of travelling, worries about making train connections, bad and irregular food, contact with different people all the time so that you can never get to know anyone or become friendly with them.</p><p>"He felt a slight itch up on his belly; pushed himself slowly up on his back towards the headboard so that he could lift his head better; found where the itch was, and saw that it was covered with lots of little white spots which he didn\'t know what to make of; and when he tried to feel the place with one of his legs he drew it quickly back because as soon as he touched it he was overcome by a cold shudder. He slid back into his former position.</p><p>"Getting up early all the time", he thought, "it makes you stupid. You\'ve got to get enough sleep. Other travelling salesmen live a life of luxury. For instance, whenever I go back to the guest house during the morning to copy out the contract, these gentlemen are always still sitting there eating their breakfasts. I ought to just try that with my boss; I\'d get kicked out on the spot. But who knows, maybe that would be the best thing for me...</p></div>'), e.put("app/main/ui/layouts/demo/demo-sidenav.html", '<div class="demo-sidenav"><md-list><md-subheader class="md-no-sticky">Sidenav Demo</md-subheader><md-list-item><p>Sidenav Item 1</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 2</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 3</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 4</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 5</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 6</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 7</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 8</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 9</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 10</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 11</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 12</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 13</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 14</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 15</p></md-list-item><md-divider></md-divider><md-list-item><p>Sidenav Item 16</p></md-list-item></md-list></div>'), e.put("app/main/pages/auth/lock/lock.html", '<div id="lock" class="scrollable" ms-scroll=""><div id="lock-form-wrapper" layout="row" layout-align="center center"><div id="lock-form" class="md-whiteframe-1dp"><div layout="row" layout-align="start center" layout-sm="column" layout-align-sm="center center"><div class="avatar-container"><img class="avatar big" src="assets/images/avatars/katherine.jpg"><md-icon md-font-icon="icon-lock" class="md-warn-fg s36 md-hue-2"></md-icon></div><div flex="" layout="column" layout-align="start" layout-align-sm="center center"><div class="title" translate="LOCK.TITLE">Your session is locked</div><div class="subtitle" translate="LOCK.SUBTITLE">Due to inactivity, your session is locked. Enter your password to continue.</div></div></div><form><md-input-container flex="" md-no-float=""><input ng-model="vm.form.userName" disabled="" placeholder="User Name" translate="" translate-attr-placeholder="LOCK.USERNAME"></md-input-container><md-input-container flex="" md-no-float=""><input ng-model="vm.form.password" type="password" placeholder="Password" translate="" translate-attr-placeholder="LOCK.PASSWORD"></md-input-container><md-button class="md-raised md-accent" aria-label="UNLOCK" translate="LOCK.UNLOCK" translate-attr-aria-label="LOCK.UNLOCK">UNLOCK</md-button></form><div class="message"><a ui-sref="app.pages_auth_login" class="md-accent-color"><span translate="LOCK.ARE_YOU_NOT">Are you not</span><span>Jane Doe?</span></a></div></div></div></div>'), e.put("app/main/pages/auth/forgot-password/forgot-password.html", '<div id="forgot-password" class="scrollable" ms-scroll=""><div id="forgot-password-form-wrapper" layout="row" layout-align="center center"><div id="forgot-password-form" class="md-whiteframe-8dp"><div class="logo md-accent-bg"><span>F</span></div><div class="title" translate="FORGOTPASSWORD.TITLE">Recover your password</div><form><md-input-container flex="" md-no-float=""><input ng-model="vm.form.email" type="password" placeholder="Email address" translate="" translate-attr-placeholder="FORGOTPASSWORD.EMAIL_ADRESS"></md-input-container><md-button class="md-raised md-accent" aria-label="RESET MY PASSWORD" translate="FORGOTPASSWORD.RESET_PASSWORD" translate-attr-aria-label="FORGOTPASSWORD.RESET_PASSWORD">RESET MY PASSWORD</md-button></form><div class="login" layout="row" layout-align="center center"><a class="link" ui-sref="app.pages_auth_login" translate="FORGOTPASSWORD.GO_BACK">Go back to login</a></div></div></div></div>'), e.put("app/main/pages/auth/login/login.html", '<div id="login" class="scrollable" ms-scroll=""><div id="login-form-wrapper" layout="row" layout-align="center center"><div id="login-form" class="md-whiteframe-8dp"><div class="logo md-accent-bg"><span>F</span></div><div class="title" translate="LOGIN.TITLE">Log in to your account</div><form><md-input-container flex="" md-no-float=""><input ng-model="vm.form.username" placeholder="Username" translate="" translate-attr-placeholder="LOGIN.USERNAME"></md-input-container><md-input-container flex="" md-no-float=""><input ng-model="vm.form.password" type="password" placeholder="Password" translate="" translate-attr-placeholder="LOGIN.PASSWORD"></md-input-container><div class="remember-forgot-password" layout="row" layout-sm="column" layout-align="space-between center"><md-checkbox class="remember-me" ng-model="data.cb1" aria-label="Remember Me"><span translate="LOGIN.REMEMBER_ME">Remember Me</span></md-checkbox><a ui-sref="app.pages_auth_forgot-password" class="forgot-password md-accent-color" translate="LOGIN.FORGOT_PASSWORD">Forgot Password?</a></div><md-button class="md-raised md-accent" aria-label="LOG IN" translate="LOGIN.LOG_IN" translate-attr-aria-label="LOGIN.LOG_IN">LOG IN</md-button></form><div class="separator"><span class="text" translate="LOGIN.OR">OR</span></div><md-button class="md-raised google"><div layout="row" layout-align="center center"><span><md-icon md-font-icon="icon-google-plus" class="s16"></md-icon><span translate="LOGIN.WITH_GOOGLE">Log in with Google</span></span></div></md-button><md-button class="md-raised facebook"><div layout="row" layout-align="center center"><span><md-icon md-font-icon="icon-facebook" class="s16"></md-icon><span translate="LOGIN.WITH_FACEBOOK">Log in with Facebook</span></span></div></md-button><div class="register" layout="row" layout-sm="column" layout-align="center center"><span class="text" translate="LOGIN.DONT_HAVE_ACCOUNT">Don\'t have an account?</span> <a class="link" ui-sref="app.pages_auth_register" translate="LOGIN.CREATE_ACCOUNT">Create an account</a></div></div></div></div>'),
        e.put("app/main/pages/auth/register/register.html", '<div id="register" class="scrollable" ms-scroll=""><div id="register-form-wrapper" layout="row" layout-align="center center"><div id="register-form" class="md-whiteframe-8dp"><div class="logo md-accent-bg"><span>F</span></div><div class="title" translate="REGISTER.TITLE">Create an account</div><form><md-input-container flex="" md-no-float=""><input ng-model="vm.form.username" placeholder="Name" translate="" translate-attr-placeholder="REGISTER.NAME"></md-input-container><md-input-container flex="" md-no-float=""><input ng-model="vm.form.email" type="email" placeholder="Email" translate="" translate-attr-placeholder="REGISTER.EMAIL"></md-input-container><md-input-container flex="" md-no-float=""><input ng-model="vm.form.password" type="password" placeholder="Password" translate="" translate-attr-placeholder="REGISTER.PASSWORD"></md-input-container><md-input-container flex="" md-no-float=""><input ng-model="vm.form.passwordConfirm" type="password" placeholder="Password (Confirm)" translate="" translate-attr-placeholder="REGISTER.PASSWORD_CONFIRM"></md-input-container><div class="terms" layout="row" layout-align="start center" layout-align-sm="center center"><md-checkbox ng-model="data.cb1" aria-label="I read and accept"></md-checkbox><div layout="row" layout-sm="column" layout-align="start center"><span translate="REGISTER.READ_ACCEPT">I read and accept</span> <a href="#" class="md-accent-color" translate="REGISTER.TERMS_COND">terms and conditions</a></div></div><md-button class="md-raised md-accent" aria-label="CREATE MY ACCOUNT" translate="REGISTER.CREATE_ACCOUNT" translate-attr-aria-label="REGISTER.CREATE_ACCOUNT">CREATE MY ACCOUNT</md-button></form><div class="login" layout="row" layout-sm="column" layout-align="center center"><span class="text" translate="REGISTER.ALREADY_HAVE">Already have an account?</span> <a class="link" ui-sref="app.pages_auth_login" translate="REGISTER.LOGIN">Log in</a></div></div></div></div>'), e.put("app/main/pages/errors/404/error-404.html", '<div id="error-404" layout="column" layout-align="center center"><div class="content" layout="column" layout-align="center center"><div class="error-code" translate="ERROR404.CODE">404</div><div class="message" translate="ERROR404.MESSAGE">Sorry but we couldn’t find the page you are looking for</div><div class="search md-whiteframe-1dp" layout="row" layout-align="start center"><md-icon md-font-icon="icon-magnify" class="icon s24"></md-icon><input ng-model="vm.search" type="text" placeholder="Search for anything" translate="" translate-attr-placeholder="ERROR404.SEARCH" flex=""></div><a class="back-link md-accent-color" href="/" translate="ERROR404.GO_BACK">Go back to dashboard</a></div></div>'), e.put("app/main/pages/errors/500/error-500.html", '<div id="error-500" layout="column" layout-align="center center"><div class="content" layout="column" layout-align="center center"><div class="error-code" translate="ERROR500.CODE">500</div><div class="message" translate="ERROR500.MESSAGE">Well, you broke the internet!</div><div class="sub-message" translate="ERROR500.SUBMESSAGE">Just kidding, looks like we have an internal issue, please try again in couple minutes</div><a class="report-link md-accent-color" href="/" translate="ERROR500.REPORT">Report this problem</a></div></div>'), e.put("app/sidenav/quick-panel/tabs/activity/activity-tab.html", '<md-list class="friends"><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.FRIENDS">Friends</span></md-subheader><md-list-item class="friend md-3-line" ng-repeat="friend in vm.activities.friends"><img ng-src="{{friend.avatar}}" class="md-avatar" alt="{{friend.name}}"><div class="status {{friend.status}}"></div><div ng-if="contact.unread" class="md-accent-bg unread-message-count">{{contact.unread}}</div><div class="md-list-item-text"><h3 class="message">{{friend.message}}</h3><p class="time">{{friend.time}}</p></div></md-list-item></md-list><md-divider></md-divider><md-list class="servers"><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.APP_SERVERS">Application Servers</span></md-subheader><md-list-item class="server md-3-line" ng-repeat="server in vm.activities.servers"><md-icon md-font-icon="icon-checkbox-blank-circle" class="s16 status" ng-class="server.status"></md-icon><div class="md-list-item-text"><h3>{{server.location}}</h3><p>{{server.detail}}</p></div></md-list-item></md-list><md-divider></md-divider><md-list class="stats"><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.USER_STATS">User Stats</span></md-subheader><md-list-item class="stat md-2-line" ng-repeat="stat in vm.activities.stats"><div class="md-list-item-text"><span>{{stat.title}} ({{stat.current}} / {{stat.total}})</span><md-progress-linear ng-class="stat.status" md-mode="determinate" value="{{stat.percent}}"></md-progress-linear></div></md-list-item></md-list>'), e.put("app/sidenav/quick-panel/tabs/today/today-tab.html", '<md-list class="date"><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.TODAY">Today</span></md-subheader><md-list-item class="md-display-1 md-2-line" layout="column" layout-align="start start"><div class="secondary-text"><div>{{vm.date | date:\'EEEE\'}}</div><div layout="row" layout-align="start start"><span>{{vm.date | date:\'d\'}}</span> <span class="md-subhead">th</span> <span>{{vm.date | date:\'MMMM\'}}</span></div></div></md-list-item></md-list><md-divider></md-divider><md-list><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.EVENTS">Events</span></md-subheader><md-list-item class="md-2-line" ng-repeat="event in vm.events" ng-click="dummyFunction()"><div class="md-list-item-text"><h3>{{event.title}}</h3><p>{{event.detail}}</p></div></md-list-item></md-list><md-divider></md-divider><md-list><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.NOTES">Notes</span></md-subheader><md-list-item class="md-2-line" ng-repeat="note in vm.notes" ng-click="dummyFunction()"><div class="md-list-item-text"><h3>{{note.title}}</h3><p>{{note.detail}}</p></div></md-list-item></md-list><md-divider></md-divider><md-list><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.QUICK_SETTINGS">Quick Settings</span></md-subheader><md-list-item><h3 translate="QUICKPANEL.NOTIFICATIONS">Notifications</h3><md-switch class="md-secondary" ng-model="vm.settings.notify" aria-label="Notifications" translate="" translate-attr-aria-label="QUICKPANEL.NOTIFICATIONS"></md-switch></md-list-item><md-list-item><h3 translate="QUICKPANEL.CLOUD_SYNC">Cloud Sync</h3><md-switch class="md-secondary" ng-model="vm.settings.cloud" aria-label="Cloud Sync" translate="" translate-attr-aria-label="QUICKPANEL.CLOUD_SYNC"></md-switch></md-list-item><md-list-item><h3 translate="QUICKPANEL.RETRO_THRUSTERS">Retro Thrusters</h3><md-switch class="md-secondary md-warn" ng-model="vm.settings.retro" aria-label="Retro Thrusters" translate="" translate-attr-aria-label="QUICKPANEL.RETRO_THRUSTERS"></md-switch></md-list-item></md-list>'), e.put("app/sidenav/quick-panel/tabs/chat/chat-tab.html", '<div class="main animate-slide-left" ng-hide="vm.chatActive"><md-list class="recent"><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.RECENT">Recent</span></md-subheader><md-list-item class="contact md-3-line" ng-repeat="contact in vm.contacts.recent" ng-click="vm.toggleChat(contact)"><img ng-src="{{contact.avatar}}" class="md-avatar" alt="{{contact.name}}"><div class="status {{contact.status}}"></div><div ng-if="contact.unread" class="md-accent-bg unread-message-count">{{contact.unread}}</div><div class="md-list-item-text"><h3>{{contact.name}}</h3><p class="last-message">{{contact.lastMessage}}</p></div></md-list-item></md-list><md-divider></md-divider><md-list class="all"><md-subheader class="md-no-sticky"><span translate="QUICKPANEL.START_NEW_CHAT">Start New Chat</span></md-subheader><md-list-item class="contact" ng-repeat="contact in vm.contacts.all" ng-click="vm.toggleChat(contact)"><img ng-src="{{contact.avatar}}" class="md-avatar" alt="{{contact.name}}"><div class="status {{contact.status}}"></div><div class="md-list-item-text"><h3>{{contact.name}}</h3></div></md-list-item></md-list><md-divider></md-divider></div><div class="chat animate-slide-right" ng-show="vm.chatActive" layout="column"><md-toolbar class="md-accent"><div class="md-toolbar-tools" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-button class="md-icon-button" ng-click="vm.toggleChat()" aria-label="Back" translate="" translate-attr-aria-label="QUICKPANEL.BACK"><md-icon md-font-icon="icon-keyboard-backspace"></md-icon></md-button><h4><span>{{vm.chat.contact.name}}</span></h4></div><div layout="row" layout-align="end center"><md-button class="md-icon-button" aria-label="Call" translate="" translate-attr-aria-label="QUICKPANEL.CALL"><md-icon md-font-icon="icon-phone"></md-icon></md-button><md-button class="md-icon-button" aria-label="More" translate="" translate-attr-aria-label="QUICKPANEL.MORE"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button></div></div></md-toolbar><md-content flex="" layout-paddings="" ms-scroll="" id="chat-dialog"><div layout="row" ng-repeat="dialog in vm.chat.contact.dialog" class="md-padding message-row" ng-class="dialog.who"><img ng-if="dialog.who ===\'contact\'" ng-src="{{vm.chat.contact.avatar}}" class="avatar" alt="{{vm.chat.contact.name}}"> <img ng-if="dialog.who ===\'user\'" class="avatar" src="assets/images/avatars/profile.jpg"><div class="bubble" flex=""><div class="message">{{dialog.message}}</div><div class="time secondary-text">{{dialog.time}}</div></div></div></md-content><form ng-submit="vm.reply()" layout="row" class="reply" layout-align="start center"><textarea ng-keyup="$event.keyCode == 13 ? vm.reply() : null" flex="" ng-model="vm.replyMessage" placeholder="Type and hit enter to send message" translate="" translate-attr-placeholder="QUICKPANEL.REPLY_PLACEHOLDER"></textarea><md-button class="md-fab md-icon-button" type="submit" aria-label="Send message" translate="" translate-attr-aria-label="QUICKPANEL.SEND_MESSAGE"><md-icon md-font-icon="icon-send"></md-icon></md-button></form></div>'), e.put("app/core/directives/ms-card/templates/template-1/template-1.html", '<div class="template-1"><div class="media"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div><div class="content pv-24 ph-16"><div class="title h1" ng-if="card.title">{{card.title}}</div><div class="subtitle secondary-text" ng-if="card.subtitle">{{card.subtitle}}</div><div class="text pt-16" ng-if="card.text">{{card.text}}</div></div></div>'), e.put("app/core/directives/ms-card/templates/template-10/template-10.html", '<div class="template-10 p-16"><div class="pb-16" layout="row" layout-align="space-between center"><div class="info"><div class="title secondary-text" ng-if="card.title">{{card.title}}</div><div class="subtitle h2" ng-if="card.subtitle">{{card.subtitle}}</div></div><div class="media ml-16"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div></div><div class="text">{{card.text}}</div></div>'), e.put("app/core/directives/ms-card/templates/template-2/template-2.html", '<div class="template-2"><div class="header p-16" layout="row" layout-align="start center"><div ng-if="card.avatar"><img class="avatar mr-16" ng-src="{{card.avatar.src}}" alt="{{card.avatar.alt}}"></div><div class="info"><div class="title" ng-if="card.title">{{card.title}}</div><div class="subtitle secondary-text" ng-if="card.subtitle">{{card.subtitle}}</div></div></div><div class="media"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div><div class="text p-16" ng-if="card.text">{{card.text}}</div></div>'), e.put("app/core/directives/ms-card/templates/template-3/template-3.html", '<div class="template-3 p-16 teal-bg white-fg" layout="row" layout-align="space-between"><div layout="column" layout-align="space-between"><div class="info"><div class="title h1" ng-if="card.title">{{card.title}}</div><div class="subtitle h3 secondary-text" ng-if="card.subtitle">{{card.subtitle}}</div></div><div class="cta"><md-button class="m-0">{{card.cta}}</md-button></div></div><div class="media pl-16"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div></div>'), e.put("app/core/directives/ms-card/templates/template-4/template-4.html", '<div class="template-4"><div class="info white-fg ph-16 pv-24"><div class="title h1" ng-if="card.title">{{card.title}}</div><div class="text" ng-if="card.text">{{card.text}}</div></div><div class="media"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div></div>'), e.put("app/core/directives/ms-card/templates/template-5/template-5.html", '<div class="template-5 p-16" layout="row" layout-align="space-between start"><div class="info"><div class="title secondary-text" ng-if="card.title">{{card.title}}</div><div class="event h2" ng-if="card.event">{{card.event}}</div></div><div class="media ml-16"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div></div>'), e.put("app/core/directives/ms-card/templates/template-6/template-6.html", '<div class="template-6"><div class="content pv-24 ph-16"><div class="subtitle secondary-text" ng-if="card.subtitle">{{card.subtitle}}</div><div class="title h2" ng-if="card.title">{{card.title}}</div><div class="text pt-8" ng-if="card.text">{{card.text}}</div></div></div>'), e.put("app/core/directives/ms-card/templates/template-7/template-7.html", '<div class="template-7" layout="row" layout-align="space-between"><div class="info" layout="column" layout-align="space-between" layout-fill="" flex=""><div class="p-16"><div class="title h1" ng-if="card.title">{{card.title}}</div><div class="subtitle h4 secondary-text" ng-if="card.subtitle">{{card.subtitle}}</div><div class="text h4 pt-8" ng-if="card.text">{{card.text}}</div></div><div><md-divider></md-divider><div class="p-8" layout="row"><md-icon md-font-icon="icon-star-outline" class="mh-5"></md-icon><md-icon md-font-icon="icon-star-outline" class="mh-5"></md-icon><md-icon md-font-icon="icon-star-outline" class="mh-5"></md-icon><md-icon md-font-icon="icon-star-outline" class="mh-5"></md-icon><md-icon md-font-icon="icon-star-outline" class="mh-5"></md-icon></div></div></div><div class="media"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div></div>'), e.put("app/core/directives/ms-card/templates/template-8/template-8.html", '<div class="template-8"><div class="media"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div><div class="content pv-24 ph-16"><div class="title h1" ng-if="card.title">{{card.title}}</div><div class="subtitle secondary-text" ng-if="card.subtitle">{{card.subtitle}}</div><div class="buttons pt-16"><md-button class="m-0">{{card.button1}}</md-button><md-button class="m-0 md-accent">{{card.button2}}</md-button></div><div class="text pt-16" ng-if="card.text">{{card.text}}</div></div></div>'), e.put("app/core/directives/ms-card/templates/template-9/template-9.html", '<div class="template-9"><div class="header p-16" layout="row" layout-align="start center"><div ng-if="card.avatar"><img class="avatar mr-16" ng-src="{{card.avatar.src}}" alt="{{card.avatar.alt}}"></div><div class="info"><div class="title" ng-if="card.title">{{card.title}}</div><div class="subtitle secondary-text" ng-if="card.subtitle">{{card.subtitle}}</div></div></div><div class="text ph-16 pb-16" ng-if="card.text">{{card.text}}</div><div class="media"><img class="image" ng-src="{{card.media.image.src}}" alt="{{card.media.image.alt}}" ng-show="card.media.image"></div><div class="buttons m-8"><md-button class="md-icon-button mr-16" aria-label="Favorite"><md-icon md-font-icon="icon-heart-outline" class="s24"></md-icon></md-button><md-button class="md-icon-button" aria-label="Share"><md-icon md-font-icon="icon-share" class="s24"></md-icon></md-button></div></div>'), e.put("app/main/apps/calendar/dialogs/event-detail/event-detail-dialog.html", '<md-dialog class="event-detail-dialog" aria-label="New Message"><md-toolbar class="md-accent md-hue-2"><div class="md-toolbar-tools"><span class="title">{{vm.calendarEvent.title}}</span> <span flex=""></span><md-button class="edit-event-button md-fab md-warn" ng-click="vm.editEvent(vm.calendarEvent)" aria-label="Edit event" translate="" translate-attr-aria-label="CALENDAR.EDIT_EVENT"><md-icon md-font-icon="icon-pencil"></md-icon></md-button></div></md-toolbar><md-dialog-content ms-scroll=""><div class="event-details" layout="column"><div class="event-detail-row" layout="row" layout-align="start start"><md-icon md-font-icon="icon-clock"></md-icon><div layout="column" flex=""><span class="h4">{{vm.calendarEvent.start.format(\'MMMM Do YYYY, h:mm:ss a\')}} <span ng-if="vm.calendarEvent.end">-</span> {{vm.calendarEvent.end.format(\'MMMM Do YYYY, h:mm:ss a\')}}</span> <span class="secondary-text">{{vm.calendarEvent.repeat || \'Does not repeat\'}}</span></div></div><div class="event-detail-row" layout="row" layout-align="start start"><md-icon md-font-icon="icon-bell-ring-outline"></md-icon><div layout="column" flex=""><span class="h4" translate="CALENDAR.30_MIN_BEFORE">30 minutes before</span> <span class="h4" translate="CALENDAR.15_MIN_BEFORE">15 minutes before</span> <span class="h4" translate="CALENDAR.30_MIN_LATER">30 minutes later</span></div></div><div class="event-detail-row" layout="row" layout-align="start start"><md-icon md-font-icon="icon-map-marker"></md-icon><div layout="column" flex=""><span class="h4">Istanbul, Turkey</span></div></div><div class="event-detail-row" layout="row" layout-align="start center"><md-icon md-font-icon="icon-account"></md-icon><div layout="row" flex=""><img src="assets/images/avatars/alice.jpg" class="avatar" alt="alice"> <img src="assets/images/avatars/joyce.jpg" class="avatar" alt="joyce"> <img src="assets/images/avatars/vincent.jpg" class="avatar" alt="vincent"></div></div></div></md-dialog-content></md-dialog>'), e.put("app/main/apps/calendar/dialogs/event-form/event-form-dialog.html", '<md-dialog class="event-form-dialog" aria-label="New Message"><form><md-toolbar class="md-accent md-hue-2"><div class="md-toolbar-tools" layout="row" layout-align="space-between center"><span class="title">{{vm.dialogTitle}}</span><md-button class="md-icon-button" ng-click="vm.closeDialog()" aria-label="Close dialog" translate="" translate-attr-aria-label="CALENDAR.CLOSE_DIALOG"><md-icon md-font-icon="icon-close"></md-icon></md-button></div></md-toolbar><md-dialog-content ms-scroll=""><md-input-container><label translate="CALENDAR.TITLE">Title</label> <input ng-model="vm.calendarEvent.title"></md-input-container><md-list class="all-day"><md-list-item><p translate="CALENDAR.ALL_DAY">All Day</p><md-switch class="md-secondary" ng-model="vm.calendarEvent.allday" aria-label="All day" translate="" translate-attr-aria-label="CALENDAR.ALL_DAY"></md-switch></md-list-item></md-list><div layout="row" class="date-row"><md-datepicker flex="" ng-model="vm.calendarEvent.start" md-placeholder="Start Date"></md-datepicker><md-input-container flex="" md-no-float=""><input ng-model="vm.calendarEvent.startTime" placeholder="Start Time" translate="" translate-attr-placeholder="CALENDAR.START_TIME"></md-input-container></div><div layout="row" class="date-row"><md-datepicker flex="" ng-model="vm.calendarEvent.end" md-placeholder="End Date"></md-datepicker><md-input-container flex="" md-no-float=""><input ng-model="vm.calendarEvent.endTime" placeholder="End Time" translate="" translate-attr-placeholder="CALENDAR.END_TIME"></md-input-container></div><md-input-container flex=""><label translate="CALENDAR.REPEAT">Repeat</label> <input ng-model="vm.calendarEvent.repeat"></md-input-container><md-input-container flex=""><label translate="CALENDAR.LOCATION">Location</label> <input ng-model="vm.calendarEvent.location"></md-input-container><div class="notifications" layout="column"><div class="title" translate="CALENDAR.NOTIFICATIONS">Notifications</div><md-select ng-model="notification" placeholder="Notification" ng-repeat="notification in vm.calendarEvent.notifications"><md-option ng-repeat="opt in vm.notifications" value="{{opt}}">{{opt}}</md-option></md-select><md-button aria-label="+ Add Another Notification" translate="CALENDAR.ADD_NOTIFICATION" translate-attr-aria-label="CALENDAR.ADD_NOTIFICATION">+ Add Another Notification</md-button></div><md-input-container flex="" class="textarea-container"><label translate="CALENDAR.NOTES">Notes</label> <textarea ng-model="vm.task.notes" md-maxlength="250"></textarea></md-input-container></md-dialog-content><div class="md-actions mail-form-actions" layout="row" layout-align="space-between center"><md-button ng-click="vm.saveEvent()" class="save-button md-accent md-raised" aria-label="SAVE" translate="CALENDAR.SAVE" translate-attr-aria-label="CALENDAR.SAVE">SAVE</md-button><md-button class="md-icon-button" aria-label="Delete" translate="" translate-attr-aria-label="CALENDAR.DELETE"><md-icon md-font-icon="icon-delete"></md-icon><md-tooltip><span translate="CALENDAR.DELETE">Delete</span></md-tooltip></md-button></div></form></md-dialog>'), e.put("app/main/apps/file-manager/sidenavs/details/details-sidenav.html", '<div class="header md-accent-bg" layout="column" layout-align="space-between"><div class="toolbar" layout="row" layout-align="end center"><md-button class="md-icon-button" ng-click="vm.delete()" aria-label="Delete" translate="" translate-attr-aria-label="FM.DELETE"><md-icon md-font-icon="icon-delete"></md-icon><md-tooltip><span translate="FM.DELETE">Delete</span></md-tooltip></md-button><md-button class="md-icon-button" aria-label="Download" translate="" translate-attr-aria-label="FM.DOWNLOAD"><md-icon md-font-icon="icon-download"></md-icon><md-tooltip><span translate="FM.DOWNLOAD">Download</span></md-tooltip></md-button><md-button class="md-icon-button" aria-label="More" translate="" translate-attr-aria-label="FM.MORE"><md-icon md-font-icon="icon-dots-vertical"></md-icon><md-tooltip><span translate="FM.MORE">More</span></md-tooltip></md-button></div><div><div class="title">{{vm.selected.name}}</div><div class="subtitle secondary-text"><span translate="FM.EDITED">Edited</span>: {{vm.selected.modified}}</div></div></div><md-content class="content" flex="" ms-scroll=""><div class="file-details"><div class="preview file-icon" layout="row" layout-align="center center"><i class="icon-{{vm.selected.type}} s48"></i></div><md-list class="offline-switch"><md-list-item><p translate="FM.AVAILABLE_OFFLINE">Available Offline</p><md-switch class="md-secondary" ng-model="vm.selected.offline" aria-label="Toggle offline" translate="" translate-attr-aria-label="FM.TOOGLE_OFFLINE"></md-switch></md-list-item></md-list><div class="title" translate="FM.INFO">Info</div><table><tr class="type"><th translate="FM.TYPE">Type</th><td>{{vm.selected.type}}</td></tr><tr class="size"><th translate="FM.SIZE">Size</th><td>{{vm.selected.size === \'\' ? \'-\': vm.selected.size}}</td></tr><tr class="location"><th translate="FM.LOCATION">Location</th><td>{{vm.selected.location}}</td></tr><tr class="owner"><th translate="FM.OWNER">Owner</th><td>{{vm.selected.owner}}</td></tr><tr class="modified"><th translate="FM.MODIFIED">Modified</th><td>{{vm.selected.modified}}</td></tr><tr class="opened"><th translate="FM.OPENED">Opened</th><td>{{vm.selected.opened}}</td></tr><tr class="created"><th translate="FM.CREATED">Created</th><td>{{vm.selected.created}}</td></tr></table></div></md-content>'), e.put("app/main/apps/file-manager/sidenavs/main/main-sidenav.html", '<div class="header" layout="column" layout-align="space-between start"><div class="logo" layout="row" layout-align="start center"><span class="logo-icon"><md-icon md-font-icon="icon-folder" class="icon s24"></md-icon></span> <span class="logo-text" translate="FM.FILE_MANAGER">File Manager</span></div><div class="account"><div class="title">John Doe</div><md-select class="account-selection simplified" ng-model="vm.selectedAccount" placeholder="Select Account" translate="" translate-attr-placeholder="FM.SELECT_ACCOUNT"><md-option ng-repeat="(provider, address) in vm.accounts" value="{{provider}}">{{address}}</md-option></md-select></div></div><div class="content"><div class="navigation-simple" layout="column"><md-button class="item" aria-label="inbox"><div class="context" layout="row" layout-align="start center"><md-icon md-font-icon="icon-folder" class="s16"></md-icon><div class="title" translate="FM.MY_FILES">My Files</div></div></md-button><md-button class="item" aria-label="starred"><div class="context" layout="row" layout-align="start center"><md-icon md-font-icon="icon-star" class="s16"></md-icon><div class="title" translate="FM.STARRED">Starred</div></div></md-button><md-button class="item" aria-label="starred"><div class="context" layout="row" layout-align="start center"><md-icon md-font-icon="icon-folder-account" class="s16"></md-icon><div class="title" translate="FM.SHARRED_WITH_ME">Sharred with me</div></div></md-button><md-button class="item" aria-label="starred"><div class="context" layout="row" layout-align="start center"><md-icon md-font-icon="icon-clock" class="s16"></md-icon><div class="title" translate="FM.RECENT">Recent</div></div></md-button><md-button class="item" aria-label="starred"><div class="context" layout="row" layout-align="start center"><md-icon md-font-icon="icon-checkbox-marked-circle" class="s16"></md-icon><div class="title" translate="FM.OFFLINE">Offline</div></div></md-button></div></div>'), e.put("app/main/apps/file-manager/views/grid/grid-view.html", '<div class="grid-view" layout="column"><div class="folders" layout="row" layout-wrap=""><div class="md-background-bg md-hue-1 md-whiteframe-1dp item folder" ng-click="vm.select(folder)" ng-repeat="folder in vm.folders | filter:global.search" layout="row" layout-align="space-between center"><div layout="row" class="title" layout-align="start center"><span class="file-icon"><md-icon md-font-icon="icon-{{folder.type}}"></md-icon></span> <span class="name">{{folder.name}}</span></div><div class="show-details" hide-gt-md=""><md-button class="md-icon-button sidenav-toggle" aria-label="Details" translate="" translate-attr-aria-label="FM.DETAILS"><md-icon md-font-icon="icon-information-outline" ng-click="vm.toggleDetails(folder)"></md-icon></md-button></div></div></div><div class="files" layout="row" layout-wrap=""><div ng-click="vm.select(file)" class="md-whiteframe-1dp item file" ng-repeat="file in vm.files | filter:global.search" layout="column"><div class="preview"><img ng-src="{{file.preview}}"></div><div class="bottom md-background-bg md-hue-1" layout="row" layout-align="space-between center"><div layout="row" class="title" layout-align="start center" flex=""><span class="file-icon"><md-icon md-font-icon="icon-{{file.type}}"></md-icon></span> <span class="name">{{file.name}}</span></div><div class="show-details" hide-gt-md=""><md-button class="md-icon-button sidenav-toggle" aria-label="Details" translate="" translate-attr-aria-label="FM.DETAILS"><md-icon md-font-icon="icon-information-outline" ng-click="vm.toggleDetails(file)"></md-icon></md-button></div></div></div></div></div>'), e.put("app/main/apps/file-manager/views/list/list-view.html", '<table class="simple list-view"><thead><tr><th></th><th translate="FM.NAME">Name</th><th hide="" show-gt-lg="" translate="FM.TYPE">Type</th><th hide-sm="" translate="FM.OWNER">Owner</th><th hide-sm="" translate="FM.SIZE">Size</th><th hide-sm="" hide-lg="" translate="FM.LAST_MODIFIED">Last Modified</th><th hide-gt-md=""></th></tr></thead><tbody><tr ng-repeat="folder in vm.folders | filter:global.search" ng-click="vm.select(folder)" ng-class="{\'selected\' : vm.selected === folder}"><td class="file-icon"><md-icon md-font-icon="icon-{{folder.type}}"></md-icon></td><td class="name">{{folder.name}}</td><td class="type" hide="" show-gt-lg="">{{folder.type}}</td><td class="owner" hide-sm="">{{folder.owner}}</td><td class="size" hide-sm="">{{folder.size === \'\' ? \'-\': folder.size}}</td><td class="last-modified" hide-sm="" hide-lg="">{{folder.modified}}</td><td class="show-details" hide-gt-md=""><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleDetails(folder)" aria-label="Toggle details sidenav"><md-icon md-font-icon="icon-information-outline"></md-icon></md-button></td></tr><tr ng-repeat="file in vm.files | filter:global.search" ng-click="vm.select(file)" ng-class="{\'selected\' : vm.selected === file}"><td class="file-icon"><md-icon md-font-icon="icon-{{file.type}}"></md-icon></td><td class="name">{{file.name}}</td><td class="type" hide="" show-gt-lg="">{{file.type}}</td><td class="owner" hide-sm="">{{file.owner}}</td><td class="size" hide-sm="">{{file.size === \'\' ? \'-\': file.size}}</td><td class="last-modified" hide-sm="" hide-lg="">{{file.modified}}</td><td class="show-details" hide-gt-md=""><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleDetails(file)" aria-label="Details" translate="" translate-attr-aria-label="FM.DETAILS"><md-icon md-font-icon="icon-information-outline"></md-icon></md-button></td></tr></tbody></table>'), e.put("app/main/apps/mail/dialogs/compose/compose-dialog.html", '<md-dialog class="compose-dialog" aria-label="New Message"><form><md-toolbar class="md-accent md-hue-2"><div class="md-toolbar-tools" layout="row" layout-align="space-between center"><span class="title" translate="MAIL.NEW_MESSAGE">New Message</span><md-button class="md-icon-button" ng-click="vm.closeDialog()" aria-label="Close dialog" tranlate="" translate-aria-label="MAIL.CLOSE_DIALOG"><md-icon md-font-icon="icon-close"></md-icon></md-button></div></md-toolbar><md-dialog-content ms-scroll=""><md-input-container><label translate="MAIL.FROM">From</label> <input ng-model="vm.form.from" type="email" disabled=""></md-input-container><md-input-container class="to" ng-class="{\'hidden-cc\': vm.hiddenCC, \'hidden-bcc\': vm.hiddenBCC}"><label translate="MAIL.TO">To</label> <input ng-model="vm.form.to" type="email"><div class="cc-bcc" layout="row" layout-align="start center"><div class="show-cc" ng-show="vm.hiddenCC" ng-click="vm.hiddenCC = false">CC</div><div class="show-bcc" ng-show="vm.hiddenBCC" ng-click="vm.hiddenBCC = false">BCC</div></div></md-input-container><md-input-container ng-hide="vm.hiddenCC"><label translate="MAIL.CC">Cc</label> <input ng-model="vm.form.cc" type="email"></md-input-container><md-input-container ng-hide="vm.hiddenBCC"><label translate="MAIL.BCC">Bcc</label> <input ng-model="vm.form.bcc" type="t"></md-input-container><md-input-container><label translate="MAIL.SUBJECT">Subject</label> <input ng-model="vm.form.subject" type="text"></md-input-container><text-angular ng-model="vm.form.message"></text-angular><div class="attachment-list"><div class="attachment" layout="row" layout-align="space-between center"><div><span class="filename">attachment-2.doc</span> <span class="size">(12 Kb)</span></div><md-button class="md-icon-button" aria-label="Delete attachment" translate="" translate-attr-aria-label="MAIL.DELETE_ATTACHMENT"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div><div class="attachment" layout="row" layout-align="space-between center"><div><span class="filename">attachment-1.jpg</span> <span class="size">(350 Kb)</span></div><md-button class="md-icon-button" aria-label="Delete attachment" translate="" translate-attr-aria-label="MAIL.DELETE_ATTACHMENT"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div></div></md-dialog-content><div class="md-actions" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-button ng-click="vm.closeDialog()" class="send-button md-accent md-raised" aria-label="Send" translate="MAIL.SEND" translate-attr-aria-label="MAIL.SEND">SEND</md-button><md-button class="md-icon-button" aria-label="Attach file" translate-attr-aria-label="MAIL.ATTACH_FILE"><md-icon md-font-icon="icon-paperclip"></md-icon><md-tooltip><span translate="MAIL.ATTACH_FILE"></span></md-tooltip></md-button></div><div layout="row"><md-button class="md-icon-button" aria-label="Delete" translate-attr-aria-label="MAIL.DELETE"><md-icon md-font-icon="icon-delete"></md-icon><md-tooltip><span translate="MAIL.DELETE"></span></md-tooltip></md-button></div></div></form></md-dialog>'),
        e.put("app/main/apps/mail/sidenavs/main/main-sidenav.html", '<div class="header" layout="column" layout-align="space-between start"><div class="logo" layout="row" layout-align="start center"><span class="logo-icon"><md-icon md-font-icon="icon-email" class="icon"></md-icon></span> <span class="logo-text" translate="MAIL.MAILBOX">Mailbox</span></div><div class="account"><div class="title">John Doe</div><md-select class="account-selection simplified" placeholder="Mail Selection" ng-model="vm.selectedAccount"><md-option ng-repeat="(provider, address) in vm.accounts" value="{{provider}}">{{address}}</md-option></md-select></div></div><md-content ms-scroll="" class="content" flex=""><div class="compose-button"><md-button class="md-accent md-raised" aria-label="compose" ng-click="vm.composeDialog($event)" translate="MAIL.COMPOSE">COMPOSE</md-button></div><div class="navigation-simple" layout="column"><md-button class="item" aria-label="inbox"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-inbox" class="s16"></md-icon><span class="title" translate="MAIL.INBOX">Inbox</span></div></md-button><md-button class="item" aria-label="starred"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-star" class="s16"></md-icon><span class="title" flex="" translate="MAIL.STARRED">Starred</span></div></md-button><md-button class="item" aria-label="important"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-alert-circle" class="s16"></md-icon><span class="title" flex="" translate="MAIL.IMPORTANT">Important</span></div></md-button><md-button class="item" aria-label="sent"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-send" class="s16"></md-icon><span class="title" translate="MAIL.SENT">Sent</span></div></md-button><md-button class="item" aria-label="drafts"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-email-open" class="s16"></md-icon><span class="title" translate="MAIL.DRAFTS">Drafts</span></div></md-button><md-button class="item" aria-label="all mail"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-folder" class="s16"></md-icon><span class="title" translate="MAIL.ALL_MAIL">All Mail</span></div></md-button><md-button class="item" aria-label="spam"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-alert-octagon" class="s16"></md-icon><span class="title" translate="MAIL.SPAM">Spam</span></div></md-button><md-button class="item" aria-label="trash"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-delete" class="s16"></md-icon><span class="title" translate="MAIL.TRASH">Trash</span></div></md-button><div class="item subheader" translate="MAIL.LABELS">Labels</div><md-button class="item" aria-label="label notes"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-label" class="s16 green-fg"></md-icon><span class="title">Notes</span></div></md-button><md-button class="item" aria-label="label paypal"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-label" class="s16 orange-fg"></md-icon><span class="title">Paypal</span></div></md-button><md-button class="item" aria-label="label invoices"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-label" class="s16 blue-grey-fg"></md-icon><span class="title">Invoices</span></div></md-button><md-button class="item" aria-label="label amazon"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-label" class="s16 blue-fg"></md-icon><span class="title">Amazon</span></div></md-button><md-divider></md-divider><md-button class="item" aria-label="settings"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-cog" class="s16"></md-icon><span class="title" translate="MAIL.SETTINGS">Settings</span></div></md-button><md-button class="item" aria-label="help"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-help" class="s16"></md-icon><span class="title" translate="MAIL.HELP">Help</span></div></md-button></div></md-content>'), e.put("app/main/apps/mail/views/mail-list/mail-list.html", '<div class="mail-list-item {{mail.status}}" ng-repeat="mail in vm.inbox | filter: vm.search | filter: global.search" md-ink-ripple="" ng-click="vm.selectMail(mail)" ng-class="{\'starred\': mail.starred, \'selected\': vm.selectedMail === mail, \'checked\': vm.isChecked(mail)}"><div layout="row" layout-align="start center"><md-checkbox class="checkbox" ng-checked="vm.isChecked(mail)" ng-click="vm.toggleCheck(mail, $event)" aria-label="{{vm.isChecked(mail)? \'Uncheck\':\'check\'}}"></md-checkbox><div class="info" flex="" layout="column"><div class="name" layout="row" layout-align="start center"><img class="avatar" ng-if="mail.from.avatar" alt="{{mail.from.name}}" ng-src="{{mail.from.avatar}}"><div class="avatar" ng-if="!mail.from.avatar" ms-random-class="vm.colors">{{mail.from.name[0]}}</div><span class="text-truncate">{{mail.from.name}}</span><md-icon md-font-icon="icon-paperclip" class="has-attachment s16" ng-if="mail.hasAttachments"></md-icon></div><div class="subject text-truncate">{{mail.subject}}</div><div class="message">{{mail.message | htmlToPlaintext | limitTo:90}}{{mail.message.length > 90 ? \'...\' : \'\'}}</div></div><div layout="column" layout-align="space-between end"><div class="time">{{mail.time}}</div><md-button class="md-icon-button" ng-click="vm.toggleStarred(mail, $event)" aria-label="Toggle starred" translate="" translate-attr-toogle-starred="MAIL.TOGGLE_STARRED"><md-icon ng-if="mail.starred" md-font-icon="icon-star" class="amber-fg"></md-icon><md-icon ng-if="!mail.starred" md-font-icon="icon-star-outline"></md-icon></md-button></div></div></div>'), e.put("app/main/apps/mail/views/mail-read/mail-read.html", '<div class="mail-header" layout="row" layout-align="space-between center" layout-sm="column" layout-align-sm="space-between end"><div class="subject" flex="">{{vm.selectedMail.subject}}</div><div layout="row" layout-align="end center"><md-menu><md-button aria-label="More" class="md-icon-button" ng-click="$mdOpenMenu($event)" translate="" translate-aria-label="MAIL.MORE"><md-icon md-font-icon="icon-dots-vertical"></md-icon><md-tooltip><span translate="MAIL.MORE"></span></md-tooltip></md-button><md-menu-content width="3"><md-menu-item><md-button aria-label="Reply" translate-aria-label="MAIL.REPLY" ng-click="vm.replyDialog($event)"><md-icon md-font-icon="icon-reply"></md-icon><span translate="MAIL.REPLY">Reply</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Archive" translate-aria-label="MAIL.ARCHIVE"><md-icon md-font-icon="icon-archive"></md-icon><span translate="MAIL.ARCHIVE">Archive</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Spam" translate-aria-label="MAIL.SPAM"><md-icon md-font-icon="icon-alert-octagon"></md-icon><span translate="MAIL.SPAM">Spam</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Delete" translate-aria-label="MAIL.DELETE"><md-icon md-font-icon="icon-delete"></md-icon><span translate="MAIL.DELETE">Delete</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Mark as unread" translate-aria-label="MAIL.MARK_AS_UNREAD"><md-icon md-font-icon="icon-checkbox-blank-outline"></md-icon><span translate="MAIL.MARK_AS_UNREAD">Mark as unread</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Mark as important" translate-aria-label="MAIL.MARK_AS_IMPORTANT"><md-icon md-font-icon="icon-marker-check"></md-icon><span translate="MAIL.MARK_AS_IMPORTANT">Mark as important</span></md-button></md-menu-item><md-menu-item><md-button aria-label="Add label" translate-aria-label="MAIL.ADD_LABEL"><md-icon md-font-icon="icon-label"></md-icon><span translate="MAIL.ADD_LABEL">Add label</span></md-button></md-menu-item></md-menu-content></md-menu></div></div><div class="mail-content"><div class="info" layout="row" layout-align="space-between center" layout-sm="column"><div layout="row" layout-align="start center" layout-sm="column" layout-align-sm="center center"><div><img ng-if="vm.selectedMail.from.avatar" alt="{{vm.selectedMail.from.name}}" ng-src="{{vm.selectedMail.from.avatar}}" class="avatar"><div ng-if="!vm.selectedMail.from.avatar" class="avatar" ms-random-class="vm.colors">{{vm.selectedMail.from.name[0]}}</div></div><div layout="column" layout-align="start" layout-align-sm="center center"><div layout="row" layout-wrap="" layout-sm="column" layout-align-sm="center center"><div class="name">{{vm.selectedMail.from.name}}</div><div class="mail">&lt;{{vm.selectedMail.from.email}}&gt;</div></div><div layout="row" layout-align="start center"><div class="to" translate="MAIL.TO">to</div><div class="name">{{vm.selectedMail.to[0].name}}</div></div></div></div><div class="time text-nowrap">{{vm.selectedMail.time}}</div></div><div ng-bind-html="vm.selectedMail.message"></div></div><div ng-if="vm.selectedMail.attachments" class="attachments"><div class="title"><span translte="MAIL.ATTACHMENTS">Attachments</span> ({{vm.selectedMail.attachments.length}})</div><div class="attachment-list" layout-wrap="" layout="row"><div class="attachment" layout="column" ng-repeat="attachment in vm.selectedMail.attachments"><img class="preview" ng-src="{{attachment.preview}}"><div layout="column"><a href="#" class="md-accent-color link" translate="MAIL.VIEW">View</a> <a href="#" class="md-accent-color link" translate="MAIL.DOWNLOAD">Download</a><div class="size">({{attachment.size}})</div></div></div></div></div>'), e.put("app/main/apps/todo/sidenavs/main/main-sidenav.html", '<div class="header" layout="column" layout-align="space-between"><div class="logo" layout="row" layout-align="start center"><span class="logo-icon"><md-icon md-font-icon="icon-checkbox-marked" class="s24"></md-icon></span> <span class="logo-text" translate="TODO.TO_DO">To-Do</span></div><md-select class="project-selection simplified" ng-model="vm.selectedProject" placeholder="Select Project" translate="" translte-attr-placeholder="TODO.SELECT_PROJECT"><md-option ng-repeat="(project, title) in vm.projects" value="{{project}}">{{title}}</md-option></md-select></div><md-content class="content" flex="" ms-scroll=""><div class="add-task-button"><md-button class="md-accent md-raised" ng-click="vm.openTaskDialog($event)" aria-label="ADD TASK" translate="TODO.ADD_TASK" translate-attr-aria-label="TODO.ADD_TASK">ADD TASK</md-button></div><div class="navigation-simple" layout="column"><md-button class="item" aria-label="All Tasks" translate="" translate-attr-aria-label="TODO.ALL_TASKS" ng-class="{\'selected\':vm.showAllTasks}" ng-click="vm.resetFilters()"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-view-headline" class="s16"></md-icon><span class="title" translate="TODO.ALL_TASKS">All Tasks</span></div></md-button><div class="item subheader" translate="TODO.FILTERS">Filters</div><md-button class="item" aria-label="Starred" translate="" translate-attr-aria-label="TODO.STARRED" ng-class="{\'selected\':vm.taskFilters.starred}"><label layout="row" layout-align="start center"><input class="ng-hide" type="checkbox" ng-checked="vm.taskFilters.starred" ng-click="vm.toggleFilterWithEmpty(\'starred\')"><md-icon md-font-icon="icon-star" class="s16"></md-icon><span class="title" translate="TODO.STARRED">Starred</span></label></md-button><md-button class="item" aria-label="Priority" translate="" translate-attr-aria-label="TODO.PRIORITY" ng-class="{\'selected\':vm.taskFilters.important}"><label layout="row" layout-align="start center"><input class="ng-hide" type="checkbox" ng-checked="vm.taskFilters.important" ng-click="vm.toggleFilterWithEmpty(\'important\')"><md-icon md-font-icon="icon-alert-circle" class="s16"></md-icon><span class="title" translate="TODO.PRIORITY">Priority</span></label></md-button><md-button class="item" aria-label="Scheduled" translate="" translate-attr-aria-label="TODO.SCHEDULED" ng-class="{\'selected\':vm.taskFilters.dueDate}"><label layout="row" layout-align="start center"><input class="ng-hide" type="checkbox" ng-checked="vm.taskFilters.dueDate" ng-click="vm.toggleFilterWithEmpty(\'dueDate\')"><md-icon md-font-icon="icon-clock" class="s16"></md-icon><span class="title" translate="TODO.SCHEDULED">Scheduled</span></label></md-button><md-button class="item" aria-label="Today" translate="" translate-attr-aria-label="TODO.TODAY" ng-class="{\'selected\':vm.taskFilters.startDate}"><label layout="row" layout-align="start center"><input class="ng-hide" type="checkbox" ng-checked="vm.taskFilters.startDate" ng-click="vm.toggleFilterWithEmpty(\'startDate\')"><md-icon md-font-icon="icon-calendar-today" class="s16"></md-icon><span class="title" translate="TODO.TODAY">Today</span></label></md-button><md-button class="item" aria-label="Done" translate="" translate-attr-aria-label="TODO.DONE" ng-class="{\'selected\':vm.taskFilters.completed}"><label layout="row" layout-align="start center"><input class="ng-hide" type="checkbox" ng-checked="vm.taskFilters.completed" ng-click="vm.toggleFilterWithEmpty(\'completed\')"><md-icon md-font-icon="icon-check" class="s16"></md-icon><span class="title" translate="TODO.DONE">Done</span></label></md-button><md-button class="item" aria-label="Deleted" translate="" translate-attr-aria-label="TODO.DELETED" ng-class="{\'selected\':vm.taskFilters.deleted}"><label layout="row" layout-align="start center"><input class="ng-hide" type="checkbox" ng-checked="vm.taskFilters.deleted" ng-click="vm.toggleFilter(\'deleted\')"><md-icon md-font-icon="icon-delete" class="s16"></md-icon><span class="title" translate="TODO.DELETED">Deleted</span></label></md-button><div class="item subheader" translate="TODO.TAGS">Tags</div><md-button class="tag item" aria-label="tag {{tag.label}}" ng-repeat="tag in vm.tags" ng-class="{\'selected\':vm.isTagFilterExists(tag)}"><label layout="row" layout-align="start center"><input class="ng-hide" type="checkbox" ng-checked="vm.isTagFilterExists(tag)" ng-click="vm.toggleTagFilter(tag)"><md-icon md-font-icon="icon-label" class="s16" ng-style="{\'color\' : tag.color}"></md-icon><span class="title">{{tag.label}}</span></label></md-button></div></md-content>'), e.put("app/main/apps/todo/dialogs/task/task-dialog.html", '<md-dialog class="task-dialog" aria-label="New Task"><form name="taskForm" novalidate=""><md-toolbar class="md-accent md-hue-2"><div class="md-toolbar-tools" layout="row" layout-align="space-between"><span class="title">{{vm.title}}</span><md-button class="md-icon-button" ng-click="vm.closeDialog()"><md-icon md-font-icon="icon-close" aria-label="Close dialog"></md-icon></md-button></div></md-toolbar><md-dialog-content ms-scroll=""><md-input-container><label translate="TODO.TITLE">Title</label> <input required="" ng-model="vm.task.title"></md-input-container><div class="tags"><label translate="TODO.TAGS">Tags</label><md-chips ng-model="vm.task.tags" md-on-append="vm.newTag($chip)"><md-chip-template><span ng-if="$chip.color" class="color" ng-style="{\'background-color\':$chip.color}"></span> <span>{{$chip.label}}</span></md-chip-template></md-chips></div><div layout="row"><div flex="" class="date-container"><label translate="TODO.START_DATE">Start Date</label><md-datepicker flex="" ng-model="vm.task.startDate" md-placeholder="Start Date"></md-datepicker></div><div flex="" class="date-container"><label translate="TODO.DUE_DATE">Due Date</label><md-datepicker flex="" ng-model="vm.task.dueDate" md-placeholder="Due Date"></md-datepicker></div></div><div class="notes"><label translate="TODO.NOTES">Notes</label><text-angular ng-model="vm.task.notes"></text-angular></div><div class="attachment-list"><div class="attachment" layout="row" layout-align="space-between center"><div><span class="filename">attachment-2.doc</span> <span class="size">(12 Kb)</span></div><md-button class="md-icon-button"><md-icon md-font-icon="icon-close" aria-label="delete attachment" class="s16"></md-icon></md-button></div><div class="attachment" layout="row" layout-align="space-between center"><div><span class="filename">attachment-1.jpg</span> <span class="size">(350 Kb)</span></div><md-button class="md-icon-button" aria-label="Delete attachment" translate="" translate-attr-aria-label="TODO.DELETE_ATTACHMENT"><md-icon md-font-icon="icon-close" class="s16"></md-icon></md-button></div></div></md-dialog-content><div class="md-actions mail-form-actions" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-button type="submit" ng-disabled="taskForm.$invalid" ng-if="!vm.newTask" ng-click="vm.saveTask()" class="send-button md-accent md-raised" aria-label="SAVE" translate="TODO.SAVE" translate-attr-aria-label="TODO.SAVE">SAVE</md-button><md-button type="submit" ng-disabled="taskForm.$invalid" ng-if="vm.newTask" ng-click="vm.addNewTask()" class="send-button md-accent md-raised" aria-label="Add Task" translate="TODO.ADD_TASK" translate-attr-aria-label="TODO.ADD_TASK">ADD TASK</md-button><md-button class="md-icon-button" aria-label="Attach file" translate="" translate-attr-aria-label="TODO.ATTACH_FILE"><md-icon md-font-icon="icon-paperclip"></md-icon></md-button><md-button class="md-icon-button" aria-label="Insert picture" translate="" translate-attr-aria-label="TODO.INSERT_PICTURE"><md-icon md-font-icon="icon-file-image-box"></md-icon></md-button></div><div layout="row"><md-button class="md-icon-button" ng-click="vm.deleteTask($event)" aria-label="Delete" translate="" translate-attr-aria-label="TODO.DELETE"><md-icon md-font-icon="icon-delete"></md-icon><md-tooltip><span translate="TODO.DELETE">DELETE</span></md-tooltip></md-button></div></div></form></md-dialog>'), e.put("app/main/apps/todo/views/todo-list/todo-list.html", '<div ng-sortable="vm.sortableOptions" ng-class="{\'sortable\': vm.taskOrder === \'\'}"><div class="todo-item" md-ink-ripple="" layout="row" layout-align="start center" ng-click="vm.openTaskDialog($event, task)" ng-repeat="task in vm.tasks | orderBy:vm.taskOrder:vm.taskOrderReverse | filter:global.search | filter:vm.taskFilters.search | filterByTags:vm.taskFilters.tags | filter:{\'completed\': vm.taskFilters.completed} | filter:{\'deleted\': vm.taskFilters.deleted} | filter:{\'important\': vm.taskFilters.important} | filter:{\'starred\':vm.taskFilters.starred} | filter:vm.filterByStartDate | filter:vm.filterByDueDate track by $index" ng-class="{\'starred\': task.starred, \'selected\': task.selected, \'completed\': task.completed}"><div class="handle" ng-click="vm.preventDefault($event)"><md-icon md-font-icon="icon-drag-vertical" class="icon"></md-icon></div><md-checkbox class="checkbox" ng-checked="task.completed" ng-click="vm.toggleCompleted(task, $event)" aria-label="{{task.completed ? \'Not completed\' : \'Completed\'}}"></md-checkbox><div layout="row" layout-align="start center" flex=""><div class="info" flex=""><div class="title">{{task.title}}</div><div class="notes">{{task.notes}}</div><div class="tags" layout="row" layout-align="start center"><div class="tag" layout="row" layout-align="start center" data-ng-repeat="tag in task.tags"><div class="tag-color" ng-style="{\'background-color\': tag.color}"></div><div class="tag-label">{{tag.label}}</div></div></div></div><div class="buttons" layout="row" layout-align="start center"><md-icon md-font-icon="icon-alert-circle" class="is-important red-600-fg" ng-if="task.important"></md-icon><md-icon md-font-icon="icon-star" class="is-starred amber-600-fg" ng-if="task.starred"></md-icon><md-menu><md-button class="md-icon-button" aria-label="More" translate="" translate-attr-aria-label="TODO.MORE"><md-icon md-font-icon="icon-dots-vertical" ng-click="$mdOpenMenu($event)"></md-icon></md-button><md-menu-content width="3"><md-menu-item><md-button ng-click="task.completed = !task.completed" aria-label="Toggle done" translate-attr-aria-label="TODO.TOGGLE_DONE"><md-icon ng-class="task.completed === false ? \'grey-fg\' : \'blue-fg\'" md-font-icon="icon-checkbox-marked-circle" class="s18"></md-icon><span ng-show="!task.completed" translate="TODO.MARK_AS_DONE">Mark as done</span> <span ng-show="task.completed" translate="TODO.MARK_AS_UNDONE">Mark as undone</span></md-button></md-menu-item><md-menu-item><md-button ng-click="task.important = !task.important" aria-label="Toggle important" translate-attr-aria-label="TODO.TOGGLE_IMPORTANT"><md-icon ng-class="task.important === false ? \'grey-fg\' : \'red-600-fg\'" md-font-icon="icon-alert-circle" class="s18"></md-icon><span ng-show="!task.important" translate="TODO.MARK_AS_IMPORTANT">Mark as important</span> <span ng-show="task.important" translate="TODO.REMOVE_IMPORTANT">Remove important</span></md-button></md-menu-item><md-menu-item><md-button ng-click="task.starred = !task.starred" aria-label="Toggle star" translate-attr-aria-label="TODO.TOGGLE_STAR"><md-icon ng-class="task.starred === false ? \'grey-fg\' : \'amber-600-fg\'" md-font-icon="icon-star" class="s18"></md-icon><span ng-show="!task.starred" translate="TODO.ADD_STAR">Add star</span> <span ng-show="task.starred" translate="TODO.REMOVE_STAR">Remove star</span></md-button></md-menu-item></md-menu-content></md-menu></div></div></div></div>'), e.put("app/main/components/elements/inputs/checkbox/checkbox.html", '<div id="checkbox" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">INPUTS</span></div><div class="title">Checkbox</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.checkbox/directive/mdCheckbox" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>The checkbox directive is used like the normal <a href="https://docs.angularjs.org/api/ng/input/input%5Bcheckbox%5D" target="_blank">angular checkbox</a>.</p><p>As per the <a href="http://www.google.com/design/spec/style/color.html#color-ui-color-application" target="_blank">material design spec</a> the checkbox is in the accent color by default. The primary color palette may be used with the <code>md-primary</code> class.</p></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="column" layout-align="center center"><md-checkbox ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-checkbox ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="column" layout-align="center center"><md-checkbox class="md-primary" ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-checkbox class="md-primary" ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="column" layout-align="center center"><md-checkbox class="md-warn" ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-checkbox class="md-warn" ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">No Ink</div><div layout="column" layout-align="center center"><md-checkbox md-no-ink="" ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-checkbox md-no-ink="" ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Disabled</div><div layout="column" layout-align="center center"><md-checkbox ng-disabled="true" ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-checkbox ng-disabled="true" ng-model="vm.checkboxValue" aria-label="Checkbox">Checkbox Value: {{vm.checkboxValue}}</md-checkbox></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ng-model</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Assignable angular expression to data-bind to.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">name <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Property name of the form under which the control is published.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-true-value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>The value to which the expression should be set when selected.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-false-value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>The value to which the expression should be set when not selected.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-change <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Angular expression to be executed when input changes due to user interaction with the input element.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-ink <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Use of attribute indicates use of ripple ink effects</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">aria-label <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Adds label to checkbox for accessibility. Defaults to checkbox\'s text. If no default text is found, a warning will be logged.</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/inputs/chips/chips.html", '<div id="chips" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">INPUTS</span></div><div class="title">Chips / Tags</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.chips/directive/mdChip" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p><code>&lt;md-chips&gt;</code> is an input component for building lists of strings or objects. The list items are displayed as \'chips\'. This component can make use of an <code>&lt;input&gt;</code> element or an <code>&lt;md-autocomplete&gt;</code> element.</p><p><strong>Custom <code>&lt;md-chip-template&gt;</code> template</strong> A custom template may be provided to render the content of each chip. This is achieved by specifying an <code>&lt;md-chip-template&gt;</code> element as a child of <code>&lt;md-chips&gt;</code>. Note: Any attributes on <code>&lt;md-chip-template&gt;</code> will be dropped as only the innerHTML is used for the chip template. The variables <code>$chip</code> and <code>$index</code> are available in the scope of <code>&lt;md-chip-template&gt;</code>, representing the chip object and its index in the list of chips, respectively. To override the chip delete control, include an element (ideally a button) with the attribute <code>md-chip-remove</code>. A click listener to remove the chip will be added automatically. The element is also placed as a sibling to the chip content (on which there are also click listeners) to avoid a nested ng-click situation.</p><p><span style="font-size:.8em;text-align:center">Warning: This component is a WORK IN PROGRESS. If you use it now, it will probably break on you in the future.</span></p></div><div class="md-title">Basic Usage</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><md-chips ng-model="vm.tags" placeholder="Enter a tag" delete-button-label="Remove Tag" delete-hint="Press delete to remove tag" secondary-placeholder="+Tag"></md-chips></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-chips ng-model="vm.tags" placeholder="Enter a tag" delete-button-label="Remove Tag" delete-hint="Press delete to remove tag" secondary-placeholder="+Tag"></md-chips></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ng-model</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code><code class="api-type label type-hint type-hint-object">object</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code><code class="api-type label type-hint type-hint-object">object</code></td><td class="description"><p>A model to bind the list of items to</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;"><b>* md-on-append</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>An expression expected to convert the input string into an object when adding a chip.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">placeholder <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Placeholder text that will be forwarded to the input.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">secondary-placeholder <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Placeholder text that will be forwarded to the input, displayed when there is at least on item in the list</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">readonly <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Disables list manipulation (deleting or adding list items), hiding the input and delete buttons</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">delete-hint <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>A string read by screen readers instructing users that pressing the delete key will remove the chip.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">delete-button-label <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>A label for the delete button. Also hidden and read by screen readers.</p></td></tr></tbody></table></div></div></div>'),
        e.put("app/main/components/elements/inputs/autocomplete/autocomplete.html", '<div id="autocomplete" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">INPUTS</span></div><div class="title">Autocomplete</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/demo/material.components.autocomplete" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p><code>&lt;md-autocomplete&gt;</code> is a special input component with a drop-down of all possible matches to a custom query. This component allows you to provide real-time suggestions as the user types in the input area.</p><p>To start, you will need to specify the required parameters and provide a template for your results. The content inside <code>md-autocomplete</code> will be treated as a template.</p><p>In more complex cases, you may want to include other content such as a message to display when no matches were found. You can do this by wrapping your template in <code>md-item-template</code> and adding a tag for <code>md-not-found</code>. An example of this is shown below.</p><h3 id="validation">Validation</h3><p>You can use <code>ng-messages</code> to include validation the same way that you would normally validate; however, if you want to replicate a standard input with a floating label, you will have to do the following:</p><ul><li>Make sure that your template is wrapped in <code>md-item-template</code></li><li>Add your <code>ng-messages</code> code inside of <code>md-autocomplete</code></li><li>Add your validation properties to <code>md-autocomplete</code> (ie. <code>required</code>)</li><li>Add a <code>name</code> to <code>md-autocomplete</code> (to be used on the generated <code>input</code>)</li></ul><p>There is an example below of how this should look.</p></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Placeholder / No Float</div><div flex="" layout="row" layout-align="center center"><form flex="" ng-submit="$event.preventDefault()"><md-autocomplete md-selected-item="vm.selectedItem" md-search-text-change="vm.searchTextChange(vm.searchText)" md-search-text="vm.searchText" md-selected-item-change="vm.selectedItemChange(item)" md-items="item in vm.querySearch(vm.searchText)" md-item-text="item.display" md-min-length="0" placeholder="What is your favorite US state?"><md-item-template><span md-highlight-text="vm.searchText" md-highlight-flags="^i">{{item.display}}</span></md-item-template><md-not-found>No matches found for "{{vm.searchText}}".</md-not-found></md-autocomplete></form></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-autocomplete md-selected-item="vm.selectedItem" md-search-text-change="vm.searchTextChange(vm.searchText)" md-search-text="vm.searchText" md-selected-item-change="vm.selectedItemChange(item)" md-items="item in vm.querySearch(vm.searchText)" md-item-text="item.display" md-min-length="0" placeholder="What is your favorite US state?"><md-item-template><span md-highlight-text="vm.searchText" md-highlight-flags="^i">{{item.display}}</span></md-item-template><md-not-found>No matches found for "{{vm.searchText}}".</md-not-found></md-autocomplete></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">// list of `state` value/display objects vm.states = loadAll(); vm.querySearch = querySearch; vm.selectedItemChange = selectedItemChange; vm.searchTextChange = searchTextChange; // ****************************** // Internal methods // ****************************** /** * Search for states... * remote dataservice call. */ function querySearch(query) { var results = query ? vm.states.filter(createFilterFor(query)) : vm.states; return results; } function searchTextChange(text) { $log.info(\'Text changed to \' + text); } function selectedItemChange(item) { $log.info(\'Item changed to \' + JSON.stringify(item)); } /** * Build `states` list of key/value pairs */ function loadAll() { var allStates = \'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, \' + \'Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, \' + \'Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, \' + \'Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, \' + \'North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, \' + \'South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, \' + \'Wisconsin, Wyoming\'; return allStates.split(/, +/g).map(function (state) { return { value : state.toLowerCase(), display: state }; }); } /** * Create filter function for a query string */ function createFilterFor(query) { var lowercaseQuery = angular.lowercase(query); return function filterFn(state) { return (state.value.indexOf(lowercaseQuery) === 0); }; }</hljs></md-tab></md-tabs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Floating Label</div><div flex="" layout="row" layout-align="center center"><form flex="" ng-submit="$event.preventDefault()"><md-autocomplete md-selected-item="vm.selectedItem2" md-search-text-change="vm.searchTextChange(vm.searchText2)" md-search-text="vm.searchText2" md-selected-item-change="vm.selectedItemChange(item)" md-items="item in vm.querySearch(vm.searchText2)" md-item-text="item.display" md-min-length="0" md-floating-label="What is your favorite US state?"><md-item-template><span md-highlight-text="vm.searchText2" md-highlight-flags="^i">{{item.display}}</span></md-item-template><md-not-found>No matches found for "{{vm.searchText2}}".</md-not-found></md-autocomplete></form></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-autocomplete md-selected-item="vm.selectedItem2" md-search-text-change="vm.searchTextChange(vm.searchText2)" md-search-text="vm.searchText2" md-selected-item-change="vm.selectedItemChange(item)" md-items="item in vm.querySearch(vm.searchText2)" md-item-text="item.display" md-min-length="0" md-floating-label="What is your favorite US state?"><md-item-template><span md-highlight-text="vm.searchText2" md-highlight-flags="^i">{{item.display}}</span></md-item-template><md-not-found>No matches found for "{{vm.searchText2}}".</md-not-found></md-autocomplete></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">// list of `state` value/display objects vm.states = loadAll(); vm.querySearch = querySearch; vm.selectedItemChange = selectedItemChange; vm.searchTextChange = searchTextChange; // ****************************** // Internal methods // ****************************** /** * Search for states... * remote dataservice call. */ function querySearch(query) { var results = query ? vm.states.filter(createFilterFor(query)) : vm.states; return results; } function searchTextChange(text) { $log.info(\'Text changed to \' + text); } function selectedItemChange(item) { $log.info(\'Item changed to \' + JSON.stringify(item)); } /** * Build `states` list of key/value pairs */ function loadAll() { var allStates = \'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, \' + \'Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, \' + \'Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, \' + \'Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, \' + \'North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, \' + \'South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia, \' + \'Wisconsin, Wyoming\'; return allStates.split(/, +/g).map(function (state) { return { value : state.toLowerCase(), display: state }; }); } /** * Create filter function for a query string */ function createFilterFor(query) { var lowercaseQuery = angular.lowercase(query); return function filterFn(state) { return (state.value.indexOf(lowercaseQuery) === 0); }; }</hljs></md-tab></md-tabs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ng-model</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Assignable angular expression to data-bind to.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">name <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Property name of the form under which the control is published.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-true-value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>The value to which the expression should be set when selected.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-false-value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>The value to which the expression should be set when not selected.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-change <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Angular expression to be executed when input changes due to user interaction with the input element.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-ink <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Use of attribute indicates use of ripple ink effects</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">aria-label <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Adds label to checkbox for accessibility. Defaults to checkbox\'s text. If no default text is found, a warning will be logged.</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/inputs/fields/fields.html", '<div id="fields" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">INPUTS</span></div><div class="title">Fields</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.input/directive/mdInput" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p><code>&lt;md-input-container&gt;</code> is the parent of any input or textarea element.</p><p>Input and textarea elements will not behave properly unless the md-input-container parent is provided.</p><p>Use the <code>&lt;input&gt;</code> or the <code>&lt;textarea&gt;</code> as a child of an <code>&lt;md-input-container&gt;</code>.</p></div><div class="md-title">Label / Float</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Text</div><div layout="column" layout-align="center center"><md-input-container><label>Title</label> <input ng-model="vm.user.title"></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container><label>Title</label> <input ng-model="vm.user.title"></md-input-container></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Email</div><div layout="column" layout-align="center center"><md-input-container><label>Email</label> <input ng-model="vm.user.email" type="email"></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container><label>Email</label> <input ng-model="vm.user.email" type="email"></md-input-container></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Textarea</div><div layout="column" layout-align="center center"><md-input-container flex="" layout-fill=""><label>Biography</label> <textarea ng-model="vm.user.biography" columns="1" md-maxlength="150"></textarea></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container flex=""><label>Biography</label> <textarea ng-model="vm.user.biography" columns="1" md-maxlength="150"></textarea></md-input-container></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Number</div><div layout="column" layout-align="center center"><md-input-container><label>Hourly Rate ($)</label> <input type="number" step="any" name="rate" ng-model="vm.user.rate" min="0" max="4999"></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container><label>Hourly Rate ($)</label> <input type="number" step="any" name="rate" ng-model="vm.user.rate" min="0" max="4999"></md-input-container></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Required</div><div layout="column" layout-align="center center"><md-input-container><label>Hourly Rate ($)</label> <input required="" type="number" step="any" name="rate" ng-model="vm.user.rate" min="0" max="4999"></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container><label>Hourly Rate ($)</label> <input required="" type="number" step="any" name="rate" ng-model="vm.user.rate" min="0" max="4999"></md-input-container></hljs></div></div></div><div class="md-title">Placeholder / No Float</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Text</div><div layout="column" layout-align="center center"><md-input-container md-no-float=""><input placeholder="Title" ng-model="vm.user.title"></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container md-no-float=""><input placeholder="Title" ng-model="vm.user.title"></md-input-container></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Email</div><div layout="column" layout-align="center center"><md-input-container md-no-float=""><input placeholder="Email" ng-model="vm.user.email" type="email"></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container md-no-float=""><input placeholder="Email" ng-model="vm.user.email" type="email"></md-input-container></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Textarea</div><div layout="column" layout-align="center center"><md-input-container md-no-float=""><textarea placeholder="Biography" ng-model="vm.user.biography" columns="1" md-maxlength="150"></textarea></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container md-no-float=""><textarea placeholder="Biography" ng-model="vm.user.biography" columns="1" md-maxlength="150"></textarea></md-input-container></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Number</div><div layout="column" layout-align="center center"><md-input-container md-no-float=""><input placeholder="Hourly Rate ($)" type="number" step="any" name="rate" ng-model="vm.user.rate" min="0" max="4999"></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container md-no-float=""><input placeholder="Hourly Rate ($)" type="number" step="any" name="rate" ng-model="vm.user.rate" min="0" max="4999"></md-input-container></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Required</div><div layout="column" layout-align="center center"><md-input-container md-no-float=""><input required="" placeholder="Hourly Rate ($)" type="number" step="any" name="rate" ng-model="vm.user.rate" min="0" max="4999"></md-input-container></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-input-container md-no-float=""><input required="" placeholder="Hourly Rate ($)" type="number" step="any" name="rate" ng-model="vm.user.rate" min="0" max="4999"></md-input-container></hljs></div></div></div><div class="md-title">Attributes (md-input-container)</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">md-is-error <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>When the given expression evaluates to true, the input container will go into error state. Defaults to erroring if the input has been touched and is invalid.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-float <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>When present, placeholders will not be converted to floating labels</p></td></tr></tbody></table></div><div class="md-title">Attributes (md-input)</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">md-maxlength <span hide="" show-sm=""><code class="api-type label type-hint type-hint-number">number</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-number">number</code></td><td class="description"><p>The maximum number of characters allowed in this input. If this is specified, a character counter will be shown underneath the input.<br><br>The purpose of <strong><code>md-maxlength</code></strong> is exactly to show the max length counter text. If you don\'t want the counter text and only need "plain" validation, you can use the "simple" <code>ng-maxlength</code> or maxlength attributes.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">aria-label <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Aria-label is required when no label is present. A warning message will be logged in the console if not present.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">placeholder <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>An alternative approach to using aria-label when the label is not present. The placeholder text is copied to the aria-label attribute.</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/inputs/radio/radio.html", '<div id="radio" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">INPUTS</span></div><div class="title">Radio</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.radioButton/directive/mdRadioButton" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="md-title">Radio Group</div><div class="description"><div class="api-profile-description"><p>The <code>&lt;md-radio-group&gt;</code> directive identifies a grouping container for the 1..n grouped radio buttons; specified using nested <code>&lt;md-radio-button&gt;</code> tags.</p><p>As per the <a href="http://www.google.com/design/spec/style/color.html#color-ui-color-application">material design spec</a> the radio button is in the accent color by default. The primary color palette may be used with the <code>md-primary</code> class.</p><p>Note: <code>&lt;md-radio-group&gt;</code> and <code>&lt;md-radio-button&gt;</code> handle tabindex differently than the native <code>&lt;input type=\'radio\'&gt;</code> controls. Whereas the native controls force the user to tab through all the radio buttons, <code>&lt;md-radio-group&gt;</code> is focusable, and by default the <code>&lt;md-radio-button&gt;</code>s are not.</p></div></div><div class="md-title">Radio Button</div><div class="description"><p>The <code>&lt;md-radio-button&gt;</code>directive is the child directive required to be used within <code>&lt;md-radio-group&gt;</code> elements.</p><p>While similar to the <code>&lt;input type="radio" ng-model="" value=""&gt;</code> directive, the <code>&lt;md-radio-button&gt;</code> directive provides ink effects, ARIA support, and supports use within named radio groups.</p></div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="column" layout-align="center center"><div>Selected Value: <span class="radioValue">{{vm.groupValue}}</span></div><md-radio-group ng-model="vm.groupValue"><md-radio-button value="Apple">Apple</md-radio-button><md-radio-button value="Banana">Banana</md-radio-button><md-radio-button value="Mango">Mango</md-radio-button></md-radio-group></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-radio-group ng-model="vm.groupValue"><md-radio-button value="Apple">Apple</md-radio-button><md-radio-button value="Banana">Banana</md-radio-button><md-radio-button value="Mango">Mango</md-radio-button></md-radio-group></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="column" layout-align="center center"><div>Selected Value: <span class="radioValue">{{vm.groupValue}}</span></div><md-radio-group ng-model="vm.groupValue"><md-radio-button value="Apple" class="md-primary">Apple</md-radio-button><md-radio-button value="Banana" class="md-primary">Banana</md-radio-button><md-radio-button value="Mango" class="md-primary">Mango</md-radio-button></md-radio-group></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-radio-group ng-model="vm.groupValue"><md-radio-button value="Apple" class="md-primary">Apple</md-radio-button><md-radio-button value="Banana" class="md-primary">Banana</md-radio-button><md-radio-button value="Mango" class="md-primary">Mango</md-radio-button></md-radio-group></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="column" layout-align="center center"><div>Selected Value: <span class="radioValue">{{vm.groupValue}}</span></div><md-radio-group ng-model="vm.groupValue"><md-radio-button value="Apple" class="md-warn">Apple</md-radio-button><md-radio-button value="Banana" class="md-warn">Banana</md-radio-button><md-radio-button value="Mango" class="md-warn">Mango</md-radio-button></md-radio-group></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-radio-group ng-model="vm.groupValue"><md-radio-button value="Apple" class="md-warn">Apple</md-radio-button><md-radio-button value="Banana" class="md-warn">Banana</md-radio-button><md-radio-button value="Mango" class="md-warn">Mango</md-radio-button></md-radio-group></hljs></div></div></div><div class="md-title">Radio Group Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ng-model</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Assignable angular expression to data-bind to.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-ink <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Use of attribute indicates flag to disable ink ripple effects.</p></td></tr></tbody></table></div><div class="md-title">Radio Button Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ngModel</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Assignable angular expression to data-bind to.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ngValue</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Angular expression which sets the value to which the expression should be set when selected.*</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;"><b>* value</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>The value to which the expression should be set when selected.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ngChange <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Angular expression to be executed when input changes due to user interaction with the input element.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">name <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Property name of the form under which the control is published.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">aria-label <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Adds label to radio button for accessibility. Defaults to radio button\'s text. If no text content is available, a warning will be logged.</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/inputs/select/select.html", '<div id="select" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">INPUTS</span></div><div class="title">Select</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.select/directive/mdSelect" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description">Displays a select box, bound to an ng-model.</div><div class="md-title">With a placeholder (label and aria-label are added dynamically)</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Placeholder</div><div flex="" layout="row" layout-align="center center"><md-select placeholder="State" ng-model="vm.userState"><md-option ng-repeat="state in vm.states" value="{{state.abbrev}}">{{state.abbrev}}</md-option></md-select></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-select placeholder="State" ng-model="vm.userState"><md-select-label>Select a state</md-select-label><md-option ng-repeat="state in vm.states" value="{{state.abbrev}}">{{state.abbrev}}</md-option></md-select></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">angular.controller(\'AppCtrl\', function () { var vm = this; vm.userState = \'\'; vm.states = (\'AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY\') .split(\' \').map(function (state) { return {abbrev: state}; }); });</hljs></md-tab></md-tabs></div></div></div><div class="md-title">With an explicit label</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview" layout="column"><div class="md-caption">Label</div><div flex="" layout="row" layout-align="center center"><md-select placeholder="State" ng-model="vm.userState"><md-select-label>Select a state</md-select-label><md-option ng-repeat="state in vm.states" value="{{state.abbrev}}">{{state.abbrev}}</md-option></md-select></div></div><div flex="" class="source-code"><md-tabs><md-tab label="HTML"><hljs lang="html" ms-scroll=""><md-select placeholder="State" ng-model="vm.userState"><md-select-label>Select a state</md-select-label><md-option ng-repeat="state in vm.states" value="{{state.abbrev}}">{{state.abbrev}}</md-option></md-select></hljs></md-tab><md-tab label="JS"><hljs lang="js" ms-scroll="">angular.controller(\'AppCtrl\', function () { var vm = this; vm.userState = \'\'; vm.states = (\'AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI WY\') .split(\' \').map(function (state) { return {abbrev: state}; }); });</hljs></md-tab></md-tabs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ng-model</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>The model!</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-on-close <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>expression to be evaluated when the select is closed</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">multiple <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Whether it\'s multiple.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">placeholder <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Placeholder hint text.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">aria-label <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Optional label for accessibility. Only necessary if no placeholder or explicit label is present.</p></td></tr></tbody></table></div></div></div>'),
        e.put("app/main/components/elements/inputs/slider/slider.html", '<div id="slider" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">INPUTS</span></div><div class="title">Slider</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.slider/directive/mdSlider" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="description"><p>The <code>&lt;md-slider&gt;</code> component allows the user to choose from a range of values.</p><p>As per the <a href="http://www.google.com/design/spec/style/color.html#color-ui-color-application">material design spec</a> the slider is in the accent color by default. The primary color palette may be used with the <code>md-primary</code> class.</p><p>It has two modes: \'normal\' mode, where the user slides between a wide range of values, and \'discrete\' mode, where the user slides between only a few select values.</p><p>To enable discrete mode, add the <code>md-discrete</code> attribute to a slider, and use the <code>step</code> attribute to change the distance between values the user is allowed to pick.</p></div><div class="md-title">Normal Mode</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored (default)</div><div layout="row" layout-align="center center"><md-slider flex="" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-slider flex="" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-slider flex="" class="md-primary" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-slider flex="" class="md-primary" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-slider flex="" class="md-warn" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-slider flex="" class="md-warn" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Disabled</div><div layout="row" layout-align="center center"><md-slider ng-disabled="true" flex="" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-slider ng-disabled="true" flex="" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></hljs></div></div></div><div class="md-title">Discrete Mode</div><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored (default)</div><div layout="row" layout-align="center center"><md-slider md-discrete="" flex="" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-slider md-discrete="" flex="" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-slider md-discrete="" flex="" class="md-primary" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-slider md-discrete="" flex="" class="md-primary" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-slider md-discrete="" flex="" class="md-warn" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-slider md-discrete="" flex="" class="md-warn" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Disabled</div><div layout="row" layout-align="center center"><md-slider md-discrete="" ng-disabled="true" flex="" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-slider md-discrete="" ng-disabled="true" flex="" min="0" max="255" ng-model="vm.sliderValue" aria-label="slider"></md-slider><input flex="15" type="number" ng-model="vm.sliderValue" aria-label="red" aria-controls="red-slider"></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;">md-discrete <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Whether to enable discrete mode.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">step <span hide="" show-sm=""><code class="api-type label type-hint type-hint-number">number</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-number">number</code></td><td class="description"><p>The distance between values the user is allowed to pick. Default 1.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">min <span hide="" show-sm=""><code class="api-type label type-hint type-hint-number">number</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-number">number</code></td><td class="description"><p>The minimum value the user is allowed to pick. Default 0.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">max <span hide="" show-sm=""><code class="api-type label type-hint type-hint-number">number</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-number">number</code></td><td class="description"><p>The maximum value the user is allowed to pick. Default 100.</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/components/elements/inputs/switch/switch.html", '<div id="switch" class="page-layout simple fullwidth doc-page element-doc-page"><div class="header md-accent-bg" layout="row" layout-align="space-between" layout-sm="column"><div layout="column" layout-align="center start"><div class="breadcrumb" layout="row" layout-align="start center"><md-icon md-font-icon="icon-home" class="s16"></md-icon><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">COMPONENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">ELEMENTS</span><md-icon md-font-icon="icon-chevron-right" class="s16 separator"></md-icon><span class="parent">INPUTS</span></div><div class="title">Switch</div></div><div layout="row" layout-align="start center"><md-button class="md-raised reference-button" href="https://material.angularjs.org/latest/#/api/material.components.switch/directive/mdSwitch" target="_blank"><md-icon md-font-icon="icon-link"></md-icon><span>Reference</span></md-button></div></div><div class="content"><div class="card md-whiteframe-4dp" layout="column"><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Accent Colored</div><div layout="row" layout-align="center center"><md-switch ng-model="vm.switch" aria-label="Switch">Switch: {{vm.switch}}</md-switch></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-switch ng-model="vm.switch" aria-label="Switch">Switch: {{vm.switch}}</md-switch></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Primary Colored</div><div layout="row" layout-align="center center"><md-switch ng-model="vm.switch" class="md-primary" aria-label="Switch">Switch: {{vm.switch}}</md-switch></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-switch ng-model="vm.switch" class="md-primary" aria-label="Switch">Switch: {{vm.switch}}</md-switch></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Warn Colored</div><div layout="row" layout-align="center center"><md-switch ng-model="vm.switch" class="md-warn" aria-label="Switch">Switch: {{vm.switch}}</md-switch></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-switch ng-model="vm.switch" class="md-warn" aria-label="Switch">Switch: {{vm.switch}}</md-switch></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">Disabled</div><div layout="column" layout-align="center center"><md-switch ng-disabled="true" ng-model="vm.switch" aria-label="Switch">Switch: {{vm.switch}}</md-switch></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-switch ng-disabled="true" ng-model="vm.switch" aria-label="Switch">Switch: {{vm.switch}}</md-switch></hljs></div></div><div layout="row" layout-sm="column"><div flex="" class="preview"><div class="md-caption">No Ink</div><div layout="row" layout-align="center center"><md-switch md-no-ink="" ng-model="vm.switch" aria-label="Switch">Switch: {{vm.switch}}</md-switch></div></div><div flex="" class="source-code"><hljs lang="html" ms-scroll=""><md-switch md-no-ink="" ng-model="vm.switch" aria-label="Switch">Switch: {{vm.switch}}</md-switch></hljs></div></div></div><div class="md-title">Attributes</div><div class="attributes card md-whiteframe-4dp" layout="column"><table class="simple" ms-responsive-table=""><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr class="api-params-item"><td style="white-space: nowrap;"><b>* ng-model</b> <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Assignable angular expression to data-bind to.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">name <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Property name of the form under which the control is published.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-true-value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>The value to which the expression should be set when selected.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-false-value <span hide="" show-sm=""><code class="api-type label type-hint type-hint-expression">expression</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-expression">expression</code></td><td class="description"><p>The value to which the expression should be set when not selected.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">ng-change <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Angular expression to be executed when input changes due to user interaction with the input element.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">md-no-ink <span hide="" show-sm=""><code class="api-type label type-hint type-hint-boolean">boolean</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-boolean">boolean</code></td><td class="description"><p>Use of attribute indicates use of ripple ink effects.</p></td></tr><tr class="api-params-item"><td style="white-space: nowrap;">aria-label <span hide="" show-sm=""><code class="api-type label type-hint type-hint-string">string</code></span></td><td style="white-space: nowrap;"><code class="api-type label type-hint type-hint-string">string</code></td><td class="description"><p>Publish the button label used by screen-readers for accessibility. Defaults to the switch\'s text.</p></td></tr></tbody></table></div></div></div>'), e.put("app/main/ui/layouts/carded/fullwidth/fullwidth.html", '<div class="page-layout carded fullwidth" layout="row"><div class="top-bg md-accent-bg"></div><div class="center" layout="column" flex=""><div class="header"><span class="h2 white-fg">Fullwidth with independent scroll</span></div><div class="content-card" layout="column" flex=""><div class="toolbar" layout="row" layout-align="start center"><span>Content toolbar</span></div><md-content class="content" flex="" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-content></div></div></div>'),e.put("app/main/ui/layouts/carded/fullwidth-ii/fullwidth-ii.html", '<div class="page-layout carded fullwidth single-scroll" layout="row"><div class="top-bg md-accent-bg"></div><div class="center" flex=""><div class="header"><span class="h2 white-fg">Fullwidth with page scroll</span></div><div class="content-card"><div class="toolbar" layout="row" layout-align="start center"><span>Content toolbar</span></div><md-content class="content" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-content></div></div></div>'),e.put("app/main/ui/layouts/carded/left-sidenav/left-sidenav.html", '<div class="page-layout carded left-sidenav" layout="row"><div class="top-bg md-accent-bg"></div><md-sidenav class="sidenav" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div class="header"><p>Sidenav header</p></div><md-content class="content" flex="" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-sidenav.html\'"></div></md-content></md-sidenav><div class="center" layout="column" flex=""><div class="header" layout="row"><div><span class="h2 white-fg">Left sidenav with independent scroll</span></div></div><div class="content-card" layout="column" flex=""><div class="toolbar" layout="row" layout-align="start center"><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-md="" aria-label="Toggle left sidenav"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button><p>Content toolbar</p></div><md-content class="content" flex="" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-content></div></div></div>'),e.put("app/main/ui/layouts/carded/left-sidenav-ii/left-sidenav-ii.html", '<div class="page-layout carded left-sidenav single-scroll" layout="row"><div class="top-bg md-accent-bg"></div><md-sidenav class="sidenav" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div class="header"><p>Sidenav header</p></div><md-content class="content" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-sidenav.html\'"></div></md-content></md-sidenav><div class="center" flex=""><div class="header" layout="row"><div><span class="h2 white-fg">Left sidenav with page scroll</span></div></div><div class="content-card"><div class="toolbar" layout="row" layout-align="start center"><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-md="" aria-label="Toggle left sidenav"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button><p>Content toolbar</p></div><md-content class="content" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-content></div></div></div>'),e.put("app/main/ui/layouts/carded/right-sidenav/right-sidenav.html", '<div class="page-layout carded right-sidenav" layout="row"><div class="top-bg md-accent-bg"></div><div class="center" layout="column" flex=""><div class="header" layout="row"><div><span class="h2 white-fg">Right sidenav with independent scroll</span></div></div><div class="content-card" layout="column" flex=""><div class="toolbar" layout="row" layout-align="space-between center"><p>Content toolbar</p><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-md="" aria-label="Toggle right pane"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button></div><md-content class="content" flex="" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-content></div></div><md-sidenav class="sidenav md-sidenav-right" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div class="header"><p>Sidenav header</p></div><md-content class="content" ms-scroll="" flex=""><div ng-include="\'app/main/ui/layouts/demo/demo-sidenav.html\'"></div></md-content></md-sidenav></div>'),e.put("app/main/ui/layouts/carded/right-sidenav-ii/right-sidenav-ii.html", '<div class="page-layout carded right-sidenav single-scroll" layout="row"><div class="top-bg md-accent-bg"></div><div class="center" flex=""><div class="header" layout="row"><div><span class="h2 white-fg">Right sidenav with page scroll</span></div></div><div class="content-card"><div class="toolbar" layout="row" layout-align="space-between center"><p>Content toolbar</p><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-md="" aria-label="Toggle right pane"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button></div><md-content class="content" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-content></div></div><md-sidenav class="sidenav md-sidenav-right" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div class="header"><p>Sidenav header</p></div><md-content class="content" ms-scroll=""><div ng-include="\'app/main/ui/layouts/demo/demo-sidenav.html\'"></div></md-content></md-sidenav></div>'),e.put("app/main/ui/layouts/simple/fullwidth/fullwidth.html", '<div class="page-layout simple fullwidth"><div class="header md-accent-bg"><span class="h2">Fullwidth</span></div><div class="content" md-background-bg=""><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></div></div>'),e.put("app/main/ui/layouts/simple/left-sidenav/left-sidenav.html", '<div class="page-layout simple left-sidenav" layout="row"><md-sidenav class="sidenav" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div ng-include="\'app/main/ui/layouts/demo/demo-sidenav.html\'"></div></md-sidenav><div class="center" flex="" ms-scroll=""><div class="header md-accent-bg" layout="row"><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-md="" aria-label="Toggle sidenav"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button><div><span class="h2">Left sidenav with independent scroll</span></div></div><div class="content md-background-bg"><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></div></div></div>'),e.put("app/main/ui/layouts/simple/left-sidenav-ii/left-sidenav-ii.html", '<div class="page-layout simple left-sidenav single-scroll" layout="row"><md-sidenav class="sidenav" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div ng-include="\'app/main/ui/layouts/demo/demo-sidenav.html\'"></div></md-sidenav><div class="center" flex="" ms-scroll=""><div class="header md-accent-bg" layout="row"><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-md="" aria-label="Toggle sidenav"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button><div><span class="h2">Left sidenav with page scroll</span></div></div><div class="content md-background-bg"><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></div></div></div>'),e.put("app/main/ui/layouts/simple/right-sidenav/right-sidenav.html", '<div class="page-layout simple right-sidenav" layout="row"><div class="center" flex="" ms-scroll=""><div class="header md-accent-bg" layout="row" layout-align="space-between"><div><span class="h2">Right sidenav with independent scroll</span></div><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-md="" aria-label="Toggle sidenav"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button></div><div class="content md-background-bg"><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></div></div><md-sidenav class="sidenav md-sidenav-right" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div ng-include="\'app/main/ui/layouts/demo/demo-sidenav.html\'"></div></md-sidenav></div>'),e.put("app/main/ui/layouts/simple/right-sidenav-ii/right-sidenav-ii.html", '<div class="page-layout simple right-sidenav single-scroll" layout="row"><div class="center" flex="" ms-scroll=""><div class="header md-accent-bg" layout="row" layout-align="space-between"><div><span class="h2">Right sidenav with page scroll</span></div><md-button class="md-icon-button sidenav-toggle" ng-click="vm.toggleSidenav(\'sidenav\')" hide-gt-md="" aria-label="Toggle sidenav"><md-icon md-font-icon="icon-menu" class="icon"></md-icon></md-button></div><div class="content md-background-bg"><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></div></div><md-sidenav class="sidenav md-sidenav-right" md-is-locked-open="$mdMedia(\'gt-md\')" md-component-id="sidenav" ms-scroll="" ms-sidenav-helper=""><div ng-include="\'app/main/ui/layouts/demo/demo-sidenav.html\'"></div></md-sidenav></div>'),e.put("app/main/ui/layouts/simple/tabbed/tabbed.html", '<div class="page-layout simple tabbed" layout="column"><div class="header md-accent-bg"><span class="h2">Tabbed</span></div><div class="content"><md-tabs md-dynamic-height=""><md-tab label="Tab 1"><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-tab><md-tab label="Tab 2"><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-tab><md-tab label="Tab 3"><div ng-include="\'app/main/ui/layouts/demo/demo-content.html\'"></div></md-tab></md-tabs></div></div>'),e.put("app/main/ui/theme-colors/dialogs/custom-theme/custom-theme-dialog.html", '<md-dialog class="custom-theme-dialog" aria-label="Custom Theme"><md-toolbar><div class="md-toolbar-tools"><h2>Custom Theme Generator</h2><span flex=""></span><md-button class="md-icon-button" ng-click="vm.closeDialog()"><md-icon md-font-icon="icon-close" aria-label="Close dialog"></md-icon></md-button></div></md-toolbar><md-dialog-content><div layout="row" ng-repeat="type in [\'primary\', \'accent\', \'warn\', \'background\']"><h3 class="type">{{type}}</h3><md-input-container><label>Palette</label><md-select ng-model="vm.theme[type].name" ng-style="{\'background-color\': vm.rgba(vm.palettes[vm.theme[type].name][\'500\'].value), \'color\': vm.rgba(vm.palettes[vm.theme[type].name][\'500\'].contrast, 1)}"><md-option ng-value="palette" ng-repeat="(palette, hues) in vm.palettes" ng-style="{\'background-color\': vm.rgba(hues[\'500\'].value), \'color\': vm.rgba(hues[\'500\'].contrast, 1)}">{{palette}}</md-option></md-select></md-input-container><div layout="row" ng-repeat="hueType in [\'default\', \'hue-1\', \'hue-2\', \'hue-3\']"><md-input-container><label>{{hueType}}</label><md-select ng-model="vm.theme[type].hues[hueType]" ng-style="{\'background-color\': vm.rgba(vm.palettes[vm.theme[type].name][vm.theme[type].hues[hueType]].value), \'color\': vm.rgba(vm.palettes[vm.theme[type].name][vm.theme[type].hues[hueType]].contrast, 1)}"><md-option ng-value="hue" ng-repeat="(hue, opt) in vm.palettes[vm.theme[type].name]" ng-style="{\'background-color\': vm.rgba(opt.value), \'color\': vm.rgba(opt.contrast, 1)}">{{hue}}</md-option></md-select></md-input-container></div></div><md-divider></md-divider><div layout="row"><p>To make this theme permanent, copy the below code and add it into the "fuseThemes" object in "core/theming/fuse-themes.constant.js" file. You can also replace the "CUSTOM_THEME_NAME" with your theme name.</p></div><div layout="row"><textarea readonly="" class="theme-object">"CUSTOM_THEME_NAME" : {{vm.theme}}</textarea></div></md-dialog-content><div class="md-actions" layout="row"><span flex=""></span><md-button class="md-raised md-accent" ng-click="vm.setTheme()">Set Theme</md-button></div></md-dialog>'),e.put("app/main/ui/theme-colors/tabs/accent/accent.html", '<div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-accent-bg" flex="100" layout="row" layout-padding=""><div flex="">Default</div><div flex="">{{vm.themes.active.theme.accent.color}}</div><div flex="">.md-accent-bg</div></div><div class="md-accent-bg" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.accent.contrast1}}</div><div flex="">.md-accent-bg</div></div><div class="md-accent-bg" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.accent.contrast2}}</div><div class="secondary-text" flex="">.md-accent-bg .secondary-text</div></div><div class="md-accent-bg" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.accent.contrast3}}</div><div class="hint-text" flex="">.md-accent-bg .hint-text</div></div><div class="md-accent-bg" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.accent.contrast4}}</div><div class="fade-text" flex="">.md-accent-bg .divider</div></div><div flex="100" class="md-accent-fg" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.accent.color}}</div><div flex="">.md-accent-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-accent-bg md-hue-1" flex="100" layout="row" layout-padding=""><div flex="">Hue 1</div><div flex="">{{vm.themes.active.theme.accent.hue1.color}}</div><div flex="">.md-accent-bg .md-hue-1</div></div><div class="md-accent-bg md-hue-1" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.accent.hue1.contrast1}}</div><div flex="">.md-accent-bg</div></div><div class="md-accent-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.accent.hue1.contrast2}}</div><div class="secondary-text" flex="">.md-accent-bg .md-hue-1 .secondary-text</div></div><div class="md-accent-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.accent.hue1.contrast3}}</div><div class="hint-text" flex="">.md-accent-bg .md-hue-1 .hint-text</div></div><div class="md-accent-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.accent.hue1.contrast4}}</div><div class="fade-text" flex="">.md-accent-bg .md-hue-1 .divider</div></div><div flex="100" class="md-accent-fg md-hue-1" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.accent.hue1.color}}</div><div flex="">.md-accent-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-accent-bg md-hue-2" flex="100" layout="row" layout-padding=""><div flex="">Hue 2</div><div flex="">{{vm.themes.active.theme.accent.hue2.color}}</div><div flex="">.md-accent-bg .md-hue-2</div></div><div class="md-accent-bg md-hue-2" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.accent.hue2.contrast1}}</div><div flex="">.md-accent-bg</div></div><div class="md-accent-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.accent.hue2.contrast2}}</div><div class="secondary-text" flex="">.md-accent-bg .md-hue-2 .secondary-text</div></div><div class="md-accent-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.accent.hue2.contrast3}}</div><div class="hint-text" flex="">.md-accent-bg .md-hue-2 .hint-text</div></div><div class="md-accent-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.accent.hue2.contrast4}}</div><div class="fade-text" flex="">.md-accent-bg .md-hue-2 .divider</div></div><div flex="100" class="md-accent-fg md-hue-2" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.accent.hue2.color}}</div><div flex="">.md-accent-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-accent-bg md-hue-3" flex="100" layout="row" layout-padding=""><div flex="">Hue 3</div><div flex="">{{vm.themes.active.theme.accent.hue3.color}}</div><div flex="">.md-accent-bg .md-hue-3</div></div><div class="md-accent-bg md-hue-3" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.accent.hue3.contrast1}}</div><div flex="">.md-accent-bg</div></div><div class="md-accent-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.accent.hue3.contrast2}}</div><div class="secondary-text" flex="">.md-accent-bg .md-hue-3 .secondary-text</div></div><div class="md-accent-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.accent.hue3.contrast3}}</div><div class="hint-text" flex="">.md-accent-bg .md-hue-3 .hint-text</div></div><div class="md-accent-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.accent.hue3.contrast4}}</div><div class="fade-text" flex="">.md-accent-bg .md-hue-3 .divider</div></div><div flex="100" class="md-accent-fg md-hue-3" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.accent.hue3.color}}</div><div flex="">.md-accent-fg</div></div></div>'),
    e.put("app/main/ui/theme-colors/tabs/background/background.html", '<div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-background-bg" flex="100" layout="row" layout-padding=""><div flex="">Default</div><div flex="">{{vm.themes.active.theme.background.color}}</div><div flex="">.md-background-bg</div></div><div class="md-background-bg" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.background.contrast1}}</div><div flex="">.md-background-bg</div></div><div class="md-background-bg" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.background.contrast2}}</div><div class="secondary-text" flex="">.md-background-bg .secondary-text</div></div><div class="md-background-bg" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.background.contrast3}}</div><div class="hint-text" flex="">.md-background-bg .hint-text</div></div><div class="md-background-bg" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.background.contrast4}}</div><div class="fade-text" flex="">.md-background-bg .divider</div></div><div flex="100" class="md-primary-bg md-background-fg" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.background.color}}</div><div flex="">.md-background-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-background-bg md-hue-1" flex="100" layout="row" layout-padding=""><div flex="">Hue 1</div><div flex="">{{vm.themes.active.theme.background.hue1.color}}</div><div flex="">.md-background-bg .md-hue-1</div></div><div class="md-background-bg md-hue-1" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.background.hue1.contrast1}}</div><div flex="">.md-background-bg</div></div><div class="md-background-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.background.hue1.contrast2}}</div><div class="secondary-text" flex="">.md-background-bg .md-hue-1 .secondary-text</div></div><div class="md-background-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.background.hue1.contrast3}}</div><div class="hint-text" flex="">.md-background-bg .md-hue-1 .hint-text</div></div><div class="md-background-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.background.hue1.contrast4}}</div><div class="fade-text" flex="">.md-background-bg .md-hue-1 .divider</div></div><div flex="100" class="md-primary-bg" layout="row" layout-padding=""><div flex="" class="md-background-fg md-hue-1">As foreground color</div><div flex="" class="md-background-fg md-hue-1">{{vm.themes.active.theme.background.hue1.color}}</div><div flex="" class="md-background-fg md-hue-1">.md-background-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-background-bg md-hue-2" flex="100" layout="row" layout-padding=""><div flex="">Hue 2</div><div flex="">{{vm.themes.active.theme.background.hue2.color}}</div><div flex="">.md-background-bg .md-hue-2</div></div><div class="md-background-bg md-hue-2" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.background.hue2.contrast1}}</div><div flex="">.md-background-bg</div></div><div class="md-background-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.background.hue2.contrast2}}</div><div class="secondary-text" flex="">.md-background-bg .md-hue-2 .secondary-text</div></div><div class="md-background-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.background.hue2.contrast3}}</div><div class="hint-text" flex="">.md-background-bg .md-hue-2 .hint-text</div></div><div class="md-background-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.background.hue2.contrast4}}</div><div class="fade-text" flex="">.md-background-bg .md-hue-2 .divider</div></div><div flex="100" class="md-primary-bg" layout="row" layout-padding=""><div flex="" class="md-background-fg md-hue-2">As foreground color</div><div flex="" class="md-background-fg md-hue-2">{{vm.themes.active.theme.background.hue2.color}}</div><div flex="" class="md-background-fg md-hue-2">.md-background-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-background-bg md-hue-3" flex="100" layout="row" layout-padding=""><div flex="">Hue 3</div><div flex="">{{vm.themes.active.theme.background.hue3.color}}</div><div flex="">.md-background-bg .md-hue-3</div></div><div class="md-background-bg md-hue-3" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.background.hue3.contrast1}}</div><div flex="">.md-background-bg</div></div><div class="md-background-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.background.hue3.contrast2}}</div><div class="secondary-text" flex="">.md-background-bg .md-hue-3 .secondary-text</div></div><div class="md-background-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.background.hue3.contrast3}}</div><div class="hint-text" flex="">.md-background-bg .md-hue-3 .hint-text</div></div><div class="md-background-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.background.hue3.contrast4}}</div><div class="fade-text" flex="">.md-background-bg .md-hue-3 .divider</div></div><div flex="100" class="md-primary-bg" layout="row" layout-padding=""><div flex="" class="md-background-fg md-hue-3">As foreground color</div><div flex="" class="md-background-fg md-hue-3">{{vm.themes.active.theme.background.hue3.color}}</div><div flex="" class="md-background-fg md-hue-3">.md-background-fg</div></div></div>'),e.put("app/main/ui/theme-colors/tabs/primary/primary.html", '<div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-primary-bg" flex="100" layout="row" layout-padding=""><div flex="">Default</div><div flex="">{{vm.themes.active.theme.primary.color}}</div><div flex="">.md-primary-bg</div></div><div class="md-primary-bg" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.primary.contrast1}}</div><div flex="">.md-primary-bg</div></div><div class="md-primary-bg" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.primary.contrast2}}</div><div class="secondary-text" flex="">.md-primary-bg .secondary-text</div></div><div class="md-primary-bg" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.primary.contrast3}}</div><div class="hint-text" flex="">.md-primary-bg .hint-text</div></div><div class="md-primary-bg" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.primary.contrast4}}</div><div class="fade-text" flex="">.md-primary-bg .divider</div></div><div flex="100" class="md-primary-fg" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.primary.color}}</div><div flex="">.md-primary-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-primary-bg md-hue-1" flex="100" layout="row" layout-padding=""><div flex="">Hue 1</div><div flex="">{{vm.themes.active.theme.primary.hue1.color}}</div><div flex="">.md-primary-bg .md-hue-1</div></div><div class="md-primary-bg md-hue-1" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.primary.hue1.contrast1}}</div><div flex="">.md-primary-bg</div></div><div class="md-primary-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.primary.hue1.contrast2}}</div><div class="secondary-text" flex="">.md-primary-bg .md-hue-1 .secondary-text</div></div><div class="md-primary-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.primary.hue1.contrast3}}</div><div class="hint-text" flex="">.md-primary-bg .md-hue-1 .hint-text</div></div><div class="md-primary-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.primary.hue1.contrast4}}</div><div class="fade-text" flex="">.md-primary-bg .md-hue-1 .divider</div></div><div flex="100" class="md-primary-fg md-hue-1" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.primary.hue1.color}}</div><div flex="">.md-primary-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-primary-bg md-hue-2" flex="100" layout="row" layout-padding=""><div flex="">Hue 2</div><div flex="">{{vm.themes.active.theme.primary.hue2.color}}</div><div flex="">.md-primary-bg .md-hue-2</div></div><div class="md-primary-bg md-hue-2" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.primary.hue2.contrast1}}</div><div flex="">.md-primary-bg</div></div><div class="md-primary-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.primary.hue2.contrast2}}</div><div class="secondary-text" flex="">.md-primary-bg .md-hue-2 .secondary-text</div></div><div class="md-primary-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.primary.hue2.contrast3}}</div><div class="hint-text" flex="">.md-primary-bg .md-hue-2 .hint-text</div></div><div class="md-primary-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.primary.hue2.contrast4}}</div><div class="fade-text" flex="">.md-primary-bg .md-hue-2 .divider</div></div><div flex="100" class="md-primary-fg md-hue-2" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.primary.hue2.color}}</div><div flex="">.md-primary-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-primary-bg md-hue-3" flex="100" layout="row" layout-padding=""><div flex="">Hue 3</div><div flex="">{{vm.themes.active.theme.primary.hue3.color}}</div><div flex="">.md-primary-bg .md-hue-3</div></div><div class="md-primary-bg md-hue-3" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.primary.hue3.contrast1}}</div><div flex="">.md-primary-bg</div></div><div class="md-primary-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.primary.hue3.contrast2}}</div><div class="secondary-text" flex="">.md-primary-bg .md-hue-3 .secondary-text</div></div><div class="md-primary-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.primary.hue3.contrast3}}</div><div class="hint-text" flex="">.md-primary-bg .md-hue-3 .hint-text</div></div><div class="md-primary-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.primary.hue3.contrast4}}</div><div class="fade-text" flex="">.md-primary-bg .md-hue-3 .divider</div></div><div flex="100" class="md-primary-fg md-hue-3" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.primary.hue3.color}}</div><div flex="">.md-primary-fg</div></div></div>'),e.put("app/main/ui/theme-colors/tabs/warn/warn.html", '<div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-warn-bg" flex="100" layout="row" layout-padding=""><div flex="">Default</div><div flex="">{{vm.themes.active.theme.warn.color}}</div><div flex="">.md-warn-bg</div></div><div class="md-warn-bg" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.warn.contrast1}}</div><div flex="">.md-warn-bg</div></div><div class="md-warn-bg" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.warn.contrast2}}</div><div class="secondary-text" flex="">.md-warn-bg .secondary-text</div></div><div class="md-warn-bg" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.warn.contrast3}}</div><div class="hint-text" flex="">.md-warn-bg .hint-text</div></div><div class="md-warn-bg" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.warn.contrast4}}</div><div class="fade-text" flex="">.md-warn-bg .divider</div></div><div flex="100" class="md-warn-fg" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.warn.color}}</div><div flex="">.md-warn-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-warn-bg md-hue-1" flex="100" layout="row" layout-padding=""><div flex="">Hue 1</div><div flex="">{{vm.themes.active.theme.warn.hue1.color}}</div><div flex="">.md-warn-bg .md-hue-1</div></div><div class="md-warn-bg md-hue-1" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.warn.hue1.contrast1}}</div><div flex="">.md-warn-bg</div></div><div class="md-warn-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.warn.hue1.contrast2}}</div><div class="secondary-text" flex="">.md-warn-bg .md-hue-1 .secondary-text</div></div><div class="md-warn-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.warn.hue1.contrast3}}</div><div class="hint-text" flex="">.md-warn-bg .md-hue-1 .hint-text</div></div><div class="md-warn-bg md-hue-1" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.warn.hue1.contrast4}}</div><div class="fade-text" flex="">.md-warn-bg .md-hue-1 .divider</div></div><div flex="100" class="md-warn-fg md-hue-1" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.warn.hue1.color}}</div><div flex="">.md-warn-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-warn-bg md-hue-2" flex="100" layout="row" layout-padding=""><div flex="">Hue 2</div><div flex="">{{vm.themes.active.theme.warn.hue2.color}}</div><div flex="">.md-warn-bg .md-hue-2</div></div><div class="md-warn-bg md-hue-2" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.warn.hue2.contrast1}}</div><div flex="">.md-warn-bg</div></div><div class="md-warn-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.warn.hue2.contrast2}}</div><div class="secondary-text" flex="">.md-warn-bg .md-hue-2 .secondary-text</div></div><div class="md-warn-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.warn.hue2.contrast3}}</div><div class="hint-text" flex="">.md-warn-bg .md-hue-2 .hint-text</div></div><div class="md-warn-bg md-hue-2" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.warn.hue2.contrast4}}</div><div class="fade-text" flex="">.md-warn-bg .md-hue-2 .divider</div></div><div flex="100" class="md-warn-fg md-hue-2" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.warn.hue2.color}}</div><div flex="">.md-warn-fg</div></div></div><div class="color" layout="row" layout-wrap="" layout-align="center center"><div class="md-warn-bg md-hue-3" flex="100" layout="row" layout-padding=""><div flex="">Hue 3</div><div flex="">{{vm.themes.active.theme.warn.hue3.color}}</div><div flex="">.md-warn-bg .md-hue-3</div></div><div class="md-warn-bg md-hue-3" flex="100" layout="row" layout-padding=""><div flex="">Primary Text</div><div flex="">{{vm.themes.active.theme.warn.hue3.contrast1}}</div><div flex="">.md-warn-bg</div></div><div class="md-warn-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="secondary-text" flex="">Secondary Text / Icon</div><div class="secondary-text" flex="">{{vm.themes.active.theme.warn.hue3.contrast2}}</div><div class="secondary-text" flex="">.md-warn-bg .md-hue-3 .secondary-text</div></div><div class="md-warn-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="hint-text" flex="">Hint Text / Disabled Text</div><div class="hint-text" flex="">{{vm.themes.active.theme.warn.hue3.contrast3}}</div><div class="hint-text" flex="">.md-warn-bg .md-hue-3 .hint-text</div></div><div class="md-warn-bg md-hue-3" flex="100" layout="row" layout-padding=""><div class="fade-text" flex="">Fade Text / Divider</div><div class="fade-text" flex="">{{vm.themes.active.theme.warn.hue3.contrast4}}</div><div class="fade-text" flex="">.md-warn-bg .md-hue-3 .divider</div></div><div flex="100" class="md-warn-fg md-hue-3" layout="row" layout-padding=""><div flex="">As foreground color</div><div flex="">{{vm.themes.active.theme.warn.hue3.color}}</div><div flex="">.md-warn-fg</div></div></div>'),e.put("app/main/pages/profile/tabs/about/about.html", '<div layout="row" layout-wrap=""><div class="about" layout="column" flex="100" flex-gt-md="50" flex-gt-lg="65"><div class="profile-box info-box general md-whiteframe-1dp" layout="column"><header class="md-accent-bg"><div class="title" translate="PROFILE.GENERAL_INFORMATION">General Information</div></header><div class="content"><div class="info-line"><div class="title" translate="PROFILE.GENDER">Gender</div><div class="info">{{vm.about.general.gender}}</div></div><div class="info-line"><div class="title" translate="PROFILE.BIRTHDAY">Birthday</div><div class="info">{{vm.about.general.birthday}}</div></div><div class="info-line"><div class="title" translate="PROFILE.LOCATIONS">Locations</div><div class="info location" ng-repeat="location in vm.about.general.locations"><span>{{location}}</span><md-icon md-font-icon="icon-map-marker" class="s16"></md-icon></div></div><div class="info-line"><div class="title" translate="PROFILE.ABOUT_ME">About Me</div><div class="info">{{vm.about.general.about}}</div></div></div></div><div class="profile-box info-box work md-whiteframe-1dp" layout="column"><header class="md-accent-bg"><div class="title" translate="PROFILE.WORK">Work</div></header><div class="content"><div class="info-line"><div class="title" translate="PROFILE.OCCUPATION">Occupation</div><div class="info">{{vm.about.work.occupation}}</div></div><div class="info-line"><div class="title" translate="PROFILE.SKILLS">Skills</div><div class="info">{{vm.about.work.skills}}</div></div><div class="info-line"><div class="title" translate="PROFILE.JOBS">Jobs</div><table class="info jobs"><tr class="job" ng-repeat="job in vm.about.work.jobs"><td class="company">{{job.company}}</td><td class="date">{{job.date}}</td></tr></table></div></div></div><div class="profile-box info-box contact md-whiteframe-1dp" layout="column"><header class="md-accent-bg"><div class="title" translate="PROFILE.CONTACT">Contact</div></header><div class="content"><div class="info-line"><div class="title" translate="PROFILE.ADDRESS">Address</div><div class="info">{{vm.about.contact.address}}</div></div><div class="info-line"><div class="title" translate="PROFILE.TEL">Tel.</div><div class="info" ng-repeat="tel in vm.about.contact.tel"><span>{{tel}}</span></div></div><div class="info-line"><div class="title" translate="PROFILE.WEBSITE">Website</div><div class="info" ng-repeat="website in vm.about.contact.websites"><span>{{website}}</span></div></div><div class="info-line"><div class="title" translate="PROFILE.EMAILS">Emails</div><div class="info" ng-repeat="email in vm.about.contact.emails"><span>{{email}}</span></div></div></div></div></div><div class="about-sidebar" layout="column" flex="100" flex-gt-md="50" flex-gt-lg="35"><div class="profile-box friends md-whiteframe-1dp" layout="column"><header class="md-accent-bg" layout="row" layout-align="space-between center"><div class="title" translate="PROFILE.FRIENDS">Friends</div><div class="more secondary-text"><span translate="PROFILE.SEE">See</span> <span>454</span> <span translate="PROFILE.MORE">More</span></div></header><div class="content" layout="row" layout-wrap=""><div class="friend" flex="20" ng-repeat="friend in vm.about.friends"><img ng-src="{{friend.avatar}}"></div></div></div><div class="profile-box groups md-whiteframe-1dp" layout="column"><header class="md-accent-bg" layout="row" layout-align="space-between center"><div class="title" translate="PROFILE.JOINED_GROUPS">Joined Groups</div><div class="more secondary-text"><span translate="PROFILE.SEE">See</span> <span>6</span> <span translate="PROFILE.MORE">More</span></div></header><div class="content"><div class="group" ng-repeat="group in vm.about.groups" layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><img ng-src="{{group.logo}}" class="logo" alt="{{group.name}}"><div><div class="name">{{group.name}}</div><div class="category">{{group.category}}</div><div class="members">{{group.members}} people</div></div></div><md-button class="md-icon-button" aria-label="more" translate="" translate-attr-aria-label="PROFILE.MORE"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button></div></div></div></div></div>'),e.put("app/main/pages/profile/tabs/photos-videos/photos-videos.html", '<div class="photos-videos"><div class="period" data-ng-repeat="period in vm.photosVideos"><div class="period-title"><span class="name">{{period.name}}</span> <span class="info">{{period.info}}</span></div><div class="period-media" layout="row" layout-wrap=""><div class="media" ng-repeat="media in period.media"><img class="preview" ng-src="{{media.preview}}" title="{{media.title}}"><div class="title">{{media.title}}</div></div></div></div></div>'),e.put("app/main/pages/profile/tabs/timeline/timeline.html", '<div layout="row" layout-wrap=""><div class="timeline" layout="column" flex="100" flex-gt-md="65" flex-order="2" flex-order-gt-md="1"><div class="profile-box add-post md-whiteframe-1dp"><div class="form" flex=""><textarea placeholder="Write something.." translate="" translate-attr-placeholder="PROFILE.WRITE_SOMETHING"></textarea><footer layout="row" layout-align="space-between center"><div layout="row" layout-align="start center"><md-button class="md-icon-button" aria-label="insert photo" translate="" translate-attr-aria-label="PROFILE.INSERT_PHOTO"><md-icon md-font-icon="icon-file-image-box"></md-icon><md-tooltip><span translate="PROFILE.INSERT_PHOTO">insert photo</span></md-tooltip></md-button><md-button class="md-icon-button" aria-label="add person" translate="" translate-attr-aria-label="PROFILE.ADD_PERSON"><md-icon md-font-icon="icon-person-plus"></md-icon><md-tooltip><span translate="PROFILE.ADD_PERSON">add person</span></md-tooltip></md-button><md-button class="md-icon-button" aria-label="add location" translate="" translate-attr-aria-label="PROFILE.LOCATION"><md-icon md-font-icon="icon-map-marker"></md-icon><md-tooltip><span translate="PROFILE.LOCATION">add location</span></md-tooltip></md-button></div><md-button ng-click="" class="post-button md-accent md-raised" aria-label="POST" translate="PROFILE.POST" translate-attr-aria-label="PROFILE.POST">POST</md-button></footer></div></div><md-divider></md-divider><div class="timeline-item md-whiteframe-1dp" ng-repeat="post in vm.posts"><header layout="row" layout-align="space-between start"><div class="user" layout="row" layout-align="start center"><img class="avatar" ng-src="{{post.user.avatar}}"><div layout="column"><div class="title"><span class="username md-accent-color">{{post.user.name}}</span> <span ng-if="post.type == \'post\'" translate="PROFILE.TYPE_POST">posted on your timeline</span> <span ng-if="post.type == \'something\'" translate="PROFILE.TYPE_SOMETHING">shared something with you</span> <span ng-if="post.type == \'video\'" translate="PROFILE.TYPE_VIDEO">shared a video with you</span> <span ng-if="post.type == \'article\'" translate="PROFILE.TYPE_ARTICLE">shared an article with you</span></div><div class="time">{{post.time}}</div></div></div><md-button class="md-icon-button" aria-label="more" translate="" translate-attr-aria-label="PROFILE.MORE"><md-icon md-font-icon="icon-dots-vertical"></md-icon></md-button></header><div class="content"><div ng-if="post.message" class="message">{{post.message}}</div><div ng-if="post.media" class="media"><img ng-if="post.media.type === \'image\'" ng-src="{{post.media.preview}}"><div ng-if="post.media.type === \'video\'" ng-bind-html="post.media.embed | toTrusted"></div></div><div ng-if="post.article" layout="column" class="article"><div class="media"><img ng-src="{{post.article.media.preview}}"></div><div class="title">{{post.article.title}}</div><div class="subtitle">{{post.article.subtitle}}</div><div class="excerpt">{{post.article.excerpt}}</div></div><div layout="row" layout-align="start center"><md-button class="like-button"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-heart-outline" class="s16"></md-icon><span translate="PROFILE.LIKE">Like</span>&nbsp;<span>({{post.like}})</span></div></md-button><md-button class="share-button"><div layout="row" layout-align="start center"><md-icon md-font-icon="icon-share" class="s16"></md-icon><span translate="PROFILE.SHARE">Share</span>&nbsp;<span>({{post.share}})</span></div></md-button></div></div><footer class="" layout="column" layout-align="start start"><div ng-if="post.comments" class="comment-count">{{post.comments.length}} comments<md-icon md-font-icon="icon-keyboard_arrow_down"></md-icon></div><div class="comment" layout="row" layout-fill="" ng-repeat="comment in post.comments"><img ng-src="{{comment.user.avatar}}" class="avatar"><div flex="" layout="column"><div layout="row" layout-align="start center"><span class="username">{{comment.user.name}}</span> <span class="time">{{comment.time}}</span></div><div class="message">{{comment.message}}</div><div class="actions" layout="row" layout-align="space-between center"><a href="#" class="reply-button md-accent-color" translate="PROFILE.REPLY">Reply</a><md-icon flex="" md-font-icon="icon-flag" class="report-button s16"></md-icon></div></div></div><div class="reply" layout="row" layout-fill=""><img src="assets/images/avatars/profile.jpg" class="avatar"><form flex=""><textarea placeholder="Add a comment..." translate="" translate-attr-placeholder="PROFILE.ADD_COMMENT"></textarea><md-button ng-click="" class="post-comment-button md-accent md-raised" aria-label="Post Comment" translate="PROFILE.POST_COMMENT" translate-aria-label="PROFILE.POST_COMMENT">Post Comment</md-button></form></div></footer></div></div><div class="timeline-sidebar" layout="column" flex="100" flex-gt-md="35" flex-order="1" flex-order-gt-md="2"><div class="profile-box latest-activity md-whiteframe-1dp" layout="column"><header class="md-accent-bg" layout="row" layout-align="space-between center"><div class="title" translate="PROFILE.LATEST_ACTIVITY">Latest Activity</div><div class="more secondary-text" translate="PROFILE.SEE_ALL">See All</div></header><div class="content" layout="row" layout-wrap=""><div class="activities"><div class="activity" layout="row" layout-align="start start" ng-repeat="activity in vm.activities"><img ng-src="{{activity.user.avatar}}" class="avatar" alt="{{activity.user.name}}"><div layout="column"><div><span class="username md-accent-color">{{activity.user.name}}</span> <span class="message">{{activity.message}}</span></div><span class="time secondary-text">{{activity.time}}</span></div></div></div></div></div></div></div>'),e.put("app/main/pages/search/tabs/classic/classic.html", '<div class="result-info" layout="row" layout-align="space-between center" layout-sm="column" layout-align-sm="start start"><span class="result-count h3 secondary-text"><span>54</span> <span translate="SEARCH.RESULTS">Results</span></span><div class="pager"><span class="secondary-text"><span translate="SEARCH.RESULTS">Results</span> <span>:</span></span> <span class="page-info"><span>1</span> <span>-</span> <span>10</span> <span translate="SEARCH.OF">of</span> <span>100</span></span><md-button class="md-icon-button" aria-label="previous page" translate="" translate-attr-aria-label="SEARCH.PREVIOUS_PAGE"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="md-icon-button" aria-label="next page" translate="" translate-attr-aria-label="SEARCH.NEXT_PAGE"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div></div><div class="results"><div class="result-item" ng-repeat="item in vm.classic"><div class="title">{{item.title}}</div><div class="url">{{item.url}}</div><div class="excerpt">{{item.excerpt}}</div></div></div><div class="simple-pagination"><md-button class="pagination-item disabled" md-no-ink="" ng-href="#" aria-label="Go to previous page" translate="" translate-attr-aria-label="SEARCH.GO_TO_PREVIOUS"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="pagination-item active" md-no-ink="" ng-href="#" aria-label="Go to page 1"><span>1</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 2" hide="" show-gt-md=""><span>2</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 3" hide="" show-gt-md=""><span>3</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 4" hide="" show-gt-md=""><span>4</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 5" hide="" show-gt-md=""><span>5</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 6" hide="" show-gt-md=""><span>6</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 7" hide="" show-gt-md=""><span>7</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 8" hide="" show-gt-md=""><span>8</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 9" hide="" show-gt-md=""><span>9</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 10" hide="" show-gt-md=""><span>10</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to next page" translate="" translate-attr-aria-label="SEARCH.GO_TO_NEXT"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div>'),
    e.put("app/main/pages/search/tabs/contacts/contacts.html", '<div class="result-info" layout="row" layout-align="space-between center" layout-sm="column" layout-align-sm="start start"><div><span class="md-title" translate="SEARCH.CONTACTS">Contacts</span> <span class="secondary-text"><span>13</span> <span translate="SEARCH.RESULTS">Results</span></span></div><div class="pager"><span class="secondary-text"><span translate="SEARCH.RESULTS">Results</span> <span>:</span></span> <span class="page-info"><span>1</span> <span>-</span> <span>10</span> <span translate="SEARCH.OF">of</span> <span>100</span></span><md-button class="md-icon-button" aria-label="previous page" translate="" translate-attr-aria-label="SEARCH.PREVIOUS_PAGE"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="md-icon-button" aria-label="next page" translate="" translate-attr-aria-label="SEARCH.NEXT_PAGE"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div></div><table class="results simple clickable" ms-responsive-table=""><thead><tr><th></th><th translate="SEARCH.NAME">Name</th><th translate="SEARCH.POSITION">Position</th><th translate="SEARCH.PHONE">Phone</th><th translate="SEARCH.EMAIL">Email</th></tr></thead><tbody><tr class="result-item" ng-repeat="contact in vm.contacts"><td class="text-left avatar-cell" ng-if="contact.avatar"><img class="avatar" alt="{{contact.name}}" ng-src="{{contact.avatar}}"></td><td class="text-left avatar-cell" ng-if="!contact.avatar"><div class="avatar" ms-random-class="vm.colors">{{contact.name[0]}}</div></td><td class="name">{{contact.name}}</td><td class="position">{{contact.position}}</td><td class="phone">{{contact.phone}}</td><td class="email">{{contact.email}}</td></tr></tbody></table><div class="simple-pagination"><md-button class="pagination-item disabled" md-no-ink="" ng-href="#" aria-label="Go to previous page" translate="" translate-attr-aria-label="SEARCH.GO_TO_PREVIOUS"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="pagination-item active" md-no-ink="" ng-href="#" aria-label="Go to page 1"><span>1</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 2" hide="" show-gt-md=""><span>2</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 3" hide="" show-gt-md=""><span>3</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 4" hide="" show-gt-md=""><span>4</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 5" hide="" show-gt-md=""><span>5</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 6" hide="" show-gt-md=""><span>6</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 7" hide="" show-gt-md=""><span>7</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 8" hide="" show-gt-md=""><span>8</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 9" hide="" show-gt-md=""><span>9</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 10" hide="" show-gt-md=""><span>10</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to next page" translate="" translate-attr-aria-label="SEARCH.GO_TO_NEXT"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div>'),e.put("app/main/pages/search/tabs/emails/emails.html", '<div class="result-info" layout="row" layout-align="space-between center" layout-sm="column" layout-align-sm="start start"><div><span class="md-title" translate="SEARCH.EMAILS">E-Mails</span> <span class="secondary-text"><span>87</span> <span translate="SEARCH.RESULTS">Results</span></span></div><div class="pager"><span class="secondary-text"><span translate="SEARCH.RESULTS">Results</span> <span>:</span></span> <span class="page-info"><span>1</span> <span>-</span> <span>10</span> <span translate="SEARCH.OF">of</span> <span>100</span></span><md-button class="md-icon-button" aria-label="previous page" translate="" translate-attr-aria-label="SEARCH.PREVIOUS_PAGE"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="md-icon-button" aria-label="next page" translate="" translate-attr-aria-label="SEARCH.NEXT_PAGE"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div></div><div class="results"><div class="result-item {{mail.status}}" ng-repeat="mail in vm.mails | filter: vm.search" md-ink-ripple=""><div layout="row" layout-align="start center"><img class="avatar" ng-if="mail.from.avatar" alt="{{mail.from.name}}" ng-src="{{mail.from.avatar}}"><div class="avatar" ng-if="!mail.from.avatar" ms-random-class="vm.colors">{{mail.from.name[0]}}</div><div class="info" flex="" layout="column"><div class="name text-truncate">{{mail.from.name}}</div><div class="subject secondary-text text-truncate">{{mail.subject}}</div><div class="message secondary-text text-truncate">{{mail.message | htmlToPlaintext}}</div></div><div layout="column" layout-align="center end"><div class="time secondary-text">{{mail.time}}</div></div></div></div></div><div class="simple-pagination"><md-button class="pagination-item disabled" md-no-ink="" ng-href="#" aria-label="Go to previous page" translate="" translate-attr-aria-label="SEARCH.GO_TO_PREVIOUS"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="pagination-item active" md-no-ink="" ng-href="#" aria-label="Go to page 1"><span>1</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 2" hide="" show-gt-md=""><span>2</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 3" hide="" show-gt-md=""><span>3</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 4" hide="" show-gt-md=""><span>4</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 5" hide="" show-gt-md=""><span>5</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 6" hide="" show-gt-md=""><span>6</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 7" hide="" show-gt-md=""><span>7</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 8" hide="" show-gt-md=""><span>8</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 9" hide="" show-gt-md=""><span>9</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 10" hide="" show-gt-md=""><span>10</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to next page" translate="" translate-attr-aria-label="SEARCH.GO_TO_NEXT"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div>'),e.put("app/main/pages/search/tabs/users/users.html", '<div class="result-info" layout="row" layout-align="space-between center" layout-sm="column" layout-align-sm="start start"><div><span class="md-title" translate="SEARCH.USERS">Users</span> <span class="secondary-text"><span>87</span> <span translate="SEARCH.RESULTS">Results</span></span></div><div class="pager"><span class="secondary-text"><span translate="SEARCH.RESULTS">Results</span> <span>:</span></span> <span class="page-info"><span>1</span> <span>-</span> <span>10</span> <span translate="SEARCH.OF">of</span> <span>100</span></span><md-button class="md-icon-button" aria-label="previous page" translate="" translate-attr-aria-label="SEARCH.PREVIOUS_PAGE"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="md-icon-button" aria-label="next page" translate="" translate-attr-aria-label="SEARCH.NEXT_PAGE"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div></div><table class="results simple clickable" ms-responsive-table=""><thead><tr><th translate="SEARCH.NAME">Name</th><th translate="SEARCH.POSITION">Position</th><th translate="SEARCH.OFFICE">Office</th><th class="text-right" translate="SEARCH.AGE">Age</th><th class="text-right" translate="SEARCH.START_DATE">Start Date</th><th class="text-right" translate="SEARCH.SALARY">Salary</th><th class="text-left" translate="SEARCH.EMAIL">Email</th></tr></thead><tbody><tr class="result-item user" ng-repeat="user in vm.users"><td class="name">{{user.name}}</td><td class="position">{{user.position}}</td><td class="office">{{user.office}}</td><td class="age text-right">{{user.age}}</td><td class="start-date text-right">{{user.startDate}}</td><td class="salary text-right">{{user.salary | currency}}</td><td class="email text-left">{{user.email}}</td></tr></tbody></table><div class="simple-pagination"><md-button class="pagination-item disabled" md-no-ink="" ng-href="#" aria-label="Go to previous page" translate="" translate-attr-aria-label="SEARCH.GO_TO_PREVIOUS"><md-icon md-font-icon="icon-chevron-left"></md-icon></md-button><md-button class="pagination-item active" md-no-ink="" ng-href="#" aria-label="Go to page 1"><span>1</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 2" hide="" show-gt-md=""><span>2</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 3" hide="" show-gt-md=""><span>3</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 4" hide="" show-gt-md=""><span>4</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 5" hide="" show-gt-md=""><span>5</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 6" hide="" show-gt-md=""><span>6</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 7" hide="" show-gt-md=""><span>7</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 8" hide="" show-gt-md=""><span>8</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 9" hide="" show-gt-md=""><span>9</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to page 10" hide="" show-gt-md=""><span>10</span></md-button><md-button class="pagination-item" ng-href="#" aria-label="Go to next page" translate="" translate-attr-aria-label="SEARCH.GO_TO_NEXT"><md-icon md-font-icon="icon-chevron-right"></md-icon></md-button></div>')
}]);
