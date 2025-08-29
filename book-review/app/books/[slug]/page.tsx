import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";


type BookData = {
  slug: string;
  title: string;
  author: string;
  summary: string;
  cover: string;
};
interface PageProps {
  params: { slug: string };
}

export default async function BookPage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/books", `${slug}.md`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (!data.title) return notFound();

  const bookData: BookData = {
    title: data.title,
    cover: data.cover,
    author: data.author,
    slug: data.slug,
    summary: data.summary,
  };

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
  <main className="min-h-screen p-6">
    <Link href="/" className="inline-block mb-4 px-4 py-2 bg-tealDark text-offWhite rounded hover:bg-turquoise no-underline">← Back to Home</Link>

    <h1 className="text-4xl font-bold text-tealDark mb-4">{bookData.title}</h1>
    {bookData.author && <p className="text-sm text-tealDark mb-4">by {bookData.author}</p>}

    {bookData.cover && (
      <div className="relative w-full max-w-2xl h-72 mb-6 rounded overflow-hidden">
        <Image src={bookData.cover} alt={bookData.title} fill className="object-cover rounded" />
      </div>
    )}

    <article className="prose lg:prose-xl">
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  </main>
)

}
