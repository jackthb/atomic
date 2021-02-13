//   React.useEffect(() => {
//     const footer = document.querySelector('div')
//     console.log(div)
//     footer.classList.remove("onLoadFoot");
//   }, [])

// import { FaAngleDoubleRight } from '@fortawesome/fontawesome-common-types';
import { FaAngleDoubleRight } from 'react-icons/fa';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';
import styled from 'styled-components';

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
      <h3 className='text-3xl'>Hi, I'm</h3>
      <h1 className='text-7xl'>Jack Burgess</h1>
      <p className='text-4xl py-32'>
        <Link href='/about'>
          <a>
            <FaAngleDoubleRight className='inline' /> software developer and
            keyboard enthusiast<BlinkStyle>_</BlinkStyle>
          </a>
        </Link>
      </p>
    </div>
  );
}
