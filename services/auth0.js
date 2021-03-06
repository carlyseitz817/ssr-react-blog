//auth0 goes here
import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { getCookieFromReq } from '../helpers/utils';


class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth(
      {
        domain: 'dev-ofwx6q85.auth0.com',
        clientID: '7ZE6aNVCenqc2Ghy21fA7VcWbzcgPEWz',
        redirectUri: 'https://ssr-nextjs-react-blog-cms.herokuapp.com/callback',
        responseType: 'token id_token',
        scope: 'openid profile',
      });

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  };

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        }
        else if (err) {

          reject(err);

          console.log(err);

          alert('Whoops! Something went wrong! Error: ${err.error}. Check the console for further details.');
        }
      });
    })
  }

  setSession(authResult) {

    localStorage.setItem('isLoggedIn', 'true');

    const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();

    Cookies.set('user', authResult.idTokenPayload);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);

    console.log('You are now logged in!')
  }

  logout() {
    Cookies.remove('user');
    Cookies.remove('jwt');
    Cookies.remove('expiresAt');

    this.auth0.logout({
      returnTo: 'https://ssr-nextjs-react-blog-cms.herokuapp.com/',
      clientID: '7ZE6aNVCenqc2Ghy21fA7VcWbzcgPEWz'
    })

    console.log('Leaving so soon? :(')
  }

  login() {
    this.auth0.authorize()
  }

  async getJWKS() {

    const res = await axios.get('https://dev-ofwx6q85.auth0.com/.well-known/jwks.json');
    const jwks = res.data;
    return jwks;
  }

  async verifyToken(token) {
    if (token) {

      const decodedToken = jwt.decode(token, { complete: true });

      if (!decodedToken) { return undefined; }

      const jwks = await this.getJWKS();
      const jwk = jwks.keys[0];

      let cert = jwk.x5c[0];
      cert = cert.match(/.{1,64}/g).join('\n');
      cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

      if (jwk.kid === decodedToken.header.kid) {
        try {

          const verifiedToken = jwt.verify(token, cert);
          const expiresAt = verifiedToken.exp * 1000;
          return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : undefined;
        } catch (err) {
          return undefined;
        }
      }
    }

    return undefined;
  }

  async clientAuth() {
    var token = Cookies.getJSON("jwt");
    const verifiedToken = await this.verifyToken(token);

    return verifiedToken;
  }

  async serverAuth(req) {
    if (req.headers.cookie) {

      const token = getCookieFromReq(req, 'jwt');
      const verifiedToken = await this.verifyToken(token);

      return verifiedToken;
    }

    return undefined;
  }
}

const auth0client = new Auth();

export default auth0client;