
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Footer.module.css'

const Header = () => (
    <footer className={styles.footer}>
        <a href="/public/CVJack_Burgess.pdf" download><FontAwesomeIcon className={styles.icon} icon={faGithubSquare} /></a>
        <a href="https://www.linkedin.com/in/jackcburgess/"><FontAwesomeIcon className={styles.icon} icon={faLinkedin} /></a>
        <a href="https://github.com/jackthb"><FontAwesomeIcon className={styles.icon} icon={faGithubSquare} /></a>
        <a href="https://www.twitter.com/jack_thb"><FontAwesomeIcon className={styles.icon} icon={faTwitterSquare} /></a>
    </footer>  
)

export default Header;