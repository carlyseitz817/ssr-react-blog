webpackHotUpdate("static/development/pages/index.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);



//auth0 goes here




var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Auth);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_3__["default"].WebAuth({
      domain: 'dev-ofwx6q85.auth0.com',
      clientID: '7ZE6aNVCenqc2Ghy21fA7VcWbzcgPEWz',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Auth, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
        _this.auth0.parseHash(function (err, authResult) {
          if (authResult && authResult.accessToken && authResult.idToken) {
            _this.setSession(authResult);

            resolve();
          } else if (err) {
            reject(err); // history.replace('/home');

            console.log(err);
            alert('Whoops! Something went wrong! Error: ${err.error}. Check the console for further details.');
          }
        });
      });
    }
  }, {
    key: "setSession",
    value: function setSession(authResult) {
      localStorage.setItem('isLoggedIn', 'true');
      var expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('user', authResult.idTokenPayload);
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('jwt', authResult.idToken);
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('expiresAt', expiresAt);
      console.log('You are now logged in!');
    }
  }, {
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('user');
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('jwt');
      js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.remove('expiresAt');
      this.auth0.logout({
        returnTo: '',
        clientID: 'lEopvK1CVu4NTl5j5EnvgWCOlSKnMRsZ'
      });
      console.log('Leaving so soon? :(');
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    }
  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      var expiresAt = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.getJSON('expiresAt');
      return new Date().getTime() < expiresAt;
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      if (token) {
        var decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.decode(token);
        var expiresAt = decodedToken.exp = 1000;
        return decodedToken && new Date().getTime() < expiresAt ? decodedToken : undefined;
      }

      return undefined;
    }
  }, {
    key: "clientAuth",
    value: function clientAuth() {
      var token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.getJSON("jwt");
      var verifiedToken = this.verifyToken(token);
      return verifiedToken; // return this.isAuthenticated();
    }
  }, {
    key: "serverAuth",
    value: function serverAuth(req) {
      if (req.headers.cookie) {
        var tokenCookie = req.headers.cookie.split(";").find(function (c) {
          return c.trim().startsWith("jwt=");
        });

        if (!tokenCookie) {
          return undefined;
        }

        var token = tokenCookie.split("=")[1];
        var verifiedToken = this.verifyToken(token);
        return token;
      }

      return undefined;
    }
  }]);

  return Auth;
}();

var auth0client = new Auth();
/* harmony default export */ __webpack_exports__["default"] = (auth0client);

/***/ })

})
//# sourceMappingURL=index.js.da08a2ef08c25e1a871f.hot-update.js.map