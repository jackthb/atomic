import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className='onLoadFoot bottom-0 text-5xl flex align-bottom items-center justify-around '>
    <a href='https://www.linkedin.com/in/jackcburgess/'>
      <FaLinkedinIn className='icon' />
    </a>
    <a href='https://github.com/jackthb'>
      <FaGithub className='icon' />
    </a>
    <a href='https://www.twitter.com/jack_thb'>
      <FaTwitter className='icon' />
    </a>
  </footer>
);

export default Footer;
