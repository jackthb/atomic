import Link from 'next/link';

const NOTION_BLOG_ID = '7520df31ba244264ab074da9129a0fc5';

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

function HomePage({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href='/projects/[slug]'
          as={`/projects/${post.slug}`}
        >
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
