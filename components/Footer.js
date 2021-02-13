import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => (
  <footer className='onLoadFoot opacity-0 absolute left-0 bottom-0 w-full text-center pb-2'>
    <a href='https://www.linkedin.com/in/jackcburgess/'>
      <FontAwesomeIcon className='icon' icon={faLinkedin} size='5x' />
    </a>
    <a href='https://github.com/jackthb'>
      <FontAwesomeIcon className='icon' icon={faGithubSquare} size='5x' />
    </a>
    <a href='https://www.twitter.com/jack_thb'>
      <FontAwesomeIcon className='icon' icon={faTwitterSquare} size='5x' />
    </a>
  </footer>
);

export default Footer;
