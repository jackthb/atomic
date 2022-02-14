import { FaAngleDoubleRight } from "react-icons/fa";

import Footer from "../components/Footer";

import Typing from "../components/Typing";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="max-w-5xl mx-auto grid grid-cols-3 grid-rows-2 place-items-center h-full">
        <Head>
          <title>Jack Burgess</title>
        </Head>
        <div className="col-span-3 md:p-0 p-4">
          <h1 className="text-6xl font-display gradientText my-auto pb-2">
            Hello, I'm Jack Burgess
          </h1>
          <div>
            <p className="sm:text-3xl text-xl font-mono">
              <FaAngleDoubleRight className="inline mr-3" />
              keyboard enthusiast + productivity nerd
            </p>
            <p className="h-10 sm:text-3xl text-xl font-mono">
              <FaAngleDoubleRight className="inline mr-3" />
              <Typing text={"software engineer and CompSci grad"} />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
