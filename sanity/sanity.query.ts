
import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getAuthor() {
    return client.fetch(
        groq`*[_type == "author"]{
            _id,
            name,
            slug,
            image {alt, "image": asset->url},
            bio,
          }`
    );
}


export async function getPosts() {
    return client.fetch(postsQuery)
}

export async function getPost(slug: string) {
    return client.fetch(postQuery, { slug })
}
export async function getPostPaths() {
    return client.fetch(postPathsQuery)
}

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    _id, title, slug
  }`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
    title, mainImage, body
  }`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;