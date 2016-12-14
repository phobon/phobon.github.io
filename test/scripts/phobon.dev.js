"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        "use strict";

        var main_1 = require("./../slider/main");
        var utils_1 = require("./../utils");

        var Contact = function (_main_1$Pane) {
            _inherits(Contact, _main_1$Pane);

            function Contact(parent) {
                _classCallCheck(this, Contact);

                var _this = _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).call(this, "contact", "square", parent));

                _this._backgroundClass = "gr-contact";
                return _this;
            }

            _createClass(Contact, [{
                key: "layout",
                value: function layout() {
                    this._site = $("<div class='f-none f-d-column f-j-start f-ai-start'/>");
                    this._header = $("<h3 class='f-none'>Ben McCormick is phobon</h3>").appendTo(this._site);
                    this._links = $("<ul class='f-none f-d-column c-white m-t-massive'/>").appendTo(this._site);
                    this._links.append("<li class='f-none'><a class='o-50 f3'>github</a></li>");
                    this._links.append("<li class='f-none'><a class='o-50 f3'>twitter</a></li>");
                    this._links.append("<li class='f-none'><a class='o-50 f3'>instagram</a></li>");
                }
            }, {
                key: "loadAssets",
                value: function loadAssets() {
                    var p = new Promise(function (resolve, reject) {
                        utils_1.delay(1000).then(function () {
                            console.log("contact loaded");
                            resolve();
                        });
                    });
                    return p;
                }
            }, {
                key: "enterActions",
                value: function enterActions() {
                    return Promise.resolve();
                }
            }, {
                key: "exitActions",
                value: function exitActions() {
                    return Promise.resolve();
                }
            }]);

            return Contact;
        }(main_1.Pane);

        exports.Contact = Contact;
    }, { "./../slider/main": 6, "./../utils": 10 }], 2: [function (require, module, exports) {
        "use strict";

        var main_1 = require("./../slider/main");

        var Home = function (_main_1$Pane2) {
            _inherits(Home, _main_1$Pane2);

            function Home(parent) {
                _classCallCheck(this, Home);

                var _this2 = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, "home", "square", parent));

                _this2._delay = 1000;
                _this2._backgroundClass = "gr-home";
                return _this2;
            }

            _createClass(Home, [{
                key: "loadAssets",
                value: function loadAssets() {
                    var p = new Promise(function (resolve, reject) {
                        console.log("home loaded");
                        resolve();
                    });
                    return p;
                }
            }, {
                key: "layout",
                value: function layout() {
                    this._site = $("<div class='f h-100 f-d-column f-j-center f-ai-center c-white'/>");
                    var iconSite = $("<div class='f-none w-80 f-j-start f-ai-start m-b-massive'/>").appendTo(this._site);
                    this._icon = $("<div class='f-none c-gray-ll-f c-gray-ll-tt-bg br-ra-huge p-small o-0'>" + Home._phobonGlyph + "</div></div>").appendTo(iconSite);
                    this._header = $("<h3 class='f-none w-80 o-0 f-d-row f-w'>Hi, I'm Ben, a software developer based in Perth, Western Australia. I make user interfaces; focusing on building cool, performant front-end experiences.</h3>").appendTo(this._site);
                    this._blurb = $("<h3 class='f-none w-80 f-d-row f-w m-t-large o-0'>I'm currently at<a class='f-none m-horizontal-small o-50' href='http://acquire.com.au' target='_blank'>acQuire</a>but I've recently helped<a class='f-none m-horizontal-small o-50' href='http://thestudiophysio.com' target='_blank'>The Studio</a>with their boutique style.</h3>.").appendTo(this._site);
                }
            }, {
                key: "enterActions",
                value: function enterActions() {
                    var _this3 = this;

                    var p = new Promise(function (resolve, reject) {
                        _this3._icon.velocity("stop");
                        _this3._header.velocity("stop");
                        _this3._blurb.velocity("stop");
                        var s = [{
                            e: _this3._icon,
                            p: { opacity: [1, 0], scaleX: [1, 0], scaleY: [1, 0] },
                            o: {
                                delay: _this3._delay,
                                duration: 600,
                                easing: "spring"
                            }
                        }, {
                            e: _this3._header,
                            p: { opacity: [1, 0], translateY: [0, 100] },
                            o: {
                                duration: 500,
                                delay: 150,
                                sequenceQueue: false,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this3._blurb,
                            p: { opacity: [1, 0], translateY: [0, 100] },
                            o: {
                                duration: 500,
                                sequenceQueue: false,
                                delay: 300,
                                easing: "easeOutExpo",
                                complete: function complete() {
                                    _this3._delay = 0;
                                    resolve();
                                }
                            }
                        }];
                        $.Velocity.RunSequence(s);
                    });
                    return p;
                }
            }, {
                key: "exitActions",
                value: function exitActions() {
                    var _this4 = this;

                    var p = new Promise(function (resolve, reject) {
                        _this4._icon.velocity("stop");
                        _this4._header.velocity("stop");
                        _this4._blurb.velocity("stop");
                        var s = [{
                            e: _this4._icon,
                            p: { scaleX: 0, scaleY: 0 },
                            o: {
                                delay: _this4._delay,
                                duration: 500,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this4._header,
                            p: { opacity: 0, translateY: [-100, 0] },
                            o: {
                                duration: 400,
                                sequenceQueue: false,
                                delay: 150,
                                easing: "easeInExpo"
                            }
                        }, {
                            e: _this4._blurb,
                            p: { opacity: 0, translateY: [-100, 0] },
                            o: {
                                duration: 400,
                                sequenceQueue: false,
                                delay: 150,
                                easing: "easeInExpo",
                                complete: function complete() {
                                    resolve();
                                }
                            }
                        }];
                        $.Velocity.RunSequence(s);
                    });
                    return p;
                }
            }]);

            return Home;
        }(main_1.Pane);

        Home._phobonGlyph = '<svg xmlns="http://www.w3.org/2000/svg" class="w-medium h-medium" viewBox="0 0 16 16"><path d="M9.6,6.72V9.28a.32.32,0,0,1-.32.32h-9A.32.32,0,0,1,0,9.28V3.52A.32.32,0,0,1,.32,3.2H2.88a.32.32,0,0,1,.32.32V6.08a.32.32,0,0,0,.32.32H9.28A.32.32,0,0,1,9.6,6.72Z"/><rect x="9.6" width="6.4" height="3.2" rx="0.32" ry="0.32"/><path d="M16,9.92v5.76a.32.32,0,0,1-.32.32H9.92a.32.32,0,0,1-.32-.32V13.12a.32.32,0,0,1,.32-.32h2.56a.32.32,0,0,0,.32-.32V9.92a.32.32,0,0,1,.32-.32h2.56A.32.32,0,0,1,16,9.92Z"/><rect y="12.8" width="3.2" height="3.2" rx="0.32" ry="0.32"/></svg>';
        exports.Home = Home;
    }, { "./../slider/main": 6 }], 3: [function (require, module, exports) {
        "use strict";

        var main_1 = require("./../slider/main");

        var Hundred = function (_main_1$Pane3) {
            _inherits(Hundred, _main_1$Pane3);

            function Hundred(parent) {
                _classCallCheck(this, Hundred);

                var _this5 = _possibleConstructorReturn(this, (Hundred.__proto__ || Object.getPrototypeOf(Hundred)).call(this, "hundred", "round", parent));

                _this5._backgroundClass = "gr-100";
                return _this5;
            }

            _createClass(Hundred, [{
                key: "loadAssets",
                value: function loadAssets() {
                    var _this6 = this;

                    var p = new Promise(function (resolve, reject) {
                        _this6._image = new Image();
                        _this6._image.className = "f-none w-100";
                        _this6._image.onload = function () {
                            console.log("hundred loaded");
                            resolve();
                        };
                        _this6._image.src = "images/100.png";
                    });
                    return p;
                }
            }, {
                key: "layout",
                value: function layout() {
                    this._site = $("<div class='f-none w-100 h-100 f-j-center f-ai-center p-huge c-white f-d-row'/>");
                    this._container = $("<div class='f-none w-40 h-100 f-j-center f-ai-start f-d-column p-huge'/>").appendTo(this._site);
                    var headerSite = $("<div class='f-none of-hidden'/>").appendTo(this._container);
                    this._header = $("<h3 class='f-none c-white o-0'>C.</h3>").appendTo(headerSite);
                    this._divider = $("<div class='m-t-medium to-left br-b-tiny c-white-br o-50' style='width:180px'/>").appendTo(this._container);
                    this._divider.velocity({ scaleX: 0 }, { duration: 0 });
                    var detailsSite = $("<div class='f-none of-hidden'/>").appendTo(this._container);
                    this._details = $("<h4 class='f-none m-t-huge o-0'>100 days of experimentation in user interface and experience design inspired by dailyui.</h4>").appendTo(detailsSite);
                    this._imageSite = $("<div class='f f-j-center f-ai-center o-0'/>").appendTo(this._site);
                    this._imageSite.append(this._image);
                }
            }, {
                key: "enterActions",
                value: function enterActions() {
                    var _this7 = this;

                    var p = new Promise(function (resolve, reject) {
                        _this7._header.velocity("stop");
                        _this7._details.velocity("stop");
                        _this7._imageSite.velocity("stop");
                        var s = [{
                            e: _this7._divider,
                            p: { scaleX: 1 },
                            o: {
                                duration: 1000,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this7._header,
                            p: { opacity: [1, 0], translateY: [0, 30] },
                            o: {
                                sequenceQueue: false,
                                duration: 500,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this7._details,
                            p: { opacity: [1, 0], translateY: [0, 30] },
                            o: {
                                duration: 500,
                                sequenceQueue: false,
                                delay: 300,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this7._imageSite,
                            p: { opacity: [1, 0], scaleX: [1, 0.8], scaleY: [1, 0.8] },
                            o: {
                                duration: 500,
                                easing: "easeOutExpo",
                                complete: function complete() {
                                    resolve();
                                }
                            }
                        }];
                        $.Velocity.RunSequence(s);
                    });
                    return p;
                }
            }, {
                key: "exitActions",
                value: function exitActions() {
                    var _this8 = this;

                    var p = new Promise(function (resolve, reject) {
                        _this8._header.velocity("stop");
                        _this8._details.velocity("stop");
                        var s = [{
                            e: _this8._imageSite,
                            p: { opacity: 0, scaleX: 0.8, scaleY: 0.8 },
                            o: {
                                duration: 400,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this8._divider,
                            p: { scaleX: 0 },
                            o: {
                                delay: 300,
                                duration: 800,
                                sequenceQueue: false,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this8._details,
                            p: { opacity: 0, translateY: [30, 0] },
                            o: {
                                duration: 600,
                                sequenceQueue: false,
                                delay: 100,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this8._header,
                            p: { opacity: 0, translateY: [30, 0] },
                            o: {
                                duration: 400,
                                sequenceQueue: false,
                                delay: 200,
                                easing: "easeOutExpo",
                                complete: function complete() {
                                    resolve();
                                }
                            }
                        }];
                        $.Velocity.RunSequence(s);
                    });
                    return p;
                }
            }]);

            return Hundred;
        }(main_1.Pane);

        exports.Hundred = Hundred;
    }, { "./../slider/main": 6 }], 4: [function (require, module, exports) {
        "use strict";

        function __export(m) {
            for (var p in m) {
                if (!exports.hasOwnProperty(p)) exports[p] = m[p];
            }
        }
        __export(require("./home"));
        __export(require("./hundred"));
        __export(require("./contact"));
    }, { "./contact": 1, "./home": 2, "./hundred": 3 }], 5: [function (require, module, exports) {
        "use strict";

        var main_1 = require("./slider/main");
        var Panes = require("./panes/main");
        var instance;

        var Phobon = function (_main_1$Slider) {
            _inherits(Phobon, _main_1$Slider);

            function Phobon() {
                _classCallCheck(this, Phobon);

                return _possibleConstructorReturn(this, (Phobon.__proto__ || Object.getPrototypeOf(Phobon)).apply(this, arguments));
            }

            _createClass(Phobon, [{
                key: "initPanes",
                value: function initPanes() {
                    this.panes.push(new Panes.Home(this), new Panes.Hundred(this), new Panes.Contact(this));
                }
            }, {
                key: "initNavigation",
                value: function initNavigation() {
                    var _this10 = this;

                    var navigationContainer = $("<div class='absolute h-100 f-none f-d-column w-huge f-j-center' style='right:2rem'/>").appendTo(this.site);
                    this._navigation = $("<ul class='f-none f-d-column f-ai-end w-100'/>").appendTo(navigationContainer);
                    this.panes.forEach(function (p, i, a) {
                        var n = $("<li class='nav-item " + p.glyph + "' data-index='" + i + "' class='o-0'></li>").appendTo(_this10._navigation);
                        n.on("click", function () {
                            var index = n.data("index");
                            _this10.currentPane = _this10.panes[index];
                        });
                    });
                    // TODO: Some entering transition would be nice here.
                }
            }, {
                key: "updateNavigation",
                value: function updateNavigation(args) {
                    // Remove selection from the old navigation item.
                    var i = this.panes.indexOf(args.previous);
                    if (i > -1) {
                        this._navigation.find("[data-index='" + i + "']").removeClass("active");
                    }
                    // Add selection from the new navigation item.
                    var n = this.panes.indexOf(args.current);
                    if (n > -1) {
                        this._navigation.find("[data-index='" + n + "']").addClass("active");
                    }
                    return Promise.resolve();
                }
            }, {
                key: "loadingStart",
                value: function loadingStart() {
                    var _this11 = this;

                    var p = new Promise(function (resolve, reject) {
                        _this11._loadingSite = $("<div class='f-none f-j-center f-ai-center to-left-top' style='width:5.75rem;height:8.9375rem'/>").appendTo(_this11.site);
                        _this11._loadingBackgrounds = [];
                        _this11._loadingBackgrounds.push($("<div class='absolute w-100 h-100 gr-loading1' style='margin:auto;left:0:top:0;width:5.75rem;height:8.9375rem'/>").appendTo(_this11._loadingSite));
                        _this11._loadingBackgrounds.push($("<div class='absolute w-100 h-100 gr-loading2 o-0' style='margin:auto;left:0:top:0;width:5.75rem;height:8.9375rem'/>").appendTo(_this11._loadingSite));
                        _this11._loadingContent = $("<div class='f-none c-white-f o-0' style='z-index:1'>" + Phobon._phobonExpanded + "</div>").appendTo(_this11._loadingSite);
                        _this11._loadingSite.velocity({ scaleX: 0, scaleY: 0.05 }, { duration: 0 });
                        _this11._loadingContent.velocity({ scaleX: 0.8, scaleY: 0.8 }, { duration: 0 });
                        var s = [{
                            e: _this11._loadingSite,
                            p: { scaleX: 1 },
                            o: { duration: 350, easing: "easeOutExpo" }
                        }, {
                            e: _this11._loadingSite,
                            p: { scaleY: 1 },
                            o: {
                                delay: 100,
                                duration: 350,
                                sequenceQueue: false,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this11._loadingContent,
                            p: { opacity: 0.8, scaleX: 1, scaleY: 1 },
                            o: {
                                duration: 500,
                                easing: "easeOutExpo",
                                complete: function complete() {
                                    setTimeout(function () {
                                        _this11._loadingBackgrounds[1].addClass("pulse");
                                        resolve();
                                    }, 500);
                                }
                            }
                        }];
                        $.Velocity.RunSequence(s);
                    });
                    return p;
                }
            }, {
                key: "loadingEnd",
                value: function loadingEnd() {
                    var _this12 = this;

                    var p = new Promise(function (resolve, reject) {
                        var s = [{
                            e: _this12._loadingContent,
                            p: { opacity: 0, scaleX: 0.8, scaleY: 0.8 },
                            o: {
                                duration: 300,
                                easing: "easeOutExpo"
                            }
                        }, {
                            e: _this12._loadingSite,
                            p: { scaleY: 0.05 },
                            o: { duration: 300, easing: "easeOutExpo" }
                        }, {
                            e: _this12._loadingSite,
                            p: { scaleX: 0 },
                            o: {
                                duration: 300,
                                easing: "easeOutExpo",
                                complete: function complete() {
                                    _this12._loadingSite.remove();
                                    setTimeout(function () {
                                        resolve();
                                    }, 250);
                                }
                            }
                        }];
                        $.Velocity.RunSequence(s);
                    });
                    return p;
                }
            }]);

            return Phobon;
        }(main_1.Slider);

        Phobon._phobonExpanded = '<svg xmlns="http://www.w3.org/2000/svg" style="width:3.75rem;height:5.9375rem" viewBox="0 0 60 95"><polygon points="0 0 0 25 5 25 5 5 20 5 20 20 25 20 25 0 0 0"/><rect class="cls-1" x="15" y="20" width="5" height="5"/><polygon points="40 0 35 0 35 25 40 25 40 15 45 15 45 10 40 10 40 0"/><polygon points="55 0 55 10 50 10 50 15 55 15 55 25 60 25 60 0 55 0"/><polygon points="55 40 55 55 40 55 40 35 35 35 35 60 60 60 60 40 55 40"/><rect x="50" y="35" width="5" height="5"/><polygon points="35 70 35 95 40 95 40 75 55 75 55 70 35 70"/><rect x="55" y="75" width="5" height="20"/><polygon points="0 35 0 55 5 55 5 40 20 40 20 55 5 55 5 60 25 60 25 35 0 35"/><polygon points="0 70 0 90 5 90 5 75 20 75 20 90 5 90 5 95 25 95 25 70 0 70"/></svg>';
        $(function () {
            instance = new Phobon($("#root"));
        });
    }, { "./panes/main": 4, "./slider/main": 6 }], 6: [function (require, module, exports) {
        "use strict";

        function __export(m) {
            for (var p in m) {
                if (!exports.hasOwnProperty(p)) exports[p] = m[p];
            }
        }
        __export(require("./pane"));
        __export(require("./slider"));
    }, { "./pane": 8, "./slider": 9 }], 7: [function (require, module, exports) {}, {}], 8: [function (require, module, exports) {
        "use strict";

        var Pane = function () {
            function Pane(id, glyph, parent) {
                _classCallCheck(this, Pane);

                this._id = id;
                this._glyph = glyph;
                this._parent = parent;
            }

            _createClass(Pane, [{
                key: "enter",
                value: function enter() {
                    var _this13 = this;

                    var p = new Promise(function (resolve, reject) {
                        // If the site hasn't yet been built, build it now.
                        if (!_this13._site) {
                            _this13.layout();
                        }
                        // Append to the site to the parent so we can actually start to see it.
                        _this13._site.appendTo(_this13.parent.site);
                        Promise.all([_this13.backgroundActions(_this13.parent.backgrounds), _this13.enterActions()]).then(function () {
                            resolve();
                        });
                    });
                    return p;
                }
            }, {
                key: "exit",
                value: function exit() {
                    var _this14 = this;

                    return this.exitActions().then(function () {
                        // Remove the site at this point because we don't need it until later.
                        _this14._site.detach();
                    });
                }
            }, {
                key: "backgroundActions",
                value: function backgroundActions(targets) {
                    var _this15 = this;

                    var p = new Promise(function (resolve, reject) {
                        targets.bottom.velocity("stop");
                        // Swap the top and bottom backgrounds.
                        targets.top.css("z-index", 0);
                        targets.bottom.css("z-index", 1);
                        targets.bottom.removeClass("d-none");
                        // Apply the relevant background gradient to the correct background.
                        targets.bottom.addClass(_this15._backgroundClass);
                        targets.bottom.data("bg", _this15._backgroundClass);
                        targets.bottom.velocity({
                            opacity: [1, 0]
                        }, {
                            duration: 2000,
                            easing: "easeOutExpo",
                            complete: function complete() {
                                targets.top.addClass("d-none");
                                targets.top.css({ "opacity": 0 });
                                var bg = targets.top.data("bg");
                                if (bg) {
                                    targets.top.removeClass(bg);
                                }
                                resolve();
                            }
                        });
                    });
                    return p;
                }
            }, {
                key: "id",
                get: function get() {
                    return this._id;
                }
            }, {
                key: "glyph",
                get: function get() {
                    return this._glyph;
                }
            }, {
                key: "parent",
                get: function get() {
                    return this._parent;
                }
            }]);

            return Pane;
        }();

        exports.Pane = Pane;
    }, {}], 9: [function (require, module, exports) {
        "use strict";

        var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
            return new (P || (P = Promise))(function (resolve, reject) {
                function fulfilled(value) {
                    try {
                        step(generator.next(value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function rejected(value) {
                    try {
                        step(generator["throw"](value));
                    } catch (e) {
                        reject(e);
                    }
                }
                function step(result) {
                    result.done ? resolve(result.value) : new P(function (resolve) {
                        resolve(result.value);
                    }).then(fulfilled, rejected);
                }
                step((generator = generator.apply(thisArg, _arguments)).next());
            });
        };

        var Slider = function () {
            function Slider(host) {
                _classCallCheck(this, Slider);

                this._isStateChanging = false;
                // Backgrounds for transitions.
                this._backgrounds = {};
                this._host = host;
                this.init();
            }

            _createClass(Slider, [{
                key: "loadAssets",
                value: function loadAssets() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee() {
                        var i;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        i = 0;

                                    case 1:
                                        if (!(i < this.panes.length)) {
                                            _context.next = 7;
                                            break;
                                        }

                                        _context.next = 4;
                                        return this.panes[i].loadAssets();

                                    case 4:
                                        i++;
                                        _context.next = 1;
                                        break;

                                    case 7:
                                        return _context.abrupt("return", Promise.resolve());

                                    case 8:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee, this);
                    }));
                }
            }, {
                key: "init",
                value: function init() {
                    var _this16 = this;

                    // Ensure the host is set up to handle content and navigation sites.
                    this._host.addClass("f w-100 h-100");
                    // Build the sites as necessary.
                    this._backgrounds["1"] = $("<div class='fixed w-100 h-100 pe-none' style='left:0;top:0;z-index:1'/>").appendTo(this._host);
                    this._backgrounds["2"] = $("<div class='fixed w-100 h-100 pe-none d-none' style='left:0;top:0;opacity:0;z-index:0'/>").appendTo(this._host);
                    this._site = $("<div class='fixed w-100 h-100 f-none f-j-center f-ai-center' style='left:0;top:0;z-index:2'/>").appendTo(this._host);
                    // Initialize specific abstract items.
                    this._panes = [];
                    this.initPanes();
                    // Initialize scroll-wheel handling. Yes, this scrolljacks, but sometimes you just want to see the world burn.
                    window.addEventListener("wheel", function (e) {
                        e.preventDefault();
                        if (_this16._isStateChanging) {
                            return;
                        }
                        // Determine the index of the current pane so we know which one to switch to.
                        var i = _this16.panes.indexOf(_this16.currentPane);
                        if (e.deltaY > 0 && i < _this16.panes.length) {
                            // Scrolled down.
                            i++;
                        } else if (i > 0) {
                            i--;
                        } else {
                            throw "Index out of range, this should never happen.";
                        }
                        // Set the new current pane.
                        _this16.currentPane = _this16.panes[i];
                    });
                    // // Render the empty state so we can load all of these assets.
                    // this.loadingStart();
                    // // Load assets and then set the active pane.
                    // this.loadAssets().then(() => {
                    //     this.loadingEnd().then(() => {
                    //         this.initNavigation();
                    //         this.currentPane = this.panes[0];
                    //     });            
                    // });
                    this.loading();
                }
            }, {
                key: "loading",
                value: function loading() {
                    return __awaiter(this, void 0, void 0, regeneratorRuntime.mark(function _callee2() {
                        var _this17 = this;

                        return regeneratorRuntime.wrap(function _callee2$(_context2) {
                            while (1) {
                                switch (_context2.prev = _context2.next) {
                                    case 0:
                                        _context2.next = 2;
                                        return this.loadingStart();

                                    case 2:
                                        _context2.next = 4;
                                        return this.loadAssets();

                                    case 4:
                                        _context2.next = 6;
                                        return this.loadingEnd().then(function () {
                                            _this17.initNavigation();
                                            _this17.currentPane = _this17.panes[0];
                                        });

                                    case 6:
                                    case "end":
                                        return _context2.stop();
                                }
                            }
                        }, _callee2, this);
                    }));
                }
            }, {
                key: "backgrounds",
                get: function get() {
                    var b;
                    if (this._currentTopBackground === "1") {
                        b = { top: this._backgrounds["1"], bottom: this._backgrounds["2"] };
                        this._currentTopBackground = "2";
                    } else {
                        b = { top: this._backgrounds["2"], bottom: this._backgrounds["1"] };
                        this._currentTopBackground = "1";
                    }
                    return b;
                }
            }, {
                key: "site",
                get: function get() {
                    return this._site;
                }
            }, {
                key: "navigation",
                get: function get() {
                    return this._navigation;
                }
            }, {
                key: "glyph",
                get: function get() {
                    return this._glyph;
                }
            }, {
                key: "panes",
                get: function get() {
                    return this._panes;
                }
            }, {
                key: "currentPane",
                get: function get() {
                    return this._currentPane;
                },
                set: function set(value) {
                    var _this18 = this;

                    if (this.isStateChanging) {
                        console.log("Cannot change current pane while state is changing.");
                        return;
                    }
                    this._isStateChanging = true;
                    var previous = this._currentPane;
                    var next = value;
                    var setPane = function setPane() {
                        _this18._currentPane = value;
                        _this18._currentPane.enter().then(function () {
                            _this18._isStateChanging = false;
                        });
                    };
                    if (this._currentPane) {
                        if (value.id === this._currentPane.id) {
                            console.log("Pane with the id: " + value.id + " already current pane.");
                            return;
                        }
                        Promise.all([this.updateNavigation({ previous: previous, current: value }), this._currentPane.exit()]).then(function () {
                            setPane();
                        });
                    } else {
                        this.updateNavigation({ previous: previous, current: value }).then(function () {
                            setPane();
                        });
                    }
                }
            }, {
                key: "isStateChanging",
                get: function get() {
                    return this._isStateChanging;
                }
            }]);

            return Slider;
        }();

        exports.Slider = Slider;
    }, {}], 10: [function (require, module, exports) {
        "use strict";

        function delay(time) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, time);
            });
        }
        exports.delay = delay;
        ;
    }, {}] }, {}, [5, 10, 1, 2, 3, 4, 6, 7, 8, 9]);