import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
    const { className, children, isAuthenticated, user } = props;
    const headerType = props.headerType || 'deafult';

    return (
        <div>
            <Head>
                <title>SSR Next.js Blog</title>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
            </Head>
            <div className="layout-container">
                <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user} />
                <main className={`cover ${className}`}>
                    <div className="wrapper">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default BaseLayout