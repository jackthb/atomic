import Link from 'next/link'

import styles from './Header.module.css'

const Header = () => (
    <header>
      <div className={styles.header}>
      <div>
        <Link href="/">
          <a className={styles.title}>
            JACK BURGESS
          </a>
        </Link>
        
        </div>
        <nav className={styles.nav}>
          <Link href="/404/notFound">
            <a className={styles.title}>
              About
            </a>
          </Link>
          <Link href="/404/notFound">
            <a className={styles.title}>
              Contact
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )

export default Header;