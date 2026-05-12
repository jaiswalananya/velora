import Container from "../ui/Container";
import {
  FiSearch,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">

      {/* Background Orbs */}
      <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-[#E5D3B3] rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-[#D6D3D1] rounded-full blur-3xl opacity-40"></div>

      <Container>

        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#E7E5E4] bg-white shadow-sm">

              <FiStar className="text-[#C8A96B]" />

              <span className="text-sm font-medium text-gray-700">
                AI Powered Shopping Experience
              </span>

            </div>

            {/* Heading */}
            <h1 className="mt-8 text-6xl lg:text-7xl leading-[1.05] font-bold tracking-tight text-[#111827]">

              Discover
              <br />

              Luxury Shopping
              <br />

              <span className="text-[#C8A96B]">
                Reimagined
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">

              Velora combines artificial intelligence with
              premium ecommerce to create a deeply personalized,
              elegant, and futuristic shopping experience.

            </p>

            {/* AI Search Bar */}
            <div className="mt-10 bg-white border border-[#E7E5E4] rounded-2xl p-3 shadow-xl flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-[#111827] flex items-center justify-center text-white text-xl">
                  <FiSearch />
                </div>

                <div>

                  <p className="text-sm text-gray-400">
                    Try AI Shopping
                  </p>

                  <p className="font-medium text-gray-700">
                    “Luxury watches under ₹20,000”
                  </p>

                </div>

              </div>

              <button className="w-12 h-12 rounded-xl bg-[#111827] text-white flex items-center justify-center hover:bg-[#1F2937] transition">

                <FiArrowRight />

              </button>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">

              <button className="px-8 py-4 rounded-full bg-[#111827] text-white font-medium hover:bg-[#1F2937] transition shadow-lg">

                Explore Collection

              </button>

              <button className="px-8 py-4 rounded-full border border-[#E7E5E4] bg-white font-medium hover:bg-[#F5F5F4] transition">

                AI Assistant

              </button>

            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">

            {/* Floating Card 1 */}
            <div className="absolute -top-8 -left-10 bg-white rounded-2xl p-5 shadow-xl border border-[#E7E5E4] z-20">

              <p className="text-sm text-gray-500">
                AI Recommendation
              </p>

              <h4 className="mt-2 font-semibold">
                Premium Leather Collection
              </h4>

            </div>

            {/* Main Product Card */}
            <div className="relative bg-white rounded-[36px] p-8 shadow-2xl border border-[#E7E5E4]">

              {/* Top */}
              <div className="flex items-center justify-between">

                <div>

                  <p className="text-gray-500 text-sm">
                    Featured Product
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    Smart AI Headphones
                  </h3>

                </div>

                <span className="px-4 py-2 rounded-full bg-[#F5F5F4] text-[#C8A96B] text-sm font-medium">

                  AI Curated

                </span>

              </div>

              {/* Product Visual */}
              <div className="mt-10 h-[420px] rounded-[32px] bg-gradient-to-br from-[#E5D3B3] via-[#F5F5F4] to-[#D6D3D1]"></div>

            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-10 right-[-30px] bg-[#111827] text-white rounded-2xl p-6 shadow-2xl z-20">

              <p className="text-sm text-gray-400">
                Personalized Picks
              </p>

              <h4 className="mt-2 text-xl font-semibold">
                98% Match
              </h4>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}