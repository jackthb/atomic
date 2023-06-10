import {
  FaAngleDoubleRight,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import Typing from "../components/Typing";

import Head from "next/head";

function RightArrow() {
  return <FaAngleDoubleRight className="inline mr-3" />;
}

function Links() {
  return (
    <div className="flex gap-4 my-8">
      <a
        href="https://www.linkedin.com/in/jackcburgess/"
        aria-label="Linkedin link"
      >
        <FaLinkedinIn className="text-3xl hover:text-blue-600 transition duration-300" />
      </a>
      <a href="https://github.com/jackthb" aria-label="Github link">
        <FaGithub className="text-3xl hover:text-gray-500 transition duration-300" />
      </a>
      <a href="https://www.twitter.com/jack_thb" aria-label="Twitter link">
        <FaTwitter className="text-3xl hover:text-blue-400 transition duration-300" />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto grid place-items-center h-screen">
        <Head>
          <title>Jack Burgess</title>
        </Head>
        <div className="md:p-0 p-4">
          <h1 className="text-6xl font-extrabold my-auto pb-2">
            Hello, I'm Jack Burgess
          </h1>
          <div>
            <p className="h-10 sm:text-3xl text-xl font-mono">
              <RightArrow />
              <Typing text={"software engineer and CompSci grad"} />
            </p>
            <Links />
          </div>
        </div>
      </div>
    </>
  );
}
