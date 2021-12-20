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
        <meta
          name="description"
          content="London-based software developer and CompSci undergrad"
        />
      </Head>
      <h1 className="font-display text-7xl gradientText pb-3 w-full">Blog</h1>
      {posts.map((post) => (
        <Link key={post.slug} href="/blog/[slug]" as={`/blog/${post.slug}`}>
          <a className="w-full hover:bg-slate-50 rounded flex items-center justify-between border-b-2 p-4 pb-2 border-black">
            <h1 className="text-2xl">{post.data.title}</h1>
            <p className="hover: no-underline">{post.data.date}</p>
          </a>
        </Link>
      ))}
    </div>
  );
}
