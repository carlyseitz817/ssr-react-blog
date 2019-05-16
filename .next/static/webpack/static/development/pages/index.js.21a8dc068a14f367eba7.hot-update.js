webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./blogservices/auth0.js":
/*!*******************************!*\
  !*** ./blogservices/auth0.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//auth0 goes here


var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    _classCallCheck(this, Auth);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_0__["default"].WebAuth({
      domain: 'dev-x6yltt2s.auth0.com',
      clientID: 'lEopvK1CVu4NTl5j5EnvgWCOlSKnMRsZ',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
  }

  _createClass(Auth, [{
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }]);

  return Auth;
}();

var auth0client = new Auth();
/* harmony default export */ __webpack_exports__["default"] = (auth0client);

/***/ })

})
//# sourceMappingURL=index.js.21a8dc068a14f367eba7.hot-update.js.map