import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import {withRouter} from 'next/router';

class Post extends React.Component {
    render() {
        return (
            <BaseLayout>
                <div>
                    <h1>{this.props.router.query.title.replace(/-/g, " ")}</h1>
                </div>
            </BaseLayout>
        )
    }
}

export default withRouter(Post)