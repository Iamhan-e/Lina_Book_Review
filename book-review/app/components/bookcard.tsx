import Image from "next/image";
import StarRating from "./StarRating";

type BookCardProps = {
  slug: string; 
  title: string;
  author: string;
  cover: string;
  summary: string;
  bg: string; 
};

export default function BookCard({ title, author, cover, summary }: BookCardProps) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
      {/* Fixed size image like Goodreads */}
      <div className="relative w-24 h-36 flex-shrink-0">
        <Image
          src={cover}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Book info */}
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600 text-sm">by {author}</p>
        </div>
        <StarRating initial={4} />
        <p className="text-sm text-gray-700 line-clamp-3">{summary}</p>
      </div>
    </div>
  );
}
