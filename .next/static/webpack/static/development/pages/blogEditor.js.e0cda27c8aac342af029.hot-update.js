webpackHotUpdate("static/development/pages/blogEditor.js",{

/***/ "./components/slate-editor/Editor.js":
/*!*******************************************!*\
  !*** ./components/slate-editor/Editor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlateEditor; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/lib/slate-react.es.js");
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slate */ "./node_modules/slate/lib/slate.es.js");









 // Create our initial value...

var initialValue = slate__WEBPACK_IMPORTED_MODULE_9__["Value"].fromJSON({
  document: {
    nodes: [{
      object: 'block',
      type: 'paragraph',
      nodes: [{
        object: 'text',
        leaves: [{
          text: 'A line of text in a paragraph.'
        }]
      }]
    }]
  }
}); // Define our app...

var SlateEditor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SlateEditor, _React$Component);

  function SlateEditor() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SlateEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SlateEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      value: initialValue // On change, update the app's React state with the new editor value.

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (_ref) {
      var value = _ref.value;

      _this.setState({
        value: value
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SlateEditor, [{
    key: "render",
    // Render the editor.
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(slate_react__WEBPACK_IMPORTED_MODULE_8__["Editor"], {
        value: this.state.value,
        onChange: this.onChange
      });
    }
  }]);

  return SlateEditor;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {} // Swallow
  // XXX (@Qix-) should we be logging these?
  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug.default = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      // Disabled?
      if (!debug.enabled) {
        return;
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    return createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @api public
  */


  function disable() {
    createDebug.enable('');
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;



/***/ }),

/***/ "./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GROUP_LEFT_TO_RIGHT,
    GROUP_RIGHT_TO_LEFT,
    EXPRESSION_LEFT_TO_RIGHT,
    EXPRESSION_RIGHT_TO_LEFT;

/*
 * Character ranges of left-to-right characters.
 */

GROUP_LEFT_TO_RIGHT = 'A-Za-z\u00C0-\u00D6\u00D8-\u00F6' +
    '\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C' +
    '\uFE00-\uFE6F\uFEFD-\uFFFF';

/*
 * Character ranges of right-to-left characters.
 */

GROUP_RIGHT_TO_LEFT = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC';

/*
 * Expression to match a left-to-right string.
 *
 * Matches the start of a string, followed by zero or
 * more non-right-to-left characters, followed by a
 * left-to-right character.
 */

EXPRESSION_LEFT_TO_RIGHT = new RegExp(
    '^[^' + GROUP_RIGHT_TO_LEFT + ']*[' + GROUP_LEFT_TO_RIGHT + ']'
);

/*
 * Expression to match a right-to-left string.
 *
 * Matches the start of a string, followed by zero or
 * more non-left-to-right characters, followed by a
 * right-to-left character.
 */

EXPRESSION_RIGHT_TO_LEFT = new RegExp(
    '^[^' + GROUP_LEFT_TO_RIGHT + ']*[' + GROUP_RIGHT_TO_LEFT + ']'
);

/**
 * Detect the direction of text.
 *
 * @param {string} value - value to stringify and check.
 * @return {string} - One of `"rtl"`, `"ltr"`, or
 *   `"neutral"`.
 */
function direction(value) {
    value = value.toString();

    if (EXPRESSION_RIGHT_TO_LEFT.test(value)) {
        return 'rtl';
    }

    if (EXPRESSION_LEFT_TO_RIGHT.test(value)) {
        return 'ltr';
    }

    return 'neutral';
}

/*
 * Expose `direction`.
 */

module.exports = direction;


/***/ }),

/***/ "./node_modules/esrever/esrever.js":
/*!*****************************************!*\
  !*** ./node_modules/esrever/esrever.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/esrever v0.2.0 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports =  true && exports;

	// Detect free variable `module`
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
	var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

	var reverse = function(string) {
		// Step 1: deal with combining marks and astral symbols (surrogate pairs)
		string = string
			// Swap symbols with their combining marks so the combining marks go first
			.replace(regexSymbolWithCombiningMarks, function($0, $1, $2) {
				// Reverse the combining marks so they will end up in the same order
				// later on (after another round of reversing)
				return reverse($2) + $1;
			})
			// Swap high and low surrogates so the low surrogates go first
			.replace(regexSurrogatePair, '$2$1');
		// Step 2: reverse the code units in the string
		var result = '';
		var index = string.length;
		while (index--) {
			result += string.charAt(index);
		}
		return result;
	};

	/*--------------------------------------------------------------------------*/

	var esrever = {
		'version': '0.2.0',
		'reverse': reverse
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return esrever;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}	else { var key; }

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/get-document/index.js":
/*!********************************************!*\
  !*** ./node_modules/get-document/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Module exports.
 */

module.exports = getDocument;

// defined by w3c
var DOCUMENT_NODE = 9;

/**
 * Returns `true` if `w` is a Document object, or `false` otherwise.
 *
 * @param {?} d - Document object, maybe
 * @return {Boolean}
 * @private
 */

function isDocument (d) {
  return d && d.nodeType === DOCUMENT_NODE;
}

/**
 * Returns the `document` object associated with the given `node`, which may be
 * a DOM element, the Window object, a Selection, a Range. Basically any DOM
 * object that references the Document in some way, this function will find it.
 *
 * @param {Mixed} node - DOM node, selection, or range in which to find the `document` object
 * @return {Document} the `document` object associated with `node`
 * @public
 */

function getDocument(node) {
  if (isDocument(node)) {
    return node;

  } else if (isDocument(node.ownerDocument)) {
    return node.ownerDocument;

  } else if (isDocument(node.document)) {
    return node.document;

  } else if (node.parentNode) {
    return getDocument(node.parentNode);

  // Range support
  } else if (node.commonAncestorContainer) {
    return getDocument(node.commonAncestorContainer);

  } else if (node.startContainer) {
    return getDocument(node.startContainer);

  // Selection support
  } else if (node.anchorNode) {
    return getDocument(node.anchorNode);
  }
}


/***/ }),

/***/ "./node_modules/get-window/index.js":
/*!******************************************!*\
  !*** ./node_modules/get-window/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * Module dependencies.
 */

var getDocument = __webpack_require__(/*! get-document */ "./node_modules/get-document/index.js");

/**
 * Module exports.
 */

module.exports = getWindow;

var needsIEFallback = __webpack_require__(/*! ./needs-ie-fallback */ "./node_modules/get-window/needs-ie-fallback.br.js");

/**
 * Returns `true` if `w` is a Window object, or `false` otherwise.
 *
 * @param {Mixed} w - Window object, maybe
 * @return {Boolean}
 * @private
 */

function isWindow (w) {
  return w && w.window === w;
}

/**
 * Returns the `window` object associated with the given `node`, which may be
 * a DOM element, the Window object, a Selection, a Range. Basically any DOM
 * object that references the Window in some way, this function will find it.
 *
 * @param {Mixed} node - DOM node, selection, or range in which to find the `window` object
 * @return {Window} the `window` object associated with `node`
 * @public
 */

function getWindow(node) {
  if (isWindow(node)) {
    return node;
  }

  var doc = getDocument(node);

  if (needsIEFallback) {
    // In IE 6-8, only the variable 'window' can be used to connect events (others
    // may be only copies).
    doc.parentWindow.execScript('document._parentWindow = window;', 'Javascript');
    var win = doc._parentWindow;
    // to prevent memory leak, unset it after use
    // another possibility is to add an onUnload handler,
    // (which seems overkill to @liucougar)
    doc._parentWindow = null;
    return win;
  } else {
    // standards-compliant and newer IE
    return doc.defaultView || doc.parentWindow;
  }
}


/***/ }),

/***/ "./node_modules/get-window/needs-ie-fallback.br.js":
/*!*********************************************************!*\
  !*** ./node_modules/get-window/needs-ie-fallback.br.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// this is a browser-only module. There is a non-browser equivalent in the same
// directory. This is done using a `package.json` browser field.
// old-IE fallback logic: http://stackoverflow.com/a/10260692
module.exports =  !!document.attachEvent && window !== document.parentWindow;


/***/ }),

/***/ "./node_modules/immutable/dist/immutable.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.es.js ***!
  \*****************************************************/
/*! exports provided: default, version, Collection, Iterable, Seq, Map, OrderedMap, List, Stack, Set, OrderedSet, Record, Range, Repeat, is, fromJS, hash, isImmutable, isCollection, isKeyed, isIndexed, isAssociative, isOrdered, isValueObject, get, getIn, has, hasIn, merge, mergeDeep, mergeWith, mergeDeepWith, remove, removeIn, set, setIn, update, updateIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collection", function() { return Collection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Iterable", function() { return Iterable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seq", function() { return Seq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedMap", function() { return OrderedMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Set", function() { return Set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedSet", function() { return OrderedSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Record", function() { return Record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromJS", function() { return fromJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hash", function() { return hash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isImmutable", function() { return isImmutable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollection", function() { return isCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isKeyed", function() { return isKeyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIndexed", function() { return isIndexed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAssociative", function() { return isAssociative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOrdered", function() { return isOrdered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueObject", function() { return isValueObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIn", function() { return getIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has", function() { return has; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasIn", function() { return hasIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWith", function() { return mergeWith$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepWith", function() { return mergeDeepWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeIn", function() { return removeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIn", function() { return setIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateIn", function() { return updateIn; });
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Used for setting prototype methods that IE8 chokes on.
var DELETE = 'delete';

// Constants describing the size of trie nodes.
var SHIFT = 5; // Resulted in best performance after ______?
var SIZE = 1 << SHIFT;
var MASK = SIZE - 1;

// A consistent shared value representing "not set" which equals nothing other
// than itself, and nothing that could be provided externally.
var NOT_SET = {};

// Boolean references, Rough equivalent of `bool &`.
function MakeRef() {
  return { value: false };
}

function SetRef(ref) {
  if (ref) {
    ref.value = true;
  }
}

// A function which returns a value representing an "owner" for transient writes
// to tries. The return value will only ever equal itself, and will not equal
// the return of any subsequent call of this function.
function OwnerID() {}

function ensureSize(iter) {
  if (iter.size === undefined) {
    iter.size = iter.__iterate(returnTrue);
  }
  return iter.size;
}

function wrapIndex(iter, index) {
  // This implements "is array index" which the ECMAString spec defines as:
  //
  //     A String property name P is an array index if and only if
  //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
  //     to 2^32−1.
  //
  // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
  if (typeof index !== 'number') {
    var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
    if ('' + uint32Index !== index || uint32Index === 4294967295) {
      return NaN;
    }
    index = uint32Index;
  }
  return index < 0 ? ensureSize(iter) + index : index;
}

function returnTrue() {
  return true;
}

function wholeSlice(begin, end, size) {
  return (
    ((begin === 0 && !isNeg(begin)) ||
      (size !== undefined && begin <= -size)) &&
    (end === undefined || (size !== undefined && end >= size))
  );
}

function resolveBegin(begin, size) {
  return resolveIndex(begin, size, 0);
}

function resolveEnd(end, size) {
  return resolveIndex(end, size, size);
}

function resolveIndex(index, size, defaultIndex) {
  // Sanitize indices using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  return index === undefined
    ? defaultIndex
    : isNeg(index)
      ? size === Infinity
        ? size
        : Math.max(0, size + index) | 0
      : size === undefined || size === index
        ? index
        : Math.min(size, index) | 0;
}

function isNeg(value) {
  // Account for -0 which is negative, but not less than 0.
  return value < 0 || (value === 0 && 1 / value === -Infinity);
}

// Note: value is unchanged to not break immutable-devtools.
var IS_COLLECTION_SYMBOL = '@@__IMMUTABLE_ITERABLE__@@';

function isCollection(maybeCollection) {
  return Boolean(maybeCollection && maybeCollection[IS_COLLECTION_SYMBOL]);
}

var IS_KEYED_SYMBOL = '@@__IMMUTABLE_KEYED__@@';

function isKeyed(maybeKeyed) {
  return Boolean(maybeKeyed && maybeKeyed[IS_KEYED_SYMBOL]);
}

var IS_INDEXED_SYMBOL = '@@__IMMUTABLE_INDEXED__@@';

function isIndexed(maybeIndexed) {
  return Boolean(maybeIndexed && maybeIndexed[IS_INDEXED_SYMBOL]);
}

function isAssociative(maybeAssociative) {
  return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
}

var Collection = function Collection(value) {
  return isCollection(value) ? value : Seq(value);
};

var KeyedCollection = /*@__PURE__*/(function (Collection) {
  function KeyedCollection(value) {
    return isKeyed(value) ? value : KeyedSeq(value);
  }

  if ( Collection ) KeyedCollection.__proto__ = Collection;
  KeyedCollection.prototype = Object.create( Collection && Collection.prototype );
  KeyedCollection.prototype.constructor = KeyedCollection;

  return KeyedCollection;
}(Collection));

var IndexedCollection = /*@__PURE__*/(function (Collection) {
  function IndexedCollection(value) {
    return isIndexed(value) ? value : IndexedSeq(value);
  }

  if ( Collection ) IndexedCollection.__proto__ = Collection;
  IndexedCollection.prototype = Object.create( Collection && Collection.prototype );
  IndexedCollection.prototype.constructor = IndexedCollection;

  return IndexedCollection;
}(Collection));

var SetCollection = /*@__PURE__*/(function (Collection) {
  function SetCollection(value) {
    return isCollection(value) && !isAssociative(value) ? value : SetSeq(value);
  }

  if ( Collection ) SetCollection.__proto__ = Collection;
  SetCollection.prototype = Object.create( Collection && Collection.prototype );
  SetCollection.prototype.constructor = SetCollection;

  return SetCollection;
}(Collection));

Collection.Keyed = KeyedCollection;
Collection.Indexed = IndexedCollection;
Collection.Set = SetCollection;

var IS_SEQ_SYMBOL = '@@__IMMUTABLE_SEQ__@@';

function isSeq(maybeSeq) {
  return Boolean(maybeSeq && maybeSeq[IS_SEQ_SYMBOL]);
}

var IS_RECORD_SYMBOL = '@@__IMMUTABLE_RECORD__@@';

function isRecord(maybeRecord) {
  return Boolean(maybeRecord && maybeRecord[IS_RECORD_SYMBOL]);
}

function isImmutable(maybeImmutable) {
  return isCollection(maybeImmutable) || isRecord(maybeImmutable);
}

var IS_ORDERED_SYMBOL = '@@__IMMUTABLE_ORDERED__@@';

function isOrdered(maybeOrdered) {
  return Boolean(maybeOrdered && maybeOrdered[IS_ORDERED_SYMBOL]);
}

var ITERATE_KEYS = 0;
var ITERATE_VALUES = 1;
var ITERATE_ENTRIES = 2;

var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';

var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;

var Iterator = function Iterator(next) {
  this.next = next;
};

Iterator.prototype.toString = function toString () {
  return '[Iterator]';
};

Iterator.KEYS = ITERATE_KEYS;
Iterator.VALUES = ITERATE_VALUES;
Iterator.ENTRIES = ITERATE_ENTRIES;

Iterator.prototype.inspect = Iterator.prototype.toSource = function() {
  return this.toString();
};
Iterator.prototype[ITERATOR_SYMBOL] = function() {
  return this;
};

function iteratorValue(type, k, v, iteratorResult) {
  var value = type === 0 ? k : type === 1 ? v : [k, v];
  iteratorResult
    ? (iteratorResult.value = value)
    : (iteratorResult = {
        value: value,
        done: false,
      });
  return iteratorResult;
}

function iteratorDone() {
  return { value: undefined, done: true };
}

function hasIterator(maybeIterable) {
  return !!getIteratorFn(maybeIterable);
}

function isIterator(maybeIterator) {
  return maybeIterator && typeof maybeIterator.next === 'function';
}

function getIterator(iterable) {
  var iteratorFn = getIteratorFn(iterable);
  return iteratorFn && iteratorFn.call(iterable);
}

function getIteratorFn(iterable) {
  var iteratorFn =
    iterable &&
    ((REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isArrayLike(value) {
  if (Array.isArray(value) || typeof value === 'string') {
    return true;
  }

  return (
    value &&
    typeof value === 'object' &&
    Number.isInteger(value.length) &&
    value.length >= 0 &&
    (value.length === 0
      ? // Only {length: 0} is considered Array-like.
        Object.keys(value).length === 1
      : // An object is only Array-like if it has a property where the last value
        // in the array-like may be found (which could be undefined).
        value.hasOwnProperty(value.length - 1))
  );
}

var Seq = /*@__PURE__*/(function (Collection$$1) {
  function Seq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isImmutable(value)
        ? value.toSeq()
        : seqFromValue(value);
  }

  if ( Collection$$1 ) Seq.__proto__ = Collection$$1;
  Seq.prototype = Object.create( Collection$$1 && Collection$$1.prototype );
  Seq.prototype.constructor = Seq;

  Seq.prototype.toSeq = function toSeq () {
    return this;
  };

  Seq.prototype.toString = function toString () {
    return this.__toString('Seq {', '}');
  };

  Seq.prototype.cacheResult = function cacheResult () {
    if (!this._cache && this.__iterateUncached) {
      this._cache = this.entrySeq().toArray();
      this.size = this._cache.length;
    }
    return this;
  };

  // abstract __iterateUncached(fn, reverse)

  Seq.prototype.__iterate = function __iterate (fn, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      while (i !== size) {
        var entry = cache[reverse ? size - ++i : i++];
        if (fn(entry[1], entry[0], this) === false) {
          break;
        }
      }
      return i;
    }
    return this.__iterateUncached(fn, reverse);
  };

  // abstract __iteratorUncached(type, reverse)

  Seq.prototype.__iterator = function __iterator (type, reverse) {
    var cache = this._cache;
    if (cache) {
      var size = cache.length;
      var i = 0;
      return new Iterator(function () {
        if (i === size) {
          return iteratorDone();
        }
        var entry = cache[reverse ? size - ++i : i++];
        return iteratorValue(type, entry[0], entry[1]);
      });
    }
    return this.__iteratorUncached(type, reverse);
  };

  return Seq;
}(Collection));

var KeyedSeq = /*@__PURE__*/(function (Seq) {
  function KeyedSeq(value) {
    return value === null || value === undefined
      ? emptySequence().toKeyedSeq()
      : isCollection(value)
        ? isKeyed(value)
          ? value.toSeq()
          : value.fromEntrySeq()
        : isRecord(value)
          ? value.toSeq()
          : keyedSeqFromValue(value);
  }

  if ( Seq ) KeyedSeq.__proto__ = Seq;
  KeyedSeq.prototype = Object.create( Seq && Seq.prototype );
  KeyedSeq.prototype.constructor = KeyedSeq;

  KeyedSeq.prototype.toKeyedSeq = function toKeyedSeq () {
    return this;
  };

  return KeyedSeq;
}(Seq));

var IndexedSeq = /*@__PURE__*/(function (Seq) {
  function IndexedSeq(value) {
    return value === null || value === undefined
      ? emptySequence()
      : isCollection(value)
        ? isKeyed(value)
          ? value.entrySeq()
          : value.toIndexedSeq()
        : isRecord(value)
          ? value.toSeq().entrySeq()
          : indexedSeqFromValue(value);
  }

  if ( Seq ) IndexedSeq.__proto__ = Seq;
  IndexedSeq.prototype = Object.create( Seq && Seq.prototype );
  IndexedSeq.prototype.constructor = IndexedSeq;

  IndexedSeq.of = function of (/*...values*/) {
    return IndexedSeq(arguments);
  };

  IndexedSeq.prototype.toIndexedSeq = function toIndexedSeq () {
    return this;
  };

  IndexedSeq.prototype.toString = function toString () {
    return this.__toString('Seq [', ']');
  };

  return IndexedSeq;
}(Seq));

var SetSeq = /*@__PURE__*/(function (Seq) {
  function SetSeq(value) {
    return (isCollection(value) && !isAssociative(value)
      ? value
      : IndexedSeq(value)
    ).toSetSeq();
  }

  if ( Seq ) SetSeq.__proto__ = Seq;
  SetSeq.prototype = Object.create( Seq && Seq.prototype );
  SetSeq.prototype.constructor = SetSeq;

  SetSeq.of = function of (/*...values*/) {
    return SetSeq(arguments);
  };

  SetSeq.prototype.toSetSeq = function toSetSeq () {
    return this;
  };

  return SetSeq;
}(Seq));

Seq.isSeq = isSeq;
Seq.Keyed = KeyedSeq;
Seq.Set = SetSeq;
Seq.Indexed = IndexedSeq;

Seq.prototype[IS_SEQ_SYMBOL] = true;

// #pragma Root Sequences

var ArraySeq = /*@__PURE__*/(function (IndexedSeq) {
  function ArraySeq(array) {
    this._array = array;
    this.size = array.length;
  }

  if ( IndexedSeq ) ArraySeq.__proto__ = IndexedSeq;
  ArraySeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  ArraySeq.prototype.constructor = ArraySeq;

  ArraySeq.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
  };

  ArraySeq.prototype.__iterate = function __iterate (fn, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    while (i !== size) {
      var ii = reverse ? size - ++i : i++;
      if (fn(array[ii], ii, this) === false) {
        break;
      }
    }
    return i;
  };

  ArraySeq.prototype.__iterator = function __iterator (type, reverse) {
    var array = this._array;
    var size = array.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var ii = reverse ? size - ++i : i++;
      return iteratorValue(type, ii, array[ii]);
    });
  };

  return ArraySeq;
}(IndexedSeq));

var ObjectSeq = /*@__PURE__*/(function (KeyedSeq) {
  function ObjectSeq(object) {
    var keys = Object.keys(object);
    this._object = object;
    this._keys = keys;
    this.size = keys.length;
  }

  if ( KeyedSeq ) ObjectSeq.__proto__ = KeyedSeq;
  ObjectSeq.prototype = Object.create( KeyedSeq && KeyedSeq.prototype );
  ObjectSeq.prototype.constructor = ObjectSeq;

  ObjectSeq.prototype.get = function get (key, notSetValue) {
    if (notSetValue !== undefined && !this.has(key)) {
      return notSetValue;
    }
    return this._object[key];
  };

  ObjectSeq.prototype.has = function has (key) {
    return hasOwnProperty.call(this._object, key);
  };

  ObjectSeq.prototype.__iterate = function __iterate (fn, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    while (i !== size) {
      var key = keys[reverse ? size - ++i : i++];
      if (fn(object[key], key, this) === false) {
        break;
      }
    }
    return i;
  };

  ObjectSeq.prototype.__iterator = function __iterator (type, reverse) {
    var object = this._object;
    var keys = this._keys;
    var size = keys.length;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var key = keys[reverse ? size - ++i : i++];
      return iteratorValue(type, key, object[key]);
    });
  };

  return ObjectSeq;
}(KeyedSeq));
ObjectSeq.prototype[IS_ORDERED_SYMBOL] = true;

var CollectionSeq = /*@__PURE__*/(function (IndexedSeq) {
  function CollectionSeq(collection) {
    this._collection = collection;
    this.size = collection.length || collection.size;
  }

  if ( IndexedSeq ) CollectionSeq.__proto__ = IndexedSeq;
  CollectionSeq.prototype = Object.create( IndexedSeq && IndexedSeq.prototype );
  CollectionSeq.prototype.constructor = CollectionSeq;

  CollectionSeq.prototype.__iterateUncached = function __iterateUncached (fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    var iterations = 0;
    if (isIterator(iterator)) {
      var step;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
    }
    return iterations;
  };

  CollectionSeq.prototype.__iteratorUncached = function __iteratorUncached (type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var collection = this._collection;
    var iterator = getIterator(collection);
    if (!isIterator(iterator)) {
      return new Iterator(iteratorDone);
    }
    var iterations = 0;
    return new Iterator(function () {
      var step = iterator.next();
      return step.done ? step : iteratorValue(type, iterations++, step.value);
    });
  };

  return CollectionSeq;
}(IndexedSeq));

// # pragma Helper functions

var EMPTY_SEQ;

function emptySequence() {
  return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
}

function keyedSeqFromValue(value) {
  var seq = Array.isArray(value)
    ? new ArraySeq(value)
    : hasIterator(value)
      ? new CollectionSeq(value)
      : undefined;
  if (seq) {
    return seq.fromEntrySeq();
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of [k, v] entries, or keyed object: ' +
      value
  );
}

function indexedSeqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  throw new TypeError(
    'Expected Array or collection object of values: ' + value
  );
}

function seqFromValue(value) {
  var seq = maybeIndexedSeqFromValue(value);
  if (seq) {
    return seq;
  }
  if (typeof value === 'object') {
    return new ObjectSeq(value);
  }
  throw new TypeError(
    'Expected Array or collection object of values, or keyed object: ' + value
  );
}

function maybeIndexedSeqFromValue(value) {
  return isArrayLike(value)
    ? new ArraySeq(value)
    : hasIterator(value)
      ? new CollectionSeq(value)
      : undefined;
}

var IS_MAP_SYMBOL = '@@__IMMUTABLE_MAP__@@';

function isMap(maybeMap) {
  return Boolean(maybeMap && maybeMap[IS_MAP_SYMBOL]);
}

function isOrderedMap(maybeOrderedMap) {
  return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
}

function isValueObject(maybeValue) {
  return Boolean(
    maybeValue &&
      typeof maybeValue.equals === 'function' &&
      typeof maybeValue.hashCode === 'function'
  );
}

/**
 * An extension of the "same-value" algorithm as [described for use by ES6 Map
 * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
 *
 * NaN is considered the same as NaN, however -0 and 0 are considered the same
 * value, which is different from the algorithm described by
 * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
 *
 * This is extended further to allow Objects to describe the values they
 * represent, by way of `valueOf` or `equals` (and `hashCode`).
 *
 * Note: because of this extension, the key equality of Immutable.Map and the
 * value equality of Immutable.Set will differ from ES6 Map and Set.
 *
 * ### Defining custom values
 *
 * The easiest way to describe the value an object represents is by implementing
 * `valueOf`. For example, `Date` represents a value by returning a unix
 * timestamp for `valueOf`:
 *
 *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
 *     var date2 = new Date(1234567890000);
 *     date1.valueOf(); // 1234567890000
 *     assert( date1 !== date2 );
 *     assert( Immutable.is( date1, date2 ) );
 *
 * Note: overriding `valueOf` may have other implications if you use this object
 * where JavaScript expects a primitive, such as implicit string coercion.
 *
 * For more complex types, especially collections, implementing `valueOf` may
 * not be performant. An alternative is to implement `equals` and `hashCode`.
 *
 * `equals` takes another object, presumably of similar type, and returns true
 * if it is equal. Equality is symmetrical, so the same result should be
 * returned if this and the argument are flipped.
 *
 *     assert( a.equals(b) === b.equals(a) );
 *
 * `hashCode` returns a 32bit integer number representing the object which will
 * be used to determine how to store the value object in a Map or Set. You must
 * provide both or neither methods, one must not exist without the other.
 *
 * Also, an important relationship between these methods must be upheld: if two
 * values are equal, they *must* return the same hashCode. If the values are not
 * equal, they might have the same hashCode; this is called a hash collision,
 * and while undesirable for performance reasons, it is acceptable.
 *
 *     if (a.equals(b)) {
 *       assert( a.hashCode() === b.hashCode() );
 *     }
 *
 * All Immutable collections are Value Objects: they implement `equals()`
 * and `hashCode()`.
 */
function is(valueA, valueB) {
  if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
    return true;
  }
  if (!valueA || !valueB) {
    return false;
  }
  if (
    typeof valueA.valueOf === 'function' &&
    typeof valueB.valueOf === 'function'
  ) {
    valueA = valueA.valueOf();
    valueB = valueB.valueOf();
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
  }
  return !!(
    isValueObject(valueA) &&
    isValueObject(valueB) &&
    valueA.equals(valueB)
  );
}

var imul =
  typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2
    ? Math.imul
    : function imul(a, b) {
        a |= 0; // int
        b |= 0; // int
        var c = a & 0xffff;
        var d = b & 0xffff;
        // Shift by 0 fixes the sign on the high part.
        return (c * d + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0)) | 0; // int
      };

// v8 has an optimization for storing 31-bit signed numbers.
// Values which have either 00 or 11 as the high order bits qualify.
// This function drops the highest order bit in a signed number, maintaining
// the sign bit.
function smi(i32) {
  return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}

var defaultValueOf = Object.prototype.valueOf;

function hash(o) {
  switch (typeof o) {
    case 'boolean':
      // The hash values for built-in constants are a 1 value for each 5-byte
      // shift region expect for the first, which encodes the value. This
      // reduces the odds of a hash collision for these common values.
      return o ? 0x42108421 : 0x42108420;
    case 'number':
      return hashNumber(o);
    case 'string':
      return o.length > STRING_HASH_CACHE_MIN_STRLEN
        ? cachedHashString(o)
        : hashString(o);
    case 'object':
    case 'function':
      if (o === null) {
        return 0x42108422;
      }
      if (typeof o.hashCode === 'function') {
        // Drop any high bits from accidentally long hash codes.
        return smi(o.hashCode(o));
      }
      if (o.valueOf !== defaultValueOf && typeof o.valueOf === 'function') {
        o = o.valueOf(o);
      }
      return hashJSObj(o);
    case 'undefined':
      return 0x42108423;
    default:
      if (typeof o.toString === 'function') {
        return hashString(o.toString());
      }
      throw new Error('Value type ' + typeof o + ' cannot be hashed.');
  }
}

// Compress arbitrarily large numbers into smi hashes.
function hashNumber(n) {
  if (n !== n || n === Infinity) {
    return 0;
  }
  var hash = n | 0;
  if (hash !== n) {
    hash ^= n * 0xffffffff;
  }
  while (n > 0xffffffff) {
    n /= 0xffffffff;
    hash ^= n;
  }
  return smi(hash);
}

function cachedHashString(string) {
  var hashed = stringHashCache[string];
  if (hashed === undefined) {
    hashed = hashString(string);
    if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
      STRING_HASH_CACHE_SIZE = 0;
      stringHashCache = {};
    }
    STRING_HASH_CACHE_SIZE++;
    stringHashCache[string] = hashed;
  }
  return hashed;
}

// http://jsperf.com/hashing-strings
function hashString(string) {
  // This is the hash from JVM
  // The hash code for a string is computed as
  // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
  // where s[i] is the ith character of the string and n is the length of
  // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
  // (exclusive) by dropping high bits.
  var hashed = 0;
  for (var ii = 0; ii < string.length; ii++) {
    hashed = (31 * hashed + string.charCodeAt(ii)) | 0;
  }
  return smi(hashed);
}

function hashJSObj(obj) {
  var hashed;
  if (usingWeakMap) {
    hashed = weakMap.get(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = obj[UID_HASH_KEY];
  if (hashed !== undefined) {
    return hashed;
  }

  if (!canDefineProperty) {
    hashed = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
    if (hashed !== undefined) {
      return hashed;
    }

    hashed = getIENodeHash(obj);
    if (hashed !== undefined) {
      return hashed;
    }
  }

  hashed = ++objHashUID;
  if (objHashUID & 0x40000000) {
    objHashUID = 0;
  }

  if (usingWeakMap) {
    weakMap.set(obj, hashed);
  } else if (isExtensible !== undefined && isExtensible(obj) === false) {
    throw new Error('Non-extensible objects are not allowed as keys.');
  } else if (canDefineProperty) {
    Object.defineProperty(obj, UID_HASH_KEY, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: hashed,
    });
  } else if (
    obj.propertyIsEnumerable !== undefined &&
    obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable
  ) {
    // Since we can't define a non-enumerable property on the object
    // we'll hijack one of the less-used non-enumerable properties to
    // save our hash on it. Since this is a function it will not show up in
    // `JSON.stringify` which is what we want.
    obj.propertyIsEnumerable = function() {
      return this.constructor.prototype.propertyIsEnumerable.apply(
        this,
        arguments
      );
    };
    obj.propertyIsEnumerable[UID_HASH_KEY] = hashed;
  } else if (obj.nodeType !== undefined) {
    // At this point we couldn't get the IE `uniqueID` to use as a hash
    // and we couldn't use a non-enumerable property to exploit the
    // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
    // itself.
    obj[UID_HASH_KEY] = hashed;
  } else {
    throw new Error('Unable to set a non-enumerable property on object.');
  }

  return hashed;
}

// Get references to ES5 object methods.
var isExtensible = Object.isExtensible;

// True if Object.defineProperty works as expected. IE8 fails this test.
var canDefineProperty = (function() {
  try {
    Object.defineProperty({}, '@', {});
    return true;
  } catch (e) {
    return false;
  }
})();

// IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
// and avoid memory leaks from the IE cloneNode bug.
function getIENodeHash(node) {
  if (node && node.nodeType > 0) {
    switch (node.nodeType) {
      case 1: // Element
        return node.uniqueID;
      case 9: // Document
        return node.documentElement && node.documentElement.uniqueID;
    }
  }
}

// If possible, use a WeakMap.
var usingWeakMap = typeof WeakMap === 'function';
var weakMap;
if (usingWeakMap) {
  weakMap = new WeakMap();
}

var objHashUID = 0;

var UID_HASH_KEY = '__immutablehash__';
if (typeof Symbol === 'function') {
  UID_HASH_KEY = Symbol(UID_HASH_KEY);
}

var STRING_HASH_CACHE_MIN_STRLEN = 16;
var STRING_HASH_CACHE_MAX_SIZE = 255;
var STRING_HASH_CACHE_SIZE = 0;
var stringHashCache = {};

var ToKeyedSequence = /*@__PURE__*/(function (KeyedSeq$$1) {
  function ToKeyedSequence(indexed, useKeys) {
    this._iter = indexed;
    this._useKeys = useKeys;
    this.size = indexed.size;
  }

  if ( KeyedSeq$$1 ) ToKeyedSequence.__proto__ = KeyedSeq$$1;
  ToKeyedSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  ToKeyedSequence.prototype.constructor = ToKeyedSequence;

  ToKeyedSequence.prototype.get = function get (key, notSetValue) {
    return this._iter.get(key, notSetValue);
  };

  ToKeyedSequence.prototype.has = function has (key) {
    return this._iter.has(key);
  };

  ToKeyedSequence.prototype.valueSeq = function valueSeq () {
    return this._iter.valueSeq();
  };

  ToKeyedSequence.prototype.reverse = function reverse () {
    var this$1 = this;

    var reversedSequence = reverseFactory(this, true);
    if (!this._useKeys) {
      reversedSequence.valueSeq = function () { return this$1._iter.toSeq().reverse(); };
    }
    return reversedSequence;
  };

  ToKeyedSequence.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var mappedSequence = mapFactory(this, mapper, context);
    if (!this._useKeys) {
      mappedSequence.valueSeq = function () { return this$1._iter.toSeq().map(mapper, context); };
    }
    return mappedSequence;
  };

  ToKeyedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v, k) { return fn(v, k, this$1); }, reverse);
  };

  ToKeyedSequence.prototype.__iterator = function __iterator (type, reverse) {
    return this._iter.__iterator(type, reverse);
  };

  return ToKeyedSequence;
}(KeyedSeq));
ToKeyedSequence.prototype[IS_ORDERED_SYMBOL] = true;

var ToIndexedSequence = /*@__PURE__*/(function (IndexedSeq$$1) {
  function ToIndexedSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( IndexedSeq$$1 ) ToIndexedSequence.__proto__ = IndexedSeq$$1;
  ToIndexedSequence.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  ToIndexedSequence.prototype.constructor = ToIndexedSequence;

  ToIndexedSequence.prototype.includes = function includes (value) {
    return this._iter.includes(value);
  };

  ToIndexedSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(this);
    return this._iter.__iterate(
      function (v) { return fn(v, reverse ? this$1.size - ++i : i++, this$1); },
      reverse
    );
  };

  ToIndexedSequence.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    var i = 0;
    reverse && ensureSize(this);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(
            type,
            reverse ? this$1.size - ++i : i++,
            step.value,
            step
          );
    });
  };

  return ToIndexedSequence;
}(IndexedSeq));

var ToSetSequence = /*@__PURE__*/(function (SetSeq$$1) {
  function ToSetSequence(iter) {
    this._iter = iter;
    this.size = iter.size;
  }

  if ( SetSeq$$1 ) ToSetSequence.__proto__ = SetSeq$$1;
  ToSetSequence.prototype = Object.create( SetSeq$$1 && SetSeq$$1.prototype );
  ToSetSequence.prototype.constructor = ToSetSequence;

  ToSetSequence.prototype.has = function has (key) {
    return this._iter.includes(key);
  };

  ToSetSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (v) { return fn(v, v, this$1); }, reverse);
  };

  ToSetSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      return step.done
        ? step
        : iteratorValue(type, step.value, step.value, step);
    });
  };

  return ToSetSequence;
}(SetSeq));

var FromEntriesSequence = /*@__PURE__*/(function (KeyedSeq$$1) {
  function FromEntriesSequence(entries) {
    this._iter = entries;
    this.size = entries.size;
  }

  if ( KeyedSeq$$1 ) FromEntriesSequence.__proto__ = KeyedSeq$$1;
  FromEntriesSequence.prototype = Object.create( KeyedSeq$$1 && KeyedSeq$$1.prototype );
  FromEntriesSequence.prototype.constructor = FromEntriesSequence;

  FromEntriesSequence.prototype.entrySeq = function entrySeq () {
    return this._iter.toSeq();
  };

  FromEntriesSequence.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._iter.__iterate(function (entry) {
      // Check if entry exists first so array access doesn't throw for holes
      // in the parent iteration.
      if (entry) {
        validateEntry(entry);
        var indexedCollection = isCollection(entry);
        return fn(
          indexedCollection ? entry.get(1) : entry[1],
          indexedCollection ? entry.get(0) : entry[0],
          this$1
        );
      }
    }, reverse);
  };

  FromEntriesSequence.prototype.__iterator = function __iterator (type, reverse) {
    var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedCollection = isCollection(entry);
          return iteratorValue(
            type,
            indexedCollection ? entry.get(0) : entry[0],
            indexedCollection ? entry.get(1) : entry[1],
            step
          );
        }
      }
    });
  };

  return FromEntriesSequence;
}(KeyedSeq));

ToIndexedSequence.prototype.cacheResult = ToKeyedSequence.prototype.cacheResult = ToSetSequence.prototype.cacheResult = FromEntriesSequence.prototype.cacheResult = cacheResultThrough;

function flipFactory(collection) {
  var flipSequence = makeSequence(collection);
  flipSequence._iter = collection;
  flipSequence.size = collection.size;
  flipSequence.flip = function () { return collection; };
  flipSequence.reverse = function() {
    var reversedSequence = collection.reverse.apply(this); // super.reverse()
    reversedSequence.flip = function () { return collection.reverse(); };
    return reversedSequence;
  };
  flipSequence.has = function (key) { return collection.includes(key); };
  flipSequence.includes = function (key) { return collection.has(key); };
  flipSequence.cacheResult = cacheResultThrough;
  flipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(function (v, k) { return fn(k, v, this$1) !== false; }, reverse);
  };
  flipSequence.__iteratorUncached = function(type, reverse) {
    if (type === ITERATE_ENTRIES) {
      var iterator = collection.__iterator(type, reverse);
      return new Iterator(function () {
        var step = iterator.next();
        if (!step.done) {
          var k = step.value[0];
          step.value[0] = step.value[1];
          step.value[1] = k;
        }
        return step;
      });
    }
    return collection.__iterator(
      type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
      reverse
    );
  };
  return flipSequence;
}

function mapFactory(collection, mapper, context) {
  var mappedSequence = makeSequence(collection);
  mappedSequence.size = collection.size;
  mappedSequence.has = function (key) { return collection.has(key); };
  mappedSequence.get = function (key, notSetValue) {
    var v = collection.get(key, NOT_SET);
    return v === NOT_SET
      ? notSetValue
      : mapper.call(context, v, key, collection);
  };
  mappedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    return collection.__iterate(
      function (v, k, c) { return fn(mapper.call(context, v, k, c), k, this$1) !== false; },
      reverse
    );
  };
  mappedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var key = entry[0];
      return iteratorValue(
        type,
        key,
        mapper.call(context, entry[1], key, collection),
        step
      );
    });
  };
  return mappedSequence;
}

function reverseFactory(collection, useKeys) {
  var this$1 = this;

  var reversedSequence = makeSequence(collection);
  reversedSequence._iter = collection;
  reversedSequence.size = collection.size;
  reversedSequence.reverse = function () { return collection; };
  if (collection.flip) {
    reversedSequence.flip = function() {
      var flipSequence = flipFactory(collection);
      flipSequence.reverse = function () { return collection.flip(); };
      return flipSequence;
    };
  }
  reversedSequence.get = function (key, notSetValue) { return collection.get(useKeys ? key : -1 - key, notSetValue); };
  reversedSequence.has = function (key) { return collection.has(useKeys ? key : -1 - key); };
  reversedSequence.includes = function (value) { return collection.includes(value); };
  reversedSequence.cacheResult = cacheResultThrough;
  reversedSequence.__iterate = function(fn, reverse) {
    var this$1 = this;

    var i = 0;
    reverse && ensureSize(collection);
    return collection.__iterate(
      function (v, k) { return fn(v, useKeys ? k : reverse ? this$1.size - ++i : i++, this$1); },
      !reverse
    );
  };
  reversedSequence.__iterator = function (type, reverse) {
    var i = 0;
    reverse && ensureSize(collection);
    var iterator = collection.__iterator(ITERATE_ENTRIES, !reverse);
    return new Iterator(function () {
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      return iteratorValue(
        type,
        useKeys ? entry[0] : reverse ? this$1.size - ++i : i++,
        entry[1],
        step
      );
    });
  };
  return reversedSequence;
}

function filterFactory(collection, predicate, context, useKeys) {
  var filterSequence = makeSequence(collection);
  if (useKeys) {
    filterSequence.has = function (key) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && !!predicate.call(context, v, key, collection);
    };
    filterSequence.get = function (key, notSetValue) {
      var v = collection.get(key, NOT_SET);
      return v !== NOT_SET && predicate.call(context, v, key, collection)
        ? v
        : notSetValue;
    };
  }
  filterSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    }, reverse);
    return iterations;
  };
  filterSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterations = 0;
    return new Iterator(function () {
      while (true) {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        var value = entry[1];
        if (predicate.call(context, value, key, collection)) {
          return iteratorValue(type, useKeys ? key : iterations++, value, step);
        }
      }
    });
  };
  return filterSequence;
}

function countByFactory(collection, grouper, context) {
  var groups = Map().asMutable();
  collection.__iterate(function (v, k) {
    groups.update(grouper.call(context, v, k, collection), 0, function (a) { return a + 1; });
  });
  return groups.asImmutable();
}

function groupByFactory(collection, grouper, context) {
  var isKeyedIter = isKeyed(collection);
  var groups = (isOrdered(collection) ? OrderedMap() : Map()).asMutable();
  collection.__iterate(function (v, k) {
    groups.update(
      grouper.call(context, v, k, collection),
      function (a) { return ((a = a || []), a.push(isKeyedIter ? [k, v] : v), a); }
    );
  });
  var coerce = collectionClass(collection);
  return groups.map(function (arr) { return reify(collection, coerce(arr)); }).asImmutable();
}

function sliceFactory(collection, begin, end, useKeys) {
  var originalSize = collection.size;

  if (wholeSlice(begin, end, originalSize)) {
    return collection;
  }

  var resolvedBegin = resolveBegin(begin, originalSize);
  var resolvedEnd = resolveEnd(end, originalSize);

  // begin or end will be NaN if they were provided as negative numbers and
  // this collection's size is unknown. In that case, cache first so there is
  // a known size and these do not resolve to NaN.
  if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
    return sliceFactory(collection.toSeq().cacheResult(), begin, end, useKeys);
  }

  // Note: resolvedEnd is undefined when the original sequence's length is
  // unknown and this slice did not supply an end and should contain all
  // elements after resolvedBegin.
  // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
  var resolvedSize = resolvedEnd - resolvedBegin;
  var sliceSize;
  if (resolvedSize === resolvedSize) {
    sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
  }

  var sliceSeq = makeSequence(collection);

  // If collection.size is undefined, the size of the realized sliceSeq is
  // unknown at this point unless the number of items to slice is 0
  sliceSeq.size =
    sliceSize === 0 ? sliceSize : (collection.size && sliceSize) || undefined;

  if (!useKeys && isSeq(collection) && sliceSize >= 0) {
    sliceSeq.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      return index >= 0 && index < sliceSize
        ? collection.get(index + resolvedBegin, notSetValue)
        : notSetValue;
    };
  }

  sliceSeq.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (sliceSize === 0) {
      return 0;
    }
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var skipped = 0;
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k) {
      if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
        iterations++;
        return (
          fn(v, useKeys ? k : iterations - 1, this$1) !== false &&
          iterations !== sliceSize
        );
      }
    });
    return iterations;
  };

  sliceSeq.__iteratorUncached = function(type, reverse) {
    if (sliceSize !== 0 && reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    // Don't bother instantiating parent iterator if taking 0.
    if (sliceSize === 0) {
      return new Iterator(iteratorDone);
    }
    var iterator = collection.__iterator(type, reverse);
    var skipped = 0;
    var iterations = 0;
    return new Iterator(function () {
      while (skipped++ < resolvedBegin) {
        iterator.next();
      }
      if (++iterations > sliceSize) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (useKeys || type === ITERATE_VALUES || step.done) {
        return step;
      }
      if (type === ITERATE_KEYS) {
        return iteratorValue(type, iterations - 1, undefined, step);
      }
      return iteratorValue(type, iterations - 1, step.value[1], step);
    });
  };

  return sliceSeq;
}

function takeWhileFactory(collection, predicate, context) {
  var takeSequence = makeSequence(collection);
  takeSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    collection.__iterate(
      function (v, k, c) { return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$1); }
    );
    return iterations;
  };
  takeSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var iterating = true;
    return new Iterator(function () {
      if (!iterating) {
        return iteratorDone();
      }
      var step = iterator.next();
      if (step.done) {
        return step;
      }
      var entry = step.value;
      var k = entry[0];
      var v = entry[1];
      if (!predicate.call(context, v, k, this$1)) {
        iterating = false;
        return iteratorDone();
      }
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return takeSequence;
}

function skipWhileFactory(collection, predicate, context, useKeys) {
  var skipSequence = makeSequence(collection);
  skipSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var isSkipping = true;
    var iterations = 0;
    collection.__iterate(function (v, k, c) {
      if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
        iterations++;
        return fn(v, useKeys ? k : iterations - 1, this$1);
      }
    });
    return iterations;
  };
  skipSequence.__iteratorUncached = function(type, reverse) {
    var this$1 = this;

    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(ITERATE_ENTRIES, reverse);
    var skipping = true;
    var iterations = 0;
    return new Iterator(function () {
      var step;
      var k;
      var v;
      do {
        step = iterator.next();
        if (step.done) {
          if (useKeys || type === ITERATE_VALUES) {
            return step;
          }
          if (type === ITERATE_KEYS) {
            return iteratorValue(type, iterations++, undefined, step);
          }
          return iteratorValue(type, iterations++, step.value[1], step);
        }
        var entry = step.value;
        k = entry[0];
        v = entry[1];
        skipping && (skipping = predicate.call(context, v, k, this$1));
      } while (skipping);
      return type === ITERATE_ENTRIES ? step : iteratorValue(type, k, v, step);
    });
  };
  return skipSequence;
}

function concatFactory(collection, values) {
  var isKeyedCollection = isKeyed(collection);
  var iters = [collection]
    .concat(values)
    .map(function (v) {
      if (!isCollection(v)) {
        v = isKeyedCollection
          ? keyedSeqFromValue(v)
          : indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedCollection) {
        v = KeyedCollection(v);
      }
      return v;
    })
    .filter(function (v) { return v.size !== 0; });

  if (iters.length === 0) {
    return collection;
  }

  if (iters.length === 1) {
    var singleton = iters[0];
    if (
      singleton === collection ||
      (isKeyedCollection && isKeyed(singleton)) ||
      (isIndexed(collection) && isIndexed(singleton))
    ) {
      return singleton;
    }
  }

  var concatSeq = new ArraySeq(iters);
  if (isKeyedCollection) {
    concatSeq = concatSeq.toKeyedSeq();
  } else if (!isIndexed(collection)) {
    concatSeq = concatSeq.toSetSeq();
  }
  concatSeq = concatSeq.flatten(true);
  concatSeq.size = iters.reduce(function (sum, seq) {
    if (sum !== undefined) {
      var size = seq.size;
      if (size !== undefined) {
        return sum + size;
      }
    }
  }, 0);
  return concatSeq;
}

function flattenFactory(collection, depth, useKeys) {
  var flatSequence = makeSequence(collection);
  flatSequence.__iterateUncached = function(fn, reverse) {
    if (reverse) {
      return this.cacheResult().__iterate(fn, reverse);
    }
    var iterations = 0;
    var stopped = false;
    function flatDeep(iter, currentDepth) {
      iter.__iterate(function (v, k) {
        if ((!depth || currentDepth < depth) && isCollection(v)) {
          flatDeep(v, currentDepth + 1);
        } else {
          iterations++;
          if (fn(v, useKeys ? k : iterations - 1, flatSequence) === false) {
            stopped = true;
          }
        }
        return !stopped;
      }, reverse);
    }
    flatDeep(collection, 0);
    return iterations;
  };
  flatSequence.__iteratorUncached = function(type, reverse) {
    if (reverse) {
      return this.cacheResult().__iterator(type, reverse);
    }
    var iterator = collection.__iterator(type, reverse);
    var stack = [];
    var iterations = 0;
    return new Iterator(function () {
      while (iterator) {
        var step = iterator.next();
        if (step.done !== false) {
          iterator = stack.pop();
          continue;
        }
        var v = step.value;
        if (type === ITERATE_ENTRIES) {
          v = v[1];
        }
        if ((!depth || stack.length < depth) && isCollection(v)) {
          stack.push(iterator);
          iterator = v.__iterator(type, reverse);
        } else {
          return useKeys ? step : iteratorValue(type, iterations++, v, step);
        }
      }
      return iteratorDone();
    });
  };
  return flatSequence;
}

function flatMapFactory(collection, mapper, context) {
  var coerce = collectionClass(collection);
  return collection
    .toSeq()
    .map(function (v, k) { return coerce(mapper.call(context, v, k, collection)); })
    .flatten(true);
}

function interposeFactory(collection, separator) {
  var interposedSequence = makeSequence(collection);
  interposedSequence.size = collection.size && collection.size * 2 - 1;
  interposedSequence.__iterateUncached = function(fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    collection.__iterate(
      function (v) { return (!iterations || fn(separator, iterations++, this$1) !== false) &&
        fn(v, iterations++, this$1) !== false; },
      reverse
    );
    return iterations;
  };
  interposedSequence.__iteratorUncached = function(type, reverse) {
    var iterator = collection.__iterator(ITERATE_VALUES, reverse);
    var iterations = 0;
    var step;
    return new Iterator(function () {
      if (!step || iterations % 2) {
        step = iterator.next();
        if (step.done) {
          return step;
        }
      }
      return iterations % 2
        ? iteratorValue(type, iterations++, separator)
        : iteratorValue(type, iterations++, step.value, step);
    });
  };
  return interposedSequence;
}

function sortFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  var isKeyedCollection = isKeyed(collection);
  var index = 0;
  var entries = collection
    .toSeq()
    .map(function (v, k) { return [k, v, index++, mapper ? mapper(v, k, collection) : v]; })
    .valueSeq()
    .toArray();
  entries.sort(function (a, b) { return comparator(a[3], b[3]) || a[2] - b[2]; }).forEach(
    isKeyedCollection
      ? function (v, i) {
          entries[i].length = 2;
        }
      : function (v, i) {
          entries[i] = v[1];
        }
  );
  return isKeyedCollection
    ? KeyedSeq(entries)
    : isIndexed(collection)
      ? IndexedSeq(entries)
      : SetSeq(entries);
}

function maxFactory(collection, comparator, mapper) {
  if (!comparator) {
    comparator = defaultComparator;
  }
  if (mapper) {
    var entry = collection
      .toSeq()
      .map(function (v, k) { return [v, mapper(v, k, collection)]; })
      .reduce(function (a, b) { return (maxCompare(comparator, a[1], b[1]) ? b : a); });
    return entry && entry[0];
  }
  return collection.reduce(function (a, b) { return (maxCompare(comparator, a, b) ? b : a); });
}

function maxCompare(comparator, a, b) {
  var comp = comparator(b, a);
  // b is considered the new max if the comparator declares them equal, but
  // they are not equal and b is in fact a nullish value.
  return (
    (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) ||
    comp > 0
  );
}

function zipWithFactory(keyIter, zipper, iters, zipAll) {
  var zipSequence = makeSequence(keyIter);
  var sizes = new ArraySeq(iters).map(function (i) { return i.size; });
  zipSequence.size = zipAll ? sizes.max() : sizes.min();
  // Note: this a generic base implementation of __iterate in terms of
  // __iterator which may be more generically useful in the future.
  zipSequence.__iterate = function(fn, reverse) {
    /* generic:
    var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      iterations++;
      if (fn(step.value[1], step.value[0], this) === false) {
        break;
      }
    }
    return iterations;
    */
    // indexed:
    var iterator = this.__iterator(ITERATE_VALUES, reverse);
    var step;
    var iterations = 0;
    while (!(step = iterator.next()).done) {
      if (fn(step.value, iterations++, this) === false) {
        break;
      }
    }
    return iterations;
  };
  zipSequence.__iteratorUncached = function(type, reverse) {
    var iterators = iters.map(
      function (i) { return ((i = Collection(i)), getIterator(reverse ? i.reverse() : i)); }
    );
    var iterations = 0;
    var isDone = false;
    return new Iterator(function () {
      var steps;
      if (!isDone) {
        steps = iterators.map(function (i) { return i.next(); });
        isDone = zipAll ? steps.every(function (s) { return s.done; }) : steps.some(function (s) { return s.done; });
      }
      if (isDone) {
        return iteratorDone();
      }
      return iteratorValue(
        type,
        iterations++,
        zipper.apply(null, steps.map(function (s) { return s.value; }))
      );
    });
  };
  return zipSequence;
}

// #pragma Helper Functions

function reify(iter, seq) {
  return iter === seq ? iter : isSeq(iter) ? seq : iter.constructor(seq);
}

function validateEntry(entry) {
  if (entry !== Object(entry)) {
    throw new TypeError('Expected [K, V] tuple: ' + entry);
  }
}

function collectionClass(collection) {
  return isKeyed(collection)
    ? KeyedCollection
    : isIndexed(collection)
      ? IndexedCollection
      : SetCollection;
}

function makeSequence(collection) {
  return Object.create(
    (isKeyed(collection)
      ? KeyedSeq
      : isIndexed(collection)
        ? IndexedSeq
        : SetSeq
    ).prototype
  );
}

function cacheResultThrough() {
  if (this._iter.cacheResult) {
    this._iter.cacheResult();
    this.size = this._iter.size;
    return this;
  }
  return Seq.prototype.cacheResult.call(this);
}

function defaultComparator(a, b) {
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

  return a > b ? 1 : a < b ? -1 : 0;
}

// http://jsperf.com/copy-array-inline
function arrCopy(arr, offset) {
  offset = offset || 0;
  var len = Math.max(0, arr.length - offset);
  var newArr = new Array(len);
  for (var ii = 0; ii < len; ii++) {
    newArr[ii] = arr[ii + offset];
  }
  return newArr;
}

function invariant(condition, error) {
  if (!condition) { throw new Error(error); }
}

function assertNotInfinite(size) {
  invariant(
    size !== Infinity,
    'Cannot perform this action with an infinite size.'
  );
}

function coerceKeyPath(keyPath) {
  if (isArrayLike(keyPath) && typeof keyPath !== 'string') {
    return keyPath;
  }
  if (isOrdered(keyPath)) {
    return keyPath.toArray();
  }
  throw new TypeError(
    'Invalid keyPath: expected Ordered Collection or Array: ' + keyPath
  );
}

function isPlainObj(value) {
  return (
    value &&
    (typeof value.constructor !== 'function' ||
      value.constructor.name === 'Object')
  );
}

/**
 * Returns true if the value is a potentially-persistent data structure, either
 * provided by Immutable.js or a plain Array or Object.
 */
function isDataStructure(value) {
  return (
    typeof value === 'object' &&
    (isImmutable(value) || Array.isArray(value) || isPlainObj(value))
  );
}

/**
 * Converts a value to a string, adding quotes if a string was provided.
 */
function quoteString(value) {
  try {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  } catch (_ignoreError) {
    return JSON.stringify(value);
  }
}

function has(collection, key) {
  return isImmutable(collection)
    ? collection.has(key)
    : isDataStructure(collection) && hasOwnProperty.call(collection, key);
}

function get(collection, key, notSetValue) {
  return isImmutable(collection)
    ? collection.get(key, notSetValue)
    : !has(collection, key)
      ? notSetValue
      : typeof collection.get === 'function'
        ? collection.get(key)
        : collection[key];
}

function shallowCopy(from) {
  if (Array.isArray(from)) {
    return arrCopy(from);
  }
  var to = {};
  for (var key in from) {
    if (hasOwnProperty.call(from, key)) {
      to[key] = from[key];
    }
  }
  return to;
}

function remove(collection, key) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.remove) {
      throw new TypeError(
        'Cannot update immutable value without .remove() method: ' + collection
      );
    }
    return collection.remove(key);
  }
  if (!hasOwnProperty.call(collection, key)) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  if (Array.isArray(collectionCopy)) {
    collectionCopy.splice(key, 1);
  } else {
    delete collectionCopy[key];
  }
  return collectionCopy;
}

function set(collection, key, value) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot update non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    if (!collection.set) {
      throw new TypeError(
        'Cannot update immutable value without .set() method: ' + collection
      );
    }
    return collection.set(key, value);
  }
  if (hasOwnProperty.call(collection, key) && value === collection[key]) {
    return collection;
  }
  var collectionCopy = shallowCopy(collection);
  collectionCopy[key] = value;
  return collectionCopy;
}

function updateIn(collection, keyPath, notSetValue, updater) {
  if (!updater) {
    updater = notSetValue;
    notSetValue = undefined;
  }
  var updatedValue = updateInDeeply(
    isImmutable(collection),
    collection,
    coerceKeyPath(keyPath),
    0,
    notSetValue,
    updater
  );
  return updatedValue === NOT_SET ? notSetValue : updatedValue;
}

function updateInDeeply(
  inImmutable,
  existing,
  keyPath,
  i,
  notSetValue,
  updater
) {
  var wasNotSet = existing === NOT_SET;
  if (i === keyPath.length) {
    var existingValue = wasNotSet ? notSetValue : existing;
    var newValue = updater(existingValue);
    return newValue === existingValue ? existing : newValue;
  }
  if (!wasNotSet && !isDataStructure(existing)) {
    throw new TypeError(
      'Cannot update within non-data-structure value in path [' +
        keyPath.slice(0, i).map(quoteString) +
        ']: ' +
        existing
    );
  }
  var key = keyPath[i];
  var nextExisting = wasNotSet ? NOT_SET : get(existing, key, NOT_SET);
  var nextUpdated = updateInDeeply(
    nextExisting === NOT_SET ? inImmutable : isImmutable(nextExisting),
    nextExisting,
    keyPath,
    i + 1,
    notSetValue,
    updater
  );
  return nextUpdated === nextExisting
    ? existing
    : nextUpdated === NOT_SET
      ? remove(existing, key)
      : set(
          wasNotSet ? (inImmutable ? emptyMap() : {}) : existing,
          key,
          nextUpdated
        );
}

function setIn(collection, keyPath, value) {
  return updateIn(collection, keyPath, NOT_SET, function () { return value; });
}

function setIn$1(keyPath, v) {
  return setIn(this, keyPath, v);
}

function removeIn(collection, keyPath) {
  return updateIn(collection, keyPath, function () { return NOT_SET; });
}

function deleteIn(keyPath) {
  return removeIn(this, keyPath);
}

function update(collection, key, notSetValue, updater) {
  return updateIn(collection, [key], notSetValue, updater);
}

function update$1(key, notSetValue, updater) {
  return arguments.length === 1
    ? key(this)
    : update(this, key, notSetValue, updater);
}

function updateIn$1(keyPath, notSetValue, updater) {
  return updateIn(this, keyPath, notSetValue, updater);
}

function merge() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeIntoKeyedWith(this, iters);
}

function mergeWith(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  if (typeof merger !== 'function') {
    throw new TypeError('Invalid merger function: ' + merger);
  }
  return mergeIntoKeyedWith(this, iters, merger);
}

function mergeIntoKeyedWith(collection, collections, merger) {
  var iters = [];
  for (var ii = 0; ii < collections.length; ii++) {
    var collection$1 = KeyedCollection(collections[ii]);
    if (collection$1.size !== 0) {
      iters.push(collection$1);
    }
  }
  if (iters.length === 0) {
    return collection;
  }
  if (
    collection.toSeq().size === 0 &&
    !collection.__ownerID &&
    iters.length === 1
  ) {
    return collection.constructor(iters[0]);
  }
  return collection.withMutations(function (collection) {
    var mergeIntoCollection = merger
      ? function (value, key) {
          update(
            collection,
            key,
            NOT_SET,
            function (oldVal) { return (oldVal === NOT_SET ? value : merger(oldVal, value, key)); }
          );
        }
      : function (value, key) {
          collection.set(key, value);
        };
    for (var ii = 0; ii < iters.length; ii++) {
      iters[ii].forEach(mergeIntoCollection);
    }
  });
}

function merge$1(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeWithSources(collection, sources);
}

function mergeWith$1(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeWithSources(collection, sources, merger);
}

function mergeDeep(collection) {
  var sources = [], len = arguments.length - 1;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(collection, sources);
}

function mergeDeepWith(merger, collection) {
  var sources = [], len = arguments.length - 2;
  while ( len-- > 0 ) sources[ len ] = arguments[ len + 2 ];

  return mergeDeepWithSources(collection, sources, merger);
}

function mergeDeepWithSources(collection, sources, merger) {
  return mergeWithSources(collection, sources, deepMergerWith(merger));
}

function mergeWithSources(collection, sources, merger) {
  if (!isDataStructure(collection)) {
    throw new TypeError(
      'Cannot merge into non-data-structure value: ' + collection
    );
  }
  if (isImmutable(collection)) {
    return typeof merger === 'function' && collection.mergeWith
      ? collection.mergeWith.apply(collection, [ merger ].concat( sources ))
      : collection.merge
        ? collection.merge.apply(collection, sources)
        : collection.concat.apply(collection, sources);
  }
  var isArray = Array.isArray(collection);
  var merged = collection;
  var Collection$$1 = isArray ? IndexedCollection : KeyedCollection;
  var mergeItem = isArray
    ? function (value) {
        // Copy on write
        if (merged === collection) {
          merged = shallowCopy(merged);
        }
        merged.push(value);
      }
    : function (value, key) {
        var hasVal = hasOwnProperty.call(merged, key);
        var nextVal =
          hasVal && merger ? merger(merged[key], value, key) : value;
        if (!hasVal || nextVal !== merged[key]) {
          // Copy on write
          if (merged === collection) {
            merged = shallowCopy(merged);
          }
          merged[key] = nextVal;
        }
      };
  for (var i = 0; i < sources.length; i++) {
    Collection$$1(sources[i]).forEach(mergeItem);
  }
  return merged;
}

function deepMergerWith(merger) {
  function deepMerger(oldValue, newValue, key) {
    return isDataStructure(oldValue) && isDataStructure(newValue)
      ? mergeWithSources(oldValue, [newValue], deepMerger)
      : merger
        ? merger(oldValue, newValue, key)
        : newValue;
  }
  return deepMerger;
}

function mergeDeep$1() {
  var iters = [], len = arguments.length;
  while ( len-- ) iters[ len ] = arguments[ len ];

  return mergeDeepWithSources(this, iters);
}

function mergeDeepWith$1(merger) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return mergeDeepWithSources(this, iters, merger);
}

function mergeIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeWithSources(m, iters); });
}

function mergeDeepIn(keyPath) {
  var iters = [], len = arguments.length - 1;
  while ( len-- > 0 ) iters[ len ] = arguments[ len + 1 ];

  return updateIn(this, keyPath, emptyMap(), function (m) { return mergeDeepWithSources(m, iters); }
  );
}

function withMutations(fn) {
  var mutable = this.asMutable();
  fn(mutable);
  return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
}

function asMutable() {
  return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
}

function asImmutable() {
  return this.__ensureOwner();
}

function wasAltered() {
  return this.__altered;
}

var Map = /*@__PURE__*/(function (KeyedCollection$$1) {
  function Map(value) {
    return value === null || value === undefined
      ? emptyMap()
      : isMap(value) && !isOrdered(value)
        ? value
        : emptyMap().withMutations(function (map) {
            var iter = KeyedCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( KeyedCollection$$1 ) Map.__proto__ = KeyedCollection$$1;
  Map.prototype = Object.create( KeyedCollection$$1 && KeyedCollection$$1.prototype );
  Map.prototype.constructor = Map;

  Map.of = function of () {
    var keyValues = [], len = arguments.length;
    while ( len-- ) keyValues[ len ] = arguments[ len ];

    return emptyMap().withMutations(function (map) {
      for (var i = 0; i < keyValues.length; i += 2) {
        if (i + 1 >= keyValues.length) {
          throw new Error('Missing value for key: ' + keyValues[i]);
        }
        map.set(keyValues[i], keyValues[i + 1]);
      }
    });
  };

  Map.prototype.toString = function toString () {
    return this.__toString('Map {', '}');
  };

  // @pragma Access

  Map.prototype.get = function get (k, notSetValue) {
    return this._root
      ? this._root.get(0, undefined, k, notSetValue)
      : notSetValue;
  };

  // @pragma Modification

  Map.prototype.set = function set (k, v) {
    return updateMap(this, k, v);
  };

  Map.prototype.remove = function remove (k) {
    return updateMap(this, k, NOT_SET);
  };

  Map.prototype.deleteAll = function deleteAll (keys) {
    var collection = Collection(keys);

    if (collection.size === 0) {
      return this;
    }

    return this.withMutations(function (map) {
      collection.forEach(function (key) { return map.remove(key); });
    });
  };

  Map.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._root = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyMap();
  };

  // @pragma Composition

  Map.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator));
  };

  Map.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedMap(sortFactory(this, comparator, mapper));
  };

  Map.prototype.map = function map (mapper, context) {
    return this.withMutations(function (map) {
      map.forEach(function (value, key) {
        map.set(key, mapper.call(context, value, key, map));
      });
    });
  };

  // @pragma Mutability

  Map.prototype.__iterator = function __iterator (type, reverse) {
    return new MapIterator(this, type, reverse);
  };

  Map.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    var iterations = 0;
    this._root &&
      this._root.iterate(function (entry) {
        iterations++;
        return fn(entry[1], entry[0], this$1);
      }, reverse);
    return iterations;
  };

  Map.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyMap();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeMap(this.size, this._root, ownerID, this.__hash);
  };

  return Map;
}(KeyedCollection));

Map.isMap = isMap;

var MapPrototype = Map.prototype;
MapPrototype[IS_MAP_SYMBOL] = true;
MapPrototype[DELETE] = MapPrototype.remove;
MapPrototype.removeAll = MapPrototype.deleteAll;
MapPrototype.setIn = setIn$1;
MapPrototype.removeIn = MapPrototype.deleteIn = deleteIn;
MapPrototype.update = update$1;
MapPrototype.updateIn = updateIn$1;
MapPrototype.merge = MapPrototype.concat = merge;
MapPrototype.mergeWith = mergeWith;
MapPrototype.mergeDeep = mergeDeep$1;
MapPrototype.mergeDeepWith = mergeDeepWith$1;
MapPrototype.mergeIn = mergeIn;
MapPrototype.mergeDeepIn = mergeDeepIn;
MapPrototype.withMutations = withMutations;
MapPrototype.wasAltered = wasAltered;
MapPrototype.asImmutable = asImmutable;
MapPrototype['@@transducer/init'] = MapPrototype.asMutable = asMutable;
MapPrototype['@@transducer/step'] = function(result, arr) {
  return result.set(arr[0], arr[1]);
};
MapPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

// #pragma Trie Nodes

var ArrayMapNode = function ArrayMapNode(ownerID, entries) {
  this.ownerID = ownerID;
  this.entries = entries;
};

ArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

ArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && entries.length === 1) {
    return; // undefined
  }

  if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
    return createNodes(ownerID, entries, key, value);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new ArrayMapNode(ownerID, newEntries);
};

var BitmapIndexedNode = function BitmapIndexedNode(ownerID, bitmap, nodes) {
  this.ownerID = ownerID;
  this.bitmap = bitmap;
  this.nodes = nodes;
};

BitmapIndexedNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var bit = 1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK);
  var bitmap = this.bitmap;
  return (bitmap & bit) === 0
    ? notSetValue
    : this.nodes[popCount(bitmap & (bit - 1))].get(
        shift + SHIFT,
        keyHash,
        key,
        notSetValue
      );
};

BitmapIndexedNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var bit = 1 << keyHashFrag;
  var bitmap = this.bitmap;
  var exists = (bitmap & bit) !== 0;

  if (!exists && value === NOT_SET) {
    return this;
  }

  var idx = popCount(bitmap & (bit - 1));
  var nodes = this.nodes;
  var node = exists ? nodes[idx] : undefined;
  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );

  if (newNode === node) {
    return this;
  }

  if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
    return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
  }

  if (
    exists &&
    !newNode &&
    nodes.length === 2 &&
    isLeafNode(nodes[idx ^ 1])
  ) {
    return nodes[idx ^ 1];
  }

  if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
    return newNode;
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newBitmap = exists ? (newNode ? bitmap : bitmap ^ bit) : bitmap | bit;
  var newNodes = exists
    ? newNode
      ? setAt(nodes, idx, newNode, isEditable)
      : spliceOut(nodes, idx, isEditable)
    : spliceIn(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.bitmap = newBitmap;
    this.nodes = newNodes;
    return this;
  }

  return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
};

var HashArrayMapNode = function HashArrayMapNode(ownerID, count, nodes) {
  this.ownerID = ownerID;
  this.count = count;
  this.nodes = nodes;
};

HashArrayMapNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var node = this.nodes[idx];
  return node
    ? node.get(shift + SHIFT, keyHash, key, notSetValue)
    : notSetValue;
};

HashArrayMapNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }
  var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
  var removed = value === NOT_SET;
  var nodes = this.nodes;
  var node = nodes[idx];

  if (removed && !node) {
    return this;
  }

  var newNode = updateNode(
    node,
    ownerID,
    shift + SHIFT,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
  if (newNode === node) {
    return this;
  }

  var newCount = this.count;
  if (!node) {
    newCount++;
  } else if (!newNode) {
    newCount--;
    if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
      return packNodes(ownerID, nodes, newCount, idx);
    }
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newNodes = setAt(nodes, idx, newNode, isEditable);

  if (isEditable) {
    this.count = newCount;
    this.nodes = newNodes;
    return this;
  }

  return new HashArrayMapNode(ownerID, newCount, newNodes);
};

var HashCollisionNode = function HashCollisionNode(ownerID, keyHash, entries) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entries = entries;
};

HashCollisionNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  var entries = this.entries;
  for (var ii = 0, len = entries.length; ii < len; ii++) {
    if (is(key, entries[ii][0])) {
      return entries[ii][1];
    }
  }
  return notSetValue;
};

HashCollisionNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  if (keyHash === undefined) {
    keyHash = hash(key);
  }

  var removed = value === NOT_SET;

  if (keyHash !== this.keyHash) {
    if (removed) {
      return this;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
  }

  var entries = this.entries;
  var idx = 0;
  var len = entries.length;
  for (; idx < len; idx++) {
    if (is(key, entries[idx][0])) {
      break;
    }
  }
  var exists = idx < len;

  if (exists ? entries[idx][1] === value : removed) {
    return this;
  }

  SetRef(didAlter);
  (removed || !exists) && SetRef(didChangeSize);

  if (removed && len === 2) {
    return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
  }

  var isEditable = ownerID && ownerID === this.ownerID;
  var newEntries = isEditable ? entries : arrCopy(entries);

  if (exists) {
    if (removed) {
      idx === len - 1
        ? newEntries.pop()
        : (newEntries[idx] = newEntries.pop());
    } else {
      newEntries[idx] = [key, value];
    }
  } else {
    newEntries.push([key, value]);
  }

  if (isEditable) {
    this.entries = newEntries;
    return this;
  }

  return new HashCollisionNode(ownerID, this.keyHash, newEntries);
};

var ValueNode = function ValueNode(ownerID, keyHash, entry) {
  this.ownerID = ownerID;
  this.keyHash = keyHash;
  this.entry = entry;
};

ValueNode.prototype.get = function get (shift, keyHash, key, notSetValue) {
  return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
};

ValueNode.prototype.update = function update (ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
  var removed = value === NOT_SET;
  var keyMatch = is(key, this.entry[0]);
  if (keyMatch ? value === this.entry[1] : removed) {
    return this;
  }

  SetRef(didAlter);

  if (removed) {
    SetRef(didChangeSize);
    return; // undefined
  }

  if (keyMatch) {
    if (ownerID && ownerID === this.ownerID) {
      this.entry[1] = value;
      return this;
    }
    return new ValueNode(ownerID, this.keyHash, [key, value]);
  }

  SetRef(didChangeSize);
  return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
};

// #pragma Iterators

ArrayMapNode.prototype.iterate = HashCollisionNode.prototype.iterate = function(
  fn,
  reverse
) {
  var entries = this.entries;
  for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
    if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
      return false;
    }
  }
};

BitmapIndexedNode.prototype.iterate = HashArrayMapNode.prototype.iterate = function(
  fn,
  reverse
) {
  var nodes = this.nodes;
  for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
    var node = nodes[reverse ? maxIndex - ii : ii];
    if (node && node.iterate(fn, reverse) === false) {
      return false;
    }
  }
};

// eslint-disable-next-line no-unused-vars
ValueNode.prototype.iterate = function(fn, reverse) {
  return fn(this.entry);
};

var MapIterator = /*@__PURE__*/(function (Iterator$$1) {
  function MapIterator(map, type, reverse) {
    this._type = type;
    this._reverse = reverse;
    this._stack = map._root && mapIteratorFrame(map._root);
  }

  if ( Iterator$$1 ) MapIterator.__proto__ = Iterator$$1;
  MapIterator.prototype = Object.create( Iterator$$1 && Iterator$$1.prototype );
  MapIterator.prototype.constructor = MapIterator;

  MapIterator.prototype.next = function next () {
    var type = this._type;
    var stack = this._stack;
    while (stack) {
      var node = stack.node;
      var index = stack.index++;
      var maxIndex = (void 0);
      if (node.entry) {
        if (index === 0) {
          return mapIteratorValue(type, node.entry);
        }
      } else if (node.entries) {
        maxIndex = node.entries.length - 1;
        if (index <= maxIndex) {
          return mapIteratorValue(
            type,
            node.entries[this._reverse ? maxIndex - index : index]
          );
        }
      } else {
        maxIndex = node.nodes.length - 1;
        if (index <= maxIndex) {
          var subNode = node.nodes[this._reverse ? maxIndex - index : index];
          if (subNode) {
            if (subNode.entry) {
              return mapIteratorValue(type, subNode.entry);
            }
            stack = this._stack = mapIteratorFrame(subNode, stack);
          }
          continue;
        }
      }
      stack = this._stack = this._stack.__prev;
    }
    return iteratorDone();
  };

  return MapIterator;
}(Iterator));

function mapIteratorValue(type, entry) {
  return iteratorValue(type, entry[0], entry[1]);
}

function mapIteratorFrame(node, prev) {
  return {
    node: node,
    index: 0,
    __prev: prev,
  };
}

function makeMap(size, root, ownerID, hash$$1) {
  var map = Object.create(MapPrototype);
  map.size = size;
  map._root = root;
  map.__ownerID = ownerID;
  map.__hash = hash$$1;
  map.__altered = false;
  return map;
}

var EMPTY_MAP;
function emptyMap() {
  return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
}

function updateMap(map, k, v) {
  var newRoot;
  var newSize;
  if (!map._root) {
    if (v === NOT_SET) {
      return map;
    }
    newSize = 1;
    newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
  } else {
    var didChangeSize = MakeRef();
    var didAlter = MakeRef();
    newRoot = updateNode(
      map._root,
      map.__ownerID,
      0,
      undefined,
      k,
      v,
      didChangeSize,
      didAlter
    );
    if (!didAlter.value) {
      return map;
    }
    newSize = map.size + (didChangeSize.value ? (v === NOT_SET ? -1 : 1) : 0);
  }
  if (map.__ownerID) {
    map.size = newSize;
    map._root = newRoot;
    map.__hash = undefined;
    map.__altered = true;
    return map;
  }
  return newRoot ? makeMap(newSize, newRoot) : emptyMap();
}

function updateNode(
  node,
  ownerID,
  shift,
  keyHash,
  key,
  value,
  didChangeSize,
  didAlter
) {
  if (!node) {
    if (value === NOT_SET) {
      return node;
    }
    SetRef(didAlter);
    SetRef(didChangeSize);
    return new ValueNode(ownerID, keyHash, [key, value]);
  }
  return node.update(
    ownerID,
    shift,
    keyHash,
    key,
    value,
    didChangeSize,
    didAlter
  );
}

function isLeafNode(node) {
  return (
    node.constructor === ValueNode || node.constructor === HashCollisionNode
  );
}

function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
  if (node.keyHash === keyHash) {
    return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
  }

  var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
  var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

  var newNode;
  var nodes =
    idx1 === idx2
      ? [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)]
      : ((newNode = new ValueNode(ownerID, keyHash, entry)),
        idx1 < idx2 ? [node, newNode] : [newNode, node]);

  return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
}

function createNodes(ownerID, entries, key, value) {
  if (!ownerID) {
    ownerID = new OwnerID();
  }
  var node = new ValueNode(ownerID, hash(key), [key, value]);
  for (var ii = 0; ii < entries.length; ii++) {
    var entry = entries[ii];
    node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
  }
  return node;
}

function packNodes(ownerID, nodes, count, excluding) {
  var bitmap = 0;
  var packedII = 0;
  var packedNodes = new Array(count);
  for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
    var node = nodes[ii];
    if (node !== undefined && ii !== excluding) {
      bitmap |= bit;
      packedNodes[packedII++] = node;
    }
  }
  return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
}

function expandNodes(ownerID, nodes, bitmap, including, node) {
  var count = 0;
  var expandedNodes = new Array(SIZE);
  for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
    expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
  }
  expandedNodes[including] = node;
  return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
}

function popCount(x) {
  x -= (x >> 1) & 0x55555555;
  x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
  x = (x + (x >> 4)) & 0x0f0f0f0f;
  x += x >> 8;
  x += x >> 16;
  return x & 0x7f;
}

function setAt(array, idx, val, canEdit) {
  var newArray = canEdit ? array : arrCopy(array);
  newArray[idx] = val;
  return newArray;
}

function spliceIn(array, idx, val, canEdit) {
  var newLen = array.length + 1;
  if (canEdit && idx + 1 === newLen) {
    array[idx] = val;
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      newArray[ii] = val;
      after = -1;
    } else {
      newArray[ii] = array[ii + after];
    }
  }
  return newArray;
}

function spliceOut(array, idx, canEdit) {
  var newLen = array.length - 1;
  if (canEdit && idx === newLen) {
    array.pop();
    return array;
  }
  var newArray = new Array(newLen);
  var after = 0;
  for (var ii = 0; ii < newLen; ii++) {
    if (ii === idx) {
      after = 1;
    }
    newArray[ii] = array[ii + after];
  }
  return newArray;
}

var MAX_ARRAY_MAP_SIZE = SIZE / 4;
var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

var IS_LIST_SYMBOL = '@@__IMMUTABLE_LIST__@@';

function isList(maybeList) {
  return Boolean(maybeList && maybeList[IS_LIST_SYMBOL]);
}

var List = /*@__PURE__*/(function (IndexedCollection$$1) {
  function List(value) {
    var empty = emptyList();
    if (value === null || value === undefined) {
      return empty;
    }
    if (isList(value)) {
      return value;
    }
    var iter = IndexedCollection$$1(value);
    var size = iter.size;
    if (size === 0) {
      return empty;
    }
    assertNotInfinite(size);
    if (size > 0 && size < SIZE) {
      return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
    }
    return empty.withMutations(function (list) {
      list.setSize(size);
      iter.forEach(function (v, i) { return list.set(i, v); });
    });
  }

  if ( IndexedCollection$$1 ) List.__proto__ = IndexedCollection$$1;
  List.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  List.prototype.constructor = List;

  List.of = function of (/*...values*/) {
    return this(arguments);
  };

  List.prototype.toString = function toString () {
    return this.__toString('List [', ']');
  };

  // @pragma Access

  List.prototype.get = function get (index, notSetValue) {
    index = wrapIndex(this, index);
    if (index >= 0 && index < this.size) {
      index += this._origin;
      var node = listNodeFor(this, index);
      return node && node.array[index & MASK];
    }
    return notSetValue;
  };

  // @pragma Modification

  List.prototype.set = function set (index, value) {
    return updateList(this, index, value);
  };

  List.prototype.remove = function remove (index) {
    return !this.has(index)
      ? this
      : index === 0
        ? this.shift()
        : index === this.size - 1
          ? this.pop()
          : this.splice(index, 1);
  };

  List.prototype.insert = function insert (index, value) {
    return this.splice(index, 0, value);
  };

  List.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = this._origin = this._capacity = 0;
      this._level = SHIFT;
      this._root = this._tail = null;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyList();
  };

  List.prototype.push = function push (/*...values*/) {
    var values = arguments;
    var oldSize = this.size;
    return this.withMutations(function (list) {
      setListBounds(list, 0, oldSize + values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(oldSize + ii, values[ii]);
      }
    });
  };

  List.prototype.pop = function pop () {
    return setListBounds(this, 0, -1);
  };

  List.prototype.unshift = function unshift (/*...values*/) {
    var values = arguments;
    return this.withMutations(function (list) {
      setListBounds(list, -values.length);
      for (var ii = 0; ii < values.length; ii++) {
        list.set(ii, values[ii]);
      }
    });
  };

  List.prototype.shift = function shift () {
    return setListBounds(this, 1);
  };

  // @pragma Composition

  List.prototype.concat = function concat (/*...collections*/) {
    var arguments$1 = arguments;

    var seqs = [];
    for (var i = 0; i < arguments.length; i++) {
      var argument = arguments$1[i];
      var seq = IndexedCollection$$1(
        typeof argument !== 'string' && hasIterator(argument)
          ? argument
          : [argument]
      );
      if (seq.size !== 0) {
        seqs.push(seq);
      }
    }
    if (seqs.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && seqs.length === 1) {
      return this.constructor(seqs[0]);
    }
    return this.withMutations(function (list) {
      seqs.forEach(function (seq) { return seq.forEach(function (value) { return list.push(value); }); });
    });
  };

  List.prototype.setSize = function setSize (size) {
    return setListBounds(this, 0, size);
  };

  List.prototype.map = function map (mapper, context) {
    var this$1 = this;

    return this.withMutations(function (list) {
      for (var i = 0; i < this$1.size; i++) {
        list.set(i, mapper.call(context, list.get(i), i, list));
      }
    });
  };

  // @pragma Iteration

  List.prototype.slice = function slice (begin, end) {
    var size = this.size;
    if (wholeSlice(begin, end, size)) {
      return this;
    }
    return setListBounds(
      this,
      resolveBegin(begin, size),
      resolveEnd(end, size)
    );
  };

  List.prototype.__iterator = function __iterator (type, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    return new Iterator(function () {
      var value = values();
      return value === DONE
        ? iteratorDone()
        : iteratorValue(type, reverse ? --index : index++, value);
    });
  };

  List.prototype.__iterate = function __iterate (fn, reverse) {
    var index = reverse ? this.size : 0;
    var values = iterateList(this, reverse);
    var value;
    while ((value = values()) !== DONE) {
      if (fn(value, reverse ? --index : index++, this) === false) {
        break;
      }
    }
    return index;
  };

  List.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyList();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeList(
      this._origin,
      this._capacity,
      this._level,
      this._root,
      this._tail,
      ownerID,
      this.__hash
    );
  };

  return List;
}(IndexedCollection));

List.isList = isList;

var ListPrototype = List.prototype;
ListPrototype[IS_LIST_SYMBOL] = true;
ListPrototype[DELETE] = ListPrototype.remove;
ListPrototype.merge = ListPrototype.concat;
ListPrototype.setIn = setIn$1;
ListPrototype.deleteIn = ListPrototype.removeIn = deleteIn;
ListPrototype.update = update$1;
ListPrototype.updateIn = updateIn$1;
ListPrototype.mergeIn = mergeIn;
ListPrototype.mergeDeepIn = mergeDeepIn;
ListPrototype.withMutations = withMutations;
ListPrototype.wasAltered = wasAltered;
ListPrototype.asImmutable = asImmutable;
ListPrototype['@@transducer/init'] = ListPrototype.asMutable = asMutable;
ListPrototype['@@transducer/step'] = function(result, arr) {
  return result.push(arr);
};
ListPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

var VNode = function VNode(array, ownerID) {
  this.array = array;
  this.ownerID = ownerID;
};

// TODO: seems like these methods are very similar

VNode.prototype.removeBefore = function removeBefore (ownerID, level, index) {
  if (index === level ? 1 << level : this.array.length === 0) {
    return this;
  }
  var originIndex = (index >>> level) & MASK;
  if (originIndex >= this.array.length) {
    return new VNode([], ownerID);
  }
  var removingFirst = originIndex === 0;
  var newChild;
  if (level > 0) {
    var oldChild = this.array[originIndex];
    newChild =
      oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
    if (newChild === oldChild && removingFirst) {
      return this;
    }
  }
  if (removingFirst && !newChild) {
    return this;
  }
  var editable = editableVNode(this, ownerID);
  if (!removingFirst) {
    for (var ii = 0; ii < originIndex; ii++) {
      editable.array[ii] = undefined;
    }
  }
  if (newChild) {
    editable.array[originIndex] = newChild;
  }
  return editable;
};

VNode.prototype.removeAfter = function removeAfter (ownerID, level, index) {
  if (index === (level ? 1 << level : 0) || this.array.length === 0) {
    return this;
  }
  var sizeIndex = ((index - 1) >>> level) & MASK;
  if (sizeIndex >= this.array.length) {
    return this;
  }

  var newChild;
  if (level > 0) {
    var oldChild = this.array[sizeIndex];
    newChild =
      oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
    if (newChild === oldChild && sizeIndex === this.array.length - 1) {
      return this;
    }
  }

  var editable = editableVNode(this, ownerID);
  editable.array.splice(sizeIndex + 1);
  if (newChild) {
    editable.array[sizeIndex] = newChild;
  }
  return editable;
};

var DONE = {};

function iterateList(list, reverse) {
  var left = list._origin;
  var right = list._capacity;
  var tailPos = getTailOffset(right);
  var tail = list._tail;

  return iterateNodeOrLeaf(list._root, list._level, 0);

  function iterateNodeOrLeaf(node, level, offset) {
    return level === 0
      ? iterateLeaf(node, offset)
      : iterateNode(node, level, offset);
  }

  function iterateLeaf(node, offset) {
    var array = offset === tailPos ? tail && tail.array : node && node.array;
    var from = offset > left ? 0 : left - offset;
    var to = right - offset;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      if (from === to) {
        return DONE;
      }
      var idx = reverse ? --to : from++;
      return array && array[idx];
    };
  }

  function iterateNode(node, level, offset) {
    var values;
    var array = node && node.array;
    var from = offset > left ? 0 : (left - offset) >> level;
    var to = ((right - offset) >> level) + 1;
    if (to > SIZE) {
      to = SIZE;
    }
    return function () {
      while (true) {
        if (values) {
          var value = values();
          if (value !== DONE) {
            return value;
          }
          values = null;
        }
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        values = iterateNodeOrLeaf(
          array && array[idx],
          level - SHIFT,
          offset + (idx << level)
        );
      }
    };
  }
}

function makeList(origin, capacity, level, root, tail, ownerID, hash) {
  var list = Object.create(ListPrototype);
  list.size = capacity - origin;
  list._origin = origin;
  list._capacity = capacity;
  list._level = level;
  list._root = root;
  list._tail = tail;
  list.__ownerID = ownerID;
  list.__hash = hash;
  list.__altered = false;
  return list;
}

var EMPTY_LIST;
function emptyList() {
  return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
}

function updateList(list, index, value) {
  index = wrapIndex(list, index);

  if (index !== index) {
    return list;
  }

  if (index >= list.size || index < 0) {
    return list.withMutations(function (list) {
      index < 0
        ? setListBounds(list, index).set(0, value)
        : setListBounds(list, 0, index + 1).set(index, value);
    });
  }

  index += list._origin;

  var newTail = list._tail;
  var newRoot = list._root;
  var didAlter = MakeRef();
  if (index >= getTailOffset(list._capacity)) {
    newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
  } else {
    newRoot = updateVNode(
      newRoot,
      list.__ownerID,
      list._level,
      index,
      value,
      didAlter
    );
  }

  if (!didAlter.value) {
    return list;
  }

  if (list.__ownerID) {
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
}

function updateVNode(node, ownerID, level, index, value, didAlter) {
  var idx = (index >>> level) & MASK;
  var nodeHas = node && idx < node.array.length;
  if (!nodeHas && value === undefined) {
    return node;
  }

  var newNode;

  if (level > 0) {
    var lowerNode = node && node.array[idx];
    var newLowerNode = updateVNode(
      lowerNode,
      ownerID,
      level - SHIFT,
      index,
      value,
      didAlter
    );
    if (newLowerNode === lowerNode) {
      return node;
    }
    newNode = editableVNode(node, ownerID);
    newNode.array[idx] = newLowerNode;
    return newNode;
  }

  if (nodeHas && node.array[idx] === value) {
    return node;
  }

  if (didAlter) {
    SetRef(didAlter);
  }

  newNode = editableVNode(node, ownerID);
  if (value === undefined && idx === newNode.array.length - 1) {
    newNode.array.pop();
  } else {
    newNode.array[idx] = value;
  }
  return newNode;
}

function editableVNode(node, ownerID) {
  if (ownerID && node && ownerID === node.ownerID) {
    return node;
  }
  return new VNode(node ? node.array.slice() : [], ownerID);
}

function listNodeFor(list, rawIndex) {
  if (rawIndex >= getTailOffset(list._capacity)) {
    return list._tail;
  }
  if (rawIndex < 1 << (list._level + SHIFT)) {
    var node = list._root;
    var level = list._level;
    while (node && level > 0) {
      node = node.array[(rawIndex >>> level) & MASK];
      level -= SHIFT;
    }
    return node;
  }
}

function setListBounds(list, begin, end) {
  // Sanitize begin & end using this shorthand for ToInt32(argument)
  // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
  if (begin !== undefined) {
    begin |= 0;
  }
  if (end !== undefined) {
    end |= 0;
  }
  var owner = list.__ownerID || new OwnerID();
  var oldOrigin = list._origin;
  var oldCapacity = list._capacity;
  var newOrigin = oldOrigin + begin;
  var newCapacity =
    end === undefined
      ? oldCapacity
      : end < 0
        ? oldCapacity + end
        : oldOrigin + end;
  if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
    return list;
  }

  // If it's going to end after it starts, it's empty.
  if (newOrigin >= newCapacity) {
    return list.clear();
  }

  var newLevel = list._level;
  var newRoot = list._root;

  // New origin might need creating a higher root.
  var offsetShift = 0;
  while (newOrigin + offsetShift < 0) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [undefined, newRoot] : [],
      owner
    );
    newLevel += SHIFT;
    offsetShift += 1 << newLevel;
  }
  if (offsetShift) {
    newOrigin += offsetShift;
    oldOrigin += offsetShift;
    newCapacity += offsetShift;
    oldCapacity += offsetShift;
  }

  var oldTailOffset = getTailOffset(oldCapacity);
  var newTailOffset = getTailOffset(newCapacity);

  // New size might need creating a higher root.
  while (newTailOffset >= 1 << (newLevel + SHIFT)) {
    newRoot = new VNode(
      newRoot && newRoot.array.length ? [newRoot] : [],
      owner
    );
    newLevel += SHIFT;
  }

  // Locate or create the new tail.
  var oldTail = list._tail;
  var newTail =
    newTailOffset < oldTailOffset
      ? listNodeFor(list, newCapacity - 1)
      : newTailOffset > oldTailOffset
        ? new VNode([], owner)
        : oldTail;

  // Merge Tail into tree.
  if (
    oldTail &&
    newTailOffset > oldTailOffset &&
    newOrigin < oldCapacity &&
    oldTail.array.length
  ) {
    newRoot = editableVNode(newRoot, owner);
    var node = newRoot;
    for (var level = newLevel; level > SHIFT; level -= SHIFT) {
      var idx = (oldTailOffset >>> level) & MASK;
      node = node.array[idx] = editableVNode(node.array[idx], owner);
    }
    node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
  }

  // If the size has been reduced, there's a chance the tail needs to be trimmed.
  if (newCapacity < oldCapacity) {
    newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
  }

  // If the new origin is within the tail, then we do not need a root.
  if (newOrigin >= newTailOffset) {
    newOrigin -= newTailOffset;
    newCapacity -= newTailOffset;
    newLevel = SHIFT;
    newRoot = null;
    newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
  } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
    offsetShift = 0;

    // Identify the new top root node of the subtree of the old root.
    while (newRoot) {
      var beginIndex = (newOrigin >>> newLevel) & MASK;
      if ((beginIndex !== newTailOffset >>> newLevel) & MASK) {
        break;
      }
      if (beginIndex) {
        offsetShift += (1 << newLevel) * beginIndex;
      }
      newLevel -= SHIFT;
      newRoot = newRoot.array[beginIndex];
    }

    // Trim the new sides of the new root.
    if (newRoot && newOrigin > oldOrigin) {
      newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
    }
    if (newRoot && newTailOffset < oldTailOffset) {
      newRoot = newRoot.removeAfter(
        owner,
        newLevel,
        newTailOffset - offsetShift
      );
    }
    if (offsetShift) {
      newOrigin -= offsetShift;
      newCapacity -= offsetShift;
    }
  }

  if (list.__ownerID) {
    list.size = newCapacity - newOrigin;
    list._origin = newOrigin;
    list._capacity = newCapacity;
    list._level = newLevel;
    list._root = newRoot;
    list._tail = newTail;
    list.__hash = undefined;
    list.__altered = true;
    return list;
  }
  return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
}

function getTailOffset(size) {
  return size < SIZE ? 0 : ((size - 1) >>> SHIFT) << SHIFT;
}

var OrderedMap = /*@__PURE__*/(function (Map$$1) {
  function OrderedMap(value) {
    return value === null || value === undefined
      ? emptyOrderedMap()
      : isOrderedMap(value)
        ? value
        : emptyOrderedMap().withMutations(function (map) {
            var iter = KeyedCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v, k) { return map.set(k, v); });
          });
  }

  if ( Map$$1 ) OrderedMap.__proto__ = Map$$1;
  OrderedMap.prototype = Object.create( Map$$1 && Map$$1.prototype );
  OrderedMap.prototype.constructor = OrderedMap;

  OrderedMap.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedMap.prototype.toString = function toString () {
    return this.__toString('OrderedMap {', '}');
  };

  // @pragma Access

  OrderedMap.prototype.get = function get (k, notSetValue) {
    var index = this._map.get(k);
    return index !== undefined ? this._list.get(index)[1] : notSetValue;
  };

  // @pragma Modification

  OrderedMap.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._map.clear();
      this._list.clear();
      return this;
    }
    return emptyOrderedMap();
  };

  OrderedMap.prototype.set = function set (k, v) {
    return updateOrderedMap(this, k, v);
  };

  OrderedMap.prototype.remove = function remove (k) {
    return updateOrderedMap(this, k, NOT_SET);
  };

  OrderedMap.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered() || this._list.wasAltered();
  };

  OrderedMap.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._list.__iterate(
      function (entry) { return entry && fn(entry[1], entry[0], this$1); },
      reverse
    );
  };

  OrderedMap.prototype.__iterator = function __iterator (type, reverse) {
    return this._list.fromEntrySeq().__iterator(type, reverse);
  };

  OrderedMap.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    var newList = this._list.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return emptyOrderedMap();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      this._list = newList;
      return this;
    }
    return makeOrderedMap(newMap, newList, ownerID, this.__hash);
  };

  return OrderedMap;
}(Map));

OrderedMap.isOrderedMap = isOrderedMap;

OrderedMap.prototype[IS_ORDERED_SYMBOL] = true;
OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;

function makeOrderedMap(map, list, ownerID, hash) {
  var omap = Object.create(OrderedMap.prototype);
  omap.size = map ? map.size : 0;
  omap._map = map;
  omap._list = list;
  omap.__ownerID = ownerID;
  omap.__hash = hash;
  return omap;
}

var EMPTY_ORDERED_MAP;
function emptyOrderedMap() {
  return (
    EMPTY_ORDERED_MAP ||
    (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()))
  );
}

function updateOrderedMap(omap, k, v) {
  var map = omap._map;
  var list = omap._list;
  var i = map.get(k);
  var has = i !== undefined;
  var newMap;
  var newList;
  if (v === NOT_SET) {
    // removed
    if (!has) {
      return omap;
    }
    if (list.size >= SIZE && list.size >= map.size * 2) {
      newList = list.filter(function (entry, idx) { return entry !== undefined && i !== idx; });
      newMap = newList
        .toKeyedSeq()
        .map(function (entry) { return entry[0]; })
        .flip()
        .toMap();
      if (omap.__ownerID) {
        newMap.__ownerID = newList.__ownerID = omap.__ownerID;
      }
    } else {
      newMap = map.remove(k);
      newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
    }
  } else if (has) {
    if (v === list.get(i)[1]) {
      return omap;
    }
    newMap = map;
    newList = list.set(i, [k, v]);
  } else {
    newMap = map.set(k, list.size);
    newList = list.set(list.size, [k, v]);
  }
  if (omap.__ownerID) {
    omap.size = newMap.size;
    omap._map = newMap;
    omap._list = newList;
    omap.__hash = undefined;
    return omap;
  }
  return makeOrderedMap(newMap, newList);
}

var IS_STACK_SYMBOL = '@@__IMMUTABLE_STACK__@@';

function isStack(maybeStack) {
  return Boolean(maybeStack && maybeStack[IS_STACK_SYMBOL]);
}

var Stack = /*@__PURE__*/(function (IndexedCollection$$1) {
  function Stack(value) {
    return value === null || value === undefined
      ? emptyStack()
      : isStack(value)
        ? value
        : emptyStack().pushAll(value);
  }

  if ( IndexedCollection$$1 ) Stack.__proto__ = IndexedCollection$$1;
  Stack.prototype = Object.create( IndexedCollection$$1 && IndexedCollection$$1.prototype );
  Stack.prototype.constructor = Stack;

  Stack.of = function of (/*...values*/) {
    return this(arguments);
  };

  Stack.prototype.toString = function toString () {
    return this.__toString('Stack [', ']');
  };

  // @pragma Access

  Stack.prototype.get = function get (index, notSetValue) {
    var head = this._head;
    index = wrapIndex(this, index);
    while (head && index--) {
      head = head.next;
    }
    return head ? head.value : notSetValue;
  };

  Stack.prototype.peek = function peek () {
    return this._head && this._head.value;
  };

  // @pragma Modification

  Stack.prototype.push = function push (/*...values*/) {
    var arguments$1 = arguments;

    if (arguments.length === 0) {
      return this;
    }
    var newSize = this.size + arguments.length;
    var head = this._head;
    for (var ii = arguments.length - 1; ii >= 0; ii--) {
      head = {
        value: arguments$1[ii],
        next: head,
      };
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pushAll = function pushAll (iter) {
    iter = IndexedCollection$$1(iter);
    if (iter.size === 0) {
      return this;
    }
    if (this.size === 0 && isStack(iter)) {
      return iter;
    }
    assertNotInfinite(iter.size);
    var newSize = this.size;
    var head = this._head;
    iter.__iterate(function (value) {
      newSize++;
      head = {
        value: value,
        next: head,
      };
    }, /* reverse */ true);
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  Stack.prototype.pop = function pop () {
    return this.slice(1);
  };

  Stack.prototype.clear = function clear () {
    if (this.size === 0) {
      return this;
    }
    if (this.__ownerID) {
      this.size = 0;
      this._head = undefined;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return emptyStack();
  };

  Stack.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    var resolvedBegin = resolveBegin(begin, this.size);
    var resolvedEnd = resolveEnd(end, this.size);
    if (resolvedEnd !== this.size) {
      // super.slice(begin, end);
      return IndexedCollection$$1.prototype.slice.call(this, begin, end);
    }
    var newSize = this.size - resolvedBegin;
    var head = this._head;
    while (resolvedBegin--) {
      head = head.next;
    }
    if (this.__ownerID) {
      this.size = newSize;
      this._head = head;
      this.__hash = undefined;
      this.__altered = true;
      return this;
    }
    return makeStack(newSize, head);
  };

  // @pragma Mutability

  Stack.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    if (!ownerID) {
      if (this.size === 0) {
        return emptyStack();
      }
      this.__ownerID = ownerID;
      this.__altered = false;
      return this;
    }
    return makeStack(this.size, this._head, ownerID, this.__hash);
  };

  // @pragma Iteration

  Stack.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    if (reverse) {
      return new ArraySeq(this.toArray()).__iterate(
        function (v, k) { return fn(v, k, this$1); },
        reverse
      );
    }
    var iterations = 0;
    var node = this._head;
    while (node) {
      if (fn(node.value, iterations++, this) === false) {
        break;
      }
      node = node.next;
    }
    return iterations;
  };

  Stack.prototype.__iterator = function __iterator (type, reverse) {
    if (reverse) {
      return new ArraySeq(this.toArray()).__iterator(type, reverse);
    }
    var iterations = 0;
    var node = this._head;
    return new Iterator(function () {
      if (node) {
        var value = node.value;
        node = node.next;
        return iteratorValue(type, iterations++, value);
      }
      return iteratorDone();
    });
  };

  return Stack;
}(IndexedCollection));

Stack.isStack = isStack;

var StackPrototype = Stack.prototype;
StackPrototype[IS_STACK_SYMBOL] = true;
StackPrototype.shift = StackPrototype.pop;
StackPrototype.unshift = StackPrototype.push;
StackPrototype.unshiftAll = StackPrototype.pushAll;
StackPrototype.withMutations = withMutations;
StackPrototype.wasAltered = wasAltered;
StackPrototype.asImmutable = asImmutable;
StackPrototype['@@transducer/init'] = StackPrototype.asMutable = asMutable;
StackPrototype['@@transducer/step'] = function(result, arr) {
  return result.unshift(arr);
};
StackPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

function makeStack(size, head, ownerID, hash) {
  var map = Object.create(StackPrototype);
  map.size = size;
  map._head = head;
  map.__ownerID = ownerID;
  map.__hash = hash;
  map.__altered = false;
  return map;
}

var EMPTY_STACK;
function emptyStack() {
  return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
}

var IS_SET_SYMBOL = '@@__IMMUTABLE_SET__@@';

function isSet(maybeSet) {
  return Boolean(maybeSet && maybeSet[IS_SET_SYMBOL]);
}

function isOrderedSet(maybeOrderedSet) {
  return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
}

function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (
    !isCollection(b) ||
    (a.size !== undefined && b.size !== undefined && a.size !== b.size) ||
    (a.__hash !== undefined &&
      b.__hash !== undefined &&
      a.__hash !== b.__hash) ||
    isKeyed(a) !== isKeyed(b) ||
    isIndexed(a) !== isIndexed(b) ||
    isOrdered(a) !== isOrdered(b)
  ) {
    return false;
  }

  if (a.size === 0 && b.size === 0) {
    return true;
  }

  var notAssociative = !isAssociative(a);

  if (isOrdered(a)) {
    var entries = a.entries();
    return (
      b.every(function (v, k) {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done
    );
  }

  var flipped = false;

  if (a.size === undefined) {
    if (b.size === undefined) {
      if (typeof a.cacheResult === 'function') {
        a.cacheResult();
      }
    } else {
      flipped = true;
      var _ = a;
      a = b;
      b = _;
    }
  }

  var allEqual = true;
  var bSize = b.__iterate(function (v, k) {
    if (
      notAssociative
        ? !a.has(v)
        : flipped
          ? !is(v, a.get(k, NOT_SET))
          : !is(a.get(k, NOT_SET), v)
    ) {
      allEqual = false;
      return false;
    }
  });

  return allEqual && a.size === bSize;
}

/**
 * Contributes additional methods to a constructor
 */
function mixin(ctor, methods) {
  var keyCopier = function (key) {
    ctor.prototype[key] = methods[key];
  };
  Object.keys(methods).forEach(keyCopier);
  Object.getOwnPropertySymbols &&
    Object.getOwnPropertySymbols(methods).forEach(keyCopier);
  return ctor;
}

function toJS(value) {
  if (!value || typeof value !== 'object') {
    return value;
  }
  if (!isCollection(value)) {
    if (!isDataStructure(value)) {
      return value;
    }
    value = Seq(value);
  }
  if (isKeyed(value)) {
    var result$1 = {};
    value.__iterate(function (v, k) {
      result$1[k] = toJS(v);
    });
    return result$1;
  }
  var result = [];
  value.__iterate(function (v) {
    result.push(toJS(v));
  });
  return result;
}

var Set = /*@__PURE__*/(function (SetCollection$$1) {
  function Set(value) {
    return value === null || value === undefined
      ? emptySet()
      : isSet(value) && !isOrdered(value)
        ? value
        : emptySet().withMutations(function (set) {
            var iter = SetCollection$$1(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( SetCollection$$1 ) Set.__proto__ = SetCollection$$1;
  Set.prototype = Object.create( SetCollection$$1 && SetCollection$$1.prototype );
  Set.prototype.constructor = Set;

  Set.of = function of (/*...values*/) {
    return this(arguments);
  };

  Set.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  Set.intersect = function intersect (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.intersect.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.union = function union (sets) {
    sets = Collection(sets).toArray();
    return sets.length
      ? SetPrototype.union.apply(Set(sets.pop()), sets)
      : emptySet();
  };

  Set.prototype.toString = function toString () {
    return this.__toString('Set {', '}');
  };

  // @pragma Access

  Set.prototype.has = function has (value) {
    return this._map.has(value);
  };

  // @pragma Modification

  Set.prototype.add = function add (value) {
    return updateSet(this, this._map.set(value, value));
  };

  Set.prototype.remove = function remove (value) {
    return updateSet(this, this._map.remove(value));
  };

  Set.prototype.clear = function clear () {
    return updateSet(this, this._map.clear());
  };

  // @pragma Composition

  Set.prototype.map = function map (mapper, context) {
    var this$1 = this;

    var removes = [];
    var adds = [];
    this.forEach(function (value) {
      var mapped = mapper.call(context, value, value, this$1);
      if (mapped !== value) {
        removes.push(value);
        adds.push(mapped);
      }
    });
    return this.withMutations(function (set) {
      removes.forEach(function (value) { return set.remove(value); });
      adds.forEach(function (value) { return set.add(value); });
    });
  };

  Set.prototype.union = function union () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    iters = iters.filter(function (x) { return x.size !== 0; });
    if (iters.length === 0) {
      return this;
    }
    if (this.size === 0 && !this.__ownerID && iters.length === 1) {
      return this.constructor(iters[0]);
    }
    return this.withMutations(function (set) {
      for (var ii = 0; ii < iters.length; ii++) {
        SetCollection$$1(iters[ii]).forEach(function (value) { return set.add(value); });
      }
    });
  };

  Set.prototype.intersect = function intersect () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (!iters.every(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.subtract = function subtract () {
    var iters = [], len = arguments.length;
    while ( len-- ) iters[ len ] = arguments[ len ];

    if (iters.length === 0) {
      return this;
    }
    iters = iters.map(function (iter) { return SetCollection$$1(iter); });
    var toRemove = [];
    this.forEach(function (value) {
      if (iters.some(function (iter) { return iter.includes(value); })) {
        toRemove.push(value);
      }
    });
    return this.withMutations(function (set) {
      toRemove.forEach(function (value) {
        set.remove(value);
      });
    });
  };

  Set.prototype.sort = function sort (comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator));
  };

  Set.prototype.sortBy = function sortBy (mapper, comparator) {
    // Late binding
    return OrderedSet(sortFactory(this, comparator, mapper));
  };

  Set.prototype.wasAltered = function wasAltered () {
    return this._map.wasAltered();
  };

  Set.prototype.__iterate = function __iterate (fn, reverse) {
    var this$1 = this;

    return this._map.__iterate(function (k) { return fn(k, k, this$1); }, reverse);
  };

  Set.prototype.__iterator = function __iterator (type, reverse) {
    return this._map.__iterator(type, reverse);
  };

  Set.prototype.__ensureOwner = function __ensureOwner (ownerID) {
    if (ownerID === this.__ownerID) {
      return this;
    }
    var newMap = this._map.__ensureOwner(ownerID);
    if (!ownerID) {
      if (this.size === 0) {
        return this.__empty();
      }
      this.__ownerID = ownerID;
      this._map = newMap;
      return this;
    }
    return this.__make(newMap, ownerID);
  };

  return Set;
}(SetCollection));

Set.isSet = isSet;

var SetPrototype = Set.prototype;
SetPrototype[IS_SET_SYMBOL] = true;
SetPrototype[DELETE] = SetPrototype.remove;
SetPrototype.merge = SetPrototype.concat = SetPrototype.union;
SetPrototype.withMutations = withMutations;
SetPrototype.asImmutable = asImmutable;
SetPrototype['@@transducer/init'] = SetPrototype.asMutable = asMutable;
SetPrototype['@@transducer/step'] = function(result, arr) {
  return result.add(arr);
};
SetPrototype['@@transducer/result'] = function(obj) {
  return obj.asImmutable();
};

SetPrototype.__empty = emptySet;
SetPrototype.__make = makeSet;

function updateSet(set, newMap) {
  if (set.__ownerID) {
    set.size = newMap.size;
    set._map = newMap;
    return set;
  }
  return newMap === set._map
    ? set
    : newMap.size === 0
      ? set.__empty()
      : set.__make(newMap);
}

function makeSet(map, ownerID) {
  var set = Object.create(SetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_SET;
function emptySet() {
  return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
}

/**
 * Returns a lazy seq of nums from start (inclusive) to end
 * (exclusive), by step, where start defaults to 0, step to 1, and end to
 * infinity. When start is equal to end, returns empty list.
 */
var Range = /*@__PURE__*/(function (IndexedSeq$$1) {
  function Range(start, end, step) {
    if (!(this instanceof Range)) {
      return new Range(start, end, step);
    }
    invariant(step !== 0, 'Cannot step a Range by 0');
    start = start || 0;
    if (end === undefined) {
      end = Infinity;
    }
    step = step === undefined ? 1 : Math.abs(step);
    if (end < start) {
      step = -step;
    }
    this._start = start;
    this._end = end;
    this._step = step;
    this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
    if (this.size === 0) {
      if (EMPTY_RANGE) {
        return EMPTY_RANGE;
      }
      EMPTY_RANGE = this;
    }
  }

  if ( IndexedSeq$$1 ) Range.__proto__ = IndexedSeq$$1;
  Range.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Range.prototype.constructor = Range;

  Range.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Range []';
    }
    return (
      'Range [ ' +
      this._start +
      '...' +
      this._end +
      (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]'
    );
  };

  Range.prototype.get = function get (index, notSetValue) {
    return this.has(index)
      ? this._start + wrapIndex(this, index) * this._step
      : notSetValue;
  };

  Range.prototype.includes = function includes (searchValue) {
    var possibleIndex = (searchValue - this._start) / this._step;
    return (
      possibleIndex >= 0 &&
      possibleIndex < this.size &&
      possibleIndex === Math.floor(possibleIndex)
    );
  };

  Range.prototype.slice = function slice (begin, end) {
    if (wholeSlice(begin, end, this.size)) {
      return this;
    }
    begin = resolveBegin(begin, this.size);
    end = resolveEnd(end, this.size);
    if (end <= begin) {
      return new Range(0, 0);
    }
    return new Range(
      this.get(begin, this._end),
      this.get(end, this._end),
      this._step
    );
  };

  Range.prototype.indexOf = function indexOf (searchValue) {
    var offsetValue = searchValue - this._start;
    if (offsetValue % this._step === 0) {
      var index = offsetValue / this._step;
      if (index >= 0 && index < this.size) {
        return index;
      }
    }
    return -1;
  };

  Range.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    return this.indexOf(searchValue);
  };

  Range.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    while (i !== size) {
      if (fn(value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
      value += reverse ? -step : step;
    }
    return i;
  };

  Range.prototype.__iterator = function __iterator (type, reverse) {
    var size = this.size;
    var step = this._step;
    var value = reverse ? this._start + (size - 1) * step : this._start;
    var i = 0;
    return new Iterator(function () {
      if (i === size) {
        return iteratorDone();
      }
      var v = value;
      value += reverse ? -step : step;
      return iteratorValue(type, reverse ? size - ++i : i++, v);
    });
  };

  Range.prototype.equals = function equals (other) {
    return other instanceof Range
      ? this._start === other._start &&
          this._end === other._end &&
          this._step === other._step
      : deepEqual(this, other);
  };

  return Range;
}(IndexedSeq));

var EMPTY_RANGE;

function getIn(collection, searchKeyPath, notSetValue) {
  var keyPath = coerceKeyPath(searchKeyPath);
  var i = 0;
  while (i !== keyPath.length) {
    collection = get(collection, keyPath[i++], NOT_SET);
    if (collection === NOT_SET) {
      return notSetValue;
    }
  }
  return collection;
}

function getIn$1(searchKeyPath, notSetValue) {
  return getIn(this, searchKeyPath, notSetValue);
}

function hasIn(collection, keyPath) {
  return getIn(collection, keyPath, NOT_SET) !== NOT_SET;
}

function hasIn$1(searchKeyPath) {
  return hasIn(this, searchKeyPath);
}

function toObject() {
  assertNotInfinite(this.size);
  var object = {};
  this.__iterate(function (v, k) {
    object[k] = v;
  });
  return object;
}

// Note: all of these methods are deprecated.
Collection.isIterable = isCollection;
Collection.isKeyed = isKeyed;
Collection.isIndexed = isIndexed;
Collection.isAssociative = isAssociative;
Collection.isOrdered = isOrdered;

Collection.Iterator = Iterator;

mixin(Collection, {
  // ### Conversion to other types

  toArray: function toArray() {
    assertNotInfinite(this.size);
    var array = new Array(this.size || 0);
    var useTuples = isKeyed(this);
    var i = 0;
    this.__iterate(function (v, k) {
      // Keyed collections produce an array of tuples.
      array[i++] = useTuples ? [k, v] : v;
    });
    return array;
  },

  toIndexedSeq: function toIndexedSeq() {
    return new ToIndexedSequence(this);
  },

  toJS: function toJS$1() {
    return toJS(this);
  },

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, true);
  },

  toMap: function toMap() {
    // Use Late Binding here to solve the circular dependency.
    return Map(this.toKeyedSeq());
  },

  toObject: toObject,

  toOrderedMap: function toOrderedMap() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedMap(this.toKeyedSeq());
  },

  toOrderedSet: function toOrderedSet() {
    // Use Late Binding here to solve the circular dependency.
    return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
  },

  toSet: function toSet() {
    // Use Late Binding here to solve the circular dependency.
    return Set(isKeyed(this) ? this.valueSeq() : this);
  },

  toSetSeq: function toSetSeq() {
    return new ToSetSequence(this);
  },

  toSeq: function toSeq() {
    return isIndexed(this)
      ? this.toIndexedSeq()
      : isKeyed(this)
        ? this.toKeyedSeq()
        : this.toSetSeq();
  },

  toStack: function toStack() {
    // Use Late Binding here to solve the circular dependency.
    return Stack(isKeyed(this) ? this.valueSeq() : this);
  },

  toList: function toList() {
    // Use Late Binding here to solve the circular dependency.
    return List(isKeyed(this) ? this.valueSeq() : this);
  },

  // ### Common JavaScript methods and properties

  toString: function toString() {
    return '[Collection]';
  },

  __toString: function __toString(head, tail) {
    if (this.size === 0) {
      return head + tail;
    }
    return (
      head +
      ' ' +
      this.toSeq()
        .map(this.__toStringMapper)
        .join(', ') +
      ' ' +
      tail
    );
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  concat: function concat() {
    var values = [], len = arguments.length;
    while ( len-- ) values[ len ] = arguments[ len ];

    return reify(this, concatFactory(this, values));
  },

  includes: function includes(searchValue) {
    return this.some(function (value) { return is(value, searchValue); });
  },

  entries: function entries() {
    return this.__iterator(ITERATE_ENTRIES);
  },

  every: function every(predicate, context) {
    assertNotInfinite(this.size);
    var returnValue = true;
    this.__iterate(function (v, k, c) {
      if (!predicate.call(context, v, k, c)) {
        returnValue = false;
        return false;
      }
    });
    return returnValue;
  },

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, true));
  },

  find: function find(predicate, context, notSetValue) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[1] : notSetValue;
  },

  forEach: function forEach(sideEffect, context) {
    assertNotInfinite(this.size);
    return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
  },

  join: function join(separator) {
    assertNotInfinite(this.size);
    separator = separator !== undefined ? '' + separator : ',';
    var joined = '';
    var isFirst = true;
    this.__iterate(function (v) {
      isFirst ? (isFirst = false) : (joined += separator);
      joined += v !== null && v !== undefined ? v.toString() : '';
    });
    return joined;
  },

  keys: function keys() {
    return this.__iterator(ITERATE_KEYS);
  },

  map: function map(mapper, context) {
    return reify(this, mapFactory(this, mapper, context));
  },

  reduce: function reduce$1(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      false
    );
  },

  reduceRight: function reduceRight(reducer, initialReduction, context) {
    return reduce(
      this,
      reducer,
      initialReduction,
      context,
      arguments.length < 2,
      true
    );
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, true));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, true));
  },

  some: function some(predicate, context) {
    return !this.every(not(predicate), context);
  },

  sort: function sort(comparator) {
    return reify(this, sortFactory(this, comparator));
  },

  values: function values() {
    return this.__iterator(ITERATE_VALUES);
  },

  // ### More sequential methods

  butLast: function butLast() {
    return this.slice(0, -1);
  },

  isEmpty: function isEmpty() {
    return this.size !== undefined ? this.size === 0 : !this.some(function () { return true; });
  },

  count: function count(predicate, context) {
    return ensureSize(
      predicate ? this.toSeq().filter(predicate, context) : this
    );
  },

  countBy: function countBy(grouper, context) {
    return countByFactory(this, grouper, context);
  },

  equals: function equals(other) {
    return deepEqual(this, other);
  },

  entrySeq: function entrySeq() {
    var collection = this;
    if (collection._cache) {
      // We cache as an entries array, so we can just return the cache!
      return new ArraySeq(collection._cache);
    }
    var entriesSequence = collection
      .toSeq()
      .map(entryMapper)
      .toIndexedSeq();
    entriesSequence.fromEntrySeq = function () { return collection.toSeq(); };
    return entriesSequence;
  },

  filterNot: function filterNot(predicate, context) {
    return this.filter(not(predicate), context);
  },

  findEntry: function findEntry(predicate, context, notSetValue) {
    var found = notSetValue;
    this.__iterate(function (v, k, c) {
      if (predicate.call(context, v, k, c)) {
        found = [k, v];
        return false;
      }
    });
    return found;
  },

  findKey: function findKey(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry && entry[0];
  },

  findLast: function findLast(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .find(predicate, context, notSetValue);
  },

  findLastEntry: function findLastEntry(predicate, context, notSetValue) {
    return this.toKeyedSeq()
      .reverse()
      .findEntry(predicate, context, notSetValue);
  },

  findLastKey: function findLastKey(predicate, context) {
    return this.toKeyedSeq()
      .reverse()
      .findKey(predicate, context);
  },

  first: function first(notSetValue) {
    return this.find(returnTrue, null, notSetValue);
  },

  flatMap: function flatMap(mapper, context) {
    return reify(this, flatMapFactory(this, mapper, context));
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, true));
  },

  fromEntrySeq: function fromEntrySeq() {
    return new FromEntriesSequence(this);
  },

  get: function get(searchKey, notSetValue) {
    return this.find(function (_, key) { return is(key, searchKey); }, undefined, notSetValue);
  },

  getIn: getIn$1,

  groupBy: function groupBy(grouper, context) {
    return groupByFactory(this, grouper, context);
  },

  has: function has(searchKey) {
    return this.get(searchKey, NOT_SET) !== NOT_SET;
  },

  hasIn: hasIn$1,

  isSubset: function isSubset(iter) {
    iter = typeof iter.includes === 'function' ? iter : Collection(iter);
    return this.every(function (value) { return iter.includes(value); });
  },

  isSuperset: function isSuperset(iter) {
    iter = typeof iter.isSubset === 'function' ? iter : Collection(iter);
    return iter.isSubset(this);
  },

  keyOf: function keyOf(searchValue) {
    return this.findKey(function (value) { return is(value, searchValue); });
  },

  keySeq: function keySeq() {
    return this.toSeq()
      .map(keyMapper)
      .toIndexedSeq();
  },

  last: function last(notSetValue) {
    return this.toSeq()
      .reverse()
      .first(notSetValue);
  },

  lastKeyOf: function lastKeyOf(searchValue) {
    return this.toKeyedSeq()
      .reverse()
      .keyOf(searchValue);
  },

  max: function max(comparator) {
    return maxFactory(this, comparator);
  },

  maxBy: function maxBy(mapper, comparator) {
    return maxFactory(this, comparator, mapper);
  },

  min: function min(comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator
    );
  },

  minBy: function minBy(mapper, comparator) {
    return maxFactory(
      this,
      comparator ? neg(comparator) : defaultNegComparator,
      mapper
    );
  },

  rest: function rest() {
    return this.slice(1);
  },

  skip: function skip(amount) {
    return amount === 0 ? this : this.slice(Math.max(0, amount));
  },

  skipLast: function skipLast(amount) {
    return amount === 0 ? this : this.slice(0, -Math.max(0, amount));
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, true));
  },

  skipUntil: function skipUntil(predicate, context) {
    return this.skipWhile(not(predicate), context);
  },

  sortBy: function sortBy(mapper, comparator) {
    return reify(this, sortFactory(this, comparator, mapper));
  },

  take: function take(amount) {
    return this.slice(0, Math.max(0, amount));
  },

  takeLast: function takeLast(amount) {
    return this.slice(-Math.max(0, amount));
  },

  takeWhile: function takeWhile(predicate, context) {
    return reify(this, takeWhileFactory(this, predicate, context));
  },

  takeUntil: function takeUntil(predicate, context) {
    return this.takeWhile(not(predicate), context);
  },

  update: function update(fn) {
    return fn(this);
  },

  valueSeq: function valueSeq() {
    return this.toIndexedSeq();
  },

  // ### Hashable Object

  hashCode: function hashCode() {
    return this.__hash || (this.__hash = hashCollection(this));
  },

  // ### Internal

  // abstract __iterate(fn, reverse)

  // abstract __iterator(type, reverse)
});

var CollectionPrototype = Collection.prototype;
CollectionPrototype[IS_COLLECTION_SYMBOL] = true;
CollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.values;
CollectionPrototype.toJSON = CollectionPrototype.toArray;
CollectionPrototype.__toStringMapper = quoteString;
CollectionPrototype.inspect = CollectionPrototype.toSource = function() {
  return this.toString();
};
CollectionPrototype.chain = CollectionPrototype.flatMap;
CollectionPrototype.contains = CollectionPrototype.includes;

mixin(KeyedCollection, {
  // ### More sequential methods

  flip: function flip() {
    return reify(this, flipFactory(this));
  },

  mapEntries: function mapEntries(mapper, context) {
    var this$1 = this;

    var iterations = 0;
    return reify(
      this,
      this.toSeq()
        .map(function (v, k) { return mapper.call(context, [k, v], iterations++, this$1); })
        .fromEntrySeq()
    );
  },

  mapKeys: function mapKeys(mapper, context) {
    var this$1 = this;

    return reify(
      this,
      this.toSeq()
        .flip()
        .map(function (k, v) { return mapper.call(context, k, v, this$1); })
        .flip()
    );
  },
});

var KeyedCollectionPrototype = KeyedCollection.prototype;
KeyedCollectionPrototype[IS_KEYED_SYMBOL] = true;
KeyedCollectionPrototype[ITERATOR_SYMBOL] = CollectionPrototype.entries;
KeyedCollectionPrototype.toJSON = toObject;
KeyedCollectionPrototype.__toStringMapper = function (v, k) { return quoteString(k) + ': ' + quoteString(v); };

mixin(IndexedCollection, {
  // ### Conversion to other types

  toKeyedSeq: function toKeyedSeq() {
    return new ToKeyedSequence(this, false);
  },

  // ### ES6 Collection methods (ES6 Array and Map)

  filter: function filter(predicate, context) {
    return reify(this, filterFactory(this, predicate, context, false));
  },

  findIndex: function findIndex(predicate, context) {
    var entry = this.findEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  indexOf: function indexOf(searchValue) {
    var key = this.keyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  lastIndexOf: function lastIndexOf(searchValue) {
    var key = this.lastKeyOf(searchValue);
    return key === undefined ? -1 : key;
  },

  reverse: function reverse() {
    return reify(this, reverseFactory(this, false));
  },

  slice: function slice(begin, end) {
    return reify(this, sliceFactory(this, begin, end, false));
  },

  splice: function splice(index, removeNum /*, ...values*/) {
    var numArgs = arguments.length;
    removeNum = Math.max(removeNum || 0, 0);
    if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
      return this;
    }
    // If index is negative, it should resolve relative to the size of the
    // collection. However size may be expensive to compute if not cached, so
    // only call count() if the number is in fact negative.
    index = resolveBegin(index, index < 0 ? this.count() : this.size);
    var spliced = this.slice(0, index);
    return reify(
      this,
      numArgs === 1
        ? spliced
        : spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
    );
  },

  // ### More collection methods

  findLastIndex: function findLastIndex(predicate, context) {
    var entry = this.findLastEntry(predicate, context);
    return entry ? entry[0] : -1;
  },

  first: function first(notSetValue) {
    return this.get(0, notSetValue);
  },

  flatten: function flatten(depth) {
    return reify(this, flattenFactory(this, depth, false));
  },

  get: function get(index, notSetValue) {
    index = wrapIndex(this, index);
    return index < 0 ||
      (this.size === Infinity || (this.size !== undefined && index > this.size))
      ? notSetValue
      : this.find(function (_, key) { return key === index; }, undefined, notSetValue);
  },

  has: function has(index) {
    index = wrapIndex(this, index);
    return (
      index >= 0 &&
      (this.size !== undefined
        ? this.size === Infinity || index < this.size
        : this.indexOf(index) !== -1)
    );
  },

  interpose: function interpose(separator) {
    return reify(this, interposeFactory(this, separator));
  },

  interleave: function interleave(/*...collections*/) {
    var collections = [this].concat(arrCopy(arguments));
    var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, collections);
    var interleaved = zipped.flatten(true);
    if (zipped.size) {
      interleaved.size = zipped.size * collections.length;
    }
    return reify(this, interleaved);
  },

  keySeq: function keySeq() {
    return Range(0, this.size);
  },

  last: function last(notSetValue) {
    return this.get(-1, notSetValue);
  },

  skipWhile: function skipWhile(predicate, context) {
    return reify(this, skipWhileFactory(this, predicate, context, false));
  },

  zip: function zip(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections));
  },

  zipAll: function zipAll(/*, ...collections */) {
    var collections = [this].concat(arrCopy(arguments));
    return reify(this, zipWithFactory(this, defaultZipper, collections, true));
  },

  zipWith: function zipWith(zipper /*, ...collections */) {
    var collections = arrCopy(arguments);
    collections[0] = this;
    return reify(this, zipWithFactory(this, zipper, collections));
  },
});

var IndexedCollectionPrototype = IndexedCollection.prototype;
IndexedCollectionPrototype[IS_INDEXED_SYMBOL] = true;
IndexedCollectionPrototype[IS_ORDERED_SYMBOL] = true;

mixin(SetCollection, {
  // ### ES6 Collection methods (ES6 Array and Map)

  get: function get(value, notSetValue) {
    return this.has(value) ? value : notSetValue;
  },

  includes: function includes(value) {
    return this.has(value);
  },

  // ### More sequential methods

  keySeq: function keySeq() {
    return this.valueSeq();
  },
});

SetCollection.prototype.has = CollectionPrototype.includes;
SetCollection.prototype.contains = SetCollection.prototype.includes;

// Mixin subclasses

mixin(KeyedSeq, KeyedCollection.prototype);
mixin(IndexedSeq, IndexedCollection.prototype);
mixin(SetSeq, SetCollection.prototype);

// #pragma Helper functions

function reduce(collection, reducer, reduction, context, useFirst, reverse) {
  assertNotInfinite(collection.size);
  collection.__iterate(function (v, k, c) {
    if (useFirst) {
      useFirst = false;
      reduction = v;
    } else {
      reduction = reducer.call(context, reduction, v, k, c);
    }
  }, reverse);
  return reduction;
}

function keyMapper(v, k) {
  return k;
}

function entryMapper(v, k) {
  return [k, v];
}

function not(predicate) {
  return function() {
    return !predicate.apply(this, arguments);
  };
}

function neg(predicate) {
  return function() {
    return -predicate.apply(this, arguments);
  };
}

function defaultZipper() {
  return arrCopy(arguments);
}

function defaultNegComparator(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
}

function hashCollection(collection) {
  if (collection.size === Infinity) {
    return 0;
  }
  var ordered = isOrdered(collection);
  var keyed = isKeyed(collection);
  var h = ordered ? 1 : 0;
  var size = collection.__iterate(
    keyed
      ? ordered
        ? function (v, k) {
            h = (31 * h + hashMerge(hash(v), hash(k))) | 0;
          }
        : function (v, k) {
            h = (h + hashMerge(hash(v), hash(k))) | 0;
          }
      : ordered
        ? function (v) {
            h = (31 * h + hash(v)) | 0;
          }
        : function (v) {
            h = (h + hash(v)) | 0;
          }
  );
  return murmurHashOfSize(size, h);
}

function murmurHashOfSize(size, h) {
  h = imul(h, 0xcc9e2d51);
  h = imul((h << 15) | (h >>> -15), 0x1b873593);
  h = imul((h << 13) | (h >>> -13), 5);
  h = ((h + 0xe6546b64) | 0) ^ size;
  h = imul(h ^ (h >>> 16), 0x85ebca6b);
  h = imul(h ^ (h >>> 13), 0xc2b2ae35);
  h = smi(h ^ (h >>> 16));
  return h;
}

function hashMerge(a, b) {
  return (a ^ (b + 0x9e3779b9 + (a << 6) + (a >> 2))) | 0; // int
}

var OrderedSet = /*@__PURE__*/(function (Set$$1) {
  function OrderedSet(value) {
    return value === null || value === undefined
      ? emptyOrderedSet()
      : isOrderedSet(value)
        ? value
        : emptyOrderedSet().withMutations(function (set) {
            var iter = SetCollection(value);
            assertNotInfinite(iter.size);
            iter.forEach(function (v) { return set.add(v); });
          });
  }

  if ( Set$$1 ) OrderedSet.__proto__ = Set$$1;
  OrderedSet.prototype = Object.create( Set$$1 && Set$$1.prototype );
  OrderedSet.prototype.constructor = OrderedSet;

  OrderedSet.of = function of (/*...values*/) {
    return this(arguments);
  };

  OrderedSet.fromKeys = function fromKeys (value) {
    return this(KeyedCollection(value).keySeq());
  };

  OrderedSet.prototype.toString = function toString () {
    return this.__toString('OrderedSet {', '}');
  };

  return OrderedSet;
}(Set));

OrderedSet.isOrderedSet = isOrderedSet;

var OrderedSetPrototype = OrderedSet.prototype;
OrderedSetPrototype[IS_ORDERED_SYMBOL] = true;
OrderedSetPrototype.zip = IndexedCollectionPrototype.zip;
OrderedSetPrototype.zipWith = IndexedCollectionPrototype.zipWith;

OrderedSetPrototype.__empty = emptyOrderedSet;
OrderedSetPrototype.__make = makeOrderedSet;

function makeOrderedSet(map, ownerID) {
  var set = Object.create(OrderedSetPrototype);
  set.size = map ? map.size : 0;
  set._map = map;
  set.__ownerID = ownerID;
  return set;
}

var EMPTY_ORDERED_SET;
function emptyOrderedSet() {
  return (
    EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()))
  );
}

var Record = function Record(defaultValues, name) {
  var hasInitialized;

  var RecordType = function Record(values) {
    var this$1 = this;

    if (values instanceof RecordType) {
      return values;
    }
    if (!(this instanceof RecordType)) {
      return new RecordType(values);
    }
    if (!hasInitialized) {
      hasInitialized = true;
      var keys = Object.keys(defaultValues);
      var indices = (RecordTypePrototype._indices = {});
      // Deprecated: left to attempt not to break any external code which
      // relies on a ._name property existing on record instances.
      // Use Record.getDescriptiveName() instead
      RecordTypePrototype._name = name;
      RecordTypePrototype._keys = keys;
      RecordTypePrototype._defaultValues = defaultValues;
      for (var i = 0; i < keys.length; i++) {
        var propName = keys[i];
        indices[propName] = i;
        if (RecordTypePrototype[propName]) {
          /* eslint-disable no-console */
          typeof console === 'object' &&
            console.warn &&
            console.warn(
              'Cannot define ' +
                recordName(this) +
                ' with property "' +
                propName +
                '" since that property name is part of the Record API.'
            );
          /* eslint-enable no-console */
        } else {
          setProp(RecordTypePrototype, propName);
        }
      }
    }
    this.__ownerID = undefined;
    this._values = List().withMutations(function (l) {
      l.setSize(this$1._keys.length);
      KeyedCollection(values).forEach(function (v, k) {
        l.set(this$1._indices[k], v === this$1._defaultValues[k] ? undefined : v);
      });
    });
  };

  var RecordTypePrototype = (RecordType.prototype = Object.create(
    RecordPrototype
  ));
  RecordTypePrototype.constructor = RecordType;

  if (name) {
    RecordType.displayName = name;
  }

  return RecordType;
};

Record.prototype.toString = function toString () {
  var str = recordName(this) + ' { ';
  var keys = this._keys;
  var k;
  for (var i = 0, l = keys.length; i !== l; i++) {
    k = keys[i];
    str += (i ? ', ' : '') + k + ': ' + quoteString(this.get(k));
  }
  return str + ' }';
};

Record.prototype.equals = function equals (other) {
  return (
    this === other ||
    (other &&
      this._keys === other._keys &&
      recordSeq(this).equals(recordSeq(other)))
  );
};

Record.prototype.hashCode = function hashCode () {
  return recordSeq(this).hashCode();
};

// @pragma Access

Record.prototype.has = function has (k) {
  return this._indices.hasOwnProperty(k);
};

Record.prototype.get = function get (k, notSetValue) {
  if (!this.has(k)) {
    return notSetValue;
  }
  var index = this._indices[k];
  var value = this._values.get(index);
  return value === undefined ? this._defaultValues[k] : value;
};

// @pragma Modification

Record.prototype.set = function set (k, v) {
  if (this.has(k)) {
    var newValues = this._values.set(
      this._indices[k],
      v === this._defaultValues[k] ? undefined : v
    );
    if (newValues !== this._values && !this.__ownerID) {
      return makeRecord(this, newValues);
    }
  }
  return this;
};

Record.prototype.remove = function remove (k) {
  return this.set(k);
};

Record.prototype.clear = function clear () {
  var newValues = this._values.clear().setSize(this._keys.length);
  return this.__ownerID ? this : makeRecord(this, newValues);
};

Record.prototype.wasAltered = function wasAltered () {
  return this._values.wasAltered();
};

Record.prototype.toSeq = function toSeq () {
  return recordSeq(this);
};

Record.prototype.toJS = function toJS$1 () {
  return toJS(this);
};

Record.prototype.entries = function entries () {
  return this.__iterator(ITERATE_ENTRIES);
};

Record.prototype.__iterator = function __iterator (type, reverse) {
  return recordSeq(this).__iterator(type, reverse);
};

Record.prototype.__iterate = function __iterate (fn, reverse) {
  return recordSeq(this).__iterate(fn, reverse);
};

Record.prototype.__ensureOwner = function __ensureOwner (ownerID) {
  if (ownerID === this.__ownerID) {
    return this;
  }
  var newValues = this._values.__ensureOwner(ownerID);
  if (!ownerID) {
    this.__ownerID = ownerID;
    this._values = newValues;
    return this;
  }
  return makeRecord(this, newValues, ownerID);
};

Record.isRecord = isRecord;
Record.getDescriptiveName = recordName;
var RecordPrototype = Record.prototype;
RecordPrototype[IS_RECORD_SYMBOL] = true;
RecordPrototype[DELETE] = RecordPrototype.remove;
RecordPrototype.deleteIn = RecordPrototype.removeIn = deleteIn;
RecordPrototype.getIn = getIn$1;
RecordPrototype.hasIn = CollectionPrototype.hasIn;
RecordPrototype.merge = merge;
RecordPrototype.mergeWith = mergeWith;
RecordPrototype.mergeIn = mergeIn;
RecordPrototype.mergeDeep = mergeDeep$1;
RecordPrototype.mergeDeepWith = mergeDeepWith$1;
RecordPrototype.mergeDeepIn = mergeDeepIn;
RecordPrototype.setIn = setIn$1;
RecordPrototype.update = update$1;
RecordPrototype.updateIn = updateIn$1;
RecordPrototype.withMutations = withMutations;
RecordPrototype.asMutable = asMutable;
RecordPrototype.asImmutable = asImmutable;
RecordPrototype[ITERATOR_SYMBOL] = RecordPrototype.entries;
RecordPrototype.toJSON = RecordPrototype.toObject =
  CollectionPrototype.toObject;
RecordPrototype.inspect = RecordPrototype.toSource = function() {
  return this.toString();
};

function makeRecord(likeRecord, values, ownerID) {
  var record = Object.create(Object.getPrototypeOf(likeRecord));
  record._values = values;
  record.__ownerID = ownerID;
  return record;
}

function recordName(record) {
  return record.constructor.displayName || record.constructor.name || 'Record';
}

function recordSeq(record) {
  return keyedSeqFromValue(record._keys.map(function (k) { return [k, record.get(k)]; }));
}

function setProp(prototype, name) {
  try {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      },
    });
  } catch (error) {
    // Object.defineProperty failed. Probably IE8.
  }
}

/**
 * Returns a lazy Seq of `value` repeated `times` times. When `times` is
 * undefined, returns an infinite sequence of `value`.
 */
var Repeat = /*@__PURE__*/(function (IndexedSeq$$1) {
  function Repeat(value, times) {
    if (!(this instanceof Repeat)) {
      return new Repeat(value, times);
    }
    this._value = value;
    this.size = times === undefined ? Infinity : Math.max(0, times);
    if (this.size === 0) {
      if (EMPTY_REPEAT) {
        return EMPTY_REPEAT;
      }
      EMPTY_REPEAT = this;
    }
  }

  if ( IndexedSeq$$1 ) Repeat.__proto__ = IndexedSeq$$1;
  Repeat.prototype = Object.create( IndexedSeq$$1 && IndexedSeq$$1.prototype );
  Repeat.prototype.constructor = Repeat;

  Repeat.prototype.toString = function toString () {
    if (this.size === 0) {
      return 'Repeat []';
    }
    return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
  };

  Repeat.prototype.get = function get (index, notSetValue) {
    return this.has(index) ? this._value : notSetValue;
  };

  Repeat.prototype.includes = function includes (searchValue) {
    return is(this._value, searchValue);
  };

  Repeat.prototype.slice = function slice (begin, end) {
    var size = this.size;
    return wholeSlice(begin, end, size)
      ? this
      : new Repeat(
          this._value,
          resolveEnd(end, size) - resolveBegin(begin, size)
        );
  };

  Repeat.prototype.reverse = function reverse () {
    return this;
  };

  Repeat.prototype.indexOf = function indexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return 0;
    }
    return -1;
  };

  Repeat.prototype.lastIndexOf = function lastIndexOf (searchValue) {
    if (is(this._value, searchValue)) {
      return this.size;
    }
    return -1;
  };

  Repeat.prototype.__iterate = function __iterate (fn, reverse) {
    var size = this.size;
    var i = 0;
    while (i !== size) {
      if (fn(this._value, reverse ? size - ++i : i++, this) === false) {
        break;
      }
    }
    return i;
  };

  Repeat.prototype.__iterator = function __iterator (type, reverse) {
    var this$1 = this;

    var size = this.size;
    var i = 0;
    return new Iterator(
      function () { return i === size
          ? iteratorDone()
          : iteratorValue(type, reverse ? size - ++i : i++, this$1._value); }
    );
  };

  Repeat.prototype.equals = function equals (other) {
    return other instanceof Repeat
      ? is(this._value, other._value)
      : deepEqual(other);
  };

  return Repeat;
}(IndexedSeq));

var EMPTY_REPEAT;

function fromJS(value, converter) {
  return fromJSWith(
    [],
    converter || defaultConverter,
    value,
    '',
    converter && converter.length > 2 ? [] : undefined,
    { '': value }
  );
}

function fromJSWith(stack, converter, value, key, keyPath, parentValue) {
  var toSeq = Array.isArray(value)
    ? IndexedSeq
    : isPlainObj(value)
      ? KeyedSeq
      : null;
  if (toSeq) {
    if (~stack.indexOf(value)) {
      throw new TypeError('Cannot convert circular structure to Immutable');
    }
    stack.push(value);
    keyPath && key !== '' && keyPath.push(key);
    var converted = converter.call(
      parentValue,
      key,
      toSeq(value).map(function (v, k) { return fromJSWith(stack, converter, v, k, keyPath, value); }
      ),
      keyPath && keyPath.slice()
    );
    stack.pop();
    keyPath && keyPath.pop();
    return converted;
  }
  return value;
}

function defaultConverter(k, v) {
  return isKeyed(v) ? v.toMap() : v.toList();
}

var version = "4.0.0-rc.11";

var Immutable = {
  version: version,

  Collection: Collection,
  // Note: Iterable is deprecated
  Iterable: Collection,

  Seq: Seq,
  Map: Map,
  OrderedMap: OrderedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,

  Record: Record,
  Range: Range,
  Repeat: Repeat,

  is: is,
  fromJS: fromJS,
  hash: hash,

  isImmutable: isImmutable,
  isCollection: isCollection,
  isKeyed: isKeyed,
  isIndexed: isIndexed,
  isAssociative: isAssociative,
  isOrdered: isOrdered,
  isValueObject: isValueObject,
  isSeq: isSeq,
  isList: isList,
  isMap: isMap,
  isOrderedMap: isOrderedMap,
  isStack: isStack,
  isSet: isSet,
  isOrderedSet: isOrderedSet,
  isRecord: isRecord,

  get: get,
  getIn: getIn,
  has: has,
  hasIn: hasIn,
  merge: merge$1,
  mergeDeep: mergeDeep,
  mergeWith: mergeWith$1,
  mergeDeepWith: mergeDeepWith,
  remove: remove,
  removeIn: removeIn,
  set: set,
  setIn: setIn,
  update: update,
  updateIn: updateIn,
};

// Note: Iterable is deprecated
var Iterable = Collection;

/* harmony default export */ __webpack_exports__["default"] = (Immutable);



/***/ }),

/***/ "./node_modules/is-hotkey/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-hotkey/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  if (!Array.isArray(hotkey)) {
    hotkey = [hotkey];
  }

  var array = hotkey.map(function (string) {
    return parseHotkey(string, options);
  });
  var check = function check(e) {
    return array.some(function (object) {
      return compareHotkey(object, e);
    });
  };
  var ret = event == null ? check : check(event);
  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var optional = value.endsWith('?');

      if (optional) {
        value = value.slice(0, -1);
      }

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (length === 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = optional ? null : true;
      }
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

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) {
      continue;
    }

    if (key === 'key') {
      actual = event.key.toLowerCase();
    } else if (key === 'which') {
      actual = expected === 91 && event.which === 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual == null && expected === false) {
      continue;
    }

    if (actual !== expected) {
      return false;
    }
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

exports.default = isHotkey;
exports.isHotkey = isHotkey;
exports.isCodeHotkey = isCodeHotkey;
exports.isKeyHotkey = isKeyHotkey;
exports.parseHotkey = parseHotkey;
exports.compareHotkey = compareHotkey;
exports.toKeyCode = toKeyCode;
exports.toKeyName = toKeyName;

/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/isomorphic-base64/browser.js":
/*!***************************************************!*\
  !*** ./node_modules/isomorphic-base64/browser.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.atob = self.atob.bind(self);
exports.btoa = self.btoa.bind(self);


/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ "./node_modules/lodash/_isFlattenable.js");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(/*! ./_basePickBy */ "./node_modules/lodash/_basePickBy.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js");

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSet = __webpack_require__(/*! ./_baseSet */ "./node_modules/lodash/_baseSet.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js");

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(/*! ./constant */ "./node_modules/lodash/constant.js"),
    defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_baseUnset.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnset.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    last = __webpack_require__(/*! ./last */ "./node_modules/lodash/last.js"),
    parent = __webpack_require__(/*! ./_parent */ "./node_modules/lodash/_parent.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_customOmitClone.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_customOmitClone.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__(/*! ./isPlainObject */ "./node_modules/lodash/isPlainObject.js");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(/*! ./flatten */ "./node_modules/lodash/flatten.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_parent.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_parent.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js"),
    baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ "./node_modules/lodash/_baseSetToString.js"),
    shortOut = __webpack_require__(/*! ./_shortOut */ "./node_modules/lodash/_shortOut.js");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ "./node_modules/lodash/_baseFlatten.js");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "./node_modules/lodash/last.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/last.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ "./node_modules/lodash/omit.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/omit.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js"),
    baseUnset = __webpack_require__(/*! ./_baseUnset */ "./node_modules/lodash/_baseUnset.js"),
    castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    customOmitClone = __webpack_require__(/*! ./_customOmitClone */ "./node_modules/lodash/_customOmitClone.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var basePick = __webpack_require__(/*! ./_basePick */ "./node_modules/lodash/_basePick.js"),
    flatRest = __webpack_require__(/*! ./_flatRest */ "./node_modules/lodash/_flatRest.js");

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * This is a straight rip-off of the React.js ReactPropTypes.js proptype validators,
 * modified to make it possible to validate Immutable.js data.
 *     ImmutableTypes.listOf is patterned after React.PropTypes.arrayOf, but for Immutable.List
 *     ImmutableTypes.shape  is based on React.PropTypes.shape, but for any Immutable.Iterable
 */


var Immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var ANONYMOUS = "<<anonymous>>";

var ImmutablePropTypes = {
  listOf: createListOfTypeChecker,
  mapOf: createMapOfTypeChecker,
  orderedMapOf: createOrderedMapOfTypeChecker,
  setOf: createSetOfTypeChecker,
  orderedSetOf: createOrderedSetOfTypeChecker,
  stackOf: createStackOfTypeChecker,
  iterableOf: createIterableOfTypeChecker,
  recordOf: createRecordOfTypeChecker,
  shape: createShapeChecker,
  contains: createShapeChecker,
  mapContains: createMapContainsChecker,
  // Primitive Types
  list: createImmutableTypeChecker("List", Immutable.List.isList),
  map: createImmutableTypeChecker("Map", Immutable.Map.isMap),
  orderedMap: createImmutableTypeChecker("OrderedMap", Immutable.OrderedMap.isOrderedMap),
  set: createImmutableTypeChecker("Set", Immutable.Set.isSet),
  orderedSet: createImmutableTypeChecker("OrderedSet", Immutable.OrderedSet.isOrderedSet),
  stack: createImmutableTypeChecker("Stack", Immutable.Stack.isStack),
  seq: createImmutableTypeChecker("Seq", Immutable.Seq.isSeq),
  record: createImmutableTypeChecker("Record", function (isRecord) {
    return isRecord instanceof Immutable.Record;
  }),
  iterable: createImmutableTypeChecker("Iterable", Immutable.Iterable.isIterable)
};

function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return "array";
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return "object";
  }
  if (propValue instanceof Immutable.Iterable) {
    return "Immutable." + propValue.toSource().split(" ")[0];
  }
  return propType;
}

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      rest[_key - 6] = arguments[_key];
    }

    propFullName = propFullName || propName;
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = location;
      if (isRequired) {
        return new Error("Required " + locationName + " `" + propFullName + "` was not specified in " + ("`" + componentName + "`."));
      }
    } else {
      return validate.apply(undefined, [props, propName, componentName, location, propFullName].concat(rest));
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createImmutableTypeChecker(immutableClassName, immutableClassTypeValidator) {
  function validate(props, propName, componentName, location, propFullName) {
    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      return new Error("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `" + immutableClassName + "`."));
    }
    return null;
  }
  return createChainableTypeChecker(validate);
}

function createIterableTypeChecker(typeChecker, immutableClassName, immutableClassTypeValidator) {

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var locationName = location;
      var propType = getPropType(propValue);
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }

    if (typeof typeChecker !== "function") {
      return new Error("Invalid typeChecker supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var propValues = propValue.toArray();
    for (var i = 0, len = propValues.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [propValues, i, componentName, location, "" + propFullName + "[" + i + "]"].concat(rest));
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createKeysTypeChecker(typeChecker) {

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (typeof typeChecker !== "function") {
      return new Error("Invalid keysTypeChecker (optional second argument) supplied to `" + componentName + "` " + ("for propType `" + propFullName + "`, expected a function."));
    }

    var keys = propValue.keySeq().toArray();
    for (var i = 0, len = keys.length; i < len; i++) {
      var error = typeChecker.apply(undefined, [keys, i, componentName, location, "" + propFullName + " -> key(" + keys[i] + ")"].concat(rest));
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createListOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "List", Immutable.List.isList);
}

function createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, immutableClassName, immutableClassTypeValidator) {
  function validate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return createIterableTypeChecker(valuesTypeChecker, immutableClassName, immutableClassTypeValidator).apply(undefined, args) || keysTypeChecker && createKeysTypeChecker(keysTypeChecker).apply(undefined, args);
  }

  return createChainableTypeChecker(validate);
}

function createMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "Map", Immutable.Map.isMap);
}

function createOrderedMapOfTypeChecker(valuesTypeChecker, keysTypeChecker) {
  return createMapOfTypeCheckerFactory(valuesTypeChecker, keysTypeChecker, "OrderedMap", Immutable.OrderedMap.isOrderedMap);
}

function createSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Set", Immutable.Set.isSet);
}

function createOrderedSetOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "OrderedSet", Immutable.OrderedSet.isOrderedSet);
}

function createStackOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Stack", Immutable.Stack.isStack);
}

function createIterableOfTypeChecker(typeChecker) {
  return createIterableTypeChecker(typeChecker, "Iterable", Immutable.Iterable.isIterable);
}

function createRecordOfTypeChecker(recordKeys) {
  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!(propValue instanceof Immutable.Record)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js Record."));
    }
    for (var key in recordKeys) {
      var checker = recordKeys[key];
      if (!checker) {
        continue;
      }
      var mutablePropValue = propValue.toObject();
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

// there is some irony in the fact that shapeTypes is a standard hash and not an immutable collection
function createShapeTypeChecker(shapeTypes) {
  var immutableClassName = arguments[1] === undefined ? "Iterable" : arguments[1];
  var immutableClassTypeValidator = arguments[2] === undefined ? Immutable.Iterable.isIterable : arguments[2];

  function validate(props, propName, componentName, location, propFullName) {
    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    var propValue = props[propName];
    if (!immutableClassTypeValidator(propValue)) {
      var propType = getPropType(propValue);
      var locationName = location;
      return new Error("Invalid " + locationName + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected an Immutable.js " + immutableClassName + "."));
    }
    var mutablePropValue = propValue.toObject();
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker.apply(undefined, [mutablePropValue, key, componentName, location, "" + propFullName + "." + key].concat(rest));
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createShapeChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes);
}

function createMapContainsChecker(shapeTypes) {
  return createShapeTypeChecker(shapeTypes, "Map", Immutable.Map.isMap);
}

module.exports = ImmutablePropTypes;

/***/ }),

/***/ "./node_modules/selection-is-backward/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/selection-is-backward/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function isBackward(selection) {
    var startNode = selection.anchorNode;
    var startOffset = selection.anchorOffset;
    var endNode = selection.focusNode;
    var endOffset = selection.focusOffset;

    var position = startNode.compareDocumentPosition(endNode);

    return !(position === 4 || (position === 0 && startOffset < endOffset));
}

module.exports = isBackward;


/***/ }),

/***/ "./node_modules/slate-base64-serializer/lib/slate-base64-serializer.es.js":
/*!********************************************************************************!*\
  !*** ./node_modules/slate-base64-serializer/lib/slate-base64-serializer.es.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/lib/slate.es.js");
/* harmony import */ var isomorphic_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-base64 */ "./node_modules/isomorphic-base64/browser.js");
/* harmony import */ var isomorphic_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_base64__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Encode a JSON `object` as base-64 `string`.
 *
 * @param {Object} object
 * @return {String}
 */

function encode(object) {
  var string = JSON.stringify(object);
  var encoded = Object(isomorphic_base64__WEBPACK_IMPORTED_MODULE_1__["btoa"])(encodeURIComponent(string));
  return encoded;
}

/**
 * Decode a base-64 `string` to a JSON `object`.
 *
 * @param {String} string
 * @return {Object}
 */

function decode(string) {
  var decoded = decodeURIComponent(Object(isomorphic_base64__WEBPACK_IMPORTED_MODULE_1__["atob"])(string));
  var object = JSON.parse(decoded);
  return object;
}

/**
 * Deserialize a Value `string`.
 *
 * @param {String} string
 * @return {Value}
 */

function deserialize(string, options) {
  var raw = decode(string);
  var value = slate__WEBPACK_IMPORTED_MODULE_0__["Value"].fromJSON(raw, options);
  return value;
}

/**
 * Deserialize a Node `string`.
 *
 * @param {String} string
 * @return {Node}
 */

function deserializeNode(string, options) {
  var raw = decode(string);
  var node = slate__WEBPACK_IMPORTED_MODULE_0__["Node"].fromJSON(raw, options);
  return node;
}

/**
 * Serialize a `value`.
 *
 * @param {Value} value
 * @return {String}
 */

function serialize(value, options) {
  var raw = value.toJSON(options);
  var encoded = encode(raw);
  return encoded;
}

/**
 * Serialize a `node`.
 *
 * @param {Node} node
 * @return {String}
 */

function serializeNode(node, options) {
  var raw = node.toJSON(options);
  var encoded = encode(raw);
  return encoded;
}

/**
 * Export.
 *
 * @type {Object}
 */

var index = {
  deserialize: deserialize,
  deserializeNode: deserializeNode,
  serialize: serialize,
  serializeNode: serializeNode
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=slate-base64-serializer.es.js.map


/***/ }),

/***/ "./node_modules/slate-dev-environment/lib/slate-dev-environment.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/slate-dev-environment/lib/slate-dev-environment.es.js ***!
  \****************************************************************************/
/*! exports provided: IS_CHROME, IS_OPERA, IS_FIREFOX, IS_SAFARI, IS_IE, IS_EDGE, IS_ANDROID, IS_IOS, IS_MAC, IS_WINDOWS, ANDROID_API_VERSION, HAS_INPUT_EVENTS_LEVEL_1, HAS_INPUT_EVENTS_LEVEL_2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_CHROME", function() { return IS_CHROME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_OPERA", function() { return IS_OPERA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_FIREFOX", function() { return IS_FIREFOX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_SAFARI", function() { return IS_SAFARI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_IE", function() { return IS_IE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_EDGE", function() { return IS_EDGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_ANDROID", function() { return IS_ANDROID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_IOS", function() { return IS_IOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_MAC", function() { return IS_MAC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IS_WINDOWS", function() { return IS_WINDOWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANDROID_API_VERSION", function() { return ANDROID_API_VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_INPUT_EVENTS_LEVEL_1", function() { return HAS_INPUT_EVENTS_LEVEL_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAS_INPUT_EVENTS_LEVEL_2", function() { return HAS_INPUT_EVENTS_LEVEL_2; });
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");


var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/**
 * Browser matching rules.
 *
 * @type {Array}
 */

var BROWSER_RULES = [['edge', /Edge\/([0-9\._]+)/], ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/], ['opera', /Opera\/([0-9\.]+)(?:\s|$)/], ['opera', /OPR\/([0-9\.]+)(:?\s|$)$/], ['ie', /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/], ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ['ie', /MSIE\s(7\.0)/], ['android', /Android\s([0-9\.]+)/], ['safari', /Version\/([0-9\._]+).*Safari/]];

var browser = void 0;

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = BROWSER_RULES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _ref = _step.value;

      var _ref2 = slicedToArray(_ref, 2);

      var name = _ref2[0];
      var regexp = _ref2[1];

      if (regexp.test(window.navigator.userAgent)) {
        browser = name;
        break;
      }
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
}

/**
 * Operating system matching rules.
 *
 * @type {Array}
 */

var OS_RULES = [['ios', /os ([\.\_\d]+) like mac os/i], // must be before the macos rule
['macos', /mac os x/i], ['android', /android/i], ['firefoxos', /mozilla\/[a-z\.\_\d]+ \((?:mobile)|(?:tablet)/i], ['windows', /windows\s*(?:nt)?\s*([\.\_\d]+)/i]];

var os = void 0;

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = OS_RULES[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _ref3 = _step2.value;

      var _ref4 = slicedToArray(_ref3, 2);

      var _name = _ref4[0];
      var _regexp = _ref4[1];

      if (_regexp.test(window.navigator.userAgent)) {
        os = _name;
        break;
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

/**
 * Feature matching rules.
 *
 * @type {Array}
 */

var FEATURE_RULES = [['inputeventslevel1', function (window) {
  var event = window.InputEvent ? new window.InputEvent('input') : {};
  var support = 'inputType' in event;
  return support;
}], ['inputeventslevel2', function (window) {
  var element = window.document.createElement('div');
  element.contentEditable = true;
  var support = 'onbeforeinput' in element;
  return support;
}]];

var features = [];

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = FEATURE_RULES[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _ref5 = _step3.value;

      var _ref6 = slicedToArray(_ref5, 2);

      var _name2 = _ref6[0];
      var test = _ref6[1];

      if (test(window)) {
        features.push(_name2);
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

/**
 * Array of regular expression matchers and their API version
 *
 * @type {Array}
 */

var ANDROID_API_VERSIONS = [[/^9([.]0|)/, 28], [/^8[.]1/, 27], [/^8([.]0|)/, 26], [/^7[.]1/, 25], [/^7([.]0|)/, 24], [/^6([.]0|)/, 23], [/^5[.]1/, 22], [/^5([.]0|)/, 21], [/^4[.]4/, 20]];

/**
 * get the Android API version from the userAgent
 *
 * @return {number} version
 */

function getAndroidApiVersion() {
  if (os !== 'android') return null;
  var userAgent = window.navigator.userAgent;

  var matchData = userAgent.match(/Android\s([0-9\.]+)/);
  if (matchData == null) return null;
  var versionString = matchData[1];

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = ANDROID_API_VERSIONS[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _ref7 = _step4.value;

      var _ref8 = slicedToArray(_ref7, 2);

      var regex = _ref8[0];
      var version = _ref8[1];

      if (versionString.match(regex)) return version;
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return null;
}

/**
 * Export.
 *
 * @type {Boolean}
 */

var IS_CHROME = browser === 'chrome';
var IS_OPERA = browser === 'opera';
var IS_FIREFOX = browser === 'firefox';
var IS_SAFARI = browser === 'safari';
var IS_IE = browser === 'ie';
var IS_EDGE = browser === 'edge';

var IS_ANDROID = os === 'android';
var IS_IOS = os === 'ios';
var IS_MAC = os === 'macos';
var IS_WINDOWS = os === 'windows';

var ANDROID_API_VERSION = getAndroidApiVersion();

var HAS_INPUT_EVENTS_LEVEL_1 = features.includes('inputeventslevel1');
var HAS_INPUT_EVENTS_LEVEL_2 = features.includes('inputeventslevel2') || IS_ANDROID && (ANDROID_API_VERSION === 28 || ANDROID_API_VERSION === null);


//# sourceMappingURL=slate-dev-environment.es.js.map


/***/ }),

/***/ "./node_modules/slate-hotkeys/lib/slate-hotkeys.es.js":
/*!************************************************************!*\
  !*** ./node_modules/slate-hotkeys/lib/slate-hotkeys.es.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-hotkey */ "./node_modules/is-hotkey/lib/index.js");
/* harmony import */ var is_hotkey__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_hotkey__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slate_dev_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-dev-environment */ "./node_modules/slate-dev-environment/lib/slate-dev-environment.es.js");



/**
 * Hotkey mappings for each platform.
 *
 * @type {Object}
 */

var HOTKEYS = {
  bold: 'mod+b',
  compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
  moveBackward: 'left',
  moveForward: 'right',
  moveWordBackward: 'ctrl+left',
  moveWordForward: 'ctrl+right',
  deleteBackward: 'shift?+backspace',
  deleteForward: 'shift?+delete',
  extendBackward: 'shift+left',
  extendForward: 'shift+right',
  italic: 'mod+i',
  splitBlock: 'shift?+enter',
  undo: 'mod+z'
};

var APPLE_HOTKEYS = {
  moveLineBackward: 'opt+up',
  moveLineForward: 'opt+down',
  moveWordBackward: 'opt+left',
  moveWordForward: 'opt+right',
  deleteBackward: ['ctrl+backspace', 'ctrl+h'],
  deleteForward: ['ctrl+delete', 'ctrl+d'],
  deleteLineBackward: 'cmd+shift?+backspace',
  deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
  deleteWordBackward: 'opt+shift?+backspace',
  deleteWordForward: 'opt+shift?+delete',
  extendLineBackward: 'opt+shift+up',
  extendLineForward: 'opt+shift+down',
  redo: 'cmd+shift+z',
  transposeCharacter: 'ctrl+t'
};

var WINDOWS_HOTKEYS = {
  deleteWordBackward: 'ctrl+shift?+backspace',
  deleteWordForward: 'ctrl+shift?+delete',
  redo: 'ctrl+y'

  /**
   * Hotkeys.
   *
   * @type {Object}
   */

};var Hotkeys = {};

var IS_APPLE = slate_dev_environment__WEBPACK_IMPORTED_MODULE_1__["IS_IOS"] || slate_dev_environment__WEBPACK_IMPORTED_MODULE_1__["IS_MAC"];
var IS_WINDOWS = !IS_APPLE;
var KEYS = [].concat(Object.keys(HOTKEYS)).concat(Object.keys(APPLE_HOTKEYS)).concat(Object.keys(WINDOWS_HOTKEYS));

KEYS.forEach(function (key) {
  var method = 'is' + key[0].toUpperCase() + key.slice(1);
  if (Hotkeys[method]) return;

  var generic = HOTKEYS[key];
  var apple = APPLE_HOTKEYS[key];
  var windows = WINDOWS_HOTKEYS[key];

  var isGeneric = generic && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_0__["isKeyHotkey"])(generic);
  var isApple = apple && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_0__["isKeyHotkey"])(apple);
  var isWindows = windows && Object(is_hotkey__WEBPACK_IMPORTED_MODULE_0__["isKeyHotkey"])(windows);

  Hotkeys[method] = function (event) {
    if (isGeneric && isGeneric(event)) return true;
    if (IS_APPLE && isApple && isApple(event)) return true;
    if (IS_WINDOWS && isWindows && isWindows(event)) return true;
    return false;
  };
});

/* harmony default export */ __webpack_exports__["default"] = (Hotkeys);
//# sourceMappingURL=slate-hotkeys.es.js.map


/***/ }),

/***/ "./node_modules/slate-plain-serializer/lib/slate-plain-serializer.es.js":
/*!******************************************************************************!*\
  !*** ./node_modules/slate-plain-serializer/lib/slate-plain-serializer.es.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/lib/slate.es.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");



var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Deserialize a plain text `string` to a Slate value.
 *
 * @param {String} string
 * @param {Object} options
 *   @property {Boolean} toJSON
 *   @property {String|Object|Block} defaultBlock
 *   @property {Array|Set} defaultMarks
 * @return {Value}
 */

function deserialize(string) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$defaultBlock = options.defaultBlock,
      defaultBlock = _options$defaultBlock === undefined ? 'line' : _options$defaultBlock,
      _options$defaultMarks = options.defaultMarks,
      defaultMarks = _options$defaultMarks === undefined ? [] : _options$defaultMarks,
      _options$delimiter = options.delimiter,
      delimiter = _options$delimiter === undefined ? '\n' : _options$delimiter,
      _options$toJSON = options.toJSON,
      toJSON = _options$toJSON === undefined ? false : _options$toJSON;


  if (immutable__WEBPACK_IMPORTED_MODULE_1__["Set"].isSet(defaultMarks)) {
    defaultMarks = defaultMarks.toArray();
  }

  defaultBlock = slate__WEBPACK_IMPORTED_MODULE_0__["Node"].createProperties(defaultBlock);
  defaultMarks = defaultMarks.map(slate__WEBPACK_IMPORTED_MODULE_0__["Mark"].createProperties);

  var json = {
    object: 'value',
    document: {
      object: 'document',
      data: {},
      nodes: string.split(delimiter).map(function (line) {
        return _extends({}, defaultBlock, {
          object: 'block',
          data: {},
          nodes: [{
            object: 'text',
            leaves: [{
              object: 'leaf',
              text: line,
              marks: defaultMarks
            }]
          }]
        });
      })
    }
  };

  var ret = toJSON ? json : slate__WEBPACK_IMPORTED_MODULE_0__["Value"].fromJSON(json);
  return ret;
}

/**
 * Serialize a Slate `value` to a plain text string.
 *
 * @param {Value} value
 * @return {String}
 */

function serialize(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return serializeNode(value.document, options);
}

/**
 * Serialize a `node` to plain text.
 *
 * @param {Node} node
 * @return {String}
 */

function serializeNode(node) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$delimiter2 = options.delimiter,
      delimiter = _options$delimiter2 === undefined ? '\n' : _options$delimiter2;


  if (node.object === 'document' || node.object === 'block' && slate__WEBPACK_IMPORTED_MODULE_0__["Block"].isBlockList(node.nodes)) {
    return node.nodes.map(serializeNode).join(delimiter);
  } else {
    return node.text;
  }
}

/**
 * Export.
 *
 * @type {Object}
 */

var index = {
  deserialize: deserialize,
  serialize: serialize
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=slate-plain-serializer.es.js.map


/***/ }),

/***/ "./node_modules/slate-prop-types/lib/slate-prop-types.es.js":
/*!******************************************************************!*\
  !*** ./node_modules/slate-prop-types/lib/slate-prop-types.es.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/lib/slate.es.js");


/**
 * Create a prop type checker for Slate objects with `name` and `validate`.
 *
 * @param {String} name
 * @param {Function} validate
 * @return {Function}
 */

function create(name, validate) {
  function check(isRequired, props, propName, componentName, location) {
    var value = props[propName];

    if (value == null && !isRequired) {
      return null;
    }

    if (value == null && isRequired) {
      return new Error('The ' + location + ' `' + propName + '` is marked as required in `' + componentName + '`, but it was not supplied.');
    }

    if (validate(value)) {
      return null;
    }

    return new Error('Invalid ' + location + ' `' + propName + '` supplied to `' + componentName + '`, expected a Slate `' + name + '` but received: ' + value);
  }

  function propType() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return check.apply(undefined, [false].concat(args));
  }

  propType.isRequired = function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return check.apply(undefined, [true].concat(args));
  };

  return propType;
}

/**
 * Prop type checkers.
 *
 * @type {Object}
 */

var Types = {
  block: create('Block', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Block"].isBlock(v);
  }),
  blocks: create('List<Block>', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Block"].isBlockList(v);
  }),
  change: create('Change', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Change"].isChange(v);
  }),
  data: create('Data', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Data"].isData(v);
  }),
  document: create('Document', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Document"].isDocument(v);
  }),
  inline: create('Inline', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Inline"].isInline(v);
  }),
  inlines: create('Inline', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Inline"].isInlineList(v);
  }),
  leaf: create('Leaf', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Leaf"].isLeaf(v);
  }),
  leaves: create('List<Leaf>', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Leaf"].isLeafList(v);
  }),
  mark: create('Mark', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Mark"].isMark(v);
  }),
  marks: create('Set<Mark>', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Mark"].isMarkSet(v);
  }),
  node: create('Node', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Node"].isNode(v);
  }),
  nodes: create('List<Node>', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Node"].isNodeList(v);
  }),
  range: create('Range', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Range"].isRange(v);
  }),
  ranges: create('List<Range>', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Range"].isRangeList(v);
  }),
  selection: create('Selection', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Selection"].isSelection(v);
  }),
  value: create('Value', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Value"].isValue(v);
  }),
  text: create('Text', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Text"].isText(v);
  }),
  texts: create('List<Text>', function (v) {
    return slate__WEBPACK_IMPORTED_MODULE_0__["Text"].isTextList(v);
  })

  /**
   * Export.
   *
   * @type {Object}
   */

};

/* harmony default export */ __webpack_exports__["default"] = (Types);
//# sourceMappingURL=slate-prop-types.es.js.map


/***/ }),

/***/ "./node_modules/slate-react-placeholder/lib/slate-react-placeholder.es.js":
/*!********************************************************************************!*\
  !*** ./node_modules/slate-react-placeholder/lib/slate-react-placeholder.es.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
var index = (function (condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/*
 * Instance counter to enable unique marks for multiple Placeholder instances.
 */

var instanceCounter = 0;

/**
 * A plugin that renders a React placeholder for a given Slate node.
 *
 * @param {Object} options
 * @return {Object}
 */

function SlateReactPlaceholder() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var instanceId = instanceCounter++;
  var placeholderMark = {
    type: 'placeholder',
    data: { key: instanceId }
  };

  var placeholder = options.placeholder,
      when = options.when,
      _options$style = options.style,
      style = _options$style === undefined ? {} : _options$style;


  index(placeholder, 'You must pass `SlateReactPlaceholder` an `options.placeholder` string.');

  index(when, 'You must pass `SlateReactPlaceholder` an `options.when` query.');

  /**
   * Decorate a match node with a placeholder mark when it fits the query.
   *
   * @param {Node} node
   * @param {Editor} editor
   * @param {Function} next
   * @return {Array}
   */

  function decorateNode(node, editor, next) {
    if (!editor.query(when, node)) {
      return next();
    }

    var others = next();
    var document = editor.value.document;
    var first = node.getFirstText();
    var last = node.getLastText();
    var decoration = {
      anchor: { key: first.key, offset: 0, path: document.getPath(first.key) },
      focus: {
        key: last.key,
        offset: last.text.length,
        path: document.getPath(last.key)
      },
      mark: placeholderMark
    };

    return [].concat(toConsumableArray(others), [decoration]);
  }

  /**
   * Render an inline placeholder for the placeholder mark.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @param {Function} next
   * @return {Element}
   */

  function renderMark(props, editor, next) {
    var children = props.children,
        mark = props.mark;


    if (mark.type === 'placeholder' && mark.data.get('key') === instanceId) {
      var placeHolderStyle = _extends({
        pointerEvents: 'none',
        display: 'inline-block',
        width: '0',
        maxWidth: '100%',
        whiteSpace: 'nowrap',
        opacity: '0.333'
      }, style);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'span',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          { contentEditable: false, style: placeHolderStyle },
          placeholder
        ),
        children
      );
    }

    return next();
  }

  /**
   * Return the plugin.
   *
   * @return {Object}
   */

  return { decorateNode: decorateNode, renderMark: renderMark };
}

/* harmony default export */ __webpack_exports__["default"] = (SlateReactPlaceholder);
//# sourceMappingURL=slate-react-placeholder.es.js.map


/***/ }),

/***/ "./node_modules/slate-react/lib/slate-react.es.js":
/*!********************************************************!*\
  !*** ./node_modules/slate-react/lib/slate-react.es.js ***!
  \********************************************************/
/*! exports provided: default, Editor, cloneFragment, findDOMNode, findDOMRange, findNode, findRange, getEventRange, getEventTransfer, setEventTransfer, ReactPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneFragment", function() { return cloneFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMRange", function() { return findDOMRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findNode", function() { return findNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRange", function() { return findRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventRange", function() { return getEventRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTransfer", function() { return getEventTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEventTransfer", function() { return setEventTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactPlugin", function() { return ReactPlugin; });
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/lib/slate.es.js");
/* harmony import */ var get_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! get-window */ "./node_modules/get-window/index.js");
/* harmony import */ var get_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(get_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var slate_base64_serializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slate-base64-serializer */ "./node_modules/slate-base64-serializer/lib/slate-base64-serializer.es.js");
/* harmony import */ var slate_plain_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slate-plain-serializer */ "./node_modules/slate-plain-serializer/lib/slate-plain-serializer.es.js");
/* harmony import */ var slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slate-dev-environment */ "./node_modules/slate-dev-environment/lib/slate-dev-environment.es.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slate-hotkeys */ "./node_modules/slate-hotkeys/lib/slate-hotkeys.es.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var slate_prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! slate-prop-types */ "./node_modules/slate-prop-types/lib/slate-prop-types.es.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-immutable-proptypes */ "./node_modules/react-immutable-proptypes/dist/ImmutablePropTypes.js");
/* harmony import */ var react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tiny-warning */ "./node_modules/slate-react/node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var selection_is_backward__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! selection-is-backward */ "./node_modules/selection-is-backward/index.js");
/* harmony import */ var selection_is_backward__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(selection_is_backward__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var slate_react_placeholder__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! slate-react-placeholder */ "./node_modules/slate-react-placeholder/lib/slate-react-placeholder.es.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! memoize-one */ "./node_modules/slate-react/node_modules/memoize-one/dist/memoize-one.esm.js");




















/**
 * Event handlers used by Slate plugins.
 *
 * @type {Array}
 */

var EVENT_HANDLERS = ['onBeforeInput', 'onBlur', 'onClick', 'onContextMenu', 'onCompositionEnd', 'onCompositionStart', 'onCopy', 'onCut', 'onDragEnd', 'onDragEnter', 'onDragExit', 'onDragLeave', 'onDragOver', 'onDragStart', 'onDrop', 'onInput', 'onFocus', 'onKeyDown', 'onKeyUp', 'onMouseDown', 'onMouseUp', 'onPaste', 'onSelect'];

/**
 * The transfer types that Slate recognizes.
 *
 * @type {Object}
 */

var TRANSFER_TYPES = {
  FRAGMENT: 'application/x-slate-fragment',
  HTML: 'text/html',
  NODE: 'application/x-slate-node',
  RICH: 'text/rtf',
  TEXT: 'text/plain'

  /**
   * Export.
   *
   * @type {Object}
   */

};

/**
 * Find the DOM node for a `key`.
 *
 * @param {String|Node} key
 * @param {Window} win (optional)
 * @return {Element}
 */

function findDOMNode(key) {
  var win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  if (slate__WEBPACK_IMPORTED_MODULE_0__["Node"].isNode(key)) {
    key = key.key;
  }

  var el = win.document.querySelector('[data-key="' + key + '"]');

  if (!el) {
    throw new Error('Unable to find a DOM node for "' + key + '". This is often because of forgetting to add `props.attributes` to a custom component.');
  }

  return el;
}

/**
 * COMPAT: if we are in <= IE11 and the selection contains
 * tables, `removeAllRanges()` will throw
 * "unable to complete the operation due to error 800a025e"
 *
 * @param {Selection} selection document selection
 */

function removeAllRanges(selection) {
  var doc = window.document;

  if (doc && doc.body.createTextRange) {
    // All IE but Edge
    var range = doc.body.createTextRange();
    range.collapse();
    range.select();
  } else {
    selection.removeAllRanges();
  }
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
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





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Offset key parser regex.
 *
 * @type {RegExp}
 */

var PARSER = /^([\w-]+)(?::(\d+))?$/;

/**
 * Parse an offset key `string`.
 *
 * @param {String} string
 * @return {Object}
 */

function parse(string) {
  var matches = PARSER.exec(string);

  if (!matches) {
    throw new Error("Invalid offset key string \"" + string + "\".");
  }

  var _matches = slicedToArray(matches, 3),
      original = _matches[0],
      key = _matches[1],
      index = _matches[2]; // eslint-disable-line no-unused-vars


  return {
    key: key,
    index: parseInt(index, 10)
  };
}

/**
 * Stringify an offset key `object`.
 *
 * @param {Object} object
 *   @property {String} key
 *   @property {Number} index
 * @return {String}
 */

function stringify(object) {
  return object.key + ":" + object.index;
}

/**
 * Export.
 *
 * @type {Object}
 */

var OffsetKey = {
  parse: parse,
  stringify: stringify
};

/**
 * Constants.
 *
 * @type {String}
 */

var ZERO_WIDTH_ATTRIBUTE = 'data-slate-zero-width';
var ZERO_WIDTH_SELECTOR = '[' + ZERO_WIDTH_ATTRIBUTE + ']';
var OFFSET_KEY_ATTRIBUTE = 'data-offset-key';
var RANGE_SELECTOR = '[' + OFFSET_KEY_ATTRIBUTE + ']';
var TEXT_SELECTOR = '[data-key]';
var VOID_SELECTOR = '[data-slate-void]';

/**
 * Find a Slate point from a DOM selection's `nativeNode` and `nativeOffset`.
 *
 * @param {Element} nativeNode
 * @param {Number} nativeOffset
 * @param {Editor} editor
 * @return {Point}
 */

function findPoint(nativeNode, nativeOffset, editor) {
  Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(!slate__WEBPACK_IMPORTED_MODULE_0__["Value"].isValue(editor), 'As of Slate 0.42.0, the `findPoint` utility takes an `editor` instead of a `value`.');

  var _normalizeNodeAndOffs = normalizeNodeAndOffset(nativeNode, nativeOffset),
      nearestNode = _normalizeNodeAndOffs.node,
      nearestOffset = _normalizeNodeAndOffs.offset;

  var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(nativeNode);
  var parentNode = nearestNode.parentNode;

  var rangeNode = parentNode.closest(RANGE_SELECTOR);
  var offset = void 0;
  var node = void 0;

  // Calculate how far into the text node the `nearestNode` is, so that we can
  // determine what the offset relative to the text node is.
  if (rangeNode) {
    var range = window.document.createRange();
    var textNode = rangeNode.closest(TEXT_SELECTOR);
    range.setStart(textNode, 0);
    range.setEnd(nearestNode, nearestOffset);
    node = textNode;
    offset = range.toString().length;
  } else {
    // For void nodes, the element with the offset key will be a cousin, not an
    // ancestor, so find it by going down from the nearest void parent.
    var voidNode = parentNode.closest(VOID_SELECTOR);
    if (!voidNode) return null;
    rangeNode = voidNode.querySelector(RANGE_SELECTOR);
    if (!rangeNode) return null;
    node = rangeNode;
    offset = node.textContent.length;
  }

  // COMPAT: If the parent node is a Slate zero-width space, this is because the
  // text node should have no characters. However, during IME composition the
  // ASCII characters will be prepended to the zero-width space, so subtract 1
  // from the offset to account for the zero-width space character.
  if (offset == node.textContent.length && parentNode.hasAttribute(ZERO_WIDTH_ATTRIBUTE)) {
    offset--;
  }

  // Get the string value of the offset key attribute.
  var offsetKey = rangeNode.getAttribute(OFFSET_KEY_ATTRIBUTE);
  if (!offsetKey) return null;

  var _OffsetKey$parse = OffsetKey.parse(offsetKey),
      key = _OffsetKey$parse.key;

  // COMPAT: If someone is clicking from one Slate editor into another, the
  // select event fires twice, once for the old editor's `element` first, and
  // then afterwards for the correct `element`. (2017/03/03)


  var value = editor.value;

  if (!value.document.hasDescendant(key)) return null;

  var point = value.document.createPoint({ key: key, offset: offset });
  return point;
}

/**
 * From a DOM selection's `node` and `offset`, normalize so that it always
 * refers to a text node.
 *
 * @param {Element} node
 * @param {Number} offset
 * @return {Object}
 */

function normalizeNodeAndOffset(node, offset) {
  // If it's an element node, its offset refers to the index of its children
  // including comment nodes, so try to find the right text child node.
  if (node.nodeType == 1 && node.childNodes.length) {
    var isLast = offset == node.childNodes.length;
    var direction = isLast ? 'backward' : 'forward';
    var index = isLast ? offset - 1 : offset;
    node = getEditableChild(node, index, direction);

    // If the node has children, traverse until we have a leaf node. Leaf nodes
    // can be either text nodes, or other void DOM nodes.
    while (node.nodeType == 1 && node.childNodes.length) {
      var i = isLast ? node.childNodes.length - 1 : 0;
      node = getEditableChild(node, i, direction);
    }

    // Determine the new offset inside the text node.
    offset = isLast ? node.textContent.length : 0;
  }

  // Return the node and offset.
  return { node: node, offset: offset };
}

/**
 * Get the nearest editable child at `index` in a `parent`, preferring
 * `direction`.
 *
 * @param {Element} parent
 * @param {Number} index
 * @param {String} direction ('forward' or 'backward')
 * @return {Element|Null}
 */

function getEditableChild(parent, index, direction) {
  var childNodes = parent.childNodes;

  var child = childNodes[index];
  var i = index;
  var triedForward = false;
  var triedBackward = false;

  // While the child is a comment node, or an element node with no children,
  // keep iterating to find a sibling non-void, non-comment node.
  while (child.nodeType == 8 || child.nodeType == 1 && child.childNodes.length == 0 || child.nodeType == 1 && child.getAttribute('contenteditable') == 'false') {
    if (triedForward && triedBackward) break;

    if (i >= childNodes.length) {
      triedForward = true;
      i = index - 1;
      direction = 'backward';
      continue;
    }

    if (i < 0) {
      triedBackward = true;
      i = index + 1;
      direction = 'forward';
      continue;
    }

    child = childNodes[i];
    if (direction == 'forward') i++;
    if (direction == 'backward') i--;
  }

  return child || null;
}

var FRAGMENT = TRANSFER_TYPES.FRAGMENT;
var HTML = TRANSFER_TYPES.HTML;
var TEXT = TRANSFER_TYPES.TEXT;

/**
 * Prepares a Slate document fragment to be copied to the clipboard.
 *
 * @param {Event} event
 * @param {Editor} editor
 */

function cloneFragment(event, editor) {
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return undefined;
  };

  Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(!slate__WEBPACK_IMPORTED_MODULE_0__["Value"].isValue(editor), 'As of Slate 0.42.0, the `cloneFragment` utility takes an `editor` instead of a `value`.');

  var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
  var native = window.getSelection();
  var value = editor.value;
  var document = value.document,
      fragment = value.fragment,
      selection = value.selection;
  var start = selection.start,
      end = selection.end;

  var startVoid = document.getClosestVoid(start.key, editor);
  var endVoid = document.getClosestVoid(end.key, editor);

  // If the selection is collapsed, and it isn't inside a void node, abort.
  if (native.isCollapsed && !startVoid) return;

  // Create a fake selection so that we can add a Base64-encoded copy of the
  // fragment to the HTML, to decode on future pastes.
  var encoded = slate_base64_serializer__WEBPACK_IMPORTED_MODULE_3__["default"].serializeNode(fragment);
  var range = native.getRangeAt(0);
  var contents = range.cloneContents();
  var attach = contents.childNodes[0];

  // Make sure attach is a non-empty node, since empty nodes will not get copied
  contents.childNodes.forEach(function (node) {
    if (node.textContent && node.textContent.trim() !== '') {
      attach = node;
    }
  });

  // COMPAT: If the end node is a void node, we need to move the end of the
  // range from the void node's spacer span, to the end of the void node's
  // content, since the spacer is before void's content in the DOM.
  if (endVoid) {
    var r = range.cloneRange();
    var node = findDOMNode(endVoid, window);
    r.setEndAfter(node);
    contents = r.cloneContents();
  }

  // COMPAT: If the start node is a void node, we need to attach the encoded
  // fragment to the void node's content node instead of the spacer, because
  // attaching it to empty `<div>/<span>` nodes will end up having it erased by
  // most browsers. (2018/04/27)
  if (startVoid) {
    attach = contents.childNodes[0].childNodes[1].firstChild;
  }

  // Remove any zero-width space spans from the cloned DOM so that they don't
  // show up elsewhere when pasted.
  [].slice.call(contents.querySelectorAll(ZERO_WIDTH_SELECTOR)).forEach(function (zw) {
    var isNewline = zw.getAttribute(ZERO_WIDTH_ATTRIBUTE) === 'n';
    zw.textContent = isNewline ? '\n' : '';
  });

  // Set a `data-slate-fragment` attribute on a non-empty node, so it shows up
  // in the HTML, and can be used for intra-Slate pasting. If it's a text
  // node, wrap it in a `<span>` so we have something to set an attribute on.
  if (attach.nodeType == 3) {
    var span = window.document.createElement('span');

    // COMPAT: In Chrome and Safari, if we don't add the `white-space` style
    // then leading and trailing spaces will be ignored. (2017/09/21)
    span.style.whiteSpace = 'pre';

    span.appendChild(attach);
    contents.appendChild(span);
    attach = span;
  }

  attach.setAttribute('data-slate-fragment', encoded);

  //  Creates value from only the selected blocks
  //  Then gets plaintext for clipboard with proper linebreaks for BLOCK elements
  //  Via Plain serializer
  var valFromSelection = slate__WEBPACK_IMPORTED_MODULE_0__["Value"].create({ document: fragment });
  var plainText = slate_plain_serializer__WEBPACK_IMPORTED_MODULE_4__["default"].serialize(valFromSelection);

  // Add the phony content to a div element. This is needed to copy the
  // contents into the html clipboard register.
  var div = window.document.createElement('div');
  div.appendChild(contents);

  // For browsers supporting it, we set the clipboard registers manually,
  // since the result is more predictable.
  // COMPAT: IE supports the setData method, but only in restricted sense.
  // IE doesn't support arbitrary MIME types or common ones like 'text/plain';
  // it only accepts "Text" (which gets mapped to 'text/plain') and "Url"
  // (mapped to 'text/url-list'); so, we should only enter block if !IS_IE
  if (event.clipboardData && event.clipboardData.setData && !slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IE"]) {
    event.preventDefault();
    event.clipboardData.setData(TEXT, plainText);
    event.clipboardData.setData(FRAGMENT, encoded);
    event.clipboardData.setData(HTML, div.innerHTML);
    callback();
    return;
  }

  // COMPAT: For browser that don't support the Clipboard API's setData method,
  // we must rely on the browser to natively copy what's selected.
  // So we add the div (containing our content) to the DOM, and select it.
  var editorEl = event.target.closest('[data-slate-editor]');
  div.setAttribute('contenteditable', true);
  div.style.position = 'absolute';
  div.style.left = '-9999px';
  editorEl.appendChild(div);
  native.selectAllChildren(div);

  // Revert to the previous selection right after copying.
  window.requestAnimationFrame(function () {
    editorEl.removeChild(div);
    removeAllRanges(native);
    native.addRange(range);
    callback();
  });
}

/**
 * Find a Slate node from a DOM `element`.
 *
 * @param {Element} element
 * @param {Editor} editor
 * @return {Node|Null}
 */

function findNode(element, editor) {
  Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(!slate__WEBPACK_IMPORTED_MODULE_0__["Value"].isValue(editor), 'As of Slate 0.42.0, the `findNode` utility takes an `editor` instead of a `value`.');

  var closest = element.closest('[data-key]');
  if (!closest) return null;

  var key = closest.getAttribute('data-key');
  if (!key) return null;

  var value = editor.value;
  var document = value.document;

  var node = document.getNode(key);
  return node || null;
}

/**
 * Find a native DOM selection point from a Slate `point`.
 *
 * @param {Point} point
 * @param {Window} win (optional)
 * @return {Object|Null}
 */

function findDOMPoint(point) {
  var win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;

  var el = findDOMNode(point.key, win);
  var start = 0;

  // For each leaf, we need to isolate its content, which means filtering to its
  // direct text and zero-width spans. (We have to filter out any other siblings
  // that may have been rendered alongside them.)
  var texts = Array.from(el.querySelectorAll('[data-slate-content], [data-slate-zero-width]'));

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = texts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var text = _step.value;

      var node = text.childNodes[0];
      var domLength = node.textContent.length;
      var slateLength = domLength;

      if (text.hasAttribute('data-slate-length')) {
        slateLength = parseInt(text.getAttribute('data-slate-length'), 10);
      }

      var end = start + slateLength;

      if (point.offset <= end) {
        var offset = Math.min(domLength, Math.max(0, point.offset - start));
        return { node: node, offset: offset };
      }

      start = end;
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

  return null;
}

/**
 * Find a Slate range from a DOM `native` selection.
 *
 * @param {Selection} native
 * @param {Editor} editor
 * @return {Range}
 */

function findRange(native, editor) {
  Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(!slate__WEBPACK_IMPORTED_MODULE_0__["Value"].isValue(editor), 'As of Slate 0.42.0, the `findNode` utility takes an `editor` instead of a `value`.');

  var el = native.anchorNode || native.startContainer;
  if (!el) return null;

  var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(el);

  // If the `native` object is a DOM `Range` or `StaticRange` object, change it
  // into something that looks like a DOM `Selection` instead.
  if (native instanceof window.Range || window.StaticRange && native instanceof window.StaticRange) {
    native = {
      anchorNode: native.startContainer,
      anchorOffset: native.startOffset,
      focusNode: native.endContainer,
      focusOffset: native.endOffset
    };
  }

  var _native = native,
      anchorNode = _native.anchorNode,
      anchorOffset = _native.anchorOffset,
      focusNode = _native.focusNode,
      focusOffset = _native.focusOffset,
      isCollapsed = _native.isCollapsed;
  var value = editor.value;

  var anchor = findPoint(anchorNode, anchorOffset, editor);
  var focus = isCollapsed ? anchor : findPoint(focusNode, focusOffset, editor);
  if (!anchor || !focus) return null;

  // COMPAT: ??? The Edge browser seems to have a case where if you select the
  // last word of a span, it sets the endContainer to the containing span.
  // `selection-is-backward` doesn't handle this case.
  if (slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IE"] || slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_EDGE"]) {
    var domAnchor = findDOMPoint(anchor);
    var domFocus = findDOMPoint(focus);

    native = {
      anchorNode: domAnchor.node,
      anchorOffset: domAnchor.offset,
      focusNode: domFocus.node,
      focusOffset: domFocus.offset
    };
  }

  var document = value.document;

  var range = document.createRange({
    anchor: anchor,
    focus: focus
  });

  return range;
}

/**
 * Get the target range from a DOM `event`.
 *
 * @param {Event} event
 * @param {Editor} editor
 * @return {Range}
 */

function getEventRange(event, editor) {
  Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(!slate__WEBPACK_IMPORTED_MODULE_0__["Value"].isValue(editor), 'As of Slate 0.42.0, the `findNode` utility takes an `editor` instead of a `value`.');

  if (event.nativeEvent) {
    event = event.nativeEvent;
  }

  var _event = event,
      x = _event.x,
      y = _event.y,
      target = _event.target;

  if (x == null || y == null) return null;

  var value = editor.value;
  var document = value.document;

  var node = findNode(target, editor);
  if (!node) return null;

  // If the drop target is inside a void node, move it into either the next or
  // previous node, depending on which side the `x` and `y` coordinates are
  // closest to.
  if (editor.query('isVoid', node)) {
    var rect = target.getBoundingClientRect();
    var isPrevious = node.object == 'inline' ? x - rect.left < rect.left + rect.width - x : y - rect.top < rect.top + rect.height - y;

    var text = node.getFirstText();
    var _range = document.createRange();

    if (isPrevious) {
      var previousText = document.getPreviousText(text.key);

      if (previousText) {
        return _range.moveToEndOfNode(previousText);
      }
    }

    var nextText = document.getNextText(text.key);
    return nextText ? _range.moveToStartOfNode(nextText) : null;
  }

  // Else resolve a range from the caret position where the drop occured.
  var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(target);
  var native = void 0;

  // COMPAT: In Firefox, `caretRangeFromPoint` doesn't exist. (2016/07/25)
  if (window.document.caretRangeFromPoint) {
    native = window.document.caretRangeFromPoint(x, y);
  } else if (window.document.caretPositionFromPoint) {
    var position = window.document.caretPositionFromPoint(x, y);
    native = window.document.createRange();
    native.setStart(position.offsetNode, position.offset);
    native.setEnd(position.offsetNode, position.offset);
  } else if (window.document.body.createTextRange) {
    // COMPAT: In IE, `caretRangeFromPoint` and
    // `caretPositionFromPoint` don't exist. (2018/07/11)
    native = window.document.body.createTextRange();

    try {
      native.moveToPoint(x, y);
    } catch (error) {
      // IE11 will raise an `unspecified error` if `moveToPoint` is
      // called during a dropEvent.
      return null;
    }
  }

  // Resolve a Slate range from the DOM range.
  var range = findRange(native, editor);
  if (!range) return null;

  return range;
}

/**
 * Transfer types.
 *
 * @type {String}
 */

var FRAGMENT$1 = TRANSFER_TYPES.FRAGMENT;
var HTML$1 = TRANSFER_TYPES.HTML;
var NODE = TRANSFER_TYPES.NODE;
var RICH = TRANSFER_TYPES.RICH;
var TEXT$1 = TRANSFER_TYPES.TEXT;

/**
 * Fragment matching regexp for HTML nodes.
 *
 * @type {RegExp}
 */

var FRAGMENT_MATCHER = / data-slate-fragment="([^\s"]+)"/;

/**
 * Get the transfer data from an `event`.
 *
 * @param {Event} event
 * @return {Object}
 */

function getEventTransfer(event) {
  // COMPAT: IE 11 doesn't populate nativeEvent with either
  // dataTransfer or clipboardData. We'll need to use the base event
  // object (2018/14/6)
  if (!slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IE"] && event.nativeEvent) {
    event = event.nativeEvent;
  }

  var transfer = event.dataTransfer || event.clipboardData;
  var fragment = getType(transfer, FRAGMENT$1);
  var node = getType(transfer, NODE);
  var html = getType(transfer, HTML$1);
  var rich = getType(transfer, RICH);
  var text = getType(transfer, TEXT$1);
  var files = void 0;

  // If there isn't a fragment, but there is HTML, check to see if the HTML is
  // actually an encoded fragment.
  if (!fragment && html && ~html.indexOf(' data-slate-fragment="')) {
    var matches = FRAGMENT_MATCHER.exec(html);

    var _matches = slicedToArray(matches, 2),
        full = _matches[0],
        encoded = _matches[1]; // eslint-disable-line no-unused-vars


    if (encoded) fragment = encoded;
  }

  // COMPAT: Edge doesn't handle custom data types
  // These will be embedded in text/plain in this case (2017/7/12)
  if (text) {
    var embeddedTypes = getEmbeddedTypes(text);

    if (embeddedTypes[FRAGMENT$1]) fragment = embeddedTypes[FRAGMENT$1];
    if (embeddedTypes[NODE]) node = embeddedTypes[NODE];
    if (embeddedTypes[TEXT$1]) text = embeddedTypes[TEXT$1];
  }

  // Decode a fragment or node if they exist.
  if (fragment) fragment = slate_base64_serializer__WEBPACK_IMPORTED_MODULE_3__["default"].deserializeNode(fragment);
  if (node) node = slate_base64_serializer__WEBPACK_IMPORTED_MODULE_3__["default"].deserializeNode(node);

  // COMPAT: Edge sometimes throws 'NotSupportedError'
  // when accessing `transfer.items` (2017/7/12)
  try {
    // Get and normalize files if they exist.
    if (transfer.items && transfer.items.length) {
      files = Array.from(transfer.items).map(function (item) {
        return item.kind == 'file' ? item.getAsFile() : null;
      }).filter(function (exists) {
        return exists;
      });
    } else if (transfer.files && transfer.files.length) {
      files = Array.from(transfer.files);
    }
  } catch (err) {
    if (transfer.files && transfer.files.length) {
      files = Array.from(transfer.files);
    }
  }

  // Determine the type of the data.
  var data = { files: files, fragment: fragment, html: html, node: node, rich: rich, text: text };
  data.type = getTransferType(data);
  return data;
}

/**
 * Takes text input, checks whether contains embedded data
 * and returns object with original text +/- additional data
 *
 * @param {String} text
 * @return {Object}
 */

function getEmbeddedTypes(text) {
  var prefix = 'SLATE-DATA-EMBED::';

  if (text.substring(0, prefix.length) != prefix) {
    return { TEXT: text };
  }

  // Attempt to parse, if fails then just standard text/plain
  // Otherwise, already had data embedded
  try {
    return JSON.parse(text.substring(prefix.length));
  } catch (err) {
    throw new Error('Unable to parse custom Slate drag event data.');
  }
}

/**
 * Get the type of a transfer from its `data`.
 *
 * @param {Object} data
 * @return {String}
 */

function getTransferType(data) {
  if (data.fragment) return 'fragment';
  if (data.node) return 'node';

  // COMPAT: Microsoft Word adds an image of the selected text to the data.
  // Since files are preferred over HTML or text, this would cause the type to
  // be considered `files`. But it also adds rich text data so we can check
  // for that and properly set the type to `html` or `text`. (2016/11/21)
  if (data.rich && data.html) return 'html';
  if (data.rich && data.text) return 'text';

  if (data.files && data.files.length) return 'files';
  if (data.html) return 'html';
  if (data.text) return 'text';
  return 'unknown';
}

/**
 * Get one of types `TYPES.FRAGMENT`, `TYPES.NODE`, `text/html`, `text/rtf` or
 * `text/plain` from transfers's `data` if possible, otherwise return null.
 *
 * @param {Object} transfer
 * @param {String} type
 * @return {String}
 */

function getType(transfer, type) {
  if (!transfer.types || !transfer.types.length) {
    // COMPAT: In IE 11, there is no `types` field but `getData('Text')`
    // is supported`. (2017/06/23)
    return type == TEXT$1 ? transfer.getData('Text') || null : null;
  }

  // COMPAT: In Edge, transfer.types doesn't respond to `indexOf`. (2017/10/25)
  var types = Array.from(transfer.types);

  return types.indexOf(type) !== -1 ? transfer.getData(type) || null : null;
}

/**
 * The default plain text transfer type.
 *
 * @type {String}
 */

var TEXT$2 = TRANSFER_TYPES.TEXT;

/**
 * Set data with `type` and `content` on an `event`.
 *
 * COMPAT: In Edge, custom types throw errors, so embed all non-standard
 * types in text/plain compound object. (2017/7/12)
 *
 * @param {Event} event
 * @param {String} type
 * @param {String} content
 */

function setEventTransfer(event, type, content) {
  var mime = TRANSFER_TYPES[type.toUpperCase()];

  if (!mime) {
    throw new Error('Cannot set unknown transfer type "' + mime + '".');
  }

  if (event.nativeEvent) {
    event = event.nativeEvent;
  }

  var transfer = event.dataTransfer || event.clipboardData;

  try {
    transfer.setData(mime, content);
    // COMPAT: Safari needs to have the 'text' (and not 'text/plain') value in dataTransfer
    // to display the cursor while dragging internally.
    transfer.setData('text', transfer.getData('text'));
  } catch (err) {
    var prefix = 'SLATE-DATA-EMBED::';
    var text = transfer.getData(TEXT$2);
    var obj = {};

    // If the existing plain text data is prefixed, it's Slate JSON data.
    if (text.substring(0, prefix.length) === prefix) {
      try {
        obj = JSON.parse(text.substring(prefix.length));
      } catch (e) {
        throw new Error('Failed to parse Slate data from `DataTransfer` object.');
      }
    } else {
      // Otherwise, it's just set it as is.
      obj[TEXT$2] = text;
    }

    obj[mime] = content;
    var string = '' + prefix + JSON.stringify(obj);
    transfer.setData(TEXT$2, string);
  }
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug = debug__WEBPACK_IMPORTED_MODULE_6___default()('slate:after');

/**
 * A plugin that adds the "after" browser-specific logic to the editor.
 *
 * @param {Object} options
 * @return {Object}
 */

function AfterPlugin() {
  var isDraggingInternally = null;
  var isMouseDown = false;

  /**
   * On before input.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onBeforeInput(event, editor, next) {
    var value = editor.value;

    var isSynthetic = !!event.nativeEvent;

    // If the event is synthetic, it's React's polyfill of `beforeinput` that
    // isn't a true `beforeinput` event with meaningful information. It only
    // gets triggered for character insertions, so we can just insert directly.
    if (isSynthetic) {
      event.preventDefault();
      editor.insertText(event.data);
      return next();
    }

    // Otherwise, we can use the information in the `beforeinput` event to
    // figure out the exact change that will occur, and prevent it.

    var _event$getTargetRange = event.getTargetRanges(),
        _event$getTargetRange2 = slicedToArray(_event$getTargetRange, 1),
        targetRange = _event$getTargetRange2[0];

    if (!targetRange) return next();

    debug('onBeforeInput', { event: event });

    event.preventDefault();

    var document = value.document,
        selection = value.selection;

    var range = findRange(targetRange, editor);

    switch (event.inputType) {
      case 'deleteByDrag':
      case 'deleteByCut':
      case 'deleteContent':
      case 'deleteContentBackward':
      case 'deleteContentForward':
        {
          editor.deleteAtRange(range);
          break;
        }

      case 'deleteWordBackward':
        {
          editor.deleteWordBackwardAtRange(range);
          break;
        }

      case 'deleteWordForward':
        {
          editor.deleteWordForwardAtRange(range);
          break;
        }

      case 'deleteSoftLineBackward':
      case 'deleteHardLineBackward':
        {
          editor.deleteLineBackwardAtRange(range);
          break;
        }

      case 'deleteSoftLineForward':
      case 'deleteHardLineForward':
        {
          editor.deleteLineForwardAtRange(range);
          break;
        }

      case 'insertLineBreak':
      case 'insertParagraph':
        {
          var hasVoidParent = document.hasVoidParent(selection.start.path, editor);

          if (hasVoidParent) {
            editor.moveToStartOfNextText();
          } else {
            editor.splitBlockAtRange(range);
          }

          break;
        }

      case 'insertFromYank':
      case 'insertReplacementText':
      case 'insertText':
        {
          // COMPAT: `data` should have the text for the `insertText` input type
          // and `dataTransfer` should have the text for the
          // `insertReplacementText` input type, but Safari uses `insertText` for
          // spell check replacements and sets `data` to `null`. (2018/08/09)
          var text = event.data == null ? event.dataTransfer.getData('text/plain') : event.data;

          if (text == null) break;

          editor.insertTextAtRange(range, text, selection.marks);

          // If the text was successfully inserted, and the selection had marks
          // on it, unset the selection's marks.
          if (selection.marks && value.document != editor.value.document) {
            editor.select({ marks: null });
          }

          break;
        }
    }

    next();
  }

  /**
   * On blur.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onBlur(event, editor, next) {
    debug('onBlur', { event: event });
    editor.blur();
    next();
  }

  /**
   * On click.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onClick(event, editor, next) {
    if (editor.readOnly) return next();

    var value = editor.value;
    var document = value.document;

    var node = findNode(event.target, editor);
    if (!node) return next();

    debug('onClick', { event: event });

    var ancestors = document.getAncestors(node.key);
    var isVoid = node && (editor.isVoid(node) || ancestors.some(function (a) {
      return editor.isVoid(a);
    }));

    if (isVoid) {
      // COMPAT: In Chrome & Safari, selections that are at the zero offset of
      // an inline node will be automatically replaced to be at the last offset
      // of a previous inline node, which screws us up, so we always want to set
      // it to the end of the node. (2016/11/29)
      editor.focus().moveToEndOfNode(node);
    }

    next();
  }

  /**
   * On copy.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onCopy(event, editor, next) {
    debug('onCopy', { event: event });
    cloneFragment(event, editor);
    next();
  }

  /**
   * On cut.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onCut(event, editor, next) {
    debug('onCut', { event: event });

    // Once the fake cut content has successfully been added to the clipboard,
    // delete the content in the current selection.
    cloneFragment(event, editor, function () {
      // If user cuts a void block node or a void inline node,
      // manually removes it since selection is collapsed in this case.
      var value = editor.value;
      var endBlock = value.endBlock,
          endInline = value.endInline,
          selection = value.selection;
      var isCollapsed = selection.isCollapsed;

      var isVoidBlock = endBlock && editor.isVoid(endBlock) && isCollapsed;
      var isVoidInline = endInline && editor.isVoid(endInline) && isCollapsed;

      if (isVoidBlock) {
        editor.removeNodeByKey(endBlock.key);
      } else if (isVoidInline) {
        editor.removeNodeByKey(endInline.key);
      } else {
        editor.delete();
      }
    });

    next();
  }

  /**
   * On drag end.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDragEnd(event, editor, next) {
    debug('onDragEnd', { event: event });
    isDraggingInternally = null;
    next();
  }

  /**
   * On drag start.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDragStart(event, editor, next) {
    debug('onDragStart', { event: event });

    isDraggingInternally = true;

    var value = editor.value;
    var document = value.document;

    var node = findNode(event.target, editor);
    var ancestors = document.getAncestors(node.key);
    var isVoid = node && (editor.isVoid(node) || ancestors.some(function (a) {
      return editor.isVoid(a);
    }));
    var selectionIncludesNode = value.blocks.some(function (block) {
      return block.key === node.key;
    });

    // If a void block is dragged and is not selected, select it (necessary for local drags).
    if (isVoid && !selectionIncludesNode) {
      editor.moveToRangeOfNode(node);
    }

    var fragment = editor.value.fragment;
    var encoded = slate_base64_serializer__WEBPACK_IMPORTED_MODULE_3__["default"].serializeNode(fragment);
    setEventTransfer(event, 'fragment', encoded);
    next();
  }

  /**
   * On drop.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDrop(event, editor, next) {
    var value = editor.value;
    var document = value.document,
        selection = value.selection;

    var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
    var target = getEventRange(event, editor);
    if (!target) return next();

    debug('onDrop', { event: event });

    var transfer = getEventTransfer(event);
    var type = transfer.type,
        fragment = transfer.fragment,
        text = transfer.text;


    editor.focus();

    // If the drag is internal and the target is after the selection, it
    // needs to account for the selection's content being deleted.
    if (isDraggingInternally && selection.end.key == target.end.key && selection.end.offset < target.end.offset) {
      target = target.moveForward(selection.start.key == selection.end.key ? 0 - selection.end.offset + selection.start.offset : 0 - selection.end.offset);
    }

    if (isDraggingInternally) {
      editor.delete();
    }

    editor.select(target);

    if (type == 'text' || type == 'html') {
      var _target = target,
          anchor = _target.anchor;

      var hasVoidParent = document.hasVoidParent(anchor.key, editor);

      if (hasVoidParent) {
        var n = document.getNode(anchor.key);

        while (hasVoidParent) {
          n = document.getNextText(n.key);
          if (!n) break;
          hasVoidParent = document.hasVoidParent(n.key, editor);
        }

        if (n) editor.moveToStartOfNode(n);
      }

      if (text) {
        text.split('\n').forEach(function (line, i) {
          if (i > 0) editor.splitBlock();
          editor.insertText(line);
        });
      }
    }

    if (type == 'fragment') {
      editor.insertFragment(fragment);
    }

    // COMPAT: React's onSelect event breaks after an onDrop event
    // has fired in a node: https://github.com/facebook/react/issues/11379.
    // Until this is fixed in React, we dispatch a mouseup event on that
    // DOM node, since that will make it go back to normal.
    var focusNode = document.getNode(target.focus.key);
    var el = findDOMNode(focusNode, window);

    if (el) {
      el.dispatchEvent(new MouseEvent('mouseup', {
        view: window,
        bubbles: true,
        cancelable: true
      }));
    }

    next();
  }

  /**
   * On focus.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onFocus(event, editor, next) {
    debug('onFocus', { event: event });

    // COMPAT: If the focus event is a mouse-based one, it will be shortly
    // followed by a `selectionchange`, so we need to deselect here to prevent
    // the old selection from being set by the `updateSelection` of `<Content>`,
    // preventing the `selectionchange` from firing. (2018/11/07)
    if (isMouseDown) {
      editor.deselect().focus();
    } else {
      editor.focus();
    }

    next();
  }

  /**
   * On input.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onInput(event, editor, next) {
    var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
    var value = editor.value;

    // Get the selection point.

    var native = window.getSelection();
    var anchorNode = native.anchorNode;

    var point = findPoint(anchorNode, 0, editor);
    if (!point) return next();

    // Get the text node and leaf in question.
    var document = value.document,
        selection = value.selection;

    var node = document.getDescendant(point.key);
    var block = document.getClosestBlock(node.key);
    var leaves = node.getLeaves();
    var lastText = block.getLastText();
    var lastLeaf = leaves.last();
    var start = 0;
    var end = 0;

    var leaf = leaves.find(function (r) {
      start = end;
      end += r.text.length;
      if (end > point.offset) return true;
    }) || lastLeaf;

    // Get the text information.
    var text = leaf.text;
    var textContent = anchorNode.textContent;

    var isLastText = node == lastText;
    var isLastLeaf = leaf == lastLeaf;
    var lastChar = textContent.charAt(textContent.length - 1);

    // COMPAT: If this is the last leaf, and the DOM text ends in a new line,
    // we will have added another new line in <Leaf>'s render method to account
    // for browsers collapsing a single trailing new lines, so remove it.
    if (isLastText && isLastLeaf && lastChar == '\n') {
      textContent = textContent.slice(0, -1);
    }

    // If the text is no different, abort.
    if (textContent == text) return next();

    debug('onInput', { event: event });

    // Determine what the selection should be after changing the text.
    var delta = textContent.length - text.length;
    var corrected = selection.moveToEnd().moveForward(delta);
    var entire = selection.moveAnchorTo(point.key, start).moveFocusTo(point.key, end);

    entire = document.resolveRange(entire);

    // Change the current value to have the leaf's text replaced.
    editor.insertTextAtRange(entire, textContent, leaf.marks).select(corrected);
    next();
  }

  /**
   * On key down.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onKeyDown(event, editor, next) {
    debug('onKeyDown', { event: event });

    var value = editor.value;
    var document = value.document,
        selection = value.selection;

    var hasVoidParent = document.hasVoidParent(selection.start.path, editor);

    // COMPAT: In iOS, some of these hotkeys are handled in the
    // `onNativeBeforeInput` handler of the `<Content>` component in order to
    // preserve native autocorrect behavior, so they shouldn't be handled here.
    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isSplitBlock(event) && !slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IOS"]) {
      return hasVoidParent ? editor.moveToStartOfNextText() : editor.splitBlock();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteBackward(event) && !slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IOS"]) {
      return editor.deleteCharBackward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteForward(event) && !slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IOS"]) {
      return editor.deleteCharForward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteLineBackward(event)) {
      return editor.deleteLineBackward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteLineForward(event)) {
      return editor.deleteLineForward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteWordBackward(event)) {
      return editor.deleteWordBackward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteWordForward(event)) {
      return editor.deleteWordForward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isRedo(event)) {
      return editor.redo();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isUndo(event)) {
      return editor.undo();
    }

    // COMPAT: Certain browsers don't handle the selection updates properly. In
    // Chrome, the selection isn't properly extended. And in Firefox, the
    // selection isn't properly collapsed. (2017/10/17)
    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isMoveLineBackward(event)) {
      event.preventDefault();
      return editor.moveToStartOfBlock();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isMoveLineForward(event)) {
      event.preventDefault();
      return editor.moveToEndOfBlock();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isExtendLineBackward(event)) {
      event.preventDefault();
      return editor.moveFocusToStartOfBlock();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isExtendLineForward(event)) {
      event.preventDefault();
      return editor.moveFocusToEndOfBlock();
    }

    // COMPAT: If a void node is selected, or a zero-width text node adjacent to
    // an inline is selected, we need to handle these hotkeys manually because
    // browsers won't know what to do.
    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isMoveBackward(event)) {
      event.preventDefault();

      if (!selection.isCollapsed) {
        return editor.moveToStart();
      }

      return editor.moveBackward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isMoveForward(event)) {
      event.preventDefault();

      if (!selection.isCollapsed) {
        return editor.moveToEnd();
      }

      return editor.moveForward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isMoveWordBackward(event)) {
      event.preventDefault();
      return editor.moveWordBackward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isMoveWordForward(event)) {
      event.preventDefault();
      return editor.moveWordForward();
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isExtendBackward(event)) {
      var previousText = value.previousText,
          startText = value.startText;

      var isPreviousInVoid = previousText && document.hasVoidParent(previousText.key, editor);

      if (hasVoidParent || isPreviousInVoid || startText.text == '') {
        event.preventDefault();
        return editor.moveFocusBackward();
      }
    }

    if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isExtendForward(event)) {
      var nextText = value.nextText,
          _startText = value.startText;

      var isNextInVoid = nextText && document.hasVoidParent(nextText.key, editor);

      if (hasVoidParent || isNextInVoid || _startText.text == '') {
        event.preventDefault();
        return editor.moveFocusForward();
      }
    }

    next();
  }

  /**
   * On mouse down.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onMouseDown(event, editor, next) {
    debug('onMouseDown', { event: event });
    isMouseDown = true;
    next();
  }

  /**
   * On mouse up.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onMouseUp(event, editor, next) {
    debug('onMouseUp', { event: event });
    isMouseDown = false;
    next();
  }

  /**
   * On paste.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onPaste(event, editor, next) {
    debug('onPaste', { event: event });

    var value = editor.value;

    var transfer = getEventTransfer(event);
    var type = transfer.type,
        fragment = transfer.fragment,
        text = transfer.text;


    if (type == 'fragment') {
      editor.insertFragment(fragment);
    }

    if (type == 'text' || type == 'html') {
      if (!text) return next();
      var document = value.document,
          selection = value.selection,
          startBlock = value.startBlock;

      if (editor.isVoid(startBlock)) return next();

      var defaultBlock = startBlock;
      var defaultMarks = document.getInsertMarksAtRange(selection);
      var frag = slate_plain_serializer__WEBPACK_IMPORTED_MODULE_4__["default"].deserialize(text, { defaultBlock: defaultBlock, defaultMarks: defaultMarks }).document;
      editor.insertFragment(frag);
    }

    next();
  }

  /**
   * On select.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onSelect(event, editor, next) {
    debug('onSelect', { event: event });

    var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
    var value = editor.value;
    var document = value.document;

    var native = window.getSelection();

    // If there are no ranges, the editor was blurred natively.
    if (!native.rangeCount) {
      editor.blur();
      return;
    }

    // Otherwise, determine the Slate selection from the native one.
    var range = findRange(native, editor);

    if (!range) {
      return;
    }

    var _range = range,
        anchor = _range.anchor,
        focus = _range.focus;

    var anchorText = document.getNode(anchor.key);
    var focusText = document.getNode(focus.key);
    var anchorInline = document.getClosestInline(anchor.key);
    var focusInline = document.getClosestInline(focus.key);
    var focusBlock = document.getClosestBlock(focus.key);
    var anchorBlock = document.getClosestBlock(anchor.key);

    // COMPAT: If the anchor point is at the start of a non-void, and the
    // focus point is inside a void node with an offset that isn't `0`, set
    // the focus offset to `0`. This is due to void nodes <span>'s being
    // positioned off screen, resulting in the offset always being greater
    // than `0`. Since we can't know what it really should be, and since an
    // offset of `0` is less destructive because it creates a hanging
    // selection, go with `0`. (2017/09/07)
    if (anchorBlock && !editor.isVoid(anchorBlock) && anchor.offset == 0 && focusBlock && editor.isVoid(focusBlock) && focus.offset != 0) {
      range = range.setFocus(focus.setOffset(0));
    }

    // COMPAT: If the selection is at the end of a non-void inline node, and
    // there is a node after it, put it in the node after instead. This
    // standardizes the behavior, since it's indistinguishable to the user.
    if (anchorInline && !editor.isVoid(anchorInline) && anchor.offset == anchorText.text.length) {
      var block = document.getClosestBlock(anchor.key);
      var nextText = block.getNextText(anchor.key);
      if (nextText) range = range.moveAnchorTo(nextText.key, 0);
    }

    if (focusInline && !editor.isVoid(focusInline) && focus.offset == focusText.text.length) {
      var _block = document.getClosestBlock(focus.key);
      var _nextText = _block.getNextText(focus.key);
      if (_nextText) range = range.moveFocusTo(_nextText.key, 0);
    }

    var selection = document.createSelection(range);
    selection = selection.setIsFocused(true);

    // Preserve active marks from the current selection.
    // They will be cleared by `editor.select` if the selection actually moved.
    selection = selection.set('marks', value.selection.marks);

    editor.select(selection);
    next();
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onBeforeInput: onBeforeInput,
    onBlur: onBlur,
    onClick: onClick,
    onCopy: onCopy,
    onCut: onCut,
    onDragEnd: onDragEnd,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onFocus: onFocus,
    onInput: onInput,
    onKeyDown: onKeyDown,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onPaste: onPaste,
    onSelect: onSelect
  };
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$1 = debug__WEBPACK_IMPORTED_MODULE_6___default()('slate:before');

/**
 * A plugin that adds the "before" browser-specific logic to the editor.
 *
 * @return {Object}
 */

function BeforePlugin() {
  var activeElement = null;
  var compositionCount = 0;
  var isComposing = false;
  var isCopying = false;
  var isDragging = false;

  /**
   * On before input.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onBeforeInput(event, editor, next) {
    var isSynthetic = !!event.nativeEvent;
    if (editor.readOnly) return;

    // COMPAT: If the browser supports Input Events Level 2, we will have
    // attached a custom handler for the real `beforeinput` events, instead of
    // allowing React's synthetic polyfill, so we need to ignore synthetics.
    if (isSynthetic && slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["HAS_INPUT_EVENTS_LEVEL_2"]) return;

    debug$1('onBeforeInput', { event: event });
    next();
  }

  /**
   * On blur.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onBlur(event, editor, next) {
    if (isCopying) return;
    if (editor.readOnly) return;

    var relatedTarget = event.relatedTarget,
        target = event.target;

    var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(target);

    // COMPAT: If the current `activeElement` is still the previous one, this is
    // due to the window being blurred when the tab itself becomes unfocused, so
    // we want to abort early to allow to editor to stay focused when the tab
    // becomes focused again.
    if (activeElement === window.document.activeElement) return;

    // COMPAT: The `relatedTarget` can be null when the new focus target is not
    // a "focusable" element (eg. a `<div>` without `tabindex` set).
    if (relatedTarget) {
      var el = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(editor);

      // COMPAT: The event should be ignored if the focus is returning to the
      // editor from an embedded editable element (eg. an <input> element inside
      // a void node).
      if (relatedTarget === el) return;

      // COMPAT: The event should be ignored if the focus is moving from the
      // editor to inside a void node's spacer element.
      if (relatedTarget.hasAttribute('data-slate-spacer')) return;

      // COMPAT: The event should be ignored if the focus is moving to a non-
      // editable section of an element that isn't a void node (eg. a list item
      // of the check list example).
      var node = findNode(relatedTarget, editor);
      if (el.contains(relatedTarget) && node && !editor.isVoid(node)) return;
    }

    debug$1('onBlur', { event: event });
    next();
  }

  /**
   * On composition end.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onCompositionEnd(event, editor, next) {
    var n = compositionCount;

    // The `count` check here ensures that if another composition starts
    // before the timeout has closed out this one, we will abort unsetting the
    // `isComposing` flag, since a composition is still in affect.
    window.requestAnimationFrame(function () {
      if (compositionCount > n) return;
      isComposing = false;
    });

    debug$1('onCompositionEnd', { event: event });
    next();
  }

  /**
   * On click.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onClick(event, editor, next) {
    debug$1('onClick', { event: event });
    next();
  }

  /**
   * On composition start.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onCompositionStart(event, editor, next) {
    isComposing = true;
    compositionCount++;

    var value = editor.value;
    var selection = value.selection;


    if (!selection.isCollapsed) {
      // https://github.com/ianstormtaylor/slate/issues/1879
      // When composition starts and the current selection is not collapsed, the
      // second composition key-down would drop the text wrapping <spans> which
      // resulted on crash in content.updateSelection after composition ends
      // (because it cannot find <span> nodes in DOM). This is a workaround that
      // erases selection as soon as composition starts and preventing <spans>
      // to be dropped.
      editor.delete();
    }

    debug$1('onCompositionStart', { event: event });
    next();
  }

  /**
   * On copy.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onCopy(event, editor, next) {
    var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
    isCopying = true;
    window.requestAnimationFrame(function () {
      return isCopying = false;
    });

    debug$1('onCopy', { event: event });
    next();
  }

  /**
   * On cut.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onCut(event, editor, next) {
    if (editor.readOnly) return;

    var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
    isCopying = true;
    window.requestAnimationFrame(function () {
      return isCopying = false;
    });

    debug$1('onCut', { event: event });
    next();
  }

  /**
   * On drag end.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDragEnd(event, editor, next) {
    isDragging = false;
    debug$1('onDragEnd', { event: event });
    next();
  }

  /**
   * On drag enter.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDragEnter(event, editor, next) {
    debug$1('onDragEnter', { event: event });
    next();
  }

  /**
   * On drag exit.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDragExit(event, editor, next) {
    debug$1('onDragExit', { event: event });
    next();
  }

  /**
   * On drag leave.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDragLeave(event, editor, next) {
    debug$1('onDragLeave', { event: event });
    next();
  }

  /**
   * On drag over.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDragOver(event, editor, next) {
    // If the target is inside a void node, and only in this case,
    // call `preventDefault` to signal that drops are allowed.
    // When the target is editable, dropping is already allowed by
    // default, and calling `preventDefault` hides the cursor.
    var node = findNode(event.target, editor);
    if (editor.isVoid(node)) event.preventDefault();

    // COMPAT: IE won't call onDrop on contentEditables unless the
    // default dragOver is prevented:
    // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/913982/
    // (2018/07/11)
    if (slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IE"]) {
      event.preventDefault();
    }

    // If a drag is already in progress, don't do this again.
    if (!isDragging) {
      isDragging = true;

      // COMPAT: IE will raise an `unspecified error` if dropEffect is
      // set. (2018/07/11)
      if (!slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IE"]) {
        event.nativeEvent.dataTransfer.dropEffect = 'move';
      }
    }

    debug$1('onDragOver', { event: event });
    next();
  }

  /**
   * On drag start.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDragStart(event, editor, next) {
    isDragging = true;
    debug$1('onDragStart', { event: event });
    next();
  }

  /**
   * On drop.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onDrop(event, editor, next) {
    if (editor.readOnly) return;

    // Prevent default so the DOM's value isn't corrupted.
    event.preventDefault();

    debug$1('onDrop', { event: event });
    next();
  }

  /**
   * On focus.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onFocus(event, editor, next) {
    if (isCopying) return;
    if (editor.readOnly) return;

    var el = react_dom__WEBPACK_IMPORTED_MODULE_8___default.a.findDOMNode(editor);

    // Save the new `activeElement`.
    var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
    activeElement = window.document.activeElement;

    // COMPAT: If the editor has nested editable elements, the focus can go to
    // those elements. In Firefox, this must be prevented because it results in
    // issues with keyboard navigation. (2017/03/30)
    if (slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_FIREFOX"] && event.target != el) {
      el.focus();
      return;
    }

    debug$1('onFocus', { event: event });
    next();
  }

  /**
   * On input.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onInput(event, editor, next) {
    if (isComposing) return;
    if (editor.value.selection.isBlurred) return;
    debug$1('onInput', { event: event });
    next();
  }

  /**
   * On key down.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onKeyDown(event, editor, next) {
    if (editor.readOnly) return;

    // When composing, we need to prevent all hotkeys from executing while
    // typing. However, certain characters also move the selection before
    // we're able to handle it, so prevent their default behavior.
    if (isComposing) {
      if (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isCompose(event)) event.preventDefault();
      return;
    }

    // Certain hotkeys have native editing behaviors in `contenteditable`
    // elements which will editor the DOM and cause our value to be out of sync,
    // so they need to always be prevented.
    if (!slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IOS"] && (slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isBold(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteBackward(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteForward(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteLineBackward(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteLineForward(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteWordBackward(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isDeleteWordForward(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isItalic(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isRedo(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isSplitBlock(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isTransposeCharacter(event) || slate_hotkeys__WEBPACK_IMPORTED_MODULE_7__["default"].isUndo(event))) {
      event.preventDefault();
    }

    debug$1('onKeyDown', { event: event });
    next();
  }

  /**
   * On paste.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onPaste(event, editor, next) {
    if (editor.readOnly) return;

    // Prevent defaults so the DOM state isn't corrupted.
    event.preventDefault();

    debug$1('onPaste', { event: event });
    next();
  }

  /**
   * On select.
   *
   * @param {Event} event
   * @param {Editor} editor
   * @param {Function} next
   */

  function onSelect(event, editor, next) {
    if (isCopying) return;
    if (isComposing) return;

    if (editor.readOnly) return;

    // Save the new `activeElement`.
    var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
    activeElement = window.document.activeElement;

    debug$1('onSelect', { event: event });
    next();
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onBeforeInput: onBeforeInput,
    onBlur: onBlur,
    onClick: onClick,
    onCompositionEnd: onCompositionEnd,
    onCompositionStart: onCompositionStart,
    onCopy: onCopy,
    onCut: onCut,
    onDragEnd: onDragEnd,
    onDragEnter: onDragEnter,
    onDragExit: onDragExit,
    onDragLeave: onDragLeave,
    onDragOver: onDragOver,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onFocus: onFocus,
    onInput: onInput,
    onKeyDown: onKeyDown,
    onPaste: onPaste,
    onSelect: onSelect
  };
}

/**
 * A plugin that adds the browser-specific logic to the editor.
 *
 * @param {Object} options
 * @return {Object}
 */

function DOMPlugin() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$plugins = options.plugins,
      plugins = _options$plugins === undefined ? [] : _options$plugins;

  var beforePlugin = BeforePlugin();
  var afterPlugin = AfterPlugin();
  return [beforePlugin].concat(toConsumableArray(plugins), [afterPlugin]);
}

/**
 * Debugger.
 *
 * @type {Function}
 */

var debug$2 = debug__WEBPACK_IMPORTED_MODULE_6___default()('slate:leaves');

/**
 * Leaf.
 *
 * @type {Component}
 */

var Leaf = function (_React$Component) {
  inherits(Leaf, _React$Component);

  function Leaf() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Leaf);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Leaf.__proto__ || Object.getPrototypeOf(Leaf)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Debug.
   *
   * @param {String} message
   * @param {Mixed} ...args
   */

  createClass(Leaf, [{
    key: 'shouldComponentUpdate',


    /**
     * Should component update?
     *
     * @param {Object} props
     * @return {Boolean}
     */

    value: function shouldComponentUpdate(props) {
      // If any of the regular properties have changed, re-render.
      if (props.index != this.props.index || props.marks != this.props.marks || props.text != this.props.text || props.parent != this.props.parent) {
        return true;
      }

      // Otherwise, don't update.
      return false;
    }

    /**
     * Render the leaf.
     *
     * @return {Element}
     */

  }, {
    key: 'render',
    value: function render() {
      this.debug('render', this);

      var _props = this.props,
          node = _props.node,
          index = _props.index;

      var offsetKey = OffsetKey.stringify({
        key: node.key,
        index: index
      });

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        'span',
        { 'data-slate-leaf': true, 'data-offset-key': offsetKey },
        this.renderMarks()
      );
    }

    /**
     * Render all of the leaf's mark components.
     *
     * @return {Element}
     */

  }, {
    key: 'renderMarks',
    value: function renderMarks() {
      var _props2 = this.props,
          marks = _props2.marks,
          node = _props2.node,
          offset = _props2.offset,
          text = _props2.text,
          editor = _props2.editor;

      var leaf = this.renderText();
      var attributes = {
        'data-slate-mark': true
      };

      return marks.reduce(function (children, mark) {
        var props = {
          editor: editor,
          mark: mark,
          marks: marks,
          node: node,
          offset: offset,
          text: text,
          children: children,
          attributes: attributes
        };
        var element = editor.run('renderMark', props);
        return element || children;
      }, leaf);
    }

    /**
     * Render the text content of the leaf, accounting for browsers.
     *
     * @return {Element}
     */

  }, {
    key: 'renderText',
    value: function renderText() {
      var _props3 = this.props,
          block = _props3.block,
          node = _props3.node,
          editor = _props3.editor,
          parent = _props3.parent,
          text = _props3.text,
          index = _props3.index,
          leaves = _props3.leaves;

      // COMPAT: Render text inside void nodes with a zero-width space.
      // So the node can contain selection but the text is not visible.

      if (editor.query('isVoid', parent)) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'span',
          { 'data-slate-zero-width': 'z', 'data-slate-length': parent.text.length },
          '\uFEFF'
        );
      }

      // COMPAT: If this is the last text node in an empty block, render a zero-
      // width space that will convert into a line break when copying and pasting
      // to support expected plain text.
      if (text === '' && parent.object === 'block' && parent.text === '' && parent.nodes.last() === node) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'span',
          { 'data-slate-zero-width': 'n', 'data-slate-length': 0 },
          '\uFEFF',
          react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement('br', null)
        );
      }

      // COMPAT: If the text is empty, it's because it's on the edge of an inline
      // node, so we render a zero-width space so that the selection can be
      // inserted next to it still.
      if (text === '') {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
          'span',
          { 'data-slate-zero-width': 'z', 'data-slate-length': 0 },
          '\uFEFF'
        );
      }

      // COMPAT: Browsers will collapse trailing new lines at the end of blocks,
      // so we need to add an extra trailing new lines to prevent that.
      var lastText = block.getLastText();
      var lastChar = text.charAt(text.length - 1);
      var isLastText = node === lastText;
      var isLastLeaf = index === leaves.size - 1;
      if (isLastText && isLastLeaf && lastChar === '\n') return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        'span',
        { 'data-slate-content': true },
        text + '\n'
      );

      // Otherwise, just return the content.
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        'span',
        { 'data-slate-content': true },
        text
      );
    }
  }]);
  return Leaf;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Leaf.propTypes = {
  block: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].block.isRequired,
  editor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
  leaves: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].leaves.isRequired,
  marks: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].marks.isRequired,
  node: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].node.isRequired,
  offset: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
  parent: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].node.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired };

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.debug = function (message) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    debug$2.apply(undefined, [message, _this2.props.node.key + '-' + _this2.props.index].concat(args));
  };
};

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$3 = debug__WEBPACK_IMPORTED_MODULE_6___default()('slate:node');

/**
 * Text.
 *
 * @type {Component}
 */

var Text = function (_React$Component) {
  inherits(Text, _React$Component);

  function Text() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Text);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Text.__proto__ || Object.getPrototypeOf(Text)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps$1.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Default prop types.
   *
   * @type {Object}
   */

  /**
   * Debug.
   *
   * @param {String} message
   * @param {Mixed} ...args
   */

  /**
   * Should the node update?
   *
   * @param {Object} nextProps
   * @param {Object} value
   * @return {Boolean}
   */

  createClass(Text, [{
    key: 'render',


    /**
     * Render.
     *
     * @return {Element}
     */

    value: function render() {
      var _this2 = this;

      this.debug('render', this);

      var _props = this.props,
          decorations = _props.decorations,
          editor = _props.editor,
          node = _props.node,
          style = _props.style;
      var value = editor.value;
      var document = value.document;
      var key = node.key;


      var decs = decorations.filter(function (d) {
        var start = d.start,
            end = d.end;

        // If either of the decoration's keys match, include it.

        if (start.key === key || end.key === key) return true;

        // Otherwise, if the decoration is in a single node, it's not ours.
        if (start.key === end.key) return false;

        // If the node's path is before the start path, ignore it.
        var path = document.assertPath(key);
        if (slate__WEBPACK_IMPORTED_MODULE_0__["PathUtils"].compare(path, start.path) === -1) return false;

        // If the node's path is after the end path, ignore it.
        if (slate__WEBPACK_IMPORTED_MODULE_0__["PathUtils"].compare(path, end.path) === 1) return false;

        // Otherwise, include it.
        return true;
      });

      // PERF: Take advantage of cache by avoiding arguments
      var leaves = decs.size === 0 ? node.getLeaves() : node.getLeaves(decs);
      var offset = 0;

      var children = leaves.map(function (leaf, i) {
        var child = _this2.renderLeaf(leaves, leaf, i, offset);
        offset += leaf.text.length;
        return child;
      });

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        'span',
        { 'data-key': key, style: style },
        children
      );
    }

    /**
     * Render a single leaf given a `leaf` and `offset`.
     *
     * @param {List<Leaf>} leaves
     * @param {Leaf} leaf
     * @param {Number} index
     * @param {Number} offset
     * @return {Element} leaf
     */

  }]);
  return Text;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Text.propTypes = {
  block: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].block,
  decorations: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_12___default.a.list.isRequired,
  editor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  node: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].node.isRequired,
  parent: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].node.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object };
Text.defaultProps = {
  style: null };

var _initialiseProps$1 = function _initialiseProps() {
  var _this3 = this;

  this.debug = function (message) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var node = _this3.props.node;
    var key = node.key;

    debug$3.apply(undefined, [message, key + ' (text)'].concat(args));
  };

  this.shouldComponentUpdate = function (nextProps) {
    var props = _this3.props;

    var n = nextProps;
    var p = props;

    // If the node has changed, update. PERF: There are cases where it will have
    // changed, but it's properties will be exactly the same (eg. copy-paste)
    // which this won't catch. But that's rare and not a drag on performance, so
    // for simplicity we just let them through.
    if (n.node != p.node) return true;

    // If the node parent is a block node, and it was the last child of the
    // block, re-render to cleanup extra `\n`.
    if (n.parent.object == 'block') {
      var pLast = p.parent.nodes.last();
      var nLast = n.parent.nodes.last();
      if (p.node == pLast && n.node != nLast) return true;
    }

    // Re-render if the current decorations have changed.
    if (!n.decorations.equals(p.decorations)) return true;

    // Otherwise, don't update.
    return false;
  };

  this.renderLeaf = function (leaves, leaf, index, offset) {
    var _props2 = _this3.props,
        block = _props2.block,
        node = _props2.node,
        parent = _props2.parent,
        editor = _props2.editor;
    var text = leaf.text,
        marks = leaf.marks;


    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Leaf, {
      key: node.key + '-' + index,
      block: block,
      editor: editor,
      index: index,
      marks: marks,
      node: node,
      offset: offset,
      parent: parent,
      leaves: leaves,
      text: text
    });
  };
};

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$4 = debug__WEBPACK_IMPORTED_MODULE_6___default()('slate:void');

/**
 * Void.
 *
 * @type {Component}
 */

var Void = function (_React$Component) {
  inherits(Void, _React$Component);

  function Void() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Void);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Void.__proto__ || Object.getPrototypeOf(Void)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps$2.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Debug.
   *
   * @param {String} message
   * @param {Mixed} ...args
   */

  createClass(Void, [{
    key: 'render',


    /**
     * Render.
     *
     * @return {Element}
     */

    value: function render() {
      var props = this.props;
      var children = props.children,
          node = props.node,
          readOnly = props.readOnly;

      var Tag = node.object == 'block' ? 'div' : 'span';
      var style = {
        height: '0',
        color: 'transparent',
        outline: 'none',
        position: 'absolute'
      };

      var spacer = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        Tag,
        { 'data-slate-spacer': true, style: style },
        this.renderText()
      );

      var content = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        Tag,
        { contentEditable: readOnly ? null : false },
        children
      );

      this.debug('render', { props: props });

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        Tag,
        {
          'data-slate-void': true,
          'data-key': node.key,
          contentEditable: readOnly || node.object == 'block' ? null : false
        },
        readOnly ? null : spacer,
        content
      );
    }

    /**
     * Render the void node's text node, which will catch the cursor when it the
     * void node is navigated to with the arrow keys.
     *
     * Having this text node there means the browser continues to manage the
     * selection natively, so it keeps track of the right offset when moving
     * across the block.
     *
     * @return {Element}
     */

  }]);
  return Void;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Void.propTypes = {
  block: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].block,
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any.isRequired,
  editor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  node: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].node.isRequired,
  parent: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].node.isRequired,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired };

var _initialiseProps$2 = function _initialiseProps() {
  var _this2 = this;

  this.debug = function (message) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var node = _this2.props.node;
    var key = node.key,
        type = node.type;

    var id = key + ' (' + type + ')';
    debug$4.apply(undefined, [message, '' + id].concat(args));
  };

  this.renderText = function () {
    var _props = _this2.props,
        block = _props.block,
        decorations = _props.decorations,
        node = _props.node,
        readOnly = _props.readOnly,
        editor = _props.editor;

    var child = node.getFirstText();
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Text, {
      block: node.object == 'block' ? node : block,
      decorations: decorations,
      editor: editor,
      key: child.key,
      node: child,
      parent: node,
      readOnly: readOnly
    });
  };
};

/**
 * Split the decorations in lists of relevant decorations for each child.
 *
 * @param {Node} node
 * @param {List} decorations
 * @return {Array<List<Decoration>>}
 */

function getChildrenDecorations(node, decorations) {
  var activeDecorations = Object(immutable__WEBPACK_IMPORTED_MODULE_13__["Set"])().asMutable();
  var childrenDecorations = [];

  orderChildDecorations(node, decorations).forEach(function (item) {
    if (item.isRangeStart) {
      // Item is a decoration start
      activeDecorations.add(item.decoration);
    } else if (item.isRangeEnd) {
      // item is a decoration end
      activeDecorations.remove(item.decoration);
    } else {
      // Item is a child node
      childrenDecorations.push(activeDecorations.toList());
    }
  });

  return childrenDecorations;
}

/**
 * Orders the children of provided node and its decoration endpoints (start, end)
 * so that decorations can be passed only to relevant children (see use in Node.render())
 *
 * @param {Node} node
 * @param {List} decorations
 * @return {Array<Item>}
 *
 * where type Item =
 * {
 *   child: Node,
 *   // Index of the child in its parent
 *   index: number
 * }
 * or {
 *   // True if this represents the start of the given decoration
 *   isRangeStart: boolean,
 *   // True if this represents the end of the given decoration
 *   isRangeEnd: boolean,
 *   decoration: Range
 * }
 */

function orderChildDecorations(node, decorations) {
  if (decorations.isEmpty()) {
    return node.nodes.toArray().map(function (child, index) {
      return {
        child: child,
        index: index
      };
    });
  }

  // Map each key to its global order
  var keyOrders = defineProperty({}, node.key, 0);
  var globalOrder = 1;

  node.forEachDescendant(function (child) {
    keyOrders[child.key] = globalOrder;
    globalOrder = globalOrder + 1;
  });

  var childNodes = node.nodes.toArray();

  var endPoints = childNodes.map(function (child, index) {
    return {
      child: child,
      index: index,
      order: keyOrders[child.key]
    };
  });

  decorations.forEach(function (decoration) {
    // Range start.
    // A rangeStart should be before the child containing its startKey, in order
    // to consider it active before going down the child.
    var startKeyOrder = keyOrders[decoration.start.key];
    var containingChildOrder = startKeyOrder === undefined ? 0 : getContainingChildOrder(childNodes, keyOrders, startKeyOrder);

    endPoints.push({
      isRangeStart: true,
      order: containingChildOrder - 0.5,
      decoration: decoration
    });

    // Range end.
    var endKeyOrder = (keyOrders[decoration.end.key] || globalOrder) + 0.5;

    endPoints.push({
      isRangeEnd: true,
      order: endKeyOrder,
      decoration: decoration
    });
  });

  return endPoints.sort(function (a, b) {
    return a.order > b.order ? 1 : -1;
  });
}

/*
 * Returns the key order of the child right before the given order.
 */

function getContainingChildOrder(children, keyOrders, order) {
  // Find the first child that is after the given key
  var nextChildIndex = children.findIndex(function (child) {
    return order < keyOrders[child.key];
  });

  if (nextChildIndex <= 0) {
    return 0;
  }

  var containingChild = children[nextChildIndex - 1];
  return keyOrders[containingChild.key];
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$5 = debug__WEBPACK_IMPORTED_MODULE_6___default()('slate:node');

/**
 * Node.
 *
 * @type {Component}
 */

var Node$1 = function (_React$Component) {
  inherits(Node$$1, _React$Component);

  function Node$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Node$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Node$$1.__proto__ || Object.getPrototypeOf(Node$$1)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps$3.call(_this), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Debug.
   *
   * @param {String} message
   * @param {Mixed} ...args
   */

  createClass(Node$$1, [{
    key: 'shouldComponentUpdate',


    /**
     * Should the node update?
     *
     * @param {Object} nextProps
     * @param {Object} value
     * @return {Boolean}
     */

    value: function shouldComponentUpdate(nextProps) {
      var props = this.props;
      var editor = props.editor;

      var shouldUpdate = editor.run('shouldNodeComponentUpdate', props, nextProps);
      var n = nextProps;
      var p = props;

      // If the `Component` has a custom logic to determine whether the component
      // needs to be updated or not, return true if it returns true. If it returns
      // false, we need to ignore it, because it shouldn't be allowed it.
      if (shouldUpdate != null) {
        if (shouldUpdate) {
          return true;
        }

        Object(tiny_warning__WEBPACK_IMPORTED_MODULE_14__["default"])(shouldUpdate !== false, "Returning false in `shouldNodeComponentUpdate` does not disable Slate's internal `shouldComponentUpdate` logic. If you want to prevent updates, use React's `shouldComponentUpdate` instead.");
      }

      // If the `readOnly` status has changed, re-render in case there is any
      // user-land logic that depends on it, like nested editable contents.
      if (n.readOnly != p.readOnly) return true;

      // If the node has changed, update. PERF: There are cases where it will have
      // changed, but it's properties will be exactly the same (eg. copy-paste)
      // which this won't catch. But that's rare and not a drag on performance, so
      // for simplicity we just let them through.
      if (n.node != p.node) return true;

      // If the selection value of the node or of some of its children has changed,
      // re-render in case there is any user-land logic depends on it to render.
      // if the node is selected update it, even if it was already selected: the
      // selection value of some of its children could have been changed and they
      // need to be rendered again.
      if (n.isSelected || p.isSelected) return true;
      if (n.isFocused || p.isFocused) return true;

      // If the decorations have changed, update.
      if (!n.decorations.equals(p.decorations)) return true;

      // Otherwise, don't update.
      return false;
    }

    /**
     * Render.
     *
     * @return {Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.debug('render', this);
      var _props = this.props,
          editor = _props.editor,
          isSelected = _props.isSelected,
          isFocused = _props.isFocused,
          node = _props.node,
          decorations = _props.decorations,
          parent = _props.parent,
          readOnly = _props.readOnly;
      var value = editor.value;
      var selection = value.selection;

      var indexes = node.getSelectionIndexes(selection, isSelected);
      var decs = decorations.concat(node.getDecorations(editor));
      var childrenDecorations = getChildrenDecorations(node, decs);
      var children = [];

      node.nodes.forEach(function (child, i) {
        var isChildSelected = !!indexes && indexes.start <= i && i < indexes.end;

        children.push(_this2.renderNode(child, isChildSelected, childrenDecorations[i]));
      });

      // Attributes that the developer must mix into the element in their
      // custom node renderer component.
      var attributes = { 'data-key': node.key

        // If it's a block node with inline children, add the proper `dir` attribute
        // for text direction.
      };if (node.isLeafBlock()) {
        var direction = node.getTextDirection();
        if (direction == 'rtl') attributes.dir = 'rtl';
      }

      var props = {
        key: node.key,
        editor: editor,
        isFocused: isFocused,
        isSelected: isSelected,
        node: node,
        parent: parent,
        readOnly: readOnly
      };

      var element = editor.run('renderNode', _extends({}, props, {
        attributes: attributes,
        children: children
      }));

      return editor.query('isVoid', node) ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        Void,
        this.props,
        element
      ) : element;
    }

    /**
     * Render a `child` node.
     *
     * @param {Node} child
     * @param {Boolean} isSelected
     * @param {Array<Decoration>} decorations
     * @return {Element}
     */

  }]);
  return Node$$1;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Node$1.propTypes = {
  block: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].block,
  decorations: react_immutable_proptypes__WEBPACK_IMPORTED_MODULE_12___default.a.list.isRequired,
  editor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  isFocused: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  isSelected: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  node: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].node.isRequired,
  parent: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].node.isRequired,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired };

var _initialiseProps$3 = function _initialiseProps() {
  var _this3 = this;

  this.debug = function (message) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var node = _this3.props.node;
    var key = node.key,
        type = node.type;

    debug$5.apply(undefined, [message, key + ' (' + type + ')'].concat(args));
  };

  this.renderNode = function (child, isSelected, decorations) {
    var _props2 = _this3.props,
        block = _props2.block,
        editor = _props2.editor,
        node = _props2.node,
        readOnly = _props2.readOnly,
        isFocused = _props2.isFocused;

    var Component = child.object == 'text' ? Text : Node$1;

    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, {
      block: node.object == 'block' ? node : block,
      decorations: decorations,
      editor: editor,
      isSelected: isSelected,
      isFocused: isFocused && isSelected,
      key: child.key,
      node: child,
      parent: node,
      readOnly: readOnly
    });
  };
};

/**
 * Find a native DOM range Slate `range`.
 *
 * @param {Range} range
 * @param {Window} win (optional)
 * @return {Object|Null}
 */

function findDOMRange(range) {
  var win = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var anchor = range.anchor,
      focus = range.focus,
      isBackward$$1 = range.isBackward,
      isCollapsed = range.isCollapsed;

  var domAnchor = findDOMPoint(anchor, win);
  var domFocus = isCollapsed ? domAnchor : findDOMPoint(focus, win);

  if (!domAnchor || !domFocus) return null;

  var r = win.document.createRange();
  var start = isBackward$$1 ? domFocus : domAnchor;
  var end = isBackward$$1 ? domAnchor : domFocus;
  r.setStart(start.node, start.offset);
  r.setEnd(end.node, end.offset);
  return r;
}

/**
 * CSS overflow values that would cause scrolling.
 *
 * @type {Array}
 */

var OVERFLOWS = ['auto', 'overlay', 'scroll'];

/**
 * Detect whether we are running IOS version 11
 */

var IS_IOS_11 = slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_IOS"] && !!window.navigator.userAgent.match(/os 11_/i);

/**
 * Find the nearest parent with scrolling, or window.
 *
 * @param {el} Element
 */

function findScrollContainer(el, window) {
  var parent = el.parentNode;
  var scroller = void 0;

  while (!scroller) {
    if (!parent.parentNode) break;

    var style = window.getComputedStyle(parent);
    var overflowY = style.overflowY;


    if (OVERFLOWS.includes(overflowY)) {
      scroller = parent;
      break;
    }

    parent = parent.parentNode;
  }

  // COMPAT: Because Chrome does not allow doucment.body.scrollTop, we're
  // assuming that window.scrollTo() should be used if the scrollable element
  // turns out to be document.body or document.documentElement. This will work
  // unless body is intentionally set to scrollable by restricting its height
  // (e.g. height: 100vh).
  if (!scroller) {
    return window.document.body;
  }

  return scroller;
}

/**
 * Scroll the current selection's focus point into view if needed.
 *
 * @param {Selection} selection
 */

function scrollToSelection(selection) {
  if (IS_IOS_11) return;
  if (!selection.anchorNode) return;

  var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(selection.anchorNode);
  var scroller = findScrollContainer(selection.anchorNode, window);
  var isWindow = scroller == window.document.body || scroller == window.document.documentElement;
  var backward = selection_is_backward__WEBPACK_IMPORTED_MODULE_15___default()(selection);

  var range = selection.getRangeAt(0).cloneRange();
  range.collapse(backward);
  var cursorRect = range.getBoundingClientRect();

  // COMPAT: range.getBoundingClientRect() returns 0s in Safari when range is
  // collapsed. Expanding the range by 1 is a relatively effective workaround
  // for vertical scroll, although horizontal may be off by 1 character.
  // https://bugs.webkit.org/show_bug.cgi?id=138949
  // https://bugs.chromium.org/p/chromium/issues/detail?id=435438
  if (slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_SAFARI"]) {
    if (range.collapsed && cursorRect.top == 0 && cursorRect.height == 0) {
      if (range.startOffset == 0) {
        range.setEnd(range.endContainer, 1);
      } else {
        range.setStart(range.startContainer, range.startOffset - 1);
      }

      cursorRect = range.getBoundingClientRect();

      if (cursorRect.top == 0 && cursorRect.height == 0) {
        if (range.getClientRects().length) {
          cursorRect = range.getClientRects()[0];
        }
      }
    }
  }

  var width = void 0;
  var height = void 0;
  var yOffset = void 0;
  var xOffset = void 0;
  var scrollerTop = 0;
  var scrollerLeft = 0;
  var scrollerBordersY = 0;
  var scrollerBordersX = 0;
  var scrollerPaddingTop = 0;
  var scrollerPaddingBottom = 0;
  var scrollerPaddingLeft = 0;
  var scrollerPaddingRight = 0;

  if (isWindow) {
    var innerWidth = window.innerWidth,
        innerHeight = window.innerHeight,
        pageYOffset = window.pageYOffset,
        pageXOffset = window.pageXOffset;

    width = innerWidth;
    height = innerHeight;
    yOffset = pageYOffset;
    xOffset = pageXOffset;
  } else {
    var offsetWidth = scroller.offsetWidth,
        offsetHeight = scroller.offsetHeight,
        scrollTop = scroller.scrollTop,
        scrollLeft = scroller.scrollLeft;

    var _window$getComputedSt = window.getComputedStyle(scroller),
        borderTopWidth = _window$getComputedSt.borderTopWidth,
        borderBottomWidth = _window$getComputedSt.borderBottomWidth,
        borderLeftWidth = _window$getComputedSt.borderLeftWidth,
        borderRightWidth = _window$getComputedSt.borderRightWidth,
        paddingTop = _window$getComputedSt.paddingTop,
        paddingBottom = _window$getComputedSt.paddingBottom,
        paddingLeft = _window$getComputedSt.paddingLeft,
        paddingRight = _window$getComputedSt.paddingRight;

    var scrollerRect = scroller.getBoundingClientRect();
    width = offsetWidth;
    height = offsetHeight;
    scrollerTop = scrollerRect.top + parseInt(borderTopWidth, 10);
    scrollerLeft = scrollerRect.left + parseInt(borderLeftWidth, 10);

    scrollerBordersY = parseInt(borderTopWidth, 10) + parseInt(borderBottomWidth, 10);

    scrollerBordersX = parseInt(borderLeftWidth, 10) + parseInt(borderRightWidth, 10);

    scrollerPaddingTop = parseInt(paddingTop, 10);
    scrollerPaddingBottom = parseInt(paddingBottom, 10);
    scrollerPaddingLeft = parseInt(paddingLeft, 10);
    scrollerPaddingRight = parseInt(paddingRight, 10);
    yOffset = scrollTop;
    xOffset = scrollLeft;
  }

  var cursorTop = cursorRect.top + yOffset - scrollerTop;
  var cursorLeft = cursorRect.left + xOffset - scrollerLeft;

  var x = xOffset;
  var y = yOffset;

  if (cursorLeft < xOffset) {
    // selection to the left of viewport
    x = cursorLeft - scrollerPaddingLeft;
  } else if (cursorLeft + cursorRect.width + scrollerBordersX > xOffset + width) {
    // selection to the right of viewport
    x = cursorLeft + scrollerBordersX + scrollerPaddingRight - width;
  }

  if (cursorTop < yOffset) {
    // selection above viewport
    y = cursorTop - scrollerPaddingTop;
  } else if (cursorTop + cursorRect.height + scrollerBordersY > yOffset + height) {
    // selection below viewport
    y = cursorTop + scrollerBordersY + scrollerPaddingBottom + cursorRect.height - height;
  }

  if (isWindow) {
    window.scrollTo(x, y);
  } else {
    scroller.scrollTop = y;
    scroller.scrollLeft = x;
  }
}

var FIREFOX_NODE_TYPE_ACCESS_ERROR = /Permission denied to access property "nodeType"/;

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$6 = debug__WEBPACK_IMPORTED_MODULE_6___default()('slate:content');

/**
 * Content.
 *
 * @type {Component}
 */

var Content = function (_React$Component) {
  inherits(Content, _React$Component);

  function Content() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Content);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), _this), _this.tmp = {
      isUpdatingSelection: false

      /**
       * Create a set of bound event handlers.
       *
       * @type {Object}
       */

    }, _this.handlers = EVENT_HANDLERS.reduce(function (obj, handler) {
      obj[handler] = function (event) {
        return _this.onEvent(handler, event);
      };
      return obj;
    }, {}), _this.updateSelection = function () {
      var editor = _this.props.editor;
      var value = editor.value;
      var selection = value.selection;
      var isBackward$$1 = selection.isBackward;

      var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(_this.element);
      var native = window.getSelection();
      var activeElement = window.document.activeElement;

      // COMPAT: In Firefox, there's a but where `getSelection` can return `null`.
      // https://bugzilla.mozilla.org/show_bug.cgi?id=827585 (2018/11/07)

      if (!native) {
        return;
      }

      var rangeCount = native.rangeCount,
          anchorNode = native.anchorNode;

      var updated = false;

      // If the Slate selection is blurred, but the DOM's active element is still
      // the editor, we need to blur it.
      if (selection.isBlurred && activeElement === _this.element) {
        _this.element.blur();
        updated = true;
      }

      // If the Slate selection is unset, but the DOM selection has a range
      // selected in the editor, we need to remove the range.
      if (selection.isUnset && rangeCount && _this.isInEditor(anchorNode)) {
        removeAllRanges(native);
        updated = true;
      }

      // If the Slate selection is focused, but the DOM's active element is not
      // the editor, we need to focus it.
      if (selection.isFocused && activeElement !== _this.element) {
        _this.element.focus();
        updated = true;
      }

      // Otherwise, figure out which DOM nodes should be selected...
      if (selection.isFocused && selection.isSet) {
        var current = !!rangeCount && native.getRangeAt(0);
        var range = findDOMRange(selection, window);

        if (!range) {
          Object(tiny_warning__WEBPACK_IMPORTED_MODULE_14__["default"])(false, 'Unable to find a native DOM range from the current selection.');

          return;
        }

        var startContainer = range.startContainer,
            startOffset = range.startOffset,
            endContainer = range.endContainer,
            endOffset = range.endOffset;

        // If the new range matches the current selection, there is nothing to fix.
        // COMPAT: The native `Range` object always has it's "start" first and "end"
        // last in the DOM. It has no concept of "backwards/forwards", so we have
        // to check both orientations here. (2017/10/31)

        if (current) {
          if (startContainer == current.startContainer && startOffset == current.startOffset && endContainer == current.endContainer && endOffset == current.endOffset || startContainer == current.endContainer && startOffset == current.endOffset && endContainer == current.startContainer && endOffset == current.startOffset) {
            return;
          }
        }

        // Otherwise, set the `isUpdatingSelection` flag and update the selection.
        updated = true;
        _this.tmp.isUpdatingSelection = true;
        removeAllRanges(native);

        // COMPAT: IE 11 does not support `setBaseAndExtent`. (2018/11/07)
        if (native.setBaseAndExtent) {
          // COMPAT: Since the DOM range has no concept of backwards/forwards
          // we need to check and do the right thing here.
          if (isBackward$$1) {
            native.setBaseAndExtent(range.endContainer, range.endOffset, range.startContainer, range.startOffset);
          } else {
            native.setBaseAndExtent(range.startContainer, range.startOffset, range.endContainer, range.endOffset);
          }
        } else {
          native.addRange(range);
        }

        // Scroll to the selection, in case it's out of view.
        scrollToSelection(native);

        // Then unset the `isUpdatingSelection` flag after a delay, to ensure that
        // it is still set when selection-related events from updating it fire.
        setTimeout(function () {
          // COMPAT: In Firefox, it's not enough to create a range, you also need
          // to focus the contenteditable element too. (2016/11/16)
          if (slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_FIREFOX"] && _this.element) {
            _this.element.focus();
          }

          _this.tmp.isUpdatingSelection = false;
        });
      }

      if (updated) {
        debug$6('updateSelection', { selection: selection, native: native, activeElement: activeElement });
      }
    }, _this.ref = function (element) {
      _this.element = element;
    }, _this.isInEditor = function (target) {
      var _this2 = _this,
          element = _this2.element;


      var el = void 0;

      try {
        // COMPAT: In Firefox, sometimes the node can be comment which doesn't
        // have .closest and it crashes.
        if (target.nodeType === 8) {
          return false;
        }

        // COMPAT: Text nodes don't have `isContentEditable` property. So, when
        // `target` is a text node use its parent node for check.
        el = target.nodeType === 3 ? target.parentNode : target;
      } catch (err) {
        // COMPAT: In Firefox, `target.nodeType` will throw an error if target is
        // originating from an internal "restricted" element (e.g. a stepper
        // arrow on a number input)
        // see github.com/ianstormtaylor/slate/issues/1819
        if (slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["IS_FIREFOX"] && FIREFOX_NODE_TYPE_ACCESS_ERROR.test(err.message)) {
          return false;
        }

        throw err;
      }

      return el.isContentEditable && (el === element || el.closest('[data-slate-editor]') === element);
    }, _this.onNativeSelectionChange = lodash_throttle__WEBPACK_IMPORTED_MODULE_16___default()(function (event) {
      if (_this.props.readOnly) return;

      var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
      var activeElement = window.document.activeElement;

      if (activeElement !== _this.element) return;

      _this.props.onEvent('onSelect', event);
    }, 100), _this.renderNode = function (child, isSelected, decorations) {
      var _this$props = _this.props,
          editor = _this$props.editor,
          readOnly = _this$props.readOnly;
      var value = editor.value;
      var document = value.document,
          selection = value.selection;
      var isFocused = selection.isFocused;


      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Node$1, {
        block: null,
        editor: editor,
        decorations: decorations,
        isSelected: isSelected,
        isFocused: isFocused && isSelected,
        key: child.key,
        node: child,
        parent: document,
        readOnly: readOnly
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Default properties.
   *
   * @type {Object}
   */

  /**
   * Temporary values.
   *
   * @type {Object}
   */

  createClass(Content, [{
    key: 'componentDidMount',


    /**
     * When the editor first mounts in the DOM we need to:
     *
     *   - Add native DOM event listeners.
     *   - Update the selection, in case it starts focused.
     */

    value: function componentDidMount() {
      var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(this.element);

      window.document.addEventListener('selectionchange', this.onNativeSelectionChange);

      // COMPAT: Restrict scope of `beforeinput` to clients that support the
      // Input Events Level 2 spec, since they are preventable events.
      if (slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["HAS_INPUT_EVENTS_LEVEL_2"]) {
        this.element.addEventListener('beforeinput', this.handlers.onBeforeInput);
      }

      this.updateSelection();
    }

    /**
     * When unmounting, remove DOM event listeners.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(this.element);

      if (window) {
        window.document.removeEventListener('selectionchange', this.onNativeSelectionChange);
      }

      if (slate_dev_environment__WEBPACK_IMPORTED_MODULE_5__["HAS_INPUT_EVENTS_LEVEL_2"]) {
        this.element.removeEventListener('beforeinput', this.handlers.onBeforeInput);
      }
    }

    /**
     * On update, update the selection.
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateSelection();
    }

    /**
     * Update the native DOM selection to reflect the internal model.
     */

    /**
     * The React ref method to set the root content element locally.
     *
     * @param {Element} element
     */

    /**
     * Check if an event `target` is fired from within the contenteditable
     * element. This should be false for edits happening in non-contenteditable
     * children, such as void nodes and other nested Slate editors.
     *
     * @param {Element} target
     * @return {Boolean}
     */

  }, {
    key: 'onEvent',


    /**
     * On `event` with `handler`.
     *
     * @param {String} handler
     * @param {Event} event
     */

    value: function onEvent(handler, event) {
      debug$6('onEvent', handler);

      // Ignore `onBlur`, `onFocus` and `onSelect` events generated
      // programmatically while updating selection.
      if (this.tmp.isUpdatingSelection && (handler == 'onSelect' || handler == 'onBlur' || handler == 'onFocus')) {
        return;
      }

      // COMPAT: There are situations where a select event will fire with a new
      // native selection that resolves to the same internal position. In those
      // cases we don't need to trigger any changes, since our internal model is
      // already up to date, but we do want to update the native selection again
      // to make sure it is in sync. (2017/10/16)
      if (handler == 'onSelect') {
        var editor = this.props.editor;
        var value = editor.value;
        var selection = value.selection;

        var window = get_window__WEBPACK_IMPORTED_MODULE_1___default()(event.target);
        var native = window.getSelection();
        var range = findRange(native, editor);

        if (range && range.equals(selection.toRange())) {
          this.updateSelection();
          return;
        }
      }

      // Don't handle drag and drop events coming from embedded editors.
      if (handler == 'onDragEnd' || handler == 'onDragEnter' || handler == 'onDragExit' || handler == 'onDragLeave' || handler == 'onDragOver' || handler == 'onDragStart' || handler == 'onDrop') {
        var closest = event.target.closest('[data-slate-editor]');

        if (closest !== this.element) {
          return;
        }
      }

      // Some events require being in editable in the editor, so if the event
      // target isn't, ignore them.
      if (handler == 'onBeforeInput' || handler == 'onBlur' || handler == 'onCompositionEnd' || handler == 'onCompositionStart' || handler == 'onCopy' || handler == 'onCut' || handler == 'onFocus' || handler == 'onInput' || handler == 'onKeyDown' || handler == 'onKeyUp' || handler == 'onPaste' || handler == 'onSelect') {
        if (!this.isInEditor(event.target)) {
          return;
        }
      }

      this.props.onEvent(handler, event);
    }

    /**
     * On native `selectionchange` event, trigger the `onSelect` handler. This is
     * needed to account for React's `onSelect` being non-standard and not firing
     * until after a selection has been released. This causes issues in situations
     * where another change happens while a selection is being made.
     *
     * @param {Event} event
     */

  }, {
    key: 'render',


    /**
     * Render the editor content.
     *
     * @return {Element}
     */

    value: function render() {
      var _this3 = this;

      var props = this.props,
          handlers = this.handlers;
      var id = props.id,
          className = props.className,
          readOnly = props.readOnly,
          editor = props.editor,
          tabIndex = props.tabIndex,
          role = props.role,
          tagName = props.tagName,
          spellCheck = props.spellCheck;
      var value = editor.value;

      var Container = tagName;
      var document = value.document,
          selection = value.selection,
          decorations = value.decorations;

      var indexes = document.getSelectionIndexes(selection);
      var decs = document.getDecorations(editor).concat(decorations);
      var childrenDecorations = getChildrenDecorations(document, decs);

      var children = document.nodes.toArray().map(function (child, i) {
        var isSelected = !!indexes && indexes.start <= i && i < indexes.end;

        return _this3.renderNode(child, isSelected, childrenDecorations[i]);
      });

      var style = _extends({
        // Prevent the default outline styles.
        outline: 'none',
        // Preserve adjacent whitespace and new lines.
        whiteSpace: 'pre-wrap',
        // Allow words to break if they are too long.
        wordWrap: 'break-word'
      }, readOnly ? {} : { WebkitUserModify: 'read-write-plaintext-only' }, props.style);

      debug$6('render', { props: props });

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
        Container,
        _extends({}, handlers, {
          'data-slate-editor': true,
          ref: this.ref,
          'data-key': document.key,
          contentEditable: readOnly ? null : true,
          suppressContentEditableWarning: true,
          id: id,
          className: className,
          autoCorrect: props.autoCorrect ? 'on' : 'off',
          spellCheck: spellCheck,
          style: style,
          role: readOnly ? null : role || 'textbox',
          tabIndex: tabIndex
          // COMPAT: The Grammarly Chrome extension works by changing the DOM out
          // from under `contenteditable` elements, which leads to weird behaviors
          // so we have to disable it like this. (2017/04/24)
          , 'data-gramm': false
        }),
        children
      );
    }

    /**
     * Render a `child` node of the document.
     *
     * @param {Node} child
     * @param {Boolean} isSelected
     * @return {Element}
     */

  }]);
  return Content;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Content.propTypes = {
  autoCorrect: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  editor: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  role: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  spellCheck: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool.isRequired,
  style: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  tagName: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string };
Content.defaultProps = {
  style: {},
  tagName: 'div' };

/**
 * Props that can be defined by plugins.
 *
 * @type {Array}
 */

var PROPS = [].concat(toConsumableArray(EVENT_HANDLERS), ['commands', 'decorateNode', 'queries', 'renderEditor', 'renderMark', 'renderNode', 'schema']);

/**
 * A plugin that adds the React-specific rendering logic to the editor.
 *
 * @param {Object} options
 * @return {Object}
 */

function ReactPlugin() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var placeholder = options.placeholder,
      _options$plugins = options.plugins,
      plugins = _options$plugins === undefined ? [] : _options$plugins;

  /**
   * Decorate node.
   *
   * @param {Object} node
   * @param {Editor} editor
   * @param {Function} next
   * @return {Array}
   */

  function decorateNode(node, editor, next) {
    return [];
  }

  /**
   * Render editor.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @param {Function} next
   * @return {Element}
   */

  function renderEditor(props, editor, next) {
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Content, {
      autoCorrect: props.autoCorrect,
      className: props.className,
      editor: editor,
      id: props.id,
      onEvent: function onEvent(handler, event) {
        return editor.run(handler, event);
      },
      readOnly: props.readOnly,
      role: props.role,
      spellCheck: props.spellCheck,
      style: props.style,
      tabIndex: props.tabIndex,
      tagName: props.tagName
    });
  }

  /**
   * Render node.
   *
   * @param {Object} props
   * @param {Editor} editor
   * @param {Function} next
   * @return {Element}
   */

  function renderNode(props, editor, next) {
    var attributes = props.attributes,
        children = props.children,
        node = props.node;
    var object = node.object;

    if (object != 'block' && object != 'inline') return null;

    var Tag = object == 'block' ? 'div' : 'span';
    var style = { position: 'relative' };
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(
      Tag,
      _extends({}, attributes, { style: style }),
      children
    );
  }

  /**
   * Return the plugins.
   *
   * @type {Array}
   */

  var ret = [];
  var editorPlugin = PROPS.reduce(function (memo, prop) {
    if (prop in options) memo[prop] = options[prop];
    return memo;
  }, {});

  ret.push(DOMPlugin({
    plugins: [editorPlugin].concat(toConsumableArray(plugins))
  }));

  if (placeholder) {
    ret.push(Object(slate_react_placeholder__WEBPACK_IMPORTED_MODULE_17__["default"])({
      placeholder: placeholder,
      when: function when(editor, node) {
        return node.object === 'document' && node.text === '' && node.nodes.size === 1 && node.getTexts().size === 1;
      }
    }));
  }

  ret.push({
    decorateNode: decorateNode,
    renderEditor: renderEditor,
    renderNode: renderNode
  });

  return ret;
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$7 = debug__WEBPACK_IMPORTED_MODULE_6___default()('slate:editor');

/**
 * Editor.
 *
 * @type {Component}
 */

var Editor$1 = function (_React$Component) {
  inherits(Editor$$1, _React$Component);

  function Editor$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Editor$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Editor$$1.__proto__ || Object.getPrototypeOf(Editor$$1)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.tmp = {
      mounted: false,
      change: null,
      resolves: 0,
      updates: 0

      /**
       * When the component first mounts, flush a queued change if one exists.
       */

    }, _this.resolveController = Object(memoize_one__WEBPACK_IMPORTED_MODULE_18__["default"])(function () {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_14__["default"])(_this.tmp.resolves < 5 || _this.tmp.resolves !== _this.tmp.updates, 'A Slate <Editor> component is re-resolving the `plugins`, `schema`, `commands`, `queries` or `placeholder` prop on each update, which leads to poor performance. This is often due to passing in a new references for these props with each render by declaring them inline in your render function. Do not do this! Declare them outside your render function, or memoize them instead.');

      _this.tmp.resolves++;
      var react = ReactPlugin(_this.props);

      var onChange = function onChange(change) {
        if (_this.tmp.mounted) {
          _this.props.onChange(change);
        } else {
          _this.tmp.change = change;
        }
      };

      _this.controller = new slate__WEBPACK_IMPORTED_MODULE_0__["Editor"]({ plugins: [react], onChange: onChange }, { controller: _this, construct: false });

      _this.controller.run('onConstruct');
    }), _temp), possibleConstructorReturn(_this, _ret);
  }
  /**
   * Property types.
   *
   * @type {Object}
   */

  /**
   * Default properties.
   *
   * @type {Object}
   */

  /**
   * Initial state.
   *
   * @type {Object}
   */

  /**
   * Temporary values.
   *
   * @type {Object}
   */

  createClass(Editor$$1, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tmp.mounted = true;
      this.tmp.updates++;

      if (this.props.autoFocus) {
        this.focus();
      }

      if (this.tmp.change) {
        this.props.onChange(this.tmp.change);
        this.tmp.change = null;
      }
    }

    /**
     * When the component updates, flush a queued change if one exists.
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.tmp.updates++;

      if (this.tmp.change) {
        this.props.onChange(this.tmp.change);
        this.tmp.change = null;
      }
    }

    /**
     * When the component unmounts, make sure async commands don't trigger react updates.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.tmp.mounted = false;
    }

    /**
     * Render the editor.
     *
     * @return {Element}
     */

  }, {
    key: 'render',
    value: function render() {
      debug$7('render', this);
      var props = _extends({}, this.props, { editor: this

        // Re-resolve the controller if needed based on memoized props.
      });var commands = props.commands,
          placeholder = props.placeholder,
          plugins = props.plugins,
          queries = props.queries,
          schema = props.schema;

      this.resolveController(plugins, schema, commands, queries, placeholder);

      // Set the current props on the controller.
      var options = props.options,
          readOnly = props.readOnly,
          value = props.value;

      this.controller.setReadOnly(readOnly);
      this.controller.setValue(value, options);

      // Render the editor's children with the controller.
      var children = this.controller.run('renderEditor', props);
      return children;
    }

    /**
     * Resolve an editor controller from the passed-in props. This method takes
     * all of the props as individual arguments to be able to properly memoize
     * against anything that could change and invalidate the old editor.
     *
     * @param {Array} plugins
     * @param {Object} schema
     * @param {Object} commands
     * @param {Object} queries
     * @param {String} placeholder
     * @return {Editor}
     */

  }, {
    key: 'applyOperation',
    value: function applyOperation() {
      var _controller;

      return (_controller = this.controller).applyOperation.apply(_controller, arguments);
    }
  }, {
    key: 'command',
    value: function command() {
      var _controller2;

      return (_controller2 = this.controller).command.apply(_controller2, arguments);
    }
  }, {
    key: 'normalize',
    value: function normalize() {
      var _controller3;

      return (_controller3 = this.controller).normalize.apply(_controller3, arguments);
    }
  }, {
    key: 'query',
    value: function query() {
      var _controller4;

      return (_controller4 = this.controller).query.apply(_controller4, arguments);
    }
  }, {
    key: 'registerCommand',
    value: function registerCommand() {
      var _controller5;

      return (_controller5 = this.controller).registerCommand.apply(_controller5, arguments);
    }
  }, {
    key: 'registerQuery',
    value: function registerQuery() {
      var _controller6;

      return (_controller6 = this.controller).registerQuery.apply(_controller6, arguments);
    }
  }, {
    key: 'run',
    value: function run() {
      var _controller7;

      return (_controller7 = this.controller).run.apply(_controller7, arguments);
    }
  }, {
    key: 'withoutNormalizing',
    value: function withoutNormalizing() {
      var _controller8;

      return (_controller8 = this.controller).withoutNormalizing.apply(_controller8, arguments);
    }

    /**
     * Deprecated.
     */

  }, {
    key: 'call',
    value: function call() {
      var _controller9;

      return (_controller9 = this.controller).call.apply(_controller9, arguments);
    }
  }, {
    key: 'change',
    value: function change() {
      var _controller10;

      return (_controller10 = this.controller).change.apply(_controller10, arguments);
    }
  }, {
    key: 'onChange',
    value: function onChange() {
      var _controller11;

      return (_controller11 = this.controller).onChange.apply(_controller11, arguments);
    }
  }, {
    key: 'applyOperations',
    value: function applyOperations() {
      var _controller12;

      return (_controller12 = this.controller).applyOperations.apply(_controller12, arguments);
    }
  }, {
    key: 'setOperationFlag',
    value: function setOperationFlag() {
      var _controller13;

      return (_controller13 = this.controller).setOperationFlag.apply(_controller13, arguments);
    }
  }, {
    key: 'getFlag',
    value: function getFlag() {
      var _controller14;

      return (_controller14 = this.controller).getFlag.apply(_controller14, arguments);
    }
  }, {
    key: 'unsetOperationFlag',
    value: function unsetOperationFlag() {
      var _controller15;

      return (_controller15 = this.controller).unsetOperationFlag.apply(_controller15, arguments);
    }
  }, {
    key: 'withoutNormalization',
    value: function withoutNormalization() {
      var _controller16;

      return (_controller16 = this.controller).withoutNormalization.apply(_controller16, arguments);
    }
  }, {
    key: 'operations',


    /**
     * Mimic the API of the `Editor` controller, so that this component instance
     * can be passed in its place to plugins.
     */

    get: function get$$1() {
      return this.controller.operations;
    }
  }, {
    key: 'readOnly',
    get: function get$$1() {
      return this.controller.readOnly;
    }
  }, {
    key: 'value',
    get: function get$$1() {
      return this.controller.value;
    }
  }, {
    key: 'editor',
    get: function get$$1() {
      return this.controller.editor;
    }
  }, {
    key: 'schema',
    get: function get$$1() {
      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of Slate 0.42, the `editor.schema` property no longer exists, and its functionality has been folded into the editor itself. Use the `editor` instead.');
    }
  }, {
    key: 'stack',
    get: function get$$1() {
      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of Slate 0.42, the `editor.stack` property no longer exists, and its functionality has been folded into the editor itself. Use the `editor` instead.');
    }
  }]);
  return Editor$$1;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/**
 * Export.
 *
 * @type {Component}
 */

Editor$1.propTypes = _extends({
  autoCorrect: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  options: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.any,
  plugins: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  role: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  schema: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  spellCheck: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  style: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  value: slate_prop_types__WEBPACK_IMPORTED_MODULE_11__["default"].value.isRequired
}, EVENT_HANDLERS.reduce(function (obj, handler) {
  obj[handler] = prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func;
  return obj;
}, {}));
Editor$1.defaultProps = {
  autoFocus: false,
  autoCorrect: true,
  onChange: function onChange() {},
  options: {},
  placeholder: '',
  plugins: [],
  readOnly: false,
  schema: {},
  spellCheck: true };

var index = {
  Editor: Editor$1,
  cloneFragment: cloneFragment,
  findDOMNode: findDOMNode,
  findDOMRange: findDOMRange,
  findNode: findNode,
  findRange: findRange,
  getEventRange: getEventRange,
  getEventTransfer: getEventTransfer,
  setEventTransfer: setEventTransfer,
  ReactPlugin: ReactPlugin
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=slate-react.es.js.map


/***/ }),

/***/ "./node_modules/slate-react/node_modules/memoize-one/dist/memoize-one.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/slate-react/node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var simpleIsEqual = function simpleIsEqual(a, b) {
  return a === b;
};

function index (resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = simpleIsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var isNewArgEqualToLast = function isNewArgEqualToLast(newArg, index) {
    return isEqual(newArg, lastArgs[index]);
  };

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/slate-react/node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/slate-react/node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var index = (function (condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    console.warn(message);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/slate/lib/slate.es.js":
/*!********************************************!*\
  !*** ./node_modules/slate/lib/slate.es.js ***!
  \********************************************/
/*! exports provided: default, Block, Change, Data, Decoration, Document, Editor, Inline, KeyUtils, Leaf, Mark, Node, Operation, PathUtils, Point, Range, resetMemoization, Selection, Text, TextUtils, useMemoization, Value */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Change", function() { return Change; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Decoration", function() { return Decoration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editor", function() { return Editor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inline", function() { return Inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyUtils", function() { return KeyUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Leaf", function() { return Leaf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mark", function() { return Mark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathUtils", function() { return PathUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetMemoization", function() { return resetMemoization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Selection", function() { return Selection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextUtils", function() { return TextUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemoization", function() { return useMemoization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Value", function() { return Value; });
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");
/* harmony import */ var is_plain_object__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_plain_object__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/slate/node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tiny-invariant */ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var esrever__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! esrever */ "./node_modules/esrever/esrever.js");
/* harmony import */ var esrever__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(esrever__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! direction */ "./node_modules/direction/index.js");
/* harmony import */ var direction__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(direction__WEBPACK_IMPORTED_MODULE_8__);










/**
 * An auto-incrementing index for generating keys.
 *
 * @type {Number}
 */

var n = void 0;

/**
 * The global key generating function.
 *
 * @type {Function}
 */

var generate = void 0;

/**
 * Create a key, using a provided key if available.
 *
 * @param {String|Void} key
 * @return {String}
 */

function create(key) {
  if (key == null) {
    return generate();
  }

  if (typeof key === 'string') {
    return key;
  }

  throw new Error('Keys must be strings, but you passed: ' + key);
}

/**
 * Set a different unique ID generating `function`.
 *
 * @param {Function} func
 */

function setGenerator(func) {
  generate = func;
}

/**
 * Reset the key generating function to its initial state.
 */

function resetGenerator() {
  n = 0;
  generate = function generate() {
    return '' + n++;
  };
}

/**
 * Set the initial state.
 */

resetGenerator();

/**
 * Export.
 *
 * @type {Object}
 */

var KeyUtils = {
  create: create,
  setGenerator: setGenerator,
  resetGenerator: resetGenerator
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
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





var defineProperty = function (obj, key, value) {
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
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/**
 * Data.
 *
 * This isn't an immutable record, it's just a thin wrapper around `Map` so that
 * we can allow for more convenient creation.
 *
 * @type {Object}
 */

var Data = function () {
  function Data() {
    classCallCheck(this, Data);
  }

  createClass(Data, null, [{
    key: 'create',

    /**
     * Create a new `Data` with `attrs`.
     *
     * @param {Object|Data|Map} attrs
     * @return {Data} data
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["Map"].isMap(attrs)) {
        return attrs;
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Data.fromJSON(attrs);
      }

      throw new Error('`Data.create` only accepts objects or maps, but you passed it: ' + attrs);
    }

    /**
     * Create a `Data` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Data}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      return new immutable__WEBPACK_IMPORTED_MODULE_1__["Map"](object);
    }

    /**
     * Alias `fromJS`.
     */

  }]);
  return Data;
}();

/**
 * Export.
 *
 * @type {Object}
 */

Data.fromJS = Data.fromJSON;

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS = {
  data: undefined,
  key: undefined,
  nodes: undefined

  /**
   * Document.
   *
   * @type {Document}
   */

};
var Document = function (_Record) {
  inherits(Document, _Record);

  function Document() {
    classCallCheck(this, Document);
    return possibleConstructorReturn(this, (Document.__proto__ || Object.getPrototypeOf(Document)).apply(this, arguments));
  }

  createClass(Document, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the document.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Document` with `attrs`.
     *
     * @param {Object|Array|List|Text} attrs
     * @return {Document}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Document.isDocument(attrs)) {
        return attrs;
      }

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(attrs) || Array.isArray(attrs)) {
        attrs = { nodes: attrs };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Document.fromJSON(attrs);
      }

      throw new Error('`Document.create` only accepts objects, arrays, lists or documents, but you passed it: ' + attrs);
    }

    /**
     * Create a `Document` from a JSON `object`.
     *
     * @param {Object|Document} object
     * @return {Document}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Document.isDocument(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$key = object.key,
          key = _object$key === undefined ? KeyUtils.create() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes;


      var document = new Document({
        key: key,
        data: new immutable__WEBPACK_IMPORTED_MODULE_1__["Map"](data),
        nodes: Node.createList(nodes)
      });

      return document;
    }
  }]);
  return Document;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$1 = {
  data: undefined,
  key: undefined,
  nodes: undefined,
  type: undefined

  /**
   * Inline.
   *
   * @type {Inline}
   */

};
var Inline = function (_Record) {
  inherits(Inline, _Record);

  function Inline() {
    classCallCheck(this, Inline);
    return possibleConstructorReturn(this, (Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(this, arguments));
  }

  createClass(Inline, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the inline.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        type: this.type,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Inline` with `attrs`.
     *
     * @param {Object|String|Inline} attrs
     * @return {Inline}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Inline.isInline(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { type: attrs };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Inline.fromJSON(attrs);
      }

      throw new Error('`Inline.create` only accepts objects, strings or inlines, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Inlines` from an array.
     *
     * @param {Array<Inline|Object>|List<Inline|Object>} elements
     * @return {List<Inline>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"](elements.map(Inline.create));
        return list;
      }

      throw new Error('`Inline.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Inline` from a JSON `object`.
     *
     * @param {Object|Inline} object
     * @return {Inline}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Inline.isInline(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$key = object.key,
          key = _object$key === undefined ? KeyUtils.create() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes,
          type = object.type;


      if (typeof type != 'string') {
        throw new Error('`Inline.fromJS` requires a `type` string.');
      }

      var inline = new Inline({
        key: key,
        type: type,
        data: new immutable__WEBPACK_IMPORTED_MODULE_1__["Map"](data),
        nodes: Node.createList(nodes)
      });

      return inline;
    }

    /**
     * Check if `any` is a list of inlines.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isInlineList',
    value: function isInlineList(any) {
      return immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(any) && any.every(function (item) {
        return Inline.isInline(item);
      });
    }
  }]);
  return Inline;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$1));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$2 = {
  data: undefined,
  type: undefined

  /**
   * Mark.
   *
   * @type {Mark}
   */

};
var Mark = function (_Record) {
  inherits(Mark, _Record);

  function Mark() {
    classCallCheck(this, Mark);
    return possibleConstructorReturn(this, (Mark.__proto__ || Object.getPrototypeOf(Mark)).apply(this, arguments));
  }

  createClass(Mark, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the mark.
     *
     * @return {Object}
     */

    value: function toJSON() {
      var object = {
        object: this.object,
        type: this.type,
        data: this.data.toJSON()
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Mark` with `attrs`.
     *
     * @param {Object|Mark} attrs
     * @return {Mark}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Mark.isMark(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { type: attrs };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Mark.fromJSON(attrs);
      }

      throw new Error('`Mark.create` only accepts objects, strings or marks, but you passed it: ' + attrs);
    }

    /**
     * Create a set of marks.
     *
     * @param {Array<Object|Mark>} elements
     * @return {Set<Mark>}
     */

  }, {
    key: 'createSet',
    value: function createSet(elements) {
      if (immutable__WEBPACK_IMPORTED_MODULE_1__["Set"].isSet(elements) || Array.isArray(elements)) {
        var marks = new immutable__WEBPACK_IMPORTED_MODULE_1__["Set"](elements.map(Mark.create));
        return marks;
      }

      if (elements == null) {
        return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
      }

      throw new Error('`Mark.createSet` only accepts sets, arrays or null, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable mark properties from `attrs`.
     *
     * @param {Object|String|Mark} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Mark.isMark(attrs)) {
        return {
          data: attrs.data,
          type: attrs.type
        };
      }

      if (typeof attrs == 'string') {
        return { type: attrs };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        var props = {};
        if ('type' in attrs) props.type = attrs.type;
        if ('data' in attrs) props.data = Data.create(attrs.data);
        return props;
      }

      throw new Error('`Mark.createProperties` only accepts objects, strings or marks, but you passed it: ' + attrs);
    }

    /**
     * Create a `Mark` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Mark}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          type = object.type;


      if (typeof type != 'string') {
        throw new Error('`Mark.fromJS` requires a `type` string.');
      }

      var mark = new Mark({
        type: type,
        data: new immutable__WEBPACK_IMPORTED_MODULE_1__["Map"](data)
      });

      return mark;
    }

    /**
     * Check if `any` is a set of marks.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isMarkSet',
    value: function isMarkSet(any) {
      return immutable__WEBPACK_IMPORTED_MODULE_1__["Set"].isSet(any) && any.every(function (item) {
        return Mark.isMark(item);
      });
    }
  }]);
  return Mark;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$2));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$3 = {
  marks: undefined,
  text: undefined

  /**
   * Leaf.
   *
   * @type {Leaf}
   */

};
var Leaf = function (_Record) {
  inherits(Leaf, _Record);

  function Leaf() {
    classCallCheck(this, Leaf);
    return possibleConstructorReturn(this, (Leaf.__proto__ || Object.getPrototypeOf(Leaf)).apply(this, arguments));
  }

  createClass(Leaf, [{
    key: 'updateMark',


    /**
     * Update a `mark` at leaf, replace with newMark
     *
     * @param {Mark} mark
     * @param {Mark} newMark
     * @returns {Leaf}
     */

    value: function updateMark(mark, newMark) {
      var marks = this.marks;

      if (newMark.equals(mark)) return this;
      if (!marks.has(mark)) return this;
      var newMarks = marks.withMutations(function (collection) {
        collection.remove(mark).add(newMark);
      });
      return this.set('marks', newMarks);
    }

    /**
     * Add a `mark` to the leaf.
     *
     * @param {Mark} mark
     * @returns {Text}
     */

  }, {
    key: 'addMark',
    value: function addMark(mark) {
      var marks = this.marks;

      return this.set('marks', marks.add(mark));
    }

    /**
     * Add a `set` of marks to the leaf.
     *
     * @param {Set<Mark>} set
     * @returns {Text}
     */

  }, {
    key: 'addMarks',
    value: function addMarks(set$$1) {
      var marks = this.marks;

      return this.set('marks', marks.union(set$$1));
    }

    /**
     * Insert a text `string` into the leaf at `offset`.
     *
     * @param {Number} offset
     * @param {String} string
     * @return {Leaf}
     */

  }, {
    key: 'insertText',
    value: function insertText(offset, string) {
      var text = this.text;

      var next = text.slice(0, offset) + string + text.slice(offset);
      return this.set('text', next);
    }

    /**
     * Remove a `mark` from the leaf.
     *
     * @param {Mark} mark
     * @returns {Text}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(mark) {
      var marks = this.marks;

      return this.set('marks', marks.remove(mark));
    }

    /**
     * Return a JSON representation of the leaf.
     *
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = {
        object: this.object,
        text: this.text,
        marks: this.marks.toArray().map(function (m) {
          return m.toJSON();
        })
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Leaf` with `attrs`.
     *
     * @param {Object|Leaf} attrs
     * @return {Leaf}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Leaf.isLeaf(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { text: attrs };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Leaf.fromJSON(attrs);
      }

      throw new Error('`Leaf.create` only accepts objects, strings or leaves, but you passed it: ' + attrs);
    }

    /**
     * Create a valid List of `Leaf` from `leaves`
     *
     * @param {List<Leaf>} leaves
     * @return {List<Leaf>}
     */

  }, {
    key: 'createLeaves',
    value: function createLeaves(leaves) {
      if (leaves.size <= 1) return leaves;

      var invalid = false;

      // TODO: we can make this faster with [List] and then flatten
      var result = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])().withMutations(function (cache) {
        // Search from the leaves left end to find invalid node;
        leaves.findLast(function (leaf, index) {
          var firstLeaf = cache.first();

          // If the first leaf of cache exist, check whether the first leaf is connectable with the current leaf
          if (firstLeaf) {
            // If marks equals, then the two leaves can be connected
            if (firstLeaf.marks.equals(leaf.marks)) {
              invalid = true;
              cache.set(0, firstLeaf.set('text', '' + leaf.text + firstLeaf.text));
              return;
            }

            // If the cached leaf is empty, drop the empty leaf with the upcoming leaf
            if (firstLeaf.text === '') {
              invalid = true;
              cache.set(0, leaf);
              return;
            }

            // If the current leaf is empty, drop the leaf
            if (leaf.text === '') {
              invalid = true;
              return;
            }
          }

          cache.unshift(leaf);
        });
      });

      if (!invalid) return leaves;
      return result;
    }

    /**
     * Split a list of leaves to two lists; if the leaves are valid leaves, the returned leaves are also valid
     * Corner Cases:
     *   1. if offset is smaller than 0, then return [List(), leaves]
     *   2. if offset is bigger than the text length, then return [leaves, List()]
     *
     * @param {List<Leaf> leaves
     * @return {Array<List<Leaf>>}
     */

  }, {
    key: 'splitLeaves',
    value: function splitLeaves(leaves, offset) {
      if (offset < 0) return [Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(), leaves];

      if (leaves.size === 0) {
        return [Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(), Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])()];
      }

      var endOffset = 0;
      var index = -1;
      var left = void 0,
          right = void 0;

      leaves.find(function (leaf) {
        index++;
        var startOffset = endOffset;
        var text = leaf.text;

        endOffset += text.length;

        if (endOffset < offset) return false;
        if (startOffset > offset) return false;

        var length = offset - startOffset;
        left = leaf.set('text', text.slice(0, length));
        right = leaf.set('text', text.slice(length));
        return true;
      });

      if (!left) return [leaves, Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])()];

      if (left.text === '') {
        if (index === 0) {
          return [immutable__WEBPACK_IMPORTED_MODULE_1__["List"].of(left), leaves];
        }

        return [leaves.take(index), leaves.skip(index)];
      }

      if (right.text === '') {
        if (index === leaves.size - 1) {
          return [leaves, immutable__WEBPACK_IMPORTED_MODULE_1__["List"].of(right)];
        }

        return [leaves.take(index + 1), leaves.skip(index + 1)];
      }

      return [leaves.take(index).push(left), leaves.skip(index + 1).unshift(right)];
    }

    /**
     * Create a `Leaf` list from `attrs`.
     *
     * @param {Array<Leaf|Object>|List<Leaf|Object>} attrs
     * @return {List<Leaf>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(attrs) || Array.isArray(attrs)) {
        var list = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"](attrs.map(Leaf.create));
        return list;
      }

      throw new Error('`Leaf.createList` only accepts arrays or lists, but you passed it: ' + attrs);
    }

    /**
     * Create a `Leaf` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Leaf}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$text = object.text,
          text = _object$text === undefined ? '' : _object$text,
          _object$marks = object.marks,
          marks = _object$marks === undefined ? [] : _object$marks;


      var leaf = new Leaf({
        text: text,
        marks: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])(marks.map(Mark.fromJSON))
      });

      return leaf;
    }

    /**
     * Check if `any` is a list of leaves.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isLeafList',
    value: function isLeafList(any) {
      return immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(any) && any.every(function (item) {
        return Leaf.isLeaf(item);
      });
    }
  }]);
  return Leaf;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$3));

/**
 * GLOBAL: True if memoization should is enabled.
 *
 * @type {Boolean}
 */

var ENABLED = true;

/**
 * GLOBAL: Changing this cache key will clear all previous cached results.
 *
 * @type {Number}
 */

var CACHE_KEY = 0;

/**
 * The leaf node of a cache tree. Used to support variable argument length. A
 * unique object, so that native Maps will key it by reference.
 *
 * @type {Object}
 */

var LEAF = {};

/**
 * A value to represent a memoized undefined value. Allows efficient value
 * retrieval using Map.get only.
 *
 * @type {Object}
 */

var UNDEFINED = {};

/**
 * Default value for unset keys in native Maps
 *
 * @type {Undefined}
 */

var UNSET = undefined;

/**
 * Memoize all of the `properties` on a `object`.
 *
 * @param {Object} object
 * @param {Array} properties
 * @return {Record}
 */

function memoize(object, properties) {
  var _loop = function _loop(property) {
    var original = object[property];

    if (!original) {
      throw new Error("Object does not have a property named \"" + property + "\".");
    }

    object[property] = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // If memoization is disabled, call into the original method.
      if (!ENABLED) return original.apply(this, args);

      // If the cache key is different, previous caches must be cleared.
      if (CACHE_KEY !== this.__cache_key) {
        this.__cache_key = CACHE_KEY;
        this.__cache = new Map(); // eslint-disable-line no-undef,no-restricted-globals
        this.__cache_no_args = {};
      }

      if (!this.__cache) {
        this.__cache = new Map(); // eslint-disable-line no-undef,no-restricted-globals
      }

      if (!this.__cache_no_args) {
        this.__cache_no_args = {};
      }

      var takesArguments = args.length !== 0;

      var cachedValue = void 0;
      var keys = void 0;

      if (takesArguments) {
        keys = [property].concat(args);
        cachedValue = getIn(this.__cache, keys);
      } else {
        cachedValue = this.__cache_no_args[property];
      }

      // If we've got a result already, return it.
      if (cachedValue !== UNSET) {
        return cachedValue === UNDEFINED ? undefined : cachedValue;
      }

      // Otherwise calculate what it should be once and cache it.
      var value = original.apply(this, args);
      var v = value === undefined ? UNDEFINED : value;

      if (takesArguments) {
        this.__cache = setIn(this.__cache, keys, v);
      } else {
        this.__cache_no_args[property] = v;
      }

      return value;
    };
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var property = _step.value;

      _loop(property);
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
}

/**
 * Get a value at a key path in a tree of Map.
 *
 * If not set, returns UNSET.
 * If the set value is undefined, returns UNDEFINED.
 *
 * @param {Map} map
 * @param {Array} keys
 * @return {Any|UNSET|UNDEFINED}
 */

function getIn(map, keys) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;

      map = map.get(key);
      if (map === UNSET) return UNSET;
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

  return map.get(LEAF);
}

/**
 * Set a value at a key path in a tree of Map, creating Maps on the go.
 *
 * @param {Map} map
 * @param {Array} keys
 * @param {Any} value
 * @return {Map}
 */

function setIn(map, keys, value) {
  var parent = map;
  var child = void 0;

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;

      child = parent.get(key);

      // If the path was not created yet...
      if (child === UNSET) {
        child = new Map(); // eslint-disable-line no-undef,no-restricted-globals
        parent.set(key, child);
      }

      parent = child;
    }

    // The whole path has been created, so set the value to the bottom most map.
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  child.set(LEAF, value);
  return map;
}

/**
 * In DEV mode, clears the previously memoized values, globally.
 *
 * @return {Void}
 */

function resetMemoization() {
  CACHE_KEY++;

  if (CACHE_KEY >= Number.MAX_SAFE_INTEGER) {
    CACHE_KEY = 0;
  }
}

/**
 * In DEV mode, enable or disable the use of memoize values, globally.
 *
 * @param {Boolean} enabled
 * @return {Void}
 */

function useMemoization(enabled) {
  ENABLED = enabled;
}

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$4 = {
  leaves: undefined,
  key: undefined

  /**
   * Text.
   *
   * @type {Text}
   */

};
var Text = function (_Record) {
  inherits(Text, _Record);

  function Text() {
    classCallCheck(this, Text);
    return possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
  }

  createClass(Text, [{
    key: 'searchLeafAtOffset',


    /**
     * Find the 'first' leaf at offset; By 'first' the alorighthm prefers `endOffset === offset` than `startOffset === offset`
     * Corner Cases:
     *   1. if offset is negative, return the first leaf;
     *   2. if offset is larger than text length, the leaf is null, startOffset, endOffset and index is of the last leaf
     *
     * @param {number}
     * @returns {Object}
     *   @property {number} startOffset
     *   @property {number} endOffset
     *   @property {number} index
     *   @property {Leaf} leaf
     */

    value: function searchLeafAtOffset(offset) {
      var endOffset = 0;
      var startOffset = 0;
      var index = -1;

      var leaf = this.leaves.find(function (l) {
        index++;
        startOffset = endOffset;
        endOffset = startOffset + l.text.length;
        return endOffset >= offset;
      });

      return {
        leaf: leaf,
        endOffset: endOffset,
        index: index,
        startOffset: startOffset
      };
    }

    /**
     * Add a `mark` at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @return {Text}
     */

  }, {
    key: 'addMark',
    value: function addMark(index, length, mark) {
      var marks = immutable__WEBPACK_IMPORTED_MODULE_1__["Set"].of(mark);
      return this.addMarks(index, length, marks);
    }

    /**
     * Add a `set` of marks at `index` and `length`.
     * Corner Cases:
     *   1. If empty text, and if length === 0 and index === 0, will make sure the text contain an empty leaf with the given mark.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Set<Mark>} set
     * @return {Text}
     */

  }, {
    key: 'addMarks',
    value: function addMarks(index, length, set$$1) {
      if (this.text === '' && length === 0 && index === 0) {
        var _leaves = this.leaves;

        var first = _leaves.first();

        if (!first) {
          return this.set('leaves', immutable__WEBPACK_IMPORTED_MODULE_1__["List"].of(Leaf.fromJSON({ text: '', marks: set$$1 })));
        }

        var newFirst = first.addMarks(set$$1);
        if (newFirst === first) return this;
        return this.set('leaves', immutable__WEBPACK_IMPORTED_MODULE_1__["List"].of(newFirst));
      }

      if (this.text === '') return this;
      if (length === 0) return this;
      if (index >= this.text.length) return this;

      var _Leaf$splitLeaves = Leaf.splitLeaves(this.leaves, index),
          _Leaf$splitLeaves2 = slicedToArray(_Leaf$splitLeaves, 2),
          before = _Leaf$splitLeaves2[0],
          bundle = _Leaf$splitLeaves2[1];

      var _Leaf$splitLeaves3 = Leaf.splitLeaves(bundle, length),
          _Leaf$splitLeaves4 = slicedToArray(_Leaf$splitLeaves3, 2),
          middle = _Leaf$splitLeaves4[0],
          after = _Leaf$splitLeaves4[1];

      var leaves = before.concat(middle.map(function (x) {
        return x.addMarks(set$$1);
      }), after);
      return this.setLeaves(leaves);
    }

    /**
     * Derive the leaves for a list of `decorations`.
     *
     * @param {List} decorations (optional)
     * @return {List<Leaf>}
     */

  }, {
    key: 'getLeaves',
    value: function getLeaves(decorations) {
      var leaves = this.leaves;

      // PERF: We can exit early without decorations.

      if (!decorations || decorations.size === 0) return leaves;

      // HACK: We shouldn't need this, because text nodes should never be in a
      // position of not having any leaves...
      if (leaves.size === 0) {
        var marks = decorations.map(function (d) {
          return d.mark;
        });
        var leaf = Leaf.create({ marks: marks });
        return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([leaf]);
      }

      // HACK: this shouldn't be necessary, because the loop below should handle
      // the `0` case without failures. It may already even, not sure.
      if (this.text.length === 0) {
        var _marks = decorations.map(function (d) {
          return d.mark;
        });
        var _leaf = Leaf.create({ marks: _marks });
        return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([_leaf]);
      }

      var key = this.key,
          text = this.text;


      decorations.forEach(function (dec) {
        var start = dec.start,
            end = dec.end,
            mark = dec.mark;

        var hasStart = start.key == key;
        var hasEnd = end.key == key;

        if (hasStart && hasEnd) {
          var index = hasStart ? start.offset : 0;
          var length = hasEnd ? end.offset - index : text.length - index;

          if (length < 1) return;
          if (index >= text.length) return;

          if (index !== 0 || length < text.length) {
            var _Leaf$splitLeaves5 = Leaf.splitLeaves(leaves, index),
                _Leaf$splitLeaves6 = slicedToArray(_Leaf$splitLeaves5, 2),
                before = _Leaf$splitLeaves6[0],
                bundle = _Leaf$splitLeaves6[1];

            var _Leaf$splitLeaves7 = Leaf.splitLeaves(bundle, length),
                _Leaf$splitLeaves8 = slicedToArray(_Leaf$splitLeaves7, 2),
                middle = _Leaf$splitLeaves8[0],
                after = _Leaf$splitLeaves8[1];

            leaves = before.concat(middle.map(function (x) {
              return x.addMark(mark);
            }), after);
            return;
          }
        }

        leaves = leaves.map(function (x) {
          return x.addMark(mark);
        });
      });

      if (leaves === this.leaves) return leaves;
      return Leaf.createLeaves(leaves);
    }

    /**
     * Get all of the active marks on between two offsets
     * Corner Cases:
     *   1. if startOffset is equal or bigger than endOffset, then return Set();
     *   2. If no text is selected between start and end, then return Set()
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'getActiveMarksBetweenOffsets',
    value: function getActiveMarksBetweenOffsets(startOffset, endOffset) {
      if (startOffset <= 0 && endOffset >= this.text.length) {
        return this.getActiveMarks();
      }

      if (startOffset >= endOffset) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
      // For empty text in a paragraph, use getActiveMarks;
      if (this.text === '') return this.getActiveMarks();

      var result = null;
      var leafEnd = 0;

      this.leaves.forEach(function (leaf) {
        var leafStart = leafEnd;
        leafEnd = leafStart + leaf.text.length;

        if (leafEnd <= startOffset) return;
        if (leafStart >= endOffset) return false;

        if (!result) {
          result = leaf.marks;
          return;
        }

        result = result.intersect(leaf.marks);
        if (result && result.size === 0) return false;
        return false;
      });

      return result || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
    }

    /**
     * Get all of the active marks on the text
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'getActiveMarks',
    value: function getActiveMarks() {
      var _this2 = this;

      if (this.leaves.size === 0) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();

      var result = this.leaves.first().marks;
      if (result.size === 0) return result;

      return result.toOrderedSet().withMutations(function (x) {
        _this2.leaves.forEach(function (c) {
          x.intersect(c.marks);
          if (x.size === 0) return false;
        });
      });
    }

    /**
     * Get all of the marks on between two offsets
     * Corner Cases:
     *   1. if startOffset is equal or bigger than endOffset, then return Set();
     *   2. If no text is selected between start and end, then return Set()
     *
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getMarksBetweenOffsets',
    value: function getMarksBetweenOffsets(startOffset, endOffset) {
      if (startOffset <= 0 && endOffset >= this.text.length) {
        return this.getMarks();
      }

      if (startOffset >= endOffset) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
      // For empty text in a paragraph, use getActiveMarks;
      if (this.text === '') return this.getActiveMarks();

      var result = null;
      var leafEnd = 0;

      this.leaves.forEach(function (leaf) {
        var leafStart = leafEnd;
        leafEnd = leafStart + leaf.text.length;

        if (leafEnd <= startOffset) return;
        if (leafStart >= endOffset) return false;

        if (!result) {
          result = leaf.marks;
          return;
        }

        result = result.union(leaf.marks);
      });

      return result || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
    }

    /**
     * Get all of the marks on the text.
     *
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getMarks',
    value: function getMarks() {
      var array = this.getMarksAsArray();
      return new immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"](array);
    }

    /**
     * Get all of the marks on the text as an array
     *
     * @return {Array}
     */

  }, {
    key: 'getMarksAsArray',
    value: function getMarksAsArray() {
      if (this.leaves.size === 0) return [];
      var first = this.leaves.first().marks;
      if (this.leaves.size === 1) return first.toArray();

      var result = [];

      this.leaves.forEach(function (leaf) {
        result.push(leaf.marks.toArray());
      });

      return Array.prototype.concat.apply(first.toArray(), result);
    }

    /**
     * Get the marks on the text at `index`.
     * Corner Cases:
     *   1. if no text is before the index, and index !== 0, then return Set()
     *   2. (for insert after split node or mark at range) if index === 0, and text === '', then return the leaf.marks
     *   3. if index === 0, text !== '', return Set()
     *
     *
     * @param {Number} index
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksAtIndex',
    value: function getMarksAtIndex(index) {
      var _searchLeafAtOffset = this.searchLeafAtOffset(index),
          leaf = _searchLeafAtOffset.leaf;

      if (!leaf) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
      return leaf.marks;
    }

    /**
     * Insert `text` at `index`.
     *
     * @param {Numbder} offset
     * @param {String} text
     * @param {Set} marks (optional)
     * @return {Text}
     */

  }, {
    key: 'insertText',
    value: function insertText(offset, text, marks) {
      if (this.text === '') {
        return this.set('leaves', immutable__WEBPACK_IMPORTED_MODULE_1__["List"].of(Leaf.create({ text: text, marks: marks })));
      }

      if (text.length === 0) return this;
      if (!marks) marks = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();

      var _searchLeafAtOffset2 = this.searchLeafAtOffset(offset),
          startOffset = _searchLeafAtOffset2.startOffset,
          leaf = _searchLeafAtOffset2.leaf,
          index = _searchLeafAtOffset2.index;

      var delta = offset - startOffset;
      var beforeText = leaf.text.slice(0, delta);
      var afterText = leaf.text.slice(delta);
      var leaves = this.leaves;


      if (leaf.marks.equals(marks)) {
        return this.set('leaves', leaves.set(index, leaf.set('text', beforeText + text + afterText)));
      }

      var nextLeaves = leaves.splice(index, 1, leaf.set('text', beforeText), Leaf.create({ text: text, marks: marks }), leaf.set('text', afterText));

      return this.setLeaves(nextLeaves);
    }

    /**
     * Remove a `mark` at `index` and `length`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @return {Text}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(index, length, mark) {
      if (this.text === '' && index === 0 && length === 0) {
        var first = this.leaves.first();
        if (!first) return this;
        var newFirst = first.removeMark(mark);
        if (newFirst === first) return this;
        return this.set('leaves', immutable__WEBPACK_IMPORTED_MODULE_1__["List"].of(newFirst));
      }

      if (length <= 0) return this;
      if (index >= this.text.length) return this;

      var _Leaf$splitLeaves9 = Leaf.splitLeaves(this.leaves, index),
          _Leaf$splitLeaves10 = slicedToArray(_Leaf$splitLeaves9, 2),
          before = _Leaf$splitLeaves10[0],
          bundle = _Leaf$splitLeaves10[1];

      var _Leaf$splitLeaves11 = Leaf.splitLeaves(bundle, length),
          _Leaf$splitLeaves12 = slicedToArray(_Leaf$splitLeaves11, 2),
          middle = _Leaf$splitLeaves12[0],
          after = _Leaf$splitLeaves12[1];

      var leaves = before.concat(middle.map(function (x) {
        return x.removeMark(mark);
      }), after);
      return this.setLeaves(leaves);
    }

    /**
     * Remove text from the text node at `start` for `length`.
     *
     * @param {Number} start
     * @param {Number} length
     * @return {Text}
     */

  }, {
    key: 'removeText',
    value: function removeText(start, length) {
      if (length <= 0) return this;
      if (start >= this.text.length) return this;

      // PERF: For simple backspace, we can operate directly on the leaf
      if (length === 1) {
        var _searchLeafAtOffset3 = this.searchLeafAtOffset(start + 1),
            leaf = _searchLeafAtOffset3.leaf,
            index = _searchLeafAtOffset3.index,
            startOffset = _searchLeafAtOffset3.startOffset;

        var offset = start - startOffset;

        if (leaf) {
          if (leaf.text.length === 1) {
            var _leaves2 = this.leaves.remove(index);
            return this.setLeaves(_leaves2);
          }

          var beforeText = leaf.text.slice(0, offset);
          var afterText = leaf.text.slice(offset + length);
          var text = beforeText + afterText;

          if (text.length > 0) {
            return this.set('leaves', this.leaves.set(index, leaf.set('text', text)));
          }
        }
      }

      var _Leaf$splitLeaves13 = Leaf.splitLeaves(this.leaves, start),
          _Leaf$splitLeaves14 = slicedToArray(_Leaf$splitLeaves13, 2),
          before = _Leaf$splitLeaves14[0],
          bundle = _Leaf$splitLeaves14[1];

      var after = Leaf.splitLeaves(bundle, length)[1];
      var leaves = Leaf.createLeaves(before.concat(after));

      if (leaves.size === 1) {
        var first = leaves.first();

        if (first.text === '') {
          return this.set('leaves', immutable__WEBPACK_IMPORTED_MODULE_1__["List"].of(first.set('marks', this.getActiveMarks())));
        }
      }

      return this.set('leaves', leaves);
    }

    /**
     * Return a JSON representation of the text.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        leaves: this.getLeaves().toArray().map(function (r) {
          return r.toJSON();
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }

    /**
     * Update a `mark` at `index` and `length` with `properties`.
     *
     * @param {Number} index
     * @param {Number} length
     * @param {Mark} mark
     * @param {Object} properties
     * @return {Text}
     */

  }, {
    key: 'updateMark',
    value: function updateMark(index, length, mark, properties) {
      var newMark = mark.merge(properties);

      if (this.text === '' && length === 0 && index === 0) {
        var _leaves3 = this.leaves;

        var first = _leaves3.first();
        if (!first) return this;
        var newFirst = first.updateMark(mark, newMark);
        if (newFirst === first) return this;
        return this.set('leaves', immutable__WEBPACK_IMPORTED_MODULE_1__["List"].of(newFirst));
      }

      if (length <= 0) return this;
      if (index >= this.text.length) return this;

      var _Leaf$splitLeaves15 = Leaf.splitLeaves(this.leaves, index),
          _Leaf$splitLeaves16 = slicedToArray(_Leaf$splitLeaves15, 2),
          before = _Leaf$splitLeaves16[0],
          bundle = _Leaf$splitLeaves16[1];

      var _Leaf$splitLeaves17 = Leaf.splitLeaves(bundle, length),
          _Leaf$splitLeaves18 = slicedToArray(_Leaf$splitLeaves17, 2),
          middle = _Leaf$splitLeaves18[0],
          after = _Leaf$splitLeaves18[1];

      var leaves = before.concat(middle.map(function (x) {
        return x.updateMark(mark, newMark);
      }), after);

      return this.setLeaves(leaves);
    }

    /**
     * Split this text and return two different texts
     * @param {Number} position
     * @returns {Array<Text>}
     */

  }, {
    key: 'splitText',
    value: function splitText(offset) {
      var splitted = Leaf.splitLeaves(this.leaves, offset);
      var one = this.set('leaves', splitted[0]);
      var two = this.set('leaves', splitted[1]).regenerateKey();
      return [one, two];
    }

    /**
     * merge this text and another text at the end
     * @param {Text} text
     * @returns {Text}
     */

  }, {
    key: 'mergeText',
    value: function mergeText(text) {
      var leaves = this.leaves.concat(text.leaves);
      return this.setLeaves(leaves);
    }

    /**
     * Set leaves with normalized `leaves`
     *
     * @param {List} leaves
     * @returns {Text}
     */

  }, {
    key: 'setLeaves',
    value: function setLeaves(leaves) {
      leaves = Leaf.createLeaves(leaves);

      if (leaves.size === 1) {
        var first = leaves.first();

        if (!first.marks || first.marks.size === 0) {
          if (first.text === '') {
            return this.set('leaves', Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([Leaf.create()]));
          }
        }
      }

      if (leaves.size === 0) {
        leaves = leaves.push(Leaf.create());
      }

      return this.set('leaves', leaves);
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Text` with `attrs`.
     *
     * @param {Object|Array|List|String|Text} attrs
     * @return {Text}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (Text.isText(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { leaves: [{ text: attrs }] };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        if (attrs.text) {
          var _attrs = attrs,
              text = _attrs.text,
              marks = _attrs.marks,
              key = _attrs.key;

          attrs = { key: key, leaves: [{ text: text, marks: marks }] };
        }

        return Text.fromJSON(attrs);
      }

      throw new Error('`Text.create` only accepts objects, arrays, strings or texts, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Texts` from `elements`.
     *
     * @param {Array<Text|Object>|List<Text|Object>} elements
     * @return {List<Text>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"](elements.map(Text.create));
        return list;
      }

      throw new Error('`Text.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Text` from a JSON `object`.
     *
     * @param {Object|Text} object
     * @return {Text}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Text.isText(object)) {
        return object;
      }

      var _object$key = object.key,
          key = _object$key === undefined ? KeyUtils.create() : _object$key;
      var leaves = object.leaves;


      if (!leaves) {
        if (object.ranges) {
          Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.27.0, the `ranges` property of Slate objects has been renamed to `leaves`.');

          leaves = object.ranges;
        } else {
          leaves = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
        }
      }

      if (Array.isArray(leaves)) {
        leaves = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(leaves.map(function (x) {
          return Leaf.create(x);
        }));
      } else if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(leaves)) {
        leaves = leaves.map(function (x) {
          return Leaf.create(x);
        });
      } else {
        throw new Error('leaves must be either Array or Immutable.List');
      }

      if (leaves.size === 0) {
        leaves = leaves.push(Leaf.create());
      }

      var node = new Text({
        leaves: Leaf.createLeaves(leaves),
        key: key
      });

      return node;
    }

    /**
     * Check if `any` is a list of texts.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isTextList',
    value: function isTextList(any) {
      return immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(any) && any.every(function (item) {
        return Text.isText(item);
      });
    }
  }]);
  return Text;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$4));

/**
 * Memoize read methods.
 */

memoize(Text.prototype, ['getActiveMarks', 'getMarks', 'getMarksAsArray']);

/**
 * A pseudo-model that is used for its static methods only.
 *
 * @type {Node}
 */

var Node = function () {
  function Node() {
    classCallCheck(this, Node);
  }

  createClass(Node, null, [{
    key: 'create',

    /**
     * Create a new `Node` with `attrs`.
     *
     * @param {Object|Node} attrs
     * @return {Node}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Node.isNode(attrs)) {
        return attrs;
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        var object = attrs.object;


        if (!object && attrs.kind) {
          Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.32.0, the `kind` property of Slate objects has been renamed to `object`.');

          object = attrs.kind;
        }

        switch (object) {
          case 'block':
            return Block.create(attrs);
          case 'document':
            return Document.create(attrs);
          case 'inline':
            return Inline.create(attrs);
          case 'text':
            return Text.create(attrs);

          default:
            {
              throw new Error('`Node.create` requires a `object` string.');
            }
        }
      }

      throw new Error('`Node.create` only accepts objects or nodes but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Nodes` from an array.
     *
     * @param {Array<Object|Node>} elements
     * @return {List<Node>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(elements) || Array.isArray(elements)) {
        var list = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(elements.map(Node.create));
        return list;
      }

      throw new Error('`Node.createList` only accepts lists or arrays, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable node properties from `attrs`.
     *
     * @param {Object|String|Node} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Block.isBlock(attrs) || Inline.isInline(attrs)) {
        return {
          data: attrs.data,
          type: attrs.type
        };
      }

      if (typeof attrs == 'string') {
        return { type: attrs };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        var props = {};
        if ('type' in attrs) props.type = attrs.type;
        if ('data' in attrs) props.data = Data.create(attrs.data);
        return props;
      }

      throw new Error('`Node.createProperties` only accepts objects, strings, blocks or inlines, but you passed it: ' + attrs);
    }

    /**
     * Create a `Node` from a JSON `value`.
     *
     * @param {Object} value
     * @return {Node}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(value) {
      var object = value.object;


      if (!object && value.kind) {
        Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.32.0, the `kind` property of Slate objects has been renamed to `object`.');

        object = value.kind;
      }

      switch (object) {
        case 'block':
          return Block.fromJSON(value);
        case 'document':
          return Document.fromJSON(value);
        case 'inline':
          return Inline.fromJSON(value);
        case 'text':
          return Text.fromJSON(value);

        default:
          {
            throw new Error('`Node.fromJSON` requires an `object` of either \'block\', \'document\', \'inline\' or \'text\', but you passed: ' + value);
          }
      }
    }

    /**
     * Check if `any` is a `Node`.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isNode',
    value: function isNode(any) {
      return Block.isBlock(any) || Document.isDocument(any) || Inline.isInline(any) || Text.isText(any);
    }

    /**
     * Check if `any` is a list of nodes.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isNodeList',
    value: function isNodeList(any) {
      return immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(any) && any.every(function (item) {
        return Node.isNode(item);
      });
    }
  }]);
  return Node;
}();

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$5 = {
  data: undefined,
  key: undefined,
  nodes: undefined,
  type: undefined

  /**
   * Block.
   *
   * @type {Block}
   */

};
var Block = function (_Record) {
  inherits(Block, _Record);

  function Block() {
    classCallCheck(this, Block);
    return possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).apply(this, arguments));
  }

  createClass(Block, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the block.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        type: this.type,
        data: this.data.toJSON(),
        nodes: this.nodes.toArray().map(function (n) {
          return n.toJSON(options);
        })
      };

      if (options.preserveKeys) {
        object.key = this.key;
      }

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Block` from `attrs`.
     *
     * @param {Object|String|Block} attrs
     * @return {Block}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Block.isBlock(attrs)) {
        return attrs;
      }

      if (typeof attrs == 'string') {
        attrs = { type: attrs };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Block.fromJSON(attrs);
      }

      throw new Error('`Block.create` only accepts objects, strings or blocks, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Blocks` from `attrs`.
     *
     * @param {Array<Block|Object>|List<Block|Object>} attrs
     * @return {List<Block>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(attrs) || Array.isArray(attrs)) {
        var list = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"](attrs.map(Block.create));
        return list;
      }

      throw new Error('`Block.createList` only accepts arrays or lists, but you passed it: ' + attrs);
    }

    /**
     * Create a `Block` from a JSON `object`.
     *
     * @param {Object|Block} object
     * @return {Block}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Block.isBlock(object)) {
        return object;
      }

      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$key = object.key,
          key = _object$key === undefined ? KeyUtils.create() : _object$key,
          _object$nodes = object.nodes,
          nodes = _object$nodes === undefined ? [] : _object$nodes,
          type = object.type;


      if (typeof type != 'string') {
        throw new Error('`Block.fromJSON` requires a `type` string.');
      }

      var block = new Block({
        key: key,
        type: type,
        data: Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"])(data),
        nodes: Node.createList(nodes)
      });

      return block;
    }

    /**
     * Check if `any` is a block list.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isBlockList',
    value: function isBlockList(any) {
      return immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(any) && any.every(function (item) {
        return Block.isBlock(item);
      });
    }
  }]);
  return Block;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$5));

/**
 * Compare paths `path` and `target` to see which is before or after.
 *
 * @param {List} path
 * @param {List} target
 * @return {Number|Null}
 */

function compare(path, target) {
  var m = min(path, target);

  for (var i = 0; i < m; i++) {
    var pv = path.get(i);
    var tv = target.get(i);

    // If the path's value is ever less than the target's, it's before.
    if (pv < tv) return -1;

    // If the target's value is ever less than the path's, it's after.
    if (pv > tv) return 1;
  }

  // Paths should now be equal, otherwise something is wrong
  return path.size === target.size ? 0 : null;
}

/**
 * Create a path from `attrs`.
 *
 * @param {Array|List} attrs
 * @return {List}
 */

function create$1(attrs) {
  if (attrs == null) {
    return null;
  }

  if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(attrs)) {
    return attrs;
  }

  if (Array.isArray(attrs)) {
    return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(attrs);
  }

  throw new Error('Paths can only be created from arrays or lists, but you passed: ' + attrs);
}

/**
 * Crop paths `a` and `b` to an equal size, defaulting to the shortest.
 *
 * @param {List} a
 * @param {List} b
 */

function crop(a, b) {
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : min(a, b);

  var ca = a.slice(0, size);
  var cb = b.slice(0, size);
  return [ca, cb];
}

/**
 * Decrement a `path` by `n` at `index`, defaulting to the last index.
 *
 * @param {List} path
 * @param {Number} n
 * @param {Number} index
 */

function decrement(path) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : path.size - 1;

  return increment(path, 0 - n, index);
}

/**
 * Get all ancestor paths of th given path.
 *
 * @param {List} path
 * @returns {List}
 */

function getAncestors(path) {
  var ancestors = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"]();

  for (var i = 0; i < path.size; i++) {
    ancestors = ancestors.push(path.slice(0, i));
  }

  return ancestors;
}

/**
 * Increment a `path` by `n` at `index`, defaulting to the last index.
 *
 * @param {List} path
 * @param {Number} n
 * @param {Number} index
 */

function increment(path) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : path.size - 1;

  var value = path.get(index);
  var newValue = value + n;
  var newPath = path.set(index, newValue);
  return newPath;
}

/**
 * Is a `path` above another `target` path?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isAbove(path, target) {
  var _crop = crop(path, target),
      _crop2 = slicedToArray(_crop, 2),
      p = _crop2[0],
      t = _crop2[1];

  return path.size < target.size && compare(p, t) === 0;
}

/**
 * Is a `path` after another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isAfter(path, target) {
  var _crop3 = crop(path, target),
      _crop4 = slicedToArray(_crop3, 2),
      p = _crop4[0],
      t = _crop4[1];

  return compare(p, t) === 1;
}

/**
 * Is a `path` before another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isBefore(path, target) {
  var _crop5 = crop(path, target),
      _crop6 = slicedToArray(_crop5, 2),
      p = _crop6[0],
      t = _crop6[1];

  return compare(p, t) === -1;
}

/**
 * Is a `path` equal to another `target` path in a document?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isEqual(path, target) {
  return path.equals(target);
}

/**
 * Is a `path` older than a `target` path? Meaning that it ends as an older
 * sibling of one of the indexes in the target.
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isOlder(path, target) {
  var index = path.size - 1;

  var _crop7 = crop(path, target, index),
      _crop8 = slicedToArray(_crop7, 2),
      p = _crop8[0],
      t = _crop8[1];

  var pl = path.get(index);
  var tl = target.get(index);
  return isEqual(p, t) && pl > tl;
}

/**
 * Is a `path` a sibling of a `target` path?
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isSibling(path, target) {
  if (path.size !== target.size) return false;
  var p = path.butLast();
  var t = target.butLast();
  return p.equals(t);
}

/**
 * Is a `path` younger than a `target` path? Meaning that it ends as a younger
 * sibling of one of the indexes in the target.
 *
 * @param {List} path
 * @param {List} target
 * @return {Boolean}
 */

function isYounger(path, target) {
  var index = path.size - 1;

  var _crop9 = crop(path, target, index),
      _crop10 = slicedToArray(_crop9, 2),
      p = _crop10[0],
      t = _crop10[1];

  var pl = path.get(index);
  var tl = target.get(index);
  return isEqual(p, t) && pl < tl;
}

/**
 * Lift a `path` to refer to its parent.
 *
 * @param {List} path
 * @return {Array}
 */

function lift(path) {
  var parent = path.slice(0, -1);
  return parent;
}

/**
 * Get the maximum length of paths `a` and `b`.
 *
 * @param {List} path
 * @param {List} path
 * @return {Number}
 */

function max(a, b) {
  var n = Math.max(a.size, b.size);
  return n;
}

/**
 * Get the minimum length of paths `a` and `b`.
 *
 * @param {List} path
 * @param {List} path
 * @return {Number}
 */

function min(a, b) {
  var n = Math.min(a.size, b.size);
  return n;
}

/**
 * Get the common ancestor path of path `a` and path `b`.
 *
 * @param {List} a
 * @param {List} b
 * @return {List}
 */

function relate(a, b) {
  var array = [];

  for (var i = 0; i < a.size && i < b.size; i++) {
    var av = a.get(i);
    var bv = b.get(i);

    // If the values aren't equal, they've diverged and don't share an ancestor.
    if (av !== bv) break;

    // Otherwise, the current value is still a common ancestor.
    array.push(av);
  }

  var path = create$1(array);
  return path;
}

/**
 * Transform a `path` by an `operation`, adjusting it to stay current.
 *
 * @param {List} path
 * @param {Operation} operation
 * @return {List<List>}
 */

function transform(path, operation) {
  var type = operation.type,
      position = operation.position,
      p = operation.path;


  if (type === 'add_mark' || type === 'insert_text' || type === 'remove_mark' || type === 'remove_text' || type === 'set_mark' || type === 'set_node' || type === 'set_selection' || type === 'set_value' || path.size === 0) {
    return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([path]);
  }

  var pIndex = p.size - 1;
  var pEqual = isEqual(p, path);
  var pYounger = isYounger(p, path);
  var pAbove = isAbove(p, path);

  if (type === 'insert_node') {
    if (pEqual || pYounger || pAbove) {
      path = increment(path, 1, pIndex);
    }
  }

  if (type === 'remove_node') {
    if (pYounger) {
      path = decrement(path, 1, pIndex);
    } else if (pEqual || pAbove) {
      path = [];
    }
  }

  if (type === 'merge_node') {
    if (pEqual || pYounger) {
      path = decrement(path, 1, pIndex);
    } else if (pAbove) {
      path = decrement(path, 1, pIndex);
      path = increment(path, position, pIndex + 1);
    }
  }

  if (type === 'split_node') {
    if (pEqual) {
      path = [path, increment(path)];
    } else if (pYounger) {
      path = increment(path, 1, pIndex);
    } else if (pAbove) {
      if (path.get(pIndex + 1) >= position) {
        path = increment(path, 1, pIndex);
        path = decrement(path, position, pIndex + 1);
      }
    }
  }

  if (type === 'move_node') {
    var np = operation.newPath;

    var npIndex = np.size - 1;
    var npEqual = isEqual(np, path);

    if (isEqual(p, np)) {
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([path]);
    }

    var npYounger = isYounger(np, path);
    var npAbove = isAbove(np, path);

    if (pAbove) {
      path = np.concat(path.slice(p.size));
    } else if (pEqual) {
      path = np;
    } else {
      if (pYounger) {
        path = decrement(path, 1, pIndex);
      }

      if (npEqual || npYounger || npAbove) {
        path = increment(path, 1, npIndex);
      }
    }
  }

  var paths = Array.isArray(path) ? path : [path];
  return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(paths);
}

/**
 * Export.
 *
 * @type {Object}
 */

var PathUtils = {
  compare: compare,
  create: create$1,
  crop: crop,
  decrement: decrement,
  getAncestors: getAncestors,
  increment: increment,
  isAbove: isAbove,
  isAfter: isAfter,
  isBefore: isBefore,
  isEqual: isEqual,
  isOlder: isOlder,
  isSibling: isSibling,
  isYounger: isYounger,
  lift: lift,
  max: max,
  min: min,
  relate: relate,
  transform: transform
};

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$6 = {
  key: undefined,
  offset: undefined,
  path: undefined

  /**
   * Point.
   *
   * @type {Point}
   */

};
var Point = function (_Record) {
  inherits(Point, _Record);

  function Point() {
    classCallCheck(this, Point);
    return possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).apply(this, arguments));
  }

  createClass(Point, [{
    key: 'isAfterPoint',


    /**
     * Check whether the point is after another `point`.
     *
     * @return {Boolean}
     */

    value: function isAfterPoint(point) {
      if (this.isUnset) return false;
      var is$$1 = this.key === point.key && this.offset > point.offset || PathUtils.compare(this.path, point.path) === 1;
      return is$$1;
    }

    /**
     * Check whether the point is after a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isAfterRange',
    value: function isAfterRange(range) {
      if (this.isUnset) return false;
      var is$$1 = this.isAfterPoint(range.end);
      return is$$1;
    }

    /**
     * Check whether the point is at the end of a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isAtEndOfRange',
    value: function isAtEndOfRange(range) {
      if (this.isUnset) return false;
      var is$$1 = this.equals(range.end);
      return is$$1;
    }

    /**
     * Check whether the point is at the start of a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isAtStartOfRange',
    value: function isAtStartOfRange(range) {
      if (this.isUnset) return false;
      var is$$1 = this.equals(range.start);
      return is$$1;
    }

    /**
     * Check whether the point is before another `point`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isBeforePoint',
    value: function isBeforePoint(point) {
      if (this.isUnset) return false;
      var is$$1 = this.key === point.key && this.offset < point.offset || PathUtils.compare(this.path, point.path) === -1;
      return is$$1;
    }

    /**
     * Check whether the point is before a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isBeforeRange',
    value: function isBeforeRange(range) {
      if (this.isUnset) return false;
      var is$$1 = this.isBeforePoint(range.start);
      return is$$1;
    }

    /**
     * Check whether the point is inside a `range`.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isInRange',
    value: function isInRange(range) {
      if (this.isUnset) return false;
      var is$$1 = this.equals(range.start) || this.equals(range.end) || this.isAfterPoint(range.start) && this.isBeforePoint(range.end);
      return is$$1;
    }

    /**
     * Check whether the point is at the end of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'isAtEndOfNode',
    value: function isAtEndOfNode(node) {
      if (this.isUnset) return false;
      var last = node.getLastText();
      var is$$1 = this.key === last.key && this.offset === last.text.length;
      return is$$1;
    }

    /**
     * Check whether the point is at the start of a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'isAtStartOfNode',
    value: function isAtStartOfNode(node) {
      if (this.isUnset) return false;

      // PERF: Do a check for a `0` offset first since it's quickest.
      if (this.offset != 0) return false;

      var first = node.getFirstText();
      var is$$1 = this.key === first.key;
      return is$$1;
    }

    /**
     * Check whether the point is in a `node`.
     *
     * @param {Node} node
     * @return {Boolean}
     */

  }, {
    key: 'isInNode',
    value: function isInNode(node) {
      if (this.isUnset) return false;
      if (node.object === 'text' && node.key === this.key) return true;
      if (node.hasNode(this.key)) return true;
      return false;
    }

    /**
     * Move the point's offset backward `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Point}
     */

  }, {
    key: 'moveBackward',
    value: function moveBackward() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (n === 0) return this;
      if (n < 0) return this.moveForward(-n);
      var point = this.setOffset(this.offset - n);
      return point;
    }

    /**
     * Move the point's offset forward `n` characters.
     *
     * @param {Number} n (optional)
     * @return {Point}
     */

  }, {
    key: 'moveForward',
    value: function moveForward() {
      var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      if (n === 0) return this;
      if (n < 0) return this.moveBackward(-n);
      var point = this.setOffset(this.offset + n);
      return point;
    }

    /**
     * Move the point's anchor point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String|Number} path
     * @param {Number} offset
     * @return {Point}
     */

  }, {
    key: 'moveTo',
    value: function moveTo(path) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var key = this.key;

      if (typeof path === 'number') {
        offset = path;
        path = this.path;
      } else if (typeof path === 'string') {
        key = path;
        path = key === this.key ? this.path : null;
      } else {
        key = path.equals(this.path) ? this.key : null;
      }

      var point = this.merge({ key: key, path: path, offset: offset });
      return point;
    }

    /**
     * Move the point's anchor point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Point}
     */

  }, {
    key: 'moveToStartOfNode',
    value: function moveToStartOfNode(node) {
      var first = node.getFirstText();
      var point = this.moveTo(first.key, 0);
      return point;
    }

    /**
     * Move the point's anchor point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Point}
     */

  }, {
    key: 'moveToEndOfNode',
    value: function moveToEndOfNode(node) {
      var last = node.getLastText();
      var point = this.moveTo(last.key, last.text.length);
      return point;
    }

    /**
     * Normalize the point relative to a `node`, ensuring that its key and path
     * reference a text node, or that it gets unset.
     *
     * @param {Node} node
     * @return {Point}
     */

  }, {
    key: 'normalize',
    value: function normalize(node) {
      // If both the key and path are null, there's no reference to a node, so
      // make sure it is entirely unset.
      if (this.key == null && this.path == null) {
        return this.setOffset(null);
      }

      var key = this.key,
          offset = this.offset,
          path = this.path;

      var target = node.getNode(key || path);

      if (!target) {
        Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "A point's `path` or `key` invalid and was reset!");

        var text = node.getFirstText();
        if (!text) return Point.create();

        var _point = this.merge({
          key: text.key,
          offset: 0,
          path: node.getPath(text.key)
        });

        return _point;
      }

      if (target.object !== 'text') {
        Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'A point should not reference a non-text node!');

        var _text = target.getTextAtOffset(offset);
        var before = target.getOffset(_text.key);
        var _point2 = this.merge({
          offset: offset - before,
          key: _text.key,
          path: node.getPath(_text.key)
        });

        return _point2;
      }

      if (target && path && key && key !== target.key) {
        Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "A point's `key` did not match its `path`!");
      }

      var point = this.merge({
        key: target.key,
        path: path == null ? node.getPath(target.key) : path,
        offset: offset == null ? 0 : Math.min(offset, target.text.length)
      });

      return point;
    }

    /**
     * Set the point's key to a new `key`.
     *
     * @param {String} key
     * @return {Point}
     */

  }, {
    key: 'setKey',
    value: function setKey(key) {
      if (key !== null) {
        key = KeyUtils.create(key);
      }

      var point = this.set('key', key);
      return point;
    }

    /**
     * Set the point's offset to a new `offset`.
     *
     * @param {Number} offset
     * @return {Point}
     */

  }, {
    key: 'setOffset',
    value: function setOffset(offset) {
      var point = this.set('offset', offset);
      return point;
    }

    /**
     * Set the point's path to a new `path`.
     *
     * @param {List|Array} path
     * @return {Point}
     */

  }, {
    key: 'setPath',
    value: function setPath(path) {
      if (path !== null) {
        path = PathUtils.create(path);
      }

      var point = this.set('path', path);
      return point;
    }

    /**
     * Return a JSON representation of the point.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        key: this.key,
        offset: this.offset,
        path: this.path && this.path.toArray()
      };

      if (!options.preserveKeys) {
        delete object.key;
      }

      return object;
    }

    /**
     * Unset the point.
     *
     * @return {Point}
     */

  }, {
    key: 'unset',
    value: function unset() {
      return this.merge({
        key: null,
        offset: null,
        path: null
      });
    }
  }, {
    key: 'isSet',


    /**
     * Check whether all properties of the point are set.
     *
     * @return {Boolean}
     */

    get: function get$$1() {
      return this.key != null && this.offset != null && this.path != null;
    }

    /**
     * Check whether any property of the point is not set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isUnset',
    get: function get$$1() {
      return !this.isSet;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Point` with `attrs`.
     *
     * @param {Object|Point} attrs
     * @return {Point}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Point.isPoint(attrs)) {
        return attrs;
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Point.fromJSON(attrs);
      }

      throw new Error('`Point.create` only accepts objects or points, but you passed it: ' + attrs);
    }

    /**
     * Create a dictionary of settable point properties from `attrs`.
     *
     * @param {Object|Point} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Point.isPoint(a)) {
        return {
          key: a.key,
          offset: a.offset,
          path: a.path
        };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(a)) {
        var p = {};
        if ('key' in a) p.key = a.key;
        if ('offset' in a) p.offset = a.offset;
        if ('path' in a) p.path = PathUtils.create(a.path);

        // If only a path is set, or only a key is set, ensure that the other is
        // set to null so that it can be normalized back to the right value.
        // Otherwise we won't realize that the path and key don't match anymore.
        if ('path' in a && !('key' in a)) p.key = null;
        if ('key' in a && !('path' in a)) p.path = null;

        return p;
      }

      throw new Error('`Point.createProperties` only accepts objects or points, but you passed it: ' + a);
    }

    /**
     * Create a `Point` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Point}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$key = object.key,
          key = _object$key === undefined ? null : _object$key,
          _object$offset = object.offset,
          offset = _object$offset === undefined ? null : _object$offset,
          _object$path = object.path,
          path = _object$path === undefined ? null : _object$path;


      var point = new Point({
        key: key,
        offset: offset,
        path: PathUtils.create(path)
      });

      return point;
    }
  }]);
  return Point;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$6));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$7 = {
  anchor: undefined,
  focus: undefined,
  mark: undefined

  /**
   * Decoration.
   *
   * @type {Decoration}
   */

};
var Decoration = function (_Record) {
  inherits(Decoration, _Record);

  function Decoration() {
    classCallCheck(this, Decoration);
    return possibleConstructorReturn(this, (Decoration.__proto__ || Object.getPrototypeOf(Decoration)).apply(this, arguments));
  }

  createClass(Decoration, [{
    key: 'setProperties',


    /**
     * Set new `properties` on the decoration.
     *
     * @param {Object|Range|Selection} properties
     * @return {Range}
     */

    value: function setProperties(properties) {
      properties = Decoration.createProperties(properties);
      var _properties = properties,
          anchor = _properties.anchor,
          focus = _properties.focus,
          mark = _properties.mark;

      var props = {};

      if (anchor) {
        props.anchor = Point.create(anchor);
      }

      if (focus) {
        props.focus = Point.create(focus);
      }

      if (mark) {
        props.mark = Mark.create(mark);
      }

      var decoration = this.merge(props);
      return decoration;
    }

    /**
     * Return a JSON representation of the decoration.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        anchor: this.anchor.toJSON(options),
        focus: this.focus.toJSON(options),
        mark: this.mark.toJSON(options)
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Decoration` with `attrs`.
     *
     * @param {Object|Decoration} attrs
     * @return {Decoration}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Decoration.isDecoration(attrs)) {
        return attrs;
      }

      if (Range.isRange(attrs)) {
        return Decoration.fromJSON(Range.createProperties(attrs));
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Decoration.fromJSON(attrs);
      }

      throw new Error('`Decoration.create` only accepts objects or decorations, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Ranges` from `elements`.
     *
     * @param {Array<Decoration|Object>|List<Decoration|Object>} elements
     * @return {List<Decoration>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"](elements.map(Decoration.create));
        return list;
      }

      throw new Error('`Decoration.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable decoration properties from `attrs`.
     *
     * @param {Object|String|Decoration} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Decoration.isDecoration(a)) {
        return {
          anchor: Point.createProperties(a.anchor),
          focus: Point.createProperties(a.focus),
          mark: Mark.create(a.mark)
        };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(a)) {
        var p = {};
        if ('anchor' in a) p.anchor = Point.create(a.anchor);
        if ('focus' in a) p.focus = Point.create(a.focus);
        if ('mark' in a) p.mark = Mark.create(a.mark);
        return p;
      }

      throw new Error('`Decoration.createProperties` only accepts objects or decorations, but you passed it: ' + a);
    }

    /**
     * Create a `Decoration` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Decoration}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var anchor = object.anchor,
          focus = object.focus,
          mark = object.mark;


      if (!mark) {
        throw new Error('Decorations must be created with a `mark`, but you passed: ' + JSON.stringify(object));
      }

      var decoration = new Decoration({
        anchor: Point.fromJSON(anchor || {}),
        focus: Point.fromJSON(focus || {}),
        mark: Mark.fromJSON(mark)
      });

      return decoration;
    }
  }]);
  return Decoration;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$7));

/**
 * Slate-specific object types.
 *
 * @type {Object}
 */

var TYPES = {
  block: '@@__SLATE_BLOCK__@@',
  change: '@@__SLATE_CHANGE__@@',
  decoration: '@@__SLATE_DECORATION__@@',
  document: '@@__SLATE_DOCUMENT__@@',
  editor: '@@__SLATE_EDITOR__@@',
  inline: '@@__SLATE_INLINE__@@',
  leaf: '@@__SLATE_LEAF__@@',
  mark: '@@__SLATE_MARK__@@',
  operation: '@@__SLATE_OPERATION__@@',
  point: '@@__SLATE_POINT__@@',
  range: '@@__SLATE_RANGE__@@',
  selection: '@@__SLATE_SELECTION__@@',
  text: '@@__SLATE_TEXT__@@',
  value: '@@__SLATE_VALUE__@@'

  /**
   * Determine whether a `value` is of `type`.
   *
   * @param {string} type
   * @param {any} value
   * @return {boolean}
   */

};function isObject(type, value) {
  return !!(value && value[TYPES[type]]);
}

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$8 = {
  anchor: undefined,
  focus: undefined

  /**
   * Range.
   *
   * @type {Range}
   */

};
var Range = function (_Record) {
  inherits(Range, _Record);

  function Range() {
    classCallCheck(this, Range);
    return possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
  }

  createClass(Range, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the range.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        anchor: this.anchor.toJSON(options),
        focus: this.focus.toJSON(options)
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Range` with `attrs`.
     *
     * @param {Object|Range} attrs
     * @return {Range}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Range.isRange(attrs)) {
        if (attrs.object === 'range') {
          return attrs;
        } else {
          return Range.fromJSON(Range.createProperties(attrs));
        }
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Range.fromJSON(attrs);
      }

      throw new Error('`Range.create` only accepts objects or ranges, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Ranges` from `elements`.
     *
     * @param {Array<Range|Object>|List<Range|Object>} elements
     * @return {List<Range>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"](elements.map(Range.create));
        return list;
      }

      throw new Error('`Range.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a dictionary of settable range properties from `attrs`.
     *
     * @param {Object|String|Range} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Range.isRange(a)) {
        return {
          anchor: Point.createProperties(a.anchor),
          focus: Point.createProperties(a.focus)
        };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(a)) {
        var p = {};
        if ('anchor' in a) p.anchor = Point.create(a.anchor);
        if ('focus' in a) p.focus = Point.create(a.focus);
        return p;
      }

      throw new Error('`Range.createProperties` only accepts objects, decorations, ranges or selections, but you passed it: ' + a);
    }

    /**
     * Create a `Range` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Range}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var anchor = object.anchor,
          focus = object.focus;

      var range = new Range({
        anchor: Point.fromJSON(anchor || {}),
        focus: Point.fromJSON(focus || {})
      });

      return range;
    }

    /**
     * Check if a `value` is a `Range`, or is range-like.
     *
     * @param {Any} value
     * @return {Boolean}
     */

  }, {
    key: 'isRange',
    value: function isRange(value) {
      return isObject('range', value) || Decoration.isDecoration(value) || Selection.isSelection(value);
    }
  }]);
  return Range;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$8));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$9 = {
  anchor: undefined,
  focus: undefined,
  isFocused: undefined,
  marks: undefined

  /**
   * Selection.
   *
   * @type {Selection}
   */

};
var Selection = function (_Record) {
  inherits(Selection, _Record);

  function Selection() {
    classCallCheck(this, Selection);
    return possibleConstructorReturn(this, (Selection.__proto__ || Object.getPrototypeOf(Selection)).apply(this, arguments));
  }

  createClass(Selection, [{
    key: 'setIsFocused',


    /**
     * Set the `isFocused` property to a new `value`.
     *
     * @param {Boolean} value
     * @return {Selection}
     */

    value: function setIsFocused(value) {
      var selection = this.set('isFocused', value);
      return selection;
    }

    /**
     * Set the `marks` property to a new set of `marks`.
     *
     * @param {Set} marks
     * @return {Selection}
     */

  }, {
    key: 'setMarks',
    value: function setMarks(marks) {
      var selection = this.set('marks', marks);
      return selection;
    }

    /**
     * Set new `properties` on the selection.
     *
     * @param {Object|Range|Selection} properties
     * @return {Range}
     */

  }, {
    key: 'setProperties',
    value: function setProperties(properties) {
      properties = Selection.createProperties(properties);
      var _properties = properties,
          anchor = _properties.anchor,
          focus = _properties.focus,
          props = objectWithoutProperties(_properties, ['anchor', 'focus']);


      if (anchor) {
        props.anchor = Point.create(anchor);
      }

      if (focus) {
        props.focus = Point.create(focus);
      }

      var selection = this.merge(props);
      return selection;
    }

    /**
     * Return a JSON representation of the selection.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        anchor: this.anchor.toJSON(options),
        focus: this.focus.toJSON(options),
        isFocused: this.isFocused,
        marks: this.marks == null ? null : this.marks.toArray().map(function (m) {
          return m.toJSON();
        })
      };

      return object;
    }
  }, {
    key: 'isBlurred',


    /**
     * Check whether the selection is blurred.
     *
     * @return {Boolean}
     */

    get: function get$$1() {
      return !this.isFocused;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Selection` with `attrs`.
     *
     * @param {Object|Selection} attrs
     * @return {Selection}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Selection.isSelection(attrs)) {
        return attrs;
      }

      if (Range.isRange(attrs)) {
        return Selection.fromJSON(Range.createProperties(attrs));
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Selection.fromJSON(attrs);
      }

      throw new Error('`Selection.create` only accepts objects, ranges or selections, but you passed it: ' + attrs);
    }

    /**
     * Create a dictionary of settable selection properties from `attrs`.
     *
     * @param {Object|String|Selection} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Selection.isSelection(a)) {
        return {
          anchor: Point.createProperties(a.anchor),
          focus: Point.createProperties(a.focus),
          isFocused: a.isFocused,
          marks: a.marks
        };
      }

      if (Range.isRange(a)) {
        return {
          anchor: Point.createProperties(a.anchor),
          focus: Point.createProperties(a.focus)
        };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(a)) {
        var p = {};
        if ('anchor' in a) p.anchor = Point.create(a.anchor);
        if ('focus' in a) p.focus = Point.create(a.focus);
        if ('isFocused' in a) p.isFocused = a.isFocused;
        if ('marks' in a) p.marks = a.marks == null ? null : Mark.createSet(a.marks);
        return p;
      }

      throw new Error('`Selection.createProperties` only accepts objects, ranges or selections, but you passed it: ' + a);
    }

    /**
     * Create a `Selection` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Selection}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var anchor = object.anchor,
          focus = object.focus,
          _object$isFocused = object.isFocused,
          isFocused = _object$isFocused === undefined ? false : _object$isFocused,
          _object$marks = object.marks,
          marks = _object$marks === undefined ? null : _object$marks;

      var selection = new Selection({
        anchor: Point.fromJSON(anchor || {}),
        focus: Point.fromJSON(focus || {}),
        isFocused: isFocused,
        marks: marks == null ? null : new immutable__WEBPACK_IMPORTED_MODULE_1__["Set"](marks.map(Mark.fromJSON))
      });

      return selection;
    }
  }]);
  return Selection;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$9));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$10 = {
  data: undefined,
  decorations: undefined,
  document: undefined,
  selection: undefined

  /**
   * Value.
   *
   * @type {Value}
   */

};
var Value = function (_Record) {
  inherits(Value, _Record);

  function Value() {
    classCallCheck(this, Value);
    return possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).apply(this, arguments));
  }

  createClass(Value, [{
    key: 'addMark',


    /**
     * Add mark to text at `offset` and `length` in node by `path`.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @return {Value}
     */

    value: function addMark(path, offset, length, mark) {
      var value = this;
      var _value = value,
          document = _value.document;

      document = document.addMark(path, offset, length, mark);
      value = this.set('document', document);
      return value;
    }

    /**
     * Insert a `node`.
     *
     * @param {List|String} path
     * @param {Node} node
     * @return {Value}
     */

  }, {
    key: 'insertNode',
    value: function insertNode(path, node) {
      var value = this;
      var _value2 = value,
          document = _value2.document;

      document = document.insertNode(path, node);
      value = value.set('document', document);

      value = value.mapRanges(function (range) {
        return range.updatePoints(function (point) {
          return point.setPath(null);
        });
      });

      return value;
    }

    /**
     * Insert `text` at `offset` in node by `path`.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {String} text
     * @param {Set} marks
     * @return {Value}
     */

  }, {
    key: 'insertText',
    value: function insertText(path, offset, text, marks) {
      var value = this;
      var _value3 = value,
          document = _value3.document;

      var node = document.assertNode(path);
      document = document.insertText(path, offset, text, marks);
      value = value.set('document', document);

      value = value.mapRanges(function (range) {
        return range.updatePoints(function (point) {
          return point.key === node.key && point.offset >= offset ? point.setOffset(point.offset + text.length) : point;
        });
      });

      return value;
    }

    /**
     * Merge a node backwards its previous sibling.
     *
     * @param {List|Key} path
     * @return {Value}
     */

  }, {
    key: 'mergeNode',
    value: function mergeNode(path) {
      var value = this;
      var _value4 = value,
          document = _value4.document;

      var newDocument = document.mergeNode(path);
      path = document.resolvePath(path);
      var withPath = PathUtils.decrement(path);
      var one = document.getNode(withPath);
      var two = document.getNode(path);
      value = value.set('document', newDocument);

      value = value.mapRanges(function (range) {
        if (two.object === 'text') {
          var max = one.text.length;

          if (range.anchor.key === two.key) {
            range = range.moveAnchorTo(one.key, max + range.anchor.offset);
          }

          if (range.focus.key === two.key) {
            range = range.moveFocusTo(one.key, max + range.focus.offset);
          }
        }

        range = range.updatePoints(function (point) {
          return point.setPath(null);
        });

        return range;
      });

      return value;
    }

    /**
     * Move a node by `path` to `newPath`.
     *
     * A `newIndex` can be provided when move nodes by `key`, to account for not
     * being able to have a key for a location in the tree that doesn't exist yet.
     *
     * @param {List|Key} path
     * @param {List|Key} newPath
     * @param {Number} newIndex
     * @return {Value}
     */

  }, {
    key: 'moveNode',
    value: function moveNode(path, newPath) {
      var newIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var value = this;
      var _value5 = value,
          document = _value5.document;

      document = document.moveNode(path, newPath, newIndex);
      value = value.set('document', document);

      value = value.mapRanges(function (range) {
        return range.updatePoints(function (point) {
          return point.setPath(null);
        });
      });

      return value;
    }

    /**
     * Remove mark from text at `offset` and `length` in node.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @return {Value}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(path, offset, length, mark) {
      var value = this;
      var _value6 = value,
          document = _value6.document;

      document = document.removeMark(path, offset, length, mark);
      value = this.set('document', document);
      return value;
    }

    /**
     * Remove a node by `path`.
     *
     * @param {List|String} path
     * @return {Value}
     */

  }, {
    key: 'removeNode',
    value: function removeNode(path) {
      var value = this;
      var _value7 = value,
          document = _value7.document;

      var node = document.assertNode(path);
      var first = node.object == 'text' ? node : node.getFirstText() || node;
      var last = node.object == 'text' ? node : node.getLastText() || node;
      var prev = document.getPreviousText(first.key);
      var next = document.getNextText(last.key);

      document = document.removeNode(path);
      value = value.set('document', document);

      value = value.mapRanges(function (range) {
        var _range = range,
            start = _range.start,
            end = _range.end;


        if (node.hasNode(start.key)) {
          range = prev ? range.moveStartTo(prev.key, prev.text.length) : next ? range.moveStartTo(next.key, 0) : range.unset();
        }

        if (node.hasNode(end.key)) {
          range = prev ? range.moveEndTo(prev.key, prev.text.length) : next ? range.moveEndTo(next.key, 0) : range.unset();
        }

        range = range.updatePoints(function (point) {
          return point.setPath(null);
        });

        return range;
      });

      return value;
    }

    /**
     * Remove `text` at `offset` in node by `path`.
     *
     * @param {List|Key} path
     * @param {Number} offset
     * @param {String} text
     * @return {Value}
     */

  }, {
    key: 'removeText',
    value: function removeText(path, offset, text) {
      var value = this;
      var _value8 = value,
          document = _value8.document;

      var node = document.assertNode(path);
      document = document.removeText(path, offset, text);
      value = value.set('document', document);

      var length = text.length;

      var start = offset;
      var end = offset + length;

      value = value.mapRanges(function (range) {
        return range.updatePoints(function (point) {
          if (point.key !== node.key) {
            return point;
          }

          if (point.offset >= end) {
            return point.setOffset(point.offset - length);
          }

          if (point.offset > start) {
            return point.setOffset(start);
          }

          return point;
        });
      });

      return value;
    }

    /**
     * Set `properties` on a node.
     *
     * @param {List|String} path
     * @param {Object} properties
     * @return {Value}
     */

  }, {
    key: 'setNode',
    value: function setNode(path, properties) {
      var value = this;
      var _value9 = value,
          document = _value9.document;

      document = document.setNode(path, properties);
      value = value.set('document', document);
      return value;
    }

    /**
     * Set `properties` on `mark` on text at `offset` and `length` in node.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @param {Object} properties
     * @return {Value}
     */

  }, {
    key: 'setMark',
    value: function setMark(path, offset, length, mark, properties) {
      var value = this;
      var _value10 = value,
          document = _value10.document;

      document = document.setMark(path, offset, length, mark, properties);
      value = value.set('document', document);
      return value;
    }

    /**
     * Set `properties` on the value.
     *
     * @param {Object} properties
     * @return {Value}
     */

  }, {
    key: 'setProperties',
    value: function setProperties(properties) {
      var value = this;
      var _value11 = value,
          document = _value11.document;
      var data = properties.data,
          decorations = properties.decorations;

      var props = {};

      if (data) {
        props.data = data;
      }

      if (decorations) {
        props.decorations = decorations.map(function (d) {
          return d.isSet ? d : document.resolveDecoration(d);
        });
      }

      value = value.merge(props);
      return value;
    }

    /**
     * Set `properties` on the selection.
     *
     * @param {Value} value
     * @param {Operation} operation
     * @return {Value}
     */

  }, {
    key: 'setSelection',
    value: function setSelection(properties) {
      var value = this;
      var _value12 = value,
          document = _value12.document,
          selection = _value12.selection;

      var next = selection.setProperties(properties);
      selection = document.resolveSelection(next);
      value = value.set('selection', selection);
      return value;
    }

    /**
     * Split a node by `path` at `position` with optional `properties` to apply
     * to the newly split node.
     *
     * @param {List|String} path
     * @param {Number} position
     * @param {Object} properties
     * @return {Value}
     */

  }, {
    key: 'splitNode',
    value: function splitNode(path, position, properties) {
      var value = this;
      var _value13 = value,
          document = _value13.document;

      var newDocument = document.splitNode(path, position, properties);
      var node = document.assertNode(path);
      value = value.set('document', newDocument);

      value = value.mapRanges(function (range) {
        var next = newDocument.getNextText(node.key);
        var _range2 = range,
            start = _range2.start,
            end = _range2.end;

        // If the start was after the split, move it to the next node.

        if (node.key === start.key && position <= start.offset) {
          range = range.moveStartTo(next.key, start.offset - position);
        }

        // If the end was after the split, move it to the next node.
        if (node.key === end.key && position <= end.offset) {
          range = range.moveEndTo(next.key, end.offset - position);
        }

        range = range.updatePoints(function (point) {
          return point.setPath(null);
        });

        return range;
      });

      return value;
    }

    /**
     * Map all range objects to apply adjustments with an `iterator`.
     *
     * @param {Function} iterator
     * @return {Value}
     */

  }, {
    key: 'mapRanges',
    value: function mapRanges(iterator) {
      var value = this;
      var _value14 = value,
          document = _value14.document,
          selection = _value14.selection,
          decorations = _value14.decorations;


      var sel = selection.isSet ? iterator(selection) : selection;
      if (!sel) sel = selection.unset();
      if (sel !== selection) sel = document.createSelection(sel);
      value = value.set('selection', sel);

      var decs = decorations.map(function (decoration) {
        var n = decoration.isSet ? iterator(decoration) : decoration;
        if (n && n !== decoration) n = document.createDecoration(n);
        return n;
      });

      decs = decs.filter(function (decoration) {
        return !!decoration;
      });
      value = value.set('decorations', decs);
      return value;
    }

    /**
     * Return a JSON representation of the value.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        document: this.document.toJSON(options)
      };

      if (options.preserveData) {
        object.data = this.data.toJSON(options);
      }

      if (options.preserveDecorations) {
        object.decorations = this.decorations.toArray().map(function (d) {
          return d.toJSON(options);
        });
      }

      if (options.preserveSelection) {
        object.selection = this.selection.toJSON(options);
      }

      return object;
    }

    /**
     * Deprecated.
     */

  }, {
    key: 'change',
    value: function change() {
      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42.0, value object are no longer schema-aware, and the `value.change()` method is no longer available. Use the `editor.change()` method on the new `Editor` controller instead.');
    }
  }, {
    key: 'startBlock',


    /**
     * Get the current start text node's closest block parent.
     *
     * @return {Block}
     */

    get: function get$$1() {
      return this.selection.start.key && this.document.getClosestBlock(this.selection.start.key);
    }

    /**
     * Get the current end text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'endBlock',
    get: function get$$1() {
      return this.selection.end.key && this.document.getClosestBlock(this.selection.end.key);
    }

    /**
     * Get the current anchor text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'anchorBlock',
    get: function get$$1() {
      return this.selection.anchor.key && this.document.getClosestBlock(this.selection.anchor.key);
    }

    /**
     * Get the current focus text node's closest block parent.
     *
     * @return {Block}
     */

  }, {
    key: 'focusBlock',
    get: function get$$1() {
      return this.selection.focus.key && this.document.getClosestBlock(this.selection.focus.key);
    }

    /**
     * Get the current start text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'startInline',
    get: function get$$1() {
      return this.selection.start.key && this.document.getClosestInline(this.selection.start.key);
    }

    /**
     * Get the current end text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'endInline',
    get: function get$$1() {
      return this.selection.end.key && this.document.getClosestInline(this.selection.end.key);
    }

    /**
     * Get the current anchor text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'anchorInline',
    get: function get$$1() {
      return this.selection.anchor.key && this.document.getClosestInline(this.selection.anchor.key);
    }

    /**
     * Get the current focus text node's closest inline parent.
     *
     * @return {Inline}
     */

  }, {
    key: 'focusInline',
    get: function get$$1() {
      return this.selection.focus.key && this.document.getClosestInline(this.selection.focus.key);
    }

    /**
     * Get the current start text node.
     *
     * @return {Text}
     */

  }, {
    key: 'startText',
    get: function get$$1() {
      return this.selection.start.key && this.document.getDescendant(this.selection.start.key);
    }

    /**
     * Get the current end node.
     *
     * @return {Text}
     */

  }, {
    key: 'endText',
    get: function get$$1() {
      return this.selection.end.key && this.document.getDescendant(this.selection.end.key);
    }

    /**
     * Get the current anchor node.
     *
     * @return {Text}
     */

  }, {
    key: 'anchorText',
    get: function get$$1() {
      return this.selection.anchor.key && this.document.getDescendant(this.selection.anchor.key);
    }

    /**
     * Get the current focus node.
     *
     * @return {Text}
     */

  }, {
    key: 'focusText',
    get: function get$$1() {
      return this.selection.focus.key && this.document.getDescendant(this.selection.focus.key);
    }

    /**
     * Get the next block node.
     *
     * @return {Block}
     */

  }, {
    key: 'nextBlock',
    get: function get$$1() {
      return this.selection.end.key && this.document.getNextBlock(this.selection.end.key);
    }

    /**
     * Get the previous block node.
     *
     * @return {Block}
     */

  }, {
    key: 'previousBlock',
    get: function get$$1() {
      return this.selection.start.key && this.document.getPreviousBlock(this.selection.start.key);
    }

    /**
     * Get the next inline node.
     *
     * @return {Inline}
     */

  }, {
    key: 'nextInline',
    get: function get$$1() {
      return this.selection.end.key && this.document.getNextInline(this.selection.end.key);
    }

    /**
     * Get the previous inline node.
     *
     * @return {Inline}
     */

  }, {
    key: 'previousInline',
    get: function get$$1() {
      return this.selection.start.key && this.document.getPreviousInline(this.selection.start.key);
    }

    /**
     * Get the next text node.
     *
     * @return {Text}
     */

  }, {
    key: 'nextText',
    get: function get$$1() {
      return this.selection.end.key && this.document.getNextText(this.selection.end.key);
    }

    /**
     * Get the previous text node.
     *
     * @return {Text}
     */

  }, {
    key: 'previousText',
    get: function get$$1() {
      return this.selection.start.key && this.document.getPreviousText(this.selection.start.key);
    }

    /**
     * Get the marks of the current selection.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'marks',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_1__["Set"]() : this.selection.marks || this.document.getMarksAtRange(this.selection);
    }

    /**
     * Get the active marks of the current selection.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'activeMarks',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_1__["Set"]() : this.selection.marks || this.document.getActiveMarksAtRange(this.selection);
    }

    /**
     * Get the block nodes in the current selection.
     *
     * @return {List<Block>}
     */

  }, {
    key: 'blocks',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_1__["List"]() : this.document.getLeafBlocksAtRange(this.selection);
    }

    /**
     * Get the fragment of the current selection.
     *
     * @return {Document}
     */

  }, {
    key: 'fragment',
    get: function get$$1() {
      return this.selection.isUnset ? Document.create() : this.document.getFragmentAtRange(this.selection);
    }

    /**
     * Get the bottom-most inline nodes in the current selection.
     *
     * @return {List<Inline>}
     */

  }, {
    key: 'inlines',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_1__["List"]() : this.document.getLeafInlinesAtRange(this.selection);
    }

    /**
     * Get the text nodes in the current selection.
     *
     * @return {List<Text>}
     */

  }, {
    key: 'texts',
    get: function get$$1() {
      return this.selection.isUnset ? new immutable__WEBPACK_IMPORTED_MODULE_1__["List"]() : this.document.getTextsAtRange(this.selection);
    }
  }, {
    key: 'history',
    get: function get$$1() {
      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42.0, the `value.history` model no longer exists, and the history is stored in `value.data` instead using plugins.');
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Value` with `attrs`.
     *
     * @param {Object|Value} attrs
     * @param {Object} options
     * @return {Value}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (Value.isValue(attrs)) {
        return attrs;
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Value.fromJSON(attrs, options);
      }

      throw new Error('`Value.create` only accepts objects or values, but you passed it: ' + attrs);
    }

    /**
     * Create a dictionary of settable value properties from `attrs`.
     *
     * @param {Object|Value} attrs
     * @return {Object}
     */

  }, {
    key: 'createProperties',
    value: function createProperties() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Value.isValue(a)) {
        return {
          data: a.data,
          decorations: a.decorations
        };
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(a)) {
        var p = {};
        if ('data' in a) p.data = Data.create(a.data);
        if ('decorations' in a) p.decorations = Decoration.createList(a.decorations);
        return p;
      }

      throw new Error('`Value.createProperties` only accepts objects or values, but you passed it: ' + a);
    }

    /**
     * Create a `Value` from a JSON `object`.
     *
     * @param {Object} object
     * @param {Object} options
     *   @property {Boolean} normalize
     *   @property {Array} plugins
     * @return {Value}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var _object$data = object.data,
          data = _object$data === undefined ? {} : _object$data,
          _object$decorations = object.decorations,
          decorations = _object$decorations === undefined ? [] : _object$decorations,
          _object$document = object.document,
          document = _object$document === undefined ? {} : _object$document,
          _object$selection = object.selection,
          selection = _object$selection === undefined ? {} : _object$selection;

      data = Data.fromJSON(data);
      document = Document.fromJSON(document);
      selection = document.createSelection(selection);
      decorations = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(decorations.map(function (d) {
        return Decoration.fromJSON(d);
      }));

      if (selection.isUnset) {
        var text = document.getFirstText();
        if (text) selection = selection.moveToStartOfNode(text);
        selection = document.createSelection(selection);
      }

      var value = new Value({
        data: data,
        decorations: decorations,
        document: document,
        selection: selection
      });

      return value;
    }
  }]);
  return Value;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$10));

/**
 * Debug.
 *
 * @type {Function}
 */

var debug = debug__WEBPACK_IMPORTED_MODULE_4___default()('slate:operation:apply');

/**
 * Apply an `op` to a `value`.
 *
 * @param {Value} value
 * @param {Object|Operation} op
 * @return {Value} value
 */

function applyOperation(value, op) {
  op = Operation.create(op);
  var _op = op,
      type = _op.type;

  debug(type, op);

  switch (type) {
    case 'add_mark':
      {
        var _op2 = op,
            path = _op2.path,
            offset = _op2.offset,
            length = _op2.length,
            mark = _op2.mark;

        var next = value.addMark(path, offset, length, mark);
        return next;
      }

    case 'insert_node':
      {
        var _op3 = op,
            _path = _op3.path,
            node = _op3.node;

        var _next = value.insertNode(_path, node);
        return _next;
      }

    case 'insert_text':
      {
        var _op4 = op,
            _path2 = _op4.path,
            _offset = _op4.offset,
            text = _op4.text,
            marks = _op4.marks;

        var _next2 = value.insertText(_path2, _offset, text, marks);
        return _next2;
      }

    case 'merge_node':
      {
        var _op5 = op,
            _path3 = _op5.path;

        var _next3 = value.mergeNode(_path3);
        return _next3;
      }

    case 'move_node':
      {
        var _op6 = op,
            _path4 = _op6.path,
            newPath = _op6.newPath;


        if (PathUtils.isEqual(_path4, newPath)) {
          return value;
        }

        var _next4 = value.moveNode(_path4, newPath);
        return _next4;
      }

    case 'remove_mark':
      {
        var _op7 = op,
            _path5 = _op7.path,
            _offset2 = _op7.offset,
            _length = _op7.length,
            _mark = _op7.mark;

        var _next5 = value.removeMark(_path5, _offset2, _length, _mark);
        return _next5;
      }

    case 'remove_node':
      {
        var _op8 = op,
            _path6 = _op8.path;

        var _next6 = value.removeNode(_path6);
        return _next6;
      }

    case 'remove_text':
      {
        var _op9 = op,
            _path7 = _op9.path,
            _offset3 = _op9.offset,
            _text = _op9.text;

        var _next7 = value.removeText(_path7, _offset3, _text);
        return _next7;
      }

    case 'set_mark':
      {
        var _op10 = op,
            _path8 = _op10.path,
            _offset4 = _op10.offset,
            _length2 = _op10.length,
            _mark2 = _op10.mark,
            properties = _op10.properties;

        var _next8 = value.setMark(_path8, _offset4, _length2, _mark2, properties);
        return _next8;
      }

    case 'set_node':
      {
        var _op11 = op,
            _path9 = _op11.path,
            _properties = _op11.properties;

        var _next9 = value.setNode(_path9, _properties);
        return _next9;
      }

    case 'set_selection':
      {
        var _op12 = op,
            _properties2 = _op12.properties;

        var _next10 = value.setSelection(_properties2);
        return _next10;
      }

    case 'set_value':
      {
        var _op13 = op,
            _properties3 = _op13.properties;

        var _next11 = value.setProperties(_properties3);
        return _next11;
      }

    case 'split_node':
      {
        var _op14 = op,
            _path10 = _op14.path,
            position = _op14.position,
            _properties4 = _op14.properties;

        var _next12 = value.splitNode(_path10, position, _properties4);
        return _next12;
      }

    default:
      {
        throw new Error('Unknown operation type: "' + type + '".');
      }
  }
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$1 = debug__WEBPACK_IMPORTED_MODULE_4___default()('slate:operation:invert');

/**
 * Invert an `op`.
 *
 * @param {Object} op
 * @return {Object}
 */

function invertOperation(op) {
  op = Operation.create(op);
  var _op = op,
      type = _op.type;

  debug$1(type, op);

  switch (type) {
    case 'insert_node':
      {
        var inverse = op.set('type', 'remove_node');
        return inverse;
      }

    case 'remove_node':
      {
        var _inverse = op.set('type', 'insert_node');
        return _inverse;
      }

    case 'move_node':
      {
        var _op2 = op,
            newPath = _op2.newPath,
            path = _op2.path;


        if (PathUtils.isEqual(newPath, path)) {
          return op;
        }

        var inversePath = newPath;
        var inverseNewPath = path;

        var pathLast = path.size - 1;
        var newPathLast = newPath.size - 1;

        // If the node's old position was a left sibling of an ancestor of
        // its new position, we need to adjust part of the path by -1.
        if (path.size < inversePath.size && path.slice(0, pathLast).every(function (e, i) {
          return e == inversePath.get(i);
        }) && path.last() < inversePath.get(pathLast)) {
          inversePath = inversePath.slice(0, pathLast).concat(inversePath.get(pathLast) - 1).concat(inversePath.slice(pathLast + 1, inversePath.size));
        }

        // If the node's new position is an ancestor of the old position,
        // or a left sibling of an ancestor of its old position, we need
        // to adjust part of the path by 1.
        if (newPath.size < inverseNewPath.size && newPath.slice(0, newPathLast).every(function (e, i) {
          return e == inverseNewPath.get(i);
        }) && newPath.last() <= inverseNewPath.get(newPathLast)) {
          inverseNewPath = inverseNewPath.slice(0, newPathLast).concat(inverseNewPath.get(newPathLast) + 1).concat(inverseNewPath.slice(newPathLast + 1, inverseNewPath.size));
        }

        var _inverse2 = op.set('path', inversePath).set('newPath', inverseNewPath);
        return _inverse2;
      }

    case 'merge_node':
      {
        var _op3 = op,
            _path = _op3.path;

        var _inversePath = PathUtils.decrement(_path);
        var _inverse3 = op.set('type', 'split_node').set('path', _inversePath);
        return _inverse3;
      }

    case 'split_node':
      {
        var _op4 = op,
            _path2 = _op4.path;

        var _inversePath2 = PathUtils.increment(_path2);
        var _inverse4 = op.set('type', 'merge_node').set('path', _inversePath2);
        return _inverse4;
      }

    case 'set_node':
      {
        var _op5 = op,
            properties = _op5.properties,
            node = _op5.node;

        var inverseNode = node.merge(properties);
        var inverseProperties = lodash_pick__WEBPACK_IMPORTED_MODULE_5___default()(node, Object.keys(properties));
        var _inverse5 = op.set('node', inverseNode).set('properties', inverseProperties);
        return _inverse5;
      }

    case 'insert_text':
      {
        var _inverse6 = op.set('type', 'remove_text');
        return _inverse6;
      }

    case 'remove_text':
      {
        var _inverse7 = op.set('type', 'insert_text');
        return _inverse7;
      }

    case 'add_mark':
      {
        var _inverse8 = op.set('type', 'remove_mark');
        return _inverse8;
      }

    case 'remove_mark':
      {
        var _inverse9 = op.set('type', 'add_mark');
        return _inverse9;
      }

    case 'set_mark':
      {
        var _op6 = op,
            _properties = _op6.properties,
            mark = _op6.mark;

        var inverseMark = mark.merge(_properties);
        var _inverseProperties = lodash_pick__WEBPACK_IMPORTED_MODULE_5___default()(mark, Object.keys(_properties));
        var _inverse10 = op.set('mark', inverseMark).set('properties', _inverseProperties);
        return _inverse10;
      }

    case 'set_selection':
      {
        var _op7 = op,
            _properties2 = _op7.properties,
            selection = _op7.selection;

        var inverseSelection = selection.merge(_properties2);
        var inverseProps = lodash_pick__WEBPACK_IMPORTED_MODULE_5___default()(selection, Object.keys(_properties2));
        var _inverse11 = op.set('selection', inverseSelection).set('properties', inverseProps);
        return _inverse11;
      }

    case 'set_value':
      {
        var _op8 = op,
            _properties3 = _op8.properties,
            value = _op8.value;

        var inverseValue = value.merge(_properties3);
        var _inverseProperties2 = lodash_pick__WEBPACK_IMPORTED_MODULE_5___default()(value, Object.keys(_properties3));
        var _inverse12 = op.set('value', inverseValue).set('properties', _inverseProperties2);
        return _inverse12;
      }

    default:
      {
        throw new Error('Unknown operation type: "' + type + '".');
      }
  }
}

/**
 * Operation attributes.
 *
 * @type {Array}
 */

var OPERATION_ATTRIBUTES = {
  add_mark: ['value', 'path', 'offset', 'length', 'mark', 'data'],
  insert_node: ['value', 'path', 'node', 'data'],
  insert_text: ['value', 'path', 'offset', 'text', 'marks', 'data'],
  merge_node: ['value', 'path', 'position', 'properties', 'target', 'data'],
  move_node: ['value', 'path', 'newPath', 'data'],
  remove_mark: ['value', 'path', 'offset', 'length', 'mark', 'data'],
  remove_node: ['value', 'path', 'node', 'data'],
  remove_text: ['value', 'path', 'offset', 'text', 'marks', 'data'],
  set_mark: ['value', 'path', 'offset', 'length', 'mark', 'properties', 'data'],
  set_node: ['value', 'path', 'node', 'properties', 'data'],
  set_selection: ['value', 'selection', 'properties', 'data'],
  set_value: ['value', 'properties', 'data'],
  split_node: ['value', 'path', 'position', 'properties', 'target', 'data']

  /**
   * Default properties.
   *
   * @type {Object}
   */

};var DEFAULTS$11 = {
  length: undefined,
  mark: undefined,
  marks: undefined,
  newPath: undefined,
  node: undefined,
  offset: undefined,
  path: undefined,
  position: undefined,
  properties: undefined,
  selection: undefined,
  target: undefined,
  text: undefined,
  type: undefined,
  value: undefined,
  data: undefined

  /**
   * Operation.
   *
   * @type {Operation}
   */

};
var Operation = function (_Record) {
  inherits(Operation, _Record);

  function Operation() {
    classCallCheck(this, Operation);
    return possibleConstructorReturn(this, (Operation.__proto__ || Object.getPrototypeOf(Operation)).apply(this, arguments));
  }

  createClass(Operation, [{
    key: 'apply',


    /**
     * Apply the operation to a `value`.
     *
     * @param {Value} value
     * @return {Value}
     */

    value: function apply(value) {
      var next = applyOperation(value, this);
      return next;
    }

    /**
     * Invert the operation.
     *
     * @return {Operation}
     */

  }, {
    key: 'invert',
    value: function invert() {
      var inverted = invertOperation(this);
      return inverted;
    }

    /**
     * Return a JSON representation of the operation.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var object = this.object,
          type = this.type;

      var json = { object: object, type: type };
      var ATTRIBUTES = OPERATION_ATTRIBUTES[type];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = ATTRIBUTES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var key = _step.value;

          var value = this[key];

          // Skip keys for objects that should not be serialized, and are only used
          // for providing the local-only invert behavior for the history stack.
          if (key == 'document') continue;
          if (key == 'selection') continue;
          if (key == 'value') continue;
          if (key == 'node' && type != 'insert_node') continue;

          if (key == 'mark' || key == 'marks' || key == 'node' || key == 'path' || key == 'newPath') {
            value = value.toJSON();
          }

          if (key == 'properties' && type == 'merge_node') {
            var v = {};
            if ('data' in value) v.data = value.data.toJS();
            if ('type' in value) v.type = value.type;
            value = v;
          }

          if (key == 'properties' && type == 'set_mark') {
            var _v = {};
            if ('data' in value) _v.data = value.data.toJS();
            if ('type' in value) _v.type = value.type;
            value = _v;
          }

          if (key == 'properties' && type == 'set_node') {
            var _v2 = {};
            if ('data' in value) _v2.data = value.data.toJS();
            if ('type' in value) _v2.type = value.type;
            value = _v2;
          }

          if (key == 'properties' && type == 'set_selection') {
            var _v3 = {};
            if ('anchor' in value) _v3.anchor = value.anchor.toJSON();
            if ('focus' in value) _v3.focus = value.focus.toJSON();
            if ('isFocused' in value) _v3.isFocused = value.isFocused;
            if ('marks' in value) _v3.marks = value.marks && value.marks.toJSON();
            value = _v3;
          }

          if (key == 'properties' && type == 'set_value') {
            var _v4 = {};
            if ('data' in value) _v4.data = value.data.toJS();
            if ('decorations' in value) _v4.decorations = value.decorations.toJS();
            value = _v4;
          }

          if (key == 'properties' && type == 'split_node') {
            var _v5 = {};
            if ('data' in value) _v5.data = value.data.toJS();
            if ('type' in value) _v5.type = value.type;
            value = _v5;
          }

          if (key === 'data') {
            value = value.toJSON();
          }

          json[key] = value;
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

      return json;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Operation` with `attrs`.
     *
     * @param {Object|Array|List|String|Operation} attrs
     * @return {Operation}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Operation.isOperation(attrs)) {
        return attrs;
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Operation.fromJSON(attrs);
      }

      throw new Error('`Operation.create` only accepts objects or operations, but you passed it: ' + attrs);
    }

    /**
     * Create a list of `Operations` from `elements`.
     *
     * @param {Array<Operation|Object>|List<Operation|Object>} elements
     * @return {List<Operation>}
     */

  }, {
    key: 'createList',
    value: function createList() {
      var elements = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(elements) || Array.isArray(elements)) {
        var list = new immutable__WEBPACK_IMPORTED_MODULE_1__["List"](elements.map(Operation.create));
        return list;
      }

      throw new Error('`Operation.createList` only accepts arrays or lists, but you passed it: ' + elements);
    }

    /**
     * Create a `Operation` from a JSON `object`.
     *
     * @param {Object|Operation} object
     * @return {Operation}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      if (Operation.isOperation(object)) {
        return object;
      }

      var type = object.type;

      var ATTRIBUTES = OPERATION_ATTRIBUTES[type];
      var attrs = { type: type };

      if (!ATTRIBUTES) {
        throw new Error('`Operation.fromJSON` was passed an unrecognized operation type: "' + type + '"');
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = ATTRIBUTES[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          var v = object[key];

          // Default `data` to an empty object.
          if (key === 'data' && v === undefined) {
            v = {};
          }

          if (v === undefined) {
            // Skip keys for objects that should not be serialized, and are only used
            // for providing the local-only invert behavior for the history stack.
            if (key == 'document') continue;
            if (key == 'selection') continue;
            if (key == 'value') continue;
            if (key == 'node' && type != 'insert_node') continue;

            throw new Error('`Operation.fromJSON` was passed a "' + type + '" operation without the required "' + key + '" attribute.');
          }

          if (key === 'path' || key === 'newPath') {
            v = PathUtils.create(v);
          }

          if (key === 'mark') {
            v = Mark.create(v);
          }

          if (key === 'marks' && v != null) {
            v = Mark.createSet(v);
          }

          if (key === 'node') {
            v = Node.create(v);
          }

          if (key === 'selection') {
            v = Selection.create(v);
          }

          if (key === 'value') {
            v = Value.create(v);
          }

          if (key === 'properties' && type === 'merge_node') {
            v = Node.createProperties(v);
          }

          if (key === 'properties' && type === 'set_mark') {
            v = Mark.createProperties(v);
          }

          if (key === 'properties' && type === 'set_node') {
            v = Node.createProperties(v);
          }

          if (key === 'properties' && type === 'set_selection') {
            v = Selection.createProperties(v);
          }

          if (key === 'properties' && type === 'set_value') {
            v = Value.createProperties(v);
          }

          if (key === 'properties' && type === 'split_node') {
            v = Node.createProperties(v);
          }

          if (key === 'data') {
            v = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"])(v);
          }

          attrs[key] = v;
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

      var node = new Operation(attrs);
      return node;
    }

    /**
     * Check if `any` is a list of operations.
     *
     * @param {Any} any
     * @return {Boolean}
     */

  }, {
    key: 'isOperationList',
    value: function isOperationList(any) {
      return immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(any) && any.every(function (item) {
        return Operation.isOperation(item);
      });
    }
  }]);
  return Operation;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$11));

/**
 * Default properties.
 *
 * @type {Object}
 */

var DEFAULTS$12 = {
  operations: undefined,
  value: undefined

  /**
   * Change.
   *
   * @type {Change}
   */

};
var Change = function (_Record) {
  inherits(Change, _Record);

  function Change() {
    classCallCheck(this, Change);
    return possibleConstructorReturn(this, (Change.__proto__ || Object.getPrototypeOf(Change)).apply(this, arguments));
  }

  createClass(Change, [{
    key: 'toJSON',


    /**
     * Return a JSON representation of the change.
     *
     * @param {Object} options
     * @return {Object}
     */

    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        value: this.value.toJSON(options),
        operations: this.operations.toArray().map(function (o) {
          return o.toJSON(options);
        })
      };

      return object;
    }
  }], [{
    key: 'create',

    /**
     * Create a new `Change` with `attrs`.
     *
     * @param {Object|Change} attrs
     * @return {Change}
     */

    value: function create() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (Change.isChange(attrs)) {
        return attrs;
      }

      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(attrs)) {
        return Change.fromJSON(attrs);
      }

      throw new Error('`Change.create` only accepts objects or changes, but you passed it: ' + attrs);
    }

    /**
     * Create a `Change` from a JSON `object`.
     *
     * @param {Object} object
     * @return {Change}
     */

  }, {
    key: 'fromJSON',
    value: function fromJSON(object) {
      var value = object.value,
          _object$operations = object.operations,
          operations = _object$operations === undefined ? [] : _object$operations;


      var change = new Change({
        value: Value.create(value),
        operations: Operation.createList(operations)
      });

      return change;
    }
  }]);
  return Change;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Record"])(DEFAULTS$12));

/**
 * A plugin that adds a set of commands to the editor.
 *
 * @param {Object} commands
 * @return {Object}
 */

function CommandsPlugin() {
  var commands = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /**
   * On command, if it exists in our list of commands, call it.
   *
   * @param {Object} command
   * @param {Editor} editor
   * @param {Function} next
   */

  function onCommand(command, editor, next) {
    var type = command.type,
        args = command.args;

    var fn = commands[type];
    if (!fn) return next();
    editor.command.apply(editor, [fn].concat(toConsumableArray(args)));
  }

  /**
   * On construct, register all the commands.
   *
   * @param {Editor} editor
   * @param {Function} next
   */

  function onConstruct(editor, next) {
    for (var command in commands) {
      editor.registerCommand(command);
    }

    return next();
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onCommand: onCommand,
    onConstruct: onConstruct
  };
}

/**
 * Surrogate pair start and end points.
 *
 * @type {Number}
 */

var SURROGATE_START = 0xd800;
var SURROGATE_END = 0xdfff;

/**
 * A regex to match space characters.
 *
 * @type {RegExp}
 */

var SPACE = /\s/;

/**
 * A regex to match chameleon characters, that count as word characters as long
 * as they are inside of a word.
 *
 * @type {RegExp}
 */

var CHAMELEON = /['\u2018\u2019]/;

/**
 * A regex that matches punctuation.
 *
 * @type {RegExp}
 */

var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;

/**
 * Is a character `code` in a surrogate character.
 *
 * @param {Number} code
 * @return {Boolean}
 */

function isSurrogate(code) {
  return SURROGATE_START <= code && code <= SURROGATE_END;
}

/**
 * Is a character a word character? Needs the `remaining` characters too.
 *
 * @param {String} char
 * @param {String|Void} remaining
 * @return {Boolean}
 */

function isWord(char, remaining) {
  if (SPACE.test(char)) return false;

  // If it's a chameleon character, recurse to see if the next one is or not.
  if (CHAMELEON.test(char)) {
    var next = remaining.charAt(0);
    var length = getCharLength(next);
    next = remaining.slice(0, length);
    var rest = remaining.slice(length);
    if (isWord(next, rest)) return true;
  }

  if (PUNCTUATION.test(char)) return false;
  return true;
}

/**
 * Get the length of a `character`.
 *
 * @param {String} char
 * @return {Number}
 */

function getCharLength(char) {
  return isSurrogate(char.charCodeAt(0)) ? 2 : 1;
}

/**
 * Get the offset to the end of the first character in `text`.
 *
 * @param {String} text
 * @return {Number}
 */

function getCharOffset(text) {
  var char = text.charAt(0);
  return getCharLength(char);
}

/**
 * Get the offset to the end of the character before an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getCharOffsetBackward(text, offset) {
  text = text.slice(0, offset);
  text = Object(esrever__WEBPACK_IMPORTED_MODULE_6__["reverse"])(text);
  return getCharOffset(text);
}

/**
 * Get the offset to the end of the character after an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getCharOffsetForward(text, offset) {
  text = text.slice(offset);
  return getCharOffset(text);
}

/**
 * Get the offset to the end of the first word in `text`.
 *
 * @param {String} text
 * @return {Number}
 */

function getWordOffset(text) {
  var length = 0;
  var i = 0;
  var started = false;
  var char = void 0;

  while (char = text.charAt(i)) {
    var l = getCharLength(char);
    char = text.slice(i, i + l);
    var rest = text.slice(i + l);

    if (isWord(char, rest)) {
      started = true;
      length += l;
    } else if (!started) {
      length += l;
    } else {
      break;
    }

    i += l;
  }

  return length;
}

/**
 * Get the offset to the end of the word before an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getWordOffsetBackward(text, offset) {
  text = text.slice(0, offset);
  text = Object(esrever__WEBPACK_IMPORTED_MODULE_6__["reverse"])(text);
  var o = getWordOffset(text);
  return o;
}

/**
 * Get the offset to the end of the word after an `offset` in `text`.
 *
 * @param {String} text
 * @param {Number} offset
 * @return {Number}
 */

function getWordOffsetForward(text, offset) {
  text = text.slice(offset);
  var o = getWordOffset(text);
  return o;
}

/**
 * Export.
 *
 * @type {Object}
 */

var TextUtils = {
  getCharLength: getCharLength,
  getCharOffset: getCharOffset,
  getCharOffsetBackward: getCharOffsetBackward,
  getCharOffsetForward: getCharOffsetForward,
  getWordOffset: getWordOffset,
  getWordOffsetBackward: getWordOffsetBackward,
  getWordOffsetForward: getWordOffsetForward,
  isSurrogate: isSurrogate,
  isWord: isWord
};

/**
 * Ensure that an expanded selection is deleted first, and return the updated
 * range to account for the deleted part.
 *
 * @param {Editor}
 */

function deleteExpandedAtRange(editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
  }

  var value = editor.value;
  var document = value.document;
  var _range = range,
      start = _range.start,
      end = _range.end;


  if (document.hasDescendant(start.key)) {
    range = range.moveToStart();
  } else {
    range = range.moveTo(end.key, 0).normalize(document);
  }

  return range;
}

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$1 = {};

/**
 * Add a new `mark` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mixed} mark
 */

Commands$1.addMarkAtRange = function (editor, range, mark) {
  if (range.isCollapsed) return;

  var value = editor.value;
  var document = value.document;
  var start = range.start,
      end = range.end;

  var texts = document.getTextsAtRange(range);

  editor.withoutNormalizing(function () {
    texts.forEach(function (node) {
      var key = node.key;

      var index = 0;
      var length = node.text.length;

      if (key == start.key) index = start.offset;
      if (key == end.key) length = end.offset;
      if (key == start.key && key == end.key) length = end.offset - start.offset;

      editor.addMarkByKey(key, index, length, mark);
    });
  });
};

/**
 * Add a list of `marks` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Array<Mixed>} mark
 */

Commands$1.addMarksAtRange = function (editor, range, marks) {
  marks.forEach(function (mark) {
    return editor.addMarkAtRange(range, mark);
  });
};

/**
 * Delete everything in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteAtRange = function (editor, range) {
  // Snapshot the selection, which creates an extra undo save point, so that
  // when you undo a delete, the expanded selection will be retained.
  editor.snapshotSelection();

  var value = editor.value;
  var start = range.start,
      end = range.end;

  var startKey = start.key;
  var startOffset = start.offset;
  var endKey = end.key;
  var endOffset = end.offset;
  var document = value.document;

  var isStartVoid = document.hasVoidParent(startKey, editor);
  var isEndVoid = document.hasVoidParent(endKey, editor);
  var startBlock = document.getClosestBlock(startKey);
  var endBlock = document.getClosestBlock(endKey);

  // Check if we have a "hanging" selection case where the even though the
  // selection extends into the start of the end node, we actually want to
  // ignore that for UX reasons.
  var isHanging = startOffset == 0 && endOffset == 0 && isStartVoid == false && startKey == startBlock.getFirstText().key && endKey == endBlock.getFirstText().key;

  // If it's a hanging selection, nudge it back to end in the previous text.
  if (isHanging && isEndVoid) {
    var prevText = document.getPreviousText(endKey);
    endKey = prevText.key;
    endOffset = prevText.text.length;
    isEndVoid = document.hasVoidParent(endKey, editor);
  }

  editor.withoutNormalizing(function () {
    // If the start node is inside a void node, remove the void node and update
    // the starting point to be right after it, continuously until the start point
    // is not a void, or until the entire range is handled.
    while (isStartVoid) {
      var startVoid = document.getClosestVoid(startKey, editor);
      var nextText = document.getNextText(startKey);
      editor.removeNodeByKey(startVoid.key);

      // If the start and end keys are the same, we're done.
      if (startKey == endKey) return;

      // If there is no next text node, we're done.
      if (!nextText) return;

      // Continue...
      document = editor.value.document;
      startKey = nextText.key;
      startOffset = 0;
      isStartVoid = document.hasVoidParent(startKey, editor);
    }

    // If the end node is inside a void node, do the same thing but backwards. But
    // we don't need any aborting checks because if we've gotten this far there
    // must be a non-void node that will exit the loop.
    while (isEndVoid) {
      var endVoid = document.getClosestVoid(endKey, editor);
      var _prevText = document.getPreviousText(endKey);
      editor.removeNodeByKey(endVoid.key);

      // Continue...
      document = editor.value.document;
      endKey = _prevText.key;
      endOffset = _prevText.text.length;
      isEndVoid = document.hasVoidParent(endKey, editor);
    }

    // If the start and end key are the same, and it was a hanging selection, we
    // can just remove the entire block.
    if (startKey == endKey && isHanging) {
      editor.removeNodeByKey(startBlock.key);
      return;
    } else if (startKey == endKey) {
      // Otherwise, if it wasn't hanging, we're inside a single text node, so we can
      // simply remove the text in the range.
      var index = startOffset;
      var length = endOffset - startOffset;
      editor.removeTextByKey(startKey, index, length);
      return;
    } else {
      // Otherwise, we need to recursively remove text and nodes inside the start
      // block after the start offset and inside the end block before the end
      // offset. Then remove any blocks that are in between the start and end
      // blocks. Then finally merge the start and end nodes.
      startBlock = document.getClosestBlock(startKey);
      endBlock = document.getClosestBlock(endKey);
      var startText = document.getNode(startKey);
      var endText = document.getNode(endKey);
      var startLength = startText.text.length - startOffset;
      var endLength = endOffset;

      var ancestor = document.getCommonAncestor(startKey, endKey);
      var startChild = ancestor.getFurthestAncestor(startKey);
      var endChild = ancestor.getFurthestAncestor(endKey);

      var startParent = document.getParent(startBlock.key);
      var startParentIndex = startParent.nodes.indexOf(startBlock);
      var endParentIndex = startParent.nodes.indexOf(endBlock);

      var child = void 0;

      // Iterate through all of the nodes in the tree after the start text node
      // but inside the end child, and remove them.
      child = startText;

      while (child.key != startChild.key) {
        var parent = document.getParent(child.key);
        var _index = parent.nodes.indexOf(child);
        var afters = parent.nodes.slice(_index + 1);

        afters.reverse().forEach(function (node) {
          editor.removeNodeByKey(node.key);
        });

        child = parent;
      }

      // Remove all of the middle children.
      var startChildIndex = ancestor.nodes.indexOf(startChild);
      var endChildIndex = ancestor.nodes.indexOf(endChild);
      var middles = ancestor.nodes.slice(startChildIndex + 1, endChildIndex);

      middles.reverse().forEach(function (node) {
        editor.removeNodeByKey(node.key);
      });

      // Remove the nodes before the end text node in the tree.
      child = endText;

      while (child.key != endChild.key) {
        var _parent = document.getParent(child.key);
        var _index2 = _parent.nodes.indexOf(child);
        var befores = _parent.nodes.slice(0, _index2);

        befores.reverse().forEach(function (node) {
          editor.removeNodeByKey(node.key);
        });

        child = _parent;
      }

      // Remove any overlapping text content from the leaf text nodes.
      if (startLength != 0) {
        editor.removeTextByKey(startKey, startOffset, startLength);
      }

      if (endLength != 0) {
        editor.removeTextByKey(endKey, 0, endOffset);
      }

      // If the start and end blocks aren't the same, move and merge the end block
      // into the start block.
      if (startBlock.key != endBlock.key) {
        document = editor.value.document;
        var lonely = document.getFurthestOnlyChildAncestor(endBlock.key);

        // Move the end block to be right after the start block.
        if (endParentIndex != startParentIndex + 1) {
          editor.moveNodeByKey(endBlock.key, startParent.key, startParentIndex + 1);
        }

        // If the selection is hanging, just remove the start block, otherwise
        // merge the end block into it.
        if (isHanging) {
          editor.removeNodeByKey(startBlock.key);
        } else {
          editor.mergeNodeByKey(endBlock.key);
        }

        // If nested empty blocks are left over above the end block, remove them.
        if (lonely) {
          editor.removeNodeByKey(lonely.key);
        }
      }
    }
  });
};

/**
 * Delete backward `n` characters at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} n (optional)
 */

Commands$1.deleteBackwardAtRange = function (editor, range) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n === 0) return;
  var value = editor.value;
  var document = value.document;
  var _range2 = range,
      start = _range2.start,
      focus = _range2.focus;

  // If the range is expanded, perform a regular delete instead.

  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var voidParent = document.getClosestVoid(start.key, editor);

  // If there is a void parent, delete it.
  if (voidParent) {
    editor.removeNodeByKey(voidParent.key);
    return;
  }

  // If the range is at the start of the document, abort.
  if (start.isAtStartOfNode(document)) {
    return;
  }

  var block = document.getClosestBlock(start.key);

  // PERF: If the closest block is empty, remove it. This is just a shortcut,
  // since merging it would result in the same outcome.
  if (document.nodes.size !== 1 && block && block.text === '') {
    editor.removeNodeByKey(block.key);
    return;
  }

  // If the range is at the start of the text node, we need to figure out what
  // is behind it to know how to delete...
  var text = document.getDescendant(start.key);

  if (start.isAtStartOfNode(text)) {
    var prev = document.getPreviousText(text.key);
    var inline = document.getClosestInline(text.key);

    // If the range is at the start of the inline node, and previous text node
    // is empty, take the text node before that, or "prevBlock" would be the
    // same node as "block"
    if (inline && prev.text === '') {
      prev = document.getPreviousText(prev.key);
    }

    var prevBlock = document.getClosestBlock(prev.key);
    var prevVoid = document.getClosestVoid(prev.key, editor);

    // If the previous text node has a void parent, remove it.
    if (prevVoid) {
      editor.removeNodeByKey(prevVoid.key);
      return;
    }

    // If we're deleting by one character and the previous text node is not
    // inside the current block, we need to merge the two blocks together.
    if (n == 1 && prevBlock != block) {
      range = range.moveAnchorTo(prev.key, prev.text.length);
      editor.deleteAtRange(range);
      return;
    }
  }

  // If the focus offset is farther than the number of characters to delete,
  // just remove the characters backwards inside the current node.
  if (n < focus.offset) {
    range = range.moveFocusBackward(n);
    editor.deleteAtRange(range);
    return;
  }

  // Otherwise, we need to see how many nodes backwards to go.
  var node = text;
  var offset = 0;
  var traversed = focus.offset;

  while (n > traversed) {
    node = document.getPreviousText(node.key);
    var next = traversed + node.text.length;

    if (n <= next) {
      offset = next - n;
      break;
    } else {
      traversed = next;
    }
  }

  range = range.moveAnchorTo(node.key, offset);
  editor.deleteAtRange(range);
};

/**
 * Delete backward until the character boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteCharBackwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  var text = startBlock.text;

  var n = TextUtils.getCharOffsetBackward(text, o);
  editor.deleteBackwardAtRange(range, n);
};

/**
 * Delete forward until the character boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteCharForwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  var text = startBlock.text;

  var n = TextUtils.getCharOffsetForward(text, o);
  editor.deleteForwardAtRange(range, n);
};

/**
 * Delete forward `n` characters at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} n (optional)
 */

Commands$1.deleteForwardAtRange = function (editor, range) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n === 0) return;
  var value = editor.value;
  var document = value.document;
  var _range3 = range,
      start = _range3.start,
      focus = _range3.focus;

  // If the range is expanded, perform a regular delete instead.

  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var voidParent = document.getClosestVoid(start.key, editor);

  // If the node has a void parent, delete it.
  if (voidParent) {
    editor.removeNodeByKey(voidParent.key);
    return;
  }

  var block = document.getClosestBlock(start.key);

  // If the closest is not void, but empty, remove it
  if (block && !editor.isVoid(block) && block.text === '' && document.nodes.size !== 1) {
    var nextBlock = document.getNextBlock(block.key);
    editor.removeNodeByKey(block.key);

    if (nextBlock && nextBlock.key) {
      editor.moveToStartOfNode(nextBlock);
    }

    return;
  }

  // If the range is at the start of the document, abort.
  if (start.isAtEndOfNode(document)) {
    return;
  }

  // If the range is at the start of the text node, we need to figure out what
  // is behind it to know how to delete...
  var text = document.getDescendant(start.key);

  if (start.isAtEndOfNode(text)) {
    var next = document.getNextText(text.key);
    var _nextBlock = document.getClosestBlock(next.key);
    var nextVoid = document.getClosestVoid(next.key, editor);

    // If the next text node has a void parent, remove it.
    if (nextVoid) {
      editor.removeNodeByKey(nextVoid.key);
      return;
    }

    // If we're deleting by one character and the previous text node is not
    // inside the current block, we need to merge the two blocks together.
    if (n == 1 && _nextBlock != block) {
      range = range.moveFocusTo(next.key, 0);
      editor.deleteAtRange(range);
      return;
    }
  }

  // If the remaining characters to the end of the node is greater than or equal
  // to the number of characters to delete, just remove the characters forwards
  // inside the current node.
  if (n <= text.text.length - focus.offset) {
    range = range.moveFocusForward(n);
    editor.deleteAtRange(range);
    return;
  }

  // Otherwise, we need to see how many nodes forwards to go.
  var node = text;
  var offset = focus.offset;
  var traversed = text.text.length - focus.offset;

  while (n > traversed) {
    node = document.getNextText(node.key);
    var _next = traversed + node.text.length;

    if (n <= _next) {
      offset = n - traversed;
      break;
    } else {
      traversed = _next;
    }
  }

  range = range.moveFocusTo(node.key, offset);
  editor.deleteAtRange(range);
};

/**
 * Delete backward until the line boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteLineBackwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  editor.deleteBackwardAtRange(range, o);
};

/**
 * Delete forward until the line boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteLineForwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  editor.deleteForwardAtRange(range, startBlock.text.length - o);
};

/**
 * Delete backward until the word boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteWordBackwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  var text = startBlock.text;

  var n = o === 0 ? 1 : TextUtils.getWordOffsetBackward(text, o);
  editor.deleteBackwardAtRange(range, n);
};

/**
 * Delete forward until the word boundary at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 */

Commands$1.deleteWordForwardAtRange = function (editor, range) {
  if (range.isExpanded) {
    editor.deleteAtRange(range);
    return;
  }

  var value = editor.value;
  var document = value.document;
  var start = range.start;

  var startBlock = document.getClosestBlock(start.key);
  var offset = startBlock.getOffset(start.key);
  var o = offset + start.offset;
  var text = startBlock.text;

  var wordOffset = TextUtils.getWordOffsetForward(text, o);
  var n = wordOffset === 0 ? 1 : wordOffset;
  editor.deleteForwardAtRange(range, n);
};

/**
 * Insert a `block` node at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Block|String|Object} block
 */

Commands$1.insertBlockAtRange = function (editor, range, block) {
  range = deleteExpandedAtRange(editor, range);
  block = Block.create(block);

  var value = editor.value;
  var document = value.document;
  var _range4 = range,
      start = _range4.start;

  var startKey = start.key;
  var startOffset = start.offset;
  var startBlock = document.getClosestBlock(startKey);
  var startInline = document.getClosestInline(startKey);
  var parent = document.getParent(startBlock.key);
  var index = parent.nodes.indexOf(startBlock);

  if (editor.isVoid(startBlock)) {
    var extra = start.isAtEndOfNode(startBlock) ? 1 : 0;
    editor.insertNodeByKey(parent.key, index + extra, block);
  } else if (!startInline && startBlock.text === '') {
    editor.insertNodeByKey(parent.key, index + 1, block);
  } else if (start.isAtStartOfNode(startBlock)) {
    editor.insertNodeByKey(parent.key, index, block);
  } else if (start.isAtEndOfNode(startBlock)) {
    editor.insertNodeByKey(parent.key, index + 1, block);
  } else {
    if (startInline && editor.isVoid(startInline)) {
      var atEnd = start.isAtEndOfNode(startInline);
      var siblingText = atEnd ? document.getNextText(startKey) : document.getPreviousText(startKey);

      var splitRange = atEnd ? range.moveToStartOfNode(siblingText) : range.moveToEndOfNode(siblingText);

      startKey = splitRange.start.key;
      startOffset = splitRange.start.offset;
    }

    editor.withoutNormalizing(function () {
      editor.splitDescendantsByKey(startBlock.key, startKey, startOffset);
      editor.insertNodeByKey(parent.key, index + 1, block);
    });
  }
};

/**
 * Insert a `fragment` at a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Document} fragment
 */

Commands$1.insertFragmentAtRange = function (editor, range, fragment) {
  editor.withoutNormalizing(function () {
    range = deleteExpandedAtRange(editor, range);

    // If the fragment is empty, there's nothing to do after deleting.
    if (!fragment.nodes.size) return;

    // Regenerate the keys for all of the fragments nodes, so that they're
    // guaranteed not to collide with the existing keys in the document. Otherwise
    // they will be rengerated automatically and we won't have an easy way to
    // reference them.
    fragment = fragment.mapDescendants(function (child) {
      return child.regenerateKey();
    });

    // Calculate a few things...
    var _range5 = range,
        start = _range5.start;
    var value = editor.value;
    var document = value.document;

    var startText = document.getDescendant(start.key);
    var startBlock = document.getClosestBlock(startText.key);
    var startChild = startBlock.getFurthestAncestor(startText.key);
    var isAtStart = start.isAtStartOfNode(startBlock);
    var parent = document.getParent(startBlock.key);
    var index = parent.nodes.indexOf(startBlock);
    var blocks = fragment.getBlocks();
    var firstChild = fragment.nodes.first();
    var lastChild = fragment.nodes.last();
    var firstBlock = blocks.first();
    var lastBlock = blocks.last();
    var insertionNode = findInsertionNode(fragment, document, startBlock.key);

    // If the fragment only contains a void block, use `insertBlock` instead.
    if (firstBlock === lastBlock && editor.isVoid(firstBlock)) {
      editor.insertBlockAtRange(range, firstBlock);
      return;
    }

    // If inserting the entire fragment and it starts or ends with a single
    // nested block, e.g. a table, we do not merge it with existing blocks.
    if (insertionNode === fragment && (firstChild.hasBlockChildren() || lastChild.hasBlockChildren())) {
      fragment.nodes.reverse().forEach(function (node) {
        editor.insertBlockAtRange(range, node);
      });
      return;
    }

    // If the first and last block aren't the same, we need to insert all of the
    // nodes after the insertion node's first block at the index.
    if (firstBlock != lastBlock) {
      var lonelyParent = insertionNode.getFurthest(firstBlock.key, function (p) {
        return p.nodes.size == 1;
      });
      var lonelyChild = lonelyParent || firstBlock;

      var startIndex = parent.nodes.indexOf(startBlock);
      var excludingLonelyChild = insertionNode.removeNode(lonelyChild.key);

      excludingLonelyChild.nodes.forEach(function (node, i) {
        var newIndex = startIndex + i + 1;
        editor.insertNodeByKey(parent.key, newIndex, node);
      });
    }

    // Check if we need to split the node.
    if (start.offset != 0) {
      editor.splitDescendantsByKey(startChild.key, start.key, start.offset);
    }

    // Update our variables with the new value.
    document = editor.value.document;
    startText = document.getDescendant(start.key);
    startBlock = document.getClosestBlock(start.key);
    startChild = startBlock.getFurthestAncestor(startText.key);

    // If the first and last block aren't the same, we need to move any of the
    // starting block's children after the split into the last block of the
    // fragment, which has already been inserted.
    if (firstBlock != lastBlock) {
      var nextChild = isAtStart ? startChild : startBlock.getNextSibling(startChild.key);
      var nextNodes = nextChild ? startBlock.nodes.skipUntil(function (n) {
        return n.key == nextChild.key;
      }) : Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
      var lastIndex = lastBlock.nodes.size;

      nextNodes.forEach(function (node, i) {
        var newIndex = lastIndex + i;
        editor.moveNodeByKey(node.key, lastBlock.key, newIndex);
      });
    }

    // If the starting block is empty, we replace it entirely with the first block
    // of the fragment, since this leads to a more expected behavior for the user.
    if (!editor.isVoid(startBlock) && startBlock.text === '') {
      editor.removeNodeByKey(startBlock.key);
      editor.insertNodeByKey(parent.key, index, firstBlock);
    } else {
      // Otherwise, we maintain the starting block, and insert all of the first
      // block's inline nodes into it at the split point.
      var inlineChild = startBlock.getFurthestAncestor(startText.key);
      var inlineIndex = startBlock.nodes.indexOf(inlineChild);

      firstBlock.nodes.forEach(function (inline, i) {
        var o = start.offset == 0 ? 0 : 1;
        var newIndex = inlineIndex + i + o;
        editor.insertNodeByKey(startBlock.key, newIndex, inline);
      });
    }
  });
};

var findInsertionNode = function findInsertionNode(fragment, document, startKey) {
  var hasSingleNode = function hasSingleNode(object) {
    return object && object.nodes.size === 1;
  };
  var firstNode = function firstNode(object) {
    return object && object.nodes.first();
  };
  var node = fragment;

  if (hasSingleNode(fragment)) {
    var fragmentInner = firstNode(fragment);

    var matches = function matches(documentNode) {
      return documentNode.type === fragmentInner.type;
    };
    var documentInner = document.getFurthest(startKey, matches);

    if (documentInner === document.getParent(startKey)) node = fragmentInner;

    while (hasSingleNode(fragmentInner) && hasSingleNode(documentInner)) {
      fragmentInner = firstNode(fragmentInner);
      documentInner = firstNode(documentInner);

      if (fragmentInner.type === documentInner.type) {
        node = fragmentInner;
      } else {
        break;
      }
    }
  }

  return node;
};

/**
 * Insert an `inline` node at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Inline|String|Object} inline
 */

Commands$1.insertInlineAtRange = function (editor, range, inline) {
  inline = Inline.create(inline);

  editor.withoutNormalizing(function () {
    range = deleteExpandedAtRange(editor, range);

    var value = editor.value;
    var document = value.document;
    var _range6 = range,
        start = _range6.start;

    var parent = document.getParent(start.key);
    var startText = document.assertDescendant(start.key);
    var index = parent.nodes.indexOf(startText);

    if (editor.isVoid(parent)) return;

    editor.splitNodeByKey(start.key, start.offset);
    editor.insertNodeByKey(parent.key, index + 1, inline);
  });
};

/**
 * Insert `text` at a `range`, with optional `marks`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$1.insertTextAtRange = function (editor, range, text, marks) {
  range = deleteExpandedAtRange(editor, range);

  var value = editor.value;
  var document = value.document;
  var _range7 = range,
      start = _range7.start;

  var offset = start.offset;
  var parent = document.getParent(start.key);

  if (editor.isVoid(parent)) {
    return;
  }

  editor.insertTextByKey(start.key, offset, text, marks);
};

/**
 * Remove an existing `mark` to the characters at `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mark|String} mark (optional)
 */

Commands$1.removeMarkAtRange = function (editor, range, mark) {
  if (range.isCollapsed) return;

  var value = editor.value;
  var document = value.document;

  var texts = document.getTextsAtRange(range);
  var start = range.start,
      end = range.end;


  editor.withoutNormalizing(function () {
    texts.forEach(function (node) {
      var key = node.key;

      var index = 0;
      var length = node.text.length;

      if (key == start.key) index = start.offset;
      if (key == end.key) length = end.offset;
      if (key == start.key && key == end.key) length = end.offset - start.offset;

      editor.removeMarkByKey(key, index, length, mark);
    });
  });
};

/**
 * Set the `properties` of block nodes in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Object|String} properties
 */

Commands$1.setBlocksAtRange = function (editor, range, properties) {
  var value = editor.value;
  var document = value.document;

  var blocks = document.getLeafBlocksAtRange(range);

  var start = range.start,
      end = range.end,
      isCollapsed = range.isCollapsed;

  var isStartVoid = document.hasVoidParent(start.key, editor);
  var startBlock = document.getClosestBlock(start.key);
  var endBlock = document.getClosestBlock(end.key);

  // Check if we have a "hanging" selection case where the even though the
  // selection extends into the start of the end node, we actually want to
  // ignore that for UX reasons.
  var isHanging = isCollapsed == false && start.offset == 0 && end.offset == 0 && isStartVoid == false && start.key == startBlock.getFirstText().key && end.key == endBlock.getFirstText().key;

  // If it's a hanging selection, ignore the last block.
  var sets = isHanging ? blocks.slice(0, -1) : blocks;

  editor.withoutNormalizing(function () {
    sets.forEach(function (block) {
      editor.setNodeByKey(block.key, properties);
    });
  });
};

/**
 * Set the `properties` of inline nodes in a `range`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Object|String} properties
 */

Commands$1.setInlinesAtRange = function (editor, range, properties) {
  var value = editor.value;
  var document = value.document;

  var inlines = document.getLeafInlinesAtRange(range);

  editor.withoutNormalizing(function () {
    inlines.forEach(function (inline) {
      editor.setNodeByKey(inline.key, properties);
    });
  });
};

/**
 * Split the block nodes at a `range`, to optional `height`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} height (optional)
 */

Commands$1.splitBlockAtRange = function (editor, range) {
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  range = deleteExpandedAtRange(editor, range);

  var _range8 = range,
      start = _range8.start,
      end = _range8.end;
  var value = editor.value;
  var _value = value,
      document = _value.document;

  var node = document.assertDescendant(start.key);
  var parent = document.getClosestBlock(node.key);
  var h = 0;

  while (parent && parent.object == 'block' && h < height) {
    node = parent;
    parent = document.getClosestBlock(parent.key);
    h++;
  }

  editor.withoutNormalizing(function () {
    editor.splitDescendantsByKey(node.key, start.key, start.offset);

    value = editor.value;
    document = value.document;

    if (range.isExpanded) {
      if (range.isBackward) range = range.flip();
      var nextBlock = document.getNextBlock(node.key);
      range = range.moveAnchorToStartOfNode(nextBlock);
      range = range.setFocus(range.focus.setPath(null));

      if (start.key === end.key) {
        range = range.moveFocusTo(range.anchor.key, end.offset - start.offset);
      }

      range = document.resolveRange(range);
      editor.deleteAtRange(range);
    }
  });
};

/**
 * Split the inline nodes at a `range`, to optional `height`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Number} height (optional)
 */

Commands$1.splitInlineAtRange = function (editor, range) {
  var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

  range = deleteExpandedAtRange(editor, range);

  var _range9 = range,
      start = _range9.start;
  var value = editor.value;
  var document = value.document;

  var node = document.assertDescendant(start.key);
  var parent = document.getClosestInline(node.key);
  var h = 0;

  while (parent && parent.object == 'inline' && h < height) {
    node = parent;
    parent = document.getClosestInline(parent.key);
    h++;
  }

  editor.splitDescendantsByKey(node.key, start.key, start.offset);
};

/**
 * Add or remove a `mark` from the characters at `range`, depending on whether
 * it's already there.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Mixed} mark
 */

Commands$1.toggleMarkAtRange = function (editor, range, mark) {
  if (range.isCollapsed) return;

  mark = Mark.create(mark);

  var value = editor.value;
  var document = value.document;

  var marks = document.getActiveMarksAtRange(range);
  var exists = marks.some(function (m) {
    return m.equals(mark);
  });

  if (exists) {
    editor.removeMarkAtRange(range, mark);
  } else {
    editor.addMarkAtRange(range, mark);
  }
};

/**
 * Unwrap all of the block nodes in a `range` from a block with `properties`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String|Object} properties
 */

Commands$1.unwrapBlockAtRange = function (editor, range, properties) {
  properties = Node.createProperties(properties);

  var value = editor.value;
  var document = value.document;

  var blocks = document.getLeafBlocksAtRange(range);
  var wrappers = blocks.map(function (block) {
    return document.getClosest(block.key, function (parent) {
      if (parent.object != 'block') return false;
      if (properties.type != null && parent.type != properties.type) return false;
      if (properties.data != null && !parent.data.isSuperset(properties.data)) return false;
      return true;
    });
  }).filter(function (exists) {
    return exists;
  }).toOrderedSet().toList();

  editor.withoutNormalizing(function () {
    wrappers.forEach(function (block) {
      var first = block.nodes.first();
      var last = block.nodes.last();
      var parent = document.getParent(block.key);
      var index = parent.nodes.indexOf(block);

      var children = block.nodes.filter(function (child) {
        return blocks.some(function (b) {
          return child == b || child.hasDescendant(b.key);
        });
      });

      var firstMatch = children.first();
      var lastMatch = children.last();

      if (first == firstMatch && last == lastMatch) {
        block.nodes.forEach(function (child, i) {
          editor.moveNodeByKey(child.key, parent.key, index + i);
        });

        editor.removeNodeByKey(block.key);
      } else if (last == lastMatch) {
        block.nodes.skipUntil(function (n) {
          return n == firstMatch;
        }).forEach(function (child, i) {
          editor.moveNodeByKey(child.key, parent.key, index + 1 + i);
        });
      } else if (first == firstMatch) {
        block.nodes.takeUntil(function (n) {
          return n == lastMatch;
        }).push(lastMatch).forEach(function (child, i) {
          editor.moveNodeByKey(child.key, parent.key, index + i);
        });
      } else {
        var firstText = firstMatch.getFirstText();

        editor.splitDescendantsByKey(block.key, firstText.key, 0);

        document = editor.value.document;

        children.forEach(function (child, i) {
          if (i == 0) {
            var extra = child;
            child = document.getNextBlock(child.key);
            editor.removeNodeByKey(extra.key);
          }

          editor.moveNodeByKey(child.key, parent.key, index + 1 + i);
        });
      }
    });
  });
};

/**
 * Unwrap the inline nodes in a `range` from an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String|Object} properties
 */

Commands$1.unwrapInlineAtRange = function (editor, range, properties) {
  properties = Node.createProperties(properties);

  var value = editor.value;
  var document = value.document;

  var texts = document.getTextsAtRange(range);
  var inlines = texts.map(function (text) {
    return document.getClosest(text.key, function (parent) {
      if (parent.object != 'inline') return false;
      if (properties.type != null && parent.type != properties.type) return false;
      if (properties.data != null && !parent.data.isSuperset(properties.data)) return false;
      return true;
    });
  }).filter(function (exists) {
    return exists;
  }).toOrderedSet().toList();

  editor.withoutNormalizing(function () {
    inlines.forEach(function (inline) {
      var parent = editor.value.document.getParent(inline.key);
      var index = parent.nodes.indexOf(inline);

      inline.nodes.forEach(function (child, i) {
        editor.moveNodeByKey(child.key, parent.key, index + i);
      });

      editor.removeNodeByKey(inline.key);
    });
  });
};

/**
 * Wrap all of the blocks in a `range` in a new `block`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Block|Object|String} block
 */

Commands$1.wrapBlockAtRange = function (editor, range, block) {
  block = Block.create(block);
  block = block.set('nodes', block.nodes.clear());

  var value = editor.value;
  var document = value.document;


  var blocks = document.getLeafBlocksAtRange(range);
  var firstblock = blocks.first();
  var lastblock = blocks.last();
  var parent = void 0,
      siblings = void 0,
      index = void 0;

  // If there is only one block in the selection then we know the parent and
  // siblings.
  if (blocks.length === 1) {
    parent = document.getParent(firstblock.key);
    siblings = blocks;
  } else {
    // Determine closest shared parent to all blocks in selection.
    parent = document.getClosest(firstblock.key, function (p1) {
      return !!document.getClosest(lastblock.key, function (p2) {
        return p1 == p2;
      });
    });
  }

  // If no shared parent could be found then the parent is the document.
  if (parent == null) parent = document;

  // Create a list of direct children siblings of parent that fall in the
  // selection.
  if (siblings == null) {
    var indexes = parent.nodes.reduce(function (ind, node, i) {
      if (node == firstblock || node.hasDescendant(firstblock.key)) ind[0] = i;
      if (node == lastblock || node.hasDescendant(lastblock.key)) ind[1] = i;
      return ind;
    }, []);

    index = indexes[0];
    siblings = parent.nodes.slice(indexes[0], indexes[1] + 1);
  }

  // Get the index to place the new wrapped node at.
  if (index == null) {
    index = parent.nodes.indexOf(siblings.first());
  }

  editor.withoutNormalizing(function () {
    // Inject the new block node into the parent.
    editor.insertNodeByKey(parent.key, index, block);

    // Move the sibling nodes into the new block node.
    siblings.forEach(function (node, i) {
      editor.moveNodeByKey(node.key, block.key, i);
    });
  });
};

/**
 * Wrap the text and inlines in a `range` in a new `inline`.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {Inline|Object|String} inline
 */

Commands$1.wrapInlineAtRange = function (editor, range, inline) {
  var value = editor.value;
  var document = value.document;
  var start = range.start,
      end = range.end;


  if (range.isCollapsed) {
    // Wrapping an inline void
    var inlineParent = document.getClosestInline(start.key);

    if (!inlineParent) {
      return;
    }

    if (!editor.isVoid(inlineParent)) {
      return;
    }

    return editor.wrapInlineByKey(inlineParent.key, inline);
  }

  inline = Inline.create(inline);
  inline = inline.set('nodes', inline.nodes.clear());

  var blocks = document.getLeafBlocksAtRange(range);
  var startBlock = document.getClosestBlock(start.key);
  var endBlock = document.getClosestBlock(end.key);
  var startInline = document.getClosestInline(start.key);
  var endInline = document.getClosestInline(end.key);
  var startChild = startBlock.getFurthestAncestor(start.key);
  var endChild = endBlock.getFurthestAncestor(end.key);

  editor.withoutNormalizing(function () {
    if (!startInline || startInline != endInline) {
      editor.splitDescendantsByKey(endChild.key, end.key, end.offset);
      editor.splitDescendantsByKey(startChild.key, start.key, start.offset);
    }

    document = editor.value.document;
    startBlock = document.getDescendant(startBlock.key);
    endBlock = document.getDescendant(endBlock.key);
    startChild = startBlock.getFurthestAncestor(start.key);
    endChild = endBlock.getFurthestAncestor(end.key);
    var startIndex = startBlock.nodes.indexOf(startChild);
    var endIndex = endBlock.nodes.indexOf(endChild);

    if (startInline && startInline == endInline) {
      var text = startBlock.getTextsAtRange(range).get(0).splitText(start.offset)[1].splitText(end.offset - start.offset)[0];

      inline = inline.set('nodes', Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([text]));
      editor.insertInlineAtRange(range, inline);

      var inlinekey = inline.getFirstText().key;
      var rng = {
        anchor: {
          key: inlinekey,
          offset: 0
        },
        focus: {
          key: inlinekey,
          offset: end.offset - start.offset
        },
        isFocused: true
      };
      editor.select(rng);
    } else if (startBlock == endBlock) {
      document = editor.value.document;
      startBlock = document.getClosestBlock(start.key);
      startChild = startBlock.getFurthestAncestor(start.key);

      var startInner = document.getNextSibling(startChild.key);
      var startInnerIndex = startBlock.nodes.indexOf(startInner);
      var endInner = start.key == end.key ? startInner : startBlock.getFurthestAncestor(end.key);
      var inlines = startBlock.nodes.skipUntil(function (n) {
        return n == startInner;
      }).takeUntil(function (n) {
        return n == endInner;
      }).push(endInner);

      var node = inline.regenerateKey();

      editor.insertNodeByKey(startBlock.key, startInnerIndex, node);

      inlines.forEach(function (child, i) {
        editor.moveNodeByKey(child.key, node.key, i);
      });
    } else {
      var startInlines = startBlock.nodes.slice(startIndex + 1);
      var endInlines = endBlock.nodes.slice(0, endIndex + 1);
      var startNode = inline.regenerateKey();
      var endNode = inline.regenerateKey();

      editor.insertNodeByKey(startBlock.key, startIndex + 1, startNode);
      editor.insertNodeByKey(endBlock.key, endIndex, endNode);

      startInlines.forEach(function (child, i) {
        editor.moveNodeByKey(child.key, startNode.key, i);
      });

      endInlines.forEach(function (child, i) {
        editor.moveNodeByKey(child.key, endNode.key, i);
      });

      blocks.slice(1, -1).forEach(function (block) {
        var node = inline.regenerateKey();
        editor.insertNodeByKey(block.key, 0, node);

        block.nodes.forEach(function (child, i) {
          editor.moveNodeByKey(child.key, node.key, i);
        });
      });
    }
  });
};

/**
 * Wrap the text in a `range` in a prefix/suffix.
 *
 * @param {Editor} editor
 * @param {Range} range
 * @param {String} prefix
 * @param {String} suffix (optional)
 */

Commands$1.wrapTextAtRange = function (editor, range, prefix) {
  var suffix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : prefix;
  var start = range.start,
      end = range.end;

  var startRange = range.moveToStart();
  var endRange = range.moveToEnd();

  if (start.key == end.key) {
    endRange = endRange.moveForward(prefix.length);
  }

  editor.withoutNormalizing(function () {
    editor.insertTextAtRange(startRange, prefix, []);
    editor.insertTextAtRange(endRange, suffix, []);
  });
};

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$2 = {};

/**
 * Add mark to text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Mixed} mark
 */

Commands$2.addMarkByPath = function (editor, path, offset, length, mark) {
  mark = Mark.create(mark);
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var leaves = node.getLeaves();

  var operations = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the operation, continue on.
    if (ay < bx || by < ax) return;

    // If the leaf already has the mark, continue on.
    if (leaf.marks.has(mark)) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);

    operations.push({
      type: 'add_mark',
      value: value,
      path: path,
      offset: start,
      length: end - start,
      mark: mark
    });
  });

  operations.forEach(function (op) {
    return editor.applyOperation(op);
  });
};

/**
 * Insert a `fragment` at `index` in a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} index
 * @param {Fragment} fragment
 */

Commands$2.insertFragmentByPath = function (editor, path, index, fragment) {
  fragment.nodes.forEach(function (node, i) {
    editor.insertNodeByPath(path, index + i, node);
  });
};

/**
 * Insert a `node` at `index` in a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} index
 * @param {Node} node
 */

Commands$2.insertNodeByPath = function (editor, path, index, node) {
  var value = editor.value;


  editor.applyOperation({
    type: 'insert_node',
    value: value,
    path: path.concat(index),
    node: node
  });
};

/**
 * Insert `text` at `offset` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$2.insertTextByPath = function (editor, path, offset, text, marks) {
  var value = editor.value;
  var decorations = value.decorations,
      document = value.document;

  var node = document.assertNode(path);
  marks = marks || node.getMarksAtIndex(offset);

  var updated = false;
  var key = node.key;


  var decs = decorations.filter(function (dec) {
    var start = dec.start,
        end = dec.end,
        mark = dec.mark;

    var isAtomic = editor.isAtomic(mark);
    if (!isAtomic) return true;
    if (start.key !== key) return true;

    if (start.offset < offset && (end.key !== key || end.offset > offset)) {
      updated = true;
      return false;
    }

    return true;
  });

  if (updated) {
    editor.setDecorations(decs);
  }

  editor.applyOperation({
    type: 'insert_text',
    value: value,
    path: path,
    offset: offset,
    text: text,
    marks: marks
  });
};

/**
 * Merge a node by `path` with the previous node.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.mergeNodeByPath = function (editor, path) {
  var value = editor.value;
  var document = value.document;

  var original = document.getDescendant(path);
  var previous = document.getPreviousSibling(path);

  if (!previous) {
    throw new Error('Unable to merge node with path "' + path + '", because it has no previous sibling.');
  }

  var position = previous.object == 'text' ? previous.text.length : previous.nodes.size;

  editor.applyOperation({
    type: 'merge_node',
    value: value,
    path: path,
    position: position,
    // for undos to succeed we only need the type and data because
    // these are the only properties that get changed in the merge operation
    properties: {
      type: original.type,
      data: original.data
    },
    target: null
  });
};

/**
 * Move a node by `path` to a new parent by `newPath` and `index`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {String} newPath
 * @param {Number} index
 */

Commands$2.moveNodeByPath = function (editor, path, newPath, newIndex) {
  var value = editor.value;

  // If the operation path and newPath are the same,
  // this should be considered a NOOP

  if (PathUtils.isEqual(path, newPath)) {
    return editor;
  }

  editor.applyOperation({
    type: 'move_node',
    value: value,
    path: path,
    newPath: newPath.concat(newIndex)
  });
};

/**
 * Remove mark from text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Mark} mark
 */

Commands$2.removeMarkByPath = function (editor, path, offset, length, mark) {
  mark = Mark.create(mark);
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var leaves = node.getLeaves();

  var operations = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the operation, continue on.
    if (ay < bx || by < ax) return;

    // If the leaf already has the mark, continue on.
    if (!leaf.marks.has(mark)) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);

    operations.push({
      type: 'remove_mark',
      value: value,
      path: path,
      offset: start,
      length: end - start,
      mark: mark
    });
  });

  operations.forEach(function (op) {
    return editor.applyOperation(op);
  });
};

/**
 * Remove all `marks` from node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.removeAllMarksByPath = function (editor, path) {
  var state = editor.state;
  var document = state.document;

  var node = document.assertNode(path);
  var texts = node.object === 'text' ? [node] : node.getTextsAsArray();

  texts.forEach(function (text) {
    text.getMarksAsArray().forEach(function (mark) {
      editor.removeMarkByKey(text.key, 0, text.text.length, mark);
    });
  });
};

/**
 * Remove a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.removeNodeByPath = function (editor, path) {
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);

  editor.applyOperation({
    type: 'remove_node',
    value: value,
    path: path,
    node: node
  });
};

/**
 * Remove text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 */

Commands$2.removeTextByPath = function (editor, path, offset, length) {
  var value = editor.value;
  var decorations = value.decorations,
      document = value.document;

  var node = document.assertNode(path);
  var leaves = node.getLeaves();
  var text = node.text;


  var updated = false;
  var key = node.key;

  var from = offset;
  var to = offset + length;

  var decs = decorations.filter(function (dec) {
    var start = dec.start,
        end = dec.end,
        mark = dec.mark;

    var isAtomic = editor.isAtomic(mark);
    if (!isAtomic) return true;
    if (start.key !== key) return true;

    if (start.offset < from && (end.key !== key || end.offset > from)) {
      updated = true;
      return false;
    }

    if (start.offset < to && (end.key !== key || end.offset > to)) {
      updated = true;
      return null;
    }

    return true;
  });

  if (updated) {
    editor.setDecorations(decs);
  }

  var removals = [];
  var bx = offset;
  var by = offset + length;
  var o = 0;

  leaves.forEach(function (leaf) {
    var ax = o;
    var ay = ax + leaf.text.length;

    o += leaf.text.length;

    // If the leaf doesn't overlap with the removal, continue on.
    if (ay < bx || by < ax) return;

    // Otherwise, determine which offset and characters overlap.
    var start = Math.max(ax, bx);
    var end = Math.min(ay, by);
    var string = text.slice(start, end);

    removals.push({
      type: 'remove_text',
      value: value,
      path: path,
      offset: start,
      text: string,
      marks: leaf.marks
    });
  });

  // Apply in reverse order, so subsequent removals don't impact previous ones.
  removals.reverse().forEach(function (op) {
    return editor.applyOperation(op);
  });
};

/**
`* Replace a `node` with another `node`
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|Node} node
 */

Commands$2.replaceNodeByPath = function (editor, path, newNode) {
  newNode = Node.create(newNode);
  var index = path.last();
  var parentPath = PathUtils.lift(path);

  editor.withoutNormalizing(function () {
    editor.removeNodeByPath(path);
    editor.insertNodeByPath(parentPath, index, newNode);
  });
};

/**
 * Replace A Length of Text with another string or text
 * @param {Editor} editor
 * @param {String} key
 * @param {Number} offset
 * @param {Number} length
 * @param {string} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$2.replaceTextByPath = function (editor, path, offset, length, text, marks) {
  var document = editor.value.document;

  var node = document.assertNode(path);

  if (length + offset > node.text.length) {
    length = node.text.length - offset;
  }

  var range = document.createRange({
    anchor: { path: path, offset: offset },
    focus: { path: path, offset: offset + length }
  });

  var activeMarks = document.getActiveMarksAtRange(range);

  editor.withoutNormalizing(function () {
    editor.removeTextByPath(path, offset, length);

    if (!marks) {
      // Do not use mark at index when marks and activeMarks are both empty
      marks = activeMarks ? activeMarks : [];
    } else if (activeMarks) {
      // Do not use `has` because we may want to reset marks like font-size with
      // an updated data;
      activeMarks = activeMarks.filter(function (activeMark) {
        return !marks.find(function (m) {
          return activeMark.type === m.type;
        });
      });

      marks = activeMarks.merge(marks);
    }

    editor.insertTextByPath(path, offset, text, marks);
  });
};

/**
 * Set `properties` on mark on text at `offset` and `length` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} offset
 * @param {Number} length
 * @param {Mark} mark
 */

Commands$2.setMarkByPath = function (editor, path, offset, length, mark, properties) {
  mark = Mark.create(mark);
  properties = Mark.createProperties(properties);
  var value = editor.value;


  editor.applyOperation({
    type: 'set_mark',
    value: value,
    path: path,
    offset: offset,
    length: length,
    mark: mark,
    properties: properties
  });
};

/**
 * Set `properties` on a node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} properties
 */

Commands$2.setNodeByPath = function (editor, path, properties) {
  properties = Node.createProperties(properties);
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);

  editor.applyOperation({
    type: 'set_node',
    value: value,
    path: path,
    node: node,
    properties: properties
  });
};

/**
 * Insert `text` at `offset` in node by `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$2.setTextByPath = function (editor, path, text, marks) {
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var end = node.text.length;
  editor.replaceTextByPath(path, 0, end, text, marks);
};

/**
 * Split a node by `path` at `position`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Number} position
 * @param {Object} options
 */

Commands$2.splitNodeByPath = function (editor, path, position) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _options$target = options.target,
      target = _options$target === undefined ? null : _options$target;
  var value = editor.value;
  var document = value.document;

  var node = document.getDescendant(path);

  editor.applyOperation({
    type: 'split_node',
    value: value,
    path: path,
    position: position,
    target: target,
    properties: {
      type: node.type,
      data: node.data
    }
  });
};

/**
 * Split a node deeply down the tree by `path`, `textPath` and `textOffset`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Array} textPath
 * @param {Number} textOffset
 */

Commands$2.splitDescendantsByPath = function (editor, path, textPath, textOffset) {
  if (path.equals(textPath)) {
    editor.splitNodeByPath(textPath, textOffset);
    return;
  }

  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var text = document.assertNode(textPath);
  var ancestors = document.getAncestors(textPath);
  var nodes = ancestors.skipUntil(function (a) {
    return a.key == node.key;
  }).reverse().unshift(text);

  var previous = void 0;
  var index = void 0;

  editor.withoutNormalizing(function () {
    nodes.forEach(function (n) {
      var prevIndex = index == null ? null : index;
      index = previous ? n.nodes.indexOf(previous) + 1 : textOffset;
      previous = n;
      editor.splitNodeByKey(n.key, index, { target: prevIndex });
    });
  });
};

/**
 * Unwrap content from an inline parent with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} properties
 */

Commands$2.unwrapInlineByPath = function (editor, path, properties) {
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var node = document.assertNode(path);
  var first = node.getFirstText();
  var last = node.getLastText();
  var range = selection.moveToRangeOfNode(first, last);
  editor.unwrapInlineAtRange(range, properties);
};

/**
 * Unwrap content from a block parent with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Object|String} properties
 */

Commands$2.unwrapBlockByPath = function (editor, path, properties) {
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var node = document.assertNode(path);
  var first = node.getFirstText();
  var last = node.getLastText();
  var range = selection.moveToRangeOfNode(first, last);
  editor.unwrapBlockAtRange(range, properties);
};

/**
 * Unwrap a single node from its parent.
 *
 * If the node is surrounded with siblings, its parent will be
 * split. If the node is the only child, the parent is removed, and
 * simply replaced by the node itself.  Cannot unwrap a root node.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.unwrapNodeByPath = function (editor, path) {
  var value = editor.value;
  var document = value.document;

  document.assertNode(path);

  var parentPath = PathUtils.lift(path);
  var parent = document.assertNode(parentPath);
  var index = path.last();
  var parentIndex = parentPath.last();
  var grandPath = PathUtils.lift(parentPath);
  var isFirst = index === 0;
  var isLast = index === parent.nodes.size - 1;

  editor.withoutNormalizing(function () {
    if (parent.nodes.size === 1) {
      editor.moveNodeByPath(path, grandPath, parentIndex + 1);
      editor.removeNodeByPath(parentPath);
    } else if (isFirst) {
      editor.moveNodeByPath(path, grandPath, parentIndex);
    } else if (isLast) {
      editor.moveNodeByPath(path, grandPath, parentIndex + 1);
    } else {
      var updatedPath = PathUtils.increment(path, 1, parentPath.size - 1);
      updatedPath = updatedPath.set(updatedPath.size - 1, 0);
      editor.splitNodeByPath(parentPath, index);
      editor.moveNodeByPath(updatedPath, grandPath, parentIndex + 1);
    }
  });
};

/**
 * Unwrap all of the children of a node, by removing the node and replacing it
 * with the children in the tree.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

Commands$2.unwrapChildrenByPath = function (editor, path) {
  path = PathUtils.create(path);
  var value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var parentPath = PathUtils.lift(path);
  var index = path.last();
  var nodes = node.nodes;


  editor.withoutNormalizing(function () {
    nodes.reverse().forEach(function (child, i) {
      var childIndex = nodes.size - i - 1;
      var childPath = path.push(childIndex);
      editor.moveNodeByPath(childPath, parentPath, index + 1);
    });

    editor.removeNodeByPath(path);
  });
};

/**
 * Wrap a node in a block with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Block|Object|String} block
 */

Commands$2.wrapBlockByPath = function (editor, path, block) {
  block = Block.create(block);
  block = block.set('nodes', block.nodes.clear());
  var parentPath = PathUtils.lift(path);
  var index = path.last();
  var newPath = PathUtils.increment(path);

  editor.withoutNormalizing(function () {
    editor.insertNodeByPath(parentPath, index, block);
    editor.moveNodeByPath(newPath, path, 0);
  });
};

/**
 * Wrap a node in an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Block|Object|String} inline
 */

Commands$2.wrapInlineByPath = function (editor, path, inline) {
  inline = Inline.create(inline);
  inline = inline.set('nodes', inline.nodes.clear());
  var parentPath = PathUtils.lift(path);
  var index = path.last();
  var newPath = PathUtils.increment(path);

  editor.withoutNormalizing(function () {
    editor.insertNodeByPath(parentPath, index, inline);
    editor.moveNodeByPath(newPath, path, 0);
  });
};

/**
 * Wrap a node by `path` with `node`.
 *
 * @param {Editor} editor
 * @param {Array} path
 * @param {Node|Object} node
 */

Commands$2.wrapNodeByPath = function (editor, path, node) {
  node = Node.create(node);

  if (node.object === 'block') {
    editor.wrapBlockByPath(path, node);
  } else if (node.object === 'inline') {
    editor.wrapInlineByPath(path, node);
  }
};

/**
 * Mix in `*ByKey` variants.
 */

var COMMANDS = ['addMark', 'insertFragment', 'insertNode', 'insertText', 'mergeNode', 'removeAllMarks', 'removeMark', 'removeNode', 'removeText', 'replaceNode', 'replaceText', 'setMark', 'setNode', 'setText', 'splitNode', 'unwrapBlock', 'unwrapChildren', 'unwrapInline', 'unwrapNode', 'wrapBlock', 'wrapInline', 'wrapNode'];

var _loop = function _loop(method) {
  Commands$2[method + 'ByKey'] = function (editor, key) {
    for (var _len3 = arguments.length, args = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
      args[_key3 - 2] = arguments[_key3];
    }

    var value = editor.value;
    var document = value.document;

    var path = document.assertPath(key);
    editor[method + 'ByPath'].apply(editor, [path].concat(args));
  };
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = COMMANDS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var method = _step.value;

    _loop(method);
  }

  // Moving nodes takes two keys, so it's slightly different.
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

Commands$2.moveNodeByKey = function (editor, key, newKey) {
  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var value = editor.value;
  var document = value.document;

  var path = document.assertPath(key);
  var newPath = document.assertPath(newKey);
  editor.moveNodeByPath.apply(editor, [path, newPath].concat(args));
};

// Splitting descendants takes two keys, so it's slightly different.
Commands$2.splitDescendantsByKey = function (editor, key, textKey) {
  for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  var value = editor.value;
  var document = value.document;

  var path = document.assertPath(key);
  var textPath = document.assertPath(textKey);
  editor.splitDescendantsByPath.apply(editor, [path, textPath].concat(args));
};

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$3 = {};

/**
 * Save an `operation` into the history.
 *
 * @param {Editor} editor
 * @param {Object} operation
 */

Commands$3.save = function (editor, operation) {
  var operations = editor.operations,
      value = editor.value;
  var data = value.data;
  var _editor$tmp = editor.tmp,
      save = _editor$tmp.save,
      merge = _editor$tmp.merge;

  if (save === false) return;

  var undos = data.get('undos') || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
  var lastBatch = undos.last();
  var lastOperation = lastBatch && lastBatch.last();

  // If `merge` is non-commital, and this is not the first operation in a new
  // editor, then merge, otherwise merge based on the last operation.
  if (merge == null) {
    if (operations.size !== 0) {
      merge = true;
    } else {
      merge = shouldMerge(operation, lastOperation);
    }
  }

  // If the `merge` flag is true, add the operation to the last batch.
  if (merge && lastBatch) {
    var batch = lastBatch.push(operation);
    undos = undos.pop();
    undos = undos.push(batch);
  } else {
    // Otherwise, create a new batch with the operation.
    var _batch = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([operation]);
    undos = undos.push(_batch);
  }

  // Constrain the history to 100 entries for memory's sake.
  if (undos.size > 100) {
    undos = undos.takeLast(100);
  }

  // Clear the redos and update the history.
  editor.withoutSaving(function () {
    var redos = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
    var newData = data.set('undos', undos).set('redos', redos);
    editor.setData(newData);
  });
};

/**
 * Redo to the next value in the history.
 *
 * @param {Editor} editor
 */

Commands$3.redo = function (editor) {
  var value = editor.value;
  var data = value.data;

  var redos = data.get('redos') || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
  var undos = data.get('undos') || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
  var batch = redos.last();
  if (!batch) return;

  editor.withoutSaving(function () {
    // Replay the batch of operations.
    batch.forEach(function (op) {
      var _op = op,
          type = _op.type,
          properties = _op.properties;

      // When the operation mutates the selection, omit its `isFocused` value to
      // prevent the editor focus from changing during redoing.

      if (type === 'set_selection') {
        op = op.set('properties', lodash_omit__WEBPACK_IMPORTED_MODULE_7___default()(properties, 'isFocused'));
      }

      editor.applyOperation(op);
    });

    // Shift the next value into the undo stack.
    redos = redos.pop();
    undos = undos.push(batch);
    var newData = data.set('undos', undos).set('redos', redos);
    editor.setData(newData);
  });
};

/**
 * Undo the previous operations in the history.
 *
 * @param {Editor} editor
 */

Commands$3.undo = function (editor) {
  var value = editor.value;
  var data = value.data;

  var redos = data.get('redos') || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
  var undos = data.get('undos') || Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
  var batch = undos.last();
  if (!batch) return;

  editor.withoutSaving(function () {
    // Replay the inverse of the previous operations.
    batch.slice().reverse().map(function (op) {
      return op.invert();
    }).forEach(function (inverse) {
      var _inverse = inverse,
          type = _inverse.type,
          properties = _inverse.properties;

      // When the operation mutates the selection, omit its `isFocused` value to
      // prevent the editor focus from changing during undoing.

      if (type === 'set_selection') {
        inverse = inverse.set('properties', lodash_omit__WEBPACK_IMPORTED_MODULE_7___default()(properties, 'isFocused'));
      }

      editor.applyOperation(inverse);
    });

    // Shift the previous operations into the redo stack.
    redos = redos.push(batch);
    undos = undos.pop();
    var newData = data.set('undos', undos).set('redos', redos);
    editor.setData(newData);
  });
};

/**
 * Apply a series of changes inside a synchronous `fn`, without merging any of
 * the new operations into previous save point in the history.
 *
 * @param {Editor} editor
 * @param {Function} fn
 */

Commands$3.withoutMerging = function (editor, fn) {
  var value = editor.tmp.merge;
  editor.tmp.merge = false;
  fn(editor);
  editor.tmp.merge = value;
};

/**
 * Apply a series of changes inside a synchronous `fn`, without saving any of
 * their operations into the history.
 *
 * @param {Editor} editor
 * @param {Function} fn
 */

Commands$3.withoutSaving = function (editor, fn) {
  var value = editor.tmp.save;
  editor.tmp.save = false;
  fn(editor);
  editor.tmp.save = value;
};

/**
 * Check whether to merge a new operation `o` into the previous operation `p`.
 *
 * @param {Object} o
 * @param {Object} p
 * @return {Boolean}
 */

function shouldMerge(o, p) {
  if (!p) return false;

  var merge = o.type === 'set_selection' && p.type === 'set_selection' || o.type === 'insert_text' && p.type === 'insert_text' && o.offset === p.offset + p.text.length && o.path.equals(p.path) || o.type === 'remove_text' && p.type === 'remove_text' && o.offset + o.text.length === p.offset && o.path.equals(p.path);

  return merge;
}

var Commands$4 = {};

Commands$4.blur = function (editor) {
  editor.select({ isFocused: false });
};

Commands$4.deselect = function (editor) {
  var range = Selection.create();
  editor.select(range);
};

Commands$4.focus = function (editor) {
  editor.select({ isFocused: true });
};

Commands$4.flip = function (editor) {
  editor.command(proxy, 'flip');
};

Commands$4.moveAnchorBackward = function (editor) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  editor.command.apply(editor, [pointBackward, 'anchor'].concat(args));
};

Commands$4.moveAnchorWordBackward = function (editor) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  editor.command.apply(editor, [pointWordBackward, 'anchor'].concat(args));
};

Commands$4.moveAnchorForward = function (editor) {
  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  editor.command.apply(editor, [pointForward, 'anchor'].concat(args));
};

Commands$4.moveAnchorWordForward = function (editor) {
  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    args[_key4 - 1] = arguments[_key4];
  }

  editor.command.apply(editor, [pointWordForward, 'anchor'].concat(args));
};

Commands$4.moveAnchorTo = function (editor) {
  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  editor.command.apply(editor, [proxy, 'moveAnchorTo'].concat(args));
};

Commands$4.moveAnchorToEndOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'end', 'block');
};

Commands$4.moveAnchorToEndOfInline = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'end', 'inline');
};

Commands$4.moveAnchorToEndOfDocument = function (editor) {
  editor.moveAnchorToEndOfNode(editor.value.document).moveToAnchor();
};

Commands$4.moveAnchorToEndOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'block');
};

Commands$4.moveAnchorToEndOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'inline');
};

Commands$4.moveAnchorToEndOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'next', 'text');
};

Commands$4.moveAnchorToEndOfNode = function (editor) {
  for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    args[_key6 - 1] = arguments[_key6];
  }

  editor.command.apply(editor, [proxy, 'moveAnchorToEndOfNode'].concat(args));
};

Commands$4.moveAnchorToEndOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'block');
};

Commands$4.moveAnchorToEndOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'inline');
};

Commands$4.moveAnchorToEndOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'end', 'previous', 'text');
};

Commands$4.moveAnchorToEndOfText = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'end', 'text');
};

Commands$4.moveAnchorToStartOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'start', 'block');
};

Commands$4.moveAnchorToStartOfDocument = function (editor) {
  editor.moveAnchorToStartOfNode(editor.value.document).moveToAnchor();
};

Commands$4.moveAnchorToStartOfInline = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'start', 'inline');
};

Commands$4.moveAnchorToStartOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'block');
};

Commands$4.moveAnchorToStartOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'inline');
};

Commands$4.moveAnchorToStartOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'next', 'text');
};

Commands$4.moveAnchorToStartOfNode = function (editor) {
  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
    args[_key7 - 1] = arguments[_key7];
  }

  editor.command.apply(editor, [proxy, 'moveAnchorToStartOfNode'].concat(args));
};

Commands$4.moveAnchorToStartOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'block');
};

Commands$4.moveAnchorToStartOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'inline');
};

Commands$4.moveAnchorToStartOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'anchor', 'start', 'previous', 'text');
};

Commands$4.moveAnchorToStartOfText = function (editor) {
  editor.command(pointEdgeObject, 'anchor', 'start', 'text');
};

Commands$4.moveBackward = function (editor) {
  var _editor$moveAnchorBac;

  for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    args[_key8 - 1] = arguments[_key8];
  }

  (_editor$moveAnchorBac = editor.moveAnchorBackward.apply(editor, args)).moveFocusBackward.apply(_editor$moveAnchorBac, args);
};

Commands$4.moveWordBackward = function (editor) {
  for (var _len9 = arguments.length, args = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
    args[_key9 - 1] = arguments[_key9];
  }

  editor.moveFocusWordBackward.apply(editor, args).moveToFocus();
};

Commands$4.moveEndBackward = function (editor) {
  for (var _len10 = arguments.length, args = Array(_len10 > 1 ? _len10 - 1 : 0), _key10 = 1; _key10 < _len10; _key10++) {
    args[_key10 - 1] = arguments[_key10];
  }

  editor.command.apply(editor, [pointBackward, 'end'].concat(args));
};

Commands$4.moveEndWordBackward = function (editor) {
  for (var _len11 = arguments.length, args = Array(_len11 > 1 ? _len11 - 1 : 0), _key11 = 1; _key11 < _len11; _key11++) {
    args[_key11 - 1] = arguments[_key11];
  }

  editor.command.apply(editor, [pointWordBackward, 'end'].concat(args));
};

Commands$4.moveEndForward = function (editor) {
  for (var _len12 = arguments.length, args = Array(_len12 > 1 ? _len12 - 1 : 0), _key12 = 1; _key12 < _len12; _key12++) {
    args[_key12 - 1] = arguments[_key12];
  }

  editor.command.apply(editor, [pointForward, 'end'].concat(args));
};

Commands$4.moveEndWordForward = function (editor) {
  for (var _len13 = arguments.length, args = Array(_len13 > 1 ? _len13 - 1 : 0), _key13 = 1; _key13 < _len13; _key13++) {
    args[_key13 - 1] = arguments[_key13];
  }

  editor.command.apply(editor, [pointWordForward, 'end'].concat(args));
};

Commands$4.moveEndTo = function (editor) {
  for (var _len14 = arguments.length, args = Array(_len14 > 1 ? _len14 - 1 : 0), _key14 = 1; _key14 < _len14; _key14++) {
    args[_key14 - 1] = arguments[_key14];
  }

  editor.command.apply(editor, [proxy, 'moveEndTo'].concat(args));
};

Commands$4.moveEndToEndOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'end', 'end', 'block');
};

Commands$4.moveEndToEndOfDocument = function (editor) {
  editor.moveEndToEndOfNode(editor.value.document).moveToEnd();
};

Commands$4.moveEndToEndOfInline = function (editor) {
  editor.command(pointEdgeObject, 'end', 'end', 'inline');
};

Commands$4.moveEndToEndOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'block');
};

Commands$4.moveEndToEndOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'inline');
};

Commands$4.moveEndToEndOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'next', 'text');
};

Commands$4.moveEndToEndOfNode = function (editor) {
  for (var _len15 = arguments.length, args = Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    args[_key15 - 1] = arguments[_key15];
  }

  editor.command.apply(editor, [proxy, 'moveEndToEndOfNode'].concat(args));
};

Commands$4.moveEndToEndOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'block');
};

Commands$4.moveEndToEndOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'inline');
};

Commands$4.moveEndToEndOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'end', 'previous', 'text');
};

Commands$4.moveEndToEndOfText = function (editor) {
  editor.command(pointEdgeObject, 'end', 'end', 'text');
};

Commands$4.moveEndToStartOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'end', 'start', 'block');
};

Commands$4.moveEndToStartOfDocument = function (editor) {
  editor.moveEndToStartOfNode(editor.value.document).moveToEnd();
};

Commands$4.moveEndToStartOfInline = function (editor) {
  editor.command(pointEdgeObject, 'end', 'start', 'inline');
};

Commands$4.moveEndToStartOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'block');
};

Commands$4.moveEndToStartOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'inline');
};

Commands$4.moveEndToStartOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'next', 'text');
};

Commands$4.moveEndToStartOfNode = function (editor) {
  for (var _len16 = arguments.length, args = Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
    args[_key16 - 1] = arguments[_key16];
  }

  editor.command.apply(editor, [proxy, 'moveEndToStartOfNode'].concat(args));
};

Commands$4.moveEndToStartOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'block');
};

Commands$4.moveEndToStartOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'inline');
};

Commands$4.moveEndToStartOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'end', 'start', 'previous', 'text');
};

Commands$4.moveEndToStartOfText = function (editor) {
  editor.command(pointEdgeObject, 'end', 'start', 'text');
};

Commands$4.moveFocusBackward = function (editor) {
  for (var _len17 = arguments.length, args = Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
    args[_key17 - 1] = arguments[_key17];
  }

  editor.command.apply(editor, [pointBackward, 'focus'].concat(args));
};

Commands$4.moveFocusWordBackward = function (editor) {
  for (var _len18 = arguments.length, args = Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
    args[_key18 - 1] = arguments[_key18];
  }

  editor.command.apply(editor, [pointWordBackward, 'focus'].concat(args));
};

Commands$4.moveFocusForward = function (editor) {
  for (var _len19 = arguments.length, args = Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
    args[_key19 - 1] = arguments[_key19];
  }

  editor.command.apply(editor, [pointForward, 'focus'].concat(args));
};

Commands$4.moveFocusWordForward = function (editor) {
  for (var _len20 = arguments.length, args = Array(_len20 > 1 ? _len20 - 1 : 0), _key20 = 1; _key20 < _len20; _key20++) {
    args[_key20 - 1] = arguments[_key20];
  }

  editor.command.apply(editor, [pointWordForward, 'focus'].concat(args));
};

Commands$4.moveFocusTo = function (editor) {
  for (var _len21 = arguments.length, args = Array(_len21 > 1 ? _len21 - 1 : 0), _key21 = 1; _key21 < _len21; _key21++) {
    args[_key21 - 1] = arguments[_key21];
  }

  editor.command.apply(editor, [proxy, 'moveFocusTo'].concat(args));
};

Commands$4.moveFocusToEndOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'end', 'block');
};

Commands$4.moveFocusToEndOfDocument = function (editor) {
  editor.moveFocusToEndOfNode(editor.value.document).moveToFocus();
};

Commands$4.moveFocusToEndOfInline = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'end', 'inline');
};

Commands$4.moveFocusToEndOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'block');
};

Commands$4.moveFocusToEndOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'inline');
};

Commands$4.moveFocusToEndOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'next', 'text');
};

Commands$4.moveFocusToEndOfNode = function (editor) {
  for (var _len22 = arguments.length, args = Array(_len22 > 1 ? _len22 - 1 : 0), _key22 = 1; _key22 < _len22; _key22++) {
    args[_key22 - 1] = arguments[_key22];
  }

  editor.command.apply(editor, [proxy, 'moveFocusToEndOfNode'].concat(args));
};

Commands$4.moveFocusToEndOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'block');
};

Commands$4.moveFocusToEndOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'inline');
};

Commands$4.moveFocusToEndOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'end', 'previous', 'text');
};

Commands$4.moveFocusToEndOfText = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'end', 'text');
};

Commands$4.moveFocusToStartOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'start', 'block');
};

Commands$4.moveFocusToStartOfDocument = function (editor) {
  editor.moveFocusToStartOfNode(editor.value.document).moveToFocus();
};

Commands$4.moveFocusToStartOfInline = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'start', 'inline');
};

Commands$4.moveFocusToStartOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'block');
};

Commands$4.moveFocusToStartOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'inline');
};

Commands$4.moveFocusToStartOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'next', 'text');
};

Commands$4.moveFocusToStartOfNode = function (editor) {
  for (var _len23 = arguments.length, args = Array(_len23 > 1 ? _len23 - 1 : 0), _key23 = 1; _key23 < _len23; _key23++) {
    args[_key23 - 1] = arguments[_key23];
  }

  editor.command.apply(editor, [proxy, 'moveFocusToStartOfNode'].concat(args));
};

Commands$4.moveFocusToStartOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'block');
};

Commands$4.moveFocusToStartOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'inline');
};

Commands$4.moveFocusToStartOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'focus', 'start', 'previous', 'text');
};

Commands$4.moveFocusToStartOfText = function (editor) {
  editor.command(pointEdgeObject, 'focus', 'start', 'text');
};

Commands$4.moveForward = function (editor) {
  var _editor$moveAnchorFor;

  for (var _len24 = arguments.length, args = Array(_len24 > 1 ? _len24 - 1 : 0), _key24 = 1; _key24 < _len24; _key24++) {
    args[_key24 - 1] = arguments[_key24];
  }

  (_editor$moveAnchorFor = editor.moveAnchorForward.apply(editor, args)).moveFocusForward.apply(_editor$moveAnchorFor, args);
};

Commands$4.moveWordForward = function (editor) {
  var _editor$moveFocusWord;

  for (var _len25 = arguments.length, args = Array(_len25 > 1 ? _len25 - 1 : 0), _key25 = 1; _key25 < _len25; _key25++) {
    args[_key25 - 1] = arguments[_key25];
  }

  (_editor$moveFocusWord = editor.moveFocusWordForward.apply(editor, args)).moveToFocus.apply(_editor$moveFocusWord, args);
};

Commands$4.moveStartBackward = function (editor) {
  for (var _len26 = arguments.length, args = Array(_len26 > 1 ? _len26 - 1 : 0), _key26 = 1; _key26 < _len26; _key26++) {
    args[_key26 - 1] = arguments[_key26];
  }

  editor.command.apply(editor, [pointBackward, 'start'].concat(args));
};

Commands$4.moveStartWordBackward = function (editor) {
  for (var _len27 = arguments.length, args = Array(_len27 > 1 ? _len27 - 1 : 0), _key27 = 1; _key27 < _len27; _key27++) {
    args[_key27 - 1] = arguments[_key27];
  }

  editor.command.apply(editor, [pointWordBackward, 'start'].concat(args));
};

Commands$4.moveStartForward = function (editor) {
  for (var _len28 = arguments.length, args = Array(_len28 > 1 ? _len28 - 1 : 0), _key28 = 1; _key28 < _len28; _key28++) {
    args[_key28 - 1] = arguments[_key28];
  }

  editor.command.apply(editor, [pointForward, 'start'].concat(args));
};

Commands$4.moveStartWordForward = function (editor) {
  for (var _len29 = arguments.length, args = Array(_len29 > 1 ? _len29 - 1 : 0), _key29 = 1; _key29 < _len29; _key29++) {
    args[_key29 - 1] = arguments[_key29];
  }

  editor.command.apply(editor, [pointWordForward, 'start'].concat(args));
};

Commands$4.moveStartTo = function (editor) {
  for (var _len30 = arguments.length, args = Array(_len30 > 1 ? _len30 - 1 : 0), _key30 = 1; _key30 < _len30; _key30++) {
    args[_key30 - 1] = arguments[_key30];
  }

  editor.command.apply(editor, [proxy, 'moveStartTo'].concat(args));
};

Commands$4.moveStartToEndOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'start', 'end', 'block');
};

Commands$4.moveStartToEndOfDocument = function (editor) {
  editor.moveStartToEndOfNode(editor.value.document).moveToStart();
};

Commands$4.moveStartToEndOfInline = function (editor) {
  editor.command(pointEdgeObject, 'start', 'end', 'inline');
};

Commands$4.moveStartToEndOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'block');
};

Commands$4.moveStartToEndOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'inline');
};

Commands$4.moveStartToEndOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'next', 'text');
};

Commands$4.moveStartToEndOfNode = function (editor) {
  for (var _len31 = arguments.length, args = Array(_len31 > 1 ? _len31 - 1 : 0), _key31 = 1; _key31 < _len31; _key31++) {
    args[_key31 - 1] = arguments[_key31];
  }

  editor.command.apply(editor, [proxy, 'moveStartToEndOfNode'].concat(args));
};

Commands$4.moveStartToEndOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'block');
};

Commands$4.moveStartToEndOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'inline');
};

Commands$4.moveStartToEndOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'end', 'previous', 'text');
};

Commands$4.moveStartToEndOfText = function (editor) {
  editor.command(pointEdgeObject, 'start', 'end', 'text');
};

Commands$4.moveStartToStartOfBlock = function (editor) {
  editor.command(pointEdgeObject, 'start', 'start', 'block');
};

Commands$4.moveStartToStartOfDocument = function (editor) {
  editor.moveStartToStartOfNode(editor.value.document).moveToStart();
};

Commands$4.moveStartToStartOfInline = function (editor) {
  editor.command(pointEdgeObject, 'start', 'start', 'inline');
};

Commands$4.moveStartToStartOfNextBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'block');
};

Commands$4.moveStartToStartOfNextInline = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'inline');
};

Commands$4.moveStartToStartOfNextText = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'next', 'text');
};

Commands$4.moveStartToStartOfNode = function (editor) {
  for (var _len32 = arguments.length, args = Array(_len32 > 1 ? _len32 - 1 : 0), _key32 = 1; _key32 < _len32; _key32++) {
    args[_key32 - 1] = arguments[_key32];
  }

  editor.command.apply(editor, [proxy, 'moveStartToStartOfNode'].concat(args));
};

Commands$4.moveStartToStartOfPreviousBlock = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'block');
};

Commands$4.moveStartToStartOfPreviousInline = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'inline');
};

Commands$4.moveStartToStartOfPreviousText = function (editor) {
  editor.command(pointEdgeSideObject, 'start', 'start', 'previous', 'text');
};

Commands$4.moveStartToStartOfText = function (editor) {
  editor.command(pointEdgeObject, 'start', 'start', 'text');
};

Commands$4.moveTo = function (editor) {
  for (var _len33 = arguments.length, args = Array(_len33 > 1 ? _len33 - 1 : 0), _key33 = 1; _key33 < _len33; _key33++) {
    args[_key33 - 1] = arguments[_key33];
  }

  editor.command.apply(editor, [proxy, 'moveTo'].concat(args));
};

Commands$4.moveToAnchor = function (editor) {
  editor.command(proxy, 'moveToAnchor');
};

Commands$4.moveToEnd = function (editor) {
  editor.command(proxy, 'moveToEnd');
};

Commands$4.moveToEndOfBlock = function (editor) {
  editor.moveEndToEndOfBlock().moveToEnd();
};

Commands$4.moveToEndOfDocument = function (editor) {
  editor.moveEndToEndOfNode(editor.value.document).moveToEnd();
};

Commands$4.moveToEndOfInline = function (editor) {
  editor.moveEndToEndOfInline().moveToEnd();
};

Commands$4.moveToEndOfNextBlock = function (editor) {
  editor.moveEndToEndOfNextBlock().moveToEnd();
};

Commands$4.moveToEndOfNextInline = function (editor) {
  editor.moveEndToEndOfNextInline().moveToEnd();
};

Commands$4.moveToEndOfNextText = function (editor) {
  editor.moveEndToEndOfNextText().moveToEnd();
};

Commands$4.moveToEndOfNode = function (editor) {
  for (var _len34 = arguments.length, args = Array(_len34 > 1 ? _len34 - 1 : 0), _key34 = 1; _key34 < _len34; _key34++) {
    args[_key34 - 1] = arguments[_key34];
  }

  editor.command.apply(editor, [proxy, 'moveToEndOfNode'].concat(args));
};

Commands$4.moveToEndOfPreviousBlock = function (editor) {
  editor.moveStartToEndOfPreviousBlock().moveToStart();
};

Commands$4.moveToEndOfPreviousInline = function (editor) {
  editor.moveStartToEndOfPreviousInline().moveToStart();
};

Commands$4.moveToEndOfPreviousText = function (editor) {
  editor.moveStartToEndOfPreviousText().moveToStart();
};

Commands$4.moveToEndOfText = function (editor) {
  editor.moveEndToEndOfText().moveToEnd();
};

Commands$4.moveToFocus = function (editor) {
  editor.command(proxy, 'moveToFocus');
};

Commands$4.moveToRangeOfDocument = function (editor) {
  editor.moveToRangeOfNode(editor.value.document);
};

Commands$4.moveToRangeOfNode = function (editor) {
  for (var _len35 = arguments.length, args = Array(_len35 > 1 ? _len35 - 1 : 0), _key35 = 1; _key35 < _len35; _key35++) {
    args[_key35 - 1] = arguments[_key35];
  }

  editor.command.apply(editor, [proxy, 'moveToRangeOfNode'].concat(args));
};

Commands$4.moveToStart = function (editor) {
  editor.command(proxy, 'moveToStart');
};

Commands$4.moveToStartOfBlock = function (editor) {
  editor.moveStartToStartOfBlock().moveToStart();
};

Commands$4.moveToStartOfDocument = function (editor) {
  editor.moveStartToStartOfNode(editor.value.document).moveToStart();
};

Commands$4.moveToStartOfInline = function (editor) {
  editor.moveStartToStartOfInline().moveToStart();
};

Commands$4.moveToStartOfNextBlock = function (editor) {
  editor.moveEndToStartOfNextBlock().moveToEnd();
};

Commands$4.moveToStartOfNextInline = function (editor) {
  editor.moveEndToStartOfNextInline().moveToEnd();
};

Commands$4.moveToStartOfNextText = function (editor) {
  editor.moveEndToStartOfNextText().moveToEnd();
};

Commands$4.moveToStartOfNode = function (editor) {
  for (var _len36 = arguments.length, args = Array(_len36 > 1 ? _len36 - 1 : 0), _key36 = 1; _key36 < _len36; _key36++) {
    args[_key36 - 1] = arguments[_key36];
  }

  editor.command.apply(editor, [proxy, 'moveToStartOfNode'].concat(args));
};

Commands$4.moveToStartOfPreviousBlock = function (editor) {
  editor.moveStartToStartOfPreviousBlock().moveToStart();
};

Commands$4.moveToStartOfPreviousInline = function (editor) {
  editor.moveStartToStartOfPreviousInline().moveToStart();
};

Commands$4.moveToStartOfPreviousText = function (editor) {
  editor.moveStartToStartOfPreviousText().moveToStart();
};

Commands$4.moveToStartOfText = function (editor) {
  editor.moveStartToStartOfText().moveToStart();
};

Commands$4.select = function (editor, properties) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  properties = Selection.createProperties(properties);
  var _options$snapshot = options.snapshot,
      snapshot = _options$snapshot === undefined ? false : _options$snapshot;
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var props = {};
  var next = selection.setProperties(properties);
  next = document.resolveSelection(next);

  // Re-compute the properties, to ensure that we get their normalized values.
  properties = lodash_pick__WEBPACK_IMPORTED_MODULE_5___default()(next, Object.keys(properties));

  // Remove any properties that are already equal to the current selection. And
  // create a dictionary of the previous values for all of the properties that
  // are being changed, for the inverse operation.
  for (var k in properties) {
    if (snapshot === true || !Object(immutable__WEBPACK_IMPORTED_MODULE_1__["is"])(properties[k], selection[k])) {
      props[k] = properties[k];
    }
  }

  // If the selection moves, clear any marks, unless the new selection
  // properties editor the marks in some way.
  if (selection.marks && !props.marks && (props.anchor || props.focus)) {
    props.marks = null;
  }

  // If there are no new properties to set, abort to avoid extra operations.
  if (Object.keys(props).length === 0) {
    return;
  }

  editor.applyOperation({
    type: 'set_selection',
    value: value,
    properties: props,
    selection: selection.toJSON()
  }, snapshot ? { skip: false, merge: false } : {});
};

Commands$4.setAnchor = function (editor) {
  for (var _len37 = arguments.length, args = Array(_len37 > 1 ? _len37 - 1 : 0), _key37 = 1; _key37 < _len37; _key37++) {
    args[_key37 - 1] = arguments[_key37];
  }

  editor.command.apply(editor, [proxy, 'setAnchor'].concat(args));
};

Commands$4.setEnd = function (editor) {
  for (var _len38 = arguments.length, args = Array(_len38 > 1 ? _len38 - 1 : 0), _key38 = 1; _key38 < _len38; _key38++) {
    args[_key38 - 1] = arguments[_key38];
  }

  editor.command.apply(editor, [proxy, 'setEnd'].concat(args));
};

Commands$4.setFocus = function (editor) {
  for (var _len39 = arguments.length, args = Array(_len39 > 1 ? _len39 - 1 : 0), _key39 = 1; _key39 < _len39; _key39++) {
    args[_key39 - 1] = arguments[_key39];
  }

  editor.command.apply(editor, [proxy, 'setFocus'].concat(args));
};

Commands$4.setStart = function (editor) {
  for (var _len40 = arguments.length, args = Array(_len40 > 1 ? _len40 - 1 : 0), _key40 = 1; _key40 < _len40; _key40++) {
    args[_key40 - 1] = arguments[_key40];
  }

  editor.command.apply(editor, [proxy, 'setStart'].concat(args));
};

Commands$4.snapshotSelection = function (editor) {
  editor.withoutMerging(function () {
    editor.select(editor.value.selection, { snapshot: true });
  });
};

/**
 * Helpers.
 */

function proxy(editor, method) {
  var _editor$value$selecti;

  for (var _len41 = arguments.length, args = Array(_len41 > 2 ? _len41 - 2 : 0), _key41 = 2; _key41 < _len41; _key41++) {
    args[_key41 - 2] = arguments[_key41];
  }

  var range = (_editor$value$selecti = editor.value.selection)[method].apply(_editor$value$selecti, args);
  editor.select(range);
}

function pointEdgeObject(editor, point, edge, object) {
  var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
  var Edge = edge.slice(0, 1).toUpperCase() + edge.slice(1);
  var Object = object.slice(0, 1).toUpperCase() + object.slice(1);
  var method = 'move' + Point + 'To' + Edge + 'OfNode';
  var getNode = object == 'text' ? 'getNode' : 'getClosest' + Object;
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var p = selection[point];
  var node = document[getNode](p.key);
  if (!node) return;
  editor[method](node);
}

function pointEdgeSideObject(editor, point, edge, side, object) {
  var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
  var Edge = edge.slice(0, 1).toUpperCase() + edge.slice(1);
  var Side = side.slice(0, 1).toUpperCase() + side.slice(1);
  var Object = object.slice(0, 1).toUpperCase() + object.slice(1);
  var method = 'move' + Point + 'To' + Edge + 'OfNode';
  var getNode = object == 'text' ? 'getNode' : 'getClosest' + Object;
  var getDirectionNode = 'get' + Side + Object;
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var p = selection[point];
  var node = document[getNode](p.key);
  if (!node) return;
  var target = document[getDirectionNode](node.key);
  if (!target) return;
  editor[method](target);
}

function pointBackward(editor, point) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n === 0) return;
  if (n < 0) return pointForward(editor, point, -n);

  var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var p = selection[point];
  var hasVoidParent = document.hasVoidParent(p.path, editor);

  // what is this?
  if (!hasVoidParent && p.offset - n >= 0) {
    var range = selection['move' + Point + 'Backward'](n);
    editor.select(range);
    return;
  }

  var previous = document.getPreviousText(p.path);
  if (!previous) return;

  var block = document.getClosestBlock(p.path);
  var isInBlock = block.hasNode(previous.key);
  var isPreviousInVoid = previous && document.hasVoidParent(previous.key, editor);
  editor['move' + Point + 'ToEndOfNode'](previous);

  // when is this called?
  if (!hasVoidParent && !isPreviousInVoid && isInBlock) {
    var _range = editor.value.selection['move' + Point + 'Backward'](n);
    editor.select(_range);
  }
}

function pointForward(editor, point) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (n === 0) return;
  if (n < 0) return pointBackward(editor, point, -n);

  var Point = point.slice(0, 1).toUpperCase() + point.slice(1);
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var p = selection[point];
  var text = document.getNode(p.path);
  var hasVoidParent = document.hasVoidParent(p.path, editor);

  // what is this?
  if (!hasVoidParent && p.offset + n <= text.text.length) {
    var range = selection['move' + Point + 'Forward'](n);
    editor.select(range);
    return;
  }

  var next = document.getNextText(p.path);
  if (!next) return;

  var block = document.getClosestBlock(p.path);
  var isInBlock = block.hasNode(next.key);
  var isNextInVoid = document.hasVoidParent(next.key, editor);
  editor['move' + Point + 'ToStartOfNode'](next);

  // when is this called?
  if (!hasVoidParent && !isNextInVoid && isInBlock) {
    var _range2 = editor.value.selection['move' + Point + 'Forward'](n);
    editor.select(_range2);
  }
}

function pointWordBackward(editor, pointName) {
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var point = selection[pointName];
  var block = document.getClosestBlock(point.key);
  var offset = block.getOffset(point.key);
  var o = offset + point.offset;
  var text = block.text;

  var n = TextUtils.getWordOffsetBackward(text, o);
  editor.command(pointBackward, pointName, n > 0 ? n : 1);
}

function pointWordForward(editor, pointName) {
  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  var point = selection[pointName];
  var block = document.getClosestBlock(point.key);
  var offset = block.getOffset(point.key);
  var o = offset + point.offset;
  var text = block.text;

  var n = TextUtils.getWordOffsetForward(text, o);
  editor.command(pointForward, pointName, n > 0 ? n : 1);
}

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$5 = {};

/**
 * Set `properties` on the value.
 *
 * @param {Editor} editor
 * @param {Object|Value} properties
 */

Commands$5.setData = function (editor) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var properties = Value.createProperties({ data: data });
  var value = editor.value;


  editor.applyOperation({
    type: 'set_value',
    properties: properties,
    value: value
  });
};

/**
 * Set `properties` on the value.
 *
 * @param {Editor} editor
 * @param {Object|Value} properties
 */

Commands$5.setDecorations = function (editor) {
  var decorations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var properties = Value.createProperties({ decorations: decorations });
  var value = editor.value;


  editor.applyOperation({
    type: 'set_value',
    properties: properties,
    value: value
  });
};

/**
 * A plugin that adds a set of queries to the editor.
 *
 * @param {Object} queries
 * @return {Object}
 */

function QueriesPlugin() {
  var queries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /**
   * On construct, register all the queries.
   *
   * @param {Editor} editor
   * @param {Function} next
   */

  function onConstruct(editor, next) {
    for (var query in queries) {
      editor.registerQuery(query);
    }

    return next();
  }

  /**
   * On query, if it exists in our list of queries, call it.
   *
   * @param {Object} query
   * @param {Editor} editor
   * @param {Function} next
   */

  function onQuery(query, editor, next) {
    var type = query.type,
        args = query.args;

    var fn = queries[type];
    if (!fn) return next();
    var ret = fn.apply(undefined, [editor].concat(toConsumableArray(args)));
    return ret === undefined ? next() : ret;
  }

  /**
   * Return the plugin.
   *
   * @type {Object}
   */

  return {
    onConstruct: onConstruct,
    onQuery: onQuery
  };
}

/**
 * Define a Slate error.
 *
 * @type {SlateError}
 */

var SlateError = function (_Error) {
  inherits(SlateError, _Error);

  function SlateError(code) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, SlateError);

    var _this = possibleConstructorReturn(this, (SlateError.__proto__ || Object.getPrototypeOf(SlateError)).call(this, code));

    _this.code = code;

    for (var key in attrs) {
      _this[key] = attrs[key];
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_this, _this.constructor);
    } else {
      _this.stack = new Error().stack;
    }
    return _this;
  }

  return SlateError;
}(Error);

/**
 * Create a plugin from a `schema` definition.
 *
 * @param {Object} schema
 * @return {Object}
 */

function SchemaPlugin(schema) {
  var rules = schema.rules,
      document = schema.document,
      blocks = schema.blocks,
      inlines = schema.inlines,
      marks = schema.marks;

  var schemaRules = [];

  if (rules) {
    schemaRules = schemaRules.concat(rules);
  }

  if (document) {
    schemaRules.push(_extends({
      match: [{ object: 'document' }]
    }, document));
  }

  if (blocks) {
    for (var key in blocks) {
      schemaRules.push(_extends({
        match: [{ object: 'block', type: key }]
      }, blocks[key]));
    }
  }

  if (inlines) {
    for (var _key in inlines) {
      schemaRules.push(_extends({
        match: [{ object: 'inline', type: _key }]
      }, inlines[_key]));
    }
  }

  if (marks) {
    for (var _key2 in marks) {
      schemaRules.push(_extends({
        match: [{ object: 'mark', type: _key2 }]
      }, marks[_key2]));
    }
  }

  /**
   * Check if a `mark` is void based on the schema rules.
   *
   * @param {Editor} editor
   * @param {Mark} mark
   * @return {Boolean}
   */

  function isAtomic(editor, mark) {
    var rule = schemaRules.find(function (r) {
      return 'isAtomic' in r && testRules(mark, r.match);
    });

    return rule && rule.isAtomic;
  }

  /**
   * Check if a `node` is void based on the schema rules.
   *
   * @param {Editor} editor
   * @param {Node} node
   * @return {Boolean}
   */

  function isVoid(editor, node) {
    var rule = schemaRules.find(function (r) {
      return 'isVoid' in r && testRules(node, r.match);
    });

    return rule && rule.isVoid;
  }

  /**
   * Normalize a `node` with the schema rules, returning a function that will
   * fix the invalid node, or void if the node is valid.
   *
   * @param {Node} node
   * @param {Editor} editor
   * @param {Function} next
   * @return {Function|Void}
   */

  function normalizeNode(node, editor, next) {
    var error = validateNode(node, editor, function () {});
    if (!error) return next();

    return function () {
      var rule = error.rule;
      var size = editor.operations.size;

      // First run the user-provided `normalize` function if one exists...

      if (rule.normalize) {
        rule.normalize(editor, error);
      }

      // If the `normalize` function did not add any operations to the editor
      // object, it can't have normalized, so run the default one.
      if (editor.operations.size === size) {
        defaultNormalize(editor, error);
      }
    };
  }

  /**
   * Validate a `node` with the schema rules, returning a `SlateError` if it's
   * invalid.
   *
   * @param {Node} node
   * @param {Editor} editor
   * @param {Function} next
   * @return {Error|Void}
   */

  function validateNode(node, editor, next) {
    var matches = schemaRules.filter(function (r) {
      return testRules(node, r.match);
    });
    var failure = validateRules(node, matches, schemaRules, { every: true });
    if (!failure) return next();
    var error = new SlateError(failure.code, failure);
    return error;
  }

  /**
   * On schema-related queries, respond if we can.
   *
   * @param {Object} query
   * @param {Function} next
   */

  var queries = QueriesPlugin({ isAtomic: isAtomic, isVoid: isVoid });

  /**
   * Return the plugins.
   *
   * @type {Object}
   */

  return [{ normalizeNode: normalizeNode, validateNode: validateNode }, queries];
}

/**
 * Normalize an invalid value with `error` with default remedies.
 *
 * @param {Editor} editor
 * @param {SlateError} error
 */

function defaultNormalize(editor, error) {
  var code = error.code,
      node = error.node,
      child = error.child,
      next = error.next,
      previous = error.previous,
      key = error.key,
      mark = error.mark;


  switch (code) {
    case 'child_max_invalid':
    case 'child_object_invalid':
    case 'child_type_invalid':
    case 'child_unknown':
    case 'first_child_object_invalid':
    case 'first_child_type_invalid':
    case 'last_child_object_invalid':
    case 'last_child_type_invalid':
      {
        return child.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(child.key);
      }

    case 'previous_sibling_object_invalid':
    case 'previous_sibling_type_invalid':
      {
        return previous.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(previous.key);
      }

    case 'next_sibling_object_invalid':
    case 'next_sibling_type_invalid':
      {
        return next.object === 'text' && node.object === 'block' && node.nodes.size === 1 ? editor.removeNodeByKey(node.key) : editor.removeNodeByKey(next.key);
      }

    case 'child_min_invalid':
    case 'node_text_invalid':
    case 'parent_object_invalid':
    case 'parent_type_invalid':
      {
        return node.object === 'document' ? node.nodes.forEach(function (n) {
          return editor.removeNodeByKey(n.key);
        }) : editor.removeNodeByKey(node.key);
      }

    case 'node_data_invalid':
      {
        return node.data.get(key) === undefined && node.object !== 'document' ? editor.removeNodeByKey(node.key) : editor.setNodeByKey(node.key, { data: node.data.delete(key) });
      }

    case 'node_mark_invalid':
      {
        return node.getTexts().forEach(function (t) {
          return editor.removeMarkByKey(t.key, 0, t.text.length, mark);
        });
      }

    default:
      {
        return editor.removeNodeByKey(node.key);
      }
  }
}

/**
 * Check that an `object` matches one of a set of `rules`.
 *
 * @param {Mixed} object
 * @param {Object|Array} rules
 * @return {Boolean}
 */

function testRules(object, rules) {
  var error = validateRules(object, rules);
  return !error;
}

/**
 * Validate that a `object` matches a `rule` object or array.
 *
 * @param {Mixed} object
 * @param {Object|Array} rule
 * @param {Array|Void} rules
 * @return {Error|Void}
 */

function validateRules(object, rule, rules) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _options$every = options.every,
      every = _options$every === undefined ? false : _options$every;


  if (Array.isArray(rule)) {
    var array = rule.length ? rule : [{}];
    var first = void 0;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var r = _step.value;

        var _error = validateRules(object, r, rules);
        first = first || _error;
        if (every && _error) return _error;
        if (!every && !_error) return;
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

    return first;
  }

  var error = validateObject(object, rule) || validateType(object, rule) || validateData(object, rule) || validateMarks(object, rule) || validateText(object, rule) || validateFirst(object, rule) || validateLast(object, rule) || validateNodes(object, rule, rules);

  return error;
}

function validateObject(node, rule) {
  if (rule.object == null) return;
  if (rule.object === node.object) return;
  if (typeof rule.object === 'function' && rule.object(node.object)) return;
  return fail('node_object_invalid', { rule: rule, node: node });
}

function validateType(node, rule) {
  if (rule.type == null) return;
  if (rule.type === node.type) return;
  if (typeof rule.type === 'function' && rule.type(node.type)) return;
  return fail('node_type_invalid', { rule: rule, node: node });
}

function validateData(node, rule) {
  if (rule.data == null) return;
  if (node.data == null) return;

  if (typeof rule.data === 'function') {
    if (rule.data(node.data)) return;
    return fail('node_data_invalid', { rule: rule, node: node });
  }

  for (var key in rule.data) {
    var fn = rule.data[key];
    var value = node.data && node.data.get(key);
    var valid = typeof fn === 'function' ? fn(value) : fn === value;
    if (valid) continue;
    return fail('node_data_invalid', { rule: rule, node: node, key: key, value: value });
  }
}

function validateMarks(node, rule) {
  if (rule.marks == null) return;
  var marks = node.getMarks().toArray();

  var _loop = function _loop(mark) {
    var valid = rule.marks.some(function (def) {
      return typeof def.type === 'function' ? def.type(mark.type) : def.type === mark.type;
    });
    if (valid) return 'continue';
    return {
      v: fail('node_mark_invalid', { rule: rule, node: node, mark: mark })
    };
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = marks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var mark = _step2.value;

      var _ret = _loop(mark);

      switch (_ret) {
        case 'continue':
          continue;

        default:
          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
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

function validateText(node, rule) {
  if (rule.text == null) return;
  var text = node.text;

  var valid = typeof rule.text === 'function' ? rule.text(text) : rule.text.test(text);
  if (valid) return;
  return fail('node_text_invalid', { rule: rule, node: node, text: text });
}

function validateFirst(node, rule) {
  if (rule.first == null) return;
  var first = node.nodes.first();
  if (!first) return;
  var error = validateRules(first, rule.first);
  if (!error) return;
  error.rule = rule;
  error.node = node;
  error.child = first;
  error.code = error.code.replace('node_', 'first_child_');
  return error;
}

function validateLast(node, rule) {
  if (rule.last == null) return;
  var last = node.nodes.last();
  if (!last) return;
  var error = validateRules(last, rule.last);
  if (!error) return;
  error.rule = rule;
  error.node = node;
  error.child = last;
  error.code = error.code.replace('node_', 'last_child_');
  return error;
}

function validateNodes(node, rule) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (node.nodes == null) return;

  var children = node.nodes;
  var defs = rule.nodes != null ? rule.nodes.slice() : [];
  var count = 0;
  var lastCount = 0;
  var min = null;
  var index = -1;
  var def = null;
  var max = null;
  var child = null;
  var previous = null;
  var next = null;

  function nextDef() {
    if (defs.length === 0) return false;
    def = defs.shift();
    lastCount = count;
    count = 0;
    min = def.min || null;
    max = def.max || null;
    return true;
  }

  function nextChild() {
    index += 1;
    previous = child;
    child = children.get(index);
    next = children.get(index + 1);
    if (!child) return false;
    lastCount = count;
    count += 1;
    return true;
  }

  function rewind() {
    if (index > 0) {
      index -= 1;
      count = lastCount;
    }
  }

  if (rule.nodes != null) {
    nextDef();
  }

  while (nextChild()) {
    var err = validateParent(node, child, rules) || validatePrevious(node, child, previous, index, rules) || validateNext(node, child, next, index, rules);

    if (err) return err;

    if (rule.nodes != null) {
      if (!def) {
        return fail('child_unknown', { rule: rule, node: node, child: child, index: index });
      }

      if (def.match) {
        var error = validateRules(child, def.match);

        if (error) {
          // Since we want to report overflow on last matching child we don't
          // immediately check for count > max, but instead do so once we find
          // a child that doesn't match.
          if (max != null && count - 1 > max) {
            rewind();
            return fail('child_max_invalid', {
              rule: rule,
              node: node,
              index: index,
              child: children.get(index),
              count: count,
              limit: max
            });
          }

          var lastMin = min;

          // If there are more groups after this one then child might actually
          // be valid.
          if (nextDef()) {
            // If we've already satisfied the minimum for the current group,
            // then we can rewind and proceed to the next group.
            if (lastCount - 1 >= lastMin) {
              index -= 1;
              continue;
            }

            // Otherwise we know that current value is underflowing. There are
            // three possible causes for this...

            // 1. There might just not be enough elements for current group, and
            // current child is in fact the first of the next group. If so, the
            // next def will not report errors, in which case we can rewind and
            // report an minimum error.
            if (validateRules(child, def.match) == null) {
              rewind();
              return fail('child_min_invalid', {
                rule: rule,
                node: node,
                index: index,
                count: lastCount - 1,
                limit: lastMin
              });
            }

            // 2. The current group is underflowing, but there is also an
            // invalid child before the next group.
            // 3. Or the current group is not underflowing but it appears so
            // because there's an invalid child between its members.
            // It's either the second or third case. If it's the second then
            // we could report an underflow, but presence of an invalid child
            // is arguably more important, so we report it first. It also lets
            // us avoid checking for which case exactly is it.
            error.rule = rule;
            error.node = node;
            error.child = child;
            error.index = index;
            error.code = error.code.replace('node_', 'child_');
            return error;
          }

          // Otherwise either we exhausted the last group, in which case it's
          // an unknown child, ...
          if (max != null && count > max) {
            return fail('child_unknown', { rule: rule, node: node, child: child, index: index });
          }

          // ... or it's an invalid child for the last group.
          error.rule = rule;
          error.node = node;
          error.child = child;
          error.index = index;
          error.code = error.code.replace('node_', 'child_');
          return error;
        }
      }
    }
  }

  // Since we want to report overflow on last matching child we don't
  // immediately check for count > max, but do so after processing all nodes.
  if (max != null && count > max) {
    return fail('child_max_invalid', {
      rule: rule,
      node: node,
      index: index - 1,
      count: count,
      child: children.get(index - 1),
      limit: max
    });
  }

  if (rule.nodes != null) {
    do {
      if (count < min) {
        return fail('child_min_invalid', {
          rule: rule,
          node: node,
          index: index,
          count: count,
          limit: min
        });
      }
    } while (nextDef());
  }
}

function validateParent(node, child, rules) {
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = rules[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var rule = _step3.value;

      if (rule.parent == null) continue;
      if (!testRules(child, rule.match)) continue;

      var error = validateRules(node, rule.parent);
      if (!error) continue;

      error.rule = rule;
      error.parent = node;
      error.node = child;
      error.code = error.code.replace('node_', 'parent_');
      return error;
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
}

function validatePrevious(node, child, previous, index, rules) {
  if (!previous) return;

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = rules[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var rule = _step4.value;

      if (rule.previous == null) continue;
      if (!testRules(child, rule.match)) continue;

      var error = validateRules(previous, rule.previous);
      if (!error) continue;

      error.rule = rule;
      error.node = node;
      error.child = child;
      error.index = index;
      error.previous = previous;
      error.code = error.code.replace('node_', 'previous_sibling_');
      return error;
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

function validateNext(node, child, next, index, rules) {
  if (!next) return;

  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = rules[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var rule = _step5.value;

      if (rule.next == null) continue;
      if (!testRules(child, rule.match)) continue;

      var error = validateRules(next, rule.next);
      if (!error) continue;

      error.rule = rule;
      error.node = node;
      error.child = child;
      error.index = index;
      error.next = next;
      error.code = error.code.replace('node_', 'next_sibling_');
      return error;
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }
}

/**
 * Create an interim failure object with `code` and `attrs`.
 *
 * @param {String} code
 * @param {Object} attrs
 * @return {Object}
 */

function fail(code, attrs) {
  return _extends({ code: code }, attrs);
}

/**
 * Ensure that an expanded selection is deleted first using the `editor.delete`
 * command. This guarantees that it uses the proper semantic "intent" instead of
 * using `deleteAtRange` under the covers and skipping `delete`.
 *
 * @param {Editor}
 */

function deleteExpanded(editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  }
}

/**
 * Commands.
 *
 * @type {Object}
 */

var Commands$6 = {};

/**
 * Add a `mark` to the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */

Commands$6.addMark = function (editor, mark) {
  mark = Mark.create(mark);
  var value = editor.value;
  var document = value.document,
      selection = value.selection;


  if (selection.isExpanded) {
    editor.addMarkAtRange(selection, mark);
  } else if (selection.marks) {
    var marks = selection.marks.add(mark);
    var sel = selection.set('marks', marks);
    editor.select(sel);
  } else {
    var _marks = document.getActiveMarksAtRange(selection).add(mark);
    var _sel = selection.set('marks', _marks);
    editor.select(_sel);
  }
};

/**
 * Add a list of `marks` to the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Set<Mark>|Array<Object>} marks
 */

Commands$6.addMarks = function (editor, marks) {
  marks.forEach(function (mark) {
    return editor.addMark(mark);
  });
};

/**
 * Delete at the current selection.
 *
 * @param {Editor} editor
 */

Commands$6.delete = function (editor) {
  var value = editor.value;
  var selection = value.selection;

  editor.deleteAtRange(selection);

  // COMPAT: Ensure that the selection is collapsed, because in certain cases
  // when deleting across inline nodes, when splitting the inline node the end
  // point of the selection will end up after the split point.
  editor.moveToFocus();
};

/**
 * Delete backward `n` characters.
 *
 * @param {Editor} editor
 * @param {Number} n (optional)
 */

Commands$6.deleteBackward = function (editor) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteBackwardAtRange(selection, n);
  }
};

/**
 * Delete backward one character.
 *
 * @param {Editor} editor
 */

Commands$6.deleteCharBackward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteCharBackwardAtRange(selection);
  }
};

/**
 * Delete backward one line.
 *
 * @param {Editor} editor
 */

Commands$6.deleteLineBackward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteLineBackwardAtRange(selection);
  }
};

/**
 * Delete backward one word.
 *
 * @param {Editor} editor
 */

Commands$6.deleteWordBackward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteWordBackwardAtRange(selection);
  }
};

/**
 * Delete backward `n` characters.
 *
 * @param {Editor} editor
 * @param {Number} n (optional)
 */

Commands$6.deleteForward = function (editor) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteForwardAtRange(selection, n);
  }
};

/**
 * Delete backward one character.
 *
 * @param {Editor} editor
 */

Commands$6.deleteCharForward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteCharForwardAtRange(selection);
  }
};

/**
 * Delete backward one line.
 *
 * @param {Editor} editor
 */

Commands$6.deleteLineForward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteLineForwardAtRange(selection);
  }
};

/**
 * Delete backward one word.
 *
 * @param {Editor} editor
 */

Commands$6.deleteWordForward = function (editor) {
  var value = editor.value;
  var selection = value.selection;


  if (selection.isExpanded) {
    editor.delete();
  } else {
    editor.deleteWordForwardAtRange(selection);
  }
};

/**
 * Insert a `block` at the current selection.
 *
 * @param {Editor} editor
 * @param {String|Object|Block} block
 */

Commands$6.insertBlock = function (editor, block) {
  deleteExpanded(editor);

  block = Block.create(block);
  var value = editor.value;
  var selection = value.selection;

  editor.insertBlockAtRange(selection, block);

  // If the node was successfully inserted, update the selection.
  var node = editor.value.document.getNode(block.key);
  if (node) editor.moveToEndOfNode(node);
};

/**
 * Insert a `fragment` at the current selection.
 *
 * @param {Editor} editor
 * @param {Document} fragment
 */

Commands$6.insertFragment = function (editor, fragment) {
  if (!fragment.nodes.size) return;

  deleteExpanded(editor);

  var value = editor.value;
  var _value = value,
      document = _value.document,
      selection = _value.selection;
  var start = selection.start,
      end = selection.end;
  var _value2 = value,
      startText = _value2.startText,
      endText = _value2.endText,
      startInline = _value2.startInline;

  var lastText = fragment.getLastText();
  var lastInline = fragment.getClosestInline(lastText.key);
  var lastBlock = fragment.getClosestBlock(lastText.key);
  var firstChild = fragment.nodes.first();
  var lastChild = fragment.nodes.last();
  var keys = document.getTexts().map(function (text) {
    return text.key;
  });
  var isAppending = !startInline || start.isAtStartOfNode(startText) || end.isAtStartOfNode(startText) || start.isAtEndOfNode(endText) || end.isAtEndOfNode(endText);

  var isInserting = firstChild.hasBlockChildren() || lastChild.hasBlockChildren();

  editor.insertFragmentAtRange(selection, fragment);
  value = editor.value;
  document = value.document;

  var newTexts = document.getTexts().filter(function (n) {
    return !keys.includes(n.key);
  });
  var newText = isAppending ? newTexts.last() : newTexts.takeLast(2).first();

  if (newText && (lastInline || isInserting)) {
    editor.moveToEndOfNode(newText);
  } else if (newText) {
    editor.moveToStartOfNode(newText).moveForward(lastBlock.text.length);
  }
};

/**
 * Insert an `inline` at the current selection.
 *
 * @param {Editor} editor
 * @param {String|Object|Inline} inline
 */

Commands$6.insertInline = function (editor, inline) {
  deleteExpanded(editor);

  inline = Inline.create(inline);
  var value = editor.value;
  var selection = value.selection;

  editor.insertInlineAtRange(selection, inline);

  // If the node was successfully inserted, update the selection.
  var node = editor.value.document.getNode(inline.key);
  if (node) editor.moveToEndOfNode(node);
};

/**
 * Insert a string of `text` with optional `marks` at the current selection.
 *
 * @param {Editor} editor
 * @param {String} text
 * @param {Set<Mark>} marks (optional)
 */

Commands$6.insertText = function (editor, text, marks) {
  deleteExpanded(editor);

  var value = editor.value;
  var document = value.document,
      selection = value.selection;

  marks = marks || selection.marks || document.getInsertMarksAtRange(selection);
  editor.insertTextAtRange(selection, text, marks);

  // If the text was successfully inserted, and the selection had marks on it,
  // unset the selection's marks.
  if (selection.marks && document != editor.value.document) {
    editor.select({ marks: null });
  }
};

/**
 * Remove a `mark` from the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */

Commands$6.removeMark = function (editor, mark) {
  mark = Mark.create(mark);
  var value = editor.value;
  var document = value.document,
      selection = value.selection;


  if (selection.isExpanded) {
    editor.removeMarkAtRange(selection, mark);
  } else if (selection.marks) {
    var marks = selection.marks.remove(mark);
    var sel = selection.set('marks', marks);
    editor.select(sel);
  } else {
    var _marks2 = document.getActiveMarksAtRange(selection).remove(mark);
    var _sel2 = selection.set('marks', _marks2);
    editor.select(_sel2);
  }
};

/**
 * Replace an `oldMark` with a `newMark` in the characters in the current selection.
 *
 * @param {Editor} editor
 * @param {Mark} oldMark
 * @param {Mark} newMark
 */

Commands$6.replaceMark = function (editor, oldMark, newMark) {
  editor.removeMark(oldMark);
  editor.addMark(newMark);
};

/**
 * Set the `properties` of block nodes.
 *
 * @param {Editor} editor
 * @param {Object|String} properties
 */

Commands$6.setBlocks = function (editor, properties) {
  var value = editor.value;
  var selection = value.selection;

  editor.setBlocksAtRange(selection, properties);
};

/**
 * Set the `properties` of inline nodes.
 *
 * @param {Editor} editor
 * @param {Object|String} properties
 */

Commands$6.setInlines = function (editor, properties) {
  var value = editor.value;
  var selection = value.selection;

  editor.setInlinesAtRange(selection, properties);
};

/**
 * Split the block node at the current selection, to optional `depth`.
 *
 * @param {Editor} editor
 * @param {Number} depth (optional)
 */

Commands$6.splitBlock = function (editor) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  deleteExpanded(editor);

  var value = editor.value;
  var selection = value.selection,
      document = value.document;

  var marks = selection.marks || document.getInsertMarksAtRange(selection);
  editor.splitBlockAtRange(selection, depth).moveToEnd();

  if (marks && marks.size !== 0) {
    editor.select({ marks: marks });
  }
};

/**
 * Split the inline nodes to optional `height`.
 *
 * @param {Editor} editor
 * @param {Number} height (optional)
 */

Commands$6.splitInline = function (editor, height) {
  deleteExpanded(editor);
  var value = editor.value;
  var selection = value.selection;

  editor.splitInlineAtRange(selection, height);
};

/**
 * Add or remove a `mark` from the characters in the current selection,
 * depending on whether it's already there.
 *
 * @param {Editor} editor
 * @param {Mark} mark
 */

Commands$6.toggleMark = function (editor, mark) {
  mark = Mark.create(mark);
  var value = editor.value;

  var exists = value.activeMarks.has(mark);

  if (exists) {
    editor.removeMark(mark);
  } else {
    editor.addMark(mark);
  }
};

/**
 * Unwrap nodes from a block with `properties`.
 *
 * @param {Editor} editor
 * @param {String|Object} properties
 */

Commands$6.unwrapBlock = function (editor, properties) {
  var value = editor.value;
  var selection = value.selection;

  editor.unwrapBlockAtRange(selection, properties);
};

/**
 * Unwrap nodes from an inline with `properties`.
 *
 * @param {Editor} editor
 * @param {String|Object} properties
 */

Commands$6.unwrapInline = function (editor, properties) {
  var value = editor.value;
  var selection = value.selection;

  editor.unwrapInlineAtRange(selection, properties);
};

/**
 * Wrap nodes in a new `block`.
 *
 * @param {Editor} editor
 * @param {Block|Object|String} block
 */

Commands$6.wrapBlock = function (editor, block) {
  var value = editor.value;
  var selection = value.selection;

  editor.wrapBlockAtRange(selection, block);
};

/**
 * Wrap nodes in a new `inline`.
 *
 * @param {Editor} editor
 * @param {Inline|Object|String} inline
 */

Commands$6.wrapInline = function (editor, inline) {
  var value = editor.value;
  var selection = value.selection;

  editor.wrapInlineAtRange(selection, inline);
};

/**
 * Wrap the current selection with prefix/suffix.
 *
 * @param {Editor} editor
 * @param {String} prefix
 * @param {String} suffix
 */

Commands$6.wrapText = function (editor, prefix) {
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : prefix;
  var value = editor.value;
  var selection = value.selection;

  editor.wrapTextAtRange(selection, prefix, suffix);

  // If the selection was collapsed, it will have moved the start offset too.
  if (selection.isCollapsed) {
    editor.moveStartBackward(prefix.length);
  }

  // Adding the suffix will have pushed the end of the selection further on, so
  // we need to move it back to account for this.
  editor.moveEndBackward(suffix.length);

  // There's a chance that the selection points moved "through" each other,
  // resulting in a now-incorrect selection direction.
  if (selection.isForward != editor.value.selection.isForward) {
    editor.flip();
  }
};

/**
 * A plugin that defines the core Slate logic.
 *
 * @param {Object} options
 * @return {Object}
 */

function CorePlugin() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$plugins = options.plugins,
      plugins = _options$plugins === undefined ? [] : _options$plugins;

  /**
   * The core Slate commands.
   *
   * @type {Object}
   */

  var commands = CommandsPlugin(_extends({}, Commands$1, Commands$2, Commands$3, Commands$4, Commands$5, Commands$6));

  /**
   * The core Slate queries.
   *
   * @type {Object}
   */

  var queries = QueriesPlugin({
    isAtomic: function isAtomic() {
      return false;
    },
    isVoid: function isVoid() {
      return false;
    }
  });

  /**
   * The core Slate schema.
   *
   * @type {Object}
   */

  var schema = SchemaPlugin({
    rules: [
    // Only allow block nodes in documents.
    {
      match: { object: 'document' },
      nodes: [{
        match: { object: 'block' }
      }]
    },

    // Only allow block nodes or inline and text nodes in blocks.
    {
      match: {
        object: 'block',
        first: { object: 'block' }
      },
      nodes: [{
        match: { object: 'block' }
      }]
    }, {
      match: {
        object: 'block',
        first: [{ object: 'inline' }, { object: 'text' }]
      },
      nodes: [{
        match: [{ object: 'inline' }, { object: 'text' }]
      }]
    },

    // Only allow inline and text nodes in inlines.
    {
      match: { object: 'inline' },
      nodes: [{ match: [{ object: 'inline' }, { object: 'text' }] }]
    },

    // Ensure that block and inline nodes have at least one text child.
    {
      match: [{ object: 'block' }, { object: 'inline' }],
      nodes: [{ min: 1 }],
      normalize: function normalize(editor, error) {
        var code = error.code,
            node = error.node;


        if (code === 'child_min_invalid' && node.nodes.isEmpty()) {
          editor.insertNodeByKey(node.key, 0, Text.create());
        }
      }
    },

    // Ensure that inline nodes are surrounded by text nodes.
    {
      match: { object: 'block' },
      first: [{ object: 'block' }, { object: 'text' }],
      last: [{ object: 'block' }, { object: 'text' }],
      normalize: function normalize(editor, error) {
        var code = error.code,
            node = error.node;

        var text = Text.create();
        var i = void 0;

        if (code === 'first_child_object_invalid') {
          i = 0;
        } else if (code === 'last_child_object_invalid') {
          i = node.nodes.size;
        } else {
          return;
        }

        editor.insertNodeByKey(node.key, i, text);
      }
    }, {
      match: { object: 'inline' },
      first: [{ object: 'block' }, { object: 'text' }],
      last: [{ object: 'block' }, { object: 'text' }],
      previous: [{ object: 'block' }, { object: 'text' }],
      next: [{ object: 'block' }, { object: 'text' }],
      normalize: function normalize(editor, error) {
        var code = error.code,
            node = error.node,
            index = error.index;

        var text = Text.create();
        var i = void 0;

        if (code === 'first_child_object_invalid') {
          i = 0;
        } else if (code === 'last_child_object_invalid') {
          i = node.nodes.size;
        } else if (code === 'previous_sibling_object_invalid') {
          i = index;
        } else if (code === 'next_sibling_object_invalid') {
          i = index + 1;
        } else {
          return;
        }

        editor.insertNodeByKey(node.key, i, text);
      }
    },

    // Merge adjacent text nodes.
    {
      match: { object: 'text' },
      next: [{ object: 'block' }, { object: 'inline' }],
      normalize: function normalize(editor, error) {
        var code = error.code,
            next = error.next;


        if (code === 'next_sibling_object_invalid') {
          editor.mergeNodeByKey(next.key);
        }
      }
    }]
  });

  /**
   * Return the plugins.
   *
   * @type {Array}
   */

  return [schema].concat(toConsumableArray(plugins), [commands, queries]);
}

/**
 * Debug.
 *
 * @type {Function}
 */

var debug$2 = debug__WEBPACK_IMPORTED_MODULE_4___default()('slate:editor');

/**
 * Editor.
 *
 * @type {Editor}
 */

var Editor = function () {
  /**
   * Create a new `Editor` with `attrs`.
   *
   * @param {Object} attrs
   * @param {Object} options
   */

  function Editor() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    classCallCheck(this, Editor);
    var _options$controller = options.controller,
        controller = _options$controller === undefined ? this : _options$controller,
        _options$construct = options.construct,
        construct = _options$construct === undefined ? true : _options$construct;
    var _attrs$onChange = attrs.onChange,
        onChange = _attrs$onChange === undefined ? function () {} : _attrs$onChange,
        _attrs$plugins = attrs.plugins,
        plugins = _attrs$plugins === undefined ? [] : _attrs$plugins,
        _attrs$readOnly = attrs.readOnly,
        readOnly = _attrs$readOnly === undefined ? false : _attrs$readOnly,
        _attrs$value = attrs.value,
        value = _attrs$value === undefined ? Value.create() : _attrs$value;


    this.controller = controller;
    this.middleware = {};
    this.onChange = onChange;
    this.operations = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
    this.readOnly = null;
    this.value = null;

    this.tmp = {
      dirty: [],
      flushing: false,
      merge: null,
      normalize: true,
      save: true
    };

    var core = CorePlugin({ plugins: plugins });
    registerPlugin(this, core);

    if (construct) {
      this.run('onConstruct');
      this.setReadOnly(readOnly);
      this.setValue(value, options);
    }
  }

  /**
   * Apply an `operation` to the editor, updating its value.
   *
   * @param {Operation|Object} operation
   * @return {Editor}
   */

  createClass(Editor, [{
    key: 'applyOperation',
    value: function applyOperation(operation) {
      var _this = this;

      var operations = this.operations,
          controller = this.controller;

      var value = this.value;

      // Add in the current `value` in case the operation was serialized.
      if (is_plain_object__WEBPACK_IMPORTED_MODULE_0___default()(operation)) {
        operation = _extends({}, operation, { value: value });
      }

      operation = Operation.create(operation);

      // Save the operation into the history. Since `save` is a command, we need
      // to do it without normalizing, since it would have side effects.
      this.withoutNormalizing(function () {
        controller.save(operation);
        value = _this.value;
      });

      // Apply the operation to the value.
      debug$2('apply', { operation: operation });
      this.value = operation.apply(value);
      this.operations = operations.push(operation);

      // Get the paths of the affected nodes, and mark them as dirty.
      var newDirtyPaths = getDirtyPaths(operation);
      var dirty = this.tmp.dirty.reduce(function (memo, path) {
        path = PathUtils.create(path);
        var transformed = PathUtils.transform(path, operation);
        memo = memo.concat(transformed.toArray());
        return memo;
      }, newDirtyPaths);

      this.tmp.dirty = dirty;

      // If we're not already, queue the flushing process on the next tick.
      if (!this.tmp.flushing) {
        this.tmp.flushing = true;
        Promise.resolve().then(function () {
          return _this.flush();
        });
      }

      return controller;
    }

    /**
     * Flush the editor's current change.
     *
     * @return {Editor}
     */

  }, {
    key: 'flush',
    value: function flush() {
      this.run('onChange');
      var value = this.value,
          operations = this.operations,
          controller = this.controller;

      var change = { value: value, operations: operations };
      this.operations = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
      this.tmp.flushing = false;
      this.onChange(change);
      return controller;
    }

    /**
     * Trigger a command by `type` with `...args`.
     *
     * @param {String|Function} type
     * @param {Any} ...args
     * @return {Editor}
     */

  }, {
    key: 'command',
    value: function command(type) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var controller = this.controller;


      if (typeof type === 'function') {
        type.apply(undefined, [controller].concat(args));
        normalizeDirtyPaths(this);
        return controller;
      }

      debug$2('command', { type: type, args: args });
      var obj = { type: type, args: args };
      this.run('onCommand', obj);
      normalizeDirtyPaths(this);
      return controller;
    }

    /**
     * Normalize all of the nodes in the document from scratch.
     *
     * @return {Editor}
     */

  }, {
    key: 'normalize',
    value: function normalize() {
      var value = this.value,
          controller = this.controller;
      var document = value.document;

      var table = document.getKeysToPathsTable();
      var paths = Object.values(table).map(PathUtils.create);
      this.tmp.dirty = this.tmp.dirty.concat(paths);
      normalizeDirtyPaths(this);

      var selection = value.selection;

      document = value.document;

      if (selection.isUnset && document.nodes.size) {
        controller.moveToStartOfDocument();
      }

      return controller;
    }

    /**
     * Ask a query by `type` with `...args`.
     *
     * @param {String|Function} type
     * @param {Any} ...args
     * @return {Any}
     */

  }, {
    key: 'query',
    value: function query(type) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      var controller = this.controller;


      if (typeof type === 'function') {
        return type.apply(undefined, [controller].concat(args));
      }

      debug$2('query', { type: type, args: args });
      var obj = { type: type, args: args };
      return this.run('onQuery', obj);
    }

    /**
     * Register a command `type` with the editor.
     *
     * @param {String} type
     * @return {Editor}
     */

  }, {
    key: 'registerCommand',
    value: function registerCommand(type) {
      var _this2 = this;

      var controller = this.controller;


      if (type in controller && controller[type].__command) {
        return controller;
      }

      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!(type in controller), 'You cannot register a `' + type + '` command because it would overwrite an existing property of the `Editor`.');

      var method = function method() {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return _this2.command.apply(_this2, [type].concat(args));
      };
      controller[type] = method;
      method.__command = true;
      return controller;
    }

    /**
     * Register a query `type` with the editor.
     *
     * @param {String} type
     * @return {Editor}
     */

  }, {
    key: 'registerQuery',
    value: function registerQuery(type) {
      var _this3 = this;

      var controller = this.controller;


      if (type in controller && controller[type].__query) {
        return controller;
      }

      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!(type in controller), 'You cannot register a `' + type + '` query because it would overwrite an existing property of the `Editor`.');

      var method = function method() {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return _this3.query.apply(_this3, [type].concat(args));
      };
      controller[type] = method;
      method.__query = true;
      return controller;
    }

    /**
     * Run through the middleware stack by `key` with `args`.
     *
     * @param {String} key
     * @param {Any} ...args
     * @return {Any}
     */

  }, {
    key: 'run',
    value: function run(key) {
      for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
        args[_key5 - 1] = arguments[_key5];
      }

      var controller = this.controller,
          middleware = this.middleware;

      var fns = middleware[key] || [];
      var i = 0;

      function next() {
        var fn = fns[i++];
        if (!fn) return;

        for (var _len6 = arguments.length, overrides = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          overrides[_key6] = arguments[_key6];
        }

        if (overrides.length) {
          args = overrides;
        }

        var ret = fn.apply(undefined, toConsumableArray(args).concat([controller, next]));
        return ret;
      }

      Object.defineProperty(next, 'change', {
        get: function get$$1() {
          Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      Object.defineProperty(next, 'onChange', {
        get: function get$$1() {
          Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      Object.defineProperty(next, 'props', {
        get: function get$$1() {
          Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      Object.defineProperty(next, 'schema', {
        get: function get$$1() {
          Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      Object.defineProperty(next, 'stack', {
        get: function get$$1() {
          Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'As of Slate 0.42, the `editor` is no longer passed as the third argument to event handlers. You can access it via `change.editor` instead.');
        }
      });

      return next();
    }

    /**
     * Set the `readOnly` flag.
     *
     * @param {Boolean} readOnly
     * @return {Editor}
     */

  }, {
    key: 'setReadOnly',
    value: function setReadOnly(readOnly) {
      this.readOnly = readOnly;
      return this;
    }

    /**
     * Set the editor's `value`.
     *
     * @param {Value} value
     * @param {Options} options
     * @return {Editor}
     */

  }, {
    key: 'setValue',
    value: function setValue(value) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$normalize = options.normalize,
          normalize = _options$normalize === undefined ? value !== this.value : _options$normalize;

      this.value = value;

      if (normalize) {
        this.normalize();
      }

      return this;
    }

    /**
     * Apply a series of changes inside a synchronous `fn`, deferring
     * normalization until after the function has finished executing.
     *
     * @param {Function} fn
     * @return {Editor}
     */

  }, {
    key: 'withoutNormalizing',
    value: function withoutNormalizing(fn) {
      var controller = this.controller;

      var value = this.tmp.normalize;
      this.tmp.normalize = false;
      fn(controller);
      this.tmp.normalize = value;
      normalizeDirtyPaths(this);
      return controller;
    }

    /**
     * Deprecated.
     */

  }, {
    key: 'change',
    value: function change(fn) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of Slate 0.43 the `change` object has been replaced with `editor`, so the `editor.change()` method is deprecated.`');

      for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
        args[_key7 - 1] = arguments[_key7];
      }

      fn.apply(undefined, [this.controller].concat(args));
    }
  }, {
    key: 'call',
    value: function call(fn) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of Slate 0.43 the `editor.call(fn)` method has been deprecated, please use `editor.command(fn)` instead.');

      for (var _len8 = arguments.length, args = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
        args[_key8 - 1] = arguments[_key8];
      }

      fn.apply(undefined, [this.controller].concat(args));
      return this.controller;
    }
  }, {
    key: 'applyOperations',
    value: function applyOperations(operations) {
      var _this4 = this;

      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of Slate 0.43 the `applyOperations` method is deprecated, please apply each operation in a loop instead.');

      operations.forEach(function (op) {
        return _this4.applyOperation(op);
      });
      return this.controller;
    }
  }, {
    key: 'setOperationFlag',
    value: function setOperationFlag(key, value) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.41 the `change.setOperationFlag` method has been deprecated.');

      this.tmp[key] = value;
      return this;
    }
  }, {
    key: 'getFlag',
    value: function getFlag(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.41 the `change.getFlag` method has been deprecated.');

      return options[key] !== undefined ? options[key] : this.tmp[key];
    }
  }, {
    key: 'unsetOperationFlag',
    value: function unsetOperationFlag(key) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.41 the `change.unsetOperationFlag` method has been deprecated.');

      delete this.tmp[key];
      return this;
    }
  }, {
    key: 'withoutNormalization',
    value: function withoutNormalization(fn) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.41 the `change.withoutNormalization` helper has been renamed to `change.withoutNormalizing`.');

      return this.withoutNormalizing(fn);
    }
  }, {
    key: 'editor',
    get: function get$$1() {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "As of Slate 0.43 the `change` object has been replaced with `editor`, so you don't need to access `change.editor`.");

      return this.controller;
    }
  }]);
  return Editor;
}();

/**
 * Get the "dirty" paths for a given `operation`.
 *
 * @param {Operation} operation
 * @return {Array}
 */

function getDirtyPaths(operation) {
  var type = operation.type,
      node = operation.node,
      path = operation.path,
      newPath = operation.newPath;


  switch (type) {
    case 'add_mark':
    case 'insert_text':
    case 'remove_mark':
    case 'remove_text':
    case 'set_mark':
    case 'set_node':
      {
        var ancestors = PathUtils.getAncestors(path).toArray();
        return [].concat(toConsumableArray(ancestors), [path]);
      }

    case 'insert_node':
      {
        var table = node.getKeysToPathsTable();
        var paths = Object.values(table).map(function (p) {
          return path.concat(p);
        });
        var _ancestors = PathUtils.getAncestors(path).toArray();
        return [].concat(toConsumableArray(_ancestors), [path], toConsumableArray(paths));
      }

    case 'split_node':
      {
        var _ancestors2 = PathUtils.getAncestors(path).toArray();
        var nextPath = PathUtils.increment(path);
        return [].concat(toConsumableArray(_ancestors2), [path, nextPath]);
      }

    case 'merge_node':
      {
        var _ancestors3 = PathUtils.getAncestors(path).toArray();
        var previousPath = PathUtils.decrement(path);
        return [].concat(toConsumableArray(_ancestors3), [previousPath]);
      }

    case 'move_node':
      {
        var parentPath = PathUtils.lift(path);
        var newParentPath = PathUtils.lift(newPath);

        if (PathUtils.isEqual(path, newPath)) {
          return [];
        }

        // HACK: this clause only exists because the `move_path` logic isn't
        // consistent when it deals with siblings.
        if (!PathUtils.isSibling(path, newPath)) {
          if (newParentPath.size && PathUtils.isYounger(path, newPath)) {
            newParentPath = PathUtils.decrement(newParentPath, 1, path.size - 1);
          }

          if (parentPath.size && PathUtils.isYounger(newPath, path)) {
            parentPath = PathUtils.increment(parentPath, 1, newPath.size - 1);
          }
        }

        var oldAncestors = PathUtils.getAncestors(parentPath).toArray();
        var newAncestors = PathUtils.getAncestors(newParentPath).toArray();

        return [].concat(toConsumableArray(oldAncestors), [parentPath], toConsumableArray(newAncestors), [newParentPath]);
      }

    case 'remove_node':
      {
        var _ancestors4 = PathUtils.getAncestors(path).toArray();
        return [].concat(toConsumableArray(_ancestors4));
      }

    default:
      {
        return [];
      }
  }
}

/**
 * Normalize any new "dirty" paths that have been added to the change.
 *
 * @param {Editor}
 */

function normalizeDirtyPaths(editor) {
  if (!editor.tmp.normalize) {
    return;
  }

  while (editor.tmp.dirty.length) {
    var path = editor.tmp.dirty.pop();
    normalizeNodeByPath(editor, path);
  }
}

/**
 * Normalize the node at a specific `path`.
 *
 * @param {Editor} editor
 * @param {Array} path
 */

function normalizeNodeByPath(editor, path) {
  var controller = editor.controller,
      value = editor.value;
  var document = value.document;

  var node = document.assertNode(path);
  var iterations = 0;
  var max = 100 + (node.object === 'text' ? 1 : node.nodes.size);

  var iterate = function iterate() {
    var fn = node.normalize(controller);
    if (!fn) return;

    // Run the normalize `fn` to fix the node.
    fn(controller);

    // Attempt to re-find the node by path, or by key if it has changed
    // locations in the tree continue iterating.
    document = editor.value.document;
    var _node = node,
        key = _node.key;

    var found = document.getDescendant(path);

    if (found && found.key === key) {
      node = found;
    } else {
      found = document.getDescendant(key);

      if (found) {
        node = found;
        path = document.getPath(key);
      } else {
        // If it no longer exists by key, it was removed, so abort.
        return;
      }
    }

    // Increment the iterations counter, and check to make sure that we haven't
    // exceeded the max. Without this check, it's easy for the `normalize`
    // function of a schema rule to be written incorrectly and for an infinite
    // invalid loop to occur.
    iterations++;

    if (iterations > max) {
      throw new Error('A schema rule could not be normalized after sufficient iterations. This is usually due to a `rule.normalize` or `plugin.normalizeNode` function of a schema being incorrectly written, causing an infinite loop.');
    }

    // Otherwise, iterate again.
    iterate();
  };

  editor.withoutNormalizing(function () {
    iterate();
  });
}

/**
 * Register a `plugin` with the editor.
 *
 * @param {Editor} editor
 * @param {Object|Array} plugin
 */

function registerPlugin(editor, plugin) {
  if (Array.isArray(plugin)) {
    plugin.forEach(function (p) {
      return registerPlugin(editor, p);
    });
    return;
  }

  var commands = plugin.commands,
      queries = plugin.queries,
      schema = plugin.schema,
      rest = objectWithoutProperties(plugin, ['commands', 'queries', 'schema']);


  if (commands) {
    var commandsPlugin = CommandsPlugin(commands);
    registerPlugin(editor, commandsPlugin);
  }

  if (queries) {
    var queriesPlugin = QueriesPlugin(queries);
    registerPlugin(editor, queriesPlugin);
  }

  if (schema) {
    var schemaPlugin = SchemaPlugin(schema);
    registerPlugin(editor, schemaPlugin);
  }

  for (var key in rest) {
    var fn = rest[key];
    var middleware = editor.middleware[key] = editor.middleware[key] || [];
    middleware.push(fn);
  }
}

/**
 * Mix in an `Interface` to a `Class`.
 *
 * @param {Class} Interface
 * @param {Class} Class
 */

function mixin(Interface, Classes) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var Class = _step.value;

      // Copy static properties from the interface.
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.getOwnPropertyNames(Interface)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var name = _step2.value;

          if (Class.hasOwnProperty(name)) continue;
          var desc = Object.getOwnPropertyDescriptor(Interface, name);
          Object.defineProperty(Class, name, desc);
        }

        // Copy instance properties from the interface.
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

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.getOwnPropertyNames(Interface.prototype)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var _name = _step3.value;

          if (Class.prototype.hasOwnProperty(_name)) continue;
          var desc = Object.getOwnPropertyDescriptor(Interface.prototype, _name);
          Object.defineProperty(Class.prototype, _name, desc);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
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
}

/**
 * A factory for the interface that all Slate objects implement.
 *
 * @type {Function}
 */

function create$2(type) {
  var TYPE = TYPES[type];
  var camel = '' + type.charAt(0).toUpperCase() + type.slice(1);
  var is$$1 = 'is' + camel;

  var ObjectInterface = function () {
    function ObjectInterface() {
      classCallCheck(this, ObjectInterface);
    }

    createClass(ObjectInterface, [{
      key: 'object',

      /**
       * Return the type of the object.
       *
       * @return {String}
       */

      get: function get$$1() {
        return type;
      }
    }]);
    return ObjectInterface;
  }();

  ObjectInterface[is$$1] = isObject.bind(null, type);
  ObjectInterface.prototype[TYPE] = true;
  return ObjectInterface;
}

/**
 * Mix in the object interfaces.
 */

mixin(create$2('block'), [Block]);
mixin(create$2('change'), [Change]);
mixin(create$2('decoration'), [Decoration]);
mixin(create$2('document'), [Document]);
mixin(create$2('editor'), [Editor]);
mixin(create$2('inline'), [Inline]);
mixin(create$2('leaf'), [Leaf]);
mixin(create$2('mark'), [Mark]);
mixin(create$2('node'), [Node]);
mixin(create$2('operation'), [Operation]);
mixin(create$2('point'), [Point]);
mixin(create$2('range'), [Range]);
mixin(create$2('selection'), [Selection]);
mixin(create$2('text'), [Text]);
mixin(create$2('value'), [Value]);

/**
 * The interface that all Slate models implement.
 *
 * @type {Class}
 */

var ModelInterface = function () {
  function ModelInterface() {
    classCallCheck(this, ModelInterface);
  }

  createClass(ModelInterface, [{
    key: 'toJS',


    /**
     * Alias `toJS`.
     */

    value: function toJS() {
      return this.toJSON.apply(this, arguments);
    }
  }], [{
    key: 'fromJS',

    /**
     * Alias `fromJS`.
     */

    value: function fromJS() {
      return this.fromJSON.apply(this, arguments);
    }
  }]);
  return ModelInterface;
}();

/**
 * Mix in the common interface.
 *
 * @param {Record}
 */

mixin(ModelInterface, [Block, Decoration, Document, Inline, Leaf, Mark, Node, Operation, Point, Range, Selection, Text, Value]);

/**
 * The interface that `Document`, `Block` and `Inline` all implement, to make
 * working with the recursive node tree easier.
 *
 * @type {Class}
 */

var NodeInterface = function () {
  function NodeInterface() {
    classCallCheck(this, NodeInterface);
  }

  createClass(NodeInterface, [{
    key: 'getFirstText',


    /**
     * Get the first text node of a node, or the node itself.
     *
     * @return {Node|Null}
     */

    value: function getFirstText() {
      if (this.object === 'text') {
        return this;
      }

      var descendant = null;

      var found = this.nodes.find(function (node) {
        if (node.object === 'text') return true;
        descendant = node.getFirstText();
        return !!descendant;
      });

      return descendant || found;
    }

    /**
     * Get an object mapping all the keys in the node to their paths.
     *
     * @return {Object}
     */

  }, {
    key: 'getKeysToPathsTable',
    value: function getKeysToPathsTable() {
      var ret = defineProperty({}, this.key, []);

      if (this.nodes) {
        this.nodes.forEach(function (node, i) {
          var nested = node.getKeysToPathsTable();

          for (var key in nested) {
            var path = nested[key];

            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(!(key in ret), 'A node with a duplicate key of "' + key + '" was found! Duplicate keys are not allowed, you should use `node.regenerateKey` before inserting if you are reusing an existing node.');

            ret[key] = [i].concat(toConsumableArray(path));
          }
        });
      }

      return ret;
    }

    /**
     * Get the last text node of a node, or the node itself.
     *
     * @return {Node|Null}
     */

  }, {
    key: 'getLastText',
    value: function getLastText() {
      if (this.object === 'text') {
        return this;
      }

      var descendant = null;

      var found = this.nodes.findLast(function (node) {
        if (node.object == 'text') return true;
        descendant = node.getLastText();
        return descendant;
      });

      return descendant || found;
    }

    /**
     * Get a node in the tree, or the node itself.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNode',
    value: function getNode(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (this.object === 'text' && path.size) return null;
      var node = path.size ? this.getDescendant(path) : this;
      return node;
    }

    /**
     * Find the path to a node.
     *
     * @param {String|List} key
     * @return {List}
     */

  }, {
    key: 'getPath',
    value: function getPath(key) {
      // Handle the case of passing in a path directly, to match other methods.
      if (immutable__WEBPACK_IMPORTED_MODULE_1__["List"].isList(key)) return key;

      var dict = this.getKeysToPathsTable();
      var path = dict[key];
      return path ? Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(path) : null;
    }

    /**
     * Get the concatenated text string of a node.
     *
     * @return {String}
     */

  }, {
    key: 'getText',
    value: function getText() {
      var children = this.object === 'text' ? this.leaves : this.nodes;
      var text = children.reduce(function (memo, c) {
        return memo + c.text;
      }, '');
      return text;
    }

    /**
     * Check if a node exists.
     *
     * @param {List|String} path
     * @return {Boolean}
     */

  }, {
    key: 'hasNode',
    value: function hasNode(path) {
      var node = this.getNode(path);
      return !!node;
    }

    /**
     * Normalize the text node with an `editor`.
     *
     * @param {Editor} editor
     * @return {Function|Void}
     */

  }, {
    key: 'normalize',
    value: function normalize(editor) {
      var normalizer = editor.run('normalizeNode', this);
      return normalizer;
    }

    /**
     * Regenerate the node's key.
     *
     * @return {Node}
     */

  }, {
    key: 'regenerateKey',
    value: function regenerateKey() {
      var key = KeyUtils.create();
      var node = this.set('key', key);
      return node;
    }

    /**
     * Resolve a path from a path list or key string.
     *
     * An `index` can be provided, in which case paths created from a key string
     * will have the index pushed onto them. This is helpful in cases where you
     * want to accept either a `path` or a `key, index` combination for targeting
     * a location in the tree that doesn't exist yet, like when inserting.
     *
     * @param {List|String} value
     * @param {Number} index
     * @return {List}
     */

  }, {
    key: 'resolvePath',
    value: function resolvePath(path, index) {
      if (typeof path === 'string') {
        path = this.getPath(path);

        if (index != null) {
          path = path.concat(index);
        }
      } else {
        path = PathUtils.create(path);
      }

      return path;
    }

    /**
     * Validate the node with an `editor`.
     *
     * @param {Editor} editor
     * @return {Error|Void}
     */

  }, {
    key: 'validate',
    value: function validate(editor) {
      var error = editor.run('validateNode', this);
      return error;
    }
  }, {
    key: 'text',

    /**
     * Get the concatenated text of the node.
     *
     * @return {String}
     */

    get: function get$$1() {
      return this.getText();
    }
  }]);
  return NodeInterface;
}();

/**
 * Memoize read methods.
 */

memoize(NodeInterface.prototype, ['getFirstText', 'getKeysToPathsTable', 'getLastText', 'getText', 'normalize', 'validate']);

/**
 * Mix in the node interface.
 */

mixin(NodeInterface, [Block, Document, Inline, Text]);

/**
 * The interface that `Document`, `Block` and `Inline` all implement, to make
 * working with the recursive node tree easier.
 *
 * @type {Class}
 */

var ElementInterface = function () {
  function ElementInterface() {
    classCallCheck(this, ElementInterface);
  }

  createClass(ElementInterface, [{
    key: 'addMark',

    /**
     * Add mark to text at `offset` and `length` in node by `path`.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @return {Node}
     */

    value: function addMark(path, offset, length, mark) {
      var node = this.assertDescendant(path);
      path = this.resolvePath(path);
      node = node.addMark(offset, length, mark);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Create a decoration with `properties` relative to the node.
     *
     * @param {Object|Decoration} properties
     * @return {Decoration}
     */

  }, {
    key: 'createDecoration',
    value: function createDecoration(properties) {
      properties = Decoration.createProperties(properties);
      var decoration = this.resolveDecoration(properties);
      return decoration;
    }

    /**
     * Create a point with `properties` relative to the node.
     *
     * @param {Object|Point} properties
     * @return {Range}
     */

  }, {
    key: 'createPoint',
    value: function createPoint(properties) {
      properties = Point.createProperties(properties);
      var point = this.resolvePoint(properties);
      return point;
    }

    /**
     * Create a range with `properties` relative to the node.
     *
     * @param {Object|Range} properties
     * @return {Range}
     */

  }, {
    key: 'createRange',
    value: function createRange(properties) {
      properties = Range.createProperties(properties);
      var range = this.resolveRange(properties);
      return range;
    }

    /**
     * Create a selection with `properties` relative to the node.
     *
     * @param {Object|Selection} properties
     * @return {Selection}
     */

  }, {
    key: 'createSelection',
    value: function createSelection(properties) {
      properties = Selection.createProperties(properties);
      var selection = this.resolveSelection(properties);
      return selection;
    }

    /**
     * Recursively filter all descendant nodes with `iterator`.
     *
     * @param {Function} iterator
     * @return {List<Node>}
     */

  }, {
    key: 'filterDescendants',
    value: function filterDescendants(iterator) {
      var matches = [];

      this.forEachDescendant(function (node, i, nodes) {
        if (iterator(node, i, nodes)) matches.push(node);
      });

      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(matches);
    }

    /**
     * Recursively find all descendant nodes by `iterator`.
     *
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'findDescendant',
    value: function findDescendant(iterator) {
      var found = null;

      this.forEachDescendant(function (node, i, nodes) {
        if (iterator(node, i, nodes)) {
          found = node;
          return false;
        }
      });

      return found;
    }

    /**
     * Recursively iterate over all descendant nodes with `iterator`. If the
     * iterator returns false it will break the loop.
     *
     * @param {Function} iterator
     */

  }, {
    key: 'forEachDescendant',
    value: function forEachDescendant(iterator) {
      var ret = void 0;

      this.nodes.forEach(function (child, i, nodes) {
        if (iterator(child, i, nodes) === false) {
          ret = false;
          return false;
        }

        if (child.object != 'text') {
          ret = child.forEachDescendant(iterator);
          return ret;
        }
      });

      return ret;
    }

    /**
     * Get a set of the active marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getActiveMarksAtRange',
    value: function getActiveMarksAtRange(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();

      if (range.isCollapsed) {
        var _range = range,
            _start = _range.start;

        return this.getMarksAtPosition(_start.key, _start.offset).toSet();
      }

      var _range2 = range,
          start = _range2.start,
          end = _range2.end;

      var startKey = start.key;
      var startOffset = start.offset;
      var endKey = end.key;
      var endOffset = end.offset;
      var startText = this.getDescendant(startKey);

      if (startKey !== endKey) {
        while (startKey !== endKey && endOffset === 0) {
          var _endText = this.getPreviousText(endKey);
          endKey = _endText.key;
          endOffset = _endText.text.length;
        }

        while (startKey !== endKey && startOffset === startText.text.length) {
          startText = this.getNextText(startKey);
          startKey = startText.key;
          startOffset = 0;
        }
      }

      if (startKey === endKey) {
        return startText.getActiveMarksBetweenOffsets(startOffset, endOffset);
      }

      var startMarks = startText.getActiveMarksBetweenOffsets(startOffset, startText.text.length);
      if (startMarks.size === 0) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
      var endText = this.getDescendant(endKey);
      var endMarks = endText.getActiveMarksBetweenOffsets(0, endOffset);
      var marks = startMarks.intersect(endMarks);
      // If marks is already empty, the active marks is empty
      if (marks.size === 0) return marks;

      var text = this.getNextText(startKey);

      while (text.key !== endKey) {
        if (text.text.length !== 0) {
          marks = marks.intersect(text.getActiveMarks());
          if (marks.size === 0) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
        }

        text = this.getNextText(text.key);
      }
      return marks;
    }

    /**
     * Get a list of the ancestors of a descendant.
     *
     * @param {List|String} path
     * @return {List<Node>|Null}
     */

  }, {
    key: 'getAncestors',
    value: function getAncestors(path) {
      var _this = this;

      path = this.resolvePath(path);
      if (!path) return null;

      var ancestors = [];

      path.forEach(function (p, i) {
        var current = path.slice(0, i);
        var parent = _this.getNode(current);
        ancestors.push(parent);
      });

      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(ancestors);
    }

    /**
     * Get the leaf block descendants of the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocks',
    value: function getBlocks() {
      var array = this.getBlocksAsArray();
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(array);
    }

    /**
     * Get the leaf block descendants of the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksAsArray',
    value: function getBlocksAsArray() {
      return this.nodes.reduce(function (array, child) {
        if (child.object != 'block') return array;
        if (!child.isLeafBlock()) return array.concat(child.getBlocksAsArray());
        array.push(child);
        return array;
      }, []);
    }

    /**
     * Get the leaf block descendants in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksAtRange',
    value: function getBlocksAtRange(range) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.44 the `node.getBlocksAtRange` method has been renamed to `getLeafBlocksAtRange`.');

      return this.getLeafBlocksAtRange(range);
    }

    /**
     * Get the bottom-most block descendants in a `range` as an array
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getBlocksAtRangeAsArray',
    value: function getBlocksAtRangeAsArray(range) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.44 the `node.getBlocksAtRangeAsArray` method has been renamed to `getLeafBlocksAtRangeAsArray`.');

      return this.getLeafBlocksAtRangeAsArray(range);
    }

    /**
     * Get all of the leaf blocks that match a `type`.
     *
     * @param {String} type
     * @return {List<Node>}
     */

  }, {
    key: 'getBlocksByType',
    value: function getBlocksByType(type) {
      var array = this.getBlocksByTypeAsArray(type);
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(array);
    }

    /**
     * Get all of the leaf blocks that match a `type` as an array
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getBlocksByTypeAsArray',
    value: function getBlocksByTypeAsArray(type) {
      return this.nodes.reduce(function (array, node) {
        if (node.object != 'block') {
          return array;
        } else if (node.isLeafBlock() && node.type == type) {
          array.push(node);
          return array;
        } else {
          return array.concat(node.getBlocksByTypeAsArray(type));
        }
      }, []);
    }

    /**
     * Get a child node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getChild',
    value: function getChild(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      var child = path.size === 1 ? this.nodes.get(path.first()) : null;
      return child;
    }

    /**
     * Get closest parent of node that matches an `iterator`.
     *
     * @param {List|String} path
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'getClosest',
    value: function getClosest(path, iterator) {
      var _this2 = this;

      var ancestors = this.getAncestors(path);
      if (!ancestors) return null;

      var closest = ancestors.findLast(function (node) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        // We never want to include the top-level node.
        if (node === _this2) return false;
        return iterator.apply(undefined, [node].concat(args));
      });

      return closest || null;
    }

    /**
     * Get the closest block parent of a node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestBlock',
    value: function getClosestBlock(path) {
      var closest = this.getClosest(path, function (n) {
        return n.object === 'block';
      });
      return closest;
    }

    /**
     * Get the closest inline parent of a node by `path`.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestInline',
    value: function getClosestInline(path) {
      var closest = this.getClosest(path, function (n) {
        return n.object === 'inline';
      });
      return closest;
    }

    /**
     * Get the closest void parent of a node by `path`.
     *
     * @param {List|String} path
     * @param {Editor} editor
     * @return {Node|Null}
     */

  }, {
    key: 'getClosestVoid',
    value: function getClosestVoid(path, editor) {
      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!Value.isValue(editor), 'As of Slate 0.42.0, the `node.getClosestVoid` method takes an `editor` instead of a `value`.');

      var ancestors = this.getAncestors(path);
      if (!ancestors) return null;

      var ancestor = ancestors.findLast(function (a) {
        return editor.query('isVoid', a);
      });
      return ancestor;
    }

    /**
     * Get the common ancestor of nodes `a` and `b`.
     *
     * @param {List} a
     * @param {List} b
     * @return {Node}
     */

  }, {
    key: 'getCommonAncestor',
    value: function getCommonAncestor(a, b) {
      a = this.resolvePath(a);
      b = this.resolvePath(b);
      if (!a || !b) return null;

      var path = PathUtils.relate(a, b);
      var node = this.getNode(path);
      return node;
    }

    /**
     * Get the decorations for the node from an `editor`.
     *
     * @param {Editor} editor
     * @return {List}
     */

  }, {
    key: 'getDecorations',
    value: function getDecorations(editor) {
      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!Value.isValue(editor), 'As of Slate 0.42.0, the `node.getDecorations` method takes an `editor` instead of a `value`.');

      var array = editor.run('decorateNode', this);
      var decorations = Decoration.createList(array);
      return decorations;
    }

    /**
     * Get the depth of a descendant, with optional `startAt`.
     *
     * @param {List|String} path
     * @param {Number} startAt
     * @return {Number|Null}
     */

  }, {
    key: 'getDepth',
    value: function getDepth(path) {
      var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      path = this.resolvePath(path);
      if (!path) return null;

      var node = this.getNode(path);
      var depth = node ? path.size - 1 + startAt : null;
      return depth;
    }

    /**
     * Get a descendant node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getDescendant',
    value: function getDescendant(path) {
      path = this.resolvePath(path);
      if (!path) return null;

      var deep = path.flatMap(function (x) {
        return ['nodes', x];
      });
      var ret = this.getIn(deep);
      return ret;
    }

    /**
     * Get a fragment of the node at a `range`.
     *
     * @param {Range} range
     * @return {Document}
     */

  }, {
    key: 'getFragmentAtRange',
    value: function getFragmentAtRange(range) {
      range = this.resolveRange(range);

      if (range.isUnset) {
        return Document.create();
      }

      var _range3 = range,
          start = _range3.start,
          end = _range3.end;

      var node = this;
      var targetPath = end.path;
      var targetPosition = end.offset;
      var mode = 'end';

      while (targetPath.size) {
        var index = targetPath.last();
        node = node.splitNode(targetPath, targetPosition);
        targetPosition = index + 1;
        targetPath = PathUtils.lift(targetPath);

        if (!targetPath.size && mode === 'end') {
          targetPath = start.path;
          targetPosition = start.offset;
          mode = 'start';
        }
      }

      var startIndex = start.path.first() + 1;
      var endIndex = end.path.first() + 2;
      var nodes = node.nodes.slice(startIndex, endIndex);
      var fragment = Document.create({ nodes: nodes });
      return fragment;
    }

    /**
     * Get the furthest parent of a node that matches an `iterator`.
     *
     * @param {Path} path
     * @param {Function} iterator
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthest',
    value: function getFurthest(path, iterator) {
      var _this3 = this;

      var ancestors = this.getAncestors(path);
      if (!ancestors) return null;

      var furthest = ancestors.find(function (node) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        // We never want to include the top-level node.
        if (node === _this3) return false;
        return iterator.apply(undefined, [node].concat(args));
      });

      return furthest || null;
    }

    /**
     * Get the furthest ancestor of a node.
     *
     * @param {Path} path
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestAncestor',
    value: function getFurthestAncestor(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      var furthest = path.size ? this.nodes.get(path.first()) : null;
      return furthest;
    }

    /**
     * Get the furthest block parent of a node.
     *
     * @param {Path} path
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestBlock',
    value: function getFurthestBlock(path) {
      var furthest = this.getFurthest(path, function (n) {
        return n.object === 'block';
      });
      return furthest;
    }

    /**
     * Get the furthest inline parent of a node.
     *
     * @param {Path} path
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestInline',
    value: function getFurthestInline(path) {
      var furthest = this.getFurthest(path, function (n) {
        return n.object === 'inline';
      });
      return furthest;
    }

    /**
     * Get the furthest ancestor of a node that has only one child.
     *
     * @param {Path} path
     * @return {Node|Null}
     */

  }, {
    key: 'getFurthestOnlyChildAncestor',
    value: function getFurthestOnlyChildAncestor(path) {
      var ancestors = this.getAncestors(path);
      if (!ancestors) return null;

      var furthest = ancestors.rest().reverse().takeUntil(function (p) {
        return p.nodes.size > 1;
      }).last();

      return furthest || null;
    }

    /**
     * Get the closest inline nodes for each text node in the node.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getInlines',
    value: function getInlines() {
      var array = this.getInlinesAsArray();
      var list = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(array);
      return list;
    }

    /**
     * Get the closest inline nodes for each text node in the node, as an array.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getInlinesAsArray',
    value: function getInlinesAsArray() {
      var array = [];

      this.nodes.forEach(function (child) {
        if (child.object == 'text') return;

        if (child.isLeafInline()) {
          array.push(child);
        } else {
          array = array.concat(child.getInlinesAsArray());
        }
      });

      return array;
    }

    /**
     * Get the bottom-most inline nodes for each text node in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getInlinesAtRange',
    value: function getInlinesAtRange(range) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.44 the `node.getInlinesAtRange` method has been renamed to `getLeafInlinesAtRange`.');

      return this.getLeafInlinesAtRange(range);
    }

    /**
     * Get the bottom-most inline nodes for each text node in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getInlinesAtRangeAsArray',
    value: function getInlinesAtRangeAsArray(range) {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'As of slate@0.44 the `node.getInlinesAtRangeAsArray` method has been renamed to `getLeafInlinesAtRangeAsArray`.');

      return this.getLeafInlinesAtRangeAsArray(range);
    }

    /**
     * Get all of the leaf inline nodes that match a `type`.
     *
     * @param {String} type
     * @return {List<Node>}
     */

  }, {
    key: 'getInlinesByType',
    value: function getInlinesByType(type) {
      var array = this.getInlinesByTypeAsArray(type);
      var list = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(array);
      return list;
    }

    /**
     * Get all of the leaf inline nodes that match a `type` as an array.
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getInlinesByTypeAsArray',
    value: function getInlinesByTypeAsArray(type) {
      var array = this.nodes.reduce(function (inlines, node) {
        if (node.object == 'text') {
          return inlines;
        } else if (node.isLeafInline() && node.type == type) {
          inlines.push(node);
          return inlines;
        } else {
          return inlines.concat(node.getInlinesByTypeAsArray(type));
        }
      }, []);

      return array;
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getInsertMarksAtRange',
    value: function getInsertMarksAtRange(range) {
      range = this.resolveRange(range);
      var _range4 = range,
          start = _range4.start;


      if (range.isUnset) {
        return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();
      }

      if (range.isCollapsed) {
        // PERF: range is not cachable, use key and offset as proxies for cache
        return this.getMarksAtPosition(start.key, start.offset);
      }

      var text = this.getDescendant(start.key);
      var marks = text.getMarksAtIndex(start.offset + 1);
      return marks;
    }

    /**
     * Get the bottom-most block descendants in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getLeafBlocksAtRange',
    value: function getLeafBlocksAtRange(range) {
      var array = this.getLeafBlocksAtRangeAsArray(range);
      // Eliminate duplicates by converting to an `OrderedSet` first.
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"])(array));
    }

    /**
     * Get the bottom-most descendants in a `range` as an array
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getLeafBlocksAtRangeAsArray',
    value: function getLeafBlocksAtRangeAsArray(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return [];

      var _range5 = range,
          start = _range5.start,
          end = _range5.end;

      var startBlock = this.getClosestBlock(start.key);

      // PERF: the most common case is when the range is in a single block node,
      // where we can avoid a lot of iterating of the tree.
      if (start.key === end.key) return [startBlock];

      var endBlock = this.getClosestBlock(end.key);
      var blocks = this.getBlocksAsArray();
      var startIndex = blocks.indexOf(startBlock);
      var endIndex = blocks.indexOf(endBlock);
      return blocks.slice(startIndex, endIndex + 1);
    }

    /**
     * Get the bottom-most inline nodes for each text node in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getLeafInlinesAtRange',
    value: function getLeafInlinesAtRange(range) {
      var array = this.getLeafInlinesAtRangeAsArray(range);
      // Remove duplicates by converting it to an `OrderedSet` first.
      var list = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"])(array));
      return list;
    }

    /**
     * Get the bottom-most inline nodes for each text node in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getLeafInlinesAtRangeAsArray',
    value: function getLeafInlinesAtRangeAsArray(range) {
      var _this4 = this;

      range = this.resolveRange(range);
      if (range.isUnset) return [];

      var array = this.getTextsAtRangeAsArray(range).map(function (text) {
        return _this4.getClosestInline(text.key);
      }).filter(function (exists) {
        return exists;
      });

      return array;
    }

    /**
     * Get all of the marks for all of the characters of every text node.
     *
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarks',
    value: function getMarks() {
      var array = this.getMarksAsArray();
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])(array);
    }

    /**
     * Get all of the marks as an array.
     *
     * @return {Array}
     */

  }, {
    key: 'getMarksAsArray',
    value: function getMarksAsArray() {
      var _ref;

      var result = [];

      this.nodes.forEach(function (node) {
        result.push(node.getMarksAsArray());
      });

      // PERF: use only one concat rather than multiple for speed.
      var array = (_ref = []).concat.apply(_ref, result);
      return array;
    }

    /**
     * Get a set of marks in a `position`, the equivalent of a collapsed range
     *
     * @param {string} key
     * @param {number} offset
     * @return {Set}
     */

  }, {
    key: 'getMarksAtPosition',
    value: function getMarksAtPosition(key, offset) {
      var text = this.getDescendant(key);
      var currentMarks = text.getMarksAtIndex(offset);
      if (offset !== 0) return currentMarks;
      var closestBlock = this.getClosestBlock(key);

      if (closestBlock.text === '') {
        // insert mark for empty block; the empty block are often created by split node or add marks in a range including empty blocks
        return currentMarks;
      }

      var previous = this.getPreviousText(key);
      if (!previous) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])();

      if (closestBlock.hasDescendant(previous.key)) {
        return previous.getMarksAtIndex(previous.text.length);
      }

      return currentMarks;
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksAtRange',
    value: function getMarksAtRange(range) {
      var marks = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])(this.getOrderedMarksAtRange(range));
      return marks;
    }

    /**
     * Get all of the marks that match a `type`.
     *
     * @param {String} type
     * @return {Set<Mark>}
     */

  }, {
    key: 'getMarksByType',
    value: function getMarksByType(type) {
      var array = this.getMarksByTypeAsArray(type);
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Set"])(array);
    }

    /**
     * Get all of the marks that match a `type` as an array.
     *
     * @param {String} type
     * @return {Array}
     */

  }, {
    key: 'getMarksByTypeAsArray',
    value: function getMarksByTypeAsArray(type) {
      var array = this.nodes.reduce(function (memo, node) {
        return node.object == 'text' ? memo.concat(node.getMarksAsArray().filter(function (m) {
          return m.type == type;
        })) : memo.concat(node.getMarksByTypeAsArray(type));
      }, []);

      return array;
    }

    /**
     * Get the block node before a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getNextBlock',
    value: function getNextBlock(key) {
      var child = this.assertDescendant(key);
      var last = void 0;

      if (child.object == 'block') {
        last = child.getLastText();
      } else {
        var block = this.getClosestBlock(key);
        last = block.getLastText();
      }

      var next = this.getNextText(last.key);
      if (!next) return null;

      var closest = this.getClosestBlock(next.key);
      return closest;
    }

    /**
     * Get the next node in the tree from a node.
     *
     * This will not only check for siblings but instead move up the tree
     * returning the next ancestor if no sibling is found.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNextNode',
    value: function getNextNode(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;

      for (var i = path.size; i > 0; i--) {
        var p = path.slice(0, i);
        var target = PathUtils.increment(p);
        var node = this.getNode(target);
        if (node) return node;
      }

      return null;
    }

    /**
     * Get the next sibling of a node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNextSibling',
    value: function getNextSibling(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      var p = PathUtils.increment(path);
      var sibling = this.getNode(p);
      return sibling;
    }

    /**
     * Get the text node after a descendant text node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getNextText',
    value: function getNextText(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      var next = this.getNextNode(path);
      if (!next) return null;
      var text = next.getFirstText();
      return text;
    }

    /**
     * Get all of the nodes in a `range`. This includes all of the
     * text nodes inside the range and all ancestors of those text
     * nodes up to this node.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getNodesAtRange',
    value: function getNodesAtRange(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
      var _range6 = range,
          start = _range6.start,
          end = _range6.end;

      // Do a depth-first stack-based search for all nodes in the range
      // Nodes that are pushed to the stack are inside the range

      // Start with the nodes that are on the highest level in the tree

      var stack = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["Stack"])(this.nodes.slice(start.path.get(0), end.path.get(0) + 1).map(function (node, index) {
        return {
          node: node,
          onStartEdge: index === 0,
          onEndEdge: index === end.path.get(0) - start.path.get(0),
          relativeStartPath: start.path.slice(1),
          relativeEndPath: end.path.slice(1)
        };
      }));

      var result = [];

      var _loop = function _loop() {
        var _stack$peek = stack.peek(),
            node = _stack$peek.node,
            onStartEdge = _stack$peek.onStartEdge,
            onEndEdge = _stack$peek.onEndEdge,
            relativeStartPath = _stack$peek.relativeStartPath,
            relativeEndPath = _stack$peek.relativeEndPath;

        stack = stack.shift();
        result.push(node);

        if (node.object === 'text') return 'continue';

        // Modify indexes to exclude children that are outside of the range
        var startIndex = onStartEdge ? relativeStartPath.get(0) : 0;
        var endIndex = onEndEdge ? relativeEndPath.get(0) : node.nodes.size - 1;

        // Push children that are inside the range to the stack
        stack = stack.pushAll(node.nodes.slice(startIndex, endIndex + 1).map(function (n, i) {
          return {
            node: n,
            onStartEdge: onStartEdge && i === 0,
            onEndEdge: onEndEdge && i === endIndex - startIndex,
            relativeStartPath: onStartEdge && i === 0 ? relativeStartPath.slice(1) : null,
            relativeEndPath: onEndEdge && i === endIndex - startIndex ? relativeEndPath.slice(1) : null
          };
        }));
      };

      while (stack.size > 0) {
        var _ret = _loop();

        if (_ret === 'continue') continue;
      }

      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(result);
    }

    /**
     * Get the offset for a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Number}
     */

  }, {
    key: 'getOffset',
    value: function getOffset(key) {
      this.assertDescendant(key);

      // Calculate the offset of the nodes before the highest child.
      var child = this.getFurthestAncestor(key);
      var offset = this.nodes.takeUntil(function (n) {
        return n == child;
      }).reduce(function (memo, n) {
        return memo + n.text.length;
      }, 0);

      // Recurse if need be.
      var ret = this.hasChild(key) ? offset : offset + child.getOffset(key);
      return ret;
    }

    /**
     * Get the offset from a `range`.
     *
     * @param {Range} range
     * @return {Number}
     */

  }, {
    key: 'getOffsetAtRange',
    value: function getOffsetAtRange(range) {
      range = this.resolveRange(range);

      if (range.isUnset) {
        throw new Error('The range cannot be unset to calculcate its offset.');
      }

      if (range.isExpanded) {
        throw new Error('The range must be collapsed to calculcate its offset.');
      }

      var _range7 = range,
          start = _range7.start;

      var offset = this.getOffset(start.key) + start.offset;
      return offset;
    }

    /**
     * Get all of the marks for all of the characters of every text node.
     *
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarks',
    value: function getOrderedMarks() {
      var array = this.getMarksAsArray();
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"])(array);
    }

    /**
     * Get a set of the marks in a `range`.
     *
     * @param {Range} range
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarksAtRange',
    value: function getOrderedMarksAtRange(range) {
      range = this.resolveRange(range);
      var _range8 = range,
          start = _range8.start,
          end = _range8.end;


      if (range.isUnset) {
        return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"])();
      }

      if (range.isCollapsed) {
        // PERF: range is not cachable, use key and offset as proxies for cache
        return this.getMarksAtPosition(start.key, start.offset);
      }

      var marks = this.getOrderedMarksBetweenPositions(start.key, start.offset, end.key, end.offset);

      return marks;
    }

    /**
     * Get a set of the marks in a `range`.
     * PERF: arguments use key and offset for utilizing cache
     *
     * @param {string} startKey
     * @param {number} startOffset
     * @param {string} endKey
     * @param {number} endOffset
     * @returns {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarksBetweenPositions',
    value: function getOrderedMarksBetweenPositions(startKey, startOffset, endKey, endOffset) {
      if (startKey === endKey) {
        var startText = this.getDescendant(startKey);
        return startText.getMarksBetweenOffsets(startOffset, endOffset);
      }

      var texts = this.getTextsBetweenPositionsAsArray(startKey, endKey);

      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"])().withMutations(function (result) {
        texts.forEach(function (text) {
          if (text.key === startKey) {
            result.union(text.getMarksBetweenOffsets(startOffset, text.text.length));
          } else if (text.key === endKey) {
            result.union(text.getMarksBetweenOffsets(0, endOffset));
          } else {
            result.union(text.getMarks());
          }
        });
      });
    }

    /**
     * Get all of the marks that match a `type`.
     *
     * @param {String} type
     * @return {OrderedSet<Mark>}
     */

  }, {
    key: 'getOrderedMarksByType',
    value: function getOrderedMarksByType(type) {
      var array = this.getMarksByTypeAsArray(type);
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"])(array);
    }

    /**
     * Get the parent of a descendant node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getParent',
    value: function getParent(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      var parentPath = PathUtils.lift(path);
      var parent = this.getNode(parentPath);
      return parent;
    }

    /**
     * Get the block node before a descendant text node by `key`.
     *
     * @param {String} key
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousBlock',
    value: function getPreviousBlock(key) {
      var child = this.assertDescendant(key);
      var first = void 0;

      if (child.object == 'block') {
        first = child.getFirstText();
      } else {
        var block = this.getClosestBlock(key);
        first = block.getFirstText();
      }

      var previous = this.getPreviousText(first.key);
      if (!previous) return null;

      var closest = this.getClosestBlock(previous.key);
      return closest;
    }

    /**
     * Get the highest block descendants in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getRootBlocksAtRange',
    value: function getRootBlocksAtRange(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();

      var _range9 = range,
          start = _range9.start,
          end = _range9.end;

      var startBlock = this.getFurthestBlock(start.key);

      // PERF: the most common case is when the range is in a single block node,
      // where we can avoid a lot of iterating of the tree.
      if (start.key === end.key) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])([startBlock]);

      var endBlock = this.getFurthestBlock(end.key);
      var startIndex = this.nodes.indexOf(startBlock);
      var endIndex = this.nodes.indexOf(endBlock);
      return this.nodes.slice(startIndex, endIndex + 1);
    }

    /**
     * Get the top-most inline nodes for each text node in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getRootInlinesAtRange',
    value: function getRootInlinesAtRange(range) {
      var array = this.getRootInlinesAtRangeAsArray(range);
      // Remove duplicates by converting it to an `OrderedSet` first.
      var list = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(Object(immutable__WEBPACK_IMPORTED_MODULE_1__["OrderedSet"])(array));
      return list;
    }

    /**
     * Get the top-most inline nodes for each text node in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getRootInlinesAtRangeAsArray',
    value: function getRootInlinesAtRangeAsArray(range) {
      var _this5 = this;

      range = this.resolveRange(range);
      if (range.isUnset) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();

      var array = this.getTextsAtRangeAsArray(range).map(function (text) {
        return _this5.getFurthestInline(text.key);
      }).filter(function (exists) {
        return exists;
      });

      return array;
    }

    /**
     * Get the previous node from a node in the tree.
     *
     * This will not only check for siblings but instead move up the tree
     * returning the previous ancestor if no sibling is found.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousNode',
    value: function getPreviousNode(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;

      for (var i = path.size; i > 0; i--) {
        var p = path.slice(0, i);
        if (p.last() === 0) continue;

        var target = PathUtils.decrement(p);
        var node = this.getNode(target);
        if (node) return node;
      }

      return null;
    }

    /**
     * Get the previous sibling of a node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousSibling',
    value: function getPreviousSibling(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      if (path.last() === 0) return null;
      var p = PathUtils.decrement(path);
      var sibling = this.getNode(p);
      return sibling;
    }

    /**
     * Get the text node after a descendant text node.
     *
     * @param {List|String} path
     * @return {Node|Null}
     */

  }, {
    key: 'getPreviousText',
    value: function getPreviousText(path) {
      path = this.resolvePath(path);
      if (!path) return null;
      if (!path.size) return null;
      var previous = this.getPreviousNode(path);
      if (!previous) return null;
      var text = previous.getLastText();
      return text;
    }

    /**
     * Get the indexes of the selection for a `range`, given an extra flag for
     * whether the node `isSelected`, to determine whether not finding matches
     * means everything is selected or nothing is.
     *
     * @param {Range} range
     * @param {Boolean} isSelected
     * @return {Object|Null}
     */

  }, {
    key: 'getSelectionIndexes',
    value: function getSelectionIndexes(range) {
      var isSelected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var start = range.start,
          end = range.end;

      // PERF: if we're not selected, we can exit early.

      if (!isSelected) {
        return null;
      }

      // if we've been given an invalid selection we can exit early.
      if (range.isUnset) {
        return null;
      }

      // PERF: if the start and end keys are the same, just check for the child
      // that contains that single key.
      if (start.key == end.key) {
        var child = this.getFurthestAncestor(start.key);
        var index = child ? this.nodes.indexOf(child) : null;
        return { start: index, end: index + 1 };
      }

      // Otherwise, check all of the children...
      var startIndex = null;
      var endIndex = null;

      this.nodes.forEach(function (child, i) {
        if (child.object == 'text') {
          if (startIndex == null && child.key == start.key) startIndex = i;
          if (endIndex == null && child.key == end.key) endIndex = i + 1;
        } else {
          if (startIndex == null && child.hasDescendant(start.key)) startIndex = i;
          if (endIndex == null && child.hasDescendant(end.key)) endIndex = i + 1;
        }

        // PERF: exit early if both start and end have been found.
        return startIndex == null || endIndex == null;
      });

      if (isSelected && startIndex == null) startIndex = 0;
      if (isSelected && endIndex == null) endIndex = this.nodes.size;
      return startIndex == null ? null : { start: startIndex, end: endIndex };
    }

    /**
     * Get the descendent text node at an `offset`.
     *
     * @param {String} offset
     * @return {Node|Null}
     */

  }, {
    key: 'getTextAtOffset',
    value: function getTextAtOffset(offset) {
      // PERF: Add a few shortcuts for the obvious cases.
      if (offset === 0) return this.getFirstText();
      if (offset === this.text.length) return this.getLastText();
      if (offset < 0 || offset > this.text.length) return null;

      var length = 0;
      var text = this.getTexts().find(function (node, i, nodes) {
        length += node.text.length;
        return length > offset;
      });

      return text;
    }

    /**
     * Get the direction of the node's text.
     *
     * @return {String}
     */

  }, {
    key: 'getTextDirection',
    value: function getTextDirection() {
      var dir = direction__WEBPACK_IMPORTED_MODULE_8___default()(this.text);
      return dir === 'neutral' ? null : dir;
    }

    /**
     * Recursively get all of the child text nodes in order of appearance.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getTexts',
    value: function getTexts() {
      var array = this.getTextsAsArray();
      return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(array);
    }

    /**
     * Recursively get all the leaf text nodes in order of appearance, as array.
     *
     * @return {List<Node>}
     */

  }, {
    key: 'getTextsAsArray',
    value: function getTextsAsArray() {
      var array = [];

      this.nodes.forEach(function (node) {
        if (node.object == 'text') {
          array.push(node);
        } else {
          array = array.concat(node.getTextsAsArray());
        }
      });

      return array;
    }

    /**
     * Get all of the text nodes in a `range`.
     *
     * @param {Range} range
     * @return {List<Node>}
     */

  }, {
    key: 'getTextsAtRange',
    value: function getTextsAtRange(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])();
      var _range10 = range,
          start = _range10.start,
          end = _range10.end;

      var list = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])(this.getTextsBetweenPositionsAsArray(start.key, end.key));

      return list;
    }

    /**
     * Get all of the text nodes in a `range` as an array.
     *
     * @param {Range} range
     * @return {Array}
     */

  }, {
    key: 'getTextsAtRangeAsArray',
    value: function getTextsAtRangeAsArray(range) {
      range = this.resolveRange(range);
      if (range.isUnset) return [];
      var _range11 = range,
          start = _range11.start,
          end = _range11.end;

      var texts = this.getTextsBetweenPositionsAsArray(start.key, end.key);
      return texts;
    }

    /**
     * Get all of the text nodes in a `range` as an array.
     * PERF: use key in arguments for cache
     *
     * @param {string} startKey
     * @param {string} endKey
     * @returns {Array}
     */

  }, {
    key: 'getTextsBetweenPositionsAsArray',
    value: function getTextsBetweenPositionsAsArray(startKey, endKey) {
      var startText = this.getDescendant(startKey);

      // PERF: the most common case is when the range is in a single text node,
      // where we can avoid a lot of iterating of the tree.
      if (startKey == endKey) return [startText];

      var endText = this.getDescendant(endKey);
      var texts = this.getTextsAsArray();
      var start = texts.indexOf(startText);
      var end = texts.indexOf(endText, start);
      var ret = texts.slice(start, end + 1);
      return ret;
    }

    /**
     * Check if the node has block children.
     *
     * @return {Boolean}
     */

  }, {
    key: 'hasBlockChildren',
    value: function hasBlockChildren() {
      return !!(this.nodes && this.nodes.find(function (n) {
        return n.object === 'block';
      }));
    }

    /**
     * Check if a child node exists.
     *
     * @param {List|String} path
     * @return {Boolean}
     */

  }, {
    key: 'hasChild',
    value: function hasChild(path) {
      var child = this.getChild(path);
      return !!child;
    }

    /**
     * Check if a node has inline children.
     *
     * @return {Boolean}
     */

  }, {
    key: 'hasInlineChildren',
    value: function hasInlineChildren() {
      return !!(this.nodes && this.nodes.find(function (n) {
        return n.object === 'inline' || n.object === 'text';
      }));
    }

    /**
     * Recursively check if a child node exists.
     *
     * @param {List|String} path
     * @return {Boolean}
     */

  }, {
    key: 'hasDescendant',
    value: function hasDescendant(path) {
      var descendant = this.getDescendant(path);
      return !!descendant;
    }

    /**
     * Check if a node has a void parent.
     *
     * @param {List|String} path
     * @param {Editor} editor
     * @return {Boolean}
     */

  }, {
    key: 'hasVoidParent',
    value: function hasVoidParent(path, editor) {
      Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_3__["default"])(!Value.isValue(editor), 'As of Slate 0.42.0, the `node.hasVoidParent` method takes an `editor` instead of a `value`.');

      var closest = this.getClosestVoid(path, editor);
      return !!closest;
    }

    /**
     * Insert a `node`.
     *
     * @param {List|String} path
     * @param {Node} node
     * @return {Node}
     */

  }, {
    key: 'insertNode',
    value: function insertNode(path, node) {
      path = this.resolvePath(path);
      var index = path.last();
      var parentPath = PathUtils.lift(path);
      var parent = this.assertNode(parentPath);
      var nodes = parent.nodes.splice(index, 0, node);
      parent = parent.set('nodes', nodes);
      var ret = this.replaceNode(parentPath, parent);
      return ret;
    }

    /**
     * Insert `text` at `offset` in node by `path`.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {String} text
     * @param {Set} marks
     * @return {Node}
     */

  }, {
    key: 'insertText',
    value: function insertText(path, offset, text, marks) {
      var node = this.assertDescendant(path);
      path = this.resolvePath(path);
      node = node.insertText(offset, text, marks);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Check whether the node is a leaf block.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isLeafBlock',
    value: function isLeafBlock() {
      var object = this.object,
          nodes = this.nodes;

      if (!nodes.size) return true;
      var first = nodes.first();
      return object === 'block' && first.object !== 'block';
    }

    /**
     * Check whether the node is a leaf inline.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isLeafInline',
    value: function isLeafInline() {
      var object = this.object,
          nodes = this.nodes;

      if (!nodes.size) return true;
      var first = nodes.first();
      return object === 'inline' && first.object !== 'inline';
    }

    /**
     * Check whether a descendant node is inside a range. This will return true for all
     * text nodes inside the range and all ancestors of those text nodes up to this node.
     *
     * @param {List|Key} path
     * @param {Range} range
     * @return {Node}
     */

  }, {
    key: 'isNodeInRange',
    value: function isNodeInRange(path, range) {
      this.assertDescendant(path);
      path = this.resolvePath(path);
      range = this.resolveRange(range);
      if (range.isUnset) return false;

      var toStart = PathUtils.compare(path, range.start.path);
      var toEnd = range.start.key === range.end.key ? toStart : PathUtils.compare(path, range.end.path);

      var is$$1 = toStart !== -1 && toEnd !== 1;
      return is$$1;
    }

    /**
     * Map all child nodes, updating them in their parents. This method is
     * optimized to not return a new node if no changes are made.
     *
     * @param {Function} iterator
     * @return {Node}
     */

  }, {
    key: 'mapChildren',
    value: function mapChildren(iterator) {
      var _this6 = this;

      var nodes = this.nodes;


      nodes.forEach(function (node, i) {
        var ret = iterator(node, i, _this6.nodes);
        if (ret !== node) nodes = nodes.set(ret.key, ret);
      });

      var ret = this.set('nodes', nodes);
      return ret;
    }

    /**
     * Map all descendant nodes, updating them in their parents. This method is
     * optimized to not return a new node if no changes are made.
     *
     * @param {Function} iterator
     * @return {Node}
     */

  }, {
    key: 'mapDescendants',
    value: function mapDescendants(iterator) {
      var _this7 = this;

      var nodes = this.nodes;


      nodes.forEach(function (node, index) {
        var ret = node;
        if (ret.object !== 'text') ret = ret.mapDescendants(iterator);
        ret = iterator(ret, index, _this7.nodes);
        if (ret === node) return;

        nodes = nodes.set(index, ret);
      });

      var ret = this.set('nodes', nodes);
      return ret;
    }

    /**
     * Merge a node backwards its previous sibling.
     *
     * @param {List|Key} path
     * @return {Node}
     */

  }, {
    key: 'mergeNode',
    value: function mergeNode(path) {
      var b = this.assertNode(path);
      path = this.resolvePath(path);

      if (path.last() === 0) {
        throw new Error('Unable to merge node because it has no previous sibling: ' + b);
      }

      var withPath = PathUtils.decrement(path);
      var a = this.assertNode(withPath);

      if (a.object !== b.object) {
        throw new Error('Unable to merge two different kinds of nodes: ' + a + ' and ' + b);
      }

      var newNode = a.object === 'text' ? a.mergeText(b) : a.set('nodes', a.nodes.concat(b.nodes));

      var ret = this;
      ret = ret.removeNode(path);
      ret = ret.removeNode(withPath);
      ret = ret.insertNode(withPath, newNode);
      return ret;
    }

    /**
     * Move a node by `path` to `newPath`.
     *
     * A `newIndex` can be provided when move nodes by `key`, to account for not
     * being able to have a key for a location in the tree that doesn't exist yet.
     *
     * @param {List|Key} path
     * @param {List|Key} newPath
     * @param {Number} newIndex
     * @return {Node}
     */

  }, {
    key: 'moveNode',
    value: function moveNode(path, newPath) {
      var newIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var node = this.assertNode(path);
      path = this.resolvePath(path);
      newPath = this.resolvePath(newPath, newIndex);

      var newParentPath = PathUtils.lift(newPath);
      this.assertNode(newParentPath);

      var _PathUtils$crop = PathUtils.crop(path, newPath),
          _PathUtils$crop2 = slicedToArray(_PathUtils$crop, 2),
          p = _PathUtils$crop2[0],
          np = _PathUtils$crop2[1];

      var position = PathUtils.compare(p, np);

      // If the old path ends above and before a node in the new path, then
      // removing it will alter the target, so we need to adjust the new path.
      if (path.size < newPath.size && position === -1) {
        newPath = PathUtils.decrement(newPath, 1, p.size - 1);
      }

      var ret = this;
      ret = ret.removeNode(path);
      ret = ret.insertNode(newPath, node);
      return ret;
    }

    /**
     * Remove mark from text at `offset` and `length` in node.
     *
     * @param {List} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @return {Node}
     */

  }, {
    key: 'removeMark',
    value: function removeMark(path, offset, length, mark) {
      var node = this.assertDescendant(path);
      path = this.resolvePath(path);
      node = node.removeMark(offset, length, mark);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Remove a node.
     *
     * @param {List|String} path
     * @return {Node}
     */

  }, {
    key: 'removeNode',
    value: function removeNode(path) {
      this.assertDescendant(path);
      path = this.resolvePath(path);
      var deep = path.flatMap(function (x) {
        return ['nodes', x];
      });
      var ret = this.deleteIn(deep);
      return ret;
    }

    /**
     * Remove `text` at `offset` in node.
     *
     * @param {List|Key} path
     * @param {Number} offset
     * @param {String} text
     * @return {Node}
     */

  }, {
    key: 'removeText',
    value: function removeText(path, offset, text) {
      var node = this.assertDescendant(path);
      node = node.removeText(offset, text.length);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Replace a `node` in the tree.
     *
     * @param {List|Key} path
     * @param {Node} node
     * @return {Node}
     */

  }, {
    key: 'replaceNode',
    value: function replaceNode(path, node) {
      path = this.resolvePath(path);

      if (!path) {
        throw new Error('Unable to replace a node because it could not be found in the first place: ' + path);
      }

      if (!path.size) return node;
      this.assertNode(path);
      var deep = path.flatMap(function (x) {
        return ['nodes', x];
      });
      var ret = this.setIn(deep, node);
      return ret;
    }

    /**
     * Resolve a `decoration`, relative to the node, ensuring that the keys and
     * offsets in the decoration exist and that they are synced with the paths.
     *
     * @param {Decoration|Object} decoration
     * @return {Decoration}
     */

  }, {
    key: 'resolveDecoration',
    value: function resolveDecoration(decoration) {
      decoration = Decoration.create(decoration);
      decoration = decoration.normalize(this);
      return decoration;
    }

    /**
     * Resolve a `point`, relative to the node, ensuring that the keys and
     * offsets in the point exist and that they are synced with the paths.
     *
     * @param {Point|Object} point
     * @return {Point}
     */

  }, {
    key: 'resolvePoint',
    value: function resolvePoint(point) {
      point = Point.create(point);
      point = point.normalize(this);
      return point;
    }

    /**
     * Resolve a `range`, relative to the node, ensuring that the keys and
     * offsets in the range exist and that they are synced with the paths.
     *
     * @param {Range|Object} range
     * @return {Range}
     */

  }, {
    key: 'resolveRange',
    value: function resolveRange(range) {
      range = Range.create(range);
      range = range.normalize(this);
      return range;
    }

    /**
     * Resolve a `selection`, relative to the node, ensuring that the keys and
     * offsets in the selection exist and that they are synced with the paths.
     *
     * @param {Selection|Object} selection
     * @return {Selection}
     */

  }, {
    key: 'resolveSelection',
    value: function resolveSelection(selection) {
      selection = Selection.create(selection);
      selection = selection.normalize(this);
      return selection;
    }

    /**
     * Set `properties` on a node.
     *
     * @param {List|String} path
     * @param {Object} properties
     * @return {Node}
     */

  }, {
    key: 'setNode',
    value: function setNode(path, properties) {
      var node = this.assertNode(path);
      node = node.merge(properties);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Set `properties` on `mark` on text at `offset` and `length` in node.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @param {Number} length
     * @param {Mark} mark
     * @param {Object} properties
     * @return {Node}
     */

  }, {
    key: 'setMark',
    value: function setMark(path, offset, length, mark, properties) {
      var node = this.assertNode(path);
      node = node.updateMark(offset, length, mark, properties);
      var ret = this.replaceNode(path, node);
      return ret;
    }

    /**
     * Split a node by `path` at `position` with optional `properties` to apply
     * to the newly split node.
     *
     * @param {List|String} path
     * @param {Number} position
     * @param {Object} properties
     * @return {Node}
     */

  }, {
    key: 'splitNode',
    value: function splitNode(path, position, properties) {
      var child = this.assertNode(path);
      path = this.resolvePath(path);
      var a = void 0;
      var b = void 0;

      if (child.object === 'text') {
        
        var _child$splitText = child.splitText(position);

        var _child$splitText2 = slicedToArray(_child$splitText, 2);

        a = _child$splitText2[0];
        b = _child$splitText2[1];
      } else {
        var befores = child.nodes.take(position);
        var afters = child.nodes.skip(position);
        a = child.set('nodes', befores);
        b = child.set('nodes', afters).regenerateKey();
      }

      if (properties && child.object !== 'text') {
        b = b.merge(properties);
      }

      var ret = this;
      ret = ret.removeNode(path);
      ret = ret.insertNode(path, b);
      ret = ret.insertNode(path, a);
      return ret;
    }
  }]);
  return ElementInterface;
}();

/**
 * Mix in assertion variants.
 */

var ASSERTS = ['Child', 'Depth', 'Descendant', 'Node', 'Parent', 'Path'];

var _loop2 = function _loop2(method) {
  ElementInterface.prototype['assert' + method] = function (path) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    var ret = this['get' + method].apply(this, [path].concat(args));

    if (ret == null) {
      throw new Error('`Node.assert' + method + '` could not find node with path or key: ' + path);
    }

    return ret;
  };
};

var _iteratorNormalCompletion$1 = true;
var _didIteratorError$1 = false;
var _iteratorError$1 = undefined;

try {
  for (var _iterator$1 = ASSERTS[Symbol.iterator](), _step$1; !(_iteratorNormalCompletion$1 = (_step$1 = _iterator$1.next()).done); _iteratorNormalCompletion$1 = true) {
    var method$1 = _step$1.value;

    _loop2(method$1);
  }

  /**
   * Memoize read methods.
   */
} catch (err) {
  _didIteratorError$1 = true;
  _iteratorError$1 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion$1 && _iterator$1.return) {
      _iterator$1.return();
    }
  } finally {
    if (_didIteratorError$1) {
      throw _iteratorError$1;
    }
  }
}

memoize(ElementInterface.prototype, ['getBlocksAsArray', 'getBlocksAtRangeAsArray', 'getBlocksByTypeAsArray', 'getDecorations', 'getFragmentAtRange', 'getInlinesAsArray', 'getInlinesByTypeAsArray', 'getLeafBlocksAtRangeAsArray', 'getLeafInlinesAtRangeAsArray', 'getMarksAsArray', 'getMarksAtPosition', 'getNodesAtRange', 'getOrderedMarksBetweenPositions', 'getInsertMarksAtRange', 'getMarksByTypeAsArray', 'getNextBlock', 'getOffset', 'getOffsetAtRange', 'getPreviousBlock', 'getRootBlocksAtRange', 'getRootInlinesAtRangeAsArray', 'getTextAtOffset', 'getTextDirection', 'getTextsAsArray', 'getTextsBetweenPositionsAsArray']);

/**
 * Mix in the element interface.
 */

mixin(ElementInterface, [Block, Document, Inline]);

/**
 * The interface that `Decoration`, `Range` and `Selection` all implement, to make
 * working anchor and focus points easier.
 *
 * @type {Class}
 */

var RangeInterface = function () {
  function RangeInterface() {
    classCallCheck(this, RangeInterface);
  }

  createClass(RangeInterface, [{
    key: 'flip',


    /**
     * Flip the range.
     *
     * @return {Range}
     */

    value: function flip() {
      var range = this.setPoints([this.focus, this.anchor]);
      return range;
    }

    /**
     * Move the anchor and focus offsets forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveForward',
    value: function moveForward(n) {
      return this.updatePoints(function (point) {
        return point.moveForward(n);
      });
    }

    /**
     * Move the anchor and focus offsets backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveBackward',
    value: function moveBackward(n) {
      return this.updatePoints(function (point) {
        return point.moveBackward(n);
      });
    }

    /**
     * Move the anchor offset backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveAnchorBackward',
    value: function moveAnchorBackward(n) {
      var range = this.setAnchor(this.anchor.moveBackward(n));
      return range;
    }

    /**
     * Move the anchor offset forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveAnchorForward',
    value: function moveAnchorForward(n) {
      var range = this.setAnchor(this.anchor.moveForward(n));
      return range;
    }

    /**
     * Move the range's anchor point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveAnchorTo',
    value: function moveAnchorTo(path, offset) {
      var range = this.setAnchor(this.anchor.moveTo(path, offset));
      return range;
    }

    /**
     * Move the range's anchor point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveAnchorToStartOfNode',
    value: function moveAnchorToStartOfNode(node) {
      var range = this.setAnchor(this.anchor.moveToStartOfNode(node));
      return range;
    }

    /**
     * Move the range's anchor point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveAnchorToEndOfNode',
    value: function moveAnchorToEndOfNode(node) {
      var range = this.setAnchor(this.anchor.moveToEndOfNode(node));
      return range;
    }

    /**
     * Move the end offset backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveEndBackward',
    value: function moveEndBackward(n) {
      var range = this.setEnd(this.end.moveBackward(n));
      return range;
    }

    /**
     * Move the end offset forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveEndForward',
    value: function moveEndForward(n) {
      var range = this.setEnd(this.end.moveForward(n));
      return range;
    }

    /**
     * Move the range's end point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveEndTo',
    value: function moveEndTo(path, offset) {
      var range = this.setEnd(this.end.moveTo(path, offset));
      return range;
    }

    /**
     * Move the range's end point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveEndToStartOfNode',
    value: function moveEndToStartOfNode(node) {
      var range = this.setEnd(this.end.moveToStartOfNode(node));
      return range;
    }

    /**
     * Move the range's end point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveEndToEndOfNode',
    value: function moveEndToEndOfNode(node) {
      var range = this.setEnd(this.end.moveToEndOfNode(node));
      return range;
    }

    /**
     * Move the focus offset backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveFocusBackward',
    value: function moveFocusBackward(n) {
      var range = this.setFocus(this.focus.moveBackward(n));
      return range;
    }

    /**
     * Move the focus offset forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveFocusForward',
    value: function moveFocusForward(n) {
      var range = this.setFocus(this.focus.moveForward(n));
      return range;
    }

    /**
     * Move the range's focus point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveFocusTo',
    value: function moveFocusTo(path, offset) {
      var range = this.setFocus(this.focus.moveTo(path, offset));
      return range;
    }

    /**
     * Move the range's focus point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveFocusToStartOfNode',
    value: function moveFocusToStartOfNode(node) {
      var range = this.setFocus(this.focus.moveToStartOfNode(node));
      return range;
    }

    /**
     * Move the range's focus point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveFocusToEndOfNode',
    value: function moveFocusToEndOfNode(node) {
      var range = this.setFocus(this.focus.moveToEndOfNode(node));
      return range;
    }

    /**
     * Move the start offset backward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveStartBackward',
    value: function moveStartBackward(n) {
      var range = this.setStart(this.start.moveBackward(n));
      return range;
    }

    /**
     * Move the start offset forward `n` characters.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveStartForward',
    value: function moveStartForward(n) {
      var range = this.setStart(this.start.moveForward(n));
      return range;
    }

    /**
     * Move the range's start point to a new `path` and `offset`.
     *
     * Optionally, the `path` can be a key string, or omitted entirely in which
     * case it would be the offset number.
     *
     * @param {List|String} path
     * @param {Number} offset
     * @return {Range}
     */

  }, {
    key: 'moveStartTo',
    value: function moveStartTo(path, offset) {
      var range = this.setStart(this.start.moveTo(path, offset));
      return range;
    }

    /**
     * Move the range's start point to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveStartToStartOfNode',
    value: function moveStartToStartOfNode(node) {
      var range = this.setStart(this.start.moveToStartOfNode(node));
      return range;
    }

    /**
     * Move the range's start point to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveStartToEndOfNode',
    value: function moveStartToEndOfNode(node) {
      var range = this.setStart(this.start.moveToEndOfNode(node));
      return range;
    }

    /**
     * Move range's points to a new `path` and `offset`.
     *
     * @param {Number} n
     * @return {Range}
     */

  }, {
    key: 'moveTo',
    value: function moveTo(path, offset) {
      return this.updatePoints(function (point) {
        return point.moveTo(path, offset);
      });
    }

    /**
     * Move the focus point to the anchor point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToAnchor',
    value: function moveToAnchor() {
      var range = this.setFocus(this.anchor);
      return range;
    }

    /**
     * Move the start point to the end point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToEnd',
    value: function moveToEnd() {
      var range = this.setStart(this.end);
      return range;
    }

    /**
     * Move the range's points to the end of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveToEndOfNode',
    value: function moveToEndOfNode(node) {
      return this.updatePoints(function (point) {
        return point.moveToEndOfNode(node);
      });
    }

    /**
     * Move the anchor point to the focus point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToFocus',
    value: function moveToFocus() {
      var range = this.setAnchor(this.focus);
      return range;
    }

    /**
     * Move to the entire range of `start` and `end` nodes.
     *
     * @param {Node} start
     * @param {Node} end (optional)
     * @return {Range}
     */

  }, {
    key: 'moveToRangeOfNode',
    value: function moveToRangeOfNode(start) {
      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : start;

      var range = this.setPoints([this.anchor.moveToStartOfNode(start), this.focus.moveToEndOfNode(end)]);

      return range;
    }

    /**
     * Move the end point to the start point.
     *
     * @return {Range}
     */

  }, {
    key: 'moveToStart',
    value: function moveToStart() {
      var range = this.setEnd(this.start);
      return range;
    }

    /**
     * Move the range's points to the start of a `node`.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'moveToStartOfNode',
    value: function moveToStartOfNode(node) {
      return this.updatePoints(function (point) {
        return point.moveToStartOfNode(node);
      });
    }

    /**
     * Normalize the range, relative to a `node`, ensuring that the anchor
     * and focus nodes of the range always refer to leaf text nodes.
     *
     * @param {Node} node
     * @return {Range}
     */

  }, {
    key: 'normalize',
    value: function normalize(node) {
      return this.updatePoints(function (point) {
        return point.normalize(node);
      });
    }

    /**
     * Set the anchor point to a new `anchor`.
     *
     * @param {Point} anchor
     * @return {Range}
     */

  }, {
    key: 'setAnchor',
    value: function setAnchor(anchor) {
      var range = this.set('anchor', anchor);
      return range;
    }

    /**
     * Set the end point to a new `point`.
     *
     * @param {Point} point
     * @return {Range}
     */

  }, {
    key: 'setEnd',
    value: function setEnd(point) {
      var range = this.isBackward ? this.setAnchor(point) : this.setFocus(point);
      return range;
    }

    /**
     * Set the focus point to a new `focus`.
     *
     * @param {Point} focus
     * @return {Range}
     */

  }, {
    key: 'setFocus',
    value: function setFocus(focus) {
      var range = this.set('focus', focus);
      return range;
    }

    /**
     * Set the anchor and focus points to new `values`.
     *
     * @param {Array<Point>} values
     * @return {Range}
     */

  }, {
    key: 'setPoints',
    value: function setPoints(values) {
      var _values = slicedToArray(values, 2),
          anchor = _values[0],
          focus = _values[1];

      var range = this.set('anchor', anchor).set('focus', focus);
      return range;
    }

    /**
     * Set the anchor and focus points with `updater` callback
     *
     * @param {Function} updater
     * @return {Range}
     */

  }, {
    key: 'updatePoints',
    value: function updatePoints(updater) {
      var anchor = this.anchor,
          focus = this.focus;

      anchor = updater(anchor);
      focus = updater(focus);
      return this.merge({ anchor: anchor, focus: focus });
    }

    /**
     * Set the start point to a new `point`.
     *
     * @param {Point} point
     * @return {Range}
     */

  }, {
    key: 'setStart',
    value: function setStart(point) {
      var range = this.isBackward ? this.setFocus(point) : this.setAnchor(point);
      return range;
    }

    /**
     * Set new `properties` on the range.
     *
     * @param {Object|Range} properties
     * @return {Range}
     */

  }, {
    key: 'setProperties',
    value: function setProperties(properties) {
      properties = Range.createProperties(properties);
      var _properties = properties,
          anchor = _properties.anchor,
          focus = _properties.focus,
          props = objectWithoutProperties(_properties, ['anchor', 'focus']);


      if (anchor) {
        props.anchor = Point.create(anchor);
      }

      if (focus) {
        props.focus = Point.create(focus);
      }

      var range = this.merge(props);
      return range;
    }

    /**
     * Return a JSON representation of the range.
     *
     * @param {Object} options
     * @return {Object}
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var object = {
        object: this.object,
        anchor: this.anchor.toJSON(options),
        focus: this.focus.toJSON(options)
      };

      return object;
    }

    /**
     * Return a `Range` instance from any range-like instance.
     *
     * @return {Range}
     */

  }, {
    key: 'toRange',
    value: function toRange() {
      var properties = Range.createProperties(this);
      var range = Range.create(properties);
      return range;
    }

    /**
     * Unset the range.
     *
     * @return {Range}
     */

  }, {
    key: 'unset',
    value: function unset() {
      var range = this.updatePoints(function (p) {
        return p.unset();
      });
      return range;
    }
  }, {
    key: 'isCollapsed',

    /**
     * Check whether the range is collapsed.
     *
     * @return {Boolean}
     */

    get: function get$$1() {
      return this.anchor === this.focus || this.anchor.key === this.focus.key && this.anchor.offset === this.focus.offset;
    }

    /**
     * Check whether the range is expanded.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isExpanded',
    get: function get$$1() {
      return !this.isCollapsed;
    }

    /**
     * Check whether the range is backward.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isBackward',
    get: function get$$1() {
      var isUnset = this.isUnset,
          anchor = this.anchor,
          focus = this.focus;


      if (isUnset) {
        return null;
      }

      if (anchor.key === focus.key) {
        return anchor.offset > focus.offset;
      }

      var isBackward = PathUtils.isBefore(focus.path, anchor.path);
      return isBackward;
    }

    /**
     * Check whether the range is forward.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isForward',
    get: function get$$1() {
      var isBackward = this.isBackward;

      var isForward = isBackward == null ? null : !isBackward;
      return isForward;
    }

    /**
     * Check whether the range isn't set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isUnset',
    get: function get$$1() {
      var anchor = this.anchor,
          focus = this.focus;

      var isUnset = anchor.isUnset || focus.isUnset;
      return isUnset;
    }

    /**
     * Check whether the range is set.
     *
     * @return {Boolean}
     */

  }, {
    key: 'isSet',
    get: function get$$1() {
      return !this.isUnset;
    }

    /**
     * Get the start point.
     *
     * @return {String}
     */

  }, {
    key: 'start',
    get: function get$$1() {
      return this.isBackward ? this.focus : this.anchor;
    }

    /**
     * Get the end point.
     *
     * @return {String}
     */

  }, {
    key: 'end',
    get: function get$$1() {
      return this.isBackward ? this.anchor : this.focus;
    }
  }]);
  return RangeInterface;
}();

/**
 * Mix in the range interface.
 *
 * @param {Record}
 */

mixin(RangeInterface, [Decoration, Range, Selection]);

var index = {
  Block: Block,
  Change: Change,
  Data: Data,
  Decoration: Decoration,
  Document: Document,
  Editor: Editor,
  Inline: Inline,
  KeyUtils: KeyUtils,
  Leaf: Leaf,
  Mark: Mark,
  Node: Node,
  Operation: Operation,
  PathUtils: PathUtils,
  Point: Point,
  Range: Range,
  resetMemoization: resetMemoization,
  Selection: Selection,
  Text: Text,
  TextUtils: TextUtils,
  useMemoization: useMemoization,
  Value: Value
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=slate.es.js.map


/***/ }),

/***/ "./node_modules/slate/node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/slate/node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var index = (function (condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    console.warn(message);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/tiny-invariant.esm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  } else {
    throw new Error(prefix + ": " + (message || ''));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (invariant);


/***/ }),

/***/ "./pages/blogEditor.js":
/*!*****************************!*\
  !*** ./pages/blogEditor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var _components_slate_editor_Editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/slate-editor/Editor */ "./components/slate-editor/Editor.js");
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/hoc/withAuth */ "./components/hoc/withAuth.js");











var BlogEditor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BlogEditor, _React$Component);

  function BlogEditor() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogEditor);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BlogEditor).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogEditor, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_6__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "blog-editor-page"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Write a New Post")));
    }
  }]);

  return BlogEditor;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_9__["default"])(BlogEditor));

/***/ })

})
//# sourceMappingURL=blogEditor.js.e0cda27c8aac342af029.hot-update.js.map