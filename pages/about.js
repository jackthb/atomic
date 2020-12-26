import Head from 'next/head'

export default function About() {

  return (
    <div className="">
    <Head>
        <title>About - Jack Burgess</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    </Head>
      <main>
        <article className='p-5 mx-auto'>
            <section className='text-2xl'>
                <h1 className='text-5xl pb-5 text-center'>About me</h1>
                <p className='pb-3'>
                Hello! I'm a London-based software developer, currently in my final year of undergraduate Computer Science at Queen Mary University of London. In my free time I am always looking to push myself, and love building functional software and collaborating with others.
                </p>
                <p className='pb-3'>
                At university, I'm working on my final year project, Big Data, Data Mining, and Computer Graphics.
                </p>
                <p className='pb-3'>
                Away from my desk, you may find me at the gym, reading books on Psychology and self-help, and/or going for ridiculously long walks.
                </p>
            </section>
        </article>
      </main>
    </div>
  )
}
