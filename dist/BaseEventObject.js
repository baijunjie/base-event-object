/*!
 * BaseEventObject - Base Event Object
 * @version v0.5.0
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _Map) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _Map = _interopRequireDefault(_Map);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var _default =
  /*#__PURE__*/
  function () {
    /**
     * @param events {String|Array|Object} Single event name, or event name array, or event option.
     * If it is an event option, it contains two optional attributes:
     * - events     : Pass in an array of event names for initializing the supported events.
     * - onceEvents : Pass in an array of event names for initializing the supported once events.
     */
    function _default(events) {
      var _this = this;

      _classCallCheck(this, _default);

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
      var options;

      if (typeof events === 'string') {
        options = {
          events: events.split(' ')
        };
      } else if (isArray(events)) {
        options = {
          events: events
        };
      } else if (_typeof(events) === 'object') {
        options = events;
      } else {
        throw new Error('Invalid parameter.');
      }

      if (typeof options.events === 'string') {
        options.events = [options.events];
      }

      if (typeof options.onceEvents === 'string') {
        options.onceEvents = options.onceEvents.split(' ');
      }

      if (isArray(options.events)) {
        options.events.forEach(function (type) {
          _this._callbackMap[type] = [];
          _this._onceCallbackMap[type] = new _Map["default"]();
        });
      }

      if (isArray(options.onceEvents)) {
        options.onceEvents.forEach(function (type) {
          _this._onceEvents[type] = null;
          _this._callbackMap[type] = [];
          _this._onceCallbackMap[type] = new _Map["default"]();
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


    _createClass(_default, [{
      key: "on",
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
      /**
       * Registration event listener.
       * But this handler will only be executed once.
       * @param   type     {String}    Event type.
       * @param   callback {Function}  Event listener handle.
       * @returns {Function|Undefined} If the registration is successful, an anti-registration function is returned, which can be called to cancel the listener.
       */

    }, {
      key: "once",
      value: function once(type, callback) {
        this.on(type, callback, true);
      }
      /**
       * Remove event listener.
       * @param type     {String}   Optional. Event type.
       *                            If a Function is passed in, it is treated as an event listener Function.
       * @param callback {Function} Optional. Event listener handle.
       */

    }, {
      key: "off",
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
      /**
       * Performs the callback of the specified event type.
       * And pass the second parameter and subsequent parameters to callback.
       * @param type {String} Event type.
       * @param args {*}      Event parameters.
       */

    }, {
      key: "emit",
      value: function emit(type) {
        var _this4 = this;

        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        if (!this._callbackMap[type]) {
          throw new Error("Event type \"".concat(type, "\" does not exist."));
        }

        var callbackArray = this._callbackMap[type].concat();

        if (this._onceEvents[type] === null) {
          this._onceEvents[type] = args;
          this._callbackMap[type].length = 0;
        }

        var onceCallbackMap = this._onceCallbackMap[type];
        callbackArray.forEach(function (cb) {
          cb.call.apply(cb, [_this4, {
            type: type
          }].concat(args));
          var remove = onceCallbackMap.get(cb);

          if (remove) {
            remove();
            onceCallbackMap["delete"](cb);
          }
        });
      }
    }]);

    return _default;
  }();

  _exports["default"] = _default;
  ;

  function _on(type, callback) {
    if (!this._callbackMap[type]) {
      throw new Error("Event type \"".concat(type, "\" does not exist."));
    }

    if (typeof callback !== 'function') {
      throw new Error('Missing event handler.');
    }

    if (this._onceEvents[type]) {
      callback.call.apply(callback, [this, {
        type: type
      }].concat(_toConsumableArray(this._onceEvents[type])));
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
    var typeStr = _typeof(type);

    var callbackMap;

    if (typeStr === 'undefined') {
      for (var _i = 0, _Object$values = Object.values(this._callbackMap); _i < _Object$values.length; _i++) {
        var callbackArray = _Object$values[_i];
        callbackArray.length = 0;
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

    var index;

    for (var _i2 = 0, _Object$values2 = Object.values(callbackMap); _i2 < _Object$values2.length; _i2++) {
      var _callbackArray = _Object$values2[_i2];
      index = _callbackArray.indexOf(callback);

      if (index >= 0) {
        _callbackArray.splice(index, 1);
      }
    }
  }

  function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }

  module.exports = exports.default;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var _default =
  /*#__PURE__*/
  function () {
    function _default() {
      _classCallCheck(this, _default);

      this._value = [];
    }

    _createClass(_default, [{
      key: "has",
      value: function has(key) {
        return this._value.some(function (item) {
          return item.key === key;
        });
      }
    }, {
      key: "set",
      value: function set(key, value) {
        if (!this._value.some(function (item) {
          if (item.key === key) {
            item.value = value;
            return true;
          }
        })) {
          this._value.push({
            key: key,
            value: value
          });
        }

        return this;
      }
    }, {
      key: "get",
      value: function get(key) {
        var value;

        this._value.some(function (item) {
          if (item.key === key) {
            value = item.value;
            return true;
          }
        });

        return value;
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        var _this = this;

        this._value.some(function (item, index) {
          if (item.key === key) {
            _this._value.splice(index, 1);

            return true;
          }
        });

        return this;
      }
    }]);

    return _default;
  }();

  _exports["default"] = _default;
  ;
  module.exports = exports.default;
});

/***/ })
/******/ ]);
});