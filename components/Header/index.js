import Link from 'next/link'

import styles from './Header.module.css'

const Header = () => (
    <header className='text-xl onLoad'>
      <div className={`${styles.header}`}>
      <div>
        <Link href="/">
          <a className={styles.title}>
            JACK BURGESS
          </a>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/about">
          <a className={styles.title}>
            About
          </a>
        </Link>
        <a href='mailto:jackcburgess@gmail.com' className={styles.title}>
          Contact
        </a>
      </nav>
    </div>
  </header>
)

export default Header;