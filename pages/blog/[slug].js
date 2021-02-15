import { NotionRenderer } from 'react-notion';
import styled from 'styled-components';
import { getAllPosts } from '../../components/NotionFunctions.js';

const BlogStyle = styled.div`
  margin: 4em;
  max-width: 768;
`;

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);
  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  return {
    props: {
      blocks,
      post,
    },
  };
}

const getPost = ({ post, blocks }) => (
  <BlogStyle>
    <h1>{post.title}</h1>
    <NotionRenderer blockMap={blocks} />
  </BlogStyle>
);
export default getPost;

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/blog/${row.slug}`),
    fallback: true,
  };
}
