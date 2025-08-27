import "./globals.css";
import Link from "next/link";

export const metadata = { title: "Book Review Blog", description: "Summaries and reviews of recent books" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-offWhite">
        {/* Header */}
        <header className="bg-tealDark text-offWhite p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="font-bold text-2xl text-yellowSoft">Book Review Blog</h1>
            <div className="space-x-6">
              <Link href="/" className="hover:text-turquoise">Home</Link>
              <Link href="/about" className="hover:text-turquoise">About</Link>
              <Link href="/contact" className="hover:text-turquoise">Contact</Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="container mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-tealDark text-offWhite p-4 text-center mt-12">
          © {new Date().getFullYear()} Book Review Blog
        </footer>
      </body>
    </html>
  );
}
