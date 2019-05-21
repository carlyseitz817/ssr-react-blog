import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import SlateEditor from '../components/slate-editor/Editor';
import dynamic from 'next/dynamic';
// import ControlMenu from '../components/slate-editor/components/SaveDraft';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const ClassicEditor = dynamic(() => import('@ckeditor/ckeditor5-build-classic'), {
  ssr: false
});
// const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react'), {
//   ssr: false
// });
const CKEditor = dynamic(() => import('../components/CKEditor'), {
  ssr: false
})
import withAuth from '../components/hoc/withAuth';
import SaveDraft from '../components/slate-editor/components/SaveDraft';
import { createPost } from '../actions'


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
    lockId: Math.floor(1000 + Math.random() * 9000)
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

    // debugger;
    // createPost(post, lockId).then(createdPost => {
    //   debugger;
    //   // this.setState({isSaving: false});
    //   toast.success('Blog Saved Succesfuly!');
    //   // Router.pushRoute(`/blogs/${createdPost._id}/edit`);
    // }).catch(err => {
    //   // this.setState({isSaving: false});
    //   toast.error('Unexpected Error, Copy your progress and refresh browser please.');
    //   const message = err.message || 'Server Error!';
    //   console.error(message);
    // })
  };

  render() {
    // debugger;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <label>Title</label>
          <input value={this.state.title} onChange={this.handletitle} />
          <label>Subtitle</label>
          <input value={this.state.subtitle} onChange={this.handleSubtitle} />
          <div>
            <CKEditor
              // data="<p>Hello from CKEditor 5!</p>"
              save={this.saveBlog}
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.setState({ story: data });
                console.log({ event, editor, data });
              }}
              onBlur={editor => {
                console.log('Blur.', editor);
              }}
              onFocus={editor => {
                console.log('Focus.', editor);
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

