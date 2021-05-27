import { NotionRenderer } from "react-notion";
import { getAllPosts } from ".";
import DefaultErrorPage from "next/error";
import Head from "next/head";

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);
  const blocks = await fetch(
    `https://notion-worker.jackcburgess.workers.dev/v1/page/${post.id}`
  ).then((res) => res.json());
  return {
    props: {
      blocks,
      post,
    },
    revalidate: 1,
  };
}

const getPost = ({ post, blocks }) => {
  if (!post) {
    return <DefaultErrorPage statusCode={404} />;
  }
  return (
    <div className="max-w-3xl p-8 mx-auto text-justify">
      <Head>
        <title>{post.title}</title>
        <meta
          name="description"
          content="London-based software developer and CompSci undergrad"
        />
      </Head>
      <h1 className="font-display text-6xl">{post.title}</h1>
      {/* AUTHOR */}
      <div className="flex items-center">
        <img
          className="w-14 h-14"
          src={post.author[0].profilePhoto}
          style={{ clipPath: "circle(30%)" }}
        />
        <h3>
          By <strong>{post.author[0].fullName}</strong>
        </h3>
        <h2 className="pl-2">{dateFormat(post.date)}</h2>
      </div>
      <NotionRenderer blockMap={blocks} />
    </div>
  );
};
export default getPost;

// make date look nice ... and not mm/dd
const dateFormat = (date) => {
  let d = new Date(date).toLocaleDateString("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return d;
};

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/projects/${row.slug}`),
    fallback: true,
  };
}
