import Link from 'next/link';

const NOTION_BLOG_ID = '7dfb352f5149425f8f0e8f5a9254df2a';

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
        <Link key={post.slug} href='/blog/[slug]' as={`/blog/${post.slug}`}>
          <div>{post.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;