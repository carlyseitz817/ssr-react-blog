import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import auth0Client from '../services/auth0';
import Router, { withRouter } from 'next/router';

class Callback extends React.Component {

  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push(Router.back());
    // Router.back()
  }

  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1><normaltext>Verifying login data ... </normaltext></h1>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withRouter(Callback);
