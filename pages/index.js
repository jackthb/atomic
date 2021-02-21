import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Head from 'next/head';
import Typed from 'typed.js';
import { useEffect, useState } from 'react';
import ImageComponent from '../components/ImageComponent';
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
    <div className=' onLoadBlock grid pt-14 px-10 place-items-center grid-cols-3'>
      <Head>
        <title>Jack Burgess</title>
      </Head>
      <div className='row-span-3 col-span-2 font-display'>
        <h3 className='text-3xl'></h3>
        <h1 className='text-9xl pb-24 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600'>
          Hello, I'm <br />
          Jack Burgess
        </h1>
        <p className='text-4xl font-mono'>
          <FaAngleDoubleRight className='inline mr-5' />
          keyboard enthusiast + productivity nerd
        </p>
        <p className='text-4xl font-mono'>
          <FaAngleDoubleRight className='inline mr-5' />
          <span className='element'></span>
        </p>
      </div>
      <a href='https://www.linkedin.com/in/jackcburgess/'>
        <FaLinkedinIn className='icon' />
      </a>
      <a href='https://github.com/jackthb'>
        <FaGithub className='icon' />
      </a>
      <a href='https://www.twitter.com/jack_thb'>
        <FaTwitter className='icon' />
      </a>
    </div>
  );
}
