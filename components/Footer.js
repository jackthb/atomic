import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <footer className='flex h-20 pt-4 pl-4 justify-around onLoadFoot text-5xl'>
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
