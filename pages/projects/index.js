import Link from 'next/link';

const NOTION_BLOG_ID =
  '7520df31ba244264ab074da9129a0fc5' || process.env.NOTION_BLOG_ID;

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
    <div className='p-4 '>
      <h1 className='font-display text-7xl'>My Projects</h1>
      <div className='grid grid-cols-2 py-4 gap-4 '>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href='/projects/[slug]'
            as={`/projects/${post.slug}`}
          >
            <a className=''>
              <h1 className='md:text-4xl bg-gray-300 text-center py-5 title rounded-t-lg duration-1000'>
                {post.title}
              </h1>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
