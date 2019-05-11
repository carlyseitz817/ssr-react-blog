import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout'

class SuperComponent extends React.Component {
    constructor(props) {
        super(props);

        this.someVar = "someVar";
    };

    alertName(title) {
        alert(title);
    };

    render() {
        return (
            <BaseLayout>
                <div>
                    <h1>Blog Posts</h1>
                </div>
            </BaseLayout>
        )
    }
}

export default SuperComponent