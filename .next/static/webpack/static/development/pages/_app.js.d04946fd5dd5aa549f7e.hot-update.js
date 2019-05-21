webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/elliptic/package.json":
/*!********************************************!*\
  !*** ./node_modules/elliptic/package.json ***!
  \********************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bugs, dependencies, description, devDependencies, files, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_args":[["elliptic@6.4.1","/Users/carlyseitz/Documents/Homework Assignments/ssr-react-blog"]],"_from":"elliptic@6.4.1","_id":"elliptic@6.4.1","_inBundle":false,"_integrity":"sha512-BsXLz5sqX8OHcsh7CqBMztyXARmGQ3LWPtGjJi6DiJHq5C/qvi9P3OqgswKSDftbu8+IoI/QDTAm2fFnQ9SZSQ==","_location":"/elliptic","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"elliptic@6.4.1","name":"elliptic","escapedName":"elliptic","rawSpec":"6.4.1","saveSpec":null,"fetchSpec":"6.4.1"},"_requiredBy":["/browserify-sign","/create-ecdh"],"_resolved":"https://registry.npmjs.org/elliptic/-/elliptic-6.4.1.tgz","_spec":"6.4.1","_where":"/Users/carlyseitz/Documents/Homework Assignments/ssr-react-blog","author":{"name":"Fedor Indutny","email":"fedor@indutny.com"},"bugs":{"url":"https://github.com/indutny/elliptic/issues"},"dependencies":{"bn.js":"^4.4.0","brorand":"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0","inherits":"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},"description":"EC cryptography","devDependencies":{"brfs":"^1.4.3","coveralls":"^2.11.3","grunt":"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2","istanbul":"^0.4.2","jscs":"^2.9.0","jshint":"^2.6.0","mocha":"^2.1.0"},"files":["lib"],"homepage":"https://github.com/indutny/elliptic","keywords":["EC","Elliptic","curve","Cryptography"],"license":"MIT","main":"lib/elliptic.js","name":"elliptic","repository":{"type":"git","url":"git+ssh://git@github.com/indutny/elliptic.git"},"scripts":{"jscs":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","jshint":"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js","lint":"npm run jscs && npm run jshint","test":"npm run lint && npm run unit","unit":"istanbul test _mocha --reporter=spec test/index.js","version":"grunt dist && git add dist/"},"version":"6.4.1"};

/***/ }),

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



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
    this.handleAuthentication = this.handleAuthentication.bind(this); // this.isAuthenticated = this.isAuthenticated.bind(this);
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
    value: function getJWKS() {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get('https://eincode.eu.auth0.com/.well-known/jwks.json');
      var jwks = res.data;
      return jwks;
    }
  }, {
    key: "verifyToken",
    value: function verifyToken(token) {
      if (token) {
        var decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default.a.decode(token);
        var expiresAt = decodedToken.exp * 1000;
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
//# sourceMappingURL=_app.js.d04946fd5dd5aa549f7e.hot-update.js.map