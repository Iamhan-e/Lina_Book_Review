// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","600","700"] });

export const metadata = { title: "Book Review Blog", description: "Summaries and reviews" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-offWhite text-tealDark`}>
        {/* header/footer + main (see next step for header code) */}
        {children}
      </body>
    </html>
  );
}
