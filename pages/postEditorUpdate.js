import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import dynamic from 'next/dynamic';
import { Router } from '../routes';

const CKEditor = dynamic(() => import('../components/CKEditor'), {
  ssr: false
});
import { imagePluginFactory } from '../helpers/utils';

import { toast } from 'react-toastify';

import SaveDraft from '../components/SaveDraft';
import StatusButton from '../components/StatusButton';
import { getPostById, updatePost } from '../actions';

class PostEditorUpdate extends React.Component {

  static async getInitialProps({ query }) {
    const postId = query.id;
    let post = {};

    try {
      post = await getPostById(postId);
      return { post };
    } catch (err) {
      console.error(err);
    }

    return { post };
  }

  constructor(props) {
    super(props);

    this.state = {
      title: this.props.post.title,
      subtitle: this.props.post.subTitle,
      story: this.props.post.story,
      // status: this.props.post.status
      // isSaving: false,
      // lockId: Math.floor(1000 + Math.random() * 9000)
    }

    this.updatePost = this.updatePost.bind(this);
  }

  handletitle = (evt) => this.setState({ title: evt.target.value })
  handleSubtitle = (evt) => this.setState({ subtitle: evt.target.value })

  updatePost(story) {
    const { post } = this.props;

    const updatedPost = {};
    updatedPost.title = this.state.title;
    updatedPost.subTitle = this.state.subtitle;
    updatedPost.story = this.state.story;

    // this.setState({isSaving: true});

    updatePost(updatedPost, post._id).then(updatedPost => {
      toast.success('Post Saved Succesfuly!');
      // this.setState({isSaving: false});
    }).catch(err => {
      // this.setState({isSaving: false});
      const message = err.message || 'Server Error!';
      toast.error('Unexpected Error, Copy your progress and refresh browser please.');
      console.error(message);
    })
  }

  changeStatus(status, postId) {
    console.log("status as retrieved in changedStatus(): " + status)
    updatePost({ status }, postId)
      .then(() => {
        Router.pushRoute(`/blog/${postId}/edit`)
        toast.success('Post status updated');
      })
      .catch(err => {
        toast.error('Unexpected Error, Copy your progress and refresh browser please.');
        console.error(err.message);
      })
  }

  createStatus(status) {
    return status === 'draft' ? { view: 'Publish', value: 'published' }
      : { view: 'Switch to Draft', value: 'draft' };
  }

  statusOption = (post) => {
    const status = this.createStatus(post.status)

    return (
      {
        text: status.view,
        handlers:
          { onClick: () => this.changeStatus(status.value, post._id) }
      }
    )
  }

  render() {
    const { post } = this.props;
    // const { isSaving } = this.state;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <label>Title</label>
          <input value={this.state.title} className="titlez" onChange={this.handletitle} />
          <br></br>
          <label>Subtitle</label>
          <input value={post.subTitle} className="subtitlez" onChange={this.handleSubtitle} />
          <br></br><br></br>

          <CKEditor className="blogtext"
            config={{
              extraPlugins: [imagePluginFactory]
            }}
            data={post.story}
            save={this.saveBlog}
            onInit={editor => {
              // You can store the "editor" and use when it is needed.
              // console.log('Editor is ready to use!', editor);
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

          <br></br>
          <StatusButton item={this.statusOption(post)} />
          <SaveDraft
            onClick={this.updatePost}
          >
            Save Draft
          </SaveDraft>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(PostEditorUpdate);
