import { useRouter } from "next/router";
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaAngleDoubleRight,
} from "react-icons/fa";

export default function Header() {
  return (
    <footer className="flex mt-auto p-4 mx-auto min-w-full justify-evenly">
      <a href="https://www.linkedin.com/in/jackcburgess/" alt="LinkedIn link">
        <FaLinkedinIn className="icon" />
      </a>
      <a href="https://github.com/jackthb" alt="GitHub link">
        <FaGithub className="icon" />
      </a>
      <a href="https://www.twitter.com/jack_thb" alt="Twitter link">
        <FaTwitter className="icon" />
      </a>
    </footer>
  );
}
