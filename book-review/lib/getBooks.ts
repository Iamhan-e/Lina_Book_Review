import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BookData = {
  slug: string;
  title: string;
  author: string;
  summary: string;
  cover: string;
};

export function getAllBooks(): BookData[] {
  const files = fs.readdirSync(path.join(process.cwd(), "content/books"));

  return files.map((file) => {
    const filePath = path.join(process.cwd(), "content/books", file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);

    return {
      slug: file.replace(".md", ""),
      title: data.title ?? "Untitled",
      author: data.author ?? "Unknown",
      summary: data.summary ?? "No summary available",
      cover: data.cover ?? "/placeholder.jpg",
    };
  });
}
