
import '../public/styles.css';
import "react-notion/src/styles.css";


import Layout from '../components/layout'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false



import React from 'react'
import App from 'next/app'


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    )
  }
}

export default MyApp

