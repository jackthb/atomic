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
{/*         
        <div className='intro'>
          <div className='left'>
            <h1 className="title">
              Jack C. Burgess
            </h1>
            <h2 className="intro">
              Computer Science undergrad and software developer
            </h2>
          </div>
          <div className='right'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula ligula, auctor efficitur ullamcorper a, ultricies eget enim.
          </div>
        </div>
        <h1 className="pages">
          Read <Link href="/projects/projects"><a>this page!</a></Link>
        </h1> */}
      <Footer/>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 
          background-color: white;
            -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
