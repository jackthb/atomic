import Head from 'next/head'


import Header from '../components/Header'
import TempCard from '../components/TempCard'
import Footer from '../components/Footer'

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Jack Burgess</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <Header />
        <TempCard />
        <Footer/>
      </main>
    </div>
  )
}
