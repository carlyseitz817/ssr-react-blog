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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_14__);
















var Blog =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Blog, _React$Component);

  function Blog() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Blog);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Blog).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Blog, [{
    key: "render",
    // renderPosts(posts) {
    //     return posts.map((post) => {
    //         return (
    //             <li key={post.id}>
    //                 <Link href={`/post?title=${post.title}`} as={`/blog/${post.title}`.replace(/ /g, "-")}>
    //                     <a> KEY: {post.id}{post.title} </a>
    //                 </Link>
    //             </li>
    //         )
    //     })
    // };
    value: function render() {
      var _this$props = this.props,
          posts = _this$props.posts,
          route = _this$props.route;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props.auth, {
        headerType: 'landing',
        className: "blog-listing-page"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "masthead",
        style: {
          "backgroundImage": "url('/static/images/home-bg.jpg')"
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "overlay"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Container"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "site-heading"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", null, "Fresh Blogs"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "subheading"
      }, "Programming, travelling...")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "blog-body"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        md: "10",
        lg: "8",
        className: "mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post-preview"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        route: "/blogs/blogId"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "post-title"
      }, "Very Nice Blog Post"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "post-subtitle"
      }, "How I Start Porgramming..."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "post-meta"
      }, "Posted by", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, " Filip Jerga "), moment__WEBPACK_IMPORTED_MODULE_14___default()().format('LLLL'))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post-preview"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        route: "/blogs/blogId"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "post-title"
      }, "Very Nice Blog Post"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "post-subtitle"
      }, "How I Start Porgramming..."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "post-meta"
      }, "Posted by", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, " Filip Jerga "), moment__WEBPACK_IMPORTED_MODULE_14___default()().format('LLLL'))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "post-preview"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        route: "/blogs/blogId"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "post-title"
      }, "Very Nice Blog Post"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "post-subtitle"
      }, "How I Start Porgramming..."))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "post-meta"
      }, "Posted by", react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, " Filip Jerga "), moment__WEBPACK_IMPORTED_MODULE_14___default()().format('LLLL'))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "btn btn-primary float-right",
        href: "#"
      }, "Older Posts \u2192")))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("footer", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Container"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_12__["Row"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "list-inline text-center"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fab fa-twitter fa-stack-1x fa-inverse"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fab fa-facebook-f fa-stack-1x fa-inverse"
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "list-inline-item"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        className: "fa-stack fa-lg"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fas fa-circle fa-stack-2x"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "fab fa-github fa-stack-1x fa-inverse"
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "copyright text-muted"
      }, "Copyright \xA9 Carly Seitz & Danielle Licea 2019")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.837b78f0600e92dea2e4.hot-update.js.map