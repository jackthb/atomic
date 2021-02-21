import Link from 'next/link';
const NOTION_BLOG_ID =
  '7520df31ba244264ab074da9129a0fc5' || process.env.NOTION_BLOG_ID;

export const getAllPosts = async () => {
  return await fetch(
    `https://notion-worker.jackcburgess.workers.dev/v1/table/${NOTION_BLOG_ID}`
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
            <a className='items-center flex flex-col '>
              <h1 className=' md:text-4xl w-full bg-gray-300 text-center title rounded-t-lg duration-1000 flex flex-wrap flex-col'>
                {post.title}
                <img
                  className='h-60 border-yellow-400 rounded-t-xl border-2'
                  src={post.imageURL}
                  style={{ objectFit: 'cover' }}
                />
              </h1>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
