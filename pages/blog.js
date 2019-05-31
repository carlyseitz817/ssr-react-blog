import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';

import { getPosts } from '../actions';
import { shortenText } from '../helpers/utils';

import moment from 'moment';
import { normalize } from 'path';


class Posts extends React.Component {

  static async getInitialProps({ req }) {
    let posts = [];

    try {
      posts = await getPosts(req);
    } catch (err) {
      console.error(err);
    }

    return { posts };
  }

  renderPosts = (posts) => (
    posts.map((post, index) => (
      <div key={index} className="blog-preview">
        <Link route={`/blog/${post.slug}`}>
          <a>
            <h2 className="blog-title">
              {post.title}
            </h2>
            <h3 className="blog-subtitle">
              {shortenText(post.subTitle)}
            </h3>
          </a>
        </Link>
        <p className="post-meta">Posted by
          <a href="#"> {post.author} </a>
          {moment(parseInt(post.createdAt, 10)).format('LL')}</p>
      </div>
    )
    )
  )

  render() {
    const { posts } = this.props;
    console.log(posts);

    return (
      <BaseLayout {...this.props.auth}
        headerType={'landing'}
        className="blog-listing-page"
        title="SSR Next.js Blog">
        <div className="masthead" style={{ "backgroundImage": "url('/static/images/home-bg.jpg')" }}>
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Fresh Blogs</h1>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <BasePage className="blog-body">
          <Row>
            <Col md="10" lg="8" className="mx-auto">
              {this.renderPosts(posts)}
              <div className="clearfix">
                <a className="mybutton btn btn-primary float-right" href="#">Older Posts &rarr;</a>
              </div>
            </Col>
          </Row>

          <footer>
            <Container>
              <Row>
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a target="_blank" href="https://www.facebook.com/groups/217273012433804/?jazoest=26510012195869511271971084598756511378108122691091131211141201017010910474116557610010645897511574116115668565119119586510012177701165586491061151219048557183120488290847377451207611983109114112118697610912011183109109521091159581">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a target="_blank" href="https://github.com/Jerga99">
                        <span className="fa-stack fa-lg">
                          <i className="fas fa-circle fa-stack-2x"></i>
                          <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">Copyright &copy; Carly Seitz and Danielle Licea 2019</p>
                </div>
              </Row>
            </Container>
          </footer>
        </BasePage>
        <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
        </style>
      </BaseLayout>
    )
  }
}

export default Posts;

