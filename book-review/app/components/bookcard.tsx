import Image from "next/image";
import Link from "next/link";
import StarRating from "./StarRating";

type BookCardProps = {
  slug: string;
  title: string;
  author: string;
  summary: string;
  cover: string;
  bg: string;
};

export default function BookCard({ slug, title, author, summary, cover, bg }: BookCardProps) {
  return (
    <Link href={`/books/${slug}`} className={`${bg} flex gap-4 p-4 rounded-2xl shadow hover:shadow-lg transition`}>
      {/* Book Cover */}
      <div className="relative w-24 h-35 flex-shrink-0">
        <Image src={cover} alt={title} fill className="object-cover rounded-md" />
      </div>

      {/* Book Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600 text-sm">{author}</p>
          <p className="text-gray-700 text-sm line-clamp-3 mt-1">{summary}</p>
        </div>

        

        <StarRating initial={4} />
      </div>
    </Link>
  );
}
