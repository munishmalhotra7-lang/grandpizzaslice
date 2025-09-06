export default function GalleryPage() {
  const gallery = [
    { id: 1, title: "Cheese Burst Pizza", img: "https://source.unsplash.com/400x300/?pizza" },
    { id: 2, title: "Garlic Bread", img: "https://source.unsplash.com/400x300/?garlic-bread" },
    { id: 3, title: "Veggie Pizza", img: "https://source.unsplash.com/400x300/?veg-pizza" },
    { id: 4, title: "Soft Drinks", img: "https://source.unsplash.com/400x300/?coke" },
    { id: 5, title: "Fries", img: "https://source.unsplash.com/400x300/?fries" },
    { id: 6, title: "Brownie", img: "https://source.unsplash.com/400x300/?brownie" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">📸 Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <div key={item.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover hover:scale-105 transition" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
