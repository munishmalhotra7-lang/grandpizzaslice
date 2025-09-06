"use client";

export default function FranchisePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white">
      {/* HERO SECTION */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/franchise-hero.jpg')",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4">
            Franchise With Grand Pizza Slice 🍕
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Join our growing family and bring happiness to your city with our
            proven business model, authentic taste and unmatched support.
          </p>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center border border-yellow-400 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12">
          Why Partner With Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">📈 High ROI</h3>
            <p className="text-gray-300">
              Low investment with high returns. Expand your business with a
              trusted pizza brand.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">👨‍🍳 Full Support</h3>
            <p className="text-gray-300">
              Staff training, kitchen setup, marketing and ongoing support.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3">🤝 Strong Brand</h3>
            <p className="text-gray-300">
              Recognized pizza brand with growing demand across India.
            </p>
          </div>
        </div>
      </section>

      {/* FRANCHISE PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12 text-center">
          Franchise Process
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">1️⃣ Apply</h3>
            <p className="text-gray-300">Submit your franchise enquiry form.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">2️⃣ Discussion</h3>
            <p className="text-gray-300">Investment and location planning.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">3️⃣ Setup</h3>
            <p className="text-gray-300">We help build and train your outlet.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">4️⃣ Launch</h3>
            <p className="text-gray-300">Grand opening with full support.</p>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="max-w-3xl mx-auto px-6 py-16 border border-yellow-400 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
          Apply For Franchise
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          <textarea
            placeholder="Your City & Investment Budget"
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-yellow-400 outline-none h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </section>
    </main>
  );
}
