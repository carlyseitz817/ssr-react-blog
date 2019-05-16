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
            this.handleAuthentication = this.handleAuthentication.bind(this);

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

setSession () {

    //this is where the tokens will go

}
    


  login() {this.auth0.authorize()}


}

const auth0client = new Auth();

export default auth0client;