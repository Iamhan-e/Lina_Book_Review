import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import Bookcard from "../app/components/bookcard";

// 1. Define your book type
interface Book {
  slug: string;
  title: string;
  cover?: string;
  author?: string;
}

export default function Home() {
  // 2. Read all markdown files
  const booksDir = path.join(process.cwd(), "content/books");
  const files = fs.readdirSync(booksDir);

  // 3. Parse frontmatter and map to Book[]
  const books: Book[] = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(booksDir, filename), "utf-8");
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
      cover: data.cover,
      author: data.author,
    };
  });

 return (
  <main className="min-h-screen p-6">
    <h1 className="text-4xl font-bold text-tealDark mb-4">Book Summary & Review Blog</h1>
    <p className="text-tealDark mb-8">Summaries & reviews of recent books.</p>

    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {books.map((b, i) => (
        <Bookcard
          key={b.slug}
          slug={b.slug}
          title={b.title}
          cover={b.cover}
          bg={i % 3 === 0 ? "bg-yellowSoft" : i % 3 === 1 ? "bg-redCoral" : "bg-turquoise"}
        />
      ))}
    </div>
  </main>
);
}
