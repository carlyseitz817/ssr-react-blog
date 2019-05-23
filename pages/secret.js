
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

// import { getSecretData, getSecretDataServer } from '../actions';


class Secret extends React.Component {
    
  static async getInitialProps({req}) {

    const superSecretData =  "super secret data"

    return { superSecretData };
  }

    render() {

      const { superSecretData } = this.props;

    return (<BaseLayout {...this.props.auth}>

        <BasePage title="Secret" className="secretpage">

        <h1>I am a secret page.</h1>

        <p> Secret content will go here...</p>

        <h2> {superSecretData} </h2>
      
        </BasePage>

  </BaseLayout>
  
        )
      
    }

  }


export default withAuth(Secret);