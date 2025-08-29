// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-tealDark text-offWhite shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-semibold text-yellowSoft no-underline">Lina's Book Review</Link>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-turquoise no-underline">Home</Link>
          <Link href="/about" className="hover:text-turquoise no-underline">About</Link>
          <Link href="/contact" className="hover:text-turquoise no-underline">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
