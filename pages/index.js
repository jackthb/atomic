import {
	FaTwitter,
	FaGithub,
	FaLinkedinIn,
	FaAngleDoubleRight,
} from "react-icons/fa";

import Typing from "../components/Typing";

import Head from "next/head";
import Link from "next/link";

export default function Home() {
	return (
		<div className="max-w-5xl mx-auto grid grid-cols-3 grid-rows-2 place-items-center h-full">
			<Head>
				<title>Jack Burgess</title>
				<meta
					name="description"
					content="London-based software developer and CompSci undergrad"
				/>
			</Head>
			<div className="col-span-3">
				{/* <Canvas draw={draw} /> */}
				<h1 className="text-6xl font-display gradientText my-auto pb-2">
					Hello, I'm Jack Burgess
				</h1>
				<p className="text-3xl font-mono">
					<FaAngleDoubleRight className="inline mr-3" />
					keyboard enthusiast + productivity nerd
				</p>
				<p className="text-3xl font-mono h-10">
					<FaAngleDoubleRight className="inline mr-3" />
					<Typing text={"Software developer and CompSci undergrad"} />
				</p>
			</div>
			<a href="https://www.linkedin.com/in/jackcburgess/" alt="LinkedIn link">
				<FaLinkedinIn className="icon" />
			</a>
			<a href="https://github.com/jackthb" alt="GitHub link">
				<FaGithub className="icon" />
			</a>
			<a href="https://www.twitter.com/jack_thb" alt="Twitter link">
				<FaTwitter className="icon" />
			</a>
		</div>
	);
}
