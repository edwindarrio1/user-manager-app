"use client";

import ButtonComponent from "../button";

export default function About() {
  console.log("hello there server or client");

  return (
    <div className="space-y-10">
      {/* 🔹 Page Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          About <span className="text-indigo-300">User Manager</span>
        </h1>
        <p className="text-indigo-200 max-w-2xl mx-auto">
          User Manager is a sleek and simple app built with Next.js to help you
          manage users efficiently — view, edit, and connect with them through a
          clean and modern interface.
        </p>
      </section>

      {/* 🔹 About Cards */}
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {
            title: "🚀 Built with Next.js",
            text: "Leverages the power of Next.js App Router, server-side rendering, and caching for optimal performance.",
          },
          {
            title: "🎨 Designed with Tailwind CSS",
            text: "Crafted using Tailwind’s utility-first design system for fast, responsive UI development.",
          },
          {
            title: "🧠 Smart and Scalable",
            text: "Built with flexibility in mind — add features, connect APIs, or enhance with databases easily.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-indigo-100 mb-2">
              {card.title}
            </h3>
            <p className="text-indigo-200 text-sm">{card.text}</p>
          </div>
        ))}
      </section>

      {/* 🔹 CTA Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-indigo-100 mb-4">
          Want to learn more or contribute?
        </h2>
        <p className="text-indigo-200 mb-6">
          We're always improving this project. You can explore more pages or
          start managing users right away.
        </p>

        <div className="flex justify-center">
          <ButtonComponent />
        </div>
      </section>
    </div>
  );
}
