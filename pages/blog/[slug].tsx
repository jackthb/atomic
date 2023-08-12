import DefaultErrorPage from "next/error";
import Head from "next/head";

import matter from "gray-matter";
import fs from "fs";
import path from "path";

import markdownToHtml from "../../utils/markdownToHtml";
import { getPost, getPostPaths } from "../../sanity/sanity.query";

import { PortableText } from "@portabletext/react";

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {

  const post = await getPost(slug)


  return {
    props: {
      slug,
      post,
    },
  };
}

export default function Post({
  post,
}: any) {
  if (!post) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <div className="max-w-5xl p-8 mx-auto text-justify">
      <Head>
        <title>{post.title}</title>
      </Head>
      <h1 className="text-5xl pb-2 text-left">{post.title}</h1>
      <div className="flex items-center pb-2">
        <h2>{post.publishedAt}</h2>
      </div>
      <PortableText value={post.body} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await getPostPaths()

  return {
    paths,
    fallback: false,
  };
}
