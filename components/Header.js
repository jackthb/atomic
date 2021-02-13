import Link from 'next/link';
import styled from 'styled-components';

const Header = () => (
  <header className=''>
    <div className='py-0 px-8 text-xl onLoad max-w-full m-auto h-28 flex items-center'>
      <div className='title'>
        <Link className='' href='/'>
          JACK BURGESS
        </Link>
      </div>
      <nav className='block ml-auto'>
        <Link href='/about'>
          <a className='title mr-4'>About</a>
        </Link>
        {/* <Link href="/blog">
          <a className=styles.title>
            Blog
          </a>
        </Link> */}
        <a href='mailto:jackcburgess@gmail.com' className='title'>
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
