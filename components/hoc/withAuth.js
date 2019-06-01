import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';
import { normalize } from 'path';

export default function (Component) {
  return class withAuth extends React.Component {
    static async getInitialProps(args) {
      const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

      return { ...pageProps };
    }

    renderProtectedPage() {
      const { isAuthenticated } = this.props.auth;

      if (isAuthenticated) {
        return (
          <Component {...this.props} />
        )
      } else {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <normaltext>
                <h1>You must log in to view this page.</h1>
              </normaltext>
            </BasePage>
          </BaseLayout>
        )
      }
    }

    render() {
      return this.renderProtectedPage();
    }
  }
}
