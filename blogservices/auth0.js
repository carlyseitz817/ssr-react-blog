//auth0 goes here

import auth0 from 'auth0-js';

class Auth {
 
    constructor() {

        this.auth0 = new auth0.WebAuth(
            
            {

            domain: 'dev-x6yltt2s.auth0.com',
            clientID: 'lEopvK1CVu4NTl5j5EnvgWCOlSKnMRsZ',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile',

            });

            this.login = this.login.bind(this);

    };

  login() {this.auth0.authorize()}

}

const auth0client = new Auth();

export default auth0client;