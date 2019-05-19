webpackHotUpdate("static/development/pages/blogEditor.js",{

/***/ "./components/slate-editor/components/ControlMenu.js":
/*!***********************************************************!*\
  !*** ./components/slate-editor/components/ControlMenu.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");



var ControlMenu = function ControlMenu(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "control-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Write a new post"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "status-box"
  }, "Saved"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "success"
  }, "Save"));
};

/* harmony default export */ __webpack_exports__["default"] = (ControlMenu);

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
/* harmony import */ var _components_slate_editor_components_ControlMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/slate-editor/components/ControlMenu */ "./components/slate-editor/components/ControlMenu.js");
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/hoc/withAuth */ "./components/hoc/withAuth.js");












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
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", null, "Write a New Post"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          backgroundColor: "white"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_slate_editor_Editor__WEBPACK_IMPORTED_MODULE_8__["default"], null))));
    }
  }]);

  return BlogEditor;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(BlogEditor));

/***/ })

})
//# sourceMappingURL=blogEditor.js.a21df1bdf4c307844649.hot-update.js.map