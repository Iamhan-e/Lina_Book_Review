import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left side: Image */}
      <div className="w-1/2 relative">
        <Image
          src="/bookshelf.jpg" // replace with your image
          alt="Lina reading"
          fill
          className="object-cover opacity-80"
        />
      </div>

      {/* Right side: Text */}
      <div className="w-1/2 p-12 flex flex-col  gap-6 text-[#1a535c]">
        <h1 className="text-4xl font-bold mb-4">About Lina Book Reviews</h1>
        <p className="text-[#3a506b]">
          Hi, I’m <b>Lina</b>, a dedicated reader who enjoys sharing my thoughts on the books I read. Welcome to Lina’s Book Reviews, where I provide honest and detailed reviews to help guide fellow book enthusiasts.
        </p>
        <p>
          Each review reflects my genuine opinions and includes a concise summary, a cover image, and a star rating to give you a quick sense of my take on the book. Whether it’s a thriller, romance, or classic, I aim to offer clear insights into what makes each book worth reading—or not.
        </p>
        <p>
         I hope my reviews help you find books that spark your interest and add something special to your reading list. Join me as we explore the world of books together!
        </p>
      </div>
    </main>
  );
}
