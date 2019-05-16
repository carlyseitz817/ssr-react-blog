//auth0 goes here

import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dev-x6yltt2s.auth0.com',
    clientID: 'lEopvK1CVu4NTl5j5EnvgWCOlSKnMRsZ',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}