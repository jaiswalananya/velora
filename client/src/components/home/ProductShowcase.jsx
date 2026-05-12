import Container from "../ui/Container";
import { FiStar, FiShoppingBag } from "react-icons/fi";

const products = [
  {
    id: 1,
    category: "AI Audio",
    name: "Neural Sound Headphones",
    price: "₹24,999",
    rating: "4.9",
    badge: "AI Recommended",
  },
  {
    id: 2,
    category: "Luxury Wearables",
    name: "Velora Smart Watch",
    price: "₹18,499",
    rating: "4.8",
    badge: "Trending",
  },
  {
    id: 3,
    category: "Gaming",
    name: "Quantum Gaming Console",
    price: "₹54,999",
    rating: "5.0",
    badge: "Best Seller",
  },
  {
    id: 4,
    category: "Smart Living",
    name: "AI Home Assistant",
    price: "₹12,999",
    rating: "4.7",
    badge: "Editor's Pick",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-24 bg-[#FAFAF9]">

      <Container>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

          <div>

            <p className="text-[#C8A96B] uppercase tracking-[0.25em] text-sm mb-4 font-medium">
              Featured Products
            </p>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-[#111827] max-w-3xl">
              Curated Premium Products Powered By AI
            </h2>

          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">

            <button className="px-6 py-3 rounded-full bg-[#111827] text-white font-medium">
              All
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-[#111827] hover:text-white transition">
              AI Picks
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-[#111827] hover:text-white transition">
              Trending
            </button>

            <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-[#111827] hover:text-white transition">
              Smart Devices
            </button>

          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {products.map((product) => (

            <div
              key={product.id}
              className="group bg-white rounded-[2rem] p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition duration-500 border border-gray-100"
            >

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-[1.7rem] h-[280px] bg-gradient-to-br from-[#E7D7B1] via-[#F4EFE4] to-[#DCEEFF] flex items-center justify-center">

                {/* AI Badge */}
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-xs font-semibold text-[#111827] shadow-sm">
                  {product.badge}
                </div>

                {/* Fake Product Shape */}
                <div className="w-40 h-40 rounded-full bg-white/40 blur-2xl absolute" />

                <div className="w-32 h-32 rounded-[2rem] border border-white/50 bg-white/20 backdrop-blur-xl rotate-12 group-hover:rotate-0 transition duration-500" />

              </div>

              {/* Content */}
              <div className="pt-6">

                <p className="text-sm uppercase tracking-wide text-[#C8A96B] font-medium mb-3">
                  {product.category}
                </p>

                <h3 className="text-2xl font-bold text-[#111827] leading-snug mb-4">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">

                  <FiStar className="text-[#C8A96B] fill-[#C8A96B]" />

                  <span className="text-gray-600 font-medium">
                    {product.rating}
                  </span>

                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between">

                  <h4 className="text-2xl font-bold text-[#111827]">
                    {product.price}
                  </h4>

                  <button className="w-14 h-14 rounded-2xl bg-[#111827] text-white flex items-center justify-center hover:bg-[#C8A96B] transition duration-300">

                    <FiShoppingBag className="text-xl" />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}