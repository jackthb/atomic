import { NotionRenderer } from 'react-notion';
import { getAllPosts } from '.';

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

const getPost = ({ post, blocks }) => {
  if (!post) return null;
  return (
    <div className='max-w-3xl p-8 mx-auto text-justify'>
      <h1 className='font-display text-6xl'>{post.title}</h1>
      <h2 className=''>{dateFormat(post.date)}</h2>
      <NotionRenderer blockMap={blocks} />
    </div>
  );
};
export default getPost;

// make date look nice ... and not mm/dd
const dateFormat = (date) => {
  let d = new Date(date).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
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
