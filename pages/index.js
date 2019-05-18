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
            "Save blog posts",
            "View user-specific blogs"
        ]

        // If use this line, can do:
        //     <button onClick={this.updateTitle}>CHANGE TITLE</button>
        //         instead of...
        //     <button onClick={() => this.updateTitle()}>CHANGE TITLE</button>

        // this.updateTitle = this.updateTitle.bind(this);

        console.log("constructor");
    };
    componentDidMount() {
        console.log("componentDidMount");
    };

    componentDidUpdate() {
        console.log("componentDidUpdate");
    };

    componentWillUnmount() {
        console.log("componentWillUnmount")
    };

    // arrow functions here so don't need in onClick
    updateTitle = () => {
        this.setState({ title: "I am the updated home page" });
    };

    render() {
        // const { isAuthenticated, user } = this.props.auth;
        // console.log({user});
        // console.log({isAuthenticated})
        return (
            <BaseLayout {...this.props.auth} className="cover">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/static/images/background-index.png" />
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
                                                <h2> Full Stack Web Developer </h2>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my portfolio and job history.
                  </div>
                                            </div>
                                            <img className="image" src="/static/images/section-1.png" />
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h1>
                                        Welcome to the portfolio website of Filip Jerga.
                                        Get informed, collaborate and discover projects I was working on through the years!
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
                                        Let's take a look on my work.
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