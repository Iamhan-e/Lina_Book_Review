import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BookData {
  title: string;
  cover?: string;
  author?: string;
}

interface PageProps {
  params: { slug: string };
}

export default async function BookPage({ params }: PageProps) {
  const slug = params.slug;
  const filePath = path.join(process.cwd(), "content/books", `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (!data.title) return notFound();

  const bookData: BookData = {
    title: data.title,
    cover: data.cover,
    author: data.author,
  };

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <main className="min-h-screen p-6 bg-offWhite">
      <h1 className="text-4xl font-bold text-tealDark mb-4">{bookData.title}</h1>
      {bookData.cover && (
        <div className="relative w-full h-64 mb-6 rounded overflow-hidden">
          <Image src={bookData.cover} alt={bookData.title} fill className="object-cover" />
        </div>
      )}
      <div className="prose prose-tealDark" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </main>
  );
}
