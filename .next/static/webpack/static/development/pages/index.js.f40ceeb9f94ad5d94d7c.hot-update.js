webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_SuperComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SuperComponent */ "./components/SuperComponent.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-typed */ "./node_modules/react-typed/dist/react-typed.js");
/* harmony import */ var react_typed__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_typed__WEBPACK_IMPORTED_MODULE_11__);











 // Functional components often called dumb components
// Get data
// Return data
// const Index = () => {
//     return (
//         <h1>Blog Posts</h1>
//     )
// }
// Class components have more functionality than functional components
// User lifecycle function

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));
    _this.features = ["Server-side rendering for SEO", "Rich text editor", "Save blog posts", "View user-specific blogs"];
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this$props$auth = this.props.auth,
          isAuthenticated = _this$props$auth.isAuthenticated,
          user = _this$props$auth.user;
      console.log({
        user: user
      });
      console.log({
        isAuthenticated: isAuthenticated
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props.auth, {
        className: "cover"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "main-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "background-image"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/images/background-index.png"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        md: "6"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hero-section"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "flipper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "back"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hero-section-content"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", null, " Full Stack Web Developer "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hero-section-content-intro"
      }, "Have a look at my portfolio and job history.")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "image",
        src: "/static/images/section-1.png"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "shadow-custom"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "shadow-inner"
      }, " ")))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        md: "6",
        className: "hero-welcome-wrapper"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hero-welcome-text"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Welcome to the portfolio website of Filip Jerga. Get informed, collaborate and discover projects I was working on through the years!")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_typed__WEBPACK_IMPORTED_MODULE_11___default.a, {
        loop: true,
        typeSpeed: 80,
        backSpeed: 60,
        strings: this.features,
        backDelay: 1000,
        loopCount: 0,
        showCursor: true,
        className: "self-typed",
        cursorChar: "|"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "hero-welcome-bio"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", null, "Let's take a look on my work.")))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f40ceeb9f94ad5d94d7c.hot-update.js.map