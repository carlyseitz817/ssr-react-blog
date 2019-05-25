webpackHotUpdate("static\\development\\pages\\owner.js",{

/***/ "./components/hoc/withAuth.js":
/*!************************************!*\
  !*** ./components/hoc/withAuth.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _BasePage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../BasePage */ "./components/BasePage.js");











/* harmony default export */ __webpack_exports__["default"] = (function (role) {
  return function (Component) {
    return (
      /*#__PURE__*/
      function (_React$Component) {
        Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(withAuth, _React$Component);

        function withAuth() {
          Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, withAuth);

          return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(withAuth).apply(this, arguments));
        }

        Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(withAuth, [{
          key: "renderProtectedPage",
          value: function renderProtectedPage() {
            var _this$props$auth = this.props.auth,
                isAuthenticated = _this$props$auth.isAuthenticated,
                user = _this$props$auth.user;
            var userRole = user && user["".concat(process.env.NAMESPACE, "/role")];
            var isAuthorized = false;

            if (role) {
              if (userRole && userRole === role) {
                isAuthorized = true;
              }

              ;
            } else {
              isAuthorized = true;
            }

            if (!isAuthenticated) {
              return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_9__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BasePage__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, " You are not authenticated. Please Login to access this page. ")));
            } else if (!isAuthorized) {
              return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_9__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_BasePage__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, " You are not authorized. You do not have permission to visit this page. ")));
            } else {
              return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Component, this.props);
            }
          }
        }, {
          key: "render",
          value: function render() {
            return this.renderProtectedPage();
          }
        }], [{
          key: "getInitialProps",
          value: function () {
            var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
            /*#__PURE__*/
            _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(args) {
              var pageProps;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Component.getInitialProps;

                    case 2:
                      _context.t0 = _context.sent;

                      if (!_context.t0) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 6;
                      return Component.getInitialProps(args);

                    case 6:
                      _context.t0 = _context.sent;

                    case 7:
                      pageProps = _context.t0;
                      return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, pageProps));

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function getInitialProps(_x) {
              return _getInitialProps.apply(this, arguments);
            }

            return getInitialProps;
          }()
        }]);

        return withAuth;
      }(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component)
    );
  };
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=owner.js.0e75a6285657676f7f90.hot-update.js.map