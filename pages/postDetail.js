import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Row, Col } from 'reactstrap';

import { getPostBySlug } from '../actions';

class PostDetail extends React.Component {

  static async getInitialProps({ query }) {
    let post = {};
    const slug = query.slug;

    try {
      post = await getPostBySlug(slug);
    } catch (err) {
      console.error(err);
    }

    return { post };
  }

  render() {
    const { post } = this.props;
    console.log({post})

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-detail-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div>
                <h1>test</h1>
              </div>
              <div dangerouslySetInnerHTML={{__html: post.story}}></div>
              {/* <div>
                {post.story}
              </div> */}
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    )
  }
}

export default PostDetail;
