import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Jack Burgess</title>
        <meta
          name='description'
          content='London-based software developer and CompSci undergrad'
        />
      </Head>
      <article className='p-5 md:mx-40 sm:mx-20 text-2xl'>
        <h1 className='text-5xl pb-9 text-center'>About me</h1>
        <p className='pb-9'>
          I'm a London-based software developer, currently in my final year of
          undergraduate Computer Science at Queen Mary University of London. In
          my free time I am always looking to push myself, and love building
          functional software and collaborating with others. 
          Learning has consumed a huge portion of my life, and I have no intention of stopping now.
        </p>
        <p className='pb-9'>
          At university, I'm working on my final year project, Artificial
          Intelligence, Product Development, and Digital Media and Social
          Networks.
        </p>
        <p className='pb-9'>
          Away from my desk, you may find me at the gym, <a className='hover:bg-yellow-400 transition rounded ' href='https://www.goodreads.com/user/show/55118887-jack-burgess'>reading books</a> on
          Psychology and self-help, and/or going for ridiculously long walks.
        </p>
      </article>
    </div>
  );
}
