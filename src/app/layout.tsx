import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grand Pizza Slice | Best Pizza in Jammu",
  description:
    "Grand Pizza Slice - Serving fresh, cheesy and irresistible pizzas in Akhnoor, Jammu. Order online on Zomato or visit us today!",
  keywords: [
    "Grand Pizza Slice",
    "Best Pizza in Jammu",
    "Pizza Akhnoor",
    "Zomato Pizza Jammu",
    "Cheese Pizza",
  ],
  openGraph: {
    title: "Grand Pizza Slice | Best Pizza in Jammu",
    description:
      "Serving fresh, cheesy and irresistible pizzas in Akhnoor, Jammu. Order online or visit us today!",
    url: "https://www.grandpizzaslice.in",
    siteName: "Grand Pizza Slice",
    images: [
      {
        url: "/hero-pizza.jpg",
        width: 1200,
        height: 630,
        alt: "Grand Pizza Slice - Best Pizza in Jammu",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#071022] text-white">
        {/* Main Content */}
        {children}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919103399555"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl transition transform hover:scale-110 z-50"
        >
          💬
        </a>

        {/* Floating Zomato Button (Desktop) */}
        <a
          href="https://www.zomato.com/jammu/grand-pizza-slice-akhnoor"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-full shadow-xl font-bold transition transform hover:scale-110 z-50 hidden md:inline-block"
        >
          🍕 Order on Zomato
        </a>

        {/* Sticky Mobile Zomato Button (Only on Mobile) */}
        <a
          href="https://www.zomato.com/jammu/grand-pizza-slice-akhnoor"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-0 left-0 right-0 bg-red-600 text-white text-center py-3 font-bold shadow-lg z-50 md:hidden"
        >
          🍕 Order Now on Zomato
        </a>
      </body>
    </html>
  );
}

