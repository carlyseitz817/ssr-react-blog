import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import SlateEditor from '../components/slate-editor/Editor';
import ControlMenu from '../components/slate-editor/components/ControlMenu';

import withAuth from '../components/hoc/withAuth';

class BlogEditor extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage className="blog-editor-page">
                    <h1>Write a New Post</h1>
                    <div style={{backgroundColor:"white"}}>
                        <SlateEditor />
                    </div>
                    <ControlMenu />
                </BasePage>
            </BaseLayout>
        )
    }
}

export default withAuth(BlogEditor);
