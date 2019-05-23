webpackHotUpdate("static\\development\\pages\\secret.js",{

/***/ "./pages/secret.js":
/*!*************************!*\
  !*** ./pages/secret.js ***!
  \*************************/
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









var Secret =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Secret, _React$Component);

  function Secret() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Secret);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Secret).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Secret, [{
    key: "renderSecretPage",
    value: function renderSecretPage() {
      var isAuthenticated = this.props.auth.isAuthenticated;

      if (isAuthenticated) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_6__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: "Secret",
          className: "secretpage"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "I am a secret page.")));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_6__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_7__["default"], {
          title: "Secret",
          className: "secretpage"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "You are not authorized to be here! Please Login.")));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.renderSecretPage();
    }
  }]);

  return Secret;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Secret);

/***/ })

})
//# sourceMappingURL=secret.js.f5e84dab06e28c9b4590.hot-update.js.map