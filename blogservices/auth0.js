//auth0 goes here

import auth0 from 'auth0-js';

import Cookies from 'js-cookie'

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
            this.logout = this.logout.bind(this);
            this.handleAuthentication = this.handleAuthentication.bind(this);
            this.isAuthenticated = this.isAuthenticated.bind(this);

    };

    handleAuthentication() {

        return new Promise ((resolve, reject) => {

            this.auth0.parseHash((err, authResult) => {
                
                if (authResult && authResult.accessToken && authResult.idToken) {
                  this.setSession(authResult);
                  resolve();
                } 
                
                else if (err) {

                    reject(err);
                  
                    // history.replace('/home');
                  
                    console.log(err);
                  
                    alert('Whoops! Something went wrong! Error: ${err.error}. Check the console for further details.');
                }

              });

        })       
        
      }

      setSession(authResult) {

        debugger;
     
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

            returnTo: '',
            clientID: 'lEopvK1CVu4NTl5j5EnvgWCOlSKnMRsZ'

        })

        console.log('Leaving so soon? :(')
    
    }  

  login() {this.auth0.authorize()}

  isAuthenticated() {

    const expiresAt = Cookies.getJSON('expiresAt');
    return new Date().getTime() < expiresAt;

  }



}

const auth0client = new Auth();

export default auth0client;