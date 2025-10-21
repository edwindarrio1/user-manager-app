"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white relative overflow-hidden">
      {/* 🔹 Animated glowing orbs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* 🔹 Floating glowing particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute w-3 h-3 bg-indigo-300/30 rounded-full top-1/3 left-1/2 animate-[float_5s_ease-in-out_infinite]" />
        <div className="absolute w-2 h-2 bg-purple-300/30 rounded-full top-2/3 right-1/3 animate-[float_7s_ease-in-out_infinite]" />
      </div>

      {/* 🔹 Main glass card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/10 text-center max-w-lg w-full transform transition-all animate-fadeIn">
        {/* Title */}
        <h1 className="text-6xl font-extrabold text-indigo-300 mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-indigo-200 mb-8">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-indigo-500/30"
        >
          ← Go Back Home
        </Link>
      </div>

      {/* 🔹 Custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}
