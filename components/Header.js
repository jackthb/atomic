import Link from 'next/link';

// import styles from './Header.module.css';

const Header = () => (
  <header className=''>
    <div className='py-0 px-5 text-xl onLoad max-w-full m-auto h-28 flex items-center'>
      <div className='title'>
        <Link className='' href='/'>
          JACK BURGESS
        </Link>
      </div>
      <nav className='block ml-auto mr-5'>
        <Link href='/about'>About</Link>
        {/* <Link href="/blog">
          <a className={styles.title}>
            Blog
          </a>
        </Link> */}
        <a href='mailto:jackcburgess@gmail.com' className=''>
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
