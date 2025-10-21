"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [activeUsers, setActiveUsers] = useState(0);

  // 🔹 Animate counter from 0 → 1024
  useEffect(() => {
    let start = 0;
    const end = 1024;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setActiveUsers(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-10">
      {/* 🔹 Header Section */}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Welcome to <span className="text-indigo-300">User Manager</span>
        </h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">
          A simple and elegant platform to manage users, explore details, and
          keep everything organized beautifully.
        </p>
      </section>

      {/* 🔹 Hero Buttons */}
      <section className="flex flex-wrap justify-center gap-6">
        <Link
          href="/users"
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          View Users
        </Link>
        <Link
          href="/about"
          className="bg-white/10 hover:bg-white/20 text-indigo-200 font-semibold py-2.5 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Learn More
        </Link>
        <Link
          href="/contact"
          className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-semibold py-2.5 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Contact Us
        </Link>
      </section>

      {/* 🔹 Info / Features Section */}
      <section className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/10">
        <h2 className="text-3xl font-semibold text-indigo-100 mb-6 text-center">
          Why Choose User Manager?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-indigo-200">
          <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 transition-colors">
            <h3 className="text-xl font-semibold text-indigo-100 mb-2">
              🔒 Secure & Reliable
            </h3>
            <p>Your data is safe and accessible at all times with industry-grade security protocols.</p>
          </div>
          <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 transition-colors">
            <h3 className="text-xl font-semibold text-indigo-100 mb-2">
              ⚡ Fast & Intuitive
            </h3>
            <p>Enjoy a smooth and responsive interface designed for speed and usability.</p>
          </div>
          <div className="bg-white/5 hover:bg-white/10 rounded-2xl p-6 border border-white/10 transition-colors">
            <h3 className="text-xl font-semibold text-indigo-100 mb-2">
              💡 Smart Insights
            </h3>
            <p>Get valuable analytics and insights on your users to make better decisions.</p>
          </div>
        </div>
      </section>

      {/* 🔹 Stats / Demo Section */}
      <section className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/10 text-center">
        <h2 className="text-2xl font-semibold text-indigo-100 mb-6">
          Quick Overview
        </h2>

        <div className="grid sm:grid-cols-3 gap-8 text-indigo-100">
          {/* 🔹 Animated Counter */}
          <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition">
            <p className="text-4xl font-bold text-indigo-300 mb-2 animate-pulse">
              {activeUsers.toLocaleString()}+
            </p>
            <p className="text-indigo-200">Active Users</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition">
            <p className="text-4xl font-bold text-indigo-300 mb-2">58</p>
            <p className="text-indigo-200">Projects Managed</p>
          </div>

          <div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition">
            <p className="text-4xl font-bold text-indigo-300 mb-2">12</p>
            <p className="text-indigo-200">Teams Connected</p>
          </div>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="text-center text-indigo-200 mt-12 text-sm">
        <p>
          © {new Date().getFullYear()} User Manager. Built with ❤️ using
          Next.js and TailwindCSS.
        </p>
      </footer>
    </div>
  );
}
