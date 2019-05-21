import { Component } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';
class CKEditorWrapper extends Component {
  save() {
    const data = editor.getData();
    save(data);
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