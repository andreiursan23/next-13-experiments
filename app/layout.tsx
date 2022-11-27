import Head from "./head";
import Link from "next/link";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Head />
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
          <Link href="/search">Search</Link>
        </nav>
        
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
