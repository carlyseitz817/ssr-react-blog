
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';


class Secret extends React.Component {
    
    // renderSecretPage() {
    // const { isAuthenticated } = this.props.auth;

    // if(isAuthenticated) {
    //     return(
    //     <BaseLayout {...this.props.auth}>

    //         <BasePage title="Secret" className="secretpage">

    //         <h1>I am a secret page.</h1>

    //         <p> Secret content will go here...</p>
          
    //         </BasePage>

    //   </BaseLayout>
        
    // )

    // } else {

    //     return(
    //         <BaseLayout {...this.props.auth}>
    
    //             <BasePage title="Secret" className="secretpage">
    
    //             <h1>You are not authorized to be here! Please Login.</h1>
              
    //             </BasePage>
    
    //       </BaseLayout>
            
    //     )

    // }

    // }

    render() {

    return (<BaseLayout {...this.props.auth}>

        <BasePage title="Secret" className="secretpage">

        <h1>I am a secret page.</h1>

        <p> Secret content will go here...</p>
      
        </BasePage>

  </BaseLayout>
  
        )
      
    }

  }


export default withAuth(Secret);