export default function Home(){
  return(
     <main className="min-h-screen p-6 bg-[#1a535c]">
      <h1 className="text-4xl font-bold text-[#f7fff7]">Book Summary & Review Blog</h1>
      <p className="mt-4 text-[#4ecdc4]">Discover recent books with summaries, reviews, and insights.</p>

      {/* Placeholder for book posts */}
      <div className="mt-8 space-y-4">
        <div className="p-4 bg-white rounded shadow">Book 1: Atomic Habits</div>
        <div className="p-4 bg-white rounded shadow">Book 2: Project Hail Mary</div>
        <div className="p-4 bg-white rounded shadow">Book 3: The Midnight Library</div>
      </div>
    </main>
  )
}