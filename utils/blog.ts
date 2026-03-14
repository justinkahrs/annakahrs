import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIRECTORY = path.join(process.cwd(), "content/blog");

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image?: string;
  category?: string;
}

export async function getBlogPosts(): Promise<PostMetadata[]> {
  if (!fs.existsSync(BLOG_DIRECTORY)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIRECTORY);
  const posts = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(BLOG_DIRECTORY, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        ...data,
        slug: file.replace(/\.mdx?$/, ""),
      } as PostMetadata;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getBlogPost(slug: string) {
  const mdPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
  const mdxPath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
  
  let filePath = "";
  if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    metadata: {
      ...data,
      slug,
    } as PostMetadata,
    content,
  };
}
