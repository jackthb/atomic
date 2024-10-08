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
    path.join("./projects", slug + ".md"),
    "utf8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const project = await markdownToHtml(content);

  return {
    props: {
      frontmatter,
      slug,
      project,
    },
  };
}

export default function Project({
  frontmatter: { title, date },
  project,
}: {
  frontmatter: {
    title: string;
    date: string;
  };
  project: string;
}) {

  if (!project) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <div className="max-w-5xl p-8 mx-auto text-justify">
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="text-6xl pb-2">{title}</h1>
      <div className="flex items-center pb-2">
        <h2>{date}</h2>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: project,
        }}
        className="prose prose-sm md:prose-lg lg:prose-xl dark:prose-invert"
      ></div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("./projects"));

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


type ProjectType = {
  title: string;
  date: string;
  end_date: string;
  excerpt: string;
  cover_image: string;
  hidden?: boolean;
};