import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <header>
      <div className='py-0 px-5 text-xl onLoad max-w-full m-auto h-28 flex items-center font-display'>
        <div className={`${router.pathname == '/' ? 'active' : ''} title`}>
          <Link className='' href='/'>
            JACK BURGESS
          </Link>
        </div>
        <nav className='block ml-auto'>
          <Link href='/about'>
            <a
              className={`${
                router.pathname == '/about' ? 'about' : ''
              } title mr-4`}
            >
              About
            </a>
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
}
