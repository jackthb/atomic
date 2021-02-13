import '../public/styles.css';
import 'react-notion/src/styles.css';

import React from 'react';

import Layout from '../components/layout';

import Head from 'next/head';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Jack Burgess</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
