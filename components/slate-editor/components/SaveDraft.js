import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SaveDraft extends Component {

  // constructor(props) {
  //     super(props)
  //     this.savePost = this.savePost.bind(this)
  // }


  // savePost = event => {
  //     event.preventDefault();

  //     const postId = this.props.id;

  //     const postData = {
  //         userId: this.props.userId,
  //         slug: this.props.slug,
  //         title: this.props.title,
  //         subTitle: this.props.subTitle,
  //         story: this.props.story,
  //         // createdAt: this.props.createdAt,
  //         // updatedAt: this.props.updatedAt,
  //         // status: this.props.status,
  //         // author: user.name
  //     }

  //     API.savePost(postData)
  //         .then(this.props.handleSaveReRender(postId));
  // }

  // render() {
  //     return (
  //         <button className='btn btn-primary' onClick={this.savePost}>Save Draft</button>
  //     )
  // }

  render() {
    return (
      <div className="control-menu">
        <div className="status-box">
          Saved
            </div>
        <Button color="success">Save</Button>
      </div>
    )
  }
}

  export default SaveDraft;