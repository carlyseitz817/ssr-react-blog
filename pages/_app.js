import React from 'react';
import App, { Container } from 'next/app';
import cookies from 'next-cookies';
import nookies from 'nookies';
import last from '../services/lastPage';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import Router, { withRouter } from 'next/router';

import auth0 from '../services/auth0';

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.css';

class MyApp extends App {
  // constructor(props) {
  //   super(props);

  constructor({ router }) {
    super()

    this.state = {
      activeURL: router.asPath,
      activeURLTopLevelRouterDeprecatedBehavior: router.asPath,
      activeURLTopLevelRouter: router.asPath
    }

    Router.events.on('routeChangeStart', (url) => {
      console.log("routeChangeStart executed")

      console.log(url)
    })
  }

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const auth = { user, isAuthenticated: !!user };

    // const lastPage = process.browser ? await last.clientLastPage() : await last.serverLastPage(ctx.req)

    // return { pageProps, auth, lastPage };

    return { pageProps, auth };
  }

  // handleRouteChange(url) {
  //   Cookies.set("AUTH0_STATE", JSON.stringify(window.location.href));

  //   console.log('App is changing to: ', url)
  // }

  componentDidMount() {
    Router.onRouteChangeComplete = this.handleRouteChangeTopLevelRouterDeprecatedBehavior
    Router.events.on(
      'routeChangeComplete',
      this.handleRouteChangeTopLevelRouter
    )

    console.log(this.state.activeURL);
    this.props.router.events.on('routeChangeComplete', this.handleRouteChange)
  }

  componentWillUnmount() {
    Router.onRouteChangeComplete = null
    Router.events.off(
      'routeChangeComplete',
      this.handleRouteChangeTopLevelRouter
    )
    this.props.router.events.off('routeChangeComplete', this.handleRouteChange)

    console.log(this.state.activeURL);
  }

  handleRouteChange = url => {
    this.setState({
      activeURL: url
    })
  }

  handleRouteChangeTopLevelRouter = url => {
    this.setState({
      activeURLTopLevelRouter: url
    })
  }

  handleRouteChangeTopLevelRouterDeprecatedBehavior = url => {
    this.setState({
      activeURLTopLevelRouterDeprecatedBehavior: url
    })
  }

  render() {
    // console.log(this.state.activeURL);
    const { Component, pageProps, auth, lastPage } = this.props;

    const { activeURL } = this.state;


    return (

      <Container>
        <div>Active URL: {this.state.activeURL}</div>
        <ToastContainer />
        <Component {...pageProps} auth={auth} lastPage={lastPage} />
      </Container>
    )
  }
}

export default MyApp

