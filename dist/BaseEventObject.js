/*!
 * BaseEventObject - Base Event Object
 * @version v0.3.4
 * @author Junjie.Bai
 * @license MIT
 * 
 * git - git+https://github.com/baijunjie/base-event-object.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BaseEventObject"] = factory();
	else
		root["BaseEventObject"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.index = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var _class = function () {
        /**
         * @param events {String|Array|Object} Single event name, or event name array, or event option.
         * If it is an event option, it contains two optional attributes:
         * - events     : Pass in an array of event names for initializing the supported events.
         * - onceEvents : Pass in an array of event names for initializing the supported once events.
         */
        function _class(events) {
            var _this = this;

            _classCallCheck(this, _class);

            Object.defineProperties(this, {
                _onceEvents: {
                    value: {},
                    enumerable: false
                },
                _callbackMap: {
                    value: {},
                    enumerable: false
                },
                _onceCallbackMap: {
                    value: {},
                    enumerable: false
                },
                once: {
                    value: this.once.bind(this),
                    enumerable: true
                },
                on: {
                    value: this.on.bind(this),
                    enumerable: true
                },
                off: {
                    value: this.off.bind(this),
                    enumerable: true
                },
                emit: {
                    value: this.emit.bind(this),
                    enumerable: true
                }
            });

            var options = void 0;

            if (typeof events === 'string') {
                options = { events: events.split(' ') };
            } else if (isArray(events)) {
                options = { events: events };
            } else if ((typeof events === 'undefined' ? 'undefined' : _typeof(events)) === 'object') {
                options = events;
            } else {
                throw new Error('Invalid parameter.');
            }

            if (typeof options.events === 'string') {
                options.events = [options.events];
            }

            if (isArray(options.events) && options.events.length) {
                options.events.forEach(function (type) {
                    _this._callbackMap[type] = [];
                    _this._onceCallbackMap[type] = new Map();
                });
            } else {
                throw new Error('Invalid parameter.');
            }

            if (typeof options.onceEvents === 'string') {
                options.onceEvents = options.onceEvents.split(' ');
            }

            if (isArray(options.onceEvents)) {
                options.onceEvents.forEach(function (type) {
                    _this._onceEvents[type] = null;
                    _this._callbackMap[type] = [];
                    _this._onceCallbackMap[type] = new Map();
                });
            }
        }

        /**
         * Registration event listener.
         * @param   type     {String}    Event type.
         * @param   callback {Function}  Event listener handle.
         * @param   once     {Boolean}   Whether the event is executed only once.
         * @returns {Function|Undefined} If the registration is successful, an anti-registration function is returned, which can be called to cancel the listener.
         */


        _createClass(_class, [{
            key: 'on',
            value: function on(type, callback, once) {
                var _this2 = this;

                if (typeof type !== 'string') {
                    throw new Error('The event type must be a string.');
                }

                var removeArr = [];

                type.split(' ').forEach(function (type) {
                    var remove = _on.call(_this2, type, callback);
                    if (!remove) return;
                    removeArr.push(remove);
                    once && _this2._onceCallbackMap[type].set(callback, remove);
                });

                return function () {
                    removeArr.forEach(function (remove) {
                        return remove();
                    });
                };
            }
        }, {
            key: 'once',
            value: function once(type, callback) {
                this.on(type, callback, true);
            }
        }, {
            key: 'off',
            value: function off(type, callback) {
                var _this3 = this;

                if (typeof type === 'string') {
                    type.split(' ').forEach(function (type) {
                        _off.call(_this3, type, callback);
                    });
                } else {
                    _off.call(this, type, callback);
                }
            }
        }, {
            key: 'emit',
            value: function emit(type) {
                var _this4 = this;

                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                if (!this._callbackMap[type]) {
                    throw new Error('Event type "' + type + '" does not exist.');
                }

                var callbackArray = this._callbackMap[type].concat();

                if (this._onceEvents[type] === null) {
                    this._onceEvents[type] = args;
                    this._callbackMap[type].length = 0;
                }

                var onceCallbackMap = this._onceCallbackMap[type];

                callbackArray.forEach(function (cb) {
                    cb.call.apply(cb, [_this4, { type: type }].concat(args));
                    if (onceCallbackMap.has(cb)) {
                        onceCallbackMap.get(cb)();
                        onceCallbackMap.delete(cb);
                    }
                });
            }
        }]);

        return _class;
    }();

    exports.default = _class;
    ;

    function _on(type, callback) {
        if (!this._callbackMap[type]) {
            throw new Error('Event type "' + type + '" does not exist.');
        }

        if (typeof callback !== 'function') {
            throw new Error('Missing event handler.');
        }

        if (this._onceEvents[type]) {
            callback.call.apply(callback, [this, { type: type }].concat(_toConsumableArray(this._onceEvents[type])));
            return;
        }

        var callbackArray = this._callbackMap[type];

        if (callbackArray.indexOf(callback) < 0) {
            callbackArray.push(callback);
        }

        return function () {
            var index = callbackArray.indexOf(callback);
            if (index >= 0) {
                callbackArray.splice(index, 1);
            }
        };
    }

    function _off(type, callback) {
        var typeStr = typeof type === 'undefined' ? 'undefined' : _typeof(type);
        var callbackMap = void 0;

        if (typeStr === 'undefined') {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = Object.values(this._callbackMap)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var callbackArray = _step.value;

                    callbackArray.length = 0;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return;
        } else if (typeStr === 'function') {
            callback = type;
            callbackMap = this._callbackMap;
        } else if (typeStr === 'string') {
            if (this._callbackMap[type]) {
                callbackMap = _defineProperty({}, type, this._callbackMap[type]);
            } else {
                return;
            }

            if (callback === undefined) {
                callbackMap[type].length = 0;
                return;
            }
        } else {
            return;
        }

        var index = void 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = Object.values(callbackMap)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _callbackArray = _step2.value;

                index = _callbackArray.indexOf(callback);
                if (index >= 0) {
                    _callbackArray.splice(index, 1);
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }

    function isArray(arr) {
        return Object.prototype.toString.call(arr) === '[object Array]';
    }
    module.exports = exports['default'];
});

/***/ })
/******/ ]);
});