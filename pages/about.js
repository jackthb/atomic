import Head from "next/head";
import Book from "../components/Book";
import { fetchGoodReads } from "./api/book";

export default function About({ book }) {
	return (
		<div>
			<Head>
				<title>About - Jack Burgess</title>
				<meta
					name="description"
					content="London-based software developer and CompSci undergrad"
				/>
			</Head>
			<article className="max-w-5xl mx-auto p-5 text-2xl">
				<h1 className="text-5xl pb-9 text-center font-display gradientText">
					About me
				</h1>
				<p className="pb-9">
					I'm a London-based software developer, currently in my final year of
					undergraduate Computer Science at Queen Mary University of London. In
					my free time I am always looking to push myself, and love building
					functional software and collaborating with others. Learning has
					consumed a huge portion of my life, and I have no intention of
					stopping now.
				</p>
				<p className="pb-9">
					At university, I'm working on my final year project, Artificial
					Intelligence, Product Development, and Digital Media and Social
					Networks.
				</p>
				<p className="pb-9">
					Away from my desk, you may find me at the gym,{" "}
					<a
						className="bg-clip-text hover:text-transparent bg-gradient-to-r from-yellow-600 to-red-600 transition duration-300 rounded "
						href="https://www.goodreads.com/user/show/55118887-jack-burgess"
					>
						reading books
					</a>{" "}
					about Psychology, Philosophy and self-help, and/or going for long
					walks.
				</p>
			</article>
			<Book book={book} />
		</div>
	);
}

export async function getStaticProps(context) {
	const { data, err } = await fetchGoodReads();

	if (err) {
		return {
			props: {
				err,
			},
		};
	}

	return {
		props: {
			book: {
				title: data.title,
				author: data.author,
				image: data.image,
			},
		},
		revalidate: 120,
	};
}
