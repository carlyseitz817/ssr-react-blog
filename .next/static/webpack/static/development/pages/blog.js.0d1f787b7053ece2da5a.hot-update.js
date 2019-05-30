webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../helpers/utils */ "./helpers/utils.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_20__);






















var Posts =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Posts, _React$Component);

  function Posts() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Posts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Posts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "renderPosts", function (posts) {
      return posts.map(function (post, index) {
        return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
          key: index,
          className: "blog-preview"
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_16__["Link"], {
          route: "/blog/".concat(post.slug)
        }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h2", {
          className: "blog-title"
        }, post.title), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
          className: "blog-subtitle"
        }, Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_18__["shortenText"])(post.subTitle)))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
          className: "post-meta"
        }, "Posted by", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
          href: "#"
        }, " ", post.author, " "), moment__WEBPACK_IMPORTED_MODULE_19___default()(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_3___default()(post.createdAt, 10)).format('LL')));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Posts, [{
    key: "render",
    value: function render() {
      var posts = this.props.posts;
      console.log(posts);
      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props.auth, {
        headerType: 'landing',
        className: "blog-listing-page",
        title: "SSR Next.js Blog"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          "backgroundImage": "url('/static/images/home-bg.jpg')"
        },
        className: "jsx-3280519500" + " " + "masthead"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "overlay"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Container"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "row"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "site-heading"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h1", {
        className: "jsx-3280519500"
      }, "Fresh Blogs")))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "blog-body"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Col"], {
        md: "10",
        lg: "8",
        className: "mx-auto"
      }, this.renderPosts(posts), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        href: "#",
        className: "jsx-3280519500" + " " + "btn btn-primary float-right"
      }, "Older Posts \u2192")))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("footer", {
        className: "jsx-3280519500"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Container"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Row"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3280519500" + " " + "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("ul", {
        className: "jsx-3280519500" + " " + "list-inline text-center"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
        className: "jsx-3280519500" + " " + "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        target: "_blank",
        href: "https://www.facebook.com/groups/217273012433804/?jazoest=26510012195869511271971084598756511378108122691091131211141201017010910474116557610010645897511574116115668565119119586510012177701165586491061151219048557183120488290847377451207611983109114112118697610912011183109109521091159581",
        className: "jsx-3280519500"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-3280519500" + " " + "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("i", {
        className: "jsx-3280519500" + " " + "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("i", {
        className: "jsx-3280519500" + " " + "fab fa-facebook-f fa-stack-1x fa-inverse"
      })))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("li", {
        className: "jsx-3280519500" + " " + "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("a", {
        target: "_blank",
        href: "https://github.com/Jerga99",
        className: "jsx-3280519500"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        className: "jsx-3280519500" + " " + "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("i", {
        className: "jsx-3280519500" + " " + "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("i", {
        className: "jsx-3280519500" + " " + "fab fa-github fa-stack-1x fa-inverse"
      }))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("p", {
        className: "jsx-3280519500" + " " + "copyright text-muted"
      }, "Copyright \xA9 Carly Seitz and Danielle Licea 2019")))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "3280519500"
      }, "@import url(\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\");\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcRGFuaWVsbGVcXERlc2t0b3BcXFByb2plY3QzXFxzc3ItcmVhY3QtYmxvZ1xccGFnZXNcXGJsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkdXLEFBRW1GIiwiZmlsZSI6IkM6XFxVc2Vyc1xcRGFuaWVsbGVcXERlc2t0b3BcXFByb2plY3QzXFxzc3ItcmVhY3QtYmxvZ1xccGFnZXNcXGJsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2VMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXRzL0Jhc2VMYXlvdXQnO1xuaW1wb3J0IEJhc2VQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvQmFzZVBhZ2UnO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcblxuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7IHNob3J0ZW5UZXh0IH0gZnJvbSAnLi4vaGVscGVycy91dGlscyc7XG5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IG5vcm1hbGl6ZSB9IGZyb20gJ3BhdGgnO1xuXG5cbmNsYXNzIFBvc3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcmVxIH0pIHtcbiAgICBsZXQgcG9zdHMgPSBbXTtcblxuICAgIHRyeSB7XG4gICAgICBwb3N0cyA9IGF3YWl0IGdldFBvc3RzKHJlcSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcG9zdHMgfTtcbiAgfVxuXG4gIHJlbmRlclBvc3RzID0gKHBvc3RzKSA9PiAoXG4gICAgcG9zdHMubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJibG9nLXByZXZpZXdcIj5cbiAgICAgICAgPExpbmsgcm91dGU9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICA8YT5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJibG9nLXRpdGxlXCI+XG4gICAgICAgICAgICAgIHtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJibG9nLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgIHtzaG9ydGVuVGV4dChwb3N0LnN1YlRpdGxlKX1cbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtbWV0YVwiPlBvc3RlZCBieVxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+IHtwb3N0LmF1dGhvcn0gPC9hPlxuICAgICAgICAgIHttb21lbnQocGFyc2VJbnQocG9zdC5jcmVhdGVkQXQsIDEwKSkuZm9ybWF0KCdMTCcpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgICApXG4gIClcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwb3N0cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zb2xlLmxvZyhwb3N0cyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2VMYXlvdXQgey4uLnRoaXMucHJvcHMuYXV0aH1cbiAgICAgICAgaGVhZGVyVHlwZT17J2xhbmRpbmcnfVxuICAgICAgICBjbGFzc05hbWU9XCJibG9nLWxpc3RpbmctcGFnZVwiXG4gICAgICAgIHRpdGxlPVwiU1NSIE5leHQuanMgQmxvZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hc3RoZWFkXCIgc3R5bGU9e3sgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJ1cmwoJy9zdGF0aWMvaW1hZ2VzL2hvbWUtYmcuanBnJylcIiB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2l0ZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICA8aDE+RnJlc2ggQmxvZ3M8L2gxPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEJhc2VQYWdlIGNsYXNzTmFtZT1cImJsb2ctYm9keVwiPlxuICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICA8Q29sIG1kPVwiMTBcIiBsZz1cIjhcIiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlclBvc3RzKHBvc3RzKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBmbG9hdC1yaWdodFwiIGhyZWY9XCIjXCI+T2xkZXIgUG9zdHMgJnJhcnI7PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBjb2wtbWQtMTAgbXgtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9ncm91cHMvMjE3MjczMDEyNDMzODA0Lz9qYXpvZXN0PTI2NTEwMDEyMTk1ODY5NTExMjcxOTcxMDg0NTk4NzU2NTExMzc4MTA4MTIyNjkxMDkxMTMxMjExMTQxMjAxMDE3MDEwOTEwNDc0MTE2NTU3NjEwMDEwNjQ1ODk3NTExNTc0MTE2MTE1NjY4NTY1MTE5MTE5NTg2NTEwMDEyMTc3NzAxMTY1NTg2NDkxMDYxMTUxMjE5MDQ4NTU3MTgzMTIwNDg4MjkwODQ3Mzc3NDUxMjA3NjExOTgzMTA5MTE0MTEyMTE4Njk3NjEwOTEyMDExMTgzMTA5MTA5NTIxMDkxMTU5NTgxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlIGZhLXN0YWNrLTJ4XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZiBmYS1zdGFjay0xeCBmYS1pbnZlcnNlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtaW5saW5lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0plcmdhOTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhLXN0YWNrIGZhLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUgZmEtc3RhY2stMnhcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1naXRodWIgZmEtc3RhY2stMXggZmEtaW52ZXJzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29weXJpZ2h0IHRleHQtbXV0ZWRcIj5Db3B5cmlnaHQgJmNvcHk7IENhcmx5IFNlaXR6IGFuZCBEYW5pZWxsZSBMaWNlYSAyMDE5PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICA8L0Jhc2VQYWdlPlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIik7XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvQmFzZUxheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG5cbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Danielle\\Desktop\\Project3\\ssr-react-blog\\pages\\blog.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var req, posts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                posts = [];
                _context.prev = 2;
                _context.next = 5;
                return Object(_actions__WEBPACK_IMPORTED_MODULE_17__["getPosts"])(req);

              case 5:
                posts = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 11:
                return _context.abrupt("return", {
                  posts: posts
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 8]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Posts;
}(react__WEBPACK_IMPORTED_MODULE_12___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Posts);

/***/ })

})
//# sourceMappingURL=blog.js.0d1f787b7053ece2da5a.hot-update.js.map