import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';
import { Button, Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed'

// Functional components often called dumb components
// Get data
// Return data
// const Index = () => {
//     return (
//         <h1>Blog Posts</h1>
//     )
// }

// Class components have more functionality than functional components
// User lifecycle function

class Index extends React.Component {

  constructor(props) {
    super(props);

    this.features = [
      "Server-side rendering for SEO",
      "Rich text editor",
      "Save drafts"    ]
  };


  render() {
    const { isAuthenticated, user } = this.props.auth;
    console.log({ user });
    console.log(`${isAuthenticated && `${user.name}`}`)
    console.log({ isAuthenticated })
    return (
      <BaseLayout {...this.props.auth} className="cover">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-indexx.png" />
          </div>

          <Container>
            {/* <Row>
                            <Col md="12">
                                <h1>
                                    Hello, {isAuthenticated && <span>{user.name}</span>}!
                                </h1>
                            </Col>
                        </Row> */}
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        {/* <h2> test test test</h2> */}
                        <div className="hero-section-content-intro">
                          {/* test test test */}
                  </div>
                      </div>
                      <img className="image" src="/static/images/project3a.png" />
                      {/* <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div> */}
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Lorem ipsum, etc etc. Some things, like super-old Latin placeholder text, 
                    are so good no one's ever bothered reinventing it. Other things are not super-old Latin placeholder text.
                    The world is changing, but fortunately, technology is also changing. Anyone can leave their mark if they have the right platform,
                    the right site. Welcome to the right site.
            </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={80}
                  backSpeed={60}
                  strings={this.features}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className='self-typed'
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Time to make your mark.
            </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>

    )
  }
}

export default Index