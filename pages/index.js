import { FaAngleDoubleRight } from 'react-icons/fa';

import Head from 'next/head';
import Typed from 'typed.js';
import { useEffect, useState } from 'react';
export default function Home() {
  const [isCompMounted, setCompMonuted] = useState(false);

  useEffect(() => setCompMonuted(true), []);

  if (isCompMounted) {
    var options = {
      strings: ['software developer and keyboard enthusiast'],
      typeSpeed: 80,
      cursorChar: '_',
    };

    var typed = new Typed('.element', options);
  }

  return (
    <div className='onLoadBlock md:m-40 sm:m-20 m-10'>
      <Head>
        <title>Jack Burgess</title>
      </Head>
      <div className='font-display '>
        <h3 className='md:text-5xl sm:text-3xl text-2xl'>Hi, I'm</h3>
        <h1 className='md:text-9xl sm:text-7xl text-5xl'>Jack Burgess</h1>
      </div>
      <div className='text-4xl py-32 font-mono'>
        <p>
          <FaAngleDoubleRight className='inline mr-5' />
          <span className='element'></span>
        </p>
      </div>
    </div>
  );
}
