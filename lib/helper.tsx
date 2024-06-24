import matter from "gray-matter";
import path from "path";
import fs from "fs";

export async function fetchMdx(mdxPath: string) {
  const files = fs.readdirSync(path.join(mdxPath));

  return files.map((file) => {
    const slug = file.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join(mdxPath, file), "utf8");

    const { data } = matter(markdownWithMeta);
    return {
      slug,
      data,
    };
  }).filter((post) => !post.data.hidden);

}