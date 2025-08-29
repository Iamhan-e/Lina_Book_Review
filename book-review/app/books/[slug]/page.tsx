import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import StarRating from "../../components/StarRating";
import { ArrowLeft } from "lucide-react";

type PageProps = {
  params: { slug: string };
};

export default function BookPage({ params }: PageProps) {
  // Make sure this file is a SERVER COMPONENT (no "use client" here)
  const slug = params.slug;

  const filePath = path.join(process.cwd(), "content/books", `${slug}.md`);
  if (!fs.existsSync(filePath)) return <p>Book not found.</p>;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const book = {
    slug,
    title: data.title ?? "Untitled",
    author: data.author ?? "Unknown",
    summary: data.summary ?? "No summary available",
    cover: data.cover ?? "/placeholder.jpg",
    review: content ?? "",
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center mb-4 text-gray-700 hover:text-gray-900">
        <ArrowLeft className="w-6 h-6" />
      </Link>

      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
      <p className="text-gray-600 mb-4">{book.author}</p>

      <div className="flex gap-6 mb-6">
        {/* Cover */}
        <div className="relative w-40 h-60 flex-shrink-0">
          <Image src={book.cover} alt={book.title} fill className="object-cover rounded-md" />
        </div>

        {/* Summary + Stars */}
        <div>
          <p className="text-gray-700 mb-4">{book.summary}</p>
          <StarRating initial={4} />
        </div>
      </div>

      {/* Review Section */}
      {book.review && (
        <div className="prose prose-md max-w-full">
          <ReactMarkdown>{book.review}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}
