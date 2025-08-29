// components/BookCard.tsx
import Link from "next/link";
import Image from "next/image";

interface Props {
  slug: string;
  title: string;
  cover?: string;
  bg?: string; // optional background color class
}

export default function BookCard({ slug, title, cover, bg = "bg-yellowSoft" }: Props) {
  return (
    <Link href={`/books/${slug}`} className={`${bg} block p-5 rounded-lg shadow hover:shadow-lg transition no-underline`}>
      <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
        {cover ? (
          <Image src={cover} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-tealDark flex items-center justify-center text-offWhite">No Image</div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-tealDark">{title}</h3>
    </Link>
  );
}
