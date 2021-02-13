import '../public/styles.css';
import 'react-notion/src/styles.css';

import React from 'react';

import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
