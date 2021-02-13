//   React.useEffect(() => {
//     const footer = document.querySelector('div')
//     console.log(div)
//     footer.classList.remove("onLoadFoot");
//   }, [])

import { FaAngleDoubleRight } from 'react-icons/fa';

import Link from 'next/link';
import styled from 'styled-components';
import Head from 'next/head';

const BlinkStyle = styled.span`
  transform: scaleY(5);
  animation: blinker 1s step-start infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export default function TempCard() {
  return (
    <div className='m-40'>
      <Head>
        <title>Home - Jack Burgess</title>
      </Head>
      <div className='font-display'>
        <h3 className='text-5xl'>Hi, I'm</h3>
        <h1 className='text-9xl'>Jack Burgess</h1>
      </div>
      <p className='text-4xl py-32'>
        <Link className='about' href='/about'>
          <a className='font-mono'>
            <FaAngleDoubleRight className='inline' /> software developer and
            keyboard enthusiast<BlinkStyle>_</BlinkStyle>
          </a>
        </Link>
      </p>
    </div>
  );
}
