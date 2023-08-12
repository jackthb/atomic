import Link from "next/link";
import Head from "next/head";
import { getPosts } from "../../sanity/sanity.query";

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
}

interface PostProps {
  posts: Array<any>
};

export default function Blog({ posts }: PostProps) {


  console.log(posts)
  return (
    <div className="p-5 max-w-5xl w-full mx-auto">
      <Head>
        <title>Blog - Jack Burgess</title>
      </Head>
      <h1 className="text-5xl font-extrabold pb-8 w-full">Blog</h1>
      {posts.map((post) => (
        <Link
          key={post.slug.current}
          href="/blog/[slug]"
          as={`/blog/${post.slug.current}`}
          legacyBehavior
        >
          <a className="w-full hover:underline rounded flex items-center justify-between border-b-2 border-t-2 p-4 border-black dark:border-white">
            <h1 className="text-2xl">{post.title}</h1>
            <p>{post.date}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
