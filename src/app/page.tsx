"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import InstagramGrid from "../components/InstagramGrid";


export default function HomePage(): JSX.Element {
  const reviews = [
    {
      name: "Rahul Sharma",
      rating: "⭐ ⭐ ⭐ ⭐ ⭐",
      text: "Best pizza in Akhnoor! Fresh and cheesy, absolutely loved the taste.",
    },
    {
      name: "Simran Kaur",
      rating: "⭐ ⭐ ⭐ ⭐",
      text: "Quick delivery and great taste. The garlic bread is my favorite!",
    },
    {
      name: "Arjun Verma",
      rating: "⭐ ⭐ ⭐ ⭐ ⭐",
      text: "Grand Pizza Slice never disappoints. Must try the Chef Special Pizza!",
    },
    {
      name: "Priya Gupta",
      rating: "⭐ ⭐ ⭐ ⭐",
      text: "Great experience, tasty food and friendly service.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#071022] text-white pt-20">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-xl text-yellow-400">
            Grand Pizza Slice
          </Link>
          <nav className="space-x-6 hidden md:block">
            <Link href="/" className="hover:text-yellow-300">Home</Link>
            <Link href="/menu" className="hover:text-yellow-300">Menu</Link>
            <Link href="/about" className="hover:text-yellow-300">About</Link>
            <Link href="/franchise" className="hover:text-yellow-300">Franchise</Link>
            <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
          </nav>
          <div className="md:hidden">
            <Link
              href="/menu"
              className="px-3 py-2 bg-yellow-500 text-black rounded-md text-sm font-semibold"
            >
              Menu
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,6,23,0.7), rgba(2,6,23,0.7)), url('/hero-pizza.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-40 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
            Welcome
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Grand Pizza Slice
          </h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-8 text-lg">
            Fresh dough, house-made sauces and the boldest flavours —
            delivered hot to your doorstep from our kitchen in Jammu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition transform hover:scale-105"
            >
              View Menu
            </a>
            <Link
              href="/franchise"
              className="px-8 py-3 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition font-semibold shadow-lg"
            >
              Franchise Info
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why choose <span className="text-yellow-400">Grand Pizza Slice</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl text-center border border-gray-700 hover:border-yellow-400 hover:shadow-xl transition transform hover:scale-105">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-400">
              Hot pizzas delivered quickly to your door.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl text-center border border-gray-700 hover:border-yellow-400 hover:shadow-xl transition transform hover:scale-105">
            <div className="text-5xl mb-4">🧀</div>
            <h3 className="text-xl font-semibold mb-2">Premium Ingredients</h3>
            <p className="text-gray-400">
              Real cheese, fresh veggies and handcrafted sauces.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl text-center border border-gray-700 hover:border-yellow-400 hover:shadow-xl transition transform hover:scale-105">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Franchise Ready</h3>
            <p className="text-gray-400">
              Support, training and marketing for partners.
            </p>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="bg-[#101726] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Best Sellers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-yellow-400 hover:shadow-2xl transition transform hover:scale-105">
              <img
                src="/best1.jpg"
                alt="Chef Special Pizza"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-2">Chef Special Pizza</h3>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-yellow-400 hover:shadow-2xl transition transform hover:scale-105">
              <img
                src="/best2.jpg"
                alt="Cheese & Corn Pizza"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-2">Cheese & Corn Pizza</h3>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 hover:border-yellow-400 hover:shadow-2xl transition transform hover:scale-105">
              <img
                src="/best3.jpg"
                alt="Cheese Sandwich"
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-xl mb-2">Cheese Sandwich</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="bg-[#0f172a] py-16 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-yellow-400">
            What Our Customers Say
          </h2>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 4000 }}
            modules={[Autoplay]}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-900 p-8 rounded-xl shadow-lg border border-yellow-400 max-w-2xl mx-auto">
                  <p className="text-lg mb-4 italic">“{review.text}”</p>
                  <div className="font-bold text-yellow-400">{review.rating}</div>
                  <div className="mt-2 text-gray-300">- {review.name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* INSTAGRAM GRID */}
      <InstagramGrid />

      {/* CTA SECTION */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <h2 className="text-3xl font-bold mb-4 text-black">Love Pizza? 🍕</h2>
        <p className="text-black mb-6 font-medium">
          Order now and taste the best pizza in Jammu!
        </p>
        <a
          href="https://www.zomato.com/jammu/grand-pizza-slice-akhnoor"
          target="_blank"
          rel="noreferrer"
          className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-800 transition"
        >
          Order on Zomato
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-gray-950 text-center border-t border-gray-800">
        <p className="mb-4 text-gray-400">
          © 2025 Malhotra Technologies Pvt Ltd. All Rights Reserved.
        </p>
        <a
          href="https://www.zomato.com/jammu/grand-pizza-slice-akhnoor"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Order on Zomato
        </a>
      </footer>
    </main>
  );
}
