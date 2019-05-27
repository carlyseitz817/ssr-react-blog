webpackHotUpdate("static/development/pages/postEditorUpdate.js",{

/***/ "./pages/postEditorUpdate.js":
/*!***********************************!*\
  !*** ./pages/postEditorUpdate.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/hoc/withAuth */ "./components/hoc/withAuth.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _components_SaveDraft__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/SaveDraft */ "./components/SaveDraft.js");
/* harmony import */ var _components_StatusButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/StatusButton */ "./components/StatusButton.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../actions */ "./actions/index.js");















var CKEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_13___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/CKEditor */ "./components/CKEditor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/CKEditor */ "./components/CKEditor.js")];
    },
    modules: ['../components/CKEditor']
  }
});





var PostEditorUpdate =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PostEditorUpdate, _React$Component);

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PostEditorUpdate, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, postId, post;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                postId = query.id;
                post = {};
                _context.prev = 3;
                _context.next = 6;
                return Object(_actions__WEBPACK_IMPORTED_MODULE_18__["getPostById"])(postId);

              case 6:
                post = _context.sent;
                return _context.abrupt("return", {
                  post: post
                });

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                console.error(_context.t0);

              case 13:
                return _context.abrupt("return", {
                  post: post
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function PostEditorUpdate(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PostEditorUpdate);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(PostEditorUpdate).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handletitle", function (evt) {
      return _this.setState({
        title: evt.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubtitle", function (evt) {
      return _this.setState({
        subtitle: evt.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "statusOption", function (post) {
      var status = _this.createStatus(post.status);

      return {
        text: status.view,
        handlers: {
          onClick: function onClick() {
            return _this.changeStatus(status.value, post._id);
          }
        }
      };
    });

    _this.state = {
      title: _this.props.post.title,
      subtitle: _this.props.post.subTitle,
      story: _this.props.post.story // status: this.props.post.status
      // isSaving: false,
      // lockId: Math.floor(1000 + Math.random() * 9000)

    };
    _this.updatePost = _this.updatePost.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PostEditorUpdate, [{
    key: "updatePost",
    value: function updatePost(story) {
      var post = this.props.post;
      var updatedPost = {};
      updatedPost.title = this.state.title;
      updatedPost.subTitle = this.state.subtitle;
      updatedPost.story = this.state.story; // this.setState({isSaving: true});

      Object(_actions__WEBPACK_IMPORTED_MODULE_18__["updatePost"])(updatedPost, post._id).then(function (updatedPost) {
        react_toastify__WEBPACK_IMPORTED_MODULE_15__["toast"].success('Post Saved Succesfuly!'); // this.setState({isSaving: false});
      }).catch(function (err) {
        // this.setState({isSaving: false});
        var message = err.message || 'Server Error!';
        react_toastify__WEBPACK_IMPORTED_MODULE_15__["toast"].error('Unexpected Error, Copy your progress and refresh browser please.');
        console.error(message);
      });
    }
  }, {
    key: "changeStatus",
    value: function changeStatus(status, postId) {
      console.log("status as retrieved in changedStatus(): " + status);

      Object(_actions__WEBPACK_IMPORTED_MODULE_18__["updatePost"])({
        status: status
      }, postId).then(function () {
        _routes__WEBPACK_IMPORTED_MODULE_14__["Router"].pushRoute("/blog/".concat(postId, "/edit"));
        react_toastify__WEBPACK_IMPORTED_MODULE_15__["toast"].success('Post status updated');
      }).catch(function (err) {
        react_toastify__WEBPACK_IMPORTED_MODULE_15__["toast"].error('Unexpected Error, Copy your progress and refresh browser please.');
        console.error(err.message);
      });
    }
  }, {
    key: "createStatus",
    value: function createStatus(status) {
      return status === 'draft' ? {
        view: 'Publish',
        value: 'published'
      } : {
        view: 'Switch to Draft',
        value: 'draft'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var post = this.props.post; // const { isSaving } = this.state;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_10__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_11__["default"], {
        containerClass: "editor-wrapper",
        className: "blog-editor-page"
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Title"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        value: this.state.title,
        onChange: this.handletitle
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", null, "Subtitle"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        value: post.subTitle,
        onChange: this.handleSubtitle
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(CKEditor, {
        data: post.story,
        save: this.saveBlog,
        onInit: function onInit(editor) {// You can store the "editor" and use when it is needed.
          // console.log('Editor is ready to use!', editor);
        },
        onChange: function onChange(event, editor) {
          var data = editor.getData();

          _this2.setState({
            story: data
          }); // console.log({ event, editor, data });

        },
        onBlur: function onBlur(editor) {// console.log('Blur.', editor);
        },
        onFocus: function onFocus(editor) {// console.log('Focus.', editor);
        }
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_StatusButton__WEBPACK_IMPORTED_MODULE_17__["default"], {
        item: this.statusOption(post)
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_SaveDraft__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onClick: this.updatePost
      }, "Save Draft")));
    }
  }]);

  return PostEditorUpdate;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_12__["default"])(PostEditorUpdate));

/***/ })

})
//# sourceMappingURL=postEditorUpdate.js.50978110c1e3e3b506d3.hot-update.js.map