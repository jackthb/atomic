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
interface ProjectProps {
  projects: {
    slug: string;
    data: {
      title: string;
      date: string;
      cover_image: string;
    };
  }[];
}

export default function Projects({ projects }: ProjectProps) {
  return (
    <div className="p-5 max-w-5xl mx-auto">
      <Head>
        <title>Projects - Jack Burgess</title>
      </Head>
      <h1 className="text-5xl font-extrabold pb-8">Projects</h1>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href="/projects/[slug]"
            as={`/projects/${project.slug}`}
            legacyBehavior
          >
            <a className="items-center flex flex-col transition-all hover:underline shadow-md">
              <h1 className=" md:text-4xl w-full bg-gray-300 dark:bg-gray-700 duration-1000 flex flex-wrap flex-col p-3">
                {project.data.title}
                <img
                  className="h-60 object-cover p-3"
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
