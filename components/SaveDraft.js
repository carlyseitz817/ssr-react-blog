import React, { Component } from 'react';
// import { Button } from 'reactstrap';


function SaveDraft(props) {

  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary mybutton">
      {props.children}
    </button>
  )
}
// class SaveDraft extends Component {

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




export default SaveDraft;