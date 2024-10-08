import DefaultErrorPage from "next/error";
import Head from "next/head";

import matter from "gray-matter";
import fs from "fs";
import path from "path";

import markdownToHtml from "../../utils/markdownToHtml";
import urlMetadata from "url-metadata";


export default function Post({
  frontmatter: { title, excerpt, date },
  post,
}: {
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    song_link?: string;
  };
  post: string;
}) {
  if (!post) {
    return <DefaultErrorPage statusCode={404} />;
  }
  return (
    <div className="max-w-5xl p-8 mx-auto text-justify">
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="text-5xl pb-2 text-left font-heading">{title}</h1>
      <h1 className="text-1xl pb-2 text-left text-gray-500 font-subheading">{excerpt}</h1>
      <div className="flex items-center pb-2">
        <h2>{date}</h2>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: post,
        }}
        className="prose prose-sm md:prose-lg lg:prose-xl dark:prose-invert"
      ></div>
    </div>
  );
}


export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const markdownWithMeta = fs.readFileSync(
    path.join("./blog", slug + ".md"),
    "utf8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const post = await markdownToHtml(content);


  try {
    const url = frontmatter.song_link;
    const metadata = await urlMetadata(url);
    console.log(metadata);
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      frontmatter,
      slug,
      post,
    },
  };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("./blog"));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
