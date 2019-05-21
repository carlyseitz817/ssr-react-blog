import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import SlateEditor from '../components/slate-editor/Editor';
// import ControlMenu from '../components/slate-editor/components/SaveDraft';

import withAuth from '../components/hoc/withAuth';
import SaveDraft from '../components/slate-editor/components/SaveDraft';

class BlogEditor extends React.Component {
  constructor(props) {
    super(props);
    this.saveBlog = this.saveBlog.bind(this);
  };

  state = {
    title: '',
    subtitle: '',
    isSaving: false,
    lockId: Math.floor(1000 + Math.random() * 9000)
  }

  handletitle = (evt) => this.setState({ title: evt.target.value })
  handleSubtitle = (evt) => this.setState({ subtitle: evt.target.value })

  saveBlog(story) {
    post.title = this.state.title;
    post.subTitle = this.state.subtitle;
    post.story = story;
  };

  render() {
    debugger;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage containerClass="editor-wrapper" className="blog-editor-page">
          <label>Title</label>
          <input value={this.state.title} onChange={this.handletitle} />
          <label>Subtitle</label>
          <input value={this.state.subtitle} onChange={this.handleSubtitle} />
          <SlateEditor save={this.saveBlog} />
          <SaveDraft onClick={this.saveBlog} />
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(BlogEditor);
