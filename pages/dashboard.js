
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';

class Dashboard extends React.Component {

    static getInitialProps() {
        const superSecretValue = "Super Secret Value";

        return { superSecretValue };
    }

    // renderDashboard() {
    //     const { isAuthenticated } = this.props.auth;
    // const { superSecretValue } = this.props;

    //     if (isAuthenticated) {
    //         return (
    //             <BaseLayout {...this.props.auth}>
    //                 <BasePage>
    //                     <h1>Dashboard</h1>
    //                     <h2>{superSecretValue}</h2>
    //                 </BasePage>
    //             </BaseLayout>
    //         )
    //     }
    //     else {
    //         return (
    //             <BaseLayout {...this.props.auth}>
    //                 <BasePage>
    //                     <h1>Please log in to view this page.</h1>
    //                 </BasePage>
    //             </BaseLayout>
    //         )
    //     }
    // }

    render() {
        const { superSecretValue } = this.props;

        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>Dashboard</h1>
                    <h2>{superSecretValue}</h2>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth(Dashboard);
