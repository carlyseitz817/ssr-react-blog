webpackHotUpdate("static/development/pages/blog.js",{

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
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_15__["Container"], null, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
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
        className: "jsx-3280519500" + " " + "mybutton btn btn-primary float-right"
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
        href: "https://github.com/carlyseitz817/ssr-react-blog",
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
      }, "@import url(\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\");\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXJseXNlaXR6L0RvY3VtZW50cy9Ib21ld29yayBBc3NpZ25tZW50cy9zc3ItcmVhY3QtYmxvZy9wYWdlcy9ibG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZHVyxBQUVtRiIsImZpbGUiOiIvVXNlcnMvY2FybHlzZWl0ei9Eb2N1bWVudHMvSG9tZXdvcmsgQXNzaWdubWVudHMvc3NyLXJlYWN0LWJsb2cvcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQmFzZUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dHMvQmFzZUxheW91dCc7XG5pbXBvcnQgQmFzZVBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9CYXNlUGFnZSc7XG5cbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG5pbXBvcnQgeyBnZXRQb3N0cyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgc2hvcnRlblRleHQgfSBmcm9tICcuLi9oZWxwZXJzL3V0aWxzJztcblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgbm9ybWFsaXplIH0gZnJvbSAncGF0aCc7XG5cblxuY2xhc3MgUG9zdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEgfSkge1xuICAgIGxldCBwb3N0cyA9IFtdO1xuXG4gICAgdHJ5IHtcbiAgICAgIHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMocmVxKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwb3N0cyB9O1xuICB9XG5cbiAgcmVuZGVyUG9zdHMgPSAocG9zdHMpID0+IChcbiAgICBwb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJsb2ctcHJldmlld1wiPlxuICAgICAgICA8TGluayByb3V0ZT17YC9ibG9nLyR7cG9zdC5zbHVnfWB9PlxuICAgICAgICAgIDxhPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2ctdGl0bGVcIj5cbiAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImJsb2ctc3VidGl0bGVcIj5cbiAgICAgICAgICAgICAge3Nob3J0ZW5UZXh0KHBvc3Quc3ViVGl0bGUpfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicG9zdC1tZXRhXCI+UG9zdGVkIGJ5XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIj4ge3Bvc3QuYXV0aG9yfSA8L2E+XG4gICAgICAgICAge21vbWVudChwYXJzZUludChwb3N0LmNyZWF0ZWRBdCwgMTApKS5mb3JtYXQoJ0xMJyl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgIClcbiAgKVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHBvc3RzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKHBvc3RzKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8QmFzZUxheW91dCB7Li4udGhpcy5wcm9wcy5hdXRofVxuICAgICAgICBoZWFkZXJUeXBlPXsnbGFuZGluZyd9XG4gICAgICAgIGNsYXNzTmFtZT1cImJsb2ctbGlzdGluZy1wYWdlXCJcbiAgICAgICAgdGl0bGU9XCJTU1IgTmV4dC5qcyBCbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFzdGhlYWRcIiBzdHlsZT17eyBcImJhY2tncm91bmRJbWFnZVwiOiBcInVybCgnL3N0YXRpYy9pbWFnZXMvaG9tZS1iZy5qcGcnKVwiIH19PlxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj4gKi99XG4gICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgPGgxPkZyZXNoIEJsb2dzPC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxCYXNlUGFnZSBjbGFzc05hbWU9XCJibG9nLWJvZHlcIj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPENvbCBtZD1cIjEwXCIgbGc9XCI4XCIgY2xhc3NOYW1lPVwibXgtYXV0b1wiPlxuICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJQb3N0cyhwb3N0cyl9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJteWJ1dHRvbiBidG4gYnRuLXByaW1hcnkgZmxvYXQtcmlnaHRcIiBocmVmPVwiI1wiPk9sZGVyIFBvc3RzICZyYXJyOzwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8L1Jvdz5cblxuICAgICAgICAgIDxmb290ZXI+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggY29sLW1kLTEwIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWlubGluZSB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pbmxpbmUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZ3JvdXBzLzIxNzI3MzAxMjQzMzgwNC8/amF6b2VzdD0yNjUxMDAxMjE5NTg2OTUxMTI3MTk3MTA4NDU5ODc1NjUxMTM3ODEwODEyMjY5MTA5MTEzMTIxMTE0MTIwMTAxNzAxMDkxMDQ3NDExNjU1NzYxMDAxMDY0NTg5NzUxMTU3NDExNjExNTY2ODU2NTExOTExOTU4NjUxMDAxMjE3NzcwMTE2NTU4NjQ5MTA2MTE1MTIxOTA0ODU1NzE4MzEyMDQ4ODI5MDg0NzM3NzQ1MTIwNzYxMTk4MzEwOTExNDExMjExODY5NzYxMDkxMjAxMTE4MzEwOTEwOTUyMTA5MTE1OTU4MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEtc3RhY2sgZmEtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNpcmNsZSBmYS1zdGFjay0yeFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWYgZmEtc3RhY2stMXggZmEtaW52ZXJzZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWlubGluZS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJseXNlaXR6ODE3L3Nzci1yZWFjdC1ibG9nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYS1zdGFjayBmYS1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtY2lyY2xlIGZhLXN0YWNrLTJ4XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZ2l0aHViIGZhLXN0YWNrLTF4IGZhLWludmVyc2VcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvcHlyaWdodCB0ZXh0LW11dGVkXCI+Q29weXJpZ2h0ICZjb3B5OyBDYXJseSBTZWl0eiBhbmQgRGFuaWVsbGUgTGljZWEgMjAxOTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPC9CYXNlUGFnZT5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuNS4wL2Nzcy9hbGwuY3NzXCIpO1xuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0Jhc2VMYXlvdXQ+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuXG4iXX0= */\n/*@ sourceURL=/Users/carlyseitz/Documents/Homework Assignments/ssr-react-blog/pages/blog.js */"));
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
//# sourceMappingURL=blog.js.ff0f00e26be8910427ac.hot-update.js.map