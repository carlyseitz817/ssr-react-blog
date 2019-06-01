webpackHotUpdate("static/development/pages/userPosts.js",{

/***/ "./pages/userPosts.js":
/*!****************************!*\
  !*** ./pages/userPosts.js ***!
  \****************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_ButtonDropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/ButtonDropdown */ "./components/ButtonDropdown.js");
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/hoc/withAuth */ "./components/hoc/withAuth.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../actions */ "./actions/index.js");



















var UserPosts =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(UserPosts, _React$Component);

  function UserPosts() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, UserPosts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(UserPosts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "dropdownOptions", function (post) {
      var status = _this.createStatus(post.status);

      return [{
        text: status.view,
        handlers: {
          onClick: function onClick() {
            return _this.changePostStatus(status.value, post._id);
          }
        }
      }, {
        text: 'Delete',
        handlers: {
          onClick: function onClick() {
            return _this.deletePostWarning(post._id);
          }
        }
      }];
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(UserPosts, [{
    key: "changePostStatus",
    value: function changePostStatus(status, postId) {
      Object(_actions__WEBPACK_IMPORTED_MODULE_17__["updatePost"])({
        status: status
      }, postId).then(function () {
        _routes__WEBPACK_IMPORTED_MODULE_16__["Router"].pushRoute('/userPosts');
      }).catch(function (err) {
        console.error(err.message);
      });
    }
  }, {
    key: "deletePostWarning",
    value: function deletePostWarning(postId) {
      var res = confirm('Are you sure you want to delete this blog post?');

      if (res) {
        this.deletePost(postId);
      }
    }
  }, {
    key: "deletePost",
    value: function deletePost(postId) {
      Object(_actions__WEBPACK_IMPORTED_MODULE_17__["deletePost"])(postId).then(function (status) {
        _routes__WEBPACK_IMPORTED_MODULE_16__["Router"].pushRoute('/userPosts');
      }).catch(function (err) {
        return console.error(err.message);
      });
    }
  }, {
    key: "separatePosts",
    value: function separatePosts(posts) {
      var published = [];
      var drafts = [];
      posts.forEach(function (post) {
        post.status === 'draft' ? drafts.push(post) : published.push(post);
      });
      return {
        published: published,
        drafts: drafts
      };
    }
  }, {
    key: "createStatus",
    value: function createStatus(status) {
      return status === 'draft' ? {
        view: 'Publish Story',
        value: 'published'
      } : {
        view: 'Make a Draft',
        value: 'draft'
      };
    }
  }, {
    key: "renderPosts",
    value: function renderPosts(posts) {
      var _this2 = this;

      console.log(posts);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "user-blogs-list"
      }, posts.map(function (post, index) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_16__["Link"], {
          route: "/blog/".concat(post._id, "/edit")
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", null, post.title)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_ButtonDropdown__WEBPACK_IMPORTED_MODULE_14__["default"], {
          items: _this2.dropdownOptions(post)
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var posts = this.props.posts;
      console.log(posts);

      var _this$separatePosts = this.separatePosts(posts),
          published = _this$separatePosts.published,
          drafts = _this$separatePosts.drafts;

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, this.props.auth, {
        headerType: 'landing'
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "masthead",
        style: {
          "backgroundImage": "url('/static/images/home-bg.jpg')"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "overlay"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Container"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-lg-8 col-md-10 mx-auto"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "site-heading"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", null, "Posts Dashboard"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "subheading"
      }, "Let's write something nice today!", ' ', react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_16__["Link"], {
        route: "/blog/new"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        color: "primary mybutton"
      }, "Create a new Post")))))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "blog-user-page"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("normaltext", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Row"], null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        md: "6",
        className: "mx-auto text-center"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "blog-status-title"
      }, " Published Posts "), this.renderPosts(published)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
        md: "6",
        className: "mx-auto text-center"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "blog-status-title"
      }, " Draft Posts "), this.renderPosts(drafts))))));
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
                return Object(_actions__WEBPACK_IMPORTED_MODULE_17__["getUserPosts"])(req);

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

  return UserPosts;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_15__["default"])(UserPosts));

/***/ })

})
//# sourceMappingURL=userPosts.js.673bd8e975dd3b214893.hot-update.js.map