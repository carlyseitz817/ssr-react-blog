webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./services/auth0.js":
/*!***************************!*\
  !*** ./services/auth0.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var auth0_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! auth0-js */ "./node_modules/auth0-js/dist/auth0.min.esm.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);





//auth0 goes here





var Auth =
/*#__PURE__*/
function () {
  function Auth() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Auth);

    this.auth0 = new auth0_js__WEBPACK_IMPORTED_MODULE_5__["default"].WebAuth({
      domain: 'dev-ofwx6q85.auth0.com',
      clientID: '7ZE6aNVCenqc2Ghy21fA7VcWbzcgPEWz',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this); // this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Auth, [{
    key: "handleAuthentication",
    value: function handleAuthentication() {
      var _this = this;

      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
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
      js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('user', authResult.idTokenPayload);
      js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('jwt', authResult.idToken);
      js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('expiresAt', expiresAt);
      console.log('You are now logged in!');
    }
  }, {
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('user');
      js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('jwt');
      js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.remove('expiresAt');
      this.auth0.logout({
        returnTo: 'http://localhost:3000',
        clientID: 'lEopvK1CVu4NTl5j5EnvgWCOlSKnMRsZ'
      });
      console.log('Leaving so soon? :(');
    }
  }, {
    key: "login",
    value: function login() {
      this.auth0.authorize();
    } // isAuthenticated() {
    //     const expiresAt = Cookies.getJSON('expiresAt');
    //     return new Date().getTime() < expiresAt;
    // }

  }, {
    key: "getJWKS",
    value: function () {
      var _getJWKS = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, jwks;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get('https://dev-ofwx6q85.auth0.com/.well-known/jwks.json');

              case 2:
                res = _context.sent;
                jwks = res.data;
                return _context.abrupt("return", jwks);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getJWKS() {
        return _getJWKS.apply(this, arguments);
      }

      return getJWKS;
    }()
  }, {
    key: "verifyToken",
    value: function () {
      var _verifyToken = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(token) {
        var decodedToken, jwks, jwk, cert, verifiedToken, expiresAt;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!token) {
                  _context2.next = 21;
                  break;
                }

                decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default.a.decode(token, {
                  complete: true
                });

                if (decodedToken) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", undefined);

              case 4:
                _context2.next = 6;
                return this.getJWKS();

              case 6:
                jwks = _context2.sent;
                jwk = jwks.keys[0];
                cert = jwk.x5c[0];
                cert = cert.match(/.{1,64}/g).join('\n');
                cert = "-----BEGIN CERTIFICATE-----\n".concat(cert, "\n-----END CERTIFICATE-----\n");

                if (!(jwk.kid === decodedToken.header.kid)) {
                  _context2.next = 21;
                  break;
                }

                _context2.prev = 12;
                verifiedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default.a.verify(token, cert);
                expiresAt = verifiedToken.exp * 1000;
                return _context2.abrupt("return", verifiedToken && new Date().getTime() < expiresAt ? verifiedToken : undefined);

              case 18:
                _context2.prev = 18;
                _context2.t0 = _context2["catch"](12);
                return _context2.abrupt("return", undefined);

              case 21:
                return _context2.abrupt("return", undefined);

              case 22:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 18]]);
      }));

      function verifyToken(_x) {
        return _verifyToken.apply(this, arguments);
      }

      return verifyToken;
    }()
  }, {
    key: "clientAuth",
    value: function clientAuth() {
      var token = js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.getJSON("jwt");
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
//# sourceMappingURL=blog.js.649d9fb6cf81bfd981df.hot-update.js.map