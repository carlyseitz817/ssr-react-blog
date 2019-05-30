webpackHotUpdate("static\\development\\pages\\postEditor.js",{

/***/ "./pages/postEditor.js":
/*!*****************************!*\
  !*** ./pages/postEditor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/hoc/withAuth */ "./components/hoc/withAuth.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_SaveDraft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SaveDraft */ "./components/SaveDraft.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");











var CKEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/CKEditor */ "./components/CKEditor.js"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/CKEditor */ "./components/CKEditor.js")];
    },
    modules: ['../components/CKEditor']
  }
}); // const BlockQuote = dynamic(() => import('@ckeditor/ckeditor5-block-quote/src/blockquote'), {
//   ssr: false
// });;







var BlogEditor =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BlogEditor, _React$Component);

  function BlogEditor(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BlogEditor);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BlogEditor).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      title: '',
      subtitle: '',
      story: '' // isSaving: false,
      // lockId: Math.floor(1000 + Math.random() * 9000)

    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handletitle", function (evt) {
      return _this.setState({
        title: evt.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubtitle", function (evt) {
      return _this.setState({
        subtitle: evt.target.value
      });
    });

    _this.saveBlog = _this.saveBlog.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BlogEditor, [{
    key: "saveBlog",
    value: function saveBlog(story) {
      event.preventDefault();
      var post = {};
      post.title = this.state.title;
      post.subTitle = this.state.subtitle;
      post.story = this.state.story;
      console.log("saved");
      console.log(post.story);
      Object(_actions__WEBPACK_IMPORTED_MODULE_14__["createPost"])(post).then(function (createdPost) {
        console.log("createdPost: " + createdPost); // this.setState({isSaving: false});
        // toast.success('Blog Saved Succesfuly!');

        _routes__WEBPACK_IMPORTED_MODULE_12__["Router"].pushRoute("/blog/".concat(createdPost._id, "/edit"));
      }).catch(function (err) {
        // this.setState({isSaving: false});
        // toast.error('Unexpected Error, Copy your progress and refresh browser please.');
        var message = err.message || 'Server Error!';
        console.error(message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_8__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        containerClass: "editor-wrapper",
        className: "blog-editor-page"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Title"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        value: this.state.title,
        className: "titlez",
        onChange: this.handletitle
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Subtitle"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        value: this.state.subtitle,
        className: "subtitlez",
        onChange: this.handleSubtitle
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CKEditor, {
        className: "blogtext" // Went ahead and just styled blockquote element
        // config={{
        //   extraPlugins: [ BlockQuote ]
        // }}
        ,
        save: this.saveBlog,
        onInit: function onInit(editor) {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
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
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SaveDraft__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: this.saveBlog
      }, "Save Draft")));
    }
  }]);

  return BlogEditor;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(BlogEditor));

/***/ })

})
//# sourceMappingURL=postEditor.js.d24566040106d9923f6b.hot-update.js.map