import { FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => (
  <div className='md:absolute bottom-0 w-full pb-5'>
    <footer className='onLoadFoot text-5xl flex items-center justify-around '>
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
  </div>
);

export default Footer;
