"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import InstagramGrid from "../components/InstagramGrid";

type Review = {
  name: string;
  rating: number; // 1-5
  text: string;
};

export default function HomePage(): JSX.Element {
  const slides = [
    { id: 1, title: "Hot & Fresh Pizzas", subtitle: "Made with love in Akhnoor", img: "/hero.jpg" },
    { id: 2, title: "New Flavors Everyday", subtitle: "Try our chef specials", img: "/pizza1.jpg" },
    { id: 3, title: "Crispy Thin Crust", subtitle: "Light, cheesy, perfect", img: "/pizza2.jpg" },
  ];

  const reviews: Review[] = [
    {
      name: "Rahul Sharma",
      rating: 5,
      text: "Best pizza in Akhnoor! Fresh and cheesy, absolutely loved the taste.",
    },
    {
      name: "Priya K.",
      rating: 5,
      text: "Amazing flavours — tried the peri-peri and it was awesome. Delivery fast too!",
    },
    {
      name: "Amit Verma",
      rating: 4,
      text: "Good portions and good pricing. Will order again.",
    },
  ];

  const renderStars = (n: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 inline-block mr-0.5 ${i < n ? "text-yellow-400" : "text-gray-600"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.958c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.37 2.448c-.785.57-1.84-.197-1.54-1.118l1.286-3.958a1 1 0 00-.364-1.118L2.642 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.958z" />
        </svg>
      );
    }
    return <span className="inline-flex items-center">{stars}</span>;
  };

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      {/* Top nav / header */}
      <header className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-700">
            <Image src="/logo.png" alt="Grand Pizza Slice" fill sizes="48px" style={{ objectFit: "cover" }} />
          </div>
          <div>
            <h1 className="text-xl font-bold">Grand Pizza Slice</h1>
            <p className="text-xs text-gray-400">Best Pizza in Akhnoor</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/menu" className="hover:text-white">Menu</Link>
          <Link href="/gallery" className="hover:text-white">Gallery</Link>
          <Link href="/franchise" className="hover:text-white">Franchise</Link>
          <Link href="/contact" className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md font-semibold">Order Now</Link>
        </nav>

        {/* mobile menu button (simple) */}
        <div className="md:hidden">
          <Link href="/menu" className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-md font-semibold">Menu</Link>
        </div>
      </header>

      {/* Hero slider */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            className="rounded-xl"
          >
            {slides.map((s) => (
              <SwiperSlide key={s.id}>
                <div className="relative w-full h-[420px] md:h-[520px] flex items-center">
                  <Image src={s.img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: "cover" }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

                  <div className="relative z-10 max-w-4xl px-6 md:px-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold">{s.title}</h2>
                    <p className="mt-2 text-gray-300 max-w-lg">{s.subtitle}</p>

                    <div className="mt-6 flex gap-3">
                      <Link href="/menu" className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md font-semibold shadow">See Menu</Link>
                      <Link href="/contact" className="border border-gray-600 px-4 py-2 rounded-md text-gray-200 hover:bg-white/5">Contact / Order</Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Quick features / highlights */}
      <section className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-gray-800 rounded-lg flex items-start gap-4">
          <div className="w-12 h-12 rounded-md bg-yellow-500 flex items-center justify-center font-bold text-gray-900">B</div>
          <div>
            <h3 className="font-semibold">Best Ingredients</h3>
            <p className="text-sm text-gray-400">Fresh dough, real cheese, premium toppings.</p>
          </div>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg flex items-start gap-4">
          <div className="w-12 h-12 rounded-md bg-yellow-500 flex items-center justify-center font-bold text-gray-900">D</div>
          <div>
            <h3 className="font-semibold">Fast Delivery</h3>
            <p className="text-sm text-gray-400">Hot pizza delivered fast in Akhnoor and nearby areas.</p>
          </div>
        </div>

        <div className="p-4 bg-gray-800 rounded-lg flex items-start gap-4">
          <div className="w-12 h-12 rounded-md bg-yellow-500 flex items-center justify-center font-bold text-gray-900">O</div>
          <div>
            <h3 className="font-semibold">Online Ordering</h3>
            <p className="text-sm text-gray-400">Order via WhatsApp or our website — simple & secure.</p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <h3 className="text-2xl font-bold">Customer Reviews</h3>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r, idx) => (
            <div key={idx} className="p-4 bg-gray-800 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-lg font-semibold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-gray-400">{renderStars(r.rating)}</div>
                </div>
              </div>

              <p className="mt-3 text-gray-300 text-sm">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram / Gallery */}
      <section className="max-w-6xl mx-auto px-4 mt-10">
        <h3 className="text-2xl font-bold">From Our Instagram</h3>
        <p className="text-sm text-gray-400 mt-1">Tag us @grandpizzaslice to get featured</p>

        <div className="mt-4">
          {/* InstagramGrid should handle its own layout; keep container dark */}
          <div className="bg-transparent rounded-lg">
            <InstagramGrid />
          </div>
        </div>
      </section>

      {/* Call to action strip */}
      <section className="mt-10 bg-gradient-to-r from-gray-800 to-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-bold">Order a pizza now — hot & fresh!</h4>
            <p className="text-sm text-gray-400">WhatsApp orders available. Quick delivery in Akhnoor.</p>
          </div>

          <div className="flex gap-3">
            <a href="https://wa.me/919103399555" target="_blank" rel="noreferrer" className="bg-green-600 px-4 py-2 rounded-md font-semibold">WhatsApp Order</a>
            <Link href="/menu" className="border border-gray-700 px-4 py-2 rounded-md text-gray-200">See Menu</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-800 pt-6 pb-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h5 className="font-bold">Grand Pizza Slice</h5>
            <p className="text-sm text-gray-400">Akhnoor, Jammu — Open daily 11:00 - 23:00</p>
            <p className="text-sm text-gray-400 mt-2">Call / WhatsApp: +91 91033 99555</p>
          </div>

          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy</Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms</Link>
            <Link href="/franchise" className="text-sm text-gray-400 hover:text-white">Franchise</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
