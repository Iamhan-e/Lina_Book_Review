import BookCard from "../app/components/bookcard";
import { getAllBooks } from "../lib/getBooks";

export default function Page() {
  const books = getAllBooks();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">My Book Reviews</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((b, i) => (
          <BookCard
            key={b.slug}
            slug={b.slug}
            title={b.title}
            author={b.author}
            summary={b.summary}
            cover={b.cover}
            bg={i % 3 === 0 ? "bg-[#e9ecef]" : i % 3 === 1 ? "bg-[#dee2e6]" : "bg-[#d9d9d9]"}
          />
        ))}
      </div>
    </div>
  );
}
