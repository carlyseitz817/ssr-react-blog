webpackHotUpdate("static\\development\\pages\\blogEditor.js",{

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: getSecretData, getPosts, getPostBySlug, getUserPosts, createPost, updatePost, getPostById, deletePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSecretData", function() { return getSecretData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostBySlug", function() { return getPostBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPosts", function() { return getUserPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return updatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostById", function() { return getPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/utils */ "./helpers/utils.js");






var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({
  baseURL: "".concat(process.env.BASE_URL, "/api/v1"),
  timeout: 3000
});

var setAuthHeader = function setAuthHeader(req) {
  var token = req ? Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["getCookieFromReq"])(req, 'jwt') : js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.getJSON('jwt');

  if (token) {
    return {
      headers: {
        'authorization': "Bearer ".concat(token)
      }
    };
  }

  return undefined;
};

var rejectPromise = function rejectPromise(resError) {
  var error = {};

  if (resError && resError.response && resError.response.data) {
    error = resError.response.data;
  } else {
    error = resError;
  }

  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a.reject(error);
};

var getSecretData =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req) {
    var url;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = '/secret';
            _context.next = 3;
            return axiosInstance.get(url, setAuthHeader(req)).then(function (response) {
              return response.data;
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSecretData(_x) {
    return _ref.apply(this, arguments);
  };
}(); // export const getPortfolios = async () => {
//   return await axiosInstance.get('/portfolios').then(response => response.data);
// }
// export const getPortfolioById = async (id) => {
//   return await axiosInstance.get(`/portfolios/${id}`).then(response => response.data);
// }
// export const createPortfolio = async (portfolioData) => {
//   return await axiosInstance.post('/portfolios', portfolioData, setAuthHeader())
//     .then(response => response.data)
//     .catch(error => rejectPromise(error))
// }
// export const updatePortfolio = async (portfolioData) => {
//   return await axiosInstance.patch(`/portfolios/${portfolioData._id}`, portfolioData, setAuthHeader())
//     .then(response => response.data)
//     .catch(error => rejectPromise(error))
// }
// export const deletePortfolio = (portfolioId) => {
//   return axiosInstance.delete(`/portfolios/${portfolioId}`, setAuthHeader()).then(response => response.data);
// }
// ------------ BLOG ACTIONS --------------

var getPosts =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axiosInstance.get('/posts').then(function (response) {
              return response.data;
            });

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPosts(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var getPostBySlug =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(slug) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axiosInstance.get("/posts/s/".concat(slug)).then(function (response) {
              return response.data;
            });

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPostBySlug(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getUserPosts =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(req) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axiosInstance.get('/posts/me', setAuthHeader(req)).then(function (response) {
              return response.data;
            });

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getUserPosts(_x4) {
    return _ref4.apply(this, arguments);
  };
}();
var createPost = function createPost(postData, lockId) {
  return axiosInstance.post("/posts?lockId=".concat(lockId), postData, setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return rejectPromise(err);
  });
};
var updatePost = function updatePost(postData, postId) {
  return axiosInstance.patch("/posts/".concat(postId), postData, setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return rejectPromise(err);
  });
};
var getPostById = function getPostById(postId) {
  return axiosInstance.get("/posts/".concat(postId)).then(function (response) {
    return response.data;
  });
};
var deletePost = function deletePost(postId) {
  return axiosInstance.delete("/posts/".concat(postId), setAuthHeader()).then(function (response) {
    return response.data;
  }).catch(function (err) {
    return rejectPromise(err);
  });
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

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
/* harmony import */ var _components_SaveDraft__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SaveDraft */ "./components/SaveDraft.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/lib/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_14__);











var ClassicEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(function () {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js")];
    },
    modules: ['@ckeditor/ckeditor5-build-classic']
  }
});
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
      story: '',
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
    value: function saveBlog(story) {
      event.preventDefault();
      var lockId = this.state.lockId;
      var post = {};
      post.title = this.state.title;
      post.subTitle = this.state.subtitle;
      post.story = this.state.story;
      console.log("saved");
      console.log(post.story); // createPost(post, lockId).then(createdPost => {
      //   debugger;
      //   // this.setState({isSaving: false});
      //   toast.success('Blog Saved Succesfuly!');
      //   // Router.pushRoute(`/blogs/${createdPost._id}/edit`);
      // }).catch(err => {
      //   // this.setState({isSaving: false});
      //   toast.error('Unexpected Error, Copy your progress and refresh browser please.');
      //   const message = err.message || 'Server Error!';
      //   console.error(message);
      // })
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

          _this2.setState({
            story: data
          }); // console.log({ event, editor, data });

        },
        onBlur: function onBlur(editor) {
          console.log('Blur.', editor);
        },
        onFocus: function onFocus(editor) {
          console.log('Focus.', editor);
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SaveDraft__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.saveBlog
      }, "Save Draft")));
    }
  }]);

  return BlogEditor;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_hoc_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(BlogEditor));

/***/ })

})
//# sourceMappingURL=blogEditor.js.2e5951ce5d79ec48dd93.hot-update.js.map