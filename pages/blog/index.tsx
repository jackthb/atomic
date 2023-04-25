import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("./blog"));

  const posts = files.map((file) => {
    const slug = file.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("./blog", file), "utf8");

    const { data } = matter(markdownWithMeta);
    return {
      slug,
      data,
    };
  });

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
        <title>Projects - Jack Burgess</title>
      </Head>
      <h1 className="text-7xl font-extrabold pb-3 w-full">Blog</h1>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href="/blog/[slug]"
          as={`/blog/${post.slug}`}
          legacyBehavior
        >
          <a className="w-full hover:underline dark:hover:bg-slate-700 rounded flex items-center justify-between border-b-2 p-4 pb-2 border-black">
            <h1 className="text-2xl">{post.data.title}</h1>
            <p>{post.data.date}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
