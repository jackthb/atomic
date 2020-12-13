import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {

  return (
    <div className="">
      <Head>
        <title>Jack Burgess</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Footer/>
      </main>
    </div>
  )
}
