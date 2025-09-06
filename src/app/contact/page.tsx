"use client";

import Link from "next/link";

export default function ContactPage() {

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
      <section className="text-center py-16 px-6 bg-gradient-to-r from-red-600 to-red-800">
        <h1 className="text-5xl font-extrabold text-yellow-300 drop-shadow-lg mb-4">
          Get in Touch 🍕
        </h1>
        <p className="text-gray-100 max-w-2xl mx-auto text-lg">
          Have questions about our pizzas, orders, or franchise?  
          We’d love to hear from you!
        </p>
      </section>

      {/* CONTACT INFO + MAP */}
      <section className="grid md:grid-cols-2 gap-10 px-8 py-16 max-w-6xl mx-auto">
        {/* Left Side - Info */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-yellow-400">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Our Outlet</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              📍 <span className="text-white font-semibold">Grand Pizza Slice</span>, Akhnoor, Jammu
            </li>
            <li>📞 <span className="text-white">+91 9103399555</span></li>
            <li>
              ✉️ Franchise Enquiry:{" "}
              <a
                href="mailto:contact@grandpizzaslice.in"
                className="text-red-400 underline hover:text-red-300"
              >
                contact@grandpizzaslice.in
              </a>
            </li>
          </ul>

          {/* ⭐ Ratings Badges */}
          <div className="flex flex-wrap gap-4 mt-8">
            {/* Google Rating */}
            <a
              href="https://maps.app.goo.gl/hz1ZxdfcU6FEixaT6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg font-bold text-white shadow-lg transition transform hover:scale-105"
            >
              ⭐ 4.5 on Google
            </a>

            {/* Zomato Rating */}
            <a
              href="https://www.zomato.com/jammu/grand-pizza-slice-akhnoor"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 px-5 py-3 rounded-lg font-bold text-white shadow-lg transition transform hover:scale-105"
            >
              ⭐ 4.4 on Zomato
            </a>

            {/* Justdial Rating */}
            <a
              href="https://www.justdial.com/Jammu/Grand-Pizza-Slice-Near-GurudwaraOpposite-KK-Gym-Akhnoor/9999PX191-X191-220316203326-S6N3_BZDET"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-bold text-white shadow-lg transition transform hover:scale-105"
            >
              ⭐ 4.5 on Justdial
            </a>
          </div>

          {/* 🔥 Zomato Button */}
          <div className="mt-8 text-center">
            <a
              href="https://www.zomato.com/jammu/grand-pizza-slice-akhnoor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold shadow-lg text-lg transition transform hover:scale-105"
            >
              🍕 Order Online on Zomato
            </a>
          </div>
        </div>

        {/* Right Side - Map */}
        <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-400">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.9917996212243!2d74.74373857489799!3d32.89838507361311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e6398673c0f97%3A0xd7bf82d0f330291d!2sGrand%20Pizza%20Slice!5e0!3m2!1sen!2sin!4v1757077911489!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <h2 className="text-3xl font-bold mb-4 text-black">Want to Partner With Us?</h2>
        <p className="text-black mb-6 font-medium">
          Join the Grand Pizza Slice family and start your own outlet today!
        </p>
        <a
          href="mailto:contact@grandpizzaslice.in"
          className="bg-black text-yellow-400 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-gray-800 transition"
        >
          Enquire Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-gray-950 text-center">
        <p className="mb-4">© 2025 Grand Pizza Slice. All Rights Reserved.</p>
        <a
          href="https://www.zomato.com/jammu/grand-pizza-slice-akhnoor"
          target="_blank"
          rel="noreferrer"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Order on Zomato
        </a>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919103399555"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110"
      >
        💬
      </a>
    </main>
  );
}

