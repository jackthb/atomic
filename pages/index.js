import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Head from 'next/head';
import Typed from 'typed.js';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isCompMounted, setCompMonuted] = useState(false);

  useEffect(() => setCompMonuted(true), []);

  if (isCompMounted) {
    var options = {
      strings: ['Software developer and CompSci undergrad'],
      typeSpeed: 80,
      cursorChar: '_',
    };

    var typed = new Typed('.element', options);
  }

  return (
    <div className='onLoadBlock grid pt-14 px-10 place-items-center md:grid-cols-3 sm:grid-cols-3'>
      <Head>
        <title>Jack Burgess</title>
        <meta
          name='description'
          content='London-based software developer and CompSci undergrad'
        />
      </Head>
      <div className='md:row-span-3 md:col-span-2 col-span-3 font-display'>
        <h1 className='md:text-9xl text-7xl pb-24 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600'>
          Hello, I'm <br />
          Jack Burgess
        </h1>
        <p className='sm:text-4xl text-2xl font-mono'>
          <FaAngleDoubleRight className='inline mr-5' />
          keyboard enthusiast + productivity nerd
        </p>
        <p className='sm:text-4xl text-2xl font-mono'>
          <FaAngleDoubleRight className='inline mr-5' />
          <span className='element'></span>
        </p>
      </div>
      <a href='https://www.linkedin.com/in/jackcburgess/' alt='LinkedIn link'>
        <FaLinkedinIn className='icon' />
      </a>
      <a href='https://github.com/jackthb' alt='GitHub link'>
        <FaGithub className='icon' />
      </a>
      <a href='https://www.twitter.com/jack_thb' alt='Twitter link'>
        <FaTwitter className='icon' />
      </a>
    </div>
  );
}
