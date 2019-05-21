webpackHotUpdate("static/development/pages/blogEditor.js",{

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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layouts/BaseLayout */ "./components/layouts/BaseLayout.js");
/* harmony import */ var _components_BasePage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BasePage */ "./components/BasePage.js");
/* harmony import */ var _components_slate_editor_Editor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/slate-editor/Editor */ "./components/slate-editor/Editor.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/hoc/withAuth */ "./components/hoc/withAuth.js");
/* harmony import */ var _components_slate_editor_components_SaveDraft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/slate-editor/components/SaveDraft */ "./components/slate-editor/components/SaveDraft.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions */ "./actions/index.js");











 // import ControlMenu from '../components/slate-editor/components/SaveDraft';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

var ClassicEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")];
    },
    modules: ['@ckeditor/ckeditor5-build-classic']
  }
}); // const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react'), {
//   ssr: false
// });

var CKEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
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
      // isSaving: false,
      lockId: Math.floor(1000 + Math.random() * 9000)
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
    value: function saveBlog() {
      event.preventDefault();
      var post = {};
      post.title = this.state.title;
      post.subTitle = this.state.subtitle; // post.story = story;

      post.story = evt.editor.getData();
      console.log("saved");
      console.log(post.story); // debugger;

      Object(_actions__WEBPACK_IMPORTED_MODULE_14__["createPost"])(post, lockId).then(function (createdPost) {
        debugger; // this.setState({isSaving: false});

        toast.success('Blog Saved Succesfuly!'); // Router.pushRoute(`/blogs/${createdPost._id}/edit`);
      }).catch(function (err) {
        // this.setState({isSaving: false});
        toast.error('Unexpected Error, Copy your progress and refresh browser please.');
        var message = err.message || 'Server Error!';
        console.error(message);
      });
    }
  }, {
    key: "render",
    value: function render() {
      // debugger;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_layouts_BaseLayout__WEBPACK_IMPORTED_MODULE_8__["default"], this.props.auth, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_BasePage__WEBPACK_IMPORTED_MODULE_9__["default"], {
        containerClass: "editor-wrapper",
        className: "blog-editor-page"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Title"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        value: this.state.title,
        onChange: this.handletitle
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", null, "Subtitle"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        value: this.state.subtitle,
        onChange: this.handleSubtitle
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CKEditor // data="<p>Hello from CKEditor 5!</p>"
      , {
        save: this.saveBlog,
        onInit: function onInit(editor) {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        },
        onChange: function onChange(event, editor) {
          var data = editor.getData();
          console.log({
            event: event,
            editor: editor,
            data: data
          });
        },
        onBlur: function onBlur(editor) {
          console.log('Blur.', editor);
        },
        onFocus: function onFocus(editor) {
          console.log('Focus.', editor);
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_slate_editor_components_SaveDraft__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onClick: this.saveBlog
      }, "Save Draft")));
    }
  }]);

  return BlogEditor;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_12__["default"])(BlogEditor));

/***/ })

})
//# sourceMappingURL=blogEditor.js.99b4cbba94d651572399.hot-update.js.map