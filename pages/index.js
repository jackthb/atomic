import Head from 'next/head'

import TempCard from '../components/TempCard'

export default function Home() {


  
  React.useEffect(() => {
    const footer = document.querySelector('.onLoadBlock')
    console.log(footer)
    // footer.style.animation="none";
  }, [])

  return (
    <div>
      <Head>
        <title>Jack Burgess</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <main>
        <TempCard />
      </main>
    </div>
  )
}