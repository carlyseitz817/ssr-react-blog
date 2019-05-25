import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Container, Row, Col, Button } from 'reactstrap';
import PortButtonDropdown from '../components/ButtonDropdown';

import withAuth from '../components/hoc/withAuth';
import { Link, Router } from '../routes';

import { getUserPosts, updatePost, deletePost } from '../actions';

class UserPosts extends React.Component {

  // state = {
  //   posts: []
  // }

  // componentDidMount() {
  //   getUserPosts.then(res => {
  //     this.setState({
  //         posts: res.data
  //     });
  // });
  // }

  static async getInitialProps({ req }) {
    let posts = [];

    try {
      posts = await getUserPosts(req);
    } catch (err) {
      console.error(err);
    }

    return { posts };
  }

  // changePostStatus(status, postId) {
  //   updatePost({ status }, postId)
  //     .then(() => {
  //       Router.pushRoute('/userPosts');
  //     })
  //     .catch(err => {
  //       console.error(err.message);
  //     })
  // }

  // deletePostWarning(postId) {
  //   const res = confirm('Are you sure you want to delete this blog post?');

  //   if (res) {
  //     this.deletePost(postId);
  //   }
  // }

  // deletePost(postId) {
  //   deletePost(postId)
  //     .then(status => {
  //       Router.pushRoute('/userPosts');
  //     })
  //     .catch(err => console.error(err.message)
  //     )
  // }

  // separatePosts(posts) {
  //   const published = [];
  //   const drafts = [];

  //   posts.forEach((post) => {
  //     post.status === 'draft' ? drafts.push(post) : published.push(post);
  //   });

  //   return { published, drafts };
  // }

  // createStatus(status) {
  //   return status === 'draft' ? { view: 'Publish Story', value: 'published' }
  //     : { view: 'Make a Draft', value: 'draft' };
  // }

  // dropdownOptions = (post) => {
  //   const status = this.createStatus(post.status);

  //   return [
  //     { text: status.view, handlers: { onClick: () => this.changePostStatus(status.value, post._id) } },
  //     { text: 'Delete', handlers: { onClick: () => this.deletePostWarning(post._id) } }
  //   ]
  // }



  // renderPosts(posts) {
  //   console.log(posts)
  //   return (
  //     <ul className="user-blogs-list">
  //       {
  //         posts.map((post, index) => (
  //           <li key={index}>
  //             <Link route={`/posts/${post._id}/edit`}>
  //               <a>{post.title}</a>
  //             </Link>
  //             <PortButtonDropdown items={this.dropdownOptions(post)} />
  //           </li>
  //         )
  //         )
  //       }
  //     </ul>
  //   )
  // }

  render() {
    const { posts } = this.props;
    console.log(posts);
    // const {published, drafts} = this.separatePosts(posts);

    return (
      <BaseLayout {...this.props.auth} headerType={'landing'}>
        <div className="masthead" style={{ "backgroundImage": "url('/static/images/home-bg.jpg')" }}>
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Posts Dashboard</h1>
                  <span className="subheading">
                    Let's write some nice blog today{' '}
                    <Link route='/blogs/new'>
                      <Button color="primary">Create a new Post</Button>
                    </Link></span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-user-page">
          <Row>
            <Col md="12" className="mx-auto text-center">
              <h2 className="blog-status-title">Posts</h2>
              {/* {this.renderPosts(posts)} */}
            </Col>

          </Row>
          {/* <Row>
            <Col md="6" className="mx-auto text-center">
              <h2 className="blog-status-title"> Published Posts </h2>
              {this.renderPosts(published)}
            </Col>
            <Col md="6" className="mx-auto text-center">
              <h2 className="blog-status-title"> Draft Posts </h2>
              {this.renderPosts(drafts)}
            </Col>
          </Row> */}
        </BasePage>
      </BaseLayout>
    )
  }
}

export default withAuth(UserPosts);
