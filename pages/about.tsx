import { GetStaticProps } from "next";
import Head from "next/head";
import Book, { IBookProps } from "../components/Book";
import { fetchGoodReads } from "./api/book";

export default function About({ book }: { book: IBookProps }) {
  return (
    <div>
      <Head>
        <title>About - Jack Burgess</title>
      </Head>
      <article className="max-w-5xl mx-auto p-5 mb-5 text-2xl">
        <h1 className="text-5xl pb-9 text-center font-display gradientText">
          About me
        </h1>
        <p className="pb-9">
          I'm a London-based software developer, currently working full-time
          helping candidates find fulfilment at{" "}
          <a className="transition duration-300 hover:text-yellow-500" href="https://www.otta.com">
            Otta.com
          </a>
          . I graduated with a First Class in Computer Science at Queen Mary
          University of London. I spend most of my free time working on <a
            className="bg-clip-text hover:text-transparent bg-gradient-to-r from-blue-300 to-blue-600 transition duration-300"
            href="https://www.sien.vision"
          >sien.vision</a>.
        </p>
        <p>
          You can see what I'm currently reading below - <a
            className="bg-clip-text hover:text-transparent bg-gradient-to-r from-yellow-600 to-red-600 transition duration-300 rounded"
            href="https://www.goodreads.com/user/show/55118887-jack-burgess"
          >feel free to send me
          any recommendations!</a>
        </p>
      </article>
      <Book book={book} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { title, author, image } = await fetchGoodReads();

  return {
    props: {
      book: {
        title,
        author,
        image,
      },
    },
    revalidate: 120,
  };
};
