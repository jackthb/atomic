import Link from "next/link";
import Head from "next/head";
import { fetchMdx } from "../../lib/helper";


export async function getStaticProps() {
  const posts = await fetchMdx("./blog");
  return {
    props: {
      posts,
    },
  };
}

interface IPostProps {
  posts: {
    slug: string;
    data: {
      title: string;
      date: string;
      cover_image: string;
    };
  }[];
}

export default function Blog({ posts }: IPostProps) {
  return (
    <div className="p-5 max-w-5xl w-full mx-auto">
      <Head>
        <title>Blog - Jack Burgess</title>
      </Head>
      <h1 className="text-5xl font-extrabold pb-8 w-full">Blog</h1>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href="/blog/[slug]"
          as={`/blog/${post.slug}`}
          legacyBehavior
        >
          <a className="w-full hover:underline rounded flex items-center justify-between border-b-2 border-t-2 p-4 border-black dark:border-white">
            <h1 className="text-2xl">{post.data.title}</h1>
            <p>{post.data.date}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
