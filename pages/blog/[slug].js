import { NotionRenderer } from "react-notion";
import { getAllPosts } from './'

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);
  const blocks = await fetch(`https://notion-api.splitbee.io/v1/page/${post.id}`).then((res) => res.json());
  
  return {
    props: {
     blocks,
     post,
    },
  };
}

const getPost = ({ post, blocks }) => (
  <div style={{ maxWidth: 768 }}>
    <h1>{post.title}</h1>
    <NotionRenderer blockMap={blocks} />
  </div>
);
export default getPost;
export async function getStaticPaths() {
    const posts = await getAllPosts();
    return {
      paths: posts.map((row) => `/blog/${row.slug}`),
      fallback: true,
    };
  }