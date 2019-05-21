import { Component } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
class CKEditorWrapper extends Component {
  state = {
    data: "<p>Hello from CKEditor 5!</p>"
  }

  save() {
    const story = this.state.data;
    save(story);
  }

  render() {
    return <div>
      <CKEditor
        editor={ClassicEditor}
        {...this.props}
      />
    </div>
  }
}
export default CKEditorWrapper;