import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import SlateEditor from '../components/slate-editor/Editor';

import withAuth from '../components/hoc/withAuth';

class BlogEditor extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="blog-editor-page">
                    <h1>Write a New Post</h1>
                    <SlateEditor />
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth(BlogEditor);
