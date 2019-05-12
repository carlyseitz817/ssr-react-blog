import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';
import { withRouter } from 'next/router';
import axios from 'axios';

class Post extends React.Component {
    static async getInitialProps({query}) {
        const postID = query.id;
        let post = {};
        console.log("getInitialProps");

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`);
            post = response.data;
        } catch (err) {
            console.log(err);
        }

        return { post };
    }

    render() {
        const {post} = this.props;

        return (
            <BaseLayout>
                <div>
                    <h1>{post.title}</h1>
                    <h2>{post.body}</h2>

                </div>
            </BaseLayout>
        )
    }
}

export default withRouter(Post)