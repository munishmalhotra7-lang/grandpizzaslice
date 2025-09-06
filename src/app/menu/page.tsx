"use client";

export default function MenuPage() {

  return (
    <main className="min-h-screen bg-[#0a0f1c] text-white py-12 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-12 text-yellow-400 drop-shadow-lg">
        Our Menu
      </h1>

      <div className="space-y-16 max-w-6xl mx-auto">
        {/* Category Component */}
        {[
          {
            title: "🍕 Pizzas",
            items: [
              { img: "/pizza1.jpg", name: "Margherita", price: "₹0" },
              { img: "/pizza2.jpg", name: "Veggie Delight", price: "₹0" },
              { img: "/pizza3.jpg", name: "Paneer Pizza", price: "₹0" },
            ],
          },
          {
            title: "🥖 Garlic Bread",
            items: [
              { img: "/garlic1.jpg", name: "Classic Garlic Bread", price: "₹0" },
              { img: "/garlic2.jpg", name: "Cheesy Garlic Bread", price: "₹0" },
            ],
          },
          {
            title: "🥪 Sandwiches",
            items: [
              { img: "/sandwich1.jpg", name: "Veg Sandwich", price: "₹0" },
              { img: "/sandwich2.jpg", name: "Cheese Sandwich", price: "₹0" },
            ],
          },
          {
            title: "🍝 Pastas",
            items: [
              { img: "/pasta1.jpg", name: "White Sauce Pasta", price: "₹0" },
              { img: "/pasta2.jpg", name: "Red Sauce Pasta", price: "₹0" },
            ],
          },
          {
            title: "🥤 Beverages",
            items: [
              { img: "/beverage1.jpg", name: "Cold Drink", price: "₹0" },
              { img: "/beverage2.jpg", name: "Iced Coffee", price: "₹0" },
            ],
          },
          {
            title: "🍰 Desserts",
            items: [
              { img: "/dessert1.jpg", name: "Chocolate Brownie", price: "₹0" },
              { img: "/dessert2.jpg", name: "Choco Lava Cake", price: "₹0" },
            ],
          },
        ].map((cat, i) => (
          <section
            key={i}
            className="border-2 border-yellow-400 rounded-2xl shadow-xl p-8 hover:shadow-yellow-500/40 transition"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-8 border-b-2 border-yellow-400 inline-block pb-1">
              {cat.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {cat.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-yellow-400 hover:shadow-lg transition transform hover:scale-105"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-400 mb-4">{item.price}</p>
                  <a
                    href="https://www.zomato.com/jammu/grand-pizza-slice-akhnoor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md transition transform hover:scale-105"
                  >
                    Order on Zomato
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

