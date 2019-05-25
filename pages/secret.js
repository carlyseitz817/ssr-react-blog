
import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import withAuth from '../components/hoc/withAuth';
import axios from 'axios';
// import { getSecretData, getSecretDataServer } from '../actions';
// import { getSecretData } from '../actions';


class Secret extends React.Component {
    
  static async getInitialProps({req}) {

    // const anotherSecretData =  await getSecretData(req);


    // return { anotherSecretData };


      const superSecretData =  "super secret data"
  
      return { superSecretData };
    
  }

  //   constructor(props) {
  //   super();

  //   this.state = {
  //     secretData: []
  //   }
  // }

  state = {
    secretData: []
  }

  async componentDidMount() {
   
    const res = await axios.get('/api/v1/secret')
    // const secretData = await getSecretData();
    const secretData = res.data;
      this.setState({
        secretData
      });
  }

  displaySecretData() {
    const { secretData } = this.state;

    if ( secretData && secretData.length > 0) {
      return secretData.map((data, index) => {
        return (
          <div key={index}>
            <p> { data.title }</p>
            <p> { data.description }</p>
          </div>
        )
      })
    }

    return null;
  }

    render() {

      const { superSecretData } = this.props;
 

      return (<BaseLayout {...this.props.auth}>

        <BasePage title="Secret" className="secretpage">

        <h1>I am a secret page.</h1>

        <p> Secret content will go here...</p>

        <h2> {superSecretData} </h2>

        { this.displaySecretData() }
      
        </BasePage>

  </BaseLayout>
  
        )
      
    }

  }


// export default withAuth()(Secret);
export default withAuth(Secret);