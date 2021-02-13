import { FaAngleDoubleRight } from 'react-icons/fa';

import styled from 'styled-components';
import Head from 'next/head';

const BlinkStyle = styled.span`
  animation: blinker 1s step-start infinite;
  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
export default function TempCard() {
  React.useEffect(() => {
    // const footer = document.querySelector('div');
    // console.log(div);
    // footer.classList.remove('onLoadFoot');
    // window.localStorage.setItem('animcomp', 1);
    // console.log(window.localStorage);
  }, []);
  return (
    <div className='m-40'>
      <Head>
        <title>Jack Burgess</title>
      </Head>
      <div className='font-display'>
        <h3 className='text-5xl'>Hi, I'm</h3>
        <h1 className='text-9xl'>Jack Burgess</h1>
      </div>
      <p className='text-4xl py-32 font-mono'>
        <FaAngleDoubleRight className='inline ' /> software developer and
        keyboard enthusiast<BlinkStyle>_</BlinkStyle>
      </p>
    </div>
  );
}
