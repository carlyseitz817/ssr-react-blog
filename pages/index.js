import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';

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

class Index extends SuperComponent {
    constructor(props) {
        super(props);

        this.state = {
            title: "I am the home page"
        }

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

    updateTitle() {
        this.setState({title:"I am the updated home page"});
    };

    render() {
        console.log("render")
        return (
            <BaseLayout>
                <div>
                    <h1>Home</h1>
                    <h2>{ this.state.title }</h2>
                    <button onClick={() => this.updateTitle()}>CHANGE TITLE</button>
                </div>
            </BaseLayout>
        )
    }
}

export default Index