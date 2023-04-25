import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("./projects"));

  const projects = files.map((file) => {
    const slug = file.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("./projects", file),
      "utf8"
    );

    const { data } = matter(markdownWithMeta);
    return {
      slug,
      data,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
interface IProjectProps {
  projects: {
    slug: string;
    data: {
      title: string;
      date: string;
      cover_image: string;
    };
  }[];
}

export default function Projects({ projects }: IProjectProps) {
  return (
    <div className="p-5 max-w-5xl mx-auto">
      <Head>
        <title>Projects - Jack Burgess</title>
      </Head>
      <h1 className="text-7xl font-extrabold pb-2">My Projects</h1>
      <div className="grid grid-cols-2 py-4 gap-8 m-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href="/projects/[slug]"
            as={`/projects/${project.slug}`}
            legacyBehavior
          >
            <a className="items-center flex flex-col transition-all hover:underline">
              <h1 className=" md:text-4xl w-full bg-gray-300 dark:bg-gray-700 text-center items rounded-t-lg duration-1000 flex flex-wrap flex-col">
                {project.data.title}
                <img
                  className="h-60 rounded-t-xl border-2 object-cover"
                  src={project.data.cover_image}
                />
              </h1>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
