import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-offWhite">
      <h1 className="text-4xl font-bold text-tealDark mb-4">Book Summary & Review Blog</h1>
      <p className="text-tealDark mb-8">
        Discover recent books with summaries, reviews, and insights.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Book 1 */}
        <div className="p-6 bg-yellowSoft rounded shadow hover:shadow-lg transition">
          <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
            <Image
              src="/Atomic_habits.jpg"  // local or remote image
              alt="Atomic Habits"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-tealDark font-semibold text-xl mb-2">Atomic Habits</h2>
          <p className="text-tealDark">A book on building good habits and breaking bad ones.</p>
        </div>

        {/* Book 2 */}
        <div className="p-6 bg-redCoral rounded shadow hover:shadow-lg transition">
          <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
            <Image
              src="/project-hail-mary.webp"
              alt="Project Hail Mary"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-offWhite font-semibold text-xl mb-2">Project Hail Mary</h2>
          <p className="text-offWhite">Sci-fi adventure about a lone astronaut saving humanity.</p>
        </div>

        {/* Book 3 */}
        <div className="p-6 bg-turquoise rounded shadow hover:shadow-lg transition">
          <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
            <Image
              src="/midnight-library.webp"
              alt="The Midnight Library"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="text-tealDark font-semibold text-xl mb-2">The Midnight Library</h2>
          <p className="text-tealDark">A story exploring alternate lives and choices.</p>
        </div>
      </div>
    </main>
  );
}
