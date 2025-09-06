"use client";

import Link from "next/link";

export default function InstagramGrid() {

  const images = [
    "/insta1.jpg",
    "/insta2.jpg",
    "/insta3.jpg",
    "/insta4.jpg",
    "/insta5.jpg",
    "/insta6.jpg",
  ];

  return (
    <section className="py-12 bg-[#071022] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-yellow-400">Follow Us on Instagram</h3>
          <Link
            href="https://www.instagram.com/grandpizzaslice/"
            target="_blank"
            className="text-sm text-gray-300 hover:underline"
          >
            Visit our Instagram →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {images.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/grandpizzaslice/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition"
              aria-label={`Instagram post ${i + 1}`}
            >
              <img
                src={src}
                alt={`Grand Pizza Slice Instagram ${i + 1}`}
                className="w-full h-40 md:h-32 lg:h-40 object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

