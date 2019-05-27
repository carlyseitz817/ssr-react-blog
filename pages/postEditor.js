import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import dynamic from 'next/dynamic';
const CKEditor = dynamic(() => import('../components/CKEditor'), {
  ssr: false
});
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import withAuth from '../components/hoc/withAuth';
import {Router} from '../routes';
import SaveDraft from '../components/SaveDraft';
import { createPost } from '../actions'
import { toast } from 'react-toastify';

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.saveBlog = this.saveBlog.bind(this);
  };


  state = {
    title: '',
    subtitle: '',
    story: '',
    // isSaving: false,
    // lockId: Math.floor(1000 + Math.random() * 9000)
  }

  handletitle = (evt) => this.setState({ title: evt.target.value })
  handleSubtitle = (evt) => this.setState({ subtitle: evt.target.value })

  saveBlog(story) {
    event.preventDefault();

    const post = {};

    post.title = this.state.title;
    post.subTitle = this.state.subtitle;
    post.story = this.state.story;
    console.log("saved");
    console.log(post.story);

    createPost(post).then(createdPost => {
      console.log("createdPost: " + createdPost);
      // this.setState({isSaving: false});
      // toast.success('Blog Saved Succesfuly!');
      Router.pushRoute(`/blog/${createdPost._id}/edit`);
    }).catch(err => {
      // this.setState({isSaving: false});
      // toast.error('Unexpected Error, Copy your progress and refresh browser please.');
      const message = err.message || 'Server Error!';
      console.error(message);
    })
  };

  render() {    
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <label>Title</label>
          <input value={this.state.title} onChange={this.handletitle} />
          <label>Subtitle</label>
          <input value={this.state.subtitle} onChange={this.handleSubtitle} />
          <div>
            <CKEditor
              config={{
                extraPlugins: [ BlockQuote ]
              }}
              save={this.saveBlog}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ story: data });
                // console.log({ event, editor, data });
              }}
              onBlur={editor => {
                // console.log('Blur.', editor);
              }}
              onFocus={editor => {
                // console.log('Focus.', editor);
              }}
            />
          </div>
          <SaveDraft
            onClick={this.saveBlog}
          >
            Save Draft
          </SaveDraft>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(BlogEditor);

