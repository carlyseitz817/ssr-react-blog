import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

export default function (Component) {
    return class withAuth extends React.Component {
        static async getInitialProps(args) {
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

            return { pageProps };
        }

        renderProtectedPage() {
            const { isAuthenticated } = this.props.auth;

            if (isAuthenticated) {
                return (
                    <Component{...this.props} />
                )
            } else {
                return (
                    <BaseLayout {...this.props.auth}>
                        <BasePage>
                            <h1>You must log in to view this page.</h1>
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
