import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';

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
    static async getInitialProps() {
        console.log("getInitialProps");

        let userData = {};

        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
            userData = response.data;
        } catch (err) {
            console.log(err);
        }

        return {
            initialData: [1, 2, 3, 4],
            userData
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            title: "I am the home page"
        }

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
        console.log("render")

        const { title } = this.state;
        const { initialData, userData } = this.props;

        return (
            <BaseLayout>
                <div>
                    <h1>Home</h1>
                    <h2>{title}</h2>
                    <h2>{userData.title}</h2>

                    <button onClick={this.updateTitle}>CHANGE TITLE</button>
                </div>
            </BaseLayout>
        )
    }
}

export default Index