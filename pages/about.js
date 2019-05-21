import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends React.Component {
    render() {
        return (
            <BaseLayout {...this.props.auth}>
                <BasePage>
                    <h1>About</h1>
                    <p>Our intention is to create a publishing platform along the lines of Medium 
                        in which anyone can type up and post their own article. 
                        They will also be able to save articles they like. 
                        We believe this to be a valuable endeavour because of the rising popularity 
                        and clout of open publishing based platforms like Twitter and Wordpress- put simply, the intention of a website 
                        like this would be to allow anyone the opportunity to be seen on the same level as famous writers.</p>
                </BasePage>
            </BaseLayout>
        )
    }
}

export default About;