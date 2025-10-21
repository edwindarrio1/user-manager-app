import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "User Directory",
  description: "A stylish Next.js app with formatted user data",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen text-gray-100`}
      >
        <ReactQueryProvider>
          {/* 🔹 Background Image */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage:
                "url('https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png')",
            }}
          />
          <div className="absolute inset-0 -z-10 bg-black/60" />

          {/* 🔹 Navigation Bar */}
          <header className="backdrop-blur-md bg-indigo-800/60 text-white shadow-md sticky top-0 z-20">
            <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
              <h1 className="text-2xl font-bold tracking-tight">
                <Link href="/" className="hover:text-indigo-200 transition-colors">
                  ⚙️ User Manager
                </Link>
              </h1>

              <div className="flex space-x-6 text-lg">
                <Link href="/" className="hover:text-indigo-200 transition-colors duration-200">
                  🏠 Home
                </Link>
                <Link href="/about" className="hover:text-indigo-200 transition-colors duration-200">
                  ℹ️ About
                </Link>
                <Link href="/contact" className="hover:text-indigo-200 transition-colors duration-200">
                  📬 Contact
                </Link>
                <Link href="/users" className="hover:text-indigo-200 transition-colors duration-200">
                  👥 Users
                </Link>
              </div>
            </nav>
          </header>

          {/* 🔹 Page Content */}
          <main className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-6xl bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-6 md:p-10 text-white">
              {children}
            </div>
          </main>

          {/* 🔹 Footer */}
          <footer className="bg-black/60 backdrop-blur-sm text-white text-center py-4 mt-8">
            <p className="text-sm">
              © {new Date().getFullYear()} Edwin User Manager. All rights reserved.
            </p>
          </footer>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
