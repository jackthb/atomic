import DefaultErrorPage from "next/error";
import Head from "next/head";

import matter from "gray-matter";
import { marked } from "marked";
import fs from "fs";
import path from "path";

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("./blog", slug + ".md"),
    "utf8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}

export default function Post({ frontmatter: { title, date }, content }) {
  if (!content) {
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
      <h1 className="font-display text-6xl">{title}</h1>
      <div className="flex items-center">
        <h2>{date}</h2>
      </div>
      <div
        dangerouslySetInnerHTML={{
          __html: marked(content),
        }}
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
