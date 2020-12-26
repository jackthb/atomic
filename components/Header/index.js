import Link from 'next/link'

import styles from './Header.module.css'


import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Header = () => (
    <header>
      <div className={styles.header}>
      <div>
        <Link href="/">
          <a className={`${styles.name} ${styles.title}`}>
            JACK C. BURGESS
          </a>
        </Link>
        
        </div>
        <nav className={styles.nav}>
          <Link href="/about">
            <a className={styles.title}>
              About
            </a>
          </Link>
          <Link href="/404">
            <a className={styles.title}>
              Contact
            </a>
          </Link>
        </nav>
        
          <a href="https://www.linkedin.com/in/jackcburgess/"><FontAwesomeIcon className={styles.li, styles.icon} icon={faLinkedin} size='5x'/></a>
          <a href="https://github.com/jackthb"><FontAwesomeIcon className={styles.gh, styles.icon} icon={faGithubSquare} size='5x'/></a>
      </div>
    </header>
  )

export default Header;