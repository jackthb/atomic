import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <footer className="flex mt-auto p-4 mx-auto min-w-full justify-evenly">
      <a href="https://www.linkedin.com/in/jackcburgess/">
        <FaLinkedinIn className="icon" />
      </a>
      <a href="https://github.com/jackthb">
        <FaGithub className="icon" />
      </a>
      <a href="https://www.twitter.com/jack_thb">
        <FaTwitter className="icon" />
      </a>
    </footer>
  );
}
