import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

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
    <main className="min-h-screen p-6 bg-offWhite">
      <h1 className="text-4xl font-bold text-tealDark mb-4">
        Book Summary & Review Blog
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Link
            key={book.slug}
            href={`/books/${book.slug}`}
            className="block p-6 rounded shadow hover:shadow-lg transition bg-yellowSoft no-underline"
          >
            <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
              {book.cover && (
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <h2 className="text-tealDark font-semibold text-xl mb-2">
              {book.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
