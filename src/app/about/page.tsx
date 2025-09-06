// src/app/about/page.tsx
"use client";

export default function AboutPage() {

  return (
    <main className="min-h-screen bg-[#071022] text-white">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(3,7,18,0.65), rgba(3,7,18,0.65)), url('/hero-pizza.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500 mb-4">
              🍕 Grand Pizza Slice
            </h1>
            <p className="max-w-2xl mx-auto text-slate-200 text-lg md:text-xl">
              Fresh dough, signature sauces & bold flavours — made to order and delivered
              hot. Quality you trust, taste you remember.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/menu"
                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
              >
                View Menu
              </a>

              <a
                href="/franchise"
                className="inline-block px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition"
              >
                Franchise Info
              </a>

              <a
                href="https://www.zomato.com" /* replace with your order link */
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-3 bg-rose-600 rounded-lg font-semibold hover:bg-rose-500 transition"
              >
                Order Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Story */}
        <article className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400">Our Story</h2>
          <p className="text-slate-300 leading-relaxed">
            Grand Pizza Slice started with a simple idea — make great pizza using fresh
            ingredients and honest recipes. From our hand-stretched dough to house-made
            sauces, we focus on consistency and flavour in every step.
          </p>

          <p className="text-slate-300 leading-relaxed">
            We serve families, students, and pizza lovers across Jammu. Over the years we’ve
            refined our menu to include classic favourites and creative specials — always
            with the goal to deliver hot, delicious slices fast.
          </p>

          <div className="bg-[#0b1320] border border-white/6 p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Quality Promise</h3>
            <ul className="list-disc pl-5 text-slate-300 space-y-2">
              <li>Daily-made dough & fresh toppings</li>
              <li>No artificial flavours — real cheese & fresh vegetables</li>
              <li>Strict hygiene and on-time delivery</li>
            </ul>
          </div>
        </article>

        {/* Sidebar / Highlights */}
        <aside className="space-y-6">
          <div className="p-5 bg-gradient-to-br from-[#081026] to-[#071123] border border-white/6 rounded-xl shadow-lg">
            <h4 className="text-yellow-400 font-semibold mb-3">Contact</h4>
            <p className="text-slate-300">📞 +91 9103399555</p>
            <p className="text-slate-300">✉️ contact@grandpizzaslice.in</p>
            <p className="text-slate-300">📍 Jammu, India</p>
          </div>

          <div className="p-5 bg-[#071123] border border-white/6 rounded-xl shadow-lg">
            <h4 className="text-yellow-400 font-semibold mb-3">Franchise</h4>
            <p className="text-slate-300 mb-3">
              Want to join our growing family? We provide full training, operations
              support and marketing materials.
            </p>
            <a
              href="/franchise"
              className="inline-block px-4 py-2 bg-yellow-500 text-black rounded-md font-semibold hover:bg-yellow-400 transition"
            >
              Learn More
            </a>
            <div className="mt-4">
              <a
                href="/assets/franchise-deck.pdf" /* replace with your PDF path */
                className="text-slate-300 underline text-sm hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Download Franchise Deck
              </a>
            </div>
          </div>

          <div className="p-5 bg-[#071123] border border-white/6 rounded-xl shadow-lg">
            <h4 className="text-yellow-400 font-semibold mb-3">Awards & Presence</h4>
            <p className="text-slate-300 text-sm">Featured in local food blogs & growing across locations.</p>
            <a href="/outlets" className="text-slate-300 underline text-sm block mt-2">Our Outlets</a>
          </div>
        </aside>
      </section>

      {/* FEATURE CARDS */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gradient-to-br from-[#071026] to-[#081126] rounded-xl border border-white/6 shadow-lg">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Fast Delivery</h3>
            <p className="text-slate-300 text-sm">Hot & fresh — delivered on time.</p>
          </div>

          <div className="p-6 bg-gradient-to-br from-[#071026] to-[#081126] rounded-xl border border-white/6 shadow-lg">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Premium Ingredients</h3>
            <p className="text-slate-300 text-sm">Real cheese, fresh veggies & house-made sauces.</p>
          </div>

          <div className="p-6 bg-gradient-to-br from-[#071026] to-[#081126] rounded-xl border border-white/6 shadow-lg">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Franchise Support</h3>
            <p className="text-slate-300 text-sm">Training, operations & marketing to grow fast.</p>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="mt-12 bg-[#02060a] py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold">Ready to taste the best slice?</h4>
            <p className="text-slate-300 text-sm">Order now on Zomato or contact us for franchise enquiries.</p>
          </div>

          <div className="flex gap-3">
            <a href="/menu" className="px-5 py-3 bg-yellow-500 rounded-md font-semibold">View Menu</a>
            <a href="https://www.zomato.com" target="_blank" rel="noreferrer" className="px-5 py-3 bg-rose-600 rounded-md font-semibold">Order</a>
          </div>
        </div>
      </section>
    </main>
  );
}

