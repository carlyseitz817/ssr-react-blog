import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/link';
import { withRouter } from 'next/router';

class Blog extends React.Component {
    static async getInitialProps() {
        console.log("getInitialProps");

        let posts = [];

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            posts = response.data;
        } catch (err) {
            console.log(err);
        }

        return { posts: posts.splice(0, 10) };
    }

    renderPosts(posts) {
        return posts.map((post) => {
            return (
                <li key="{post.id}">
                    <Link href = {`/post?title=${post.title}`} as={`/blog/${post.title}`.replace(/ /g, "-")}>
                    <a> KEY: {post.id}{post.title} </a>
                </Link>
                </li>
            )
        })
    };

    // renderPosts(posts) {
    //     const PostLink = props => (
    //         <li>
    //             <Link href={`/post?id=${props.id}`} as={`/blog/${props.title}`.replace(/ /g, "-")}>
    //                 <a>{props.title}</a>
    //             </Link>
    //         </li>
    //     )

    //     return posts.map((post) => {
    //         return (
    //             <li key={post.id}>
    //                 <PostLink id={post.id} title={post.title} />
    //             </li>
    //         )
    //     })
    // };
    
    render() {
        // debugger;
        const { posts } = this.props;
        // console.log(this.props);
        return (
            <BaseLayout>
                <div>
                    <h1>Blog Posts</h1>
                    <ul>
                        {this.renderPosts(posts)}
                    </ul>
                </div>
            </BaseLayout>
        )
    }
}

export default Blog