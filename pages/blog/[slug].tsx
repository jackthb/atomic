import DefaultErrorPage from "next/error";
import Head from "next/head";

import matter from "gray-matter";
import fs from "fs";
import path from "path";

import markdownToHtml from "../../utils/markdownToHtml";

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

  return {
    props: {
      frontmatter,
      slug,
      post,
    },
  };
}

export default function Post({
  frontmatter: { title, date },
  post,
}: {
  frontmatter: {
    title: string;
    date: string;
  };
  post: string;
}) {
  if (!post) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <div className="max-w-3xl p-8 mx-auto text-justify">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="London-based software developer and CompSci undergrad"
        />
      </Head>
      <h1 className="font-display text-5xl pb-2 text-left">{title}</h1>
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
